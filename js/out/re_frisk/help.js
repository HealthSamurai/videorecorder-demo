// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.help');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frame.registrar');
re_frisk.help.fx = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$db,"reset! app-db with a new value. Expects a map. / re-frame's internal",cljs.core.cst$kw$dispatch,"`dispatch` one event. Expects a single vector. / re-frame's internal",cljs.core.cst$kw$dispatch_DASH_n,"`dispatch` more than one event. Expects a list or vector of events. Something for which sequential? returns true. / re-frame's internal",cljs.core.cst$kw$deregister_DASH_event_DASH_handler,"Removes a previously registered event handler. Expects either a single id (typically a keyword), or a seq of ids. / re-frame's internal",cljs.core.cst$kw$dispatch_DASH_later,"`dispatch` one or more events after given delays. Expects a collection of maps with two keys:  :`ms` and `:dispatch`. / re-frame's internal"], null);
re_frisk.help.cofx = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,"Adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal"], null);
re_frisk.help.intrcp = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$coeffects,"An interceptor which injects re-frame :db coeffect. / re-frame's internal",cljs.core.cst$kw$do_DASH_fx,"An interceptor which actions a `context's` (side) `:effects`. For each key in the `:effects` map, call the `effects handler` previously registered using `reg-fx`. / re-frame's internal",cljs.core.cst$kw$db_DASH_handler,"An interceptor which wraps the kind of event handler given to `reg-event-db`. These handlers take two arguments;  `db` and `event`, and they return `db`. / re-frame's internal",cljs.core.cst$kw$fx_DASH_handler,"An interceptor which wraps the kind of event handler given to `reg-event-fx`. These handlers take two arguments;  `coeffects` and `event`, and they return `effects`. / re-frame's internal"], null);
re_frisk.help.intrcp_fn = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$coeffects,"Function which adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal",cljs.core.cst$kw$do_DASH_fx,"Function which calls the `effects handler` previously registered using `reg-fx` for each key in the `:effects` map. / re-frame's internal",cljs.core.cst$kw$db_DASH_handler,"Function which calls the handler given to `reg-event-db`. This handler take two arguments;  `db` and `event`, and returns `db`. / re-frame's internal",cljs.core.cst$kw$fx_DASH_handler,"Function which calls the handler given to `reg-event-fx`. This handler take two arguments;  `coeffects` and `event`, and returns `effects`. / re-frame's internal"], null);
re_frisk.help.re_frame_event = (function re_frisk$help$re_frame_event(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first(a)],[(function (){var intc = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26548_SHARP_,p2__26549_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__26549_SHARP_,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$coeffects)))?cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__26549_SHARP_,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$do_DASH_fx)))?cljs.core.cst$kw$do_DASH_fx.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$db_DASH_handler))?cljs.core.cst$kw$db_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$fx_DASH_handler))?cljs.core.cst$kw$fx_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):"id"
))))]),(cljs.core.truth_(cljs.core.cst$kw$before.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__26549_SHARP_,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$coeffects)))?cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$db_DASH_handler))?cljs.core.cst$kw$db_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$fx_DASH_handler))?cljs.core.cst$kw$fx_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)))], null):null),(cljs.core.truth_(cljs.core.cst$kw$after.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$after,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__26549_SHARP_,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__26548_SHARP_),cljs.core.cst$kw$do_DASH_fx)))?cljs.core.cst$kw$do_DASH_fx.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)], null):null)], 0));
}),cljs.core.second(a),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.second(a))));
return cljs.core.PersistentHashMap.fromArrays([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" interceptors")].join('')],[intc]);
})()]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26550_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.key(p1__26550_SHARP_),cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db);
}),(function (){var G__26552 = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)));
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26552) : cljs.core.deref.call(null,G__26552));
})())));
});
re_frisk.help.re_frame_sub = (function re_frisk$help$re_frame_sub(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26553_SHARP_){
var k = cljs.core.first(p1__26553_SHARP_);
return cljs.core.PersistentHashMap.fromArrays([k],[(function (){var G__26557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26557) : re_frame.core.subscribe.call(null,G__26557));
})()]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26554_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__26554_SHARP_),cljs.core.cst$kw$re_DASH_frisk$help_SLASH_db);
}),(function (){var G__26558 = reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)));
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26558) : cljs.core.deref.call(null,G__26558));
})())));
});
re_frisk.help.re_frame_fx = (function re_frisk$help$re_frame_fx(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26559_SHARP_){
if(cljs.core.truth_((p1__26559_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26559_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.fx) : p1__26559_SHARP_.call(null,re_frisk.help.fx)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__26559_SHARP_,(p1__26559_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26559_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.fx) : p1__26559_SHARP_.call(null,re_frisk.help.fx))]);
} else {
return p1__26559_SHARP_;
}
}),cljs.core.keys(cljs.core.cst$kw$fx.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)))));
});
re_frisk.help.re_frame_cofx = (function re_frisk$help$re_frame_cofx(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26560_SHARP_){
if(cljs.core.truth_((p1__26560_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26560_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.cofx) : p1__26560_SHARP_.call(null,re_frisk.help.cofx)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__26560_SHARP_,(p1__26560_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26560_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.cofx) : p1__26560_SHARP_.call(null,re_frisk.help.cofx))]);
} else {
return p1__26560_SHARP_;
}
}),cljs.core.keys(cljs.core.cst$kw$cofx.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)))));
});
re_frisk.help.re_frame_handlers = (function re_frisk$help$re_frame_handlers(kind__GT_id__GT_handler_QMARK_){
if(cljs.core.truth_((function (){var and__6785__auto__ = kind__GT_id__GT_handler_QMARK_;
if(cljs.core.truth_(and__6785__auto__)){
return re_frame.registrar.kind__GT_id__GT_handler;
} else {
return and__6785__auto__;
}
})())){
var event = reagent.ratom.make_reaction((function (){
return re_frisk.help.re_frame_event();
}));
var sub = reagent.ratom.make_reaction(((function (event){
return (function (){
return re_frisk.help.re_frame_sub();
});})(event))
);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kind_DASH__GT_id_DASH__GT_handler,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(event) : cljs.core.deref.call(null,event))),event]),cljs.core.cst$kw$sub,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub))),sub]),cljs.core.cst$kw$fx,reagent.ratom.make_reaction(((function (event,sub){
return (function (){
return re_frisk.help.re_frame_fx();
});})(event,sub))
),cljs.core.cst$kw$cofx,reagent.ratom.make_reaction(((function (event,sub){
return (function (){
return re_frisk.help.re_frame_cofx();
});})(event,sub))
)], null)], null);
} else {
return null;
}
});
