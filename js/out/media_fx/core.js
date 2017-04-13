// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('media_fx.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('aidbox_ui.pages.page');
var G__26626_26629 = cljs.core.cst$kw$media_DASH_fx$core_SLASH_devices;
var G__26627_26630 = ((function (G__26626_26629){
return (function (opts){
navigator.mediaDevices.enumerateDevices().then(((function (G__26626_26629){
return (function (devices){
var G__26628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_fx$core_SLASH_devices_DASH_avaliable,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__26626_26629){
return (function (d){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$object,d,cljs.core.cst$kw$id,d.deviceId,cljs.core.cst$kw$group,d.groupId,cljs.core.cst$kw$kind,d.kind,cljs.core.cst$kw$label,d.label], null);
});})(G__26626_26629))
,devices)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26628) : re_frame.core.dispatch.call(null,G__26628));
});})(G__26626_26629))
);

return opts;
});})(G__26626_26629))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26626_26629,G__26627_26630) : re_frame.core.reg_fx.call(null,G__26626_26629,G__26627_26630));
var G__26631_26635 = cljs.core.cst$kw$media_DASH_fx$core_SLASH_getUserMedia;
var G__26632_26636 = ((function (G__26631_26635){
return (function (constr){
var c = cljs.core.clj__GT_js(constr);
return navigator.getUserMedia(c,((function (c,G__26631_26635){
return (function (stream){
var G__26633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_fx$core_SLASH_UserMedia,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$constraints,constr], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26633) : re_frame.core.dispatch.call(null,G__26633));
});})(c,G__26631_26635))
,((function (c,G__26631_26635){
return (function (err){
var G__26634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_fx$core_SLASH_UserMediaError,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,err], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26634) : re_frame.core.dispatch.call(null,G__26634));
});})(c,G__26631_26635))
);
});})(G__26631_26635))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26631_26635,G__26632_26636) : re_frame.core.reg_fx.call(null,G__26631_26635,G__26632_26636));
var G__26637_26641 = cljs.core.cst$kw$media_DASH_fx$core_SLASH_getUserMedia;
var G__26638_26642 = ((function (G__26637_26641){
return (function (constr){
var c = cljs.core.clj__GT_js(constr);
return navigator.getUserMedia(c,((function (c,G__26637_26641){
return (function (stream){
var G__26639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_fx$core_SLASH_UserMedia,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$constraints,constr], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26639) : re_frame.core.dispatch.call(null,G__26639));
});})(c,G__26637_26641))
,((function (c,G__26637_26641){
return (function (err){
var G__26640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_fx$core_SLASH_UserMediaError,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,err], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26640) : re_frame.core.dispatch.call(null,G__26640));
});})(c,G__26637_26641))
);
});})(G__26637_26641))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26637_26641,G__26638_26642) : re_frame.core.reg_fx.call(null,G__26637_26641,G__26638_26642));
media_fx.core.video = (function media_fx$core$video(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26654 = arguments.length;
var i__7911__auto___26655 = (0);
while(true){
if((i__7911__auto___26655 < len__7910__auto___26654)){
args__7917__auto__.push((arguments[i__7911__auto___26655]));

var G__26656 = (i__7911__auto___26655 + (1));
i__7911__auto___26655 = G__26656;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return media_fx.core.video.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

media_fx.core.video.cljs$core$IFn$_invoke$arity$variadic = (function (p__26644){
var vec__26645 = p__26644;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26645,(0),null);
var element_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("video"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join('');
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (element_id,vec__26645,props){
return (function (this$){
var argv = ((this$["props"])["argv"]);
var vec__26648 = argv;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(0),null);
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(1),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(2),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(3),null);
var root = document.getElementById(element_id);
return null;
});})(element_id,vec__26645,props))
,cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,((function (element_id,vec__26645,props){
return (function (this$,new_argv){
var element = document.getElementById(element_id);
var video_tag = (element.getElementsByTagName("video")[(0)]);
var vec__26651 = new_argv;
var seq__26652 = cljs.core.seq(vec__26651);
var first__26653 = cljs.core.first(seq__26652);
var seq__26652__$1 = cljs.core.next(seq__26652);
var _ = first__26653;
var first__26653__$1 = cljs.core.first(seq__26652__$1);
var seq__26652__$2 = cljs.core.next(seq__26652__$1);
var props__$1 = first__26653__$1;
var ___$1 = seq__26652__$2;
(video_tag["srcObject"] = cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(props__$1));

return (video_tag["onloadedmetadata"] = ((function (element,video_tag,vec__26651,seq__26652,first__26653,seq__26652__$1,_,first__26653__$1,seq__26652__$2,props__$1,___$1,element_id,vec__26645,props){
return (function (e){
return video_tag.play();
});})(element,video_tag,vec__26651,seq__26652,first__26653,seq__26652__$1,_,first__26653__$1,seq__26652__$2,props__$1,___$1,element_id,vec__26645,props))
);
});})(element_id,vec__26645,props))
,cljs.core.cst$kw$component_DASH_will_DASH_mount,((function (element_id,vec__26645,props){
return (function() { 
var G__26657__delegate = function (args){
return null;
};
var G__26657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26658__i = 0, G__26658__a = new Array(arguments.length -  0);
while (G__26658__i < G__26658__a.length) {G__26658__a[G__26658__i] = arguments[G__26658__i + 0]; ++G__26658__i;}
  args = new cljs.core.IndexedSeq(G__26658__a,0);
} 
return G__26657__delegate.call(this,args);};
G__26657.cljs$lang$maxFixedArity = 0;
G__26657.cljs$lang$applyTo = (function (arglist__26659){
var args = cljs.core.seq(arglist__26659);
return G__26657__delegate(args);
});
G__26657.cljs$core$IFn$_invoke$arity$variadic = G__26657__delegate;
return G__26657;
})()
;})(element_id,vec__26645,props))
,cljs.core.cst$kw$reagent_DASH_render,((function (element_id,vec__26645,props){
return (function (props__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$media_DASH_video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,element_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,".media-video video {border: 1px solid #ddd;}"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props__$1,cljs.core.cst$kw$stream)], null)], null);
});})(element_id,vec__26645,props))
], null));
});

media_fx.core.video.cljs$lang$maxFixedArity = (0);

media_fx.core.video.cljs$lang$applyTo = (function (seq26643){
return media_fx.core.video.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26643));
});

