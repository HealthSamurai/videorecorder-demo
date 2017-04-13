// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = (function (){var G__24393 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24393) : cljs.core.atom.call(null,G__24393));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__24398){
var vec__24399 = p__24398;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__24403 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__24403)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__24403)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__24403)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__24403)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__24403)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24403)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__24404){
var map__24408 = p__24404;
var map__24408__$1 = ((((!((map__24408 == null)))?((((map__24408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24408):map__24408);
var request = map__24408__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24408__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24408__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24408__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6797__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__24410 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__24410,default_headers);

cljs_http.core.apply_response_type_BANG_(G__24410,response_type);

G__24410.setTimeoutInterval(timeout);

G__24410.setWithCredentials(send_credentials);

return G__24410;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__24411){
var map__24440 = p__24411;
var map__24440__$1 = ((((!((map__24440 == null)))?((((map__24440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24440):map__24440);
var request = map__24440__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24440__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24440__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24440__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24440__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24440__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24440__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6797__auto__ = request_method;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__24442 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__24442) : cljs_http.core.error_kw.call(null,G__24442));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_24468 = ((function (channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__24443_24469 = xhr;
G__24443_24469.setProgressEventsEnabled(true);

G__24443_24469.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_24468,cljs.core.cst$kw$upload));

G__24443_24469.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_24468,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__21564__auto___24470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___24470,channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___24470,channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_24454){
var state_val_24455 = (state_24454[(1)]);
if((state_val_24455 === (1))){
var state_24454__$1 = state_24454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24454__$1,(2),cancel);
} else {
if((state_val_24455 === (2))){
var inst_24445 = (state_24454[(2)]);
var inst_24446 = xhr.isComplete();
var inst_24447 = cljs.core.not(inst_24446);
var state_24454__$1 = (function (){var statearr_24456 = state_24454;
(statearr_24456[(7)] = inst_24445);

return statearr_24456;
})();
if(inst_24447){
var statearr_24457_24471 = state_24454__$1;
(statearr_24457_24471[(1)] = (3));

} else {
var statearr_24458_24472 = state_24454__$1;
(statearr_24458_24472[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24455 === (3))){
var inst_24449 = xhr.abort();
var state_24454__$1 = state_24454;
var statearr_24459_24473 = state_24454__$1;
(statearr_24459_24473[(2)] = inst_24449);

(statearr_24459_24473[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24455 === (4))){
var state_24454__$1 = state_24454;
var statearr_24460_24474 = state_24454__$1;
(statearr_24460_24474[(2)] = null);

(statearr_24460_24474[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24455 === (5))){
var inst_24452 = (state_24454[(2)]);
var state_24454__$1 = state_24454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24454__$1,inst_24452);
} else {
return null;
}
}
}
}
}
});})(c__21564__auto___24470,channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__21440__auto__,c__21564__auto___24470,channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__21441__auto__ = null;
var cljs_http$core$xhr_$_state_machine__21441__auto____0 = (function (){
var statearr_24464 = [null,null,null,null,null,null,null,null];
(statearr_24464[(0)] = cljs_http$core$xhr_$_state_machine__21441__auto__);

(statearr_24464[(1)] = (1));

return statearr_24464;
});
var cljs_http$core$xhr_$_state_machine__21441__auto____1 = (function (state_24454){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_24454);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e24465){if((e24465 instanceof Object)){
var ex__21444__auto__ = e24465;
var statearr_24466_24475 = state_24454;
(statearr_24466_24475[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24454);

return cljs.core.cst$kw$recur;
} else {
throw e24465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__24476 = state_24454;
state_24454 = G__24476;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__21441__auto__ = function(state_24454){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__21441__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__21441__auto____1.call(this,state_24454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__21441__auto____0;
cljs_http$core$xhr_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__21441__auto____1;
return cljs_http$core$xhr_$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___24470,channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__21566__auto__ = (function (){var statearr_24467 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_24467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24470);

return statearr_24467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___24470,channel,request_url,method,headers__$1,xhr,map__24440,map__24440__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__24477){
var map__24494 = p__24477;
var map__24494__$1 = ((((!((map__24494 == null)))?((((map__24494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24494):map__24494);
var request = map__24494__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24494__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_24510 = jsonp.send(null,((function (channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_24510], null));

if(cljs.core.truth_(cancel)){
var c__21564__auto___24511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___24511,req_24510,channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___24511,req_24510,channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_24500){
var state_val_24501 = (state_24500[(1)]);
if((state_val_24501 === (1))){
var state_24500__$1 = state_24500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24500__$1,(2),cancel);
} else {
if((state_val_24501 === (2))){
var inst_24497 = (state_24500[(2)]);
var inst_24498 = jsonp.cancel(req_24510);
var state_24500__$1 = (function (){var statearr_24502 = state_24500;
(statearr_24502[(7)] = inst_24497);

return statearr_24502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24500__$1,inst_24498);
} else {
return null;
}
}
});})(c__21564__auto___24511,req_24510,channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__21440__auto__,c__21564__auto___24511,req_24510,channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__21441__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__21441__auto____0 = (function (){
var statearr_24506 = [null,null,null,null,null,null,null,null];
(statearr_24506[(0)] = cljs_http$core$jsonp_$_state_machine__21441__auto__);

(statearr_24506[(1)] = (1));

return statearr_24506;
});
var cljs_http$core$jsonp_$_state_machine__21441__auto____1 = (function (state_24500){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_24500);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e24507){if((e24507 instanceof Object)){
var ex__21444__auto__ = e24507;
var statearr_24508_24512 = state_24500;
(statearr_24508_24512[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24500);

return cljs.core.cst$kw$recur;
} else {
throw e24507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__24513 = state_24500;
state_24500 = G__24513;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__21441__auto__ = function(state_24500){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__21441__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__21441__auto____1.call(this,state_24500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__21441__auto____0;
cljs_http$core$jsonp_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__21441__auto____1;
return cljs_http$core$jsonp_$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___24511,req_24510,channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__21566__auto__ = (function (){var statearr_24509 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_24509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___24511);

return statearr_24509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___24511,req_24510,channel,jsonp,map__24494,map__24494__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__24514){
var map__24517 = p__24514;
var map__24517__$1 = ((((!((map__24517 == null)))?((((map__24517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24517):map__24517);
var request = map__24517__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24517__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
