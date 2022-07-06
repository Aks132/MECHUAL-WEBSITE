window.SMOOTH_SCROLLING = 0, TweenMax.defaultEase = Quint.easeOut;
const assign = Object.assign,
    isBoolean = e => Boolean(e),
    getId = e => document.getElementById(e),
    query = (e, t = document) => t.querySelector(e),
    queryAll = (e, t = document) => Array.from(t.querySelectorAll(e)),
    toFixed = (e, t = 1e3) => {
        const a = Math.pow(10, t);
        return Math.round(e * a) / a
    };
let innerWidth = 0,
    innerHeight = 0,
    open = !1,
    PERF = 0;
const PERFS = {
        PERF_BAD: 0,
        PERF_LOW: 1,
        PERF_GOOD: 2,
        PERF_HIGH: 3
    },
    getPerfs = () => {
        let e = [],
            t = PERFS.PERF_BAD;
        const a = (window.performance || Date).now();
        for (let t = 0; t < 2e4; t++) e = Math.pow(Math.sin(Math.random()), 2);
        const n = (window.performance || Date).now() - a;
        t = deviceSettings.isTablet || deviceSettings.isIE ? PERFS.PERF_BAD : n < 5 ? PERFS.PERF_HIGH : n < 14 ? PERFS.PERF_GOOD : n < 22 ? PERFS.PERF_LOW : PERFS.PERF_BAD, navigator && navigator.connection && "4g" !== navigator.connection.effectiveType && (navigator.connection.effectiveType, t = PERFS.PERF_BAD), PERF = t;
        const o = t == PERFS.PERF_HIGH ? "PERF_HIGH" : t == PERFS.PERF_GOOD ? "PERF_GOOD" : t == PERFS.PERF_LOW ? "PERF_LOW" : "PERF_BAD";
        document.documentElement.classList.add(o)
    };
getPerfs();
const hasWebP = () => {
        const e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
    },
    supportsWebP = hasWebP(),
    supportsIO = "IntersectionObserver" in window && PERF >= PERFS.PERF_LOW,
    HAS_SMOOTH = deviceSettings.isDesktop && !deviceSettings.isFirefox && PERF === PERFS.PERF_HIGH,
    node = document.createElement("div");
document.body.classList.add(`io-${supportsIO}`), HAS_SMOOTH && (document.body.classList.add("Smooth"), document.body.appendChild(node));
let IS_SCROLLING = !1,
    EASE = deviceSettings.isDesktop ? PERF === PERFS.PERF_HIGH ? .25 : .3 : 1,
    timeout = null,
    bounding = 0,
    cy = 0,
    ly = 0;
const header = getId("header"),
    scroller = getId("scroller"),
    stats = getId("stats"),
    opacity = getId("opacity"),
    parallax = getId("parallax"),
    speed = parallax && parallax.hasAttribute("data-speed") ? parallax.getAttribute("data-speed") || 0 : null,
    scale = parallax && parallax.hasAttribute("data-scale") ? parallax.getAttribute("data-scale") : .05,
    TIMELINES = {
        globalIn: new TimelineMax({
            paused: !0
        }),
        count: new TimelineMax({
            paused: !0
        })
    },
    SpaceX = () => {
        decodeFeatureImage(), decodeImages(), decodeImagesLoaderResize(), checkDeviceSettings(), addEventListeners(), onResize(), addIO(), animateIn(), TweenMax.ticker.addEventListener("tick", globalRAF), window.addEventListener("resize", onResize), document.fonts && document.fonts.ready.then(onResize)
    },
    addEventListeners = () => {
        getId("hamburger").addEventListener("click", e => {
            e.preventDefault(), menu()
        }), getId("menu-close").addEventListener("click", e => {
            e.preventDefault(), menu()
        }), document.addEventListener("keydown", e => {
            27 === e.keyCode && open && menu(), 27 === e.keyCode && modalState && closeModal()
        });
        const e = query(".modal-close"),
            t = query(".modal-bg");
        isBoolean(e) && (e.addEventListener("click", e => {
            closeModal(), e.preventDefault()
        }), t.addEventListener("click", e => {
            closeModal(), e.preventDefault()
        }));
        const a = queryAll("[data-video]"),
            n = e => {
                const t = e.currentTarget.getAttribute("data-video"),
                    a = e.currentTarget.getAttribute("data-title");
                openModal({
                    url: t,
                    title: a
                }), e.preventDefault()
            };
        a && a.forEach(e => {
            e.addEventListener("click", n)
        }), deviceSettings.isDesktop && !deviceSettings.isSafari && window.addEventListener("beforeunload", e => {
            document.body.classList.add("transition"), setTimeout(() => {
                document.body.classList.remove("transition")
            }, 650)
        })
    },
    decodeFeatureImage = () => {
        const e = query("#feature .background");
        e && decodeImage(e, () => {
            TweenMax.to(e, .5, {
                autoAlpha: 1,
                delay: .3,
                ease: Linear.easeNone
            })
        })
    },
    decodeImages = () => {
        queryAll("[data-preload]").forEach(e => decodeImage(e))
    },
    decodeImagesLoaderResize = () => {
        let e = 0;
        const t = queryAll("img"),
            a = e => e.addEventListener("load", n, !1),
            n = () => {
                ++e === t.length && onResize()
            };
        t.forEach(e => (e => {
            e.complete ? n() : e.decode ? e.decode().then(n).catch(() => a(e)) : a(e)
        })(e))
    },
    decodeImage = (e, t = (() => {})) => {
        const a = deviceSettings.isDesktop ? "data-desktop" : "data-mobile";
        let n = e.getAttribute(a);
        if (!n) return;
        if (supportsWebP) {
            const e = n.lastIndexOf(".");
            if (".gif" !== n.substring(e, n.length)) {
                const t = n.substring(0, e);
                n = t + ".webp"
            }
        }
        const o = new Image,
            i = () => {
                e.removeAttribute("data-preload"), e.style.backgroundImage = `url('${o.src}')`, t()
            },
            r = () => {
                o.onload = null, i()
            },
            s = () => {
                o.onload = r, o.src = n
            };
        o.decode ? (o.src = n, o.decode().then(i).catch(e => s())) : s()
    },
    animateIn = () => {
        if (TIMELINES.globalIn.add(() => getId("wrapper").classList.add("visible"), .1), TIMELINES.globalIn.fromTo("#scrollme", 1.5, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                yoyo: !0,
                repeat: -1,
                ease: Expo.easeInOut
            }, 1).fromTo("#scrollme", 3, {
                y: -40
            }, {
                y: -30,
                repeat: -1,
                ease: Expo.easeInOut
            }, 1).restart(), stats && supportsIO && (TIMELINES.count.fromTo("#stats .number", .4, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, 0), TIMELINES.count.fromTo("#stats .label", .5, {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            }, .5), queryAll("#stats .stat").length)) {
            const e = {
                    v1: 0,
                    v2: 0,
                    v3: 0
                },
                t = query("#stat1 .number"),
                a = query("#stat2 .number"),
                n = query("#stat3 .number"),
                o = t.innerHTML,
                i = a.innerHTML,
                r = n.innerHTML;
            TIMELINES.count.to(e, 1.5, {
                v1: o,
                v2: i,
                v3: r,
                roundProps: "number",
                ease: Expo.easeOut,
                onUpdate: () => {
                    t.innerHTML = Math.round(e.v1), a.innerHTML = Math.round(e.v2), n.innerHTML = Math.round(e.v3)
                }
            }, 0)
        }
        window.addEventListener("scroll", onScroll)
    },
    onScroll = () => {
        clearTimeout(timeout), IS_SCROLLING || (IS_SCROLLING = !0), cy = window.scrollY, open && menu(), headerStates(), timeout = setTimeout(() => IS_SCROLLING = !1, 150)
    },
    globalRAF = () => {
        if (SMOOTH_SCROLLING += (cy - SMOOTH_SCROLLING) * EASE, HAS_SMOOTH && scroller ? (scroller.style.transform = `translate3d(0,-${toFixed(SMOOTH_SCROLLING,IS_SCROLLING?3:0)}px,0)`, scroller.style["will-change"] = IS_SCROLLING ? "transform" : "", document.body.style["pointer-events"] = IS_SCROLLING ? "none" : "") : SMOOTH_SCROLLING = cy, PERF >= PERFS.PERF_HIGH && parallax && SMOOTH_SCROLLING <= innerHeight) {
            const e = Math.round(Math.abs(SMOOTH_SCROLLING)),
                t = .25 * SMOOTH_SCROLLING,
                a = SMOOTH_SCROLLING * speed,
                n = 1 + Math.max(0, Math.min(e / innerHeight, 1)) * scale;
            if (parallax.style.transform = `translate3d(0,${t}px,0) scale3d(${n}, ${n}, ${n}) rotate3d(0, 0, 0.75, ${a}deg)`, opacity) {
                const t = 1 - Math.max(0, Math.min(e / 100, 1));
                opacity.style.opacity = t
            }
        }
    },
    hasBackground = "updates" === document.body.id;
hasBackground && header.classList.add("has-background");
const limit = header.hasAttribute("data-limit") ? header.getAttribute("data-limit") : .45,
    headerStates = () => {
        if (!hasBackground) {
            const e = cy > ly ? "down" : "up";
            cy >= innerHeight * limit && "down" === e ? header.classList.add("is-hidden") : header.classList.remove("is-hidden"), cy >= innerHeight && 0 !== innerHeight && "up" === e ? header.classList.add("has-background") : header.classList.remove("has-background"), ly = cy
        }
    },
    inViewport = (e, t, a) => {
        TweenMax.fromTo(e, .85, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power3.easeOut,
            delay: a
        }), TweenMax.fromTo(e, 1.1, {
            y: t
        }, {
            y: 0,
            ease: Power4.easeOut,
            delay: a,
            force3D: !0
        })
    },
    addIO = () => {
        if (!supportsIO) return;
        const e = deviceSettings.isMobile ? 30 : 80,
            t = {
                root: null,
                rootMargin: "0px",
                threshold: [0, .25, .5, .75, 1]
            },
            a = [],
            n = queryAll(".animate");
        n.forEach(e => a.push({
            el: e,
            y: 0,
            ratio: 0,
            animated: !1
        })), n.forEach(e => TweenMax.set(e, {
            autoAlpha: 0
        }));
        const o = new IntersectionObserver(t => {
            let n = 0;
            t.forEach((t, o) => {
                const i = t.boundingClientRect.y,
                    r = t.intersectionRatio,
                    s = a.find(e => e.el === t.target),
                    d = .15 * n;
                if (r > s.ratio) {
                    if (s.animated) return;
                    const a = 0 === s.y || i < s.y ? e : -e;
                    s.animated = !0, inViewport(t.target, a, d), n++
                }
                s.y = i, s.ratio = r
            })
        }, t);
        n.forEach(e => o.observe(e));
        const i = query("#stats .content-center");
        i && new IntersectionObserver(e => {
            e.forEach(e => {
                e.intersectionRatio > 0 ? TIMELINES.count.play() : TIMELINES.count.pause(0)
            })
        }, t).observe(i)
    },
    menu = () => {
        const e = new TimelineMax({
            paused: !0
        });
        open ? (getId("hamburger").setAttribute("aria-expanded", "false"), open = !1, e.to("#bar1, #bar3", .5, {
            rotation: 0,
            y: 0,
            ease: Expo.easeOut
        }, 0).to("#bar2", .5, {
            width: "100%",
            x: 0,
            ease: Expo.easeOut
        }, 0).to("#menu-close", .5, {
            autoAlpha: 0,
            onComplete: () => closed = !1
        }, 0).to("#menu", 1, {
            width: 0,
            ease: Expo.easeOut
        }, 0).to("#menu-navigation", .5, {
            autoAlpha: 0
        }, 0).to(".primary, .secondary", .1, {
            autoAlpha: 0,
            overwrite: !0,
            ease: Linear.easeNone
        }, 0)) : (getId("hamburger").setAttribute("aria-expanded", "true"), open = !0, e.to("#bar1", .5, {
            rotation: 45,
            y: 4,
            ease: Expo.easeOut
        }, 0).to("#bar2", .5, {
            width: "0%",
            x: 8,
            ease: Expo.easeOut
        }, 0).to("#bar3", .5, {
            rotation: -45,
            y: -4,
            ease: Expo.easeOut
        }, 0).to("#menu-close", 1, {
            autoAlpha: 1
        }, 0).to("#menu", 1, {
            width: innerWidth <= 600 ? 290 : 350,
            ease: Expo.easeOut
        }, 0).to("#menu-navigation", .5, {
            autoAlpha: 1
        }, 0).staggerFromTo(innerWidth <= 960 ? ".primary, .secondary" : ".secondary", 1, {
            y: 15,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            ease: Expo.easeOut
        }, .05, .1).fromTo("#menu-background", 1, {
            skewX: 5
        }, {
            skewX: 0,
            ease: Expo.easeOut
        }, 0)), e.restart()
    };
let modalState = !1;
const modal = getId("modal"),
    modalchild = query("#modal .modal-transform"),
    modalclose = query("#modal .modal-close"),
    openModal = ({
        url: e = "sOpMrVnjYeY",
        title: t = ""
    }) => {
        modalState = !0, query("#modal span").innerHTML = t;
        const a = new TimelineMax({
            paused: !0
        }).set(modal, {
            autoAlpha: 1,
            display: "block"
        }, 0);
        a.to(queryAll(".section"), 1.25, {
            y: -.25 * innerHeight,
            ease: Quint.easeInOut
        }, 0), a.staggerFromTo([modal, modalchild], 1.25, {
            cycle: {
                y: [innerHeight, -.5 * innerHeight]
            }
        }, {
            y: 0,
            ease: Quint.easeInOut
        }, 0, 0).fromTo(modalclose, 1, {
            rotation: -90,
            autoAlpha: 0
        }, {
            rotation: 0,
            autoAlpha: 1,
            ease: Expo.easeOut
        }, 0).add(() => {
            query("#modal .youtube-wrapper").innerHTML = `\n\t\t<div class="plyr__video-embed" id="ytplayer">\n\t    <iframe id="iframe" width="500" height="315" src="https://www.youtube.com/embed/${e}" frameborder="0"></iframe>\n\t\t</div>\n\t\t`;
            const t = new Plyr("#ytplayer");
            t.on("ready", e => {
                t.play(), assign(t.elements.container.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                })
            })
        }, .75).restart()
    },
    closeModal = () => {
        const e = getId("modal"),
            t = query("#modal .youtube-wrapper"),
            a = new TimelineMax({
                paused: !0,
                onComplete: () => {
                    modalState = !1, t.innerHTML = ""
                }
            });
        a.fromTo(queryAll(".section"), 1, {
            y: .5 * innerHeight
        }, {
            y: 0,
            ease: Quint.easeInOut,
            clearProps: "transform"
        }, 0), a.staggerTo([e, modalchild], 1, {
            cycle: {
                y: [-innerHeight, .5 * innerHeight]
            },
            ease: Quint.easeInOut
        }, 0, 0).set(e, {
            autoAlpha: 0,
            display: "none"
        }).restart()
    },
    set = (e, t) => TweenMax.set(e, {
        height: t
    }),
    clear = e => TweenMax.set(e, {
        clearProps: "all"
    });
let showed = !1,
    cachedHeight = null,
    cachedWidth = null,
    minHeight = 600;
const doggyland = ({
        innerHeight: e,
        innerWidth: t
    }) => {
        cachedWidth = t, minHeight = cachedHeight = e
    },
    onResize = () => {
        if (innerWidth = window.innerWidth, innerHeight = window.innerHeight, showed ? innerHeight > cachedHeight && innerWidth === cachedWidth && (innerHeight = cachedHeight) : (showed = !0, doggyland({
                innerHeight: innerHeight,
                innerWidth: innerWidth
            })), innerHeight < minHeight && (innerHeight = minHeight), set([".feature", ".resize"], innerHeight), deviceSettings.isMobile || deviceSettings.isTablet || set("#slider", innerHeight), innerWidth <= 600 && clear(".collapse .resize"), HAS_SMOOTH && scroller && (bounding = scroller.getBoundingClientRect().height, node.style.height = `${bounding}px`, document.body.classList.add("isReady")), innerWidth <= 960) {
            queryAll(".slider").forEach(e => {
                const t = e.querySelector(".swiper-dots"),
                    a = e.querySelector(".swiper-timeline");
                if (!e.hasAttribute("data-vehicle") && t && t.classList.contains("not-mobile")) return;
                const n = e.querySelector(".swiper-button-prev"),
                    o = e.querySelector(".swiper-button-next");
                if (n && o && !e.hasAttribute("data-arrow-noresize")) {
                    const t = e.querySelector(".js-bounding"),
                        i = e.getBoundingClientRect(),
                        r = t.getBoundingClientRect().top - i.top + 9 + 10;
                    n.style.top = o.style.top = `${r}px`, a && (a.style.position = "absolute", a.style.top = `${r-65}px`, a.style.bottom = "auto")
                }
                e.classList[a ? "add" : "remove"]("hasTimeline")
            })
        }
    };
"loading" != document.readyState ? SpaceX() : document.addEventListener("DOMContentLoaded", SpaceX);