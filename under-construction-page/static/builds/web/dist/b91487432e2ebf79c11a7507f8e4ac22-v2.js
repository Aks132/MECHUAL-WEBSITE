(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [3729], {
        SxiA: (e, o, a) => {
            a("Vr4H"), (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/macros/user.jinja"] = {
                root: function(e, o, a, t, r) {
                    var s = null,
                        n = null,
                        p = "";
                    try {
                        e.getTemplate("skfb_front/macros/buttons.jinja", !1, "skfb_front/macros/user.jinja", !1, (function(u, l) {
                            u ? r(u) : l.getExported((function(u, l) {
                                if (u) r(u);
                                else if (l.hasOwnProperty("follow_button")) {
                                    var m = l.follow_button;
                                    o.setVariable("follow_button", m), p += "\n\n";
                                    var i = t.makeMacro(["user"], ["options"], (function(r, s) {
                                        var n = a;
                                        a = new t.Frame, (s = s || {}).hasOwnProperty("caller") && a.set("caller", s.caller), a.set("user", r), a.set("options", s.hasOwnProperty("options") ? s.options : {});
                                        var p, u = "";
                                        return u += "\n  ", p = e.getFilter("merge").call(o, {
                                            avatarWidth: 20,
                                            avatarHeight: 20
                                        }, t.contextOrFrameLookup(o, a, "options")), a.set("options", p, !0), a.topLevel && o.setVariable("options", p), a.topLevel && o.addExport("options", p), u += '\n  <div\n    class="avatar"\n    data-user-summary-anchor="true"\n    data-user="', u += t.suppressValue(t.memberLookup(r, "uid"), e.opts.autoescape), u += '">\n    ', u += t.suppressValue(e.getFilter("image_container").call(o, t.memberLookup(r, "avatars"), t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "avatarWidth"), t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "avatarHeight")), e.opts.autoescape), u += "\n  </div>\n", a = n, new t.SafeString(u)
                                    }));
                                    o.addExport("user_name_avatar"), o.setVariable("user_name_avatar", i), p += "\n\n";
                                    var c = t.makeMacro(["authUser", "user"], ["options"], (function(r, p, u) {
                                        var l = a;
                                        a = new t.Frame, (u = u || {}).hasOwnProperty("caller") && a.set("caller", u.caller), a.set("authUser", r), a.set("user", p), a.set("options", u.hasOwnProperty("options") ? u.options : {});
                                        var m, i, c, k, L, b = "";
                                        return m = e.getFilter("merge").call(o, {
                                            noLink: !1,
                                            noBadge: !1,
                                            tag: !1
                                        }, t.contextOrFrameLookup(o, a, "options")), a.set("options", m, !0), a.topLevel && o.setVariable("options", m), a.topLevel && o.addExport("options", m), b += "\n\n  ", s = 22, n = 23, i = t.callWrap(t.contextOrFrameLookup(o, a, "url"), "url", o, ["users:profile_summary", t.makeKeywordArgs({
                                            username: t.memberLookup(p, "username")
                                        })]), a.set("profileUrl", i, !0), a.topLevel && o.setVariable("profileUrl", i), a.topLevel && o.addExport("profileUrl", i), b += '\n\n  <div class="user-name ', t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "noLink") && (b += "--no-link"), b += " ", t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "noBadge") && (b += "--no-badge-link"), b += '">\n    <a class="user-name__link ', b += t.suppressValue(t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "withoutBadge") || !t.memberLookup(p, "planDetail") && "basic" == t.memberLookup(p, "account") ? "" : "--with-flag", e.opts.autoescape), b += '"\n       href="', b += t.suppressValue(t.contextOrFrameLookup(o, a, "profileUrl"), e.opts.autoescape), b += '"\n       title="', b += t.suppressValue(t.memberLookup(p, "displayName"), e.opts.autoescape), b += '"\n      ', t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "target") && (b += '\n       target="', b += t.suppressValue(t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "target"), e.opts.autoescape), b += '"\n      '), b += '\n    >\n      <data itemprop="url" value="', b += t.suppressValue(t.contextOrFrameLookup(o, a, "profileUrl"), e.opts.autoescape), b += '"></data>\n      ', t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "withAvatar") && (b += "\n        <span ", t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "withSummary") && (b += 'data-action="show-user-summary"\n          data-user="', b += t.suppressValue(t.memberLookup(p, "uid"), e.opts.autoescape), b += '"'), b += ">\n                ", b += t.suppressValue((s = 38, n = 33, t.callWrap(t.contextOrFrameLookup(o, a, "user_name_avatar"), "user_name_avatar", o, [p, t.contextOrFrameLookup(o, a, "options")])), e.opts.autoescape), b += "\n            </span>\n      "), b += '\n\n      <div class="text">\n        ', t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "by") && (b += "by"), b += "\n        ", t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "isProfilePage") && !t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "isProfileCollection") ? (b += '\n          <h1\n            class="username-wrapper"\n            itemprop="name">\n            ', b += t.suppressValue(t.memberLookup(p, "displayName"), e.opts.autoescape), b += "\n          </h1>\n        ") : (b += '\n          <div\n            class="username-wrapper"\n            itemprop="name">\n            ', b += t.suppressValue(t.memberLookup(p, "displayName"), e.opts.autoescape), b += "\n            ", t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "tag") && (b += '\n              <div class="user-name__tag">@', b += t.suppressValue(t.memberLookup(p, "username"), e.opts.autoescape), b += "</div>\n            "), b += "\n          </div>\n        "), b += "\n      </div>\n    </a>\n    ", !t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "withoutBadge") && t.memberLookup(p, "planDetail") && (b += "\n      ", "staff" == t.memberLookup(t.memberLookup(p, "planDetail"), "badge") ? (b += "\n        ", s = 64, n = 28, c = t.callWrap(t.contextOrFrameLookup(o, a, "url"), "url", o, ["pages:careers"]) + "#team", a.set("badgeLink", c, !0), a.topLevel && o.setVariable("badgeLink", c), a.topLevel && o.addExport("badgeLink", c), b += "\n      ") : "master" == t.memberLookup(t.memberLookup(p, "planDetail"), "badge") && (b += "\n        ", k = "https://forum.sketchfab.com/g/Sketchfab-Masters?utm_source=website&utm_campaign=master-badge", a.set("badgeLink", k, !0), a.topLevel && o.setVariable("badgeLink", k), a.topLevel && o.addExport("badgeLink", k), b += "\n      "), b += "\n      ", t.contextOrFrameLookup(o, a, "badgeLink") || (b += "\n        ", s = 69, n = 28, L = t.callWrap(t.contextOrFrameLookup(o, a, "url"), "url", o, ["pages:plans"]) + "?ref=plan-badge", a.set("badgeLink", L, !0), a.topLevel && o.setVariable("badgeLink", L), a.topLevel && o.addExport("badgeLink", L), b += "\n      "), b += '\n      <a class="user-name__flag" href="', b += t.suppressValue(t.contextOrFrameLookup(o, a, "badgeLink"), e.opts.autoescape), b += '" target="_blank" rel="noopener noreferrer">\n        <span class="flag --', b += t.suppressValue(t.memberLookup(t.memberLookup(p, "planDetail"), "badge"), e.opts.autoescape), b += '">', b += t.suppressValue(t.memberLookup(t.memberLookup(p, "planDetail"), "title"), e.opts.autoescape), b += "</span>\n      </a>\n    "), b += "\n  </div>", a = l, new t.SafeString(b)
                                    }));
                                    o.addExport("user_name"), o.setVariable("user_name", c), p += "\n\n";
                                    var k = t.makeMacro(["avatars"], ["options"], (function(r, s) {
                                        var n = a;
                                        a = new t.Frame, (s = s || {}).hasOwnProperty("caller") && a.set("caller", s.caller), a.set("avatars", r), a.set("options", s.hasOwnProperty("options") ? s.options : {});
                                        var p, u = "";
                                        return u += "\n  ", p = e.getFilter("merge").call(o, {
                                            size: 32,
                                            expand: !1
                                        }, t.contextOrFrameLookup(o, a, "options")), a.set("options", p, !0), a.topLevel && o.setVariable("options", p), a.topLevel && o.addExport("options", p), u += "\n  ", u += t.suppressValue(e.getFilter("image_container").call(o, r, t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "size"), t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "size"), t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "expand")), e.opts.autoescape), u += "\n", a = n, new t.SafeString(u)
                                    }));
                                    o.addExport("user_avatar"), o.setVariable("user_avatar", k), p += "\n\n";
                                    var L = t.makeMacro(["authUser", "user", "cloaked"], ["options"], (function(r, p, u, l) {
                                        var m = a;
                                        a = new t.Frame, (l = l || {}).hasOwnProperty("caller") && a.set("caller", l.caller), a.set("authUser", r), a.set("user", p), a.set("cloaked", u), a.set("options", l.hasOwnProperty("options") ? l.options : {});
                                        var i = "";
                                        return i += '\n\n  <span\n    class="avatar-container"\n    data-action="show-user-summary"\n    data-user="', i += t.suppressValue(t.memberLookup(p, "uid"), e.opts.autoescape), i += '">\n        ', i += t.suppressValue(e.getFilter("image_container").call(o, t.memberLookup(p, "avatars"), 64, 64), e.opts.autoescape), i += '\n    </span>\n\n  <div class="info">\n    <p\n      class="name"\n      data-action="show-user-summary"\n      data-user="', i += t.suppressValue(t.memberLookup(p, "uid"), e.opts.autoescape), i += '"\n      data-user-summary-anchor-class=".avatar-container[data-user=\'', i += t.suppressValue(t.memberLookup(p, "uid"), e.opts.autoescape), i += "']\">\n      ", i += t.suppressValue(t.memberLookup(p, "displayName"), e.opts.autoescape), i += '\n    </p>\n    <p class="stats">', i += t.suppressValue(e.getFilter("humanize_number").call(o, t.memberLookup(p, "followerCount")), e.opts.autoescape), i += " follower", i += t.suppressValue(e.getFilter("pluralize").call(o, t.memberLookup(p, "followerCount")), e.opts.autoescape), i += ", ", i += t.suppressValue(e.getFilter("humanize_number").call(o, t.memberLookup(p, "modelCount")), e.opts.autoescape), i += " model", i += t.suppressValue(e.getFilter("pluralize").call(o, t.memberLookup(p, "modelCount")), e.opts.autoescape), i += " </p>\n  </div>\n\n  ", t.memberLookup(r, "uid") != t.memberLookup(p, "uid") && (i += "\n    ", i += t.suppressValue((s = 104, n = 18, t.callWrap(t.contextOrFrameLookup(o, a, "follow_button"), "follow_button", o, [r, p])), e.opts.autoescape), i += "\n  "), i += '\n\n  <div class="reason">\n    <p>', i += t.suppressValue(e.getFilter("print_suggestion_verb").call(o, t.memberLookup(t.contextOrFrameLookup(o, a, "followSuggestion"), "verb"), t.memberLookup(t.contextOrFrameLookup(o, a, "followSuggestion"), "user")), e.opts.autoescape), i += " ", i += t.suppressValue(e.getFilter("print_suggestion_target").call(o, t.memberLookup(t.contextOrFrameLookup(o, a, "followSuggestion"), "target"), t.memberLookup(t.contextOrFrameLookup(o, a, "followSuggestion"), "verb")), e.opts.autoescape), i += "</p>\n  </div>\n\n", a = m, new t.SafeString(i)
                                    }));
                                    o.addExport("follow_suggestion_reason"), o.setVariable("follow_suggestion_reason", L), p += "\n\n";
                                    var b = t.makeMacro(["authUser", "followSuggestion", "cloaked"], ["options"], (function(r, p, u, l) {
                                        var m = a;
                                        a = new t.Frame, (l = l || {}).hasOwnProperty("caller") && a.set("caller", l.caller), a.set("authUser", r), a.set("followSuggestion", p), a.set("cloaked", u), a.set("options", l.hasOwnProperty("options") ? l.options : {});
                                        var i = "";
                                        return i += '\n\n  <li class="follow-item', u && (i += " cloaked"), i += '" data-user="', i += t.suppressValue(t.memberLookup(p, "uid"), e.opts.autoescape), i += '">\n\n    ', i += t.suppressValue((s = 117, n = 14, t.callWrap(t.contextOrFrameLookup(o, a, "user_name"), "user_name", o, [r, p, t.makeKeywordArgs({
                                            options: {
                                                withAvatar: !0,
                                                withSummary: t.memberLookup(t.contextOrFrameLookup(o, a, "options"), "withSummary"),
                                                avatarHeight: 32,
                                                avatarWidth: 32
                                            }
                                        })])), e.opts.autoescape), i += "\n\n    ", t.memberLookup(r, "uid") != t.memberLookup(p, "uid") && (i += "\n\n      ", i += t.suppressValue((s = 126, n = 20, t.callWrap(t.contextOrFrameLookup(o, a, "follow_button"), "follow_button", o, [t.contextOrFrameLookup(o, a, "user"), p])), e.opts.autoescape), i += "\n\n    "), i += "\n\n  </li>\n\n", a = m, new t.SafeString(i)
                                    }));
                                    o.addExport("follow_suggestion"), o.setVariable("follow_suggestion", b), r(null, p += "\n")
                                } else r(new Error("cannot import 'follow_button'"))
                            }))
                        }))
                    } catch (e) {
                        r(t.handleError(e, s, n))
                    }
                }
            }
        }
    }
]);