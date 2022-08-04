"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [6028], {
        CQWF: (t, e, o) => {
            o.d(e, {
                Z: () => c
            });
            var i = o("sGMM"),
                n = o("k46e"),
                s = o("T4DV"),
                a = o("Hjnd"),
                r = o.n(a),
                l = o("i2hM"),
                h = o("jQKg"),
                d = o("Oyie");
            const c = {
                name: "Markdown",
                dependencies: ["LazyLoading"],
                initializeMarkdown: function(t) {
                    this.options.markdown = (0, n.Z)({}, this.options.markdown, t), this.__markdown = {
                        ready: !1,
                        loading: !1,
                        promise: null,
                        shortcuts: {}
                    }, this.options.markdown.editor && this.initializeEditor()
                },
                initializeEditor: function() {
                    var t = this,
                        e = r()(this.options.markdown.input),
                        n = (0, s.Z)(this.options.markdown.editor) ? this.options.markdown.editor : {};
                    e.addClass("loading-editor"), d.all([o.e(5189).then(o.t.bind(o, "Fi04", 23)), o.e(5189).then(o.t.bind(o, "ExF7", 23)), o.e(5189).then(o.t.bind(o, "eNCp", 23))]).then((function(o) {
                        var s = (0, i.Z)(o, 1)[0].default.fromTextArea(e[0], {
                            mode: "gfm",
                            theme: "neo",
                            highlightFormatting: !0,
                            lineWrapping: !0,
                            extraKeys: l.Z.getShortcuts()
                        });
                        l.Z.setEditor(s), l.Z.initializeToolbar(n), n.container && r()(n.container).addClass("wysiwyg"), e.removeClass("loading-editor"), s.on("beforeChange", (function(e, o) {
                            t.getMarkdownEditorValue().length + o.text[0].length > parseInt(r()(e.getTextArea()).attr("maxlength"), 10) && "+delete" !== o.origin && o.cancel()
                        })), s.on("change", (function(t) {
                            var e = r()(t.getTextArea());
                            e.val(t.getValue()), e.trigger("input")
                        }))
                    }))
                },
                renderMarkdown: function() {
                    var t = this;
                    return this.__markdown.ready ? d.resolve(this.options.markdown.target[0].innerHTML) : (this.__markdown.loading || (this.__markdown.loading = !0, this.__markdown.promise = new d((function(e) {
                        var o = t.getMarkdownEditorValue();
                        o ? (t.unsetMarkdownReady(), h.Z.getMarkdownPreview(o).then(function(t) {
                            this.setMarkdownReady(t.result), this.handleLazyLoading(), e(t.result)
                        }.bind(t), function() {
                            this.setMarkdownReady("Failed to load preview"), e("")
                        }.bind(t))) : (t.setMarkdownReady(""), e(""))
                    }))), this.__markdown.promise)
                },
                setMarkdownReady: function(t) {
                    this.__markdown.ready = !0, this.__markdown.loading = !1, this.options.markdown.target.html(r()("<div></div>").append(t))
                },
                unsetMarkdownReady: function() {
                    this.__markdown.ready = !1, this.options.markdown.target.html(r()("<div>Loading preview...</div>"))
                },
                getMarkdownEditorValue: function() {
                    return l.Z.getMarkdownEditorValue() || this.options.markdown.input ? r()(this.options.markdown.input).val() : ""
                }
            }
        },
        JS03: (t, e, o) => {
            o.d(e, {
                Z: () => a
            });
            var i = o("luBU"),
                n = o("WPHq"),
                s = o("g/7r");
            const a = {
                name: "WithEventCompose",
                constructor: function() {
                    var t = this;
                    this.events = (0, i.Z)(this.events, (function(e) {
                        return "string" != typeof e ? e : e.split("|>").map(n.Z).reduce((function(e, o) {
                            if (!t[o]) throw new Error("WithEventCompose error: method '".concat(o, "' do not exist on view '").concat(t.displayName, "'."));
                            return (0, s.qC)(t[o].bind(t), e)
                        }), s.yR)
                    }))
                }
            }
        },
        jDby: (t, e, o) => {
            o.r(e), o.d(e, {
                default: () => k
            });
            var i = o("rX1A"),
                n = o("WPHq"),
                s = o("bvKJ"),
                a = o("3pbp"),
                r = o("CQWF"),
                l = (o("dElF"), o("nv4P")),
                h = o("WGQk"),
                d = o("lotc"),
                c = o("1nxQ"),
                p = o("KDlt");
            const u = l.Z.extend({
                mixins: [r.Z, a.Z],
                optionTypes: {
                    viewerModel: d.Z.model.isRequired,
                    hotspots: d.Z.collection.isRequired,
                    hotspotIndex: d.Z.number.isRequired,
                    viewer: d.Z.object.isRequired,
                    editMode: d.Z.bool
                },
                urlize: p.Z.getFromString('{{ content | striptags | urlize(target="_blank") | paragraphy }}'),
                events: {
                    "click .submit": "inputTitleDescription",
                    "change .description": "changeDescription",
                    "keydown textarea": "handleTextareaKeys",
                    "keydown .title": "handleTitleKeys",
                    "click .activate-render": "showRenderedContent",
                    "mouseover .activate-render": "renderMarkdown",
                    "click .activate-edition": "showEditingContent"
                },
                el: function() {
                    if (this.options.editMode) return p.Z.getFromMacro(["skfb_front/macros/model", "model_hotspot_edit"], [this.options]);
                    var t = '<div class="annotation" data-hotspot="'.concat(this.options.hotspotIndex, '">\n                    <div class="tooltip">\n                        <div class="tooltip-content">\n                            <div class="tooltip-content-minimal">\n                                <div class="title"></div>\n                                <a href="#" class="more">+ more info</a>\n                            </div>\n                            <div class="title"></div>\n                            <div class="description markdown-rendered-content inversed"></div>\n                        </div>\n                    </div>\n                </div>').trim(),
                        e = document.createElement("div");
                    return e.innerHTML = t, e.firstChild
                },
                noFocus: function(t) {
                    return t !== document.activeElement
                },
                content: function() {
                    if ((this.model.changed.name && this.model.changed.name !== this._previousContent.name || this.model.changed.content && this.model.changed.content.rendered !== this._previousContent.content) && (this._content = null), !this._content) {
                        var t = this.model.attributes.name,
                            e = this.model.attributes.content.rendered;
                        return this._content = {
                            name: this.urlize({
                                content: t
                            }),
                            content: e
                        }, this._previousContent = {
                            name: t,
                            content: e
                        }, this._content
                    }
                    return this._content
                },
                initialize: function() {
                    l.Z.prototype.initialize.apply(this, arguments);
                    var t = (0, h.Z)();
                    t && this.initializeMarkdown({
                        input: this.$(".edition textarea"),
                        target: this.$(".markdown-rendered-content")
                    }), this.useTopLeft(), this.link(), this.model && this.model.on("change:hideAnnotationTooltip", this.showHideToolTip, this)
                },
                delegateEvents: function() {
                    l.Z.prototype.delegateEvents.apply(this, arguments), this.options.hotspots.on("remove reset sort", this.link, this)
                },
                undelegateEvents: function() {
                    l.Z.prototype.undelegateEvents.apply(this, arguments), this.options.hotspots.off("remove reset sort", this.link, this)
                },
                link: function() {
                    this.model && this.model.off("change", this.render, this), this.model = this.options.model = this.options.hotspots.at(this.options.hotspotIndex), this.model && this.model.on("change", this.render, this), this.render()
                },
                render: function() {
                    var t = this;
                    if (this.model && !this.model.get("building")) {
                        this.el.querySelectorAll(".title").forEach((function(e) {
                            return e.innerHTML = t.content().name
                        }));
                        var e = this.el.querySelector(".description");
                        e && (e.innerHTML = this.content().content);
                        var o = (0, n.Z)(this.content().content).length > 0;
                        if (this.$(".more").toggle(o), this.options.editMode) {
                            var i = (0, c.sanitize)(this.model.get("name"));
                            this.$(".edition .title").filter(this.noFocus).text(i).val(i);
                            var s = this.model.get("content");
                            this.$(".edition .description").filter(this.noFocus).text(s.raw).val(s.raw)
                        } else {
                            this.options.viewer.scene.getFeatures().webVR.getModel().get("enable") || this.handleLazyLoading();
                            var a = this.el.querySelector(".tooltip");
                            a && a.classList.toggle("no-description", !o)
                        }
                    }
                },
                showEditingContent: function() {
                    this.$(".meta .selected").removeClass("selected"), this.$(".meta .activate-edition").addClass("selected"), this.$(".render").hide(), this.$(".edition").show()
                },
                showRenderedContent: function() {
                    this.renderMarkdown();
                    var t = this.$(".edition .title").val();
                    this.$(".render .title").text(t), this.$(".render").show(), this.$(".edition").hide(), this.$(".meta .selected").removeClass("selected"), this.$(".meta .activate-render").addClass("selected"), this.handleLazyLoading()
                },
                inputTitleDescription: function(t) {
                    this.$(".edition .title").val() && (this.renderMarkdown().then(function(t) {
                        this.model.set({
                            name: this.$(".edition .title").val(),
                            content: {
                                raw: this.$(".edition .description").val(),
                                rendered: t
                            }
                        })
                    }.bind(this)), this.options.viewer.blurHotspots(), t.stopPropagation())
                },
                handleTitleKeys: function(t) {
                    13 === t.keyCode && this.$(".submit").click()
                },
                handleTextareaKeys: function(t) {
                    this.unsetMarkdownReady(), 13 === t.keyCode && (t.metaKey || t.ctrlKey) && this.$(".submit").click()
                },
                changeDescription: function() {
                    this.options.editMode || this.$(".tooltip").toggleClass("no-description", !this.model.get("description"))
                },
                showTooltip: function() {
                    if (this.$el.addClass("selected"), void 0 === this.model.get("hideAnnotationTooltip") && this.$(".tooltip").addClass("visible"), this.updateTooltipDirection(), this.options.editMode) {
                        var t = function() {
                            this.x && this.y && this.$(".edition .title").focus()
                        }.bind(this);
                        (0, s.Z)(function() {
                            this.tooltipInViewport() ? t() : setTimeout(t, 1200)
                        }.bind(this))
                    }
                },
                hideTooltip: function() {
                    this.$el.removeClass("selected"), this.$(".tooltip").removeClass("visible")
                },
                showHideToolTip: function() {
                    void 0 === this.model.get("hideAnnotationTooltip") && this.$el.hasClass("selected") ? this.$(".tooltip").addClass("visible") : this.$(".tooltip").removeClass("visible")
                },
                updateTooltipDirection: function() {
                    var t = this.el.parentNode.parentNode,
                        e = this.el.querySelector(".tooltip");
                    if (t && e && e.classList.contains("visible")) {
                        e.classList.remove("reverse-x"), e.classList.remove("reverse-y");
                        var o = e.getBoundingClientRect().left,
                            i = t.getBoundingClientRect(),
                            n = e.getBoundingClientRect().top - i.top,
                            s = e.getBoundingClientRect();
                        e.classList.toggle("reverse-x", o + s.width + 10 >= i.width), e.classList.toggle("reverse-y", n + s.height + 10 >= i.height)
                    }
                },
                setCoordinates: function(t, e) {
                    this.x = t, this.y = e
                },
                tooltipInViewport: function() {
                    var t = this.$el.closest(".webgl")[0].getBoundingClientRect(),
                        e = this.$(".tooltip")[0].getBoundingClientRect(),
                        o = e.left - t.left > 0 && e.left + e.width < t.left + t.width,
                        i = e.top - t.top > 0 && e.top + e.height < t.top + t.height;
                    return o && i
                },
                useTranslate: function() {
                    if ("translate" !== this.mode && (this.mode = "translate", this.el.parentNode.getBoundingClientRect)) {
                        var t = this.el.parentNode.getBoundingClientRect(),
                            e = this.el.getBoundingClientRect(),
                            o = e.left - t.left + e.width / 2,
                            i = e.top - t.top + e.height / 2;
                        this.$el.css("transform", "translate3d(" + o + "px," + i + "px, 0)"), this.$el.css("left", "0"), this.$el.css("top", "0")
                    }
                },
                useTopLeft: function() {
                    if ("topleft" !== this.mode && (this.mode = "topleft", this.el.parentNode.getBoundingClientRect)) {
                        var t = this.el.parentNode.getBoundingClientRect(),
                            e = this.el.getBoundingClientRect(),
                            o = e.left - t.left + e.width / 2,
                            i = e.top - t.top + e.height / 2;
                        this.$el.css("transform", "none"), this.$el.css("left", o), this.$el.css("top", i)
                    }
                },
                setPosition: function() {
                    var t = this.options.viewer.$el.height() / 3 * 2 + "px";
                    switch (this.mode) {
                        case "translate":
                            this.$el.css({
                                transform: "translate3d(" + this.x + "px," + this.y + "px, 0)",
                                "max-height": t
                            });
                            break;
                        case "topleft":
                            this.el.style.left = this.x + "px", this.el.style.top = this.y + "px", this.el.style["max-height"] = t
                    }
                },
                preparePositionFix: function() {
                    var t = this.transformFixTimer = window.requestAnimationFrame(function() {
                        this.transformFixTimer === t && (this.useTopLeft(), this.setPosition(Math.round(this.x), Math.round(this.y)))
                    }.bind(this))
                }
            });
            var g = o("MQQR"),
                v = o("mSEu"),
                m = o("O56b"),
                f = (o("TKXV"), o("+VSF")),
                w = o("FGWR"),
                C = o("JbUU"),
                y = o("JS03"),
                _ = o("uo4Z"),
                b = v.Z.shortcuts;
            const k = i.Z.extend({
                tplList: p.Z.getFromMacro("skfb_front/macros/viewer", "hotspots_list"),
                _hotspotCycleInterval: null,
                hotspotViews: [],
                mixins: [y.Z, (0, _.Z)(".js-scrollable")],
                events: {
                    'mousedown [data-action="prev-annotation"]': "stopEvent |> prevHotspot",
                    'mousedown [data-action="next-annotation"]': "stopEvent |> nextHotspot",
                    'touchend [data-action="prev-annotation"]': "stopEvent |> prevHotspot",
                    'touchend [data-action="next-annotation"]': "stopEvent |> nextHotspot",
                    'click [data-action="next-annotation"]': "stopEvent",
                    'click [data-action="prev-annotation"]': "stopEvent",
                    'mousedown [data-action="toggle-autopilot"]': "stopEvent |> toggleAutopilot",
                    'touchend [data-action="toggle-autopilot"]': "stopEvent |> toggleAutopilot",
                    'mousedown [data-action="toggle-visibility"]': "stopEvent |> toggleVisibility",
                    'touchend [data-action="toggle-visibility"]': "stopEvent |> toggleVisibility",
                    'mousedown [data-action="toggle-annotation-list"]': "stopEvent |> toggleAnnotationList",
                    'touchend [data-action="toggle-annotation-list"]': "stopEvent |> toggleAnnotationList",
                    "touchstart [data-hotspot-target]": "menuTriggerHotspot",
                    "click [data-hotspot-target]": "menuTriggerHotspot",
                    "mouseover .control-hotspots .label": "revealHotspots",
                    "mouseout .control-hotspots .label": "unrevealHotspots",
                    "click .more": "showFullscreenTooltip",
                    "mousedown .webgl": "trackMousedownTiming"
                },
                initialize: function() {
                    i.Z.prototype.initialize.apply(this, arguments), this.initialValue = (0, c.sanitize)(this.$(".hotspot-name").text()), this.initializeShortcuts(), this.previousHotspot = -1, this.currentHotspot = -1, this._hotspots = this.model.get("hotspots"), 0 === this._hotspots.length && this.hideAnnotationControls()
                },
                initializeShortcuts: function() {
                    this.annotationControlShortcuts = new m.Z(b.annotationControl), this.annotationControlShortcuts.on("prevAnnotation", this.prevHotspot.bind(this)), this.annotationControlShortcuts.on("nextAnnotation", this.nextHotspot.bind(this)), this.annotationControlShortcuts.listen()
                },
                delegateEvents: function() {
                    i.Z.prototype.delegateEvents.apply(this, arguments), this.model.on("change:visible", this.displayAnnotations, this)
                },
                undelegateEvents: function() {
                    i.Z.prototype.undelegateEvents.apply(this, arguments), this.model.off("change:visible", this.displayAnnotations, this)
                },
                stopEvent: function(t) {
                    t.preventDefault(), t.stopPropagation()
                },
                trackMousedownTiming: function(t) {
                    this._mouseDownTime = Date.now(), this._mouseDownPosition = t.pageX
                },
                renderControl: function(t) {
                    var e = this.$(".hotspot-name");
                    t ? (e.text((0, c.sanitize)(t.get("name"))), e.removeClass("default")) : (e.text(this.initialValue), e.addClass("default"))
                },
                isVr: function() {
                    return this.viewer.isVR()
                },
                toggleAnnotationList: function(t) {
                    this.$(".hotspots-list").toggleClass("visible", t)
                },
                toggleAutopilot: function() {
                    var t = this.$('[data-action="toggle-autopilot"]').hasClass("--stopped");
                    this.triggerHotspotCycle(t)
                },
                toggleVisibility: function() {
                    var t = this.model.get("visible");
                    this.toggleAnnotations(!t)
                },
                updateHotspotsControls: function() {
                    var t = this.tplList([this._hotspots.toJSON()]);
                    if (this.viewer.$(".hotspot-controls .list").html(t), this._hotspots.length > 0 && !this.isVr()) {
                        this.showAnnotationControls();
                        var e = !0 === this.viewer.proxySettings.get("annotationsVisible");
                        this.toggleAnnotations(e)
                    } else this.hideAnnotationControls(), f.Z && !(0, g.Z)().isApp && this.toggleAnnotations(!1);
                    this.displayAnnotations(null, this.model.get("visible"))
                },
                showFullscreenTooltip: function(t) {
                    t.preventDefault(), t.stopPropagation();
                    var e = this._hotspots.at(this.currentHotspot);
                    e && (this.viewer.subviews.hotspotsOverlay.setModel(e), this.viewer.subviews.hotspotsOverlay.show())
                },
                showAnnotations: function() {
                    this.toggleAnnotations(!0)
                },
                hideAnnotations: function() {
                    this.toggleAnnotations(!1)
                },
                toggleAnnotations: function(t) {
                    this.model.get("visible") !== t && this.model.set("visible", t)
                },
                displayAnnotations: function(t, e) {
                    this.$('[data-action="toggle-visibility"]').toggleClass("--hide", e), this.viewer.$el.toggleClass("annotations-enabled", e)
                },
                showAnnotationControls: function() {
                    this.viewer.$el.addClass("has-hotspots")
                },
                hideAnnotationControls: function() {
                    this.viewer.$el.removeClass("has-hotspots")
                },
                hideTooltips: function() {
                    this.hotspotViews.forEach((function(t) {
                        t.hideTooltip()
                    }))
                },
                createHotspotView: function(t) {
                    var e = !(!this.viewer.scene || !this.viewer.scene.getOptions().widgetAPI),
                        o = new u({
                            viewerModel: this.viewer._currentModel,
                            hotspots: this._hotspots,
                            hotspotIndex: t,
                            viewer: this.viewer,
                            editMode: !!e
                        });
                    return o.$el.appendTo(this.options.container), o
                },
                refreshHotspots: function() {
                    var t, e, o = this._hotspots.length;
                    for (t = o, e = this.hotspotViews.length; t < e; ++t) this.hotspotViews.pop().remove();
                    for (t = this.hotspotViews.length, e = o; t < e; ++t) this.hotspotViews.push(this.createHotspotView(t));
                    this.updatePositionCurrentHotspot(), !this._initCanvasHotspot && this.isVr() && (this._initCanvasHotspot = !0, this._hotspots.trigger("inserted"))
                },
                updatePositionCurrentHotspot: function() {
                    if (-1 !== this.currentHotspot) {
                        var t = this.hotspotViews[this.currentHotspot],
                            e = this._hotspots.at(this.currentHotspot);
                        e || (this.currentHotspot = -1);
                        var o = [0, 0, 0];
                        C.Z.getScreenPositionFromWorldPoint(e.get("lastComputedWorldPosition"), o), w.Z.glCoordToCanvas(o[0], o[1], o), t.setCoordinates(o[0], o[1]), t.preparePositionFix(), t.useTranslate(), t.setPosition(), t.updateTooltipDirection()
                    }
                },
                menuTriggerHotspot: function(t) {
                    var e = parseInt(t.currentTarget.getAttribute("data-hotspot-target"), 10);
                    this._hotspots.trigger("select", this._hotspots.at(e)), t.stopPropagation()
                },
                onHotspotSelected: function(t) {
                    var e = this._hotspots.indexOf(t);
                    this.currentHotspot !== e && (this.previousHotspot = this.currentHotspot, this.currentHotspot = e, this.applyCurrentHotspot(), this.updatePositionCurrentHotspot())
                },
                emitHotspotFocus: function(t) {
                    this.viewer.scene.trigger("annotationFocus", t), this.hotspotFocus = t
                },
                emitHotspotBlur: function(t) {
                    this.viewer.scene.trigger("annotationBlur", t), this.hotspotFocus = void 0
                },
                applyCurrentHotspot: function() {
                    if (this.hotspotViews.forEach((function(t) {
                            t.hideTooltip()
                        })), void 0 !== this.hotspotFocusTimeoutID && (window.clearTimeout(this.hotspotFocusTimeoutID), window.clearTimeout(this.hotspotFocusTooltipTimeoutID), this.hotspotFocusTimeoutID = void 0, this.hotspotFocusTooltipTimeoutID = void 0), void 0 !== this.hotspotFocus && this.emitHotspotBlur(this.hotspotFocus), -1 !== this.currentHotspot) {
                        var t = this._hotspots.at(this.currentHotspot),
                            e = this.hotspotViews[this.currentHotspot],
                            o = this.currentHotspot,
                            i = Math.floor(1500);
                        this.hotspotFocusTimeoutID = window.setTimeout(function() {
                            this.hotspotFocusTimeoutID = void 0, this.emitHotspotFocus(o)
                        }.bind(this), i), (0, g.Z)().annotationTooltipVisible && e.showTooltip(), this.renderControl(t), this.$(".hotspots-list a").removeClass("active"), this.$('.hotspots-list a[data-hotspot-target="' + this.currentHotspot + '"]').addClass("active")
                    } else this.renderControl(this._hotspots.at(this.previousHotspot))
                },
                paginateHotspot: function(t) {
                    var e;
                    t = parseInt(t, 10);
                    var o = -1 === this.currentHotspot ? -1 === this.previousHotspot ? -1 : this.previousHotspot : this.currentHotspot;
                    e = -1 === o ? 0 : t > 0 ? (o + t) % this._hotspots.length : o + t >= 0 ? o + t : o + t + this._hotspots.length, this._hotspots.trigger("select", this._hotspots.at(e))
                },
                nextHotspot: function() {
                    null !== this._hotspotCycleInterval && this.triggerHotspotCycle(!1), this.paginateHotspot(1)
                },
                beginHotspotCycleInterval: function(t) {
                    if (null === this._hotspotCycleInterval) {
                        this._hotspotCycleIntervalPaused || this.paginateHotspot(0), window.clearTimeout(this._hotspotPausedCycleTimeout);
                        var e = function() {
                            window.clearInterval(this._hotspotCycleInterval), this._hotspotCycleInterval = window.setInterval(function() {
                                this.paginateHotspot(1)
                            }.bind(this), (0, g.Z)().annotationCycleDuration)
                        }.bind(this);
                        t ? this._hotspotPausedCycleTimeout = setTimeout(e, t) : e()
                    }
                },
                pauseHotspotCycleInterval: function(t) {
                    var e = !!this._hotspotCycleInterval || this._hotspotCycleIntervalPaused;
                    this.stopHotspotCycleInterval(), e && t && (this._hotspotPausedCycleTimeout = setTimeout(this.beginHotspotCycleInterval.bind(this), t)), this._hotspotCycleIntervalPaused = e
                },
                stopHotspotCycleInterval: function() {
                    window.clearInterval(this._hotspotCycleInterval), this._hotspotCycleInterval = null, this._hotspotCyclePaused = !1, this._hotspotCycleIntervalPaused = !1, this._hotspotPausedCycleTimeout && window.clearTimeout(this._hotspotPausedCycleTimeout)
                },
                triggerHotspotCycle: function(t) {
                    this.$('[data-action="toggle-autopilot"]').toggleClass("--stopped", !t), t ? (this.beginHotspotCycleInterval(), this.$(".hotspots-list").removeClass("visible")) : this.stopHotspotCycleInterval()
                },
                prevHotspot: function() {
                    null !== this._hotspotCycleInterval && this.triggerHotspotCycle(!1), this.paginateHotspot(-1)
                },
                revealHotspots: function() {
                    this.viewer.$el.addClass("annotations-peak")
                },
                unrevealHotspots: function() {
                    this.viewer.$el.removeClass("annotations-peak")
                }
            })
        },
        i2hM: (t, e, o) => {
            o.d(e, {
                Z: () => m
            });
            for (var i, n, s = o("Hjnd"), a = o.n(s), r = {
                    bold: "**",
                    code: "```",
                    italic: "*",
                    quote: "> ",
                    "unordered-list": "* ",
                    "ordered-list": "1. "
                }, l = ["[", "](#url#)"], h = ["![", "](#url#)"], d = /Mac/.test(navigator.platform), c = [].concat([{
                    action: "toggleBold",
                    shortcut: "Cmd-B",
                    title: "Bold",
                    icon: "fa-bold"
                }, {
                    action: "toggleItalic",
                    shortcut: "Cmd-I",
                    title: "Italic",
                    icon: "fa-italic"
                }, {
                    action: "drawLink",
                    shortcut: "Cmd-K",
                    title: "Link",
                    icon: "fa-link"
                }, {
                    action: "toggleHeading",
                    shortcut: "Cmd-H",
                    title: "Heading",
                    icon: "fa-header"
                }, {
                    action: "drawImage",
                    shortcut: "Cmd-Alt-I",
                    title: "Insert Image",
                    icon: "fa-picture-o"
                }, {
                    action: "toggleBlockquote",
                    shortcut: "Cmd-'",
                    title: "Quote",
                    icon: "fa-quote-left"
                }, {
                    action: "toggleOrderedList",
                    shortcut: "Cmd-Alt-L",
                    title: "Numbered List",
                    icon: "fa-list-ol"
                }, {
                    action: "toggleUnorderedList",
                    shortcut: "Cmd-L",
                    title: "Generic List",
                    icon: "fa-list-ul"
                }]), p = "", u = {}, g = {
                    initializeToolbar: function(t) {
                        var e, o = (new DOMParser).parseFromString((e = p, '<div class="editor-toolbar">' + e + "</div>"), "text/html").body.firstChild;
                        return a()(o).on("mousedown", "[data-action]", function(t) {
                            t.stopImmediatePropagation(), t.preventDefault(), this[t.currentTarget.getAttribute("data-action")]()
                        }.bind(this)), a()(t.container).prepend(o), o
                    },
                    getEditor: function() {
                        return this.__editorInstance
                    },
                    setEditor: function(t) {
                        this.__editorInstance = t
                    },
                    getShortcuts: function() {
                        return u
                    },
                    getMarkdownEditorValue: function() {
                        var t = this.getEditor();
                        return t ? t.getValue() : ""
                    },
                    toggleBold: function() {
                        this._toggleBlock("bold", r.bold)
                    },
                    toggleItalic: function() {
                        this._toggleBlock("italic", r.italic)
                    },
                    toggleHeading: function() {
                        this._toggleHeading()
                    },
                    toggleBlockquote: function() {
                        this._toggleLine("quote")
                    },
                    toggleOrderedList: function() {
                        this._toggleLine("ordered-list")
                    },
                    toggleUnorderedList: function() {
                        this._toggleLine("unordered-list")
                    },
                    drawLink: function() {
                        var t = this._getCodemirrorState();
                        this._replaceSelection(t.link, l, "http://")
                    },
                    drawImage: function() {
                        var t = this._getCodemirrorState();
                        this._replaceSelection(t.image, h, "http://")
                    },
                    _getCodemirrorState: function(t) {
                        var e = this.getEditor();
                        t = t || e.getCursor("start");
                        var o = e.getTokenAt(t);
                        if (!o.type) return {};
                        for (var i, n, s = o.type.split(" "), a = {}, r = 0; r < s.length; r++) "strong" === (i = s[r]) ? a.bold = !0 : "variable-2" === i ? (n = e.getLine(t.line), /^\s*\d+\.\s/.test(n) ? a["ordered-list"] = !0 : a["unordered-list"] = !0) : "atom" === i ? a.quote = !0 : "em" === i ? a.italic = !0 : "quote" === i ? a.quote = !0 : "strikethrough" === i ? a.strikethrough = !0 : "comment" === i ? a.code = !0 : "link" === i ? a.link = !0 : "tag" === i ? a.image = !0 : i.match(/^header(\-[1-6])?$/) && (a[i.replace("header", "heading")] = !0);
                        return a
                    },
                    _toggleBlock: function(t, e, o) {
                        if (!/editor-preview-active/.test(this.getEditor().getWrapperElement().lastChild.className)) {
                            o = void 0 === o ? e : o;
                            var i, n = this.getEditor(),
                                s = this._getCodemirrorState(),
                                a = e,
                                r = o,
                                l = n.getCursor("start"),
                                h = n.getCursor("end");
                            s[t] ? (a = (i = n.getLine(l.line)).slice(0, l.ch), r = i.slice(l.ch), "bold" === t ? (a = a.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), r = r.replace(/(\*\*|__)/, "")) : "italic" === t ? (a = a.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), r = r.replace(/(\*|_)/, "")) : "strikethrough" === t && (a = a.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), r = r.replace(/(\*\*|~~)/, "")), n.replaceRange(a + r, {
                                line: l.line,
                                ch: 0
                            }, {
                                line: l.line,
                                ch: 99999999999999
                            }), "bold" === t || "strikethrough" === t ? (l.ch -= 2, l !== h && (h.ch -= 2)) : "italic" === t && (l.ch -= 1, l !== h && (h.ch -= 1))) : (i = n.getSelection(), "bold" === t ? i = (i = i.split("**").join("")).split("__").join("") : "italic" === t ? i = (i = i.split("*").join("")).split("_").join("") : "strikethrough" === t && (i = i.split("~~").join("")), n.replaceSelection(a + i + r), l.ch += e.length, h.ch = l.ch + i.length), n.setSelection(l, h), n.focus()
                        }
                    },
                    _toggleHeading: function() {
                        var t = this.getEditor();
                        if (!/editor-preview-active/.test(t.getWrapperElement().lastChild.className)) {
                            for (var e = t.getCursor("start"), o = t.getCursor("end"), i = e.line; i <= o.line; i++) ! function(e) {
                                var o = t.getLine(e),
                                    i = o.search(/[^#]/);
                                o = i <= 0 ? "# " + o : 6 === i ? o.substr(7) : "#" + o, t.replaceRange(o, {
                                    line: e,
                                    ch: 0
                                }, {
                                    line: e,
                                    ch: 99999999999999
                                })
                            }(i);
                            t.focus()
                        }
                    },
                    _toggleLine: function(t) {
                        var e = this.getEditor();
                        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
                            for (var o = this._getCodemirrorState(), i = e.getCursor("start"), n = e.getCursor("end"), s = {
                                    quote: /^(\s*)\>\s+/,
                                    "unordered-list": /^(\s*)(\*|\-|\+)\s+/,
                                    "ordered-list": /^(\s*)\d+\.\s+/
                                }, a = i.line; a <= n.line; a++) ! function(i) {
                                var n = e.getLine(i);
                                n = o[t] ? n.replace(s[t], "$1") : r[t] + n, e.replaceRange(n, {
                                    line: i,
                                    ch: 0
                                }, {
                                    line: i,
                                    ch: 99999999999999
                                })
                            }(a);
                            e.focus()
                        }
                    },
                    _replaceSelection: function(t, e, o) {
                        var i = this.getEditor();
                        if (!/editor-preview-active/.test(i.getWrapperElement().lastChild.className)) {
                            var n, s = e[0],
                                a = e[1],
                                r = i.getCursor("start"),
                                l = i.getCursor("end");
                            o && (a = a.replace("#url#", o)), t ? (s = (n = i.getLine(r.line)).slice(0, r.ch), a = n.slice(r.ch), i.replaceRange(s + a, {
                                line: r.line,
                                ch: 0
                            })) : (n = i.getSelection(), i.replaceSelection(s + n + a), r.ch += s.length, r !== l && (l.ch += s.length)), i.setSelection(r, l), i.focus()
                        }
                    },
                    _tabAndIndentMarkdownList: function(t) {
                        var e = t.listSelections()[0].head;
                        if (!1 !== t.getStateAfter(e.line).list) t.execCommand("indentMore");
                        else if (t.options.indentWithTabs) t.execCommand("insertTab");
                        else {
                            var o = Array(t.options.tabSize + 1).join(" ");
                            t.replaceSelection(o)
                        }
                    },
                    _shiftTabAndUnindentMarkdownList: function(t) {
                        var e = t.listSelections()[0].head;
                        if (!1 !== t.getStateAfter(e.line).list) t.execCommand("indentLess");
                        else if (t.options.indentWithTabs) t.execCommand("insertTab");
                        else {
                            var o = Array(t.options.tabSize + 1).join(" ");
                            t.replaceSelection(o)
                        }
                    }
                }, v = 0; v < c.length; v++) c[v].action && g[c[v].action] && (p += '<a title="' + (n = c[v]).title + " (" + n.shortcut + ')" data-action="' + n.action + '" tabindex="-1" class="fa ' + n.icon + '"></a>', u[(i = c[v].shortcut, d ? i.replace("Ctrl", "Cmd") : i.replace("Cmd", "Ctrl"))] = function(t) {
                return g[t.action]()
            }.bind(g, c[v]));
            u.Enter = "newlineAndIndentContinueMarkdownList", u.Tab = g._tabAndIndentMarkdownList.bind(g), u["Shift-Tab"] = g._shiftTabAndUnindentMarkdownList.bind(g);
            const m = g
        }
    }
]);