// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
if(typeof re_frisk.data.initialized !== 'undefined'){
} else {
re_frisk.data.initialized = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(typeof re_frisk.data.re_frame_data !== 'undefined'){
} else {
re_frisk.data.re_frame_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof re_frisk.data.re_frame_events !== 'undefined'){
} else {
re_frisk.data.re_frame_events = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frisk.data.deb_data !== 'undefined'){
} else {
re_frisk.data.deb_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_,true], null));
}
