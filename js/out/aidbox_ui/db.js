// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('aidbox_ui.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.reg_sub_raw(cljs.core.cst$kw$aidbox_DASH_ui$db_SLASH_current_DASH_page,(function (db,_){
return reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$resources_SLASH_search_DASH_result,(function (db,p__26130){
var vec__26131 = p__26130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26131,(0),null);
var rt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26131,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["subscription",rt], 0));

return reagent.ratom.make_reaction(((function (vec__26131,_,rt){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resources,rt], null));
});})(vec__26131,_,rt))
);
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$aidbox_DASH_ui$db_SLASH_auth,(function (db,_){
return reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$auth.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$aidbox_DASH_ui$db_SLASH_top_DASH_menu,(function (db,_){
return reagent.ratom.make_reaction((function (){
return cljs.core.cst$kw$top_DASH_menu.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resources_SLASH_search,(function (coef,p__26134){
var vec__26135 = p__26134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26135,(0),null);
var map__26138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26135,(1),null);
var map__26138__$1 = ((((!((map__26138 == null)))?((((map__26138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26138):map__26138);
var rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,cljs.core.cst$kw$resourceType);
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resources_SLASH_search_DASH_result,(function (cofx,p__26140){
var vec__26141 = p__26140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26141,(0),null);
var map__26144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26141,(1),null);
var map__26144__$1 = ((((!((map__26144 == null)))?((((map__26144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26144):map__26144);
var ev = map__26144__$1;
var rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26144__$1,cljs.core.cst$kw$resourceType);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26144__$1,cljs.core.cst$kw$result);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$resources_SLASH_search_DASH_result,ev], 0));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resources,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rt)], null),result)], null);
}));
