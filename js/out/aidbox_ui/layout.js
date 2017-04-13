// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('aidbox_ui.layout');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('aidbox_ui.db');
goog.require('re_frame.core');
aidbox_ui.layout.layout = (function aidbox_ui$layout$layout(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26907 = arguments.length;
var i__7911__auto___26908 = (0);
while(true){
if((i__7911__auto___26908 < len__7910__auto___26907)){
args__7917__auto__.push((arguments[i__7911__auto___26908]));

var G__26909 = (i__7911__auto___26908 + (1));
i__7911__auto___26908 = G__26909;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return aidbox_ui.layout.layout.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

aidbox_ui.layout.layout.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var user = (function (){var G__26903 = (function (){var G__26904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aidbox_DASH_ui$db_SLASH_auth], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26904) : re_frame.core.subscribe.call(null,G__26904));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26903) : cljs.core.deref.call(null,G__26903));
})();
var page_id = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1((function (){var G__26905 = (function (){var G__26906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aidbox_DASH_ui$db_SLASH_current_DASH_page], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26906) : re_frame.core.subscribe.call(null,G__26906));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26905) : cljs.core.deref.call(null,G__26905));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_aidbox_DASH_root,console.warn(page_id),console.log((function (){var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.cst$kw$videos);
if(and__6785__auto__){
return "active";
} else {
return and__6785__auto__;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$header_DASH_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navigation,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$tabs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$rec,cljs.core.cst$kw$class,(function (){var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.cst$kw$config);
if(and__6785__auto__){
return "active";
} else {
return and__6785__auto__;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),"Recording"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$vid,cljs.core.cst$kw$class,(function (){var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.cst$kw$videos);
if(and__6785__auto__){
return "active";
} else {
return and__6785__auto__;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/videos"], null),"Videos"], null)], null)], null)], null)], null)], null),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$div$current_DASH_page),body))))], null);
});

aidbox_ui.layout.layout.cljs$lang$maxFixedArity = (0);

aidbox_ui.layout.layout.cljs$lang$applyTo = (function (seq26902){
return aidbox_ui.layout.layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26902));
});

