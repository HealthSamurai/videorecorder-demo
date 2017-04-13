// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('aidbox_ui.rf');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_frame.interceptor');
goog.require('re_frame.loggers');
goog.require('clojure.data');
/**
 * An interceptor which logs data about the handling of an event.
 *   Includes a `clojure.data/diff` of the db, before vs after, showing
 *   the changes caused by the event handler.
 *   You'd typically want this interceptor after (to the right of) any
 *   path interceptor.
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. See the todomvc example to see how to exclude interceptors from
 *   production code.
 */
aidbox_ui.rf.debug = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$debug,cljs.core.cst$kw$before,(function aidbox_ui$rf$debug_before(context){
console.group("%cre-frame event","background-color: #74b74c; color: #fff; padding: 2px;",re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event));

return context;
}),cljs.core.cst$kw$after,(function aidbox_ui$rf$debug_after(context){
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$db,cljs.core.cst$kw$aidbox_DASH_ui$rf_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,cljs.core.cst$kw$aidbox_DASH_ui$rf_SLASH_not_DASH_found)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["No :db changes caused by event"], 0));
} else {
var vec__26665_26668 = clojure.data.diff(orig_db,new_db);
var only_before_26669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26665_26668,(0),null);
var only_after_26670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26665_26668,(1),null);
var db_changed_QMARK__26671 = (!((only_before_26669 == null))) || (!((only_after_26670 == null)));
if(db_changed_QMARK__26671){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["before:",only_before_26669], 0));

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["after :",only_after_26670], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["no app-db changes caused by event"], 0));
}
}

console.groupEnd();

return context;
})], 0));
aidbox_ui.rf.global_interceptor = aidbox_ui.rf.debug;
aidbox_ui.rf.reg_event_db = (function aidbox_ui$rf$reg_event_db(var_args){
var args26672 = [];
var len__7910__auto___26675 = arguments.length;
var i__7911__auto___26676 = (0);
while(true){
if((i__7911__auto___26676 < len__7910__auto___26675)){
args26672.push((arguments[i__7911__auto___26676]));

var G__26677 = (i__7911__auto___26676 + (1));
i__7911__auto___26676 = G__26677;
continue;
} else {
}
break;
}

var G__26674 = args26672.length;
switch (G__26674) {
case 2:
return aidbox_ui.rf.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return aidbox_ui.rf.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26672.length)].join('')));

}
});

aidbox_ui.rf.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,db_handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.rf.global_interceptor], null),db_handler);
});

aidbox_ui.rf.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,db_handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.rf.global_interceptor], null),interceptors),db_handler);
});

aidbox_ui.rf.reg_event_db.cljs$lang$maxFixedArity = 3;

aidbox_ui.rf.reg_event_fx = (function aidbox_ui$rf$reg_event_fx(var_args){
var args26679 = [];
var len__7910__auto___26682 = arguments.length;
var i__7911__auto___26683 = (0);
while(true){
if((i__7911__auto___26683 < len__7910__auto___26682)){
args26679.push((arguments[i__7911__auto___26683]));

var G__26684 = (i__7911__auto___26683 + (1));
i__7911__auto___26683 = G__26684;
continue;
} else {
}
break;
}

var G__26681 = args26679.length;
switch (G__26681) {
case 2:
return aidbox_ui.rf.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return aidbox_ui.rf.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26679.length)].join('')));

}
});

aidbox_ui.rf.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.rf.global_interceptor], null),handler);
});

aidbox_ui.rf.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.rf.global_interceptor], null),interceptors),handler);
});

aidbox_ui.rf.reg_event_fx.cljs$lang$maxFixedArity = 3;

