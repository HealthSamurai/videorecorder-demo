// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frisk.data');
goog.require('re_frisk.devtool');
goog.require('re_frisk_shell.core');
goog.require('re_frisk.help');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.first(value).call(null,cljs.core.cst$kw$contexts.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cntx,cljs.core.cst$kw$event,value):value));
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))))){
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))).alert("Application has been closed or refreshed. Debugger has been stoped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.re_frisk_shell,re_frisk.data.re_frame_data,re_frisk.data.deb_data,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,re_frisk.devtool.open_debugger_window], null),params], 0))], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26575 = arguments.length;
var i__7911__auto___26576 = (0);
while(true){
if((i__7911__auto___26576 < len__7910__auto___26575)){
args__7917__auto__.push((arguments[i__7911__auto___26576]));

var G__26577 = (i__7911__auto___26576 + (1));
i__7911__auto___26576 = G__26577;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26564){
var vec__26565 = p__26564;
var map__26568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26565,(0),null);
var map__26568__$1 = ((((!((map__26568 == null)))?((((map__26568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26568):map__26568);
var opts = map__26568__$1;
var kind__GT_id__GT_handler_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26568__$1,cljs.core.cst$kw$kind_DASH__GT_id_DASH__GT_handler_QMARK_);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.initialized) : cljs.core.deref.call(null,re_frisk.data.initialized)))){
return null;
} else {
if(cljs.core.truth_(re_frame.core.reg_sub)){
var G__26570_26578 = cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db;
var G__26571_26579 = ((function (G__26570_26578,vec__26565,map__26568,map__26568__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (db,_){
return db;
});})(G__26570_26578,vec__26565,map__26568,map__26568__$1,opts,kind__GT_id__GT_handler_QMARK_))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26570_26578,G__26571_26579) : re_frame.core.reg_sub.call(null,G__26570_26578,G__26571_26579));
} else {
re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db,((function (vec__26565,map__26568,map__26568__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (db,_){
return reagent.ratom.make_reaction(((function (vec__26565,map__26568,map__26568__$1,opts,kind__GT_id__GT_handler_QMARK_){
return (function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db));
});})(vec__26565,map__26568,map__26568__$1,opts,kind__GT_id__GT_handler_QMARK_))
);
});})(vec__26565,map__26568,map__26568__$1,opts,kind__GT_id__GT_handler_QMARK_))
], 0));
}

var G__26572_26580 = re_frisk.data.re_frame_data;
var G__26573_26581 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([re_frisk.help.re_frame_handlers(kind__GT_id__GT_handler_QMARK_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db,(function (){var G__26574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26574) : re_frame.core.subscribe.call(null,G__26574));
})()], null)], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26572_26580,G__26573_26581) : cljs.core.reset_BANG_.call(null,G__26572_26580,G__26573_26581));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frisk.data.initialized,true) : cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$prefs,opts);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$events_QMARK_.cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk.core.post_event_callback);
}

return setTimeout(re_frisk.core.render_re_frisk,(100),opts);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq26563){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26563));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26586 = arguments.length;
var i__7911__auto___26587 = (0);
while(true){
if((i__7911__auto___26587 < len__7910__auto___26586)){
args__7917__auto__.push((arguments[i__7911__auto___26587]));

var G__26588 = (i__7911__auto___26587 + (1));
i__7911__auto___26587 = G__26588;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.initialized) : cljs.core.deref.call(null,re_frisk.data.initialized)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frisk.data.initialized,true) : cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true));

var G__26583 = re_frisk.core.render_re_frisk;
var G__26584 = (100);
var G__26585 = cljs.core.first(params);
return setTimeout(G__26583,G__26584,G__26585);
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq26582){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26582));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = (function (){var G__26589 = cljs.core.cst$kw$id;
var G__26590 = cljs.core.cst$kw$re_DASH_frisk_DASH_watch_DASH_context;
var G__26591 = cljs.core.cst$kw$before;
var G__26592 = ((function (G__26589,G__26590,G__26591){
return (function (context){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contexts,cljs.core.first(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(context))),cljs.core.cst$kw$before], null),context);

return context;
});})(G__26589,G__26590,G__26591))
;
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__26589,G__26590,G__26591,G__26592) : re_frame.core.__GT_interceptor.call(null,G__26589,G__26590,G__26591,G__26592));
})();
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$events], null),cljs.core.set(events));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$subs], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26593_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__26593_SHARP_],[(function (){var G__26601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26593_SHARP_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26601) : re_frame.core.subscribe.call(null,G__26601));
})()]);
}),subs)));

var seq__26602 = cljs.core.seq(subs);
var chunk__26603 = null;
var count__26604 = (0);
var i__26605 = (0);
while(true){
if((i__26605 < count__26604)){
var s = chunk__26603.cljs$core$IIndexed$_nth$arity$2(null,i__26605);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__26606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26606) : re_frame.core.subscribe.call(null,G__26606));
})());

var G__26608 = seq__26602;
var G__26609 = chunk__26603;
var G__26610 = count__26604;
var G__26611 = (i__26605 + (1));
seq__26602 = G__26608;
chunk__26603 = G__26609;
count__26604 = G__26610;
i__26605 = G__26611;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__26602);
if(temp__4657__auto__){
var seq__26602__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26602__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__26602__$1);
var G__26612 = cljs.core.chunk_rest(seq__26602__$1);
var G__26613 = c__7616__auto__;
var G__26614 = cljs.core.count(c__7616__auto__);
var G__26615 = (0);
seq__26602 = G__26612;
chunk__26603 = G__26613;
count__26604 = G__26614;
i__26605 = G__26615;
continue;
} else {
var s = cljs.core.first(seq__26602__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__26607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__26607) : re_frame.core.subscribe.call(null,G__26607));
})());

var G__26616 = cljs.core.next(seq__26602__$1);
var G__26617 = null;
var G__26618 = (0);
var G__26619 = (0);
seq__26602 = G__26616;
chunk__26603 = G__26617;
count__26604 = G__26618;
i__26605 = G__26619;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views], null),cljs.core.dissoc,cljs.core.array_seq([view], 0));
} else {
return null;
}
});
(function (){var or__6797__auto__ = re_frame.core.reg_event_db;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return re_frame.core.register_handler;
}
})().call(null,cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db,(function (_,p__26620){
var vec__26621 = p__26620;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26621,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26621,(1),null);
return value;
}));
