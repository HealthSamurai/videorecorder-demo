// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flush_DASH_dom,(function (f){
var G__19328 = (function (){
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : re_frame.interop.next_tick.call(null,f));
});
return (re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__19328) : re_frame.interop.after_render.call(null,G__19328));
}),cljs.core.cst$kw$yield,re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

re_frame.router.push = (function re_frame$router$push(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router.push[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7466__auto__.call(null,this$,event));
} else {
var m__7466__auto____$1 = (re_frame.router.push["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7466__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
}
});

re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callack){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__7466__auto__.call(null,this$,id,callack));
} else {
var m__7466__auto____$1 = (re_frame.router.add_post_event_callback["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__7466__auto____$1.call(null,this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
}
});

re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__7466__auto__.call(null,this$,f));
} else {
var m__7466__auto____$1 = (re_frame.router.remove_post_event_callback["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__7466__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
}
});

re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__7466__auto__.call(null,this$,trigger,arg));
} else {
var m__7466__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__7466__auto____$1.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
}
});

re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._add_event[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7466__auto__.call(null,this$,event));
} else {
var m__7466__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7466__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
}
});

re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
}
});

re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._run_queue[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
}
});

re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._exception[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__7466__auto__.call(null,this$,ex));
} else {
var m__7466__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__7466__auto____$1.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
}
});

re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._pause[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__7466__auto__.call(null,this$,later_fn));
} else {
var m__7466__auto____$1 = (re_frame.router._pause["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__7466__auto____$1.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
}
});

re_frame.router._resume = (function re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._resume[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto__.call(null,this$));
} else {
var m__7466__auto____$1 = (re_frame.router._resume["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
}
});

re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__7465__auto__ = (((this$ == null))?null:this$);
var m__7466__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__7465__auto__)]);
if(!((m__7466__auto__ == null))){
return (m__7466__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7466__auto__.call(null,this$,event));
} else {
var m__7466__auto____$1 = (re_frame.router._call_post_event_callbacks["_"]);
if(!((m__7466__auto____$1 == null))){
return (m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7466__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7466__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
})
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$finish_DASH_run,null);
} else {
var temp__4655__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__4655__auto__)){
var later_fn = temp__4655__auto__;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$pause,later_fn);
} else {
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__19359 = (n - (1));
n = G__19359;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id);
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$add_DASH_event,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__19329 = ((function (this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$run_DASH_queue,null);
});})(this$__$1))
;
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__19329) : re_frame.interop.next_tick.call(null,G__19329));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19330 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$re_DASH_frame$router_SLASH_fsm_DASH_trigger], null));

try{try{var vec__19345 = (function (){var G__19348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__19348)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__19348)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19348,_STAR_current_trace_STAR_19330,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
});})(G__19348,_STAR_current_trace_STAR_19330,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: router state transition not found. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19360 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19360;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19235__auto___19361 = re_frame.interop.now();
var duration__19236__auto___19362 = (end__19235__auto___19361 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19331_19363 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__19332_19364 = null;
var count__19333_19365 = (0);
var i__19334_19366 = (0);
while(true){
if((i__19334_19366 < count__19333_19365)){
var vec__19335_19367 = chunk__19332_19364.cljs$core$IIndexed$_nth$arity$2(null,i__19334_19366);
var k__19237__auto___19368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19335_19367,(0),null);
var cb__19238__auto___19369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19335_19367,(1),null);
try{var G__19339_19370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19362,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19369.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19369.cljs$core$IFn$_invoke$arity$1(G__19339_19370) : cb__19238__auto___19369.call(null,G__19339_19370));
}catch (e19338){if((e19338 instanceof java.lang.Exception)){
var e__19239__auto___19371 = e19338;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19368,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19371], 0));
} else {
throw e19338;

}
}
var G__19372 = seq__19331_19363;
var G__19373 = chunk__19332_19364;
var G__19374 = count__19333_19365;
var G__19375 = (i__19334_19366 + (1));
seq__19331_19363 = G__19372;
chunk__19332_19364 = G__19373;
count__19333_19365 = G__19374;
i__19334_19366 = G__19375;
continue;
} else {
var temp__4657__auto___19376 = cljs.core.seq(seq__19331_19363);
if(temp__4657__auto___19376){
var seq__19331_19377__$1 = temp__4657__auto___19376;
if(cljs.core.chunked_seq_QMARK_(seq__19331_19377__$1)){
var c__7616__auto___19378 = cljs.core.chunk_first(seq__19331_19377__$1);
var G__19379 = cljs.core.chunk_rest(seq__19331_19377__$1);
var G__19380 = c__7616__auto___19378;
var G__19381 = cljs.core.count(c__7616__auto___19378);
var G__19382 = (0);
seq__19331_19363 = G__19379;
chunk__19332_19364 = G__19380;
count__19333_19365 = G__19381;
i__19334_19366 = G__19382;
continue;
} else {
var vec__19340_19383 = cljs.core.first(seq__19331_19377__$1);
var k__19237__auto___19384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19340_19383,(0),null);
var cb__19238__auto___19385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19340_19383,(1),null);
try{var G__19344_19386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19236__auto___19362,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19238__auto___19385.cljs$core$IFn$_invoke$arity$1 ? cb__19238__auto___19385.cljs$core$IFn$_invoke$arity$1(G__19344_19386) : cb__19238__auto___19385.call(null,G__19344_19386));
}catch (e19343){if((e19343 instanceof java.lang.Exception)){
var e__19239__auto___19387 = e19343;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__19237__auto___19384,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19239__auto___19387], 0));
} else {
throw e19343;

}
}
var G__19388 = cljs.core.next(seq__19331_19377__$1);
var G__19389 = null;
var G__19390 = (0);
var G__19391 = (0);
seq__19331_19363 = G__19388;
chunk__19332_19364 = G__19389;
count__19333_19365 = G__19390;
i__19334_19366 = G__19391;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19330;
}} else {
var vec__19349 = (function (){var G__19352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19352,this$__$1){
return (function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19352,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19352,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});})(G__19352,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19352,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
});})(G__19352,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
});})(G__19352,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__19352)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19352,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19352,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__19352)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19352,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
});})(G__19352,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: router state transition not found. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19349,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19349,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19252__auto___19392 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19252__auto___19392;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__19353 = ((function (this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$resume,null);
});})(this$__$1))
;
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__19353) : later_fn.call(null,G__19353));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{re_frame.events.handle(event_v);

self__.queue = cljs.core.pop(self__.queue);

return this$__$1.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e19354){var ex = e19354;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$exception,ex);
}});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__19355 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__19356 = null;
var count__19357 = (0);
var i__19358 = (0);
while(true){
if((i__19358 < count__19357)){
var callback = chunk__19356.cljs$core$IIndexed$_nth$arity$2(null,i__19358);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));

var G__19393 = seq__19355;
var G__19394 = chunk__19356;
var G__19395 = count__19357;
var G__19396 = (i__19358 + (1));
seq__19355 = G__19393;
chunk__19356 = G__19394;
count__19357 = G__19395;
i__19358 = G__19396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19355);
if(temp__4657__auto__){
var seq__19355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19355__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__19355__$1);
var G__19397 = cljs.core.chunk_rest(seq__19355__$1);
var G__19398 = c__7616__auto__;
var G__19399 = cljs.core.count(c__7616__auto__);
var G__19400 = (0);
seq__19355 = G__19397;
chunk__19356 = G__19398;
count__19357 = G__19399;
i__19358 = G__19400;
continue;
} else {
var callback = cljs.core.first(seq__19355__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));

var G__19401 = cljs.core.next(seq__19355__$1);
var G__19402 = null;
var G__19403 = (0);
var G__19404 = (0);
seq__19355 = G__19401;
chunk__19356 = G__19402;
count__19357 = G__19403;
i__19358 = G__19404;
continue;
}
} else {
return null;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = re_frame.interop.empty_queue;

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fsm_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$queue,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$post_DASH_event_DASH_callback_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__7408__auto__,writer__7409__auto__,opt__7410__auto__){
return cljs.core._write(writer__7409__auto__,"re-frame.router/EventQueue");
});

re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs.core.cst$kw$idle,re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Queue the given event for processing by the registered event handler.
 * 
 *   Just to be clear: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:delete-item 42])
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.push(re_frame.router.event_queue,event);
}

return null;
});
/**
 * Sychronously (immediately!) process the given event using the registered handler.
 * 
 *   Generally, you shouldn't use this - you should use `dispatch` instead.  It
 *   is an error to use `dispatch-sync` within an event handler.
 * 
 *   Usage:
 *   (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle(event_v);

re_frame.router._call_post_event_callbacks(re_frame.router.event_queue,event_v);

return null;
});
