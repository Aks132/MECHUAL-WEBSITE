(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [5513], {
        Vr4H: () => {
            (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skfb_front/macros/buttons.jinja"] = {
                root: function(n, e, t, a, o) {
                    var s = "";
                    try {
                        var l = a.makeMacro(["authUser", "user"], ["options"], (function(e, o, s) {
                            var l = t;
                            t = new a.Frame, (s = s || {}).hasOwnProperty("caller") && t.set("caller", s.caller), t.set("authUser", e), t.set("user", o), t.set("options", s.hasOwnProperty("options") ? s.options : {});
                            var r = "";
                            return r += '\n\n    <span class="toggle-button follow-user-button btn-loading" data-action="follow" data-user="', r += a.suppressValue(a.memberLookup(o, "uid"), n.opts.autoescape), r += '">\n        <a class="button btn-primary toggle btn-disabled btn-small">\n            <i class="icon fa fa-plus"></i>\n            <span>Follow</span>\n        </a>\n        <a class="button btn-important untoggle btn-small">\n            <span class="toggled">\n                Following\n            </span>\n            <span class="untoggled">\n                Unfollow\n            </span>\n        </a>\n    </span>\n\n', t = l, new a.SafeString(r)
                        }));
                        e.addExport("follow_button"), e.setVariable("follow_button", l), s += "\n\n";
                        var r = a.makeMacro(["authUser"], ["options"], (function(n, e) {
                            var o = t;
                            return t = new a.Frame, (e = e || {}).hasOwnProperty("caller") && t.set("caller", e.caller), t.set("authUser", n), t.set("options", e.hasOwnProperty("options") ? e.options : {}), t = o, new a.SafeString('\n\n    <div class="button btn-medium btn-primary-inverted btn-loading like like-button btn-disabled" data-action="like-model">\n        <i class="icon fa fa-star"></i>\n        Like\n    </div>\n\n')
                        }));
                        e.addExport("like_button"), e.setVariable("like_button", r), s += "\n\n";
                        var c = a.makeMacro(["model"], ["options"], (function(o, s) {
                            var l = t;
                            t = new a.Frame, (s = s || {}).hasOwnProperty("caller") && t.set("caller", s.caller), t.set("model", o), t.set("options", s.hasOwnProperty("options") ? s.options : {});
                            var r = "";
                            return r += '\n\n    <a class="', r += a.suppressValue(a.memberLookup(a.contextOrFrameLookup(e, t, "options"), "className"), n.opts.autoescape), r += ' help" ', r += a.suppressValue(a.memberLookup(o, "isPublished") ? "data-route" : "", n.opts.autoescape), r += ' itemprop="discussionUrl" href="', r += a.suppressValue(a.memberLookup(o, "viewerUrl"), n.opts.autoescape), r += '#comments">\n        <span class="count">\n            ', r += "\n            ", a.inOperator("publicCommentCount", o) ? (r += "\n            ", r += a.suppressValue(n.getFilter("humanize_number").call(e, a.memberLookup(o, "publicCommentCount")), n.opts.autoescape), r += "\n            ") : (r += "\n            ", r += a.suppressValue(n.getFilter("humanize_number").call(e, a.memberLookup(o, "commentCount")), n.opts.autoescape), r += "\n            "), r += '\n        </span>\n        <span class="tooltip tooltip-up">Comment</span>\n    </a>\n\n', t = l, new a.SafeString(r)
                        }));
                        e.addExport("comments_button"), e.setVariable("comments_button", c), s += "\n\n";
                        var i = a.makeMacro(["collection"], [], (function(e, o) {
                            var s = t;
                            t = new a.Frame, (o = o || {}).hasOwnProperty("caller") && t.set("caller", o.caller), t.set("collection", e);
                            var l = "";
                            return l += '\n\n    <span class="toggle-button addto-button" data-action="add-to-collection" data-collection="', l += a.suppressValue(a.memberLookup(e, "uid"), n.opts.autoescape), l += '">\n        <a class="button btn-small btn-primary toggle">\n            Add\n        </a>\n        <a class="button btn-small btn-important untoggle">\n            <span class="toggled">\n                Added\n            </span>\n            <span class="untoggled">\n                Remove\n            </span>\n        </a>\n    </span>\n\n', t = s, new a.SafeString(l)
                        }));
                        e.addExport("add_to_collection_button"), e.setVariable("add_to_collection_button", i), s += "\n\n";
                        var p = a.makeMacro(["collection"], [], (function(e, o) {
                            var s = t;
                            t = new a.Frame, (o = o || {}).hasOwnProperty("caller") && t.set("caller", o.caller), t.set("collection", e);
                            var l = "";
                            return l += '\n\n    <span class="toggle-button subscribe-collection-button btn-loading" data-action="subscribe-collection" data-collection="', l += a.suppressValue(a.memberLookup(e, "uid"), n.opts.autoescape), l += '">\n        <div class="subscribe">\n            <a class="button btn-medium btn-primary btn-disabled toggle">\n                <i class="icon fa fa-rss"></i>\n                Subscribe\n            </a>\n            <a class="button btn-medium btn-important untoggle">\n                <i class="icon fa fa-rss"></i>\n                <span class="toggled">\n                    Subscribed\n                </span>\n                <span class="untoggled">\n                    Unsubscribe\n                </span>\n            </a>\n        </div>\n    </span>\n\n', t = s, new a.SafeString(l)
                        }));
                        e.addExport("subscribe_button"), e.setVariable("subscribe_button", p), s += "\n\n";
                        var u = a.makeMacro([], ["options"], (function(o) {
                            var s = t;
                            t = new a.Frame, (o = o || {}).hasOwnProperty("caller") && t.set("caller", o.caller), t.set("options", o.hasOwnProperty("options") ? o.options : {});
                            var l, r = "";
                            return r += "\n\n    ", l = n.getFilter("merge").call(e, {
                                buttonClass: "btn-primary-inverted"
                            }, a.contextOrFrameLookup(e, t, "options")), t.set("options", l, !0), t.topLevel && e.setVariable("options", l), t.topLevel && e.addExport("options", l), r += '\n\n\n    <a\n        class="button btn-medium ', a.memberLookup(a.contextOrFrameLookup(e, t, "options"), "buttonClass") && (r += " ", r += a.suppressValue(a.memberLookup(a.contextOrFrameLookup(e, t, "options"), "buttonClass"), n.opts.autoescape)), r += '"\n        data-action="open-collection-popup"\n        data-selenium="open-collection-popup">\n        <div class="add-to">\n            <i class="icon fa fa-plus"></i>\n            Add to\n        </div>\n    </a>\n\n', t = s, new a.SafeString(r)
                        }));
                        e.addExport("add_to_open_popup"), e.setVariable("add_to_open_popup", u), s += "\n\n";
                        var b = a.makeMacro([], [], (function(n) {
                            var e = t;
                            return t = new a.Frame, (n = n || {}).hasOwnProperty("caller") && t.set("caller", n.caller), t = e, new a.SafeString('\n\n    <li class="item create-collection">\n        <div class="collection-addcard" data-action="open-create-collection-popup">\n            <div class="thumbnail create-new-collection">\n                <i class="icon fa fa-plus"></i>\n            </div>\n            <div class="js-title">\n                Create new collection\n            </div>\n        </div>\n    </li>\n\n')
                        }));
                        e.addExport("open_create_collection"), e.setVariable("open_create_collection", b), o(null, s += "\n")
                    } catch (n) {
                        o(a.handleError(n, null, null))
                    }
                }
            }
        }
    }
]);