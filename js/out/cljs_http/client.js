// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6785__auto__ = v;
if(cljs.core.truth_(and__6785__auto__)){
return (v > (0));
} else {
return and__6785__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26149_SHARP_,p2__26148_SHARP_){
var vec__26153 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__26148_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26153,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26149_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26156_SHARP_){
return cljs_http.client.encode_val(k,p1__26156_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__26157){
var vec__26161 = p__26157;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26161,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__26164_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26164_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6785__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__6785__auto__){
var and__6785__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__6785__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__26166 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26166) : client.call(null,G__26166));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26167_SHARP_){
return cljs_http.client.decode_body(p1__26167_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26175 = arguments.length;
var i__7911__auto___26176 = (0);
while(true){
if((i__7911__auto___26176 < len__7910__auto___26175)){
args__7917__auto__.push((arguments[i__7911__auto___26176]));

var G__26177 = (i__7911__auto___26176 + (1));
i__7911__auto___26176 = G__26177;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26170){
var vec__26171 = p__26170;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26171,(0),null);
return ((function (vec__26171,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6797__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__26174 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26174) : client.call(null,G__26174));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__26171,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq26168){
var G__26169 = cljs.core.first(seq26168);
var seq26168__$1 = cljs.core.next(seq26168);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__26169,seq26168__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26185 = arguments.length;
var i__7911__auto___26186 = (0);
while(true){
if((i__7911__auto___26186 < len__7910__auto___26185)){
args__7917__auto__.push((arguments[i__7911__auto___26186]));

var G__26187 = (i__7911__auto___26186 + (1));
i__7911__auto___26186 = G__26187;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26180){
var vec__26181 = p__26180;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26181,(0),null);
return ((function (vec__26181,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6797__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__26184 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26184) : client.call(null,G__26184));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__26181,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq26178){
var G__26179 = cljs.core.first(seq26178);
var seq26178__$1 = cljs.core.next(seq26178);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__26179,seq26178__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26195 = arguments.length;
var i__7911__auto___26196 = (0);
while(true){
if((i__7911__auto___26196 < len__7910__auto___26195)){
args__7917__auto__.push((arguments[i__7911__auto___26196]));

var G__26197 = (i__7911__auto___26196 + (1));
i__7911__auto___26196 = G__26197;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26190){
var vec__26191 = p__26190;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26191,(0),null);
return ((function (vec__26191,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6797__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__26194 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26194) : client.call(null,G__26194));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__26191,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq26188){
var G__26189 = cljs.core.first(seq26188);
var seq26188__$1 = cljs.core.next(seq26188);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__26189,seq26188__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__26201 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26201__$1 = ((((!((map__26201 == null)))?((((map__26201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26201):map__26201);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26201__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26201__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__26203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26203) : client.call(null,G__26203));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__26208 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26208__$1 = ((((!((map__26208 == null)))?((((map__26208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26208):map__26208);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26208__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26208__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__26208,map__26208__$1,decoding,decoding_opts){
return (function (p1__26204_SHARP_){
return cljs_http.util.transit_decode(p1__26204_SHARP_,decoding,decoding_opts);
});})(map__26208,map__26208__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__26208,map__26208__$1,decoding,decoding_opts,transit_decode){
return (function (p1__26205_SHARP_){
return cljs_http.client.decode_body(p1__26205_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__26208,map__26208__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__26211 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26211) : client.call(null,G__26211));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26212_SHARP_){
return cljs_http.client.decode_body(p1__26212_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__26217){
var map__26218 = p__26217;
var map__26218__$1 = ((((!((map__26218 == null)))?((((map__26218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26218):map__26218);
var req = map__26218__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26218__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__26220 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26220) : client.call(null,G__26220));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__26225){
var map__26226 = p__26225;
var map__26226__$1 = ((((!((map__26226 == null)))?((((map__26226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26226):map__26226);
var request = map__26226__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26226__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26226__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26226__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6785__auto__ = form_params;
if(cljs.core.truth_(and__6785__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6785__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__26228 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26228) : client.call(null,G__26228));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__26239_26249 = cljs.core.seq(params);
var chunk__26240_26250 = null;
var count__26241_26251 = (0);
var i__26242_26252 = (0);
while(true){
if((i__26242_26252 < count__26241_26251)){
var vec__26243_26253 = chunk__26240_26250.cljs$core$IIndexed$_nth$arity$2(null,i__26242_26252);
var k_26254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26243_26253,(0),null);
var v_26255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26243_26253,(1),null);
if(cljs.core.coll_QMARK_(v_26255)){
form_data.append(cljs.core.name(k_26254),cljs.core.first(v_26255),cljs.core.second(v_26255));
} else {
form_data.append(cljs.core.name(k_26254),v_26255);
}

var G__26256 = seq__26239_26249;
var G__26257 = chunk__26240_26250;
var G__26258 = count__26241_26251;
var G__26259 = (i__26242_26252 + (1));
seq__26239_26249 = G__26256;
chunk__26240_26250 = G__26257;
count__26241_26251 = G__26258;
i__26242_26252 = G__26259;
continue;
} else {
var temp__4657__auto___26260 = cljs.core.seq(seq__26239_26249);
if(temp__4657__auto___26260){
var seq__26239_26261__$1 = temp__4657__auto___26260;
if(cljs.core.chunked_seq_QMARK_(seq__26239_26261__$1)){
var c__7616__auto___26262 = cljs.core.chunk_first(seq__26239_26261__$1);
var G__26263 = cljs.core.chunk_rest(seq__26239_26261__$1);
var G__26264 = c__7616__auto___26262;
var G__26265 = cljs.core.count(c__7616__auto___26262);
var G__26266 = (0);
seq__26239_26249 = G__26263;
chunk__26240_26250 = G__26264;
count__26241_26251 = G__26265;
i__26242_26252 = G__26266;
continue;
} else {
var vec__26246_26267 = cljs.core.first(seq__26239_26261__$1);
var k_26268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26246_26267,(0),null);
var v_26269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26246_26267,(1),null);
if(cljs.core.coll_QMARK_(v_26269)){
form_data.append(cljs.core.name(k_26268),cljs.core.first(v_26269),cljs.core.second(v_26269));
} else {
form_data.append(cljs.core.name(k_26268),v_26269);
}

var G__26270 = cljs.core.next(seq__26239_26261__$1);
var G__26271 = null;
var G__26272 = (0);
var G__26273 = (0);
seq__26239_26249 = G__26270;
chunk__26240_26250 = G__26271;
count__26241_26251 = G__26272;
i__26242_26252 = G__26273;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__26278){
var map__26279 = p__26278;
var map__26279__$1 = ((((!((map__26279 == null)))?((((map__26279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26279):map__26279);
var request = map__26279__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26279__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26279__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6785__auto__ = multipart_params;
if(cljs.core.truth_(and__6785__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6785__auto__;
}
})())){
var G__26281 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26281) : client.call(null,G__26281));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__26283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26283) : client.call(null,G__26283));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__26284_SHARP_){
var G__26286 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26284_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26286) : client.call(null,G__26286));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__26292){
var map__26293 = p__26292;
var map__26293__$1 = ((((!((map__26293 == null)))?((((map__26293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26293):map__26293);
var req = map__26293__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26293__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__26295 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__26293,map__26293__$1,req,query_params){
return (function (p1__26287_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__26287_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__26293,map__26293__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26295) : client.call(null,G__26295));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26303 = arguments.length;
var i__7911__auto___26304 = (0);
while(true){
if((i__7911__auto___26304 < len__7910__auto___26303)){
args__7917__auto__.push((arguments[i__7911__auto___26304]));

var G__26305 = (i__7911__auto___26304 + (1));
i__7911__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26298){
var vec__26299 = p__26298;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26299,(0),null);
return ((function (vec__26299,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6797__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__26302 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26302) : client.call(null,G__26302));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__26299,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq26296){
var G__26297 = cljs.core.first(seq26296);
var seq26296__$1 = cljs.core.next(seq26296);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__26297,seq26296__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__26307 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26307) : client.call(null,G__26307));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26315 = arguments.length;
var i__7911__auto___26316 = (0);
while(true){
if((i__7911__auto___26316 < len__7910__auto___26315)){
args__7917__auto__.push((arguments[i__7911__auto___26316]));

var G__26317 = (i__7911__auto___26316 + (1));
i__7911__auto___26316 = G__26317;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26310){
var vec__26311 = p__26310;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26311,(0),null);
var G__26314 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26314) : cljs_http.client.request.call(null,G__26314));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq26308){
var G__26309 = cljs.core.first(seq26308);
var seq26308__$1 = cljs.core.next(seq26308);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__26309,seq26308__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26325 = arguments.length;
var i__7911__auto___26326 = (0);
while(true){
if((i__7911__auto___26326 < len__7910__auto___26325)){
args__7917__auto__.push((arguments[i__7911__auto___26326]));

var G__26327 = (i__7911__auto___26326 + (1));
i__7911__auto___26326 = G__26327;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26320){
var vec__26321 = p__26320;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26321,(0),null);
var G__26324 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26324) : cljs_http.client.request.call(null,G__26324));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq26318){
var G__26319 = cljs.core.first(seq26318);
var seq26318__$1 = cljs.core.next(seq26318);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__26319,seq26318__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26335 = arguments.length;
var i__7911__auto___26336 = (0);
while(true){
if((i__7911__auto___26336 < len__7910__auto___26335)){
args__7917__auto__.push((arguments[i__7911__auto___26336]));

var G__26337 = (i__7911__auto___26336 + (1));
i__7911__auto___26336 = G__26337;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26330){
var vec__26331 = p__26330;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26331,(0),null);
var G__26334 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26334) : cljs_http.client.request.call(null,G__26334));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq26328){
var G__26329 = cljs.core.first(seq26328);
var seq26328__$1 = cljs.core.next(seq26328);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__26329,seq26328__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26345 = arguments.length;
var i__7911__auto___26346 = (0);
while(true){
if((i__7911__auto___26346 < len__7910__auto___26345)){
args__7917__auto__.push((arguments[i__7911__auto___26346]));

var G__26347 = (i__7911__auto___26346 + (1));
i__7911__auto___26346 = G__26347;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26340){
var vec__26341 = p__26340;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26341,(0),null);
var G__26344 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26344) : cljs_http.client.request.call(null,G__26344));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq26338){
var G__26339 = cljs.core.first(seq26338);
var seq26338__$1 = cljs.core.next(seq26338);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__26339,seq26338__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26355 = arguments.length;
var i__7911__auto___26356 = (0);
while(true){
if((i__7911__auto___26356 < len__7910__auto___26355)){
args__7917__auto__.push((arguments[i__7911__auto___26356]));

var G__26357 = (i__7911__auto___26356 + (1));
i__7911__auto___26356 = G__26357;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26350){
var vec__26351 = p__26350;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26351,(0),null);
var G__26354 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26354) : cljs_http.client.request.call(null,G__26354));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq26348){
var G__26349 = cljs.core.first(seq26348);
var seq26348__$1 = cljs.core.next(seq26348);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__26349,seq26348__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26365 = arguments.length;
var i__7911__auto___26366 = (0);
while(true){
if((i__7911__auto___26366 < len__7910__auto___26365)){
args__7917__auto__.push((arguments[i__7911__auto___26366]));

var G__26367 = (i__7911__auto___26366 + (1));
i__7911__auto___26366 = G__26367;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26360){
var vec__26361 = p__26360;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26361,(0),null);
var G__26364 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26364) : cljs_http.client.request.call(null,G__26364));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq26358){
var G__26359 = cljs.core.first(seq26358);
var seq26358__$1 = cljs.core.next(seq26358);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__26359,seq26358__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26375 = arguments.length;
var i__7911__auto___26376 = (0);
while(true){
if((i__7911__auto___26376 < len__7910__auto___26375)){
args__7917__auto__.push((arguments[i__7911__auto___26376]));

var G__26377 = (i__7911__auto___26376 + (1));
i__7911__auto___26376 = G__26377;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26370){
var vec__26371 = p__26370;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26371,(0),null);
var G__26374 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26374) : cljs_http.client.request.call(null,G__26374));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq26368){
var G__26369 = cljs.core.first(seq26368);
var seq26368__$1 = cljs.core.next(seq26368);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__26369,seq26368__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26385 = arguments.length;
var i__7911__auto___26386 = (0);
while(true){
if((i__7911__auto___26386 < len__7910__auto___26385)){
args__7917__auto__.push((arguments[i__7911__auto___26386]));

var G__26387 = (i__7911__auto___26386 + (1));
i__7911__auto___26386 = G__26387;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26380){
var vec__26381 = p__26380;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26381,(0),null);
var G__26384 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26384) : cljs_http.client.request.call(null,G__26384));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq26378){
var G__26379 = cljs.core.first(seq26378);
var seq26378__$1 = cljs.core.next(seq26378);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__26379,seq26378__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26395 = arguments.length;
var i__7911__auto___26396 = (0);
while(true){
if((i__7911__auto___26396 < len__7910__auto___26395)){
args__7917__auto__.push((arguments[i__7911__auto___26396]));

var G__26397 = (i__7911__auto___26396 + (1));
i__7911__auto___26396 = G__26397;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26390){
var vec__26391 = p__26390;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26391,(0),null);
var G__26394 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__26394) : cljs_http.client.request.call(null,G__26394));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq26388){
var G__26389 = cljs.core.first(seq26388);
var seq26388__$1 = cljs.core.next(seq26388);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__26389,seq26388__$1);
});

