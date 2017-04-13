// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.devtool');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('cognitect.transit');
goog.require('re_frisk.data');
goog.require('re_frisk_shell.core');
re_frisk.devtool.export_json = (function re_frisk$devtool$export_json(){
var temp__4655__auto__ = cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlerForForeign,(function (_,___$1){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (___$2){
return "ForeignType";
}),(function (___$2){
return "";
}));
})], null)),(function (){var G__20095 = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data)));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20095) : cljs.core.deref.call(null,G__20095));
})());
if(cljs.core.truth_(temp__4655__auto__)){
var str = temp__4655__auto__;
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))).saveAs((new Blob((new Array(str)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"application/json"], null))),"app-db.json");
} else {
return null;
}
});
re_frisk.devtool.json_on_change = (function re_frisk$devtool$json_on_change(event){
var rdr = (new FileReader());
rdr.onload = ((function (rdr){
return (function (p1__20096_SHARP_){
var G__20100_20103 = re_frisk.data.re_frame_events;
var G__20101_20104 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20100_20103,G__20101_20104) : cljs.core.reset_BANG_.call(null,G__20100_20103,G__20101_20104));

var G__20102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db,cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),p1__20096_SHARP_.target.result)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20102) : re_frame.core.dispatch.call(null,G__20102));
});})(rdr))
;

return rdr.readAsText((event.target.files[(0)]));
});
re_frisk.devtool.on_window_unload = (function re_frisk$devtool$on_window_unload(){
reagent.dom.unmount_component_at_node(cljs.core.cst$kw$app.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_,true);
});
re_frisk.devtool.mount = (function re_frisk$devtool$mount(w,d){
var app = d.getElementById("app");
var re_frame_QMARK_ = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data)));
(w["onunload"] = re_frisk.devtool.on_window_unload);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$doc,d,cljs.core.cst$kw$win,w,cljs.core.cst$kw$app,app], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$id,"json-file-field",cljs.core.cst$kw$on_DASH_change,re_frisk.devtool.json_on_change,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null)], null),(cljs.core.truth_((function (){var and__6785__auto__ = re_frame_QMARK_;
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$events_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prefs.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data)))),false);
} else {
return and__6785__auto__;
}
})())?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.debugger_shell,re_frisk.data.re_frame_data,re_frisk.data.re_frame_events,re_frisk.data.deb_data,((function (app,re_frame_QMARK_){
return (function (){
return cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))).getElementById("json-file-field").click();
});})(app,re_frame_QMARK_))
,re_frisk.devtool.export_json], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.reagent_debugger_shell,re_frisk.data.re_frame_data], null))], null),app);
});
re_frisk.devtool.open_debugger_window = (function re_frisk$devtool$open_debugger_window(){
var w = window.open("","Debugger","width=800,height=400,resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no");
var d = w.document;
d.open();

d.write(re_frisk_shell.core.debugger_page);

(w["onload"] = ((function (w,d){
return (function (){
return re_frisk.devtool.mount(w,d);
});})(w,d))
);

return d.close();
});
