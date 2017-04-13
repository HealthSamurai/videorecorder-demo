// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
var seq__19417 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__19418 = null;
var count__19419 = (0);
var i__19420 = (0);
while(true){
if((i__19420 < count__19419)){
var vec__19421 = chunk__19418.cljs$core$IIndexed$_nth$arity$2(null,i__19420);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19421,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19421,(1),null);
var temp__4655__auto___19427 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___19427)){
var effect_fn_19428 = temp__4655__auto___19427;
(effect_fn_19428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19428.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_19428.call(null,value));
} else {
}

var G__19429 = seq__19417;
var G__19430 = chunk__19418;
var G__19431 = count__19419;
var G__19432 = (i__19420 + (1));
seq__19417 = G__19429;
chunk__19418 = G__19430;
count__19419 = G__19431;
i__19420 = G__19432;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19417);
if(temp__4657__auto__){
var seq__19417__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19417__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__19417__$1);
var G__19433 = cljs.core.chunk_rest(seq__19417__$1);
var G__19434 = c__7616__auto__;
var G__19435 = cljs.core.count(c__7616__auto__);
var G__19436 = (0);
seq__19417 = G__19433;
chunk__19418 = G__19434;
count__19419 = G__19435;
i__19420 = G__19436;
continue;
} else {
var vec__19424 = cljs.core.first(seq__19417__$1);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19424,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19424,(1),null);
var temp__4655__auto___19437 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___19437)){
var effect_fn_19438 = temp__4655__auto___19437;
(effect_fn_19438.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19438.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_19438.call(null,value));
} else {
}

var G__19439 = cljs.core.next(seq__19417__$1);
var G__19440 = null;
var G__19441 = (0);
var G__19442 = (0);
seq__19417 = G__19439;
chunk__19418 = G__19440;
count__19419 = G__19441;
i__19420 = G__19442;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
var G__19443_19453 = cljs.core.cst$kw$dispatch_DASH_later;
var G__19444_19454 = ((function (G__19443_19453){
return (function (value){
var seq__19445 = cljs.core.seq(value);
var chunk__19446 = null;
var count__19447 = (0);
var i__19448 = (0);
while(true){
if((i__19448 < count__19447)){
var map__19449 = chunk__19446.cljs$core$IIndexed$_nth$arity$2(null,i__19448);
var map__19449__$1 = ((((!((map__19449 == null)))?((((map__19449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19449):map__19449);
var effect = map__19449__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19449__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19449__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19445,chunk__19446,count__19447,i__19448,map__19449,map__19449__$1,effect,ms,dispatch,G__19443_19453){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19445,chunk__19446,count__19447,i__19448,map__19449,map__19449__$1,effect,ms,dispatch,G__19443_19453))
,ms);
}

var G__19455 = seq__19445;
var G__19456 = chunk__19446;
var G__19457 = count__19447;
var G__19458 = (i__19448 + (1));
seq__19445 = G__19455;
chunk__19446 = G__19456;
count__19447 = G__19457;
i__19448 = G__19458;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19445);
if(temp__4657__auto__){
var seq__19445__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19445__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__19445__$1);
var G__19459 = cljs.core.chunk_rest(seq__19445__$1);
var G__19460 = c__7616__auto__;
var G__19461 = cljs.core.count(c__7616__auto__);
var G__19462 = (0);
seq__19445 = G__19459;
chunk__19446 = G__19460;
count__19447 = G__19461;
i__19448 = G__19462;
continue;
} else {
var map__19451 = cljs.core.first(seq__19445__$1);
var map__19451__$1 = ((((!((map__19451 == null)))?((((map__19451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19451):map__19451);
var effect = map__19451__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19451__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19445,chunk__19446,count__19447,i__19448,map__19451,map__19451__$1,effect,ms,dispatch,seq__19445__$1,temp__4657__auto__,G__19443_19453){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19445,chunk__19446,count__19447,i__19448,map__19451,map__19451__$1,effect,ms,dispatch,seq__19445__$1,temp__4657__auto__,G__19443_19453))
,ms);
}

var G__19463 = cljs.core.next(seq__19445__$1);
var G__19464 = null;
var G__19465 = (0);
var G__19466 = (0);
seq__19445 = G__19463;
chunk__19446 = G__19464;
count__19447 = G__19465;
i__19448 = G__19466;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__19443_19453))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19443_19453,G__19444_19454) : re_frame.fx.register.call(null,G__19443_19453,G__19444_19454));
var G__19467_19469 = cljs.core.cst$kw$dispatch;
var G__19468_19470 = ((function (G__19467_19469){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__19467_19469))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19467_19469,G__19468_19470) : re_frame.fx.register.call(null,G__19467_19469,G__19468_19470));
var G__19471_19477 = cljs.core.cst$kw$dispatch_DASH_n;
var G__19472_19478 = ((function (G__19471_19477){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
}

var seq__19473 = cljs.core.seq(value);
var chunk__19474 = null;
var count__19475 = (0);
var i__19476 = (0);
while(true){
if((i__19476 < count__19475)){
var event = chunk__19474.cljs$core$IIndexed$_nth$arity$2(null,i__19476);
re_frame.router.dispatch(event);

var G__19479 = seq__19473;
var G__19480 = chunk__19474;
var G__19481 = count__19475;
var G__19482 = (i__19476 + (1));
seq__19473 = G__19479;
chunk__19474 = G__19480;
count__19475 = G__19481;
i__19476 = G__19482;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19473);
if(temp__4657__auto__){
var seq__19473__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19473__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__19473__$1);
var G__19483 = cljs.core.chunk_rest(seq__19473__$1);
var G__19484 = c__7616__auto__;
var G__19485 = cljs.core.count(c__7616__auto__);
var G__19486 = (0);
seq__19473 = G__19483;
chunk__19474 = G__19484;
count__19475 = G__19485;
i__19476 = G__19486;
continue;
} else {
var event = cljs.core.first(seq__19473__$1);
re_frame.router.dispatch(event);

var G__19487 = cljs.core.next(seq__19473__$1);
var G__19488 = null;
var G__19489 = (0);
var G__19490 = (0);
seq__19473 = G__19487;
chunk__19474 = G__19488;
count__19475 = G__19489;
i__19476 = G__19490;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__19471_19477))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19471_19477,G__19472_19478) : re_frame.fx.register.call(null,G__19471_19477,G__19472_19478));
var G__19491_19497 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__19492_19498 = ((function (G__19491_19497){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__19493 = cljs.core.seq(((cljs.core.sequential_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__19494 = null;
var count__19495 = (0);
var i__19496 = (0);
while(true){
if((i__19496 < count__19495)){
var event = chunk__19494.cljs$core$IIndexed$_nth$arity$2(null,i__19496);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__19499 = seq__19493;
var G__19500 = chunk__19494;
var G__19501 = count__19495;
var G__19502 = (i__19496 + (1));
seq__19493 = G__19499;
chunk__19494 = G__19500;
count__19495 = G__19501;
i__19496 = G__19502;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19493);
if(temp__4657__auto__){
var seq__19493__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19493__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__19493__$1);
var G__19503 = cljs.core.chunk_rest(seq__19493__$1);
var G__19504 = c__7616__auto__;
var G__19505 = cljs.core.count(c__7616__auto__);
var G__19506 = (0);
seq__19493 = G__19503;
chunk__19494 = G__19504;
count__19495 = G__19505;
i__19496 = G__19506;
continue;
} else {
var event = cljs.core.first(seq__19493__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__19507 = cljs.core.next(seq__19493__$1);
var G__19508 = null;
var G__19509 = (0);
var G__19510 = (0);
seq__19493 = G__19507;
chunk__19494 = G__19508;
count__19495 = G__19509;
i__19496 = G__19510;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(G__19491_19497))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19491_19497,G__19492_19498) : re_frame.fx.register.call(null,G__19491_19497,G__19492_19498));
var G__19511_19513 = cljs.core.cst$kw$db;
var G__19512_19514 = ((function (G__19511_19513){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__19511_19513))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__19511_19513,G__19512_19514) : re_frame.fx.register.call(null,G__19511_19513,G__19512_19514));
