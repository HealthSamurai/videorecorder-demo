// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.event');
goog.require('goog.json');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.WebSocket');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.Uri');
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26731){
var vec__26732 = p__26731;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));

/**
 * @interface
 */
clojure.browser.net.IConnection = function(){};

clojure.browser.net.connect = (function clojure$browser$net$connect(var_args){
var args26735 = [];
var len__7910__auto___26741 = arguments.length;
var i__7911__auto___26742 = (0);
while(true){
if((i__7911__auto___26742 < len__7910__auto___26741)){
args26735.push((arguments[i__7911__auto___26742]));

var G__26743 = (i__7911__auto___26742 + (1));
i__7911__auto___26742 = G__26743;
continue;
} else {
}
break;
}

var G__26737 = args26735.length;
switch (G__26737) {
case 1:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26735.length)].join('')));

}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$1 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt1){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$2 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,opt1) : m__7466__auto__.call(null,this$,opt1));
} else {
var m__7466__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,opt1) : m__7466__auto____$1.call(null,this$,opt1));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt1,opt2){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$3 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$3(this$,opt1,opt2) : m__7466__auto__.call(null,this$,opt1,opt2));
} else {
var m__7466__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,opt1,opt2) : m__7466__auto____$1.call(null,this$,opt1,opt2));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt1,opt2,opt3){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$connect$arity$4 == null)))){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.connect[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$4(this$,opt1,opt2,opt3) : m__7466__auto__.call(null,this$,opt1,opt2,opt3));
} else {
var m__7466__auto____$1 = (clojure.browser.net.connect["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,opt1,opt2,opt3) : m__7466__auto____$1.call(null,this$,opt1,opt2,opt3));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
}
});

clojure.browser.net.connect.cljs$lang$maxFixedArity = 4;


clojure.browser.net.transmit = (function clojure$browser$net$transmit(var_args){
var args26738 = [];
var len__7910__auto___26745 = arguments.length;
var i__7911__auto___26746 = (0);
while(true){
if((i__7911__auto___26746 < len__7910__auto___26745)){
args26738.push((arguments[i__7911__auto___26746]));

var G__26747 = (i__7911__auto___26746 + (1));
i__7911__auto___26746 = G__26747;
continue;
} else {
}
break;
}

var G__26740 = args26738.length;
switch (G__26740) {
case 2:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26738.length)].join('')));

}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$2 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,opt) : m__7466__auto__.call(null,this$,opt));
} else {
var m__7466__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,opt) : m__7466__auto____$1.call(null,this$,opt));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt,opt2){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$3 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$3(this$,opt,opt2) : m__7466__auto__.call(null,this$,opt,opt2));
} else {
var m__7466__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,opt,opt2) : m__7466__auto____$1.call(null,this$,opt,opt2));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt,opt2,opt3){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$4 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$4(this$,opt,opt2,opt3) : m__7466__auto__.call(null,this$,opt,opt2,opt3));
} else {
var m__7466__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,opt,opt2,opt3) : m__7466__auto____$1.call(null,this$,opt,opt2,opt3));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5 = (function (this$,opt,opt2,opt3,opt4){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$5 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$5 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$5(this$,opt,opt2,opt3,opt4) : m__7466__auto__.call(null,this$,opt,opt2,opt3,opt4));
} else {
var m__7466__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,opt,opt2,opt3,opt4) : m__7466__auto____$1.call(null,this$,opt,opt2,opt3,opt4));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$transmit$arity$6 == null)))){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$6 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$6(this$,opt,opt2,opt3,opt4,opt5) : m__7466__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5));
} else {
var m__7466__auto____$1 = (clojure.browser.net.transmit["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$6 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$6(this$,opt,opt2,opt3,opt4,opt5) : m__7466__auto____$1.call(null,this$,opt,opt2,opt3,opt4,opt5));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
}
});

clojure.browser.net.transmit.cljs$lang$maxFixedArity = 6;


clojure.browser.net.close = (function clojure$browser$net$close(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IConnection$close$arity$1 == null)))){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.close[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (clojure.browser.net.close["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IConnection.close",this$);
}
}
}
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
});

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__26749){
var vec__26750 = p__26749;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26750,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));
});
clojure.browser.net.xpc_config_fields = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26753){
var vec__26754 = p__26753;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26754,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.xpc.CfgFields)));
/**
 * Returns an XhrIo connection
 */
clojure.browser.net.xhr_connection = (function clojure$browser$net$xhr_connection(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
clojure.browser.net.ICrossPageChannel = function(){};

clojure.browser.net.register_service = (function clojure$browser$net$register_service(var_args){
var args26757 = [];
var len__7910__auto___26760 = arguments.length;
var i__7911__auto___26761 = (0);
while(true){
if((i__7911__auto___26761 < len__7910__auto___26760)){
args26757.push((arguments[i__7911__auto___26761]));

var G__26762 = (i__7911__auto___26761 + (1));
i__7911__auto___26761 = G__26762;
continue;
} else {
}
break;
}

var G__26759 = args26757.length;
switch (G__26759) {
case 3:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26757.length)].join('')));

}
});

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3 = (function (this$,service_name,fn){
if((!((this$ == null))) && (!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3 == null)))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$3(this$,service_name,fn) : m__7466__auto__.call(null,this$,service_name,fn));
} else {
var m__7466__auto____$1 = (clojure.browser.net.register_service["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,service_name,fn) : m__7466__auto____$1.call(null,this$,service_name,fn));
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
}
});

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((!((this$ == null))) && (!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4 == null)))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$4(this$,service_name,fn,encode_json_QMARK_) : m__7466__auto__.call(null,this$,service_name,fn,encode_json_QMARK_));
} else {
var m__7466__auto____$1 = (clojure.browser.net.register_service["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,service_name,fn,encode_json_QMARK_) : m__7466__auto____$1.call(null,this$,service_name,fn,encode_json_QMARK_));
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
}
});

clojure.browser.net.register_service.cljs$lang$maxFixedArity = 4;


goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4(this$__$1,service_name,fn,false);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name(service_name),fn,encode_json_QMARK_);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(this$__$1,null);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4(this$__$1,on_connect_fn,config_iframe_fn,document.body);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name(service_name),payload);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
});
/**
 * When passed with a config hash-map, returns a parent
 *   CrossPageChannel object. Keys in the config hash map are downcased
 *   versions of the goog.net.xpc.CfgFields enum keys,
 *   e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
 *   hash.
 * 
 *   When passed with no args, creates a child CrossPageChannel object,
 *   and the config is automatically taken from the URL param 'xpc', as
 *   per the CrossPageChannel API.
 */
clojure.browser.net.xpc_connection = (function clojure$browser$net$xpc_connection(var_args){
var args26764 = [];
var len__7910__auto___26774 = arguments.length;
var i__7911__auto___26775 = (0);
while(true){
if((i__7911__auto___26775 < len__7910__auto___26774)){
args26764.push((arguments[i__7911__auto___26775]));

var G__26776 = (i__7911__auto___26775 + (1));
i__7911__auto___26775 = G__26776;
continue;
} else {
}
break;
}

var G__26766 = args26764.length;
switch (G__26766) {
case 0:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26764.length)].join('')));

}
});

clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__4657__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4657__auto__)){
var config = temp__4657__auto__;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config)));
} else {
return null;
}
});

clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__26767){
var vec__26768 = p__26767;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768,(1),null);
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__4655__auto__)){
var field = temp__4655__auto__;
var G__26771 = sum;
(G__26771[field] = v);

return G__26771;
} else {
return sum;
}
}),{},config)));
});

clojure.browser.net.xpc_connection.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
clojure.browser.net.IWebSocket = function(){};

clojure.browser.net.open_QMARK_ = (function clojure$browser$net$open_QMARK_(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 == null)))){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (clojure.browser.net.open_QMARK_[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (clojure.browser.net.open_QMARK_["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWebSocket.open?",this$);
}
}
}
});

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__26778){
var vec__26779 = p__26778;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.WebSocket.EventType)], 0))));
});
clojure.browser.net.websocket_connection = (function clojure$browser$net$websocket_connection(var_args){
var args26782 = [];
var len__7910__auto___26785 = arguments.length;
var i__7911__auto___26786 = (0);
while(true){
if((i__7911__auto___26786 < len__7910__auto___26785)){
args26782.push((arguments[i__7911__auto___26786]));

var G__26787 = (i__7911__auto___26786 + (1));
i__7911__auto___26786 = G__26787;
continue;
} else {
}
break;
}

var G__26784 = args26782.length;
switch (G__26784) {
case 0:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26782.length)].join('')));

}
});

clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2(null,null);
});

clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2(auto_reconnect_QMARK_,null);
});

clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});

clojure.browser.net.websocket_connection.cljs$lang$maxFixedArity = 2;

