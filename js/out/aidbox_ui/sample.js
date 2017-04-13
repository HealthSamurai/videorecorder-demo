// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('aidbox_ui.sample');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('aidbox_ui.pages.page');
goog.require('aidbox_ui.fxs');
goog.require('media_fx.core');
goog.require('re_frame.core');
goog.require('aidbox_ui.rf');
aidbox_ui.rf.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$aidbox_DASH_ui$sample_SLASH_initialize,cljs.core.PersistentVector.EMPTY,(function (cofx,p__26852){
var vec__26853 = p__26852;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853,(0),null);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_fx$core_SLASH_devices,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter,"video"], null),cljs.core.cst$kw$media_DASH_fx$core_SLASH_getUserMedia,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$audio,false,cljs.core.cst$kw$video,true], null)], null);
}));
aidbox_ui.rf.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$media_DASH_fx$core_SLASH_devices_DASH_avaliable,(function (db,p__26856){
var vec__26857 = p__26856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26857,(0),null);
var devices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26857,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$media_DASH_devices,((function (vec__26857,_,devices){
return (function (x){
if(cljs.core.truth_(x)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1(devices);
} else {
return devices;
}
});})(vec__26857,_,devices))
);
}));
aidbox_ui.rf.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$media_DASH_fx$core_SLASH_UserMedia,(function (db,p__26860){
var vec__26861 = p__26860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26861,(0),null);
var media = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26861,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_media,media);
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$aidbox_DASH_ui$sample_SLASH_current_DASH_media,(function (db,_){
return reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$current_DASH_media.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$aidbox_DASH_ui$sample_SLASH_devices,(function (db,_){
return reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$media_DASH_devices.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
}));
}));
aidbox_ui.sample.config = (function aidbox_ui$sample$config(){
var G__26873_26882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aidbox_DASH_ui$sample_SLASH_initialize], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26873_26882) : re_frame.core.dispatch.call(null,G__26873_26882));

var media = (function (){var G__26874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aidbox_DASH_ui$sample_SLASH_current_DASH_media], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26874) : re_frame.core.subscribe.call(null,G__26874));
})();
var devices = (function (){var G__26875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aidbox_DASH_ui$sample_SLASH_devices], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26875) : re_frame.core.subscribe.call(null,G__26875));
})();
return ((function (media,devices){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$video_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Devices"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$devices,(function (){var iter__7585__auto__ = ((function (media,devices){
return (function aidbox_ui$sample$config_$_iter__26876(s__26877){
return (new cljs.core.LazySeq(null,((function (media,devices){
return (function (){
var s__26877__$1 = s__26877;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26877__$1);
if(temp__4657__auto__){
var s__26877__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26877__$2)){
var c__7583__auto__ = cljs.core.chunk_first(s__26877__$2);
var size__7584__auto__ = cljs.core.count(c__7583__auto__);
var b__26879 = cljs.core.chunk_buffer(size__7584__auto__);
if((function (){var i__26878 = (0);
while(true){
if((i__26878 < size__7584__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7583__auto__,i__26878);
cljs.core.chunk_append(b__26879,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$device,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(d))].join('')], null),cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(d),"  ",cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(d)], null));

var G__26883 = (i__26878 + (1));
i__26878 = G__26883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26879),aidbox_ui$sample$config_$_iter__26876(cljs.core.chunk_rest(s__26877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26879),null);
}
} else {
var d = cljs.core.first(s__26877__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$device,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(d))].join('')], null),cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(d),"  ",cljs.core.cst$kw$kind.cljs$core$IFn$_invoke$arity$1(d)], null),aidbox_ui$sample$config_$_iter__26876(cljs.core.rest(s__26877__$2)));
}
} else {
return null;
}
break;
}
});})(media,devices))
,null,null));
});})(media,devices))
;
return iter__7585__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devices) : cljs.core.deref.call(null,devices)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [media_fx.core.video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(media) : cljs.core.deref.call(null,media)))], null)], null)], null);
});
;})(media,devices))
});
aidbox_ui.pages.page.page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sample,(function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.sample.config], null);
}));
