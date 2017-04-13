// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('aidbox_ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frisk.core');
goog.require('aidbox_ui.db');
goog.require('aidbox_ui.layout');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('aidbox_ui.rf');
goog.require('route_map.core');
goog.require('aidbox_ui.pages.page');
goog.require('aidbox_ui.pages.config');
goog.require('aidbox_ui.sample');
goog.require('goog.History');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$aidbox_DASH_ui$core_SLASH_initialize,cljs.core.PersistentVector.EMPTY,(function (cofx,p__27192){
var vec__27193 = p__27192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27193,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27193,(1),null);
return cofx;
}));
aidbox_ui.core.current_page = (function aidbox_ui$core$current_page(){
var p = (function (){var G__27199 = (function (){var G__27200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aidbox_DASH_ui$db_SLASH_current_DASH_page], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27200) : re_frame.core.subscribe.call(null,G__27200));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27199) : cljs.core.deref.call(null,G__27199));
})();
var G__27201 = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(p);
return (aidbox_ui.pages.page.page.cljs$core$IFn$_invoke$arity$1 ? aidbox_ui.pages.page.page.cljs$core$IFn$_invoke$arity$1(G__27201) : aidbox_ui.pages.page.page.call(null,G__27201));
});
aidbox_ui.core.mount_root = (function aidbox_ui$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.layout.layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.core.current_page], null)], null),document.getElementById("app"));
});
aidbox_ui.rf.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$navigate_DASH_to,(function (db,p__27202){
var vec__27203 = p__27202;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27203,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27203,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_page,event);
}));
aidbox_ui.core.routes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_DOT_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$config], null),"videos",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$videos], null),"sample",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$sample], null)], null);
aidbox_ui.core.dispatch = (function aidbox_ui$core$dispatch(event){
var fragment = event.token;
var route = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_DOT_,fragment], null),aidbox_ui.core.routes);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["routing",route], 0));

var G__27207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigate_DASH_to,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(route)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27207) : re_frame.core.dispatch.call(null,G__27207));
});
aidbox_ui.core.hook_browser_navigation_BANG_ = (function aidbox_ui$core$hook_browser_navigation_BANG_(){
var G__27209 = (new goog.History());
goog.events.listen(G__27209,goog.history.EventType.NAVIGATE,aidbox_ui.core.dispatch);

G__27209.setEnabled(true);

return G__27209;
});
aidbox_ui.core.init_BANG_ = (function aidbox_ui$core$init_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init"], 0));

var G__27211_27212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aidbox_DASH_ui$core_SLASH_initialize], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27211_27212) : re_frame.core.dispatch.call(null,G__27211_27212));

aidbox_ui.core.hook_browser_navigation_BANG_();

re_frisk.core.enable_re_frisk_BANG_();

return aidbox_ui.core.mount_root();
});
