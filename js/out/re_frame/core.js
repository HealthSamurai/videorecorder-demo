// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.interop');
goog.require('re_frame.db');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('re_frame.router');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.interceptor');
goog.require('re_frame.std_interceptors');
goog.require('clojure.set');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
/**
 * Associate a given `query id` with a given subscription handler function `handler-fn`
 * which is expected to take two arguments: app-db and query vector, and return
 * a `reaction`.
 * 
 *   This is a low level, advanced function.  You should probably be using reg-sub
 *   instead.
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
re_frame.core.reg_fx = re_frame.fx.register;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.register;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
/**
 * Register the given `id`, typically a keyword, with the combination of
 *   `db-handler` and an interceptor chain.
 *   `db-handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors, possibly nested (needs flattening).
 *   `db-handler` is wrapped in an interceptor and added to the end of the chain, so in the end
 * there is only a chain.
 * The necessary effects and coeffects handler are added to the front of the
 * interceptor chain.  These interceptors ensure that app-db is available and updated.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var args20009 = [];
var len__7910__auto___20012 = arguments.length;
var i__7911__auto___20013 = (0);
while(true){
if((i__7911__auto___20013 < len__7910__auto___20012)){
args20009.push((arguments[i__7911__auto___20013]));

var G__20014 = (i__7911__auto___20013 + (1));
i__7911__auto___20013 = G__20014;
continue;
} else {
}
break;
}

var G__20011 = args20009.length;
switch (G__20011) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20009.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,db_handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,db_handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,db_handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(db_handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var args20016 = [];
var len__7910__auto___20019 = arguments.length;
var i__7911__auto___20020 = (0);
while(true){
if((i__7911__auto___20020 < len__7910__auto___20019)){
args20016.push((arguments[i__7911__auto___20020]));

var G__20021 = (i__7911__auto___20020 + (1));
i__7911__auto___20020 = G__20021;
continue;
} else {
}
break;
}

var G__20018 = args20016.length;
switch (G__20018) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20016.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,fx_handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,fx_handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,fx_handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(fx_handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var args20023 = [];
var len__7910__auto___20026 = arguments.length;
var i__7911__auto___20027 = (0);
while(true){
if((i__7911__auto___20027 < len__7910__auto___20026)){
args20023.push((arguments[i__7911__auto___20027]));

var G__20028 = (i__7911__auto___20027 + (1));
i__7911__auto___20027 = G__20028;
continue;
} else {
}
break;
}

var G__20025 = args20023.length;
switch (G__20025) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20023.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
var app_db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db));
var subs_cache = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_20038 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_20039 = cljs.core.set(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction))));
var seq__20034_20040 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_20039,original_subs_20038));
var chunk__20035_20041 = null;
var count__20036_20042 = (0);
var i__20037_20043 = (0);
while(true){
if((i__20037_20043 < count__20036_20042)){
var sub_20044 = chunk__20035_20041.cljs$core$IIndexed$_nth$arity$2(null,i__20037_20043);
re_frame.interop.dispose_BANG_(sub_20044);

var G__20045 = seq__20034_20040;
var G__20046 = chunk__20035_20041;
var G__20047 = count__20036_20042;
var G__20048 = (i__20037_20043 + (1));
seq__20034_20040 = G__20045;
chunk__20035_20041 = G__20046;
count__20036_20042 = G__20047;
i__20037_20043 = G__20048;
continue;
} else {
var temp__4657__auto___20049 = cljs.core.seq(seq__20034_20040);
if(temp__4657__auto___20049){
var seq__20034_20050__$1 = temp__4657__auto___20049;
if(cljs.core.chunked_seq_QMARK_(seq__20034_20050__$1)){
var c__7616__auto___20051 = cljs.core.chunk_first(seq__20034_20050__$1);
var G__20052 = cljs.core.chunk_rest(seq__20034_20050__$1);
var G__20053 = c__7616__auto___20051;
var G__20054 = cljs.core.count(c__7616__auto___20051);
var G__20055 = (0);
seq__20034_20040 = G__20052;
chunk__20035_20041 = G__20053;
count__20036_20042 = G__20054;
i__20037_20043 = G__20055;
continue;
} else {
var sub_20056 = cljs.core.first(seq__20034_20050__$1);
re_frame.interop.dispose_BANG_(sub_20056);

var G__20057 = cljs.core.next(seq__20034_20050__$1);
var G__20058 = null;
var G__20059 = (0);
var G__20060 = (0);
seq__20034_20040 = G__20057;
chunk__20035_20041 = G__20058;
count__20036_20042 = G__20059;
i__20037_20043 = G__20060;
continue;
}
} else {
}
}
break;
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.kind__GT_id__GT_handler,handlers) : cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,handlers));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,app_db) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,app_db));

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var args20061 = [];
var len__7910__auto___20064 = arguments.length;
var i__7911__auto___20065 = (0);
while(true){
if((i__7911__auto___20065 < len__7910__auto___20064)){
args20061.push((arguments[i__7911__auto___20065]));

var G__20066 = (i__7911__auto___20065 + (1));
i__7911__auto___20065 = G__20066;
continue;
} else {
}
break;
}

var G__20063 = args20061.length;
switch (G__20063) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20061.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback(re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback(re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__7917__auto__ = [];
var len__7910__auto___20073 = arguments.length;
var i__7911__auto___20074 = (0);
while(true){
if((i__7911__auto___20074 < len__7910__auto___20073)){
args__7917__auto__.push((arguments[i__7911__auto___20074]));

var G__20075 = (i__7911__auto___20074 + (1));
i__7911__auto___20074 = G__20075;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__20069_20076 = cljs.core.cst$kw$warn;
var G__20070_20077 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ";
var G__20071_20078 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join('');
var G__20072_20079 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__20069_20076,G__20070_20077,G__20071_20078,G__20072_20079) : re_frame.core.console.call(null,G__20069_20076,G__20070_20077,G__20071_20078,G__20072_20079));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq20068){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20068));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__7917__auto__ = [];
var len__7910__auto___20085 = arguments.length;
var i__7911__auto___20086 = (0);
while(true){
if((i__7911__auto___20086 < len__7910__auto___20085)){
args__7917__auto__.push((arguments[i__7911__auto___20086]));

var G__20087 = (i__7911__auto___20086 + (1));
i__7911__auto___20086 = G__20087;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__20081_20088 = cljs.core.cst$kw$warn;
var G__20082_20089 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ";
var G__20083_20090 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join('');
var G__20084_20091 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__20081_20088,G__20082_20089,G__20083_20090,G__20084_20091) : re_frame.core.console.call(null,G__20081_20088,G__20082_20089,G__20083_20090,G__20084_20091));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq20080){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20080));
});

