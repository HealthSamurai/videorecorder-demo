// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registrar.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = (function (){var G__19598 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19598) : cljs.core.atom.call(null,G__19598));
})();
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__19609_19619 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var chunk__19610_19620 = null;
var count__19611_19621 = (0);
var i__19612_19622 = (0);
while(true){
if((i__19612_19622 < count__19611_19621)){
var vec__19613_19623 = chunk__19610_19620.cljs$core$IIndexed$_nth$arity$2(null,i__19612_19622);
var k_19624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613_19623,(0),null);
var rxn_19625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613_19623,(1),null);
re_frame.interop.dispose_BANG_(rxn_19625);

var G__19626 = seq__19609_19619;
var G__19627 = chunk__19610_19620;
var G__19628 = count__19611_19621;
var G__19629 = (i__19612_19622 + (1));
seq__19609_19619 = G__19626;
chunk__19610_19620 = G__19627;
count__19611_19621 = G__19628;
i__19612_19622 = G__19629;
continue;
} else {
var temp__4657__auto___19630 = cljs.core.seq(seq__19609_19619);
if(temp__4657__auto___19630){
var seq__19609_19631__$1 = temp__4657__auto___19630;
if(cljs.core.chunked_seq_QMARK_(seq__19609_19631__$1)){
var c__7616__auto___19632 = cljs.core.chunk_first(seq__19609_19631__$1);
var G__19633 = cljs.core.chunk_rest(seq__19609_19631__$1);
var G__19634 = c__7616__auto___19632;
var G__19635 = cljs.core.count(c__7616__auto___19632);
var G__19636 = (0);
seq__19609_19619 = G__19633;
chunk__19610_19620 = G__19634;
count__19611_19621 = G__19635;
i__19612_19622 = G__19636;
continue;
} else {
var vec__19616_19637 = cljs.core.first(seq__19609_19631__$1);
var k_19638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19616_19637,(0),null);
var rxn_19639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19616_19637,(1),null);
re_frame.interop.dispose_BANG_(rxn_19639);

var G__19640 = cljs.core.next(seq__19609_19631__$1);
var G__19641 = null;
var G__19642 = (0);
var G__19643 = (0);
seq__19609_19619 = G__19640;
chunk__19610_19620 = G__19641;
count__19611_19621 = G__19642;
i__19612_19622 = G__19643;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19659 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19235__auto___19674 = re_frame.interop.now();
var duration__19236__auto___19675 = (end__19235__auto___19674 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19660_19676 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__19661_19677 = null;
var count__19662_19678 = (0);
var i__19663_19679 = (0);
while(true){
if((i__19663_19679 < count__19662_19678)){
var vec__19664_19680 = chunk__19661_19677.cljs$core$IIndexed$_nth$arity$2(null,i__19663_19679);
var k__19237__auto___19681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19664_19680,(0),null);
var cb__19238__auto___19682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19664_19680,(1),null);
try{var G__19668_19683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19675,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19682.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19682.cljs$core$IFn$_invoke$arity$1(G__19668_19683) : cb__19238__auto___19682.call(null,G__19668_19683));
}catch (e19667){if((e19667 instanceof java.lang.Exception)){
var e__19239__auto___19684 = e19667;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19681,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19684], 0));
} else {
throw e19667;

}
}
var G__19685 = seq__19660_19676;
var G__19686 = chunk__19661_19677;
var G__19687 = count__19662_19678;
var G__19688 = (i__19663_19679 + (1));
seq__19660_19676 = G__19685;
chunk__19661_19677 = G__19686;
count__19662_19678 = G__19687;
i__19663_19679 = G__19688;
continue;
} else {
var temp__4657__auto___19689 = cljs.core.seq(seq__19660_19676);
if(temp__4657__auto___19689){
var seq__19660_19690__$1 = temp__4657__auto___19689;
if(cljs.core.chunked_seq_QMARK_(seq__19660_19690__$1)){
var c__7616__auto___19691 = cljs.core.chunk_first(seq__19660_19690__$1);
var G__19692 = cljs.core.chunk_rest(seq__19660_19690__$1);
var G__19693 = c__7616__auto___19691;
var G__19694 = cljs.core.count(c__7616__auto___19691);
var G__19695 = (0);
seq__19660_19676 = G__19692;
chunk__19661_19677 = G__19693;
count__19662_19678 = G__19694;
i__19663_19679 = G__19695;
continue;
} else {
var vec__19669_19696 = cljs.core.first(seq__19660_19690__$1);
var k__19237__auto___19697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19669_19696,(0),null);
var cb__19238__auto___19698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19669_19696,(1),null);
try{var G__19673_19699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19675,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19698.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19698.cljs$core$IFn$_invoke$arity$1(G__19673_19699) : cb__19238__auto___19698.call(null,G__19673_19699));
}catch (e19672){if((e19672 instanceof java.lang.Exception)){
var e__19239__auto___19700 = e19672;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19697,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19700], 0));
} else {
throw e19672;

}
}
var G__19701 = cljs.core.next(seq__19660_19690__$1);
var G__19702 = null;
var G__19703 = (0);
var G__19704 = (0);
seq__19660_19676 = G__19701;
chunk__19661_19677 = G__19702;
count__19662_19678 = G__19703;
i__19663_19679 = G__19704;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19659;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19705 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19705;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args19706 = [];
var len__7910__auto___19709 = arguments.length;
var i__7911__auto___19710 = (0);
while(true){
if((i__7911__auto___19710 < len__7910__auto___19709)){
args19706.push((arguments[i__7911__auto___19710]));

var G__19711 = (i__7911__auto___19710 + (1));
i__7911__auto___19710 = G__19711;
continue;
} else {
}
break;
}

var G__19708 = args19706.length;
switch (G__19708) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19706.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args19713 = [];
var len__7910__auto___19754 = arguments.length;
var i__7911__auto___19755 = (0);
while(true){
if((i__7911__auto___19755 < len__7910__auto___19754)){
args19713.push((arguments[i__7911__auto___19755]));

var G__19756 = (i__7911__auto___19755 + (1));
i__7911__auto___19755 = G__19756;
continue;
} else {
}
break;
}

var G__19715 = args19713.length;
switch (G__19715) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19713.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19716 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19758 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19758;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19759 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19759;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19760 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19760;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19235__auto___19761 = re_frame.interop.now();
var duration__19236__auto___19762 = (end__19235__auto___19761 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19717_19763 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__19718_19764 = null;
var count__19719_19765 = (0);
var i__19720_19766 = (0);
while(true){
if((i__19720_19766 < count__19719_19765)){
var vec__19721_19767 = chunk__19718_19764.cljs$core$IIndexed$_nth$arity$2(null,i__19720_19766);
var k__19237__auto___19768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19721_19767,(0),null);
var cb__19238__auto___19769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19721_19767,(1),null);
try{var G__19725_19770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19762,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19769.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19769.cljs$core$IFn$_invoke$arity$1(G__19725_19770) : cb__19238__auto___19769.call(null,G__19725_19770));
}catch (e19724){if((e19724 instanceof java.lang.Exception)){
var e__19239__auto___19771 = e19724;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19768,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19771], 0));
} else {
throw e19724;

}
}
var G__19772 = seq__19717_19763;
var G__19773 = chunk__19718_19764;
var G__19774 = count__19719_19765;
var G__19775 = (i__19720_19766 + (1));
seq__19717_19763 = G__19772;
chunk__19718_19764 = G__19773;
count__19719_19765 = G__19774;
i__19720_19766 = G__19775;
continue;
} else {
var temp__4657__auto___19776 = cljs.core.seq(seq__19717_19763);
if(temp__4657__auto___19776){
var seq__19717_19777__$1 = temp__4657__auto___19776;
if(cljs.core.chunked_seq_QMARK_(seq__19717_19777__$1)){
var c__7616__auto___19778 = cljs.core.chunk_first(seq__19717_19777__$1);
var G__19779 = cljs.core.chunk_rest(seq__19717_19777__$1);
var G__19780 = c__7616__auto___19778;
var G__19781 = cljs.core.count(c__7616__auto___19778);
var G__19782 = (0);
seq__19717_19763 = G__19779;
chunk__19718_19764 = G__19780;
count__19719_19765 = G__19781;
i__19720_19766 = G__19782;
continue;
} else {
var vec__19726_19783 = cljs.core.first(seq__19717_19777__$1);
var k__19237__auto___19784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726_19783,(0),null);
var cb__19238__auto___19785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726_19783,(1),null);
try{var G__19730_19786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19762,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19785.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19785.cljs$core$IFn$_invoke$arity$1(G__19730_19786) : cb__19238__auto___19785.call(null,G__19730_19786));
}catch (e19729){if((e19729 instanceof java.lang.Exception)){
var e__19239__auto___19787 = e19729;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19784,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19787], 0));
} else {
throw e19729;

}
}
var G__19788 = cljs.core.next(seq__19717_19777__$1);
var G__19789 = null;
var G__19790 = (0);
var G__19791 = (0);
seq__19717_19763 = G__19788;
chunk__19718_19764 = G__19789;
count__19719_19765 = G__19790;
i__19720_19766 = G__19791;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19716;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19792 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19792;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19793 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19793;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19794 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19794;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19731 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,v,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19795 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19795;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19796 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19796;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___19797 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___19797)){
var not_reactive_19798 = temp__4657__auto___19797;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_19798], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19799 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19799;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_19731){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_19731))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_19731){
return (function (){
var G__19746 = re_frame.db.app_db;
var G__19747 = v;
var G__19748 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__19746,G__19747,G__19748) : handler_fn.call(null,G__19746,G__19747,G__19748));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_19731))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_19731){
return (function (){
var G__19749 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19749) : cljs.core.deref.call(null,G__19749));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_19731))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19235__auto___19800 = re_frame.interop.now();
var duration__19236__auto___19801 = (end__19235__auto___19800 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19732_19802 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__19733_19803 = null;
var count__19734_19804 = (0);
var i__19735_19805 = (0);
while(true){
if((i__19735_19805 < count__19734_19804)){
var vec__19736_19806 = chunk__19733_19803.cljs$core$IIndexed$_nth$arity$2(null,i__19735_19805);
var k__19237__auto___19807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736_19806,(0),null);
var cb__19238__auto___19808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736_19806,(1),null);
try{var G__19740_19809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19801,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19808.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19808.cljs$core$IFn$_invoke$arity$1(G__19740_19809) : cb__19238__auto___19808.call(null,G__19740_19809));
}catch (e19739){if((e19739 instanceof java.lang.Exception)){
var e__19239__auto___19810 = e19739;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19807,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19810], 0));
} else {
throw e19739;

}
}
var G__19811 = seq__19732_19802;
var G__19812 = chunk__19733_19803;
var G__19813 = count__19734_19804;
var G__19814 = (i__19735_19805 + (1));
seq__19732_19802 = G__19811;
chunk__19733_19803 = G__19812;
count__19734_19804 = G__19813;
i__19735_19805 = G__19814;
continue;
} else {
var temp__4657__auto___19815 = cljs.core.seq(seq__19732_19802);
if(temp__4657__auto___19815){
var seq__19732_19816__$1 = temp__4657__auto___19815;
if(cljs.core.chunked_seq_QMARK_(seq__19732_19816__$1)){
var c__7616__auto___19817 = cljs.core.chunk_first(seq__19732_19816__$1);
var G__19818 = cljs.core.chunk_rest(seq__19732_19816__$1);
var G__19819 = c__7616__auto___19817;
var G__19820 = cljs.core.count(c__7616__auto___19817);
var G__19821 = (0);
seq__19732_19802 = G__19818;
chunk__19733_19803 = G__19819;
count__19734_19804 = G__19820;
i__19735_19805 = G__19821;
continue;
} else {
var vec__19741_19822 = cljs.core.first(seq__19732_19816__$1);
var k__19237__auto___19823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19741_19822,(0),null);
var cb__19238__auto___19824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19741_19822,(1),null);
try{var G__19745_19825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19801,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19824.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19824.cljs$core$IFn$_invoke$arity$1(G__19745_19825) : cb__19238__auto___19824.call(null,G__19745_19825));
}catch (e19744){if((e19744 instanceof java.lang.Exception)){
var e__19239__auto___19826 = e19744;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19823,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19826], 0));
} else {
throw e19744;

}
}
var G__19827 = cljs.core.next(seq__19732_19816__$1);
var G__19828 = null;
var G__19829 = (0);
var G__19830 = (0);
seq__19732_19802 = G__19827;
chunk__19733_19803 = G__19828;
count__19734_19804 = G__19829;
i__19735_19805 = G__19830;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19731;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19831 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19831;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19832 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19832;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___19833 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___19833)){
var not_reactive_19834 = temp__4657__auto___19833;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_19834], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19835 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19835;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__19750 = re_frame.db.app_db;
var G__19751 = v;
var G__19752 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__19750,G__19751,G__19752) : handler_fn.call(null,G__19750,G__19751,G__19752));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__19753 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19753) : cljs.core.deref.call(null,G__19753));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__19840){
var vec__19841 = p__19840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19841,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(signals) : cljs.core.deref.call(null,signals)):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19844 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19844;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__7917__auto__ = [];
var len__7910__auto___19936 = arguments.length;
var i__7911__auto___19937 = (0);
while(true){
if((i__7911__auto___19937 < len__7910__auto___19936)){
args__7917__auto__.push((arguments[i__7911__auto___19937]));

var G__19938 = (i__7911__auto___19937 + (1));
i__7911__auto___19937 = G__19938;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__19847 = cljs.core.count(input_args);
switch (G__19847) {
case (0):
return ((function (G__19847,computation_fn,input_args,err_header){
return (function() {
var G__19940 = null;
var G__19940__1 = (function (_){
return re_frame.db.app_db;
});
var G__19940__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__19940 = function(_,___$1){
switch(arguments.length){
case 1:
return G__19940__1.call(this,_);
case 2:
return G__19940__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19940.cljs$core$IFn$_invoke$arity$1 = G__19940__1;
G__19940.cljs$core$IFn$_invoke$arity$2 = G__19940__2;
return G__19940;
})()
;})(G__19847,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
return ((function (G__19847,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.second(input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.second(input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__19847,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,vecs,G__19847,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__19847,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19892 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__19907 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19908 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__19907,G__19908) : computation_fn.call(null,G__19907,G__19908));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19235__auto___19941 = re_frame.interop.now();
var duration__19236__auto___19942 = (end__19235__auto___19941 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19893_19943 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__19894_19944 = null;
var count__19895_19945 = (0);
var i__19896_19946 = (0);
while(true){
if((i__19896_19946 < count__19895_19945)){
var vec__19897_19947 = chunk__19894_19944.cljs$core$IIndexed$_nth$arity$2(null,i__19896_19946);
var k__19237__auto___19948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897_19947,(0),null);
var cb__19238__auto___19949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897_19947,(1),null);
try{var G__19901_19950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19942,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19949.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19949.cljs$core$IFn$_invoke$arity$1(G__19901_19950) : cb__19238__auto___19949.call(null,G__19901_19950));
}catch (e19900){if((e19900 instanceof java.lang.Exception)){
var e__19239__auto___19951 = e19900;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19948,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19951], 0));
} else {
throw e19900;

}
}
var G__19952 = seq__19893_19943;
var G__19953 = chunk__19894_19944;
var G__19954 = count__19895_19945;
var G__19955 = (i__19896_19946 + (1));
seq__19893_19943 = G__19952;
chunk__19894_19944 = G__19953;
count__19895_19945 = G__19954;
i__19896_19946 = G__19955;
continue;
} else {
var temp__4657__auto___19956 = cljs.core.seq(seq__19893_19943);
if(temp__4657__auto___19956){
var seq__19893_19957__$1 = temp__4657__auto___19956;
if(cljs.core.chunked_seq_QMARK_(seq__19893_19957__$1)){
var c__7616__auto___19958 = cljs.core.chunk_first(seq__19893_19957__$1);
var G__19959 = cljs.core.chunk_rest(seq__19893_19957__$1);
var G__19960 = c__7616__auto___19958;
var G__19961 = cljs.core.count(c__7616__auto___19958);
var G__19962 = (0);
seq__19893_19943 = G__19959;
chunk__19894_19944 = G__19960;
count__19895_19945 = G__19961;
i__19896_19946 = G__19962;
continue;
} else {
var vec__19902_19963 = cljs.core.first(seq__19893_19957__$1);
var k__19237__auto___19964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19902_19963,(0),null);
var cb__19238__auto___19965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19902_19963,(1),null);
try{var G__19906_19966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19942,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19965.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19965.cljs$core$IFn$_invoke$arity$1(G__19906_19966) : cb__19238__auto___19965.call(null,G__19906_19966));
}catch (e19905){if((e19905 instanceof java.lang.Exception)){
var e__19239__auto___19967 = e19905;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19964,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19967], 0));
} else {
throw e19905;

}
}
var G__19968 = cljs.core.next(seq__19893_19957__$1);
var G__19969 = null;
var G__19970 = (0);
var G__19971 = (0);
seq__19893_19943 = G__19968;
chunk__19894_19944 = G__19969;
count__19895_19945 = G__19970;
i__19896_19946 = G__19971;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19892;
}} else {
var G__19909 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19910 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__19909,G__19910) : computation_fn.call(null,G__19909,G__19910));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__19911_19972 = reaction_id;
var G__19912_19973 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19911_19972,G__19912_19973) : cljs.core.reset_BANG_.call(null,G__19911_19972,G__19912_19973));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19913 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__19928 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19929 = query_vec;
var G__19930 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__19928,G__19929,G__19930) : computation_fn.call(null,G__19928,G__19929,G__19930));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19235__auto___19974 = re_frame.interop.now();
var duration__19236__auto___19975 = (end__19235__auto___19974 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19914_19976 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__19915_19977 = null;
var count__19916_19978 = (0);
var i__19917_19979 = (0);
while(true){
if((i__19917_19979 < count__19916_19978)){
var vec__19918_19980 = chunk__19915_19977.cljs$core$IIndexed$_nth$arity$2(null,i__19917_19979);
var k__19237__auto___19981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918_19980,(0),null);
var cb__19238__auto___19982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918_19980,(1),null);
try{var G__19922_19983 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19975,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19982.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19982.cljs$core$IFn$_invoke$arity$1(G__19922_19983) : cb__19238__auto___19982.call(null,G__19922_19983));
}catch (e19921){if((e19921 instanceof java.lang.Exception)){
var e__19239__auto___19984 = e19921;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19981,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19984], 0));
} else {
throw e19921;

}
}
var G__19985 = seq__19914_19976;
var G__19986 = chunk__19915_19977;
var G__19987 = count__19916_19978;
var G__19988 = (i__19917_19979 + (1));
seq__19914_19976 = G__19985;
chunk__19915_19977 = G__19986;
count__19916_19978 = G__19987;
i__19917_19979 = G__19988;
continue;
} else {
var temp__4657__auto___19989 = cljs.core.seq(seq__19914_19976);
if(temp__4657__auto___19989){
var seq__19914_19990__$1 = temp__4657__auto___19989;
if(cljs.core.chunked_seq_QMARK_(seq__19914_19990__$1)){
var c__7616__auto___19991 = cljs.core.chunk_first(seq__19914_19990__$1);
var G__19992 = cljs.core.chunk_rest(seq__19914_19990__$1);
var G__19993 = c__7616__auto___19991;
var G__19994 = cljs.core.count(c__7616__auto___19991);
var G__19995 = (0);
seq__19914_19976 = G__19992;
chunk__19915_19977 = G__19993;
count__19916_19978 = G__19994;
i__19917_19979 = G__19995;
continue;
} else {
var vec__19923_19996 = cljs.core.first(seq__19914_19990__$1);
var k__19237__auto___19997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19923_19996,(0),null);
var cb__19238__auto___19998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19923_19996,(1),null);
try{var G__19927_19999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19975,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19998.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19998.cljs$core$IFn$_invoke$arity$1(G__19927_19999) : cb__19238__auto___19998.call(null,G__19927_19999));
}catch (e19926){if((e19926 instanceof java.lang.Exception)){
var e__19239__auto___20000 = e19926;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19997,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___20000], 0));
} else {
throw e19926;

}
}
var G__20001 = cljs.core.next(seq__19914_19990__$1);
var G__20002 = null;
var G__20003 = (0);
var G__20004 = (0);
seq__19914_19976 = G__20001;
chunk__19915_19977 = G__20002;
count__19916_19978 = G__20003;
i__19917_19979 = G__20004;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19913;
}} else {
var G__19931 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__19932 = query_vec;
var G__19933 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__19931,G__19932,G__19933) : computation_fn.call(null,G__19931,G__19932,G__19933));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__19934_20005 = reaction_id;
var G__19935_20006 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19934_20005,G__19935_20006) : cljs.core.reset_BANG_.call(null,G__19934_20005,G__19935_20006));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq19845){
var G__19846 = cljs.core.first(seq19845);
var seq19845__$1 = cljs.core.next(seq19845);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__19846,seq19845__$1);
});

