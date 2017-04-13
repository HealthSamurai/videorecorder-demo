// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

/**
 * @interface
 */
clojure.browser.event.IEventType = function(){};

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$event$IEventType$event_types$arity$1 == null)))){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (clojure.browser.event.event_types["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__26688){
var vec__26689 = p__26688;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26689,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26689,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__26692){
var vec__26693 = p__26692;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26693,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function clojure$browser$event$listen(var_args){
var args26696 = [];
var len__7910__auto___26703 = arguments.length;
var i__7911__auto___26704 = (0);
while(true){
if((i__7911__auto___26704 < len__7910__auto___26703)){
args26696.push((arguments[i__7911__auto___26704]));

var G__26705 = (i__7911__auto___26704 + (1));
i__7911__auto___26704 = G__26705;
continue;
} else {
}
break;
}

var G__26698 = args26696.length;
switch (G__26698) {
case 3:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26696.length)].join('')));

}
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__26699 = src;
var G__26700 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__26701 = fn;
var G__26702 = capture_QMARK_;
return goog.events.listen(G__26699,G__26700,G__26701,G__26702);
});

clojure.browser.event.listen.cljs$lang$maxFixedArity = 4;

clojure.browser.event.listen_once = (function clojure$browser$event$listen_once(var_args){
var args26707 = [];
var len__7910__auto___26714 = arguments.length;
var i__7911__auto___26715 = (0);
while(true){
if((i__7911__auto___26715 < len__7910__auto___26714)){
args26707.push((arguments[i__7911__auto___26715]));

var G__26716 = (i__7911__auto___26715 + (1));
i__7911__auto___26715 = G__26716;
continue;
} else {
}
break;
}

var G__26709 = args26707.length;
switch (G__26709) {
case 3:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26707.length)].join('')));

}
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__26710 = src;
var G__26711 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__26712 = fn;
var G__26713 = capture_QMARK_;
return goog.events.listenOnce(G__26710,G__26711,G__26712,G__26713);
});

clojure.browser.event.listen_once.cljs$lang$maxFixedArity = 4;

clojure.browser.event.unlisten = (function clojure$browser$event$unlisten(var_args){
var args26718 = [];
var len__7910__auto___26725 = arguments.length;
var i__7911__auto___26726 = (0);
while(true){
if((i__7911__auto___26726 < len__7910__auto___26725)){
args26718.push((arguments[i__7911__auto___26726]));

var G__26727 = (i__7911__auto___26726 + (1));
i__7911__auto___26726 = G__26727;
continue;
} else {
}
break;
}

var G__26720 = args26718.length;
switch (G__26720) {
case 3:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26718.length)].join('')));

}
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__26721 = src;
var G__26722 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__26723 = fn;
var G__26724 = capture_QMARK_;
return goog.events.unlisten(G__26721,G__26722,G__26723,G__26724);
});

clojure.browser.event.unlisten.cljs$lang$maxFixedArity = 4;

clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
