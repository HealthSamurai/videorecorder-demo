// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind) : re_frame.registrar.kinds.call(null,re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__19260_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__19260_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join('')], 0));
} else {
}

var temp__4657__auto___19261 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___19261)){
var not_i_19262 = temp__4657__auto___19261;
if(cljs.core.fn_QMARK_(not_i_19262)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_19262], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_19262], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join('')], 0));
} else {
var _STAR_handling_STAR_19279 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19280 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19235__auto___19295 = re_frame.interop.now();
var duration__19236__auto___19296 = (end__19235__auto___19295 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19281_19297 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__19282_19298 = null;
var count__19283_19299 = (0);
var i__19284_19300 = (0);
while(true){
if((i__19284_19300 < count__19283_19299)){
var vec__19285_19301 = chunk__19282_19298.cljs$core$IIndexed$_nth$arity$2(null,i__19284_19300);
var k__19237__auto___19302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285_19301,(0),null);
var cb__19238__auto___19303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19285_19301,(1),null);
try{var G__19289_19304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19296,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19303.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19303.cljs$core$IFn$_invoke$arity$1(G__19289_19304) : cb__19238__auto___19303.call(null,G__19289_19304));
}catch (e19288){if((e19288 instanceof java.lang.Exception)){
var e__19239__auto___19305 = e19288;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19302,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19305], 0));
} else {
throw e19288;

}
}
var G__19306 = seq__19281_19297;
var G__19307 = chunk__19282_19298;
var G__19308 = count__19283_19299;
var G__19309 = (i__19284_19300 + (1));
seq__19281_19297 = G__19306;
chunk__19282_19298 = G__19307;
count__19283_19299 = G__19308;
i__19284_19300 = G__19309;
continue;
} else {
var temp__4657__auto___19310 = cljs.core.seq(seq__19281_19297);
if(temp__4657__auto___19310){
var seq__19281_19311__$1 = temp__4657__auto___19310;
if(cljs.core.chunked_seq_QMARK_(seq__19281_19311__$1)){
var c__7616__auto___19312 = cljs.core.chunk_first(seq__19281_19311__$1);
var G__19313 = cljs.core.chunk_rest(seq__19281_19311__$1);
var G__19314 = c__7616__auto___19312;
var G__19315 = cljs.core.count(c__7616__auto___19312);
var G__19316 = (0);
seq__19281_19297 = G__19313;
chunk__19282_19298 = G__19314;
count__19283_19299 = G__19315;
i__19284_19300 = G__19316;
continue;
} else {
var vec__19290_19317 = cljs.core.first(seq__19281_19311__$1);
var k__19237__auto___19318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290_19317,(0),null);
var cb__19238__auto___19319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290_19317,(1),null);
try{var G__19294_19320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19296,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19319.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19319.cljs$core$IFn$_invoke$arity$1(G__19294_19320) : cb__19238__auto___19319.call(null,G__19294_19320));
}catch (e19293){if((e19293 instanceof java.lang.Exception)){
var e__19239__auto___19321 = e19293;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19318,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19321], 0));
} else {
throw e19293;

}
}
var G__19322 = cljs.core.next(seq__19281_19311__$1);
var G__19323 = null;
var G__19324 = (0);
var G__19325 = (0);
seq__19281_19297 = G__19322;
chunk__19282_19298 = G__19323;
count__19283_19299 = G__19324;
i__19284_19300 = G__19325;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19280;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_19279;
}}
} else {
return null;
}
});
