// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk_shell.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('re_frisk_shell.frisk');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('goog.events.EventType');
re_frisk_shell.core.frisk_style = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$background_DASH_color,"#FAFAFA",cljs.core.cst$kw$fontFamily,"Consolas,Monaco,Courier New,monospace",cljs.core.cst$kw$fontSize,"12px",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$overflow,"auto",cljs.core.cst$kw$width,"100%"], null);
re_frisk_shell.core.re_frisk_button_style = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$cursor,cljs.core.cst$kw$border_DASH_bottom_DASH_left_DASH_radius,cljs.core.cst$kw$fontFamily,cljs.core.cst$kw$padding_DASH_left,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$fontSize,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$border_DASH_bottom_DASH_right_DASH_radius],["left","#CCCCCC","move","0px","Consolas,Monaco,Courier New,monospace","2rem","6px","inline-block","12px","2px","0px"]);
re_frisk_shell.core.arrow_style = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$margin_DASH_left,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$border_DASH_bottom_DASH_left_DASH_radius,cljs.core.cst$kw$padding_DASH_left,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$border_DASH_bottom_DASH_right_DASH_radius],["center","5px","#CCCCCC","15px","pointer","0px","2rem","3px","inline-block","2px","0px"]);
if(typeof re_frisk_shell.core.draggable !== 'undefined'){
} else {
re_frisk_shell.core.draggable = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof re_frisk_shell.core.ua !== 'undefined'){
} else {
re_frisk_shell.core.ua = window.navigator.userAgent;
}
if(typeof re_frisk_shell.core.ie_QMARK_ !== 'undefined'){
} else {
re_frisk_shell.core.ie_QMARK_ = (function (){var or__6797__auto__ = cljs.core.re_find(/MSIE /,re_frisk_shell.core.ua);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
var or__6797__auto____$1 = cljs.core.re_find(/Trident\//,re_frisk_shell.core.ua);
if(cljs.core.truth_(or__6797__auto____$1)){
return or__6797__auto____$1;
} else {
return cljs.core.re_find(/Edge\//,re_frisk_shell.core.ua);
}
}
})();
}
re_frisk_shell.core.get_client_rect = (function re_frisk_shell$core$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$top,r.top], null);
});
re_frisk_shell.core.mouse_move_handler = (function re_frisk_shell$core$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offset));
var G__18729 = re_frisk_shell.core.draggable;
var G__18730 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18729,G__18730) : cljs.core.reset_BANG_.call(null,G__18729,G__18730));
});
});
re_frisk_shell.core.mouse_up_handler = (function re_frisk_shell$core$mouse_up_handler(on_move){
return (function re_frisk_shell$core$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
re_frisk_shell.core.mouse_down_handler = (function re_frisk_shell$core$mouse_down_handler(e){
var map__18736 = re_frisk_shell.core.get_client_rect(e);
var map__18736__$1 = ((((!((map__18736 == null)))?((((map__18736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18736):map__18736);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18736__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18736__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = re_frisk_shell.core.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__18738 = window;
var G__18739 = goog.events.EventType.MOUSEUP;
var G__18740 = re_frisk_shell.core.mouse_up_handler(on_move);
return goog.events.listen(G__18738,G__18739,G__18740);
});
re_frisk_shell.core.visibility_button = (function re_frisk_shell$core$visibility_button(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"10px"], null),cljs.core.cst$kw$onClick,update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"black"], null)], null)], null)], null);
});
re_frisk_shell.core.re_frisk_panel = (function re_frisk_shell$core$re_frisk_panel(var_args){
var args__7917__auto__ = [];
var len__7910__auto___18744 = arguments.length;
var i__7911__auto___18745 = (0);
while(true){
if((i__7911__auto___18745 < len__7910__auto___18744)){
args__7917__auto__.push((arguments[i__7911__auto___18745]));

var G__18746 = (i__7911__auto___18745 + (1));
i__7911__auto___18745 = G__18746;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return re_frisk_shell.core.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

re_frisk_shell.core.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18741_SHARP_,p2__18742_SHARP_){
return cljs.core.assoc_in(p1__18741_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__18742_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__18747__delegate = function (data__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data__$1], null))], null);
};
var G__18747 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__18748__i = 0, G__18748__a = new Array(arguments.length -  0);
while (G__18748__i < G__18748__a.length) {G__18748__a[G__18748__i] = arguments[G__18748__i + 0]; ++G__18748__i;}
  data__$1 = new cljs.core.IndexedSeq(G__18748__a,0);
} 
return G__18747__delegate.call(this,data__$1);};
G__18747.cljs$lang$maxFixedArity = 0;
G__18747.cljs$lang$applyTo = (function (arglist__18749){
var data__$1 = cljs.core.seq(arglist__18749);
return G__18747__delegate(data__$1);
});
G__18747.cljs$core$IFn$_invoke$arity$variadic = G__18747__delegate;
return G__18747;
})()
;
;})(expand_by_default,state_atom))
});

re_frisk_shell.core.re_frisk_panel.cljs$lang$maxFixedArity = (0);

re_frisk_shell.core.re_frisk_panel.cljs$lang$applyTo = (function (seq18743){
return re_frisk_shell.core.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18743));
});

re_frisk_shell.core.re_frisk_shell = (function re_frisk_shell$core$re_frisk_shell(data,deb_data,p__18750){
var map__18753 = p__18750;
var map__18753__$1 = ((((!((map__18753 == null)))?((((map__18753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18753):map__18753);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753__$1,cljs.core.cst$kw$on_DASH_click);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753__$1,cljs.core.cst$kw$height);
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([re_frisk_shell.core.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$resize,"both",cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$height,"200px"], null)], 0));
var height__$1 = (cljs.core.truth_((function (){var and__6785__auto__ = re_frisk_shell.core.ie_QMARK_;
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core.not(height);
} else {
return and__6785__auto__;
}
})())?(200):height);
var style__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style,(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,height__$1,cljs.core.cst$kw$max_DASH_height,height__$1,cljs.core.cst$kw$overflow,"auto"], null):null)], 0));
var style__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style__$1,(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$max_DASH_width,width,cljs.core.cst$kw$overflow,"auto"], null):null)], 0));
if(cljs.core.truth_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_shell.core.draggable,cljs.core.assoc,cljs.core.cst$kw$x,x);
} else {
}

if(cljs.core.truth_(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_shell.core.draggable,cljs.core.assoc,cljs.core.cst$kw$y,y);
} else {
}

return ((function (style,height__$1,style__$1,style__$2,map__18753,map__18753__$1,on_click,x,y,width,height){
return (function (data__$1,deb_data__$1){
if(cljs.core.truth_(cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data__$1) : cljs.core.deref.call(null,deb_data__$1))))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.core.draggable) : cljs.core.deref.call(null,re_frisk_shell.core.draggable)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.core.draggable) : cljs.core.deref.call(null,re_frisk_shell.core.draggable)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),cljs.core.cst$kw$z_DASH_index,(999)], null),(cljs.core.truth_((function (){var or__6797__auto__ = re_frisk_shell.core.ie_QMARK_;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.core.draggable) : cljs.core.deref.call(null,re_frisk_shell.core.draggable))));
}
})())?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$right,"20px"], null):null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,re_frisk_shell.core.re_frisk_button_style,cljs.core.cst$kw$on_DASH_mouse_DASH_down,re_frisk_shell.core.mouse_down_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.visibility_button,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data__$1) : cljs.core.deref.call(null,deb_data__$1)))),((function (style,height__$1,style__$1,style__$2,map__18753,map__18753__$1,on_click,x,y,width,height){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,cljs.core.cst$kw$visible_QMARK_], null),cljs.core.not(cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data__$1) : cljs.core.deref.call(null,deb_data__$1))))));
});})(style,height__$1,style__$1,style__$2,map__18753,map__18753__$1,on_click,x,y,width,height))
], null),"re-frisk"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,re_frisk_shell.core.arrow_style,cljs.core.cst$kw$on_DASH_click,on_click], null),"\u2197"], null),(cljs.core.truth_(cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data__$1) : cljs.core.deref.call(null,deb_data__$1)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.re_frisk_panel,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data__$1) : cljs.core.deref.call(null,data__$1))], null)], null):null)], null);
} else {
return null;
}
});
;})(style,height__$1,style__$1,style__$2,map__18753,map__18753__$1,on_click,x,y,width,height))
});
re_frisk_shell.core.debugger_messages = (function re_frisk_shell$core$debugger_messages(re_frame_events,deb_data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"debugger-messages",cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$){
var n = reagent.core.dom_node(this$);
if(cljs.core.truth_(cljs.core.cst$kw$scroll_DASH_bottom_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data))))){
return n.scrollTop = n.scrollHeight;
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var clrs = cljs.core.cst$kw$evnt_DASH_colors.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar_DASH_messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_scroll,((function (clrs){
return (function (p1__18755_SHARP_){
var t = p1__18755_SHARP_.target;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data,cljs.core.assoc,cljs.core.cst$kw$scroll_DASH_bottom_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t.scrollTop,(t.scrollHeight - t.offsetHeight)));
});})(clrs))
], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (clrs){
return (function (id,item){
var event = cljs.core.first((cljs.core.truth_(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item))?cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item):item));
var fx_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/-fx/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
var db_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/-db/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
var clr = (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(clrs) : event.call(null,clrs));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$messages_DASH_entry,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (event,fx_QMARK_,db_QMARK_,clr,clrs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data,cljs.core.assoc,cljs.core.cst$kw$event_DASH_data,item);
});})(event,fx_QMARK_,db_QMARK_,clr,clrs))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(clr)?clr:((fx_QMARK_)?"#FF0000":((db_QMARK_)?"#00FF00":"#3d3d3d"
))),cljs.core.cst$kw$opacity,0.5,cljs.core.cst$kw$width,"15px",cljs.core.cst$kw$height,"15px",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$padding_DASH_bottom,"4px"], null)], null),((fx_QMARK_)?"fx":((db_QMARK_)?"db":"  "
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$messages_DASH_entry_DASH_content,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(clrs))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame_events) : cljs.core.deref.call(null,re_frame_events)))], null);
})], null));
});
re_frisk_shell.core.event_bar = (function re_frisk_shell$core$event_bar(deb_data){
var evnt_key = reagent.ratom.make_reaction((function (){
return cljs.core.first((function (){var or__6797__auto__ = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data))));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data)));
}
})());
}));
var clr = reagent.ratom.make_reaction(((function (evnt_key){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(evnt_key) : cljs.core.deref.call(null,evnt_key)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(evnt_key) : cljs.core.deref.call(null,evnt_key)).call(null,cljs.core.cst$kw$evnt_DASH_colors.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data))));
} else {
return "";
}
});})(evnt_key))
);
return ((function (evnt_key,clr){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$background_DASH_color,"#3d3d3d",cljs.core.cst$kw$color,"#ffffff",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Event"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$left,"50px",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$width,"60px"], null),cljs.core.cst$kw$placeholder,"#000000",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clr) : cljs.core.deref.call(null,clr)),cljs.core.cst$kw$max_DASH_length,"7",cljs.core.cst$kw$on_DASH_change,((function (evnt_key,clr){
return (function (p1__18756_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evnt_DASH_colors,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(evnt_key) : cljs.core.deref.call(null,evnt_key))], null),p1__18756_SHARP_.target.value);
});})(evnt_key,clr))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"0px",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (evnt_key,clr){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data,cljs.core.assoc,cljs.core.cst$kw$event_DASH_data,null);
});})(evnt_key,clr))
], null),"X"], null)], null);
});
;})(evnt_key,clr))
});
re_frisk_shell.core.eval_str = (function re_frisk_shell$core$eval_str(s){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(s),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$source_DASH_map,true,cljs.core.cst$kw$context,cljs.core.cst$kw$expr], null),(function (result){
return result;
}));
});
re_frisk_shell.core.filter_event = (function re_frisk_shell$core$filter_event(text){
return (function (item){
var name = clojure.string.lower_case(cljs.core.name(cljs.core.first((cljs.core.truth_(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item))?cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item):item))));
var text__$1 = clojure.string.lower_case(text);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(name,text__$1),null);
});
});
re_frisk_shell.core.debugger_shell = (function re_frisk_shell$core$debugger_shell(var_args){
var args__7917__auto__ = [];
var len__7910__auto___18780 = arguments.length;
var i__7911__auto___18781 = (0);
while(true){
if((i__7911__auto___18781 < len__7910__auto___18780)){
args__7917__auto__.push((arguments[i__7911__auto___18781]));

var G__18782 = (i__7911__auto___18781 + (1));
i__7911__auto___18781 = G__18782;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return re_frisk_shell.core.debugger_shell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

re_frisk_shell.core.debugger_shell.cljs$core$IFn$_invoke$arity$variadic = (function (re_frame_data,re_frame_events,deb_data,p__18767){
var vec__18768 = p__18767;
var imp_hndl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18768,(0),null);
var exp_hndl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18768,(1),null);
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__18768,imp_hndl,exp_hndl){
return (function (p1__18757_SHARP_,p2__18758_SHARP_){
return cljs.core.assoc_in(p1__18757_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__18758_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
});})(vec__18768,imp_hndl,exp_hndl))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var expand_by_default2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (expand_by_default,vec__18768,imp_hndl,exp_hndl){
return (function (p1__18759_SHARP_,p2__18760_SHARP_){
return cljs.core.assoc_in(p1__18759_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__18760_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
});})(expand_by_default,vec__18768,imp_hndl,exp_hndl))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
var state_atom2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default2);
var input_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var filtered_events = reagent.ratom.make_reaction(((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,vec__18768,imp_hndl,exp_hndl){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_text) : cljs.core.deref.call(null,input_text)),"")){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame_events) : cljs.core.deref.call(null,re_frame_events));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(re_frisk_shell.core.filter_event((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_text) : cljs.core.deref.call(null,input_text))),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame_events) : cljs.core.deref.call(null,re_frame_events)));
}
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,vec__18768,imp_hndl,exp_hndl))
);
var cljs_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var input_cljs_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_data,cljs.core.assoc,cljs.core.cst$kw$filter,reagent.ratom.make_reaction(((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,vec__18768,imp_hndl,exp_hndl){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_text) : cljs.core.deref.call(null,cljs_text)),"")){
return "empty";
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.core.eval_str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_text) : cljs.core.deref.call(null,cljs_text)))).call(null,(function (){var G__18771 = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame_data) : cljs.core.deref.call(null,re_frame_data)));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18771) : cljs.core.deref.call(null,G__18771));
})());
}
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,vec__18768,imp_hndl,exp_hndl))
));
return ((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_debugger,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"events filter",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_change,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl){
return (function (p1__18761_SHARP_){
var G__18772 = input_text;
var G__18773 = p1__18761_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18772,G__18773) : cljs.core.reset_BANG_.call(null,G__18772,G__18773));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.debugger_messages,filtered_events,deb_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar_DASH_controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar_DASH_controls_DASH_import_DASH_export,(cljs.core.truth_(imp_hndl)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,imp_hndl], null),"Import"], null)," / ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,exp_hndl], null),"Export"], null)," / "], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null),cljs.core.cst$kw$on_DASH_click,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl){
return (function (){
var G__18774 = re_frame_events;
var G__18775 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18774,G__18775) : cljs.core.reset_BANG_.call(null,G__18774,G__18775));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl))
], null),"Clear"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_values,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$background_DASH_color,"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"400px",cljs.core.cst$kw$height,"40px"], null),cljs.core.cst$kw$placeholder,":value or (fn [app-db] {:value (:value app-db)}) or #(hash-map :value (:value %))",cljs.core.cst$kw$on_DASH_change,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl){
return (function (p1__18762_SHARP_){
var G__18776 = input_cljs_text;
var G__18777 = p1__18762_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18776,G__18777) : cljs.core.reset_BANG_.call(null,G__18776,G__18777));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$padding_DASH_left,"5px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$margin_DASH_left,"5px",cljs.core.cst$kw$background_DASH_color,"#3d3d3d",cljs.core.cst$kw$color,cljs.core.cst$kw$white], null),cljs.core.cst$kw$on_DASH_click,((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl){
return (function (){
var G__18778 = cljs_text;
var G__18779 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(input_cljs_text) : cljs.core.deref.call(null,input_cljs_text));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18778,G__18779) : cljs.core.reset_BANG_.call(null,G__18778,G__18779));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl))
], null),"run"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([re_frisk_shell.core.frisk_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(cljs.core.truth_(cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data))))?"calc(100% - 296px)":"calc(100% - 46px)")], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame_data) : cljs.core.deref.call(null,re_frame_data))], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([re_frisk_shell.core.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"250",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data))))?"block":"none")], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.core.event_bar,deb_data], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow,"auto",cljs.core.cst$kw$height,"100%"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deb_data) : cljs.core.deref.call(null,deb_data)))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"20px"], null)], null)], null)], null)], null)], null)], null);
});
;})(expand_by_default,expand_by_default2,state_atom,state_atom2,input_text,filtered_events,cljs_text,input_cljs_text,_,vec__18768,imp_hndl,exp_hndl))
});

re_frisk_shell.core.debugger_shell.cljs$lang$maxFixedArity = (3);

re_frisk_shell.core.debugger_shell.cljs$lang$applyTo = (function (seq18763){
var G__18764 = cljs.core.first(seq18763);
var seq18763__$1 = cljs.core.next(seq18763);
var G__18765 = cljs.core.first(seq18763__$1);
var seq18763__$2 = cljs.core.next(seq18763__$1);
var G__18766 = cljs.core.first(seq18763__$2);
var seq18763__$3 = cljs.core.next(seq18763__$2);
return re_frisk_shell.core.debugger_shell.cljs$core$IFn$_invoke$arity$variadic(G__18764,G__18765,G__18766,seq18763__$3);
});

re_frisk_shell.core.reagent_debugger_shell = (function re_frisk_shell$core$reagent_debugger_shell(re_frame_data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18783_SHARP_,p2__18784_SHARP_){
return cljs.core.assoc_in(p1__18783_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__18784_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,re_frisk_shell.core.frisk_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame_data) : cljs.core.deref.call(null,re_frame_data))], null))], null)], null);
});
;})(expand_by_default,state_atom))
});
re_frisk_shell.core.debugger_page = "<!DOCTYPE html>\n  <html>\n\n    <head>\n\n      <title>re-frisk debugger</title>\n      <meta charset=\"UTF-8\">\n\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    </head>\n\n    <body style=\"margin:0px;padding:0px\">\n\n      <script>var saveAs=saveAs||function(e){\"use strict\";if(typeof e===\"undefined\"||typeof navigator!==\"undefined\"&&/MSIE [1-9]\\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS(\"http://www.w3.org/1999/xhtml\",\"a\"),o=\"download\"in r,a=function(e){var t=new MouseEvent(\"click\");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\\/[\\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s=\"application/octet-stream\",d=1e3*40,c=function(e){var t=function(){if(typeof e===\"string\"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e[\"on\"+t[r]];if(typeof o===\"function\"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,\"writestart progress write writeend\".split(\" \"))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,\"data:attachment/file;\");var n=e.open(t,\"_blank\");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,\"_blank\");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||\"download\",n)};if(typeof navigator!==\"undefined\"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||\"download\";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!==\"undefined\"&&self||typeof window!==\"undefined\"&&window||this.content);if(typeof module!==\"undefined\"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!==\"undefined\"&&define!==null&&define.amd!==null){define(\"FileSaver.js\",function(){return saveAs})}</script>\n      <style>\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 44px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: 23ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n</style>\n      <div id=\"app\" style=\"height:100%;width:100%\">\n\n        <h2>re-frisk debugger</h2>\n\n        <p>ENJOY!</p>\n\n      </div>\n\n    </body>\n\n  </html>";
