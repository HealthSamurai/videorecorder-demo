// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = (function (){var G__18787 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,console.log.bind(console),cljs.core.cst$kw$warn,console.warn.bind(console),cljs.core.cst$kw$error,console.error.bind(console),cljs.core.cst$kw$group,(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),cljs.core.cst$kw$groupEnd,(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18787) : cljs.core.atom.call(null,G__18787));
})();
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__7917__auto__ = [];
var len__7910__auto___18791 = arguments.length;
var i__7911__auto___18792 = (0);
while(true){
if((i__7911__auto___18792 < len__7910__auto___18791)){
args__7917__auto__.push((arguments[i__7911__auto___18792]));

var G__18793 = (i__7911__auto___18792 + (1));
i__7911__auto___18792 = G__18793;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers)),level)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: log called with unknown level: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(contains? (clojure.core/deref loggers) level)")].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__18790 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers));
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__18790) : level.call(null,G__18790));
})(),args);
});

re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

re_frame.loggers.console.cljs$lang$applyTo = (function (seq18788){
var G__18789 = cljs.core.first(seq18788);
var seq18788__$1 = cljs.core.next(seq18788);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__18789,seq18788__$1);
});

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers))))))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown keys in new-loggers"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))")].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by re-frame.
 */
re_frame.loggers.get_loggers = (function re_frame$loggers$get_loggers(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers));
});
