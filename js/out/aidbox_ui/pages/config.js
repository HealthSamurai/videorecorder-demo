// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('aidbox_ui.pages.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('aidbox_ui.pages.page');
goog.require('cljs_http.client');
goog.require('clojure.string');
if(typeof aidbox_ui.pages.config.state !== 'undefined'){
} else {
aidbox_ui.pages.config.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$time,(0),cljs.core.cst$kw$devices,cljs.core.PersistentVector.EMPTY], null));
}
if(typeof aidbox_ui.pages.config.recorder !== 'undefined'){
} else {
aidbox_ui.pages.config.recorder = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof aidbox_ui.pages.config.astream !== 'undefined'){
} else {
aidbox_ui.pages.config.astream = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof aidbox_ui.pages.config.videos !== 'undefined'){
} else {
aidbox_ui.pages.config.videos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof aidbox_ui.pages.config.errors !== 'undefined'){
} else {
aidbox_ui.pages.config.errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
aidbox_ui.pages.config.base_url = "https://videorecorder.health-samurai.io";
aidbox_ui.pages.config.resolutions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$360p,cljs.core.cst$kw$width,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(480)], null),cljs.core.cst$kw$height,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(360)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$480p,cljs.core.cst$kw$width,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(640)], null),cljs.core.cst$kw$height,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(480)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$720p,cljs.core.cst$kw$wigth,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(1280)], null),cljs.core.cst$kw$height,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(720)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$1080p,cljs.core.cst$kw$width,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(1920)], null),cljs.core.cst$kw$height,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(1080)], null)], null)], null);
aidbox_ui.pages.config.frame_rates = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"60",cljs.core.cst$kw$frameRate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(60)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"30",cljs.core.cst$kw$frameRate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(30)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"24",cljs.core.cst$kw$frameRate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(24)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"15",cljs.core.cst$kw$frameRate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(15)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"5",cljs.core.cst$kw$frameRate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,(5)], null)], null)], null);
aidbox_ui.pages.config.bitrates = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"800000000",cljs.core.cst$kw$text,"100 MB bps"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"80000000",cljs.core.cst$kw$text,"10 MB bps"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"8000000",cljs.core.cst$kw$text,"1 MB bps",cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"800000",cljs.core.cst$kw$text,"100 KB bps"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"8000",cljs.core.cst$kw$text,"1 KB bps"], null)], null);
var G__26912_26914 = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,cljs.core.cst$kw$phase.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.state) : cljs.core.deref.call(null,aidbox_ui.pages.config.state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aidbox_ui.pages.config.state,cljs.core.update,cljs.core.cst$kw$time,cljs.core.inc);
} else {
return null;
}
});
var G__26913_26915 = (1000);
setInterval(G__26912_26914,G__26913_26915);
aidbox_ui.pages.config.load_devices = (function aidbox_ui$pages$config$load_devices(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aidbox_ui.pages.config.state,cljs.core.assoc,cljs.core.cst$kw$devices,cljs.core.PersistentVector.EMPTY);

return navigator.mediaDevices.enumerateDevices().then((function (device){
var video_devices = device.filter((function (p1__26916_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("videoinput",p1__26916_SHARP_.kind);
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aidbox_ui.pages.config.state,cljs.core.update,cljs.core.cst$kw$devices,cljs.core.concat,cljs.core.array_seq([video_devices], 0));
}));
});
aidbox_ui.pages.config.build_rtc_config = (function aidbox_ui$pages$config$build_rtc_config(cfg){
var conf = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mimeType,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("video/webm;codecs="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6797__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$codec.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return "h264";
}
})())].join('')], null);
return cljs.core.clj__GT_js((cljs.core.truth_(cljs.core.cst$kw$bit_DASH_rate.cljs$core$IFn$_invoke$arity$1(cfg))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conf,cljs.core.cst$kw$videoBitsPerSecond,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bit_DASH_rate.cljs$core$IFn$_invoke$arity$1(cfg))):conf));
});
aidbox_ui.pages.config.do_start_recording = (function aidbox_ui$pages$config$do_start_recording(stream){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(aidbox_ui.pages.config.astream,stream) : cljs.core.reset_BANG_.call(null,aidbox_ui.pages.config.astream,stream));

var video = document.getElementById("video");
var cfg = aidbox_ui.pages.config.build_rtc_config(cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.state) : cljs.core.deref.call(null,aidbox_ui.pages.config.state))));
var video_track = cljs.core.first(stream.getVideoTracks());
(video["srcObject"] = stream);

video.play();

var G__26919_26921 = aidbox_ui.pages.config.recorder;
var G__26920_26922 = (new RecordRTC(stream,cfg));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26919_26921,G__26920_26922) : cljs.core.reset_BANG_.call(null,G__26919_26921,G__26920_26922));

(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.recorder) : cljs.core.deref.call(null,aidbox_ui.pages.config.recorder)).startRecording();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(aidbox_ui.pages.config.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$phase,cljs.core.cst$kw$in_DASH_progress,cljs.core.cst$kw$time,(0)], null));
});
aidbox_ui.pages.config.device_constraints = (function aidbox_ui$pages$config$device_constraints(cfg){
var G__26924 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(cljs.core.cst$kw$resolution.cljs$core$IFn$_invoke$arity$1(cfg))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([G__26924,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$resolution.cljs$core$IFn$_invoke$arity$1(cfg),cljs.core.cst$kw$id,cljs.core.array_seq([cljs.core.cst$kw$text], 0))], 0));
} else {
return G__26924;
}
});
aidbox_ui.pages.config.start_recording = (function aidbox_ui$pages$config$start_recording(){
var cfg = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.state) : cljs.core.deref.call(null,aidbox_ui.pages.config.state)));
var d = cljs.core.cst$kw$device.cljs$core$IFn$_invoke$arity$1(cfg);
var constr = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$audio,false,cljs.core.cst$kw$video,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deviceId,(function (){var temp__4655__auto__ = (function (){var and__6785__auto__ = d;
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(d);
} else {
return and__6785__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var id = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exact,id], null);
} else {
return null;
}
})()], null),aidbox_ui.pages.config.device_constraints(cfg)], 0))], null);
console.log("Media constr",cljs.core.clj__GT_js(constr));

return navigator.mediaDevices.getUserMedia(cljs.core.clj__GT_js(constr)).then(aidbox_ui.pages.config.do_start_recording).catch(((function (cfg,d,constr){
return (function (err){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(aidbox_ui.pages.config.errors,((function (cfg,d,constr){
return (function (st,err__$1){
var msg = (function (){var or__6797__auto__ = err__$1.constraint;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return err__$1.constraintName;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(st,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Device does not support selected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''));
});})(cfg,d,constr))
,err);

return console.log(err);
});})(cfg,d,constr))
);
});
aidbox_ui.pages.config.stop_recording = (function aidbox_ui$pages$config$stop_recording(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aidbox_ui.pages.config.state,cljs.core.assoc,cljs.core.cst$kw$phase,cljs.core.cst$kw$idle);

var seq__26929_26933 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.astream) : cljs.core.deref.call(null,aidbox_ui.pages.config.astream)).getTracks());
var chunk__26930_26934 = null;
var count__26931_26935 = (0);
var i__26932_26936 = (0);
while(true){
if((i__26932_26936 < count__26931_26935)){
var track_26937 = chunk__26930_26934.cljs$core$IIndexed$_nth$arity$2(null,i__26932_26936);
track_26937.stop();

var G__26938 = seq__26929_26933;
var G__26939 = chunk__26930_26934;
var G__26940 = count__26931_26935;
var G__26941 = (i__26932_26936 + (1));
seq__26929_26933 = G__26938;
chunk__26930_26934 = G__26939;
count__26931_26935 = G__26940;
i__26932_26936 = G__26941;
continue;
} else {
var temp__4657__auto___26942 = cljs.core.seq(seq__26929_26933);
if(temp__4657__auto___26942){
var seq__26929_26943__$1 = temp__4657__auto___26942;
if(cljs.core.chunked_seq_QMARK_(seq__26929_26943__$1)){
var c__7616__auto___26944 = cljs.core.chunk_first(seq__26929_26943__$1);
var G__26945 = cljs.core.chunk_rest(seq__26929_26943__$1);
var G__26946 = c__7616__auto___26944;
var G__26947 = cljs.core.count(c__7616__auto___26944);
var G__26948 = (0);
seq__26929_26933 = G__26945;
chunk__26930_26934 = G__26946;
count__26931_26935 = G__26947;
i__26932_26936 = G__26948;
continue;
} else {
var track_26949 = cljs.core.first(seq__26929_26943__$1);
track_26949.stop();

var G__26950 = cljs.core.next(seq__26929_26943__$1);
var G__26951 = null;
var G__26952 = (0);
var G__26953 = (0);
seq__26929_26933 = G__26950;
chunk__26930_26934 = G__26951;
count__26931_26935 = G__26952;
i__26932_26936 = G__26953;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.recorder) : cljs.core.deref.call(null,aidbox_ui.pages.config.recorder)).stopRecording((function (videoURL){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(aidbox_ui.pages.config.videos,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ts,(new Date()),cljs.core.cst$kw$url,videoURL,cljs.core.cst$kw$blob,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.recorder) : cljs.core.deref.call(null,aidbox_ui.pages.config.recorder)).getBlob(),cljs.core.cst$kw$id,cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())], null));
}));
});
aidbox_ui.pages.config.radio_group = (function aidbox_ui$pages$config$radio_group(p__26954){
var map__26970 = p__26954;
var map__26970__$1 = ((((!((map__26970 == null)))?((((map__26970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26970):map__26970);
var args = map__26970__$1;
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$opts);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970__$1,cljs.core.cst$kw$path);
var do_selection = ((function (map__26970,map__26970__$1,args,opts,path){
return (function (x,path__$1){
console.log("select",path__$1,x);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aidbox_ui.pages.config.state,cljs.core.assoc_in,path__$1,x);
});})(map__26970,map__26970__$1,args,opts,path))
;
var seq__26972_26985 = cljs.core.seq(opts);
var chunk__26973_26986 = null;
var count__26974_26987 = (0);
var i__26975_26988 = (0);
while(true){
if((i__26975_26988 < count__26974_26987)){
var x_26989 = chunk__26973_26986.cljs$core$IIndexed$_nth$arity$2(null,i__26975_26988);
if(cljs.core.truth_(cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(x_26989))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aidbox_ui.pages.config.state,cljs.core.assoc_in,path,x_26989);
} else {
}

var G__26990 = seq__26972_26985;
var G__26991 = chunk__26973_26986;
var G__26992 = count__26974_26987;
var G__26993 = (i__26975_26988 + (1));
seq__26972_26985 = G__26990;
chunk__26973_26986 = G__26991;
count__26974_26987 = G__26992;
i__26975_26988 = G__26993;
continue;
} else {
var temp__4657__auto___26994 = cljs.core.seq(seq__26972_26985);
if(temp__4657__auto___26994){
var seq__26972_26995__$1 = temp__4657__auto___26994;
if(cljs.core.chunked_seq_QMARK_(seq__26972_26995__$1)){
var c__7616__auto___26996 = cljs.core.chunk_first(seq__26972_26995__$1);
var G__26997 = cljs.core.chunk_rest(seq__26972_26995__$1);
var G__26998 = c__7616__auto___26996;
var G__26999 = cljs.core.count(c__7616__auto___26996);
var G__27000 = (0);
seq__26972_26985 = G__26997;
chunk__26973_26986 = G__26998;
count__26974_26987 = G__26999;
i__26975_26988 = G__27000;
continue;
} else {
var x_27001 = cljs.core.first(seq__26972_26995__$1);
if(cljs.core.truth_(cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(x_27001))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(aidbox_ui.pages.config.state,cljs.core.assoc_in,path,x_27001);
} else {
}

var G__27002 = cljs.core.next(seq__26972_26995__$1);
var G__27003 = null;
var G__27004 = (0);
var G__27005 = (0);
seq__26972_26985 = G__27002;
chunk__26973_26986 = G__27003;
count__26974_26987 = G__27004;
i__26975_26988 = G__27005;
continue;
}
} else {
}
}
break;
}

return ((function (do_selection,map__26970,map__26970__$1,args,opts,path){
return (function (p__26976){
var map__26977 = p__26976;
var map__26977__$1 = ((((!((map__26977 == null)))?((((map__26977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26977):map__26977);
var path__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,cljs.core.cst$kw$path);
var opts__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,cljs.core.cst$kw$opts);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26977__$1,cljs.core.cst$kw$title);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.state) : cljs.core.deref.call(null,aidbox_ui.pages.config.state));
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,path__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$devices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$label,title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$device,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(((cur == null))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path){
return (function (){
return do_selection(null,path__$1);
});})(st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path))
], null),"Default"], null),(function (){var iter__7585__auto__ = ((function (st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path){
return (function aidbox_ui$pages$config$radio_group_$_iter__26979(s__26980){
return (new cljs.core.LazySeq(null,((function (st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path){
return (function (){
var s__26980__$1 = s__26980;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__26980__$1);
if(temp__4657__auto__){
var s__26980__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26980__$2)){
var c__7583__auto__ = cljs.core.chunk_first(s__26980__$2);
var size__7584__auto__ = cljs.core.count(c__7583__auto__);
var b__26982 = cljs.core.chunk_buffer(size__7584__auto__);
if((function (){var i__26981 = (0);
while(true){
if((i__26981 < size__7584__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7583__auto__,i__26981);
cljs.core.chunk_append(b__26982,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$device,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cur))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__26981,x,c__7583__auto__,size__7584__auto__,b__26982,s__26980__$2,temp__4657__auto__,st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path){
return (function (){
return do_selection(x,path__$1);
});})(i__26981,x,c__7583__auto__,size__7584__auto__,b__26982,s__26980__$2,temp__4657__auto__,st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path))
], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(x)], null));

var G__27006 = (i__26981 + (1));
i__26981 = G__27006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26982),aidbox_ui$pages$config$radio_group_$_iter__26979(cljs.core.chunk_rest(s__26980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26982),null);
}
} else {
var x = cljs.core.first(s__26980__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$device,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cur))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (x,s__26980__$2,temp__4657__auto__,st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path){
return (function (){
return do_selection(x,path__$1);
});})(x,s__26980__$2,temp__4657__auto__,st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path))
], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(x)], null),aidbox_ui$pages$config$radio_group_$_iter__26979(cljs.core.rest(s__26980__$2)));
}
} else {
return null;
}
break;
}
});})(st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path))
,null,null));
});})(st,cur,map__26977,map__26977__$1,path__$1,opts__$1,title,do_selection,map__26970,map__26970__$1,args,opts,path))
;
return iter__7585__auto__(opts__$1);
})()], null);
});
;})(do_selection,map__26970,map__26970__$1,args,opts,path))
});
aidbox_ui.pages.config.wrap_attrs = (function aidbox_ui$pages$config$wrap_attrs(v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$text,cljs.core.name(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(v)));
});
aidbox_ui.pages.config.upload_file = (function aidbox_ui$pages$config$upload_file(v){
var c__21564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto__){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto__){
return (function (state_27065){
var state_val_27066 = (state_27065[(1)]);
if((state_val_27066 === (1))){
var inst_27041 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/videos")].join('');
var inst_27042 = [cljs.core.cst$kw$multipart_DASH_params];
var inst_27043 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27044 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27045 = cljs.core.cst$kw$blob.cljs$core$IFn$_invoke$arity$1(v);
var inst_27046 = ["file",inst_27045];
var inst_27047 = (new cljs.core.PersistentVector(null,2,(5),inst_27044,inst_27046,null));
var inst_27048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27049 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(v);
var inst_27050 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((100));
var inst_27051 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27049),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27050)].join('');
var inst_27052 = ["name",inst_27051];
var inst_27053 = (new cljs.core.PersistentVector(null,2,(5),inst_27048,inst_27052,null));
var inst_27054 = [inst_27047,inst_27053];
var inst_27055 = (new cljs.core.PersistentVector(null,2,(5),inst_27043,inst_27054,null));
var inst_27056 = [inst_27055];
var inst_27057 = cljs.core.PersistentHashMap.fromArrays(inst_27042,inst_27056);
var inst_27058 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_27041,cljs.core.array_seq([inst_27057], 0));
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27065__$1,(2),inst_27058);
} else {
if((state_val_27066 === (2))){
var inst_27060 = (state_27065[(2)]);
var inst_27061 = alert("Video uploaded");
var inst_27062 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_27060);
var inst_27063 = console.log(inst_27062);
var state_27065__$1 = (function (){var statearr_27067 = state_27065;
(statearr_27067[(7)] = inst_27061);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27065__$1,inst_27063);
} else {
return null;
}
}
});})(c__21564__auto__))
;
return ((function (switch__21440__auto__,c__21564__auto__){
return (function() {
var aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto__ = null;
var aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto____0 = (function (){
var statearr_27071 = [null,null,null,null,null,null,null,null];
(statearr_27071[(0)] = aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto__);

(statearr_27071[(1)] = (1));

return statearr_27071;
});
var aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto____1 = (function (state_27065){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_27065);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e27072){if((e27072 instanceof Object)){
var ex__21444__auto__ = e27072;
var statearr_27073_27075 = state_27065;
(statearr_27073_27075[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27065);

return cljs.core.cst$kw$recur;
} else {
throw e27072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__27076 = state_27065;
state_27065 = G__27076;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto__ = function(state_27065){
switch(arguments.length){
case 0:
return aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto____0.call(this);
case 1:
return aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto____1.call(this,state_27065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto____0;
aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto____1;
return aidbox_ui$pages$config$upload_file_$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto__))
})();
var state__21566__auto__ = (function (){var statearr_27074 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_27074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto__);

return statearr_27074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto__))
);

return c__21564__auto__;
});
aidbox_ui.pages.config.settings = (function aidbox_ui$pages$config$settings(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$settings,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$video_DASH_page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,"right"], null)], null),cljs.core.last((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.errors) : cljs.core.deref.call(null,aidbox_ui.pages.config.errors)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.radio_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Choose Device",cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected,cljs.core.cst$kw$device], null),cljs.core.cst$kw$opts,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,d.deviceId,cljs.core.cst$kw$text,((clojure.string.blank_QMARK_(d.label))?"Unknown Device":d.label),cljs.core.cst$kw$value,d], null);
}),cljs.core.cst$kw$devices.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.state) : cljs.core.deref.call(null,aidbox_ui.pages.config.state))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.radio_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Compression",cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected,cljs.core.cst$kw$codec], null),cljs.core.cst$kw$opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"vp8",cljs.core.cst$kw$text,"vp8"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"vp9",cljs.core.cst$kw$text,"vp9"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"h264",cljs.core.cst$kw$text,"h264",cljs.core.cst$kw$default,true], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"whammy",cljs.core.cst$kw$text,"whammy"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.radio_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Resolution",cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected,cljs.core.cst$kw$resolution], null),cljs.core.cst$kw$opts,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(aidbox_ui.pages.config.wrap_attrs,aidbox_ui.pages.config.resolutions)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.radio_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Bitrate",cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected,cljs.core.cst$kw$bit_DASH_rate], null),cljs.core.cst$kw$opts,aidbox_ui.pages.config.bitrates], null)], null)], null)], null);
});
aidbox_ui.pages.config.config = (function aidbox_ui$pages$config$config(){
aidbox_ui.pages.config.load_devices();

return (function (){
var phase = cljs.core.cst$kw$phase.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.state) : cljs.core.deref.call(null,aidbox_ui.pages.config.state)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$video_DASH_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.settings], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_recorder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"video"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$buttons,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$timer,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.state) : cljs.core.deref.call(null,aidbox_ui.pages.config.state)))," sec"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$in_DASH_progress,phase))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$stop,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"stop recording",cljs.core.cst$kw$on_DASH_click,aidbox_ui.pages.config.stop_recording], null),"Stop Recording"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"start recording",cljs.core.cst$kw$on_DASH_click,aidbox_ui.pages.config.start_recording], null),"Start Recording"], null))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Recorded Videos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$videos,(function (){var iter__7585__auto__ = ((function (phase){
return (function aidbox_ui$pages$config$config_$_iter__27083(s__27084){
return (new cljs.core.LazySeq(null,((function (phase){
return (function (){
var s__27084__$1 = s__27084;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27084__$1);
if(temp__4657__auto__){
var s__27084__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27084__$2)){
var c__7583__auto__ = cljs.core.chunk_first(s__27084__$2);
var size__7584__auto__ = cljs.core.count(c__7583__auto__);
var b__27086 = cljs.core.chunk_buffer(size__7584__auto__);
if((function (){var i__27085 = (0);
while(true){
if((i__27085 < size__7584__auto__)){
var vs = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7583__auto__,i__27085);
cljs.core.chunk_append(b__27086,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(vs)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video$preview,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(vs),cljs.core.cst$kw$controls,true], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$desc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,"Record ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ts.cljs$core$IFn$_invoke$arity$1(vs))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Size: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.cst$kw$blob.cljs$core$IFn$_invoke$arity$1(vs).size / (1000000))], 0)),"Mb"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Download video",cljs.core.cst$kw$href,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(vs),cljs.core.cst$kw$download,"video.mp4"], null),"Download"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_sm$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__27085,vs,c__7583__auto__,size__7584__auto__,b__27086,s__27084__$2,temp__4657__auto__,phase){
return (function (){
return aidbox_ui.pages.config.upload_file(vs);
});})(i__27085,vs,c__7583__auto__,size__7584__auto__,b__27086,s__27084__$2,temp__4657__auto__,phase))
,cljs.core.cst$kw$title,"Upload video to server"], null),"Upload"], null)], null)], null));

var G__27089 = (i__27085 + (1));
i__27085 = G__27089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27086),aidbox_ui$pages$config$config_$_iter__27083(cljs.core.chunk_rest(s__27084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27086),null);
}
} else {
var vs = cljs.core.first(s__27084__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(vs)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video$preview,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(vs),cljs.core.cst$kw$controls,true], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$desc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,"Record ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ts.cljs$core$IFn$_invoke$arity$1(vs))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Size: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.cst$kw$blob.cljs$core$IFn$_invoke$arity$1(vs).size / (1000000))], 0)),"Mb"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Download video",cljs.core.cst$kw$href,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(vs),cljs.core.cst$kw$download,"video.mp4"], null),"Download"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_sm$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (vs,s__27084__$2,temp__4657__auto__,phase){
return (function (){
return aidbox_ui.pages.config.upload_file(vs);
});})(vs,s__27084__$2,temp__4657__auto__,phase))
,cljs.core.cst$kw$title,"Upload video to server"], null),"Upload"], null)], null)], null),aidbox_ui$pages$config$config_$_iter__27083(cljs.core.rest(s__27084__$2)));
}
} else {
return null;
}
break;
}
});})(phase))
,null,null));
});})(phase))
;
return iter__7585__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.videos) : cljs.core.deref.call(null,aidbox_ui.pages.config.videos)));
})()], null)], null)], null);
});
});
aidbox_ui.pages.config.controls = (function aidbox_ui$pages$config$controls(p__27090){
var map__27101 = p__27090;
var map__27101__$1 = ((((!((map__27101 == null)))?((((map__27101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27101):map__27101);
var v = map__27101__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27101__$1,cljs.core.cst$kw$name);
var frame = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var duration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var snaps = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var interval = ((1) / (30));
var canvas_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("canvas_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var getvideo = ((function (frame,duration,snaps,interval,canvas_id,map__27101,map__27101__$1,v,id){
return (function (){
return document.getElementById(id);
});})(frame,duration,snaps,interval,canvas_id,map__27101,map__27101__$1,v,id))
;
var set_time = ((function (frame,duration,snaps,interval,canvas_id,getvideo,map__27101,map__27101__$1,v,id){
return (function (f){
var v__$1 = getvideo();
(v__$1["currentTime"] = (interval * f));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(frame,f) : cljs.core.reset_BANG_.call(null,frame,f));
});})(frame,duration,snaps,interval,canvas_id,getvideo,map__27101,map__27101__$1,v,id))
;
var snap = ((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,map__27101,map__27101__$1,v,id){
return (function (frame__$1){
var video = document.getElementById(id);
var time_from = (interval * frame__$1);
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var w = video.videoWidth;
var h = video.videoHeight;
(video["oncanplay"] = ((function (video,time_from,canvas,context,w,h,frame,duration,snaps,interval,canvas_id,getvideo,set_time,map__27101,map__27101__$1,v,id){
return (function (){
canvas.setAttribute("width",w);

canvas.setAttribute("height",h);

context.drawImage(video,(0),(0),w,h);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(snaps,cljs.core.conj,canvas.toDataURL("image/png"));

return (video["oncanplay"] = false);
});})(video,time_from,canvas,context,w,h,frame,duration,snaps,interval,canvas_id,getvideo,set_time,map__27101,map__27101__$1,v,id))
);

return (video["currentTime"] = time_from);
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,map__27101,map__27101__$1,v,id))
;
return ((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video$preview$large,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$onLoadedMetadata,((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function (){
var G__27103 = duration;
var G__27104 = getvideo().duration;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27103,G__27104) : cljs.core.reset_BANG_.call(null,G__27103,G__27104));
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
,cljs.core.cst$kw$crossOrigin,"Anonymous",cljs.core.cst$kw$type,"video/mp4",cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(v))].join(''),cljs.core.cst$kw$controls,true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Frame: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(frame) : cljs.core.deref.call(null,frame)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function (){
return set_time(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(frame) : cljs.core.deref.call(null,frame)) - (1)));
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
], null),"<"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$fps,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$on_DASH_change,((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function (e){
return set_time((e.target.value | (0)));
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
,cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(frame) : cljs.core.deref.call(null,frame)),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,((function (){var or__6797__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return (1);
}
})() * (30)),cljs.core.cst$kw$step,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_secondary$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function (){
return set_time(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(frame) : cljs.core.deref.call(null,frame)) + (1)));
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
], null),">"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function (){
return snap((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(frame) : cljs.core.deref.call(null,frame)));
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
], null),"Capture frame"], null),(function (){var iter__7585__auto__ = ((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function aidbox_ui$pages$config$controls_$_iter__27105(s__27106){
return (new cljs.core.LazySeq(null,((function (frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id){
return (function (){
var s__27106__$1 = s__27106;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27106__$1);
if(temp__4657__auto__){
var s__27106__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27106__$2)){
var c__7583__auto__ = cljs.core.chunk_first(s__27106__$2);
var size__7584__auto__ = cljs.core.count(c__7583__auto__);
var b__27108 = cljs.core.chunk_buffer(size__7584__auto__);
if((function (){var i__27107 = (0);
while(true){
if((i__27107 < size__7584__auto__)){
var url = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7583__auto__,i__27107);
cljs.core.chunk_append(b__27108,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$download,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((100))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".png")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Click to download"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$snap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$crossOrigin,"Anonymous",cljs.core.cst$kw$src,url], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((100))], null)));

var G__27111 = (i__27107 + (1));
i__27107 = G__27111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27108),aidbox_ui$pages$config$controls_$_iter__27105(cljs.core.chunk_rest(s__27106__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27108),null);
}
} else {
var url = cljs.core.first(s__27106__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$download,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$1((100))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".png")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Click to download"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$snap,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$crossOrigin,"Anonymous",cljs.core.cst$kw$src,url], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((100))], null)),aidbox_ui$pages$config$controls_$_iter__27105(cljs.core.rest(s__27106__$2)));
}
} else {
return null;
}
break;
}
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
,null,null));
});})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
;
return iter__7585__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snaps) : cljs.core.deref.call(null,snaps)));
})()], null);
});
;})(frame,duration,snaps,interval,canvas_id,getvideo,set_time,snap,map__27101,map__27101__$1,v,id))
});
aidbox_ui.pages.config.$videos = (function aidbox_ui$pages$config$$videos(){
var vs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var c__21564__auto___27170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21564__auto___27170,vs){
return (function (){
var f__21565__auto__ = (function (){var switch__21440__auto__ = ((function (c__21564__auto___27170,vs){
return (function (state_27147){
var state_val_27148 = (state_27147[(1)]);
if((state_val_27148 === (1))){
var inst_27141 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/videos")].join('');
var inst_27142 = cljs_http.client.get(inst_27141);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27147__$1,(2),inst_27142);
} else {
if((state_val_27148 === (2))){
var inst_27144 = (state_27147[(2)]);
var inst_27145 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(vs,inst_27144) : cljs.core.reset_BANG_.call(null,vs,inst_27144));
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27147__$1,inst_27145);
} else {
return null;
}
}
});})(c__21564__auto___27170,vs))
;
return ((function (switch__21440__auto__,c__21564__auto___27170,vs){
return (function() {
var aidbox_ui$pages$config$$videos_$_state_machine__21441__auto__ = null;
var aidbox_ui$pages$config$$videos_$_state_machine__21441__auto____0 = (function (){
var statearr_27152 = [null,null,null,null,null,null,null];
(statearr_27152[(0)] = aidbox_ui$pages$config$$videos_$_state_machine__21441__auto__);

(statearr_27152[(1)] = (1));

return statearr_27152;
});
var aidbox_ui$pages$config$$videos_$_state_machine__21441__auto____1 = (function (state_27147){
while(true){
var ret_value__21442__auto__ = (function (){try{while(true){
var result__21443__auto__ = switch__21440__auto__(state_27147);
if(cljs.core.keyword_identical_QMARK_(result__21443__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21443__auto__;
}
break;
}
}catch (e27153){if((e27153 instanceof Object)){
var ex__21444__auto__ = e27153;
var statearr_27154_27171 = state_27147;
(statearr_27154_27171[(5)] = ex__21444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27147);

return cljs.core.cst$kw$recur;
} else {
throw e27153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21442__auto__,cljs.core.cst$kw$recur)){
var G__27172 = state_27147;
state_27147 = G__27172;
continue;
} else {
return ret_value__21442__auto__;
}
break;
}
});
aidbox_ui$pages$config$$videos_$_state_machine__21441__auto__ = function(state_27147){
switch(arguments.length){
case 0:
return aidbox_ui$pages$config$$videos_$_state_machine__21441__auto____0.call(this);
case 1:
return aidbox_ui$pages$config$$videos_$_state_machine__21441__auto____1.call(this,state_27147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aidbox_ui$pages$config$$videos_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$0 = aidbox_ui$pages$config$$videos_$_state_machine__21441__auto____0;
aidbox_ui$pages$config$$videos_$_state_machine__21441__auto__.cljs$core$IFn$_invoke$arity$1 = aidbox_ui$pages$config$$videos_$_state_machine__21441__auto____1;
return aidbox_ui$pages$config$$videos_$_state_machine__21441__auto__;
})()
;})(switch__21440__auto__,c__21564__auto___27170,vs))
})();
var state__21566__auto__ = (function (){var statearr_27155 = (f__21565__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21565__auto__.cljs$core$IFn$_invoke$arity$0() : f__21565__auto__.call(null));
(statearr_27155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21564__auto___27170);

return statearr_27155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21566__auto__);
});})(c__21564__auto___27170,vs))
);


return ((function (vs){
return (function (){
var videos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vs){
return (function (v){
return cljs.core.re_matches(/.+\.mp4/,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v));
});})(vs))
,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vs) : cljs.core.deref.call(null,vs))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$video_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$videos,(function (){var iter__7585__auto__ = ((function (videos,vs){
return (function aidbox_ui$pages$config$$videos_$_iter__27156(s__27157){
return (new cljs.core.LazySeq(null,((function (videos,vs){
return (function (){
var s__27157__$1 = s__27157;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27157__$1);
if(temp__4657__auto__){
var s__27157__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27157__$2)){
var c__7583__auto__ = cljs.core.chunk_first(s__27157__$2);
var size__7584__auto__ = cljs.core.count(c__7583__auto__);
var b__27159 = cljs.core.chunk_buffer(size__7584__auto__);
if((function (){var i__27158 = (0);
while(true){
if((i__27158 < size__7584__auto__)){
var map__27166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7583__auto__,i__27158);
var map__27166__$1 = ((((!((map__27166 == null)))?((((map__27166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27166):map__27166);
var v = map__27166__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,cljs.core.cst$kw$name);
cljs.core.chunk_append(b__27159,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$desc,(function (){var name__$1 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v);
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(v))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_secondary$download,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$download,name__$1], null),"Download original .mp4"], null);
})(),(function (){var name__$1 = clojure.string.replace(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v),/\.mp4/,".avi");
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/videos/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_secondary$download,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$download,name__$1], null),"Download .avi"], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.controls,v], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)));

var G__27173 = (i__27158 + (1));
i__27158 = G__27173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27159),aidbox_ui$pages$config$$videos_$_iter__27156(cljs.core.chunk_rest(s__27157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27159),null);
}
} else {
var map__27168 = cljs.core.first(s__27157__$2);
var map__27168__$1 = ((((!((map__27168 == null)))?((((map__27168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27168):map__27168);
var v = map__27168__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27168__$1,cljs.core.cst$kw$name);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$desc,(function (){var name__$1 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v);
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(v))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_secondary$download,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$download,name__$1], null),"Download original .mp4"], null);
})(),(function (){var name__$1 = clojure.string.replace(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v),/\.mp4/,".avi");
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(aidbox_ui.pages.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/videos/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_secondary$download,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,url,cljs.core.cst$kw$download,name__$1], null),"Download .avi"], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.controls,v], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(v)], null)),aidbox_ui$pages$config$$videos_$_iter__27156(cljs.core.rest(s__27157__$2)));
}
} else {
return null;
}
break;
}
});})(videos,vs))
,null,null));
});})(videos,vs))
;
return iter__7585__auto__(videos);
})()], null)], null);
});
;})(vs))
});
aidbox_ui.pages.page.page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$config,(function (k){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["config"], 0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.config], null);
}));
aidbox_ui.pages.page.page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$videos,(function (k){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["videos"], 0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [aidbox_ui.pages.config.$videos], null);
}));
