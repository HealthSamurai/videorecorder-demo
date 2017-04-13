// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk_shell.frisk');
goog.require('cljs.core');
goog.require('cljs.core.constants');
re_frisk_shell.frisk.ExpandButton = (function re_frisk_shell$frisk$ExpandButton(p__18594){
var map__18599 = p__18594;
var map__18599__$1 = ((((!((map__18599 == null)))?((((map__18599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18599):map__18599);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18599__$1,cljs.core.cst$kw$expanded_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18599__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18599__$1,cljs.core.cst$kw$emit_DASH_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"20px"], null),cljs.core.cst$kw$onClick,((function (map__18599,map__18599__$1,expanded_QMARK_,path,emit_fn){
return (function (){
var G__18601 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.cst$kw$contract:cljs.core.cst$kw$expand);
var G__18602 = path;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__18601,G__18602) : emit_fn.call(null,G__18601,G__18602));
});})(map__18599,map__18599__$1,expanded_QMARK_,path,emit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"gray",cljs.core.cst$kw$color,"gray"], null)], null)], null)], null);
});
re_frisk_shell.frisk.styles = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$shell,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$backgroundColor,"#FAFAFA",cljs.core.cst$kw$fontFamily,"Consolas,Monaco,Courier New,monospace",cljs.core.cst$kw$fontSize,"12px",cljs.core.cst$kw$z_DASH_index,(9999)], null),cljs.core.cst$kw$strings,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#4Ebb4E"], null),cljs.core.cst$kw$keywords,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"purple"], null),cljs.core.cst$kw$numbers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null),cljs.core.cst$kw$nil,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),cljs.core.cst$kw$shell_DASH_visible_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"#4EE24E"], null)], null);
re_frisk_shell.frisk.ExpandAllButton = (function re_frisk_shell$frisk$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,(function (){
var G__18605 = cljs.core.cst$kw$expand_DASH_all;
var G__18606 = data;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__18605,G__18606) : emit_fn.call(null,G__18605,G__18606));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding,"3px",cljs.core.cst$kw$borderTopLeftRadius,"2px",cljs.core.cst$kw$borderBottomLeftRadius,"2px",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$border,"1px solid darkgray",cljs.core.cst$kw$backgroundColor,"white"], null)], null),"Expand all"], null);
});
re_frisk_shell.frisk.CollapseAllButton = (function re_frisk_shell$frisk$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,(function (){
var G__18608 = cljs.core.cst$kw$collapse_DASH_all;
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(G__18608) : emit_fn.call(null,G__18608));
}),cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$borderBottomRightRadius,cljs.core.cst$kw$borderTop,cljs.core.cst$kw$cursor,cljs.core.cst$kw$borderBottom,cljs.core.cst$kw$borderTopRightRadius,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRight,cljs.core.cst$kw$borderLeft,cljs.core.cst$kw$backgroundColor],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","3px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
});
re_frisk_shell.frisk.NilText = (function re_frisk_shell$frisk$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$nil.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))], null);
});
re_frisk_shell.frisk.StringText = (function re_frisk_shell$frisk$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$strings.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0))], null);
});
re_frisk_shell.frisk.KeywordText = (function re_frisk_shell$frisk$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$keywords.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null);
});
re_frisk_shell.frisk.NumberText = (function re_frisk_shell$frisk$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$numbers.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),data], null);
});
re_frisk_shell.frisk.Node = (function re_frisk_shell$frisk$Node(p__18609){
var map__18632 = p__18609;
var map__18632__$1 = ((((!((map__18632 == null)))?((((map__18632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18632):map__18632);
var val = map__18632__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18632__$1,cljs.core.cst$kw$node);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,"5px"], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(node)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"10px"], null)], null):null),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),cljs.core.cst$kw$on_DASH_change,((function (map__18632,map__18632__$1,val,data,path,emit_fn,swappable,node){
return (function re_frisk_shell$frisk$Node_$_string_changed(e){
var G__18637 = cljs.core.cst$kw$changed;
var G__18638 = path;
var G__18639 = e.target.value;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__18637,G__18638,G__18639) : emit_fn.call(null,G__18637,G__18638,G__18639));
});})(map__18632,map__18632__$1,val,data,path,emit_fn,swappable,node))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,cljs.core.name(data),cljs.core.cst$kw$on_DASH_change,((function (map__18632,map__18632__$1,val,data,path,emit_fn,swappable,node){
return (function re_frisk_shell$frisk$Node_$_keyword_changed(e){
var G__18643 = cljs.core.cst$kw$changed;
var G__18644 = path;
var G__18645 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__18643,G__18644,G__18645) : emit_fn.call(null,G__18643,G__18644,G__18645));
});})(map__18632,map__18632__$1,val,data,path,emit_fn,swappable,node))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeywordText,data], null)):((cljs.core.object_QMARK_(data))?"Object":((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$default_DASH_value,data,cljs.core.cst$kw$on_DASH_change,((function (map__18632,map__18632__$1,val,data,path,emit_fn,swappable,node){
return (function re_frisk_shell$frisk$Node_$_number_changed(e){
var G__18650 = cljs.core.cst$kw$changed;
var G__18651 = path;
var G__18652 = (function (){var G__18653 = e.target.value;
return Number(G__18653);
})();
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__18650,G__18651,G__18652) : emit_fn.call(null,G__18650,G__18651,G__18652));
});})(map__18632,map__18632__$1,val,data,path,emit_fn,swappable,node))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NumberText,data], null)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')
)))))], null)], null);
});
re_frisk_shell.frisk.KeyValNode = (function re_frisk_shell$frisk$KeyValNode(p__18654){
var map__18660 = p__18654;
var map__18660__$1 = ((((!((map__18660 == null)))?((((map__18660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18660):map__18660);
var vec__18661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18660__$1,cljs.core.cst$kw$data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18661,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18660__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18660__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18660__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18660__$1,cljs.core.cst$kw$swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,k], null),cljs.core.cst$kw$data,v,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null);
});
re_frisk_shell.frisk.MapNode = (function re_frisk_shell$frisk$MapNode(p__18665){
var map__18668 = p__18665;
var map__18668__$1 = ((((!((map__18668 == null)))?((((map__18668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18668):map__18668);
var all = map__18668__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18668__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18668__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18668__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18668__$1,cljs.core.cst$kw$emit_DASH_fn);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18668__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," {"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.keys(data))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" keys")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__18668,map__18668__$1,all,data,path,expanded_paths,emit_fn,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeyValNode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__18668,map__18668__$1,all,data,path,expanded_paths,emit_fn,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.ListVecNode = (function re_frisk_shell$frisk$ListVecNode(p__18670){
var map__18673 = p__18670;
var map__18673__$1 = ((((!((map__18673 == null)))?((((map__18673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18673):map__18673);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?" [":" ("),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" items")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?"]":")")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__18673,map__18673__$1,data,path,expanded_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__18673,map__18673__$1,data,path,expanded_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.SetNode = (function re_frisk_shell$frisk$SetNode(p__18675){
var map__18678 = p__18675;
var map__18678__$1 = ((((!((map__18678 == null)))?((((map__18678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18678):map__18678);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18678__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18678__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18678__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18678__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18678__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18678__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," #{",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" items")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__18678,map__18678__$1,data,path,expanded_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__18678,map__18678__$1,data,path,expanded_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.DataFrisk = (function re_frisk_shell$frisk$DataFrisk(p__18680){
var map__18684 = p__18680;
var map__18684__$1 = ((((!((map__18684 == null)))?((((map__18684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18684):map__18684);
var all = map__18684__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,cljs.core.cst$kw$data);
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.SetNode,all], null);
} else {
if((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ListVecNode,all], null);
} else {
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,all], null);

}
}
}
}
});
re_frisk_shell.frisk.conj_to_set = (function re_frisk_shell$frisk$conj_to_set(coll,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__6797__auto__ = coll;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
re_frisk_shell.frisk.expand_all_paths = (function re_frisk_shell$frisk$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$node,root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(remaining)){
var vec__18696 = remaining;
var seq__18697 = cljs.core.seq(vec__18696);
var first__18698 = cljs.core.first(seq__18697);
var seq__18697__$1 = cljs.core.next(seq__18697);
var current = first__18698;
var rest = seq__18697__$1;
var current_node = (((function (){var G__18699 = cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current);
if(!((G__18699 == null))){
if(((G__18699.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__18699.cljs$core$IDeref$))){
return true;
} else {
if((!G__18699.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__18699);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__18699);
}
})())?(function (){var G__18700 = cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18700) : cljs.core.deref.call(null,G__18700));
})():cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_(current_node)){
var G__18705 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__18696,seq__18697,first__18698,seq__18697__$1,current,rest,current_node){
return (function (p__18701){
var vec__18702 = p__18701;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18702,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),k),cljs.core.cst$kw$node,v], null);
});})(remaining,expanded_paths,vec__18696,seq__18697,first__18698,seq__18697__$1,current,rest,current_node))
,current_node));
var G__18706 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__18705;
expanded_paths = G__18706;
continue;
} else {
if((cljs.core.seq_QMARK_(current_node)) || (cljs.core.vector_QMARK_(current_node))){
var G__18707 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__18696,seq__18697,first__18698,seq__18697__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),i),cljs.core.cst$kw$node,node], null);
});})(remaining,expanded_paths,vec__18696,seq__18697,first__18698,seq__18697__$1,current,rest,current_node))
,current_node));
var G__18708 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__18707;
expanded_paths = G__18708;
continue;
} else {
var G__18709 = rest;
var G__18710 = ((cljs.core.coll_QMARK_(current_node))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__18709;
expanded_paths = G__18710;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
re_frisk_shell.frisk.emit_fn_factory = (function re_frisk_shell$frisk$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__18719__delegate = function (event,args){
var G__18715 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__18715) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),re_frisk_shell.frisk.conj_to_set,cljs.core.array_seq([cljs.core.first(args)], 0));

break;
case "expand-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),re_frisk_shell.frisk.expand_all_paths(cljs.core.first(args)));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.disj,cljs.core.array_seq([cljs.core.first(args)], 0));

break;
case "collapse-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "changed":
var vec__18716 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18716,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18716,(1),null);
if(cljs.core.seq(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(swappable,cljs.core.assoc_in,path,value);
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(swappable,value) : cljs.core.reset_BANG_.call(null,swappable,value));
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));

}
};
var G__18719 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__18721__i = 0, G__18721__a = new Array(arguments.length -  1);
while (G__18721__i < G__18721__a.length) {G__18721__a[G__18721__i] = arguments[G__18721__i + 1]; ++G__18721__i;}
  args = new cljs.core.IndexedSeq(G__18721__a,0);
} 
return G__18719__delegate.call(this,event,args);};
G__18719.cljs$lang$maxFixedArity = 1;
G__18719.cljs$lang$applyTo = (function (arglist__18722){
var event = cljs.core.first(arglist__18722);
var args = cljs.core.rest(arglist__18722);
return G__18719__delegate(event,args);
});
G__18719.cljs$core$IFn$_invoke$arity$variadic = G__18719__delegate;
return G__18719;
})()
;
});
re_frisk_shell.frisk.Root = (function re_frisk_shell$frisk$Root(data,id,state_atom){
var data_frisk = cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)));
var swappable = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data)))?data:null);
var emit_fn = re_frisk_shell.frisk.emit_fn_factory(state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"4px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.CollapseAllButton,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$expanded_DASH_paths,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$expanded_DASH_paths], null)),cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null);
});
