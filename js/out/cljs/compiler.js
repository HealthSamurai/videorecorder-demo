// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__16665 = s;
var map__16665__$1 = ((((!((map__16665 == null)))?((((map__16665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16665):map__16665);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16665__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16665__$1,cljs.core.cst$kw$info);
var d = (0);
var G__16668 = info;
var map__16669 = G__16668;
var map__16669__$1 = ((((!((map__16669 == null)))?((((map__16669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16669):map__16669);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16669__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__16668__$1 = G__16668;
while(true){
var d__$2 = d__$1;
var map__16671 = G__16668__$1;
var map__16671__$1 = ((((!((map__16671 == null)))?((((map__16671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16671):map__16671);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16671__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__16673 = (d__$2 + (1));
var G__16674 = shadow__$1;
d__$1 = G__16673;
G__16668__$1 = G__16674;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__16675){
var map__16681 = p__16675;
var map__16681__$1 = ((((!((map__16681 == null)))?((((map__16681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16681):map__16681);
var name_var = map__16681__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16681__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16681__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__16683 = info;
var map__16683__$1 = ((((!((map__16683 == null)))?((((map__16683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16683):map__16683);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16683__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16683__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__16685 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__16685) : cljs.compiler.munge.call(null,G__16685));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args16686 = [];
var len__7910__auto___16689 = arguments.length;
var i__7911__auto___16690 = (0);
while(true){
if((i__7911__auto___16690 < len__7910__auto___16689)){
args16686.push((arguments[i__7911__auto___16690]));

var G__16691 = (i__7911__auto___16690 + (1));
i__7911__auto___16690 = G__16691;
continue;
} else {
}
break;
}

var G__16688 = args16686.length;
switch (G__16688) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16686.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("self__."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__16694 = cp;
switch (G__16694) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\u"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__16700_16704 = cljs.core.seq(s);
var chunk__16701_16705 = null;
var count__16702_16706 = (0);
var i__16703_16707 = (0);
while(true){
if((i__16703_16707 < count__16702_16706)){
var c_16708 = chunk__16701_16705.cljs$core$IIndexed$_nth$arity$2(null,i__16703_16707);
sb.append(cljs.compiler.escape_char(c_16708));

var G__16709 = seq__16700_16704;
var G__16710 = chunk__16701_16705;
var G__16711 = count__16702_16706;
var G__16712 = (i__16703_16707 + (1));
seq__16700_16704 = G__16709;
chunk__16701_16705 = G__16710;
count__16702_16706 = G__16711;
i__16703_16707 = G__16712;
continue;
} else {
var temp__4657__auto___16713 = cljs.core.seq(seq__16700_16704);
if(temp__4657__auto___16713){
var seq__16700_16714__$1 = temp__4657__auto___16713;
if(cljs.core.chunked_seq_QMARK_(seq__16700_16714__$1)){
var c__7616__auto___16715 = cljs.core.chunk_first(seq__16700_16714__$1);
var G__16716 = cljs.core.chunk_rest(seq__16700_16714__$1);
var G__16717 = c__7616__auto___16715;
var G__16718 = cljs.core.count(c__7616__auto___16715);
var G__16719 = (0);
seq__16700_16704 = G__16716;
chunk__16701_16705 = G__16717;
count__16702_16706 = G__16718;
i__16703_16707 = G__16719;
continue;
} else {
var c_16720 = cljs.core.first(seq__16700_16714__$1);
sb.append(cljs.compiler.escape_char(c_16720));

var G__16721 = cljs.core.next(seq__16700_16714__$1);
var G__16722 = null;
var G__16723 = (0);
var G__16724 = (0);
seq__16700_16704 = G__16721;
chunk__16701_16705 = G__16722;
count__16702_16706 = G__16723;
i__16703_16707 = G__16724;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7730__auto__ = (function (){var G__16725 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16725) : cljs.core.atom.call(null,G__16725));
})();
var prefer_table__7731__auto__ = (function (){var G__16726 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16726) : cljs.core.atom.call(null,G__16726));
})();
var method_cache__7732__auto__ = (function (){var G__16727 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16727) : cljs.core.atom.call(null,G__16727));
})();
var cached_hierarchy__7733__auto__ = (function (){var G__16728 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16728) : cljs.core.atom.call(null,G__16728));
})();
var hierarchy__7734__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__7734__auto__,method_table__7730__auto__,prefer_table__7731__auto__,method_cache__7732__auto__,cached_hierarchy__7733__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__14471__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__14471__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__16734_16739 = ast;
var map__16734_16740__$1 = ((((!((map__16734_16739 == null)))?((((map__16734_16739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16734_16739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16734_16739):map__16734_16739);
var env_16741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16734_16740__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_16741))){
var map__16736_16742 = env_16741;
var map__16736_16743__$1 = ((((!((map__16736_16742 == null)))?((((map__16736_16742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16736_16742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16736_16742):map__16736_16742);
var line_16744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16736_16743__$1,cljs.core.cst$kw$line);
var column_16745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16736_16743__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__16736_16742,map__16736_16743__$1,line_16744,column_16745,map__16734_16739,map__16734_16740__$1,env_16741,val__14471__auto__){
return (function (m){
var minfo = (function (){var G__16738 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16738,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__16738;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_16744 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__16736_16742,map__16736_16743__$1,line_16744,column_16745,map__16734_16739,map__16734_16740__$1,env_16741,val__14471__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_16745)?(column_16745 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__16736_16742,map__16736_16743__$1,line_16744,column_16745,map__16734_16739,map__16734_16740__$1,env_16741,val__14471__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__16736_16742,map__16736_16743__$1,line_16744,column_16745,map__16734_16739,map__16734_16740__$1,env_16741,val__14471__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__16736_16742,map__16736_16743__$1,line_16744,column_16745,map__16734_16739,map__16734_16740__$1,env_16741,val__14471__auto__))
,cljs.core.sorted_map()));
});})(map__16736_16742,map__16736_16743__$1,line_16744,column_16745,map__16734_16739,map__16734_16740__$1,env_16741,val__14471__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__14471__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7917__auto__ = [];
var len__7910__auto___16752 = arguments.length;
var i__7911__auto___16753 = (0);
while(true){
if((i__7911__auto___16753 < len__7910__auto___16752)){
args__7917__auto__.push((arguments[i__7911__auto___16753]));

var G__16754 = (i__7911__auto___16753 + (1));
i__7911__auto___16753 = G__16754;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__16748_16755 = cljs.core.seq(xs);
var chunk__16749_16756 = null;
var count__16750_16757 = (0);
var i__16751_16758 = (0);
while(true){
if((i__16751_16758 < count__16750_16757)){
var x_16759 = chunk__16749_16756.cljs$core$IIndexed$_nth$arity$2(null,i__16751_16758);
if((x_16759 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_16759)){
cljs.compiler.emit(x_16759);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_16759)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_16759);
} else {
if(goog.isFunction(x_16759)){
(x_16759.cljs$core$IFn$_invoke$arity$0 ? x_16759.cljs$core$IFn$_invoke$arity$0() : x_16759.call(null));
} else {
var s_16760 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_16759], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__16748_16755,chunk__16749_16756,count__16750_16757,i__16751_16758,s_16760,x_16759){
return (function (p1__16746_SHARP_){
return (p1__16746_SHARP_ + cljs.core.count(s_16760));
});})(seq__16748_16755,chunk__16749_16756,count__16750_16757,i__16751_16758,s_16760,x_16759))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_16760], 0));

}
}
}
}

var G__16761 = seq__16748_16755;
var G__16762 = chunk__16749_16756;
var G__16763 = count__16750_16757;
var G__16764 = (i__16751_16758 + (1));
seq__16748_16755 = G__16761;
chunk__16749_16756 = G__16762;
count__16750_16757 = G__16763;
i__16751_16758 = G__16764;
continue;
} else {
var temp__4657__auto___16765 = cljs.core.seq(seq__16748_16755);
if(temp__4657__auto___16765){
var seq__16748_16766__$1 = temp__4657__auto___16765;
if(cljs.core.chunked_seq_QMARK_(seq__16748_16766__$1)){
var c__7616__auto___16767 = cljs.core.chunk_first(seq__16748_16766__$1);
var G__16768 = cljs.core.chunk_rest(seq__16748_16766__$1);
var G__16769 = c__7616__auto___16767;
var G__16770 = cljs.core.count(c__7616__auto___16767);
var G__16771 = (0);
seq__16748_16755 = G__16768;
chunk__16749_16756 = G__16769;
count__16750_16757 = G__16770;
i__16751_16758 = G__16771;
continue;
} else {
var x_16772 = cljs.core.first(seq__16748_16766__$1);
if((x_16772 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_16772)){
cljs.compiler.emit(x_16772);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_16772)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_16772);
} else {
if(goog.isFunction(x_16772)){
(x_16772.cljs$core$IFn$_invoke$arity$0 ? x_16772.cljs$core$IFn$_invoke$arity$0() : x_16772.call(null));
} else {
var s_16773 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_16772], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__16748_16755,chunk__16749_16756,count__16750_16757,i__16751_16758,s_16773,x_16772,seq__16748_16766__$1,temp__4657__auto___16765){
return (function (p1__16746_SHARP_){
return (p1__16746_SHARP_ + cljs.core.count(s_16773));
});})(seq__16748_16755,chunk__16749_16756,count__16750_16757,i__16751_16758,s_16773,x_16772,seq__16748_16766__$1,temp__4657__auto___16765))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_16773], 0));

}
}
}
}

var G__16774 = cljs.core.next(seq__16748_16766__$1);
var G__16775 = null;
var G__16776 = (0);
var G__16777 = (0);
seq__16748_16755 = G__16774;
chunk__16749_16756 = G__16775;
count__16750_16757 = G__16776;
i__16751_16758 = G__16777;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq16747){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16747));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7917__auto__ = [];
var len__7910__auto___16782 = arguments.length;
var i__7911__auto___16783 = (0);
while(true){
if((i__7911__auto___16783 < len__7910__auto___16782)){
args__7917__auto__.push((arguments[i__7911__auto___16783]));

var G__16784 = (i__7911__auto___16783 + (1));
i__7911__auto___16783 = G__16784;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__16779){
var map__16780 = p__16779;
var map__16780__$1 = ((((!((map__16780 == null)))?((((map__16780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16780):map__16780);
var m = map__16780__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16780__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.array_seq([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq16778){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16778));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7791__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16787_16789 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16788_16790 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16787_16789,_STAR_print_fn_STAR_16788_16790,sb__7791__auto__){
return (function (x__7792__auto__){
return sb__7791__auto__.append(x__7792__auto__);
});})(_STAR_print_newline_STAR_16787_16789,_STAR_print_fn_STAR_16788_16790,sb__7791__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16788_16790;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16787_16789;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__7791__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7730__auto__ = (function (){var G__16791 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16791) : cljs.core.atom.call(null,G__16791));
})();
var prefer_table__7731__auto__ = (function (){var G__16792 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16792) : cljs.core.atom.call(null,G__16792));
})();
var method_cache__7732__auto__ = (function (){var G__16793 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16793) : cljs.core.atom.call(null,G__16793));
})();
var cached_hierarchy__7733__auto__ = (function (){var G__16794 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16794) : cljs.core.atom.call(null,G__16794));
})();
var hierarchy__7734__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__7734__auto__,method_table__7730__auto__,prefer_table__7731__auto__,method_cache__7732__auto__,cached_hierarchy__7733__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("failed compiling constant: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a valid ClojureScript constant.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__16795 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__16800_16802 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__16800_16802) : cljs.compiler.emit_constant.call(null,G__16800_16802));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__16801_16803 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__16801_16803) : cljs.compiler.emit_constant.call(null,G__16801_16803));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__16805_16806 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__16805_16806) : cljs.compiler.emit_constant.call(null,G__16805_16806));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__16807 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__16807) : x.call(null,G__16807));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__16808 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__16808) : x.call(null,G__16808));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__16810){
var map__16811 = p__16810;
var map__16811__$1 = ((((!((map__16811 == null)))?((((map__16811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16811):map__16811);
var arg = map__16811__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,cljs.core.cst$kw$form);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name)], null));
var or__6797__auto__ = js_module_name;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__16813 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__16813);
} else {
return G__16813;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__16814){
var map__16815 = p__16814;
var map__16815__$1 = ((((!((map__16815 == null)))?((((map__16815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16815):map__16815);
var arg = map__16815__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16815__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16815__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16815__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16815__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__16817 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__16817__$1 = ((((!((map__16817 == null)))?((((map__16817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16817):map__16817);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16817__$1,cljs.core.cst$kw$name);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__16819){
var map__16820 = p__16819;
var map__16820__$1 = ((((!((map__16820 == null)))?((((map__16820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16820):map__16820);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16820__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16820__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16820__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__16822_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__16822_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__16823){
var map__16824 = p__16823;
var map__16824__$1 = ((((!((map__16824 == null)))?((((map__16824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16824):map__16824);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16824__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16824__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16824__$1,cljs.core.cst$kw$vals);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__16826){
var map__16827 = p__16826;
var map__16827__$1 = ((((!((map__16827 == null)))?((((map__16827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16827):map__16827);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16827__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16827__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__16829){
var map__16830 = p__16829;
var map__16830__$1 = ((((!((map__16830 == null)))?((((map__16830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16830):map__16830);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16830__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16830__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_16832 = cljs.core.count(items);
if((cnt_16832 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_16832,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__16833_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__16833_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__16834){
var map__16835 = p__16834;
var map__16835__$1 = ((((!((map__16835 == null)))?((((map__16835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16835):map__16835);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16835__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16835__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__16837){
var map__16838 = p__16837;
var map__16838__$1 = ((((!((map__16838 == null)))?((((map__16838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16838):map__16838);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16838__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16838__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16838__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["({"], 0));

var temp__4657__auto___16856 = cljs.core.seq(items);
if(temp__4657__auto___16856){
var items_16857__$1 = temp__4657__auto___16856;
var vec__16840_16858 = items_16857__$1;
var seq__16841_16859 = cljs.core.seq(vec__16840_16858);
var first__16842_16860 = cljs.core.first(seq__16841_16859);
var seq__16841_16861__$1 = cljs.core.next(seq__16841_16859);
var vec__16843_16862 = first__16842_16860;
var k_16863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843_16862,(0),null);
var v_16864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843_16862,(1),null);
var r_16865 = seq__16841_16861__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_16863),"\": ",v_16864], 0));

var seq__16846_16866 = cljs.core.seq(r_16865);
var chunk__16847_16867 = null;
var count__16848_16868 = (0);
var i__16849_16869 = (0);
while(true){
if((i__16849_16869 < count__16848_16868)){
var vec__16850_16870 = chunk__16847_16867.cljs$core$IIndexed$_nth$arity$2(null,i__16849_16869);
var k_16871__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850_16870,(0),null);
var v_16872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850_16870,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_16871__$1),"\": ",v_16872__$1], 0));

var G__16873 = seq__16846_16866;
var G__16874 = chunk__16847_16867;
var G__16875 = count__16848_16868;
var G__16876 = (i__16849_16869 + (1));
seq__16846_16866 = G__16873;
chunk__16847_16867 = G__16874;
count__16848_16868 = G__16875;
i__16849_16869 = G__16876;
continue;
} else {
var temp__4657__auto___16877__$1 = cljs.core.seq(seq__16846_16866);
if(temp__4657__auto___16877__$1){
var seq__16846_16878__$1 = temp__4657__auto___16877__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16846_16878__$1)){
var c__7616__auto___16879 = cljs.core.chunk_first(seq__16846_16878__$1);
var G__16880 = cljs.core.chunk_rest(seq__16846_16878__$1);
var G__16881 = c__7616__auto___16879;
var G__16882 = cljs.core.count(c__7616__auto___16879);
var G__16883 = (0);
seq__16846_16866 = G__16880;
chunk__16847_16867 = G__16881;
count__16848_16868 = G__16882;
i__16849_16869 = G__16883;
continue;
} else {
var vec__16853_16884 = cljs.core.first(seq__16846_16878__$1);
var k_16885__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16853_16884,(0),null);
var v_16886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16853_16884,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_16885__$1),"\": ",v_16886__$1], 0));

var G__16887 = cljs.core.next(seq__16846_16878__$1);
var G__16888 = null;
var G__16889 = (0);
var G__16890 = (0);
seq__16846_16866 = G__16887;
chunk__16847_16867 = G__16888;
count__16848_16868 = G__16889;
i__16849_16869 = G__16890;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__16891){
var map__16892 = p__16891;
var map__16892__$1 = ((((!((map__16892 == null)))?((((map__16892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16892):map__16892);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16892__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16892__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__16894){
var map__16897 = p__16894;
var map__16897__$1 = ((((!((map__16897 == null)))?((((map__16897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16897):map__16897);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16897__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16897__$1,cljs.core.cst$kw$form);
var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__6785__auto__){
var and__6785__auto____$1 = form;
if(cljs.core.truth_(and__6785__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__16899){
var map__16902 = p__16899;
var map__16902__$1 = ((((!((map__16902 == null)))?((((map__16902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16902):map__16902);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902__$1,cljs.core.cst$kw$form);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__6797__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,tag);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__16904){
var map__16905 = p__16904;
var map__16905__$1 = ((((!((map__16905 == null)))?((((map__16905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16905):map__16905);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__6797__auto__ = unchecked;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__16907){
var map__16908 = p__16907;
var map__16908__$1 = ((((!((map__16908 == null)))?((((map__16908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16908):map__16908);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__16910_16928 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__16911_16929 = null;
var count__16912_16930 = (0);
var i__16913_16931 = (0);
while(true){
if((i__16913_16931 < count__16912_16930)){
var vec__16914_16932 = chunk__16911_16929.cljs$core$IIndexed$_nth$arity$2(null,i__16913_16931);
var ts_16933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16914_16932,(0),null);
var then_16934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16914_16932,(1),null);
var seq__16917_16935 = cljs.core.seq(ts_16933);
var chunk__16918_16936 = null;
var count__16919_16937 = (0);
var i__16920_16938 = (0);
while(true){
if((i__16920_16938 < count__16919_16937)){
var test_16939 = chunk__16918_16936.cljs$core$IIndexed$_nth$arity$2(null,i__16920_16938);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_16939,":"], 0));

var G__16940 = seq__16917_16935;
var G__16941 = chunk__16918_16936;
var G__16942 = count__16919_16937;
var G__16943 = (i__16920_16938 + (1));
seq__16917_16935 = G__16940;
chunk__16918_16936 = G__16941;
count__16919_16937 = G__16942;
i__16920_16938 = G__16943;
continue;
} else {
var temp__4657__auto___16944 = cljs.core.seq(seq__16917_16935);
if(temp__4657__auto___16944){
var seq__16917_16945__$1 = temp__4657__auto___16944;
if(cljs.core.chunked_seq_QMARK_(seq__16917_16945__$1)){
var c__7616__auto___16946 = cljs.core.chunk_first(seq__16917_16945__$1);
var G__16947 = cljs.core.chunk_rest(seq__16917_16945__$1);
var G__16948 = c__7616__auto___16946;
var G__16949 = cljs.core.count(c__7616__auto___16946);
var G__16950 = (0);
seq__16917_16935 = G__16947;
chunk__16918_16936 = G__16948;
count__16919_16937 = G__16949;
i__16920_16938 = G__16950;
continue;
} else {
var test_16951 = cljs.core.first(seq__16917_16945__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_16951,":"], 0));

var G__16952 = cljs.core.next(seq__16917_16945__$1);
var G__16953 = null;
var G__16954 = (0);
var G__16955 = (0);
seq__16917_16935 = G__16952;
chunk__16918_16936 = G__16953;
count__16919_16937 = G__16954;
i__16920_16938 = G__16955;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_16934], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_16934], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__16956 = seq__16910_16928;
var G__16957 = chunk__16911_16929;
var G__16958 = count__16912_16930;
var G__16959 = (i__16913_16931 + (1));
seq__16910_16928 = G__16956;
chunk__16911_16929 = G__16957;
count__16912_16930 = G__16958;
i__16913_16931 = G__16959;
continue;
} else {
var temp__4657__auto___16960 = cljs.core.seq(seq__16910_16928);
if(temp__4657__auto___16960){
var seq__16910_16961__$1 = temp__4657__auto___16960;
if(cljs.core.chunked_seq_QMARK_(seq__16910_16961__$1)){
var c__7616__auto___16962 = cljs.core.chunk_first(seq__16910_16961__$1);
var G__16963 = cljs.core.chunk_rest(seq__16910_16961__$1);
var G__16964 = c__7616__auto___16962;
var G__16965 = cljs.core.count(c__7616__auto___16962);
var G__16966 = (0);
seq__16910_16928 = G__16963;
chunk__16911_16929 = G__16964;
count__16912_16930 = G__16965;
i__16913_16931 = G__16966;
continue;
} else {
var vec__16921_16967 = cljs.core.first(seq__16910_16961__$1);
var ts_16968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921_16967,(0),null);
var then_16969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921_16967,(1),null);
var seq__16924_16970 = cljs.core.seq(ts_16968);
var chunk__16925_16971 = null;
var count__16926_16972 = (0);
var i__16927_16973 = (0);
while(true){
if((i__16927_16973 < count__16926_16972)){
var test_16974 = chunk__16925_16971.cljs$core$IIndexed$_nth$arity$2(null,i__16927_16973);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_16974,":"], 0));

var G__16975 = seq__16924_16970;
var G__16976 = chunk__16925_16971;
var G__16977 = count__16926_16972;
var G__16978 = (i__16927_16973 + (1));
seq__16924_16970 = G__16975;
chunk__16925_16971 = G__16976;
count__16926_16972 = G__16977;
i__16927_16973 = G__16978;
continue;
} else {
var temp__4657__auto___16979__$1 = cljs.core.seq(seq__16924_16970);
if(temp__4657__auto___16979__$1){
var seq__16924_16980__$1 = temp__4657__auto___16979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16924_16980__$1)){
var c__7616__auto___16981 = cljs.core.chunk_first(seq__16924_16980__$1);
var G__16982 = cljs.core.chunk_rest(seq__16924_16980__$1);
var G__16983 = c__7616__auto___16981;
var G__16984 = cljs.core.count(c__7616__auto___16981);
var G__16985 = (0);
seq__16924_16970 = G__16982;
chunk__16925_16971 = G__16983;
count__16926_16972 = G__16984;
i__16927_16973 = G__16985;
continue;
} else {
var test_16986 = cljs.core.first(seq__16924_16980__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_16986,":"], 0));

var G__16987 = cljs.core.next(seq__16924_16980__$1);
var G__16988 = null;
var G__16989 = (0);
var G__16990 = (0);
seq__16924_16970 = G__16987;
chunk__16925_16971 = G__16988;
count__16926_16972 = G__16989;
i__16927_16973 = G__16990;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_16969], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_16969], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__16991 = cljs.core.next(seq__16910_16961__$1);
var G__16992 = null;
var G__16993 = (0);
var G__16994 = (0);
seq__16910_16928 = G__16991;
chunk__16911_16929 = G__16992;
count__16912_16930 = G__16993;
i__16913_16931 = G__16994;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__16995){
var map__16996 = p__16995;
var map__16996__$1 = ((((!((map__16996 == null)))?((((map__16996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16996):map__16996);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16996__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16996__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17007 = env;
var G__17008 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17007,G__17008) : cljs.compiler.resolve_type.call(null,G__17007,G__17008));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__17009 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17009,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17009,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__17009,fstr,rstr,ret_t,axstr){
return (function (p1__16998_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__16998_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__16998_SHARP_));
});})(idx,vec__17009,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__17012 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("function("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17012),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__17012;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17013 = env;
var G__17014 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17013,G__17014) : cljs.compiler.resolve_type.call(null,G__17013,G__17014));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=")].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__17015_SHARP_){
return cljs.compiler.resolve_type(env,p1__17015_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__17022 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17023 = cljs.core.seq(vec__17022);
var first__17024 = cljs.core.first(seq__17023);
var seq__17023__$1 = cljs.core.next(seq__17023);
var p = first__17024;
var first__17024__$1 = cljs.core.first(seq__17023__$1);
var seq__17023__$2 = cljs.core.next(seq__17023__$1);
var ts = first__17024__$1;
var first__17024__$2 = cljs.core.first(seq__17023__$2);
var seq__17023__$3 = cljs.core.next(seq__17023__$2);
var n = first__17024__$2;
var xs = seq__17023__$3;
if(cljs.core.truth_((function (){var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__6785__auto__){
var and__6785__auto____$1 = ts;
if(cljs.core.truth_(and__6785__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__17025 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17026 = cljs.core.seq(vec__17025);
var first__17027 = cljs.core.first(seq__17026);
var seq__17026__$1 = cljs.core.next(seq__17026);
var p = first__17027;
var first__17027__$1 = cljs.core.first(seq__17026__$1);
var seq__17026__$2 = cljs.core.next(seq__17026__$1);
var ts = first__17027__$1;
var xs = seq__17026__$2;
if(cljs.core.truth_((function (){var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__6785__auto__){
var and__6785__auto____$1 = ts;
if(cljs.core.truth_(and__6785__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warn,null,cljs.core.cst$kw$error,null], null), null).call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args17029 = [];
var len__7910__auto___17064 = arguments.length;
var i__7911__auto___17065 = (0);
while(true){
if((i__7911__auto___17065 < len__7910__auto___17064)){
args17029.push((arguments[i__7911__auto___17065]));

var G__17066 = (i__7911__auto___17065 + (1));
i__7911__auto___17065 = G__17066;
continue;
} else {
}
break;
}

var G__17031 = args17029.length;
switch (G__17031) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17029.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__17053 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__17028_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__17028_SHARP_);
} else {
return p1__17028_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__17054 = cljs.core.seq(vec__17053);
var first__17055 = cljs.core.first(seq__17054);
var seq__17054__$1 = cljs.core.next(seq__17054);
var x = first__17055;
var ys = seq__17054__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__17056 = cljs.core.seq(ys);
var chunk__17057 = null;
var count__17058 = (0);
var i__17059 = (0);
while(true){
if((i__17059 < count__17058)){
var next_line = chunk__17057.cljs$core$IIndexed$_nth$arity$2(null,i__17059);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__17068 = seq__17056;
var G__17069 = chunk__17057;
var G__17070 = count__17058;
var G__17071 = (i__17059 + (1));
seq__17056 = G__17068;
chunk__17057 = G__17069;
count__17058 = G__17070;
i__17059 = G__17071;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17056);
if(temp__4657__auto__){
var seq__17056__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17056__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__17056__$1);
var G__17072 = cljs.core.chunk_rest(seq__17056__$1);
var G__17073 = c__7616__auto__;
var G__17074 = cljs.core.count(c__7616__auto__);
var G__17075 = (0);
seq__17056 = G__17072;
chunk__17057 = G__17073;
count__17058 = G__17074;
i__17059 = G__17075;
continue;
} else {
var next_line = cljs.core.first(seq__17056__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__17076 = cljs.core.next(seq__17056__$1);
var G__17077 = null;
var G__17078 = (0);
var G__17079 = (0);
seq__17056 = G__17076;
chunk__17057 = G__17077;
count__17058 = G__17078;
i__17059 = G__17079;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__17060_17080 = cljs.core.seq(docs__$2);
var chunk__17061_17081 = null;
var count__17062_17082 = (0);
var i__17063_17083 = (0);
while(true){
if((i__17063_17083 < count__17062_17082)){
var e_17084 = chunk__17061_17081.cljs$core$IIndexed$_nth$arity$2(null,i__17063_17083);
if(cljs.core.truth_(e_17084)){
print_comment_lines(e_17084);
} else {
}

var G__17085 = seq__17060_17080;
var G__17086 = chunk__17061_17081;
var G__17087 = count__17062_17082;
var G__17088 = (i__17063_17083 + (1));
seq__17060_17080 = G__17085;
chunk__17061_17081 = G__17086;
count__17062_17082 = G__17087;
i__17063_17083 = G__17088;
continue;
} else {
var temp__4657__auto___17089 = cljs.core.seq(seq__17060_17080);
if(temp__4657__auto___17089){
var seq__17060_17090__$1 = temp__4657__auto___17089;
if(cljs.core.chunked_seq_QMARK_(seq__17060_17090__$1)){
var c__7616__auto___17091 = cljs.core.chunk_first(seq__17060_17090__$1);
var G__17092 = cljs.core.chunk_rest(seq__17060_17090__$1);
var G__17093 = c__7616__auto___17091;
var G__17094 = cljs.core.count(c__7616__auto___17091);
var G__17095 = (0);
seq__17060_17080 = G__17092;
chunk__17061_17081 = G__17093;
count__17062_17082 = G__17094;
i__17063_17083 = G__17095;
continue;
} else {
var e_17096 = cljs.core.first(seq__17060_17090__$1);
if(cljs.core.truth_(e_17096)){
print_comment_lines(e_17096);
} else {
}

var G__17097 = cljs.core.next(seq__17060_17090__$1);
var G__17098 = null;
var G__17099 = (0);
var G__17100 = (0);
seq__17060_17080 = G__17097;
chunk__17061_17081 = G__17098;
count__17062_17082 = G__17099;
i__17063_17083 = G__17100;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.cst$kw$options);
var and__6785__auto__ = cljs.core.some(((function (opts){
return (function (p1__17102_SHARP_){
return goog.string.startsWith(p1__17102_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6785__auto__)){
var and__6785__auto____$1 = opts;
if(cljs.core.truth_(and__6785__auto____$1)){
var and__6785__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__6785__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__6785__auto____$2;
}
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__17103){
var map__17104 = p__17103;
var map__17104__$1 = ((((!((map__17104 == null)))?((((map__17104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17104):map__17104);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17104__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__6797__auto__ = init;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__6785__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__6785__auto__){
return test;
} else {
return and__6785__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__17106){
var map__17127 = p__17106;
var map__17127__$1 = ((((!((map__17127 == null)))?((((map__17127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17127):map__17127);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17127__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17127__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17127__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__17129_17147 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__17130_17148 = null;
var count__17131_17149 = (0);
var i__17132_17150 = (0);
while(true){
if((i__17132_17150 < count__17131_17149)){
var vec__17133_17151 = chunk__17130_17148.cljs$core$IIndexed$_nth$arity$2(null,i__17132_17150);
var i_17152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17133_17151,(0),null);
var param_17153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17133_17151,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_17153);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__17154 = seq__17129_17147;
var G__17155 = chunk__17130_17148;
var G__17156 = count__17131_17149;
var G__17157 = (i__17132_17150 + (1));
seq__17129_17147 = G__17154;
chunk__17130_17148 = G__17155;
count__17131_17149 = G__17156;
i__17132_17150 = G__17157;
continue;
} else {
var temp__4657__auto___17158 = cljs.core.seq(seq__17129_17147);
if(temp__4657__auto___17158){
var seq__17129_17159__$1 = temp__4657__auto___17158;
if(cljs.core.chunked_seq_QMARK_(seq__17129_17159__$1)){
var c__7616__auto___17160 = cljs.core.chunk_first(seq__17129_17159__$1);
var G__17161 = cljs.core.chunk_rest(seq__17129_17159__$1);
var G__17162 = c__7616__auto___17160;
var G__17163 = cljs.core.count(c__7616__auto___17160);
var G__17164 = (0);
seq__17129_17147 = G__17161;
chunk__17130_17148 = G__17162;
count__17131_17149 = G__17163;
i__17132_17150 = G__17164;
continue;
} else {
var vec__17136_17165 = cljs.core.first(seq__17129_17159__$1);
var i_17166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136_17165,(0),null);
var param_17167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136_17165,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_17167);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__17168 = cljs.core.next(seq__17129_17159__$1);
var G__17169 = null;
var G__17170 = (0);
var G__17171 = (0);
seq__17129_17147 = G__17168;
chunk__17130_17148 = G__17169;
count__17131_17149 = G__17170;
i__17132_17150 = G__17171;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__17139_17172 = cljs.core.seq(params);
var chunk__17140_17173 = null;
var count__17141_17174 = (0);
var i__17142_17175 = (0);
while(true){
if((i__17142_17175 < count__17141_17174)){
var param_17176 = chunk__17140_17173.cljs$core$IIndexed$_nth$arity$2(null,i__17142_17175);
cljs.compiler.emit(param_17176);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17176,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17177 = seq__17139_17172;
var G__17178 = chunk__17140_17173;
var G__17179 = count__17141_17174;
var G__17180 = (i__17142_17175 + (1));
seq__17139_17172 = G__17177;
chunk__17140_17173 = G__17178;
count__17141_17174 = G__17179;
i__17142_17175 = G__17180;
continue;
} else {
var temp__4657__auto___17181 = cljs.core.seq(seq__17139_17172);
if(temp__4657__auto___17181){
var seq__17139_17182__$1 = temp__4657__auto___17181;
if(cljs.core.chunked_seq_QMARK_(seq__17139_17182__$1)){
var c__7616__auto___17183 = cljs.core.chunk_first(seq__17139_17182__$1);
var G__17184 = cljs.core.chunk_rest(seq__17139_17182__$1);
var G__17185 = c__7616__auto___17183;
var G__17186 = cljs.core.count(c__7616__auto___17183);
var G__17187 = (0);
seq__17139_17172 = G__17184;
chunk__17140_17173 = G__17185;
count__17141_17174 = G__17186;
i__17142_17175 = G__17187;
continue;
} else {
var param_17188 = cljs.core.first(seq__17139_17182__$1);
cljs.compiler.emit(param_17188);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17188,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17189 = cljs.core.next(seq__17139_17182__$1);
var G__17190 = null;
var G__17191 = (0);
var G__17192 = (0);
seq__17139_17172 = G__17189;
chunk__17140_17173 = G__17190;
count__17141_17174 = G__17191;
i__17142_17175 = G__17192;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__17143_17193 = cljs.core.seq(params);
var chunk__17144_17194 = null;
var count__17145_17195 = (0);
var i__17146_17196 = (0);
while(true){
if((i__17146_17196 < count__17145_17195)){
var param_17197 = chunk__17144_17194.cljs$core$IIndexed$_nth$arity$2(null,i__17146_17196);
cljs.compiler.emit(param_17197);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17197,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17198 = seq__17143_17193;
var G__17199 = chunk__17144_17194;
var G__17200 = count__17145_17195;
var G__17201 = (i__17146_17196 + (1));
seq__17143_17193 = G__17198;
chunk__17144_17194 = G__17199;
count__17145_17195 = G__17200;
i__17146_17196 = G__17201;
continue;
} else {
var temp__4657__auto___17202 = cljs.core.seq(seq__17143_17193);
if(temp__4657__auto___17202){
var seq__17143_17203__$1 = temp__4657__auto___17202;
if(cljs.core.chunked_seq_QMARK_(seq__17143_17203__$1)){
var c__7616__auto___17204 = cljs.core.chunk_first(seq__17143_17203__$1);
var G__17205 = cljs.core.chunk_rest(seq__17143_17203__$1);
var G__17206 = c__7616__auto___17204;
var G__17207 = cljs.core.count(c__7616__auto___17204);
var G__17208 = (0);
seq__17143_17193 = G__17205;
chunk__17144_17194 = G__17206;
count__17145_17195 = G__17207;
i__17146_17196 = G__17208;
continue;
} else {
var param_17209 = cljs.core.first(seq__17143_17203__$1);
cljs.compiler.emit(param_17209);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17209,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17210 = cljs.core.next(seq__17143_17203__$1);
var G__17211 = null;
var G__17212 = (0);
var G__17213 = (0);
seq__17143_17193 = G__17210;
chunk__17144_17194 = G__17211;
count__17145_17195 = G__17212;
i__17146_17196 = G__17213;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__17218 = cljs.core.seq(params);
var chunk__17219 = null;
var count__17220 = (0);
var i__17221 = (0);
while(true){
if((i__17221 < count__17220)){
var param = chunk__17219.cljs$core$IIndexed$_nth$arity$2(null,i__17221);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17222 = seq__17218;
var G__17223 = chunk__17219;
var G__17224 = count__17220;
var G__17225 = (i__17221 + (1));
seq__17218 = G__17222;
chunk__17219 = G__17223;
count__17220 = G__17224;
i__17221 = G__17225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17218);
if(temp__4657__auto__){
var seq__17218__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17218__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__17218__$1);
var G__17226 = cljs.core.chunk_rest(seq__17218__$1);
var G__17227 = c__7616__auto__;
var G__17228 = cljs.core.count(c__7616__auto__);
var G__17229 = (0);
seq__17218 = G__17226;
chunk__17219 = G__17227;
count__17220 = G__17228;
i__17221 = G__17229;
continue;
} else {
var param = cljs.core.first(seq__17218__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17230 = cljs.core.next(seq__17218__$1);
var G__17231 = null;
var G__17232 = (0);
var G__17233 = (0);
seq__17218 = G__17230;
chunk__17219 = G__17231;
count__17220 = G__17232;
i__17221 = G__17233;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__17234){
var map__17237 = p__17234;
var map__17237__$1 = ((((!((map__17237 == null)))?((((map__17237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17237):map__17237);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17237__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__i")].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__17239){
var map__17250 = p__17239;
var map__17250__$1 = ((((!((map__17250 == null)))?((((map__17250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17250):map__17250);
var f = map__17250__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17250__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_17260__$1 = (function (){var or__6797__auto__ = name;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17261 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17260__$1);
var delegate_name_17262 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17261),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_17262," = function ("], 0));

var seq__17252_17263 = cljs.core.seq(params);
var chunk__17253_17264 = null;
var count__17254_17265 = (0);
var i__17255_17266 = (0);
while(true){
if((i__17255_17266 < count__17254_17265)){
var param_17267 = chunk__17253_17264.cljs$core$IIndexed$_nth$arity$2(null,i__17255_17266);
cljs.compiler.emit(param_17267);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17267,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17268 = seq__17252_17263;
var G__17269 = chunk__17253_17264;
var G__17270 = count__17254_17265;
var G__17271 = (i__17255_17266 + (1));
seq__17252_17263 = G__17268;
chunk__17253_17264 = G__17269;
count__17254_17265 = G__17270;
i__17255_17266 = G__17271;
continue;
} else {
var temp__4657__auto___17272 = cljs.core.seq(seq__17252_17263);
if(temp__4657__auto___17272){
var seq__17252_17273__$1 = temp__4657__auto___17272;
if(cljs.core.chunked_seq_QMARK_(seq__17252_17273__$1)){
var c__7616__auto___17274 = cljs.core.chunk_first(seq__17252_17273__$1);
var G__17275 = cljs.core.chunk_rest(seq__17252_17273__$1);
var G__17276 = c__7616__auto___17274;
var G__17277 = cljs.core.count(c__7616__auto___17274);
var G__17278 = (0);
seq__17252_17263 = G__17275;
chunk__17253_17264 = G__17276;
count__17254_17265 = G__17277;
i__17255_17266 = G__17278;
continue;
} else {
var param_17279 = cljs.core.first(seq__17252_17273__$1);
cljs.compiler.emit(param_17279);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17279,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17280 = cljs.core.next(seq__17252_17273__$1);
var G__17281 = null;
var G__17282 = (0);
var G__17283 = (0);
seq__17252_17263 = G__17280;
chunk__17253_17264 = G__17281;
count__17254_17265 = G__17282;
i__17255_17266 = G__17283;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_17261," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_17284 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_17284,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_17262,".call(this,"], 0));

var seq__17256_17285 = cljs.core.seq(params);
var chunk__17257_17286 = null;
var count__17258_17287 = (0);
var i__17259_17288 = (0);
while(true){
if((i__17259_17288 < count__17258_17287)){
var param_17289 = chunk__17257_17286.cljs$core$IIndexed$_nth$arity$2(null,i__17259_17288);
cljs.compiler.emit(param_17289);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17289,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17290 = seq__17256_17285;
var G__17291 = chunk__17257_17286;
var G__17292 = count__17258_17287;
var G__17293 = (i__17259_17288 + (1));
seq__17256_17285 = G__17290;
chunk__17257_17286 = G__17291;
count__17258_17287 = G__17292;
i__17259_17288 = G__17293;
continue;
} else {
var temp__4657__auto___17294 = cljs.core.seq(seq__17256_17285);
if(temp__4657__auto___17294){
var seq__17256_17295__$1 = temp__4657__auto___17294;
if(cljs.core.chunked_seq_QMARK_(seq__17256_17295__$1)){
var c__7616__auto___17296 = cljs.core.chunk_first(seq__17256_17295__$1);
var G__17297 = cljs.core.chunk_rest(seq__17256_17295__$1);
var G__17298 = c__7616__auto___17296;
var G__17299 = cljs.core.count(c__7616__auto___17296);
var G__17300 = (0);
seq__17256_17285 = G__17297;
chunk__17257_17286 = G__17298;
count__17258_17287 = G__17299;
i__17259_17288 = G__17300;
continue;
} else {
var param_17301 = cljs.core.first(seq__17256_17295__$1);
cljs.compiler.emit(param_17301);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17301,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__17302 = cljs.core.next(seq__17256_17295__$1);
var G__17303 = null;
var G__17304 = (0);
var G__17305 = (0);
seq__17256_17285 = G__17302;
chunk__17257_17286 = G__17303;
count__17258_17287 = G__17304;
i__17259_17288 = G__17305;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17261,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17261,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_17260__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17261,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_17262,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_17261,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__17309){
var map__17310 = p__17309;
var map__17310__$1 = ((((!((map__17310 == null)))?((((map__17310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17310):map__17310);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17306_SHARP_){
var and__6785__auto__ = p1__17306_SHARP_;
if(cljs.core.truth_(and__6785__auto__)){
var G__17312 = cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__17306_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17312) : cljs.core.deref.call(null,G__17312));
} else {
return and__6785__auto__;
}
});})(map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_17346__$1 = (function (){var or__6797__auto__ = name;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17347 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17346__$1);
var maxparams_17348 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_17349 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_17346__$1,mname_17347,maxparams_17348,loop_locals,map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17347),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_17346__$1,mname_17347,maxparams_17348,loop_locals,map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_17350 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_17346__$1,mname_17347,maxparams_17348,mmap_17349,loop_locals,map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17307_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__17307_SHARP_)));
});})(name_17346__$1,mname_17347,maxparams_17348,mmap_17349,loop_locals,map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_17349));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_17347," = null;"], 0));

var seq__17313_17351 = cljs.core.seq(ms_17350);
var chunk__17314_17352 = null;
var count__17315_17353 = (0);
var i__17316_17354 = (0);
while(true){
if((i__17316_17354 < count__17315_17353)){
var vec__17317_17355 = chunk__17314_17352.cljs$core$IIndexed$_nth$arity$2(null,i__17316_17354);
var n_17356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17317_17355,(0),null);
var meth_17357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17317_17355,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_17356," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17357))){
cljs.compiler.emit_variadic_fn_method(meth_17357);
} else {
cljs.compiler.emit_fn_method(meth_17357);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__17358 = seq__17313_17351;
var G__17359 = chunk__17314_17352;
var G__17360 = count__17315_17353;
var G__17361 = (i__17316_17354 + (1));
seq__17313_17351 = G__17358;
chunk__17314_17352 = G__17359;
count__17315_17353 = G__17360;
i__17316_17354 = G__17361;
continue;
} else {
var temp__4657__auto___17362 = cljs.core.seq(seq__17313_17351);
if(temp__4657__auto___17362){
var seq__17313_17363__$1 = temp__4657__auto___17362;
if(cljs.core.chunked_seq_QMARK_(seq__17313_17363__$1)){
var c__7616__auto___17364 = cljs.core.chunk_first(seq__17313_17363__$1);
var G__17365 = cljs.core.chunk_rest(seq__17313_17363__$1);
var G__17366 = c__7616__auto___17364;
var G__17367 = cljs.core.count(c__7616__auto___17364);
var G__17368 = (0);
seq__17313_17351 = G__17365;
chunk__17314_17352 = G__17366;
count__17315_17353 = G__17367;
i__17316_17354 = G__17368;
continue;
} else {
var vec__17320_17369 = cljs.core.first(seq__17313_17363__$1);
var n_17370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17320_17369,(0),null);
var meth_17371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17320_17369,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_17370," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17371))){
cljs.compiler.emit_variadic_fn_method(meth_17371);
} else {
cljs.compiler.emit_fn_method(meth_17371);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__17372 = cljs.core.next(seq__17313_17363__$1);
var G__17373 = null;
var G__17374 = (0);
var G__17375 = (0);
seq__17313_17351 = G__17372;
chunk__17314_17352 = G__17373;
count__17315_17353 = G__17374;
i__17316_17354 = G__17375;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17347," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_17348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_17348)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_17348));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__17323_17376 = cljs.core.seq(ms_17350);
var chunk__17324_17377 = null;
var count__17325_17378 = (0);
var i__17326_17379 = (0);
while(true){
if((i__17326_17379 < count__17325_17378)){
var vec__17327_17380 = chunk__17324_17377.cljs$core$IIndexed$_nth$arity$2(null,i__17326_17379);
var n_17381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17327_17380,(0),null);
var meth_17382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17327_17380,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17382))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_17383 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_17383," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_17384 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_17383," = new cljs.core.IndexedSeq(",a_17384,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_17381,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17348)),(((cljs.core.count(maxparams_17348) > (1)))?", ":null),restarg_17383,");"], 0));
} else {
var pcnt_17385 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17382));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_17385,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_17381,".call(this",(((pcnt_17385 === (0)))?null:cljs.core._conj((function (){var x__7639__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_17385,maxparams_17348));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),",")),");"], 0));
}

var G__17386 = seq__17323_17376;
var G__17387 = chunk__17324_17377;
var G__17388 = count__17325_17378;
var G__17389 = (i__17326_17379 + (1));
seq__17323_17376 = G__17386;
chunk__17324_17377 = G__17387;
count__17325_17378 = G__17388;
i__17326_17379 = G__17389;
continue;
} else {
var temp__4657__auto___17390 = cljs.core.seq(seq__17323_17376);
if(temp__4657__auto___17390){
var seq__17323_17391__$1 = temp__4657__auto___17390;
if(cljs.core.chunked_seq_QMARK_(seq__17323_17391__$1)){
var c__7616__auto___17392 = cljs.core.chunk_first(seq__17323_17391__$1);
var G__17393 = cljs.core.chunk_rest(seq__17323_17391__$1);
var G__17394 = c__7616__auto___17392;
var G__17395 = cljs.core.count(c__7616__auto___17392);
var G__17396 = (0);
seq__17323_17376 = G__17393;
chunk__17324_17377 = G__17394;
count__17325_17378 = G__17395;
i__17326_17379 = G__17396;
continue;
} else {
var vec__17330_17397 = cljs.core.first(seq__17323_17391__$1);
var n_17398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17330_17397,(0),null);
var meth_17399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17330_17397,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17399))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_17400 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_17400," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_17401 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_17400," = new cljs.core.IndexedSeq(",a_17401,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_17398,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17348)),(((cljs.core.count(maxparams_17348) > (1)))?", ":null),restarg_17400,");"], 0));
} else {
var pcnt_17402 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17399));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_17402,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_17398,".call(this",(((pcnt_17402 === (0)))?null:cljs.core._conj((function (){var x__7639__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_17402,maxparams_17348));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),",")),");"], 0));
}

var G__17403 = cljs.core.next(seq__17323_17391__$1);
var G__17404 = null;
var G__17405 = (0);
var G__17406 = (0);
seq__17323_17376 = G__17403;
chunk__17324_17377 = G__17404;
count__17325_17378 = G__17405;
i__17326_17379 = G__17406;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17347,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17347,".cljs$lang$applyTo = ",cljs.core.some(((function (name_17346__$1,mname_17347,maxparams_17348,mmap_17349,ms_17350,loop_locals,map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__17308_SHARP_){
var vec__17333 = p1__17308_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17333,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17333,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_17346__$1,mname_17347,maxparams_17348,mmap_17349,ms_17350,loop_locals,map__17310,map__17310__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_17350),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__17336_17407 = cljs.core.seq(ms_17350);
var chunk__17337_17408 = null;
var count__17338_17409 = (0);
var i__17339_17410 = (0);
while(true){
if((i__17339_17410 < count__17338_17409)){
var vec__17340_17411 = chunk__17337_17408.cljs$core$IIndexed$_nth$arity$2(null,i__17339_17410);
var n_17412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17340_17411,(0),null);
var meth_17413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17340_17411,(1),null);
var c_17414 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17413));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17413))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17347,".cljs$core$IFn$_invoke$arity$variadic = ",n_17412,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17347,".cljs$core$IFn$_invoke$arity$",c_17414," = ",n_17412,";"], 0));
}

var G__17415 = seq__17336_17407;
var G__17416 = chunk__17337_17408;
var G__17417 = count__17338_17409;
var G__17418 = (i__17339_17410 + (1));
seq__17336_17407 = G__17415;
chunk__17337_17408 = G__17416;
count__17338_17409 = G__17417;
i__17339_17410 = G__17418;
continue;
} else {
var temp__4657__auto___17419 = cljs.core.seq(seq__17336_17407);
if(temp__4657__auto___17419){
var seq__17336_17420__$1 = temp__4657__auto___17419;
if(cljs.core.chunked_seq_QMARK_(seq__17336_17420__$1)){
var c__7616__auto___17421 = cljs.core.chunk_first(seq__17336_17420__$1);
var G__17422 = cljs.core.chunk_rest(seq__17336_17420__$1);
var G__17423 = c__7616__auto___17421;
var G__17424 = cljs.core.count(c__7616__auto___17421);
var G__17425 = (0);
seq__17336_17407 = G__17422;
chunk__17337_17408 = G__17423;
count__17338_17409 = G__17424;
i__17339_17410 = G__17425;
continue;
} else {
var vec__17343_17426 = cljs.core.first(seq__17336_17420__$1);
var n_17427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343_17426,(0),null);
var meth_17428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17343_17426,(1),null);
var c_17429 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_17428));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_17428))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17347,".cljs$core$IFn$_invoke$arity$variadic = ",n_17427,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_17347,".cljs$core$IFn$_invoke$arity$",c_17429," = ",n_17427,";"], 0));
}

var G__17430 = cljs.core.next(seq__17336_17420__$1);
var G__17431 = null;
var G__17432 = (0);
var G__17433 = (0);
seq__17336_17407 = G__17430;
chunk__17337_17408 = G__17431;
count__17338_17409 = G__17432;
i__17339_17410 = G__17433;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_17347,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__17434){
var map__17435 = p__17434;
var map__17435__$1 = ((((!((map__17435 == null)))?((((map__17435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17435):map__17435);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17435__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6785__auto__ = statements;
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__6785__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__17437_17441 = cljs.core.seq(statements);
var chunk__17438_17442 = null;
var count__17439_17443 = (0);
var i__17440_17444 = (0);
while(true){
if((i__17440_17444 < count__17439_17443)){
var s_17445 = chunk__17438_17442.cljs$core$IIndexed$_nth$arity$2(null,i__17440_17444);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_17445], 0));

var G__17446 = seq__17437_17441;
var G__17447 = chunk__17438_17442;
var G__17448 = count__17439_17443;
var G__17449 = (i__17440_17444 + (1));
seq__17437_17441 = G__17446;
chunk__17438_17442 = G__17447;
count__17439_17443 = G__17448;
i__17440_17444 = G__17449;
continue;
} else {
var temp__4657__auto___17450 = cljs.core.seq(seq__17437_17441);
if(temp__4657__auto___17450){
var seq__17437_17451__$1 = temp__4657__auto___17450;
if(cljs.core.chunked_seq_QMARK_(seq__17437_17451__$1)){
var c__7616__auto___17452 = cljs.core.chunk_first(seq__17437_17451__$1);
var G__17453 = cljs.core.chunk_rest(seq__17437_17451__$1);
var G__17454 = c__7616__auto___17452;
var G__17455 = cljs.core.count(c__7616__auto___17452);
var G__17456 = (0);
seq__17437_17441 = G__17453;
chunk__17438_17442 = G__17454;
count__17439_17443 = G__17455;
i__17440_17444 = G__17456;
continue;
} else {
var s_17457 = cljs.core.first(seq__17437_17451__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_17457], 0));

var G__17458 = cljs.core.next(seq__17437_17451__$1);
var G__17459 = null;
var G__17460 = (0);
var G__17461 = (0);
seq__17437_17441 = G__17458;
chunk__17438_17442 = G__17459;
count__17439_17443 = G__17460;
i__17440_17444 = G__17461;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__6785__auto__ = statements;
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__6785__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__17462){
var map__17463 = p__17462;
var map__17463__$1 = ((((!((map__17463 == null)))?((((map__17463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17463):map__17463);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6797__auto__ = name;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("finally block cannot contain constant"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__17465,is_loop){
var map__17477 = p__17465;
var map__17477__$1 = ((((!((map__17477 == null)))?((((map__17477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17477):map__17477);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_17479_17488 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_17479_17488,context,map__17477,map__17477__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_17479_17488,context,map__17477,map__17477__$1,bindings,expr,env))
,bindings):null));

try{var seq__17480_17489 = cljs.core.seq(bindings);
var chunk__17481_17490 = null;
var count__17482_17491 = (0);
var i__17483_17492 = (0);
while(true){
if((i__17483_17492 < count__17482_17491)){
var map__17484_17493 = chunk__17481_17490.cljs$core$IIndexed$_nth$arity$2(null,i__17483_17492);
var map__17484_17494__$1 = ((((!((map__17484_17493 == null)))?((((map__17484_17493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17484_17493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17484_17493):map__17484_17493);
var binding_17495 = map__17484_17494__$1;
var init_17496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17484_17494__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_17495);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_17496,";"], 0));

var G__17497 = seq__17480_17489;
var G__17498 = chunk__17481_17490;
var G__17499 = count__17482_17491;
var G__17500 = (i__17483_17492 + (1));
seq__17480_17489 = G__17497;
chunk__17481_17490 = G__17498;
count__17482_17491 = G__17499;
i__17483_17492 = G__17500;
continue;
} else {
var temp__4657__auto___17501 = cljs.core.seq(seq__17480_17489);
if(temp__4657__auto___17501){
var seq__17480_17502__$1 = temp__4657__auto___17501;
if(cljs.core.chunked_seq_QMARK_(seq__17480_17502__$1)){
var c__7616__auto___17503 = cljs.core.chunk_first(seq__17480_17502__$1);
var G__17504 = cljs.core.chunk_rest(seq__17480_17502__$1);
var G__17505 = c__7616__auto___17503;
var G__17506 = cljs.core.count(c__7616__auto___17503);
var G__17507 = (0);
seq__17480_17489 = G__17504;
chunk__17481_17490 = G__17505;
count__17482_17491 = G__17506;
i__17483_17492 = G__17507;
continue;
} else {
var map__17486_17508 = cljs.core.first(seq__17480_17502__$1);
var map__17486_17509__$1 = ((((!((map__17486_17508 == null)))?((((map__17486_17508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17486_17508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17486_17508):map__17486_17508);
var binding_17510 = map__17486_17509__$1;
var init_17511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486_17509__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_17510);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_17511,";"], 0));

var G__17512 = cljs.core.next(seq__17480_17502__$1);
var G__17513 = null;
var G__17514 = (0);
var G__17515 = (0);
seq__17480_17489 = G__17512;
chunk__17481_17490 = G__17513;
count__17482_17491 = G__17514;
i__17483_17492 = G__17515;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_17479_17488;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__17516){
var map__17517 = p__17516;
var map__17517__$1 = ((((!((map__17517 == null)))?((((map__17517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17517):map__17517);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__7720__auto___17519 = cljs.core.count(exprs);
var i_17520 = (0);
while(true){
if((i_17520 < n__7720__auto___17519)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_17520) : temps.call(null,i_17520))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_17520) : exprs.call(null,i_17520)),";"], 0));

var G__17521 = (i_17520 + (1));
i_17520 = G__17521;
continue;
} else {
}
break;
}

var n__7720__auto___17522 = cljs.core.count(exprs);
var i_17523 = (0);
while(true){
if((i_17523 < n__7720__auto___17522)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_17523) : params.call(null,i_17523)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_17523) : temps.call(null,i_17523)),";"], 0));

var G__17524 = (i_17523 + (1));
i_17523 = G__17524;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__17525){
var map__17526 = p__17525;
var map__17526__$1 = ((((!((map__17526 == null)))?((((map__17526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17526):map__17526);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17526__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17526__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17526__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__17528_17536 = cljs.core.seq(bindings);
var chunk__17529_17537 = null;
var count__17530_17538 = (0);
var i__17531_17539 = (0);
while(true){
if((i__17531_17539 < count__17530_17538)){
var map__17532_17540 = chunk__17529_17537.cljs$core$IIndexed$_nth$arity$2(null,i__17531_17539);
var map__17532_17541__$1 = ((((!((map__17532_17540 == null)))?((((map__17532_17540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17532_17540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17532_17540):map__17532_17540);
var binding_17542 = map__17532_17541__$1;
var init_17543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17532_17541__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_17542)," = ",init_17543,";"], 0));

var G__17544 = seq__17528_17536;
var G__17545 = chunk__17529_17537;
var G__17546 = count__17530_17538;
var G__17547 = (i__17531_17539 + (1));
seq__17528_17536 = G__17544;
chunk__17529_17537 = G__17545;
count__17530_17538 = G__17546;
i__17531_17539 = G__17547;
continue;
} else {
var temp__4657__auto___17548 = cljs.core.seq(seq__17528_17536);
if(temp__4657__auto___17548){
var seq__17528_17549__$1 = temp__4657__auto___17548;
if(cljs.core.chunked_seq_QMARK_(seq__17528_17549__$1)){
var c__7616__auto___17550 = cljs.core.chunk_first(seq__17528_17549__$1);
var G__17551 = cljs.core.chunk_rest(seq__17528_17549__$1);
var G__17552 = c__7616__auto___17550;
var G__17553 = cljs.core.count(c__7616__auto___17550);
var G__17554 = (0);
seq__17528_17536 = G__17551;
chunk__17529_17537 = G__17552;
count__17530_17538 = G__17553;
i__17531_17539 = G__17554;
continue;
} else {
var map__17534_17555 = cljs.core.first(seq__17528_17549__$1);
var map__17534_17556__$1 = ((((!((map__17534_17555 == null)))?((((map__17534_17555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17534_17555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17534_17555):map__17534_17555);
var binding_17557 = map__17534_17556__$1;
var init_17558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17534_17556__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_17557)," = ",init_17558,";"], 0));

var G__17559 = cljs.core.next(seq__17528_17549__$1);
var G__17560 = null;
var G__17561 = (0);
var G__17562 = (0);
seq__17528_17536 = G__17559;
chunk__17529_17537 = G__17560;
count__17530_17538 = G__17561;
i__17531_17539 = G__17562;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__17565){
var map__17566 = p__17565;
var map__17566__$1 = ((((!((map__17566 == null)))?((((map__17566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17566):map__17566);
var expr = map__17566__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6785__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__6785__auto__){
var and__6785__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__6785__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6785__auto__ = protocol;
if(cljs.core.truth_(and__6785__auto__)){
var and__6785__auto____$1 = tag;
if(cljs.core.truth_(and__6785__auto____$1)){
var or__6797__auto__ = (function (){var and__6785__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__6785__auto____$2){
var and__6785__auto____$3 = protocol;
if(cljs.core.truth_(and__6785__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__6785__auto____$3;
}
} else {
return and__6785__auto____$2;
}
})();
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
var and__6785__auto____$2 = (function (){var or__6797__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__6797__auto____$1){
return or__6797__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6785__auto____$2)){
var or__6797__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__6797__auto____$1){
return or__6797__auto____$1;
} else {
var and__6785__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__6785__auto____$3){
var and__6785__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null).call(null,tag));
if(and__6785__auto____$4){
var temp__4657__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__6785__auto____$4;
}
} else {
return and__6785__auto____$3;
}
}
} else {
return and__6785__auto____$2;
}
}
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6797__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__6797__auto__){
return or__6797__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__17568 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6785__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6785__auto__)){
return (arity > mfa);
} else {
return and__6785__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env){
return (function (p1__17563_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17563_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env){
return (function (p1__17564_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17564_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__17566,map__17566__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17568,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17568,(1),null);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_17571 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_17571,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_17572 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_17572,args)),(((mfa_17572 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_17572,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__6797__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
var or__6797__auto____$1 = js_QMARK_;
if(or__6797__auto____$1){
return or__6797__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var))){
var fprop_17573 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_17573," ? ",f__$1,fprop_17573,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__17574){
var map__17575 = p__17574;
var map__17575__$1 = ((((!((map__17575 == null)))?((((map__17575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17575):map__17575);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17575__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17575__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17575__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__17577){
var map__17578 = p__17577;
var map__17578__$1 = ((((!((map__17578 == null)))?((((map__17578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17578):map__17578);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17578__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17578__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17578__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__17584_17588 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps)));
var chunk__17585_17589 = null;
var count__17586_17590 = (0);
var i__17587_17591 = (0);
while(true){
if((i__17587_17591 < count__17586_17590)){
var lib_17592 = chunk__17585_17589.cljs$core$IIndexed$_nth$arity$2(null,i__17587_17591);
if(cljs.core.truth_((function (){var or__6797__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17592),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17592),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6797__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17592),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17592),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17592),"');"], 0));

}
}

var G__17593 = seq__17584_17588;
var G__17594 = chunk__17585_17589;
var G__17595 = count__17586_17590;
var G__17596 = (i__17587_17591 + (1));
seq__17584_17588 = G__17593;
chunk__17585_17589 = G__17594;
count__17586_17590 = G__17595;
i__17587_17591 = G__17596;
continue;
} else {
var temp__4657__auto___17597 = cljs.core.seq(seq__17584_17588);
if(temp__4657__auto___17597){
var seq__17584_17598__$1 = temp__4657__auto___17597;
if(cljs.core.chunked_seq_QMARK_(seq__17584_17598__$1)){
var c__7616__auto___17599 = cljs.core.chunk_first(seq__17584_17598__$1);
var G__17600 = cljs.core.chunk_rest(seq__17584_17598__$1);
var G__17601 = c__7616__auto___17599;
var G__17602 = cljs.core.count(c__7616__auto___17599);
var G__17603 = (0);
seq__17584_17588 = G__17600;
chunk__17585_17589 = G__17601;
count__17586_17590 = G__17602;
i__17587_17591 = G__17603;
continue;
} else {
var lib_17604 = cljs.core.first(seq__17584_17598__$1);
if(cljs.core.truth_((function (){var or__6797__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17604),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17604),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6797__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17604),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17604),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17604),"');"], 0));

}
}

var G__17605 = cljs.core.next(seq__17584_17598__$1);
var G__17606 = null;
var G__17607 = (0);
var G__17608 = (0);
seq__17584_17588 = G__17605;
chunk__17585_17589 = G__17606;
count__17586_17590 = G__17607;
i__17587_17591 = G__17608;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__17609){
var map__17610 = p__17609;
var map__17610__$1 = ((((!((map__17610 == null)))?((((map__17610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17610):map__17610);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__17612){
var map__17613 = p__17612;
var map__17613__$1 = ((((!((map__17613 == null)))?((((map__17613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17613):map__17613);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__17615){
var map__17616 = p__17615;
var map__17616__$1 = ((((!((map__17616 == null)))?((((map__17616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17616):map__17616);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17616__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17616__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17616__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17616__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17616__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__17618_17636 = cljs.core.seq(protocols);
var chunk__17619_17637 = null;
var count__17620_17638 = (0);
var i__17621_17639 = (0);
while(true){
if((i__17621_17639 < count__17620_17638)){
var protocol_17640 = chunk__17619_17637.cljs$core$IIndexed$_nth$arity$2(null,i__17621_17639);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17640)].join('')),"}"], 0));

var G__17641 = seq__17618_17636;
var G__17642 = chunk__17619_17637;
var G__17643 = count__17620_17638;
var G__17644 = (i__17621_17639 + (1));
seq__17618_17636 = G__17641;
chunk__17619_17637 = G__17642;
count__17620_17638 = G__17643;
i__17621_17639 = G__17644;
continue;
} else {
var temp__4657__auto___17645 = cljs.core.seq(seq__17618_17636);
if(temp__4657__auto___17645){
var seq__17618_17646__$1 = temp__4657__auto___17645;
if(cljs.core.chunked_seq_QMARK_(seq__17618_17646__$1)){
var c__7616__auto___17647 = cljs.core.chunk_first(seq__17618_17646__$1);
var G__17648 = cljs.core.chunk_rest(seq__17618_17646__$1);
var G__17649 = c__7616__auto___17647;
var G__17650 = cljs.core.count(c__7616__auto___17647);
var G__17651 = (0);
seq__17618_17636 = G__17648;
chunk__17619_17637 = G__17649;
count__17620_17638 = G__17650;
i__17621_17639 = G__17651;
continue;
} else {
var protocol_17652 = cljs.core.first(seq__17618_17646__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17652)].join('')),"}"], 0));

var G__17653 = cljs.core.next(seq__17618_17646__$1);
var G__17654 = null;
var G__17655 = (0);
var G__17656 = (0);
seq__17618_17636 = G__17653;
chunk__17619_17637 = G__17654;
count__17620_17638 = G__17655;
i__17621_17639 = G__17656;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__17622_17657 = cljs.core.seq(fields__$1);
var chunk__17623_17658 = null;
var count__17624_17659 = (0);
var i__17625_17660 = (0);
while(true){
if((i__17625_17660 < count__17624_17659)){
var fld_17661 = chunk__17623_17658.cljs$core$IIndexed$_nth$arity$2(null,i__17625_17660);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_17661," = ",fld_17661,";"], 0));

var G__17662 = seq__17622_17657;
var G__17663 = chunk__17623_17658;
var G__17664 = count__17624_17659;
var G__17665 = (i__17625_17660 + (1));
seq__17622_17657 = G__17662;
chunk__17623_17658 = G__17663;
count__17624_17659 = G__17664;
i__17625_17660 = G__17665;
continue;
} else {
var temp__4657__auto___17666 = cljs.core.seq(seq__17622_17657);
if(temp__4657__auto___17666){
var seq__17622_17667__$1 = temp__4657__auto___17666;
if(cljs.core.chunked_seq_QMARK_(seq__17622_17667__$1)){
var c__7616__auto___17668 = cljs.core.chunk_first(seq__17622_17667__$1);
var G__17669 = cljs.core.chunk_rest(seq__17622_17667__$1);
var G__17670 = c__7616__auto___17668;
var G__17671 = cljs.core.count(c__7616__auto___17668);
var G__17672 = (0);
seq__17622_17657 = G__17669;
chunk__17623_17658 = G__17670;
count__17624_17659 = G__17671;
i__17625_17660 = G__17672;
continue;
} else {
var fld_17673 = cljs.core.first(seq__17622_17667__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_17673," = ",fld_17673,";"], 0));

var G__17674 = cljs.core.next(seq__17622_17667__$1);
var G__17675 = null;
var G__17676 = (0);
var G__17677 = (0);
seq__17622_17657 = G__17674;
chunk__17623_17658 = G__17675;
count__17624_17659 = G__17676;
i__17625_17660 = G__17677;
continue;
}
} else {
}
}
break;
}

var seq__17626_17678 = cljs.core.seq(pmasks);
var chunk__17627_17679 = null;
var count__17628_17680 = (0);
var i__17629_17681 = (0);
while(true){
if((i__17629_17681 < count__17628_17680)){
var vec__17630_17682 = chunk__17627_17679.cljs$core$IIndexed$_nth$arity$2(null,i__17629_17681);
var pno_17683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17630_17682,(0),null);
var pmask_17684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17630_17682,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_17683,"$ = ",pmask_17684,";"], 0));

var G__17685 = seq__17626_17678;
var G__17686 = chunk__17627_17679;
var G__17687 = count__17628_17680;
var G__17688 = (i__17629_17681 + (1));
seq__17626_17678 = G__17685;
chunk__17627_17679 = G__17686;
count__17628_17680 = G__17687;
i__17629_17681 = G__17688;
continue;
} else {
var temp__4657__auto___17689 = cljs.core.seq(seq__17626_17678);
if(temp__4657__auto___17689){
var seq__17626_17690__$1 = temp__4657__auto___17689;
if(cljs.core.chunked_seq_QMARK_(seq__17626_17690__$1)){
var c__7616__auto___17691 = cljs.core.chunk_first(seq__17626_17690__$1);
var G__17692 = cljs.core.chunk_rest(seq__17626_17690__$1);
var G__17693 = c__7616__auto___17691;
var G__17694 = cljs.core.count(c__7616__auto___17691);
var G__17695 = (0);
seq__17626_17678 = G__17692;
chunk__17627_17679 = G__17693;
count__17628_17680 = G__17694;
i__17629_17681 = G__17695;
continue;
} else {
var vec__17633_17696 = cljs.core.first(seq__17626_17690__$1);
var pno_17697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17633_17696,(0),null);
var pmask_17698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17633_17696,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_17697,"$ = ",pmask_17698,";"], 0));

var G__17699 = cljs.core.next(seq__17626_17690__$1);
var G__17700 = null;
var G__17701 = (0);
var G__17702 = (0);
seq__17626_17678 = G__17699;
chunk__17627_17679 = G__17700;
count__17628_17680 = G__17701;
i__17629_17681 = G__17702;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__17703){
var map__17704 = p__17703;
var map__17704__$1 = ((((!((map__17704 == null)))?((((map__17704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17704):map__17704);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17704__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17704__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17704__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17704__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17704__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__17706_17724 = cljs.core.seq(protocols);
var chunk__17707_17725 = null;
var count__17708_17726 = (0);
var i__17709_17727 = (0);
while(true){
if((i__17709_17727 < count__17708_17726)){
var protocol_17728 = chunk__17707_17725.cljs$core$IIndexed$_nth$arity$2(null,i__17709_17727);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17728)].join('')),"}"], 0));

var G__17729 = seq__17706_17724;
var G__17730 = chunk__17707_17725;
var G__17731 = count__17708_17726;
var G__17732 = (i__17709_17727 + (1));
seq__17706_17724 = G__17729;
chunk__17707_17725 = G__17730;
count__17708_17726 = G__17731;
i__17709_17727 = G__17732;
continue;
} else {
var temp__4657__auto___17733 = cljs.core.seq(seq__17706_17724);
if(temp__4657__auto___17733){
var seq__17706_17734__$1 = temp__4657__auto___17733;
if(cljs.core.chunked_seq_QMARK_(seq__17706_17734__$1)){
var c__7616__auto___17735 = cljs.core.chunk_first(seq__17706_17734__$1);
var G__17736 = cljs.core.chunk_rest(seq__17706_17734__$1);
var G__17737 = c__7616__auto___17735;
var G__17738 = cljs.core.count(c__7616__auto___17735);
var G__17739 = (0);
seq__17706_17724 = G__17736;
chunk__17707_17725 = G__17737;
count__17708_17726 = G__17738;
i__17709_17727 = G__17739;
continue;
} else {
var protocol_17740 = cljs.core.first(seq__17706_17734__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17740)].join('')),"}"], 0));

var G__17741 = cljs.core.next(seq__17706_17734__$1);
var G__17742 = null;
var G__17743 = (0);
var G__17744 = (0);
seq__17706_17724 = G__17741;
chunk__17707_17725 = G__17742;
count__17708_17726 = G__17743;
i__17709_17727 = G__17744;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__17710_17745 = cljs.core.seq(fields__$1);
var chunk__17711_17746 = null;
var count__17712_17747 = (0);
var i__17713_17748 = (0);
while(true){
if((i__17713_17748 < count__17712_17747)){
var fld_17749 = chunk__17711_17746.cljs$core$IIndexed$_nth$arity$2(null,i__17713_17748);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_17749," = ",fld_17749,";"], 0));

var G__17750 = seq__17710_17745;
var G__17751 = chunk__17711_17746;
var G__17752 = count__17712_17747;
var G__17753 = (i__17713_17748 + (1));
seq__17710_17745 = G__17750;
chunk__17711_17746 = G__17751;
count__17712_17747 = G__17752;
i__17713_17748 = G__17753;
continue;
} else {
var temp__4657__auto___17754 = cljs.core.seq(seq__17710_17745);
if(temp__4657__auto___17754){
var seq__17710_17755__$1 = temp__4657__auto___17754;
if(cljs.core.chunked_seq_QMARK_(seq__17710_17755__$1)){
var c__7616__auto___17756 = cljs.core.chunk_first(seq__17710_17755__$1);
var G__17757 = cljs.core.chunk_rest(seq__17710_17755__$1);
var G__17758 = c__7616__auto___17756;
var G__17759 = cljs.core.count(c__7616__auto___17756);
var G__17760 = (0);
seq__17710_17745 = G__17757;
chunk__17711_17746 = G__17758;
count__17712_17747 = G__17759;
i__17713_17748 = G__17760;
continue;
} else {
var fld_17761 = cljs.core.first(seq__17710_17755__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_17761," = ",fld_17761,";"], 0));

var G__17762 = cljs.core.next(seq__17710_17755__$1);
var G__17763 = null;
var G__17764 = (0);
var G__17765 = (0);
seq__17710_17745 = G__17762;
chunk__17711_17746 = G__17763;
count__17712_17747 = G__17764;
i__17713_17748 = G__17765;
continue;
}
} else {
}
}
break;
}

var seq__17714_17766 = cljs.core.seq(pmasks);
var chunk__17715_17767 = null;
var count__17716_17768 = (0);
var i__17717_17769 = (0);
while(true){
if((i__17717_17769 < count__17716_17768)){
var vec__17718_17770 = chunk__17715_17767.cljs$core$IIndexed$_nth$arity$2(null,i__17717_17769);
var pno_17771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718_17770,(0),null);
var pmask_17772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17718_17770,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_17771,"$ = ",pmask_17772,";"], 0));

var G__17773 = seq__17714_17766;
var G__17774 = chunk__17715_17767;
var G__17775 = count__17716_17768;
var G__17776 = (i__17717_17769 + (1));
seq__17714_17766 = G__17773;
chunk__17715_17767 = G__17774;
count__17716_17768 = G__17775;
i__17717_17769 = G__17776;
continue;
} else {
var temp__4657__auto___17777 = cljs.core.seq(seq__17714_17766);
if(temp__4657__auto___17777){
var seq__17714_17778__$1 = temp__4657__auto___17777;
if(cljs.core.chunked_seq_QMARK_(seq__17714_17778__$1)){
var c__7616__auto___17779 = cljs.core.chunk_first(seq__17714_17778__$1);
var G__17780 = cljs.core.chunk_rest(seq__17714_17778__$1);
var G__17781 = c__7616__auto___17779;
var G__17782 = cljs.core.count(c__7616__auto___17779);
var G__17783 = (0);
seq__17714_17766 = G__17780;
chunk__17715_17767 = G__17781;
count__17716_17768 = G__17782;
i__17717_17769 = G__17783;
continue;
} else {
var vec__17721_17784 = cljs.core.first(seq__17714_17778__$1);
var pno_17785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17721_17784,(0),null);
var pmask_17786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17721_17784,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_17785,"$ = ",pmask_17786,";"], 0));

var G__17787 = cljs.core.next(seq__17714_17778__$1);
var G__17788 = null;
var G__17789 = (0);
var G__17790 = (0);
seq__17714_17766 = G__17787;
chunk__17715_17767 = G__17788;
count__17716_17768 = G__17789;
i__17717_17769 = G__17790;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__17791){
var map__17792 = p__17791;
var map__17792__$1 = ((((!((map__17792 == null)))?((((map__17792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17792):map__17792);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17792__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17792__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17792__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17792__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17792__$1,cljs.core.cst$kw$env);
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__17794){
var map__17795 = p__17794;
var map__17795__$1 = ((((!((map__17795 == null)))?((((map__17795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17795):map__17795);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17795__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17795__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17795__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17795__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17795__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__6785__auto__ = code;
if(cljs.core.truth_(and__6785__auto__)){
var G__17797 = clojure.string.trim(code);
var G__17798 = "/*";
return goog.string.startsWith(G__17797,G__17798);
} else {
return and__6785__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
var env__16649__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__16649__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));

var seq__17811 = cljs.core.seq(table);
var chunk__17812 = null;
var count__17813 = (0);
var i__17814 = (0);
while(true){
if((i__17814 < count__17813)){
var vec__17815 = chunk__17812.cljs$core$IIndexed$_nth$arity$2(null,i__17814);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17815,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17815,(1),null);
var ns_17821 = cljs.core.namespace(sym);
var name_17822 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__17823 = seq__17811;
var G__17824 = chunk__17812;
var G__17825 = count__17813;
var G__17826 = (i__17814 + (1));
seq__17811 = G__17823;
chunk__17812 = G__17824;
count__17813 = G__17825;
i__17814 = G__17826;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__17811);
if(temp__4657__auto__){
var seq__17811__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17811__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__17811__$1);
var G__17827 = cljs.core.chunk_rest(seq__17811__$1);
var G__17828 = c__7616__auto__;
var G__17829 = cljs.core.count(c__7616__auto__);
var G__17830 = (0);
seq__17811 = G__17827;
chunk__17812 = G__17828;
count__17813 = G__17829;
i__17814 = G__17830;
continue;
} else {
var vec__17818 = cljs.core.first(seq__17811__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17818,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17818,(1),null);
var ns_17831 = cljs.core.namespace(sym);
var name_17832 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__17833 = cljs.core.next(seq__17811__$1);
var G__17834 = null;
var G__17835 = (0);
var G__17836 = (0);
seq__17811 = G__17833;
chunk__17812 = G__17834;
count__17813 = G__17835;
i__17814 = G__17836;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var args17837 = [];
var len__7910__auto___17844 = arguments.length;
var i__7911__auto___17845 = (0);
while(true){
if((i__7911__auto___17845 < len__7910__auto___17844)){
args17837.push((arguments[i__7911__auto___17845]));

var G__17846 = (i__7911__auto___17845 + (1));
i__7911__auto___17845 = G__17846;
continue;
} else {
}
break;
}

var G__17839 = args17837.length;
switch (G__17839) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17837.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,(function (){var G__17840 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17840) : cljs.core.atom.call(null,G__17840));
})(),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_17848 = cljs.core.first(ks);
var vec__17841_17849 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_17848);
var top_17850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17841_17849,(0),null);
var prefix_SINGLEQUOTE__17851 = vec__17841_17849;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_17848)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__17851) == null))){
if(!((cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(top_level) : cljs.core.deref.call(null,top_level)),top_17850)) || (cljs.core.contains_QMARK_(known_externs,top_17850)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__17851)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_17850);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__17851)),";"], 0));
}
} else {
}

var m_17852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_17848);
if(cljs.core.empty_QMARK_(m_17852)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__17851,m_17852,top_level,known_externs);
}

var G__17853 = cljs.core.next(ks);
ks = G__17853;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

