// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21609 = [];
var len__7910__auto___21615 = arguments.length;
var i__7911__auto___21616 = (0);
while(true){
if((i__7911__auto___21616 < len__7910__auto___21615)){
args21609.push((arguments[i__7911__auto___21616]));

var G__21617 = (i__7911__auto___21616 + (1));
i__7911__auto___21616 = G__21617;
continue;
} else {
}
break;
}

var G__21611 = args21609.length;
switch (G__21611) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21609.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21612 = (function (f,blockable,meta21613){
this.f = f;
this.blockable = blockable;
this.meta21613 = meta21613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21614,meta21613__$1){
var self__ = this;
var _21614__$1 = this;
return (new cljs.core.async.t_cljs$core$async21612(self__.f,self__.blockable,meta21613__$1));
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21614){
var self__ = this;
var _21614__$1 = this;
return self__.meta21613;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta21613], null);
});

cljs.core.async.t_cljs$core$async21612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21612";

cljs.core.async.t_cljs$core$async21612.cljs$lang$ctorPrWriter = (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async21612");
});

cljs.core.async.__GT_t_cljs$core$async21612 = (function cljs$core$async$__GT_t_cljs$core$async21612(f__$1,blockable__$1,meta21613){
return (new cljs.core.async.t_cljs$core$async21612(f__$1,blockable__$1,meta21613));
});

}

return (new cljs.core.async.t_cljs$core$async21612(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21621 = [];
var len__7910__auto___21624 = arguments.length;
var i__7911__auto___21625 = (0);
while(true){
if((i__7911__auto___21625 < len__7910__auto___21624)){
args21621.push((arguments[i__7911__auto___21625]));

var G__21626 = (i__7911__auto___21625 + (1));
i__7911__auto___21625 = G__21626;
continue;
} else {
}
break;
}

var G__21623 = args21621.length;
switch (G__21623) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21621.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21628 = [];
var len__7910__auto___21631 = arguments.length;
var i__7911__auto___21632 = (0);
while(true){
if((i__7911__auto___21632 < len__7910__auto___21631)){
args21628.push((arguments[i__7911__auto___21632]));

var G__21633 = (i__7911__auto___21632 + (1));
i__7911__auto___21632 = G__21633;
continue;
} else {
}
break;
}

var G__21630 = args21628.length;
switch (G__21630) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21628.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21635 = [];
var len__7910__auto___21638 = arguments.length;
var i__7911__auto___21639 = (0);
while(true){
if((i__7911__auto___21639 < len__7910__auto___21638)){
args21635.push((arguments[i__7911__auto___21639]));

var G__21640 = (i__7911__auto___21639 + (1));
i__7911__auto___21639 = G__21640;
continue;
} else {
}
break;
}

var G__21637 = args21635.length;
switch (G__21637) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21635.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_21642 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21642) : fn1.call(null,val_21642));
} else {
cljs.core.async.impl.dispatch.run(((function (val_21642,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21642) : fn1.call(null,val_21642));
});})(val_21642,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21643 = [];
var len__7910__auto___21646 = arguments.length;
var i__7911__auto___21647 = (0);
while(true){
if((i__7911__auto___21647 < len__7910__auto___21646)){
args21643.push((arguments[i__7911__auto___21647]));

var G__21648 = (i__7911__auto___21647 + (1));
i__7911__auto___21647 = G__21648;
continue;
} else {
}
break;
}

var G__21645 = args21643.length;
switch (G__21645) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21643.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7720__auto___21650 = n;
var x_21651 = (0);
while(true){
if((x_21651 < n__7720__auto___21650)){
(a[x_21651] = (0));

var G__21652 = (x_21651 + (1));
x_21651 = G__21652;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__21653 = (i + (1));
i = G__21653;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async21657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21657 = (function (flag,meta21658){
this.flag = flag;
this.meta21658 = meta21658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21659,meta21658__$1){
var self__ = this;
var _21659__$1 = this;
return (new cljs.core.async.t_cljs$core$async21657(self__.flag,meta21658__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21659){
var self__ = this;
var _21659__$1 = this;
return self__.meta21658;
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta21658], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21657";

cljs.core.async.t_cljs$core$async21657.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async21657");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21657 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21657(flag__$1,meta21658){
return (new cljs.core.async.t_cljs$core$async21657(flag__$1,meta21658));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21657(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21663 = (function (flag,cb,meta21664){
this.flag = flag;
this.cb = cb;
this.meta21664 = meta21664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21665,meta21664__$1){
var self__ = this;
var _21665__$1 = this;
return (new cljs.core.async.t_cljs$core$async21663(self__.flag,self__.cb,meta21664__$1));
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21665){
var self__ = this;
var _21665__$1 = this;
return self__.meta21664;
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta21664], null);
});

cljs.core.async.t_cljs$core$async21663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21663";

cljs.core.async.t_cljs$core$async21663.cljs$lang$ctorPrWriter = (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async21663");
});

cljs.core.async.__GT_t_cljs$core$async21663 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21663(flag__$1,cb__$1,meta21664){
return (new cljs.core.async.t_cljs$core$async21663(flag__$1,cb__$1,meta21664));
});

}

return (new cljs.core.async.t_cljs$core$async21663(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21666_SHARP_){
var G__21670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21666_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21670) : fret.call(null,G__21670));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21667_SHARP_){
var G__21671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21667_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21671) : fret.call(null,G__21671));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6797__auto__ = wport;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21672 = (i + (1));
i = G__21672;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6797__auto__ = ret;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6785__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6785__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___21678 = arguments.length;
var i__7911__auto___21679 = (0);
while(true){
if((i__7911__auto___21679 < len__7910__auto___21678)){
args__7917__auto__.push((arguments[i__7911__auto___21679]));

var G__21680 = (i__7911__auto___21679 + (1));
i__7911__auto___21679 = G__21680;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21675){
var map__21676 = p__21675;
var map__21676__$1 = ((((!((map__21676 == null)))?((((map__21676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21676):map__21676);
var opts = map__21676__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21673){
var G__21674 = cljs.core.first(seq21673);
var seq21673__$1 = cljs.core.next(seq21673);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21674,seq21673__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21681 = [];
var len__7910__auto___21731 = arguments.length;
var i__7911__auto___21732 = (0);
while(true){
if((i__7911__auto___21732 < len__7910__auto___21731)){
args21681.push((arguments[i__7911__auto___21732]));

var G__21733 = (i__7911__auto___21732 + (1));
i__7911__auto___21732 = G__21733;
continue;
} else {
}
break;
}

var G__21683 = args21681.length;
switch (G__21683) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21681.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21564__auto___21735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___21735){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___21735){
return (function (state_21707){
var state_val_21708 = (state_21707[(1)]);
if((state_val_21708 === (7))){
var inst_21703 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21709_21736 = state_21707__$1;
(statearr_21709_21736[(2)] = inst_21703);

(statearr_21709_21736[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (1))){
var state_21707__$1 = state_21707;
var statearr_21710_21737 = state_21707__$1;
(statearr_21710_21737[(2)] = null);

(statearr_21710_21737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (4))){
var inst_21686 = (state_21707[(7)]);
var inst_21686__$1 = (state_21707[(2)]);
var inst_21687 = (inst_21686__$1 == null);
var state_21707__$1 = (function (){var statearr_21711 = state_21707;
(statearr_21711[(7)] = inst_21686__$1);

return statearr_21711;
})();
if(cljs.core.truth_(inst_21687)){
var statearr_21712_21738 = state_21707__$1;
(statearr_21712_21738[(1)] = (5));

} else {
var statearr_21713_21739 = state_21707__$1;
(statearr_21713_21739[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (13))){
var state_21707__$1 = state_21707;
var statearr_21714_21740 = state_21707__$1;
(statearr_21714_21740[(2)] = null);

(statearr_21714_21740[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (6))){
var inst_21686 = (state_21707[(7)]);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21707__$1,(11),to,inst_21686);
} else {
if((state_val_21708 === (3))){
var inst_21705 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21707__$1,inst_21705);
} else {
if((state_val_21708 === (12))){
var state_21707__$1 = state_21707;
var statearr_21715_21741 = state_21707__$1;
(statearr_21715_21741[(2)] = null);

(statearr_21715_21741[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (2))){
var state_21707__$1 = state_21707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21707__$1,(4),from);
} else {
if((state_val_21708 === (11))){
var inst_21696 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
if(cljs.core.truth_(inst_21696)){
var statearr_21716_21742 = state_21707__$1;
(statearr_21716_21742[(1)] = (12));

} else {
var statearr_21717_21743 = state_21707__$1;
(statearr_21717_21743[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (9))){
var state_21707__$1 = state_21707;
var statearr_21718_21744 = state_21707__$1;
(statearr_21718_21744[(2)] = null);

(statearr_21718_21744[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (5))){
var state_21707__$1 = state_21707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21719_21745 = state_21707__$1;
(statearr_21719_21745[(1)] = (8));

} else {
var statearr_21720_21746 = state_21707__$1;
(statearr_21720_21746[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (14))){
var inst_21701 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21721_21747 = state_21707__$1;
(statearr_21721_21747[(2)] = inst_21701);

(statearr_21721_21747[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (10))){
var inst_21693 = (state_21707[(2)]);
var state_21707__$1 = state_21707;
var statearr_21722_21748 = state_21707__$1;
(statearr_21722_21748[(2)] = inst_21693);

(statearr_21722_21748[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21708 === (8))){
var inst_21690 = cljs.core.async.close_BANG_(to);
var state_21707__$1 = state_21707;
var statearr_21723_21749 = state_21707__$1;
(statearr_21723_21749[(2)] = inst_21690);

(statearr_21723_21749[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___21735))
;
return ((function (switch__21440__auto__,c__21564__auto___21735){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_21727 = [null,null,null,null,null,null,null,null];
(statearr_21727[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_21727[(1)] = (1));

return statearr_21727;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_21707){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_21707);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e21728){if((e21728 instanceof Object)){
var ex__21444__auto__ = e21728;
var statearr_21729_21750 = state_21707;
(statearr_21729_21750[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21707);

return cljs.core.cst$kw$recur;
} else {
throw e21728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__21751 = state_21707;
state_21707 = G__21751;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_21707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_21707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___21735))
})();
var state__21566__auto__ = (function (){var statearr_21730 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_21730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___21735);

return statearr_21730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___21735))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__21939){
var vec__21940 = p__21939;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(1),null);
var job = vec__21940;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21564__auto___22126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___22126,res,vec__21940,v,p,job,jobs,results){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___22126,res,vec__21940,v,p,job,jobs,results){
return (function (state_21947){
var state_val_21948 = (state_21947[(1)]);
if((state_val_21948 === (1))){
var state_21947__$1 = state_21947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21947__$1,(2),res,v);
} else {
if((state_val_21948 === (2))){
var inst_21944 = (state_21947[(2)]);
var inst_21945 = cljs.core.async.close_BANG_(res);
var state_21947__$1 = (function (){var statearr_21949 = state_21947;
(statearr_21949[(7)] = inst_21944);

return statearr_21949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21947__$1,inst_21945);
} else {
return null;
}
}
});})(c__21564__auto___22126,res,vec__21940,v,p,job,jobs,results))
;
return ((function (switch__21440__auto__,c__21564__auto___22126,res,vec__21940,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0 = (function (){
var statearr_21953 = [null,null,null,null,null,null,null,null];
(statearr_21953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__);

(statearr_21953[(1)] = (1));

return statearr_21953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1 = (function (state_21947){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_21947);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e21954){if((e21954 instanceof Object)){
var ex__21444__auto__ = e21954;
var statearr_21955_22127 = state_21947;
(statearr_21955_22127[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21947);

return cljs.core.cst$kw$recur;
} else {
throw e21954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22128 = state_21947;
state_21947 = G__22128;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = function(state_21947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1.call(this,state_21947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___22126,res,vec__21940,v,p,job,jobs,results))
})();
var state__21566__auto__ = (function (){var statearr_21956 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_21956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22126);

return statearr_21956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___22126,res,vec__21940,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21957){
var vec__21958 = p__21957;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21958,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21958,(1),null);
var job = vec__21958;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7720__auto___22129 = n;
var __22130 = (0);
while(true){
if((__22130 < n__7720__auto___22129)){
var G__21961_22131 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21961_22131) {
case "compute":
var c__21564__auto___22133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22130,c__21564__auto___22133,G__21961_22131,n__7720__auto___22129,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (__22130,c__21564__auto___22133,G__21961_22131,n__7720__auto___22129,jobs,results,process,async){
return (function (state_21974){
var state_val_21975 = (state_21974[(1)]);
if((state_val_21975 === (1))){
var state_21974__$1 = state_21974;
var statearr_21976_22134 = state_21974__$1;
(statearr_21976_22134[(2)] = null);

(statearr_21976_22134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21975 === (2))){
var state_21974__$1 = state_21974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21974__$1,(4),jobs);
} else {
if((state_val_21975 === (3))){
var inst_21972 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21974__$1,inst_21972);
} else {
if((state_val_21975 === (4))){
var inst_21964 = (state_21974[(2)]);
var inst_21965 = process(inst_21964);
var state_21974__$1 = state_21974;
if(cljs.core.truth_(inst_21965)){
var statearr_21977_22135 = state_21974__$1;
(statearr_21977_22135[(1)] = (5));

} else {
var statearr_21978_22136 = state_21974__$1;
(statearr_21978_22136[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21975 === (5))){
var state_21974__$1 = state_21974;
var statearr_21979_22137 = state_21974__$1;
(statearr_21979_22137[(2)] = null);

(statearr_21979_22137[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21975 === (6))){
var state_21974__$1 = state_21974;
var statearr_21980_22138 = state_21974__$1;
(statearr_21980_22138[(2)] = null);

(statearr_21980_22138[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21975 === (7))){
var inst_21970 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_21981_22139 = state_21974__$1;
(statearr_21981_22139[(2)] = inst_21970);

(statearr_21981_22139[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22130,c__21564__auto___22133,G__21961_22131,n__7720__auto___22129,jobs,results,process,async))
;
return ((function (__22130,switch__21440__auto__,c__21564__auto___22133,G__21961_22131,n__7720__auto___22129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0 = (function (){
var statearr_21985 = [null,null,null,null,null,null,null];
(statearr_21985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__);

(statearr_21985[(1)] = (1));

return statearr_21985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1 = (function (state_21974){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_21974);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e21986){if((e21986 instanceof Object)){
var ex__21444__auto__ = e21986;
var statearr_21987_22140 = state_21974;
(statearr_21987_22140[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21974);

return cljs.core.cst$kw$recur;
} else {
throw e21986;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22141 = state_21974;
state_21974 = G__22141;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = function(state_21974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1.call(this,state_21974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__;
})()
;})(__22130,switch__21440__auto__,c__21564__auto___22133,G__21961_22131,n__7720__auto___22129,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_21988 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_21988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22133);

return statearr_21988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(__22130,c__21564__auto___22133,G__21961_22131,n__7720__auto___22129,jobs,results,process,async))
);


break;
case "async":
var c__21564__auto___22142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22130,c__21564__auto___22142,G__21961_22131,n__7720__auto___22129,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (__22130,c__21564__auto___22142,G__21961_22131,n__7720__auto___22129,jobs,results,process,async){
return (function (state_22001){
var state_val_22002 = (state_22001[(1)]);
if((state_val_22002 === (1))){
var state_22001__$1 = state_22001;
var statearr_22003_22143 = state_22001__$1;
(statearr_22003_22143[(2)] = null);

(statearr_22003_22143[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22002 === (2))){
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22001__$1,(4),jobs);
} else {
if((state_val_22002 === (3))){
var inst_21999 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22001__$1,inst_21999);
} else {
if((state_val_22002 === (4))){
var inst_21991 = (state_22001[(2)]);
var inst_21992 = async(inst_21991);
var state_22001__$1 = state_22001;
if(cljs.core.truth_(inst_21992)){
var statearr_22004_22144 = state_22001__$1;
(statearr_22004_22144[(1)] = (5));

} else {
var statearr_22005_22145 = state_22001__$1;
(statearr_22005_22145[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22002 === (5))){
var state_22001__$1 = state_22001;
var statearr_22006_22146 = state_22001__$1;
(statearr_22006_22146[(2)] = null);

(statearr_22006_22146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22002 === (6))){
var state_22001__$1 = state_22001;
var statearr_22007_22147 = state_22001__$1;
(statearr_22007_22147[(2)] = null);

(statearr_22007_22147[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22002 === (7))){
var inst_21997 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22008_22148 = state_22001__$1;
(statearr_22008_22148[(2)] = inst_21997);

(statearr_22008_22148[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22130,c__21564__auto___22142,G__21961_22131,n__7720__auto___22129,jobs,results,process,async))
;
return ((function (__22130,switch__21440__auto__,c__21564__auto___22142,G__21961_22131,n__7720__auto___22129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0 = (function (){
var statearr_22012 = [null,null,null,null,null,null,null];
(statearr_22012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__);

(statearr_22012[(1)] = (1));

return statearr_22012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1 = (function (state_22001){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_22001);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e22013){if((e22013 instanceof Object)){
var ex__21444__auto__ = e22013;
var statearr_22014_22149 = state_22001;
(statearr_22014_22149[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22001);

return cljs.core.cst$kw$recur;
} else {
throw e22013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22150 = state_22001;
state_22001 = G__22150;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = function(state_22001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1.call(this,state_22001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__;
})()
;})(__22130,switch__21440__auto__,c__21564__auto___22142,G__21961_22131,n__7720__auto___22129,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_22015 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_22015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22142);

return statearr_22015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(__22130,c__21564__auto___22142,G__21961_22131,n__7720__auto___22129,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__22151 = (__22130 + (1));
__22130 = G__22151;
continue;
} else {
}
break;
}

var c__21564__auto___22152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___22152,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___22152,jobs,results,process,async){
return (function (state_22037){
var state_val_22038 = (state_22037[(1)]);
if((state_val_22038 === (1))){
var state_22037__$1 = state_22037;
var statearr_22039_22153 = state_22037__$1;
(statearr_22039_22153[(2)] = null);

(statearr_22039_22153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22038 === (2))){
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22037__$1,(4),from);
} else {
if((state_val_22038 === (3))){
var inst_22035 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22037__$1,inst_22035);
} else {
if((state_val_22038 === (4))){
var inst_22018 = (state_22037[(7)]);
var inst_22018__$1 = (state_22037[(2)]);
var inst_22019 = (inst_22018__$1 == null);
var state_22037__$1 = (function (){var statearr_22040 = state_22037;
(statearr_22040[(7)] = inst_22018__$1);

return statearr_22040;
})();
if(cljs.core.truth_(inst_22019)){
var statearr_22041_22154 = state_22037__$1;
(statearr_22041_22154[(1)] = (5));

} else {
var statearr_22042_22155 = state_22037__$1;
(statearr_22042_22155[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22038 === (5))){
var inst_22021 = cljs.core.async.close_BANG_(jobs);
var state_22037__$1 = state_22037;
var statearr_22043_22156 = state_22037__$1;
(statearr_22043_22156[(2)] = inst_22021);

(statearr_22043_22156[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22038 === (6))){
var inst_22023 = (state_22037[(8)]);
var inst_22018 = (state_22037[(7)]);
var inst_22023__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22025 = [inst_22018,inst_22023__$1];
var inst_22026 = (new cljs.core.PersistentVector(null,2,(5),inst_22024,inst_22025,null));
var state_22037__$1 = (function (){var statearr_22044 = state_22037;
(statearr_22044[(8)] = inst_22023__$1);

return statearr_22044;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22037__$1,(8),jobs,inst_22026);
} else {
if((state_val_22038 === (7))){
var inst_22033 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22045_22157 = state_22037__$1;
(statearr_22045_22157[(2)] = inst_22033);

(statearr_22045_22157[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22038 === (8))){
var inst_22023 = (state_22037[(8)]);
var inst_22028 = (state_22037[(2)]);
var state_22037__$1 = (function (){var statearr_22046 = state_22037;
(statearr_22046[(9)] = inst_22028);

return statearr_22046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22037__$1,(9),results,inst_22023);
} else {
if((state_val_22038 === (9))){
var inst_22030 = (state_22037[(2)]);
var state_22037__$1 = (function (){var statearr_22047 = state_22037;
(statearr_22047[(10)] = inst_22030);

return statearr_22047;
})();
var statearr_22048_22158 = state_22037__$1;
(statearr_22048_22158[(2)] = null);

(statearr_22048_22158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___22152,jobs,results,process,async))
;
return ((function (switch__21440__auto__,c__21564__auto___22152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0 = (function (){
var statearr_22052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__);

(statearr_22052[(1)] = (1));

return statearr_22052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1 = (function (state_22037){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_22037);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e22053){if((e22053 instanceof Object)){
var ex__21444__auto__ = e22053;
var statearr_22054_22159 = state_22037;
(statearr_22054_22159[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22037);

return cljs.core.cst$kw$recur;
} else {
throw e22053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22160 = state_22037;
state_22037 = G__22160;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = function(state_22037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1.call(this,state_22037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___22152,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_22055 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_22055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22152);

return statearr_22055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___22152,jobs,results,process,async))
);


var c__21564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto__,jobs,results,process,async){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto__,jobs,results,process,async){
return (function (state_22093){
var state_val_22094 = (state_22093[(1)]);
if((state_val_22094 === (7))){
var inst_22089 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22095_22161 = state_22093__$1;
(statearr_22095_22161[(2)] = inst_22089);

(statearr_22095_22161[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (20))){
var state_22093__$1 = state_22093;
var statearr_22096_22162 = state_22093__$1;
(statearr_22096_22162[(2)] = null);

(statearr_22096_22162[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (1))){
var state_22093__$1 = state_22093;
var statearr_22097_22163 = state_22093__$1;
(statearr_22097_22163[(2)] = null);

(statearr_22097_22163[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (4))){
var inst_22058 = (state_22093[(7)]);
var inst_22058__$1 = (state_22093[(2)]);
var inst_22059 = (inst_22058__$1 == null);
var state_22093__$1 = (function (){var statearr_22098 = state_22093;
(statearr_22098[(7)] = inst_22058__$1);

return statearr_22098;
})();
if(cljs.core.truth_(inst_22059)){
var statearr_22099_22164 = state_22093__$1;
(statearr_22099_22164[(1)] = (5));

} else {
var statearr_22100_22165 = state_22093__$1;
(statearr_22100_22165[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (15))){
var inst_22071 = (state_22093[(8)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22093__$1,(18),to,inst_22071);
} else {
if((state_val_22094 === (21))){
var inst_22084 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22101_22166 = state_22093__$1;
(statearr_22101_22166[(2)] = inst_22084);

(statearr_22101_22166[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (13))){
var inst_22086 = (state_22093[(2)]);
var state_22093__$1 = (function (){var statearr_22102 = state_22093;
(statearr_22102[(9)] = inst_22086);

return statearr_22102;
})();
var statearr_22103_22167 = state_22093__$1;
(statearr_22103_22167[(2)] = null);

(statearr_22103_22167[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (6))){
var inst_22058 = (state_22093[(7)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22093__$1,(11),inst_22058);
} else {
if((state_val_22094 === (17))){
var inst_22079 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
if(cljs.core.truth_(inst_22079)){
var statearr_22104_22168 = state_22093__$1;
(statearr_22104_22168[(1)] = (19));

} else {
var statearr_22105_22169 = state_22093__$1;
(statearr_22105_22169[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (3))){
var inst_22091 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22093__$1,inst_22091);
} else {
if((state_val_22094 === (12))){
var inst_22068 = (state_22093[(10)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22093__$1,(14),inst_22068);
} else {
if((state_val_22094 === (2))){
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22093__$1,(4),results);
} else {
if((state_val_22094 === (19))){
var state_22093__$1 = state_22093;
var statearr_22106_22170 = state_22093__$1;
(statearr_22106_22170[(2)] = null);

(statearr_22106_22170[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (11))){
var inst_22068 = (state_22093[(2)]);
var state_22093__$1 = (function (){var statearr_22107 = state_22093;
(statearr_22107[(10)] = inst_22068);

return statearr_22107;
})();
var statearr_22108_22171 = state_22093__$1;
(statearr_22108_22171[(2)] = null);

(statearr_22108_22171[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (9))){
var state_22093__$1 = state_22093;
var statearr_22109_22172 = state_22093__$1;
(statearr_22109_22172[(2)] = null);

(statearr_22109_22172[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (5))){
var state_22093__$1 = state_22093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22110_22173 = state_22093__$1;
(statearr_22110_22173[(1)] = (8));

} else {
var statearr_22111_22174 = state_22093__$1;
(statearr_22111_22174[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (14))){
var inst_22071 = (state_22093[(8)]);
var inst_22073 = (state_22093[(11)]);
var inst_22071__$1 = (state_22093[(2)]);
var inst_22072 = (inst_22071__$1 == null);
var inst_22073__$1 = cljs.core.not(inst_22072);
var state_22093__$1 = (function (){var statearr_22112 = state_22093;
(statearr_22112[(8)] = inst_22071__$1);

(statearr_22112[(11)] = inst_22073__$1);

return statearr_22112;
})();
if(inst_22073__$1){
var statearr_22113_22175 = state_22093__$1;
(statearr_22113_22175[(1)] = (15));

} else {
var statearr_22114_22176 = state_22093__$1;
(statearr_22114_22176[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (16))){
var inst_22073 = (state_22093[(11)]);
var state_22093__$1 = state_22093;
var statearr_22115_22177 = state_22093__$1;
(statearr_22115_22177[(2)] = inst_22073);

(statearr_22115_22177[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (10))){
var inst_22065 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22116_22178 = state_22093__$1;
(statearr_22116_22178[(2)] = inst_22065);

(statearr_22116_22178[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (18))){
var inst_22076 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22117_22179 = state_22093__$1;
(statearr_22117_22179[(2)] = inst_22076);

(statearr_22117_22179[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22094 === (8))){
var inst_22062 = cljs.core.async.close_BANG_(to);
var state_22093__$1 = state_22093;
var statearr_22118_22180 = state_22093__$1;
(statearr_22118_22180[(2)] = inst_22062);

(statearr_22118_22180[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto__,jobs,results,process,async))
;
return ((function (switch__21440__auto__,c__21564__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0 = (function (){
var statearr_22122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__);

(statearr_22122[(1)] = (1));

return statearr_22122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1 = (function (state_22093){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_22093);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e22123){if((e22123 instanceof Object)){
var ex__21444__auto__ = e22123;
var statearr_22124_22181 = state_22093;
(statearr_22124_22181[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22093);

return cljs.core.cst$kw$recur;
} else {
throw e22123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22182 = state_22093;
state_22093 = G__22182;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__ = function(state_22093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1.call(this,state_22093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto__,jobs,results,process,async))
})();
var state__21566__auto__ = (function (){var statearr_22125 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_22125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_22125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto__,jobs,results,process,async))
);

return c__21564__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22183 = [];
var len__7910__auto___22186 = arguments.length;
var i__7911__auto___22187 = (0);
while(true){
if((i__7911__auto___22187 < len__7910__auto___22186)){
args22183.push((arguments[i__7911__auto___22187]));

var G__22188 = (i__7911__auto___22187 + (1));
i__7911__auto___22187 = G__22188;
continue;
} else {
}
break;
}

var G__22185 = args22183.length;
switch (G__22185) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22183.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22190 = [];
var len__7910__auto___22193 = arguments.length;
var i__7911__auto___22194 = (0);
while(true){
if((i__7911__auto___22194 < len__7910__auto___22193)){
args22190.push((arguments[i__7911__auto___22194]));

var G__22195 = (i__7911__auto___22194 + (1));
i__7911__auto___22194 = G__22195;
continue;
} else {
}
break;
}

var G__22192 = args22190.length;
switch (G__22192) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22190.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22197 = [];
var len__7910__auto___22250 = arguments.length;
var i__7911__auto___22251 = (0);
while(true){
if((i__7911__auto___22251 < len__7910__auto___22250)){
args22197.push((arguments[i__7911__auto___22251]));

var G__22252 = (i__7911__auto___22251 + (1));
i__7911__auto___22251 = G__22252;
continue;
} else {
}
break;
}

var G__22199 = args22197.length;
switch (G__22199) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22197.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21564__auto___22254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___22254,tc,fc){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___22254,tc,fc){
return (function (state_22225){
var state_val_22226 = (state_22225[(1)]);
if((state_val_22226 === (7))){
var inst_22221 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
var statearr_22227_22255 = state_22225__$1;
(statearr_22227_22255[(2)] = inst_22221);

(statearr_22227_22255[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (1))){
var state_22225__$1 = state_22225;
var statearr_22228_22256 = state_22225__$1;
(statearr_22228_22256[(2)] = null);

(statearr_22228_22256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (4))){
var inst_22202 = (state_22225[(7)]);
var inst_22202__$1 = (state_22225[(2)]);
var inst_22203 = (inst_22202__$1 == null);
var state_22225__$1 = (function (){var statearr_22229 = state_22225;
(statearr_22229[(7)] = inst_22202__$1);

return statearr_22229;
})();
if(cljs.core.truth_(inst_22203)){
var statearr_22230_22257 = state_22225__$1;
(statearr_22230_22257[(1)] = (5));

} else {
var statearr_22231_22258 = state_22225__$1;
(statearr_22231_22258[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (13))){
var state_22225__$1 = state_22225;
var statearr_22232_22259 = state_22225__$1;
(statearr_22232_22259[(2)] = null);

(statearr_22232_22259[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (6))){
var inst_22202 = (state_22225[(7)]);
var inst_22208 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22202) : p.call(null,inst_22202));
var state_22225__$1 = state_22225;
if(cljs.core.truth_(inst_22208)){
var statearr_22233_22260 = state_22225__$1;
(statearr_22233_22260[(1)] = (9));

} else {
var statearr_22234_22261 = state_22225__$1;
(statearr_22234_22261[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (3))){
var inst_22223 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22225__$1,inst_22223);
} else {
if((state_val_22226 === (12))){
var state_22225__$1 = state_22225;
var statearr_22235_22262 = state_22225__$1;
(statearr_22235_22262[(2)] = null);

(statearr_22235_22262[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (2))){
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22225__$1,(4),ch);
} else {
if((state_val_22226 === (11))){
var inst_22202 = (state_22225[(7)]);
var inst_22212 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22225__$1,(8),inst_22212,inst_22202);
} else {
if((state_val_22226 === (9))){
var state_22225__$1 = state_22225;
var statearr_22236_22263 = state_22225__$1;
(statearr_22236_22263[(2)] = tc);

(statearr_22236_22263[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (5))){
var inst_22205 = cljs.core.async.close_BANG_(tc);
var inst_22206 = cljs.core.async.close_BANG_(fc);
var state_22225__$1 = (function (){var statearr_22237 = state_22225;
(statearr_22237[(8)] = inst_22205);

return statearr_22237;
})();
var statearr_22238_22264 = state_22225__$1;
(statearr_22238_22264[(2)] = inst_22206);

(statearr_22238_22264[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (14))){
var inst_22219 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
var statearr_22239_22265 = state_22225__$1;
(statearr_22239_22265[(2)] = inst_22219);

(statearr_22239_22265[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (10))){
var state_22225__$1 = state_22225;
var statearr_22240_22266 = state_22225__$1;
(statearr_22240_22266[(2)] = fc);

(statearr_22240_22266[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22226 === (8))){
var inst_22214 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
if(cljs.core.truth_(inst_22214)){
var statearr_22241_22267 = state_22225__$1;
(statearr_22241_22267[(1)] = (12));

} else {
var statearr_22242_22268 = state_22225__$1;
(statearr_22242_22268[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___22254,tc,fc))
;
return ((function (switch__21440__auto__,c__21564__auto___22254,tc,fc){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_22246 = [null,null,null,null,null,null,null,null,null];
(statearr_22246[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_22246[(1)] = (1));

return statearr_22246;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_22225){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_22225);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e22247){if((e22247 instanceof Object)){
var ex__21444__auto__ = e22247;
var statearr_22248_22269 = state_22225;
(statearr_22248_22269[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22225);

return cljs.core.cst$kw$recur;
} else {
throw e22247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22270 = state_22225;
state_22225 = G__22270;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_22225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_22225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___22254,tc,fc))
})();
var state__21566__auto__ = (function (){var statearr_22249 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_22249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22254);

return statearr_22249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___22254,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto__){
return (function (state_22334){
var state_val_22335 = (state_22334[(1)]);
if((state_val_22335 === (7))){
var inst_22330 = (state_22334[(2)]);
var state_22334__$1 = state_22334;
var statearr_22336_22357 = state_22334__$1;
(statearr_22336_22357[(2)] = inst_22330);

(statearr_22336_22357[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22335 === (1))){
var inst_22314 = init;
var state_22334__$1 = (function (){var statearr_22337 = state_22334;
(statearr_22337[(7)] = inst_22314);

return statearr_22337;
})();
var statearr_22338_22358 = state_22334__$1;
(statearr_22338_22358[(2)] = null);

(statearr_22338_22358[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22335 === (4))){
var inst_22317 = (state_22334[(8)]);
var inst_22317__$1 = (state_22334[(2)]);
var inst_22318 = (inst_22317__$1 == null);
var state_22334__$1 = (function (){var statearr_22339 = state_22334;
(statearr_22339[(8)] = inst_22317__$1);

return statearr_22339;
})();
if(cljs.core.truth_(inst_22318)){
var statearr_22340_22359 = state_22334__$1;
(statearr_22340_22359[(1)] = (5));

} else {
var statearr_22341_22360 = state_22334__$1;
(statearr_22341_22360[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22335 === (6))){
var inst_22314 = (state_22334[(7)]);
var inst_22317 = (state_22334[(8)]);
var inst_22321 = (state_22334[(9)]);
var inst_22321__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22314,inst_22317) : f.call(null,inst_22314,inst_22317));
var inst_22322 = cljs.core.reduced_QMARK_(inst_22321__$1);
var state_22334__$1 = (function (){var statearr_22342 = state_22334;
(statearr_22342[(9)] = inst_22321__$1);

return statearr_22342;
})();
if(inst_22322){
var statearr_22343_22361 = state_22334__$1;
(statearr_22343_22361[(1)] = (8));

} else {
var statearr_22344_22362 = state_22334__$1;
(statearr_22344_22362[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22335 === (3))){
var inst_22332 = (state_22334[(2)]);
var state_22334__$1 = state_22334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22334__$1,inst_22332);
} else {
if((state_val_22335 === (2))){
var state_22334__$1 = state_22334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22334__$1,(4),ch);
} else {
if((state_val_22335 === (9))){
var inst_22321 = (state_22334[(9)]);
var inst_22314 = inst_22321;
var state_22334__$1 = (function (){var statearr_22345 = state_22334;
(statearr_22345[(7)] = inst_22314);

return statearr_22345;
})();
var statearr_22346_22363 = state_22334__$1;
(statearr_22346_22363[(2)] = null);

(statearr_22346_22363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22335 === (5))){
var inst_22314 = (state_22334[(7)]);
var state_22334__$1 = state_22334;
var statearr_22347_22364 = state_22334__$1;
(statearr_22347_22364[(2)] = inst_22314);

(statearr_22347_22364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22335 === (10))){
var inst_22328 = (state_22334[(2)]);
var state_22334__$1 = state_22334;
var statearr_22348_22365 = state_22334__$1;
(statearr_22348_22365[(2)] = inst_22328);

(statearr_22348_22365[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22335 === (8))){
var inst_22321 = (state_22334[(9)]);
var inst_22324 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_22321) : cljs.core.deref.call(null,inst_22321));
var state_22334__$1 = state_22334;
var statearr_22349_22366 = state_22334__$1;
(statearr_22349_22366[(2)] = inst_22324);

(statearr_22349_22366[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto__))
;
return ((function (switch__21440__auto__,c__21564__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21441__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21441__auto____0 = (function (){
var statearr_22353 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22353[(0)] = cljs$core$async$reduce_$_state_machine__21441__auto__);

(statearr_22353[(1)] = (1));

return statearr_22353;
});
var cljs$core$async$reduce_$_state_machine__21441__auto____1 = (function (state_22334){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_22334);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e22354){if((e22354 instanceof Object)){
var ex__21444__auto__ = e22354;
var statearr_22355_22367 = state_22334;
(statearr_22355_22367[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22334);

return cljs.core.cst$kw$recur;
} else {
throw e22354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22368 = state_22334;
state_22334 = G__22368;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21441__auto__ = function(state_22334){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21441__auto____1.call(this,state_22334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21441__auto____0;
cljs$core$async$reduce_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21441__auto____1;
return cljs$core$async$reduce_$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_22356 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_22356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_22356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22369 = [];
var len__7910__auto___22421 = arguments.length;
var i__7911__auto___22422 = (0);
while(true){
if((i__7911__auto___22422 < len__7910__auto___22421)){
args22369.push((arguments[i__7911__auto___22422]));

var G__22423 = (i__7911__auto___22422 + (1));
i__7911__auto___22422 = G__22423;
continue;
} else {
}
break;
}

var G__22371 = args22369.length;
switch (G__22371) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22369.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto__){
return (function (state_22396){
var state_val_22397 = (state_22396[(1)]);
if((state_val_22397 === (7))){
var inst_22378 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22398_22425 = state_22396__$1;
(statearr_22398_22425[(2)] = inst_22378);

(statearr_22398_22425[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (1))){
var inst_22372 = cljs.core.seq(coll);
var inst_22373 = inst_22372;
var state_22396__$1 = (function (){var statearr_22399 = state_22396;
(statearr_22399[(7)] = inst_22373);

return statearr_22399;
})();
var statearr_22400_22426 = state_22396__$1;
(statearr_22400_22426[(2)] = null);

(statearr_22400_22426[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (4))){
var inst_22373 = (state_22396[(7)]);
var inst_22376 = cljs.core.first(inst_22373);
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22396__$1,(7),ch,inst_22376);
} else {
if((state_val_22397 === (13))){
var inst_22390 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22401_22427 = state_22396__$1;
(statearr_22401_22427[(2)] = inst_22390);

(statearr_22401_22427[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (6))){
var inst_22381 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
if(cljs.core.truth_(inst_22381)){
var statearr_22402_22428 = state_22396__$1;
(statearr_22402_22428[(1)] = (8));

} else {
var statearr_22403_22429 = state_22396__$1;
(statearr_22403_22429[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (3))){
var inst_22394 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22396__$1,inst_22394);
} else {
if((state_val_22397 === (12))){
var state_22396__$1 = state_22396;
var statearr_22404_22430 = state_22396__$1;
(statearr_22404_22430[(2)] = null);

(statearr_22404_22430[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (2))){
var inst_22373 = (state_22396[(7)]);
var state_22396__$1 = state_22396;
if(cljs.core.truth_(inst_22373)){
var statearr_22405_22431 = state_22396__$1;
(statearr_22405_22431[(1)] = (4));

} else {
var statearr_22406_22432 = state_22396__$1;
(statearr_22406_22432[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (11))){
var inst_22387 = cljs.core.async.close_BANG_(ch);
var state_22396__$1 = state_22396;
var statearr_22407_22433 = state_22396__$1;
(statearr_22407_22433[(2)] = inst_22387);

(statearr_22407_22433[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (9))){
var state_22396__$1 = state_22396;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22408_22434 = state_22396__$1;
(statearr_22408_22434[(1)] = (11));

} else {
var statearr_22409_22435 = state_22396__$1;
(statearr_22409_22435[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (5))){
var inst_22373 = (state_22396[(7)]);
var state_22396__$1 = state_22396;
var statearr_22410_22436 = state_22396__$1;
(statearr_22410_22436[(2)] = inst_22373);

(statearr_22410_22436[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (10))){
var inst_22392 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22411_22437 = state_22396__$1;
(statearr_22411_22437[(2)] = inst_22392);

(statearr_22411_22437[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22397 === (8))){
var inst_22373 = (state_22396[(7)]);
var inst_22383 = cljs.core.next(inst_22373);
var inst_22373__$1 = inst_22383;
var state_22396__$1 = (function (){var statearr_22412 = state_22396;
(statearr_22412[(7)] = inst_22373__$1);

return statearr_22412;
})();
var statearr_22413_22438 = state_22396__$1;
(statearr_22413_22438[(2)] = null);

(statearr_22413_22438[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto__))
;
return ((function (switch__21440__auto__,c__21564__auto__){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_22417 = [null,null,null,null,null,null,null,null];
(statearr_22417[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_22417[(1)] = (1));

return statearr_22417;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_22396){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_22396);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e22418){if((e22418 instanceof Object)){
var ex__21444__auto__ = e22418;
var statearr_22419_22439 = state_22396;
(statearr_22419_22439[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22396);

return cljs.core.cst$kw$recur;
} else {
throw e22418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22440 = state_22396;
state_22396 = G__22440;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_22396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_22396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_22420 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_22420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_22420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7465__auto__ = (((_ == null))?null:_);
var m__7466__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7466__auto__.call(null,_));
} else {
var m__7466__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7466__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7466__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7466__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7466__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7466__auto__.call(null,m,ch));
} else {
var m__7466__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7466__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7466__auto__.call(null,m));
} else {
var m__7466__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7466__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__22669 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22669) : cljs.core.atom.call(null,G__22669));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22670 = (function (ch,cs,meta22671){
this.ch = ch;
this.cs = cs;
this.meta22671 = meta22671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22672,meta22671__$1){
var self__ = this;
var _22672__$1 = this;
return (new cljs.core.async.t_cljs$core$async22670(self__.ch,self__.cs,meta22671__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22672){
var self__ = this;
var _22672__$1 = this;
return self__.meta22671;
});})(cs))
;

cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22670.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22673_22897 = self__.cs;
var G__22674_22898 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22673_22897,G__22674_22898) : cljs.core.reset_BANG_.call(null,G__22673_22897,G__22674_22898));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22670.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta22671], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22670";

cljs.core.async.t_cljs$core$async22670.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async22670");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22670 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22670(ch__$1,cs__$1,meta22671){
return (new cljs.core.async.t_cljs$core$async22670(ch__$1,cs__$1,meta22671));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22670(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21564__auto___22899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___22899,cs,m,dchan,dctr,done){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___22899,cs,m,dchan,dctr,done){
return (function (state_22809){
var state_val_22810 = (state_22809[(1)]);
if((state_val_22810 === (7))){
var inst_22805 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22811_22900 = state_22809__$1;
(statearr_22811_22900[(2)] = inst_22805);

(statearr_22811_22900[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (20))){
var inst_22708 = (state_22809[(7)]);
var inst_22720 = cljs.core.first(inst_22708);
var inst_22721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22720,(0),null);
var inst_22722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22720,(1),null);
var state_22809__$1 = (function (){var statearr_22812 = state_22809;
(statearr_22812[(8)] = inst_22721);

return statearr_22812;
})();
if(cljs.core.truth_(inst_22722)){
var statearr_22813_22901 = state_22809__$1;
(statearr_22813_22901[(1)] = (22));

} else {
var statearr_22814_22902 = state_22809__$1;
(statearr_22814_22902[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (27))){
var inst_22752 = (state_22809[(9)]);
var inst_22750 = (state_22809[(10)]);
var inst_22757 = (state_22809[(11)]);
var inst_22677 = (state_22809[(12)]);
var inst_22757__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22750,inst_22752);
var inst_22758 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22757__$1,inst_22677,done);
var state_22809__$1 = (function (){var statearr_22815 = state_22809;
(statearr_22815[(11)] = inst_22757__$1);

return statearr_22815;
})();
if(cljs.core.truth_(inst_22758)){
var statearr_22816_22903 = state_22809__$1;
(statearr_22816_22903[(1)] = (30));

} else {
var statearr_22817_22904 = state_22809__$1;
(statearr_22817_22904[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (1))){
var state_22809__$1 = state_22809;
var statearr_22818_22905 = state_22809__$1;
(statearr_22818_22905[(2)] = null);

(statearr_22818_22905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (24))){
var inst_22708 = (state_22809[(7)]);
var inst_22727 = (state_22809[(2)]);
var inst_22728 = cljs.core.next(inst_22708);
var inst_22686 = inst_22728;
var inst_22687 = null;
var inst_22688 = (0);
var inst_22689 = (0);
var state_22809__$1 = (function (){var statearr_22819 = state_22809;
(statearr_22819[(13)] = inst_22689);

(statearr_22819[(14)] = inst_22686);

(statearr_22819[(15)] = inst_22687);

(statearr_22819[(16)] = inst_22727);

(statearr_22819[(17)] = inst_22688);

return statearr_22819;
})();
var statearr_22820_22906 = state_22809__$1;
(statearr_22820_22906[(2)] = null);

(statearr_22820_22906[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (39))){
var state_22809__$1 = state_22809;
var statearr_22824_22907 = state_22809__$1;
(statearr_22824_22907[(2)] = null);

(statearr_22824_22907[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (4))){
var inst_22677 = (state_22809[(12)]);
var inst_22677__$1 = (state_22809[(2)]);
var inst_22678 = (inst_22677__$1 == null);
var state_22809__$1 = (function (){var statearr_22825 = state_22809;
(statearr_22825[(12)] = inst_22677__$1);

return statearr_22825;
})();
if(cljs.core.truth_(inst_22678)){
var statearr_22826_22908 = state_22809__$1;
(statearr_22826_22908[(1)] = (5));

} else {
var statearr_22827_22909 = state_22809__$1;
(statearr_22827_22909[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (15))){
var inst_22689 = (state_22809[(13)]);
var inst_22686 = (state_22809[(14)]);
var inst_22687 = (state_22809[(15)]);
var inst_22688 = (state_22809[(17)]);
var inst_22704 = (state_22809[(2)]);
var inst_22705 = (inst_22689 + (1));
var tmp22821 = inst_22686;
var tmp22822 = inst_22687;
var tmp22823 = inst_22688;
var inst_22686__$1 = tmp22821;
var inst_22687__$1 = tmp22822;
var inst_22688__$1 = tmp22823;
var inst_22689__$1 = inst_22705;
var state_22809__$1 = (function (){var statearr_22828 = state_22809;
(statearr_22828[(13)] = inst_22689__$1);

(statearr_22828[(18)] = inst_22704);

(statearr_22828[(14)] = inst_22686__$1);

(statearr_22828[(15)] = inst_22687__$1);

(statearr_22828[(17)] = inst_22688__$1);

return statearr_22828;
})();
var statearr_22829_22910 = state_22809__$1;
(statearr_22829_22910[(2)] = null);

(statearr_22829_22910[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (21))){
var inst_22731 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22833_22911 = state_22809__$1;
(statearr_22833_22911[(2)] = inst_22731);

(statearr_22833_22911[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (31))){
var inst_22757 = (state_22809[(11)]);
var inst_22761 = done(null);
var inst_22762 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22757);
var state_22809__$1 = (function (){var statearr_22834 = state_22809;
(statearr_22834[(19)] = inst_22761);

return statearr_22834;
})();
var statearr_22835_22912 = state_22809__$1;
(statearr_22835_22912[(2)] = inst_22762);

(statearr_22835_22912[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (32))){
var inst_22752 = (state_22809[(9)]);
var inst_22750 = (state_22809[(10)]);
var inst_22749 = (state_22809[(20)]);
var inst_22751 = (state_22809[(21)]);
var inst_22764 = (state_22809[(2)]);
var inst_22765 = (inst_22752 + (1));
var tmp22830 = inst_22750;
var tmp22831 = inst_22749;
var tmp22832 = inst_22751;
var inst_22749__$1 = tmp22831;
var inst_22750__$1 = tmp22830;
var inst_22751__$1 = tmp22832;
var inst_22752__$1 = inst_22765;
var state_22809__$1 = (function (){var statearr_22836 = state_22809;
(statearr_22836[(9)] = inst_22752__$1);

(statearr_22836[(10)] = inst_22750__$1);

(statearr_22836[(20)] = inst_22749__$1);

(statearr_22836[(22)] = inst_22764);

(statearr_22836[(21)] = inst_22751__$1);

return statearr_22836;
})();
var statearr_22837_22913 = state_22809__$1;
(statearr_22837_22913[(2)] = null);

(statearr_22837_22913[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (40))){
var inst_22777 = (state_22809[(23)]);
var inst_22781 = done(null);
var inst_22782 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22777);
var state_22809__$1 = (function (){var statearr_22838 = state_22809;
(statearr_22838[(24)] = inst_22781);

return statearr_22838;
})();
var statearr_22839_22914 = state_22809__$1;
(statearr_22839_22914[(2)] = inst_22782);

(statearr_22839_22914[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (33))){
var inst_22768 = (state_22809[(25)]);
var inst_22770 = cljs.core.chunked_seq_QMARK_(inst_22768);
var state_22809__$1 = state_22809;
if(inst_22770){
var statearr_22840_22915 = state_22809__$1;
(statearr_22840_22915[(1)] = (36));

} else {
var statearr_22841_22916 = state_22809__$1;
(statearr_22841_22916[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (13))){
var inst_22698 = (state_22809[(26)]);
var inst_22701 = cljs.core.async.close_BANG_(inst_22698);
var state_22809__$1 = state_22809;
var statearr_22842_22917 = state_22809__$1;
(statearr_22842_22917[(2)] = inst_22701);

(statearr_22842_22917[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (22))){
var inst_22721 = (state_22809[(8)]);
var inst_22724 = cljs.core.async.close_BANG_(inst_22721);
var state_22809__$1 = state_22809;
var statearr_22843_22918 = state_22809__$1;
(statearr_22843_22918[(2)] = inst_22724);

(statearr_22843_22918[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (36))){
var inst_22768 = (state_22809[(25)]);
var inst_22772 = cljs.core.chunk_first(inst_22768);
var inst_22773 = cljs.core.chunk_rest(inst_22768);
var inst_22774 = cljs.core.count(inst_22772);
var inst_22749 = inst_22773;
var inst_22750 = inst_22772;
var inst_22751 = inst_22774;
var inst_22752 = (0);
var state_22809__$1 = (function (){var statearr_22844 = state_22809;
(statearr_22844[(9)] = inst_22752);

(statearr_22844[(10)] = inst_22750);

(statearr_22844[(20)] = inst_22749);

(statearr_22844[(21)] = inst_22751);

return statearr_22844;
})();
var statearr_22845_22919 = state_22809__$1;
(statearr_22845_22919[(2)] = null);

(statearr_22845_22919[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (41))){
var inst_22768 = (state_22809[(25)]);
var inst_22784 = (state_22809[(2)]);
var inst_22785 = cljs.core.next(inst_22768);
var inst_22749 = inst_22785;
var inst_22750 = null;
var inst_22751 = (0);
var inst_22752 = (0);
var state_22809__$1 = (function (){var statearr_22846 = state_22809;
(statearr_22846[(9)] = inst_22752);

(statearr_22846[(27)] = inst_22784);

(statearr_22846[(10)] = inst_22750);

(statearr_22846[(20)] = inst_22749);

(statearr_22846[(21)] = inst_22751);

return statearr_22846;
})();
var statearr_22847_22920 = state_22809__$1;
(statearr_22847_22920[(2)] = null);

(statearr_22847_22920[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (43))){
var state_22809__$1 = state_22809;
var statearr_22848_22921 = state_22809__$1;
(statearr_22848_22921[(2)] = null);

(statearr_22848_22921[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (29))){
var inst_22793 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22849_22922 = state_22809__$1;
(statearr_22849_22922[(2)] = inst_22793);

(statearr_22849_22922[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (44))){
var inst_22802 = (state_22809[(2)]);
var state_22809__$1 = (function (){var statearr_22850 = state_22809;
(statearr_22850[(28)] = inst_22802);

return statearr_22850;
})();
var statearr_22851_22923 = state_22809__$1;
(statearr_22851_22923[(2)] = null);

(statearr_22851_22923[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (6))){
var inst_22741 = (state_22809[(29)]);
var inst_22740 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_22741__$1 = cljs.core.keys(inst_22740);
var inst_22742 = cljs.core.count(inst_22741__$1);
var inst_22743 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_22742) : cljs.core.reset_BANG_.call(null,dctr,inst_22742));
var inst_22748 = cljs.core.seq(inst_22741__$1);
var inst_22749 = inst_22748;
var inst_22750 = null;
var inst_22751 = (0);
var inst_22752 = (0);
var state_22809__$1 = (function (){var statearr_22852 = state_22809;
(statearr_22852[(29)] = inst_22741__$1);

(statearr_22852[(9)] = inst_22752);

(statearr_22852[(10)] = inst_22750);

(statearr_22852[(20)] = inst_22749);

(statearr_22852[(30)] = inst_22743);

(statearr_22852[(21)] = inst_22751);

return statearr_22852;
})();
var statearr_22853_22924 = state_22809__$1;
(statearr_22853_22924[(2)] = null);

(statearr_22853_22924[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (28))){
var inst_22749 = (state_22809[(20)]);
var inst_22768 = (state_22809[(25)]);
var inst_22768__$1 = cljs.core.seq(inst_22749);
var state_22809__$1 = (function (){var statearr_22854 = state_22809;
(statearr_22854[(25)] = inst_22768__$1);

return statearr_22854;
})();
if(inst_22768__$1){
var statearr_22855_22925 = state_22809__$1;
(statearr_22855_22925[(1)] = (33));

} else {
var statearr_22856_22926 = state_22809__$1;
(statearr_22856_22926[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (25))){
var inst_22752 = (state_22809[(9)]);
var inst_22751 = (state_22809[(21)]);
var inst_22754 = (inst_22752 < inst_22751);
var inst_22755 = inst_22754;
var state_22809__$1 = state_22809;
if(cljs.core.truth_(inst_22755)){
var statearr_22857_22927 = state_22809__$1;
(statearr_22857_22927[(1)] = (27));

} else {
var statearr_22858_22928 = state_22809__$1;
(statearr_22858_22928[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (34))){
var state_22809__$1 = state_22809;
var statearr_22859_22929 = state_22809__$1;
(statearr_22859_22929[(2)] = null);

(statearr_22859_22929[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (17))){
var state_22809__$1 = state_22809;
var statearr_22860_22930 = state_22809__$1;
(statearr_22860_22930[(2)] = null);

(statearr_22860_22930[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (3))){
var inst_22807 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22809__$1,inst_22807);
} else {
if((state_val_22810 === (12))){
var inst_22736 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22861_22931 = state_22809__$1;
(statearr_22861_22931[(2)] = inst_22736);

(statearr_22861_22931[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (2))){
var state_22809__$1 = state_22809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22809__$1,(4),ch);
} else {
if((state_val_22810 === (23))){
var state_22809__$1 = state_22809;
var statearr_22862_22932 = state_22809__$1;
(statearr_22862_22932[(2)] = null);

(statearr_22862_22932[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (35))){
var inst_22791 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22863_22933 = state_22809__$1;
(statearr_22863_22933[(2)] = inst_22791);

(statearr_22863_22933[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (19))){
var inst_22708 = (state_22809[(7)]);
var inst_22712 = cljs.core.chunk_first(inst_22708);
var inst_22713 = cljs.core.chunk_rest(inst_22708);
var inst_22714 = cljs.core.count(inst_22712);
var inst_22686 = inst_22713;
var inst_22687 = inst_22712;
var inst_22688 = inst_22714;
var inst_22689 = (0);
var state_22809__$1 = (function (){var statearr_22864 = state_22809;
(statearr_22864[(13)] = inst_22689);

(statearr_22864[(14)] = inst_22686);

(statearr_22864[(15)] = inst_22687);

(statearr_22864[(17)] = inst_22688);

return statearr_22864;
})();
var statearr_22865_22934 = state_22809__$1;
(statearr_22865_22934[(2)] = null);

(statearr_22865_22934[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (11))){
var inst_22686 = (state_22809[(14)]);
var inst_22708 = (state_22809[(7)]);
var inst_22708__$1 = cljs.core.seq(inst_22686);
var state_22809__$1 = (function (){var statearr_22866 = state_22809;
(statearr_22866[(7)] = inst_22708__$1);

return statearr_22866;
})();
if(inst_22708__$1){
var statearr_22867_22935 = state_22809__$1;
(statearr_22867_22935[(1)] = (16));

} else {
var statearr_22868_22936 = state_22809__$1;
(statearr_22868_22936[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (9))){
var inst_22738 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22869_22937 = state_22809__$1;
(statearr_22869_22937[(2)] = inst_22738);

(statearr_22869_22937[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (5))){
var inst_22684 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_22685 = cljs.core.seq(inst_22684);
var inst_22686 = inst_22685;
var inst_22687 = null;
var inst_22688 = (0);
var inst_22689 = (0);
var state_22809__$1 = (function (){var statearr_22870 = state_22809;
(statearr_22870[(13)] = inst_22689);

(statearr_22870[(14)] = inst_22686);

(statearr_22870[(15)] = inst_22687);

(statearr_22870[(17)] = inst_22688);

return statearr_22870;
})();
var statearr_22871_22938 = state_22809__$1;
(statearr_22871_22938[(2)] = null);

(statearr_22871_22938[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (14))){
var state_22809__$1 = state_22809;
var statearr_22872_22939 = state_22809__$1;
(statearr_22872_22939[(2)] = null);

(statearr_22872_22939[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (45))){
var inst_22799 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22873_22940 = state_22809__$1;
(statearr_22873_22940[(2)] = inst_22799);

(statearr_22873_22940[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (26))){
var inst_22741 = (state_22809[(29)]);
var inst_22795 = (state_22809[(2)]);
var inst_22796 = cljs.core.seq(inst_22741);
var state_22809__$1 = (function (){var statearr_22874 = state_22809;
(statearr_22874[(31)] = inst_22795);

return statearr_22874;
})();
if(inst_22796){
var statearr_22875_22941 = state_22809__$1;
(statearr_22875_22941[(1)] = (42));

} else {
var statearr_22876_22942 = state_22809__$1;
(statearr_22876_22942[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (16))){
var inst_22708 = (state_22809[(7)]);
var inst_22710 = cljs.core.chunked_seq_QMARK_(inst_22708);
var state_22809__$1 = state_22809;
if(inst_22710){
var statearr_22877_22943 = state_22809__$1;
(statearr_22877_22943[(1)] = (19));

} else {
var statearr_22878_22944 = state_22809__$1;
(statearr_22878_22944[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (38))){
var inst_22788 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22879_22945 = state_22809__$1;
(statearr_22879_22945[(2)] = inst_22788);

(statearr_22879_22945[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (30))){
var state_22809__$1 = state_22809;
var statearr_22880_22946 = state_22809__$1;
(statearr_22880_22946[(2)] = null);

(statearr_22880_22946[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (10))){
var inst_22689 = (state_22809[(13)]);
var inst_22687 = (state_22809[(15)]);
var inst_22697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22687,inst_22689);
var inst_22698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22697,(0),null);
var inst_22699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22697,(1),null);
var state_22809__$1 = (function (){var statearr_22881 = state_22809;
(statearr_22881[(26)] = inst_22698);

return statearr_22881;
})();
if(cljs.core.truth_(inst_22699)){
var statearr_22882_22947 = state_22809__$1;
(statearr_22882_22947[(1)] = (13));

} else {
var statearr_22883_22948 = state_22809__$1;
(statearr_22883_22948[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (18))){
var inst_22734 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22884_22949 = state_22809__$1;
(statearr_22884_22949[(2)] = inst_22734);

(statearr_22884_22949[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (42))){
var state_22809__$1 = state_22809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22809__$1,(45),dchan);
} else {
if((state_val_22810 === (37))){
var inst_22777 = (state_22809[(23)]);
var inst_22677 = (state_22809[(12)]);
var inst_22768 = (state_22809[(25)]);
var inst_22777__$1 = cljs.core.first(inst_22768);
var inst_22778 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22777__$1,inst_22677,done);
var state_22809__$1 = (function (){var statearr_22885 = state_22809;
(statearr_22885[(23)] = inst_22777__$1);

return statearr_22885;
})();
if(cljs.core.truth_(inst_22778)){
var statearr_22886_22950 = state_22809__$1;
(statearr_22886_22950[(1)] = (39));

} else {
var statearr_22887_22951 = state_22809__$1;
(statearr_22887_22951[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22810 === (8))){
var inst_22689 = (state_22809[(13)]);
var inst_22688 = (state_22809[(17)]);
var inst_22691 = (inst_22689 < inst_22688);
var inst_22692 = inst_22691;
var state_22809__$1 = state_22809;
if(cljs.core.truth_(inst_22692)){
var statearr_22888_22952 = state_22809__$1;
(statearr_22888_22952[(1)] = (10));

} else {
var statearr_22889_22953 = state_22809__$1;
(statearr_22889_22953[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___22899,cs,m,dchan,dctr,done))
;
return ((function (switch__21440__auto__,c__21564__auto___22899,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21441__auto__ = null;
var cljs$core$async$mult_$_state_machine__21441__auto____0 = (function (){
var statearr_22893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22893[(0)] = cljs$core$async$mult_$_state_machine__21441__auto__);

(statearr_22893[(1)] = (1));

return statearr_22893;
});
var cljs$core$async$mult_$_state_machine__21441__auto____1 = (function (state_22809){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_22809);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e22894){if((e22894 instanceof Object)){
var ex__21444__auto__ = e22894;
var statearr_22895_22954 = state_22809;
(statearr_22895_22954[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22809);

return cljs.core.cst$kw$recur;
} else {
throw e22894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__22955 = state_22809;
state_22809 = G__22955;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21441__auto__ = function(state_22809){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21441__auto____1.call(this,state_22809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21441__auto____0;
cljs$core$async$mult_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21441__auto____1;
return cljs$core$async$mult_$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___22899,cs,m,dchan,dctr,done))
})();
var state__21566__auto__ = (function (){var statearr_22896 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_22896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___22899);

return statearr_22896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___22899,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22956 = [];
var len__7910__auto___22959 = arguments.length;
var i__7911__auto___22960 = (0);
while(true){
if((i__7911__auto___22960 < len__7910__auto___22959)){
args22956.push((arguments[i__7911__auto___22960]));

var G__22961 = (i__7911__auto___22960 + (1));
i__7911__auto___22960 = G__22961;
continue;
} else {
}
break;
}

var G__22958 = args22956.length;
switch (G__22958) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22956.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7466__auto__.call(null,m,ch));
} else {
var m__7466__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7466__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7466__auto__.call(null,m,ch));
} else {
var m__7466__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7466__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7466__auto__.call(null,m));
} else {
var m__7466__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7466__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7466__auto__.call(null,m,state_map));
} else {
var m__7466__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7466__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7465__auto__ = (((m == null))?null:m);
var m__7466__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7466__auto__.call(null,m,mode));
} else {
var m__7466__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7466__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___22973 = arguments.length;
var i__7911__auto___22974 = (0);
while(true){
if((i__7911__auto___22974 < len__7910__auto___22973)){
args__7917__auto__.push((arguments[i__7911__auto___22974]));

var G__22975 = (i__7911__auto___22974 + (1));
i__7911__auto___22974 = G__22975;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22967){
var map__22968 = p__22967;
var map__22968__$1 = ((((!((map__22968 == null)))?((((map__22968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22968):map__22968);
var opts = map__22968__$1;
var statearr_22970_22976 = state;
(statearr_22970_22976[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__22968,map__22968__$1,opts){
return (function (val){
var statearr_22971_22977 = state;
(statearr_22971_22977[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__22968,map__22968__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22972_22978 = state;
(statearr_22972_22978[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22963){
var G__22964 = cljs.core.first(seq22963);
var seq22963__$1 = cljs.core.next(seq22963);
var G__22965 = cljs.core.first(seq22963__$1);
var seq22963__$2 = cljs.core.next(seq22963__$1);
var G__22966 = cljs.core.first(seq22963__$2);
var seq22963__$3 = cljs.core.next(seq22963__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22964,G__22965,G__22966,seq22963__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__23150 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23150) : cljs.core.atom.call(null,G__23150));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__23151 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23151) : cljs.core.atom.call(null,G__23151));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23152 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23153){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23153 = meta23153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23154,meta23153__$1){
var self__ = this;
var _23154__$1 = this;
return (new cljs.core.async.t_cljs$core$async23152(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23153__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23154){
var self__ = this;
var _23154__$1 = this;
return self__.meta23153;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23155_23321 = self__.cs;
var G__23156_23322 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23155_23321,G__23156_23322) : cljs.core.reset_BANG_.call(null,G__23155_23321,G__23156_23322));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta23153], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23152";

cljs.core.async.t_cljs$core$async23152.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async23152");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23152 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23152(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23153){
return (new cljs.core.async.t_cljs$core$async23152(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23153));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23152(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21564__auto___23323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___23323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___23323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23258){
var state_val_23259 = (state_23258[(1)]);
if((state_val_23259 === (7))){
var inst_23173 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23260_23324 = state_23258__$1;
(statearr_23260_23324[(2)] = inst_23173);

(statearr_23260_23324[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (20))){
var inst_23185 = (state_23258[(7)]);
var state_23258__$1 = state_23258;
var statearr_23261_23325 = state_23258__$1;
(statearr_23261_23325[(2)] = inst_23185);

(statearr_23261_23325[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (27))){
var state_23258__$1 = state_23258;
var statearr_23262_23326 = state_23258__$1;
(statearr_23262_23326[(2)] = null);

(statearr_23262_23326[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (1))){
var inst_23160 = (state_23258[(8)]);
var inst_23160__$1 = calc_state();
var inst_23162 = (inst_23160__$1 == null);
var inst_23163 = cljs.core.not(inst_23162);
var state_23258__$1 = (function (){var statearr_23263 = state_23258;
(statearr_23263[(8)] = inst_23160__$1);

return statearr_23263;
})();
if(inst_23163){
var statearr_23264_23327 = state_23258__$1;
(statearr_23264_23327[(1)] = (2));

} else {
var statearr_23265_23328 = state_23258__$1;
(statearr_23265_23328[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (24))){
var inst_23232 = (state_23258[(9)]);
var inst_23218 = (state_23258[(10)]);
var inst_23209 = (state_23258[(11)]);
var inst_23232__$1 = (inst_23209.cljs$core$IFn$_invoke$arity$1 ? inst_23209.cljs$core$IFn$_invoke$arity$1(inst_23218) : inst_23209.call(null,inst_23218));
var state_23258__$1 = (function (){var statearr_23266 = state_23258;
(statearr_23266[(9)] = inst_23232__$1);

return statearr_23266;
})();
if(cljs.core.truth_(inst_23232__$1)){
var statearr_23267_23329 = state_23258__$1;
(statearr_23267_23329[(1)] = (29));

} else {
var statearr_23268_23330 = state_23258__$1;
(statearr_23268_23330[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (4))){
var inst_23176 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23176)){
var statearr_23269_23331 = state_23258__$1;
(statearr_23269_23331[(1)] = (8));

} else {
var statearr_23270_23332 = state_23258__$1;
(statearr_23270_23332[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (15))){
var inst_23203 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23203)){
var statearr_23271_23333 = state_23258__$1;
(statearr_23271_23333[(1)] = (19));

} else {
var statearr_23272_23334 = state_23258__$1;
(statearr_23272_23334[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (21))){
var inst_23208 = (state_23258[(12)]);
var inst_23208__$1 = (state_23258[(2)]);
var inst_23209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23208__$1,cljs.core.cst$kw$solos);
var inst_23210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23208__$1,cljs.core.cst$kw$mutes);
var inst_23211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23208__$1,cljs.core.cst$kw$reads);
var state_23258__$1 = (function (){var statearr_23273 = state_23258;
(statearr_23273[(13)] = inst_23210);

(statearr_23273[(12)] = inst_23208__$1);

(statearr_23273[(11)] = inst_23209);

return statearr_23273;
})();
return cljs.core.async.ioc_alts_BANG_(state_23258__$1,(22),inst_23211);
} else {
if((state_val_23259 === (31))){
var inst_23240 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23240)){
var statearr_23274_23335 = state_23258__$1;
(statearr_23274_23335[(1)] = (32));

} else {
var statearr_23275_23336 = state_23258__$1;
(statearr_23275_23336[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (32))){
var inst_23217 = (state_23258[(14)]);
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23258__$1,(35),out,inst_23217);
} else {
if((state_val_23259 === (33))){
var inst_23208 = (state_23258[(12)]);
var inst_23185 = inst_23208;
var state_23258__$1 = (function (){var statearr_23276 = state_23258;
(statearr_23276[(7)] = inst_23185);

return statearr_23276;
})();
var statearr_23277_23337 = state_23258__$1;
(statearr_23277_23337[(2)] = null);

(statearr_23277_23337[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (13))){
var inst_23185 = (state_23258[(7)]);
var inst_23192 = inst_23185.cljs$lang$protocol_mask$partition0$;
var inst_23193 = (inst_23192 & (64));
var inst_23194 = inst_23185.cljs$core$ISeq$;
var inst_23195 = (cljs.core.PROTOCOL_SENTINEL === inst_23194);
var inst_23196 = (inst_23193) || (inst_23195);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23196)){
var statearr_23278_23338 = state_23258__$1;
(statearr_23278_23338[(1)] = (16));

} else {
var statearr_23279_23339 = state_23258__$1;
(statearr_23279_23339[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (22))){
var inst_23217 = (state_23258[(14)]);
var inst_23218 = (state_23258[(10)]);
var inst_23216 = (state_23258[(2)]);
var inst_23217__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23216,(0),null);
var inst_23218__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23216,(1),null);
var inst_23219 = (inst_23217__$1 == null);
var inst_23220 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23218__$1,change);
var inst_23221 = (inst_23219) || (inst_23220);
var state_23258__$1 = (function (){var statearr_23280 = state_23258;
(statearr_23280[(14)] = inst_23217__$1);

(statearr_23280[(10)] = inst_23218__$1);

return statearr_23280;
})();
if(cljs.core.truth_(inst_23221)){
var statearr_23281_23340 = state_23258__$1;
(statearr_23281_23340[(1)] = (23));

} else {
var statearr_23282_23341 = state_23258__$1;
(statearr_23282_23341[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (36))){
var inst_23208 = (state_23258[(12)]);
var inst_23185 = inst_23208;
var state_23258__$1 = (function (){var statearr_23283 = state_23258;
(statearr_23283[(7)] = inst_23185);

return statearr_23283;
})();
var statearr_23284_23342 = state_23258__$1;
(statearr_23284_23342[(2)] = null);

(statearr_23284_23342[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (29))){
var inst_23232 = (state_23258[(9)]);
var state_23258__$1 = state_23258;
var statearr_23285_23343 = state_23258__$1;
(statearr_23285_23343[(2)] = inst_23232);

(statearr_23285_23343[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (6))){
var state_23258__$1 = state_23258;
var statearr_23286_23344 = state_23258__$1;
(statearr_23286_23344[(2)] = false);

(statearr_23286_23344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (28))){
var inst_23228 = (state_23258[(2)]);
var inst_23229 = calc_state();
var inst_23185 = inst_23229;
var state_23258__$1 = (function (){var statearr_23287 = state_23258;
(statearr_23287[(15)] = inst_23228);

(statearr_23287[(7)] = inst_23185);

return statearr_23287;
})();
var statearr_23288_23345 = state_23258__$1;
(statearr_23288_23345[(2)] = null);

(statearr_23288_23345[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (25))){
var inst_23254 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23289_23346 = state_23258__$1;
(statearr_23289_23346[(2)] = inst_23254);

(statearr_23289_23346[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (34))){
var inst_23252 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23290_23347 = state_23258__$1;
(statearr_23290_23347[(2)] = inst_23252);

(statearr_23290_23347[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (17))){
var state_23258__$1 = state_23258;
var statearr_23291_23348 = state_23258__$1;
(statearr_23291_23348[(2)] = false);

(statearr_23291_23348[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (3))){
var state_23258__$1 = state_23258;
var statearr_23292_23349 = state_23258__$1;
(statearr_23292_23349[(2)] = false);

(statearr_23292_23349[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (12))){
var inst_23256 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23258__$1,inst_23256);
} else {
if((state_val_23259 === (2))){
var inst_23160 = (state_23258[(8)]);
var inst_23165 = inst_23160.cljs$lang$protocol_mask$partition0$;
var inst_23166 = (inst_23165 & (64));
var inst_23167 = inst_23160.cljs$core$ISeq$;
var inst_23168 = (cljs.core.PROTOCOL_SENTINEL === inst_23167);
var inst_23169 = (inst_23166) || (inst_23168);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23169)){
var statearr_23293_23350 = state_23258__$1;
(statearr_23293_23350[(1)] = (5));

} else {
var statearr_23294_23351 = state_23258__$1;
(statearr_23294_23351[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (23))){
var inst_23217 = (state_23258[(14)]);
var inst_23223 = (inst_23217 == null);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23223)){
var statearr_23295_23352 = state_23258__$1;
(statearr_23295_23352[(1)] = (26));

} else {
var statearr_23296_23353 = state_23258__$1;
(statearr_23296_23353[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (35))){
var inst_23243 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
if(cljs.core.truth_(inst_23243)){
var statearr_23297_23354 = state_23258__$1;
(statearr_23297_23354[(1)] = (36));

} else {
var statearr_23298_23355 = state_23258__$1;
(statearr_23298_23355[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (19))){
var inst_23185 = (state_23258[(7)]);
var inst_23205 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23185);
var state_23258__$1 = state_23258;
var statearr_23299_23356 = state_23258__$1;
(statearr_23299_23356[(2)] = inst_23205);

(statearr_23299_23356[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (11))){
var inst_23185 = (state_23258[(7)]);
var inst_23189 = (inst_23185 == null);
var inst_23190 = cljs.core.not(inst_23189);
var state_23258__$1 = state_23258;
if(inst_23190){
var statearr_23300_23357 = state_23258__$1;
(statearr_23300_23357[(1)] = (13));

} else {
var statearr_23301_23358 = state_23258__$1;
(statearr_23301_23358[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (9))){
var inst_23160 = (state_23258[(8)]);
var state_23258__$1 = state_23258;
var statearr_23302_23359 = state_23258__$1;
(statearr_23302_23359[(2)] = inst_23160);

(statearr_23302_23359[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (5))){
var state_23258__$1 = state_23258;
var statearr_23303_23360 = state_23258__$1;
(statearr_23303_23360[(2)] = true);

(statearr_23303_23360[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (14))){
var state_23258__$1 = state_23258;
var statearr_23304_23361 = state_23258__$1;
(statearr_23304_23361[(2)] = false);

(statearr_23304_23361[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (26))){
var inst_23218 = (state_23258[(10)]);
var inst_23225 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23218);
var state_23258__$1 = state_23258;
var statearr_23305_23362 = state_23258__$1;
(statearr_23305_23362[(2)] = inst_23225);

(statearr_23305_23362[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (16))){
var state_23258__$1 = state_23258;
var statearr_23306_23363 = state_23258__$1;
(statearr_23306_23363[(2)] = true);

(statearr_23306_23363[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (38))){
var inst_23248 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23307_23364 = state_23258__$1;
(statearr_23307_23364[(2)] = inst_23248);

(statearr_23307_23364[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (30))){
var inst_23210 = (state_23258[(13)]);
var inst_23218 = (state_23258[(10)]);
var inst_23209 = (state_23258[(11)]);
var inst_23235 = cljs.core.empty_QMARK_(inst_23209);
var inst_23236 = (inst_23210.cljs$core$IFn$_invoke$arity$1 ? inst_23210.cljs$core$IFn$_invoke$arity$1(inst_23218) : inst_23210.call(null,inst_23218));
var inst_23237 = cljs.core.not(inst_23236);
var inst_23238 = (inst_23235) && (inst_23237);
var state_23258__$1 = state_23258;
var statearr_23308_23365 = state_23258__$1;
(statearr_23308_23365[(2)] = inst_23238);

(statearr_23308_23365[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (10))){
var inst_23160 = (state_23258[(8)]);
var inst_23181 = (state_23258[(2)]);
var inst_23182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23181,cljs.core.cst$kw$solos);
var inst_23183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23181,cljs.core.cst$kw$mutes);
var inst_23184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23181,cljs.core.cst$kw$reads);
var inst_23185 = inst_23160;
var state_23258__$1 = (function (){var statearr_23309 = state_23258;
(statearr_23309[(16)] = inst_23182);

(statearr_23309[(17)] = inst_23183);

(statearr_23309[(7)] = inst_23185);

(statearr_23309[(18)] = inst_23184);

return statearr_23309;
})();
var statearr_23310_23366 = state_23258__$1;
(statearr_23310_23366[(2)] = null);

(statearr_23310_23366[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (18))){
var inst_23200 = (state_23258[(2)]);
var state_23258__$1 = state_23258;
var statearr_23311_23367 = state_23258__$1;
(statearr_23311_23367[(2)] = inst_23200);

(statearr_23311_23367[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (37))){
var state_23258__$1 = state_23258;
var statearr_23312_23368 = state_23258__$1;
(statearr_23312_23368[(2)] = null);

(statearr_23312_23368[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23259 === (8))){
var inst_23160 = (state_23258[(8)]);
var inst_23178 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23160);
var state_23258__$1 = state_23258;
var statearr_23313_23369 = state_23258__$1;
(statearr_23313_23369[(2)] = inst_23178);

(statearr_23313_23369[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___23323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21440__auto__,c__21564__auto___23323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21441__auto__ = null;
var cljs$core$async$mix_$_state_machine__21441__auto____0 = (function (){
var statearr_23317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23317[(0)] = cljs$core$async$mix_$_state_machine__21441__auto__);

(statearr_23317[(1)] = (1));

return statearr_23317;
});
var cljs$core$async$mix_$_state_machine__21441__auto____1 = (function (state_23258){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_23258);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e23318){if((e23318 instanceof Object)){
var ex__21444__auto__ = e23318;
var statearr_23319_23370 = state_23258;
(statearr_23319_23370[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23258);

return cljs.core.cst$kw$recur;
} else {
throw e23318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__23371 = state_23258;
state_23258 = G__23371;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21441__auto__ = function(state_23258){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21441__auto____1.call(this,state_23258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21441__auto____0;
cljs$core$async$mix_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21441__auto____1;
return cljs$core$async$mix_$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___23323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21566__auto__ = (function (){var statearr_23320 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_23320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23323);

return statearr_23320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___23323,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7465__auto__ = (((p == null))?null:p);
var m__7466__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7466__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7466__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7466__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7465__auto__ = (((p == null))?null:p);
var m__7466__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7466__auto__.call(null,p,v,ch));
} else {
var m__7466__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7466__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23372 = [];
var len__7910__auto___23375 = arguments.length;
var i__7911__auto___23376 = (0);
while(true){
if((i__7911__auto___23376 < len__7910__auto___23375)){
args23372.push((arguments[i__7911__auto___23376]));

var G__23377 = (i__7911__auto___23376 + (1));
i__7911__auto___23376 = G__23377;
continue;
} else {
}
break;
}

var G__23374 = args23372.length;
switch (G__23374) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23372.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7465__auto__ = (((p == null))?null:p);
var m__7466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7466__auto__.call(null,p));
} else {
var m__7466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7466__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7465__auto__ = (((p == null))?null:p);
var m__7466__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7466__auto__.call(null,p,v));
} else {
var m__7466__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7466__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23380 = [];
var len__7910__auto___23508 = arguments.length;
var i__7911__auto___23509 = (0);
while(true){
if((i__7911__auto___23509 < len__7910__auto___23508)){
args23380.push((arguments[i__7911__auto___23509]));

var G__23510 = (i__7911__auto___23509 + (1));
i__7911__auto___23509 = G__23510;
continue;
} else {
}
break;
}

var G__23382 = args23380.length;
switch (G__23382) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23380.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__23383 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23383) : cljs.core.atom.call(null,G__23383));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6797__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6797__auto__,mults){
return (function (p1__23379_SHARP_){
if(cljs.core.truth_((p1__23379_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23379_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23379_SHARP_.call(null,topic)))){
return p1__23379_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23379_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6797__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23384 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23385){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23385 = meta23385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23386,meta23385__$1){
var self__ = this;
var _23386__$1 = this;
return (new cljs.core.async.t_cljs$core$async23384(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23385__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23386){
var self__ = this;
var _23386__$1 = this;
return self__.meta23385;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23387 = self__.mults;
var G__23388 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23387,G__23388) : cljs.core.reset_BANG_.call(null,G__23387,G__23388));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta23385], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23384";

cljs.core.async.t_cljs$core$async23384.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async23384");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23384 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23385){
return (new cljs.core.async.t_cljs$core$async23384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23385));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23384(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21564__auto___23512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___23512,mults,ensure_mult,p){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___23512,mults,ensure_mult,p){
return (function (state_23460){
var state_val_23461 = (state_23460[(1)]);
if((state_val_23461 === (7))){
var inst_23456 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
var statearr_23462_23513 = state_23460__$1;
(statearr_23462_23513[(2)] = inst_23456);

(statearr_23462_23513[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (20))){
var state_23460__$1 = state_23460;
var statearr_23463_23514 = state_23460__$1;
(statearr_23463_23514[(2)] = null);

(statearr_23463_23514[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (1))){
var state_23460__$1 = state_23460;
var statearr_23464_23515 = state_23460__$1;
(statearr_23464_23515[(2)] = null);

(statearr_23464_23515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (24))){
var inst_23439 = (state_23460[(7)]);
var inst_23448 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23439);
var state_23460__$1 = state_23460;
var statearr_23465_23516 = state_23460__$1;
(statearr_23465_23516[(2)] = inst_23448);

(statearr_23465_23516[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (4))){
var inst_23391 = (state_23460[(8)]);
var inst_23391__$1 = (state_23460[(2)]);
var inst_23392 = (inst_23391__$1 == null);
var state_23460__$1 = (function (){var statearr_23466 = state_23460;
(statearr_23466[(8)] = inst_23391__$1);

return statearr_23466;
})();
if(cljs.core.truth_(inst_23392)){
var statearr_23467_23517 = state_23460__$1;
(statearr_23467_23517[(1)] = (5));

} else {
var statearr_23468_23518 = state_23460__$1;
(statearr_23468_23518[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (15))){
var inst_23433 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
var statearr_23469_23519 = state_23460__$1;
(statearr_23469_23519[(2)] = inst_23433);

(statearr_23469_23519[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (21))){
var inst_23453 = (state_23460[(2)]);
var state_23460__$1 = (function (){var statearr_23470 = state_23460;
(statearr_23470[(9)] = inst_23453);

return statearr_23470;
})();
var statearr_23471_23520 = state_23460__$1;
(statearr_23471_23520[(2)] = null);

(statearr_23471_23520[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (13))){
var inst_23415 = (state_23460[(10)]);
var inst_23417 = cljs.core.chunked_seq_QMARK_(inst_23415);
var state_23460__$1 = state_23460;
if(inst_23417){
var statearr_23472_23521 = state_23460__$1;
(statearr_23472_23521[(1)] = (16));

} else {
var statearr_23473_23522 = state_23460__$1;
(statearr_23473_23522[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (22))){
var inst_23445 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
if(cljs.core.truth_(inst_23445)){
var statearr_23474_23523 = state_23460__$1;
(statearr_23474_23523[(1)] = (23));

} else {
var statearr_23475_23524 = state_23460__$1;
(statearr_23475_23524[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (6))){
var inst_23439 = (state_23460[(7)]);
var inst_23391 = (state_23460[(8)]);
var inst_23441 = (state_23460[(11)]);
var inst_23439__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23391) : topic_fn.call(null,inst_23391));
var inst_23440 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_23441__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23440,inst_23439__$1);
var state_23460__$1 = (function (){var statearr_23476 = state_23460;
(statearr_23476[(7)] = inst_23439__$1);

(statearr_23476[(11)] = inst_23441__$1);

return statearr_23476;
})();
if(cljs.core.truth_(inst_23441__$1)){
var statearr_23477_23525 = state_23460__$1;
(statearr_23477_23525[(1)] = (19));

} else {
var statearr_23478_23526 = state_23460__$1;
(statearr_23478_23526[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (25))){
var inst_23450 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
var statearr_23479_23527 = state_23460__$1;
(statearr_23479_23527[(2)] = inst_23450);

(statearr_23479_23527[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (17))){
var inst_23415 = (state_23460[(10)]);
var inst_23424 = cljs.core.first(inst_23415);
var inst_23425 = cljs.core.async.muxch_STAR_(inst_23424);
var inst_23426 = cljs.core.async.close_BANG_(inst_23425);
var inst_23427 = cljs.core.next(inst_23415);
var inst_23401 = inst_23427;
var inst_23402 = null;
var inst_23403 = (0);
var inst_23404 = (0);
var state_23460__$1 = (function (){var statearr_23480 = state_23460;
(statearr_23480[(12)] = inst_23426);

(statearr_23480[(13)] = inst_23401);

(statearr_23480[(14)] = inst_23402);

(statearr_23480[(15)] = inst_23403);

(statearr_23480[(16)] = inst_23404);

return statearr_23480;
})();
var statearr_23481_23528 = state_23460__$1;
(statearr_23481_23528[(2)] = null);

(statearr_23481_23528[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (3))){
var inst_23458 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23460__$1,inst_23458);
} else {
if((state_val_23461 === (12))){
var inst_23435 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
var statearr_23482_23529 = state_23460__$1;
(statearr_23482_23529[(2)] = inst_23435);

(statearr_23482_23529[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (2))){
var state_23460__$1 = state_23460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23460__$1,(4),ch);
} else {
if((state_val_23461 === (23))){
var state_23460__$1 = state_23460;
var statearr_23483_23530 = state_23460__$1;
(statearr_23483_23530[(2)] = null);

(statearr_23483_23530[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (19))){
var inst_23391 = (state_23460[(8)]);
var inst_23441 = (state_23460[(11)]);
var inst_23443 = cljs.core.async.muxch_STAR_(inst_23441);
var state_23460__$1 = state_23460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23460__$1,(22),inst_23443,inst_23391);
} else {
if((state_val_23461 === (11))){
var inst_23401 = (state_23460[(13)]);
var inst_23415 = (state_23460[(10)]);
var inst_23415__$1 = cljs.core.seq(inst_23401);
var state_23460__$1 = (function (){var statearr_23484 = state_23460;
(statearr_23484[(10)] = inst_23415__$1);

return statearr_23484;
})();
if(inst_23415__$1){
var statearr_23485_23531 = state_23460__$1;
(statearr_23485_23531[(1)] = (13));

} else {
var statearr_23486_23532 = state_23460__$1;
(statearr_23486_23532[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (9))){
var inst_23437 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
var statearr_23487_23533 = state_23460__$1;
(statearr_23487_23533[(2)] = inst_23437);

(statearr_23487_23533[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (5))){
var inst_23398 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_23399 = cljs.core.vals(inst_23398);
var inst_23400 = cljs.core.seq(inst_23399);
var inst_23401 = inst_23400;
var inst_23402 = null;
var inst_23403 = (0);
var inst_23404 = (0);
var state_23460__$1 = (function (){var statearr_23488 = state_23460;
(statearr_23488[(13)] = inst_23401);

(statearr_23488[(14)] = inst_23402);

(statearr_23488[(15)] = inst_23403);

(statearr_23488[(16)] = inst_23404);

return statearr_23488;
})();
var statearr_23489_23534 = state_23460__$1;
(statearr_23489_23534[(2)] = null);

(statearr_23489_23534[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (14))){
var state_23460__$1 = state_23460;
var statearr_23493_23535 = state_23460__$1;
(statearr_23493_23535[(2)] = null);

(statearr_23493_23535[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (16))){
var inst_23415 = (state_23460[(10)]);
var inst_23419 = cljs.core.chunk_first(inst_23415);
var inst_23420 = cljs.core.chunk_rest(inst_23415);
var inst_23421 = cljs.core.count(inst_23419);
var inst_23401 = inst_23420;
var inst_23402 = inst_23419;
var inst_23403 = inst_23421;
var inst_23404 = (0);
var state_23460__$1 = (function (){var statearr_23494 = state_23460;
(statearr_23494[(13)] = inst_23401);

(statearr_23494[(14)] = inst_23402);

(statearr_23494[(15)] = inst_23403);

(statearr_23494[(16)] = inst_23404);

return statearr_23494;
})();
var statearr_23495_23536 = state_23460__$1;
(statearr_23495_23536[(2)] = null);

(statearr_23495_23536[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (10))){
var inst_23401 = (state_23460[(13)]);
var inst_23402 = (state_23460[(14)]);
var inst_23403 = (state_23460[(15)]);
var inst_23404 = (state_23460[(16)]);
var inst_23409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23402,inst_23404);
var inst_23410 = cljs.core.async.muxch_STAR_(inst_23409);
var inst_23411 = cljs.core.async.close_BANG_(inst_23410);
var inst_23412 = (inst_23404 + (1));
var tmp23490 = inst_23401;
var tmp23491 = inst_23402;
var tmp23492 = inst_23403;
var inst_23401__$1 = tmp23490;
var inst_23402__$1 = tmp23491;
var inst_23403__$1 = tmp23492;
var inst_23404__$1 = inst_23412;
var state_23460__$1 = (function (){var statearr_23496 = state_23460;
(statearr_23496[(13)] = inst_23401__$1);

(statearr_23496[(14)] = inst_23402__$1);

(statearr_23496[(15)] = inst_23403__$1);

(statearr_23496[(17)] = inst_23411);

(statearr_23496[(16)] = inst_23404__$1);

return statearr_23496;
})();
var statearr_23497_23537 = state_23460__$1;
(statearr_23497_23537[(2)] = null);

(statearr_23497_23537[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (18))){
var inst_23430 = (state_23460[(2)]);
var state_23460__$1 = state_23460;
var statearr_23498_23538 = state_23460__$1;
(statearr_23498_23538[(2)] = inst_23430);

(statearr_23498_23538[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23461 === (8))){
var inst_23403 = (state_23460[(15)]);
var inst_23404 = (state_23460[(16)]);
var inst_23406 = (inst_23404 < inst_23403);
var inst_23407 = inst_23406;
var state_23460__$1 = state_23460;
if(cljs.core.truth_(inst_23407)){
var statearr_23499_23539 = state_23460__$1;
(statearr_23499_23539[(1)] = (10));

} else {
var statearr_23500_23540 = state_23460__$1;
(statearr_23500_23540[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___23512,mults,ensure_mult,p))
;
return ((function (switch__21440__auto__,c__21564__auto___23512,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_23504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23504[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_23504[(1)] = (1));

return statearr_23504;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_23460){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_23460);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e23505){if((e23505 instanceof Object)){
var ex__21444__auto__ = e23505;
var statearr_23506_23541 = state_23460;
(statearr_23506_23541[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23460);

return cljs.core.cst$kw$recur;
} else {
throw e23505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__23542 = state_23460;
state_23460 = G__23542;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_23460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_23460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___23512,mults,ensure_mult,p))
})();
var state__21566__auto__ = (function (){var statearr_23507 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_23507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23512);

return statearr_23507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___23512,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23543 = [];
var len__7910__auto___23546 = arguments.length;
var i__7911__auto___23547 = (0);
while(true){
if((i__7911__auto___23547 < len__7910__auto___23546)){
args23543.push((arguments[i__7911__auto___23547]));

var G__23548 = (i__7911__auto___23547 + (1));
i__7911__auto___23547 = G__23548;
continue;
} else {
}
break;
}

var G__23545 = args23543.length;
switch (G__23545) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23543.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23550 = [];
var len__7910__auto___23553 = arguments.length;
var i__7911__auto___23554 = (0);
while(true){
if((i__7911__auto___23554 < len__7910__auto___23553)){
args23550.push((arguments[i__7911__auto___23554]));

var G__23555 = (i__7911__auto___23554 + (1));
i__7911__auto___23554 = G__23555;
continue;
} else {
}
break;
}

var G__23552 = args23550.length;
switch (G__23552) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23550.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23557 = [];
var len__7910__auto___23628 = arguments.length;
var i__7911__auto___23629 = (0);
while(true){
if((i__7911__auto___23629 < len__7910__auto___23628)){
args23557.push((arguments[i__7911__auto___23629]));

var G__23630 = (i__7911__auto___23629 + (1));
i__7911__auto___23629 = G__23630;
continue;
} else {
}
break;
}

var G__23559 = args23557.length;
switch (G__23559) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23557.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__21564__auto___23632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___23632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___23632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23598){
var state_val_23599 = (state_23598[(1)]);
if((state_val_23599 === (7))){
var state_23598__$1 = state_23598;
var statearr_23600_23633 = state_23598__$1;
(statearr_23600_23633[(2)] = null);

(statearr_23600_23633[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (1))){
var state_23598__$1 = state_23598;
var statearr_23601_23634 = state_23598__$1;
(statearr_23601_23634[(2)] = null);

(statearr_23601_23634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (4))){
var inst_23562 = (state_23598[(7)]);
var inst_23564 = (inst_23562 < cnt);
var state_23598__$1 = state_23598;
if(cljs.core.truth_(inst_23564)){
var statearr_23602_23635 = state_23598__$1;
(statearr_23602_23635[(1)] = (6));

} else {
var statearr_23603_23636 = state_23598__$1;
(statearr_23603_23636[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (15))){
var inst_23594 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
var statearr_23604_23637 = state_23598__$1;
(statearr_23604_23637[(2)] = inst_23594);

(statearr_23604_23637[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (13))){
var inst_23587 = cljs.core.async.close_BANG_(out);
var state_23598__$1 = state_23598;
var statearr_23605_23638 = state_23598__$1;
(statearr_23605_23638[(2)] = inst_23587);

(statearr_23605_23638[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (6))){
var state_23598__$1 = state_23598;
var statearr_23606_23639 = state_23598__$1;
(statearr_23606_23639[(2)] = null);

(statearr_23606_23639[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (3))){
var inst_23596 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23598__$1,inst_23596);
} else {
if((state_val_23599 === (12))){
var inst_23584 = (state_23598[(8)]);
var inst_23584__$1 = (state_23598[(2)]);
var inst_23585 = cljs.core.some(cljs.core.nil_QMARK_,inst_23584__$1);
var state_23598__$1 = (function (){var statearr_23607 = state_23598;
(statearr_23607[(8)] = inst_23584__$1);

return statearr_23607;
})();
if(cljs.core.truth_(inst_23585)){
var statearr_23608_23640 = state_23598__$1;
(statearr_23608_23640[(1)] = (13));

} else {
var statearr_23609_23641 = state_23598__$1;
(statearr_23609_23641[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (2))){
var inst_23561 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_23562 = (0);
var state_23598__$1 = (function (){var statearr_23610 = state_23598;
(statearr_23610[(7)] = inst_23562);

(statearr_23610[(9)] = inst_23561);

return statearr_23610;
})();
var statearr_23611_23642 = state_23598__$1;
(statearr_23611_23642[(2)] = null);

(statearr_23611_23642[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (11))){
var inst_23562 = (state_23598[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23598,(10),Object,null,(9));
var inst_23571 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23562) : chs__$1.call(null,inst_23562));
var inst_23572 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23562) : done.call(null,inst_23562));
var inst_23573 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23571,inst_23572);
var state_23598__$1 = state_23598;
var statearr_23612_23643 = state_23598__$1;
(statearr_23612_23643[(2)] = inst_23573);


cljs.core.async.impl.ioc_helpers.process_exception(state_23598__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (9))){
var inst_23562 = (state_23598[(7)]);
var inst_23575 = (state_23598[(2)]);
var inst_23576 = (inst_23562 + (1));
var inst_23562__$1 = inst_23576;
var state_23598__$1 = (function (){var statearr_23613 = state_23598;
(statearr_23613[(7)] = inst_23562__$1);

(statearr_23613[(10)] = inst_23575);

return statearr_23613;
})();
var statearr_23614_23644 = state_23598__$1;
(statearr_23614_23644[(2)] = null);

(statearr_23614_23644[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (5))){
var inst_23582 = (state_23598[(2)]);
var state_23598__$1 = (function (){var statearr_23615 = state_23598;
(statearr_23615[(11)] = inst_23582);

return statearr_23615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23598__$1,(12),dchan);
} else {
if((state_val_23599 === (14))){
var inst_23584 = (state_23598[(8)]);
var inst_23589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23584);
var state_23598__$1 = state_23598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23598__$1,(16),out,inst_23589);
} else {
if((state_val_23599 === (16))){
var inst_23591 = (state_23598[(2)]);
var state_23598__$1 = (function (){var statearr_23616 = state_23598;
(statearr_23616[(12)] = inst_23591);

return statearr_23616;
})();
var statearr_23617_23645 = state_23598__$1;
(statearr_23617_23645[(2)] = null);

(statearr_23617_23645[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (10))){
var inst_23566 = (state_23598[(2)]);
var inst_23567 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23598__$1 = (function (){var statearr_23618 = state_23598;
(statearr_23618[(13)] = inst_23566);

return statearr_23618;
})();
var statearr_23619_23646 = state_23598__$1;
(statearr_23619_23646[(2)] = inst_23567);


cljs.core.async.impl.ioc_helpers.process_exception(state_23598__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_23599 === (8))){
var inst_23580 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
var statearr_23620_23647 = state_23598__$1;
(statearr_23620_23647[(2)] = inst_23580);

(statearr_23620_23647[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___23632,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21440__auto__,c__21564__auto___23632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_23624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23624[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_23624[(1)] = (1));

return statearr_23624;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_23598){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_23598);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e23625){if((e23625 instanceof Object)){
var ex__21444__auto__ = e23625;
var statearr_23626_23648 = state_23598;
(statearr_23626_23648[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23598);

return cljs.core.cst$kw$recur;
} else {
throw e23625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__23649 = state_23598;
state_23598 = G__23649;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_23598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_23598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___23632,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21566__auto__ = (function (){var statearr_23627 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_23627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23632);

return statearr_23627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___23632,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23651 = [];
var len__7910__auto___23709 = arguments.length;
var i__7911__auto___23710 = (0);
while(true){
if((i__7911__auto___23710 < len__7910__auto___23709)){
args23651.push((arguments[i__7911__auto___23710]));

var G__23711 = (i__7911__auto___23710 + (1));
i__7911__auto___23710 = G__23711;
continue;
} else {
}
break;
}

var G__23653 = args23651.length;
switch (G__23653) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23651.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21564__auto___23713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___23713,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___23713,out){
return (function (state_23685){
var state_val_23686 = (state_23685[(1)]);
if((state_val_23686 === (7))){
var inst_23665 = (state_23685[(7)]);
var inst_23664 = (state_23685[(8)]);
var inst_23664__$1 = (state_23685[(2)]);
var inst_23665__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23664__$1,(0),null);
var inst_23666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23664__$1,(1),null);
var inst_23667 = (inst_23665__$1 == null);
var state_23685__$1 = (function (){var statearr_23687 = state_23685;
(statearr_23687[(7)] = inst_23665__$1);

(statearr_23687[(8)] = inst_23664__$1);

(statearr_23687[(9)] = inst_23666);

return statearr_23687;
})();
if(cljs.core.truth_(inst_23667)){
var statearr_23688_23714 = state_23685__$1;
(statearr_23688_23714[(1)] = (8));

} else {
var statearr_23689_23715 = state_23685__$1;
(statearr_23689_23715[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23686 === (1))){
var inst_23654 = cljs.core.vec(chs);
var inst_23655 = inst_23654;
var state_23685__$1 = (function (){var statearr_23690 = state_23685;
(statearr_23690[(10)] = inst_23655);

return statearr_23690;
})();
var statearr_23691_23716 = state_23685__$1;
(statearr_23691_23716[(2)] = null);

(statearr_23691_23716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23686 === (4))){
var inst_23655 = (state_23685[(10)]);
var state_23685__$1 = state_23685;
return cljs.core.async.ioc_alts_BANG_(state_23685__$1,(7),inst_23655);
} else {
if((state_val_23686 === (6))){
var inst_23681 = (state_23685[(2)]);
var state_23685__$1 = state_23685;
var statearr_23692_23717 = state_23685__$1;
(statearr_23692_23717[(2)] = inst_23681);

(statearr_23692_23717[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23686 === (3))){
var inst_23683 = (state_23685[(2)]);
var state_23685__$1 = state_23685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23685__$1,inst_23683);
} else {
if((state_val_23686 === (2))){
var inst_23655 = (state_23685[(10)]);
var inst_23657 = cljs.core.count(inst_23655);
var inst_23658 = (inst_23657 > (0));
var state_23685__$1 = state_23685;
if(cljs.core.truth_(inst_23658)){
var statearr_23694_23718 = state_23685__$1;
(statearr_23694_23718[(1)] = (4));

} else {
var statearr_23695_23719 = state_23685__$1;
(statearr_23695_23719[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23686 === (11))){
var inst_23655 = (state_23685[(10)]);
var inst_23674 = (state_23685[(2)]);
var tmp23693 = inst_23655;
var inst_23655__$1 = tmp23693;
var state_23685__$1 = (function (){var statearr_23696 = state_23685;
(statearr_23696[(10)] = inst_23655__$1);

(statearr_23696[(11)] = inst_23674);

return statearr_23696;
})();
var statearr_23697_23720 = state_23685__$1;
(statearr_23697_23720[(2)] = null);

(statearr_23697_23720[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23686 === (9))){
var inst_23665 = (state_23685[(7)]);
var state_23685__$1 = state_23685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23685__$1,(11),out,inst_23665);
} else {
if((state_val_23686 === (5))){
var inst_23679 = cljs.core.async.close_BANG_(out);
var state_23685__$1 = state_23685;
var statearr_23698_23721 = state_23685__$1;
(statearr_23698_23721[(2)] = inst_23679);

(statearr_23698_23721[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23686 === (10))){
var inst_23677 = (state_23685[(2)]);
var state_23685__$1 = state_23685;
var statearr_23699_23722 = state_23685__$1;
(statearr_23699_23722[(2)] = inst_23677);

(statearr_23699_23722[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23686 === (8))){
var inst_23655 = (state_23685[(10)]);
var inst_23665 = (state_23685[(7)]);
var inst_23664 = (state_23685[(8)]);
var inst_23666 = (state_23685[(9)]);
var inst_23669 = (function (){var cs = inst_23655;
var vec__23660 = inst_23664;
var v = inst_23665;
var c = inst_23666;
return ((function (cs,vec__23660,v,c,inst_23655,inst_23665,inst_23664,inst_23666,state_val_23686,c__21564__auto___23713,out){
return (function (p1__23650_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23650_SHARP_);
});
;})(cs,vec__23660,v,c,inst_23655,inst_23665,inst_23664,inst_23666,state_val_23686,c__21564__auto___23713,out))
})();
var inst_23670 = cljs.core.filterv(inst_23669,inst_23655);
var inst_23655__$1 = inst_23670;
var state_23685__$1 = (function (){var statearr_23700 = state_23685;
(statearr_23700[(10)] = inst_23655__$1);

return statearr_23700;
})();
var statearr_23701_23723 = state_23685__$1;
(statearr_23701_23723[(2)] = null);

(statearr_23701_23723[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___23713,out))
;
return ((function (switch__21440__auto__,c__21564__auto___23713,out){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_23705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23705[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_23705[(1)] = (1));

return statearr_23705;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_23685){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_23685);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e23706){if((e23706 instanceof Object)){
var ex__21444__auto__ = e23706;
var statearr_23707_23724 = state_23685;
(statearr_23707_23724[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23685);

return cljs.core.cst$kw$recur;
} else {
throw e23706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__23725 = state_23685;
state_23685 = G__23725;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_23685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_23685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___23713,out))
})();
var state__21566__auto__ = (function (){var statearr_23708 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_23708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23713);

return statearr_23708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___23713,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23726 = [];
var len__7910__auto___23775 = arguments.length;
var i__7911__auto___23776 = (0);
while(true){
if((i__7911__auto___23776 < len__7910__auto___23775)){
args23726.push((arguments[i__7911__auto___23776]));

var G__23777 = (i__7911__auto___23776 + (1));
i__7911__auto___23776 = G__23777;
continue;
} else {
}
break;
}

var G__23728 = args23726.length;
switch (G__23728) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23726.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21564__auto___23779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___23779,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___23779,out){
return (function (state_23752){
var state_val_23753 = (state_23752[(1)]);
if((state_val_23753 === (7))){
var inst_23734 = (state_23752[(7)]);
var inst_23734__$1 = (state_23752[(2)]);
var inst_23735 = (inst_23734__$1 == null);
var inst_23736 = cljs.core.not(inst_23735);
var state_23752__$1 = (function (){var statearr_23754 = state_23752;
(statearr_23754[(7)] = inst_23734__$1);

return statearr_23754;
})();
if(inst_23736){
var statearr_23755_23780 = state_23752__$1;
(statearr_23755_23780[(1)] = (8));

} else {
var statearr_23756_23781 = state_23752__$1;
(statearr_23756_23781[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (1))){
var inst_23729 = (0);
var state_23752__$1 = (function (){var statearr_23757 = state_23752;
(statearr_23757[(8)] = inst_23729);

return statearr_23757;
})();
var statearr_23758_23782 = state_23752__$1;
(statearr_23758_23782[(2)] = null);

(statearr_23758_23782[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (4))){
var state_23752__$1 = state_23752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23752__$1,(7),ch);
} else {
if((state_val_23753 === (6))){
var inst_23747 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23759_23783 = state_23752__$1;
(statearr_23759_23783[(2)] = inst_23747);

(statearr_23759_23783[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (3))){
var inst_23749 = (state_23752[(2)]);
var inst_23750 = cljs.core.async.close_BANG_(out);
var state_23752__$1 = (function (){var statearr_23760 = state_23752;
(statearr_23760[(9)] = inst_23749);

return statearr_23760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23752__$1,inst_23750);
} else {
if((state_val_23753 === (2))){
var inst_23729 = (state_23752[(8)]);
var inst_23731 = (inst_23729 < n);
var state_23752__$1 = state_23752;
if(cljs.core.truth_(inst_23731)){
var statearr_23761_23784 = state_23752__$1;
(statearr_23761_23784[(1)] = (4));

} else {
var statearr_23762_23785 = state_23752__$1;
(statearr_23762_23785[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (11))){
var inst_23729 = (state_23752[(8)]);
var inst_23739 = (state_23752[(2)]);
var inst_23740 = (inst_23729 + (1));
var inst_23729__$1 = inst_23740;
var state_23752__$1 = (function (){var statearr_23763 = state_23752;
(statearr_23763[(8)] = inst_23729__$1);

(statearr_23763[(10)] = inst_23739);

return statearr_23763;
})();
var statearr_23764_23786 = state_23752__$1;
(statearr_23764_23786[(2)] = null);

(statearr_23764_23786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (9))){
var state_23752__$1 = state_23752;
var statearr_23765_23787 = state_23752__$1;
(statearr_23765_23787[(2)] = null);

(statearr_23765_23787[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (5))){
var state_23752__$1 = state_23752;
var statearr_23766_23788 = state_23752__$1;
(statearr_23766_23788[(2)] = null);

(statearr_23766_23788[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (10))){
var inst_23744 = (state_23752[(2)]);
var state_23752__$1 = state_23752;
var statearr_23767_23789 = state_23752__$1;
(statearr_23767_23789[(2)] = inst_23744);

(statearr_23767_23789[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23753 === (8))){
var inst_23734 = (state_23752[(7)]);
var state_23752__$1 = state_23752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23752__$1,(11),out,inst_23734);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___23779,out))
;
return ((function (switch__21440__auto__,c__21564__auto___23779,out){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_23771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23771[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_23771[(1)] = (1));

return statearr_23771;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_23752){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_23752);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e23772){if((e23772 instanceof Object)){
var ex__21444__auto__ = e23772;
var statearr_23773_23790 = state_23752;
(statearr_23773_23790[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23752);

return cljs.core.cst$kw$recur;
} else {
throw e23772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__23791 = state_23752;
state_23752 = G__23791;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_23752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_23752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___23779,out))
})();
var state__21566__auto__ = (function (){var statearr_23774 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_23774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23779);

return statearr_23774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___23779,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23801 = (function (f,ch,meta23802){
this.f = f;
this.ch = ch;
this.meta23802 = meta23802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23803,meta23802__$1){
var self__ = this;
var _23803__$1 = this;
return (new cljs.core.async.t_cljs$core$async23801(self__.f,self__.ch,meta23802__$1));
});

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23803){
var self__ = this;
var _23803__$1 = this;
return self__.meta23802;
});

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23804 = (function (f,ch,meta23802,_,fn1,meta23805){
this.f = f;
this.ch = ch;
this.meta23802 = meta23802;
this._ = _;
this.fn1 = fn1;
this.meta23805 = meta23805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23806,meta23805__$1){
var self__ = this;
var _23806__$1 = this;
return (new cljs.core.async.t_cljs$core$async23804(self__.f,self__.ch,self__.meta23802,self__._,self__.fn1,meta23805__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23806){
var self__ = this;
var _23806__$1 = this;
return self__.meta23805;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23792_SHARP_){
var G__23807 = (((p1__23792_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23792_SHARP_) : self__.f.call(null,p1__23792_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23807) : f1.call(null,G__23807));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23804.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23802,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async23801], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta23805], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23804";

cljs.core.async.t_cljs$core$async23804.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async23804");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23804 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23804(f__$1,ch__$1,meta23802__$1,___$2,fn1__$1,meta23805){
return (new cljs.core.async.t_cljs$core$async23804(f__$1,ch__$1,meta23802__$1,___$2,fn1__$1,meta23805));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23804(self__.f,self__.ch,self__.meta23802,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6785__auto__ = ret;
if(cljs.core.truth_(and__6785__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6785__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23808 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23808) : self__.f.call(null,G__23808));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23802], null);
});

cljs.core.async.t_cljs$core$async23801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23801";

cljs.core.async.t_cljs$core$async23801.cljs$lang$ctorPrWriter = (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async23801");
});

cljs.core.async.__GT_t_cljs$core$async23801 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23801(f__$1,ch__$1,meta23802){
return (new cljs.core.async.t_cljs$core$async23801(f__$1,ch__$1,meta23802));
});

}

return (new cljs.core.async.t_cljs$core$async23801(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23812 = (function (f,ch,meta23813){
this.f = f;
this.ch = ch;
this.meta23813 = meta23813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23814,meta23813__$1){
var self__ = this;
var _23814__$1 = this;
return (new cljs.core.async.t_cljs$core$async23812(self__.f,self__.ch,meta23813__$1));
});

cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23814){
var self__ = this;
var _23814__$1 = this;
return self__.meta23813;
});

cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async23812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23813], null);
});

cljs.core.async.t_cljs$core$async23812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23812";

cljs.core.async.t_cljs$core$async23812.cljs$lang$ctorPrWriter = (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async23812");
});

cljs.core.async.__GT_t_cljs$core$async23812 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23812(f__$1,ch__$1,meta23813){
return (new cljs.core.async.t_cljs$core$async23812(f__$1,ch__$1,meta23813));
});

}

return (new cljs.core.async.t_cljs$core$async23812(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23818 = (function (p,ch,meta23819){
this.p = p;
this.ch = ch;
this.meta23819 = meta23819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23820,meta23819__$1){
var self__ = this;
var _23820__$1 = this;
return (new cljs.core.async.t_cljs$core$async23818(self__.p,self__.ch,meta23819__$1));
});

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23820){
var self__ = this;
var _23820__$1 = this;
return self__.meta23819;
});

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta23819], null);
});

cljs.core.async.t_cljs$core$async23818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23818";

cljs.core.async.t_cljs$core$async23818.cljs$lang$ctorPrWriter = (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"cljs.core.async/t_cljs$core$async23818");
});

cljs.core.async.__GT_t_cljs$core$async23818 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23818(p__$1,ch__$1,meta23819){
return (new cljs.core.async.t_cljs$core$async23818(p__$1,ch__$1,meta23819));
});

}

return (new cljs.core.async.t_cljs$core$async23818(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23821 = [];
var len__7910__auto___23865 = arguments.length;
var i__7911__auto___23866 = (0);
while(true){
if((i__7911__auto___23866 < len__7910__auto___23865)){
args23821.push((arguments[i__7911__auto___23866]));

var G__23867 = (i__7911__auto___23866 + (1));
i__7911__auto___23866 = G__23867;
continue;
} else {
}
break;
}

var G__23823 = args23821.length;
switch (G__23823) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23821.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21564__auto___23869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___23869,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___23869,out){
return (function (state_23844){
var state_val_23845 = (state_23844[(1)]);
if((state_val_23845 === (7))){
var inst_23840 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
var statearr_23846_23870 = state_23844__$1;
(statearr_23846_23870[(2)] = inst_23840);

(statearr_23846_23870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (1))){
var state_23844__$1 = state_23844;
var statearr_23847_23871 = state_23844__$1;
(statearr_23847_23871[(2)] = null);

(statearr_23847_23871[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (4))){
var inst_23826 = (state_23844[(7)]);
var inst_23826__$1 = (state_23844[(2)]);
var inst_23827 = (inst_23826__$1 == null);
var state_23844__$1 = (function (){var statearr_23848 = state_23844;
(statearr_23848[(7)] = inst_23826__$1);

return statearr_23848;
})();
if(cljs.core.truth_(inst_23827)){
var statearr_23849_23872 = state_23844__$1;
(statearr_23849_23872[(1)] = (5));

} else {
var statearr_23850_23873 = state_23844__$1;
(statearr_23850_23873[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (6))){
var inst_23826 = (state_23844[(7)]);
var inst_23831 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23826) : p.call(null,inst_23826));
var state_23844__$1 = state_23844;
if(cljs.core.truth_(inst_23831)){
var statearr_23851_23874 = state_23844__$1;
(statearr_23851_23874[(1)] = (8));

} else {
var statearr_23852_23875 = state_23844__$1;
(statearr_23852_23875[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (3))){
var inst_23842 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23844__$1,inst_23842);
} else {
if((state_val_23845 === (2))){
var state_23844__$1 = state_23844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23844__$1,(4),ch);
} else {
if((state_val_23845 === (11))){
var inst_23834 = (state_23844[(2)]);
var state_23844__$1 = state_23844;
var statearr_23853_23876 = state_23844__$1;
(statearr_23853_23876[(2)] = inst_23834);

(statearr_23853_23876[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (9))){
var state_23844__$1 = state_23844;
var statearr_23854_23877 = state_23844__$1;
(statearr_23854_23877[(2)] = null);

(statearr_23854_23877[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (5))){
var inst_23829 = cljs.core.async.close_BANG_(out);
var state_23844__$1 = state_23844;
var statearr_23855_23878 = state_23844__$1;
(statearr_23855_23878[(2)] = inst_23829);

(statearr_23855_23878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (10))){
var inst_23837 = (state_23844[(2)]);
var state_23844__$1 = (function (){var statearr_23856 = state_23844;
(statearr_23856[(8)] = inst_23837);

return statearr_23856;
})();
var statearr_23857_23879 = state_23844__$1;
(statearr_23857_23879[(2)] = null);

(statearr_23857_23879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23845 === (8))){
var inst_23826 = (state_23844[(7)]);
var state_23844__$1 = state_23844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23844__$1,(11),out,inst_23826);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___23869,out))
;
return ((function (switch__21440__auto__,c__21564__auto___23869,out){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_23861 = [null,null,null,null,null,null,null,null,null];
(statearr_23861[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_23861[(1)] = (1));

return statearr_23861;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_23844){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_23844);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e23862){if((e23862 instanceof Object)){
var ex__21444__auto__ = e23862;
var statearr_23863_23880 = state_23844;
(statearr_23863_23880[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23844);

return cljs.core.cst$kw$recur;
} else {
throw e23862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__23881 = state_23844;
state_23844 = G__23881;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_23844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_23844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___23869,out))
})();
var state__21566__auto__ = (function (){var statearr_23864 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_23864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___23869);

return statearr_23864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___23869,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23882 = [];
var len__7910__auto___23885 = arguments.length;
var i__7911__auto___23886 = (0);
while(true){
if((i__7911__auto___23886 < len__7910__auto___23885)){
args23882.push((arguments[i__7911__auto___23886]));

var G__23887 = (i__7911__auto___23886 + (1));
i__7911__auto___23886 = G__23887;
continue;
} else {
}
break;
}

var G__23884 = args23882.length;
switch (G__23884) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23882.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto__){
return (function (state_24054){
var state_val_24055 = (state_24054[(1)]);
if((state_val_24055 === (7))){
var inst_24050 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24056_24097 = state_24054__$1;
(statearr_24056_24097[(2)] = inst_24050);

(statearr_24056_24097[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (20))){
var inst_24020 = (state_24054[(7)]);
var inst_24031 = (state_24054[(2)]);
var inst_24032 = cljs.core.next(inst_24020);
var inst_24006 = inst_24032;
var inst_24007 = null;
var inst_24008 = (0);
var inst_24009 = (0);
var state_24054__$1 = (function (){var statearr_24057 = state_24054;
(statearr_24057[(8)] = inst_24031);

(statearr_24057[(9)] = inst_24008);

(statearr_24057[(10)] = inst_24006);

(statearr_24057[(11)] = inst_24007);

(statearr_24057[(12)] = inst_24009);

return statearr_24057;
})();
var statearr_24058_24098 = state_24054__$1;
(statearr_24058_24098[(2)] = null);

(statearr_24058_24098[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (1))){
var state_24054__$1 = state_24054;
var statearr_24059_24099 = state_24054__$1;
(statearr_24059_24099[(2)] = null);

(statearr_24059_24099[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (4))){
var inst_23995 = (state_24054[(13)]);
var inst_23995__$1 = (state_24054[(2)]);
var inst_23996 = (inst_23995__$1 == null);
var state_24054__$1 = (function (){var statearr_24060 = state_24054;
(statearr_24060[(13)] = inst_23995__$1);

return statearr_24060;
})();
if(cljs.core.truth_(inst_23996)){
var statearr_24061_24100 = state_24054__$1;
(statearr_24061_24100[(1)] = (5));

} else {
var statearr_24062_24101 = state_24054__$1;
(statearr_24062_24101[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (15))){
var state_24054__$1 = state_24054;
var statearr_24066_24102 = state_24054__$1;
(statearr_24066_24102[(2)] = null);

(statearr_24066_24102[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (21))){
var state_24054__$1 = state_24054;
var statearr_24067_24103 = state_24054__$1;
(statearr_24067_24103[(2)] = null);

(statearr_24067_24103[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (13))){
var inst_24008 = (state_24054[(9)]);
var inst_24006 = (state_24054[(10)]);
var inst_24007 = (state_24054[(11)]);
var inst_24009 = (state_24054[(12)]);
var inst_24016 = (state_24054[(2)]);
var inst_24017 = (inst_24009 + (1));
var tmp24063 = inst_24008;
var tmp24064 = inst_24006;
var tmp24065 = inst_24007;
var inst_24006__$1 = tmp24064;
var inst_24007__$1 = tmp24065;
var inst_24008__$1 = tmp24063;
var inst_24009__$1 = inst_24017;
var state_24054__$1 = (function (){var statearr_24068 = state_24054;
(statearr_24068[(9)] = inst_24008__$1);

(statearr_24068[(10)] = inst_24006__$1);

(statearr_24068[(11)] = inst_24007__$1);

(statearr_24068[(12)] = inst_24009__$1);

(statearr_24068[(14)] = inst_24016);

return statearr_24068;
})();
var statearr_24069_24104 = state_24054__$1;
(statearr_24069_24104[(2)] = null);

(statearr_24069_24104[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (22))){
var state_24054__$1 = state_24054;
var statearr_24070_24105 = state_24054__$1;
(statearr_24070_24105[(2)] = null);

(statearr_24070_24105[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (6))){
var inst_23995 = (state_24054[(13)]);
var inst_24004 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23995) : f.call(null,inst_23995));
var inst_24005 = cljs.core.seq(inst_24004);
var inst_24006 = inst_24005;
var inst_24007 = null;
var inst_24008 = (0);
var inst_24009 = (0);
var state_24054__$1 = (function (){var statearr_24071 = state_24054;
(statearr_24071[(9)] = inst_24008);

(statearr_24071[(10)] = inst_24006);

(statearr_24071[(11)] = inst_24007);

(statearr_24071[(12)] = inst_24009);

return statearr_24071;
})();
var statearr_24072_24106 = state_24054__$1;
(statearr_24072_24106[(2)] = null);

(statearr_24072_24106[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (17))){
var inst_24020 = (state_24054[(7)]);
var inst_24024 = cljs.core.chunk_first(inst_24020);
var inst_24025 = cljs.core.chunk_rest(inst_24020);
var inst_24026 = cljs.core.count(inst_24024);
var inst_24006 = inst_24025;
var inst_24007 = inst_24024;
var inst_24008 = inst_24026;
var inst_24009 = (0);
var state_24054__$1 = (function (){var statearr_24073 = state_24054;
(statearr_24073[(9)] = inst_24008);

(statearr_24073[(10)] = inst_24006);

(statearr_24073[(11)] = inst_24007);

(statearr_24073[(12)] = inst_24009);

return statearr_24073;
})();
var statearr_24074_24107 = state_24054__$1;
(statearr_24074_24107[(2)] = null);

(statearr_24074_24107[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (3))){
var inst_24052 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24054__$1,inst_24052);
} else {
if((state_val_24055 === (12))){
var inst_24040 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24075_24108 = state_24054__$1;
(statearr_24075_24108[(2)] = inst_24040);

(statearr_24075_24108[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (2))){
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24054__$1,(4),in$);
} else {
if((state_val_24055 === (23))){
var inst_24048 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24076_24109 = state_24054__$1;
(statearr_24076_24109[(2)] = inst_24048);

(statearr_24076_24109[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (19))){
var inst_24035 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24077_24110 = state_24054__$1;
(statearr_24077_24110[(2)] = inst_24035);

(statearr_24077_24110[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (11))){
var inst_24006 = (state_24054[(10)]);
var inst_24020 = (state_24054[(7)]);
var inst_24020__$1 = cljs.core.seq(inst_24006);
var state_24054__$1 = (function (){var statearr_24078 = state_24054;
(statearr_24078[(7)] = inst_24020__$1);

return statearr_24078;
})();
if(inst_24020__$1){
var statearr_24079_24111 = state_24054__$1;
(statearr_24079_24111[(1)] = (14));

} else {
var statearr_24080_24112 = state_24054__$1;
(statearr_24080_24112[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (9))){
var inst_24042 = (state_24054[(2)]);
var inst_24043 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24054__$1 = (function (){var statearr_24081 = state_24054;
(statearr_24081[(15)] = inst_24042);

return statearr_24081;
})();
if(cljs.core.truth_(inst_24043)){
var statearr_24082_24113 = state_24054__$1;
(statearr_24082_24113[(1)] = (21));

} else {
var statearr_24083_24114 = state_24054__$1;
(statearr_24083_24114[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (5))){
var inst_23998 = cljs.core.async.close_BANG_(out);
var state_24054__$1 = state_24054;
var statearr_24084_24115 = state_24054__$1;
(statearr_24084_24115[(2)] = inst_23998);

(statearr_24084_24115[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (14))){
var inst_24020 = (state_24054[(7)]);
var inst_24022 = cljs.core.chunked_seq_QMARK_(inst_24020);
var state_24054__$1 = state_24054;
if(inst_24022){
var statearr_24085_24116 = state_24054__$1;
(statearr_24085_24116[(1)] = (17));

} else {
var statearr_24086_24117 = state_24054__$1;
(statearr_24086_24117[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (16))){
var inst_24038 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24087_24118 = state_24054__$1;
(statearr_24087_24118[(2)] = inst_24038);

(statearr_24087_24118[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24055 === (10))){
var inst_24007 = (state_24054[(11)]);
var inst_24009 = (state_24054[(12)]);
var inst_24014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24007,inst_24009);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24054__$1,(13),out,inst_24014);
} else {
if((state_val_24055 === (18))){
var inst_24020 = (state_24054[(7)]);
var inst_24029 = cljs.core.first(inst_24020);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24054__$1,(20),out,inst_24029);
} else {
if((state_val_24055 === (8))){
var inst_24008 = (state_24054[(9)]);
var inst_24009 = (state_24054[(12)]);
var inst_24011 = (inst_24009 < inst_24008);
var inst_24012 = inst_24011;
var state_24054__$1 = state_24054;
if(cljs.core.truth_(inst_24012)){
var statearr_24088_24119 = state_24054__$1;
(statearr_24088_24119[(1)] = (10));

} else {
var statearr_24089_24120 = state_24054__$1;
(statearr_24089_24120[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto__))
;
return ((function (switch__21440__auto__,c__21564__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21441__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21441__auto____0 = (function (){
var statearr_24093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24093[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21441__auto__);

(statearr_24093[(1)] = (1));

return statearr_24093;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21441__auto____1 = (function (state_24054){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_24054);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e24094){if((e24094 instanceof Object)){
var ex__21444__auto__ = e24094;
var statearr_24095_24121 = state_24054;
(statearr_24095_24121[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24054);

return cljs.core.cst$kw$recur;
} else {
throw e24094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__24122 = state_24054;
state_24054 = G__24122;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21441__auto__ = function(state_24054){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21441__auto____1.call(this,state_24054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21441__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21441__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_24096 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_24096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_24096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24123 = [];
var len__7910__auto___24126 = arguments.length;
var i__7911__auto___24127 = (0);
while(true){
if((i__7911__auto___24127 < len__7910__auto___24126)){
args24123.push((arguments[i__7911__auto___24127]));

var G__24128 = (i__7911__auto___24127 + (1));
i__7911__auto___24127 = G__24128;
continue;
} else {
}
break;
}

var G__24125 = args24123.length;
switch (G__24125) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24123.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24130 = [];
var len__7910__auto___24133 = arguments.length;
var i__7911__auto___24134 = (0);
while(true){
if((i__7911__auto___24134 < len__7910__auto___24133)){
args24130.push((arguments[i__7911__auto___24134]));

var G__24135 = (i__7911__auto___24134 + (1));
i__7911__auto___24134 = G__24135;
continue;
} else {
}
break;
}

var G__24132 = args24130.length;
switch (G__24132) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24130.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24137 = [];
var len__7910__auto___24188 = arguments.length;
var i__7911__auto___24189 = (0);
while(true){
if((i__7911__auto___24189 < len__7910__auto___24188)){
args24137.push((arguments[i__7911__auto___24189]));

var G__24190 = (i__7911__auto___24189 + (1));
i__7911__auto___24189 = G__24190;
continue;
} else {
}
break;
}

var G__24139 = args24137.length;
switch (G__24139) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24137.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21564__auto___24192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___24192,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___24192,out){
return (function (state_24163){
var state_val_24164 = (state_24163[(1)]);
if((state_val_24164 === (7))){
var inst_24158 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24165_24193 = state_24163__$1;
(statearr_24165_24193[(2)] = inst_24158);

(statearr_24165_24193[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24164 === (1))){
var inst_24140 = null;
var state_24163__$1 = (function (){var statearr_24166 = state_24163;
(statearr_24166[(7)] = inst_24140);

return statearr_24166;
})();
var statearr_24167_24194 = state_24163__$1;
(statearr_24167_24194[(2)] = null);

(statearr_24167_24194[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24164 === (4))){
var inst_24143 = (state_24163[(8)]);
var inst_24143__$1 = (state_24163[(2)]);
var inst_24144 = (inst_24143__$1 == null);
var inst_24145 = cljs.core.not(inst_24144);
var state_24163__$1 = (function (){var statearr_24168 = state_24163;
(statearr_24168[(8)] = inst_24143__$1);

return statearr_24168;
})();
if(inst_24145){
var statearr_24169_24195 = state_24163__$1;
(statearr_24169_24195[(1)] = (5));

} else {
var statearr_24170_24196 = state_24163__$1;
(statearr_24170_24196[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24164 === (6))){
var state_24163__$1 = state_24163;
var statearr_24171_24197 = state_24163__$1;
(statearr_24171_24197[(2)] = null);

(statearr_24171_24197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24164 === (3))){
var inst_24160 = (state_24163[(2)]);
var inst_24161 = cljs.core.async.close_BANG_(out);
var state_24163__$1 = (function (){var statearr_24172 = state_24163;
(statearr_24172[(9)] = inst_24160);

return statearr_24172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24163__$1,inst_24161);
} else {
if((state_val_24164 === (2))){
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24163__$1,(4),ch);
} else {
if((state_val_24164 === (11))){
var inst_24143 = (state_24163[(8)]);
var inst_24152 = (state_24163[(2)]);
var inst_24140 = inst_24143;
var state_24163__$1 = (function (){var statearr_24173 = state_24163;
(statearr_24173[(10)] = inst_24152);

(statearr_24173[(7)] = inst_24140);

return statearr_24173;
})();
var statearr_24174_24198 = state_24163__$1;
(statearr_24174_24198[(2)] = null);

(statearr_24174_24198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24164 === (9))){
var inst_24143 = (state_24163[(8)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24163__$1,(11),out,inst_24143);
} else {
if((state_val_24164 === (5))){
var inst_24140 = (state_24163[(7)]);
var inst_24143 = (state_24163[(8)]);
var inst_24147 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24143,inst_24140);
var state_24163__$1 = state_24163;
if(inst_24147){
var statearr_24176_24199 = state_24163__$1;
(statearr_24176_24199[(1)] = (8));

} else {
var statearr_24177_24200 = state_24163__$1;
(statearr_24177_24200[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24164 === (10))){
var inst_24155 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24178_24201 = state_24163__$1;
(statearr_24178_24201[(2)] = inst_24155);

(statearr_24178_24201[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24164 === (8))){
var inst_24140 = (state_24163[(7)]);
var tmp24175 = inst_24140;
var inst_24140__$1 = tmp24175;
var state_24163__$1 = (function (){var statearr_24179 = state_24163;
(statearr_24179[(7)] = inst_24140__$1);

return statearr_24179;
})();
var statearr_24180_24202 = state_24163__$1;
(statearr_24180_24202[(2)] = null);

(statearr_24180_24202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___24192,out))
;
return ((function (switch__21440__auto__,c__21564__auto___24192,out){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_24184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24184[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_24184[(1)] = (1));

return statearr_24184;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_24163){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_24163);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e24185){if((e24185 instanceof Object)){
var ex__21444__auto__ = e24185;
var statearr_24186_24203 = state_24163;
(statearr_24186_24203[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24163);

return cljs.core.cst$kw$recur;
} else {
throw e24185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__24204 = state_24163;
state_24163 = G__24204;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___24192,out))
})();
var state__21566__auto__ = (function (){var statearr_24187 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_24187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24192);

return statearr_24187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___24192,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24205 = [];
var len__7910__auto___24275 = arguments.length;
var i__7911__auto___24276 = (0);
while(true){
if((i__7911__auto___24276 < len__7910__auto___24275)){
args24205.push((arguments[i__7911__auto___24276]));

var G__24277 = (i__7911__auto___24276 + (1));
i__7911__auto___24276 = G__24277;
continue;
} else {
}
break;
}

var G__24207 = args24205.length;
switch (G__24207) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24205.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21564__auto___24279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___24279,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___24279,out){
return (function (state_24245){
var state_val_24246 = (state_24245[(1)]);
if((state_val_24246 === (7))){
var inst_24241 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24247_24280 = state_24245__$1;
(statearr_24247_24280[(2)] = inst_24241);

(statearr_24247_24280[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (1))){
var inst_24208 = (new Array(n));
var inst_24209 = inst_24208;
var inst_24210 = (0);
var state_24245__$1 = (function (){var statearr_24248 = state_24245;
(statearr_24248[(7)] = inst_24209);

(statearr_24248[(8)] = inst_24210);

return statearr_24248;
})();
var statearr_24249_24281 = state_24245__$1;
(statearr_24249_24281[(2)] = null);

(statearr_24249_24281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (4))){
var inst_24213 = (state_24245[(9)]);
var inst_24213__$1 = (state_24245[(2)]);
var inst_24214 = (inst_24213__$1 == null);
var inst_24215 = cljs.core.not(inst_24214);
var state_24245__$1 = (function (){var statearr_24250 = state_24245;
(statearr_24250[(9)] = inst_24213__$1);

return statearr_24250;
})();
if(inst_24215){
var statearr_24251_24282 = state_24245__$1;
(statearr_24251_24282[(1)] = (5));

} else {
var statearr_24252_24283 = state_24245__$1;
(statearr_24252_24283[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (15))){
var inst_24235 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24253_24284 = state_24245__$1;
(statearr_24253_24284[(2)] = inst_24235);

(statearr_24253_24284[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (13))){
var state_24245__$1 = state_24245;
var statearr_24254_24285 = state_24245__$1;
(statearr_24254_24285[(2)] = null);

(statearr_24254_24285[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (6))){
var inst_24210 = (state_24245[(8)]);
var inst_24231 = (inst_24210 > (0));
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24231)){
var statearr_24255_24286 = state_24245__$1;
(statearr_24255_24286[(1)] = (12));

} else {
var statearr_24256_24287 = state_24245__$1;
(statearr_24256_24287[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (3))){
var inst_24243 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24245__$1,inst_24243);
} else {
if((state_val_24246 === (12))){
var inst_24209 = (state_24245[(7)]);
var inst_24233 = cljs.core.vec(inst_24209);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24245__$1,(15),out,inst_24233);
} else {
if((state_val_24246 === (2))){
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24245__$1,(4),ch);
} else {
if((state_val_24246 === (11))){
var inst_24225 = (state_24245[(2)]);
var inst_24226 = (new Array(n));
var inst_24209 = inst_24226;
var inst_24210 = (0);
var state_24245__$1 = (function (){var statearr_24257 = state_24245;
(statearr_24257[(7)] = inst_24209);

(statearr_24257[(10)] = inst_24225);

(statearr_24257[(8)] = inst_24210);

return statearr_24257;
})();
var statearr_24258_24288 = state_24245__$1;
(statearr_24258_24288[(2)] = null);

(statearr_24258_24288[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (9))){
var inst_24209 = (state_24245[(7)]);
var inst_24223 = cljs.core.vec(inst_24209);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24245__$1,(11),out,inst_24223);
} else {
if((state_val_24246 === (5))){
var inst_24209 = (state_24245[(7)]);
var inst_24210 = (state_24245[(8)]);
var inst_24213 = (state_24245[(9)]);
var inst_24218 = (state_24245[(11)]);
var inst_24217 = (inst_24209[inst_24210] = inst_24213);
var inst_24218__$1 = (inst_24210 + (1));
var inst_24219 = (inst_24218__$1 < n);
var state_24245__$1 = (function (){var statearr_24259 = state_24245;
(statearr_24259[(12)] = inst_24217);

(statearr_24259[(11)] = inst_24218__$1);

return statearr_24259;
})();
if(cljs.core.truth_(inst_24219)){
var statearr_24260_24289 = state_24245__$1;
(statearr_24260_24289[(1)] = (8));

} else {
var statearr_24261_24290 = state_24245__$1;
(statearr_24261_24290[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (14))){
var inst_24238 = (state_24245[(2)]);
var inst_24239 = cljs.core.async.close_BANG_(out);
var state_24245__$1 = (function (){var statearr_24263 = state_24245;
(statearr_24263[(13)] = inst_24238);

return statearr_24263;
})();
var statearr_24264_24291 = state_24245__$1;
(statearr_24264_24291[(2)] = inst_24239);

(statearr_24264_24291[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (10))){
var inst_24229 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24265_24292 = state_24245__$1;
(statearr_24265_24292[(2)] = inst_24229);

(statearr_24265_24292[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24246 === (8))){
var inst_24209 = (state_24245[(7)]);
var inst_24218 = (state_24245[(11)]);
var tmp24262 = inst_24209;
var inst_24209__$1 = tmp24262;
var inst_24210 = inst_24218;
var state_24245__$1 = (function (){var statearr_24266 = state_24245;
(statearr_24266[(7)] = inst_24209__$1);

(statearr_24266[(8)] = inst_24210);

return statearr_24266;
})();
var statearr_24267_24293 = state_24245__$1;
(statearr_24267_24293[(2)] = null);

(statearr_24267_24293[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___24279,out))
;
return ((function (switch__21440__auto__,c__21564__auto___24279,out){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_24271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24271[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_24271[(1)] = (1));

return statearr_24271;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_24245){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_24245);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e24272){if((e24272 instanceof Object)){
var ex__21444__auto__ = e24272;
var statearr_24273_24294 = state_24245;
(statearr_24273_24294[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24245);

return cljs.core.cst$kw$recur;
} else {
throw e24272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__24295 = state_24245;
state_24245 = G__24295;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_24245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_24245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___24279,out))
})();
var state__21566__auto__ = (function (){var statearr_24274 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_24274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24279);

return statearr_24274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___24279,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24296 = [];
var len__7910__auto___24370 = arguments.length;
var i__7911__auto___24371 = (0);
while(true){
if((i__7911__auto___24371 < len__7910__auto___24370)){
args24296.push((arguments[i__7911__auto___24371]));

var G__24372 = (i__7911__auto___24371 + (1));
i__7911__auto___24371 = G__24372;
continue;
} else {
}
break;
}

var G__24298 = args24296.length;
switch (G__24298) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24296.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21564__auto___24374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___24374,out){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___24374,out){
return (function (state_24340){
var state_val_24341 = (state_24340[(1)]);
if((state_val_24341 === (7))){
var inst_24336 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24342_24375 = state_24340__$1;
(statearr_24342_24375[(2)] = inst_24336);

(statearr_24342_24375[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (1))){
var inst_24299 = [];
var inst_24300 = inst_24299;
var inst_24301 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_24340__$1 = (function (){var statearr_24343 = state_24340;
(statearr_24343[(7)] = inst_24301);

(statearr_24343[(8)] = inst_24300);

return statearr_24343;
})();
var statearr_24344_24376 = state_24340__$1;
(statearr_24344_24376[(2)] = null);

(statearr_24344_24376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (4))){
var inst_24304 = (state_24340[(9)]);
var inst_24304__$1 = (state_24340[(2)]);
var inst_24305 = (inst_24304__$1 == null);
var inst_24306 = cljs.core.not(inst_24305);
var state_24340__$1 = (function (){var statearr_24345 = state_24340;
(statearr_24345[(9)] = inst_24304__$1);

return statearr_24345;
})();
if(inst_24306){
var statearr_24346_24377 = state_24340__$1;
(statearr_24346_24377[(1)] = (5));

} else {
var statearr_24347_24378 = state_24340__$1;
(statearr_24347_24378[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (15))){
var inst_24330 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24348_24379 = state_24340__$1;
(statearr_24348_24379[(2)] = inst_24330);

(statearr_24348_24379[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (13))){
var state_24340__$1 = state_24340;
var statearr_24349_24380 = state_24340__$1;
(statearr_24349_24380[(2)] = null);

(statearr_24349_24380[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (6))){
var inst_24300 = (state_24340[(8)]);
var inst_24325 = inst_24300.length;
var inst_24326 = (inst_24325 > (0));
var state_24340__$1 = state_24340;
if(cljs.core.truth_(inst_24326)){
var statearr_24350_24381 = state_24340__$1;
(statearr_24350_24381[(1)] = (12));

} else {
var statearr_24351_24382 = state_24340__$1;
(statearr_24351_24382[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (3))){
var inst_24338 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24340__$1,inst_24338);
} else {
if((state_val_24341 === (12))){
var inst_24300 = (state_24340[(8)]);
var inst_24328 = cljs.core.vec(inst_24300);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24340__$1,(15),out,inst_24328);
} else {
if((state_val_24341 === (2))){
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24340__$1,(4),ch);
} else {
if((state_val_24341 === (11))){
var inst_24304 = (state_24340[(9)]);
var inst_24308 = (state_24340[(10)]);
var inst_24318 = (state_24340[(2)]);
var inst_24319 = [];
var inst_24320 = inst_24319.push(inst_24304);
var inst_24300 = inst_24319;
var inst_24301 = inst_24308;
var state_24340__$1 = (function (){var statearr_24352 = state_24340;
(statearr_24352[(11)] = inst_24320);

(statearr_24352[(12)] = inst_24318);

(statearr_24352[(7)] = inst_24301);

(statearr_24352[(8)] = inst_24300);

return statearr_24352;
})();
var statearr_24353_24383 = state_24340__$1;
(statearr_24353_24383[(2)] = null);

(statearr_24353_24383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (9))){
var inst_24300 = (state_24340[(8)]);
var inst_24316 = cljs.core.vec(inst_24300);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24340__$1,(11),out,inst_24316);
} else {
if((state_val_24341 === (5))){
var inst_24301 = (state_24340[(7)]);
var inst_24304 = (state_24340[(9)]);
var inst_24308 = (state_24340[(10)]);
var inst_24308__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24304) : f.call(null,inst_24304));
var inst_24309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24308__$1,inst_24301);
var inst_24310 = cljs.core.keyword_identical_QMARK_(inst_24301,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_24311 = (inst_24309) || (inst_24310);
var state_24340__$1 = (function (){var statearr_24354 = state_24340;
(statearr_24354[(10)] = inst_24308__$1);

return statearr_24354;
})();
if(cljs.core.truth_(inst_24311)){
var statearr_24355_24384 = state_24340__$1;
(statearr_24355_24384[(1)] = (8));

} else {
var statearr_24356_24385 = state_24340__$1;
(statearr_24356_24385[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (14))){
var inst_24333 = (state_24340[(2)]);
var inst_24334 = cljs.core.async.close_BANG_(out);
var state_24340__$1 = (function (){var statearr_24358 = state_24340;
(statearr_24358[(13)] = inst_24333);

return statearr_24358;
})();
var statearr_24359_24386 = state_24340__$1;
(statearr_24359_24386[(2)] = inst_24334);

(statearr_24359_24386[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (10))){
var inst_24323 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24360_24387 = state_24340__$1;
(statearr_24360_24387[(2)] = inst_24323);

(statearr_24360_24387[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24341 === (8))){
var inst_24304 = (state_24340[(9)]);
var inst_24300 = (state_24340[(8)]);
var inst_24308 = (state_24340[(10)]);
var inst_24313 = inst_24300.push(inst_24304);
var tmp24357 = inst_24300;
var inst_24300__$1 = tmp24357;
var inst_24301 = inst_24308;
var state_24340__$1 = (function (){var statearr_24361 = state_24340;
(statearr_24361[(7)] = inst_24301);

(statearr_24361[(14)] = inst_24313);

(statearr_24361[(8)] = inst_24300__$1);

return statearr_24361;
})();
var statearr_24362_24388 = state_24340__$1;
(statearr_24362_24388[(2)] = null);

(statearr_24362_24388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21564__auto___24374,out))
;
return ((function (switch__21440__auto__,c__21564__auto___24374,out){
return (function() {
var cljs$core$async$state_machine__21441__auto__ = null;
var cljs$core$async$state_machine__21441__auto____0 = (function (){
var statearr_24366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24366[(0)] = cljs$core$async$state_machine__21441__auto__);

(statearr_24366[(1)] = (1));

return statearr_24366;
});
var cljs$core$async$state_machine__21441__auto____1 = (function (state_24340){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_24340);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e24367){if((e24367 instanceof Object)){
var ex__21444__auto__ = e24367;
var statearr_24368_24389 = state_24340;
(statearr_24368_24389[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24340);

return cljs.core.cst$kw$recur;
} else {
throw e24367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__24390 = state_24340;
state_24340 = G__24390;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs$core$async$state_machine__21441__auto__ = function(state_24340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21441__auto____1.call(this,state_24340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21441__auto____0;
cljs$core$async$state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21441__auto____1;
return cljs$core$async$state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___24374,out))
})();
var state__21566__auto__ = (function (){var statearr_24369 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_24369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24374);

return statearr_24369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___24374,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

