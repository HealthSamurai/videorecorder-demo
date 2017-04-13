// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('aidbox_ui.fxs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.browser.net');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('goog.net.EventType');
aidbox_ui.fxs.params_to_query_string = (function aidbox_ui$fxs$params_to_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__7585__auto__ = (function aidbox_ui$fxs$params_to_query_string_$_iter__26809(s__26810){
return (new cljs.core.LazySeq(null,(function (){
var s__26810__$1 = s__26810;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26810__$1);
if(temp__4657__auto__){
var s__26810__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26810__$2)){
var c__7583__auto__ = cljs.core.chunk_first(s__26810__$2);
var size__7584__auto__ = cljs.core.count(c__7583__auto__);
var b__26812 = cljs.core.chunk_buffer(size__7584__auto__);
if((function (){var i__26811 = (0);
while(true){
if((i__26811 < size__7584__auto__)){
var vec__26821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7583__auto__,i__26811);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26821,(1),null);
cljs.core.chunk_append(b__26812,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join(''));

var G__26827 = (i__26811 + (1));
i__26811 = G__26827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26812),aidbox_ui$fxs$params_to_query_string_$_iter__26809(cljs.core.chunk_rest(s__26810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26812),null);
}
} else {
var vec__26824 = cljs.core.first(s__26810__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26824,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join(''),aidbox_ui$fxs$params_to_query_string_$_iter__26809(cljs.core.rest(s__26810__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7585__auto__(params);
})());
});
aidbox_ui.fxs.get_response = (function aidbox_ui$fxs$get_response(xhr){
var headers = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(xhr.getResponseHeaders());
var body = xhr.getResponse();
var body__$1 = (((cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"Content-Type","").indexOf("application/json") >= (0)))?clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body))):body);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$body,body__$1,cljs.core.cst$kw$status,xhr.getStatus(),cljs.core.cst$kw$status_DASH_text,xhr.getStatusText(),cljs.core.cst$kw$headers,headers], null);
});
aidbox_ui.fxs.page_redirect = (function aidbox_ui$fxs$page_redirect(url){
return window.location.href = url;
});
var G__26828_26834 = cljs.core.cst$kw$aidbox_DASH_ui$fxs_SLASH_page_DASH_redirect;
var G__26829_26835 = ((function (G__26828_26834){
return (function (opts){
return aidbox_ui.fxs.page_redirect([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var params = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,temp__4657__auto__,G__26828_26834){
return (function (p__26830){
var vec__26831 = p__26830;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26831,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
});})(params,temp__4657__auto__,G__26828_26834))
,params)))].join('');
} else {
return null;
}
})())].join(''));
});})(G__26828_26834))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26828_26834,G__26829_26835) : re_frame.core.reg_fx.call(null,G__26828_26834,G__26829_26835));
var G__26836_26846 = cljs.core.cst$kw$http;
var G__26837_26847 = ((function (G__26836_26846){
return (function (p__26838){
var map__26839 = p__26838;
var map__26839__$1 = ((((!((map__26839 == null)))?((((map__26839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26839):map__26839);
var http = map__26839__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$url);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$host);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$headers);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$params);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$on_DASH_error);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$on_DASH_success);
var spinner_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26839__$1,cljs.core.cst$kw$spinner_DASH_id);
var xhr = clojure.browser.net.xhr_connection();
var url__$1 = ((cljs.core.empty_QMARK_(params))?url:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.fxs.params_to_query_string(params))].join(''));
console.log("%cHTTP","background-color: #317cd5; color: #fff; padding: 2px;",http);

if(cljs.core.truth_(spinner_id)){
var G__26841_26848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spinner_SLASH_show,spinner_id], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26841_26848) : re_frame.core.dispatch.call(null,G__26841_26848));
} else {
}

xhr.listen(goog.net.EventType.COMPLETE,((function (xhr,url__$1,map__26839,map__26839__$1,http,url,host,method,body,headers,params,on_error,on_success,spinner_id,G__26836_26846){
return (function (e){
if(cljs.core.truth_(spinner_id)){
var G__26842_26849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spinner_SLASH_hide,spinner_id], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26842_26849) : re_frame.core.dispatch.call(null,G__26842_26849));
} else {
}

var response = aidbox_ui.fxs.get_response(xhr);
var G__26843 = (cljs.core.truth_(xhr.isSuccess())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([response,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$success,true], null)], 0))):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([response,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$success,false,cljs.core.cst$kw$error,xhr.getLastError(),cljs.core.cst$kw$error_DASH_code,xhr.getLastErrorCode()], null)], 0))));
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26843) : re_frame.core.dispatch.call(null,G__26843));
});})(xhr,url__$1,map__26839,map__26839__$1,http,url,host,method,body,headers,params,on_error,on_success,spinner_id,G__26836_26846))
);

var G__26844 = ((function (xhr,url__$1,map__26839,map__26839__$1,http,url,host,method,body,headers,params,on_error,on_success,spinner_id,G__26836_26846){
return (function (){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5(xhr,url__$1,method,body,headers);
});})(xhr,url__$1,map__26839,map__26839__$1,http,url,host,method,body,headers,params,on_error,on_success,spinner_id,G__26836_26846))
;
var G__26845 = (2000);
return setTimeout(G__26844,G__26845);
});})(G__26836_26846))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26836_26846,G__26837_26847) : re_frame.core.reg_fx.call(null,G__26836_26846,G__26837_26847));
