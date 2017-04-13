// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__15832){
var vec__15833 = p__15832;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15833,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__15839 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15839,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4657__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__15848 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(4),null);
var vec__15851 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6797__auto__ = source;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6797__auto__ = line;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6797__auto__ = col;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6797__auto__ = name;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__15856 = segmap;
var map__15856__$1 = ((((!((map__15856 == null)))?((((map__15856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15856):map__15856);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15856,map__15856__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15856,map__15856__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15856,map__15856__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__15856,map__15856__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15856,map__15856__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__15856,map__15856__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args15858 = [];
var len__7910__auto___15864 = arguments.length;
var i__7911__auto___15865 = (0);
while(true){
if((i__7911__auto___15865 < len__7910__auto___15864)){
args15858.push((arguments[i__7911__auto___15865]));

var G__15866 = (i__7911__auto___15865 + (1));
i__7911__auto___15865 = G__15866;
continue;
} else {
}
break;
}

var G__15860 = args15858.length;
switch (G__15860) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15858.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__15861 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15868 = cljs.core.next(segs__$1);
var G__15869 = nrelseg;
var G__15870 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15868;
relseg__$1 = G__15869;
result__$1 = G__15870;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15861,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15861,(1),null);
var G__15871 = (gline + (1));
var G__15872 = cljs.core.next(lines__$1);
var G__15873 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15874 = result__$1;
gline = G__15871;
lines__$1 = G__15872;
relseg = G__15873;
result = G__15874;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__15878 = segmap;
var map__15878__$1 = ((((!((map__15878 == null)))?((((map__15878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15878):map__15878);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15878,map__15878__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__15878,map__15878__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__15875_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15875_SHARP_,d__$1);
});})(map__15878,map__15878__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__15878,map__15878__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args15880 = [];
var len__7910__auto___15886 = arguments.length;
var i__7911__auto___15887 = (0);
while(true){
if((i__7911__auto___15887 < len__7910__auto___15886)){
args15880.push((arguments[i__7911__auto___15887]));

var G__15888 = (i__7911__auto___15887 + (1));
i__7911__auto___15887 = G__15888;
continue;
} else {
}
break;
}

var G__15882 = args15880.length;
switch (G__15882) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15880.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__15883 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15890 = cljs.core.next(segs__$1);
var G__15891 = nrelseg;
var G__15892 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15890;
relseg__$1 = G__15891;
result__$1 = G__15892;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15883,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15883,(1),null);
var G__15893 = (gline + (1));
var G__15894 = cljs.core.next(lines__$1);
var G__15895 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15896 = result__$1;
gline = G__15893;
lines__$1 = G__15894;
relseg = G__15895;
result = G__15896;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__15910 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15910) : cljs.core.atom.call(null,G__15910));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__15911){
var vec__15912 = p__15911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15912,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15912,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15912,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15912,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15912,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__15915){
var vec__15916 = p__15915;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15916,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15916,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15916,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15916,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15916,(4),null);
var seg = vec__15916;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__15916,gcol,sidx,line,col,name,seg,relseg){
return (function (p__15919){
var vec__15920 = p__15919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15920,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15920,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15920,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15920,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15920,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6797__auto__ = name;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__15916,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__16013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16013) : cljs.core.atom.call(null,G__16013));
})();
var names__GT_idx = (function (){var G__16014 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16014) : cljs.core.atom.call(null,G__16014));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__6797__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__16015 = cljs.core.seq(infos);
var chunk__16016 = null;
var count__16017 = (0);
var i__16018 = (0);
while(true){
if((i__16018 < count__16017)){
var info = chunk__16016.cljs$core$IIndexed$_nth$arity$2(null,i__16018);
var segv_16100 = info__GT_segv(info,source_idx,line,col);
var gline_16101 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_16102 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_16101 > (lc_16102 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16015,chunk__16016,count__16017,i__16018,segv_16100,gline_16101,lc_16102,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16101 - (lc_16102 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16100], null));
});})(seq__16015,chunk__16016,count__16017,i__16018,segv_16100,gline_16101,lc_16102,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16015,chunk__16016,count__16017,i__16018,segv_16100,gline_16101,lc_16102,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16101], null),cljs.core.conj,segv_16100);
});})(seq__16015,chunk__16016,count__16017,i__16018,segv_16100,gline_16101,lc_16102,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16103 = seq__16015;
var G__16104 = chunk__16016;
var G__16105 = count__16017;
var G__16106 = (i__16018 + (1));
seq__16015 = G__16103;
chunk__16016 = G__16104;
count__16017 = G__16105;
i__16018 = G__16106;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16015);
if(temp__4657__auto__){
var seq__16015__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16015__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__16015__$1);
var G__16107 = cljs.core.chunk_rest(seq__16015__$1);
var G__16108 = c__7616__auto__;
var G__16109 = cljs.core.count(c__7616__auto__);
var G__16110 = (0);
seq__16015 = G__16107;
chunk__16016 = G__16108;
count__16017 = G__16109;
i__16018 = G__16110;
continue;
} else {
var info = cljs.core.first(seq__16015__$1);
var segv_16111 = info__GT_segv(info,source_idx,line,col);
var gline_16112 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_16113 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_16112 > (lc_16113 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16015,chunk__16016,count__16017,i__16018,segv_16111,gline_16112,lc_16113,info,seq__16015__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_16112 - (lc_16113 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_16111], null));
});})(seq__16015,chunk__16016,count__16017,i__16018,segv_16111,gline_16112,lc_16113,info,seq__16015__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16015,chunk__16016,count__16017,i__16018,segv_16111,gline_16112,lc_16113,info,seq__16015__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16112], null),cljs.core.conj,segv_16111);
});})(seq__16015,chunk__16016,count__16017,i__16018,segv_16111,gline_16112,lc_16113,info,seq__16015__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__16114 = cljs.core.next(seq__16015__$1);
var G__16115 = null;
var G__16116 = (0);
var G__16117 = (0);
seq__16015 = G__16114;
chunk__16016 = G__16115;
count__16017 = G__16116;
i__16018 = G__16117;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__16019_16118 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__16020_16119 = null;
var count__16021_16120 = (0);
var i__16022_16121 = (0);
while(true){
if((i__16022_16121 < count__16021_16120)){
var vec__16023_16122 = chunk__16020_16119.cljs$core$IIndexed$_nth$arity$2(null,i__16022_16121);
var source_idx_16123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16023_16122,(0),null);
var vec__16026_16124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16023_16122,(1),null);
var __16125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026_16124,(0),null);
var lines_16126__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026_16124,(1),null);
var seq__16029_16127 = cljs.core.seq(lines_16126__$1);
var chunk__16030_16128 = null;
var count__16031_16129 = (0);
var i__16032_16130 = (0);
while(true){
if((i__16032_16130 < count__16031_16129)){
var vec__16033_16131 = chunk__16030_16128.cljs$core$IIndexed$_nth$arity$2(null,i__16032_16130);
var line_16132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16033_16131,(0),null);
var cols_16133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16033_16131,(1),null);
var seq__16036_16134 = cljs.core.seq(cols_16133);
var chunk__16037_16135 = null;
var count__16038_16136 = (0);
var i__16039_16137 = (0);
while(true){
if((i__16039_16137 < count__16038_16136)){
var vec__16040_16138 = chunk__16037_16135.cljs$core$IIndexed$_nth$arity$2(null,i__16039_16137);
var col_16139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16040_16138,(0),null);
var infos_16140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16040_16138,(1),null);
encode_cols(infos_16140,source_idx_16123,line_16132,col_16139);

var G__16141 = seq__16036_16134;
var G__16142 = chunk__16037_16135;
var G__16143 = count__16038_16136;
var G__16144 = (i__16039_16137 + (1));
seq__16036_16134 = G__16141;
chunk__16037_16135 = G__16142;
count__16038_16136 = G__16143;
i__16039_16137 = G__16144;
continue;
} else {
var temp__4657__auto___16145 = cljs.core.seq(seq__16036_16134);
if(temp__4657__auto___16145){
var seq__16036_16146__$1 = temp__4657__auto___16145;
if(cljs.core.chunked_seq_QMARK_(seq__16036_16146__$1)){
var c__7616__auto___16147 = cljs.core.chunk_first(seq__16036_16146__$1);
var G__16148 = cljs.core.chunk_rest(seq__16036_16146__$1);
var G__16149 = c__7616__auto___16147;
var G__16150 = cljs.core.count(c__7616__auto___16147);
var G__16151 = (0);
seq__16036_16134 = G__16148;
chunk__16037_16135 = G__16149;
count__16038_16136 = G__16150;
i__16039_16137 = G__16151;
continue;
} else {
var vec__16043_16152 = cljs.core.first(seq__16036_16146__$1);
var col_16153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16043_16152,(0),null);
var infos_16154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16043_16152,(1),null);
encode_cols(infos_16154,source_idx_16123,line_16132,col_16153);

var G__16155 = cljs.core.next(seq__16036_16146__$1);
var G__16156 = null;
var G__16157 = (0);
var G__16158 = (0);
seq__16036_16134 = G__16155;
chunk__16037_16135 = G__16156;
count__16038_16136 = G__16157;
i__16039_16137 = G__16158;
continue;
}
} else {
}
}
break;
}

var G__16159 = seq__16029_16127;
var G__16160 = chunk__16030_16128;
var G__16161 = count__16031_16129;
var G__16162 = (i__16032_16130 + (1));
seq__16029_16127 = G__16159;
chunk__16030_16128 = G__16160;
count__16031_16129 = G__16161;
i__16032_16130 = G__16162;
continue;
} else {
var temp__4657__auto___16163 = cljs.core.seq(seq__16029_16127);
if(temp__4657__auto___16163){
var seq__16029_16164__$1 = temp__4657__auto___16163;
if(cljs.core.chunked_seq_QMARK_(seq__16029_16164__$1)){
var c__7616__auto___16165 = cljs.core.chunk_first(seq__16029_16164__$1);
var G__16166 = cljs.core.chunk_rest(seq__16029_16164__$1);
var G__16167 = c__7616__auto___16165;
var G__16168 = cljs.core.count(c__7616__auto___16165);
var G__16169 = (0);
seq__16029_16127 = G__16166;
chunk__16030_16128 = G__16167;
count__16031_16129 = G__16168;
i__16032_16130 = G__16169;
continue;
} else {
var vec__16046_16170 = cljs.core.first(seq__16029_16164__$1);
var line_16171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16046_16170,(0),null);
var cols_16172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16046_16170,(1),null);
var seq__16049_16173 = cljs.core.seq(cols_16172);
var chunk__16050_16174 = null;
var count__16051_16175 = (0);
var i__16052_16176 = (0);
while(true){
if((i__16052_16176 < count__16051_16175)){
var vec__16053_16177 = chunk__16050_16174.cljs$core$IIndexed$_nth$arity$2(null,i__16052_16176);
var col_16178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053_16177,(0),null);
var infos_16179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053_16177,(1),null);
encode_cols(infos_16179,source_idx_16123,line_16171,col_16178);

var G__16180 = seq__16049_16173;
var G__16181 = chunk__16050_16174;
var G__16182 = count__16051_16175;
var G__16183 = (i__16052_16176 + (1));
seq__16049_16173 = G__16180;
chunk__16050_16174 = G__16181;
count__16051_16175 = G__16182;
i__16052_16176 = G__16183;
continue;
} else {
var temp__4657__auto___16184__$1 = cljs.core.seq(seq__16049_16173);
if(temp__4657__auto___16184__$1){
var seq__16049_16185__$1 = temp__4657__auto___16184__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16049_16185__$1)){
var c__7616__auto___16186 = cljs.core.chunk_first(seq__16049_16185__$1);
var G__16187 = cljs.core.chunk_rest(seq__16049_16185__$1);
var G__16188 = c__7616__auto___16186;
var G__16189 = cljs.core.count(c__7616__auto___16186);
var G__16190 = (0);
seq__16049_16173 = G__16187;
chunk__16050_16174 = G__16188;
count__16051_16175 = G__16189;
i__16052_16176 = G__16190;
continue;
} else {
var vec__16056_16191 = cljs.core.first(seq__16049_16185__$1);
var col_16192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16056_16191,(0),null);
var infos_16193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16056_16191,(1),null);
encode_cols(infos_16193,source_idx_16123,line_16171,col_16192);

var G__16194 = cljs.core.next(seq__16049_16185__$1);
var G__16195 = null;
var G__16196 = (0);
var G__16197 = (0);
seq__16049_16173 = G__16194;
chunk__16050_16174 = G__16195;
count__16051_16175 = G__16196;
i__16052_16176 = G__16197;
continue;
}
} else {
}
}
break;
}

var G__16198 = cljs.core.next(seq__16029_16164__$1);
var G__16199 = null;
var G__16200 = (0);
var G__16201 = (0);
seq__16029_16127 = G__16198;
chunk__16030_16128 = G__16199;
count__16031_16129 = G__16200;
i__16032_16130 = G__16201;
continue;
}
} else {
}
}
break;
}

var G__16202 = seq__16019_16118;
var G__16203 = chunk__16020_16119;
var G__16204 = count__16021_16120;
var G__16205 = (i__16022_16121 + (1));
seq__16019_16118 = G__16202;
chunk__16020_16119 = G__16203;
count__16021_16120 = G__16204;
i__16022_16121 = G__16205;
continue;
} else {
var temp__4657__auto___16206 = cljs.core.seq(seq__16019_16118);
if(temp__4657__auto___16206){
var seq__16019_16207__$1 = temp__4657__auto___16206;
if(cljs.core.chunked_seq_QMARK_(seq__16019_16207__$1)){
var c__7616__auto___16208 = cljs.core.chunk_first(seq__16019_16207__$1);
var G__16209 = cljs.core.chunk_rest(seq__16019_16207__$1);
var G__16210 = c__7616__auto___16208;
var G__16211 = cljs.core.count(c__7616__auto___16208);
var G__16212 = (0);
seq__16019_16118 = G__16209;
chunk__16020_16119 = G__16210;
count__16021_16120 = G__16211;
i__16022_16121 = G__16212;
continue;
} else {
var vec__16059_16213 = cljs.core.first(seq__16019_16207__$1);
var source_idx_16214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059_16213,(0),null);
var vec__16062_16215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16059_16213,(1),null);
var __16216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16062_16215,(0),null);
var lines_16217__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16062_16215,(1),null);
var seq__16065_16218 = cljs.core.seq(lines_16217__$1);
var chunk__16066_16219 = null;
var count__16067_16220 = (0);
var i__16068_16221 = (0);
while(true){
if((i__16068_16221 < count__16067_16220)){
var vec__16069_16222 = chunk__16066_16219.cljs$core$IIndexed$_nth$arity$2(null,i__16068_16221);
var line_16223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069_16222,(0),null);
var cols_16224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069_16222,(1),null);
var seq__16072_16225 = cljs.core.seq(cols_16224);
var chunk__16073_16226 = null;
var count__16074_16227 = (0);
var i__16075_16228 = (0);
while(true){
if((i__16075_16228 < count__16074_16227)){
var vec__16076_16229 = chunk__16073_16226.cljs$core$IIndexed$_nth$arity$2(null,i__16075_16228);
var col_16230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16076_16229,(0),null);
var infos_16231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16076_16229,(1),null);
encode_cols(infos_16231,source_idx_16214,line_16223,col_16230);

var G__16232 = seq__16072_16225;
var G__16233 = chunk__16073_16226;
var G__16234 = count__16074_16227;
var G__16235 = (i__16075_16228 + (1));
seq__16072_16225 = G__16232;
chunk__16073_16226 = G__16233;
count__16074_16227 = G__16234;
i__16075_16228 = G__16235;
continue;
} else {
var temp__4657__auto___16236__$1 = cljs.core.seq(seq__16072_16225);
if(temp__4657__auto___16236__$1){
var seq__16072_16237__$1 = temp__4657__auto___16236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16072_16237__$1)){
var c__7616__auto___16238 = cljs.core.chunk_first(seq__16072_16237__$1);
var G__16239 = cljs.core.chunk_rest(seq__16072_16237__$1);
var G__16240 = c__7616__auto___16238;
var G__16241 = cljs.core.count(c__7616__auto___16238);
var G__16242 = (0);
seq__16072_16225 = G__16239;
chunk__16073_16226 = G__16240;
count__16074_16227 = G__16241;
i__16075_16228 = G__16242;
continue;
} else {
var vec__16079_16243 = cljs.core.first(seq__16072_16237__$1);
var col_16244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16079_16243,(0),null);
var infos_16245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16079_16243,(1),null);
encode_cols(infos_16245,source_idx_16214,line_16223,col_16244);

var G__16246 = cljs.core.next(seq__16072_16237__$1);
var G__16247 = null;
var G__16248 = (0);
var G__16249 = (0);
seq__16072_16225 = G__16246;
chunk__16073_16226 = G__16247;
count__16074_16227 = G__16248;
i__16075_16228 = G__16249;
continue;
}
} else {
}
}
break;
}

var G__16250 = seq__16065_16218;
var G__16251 = chunk__16066_16219;
var G__16252 = count__16067_16220;
var G__16253 = (i__16068_16221 + (1));
seq__16065_16218 = G__16250;
chunk__16066_16219 = G__16251;
count__16067_16220 = G__16252;
i__16068_16221 = G__16253;
continue;
} else {
var temp__4657__auto___16254__$1 = cljs.core.seq(seq__16065_16218);
if(temp__4657__auto___16254__$1){
var seq__16065_16255__$1 = temp__4657__auto___16254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16065_16255__$1)){
var c__7616__auto___16256 = cljs.core.chunk_first(seq__16065_16255__$1);
var G__16257 = cljs.core.chunk_rest(seq__16065_16255__$1);
var G__16258 = c__7616__auto___16256;
var G__16259 = cljs.core.count(c__7616__auto___16256);
var G__16260 = (0);
seq__16065_16218 = G__16257;
chunk__16066_16219 = G__16258;
count__16067_16220 = G__16259;
i__16068_16221 = G__16260;
continue;
} else {
var vec__16082_16261 = cljs.core.first(seq__16065_16255__$1);
var line_16262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16082_16261,(0),null);
var cols_16263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16082_16261,(1),null);
var seq__16085_16264 = cljs.core.seq(cols_16263);
var chunk__16086_16265 = null;
var count__16087_16266 = (0);
var i__16088_16267 = (0);
while(true){
if((i__16088_16267 < count__16087_16266)){
var vec__16089_16268 = chunk__16086_16265.cljs$core$IIndexed$_nth$arity$2(null,i__16088_16267);
var col_16269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16089_16268,(0),null);
var infos_16270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16089_16268,(1),null);
encode_cols(infos_16270,source_idx_16214,line_16262,col_16269);

var G__16271 = seq__16085_16264;
var G__16272 = chunk__16086_16265;
var G__16273 = count__16087_16266;
var G__16274 = (i__16088_16267 + (1));
seq__16085_16264 = G__16271;
chunk__16086_16265 = G__16272;
count__16087_16266 = G__16273;
i__16088_16267 = G__16274;
continue;
} else {
var temp__4657__auto___16275__$2 = cljs.core.seq(seq__16085_16264);
if(temp__4657__auto___16275__$2){
var seq__16085_16276__$1 = temp__4657__auto___16275__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16085_16276__$1)){
var c__7616__auto___16277 = cljs.core.chunk_first(seq__16085_16276__$1);
var G__16278 = cljs.core.chunk_rest(seq__16085_16276__$1);
var G__16279 = c__7616__auto___16277;
var G__16280 = cljs.core.count(c__7616__auto___16277);
var G__16281 = (0);
seq__16085_16264 = G__16278;
chunk__16086_16265 = G__16279;
count__16087_16266 = G__16280;
i__16088_16267 = G__16281;
continue;
} else {
var vec__16092_16282 = cljs.core.first(seq__16085_16276__$1);
var col_16283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092_16282,(0),null);
var infos_16284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16092_16282,(1),null);
encode_cols(infos_16284,source_idx_16214,line_16262,col_16283);

var G__16285 = cljs.core.next(seq__16085_16276__$1);
var G__16286 = null;
var G__16287 = (0);
var G__16288 = (0);
seq__16085_16264 = G__16285;
chunk__16086_16265 = G__16286;
count__16087_16266 = G__16287;
i__16088_16267 = G__16288;
continue;
}
} else {
}
}
break;
}

var G__16289 = cljs.core.next(seq__16065_16255__$1);
var G__16290 = null;
var G__16291 = (0);
var G__16292 = (0);
seq__16065_16218 = G__16289;
chunk__16066_16219 = G__16290;
count__16067_16220 = G__16291;
i__16068_16221 = G__16292;
continue;
}
} else {
}
}
break;
}

var G__16293 = cljs.core.next(seq__16019_16207__$1);
var G__16294 = null;
var G__16295 = (0);
var G__16296 = (0);
seq__16019_16118 = G__16293;
chunk__16020_16119 = G__16294;
count__16021_16120 = G__16295;
i__16022_16121 = G__16296;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16095 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15923_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15923_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15924_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__15924_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__15925_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__15925_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__16096 = G__16095;
var G__16097_16297 = G__16096;
var G__16098_16298 = "sourcesContent";
var G__16099_16299 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__16097_16297,G__16098_16298,G__16099_16299);

return G__16096;
} else {
return G__16095;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__16309 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16309,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16309,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__16312 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16312,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16312,(1),null);
var G__16318 = cljs.core.next(col_map_seq);
var G__16319 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16312,col,infos,vec__16309,line,col_map){
return (function (v,p__16315){
var map__16316 = p__16315;
var map__16316__$1 = ((((!((map__16316 == null)))?((((map__16316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16316):map__16316);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16316__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16316__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16312,col,infos,vec__16309,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__16318;
new_cols = G__16319;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__16320 = cljs.core.next(line_map_seq);
var G__16321 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__16320;
new_lines = G__16321;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__16385 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16385) : cljs.core.atom.call(null,G__16385));
})();
var seq__16386_16448 = cljs.core.seq(reverse_map);
var chunk__16387_16449 = null;
var count__16388_16450 = (0);
var i__16389_16451 = (0);
while(true){
if((i__16389_16451 < count__16388_16450)){
var vec__16390_16452 = chunk__16387_16449.cljs$core$IIndexed$_nth$arity$2(null,i__16389_16451);
var line_16453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390_16452,(0),null);
var columns_16454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16390_16452,(1),null);
var seq__16393_16455 = cljs.core.seq(columns_16454);
var chunk__16394_16456 = null;
var count__16395_16457 = (0);
var i__16396_16458 = (0);
while(true){
if((i__16396_16458 < count__16395_16457)){
var vec__16397_16459 = chunk__16394_16456.cljs$core$IIndexed$_nth$arity$2(null,i__16396_16458);
var column_16460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16397_16459,(0),null);
var column_info_16461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16397_16459,(1),null);
var seq__16400_16462 = cljs.core.seq(column_info_16461);
var chunk__16401_16463 = null;
var count__16402_16464 = (0);
var i__16403_16465 = (0);
while(true){
if((i__16403_16465 < count__16402_16464)){
var map__16404_16466 = chunk__16401_16463.cljs$core$IIndexed$_nth$arity$2(null,i__16403_16465);
var map__16404_16467__$1 = ((((!((map__16404_16466 == null)))?((((map__16404_16466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16404_16466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16404_16466):map__16404_16466);
var gline_16468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16404_16467__$1,cljs.core.cst$kw$gline);
var gcol_16469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16404_16467__$1,cljs.core.cst$kw$gcol);
var name_16470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16404_16467__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16468], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16400_16462,chunk__16401_16463,count__16402_16464,i__16403_16465,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16404_16466,map__16404_16467__$1,gline_16468,gcol_16469,name_16470,vec__16397_16459,column_16460,column_info_16461,vec__16390_16452,line_16453,columns_16454,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16469], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16453,cljs.core.cst$kw$col,column_16460,cljs.core.cst$kw$name,name_16470], null));
});})(seq__16400_16462,chunk__16401_16463,count__16402_16464,i__16403_16465,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16404_16466,map__16404_16467__$1,gline_16468,gcol_16469,name_16470,vec__16397_16459,column_16460,column_info_16461,vec__16390_16452,line_16453,columns_16454,inverted))
,cljs.core.sorted_map()));

var G__16471 = seq__16400_16462;
var G__16472 = chunk__16401_16463;
var G__16473 = count__16402_16464;
var G__16474 = (i__16403_16465 + (1));
seq__16400_16462 = G__16471;
chunk__16401_16463 = G__16472;
count__16402_16464 = G__16473;
i__16403_16465 = G__16474;
continue;
} else {
var temp__4657__auto___16475 = cljs.core.seq(seq__16400_16462);
if(temp__4657__auto___16475){
var seq__16400_16476__$1 = temp__4657__auto___16475;
if(cljs.core.chunked_seq_QMARK_(seq__16400_16476__$1)){
var c__7616__auto___16477 = cljs.core.chunk_first(seq__16400_16476__$1);
var G__16478 = cljs.core.chunk_rest(seq__16400_16476__$1);
var G__16479 = c__7616__auto___16477;
var G__16480 = cljs.core.count(c__7616__auto___16477);
var G__16481 = (0);
seq__16400_16462 = G__16478;
chunk__16401_16463 = G__16479;
count__16402_16464 = G__16480;
i__16403_16465 = G__16481;
continue;
} else {
var map__16406_16482 = cljs.core.first(seq__16400_16476__$1);
var map__16406_16483__$1 = ((((!((map__16406_16482 == null)))?((((map__16406_16482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16406_16482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16406_16482):map__16406_16482);
var gline_16484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406_16483__$1,cljs.core.cst$kw$gline);
var gcol_16485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406_16483__$1,cljs.core.cst$kw$gcol);
var name_16486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406_16483__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16484], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16400_16462,chunk__16401_16463,count__16402_16464,i__16403_16465,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16406_16482,map__16406_16483__$1,gline_16484,gcol_16485,name_16486,seq__16400_16476__$1,temp__4657__auto___16475,vec__16397_16459,column_16460,column_info_16461,vec__16390_16452,line_16453,columns_16454,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16485], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16453,cljs.core.cst$kw$col,column_16460,cljs.core.cst$kw$name,name_16486], null));
});})(seq__16400_16462,chunk__16401_16463,count__16402_16464,i__16403_16465,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16406_16482,map__16406_16483__$1,gline_16484,gcol_16485,name_16486,seq__16400_16476__$1,temp__4657__auto___16475,vec__16397_16459,column_16460,column_info_16461,vec__16390_16452,line_16453,columns_16454,inverted))
,cljs.core.sorted_map()));

var G__16487 = cljs.core.next(seq__16400_16476__$1);
var G__16488 = null;
var G__16489 = (0);
var G__16490 = (0);
seq__16400_16462 = G__16487;
chunk__16401_16463 = G__16488;
count__16402_16464 = G__16489;
i__16403_16465 = G__16490;
continue;
}
} else {
}
}
break;
}

var G__16491 = seq__16393_16455;
var G__16492 = chunk__16394_16456;
var G__16493 = count__16395_16457;
var G__16494 = (i__16396_16458 + (1));
seq__16393_16455 = G__16491;
chunk__16394_16456 = G__16492;
count__16395_16457 = G__16493;
i__16396_16458 = G__16494;
continue;
} else {
var temp__4657__auto___16495 = cljs.core.seq(seq__16393_16455);
if(temp__4657__auto___16495){
var seq__16393_16496__$1 = temp__4657__auto___16495;
if(cljs.core.chunked_seq_QMARK_(seq__16393_16496__$1)){
var c__7616__auto___16497 = cljs.core.chunk_first(seq__16393_16496__$1);
var G__16498 = cljs.core.chunk_rest(seq__16393_16496__$1);
var G__16499 = c__7616__auto___16497;
var G__16500 = cljs.core.count(c__7616__auto___16497);
var G__16501 = (0);
seq__16393_16455 = G__16498;
chunk__16394_16456 = G__16499;
count__16395_16457 = G__16500;
i__16396_16458 = G__16501;
continue;
} else {
var vec__16408_16502 = cljs.core.first(seq__16393_16496__$1);
var column_16503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16408_16502,(0),null);
var column_info_16504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16408_16502,(1),null);
var seq__16411_16505 = cljs.core.seq(column_info_16504);
var chunk__16412_16506 = null;
var count__16413_16507 = (0);
var i__16414_16508 = (0);
while(true){
if((i__16414_16508 < count__16413_16507)){
var map__16415_16509 = chunk__16412_16506.cljs$core$IIndexed$_nth$arity$2(null,i__16414_16508);
var map__16415_16510__$1 = ((((!((map__16415_16509 == null)))?((((map__16415_16509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16415_16509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16415_16509):map__16415_16509);
var gline_16511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16415_16510__$1,cljs.core.cst$kw$gline);
var gcol_16512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16415_16510__$1,cljs.core.cst$kw$gcol);
var name_16513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16415_16510__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16511], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16411_16505,chunk__16412_16506,count__16413_16507,i__16414_16508,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16415_16509,map__16415_16510__$1,gline_16511,gcol_16512,name_16513,vec__16408_16502,column_16503,column_info_16504,seq__16393_16496__$1,temp__4657__auto___16495,vec__16390_16452,line_16453,columns_16454,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16512], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16453,cljs.core.cst$kw$col,column_16503,cljs.core.cst$kw$name,name_16513], null));
});})(seq__16411_16505,chunk__16412_16506,count__16413_16507,i__16414_16508,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16415_16509,map__16415_16510__$1,gline_16511,gcol_16512,name_16513,vec__16408_16502,column_16503,column_info_16504,seq__16393_16496__$1,temp__4657__auto___16495,vec__16390_16452,line_16453,columns_16454,inverted))
,cljs.core.sorted_map()));

var G__16514 = seq__16411_16505;
var G__16515 = chunk__16412_16506;
var G__16516 = count__16413_16507;
var G__16517 = (i__16414_16508 + (1));
seq__16411_16505 = G__16514;
chunk__16412_16506 = G__16515;
count__16413_16507 = G__16516;
i__16414_16508 = G__16517;
continue;
} else {
var temp__4657__auto___16518__$1 = cljs.core.seq(seq__16411_16505);
if(temp__4657__auto___16518__$1){
var seq__16411_16519__$1 = temp__4657__auto___16518__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16411_16519__$1)){
var c__7616__auto___16520 = cljs.core.chunk_first(seq__16411_16519__$1);
var G__16521 = cljs.core.chunk_rest(seq__16411_16519__$1);
var G__16522 = c__7616__auto___16520;
var G__16523 = cljs.core.count(c__7616__auto___16520);
var G__16524 = (0);
seq__16411_16505 = G__16521;
chunk__16412_16506 = G__16522;
count__16413_16507 = G__16523;
i__16414_16508 = G__16524;
continue;
} else {
var map__16417_16525 = cljs.core.first(seq__16411_16519__$1);
var map__16417_16526__$1 = ((((!((map__16417_16525 == null)))?((((map__16417_16525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16417_16525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16417_16525):map__16417_16525);
var gline_16527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417_16526__$1,cljs.core.cst$kw$gline);
var gcol_16528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417_16526__$1,cljs.core.cst$kw$gcol);
var name_16529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16417_16526__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16527], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16411_16505,chunk__16412_16506,count__16413_16507,i__16414_16508,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16417_16525,map__16417_16526__$1,gline_16527,gcol_16528,name_16529,seq__16411_16519__$1,temp__4657__auto___16518__$1,vec__16408_16502,column_16503,column_info_16504,seq__16393_16496__$1,temp__4657__auto___16495,vec__16390_16452,line_16453,columns_16454,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16528], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16453,cljs.core.cst$kw$col,column_16503,cljs.core.cst$kw$name,name_16529], null));
});})(seq__16411_16505,chunk__16412_16506,count__16413_16507,i__16414_16508,seq__16393_16455,chunk__16394_16456,count__16395_16457,i__16396_16458,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16417_16525,map__16417_16526__$1,gline_16527,gcol_16528,name_16529,seq__16411_16519__$1,temp__4657__auto___16518__$1,vec__16408_16502,column_16503,column_info_16504,seq__16393_16496__$1,temp__4657__auto___16495,vec__16390_16452,line_16453,columns_16454,inverted))
,cljs.core.sorted_map()));

var G__16530 = cljs.core.next(seq__16411_16519__$1);
var G__16531 = null;
var G__16532 = (0);
var G__16533 = (0);
seq__16411_16505 = G__16530;
chunk__16412_16506 = G__16531;
count__16413_16507 = G__16532;
i__16414_16508 = G__16533;
continue;
}
} else {
}
}
break;
}

var G__16534 = cljs.core.next(seq__16393_16496__$1);
var G__16535 = null;
var G__16536 = (0);
var G__16537 = (0);
seq__16393_16455 = G__16534;
chunk__16394_16456 = G__16535;
count__16395_16457 = G__16536;
i__16396_16458 = G__16537;
continue;
}
} else {
}
}
break;
}

var G__16538 = seq__16386_16448;
var G__16539 = chunk__16387_16449;
var G__16540 = count__16388_16450;
var G__16541 = (i__16389_16451 + (1));
seq__16386_16448 = G__16538;
chunk__16387_16449 = G__16539;
count__16388_16450 = G__16540;
i__16389_16451 = G__16541;
continue;
} else {
var temp__4657__auto___16542 = cljs.core.seq(seq__16386_16448);
if(temp__4657__auto___16542){
var seq__16386_16543__$1 = temp__4657__auto___16542;
if(cljs.core.chunked_seq_QMARK_(seq__16386_16543__$1)){
var c__7616__auto___16544 = cljs.core.chunk_first(seq__16386_16543__$1);
var G__16545 = cljs.core.chunk_rest(seq__16386_16543__$1);
var G__16546 = c__7616__auto___16544;
var G__16547 = cljs.core.count(c__7616__auto___16544);
var G__16548 = (0);
seq__16386_16448 = G__16545;
chunk__16387_16449 = G__16546;
count__16388_16450 = G__16547;
i__16389_16451 = G__16548;
continue;
} else {
var vec__16419_16549 = cljs.core.first(seq__16386_16543__$1);
var line_16550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419_16549,(0),null);
var columns_16551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419_16549,(1),null);
var seq__16422_16552 = cljs.core.seq(columns_16551);
var chunk__16423_16553 = null;
var count__16424_16554 = (0);
var i__16425_16555 = (0);
while(true){
if((i__16425_16555 < count__16424_16554)){
var vec__16426_16556 = chunk__16423_16553.cljs$core$IIndexed$_nth$arity$2(null,i__16425_16555);
var column_16557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16426_16556,(0),null);
var column_info_16558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16426_16556,(1),null);
var seq__16429_16559 = cljs.core.seq(column_info_16558);
var chunk__16430_16560 = null;
var count__16431_16561 = (0);
var i__16432_16562 = (0);
while(true){
if((i__16432_16562 < count__16431_16561)){
var map__16433_16563 = chunk__16430_16560.cljs$core$IIndexed$_nth$arity$2(null,i__16432_16562);
var map__16433_16564__$1 = ((((!((map__16433_16563 == null)))?((((map__16433_16563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16433_16563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16433_16563):map__16433_16563);
var gline_16565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16433_16564__$1,cljs.core.cst$kw$gline);
var gcol_16566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16433_16564__$1,cljs.core.cst$kw$gcol);
var name_16567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16433_16564__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16565], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16429_16559,chunk__16430_16560,count__16431_16561,i__16432_16562,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16433_16563,map__16433_16564__$1,gline_16565,gcol_16566,name_16567,vec__16426_16556,column_16557,column_info_16558,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16566], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16550,cljs.core.cst$kw$col,column_16557,cljs.core.cst$kw$name,name_16567], null));
});})(seq__16429_16559,chunk__16430_16560,count__16431_16561,i__16432_16562,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16433_16563,map__16433_16564__$1,gline_16565,gcol_16566,name_16567,vec__16426_16556,column_16557,column_info_16558,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted))
,cljs.core.sorted_map()));

var G__16568 = seq__16429_16559;
var G__16569 = chunk__16430_16560;
var G__16570 = count__16431_16561;
var G__16571 = (i__16432_16562 + (1));
seq__16429_16559 = G__16568;
chunk__16430_16560 = G__16569;
count__16431_16561 = G__16570;
i__16432_16562 = G__16571;
continue;
} else {
var temp__4657__auto___16572__$1 = cljs.core.seq(seq__16429_16559);
if(temp__4657__auto___16572__$1){
var seq__16429_16573__$1 = temp__4657__auto___16572__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16429_16573__$1)){
var c__7616__auto___16574 = cljs.core.chunk_first(seq__16429_16573__$1);
var G__16575 = cljs.core.chunk_rest(seq__16429_16573__$1);
var G__16576 = c__7616__auto___16574;
var G__16577 = cljs.core.count(c__7616__auto___16574);
var G__16578 = (0);
seq__16429_16559 = G__16575;
chunk__16430_16560 = G__16576;
count__16431_16561 = G__16577;
i__16432_16562 = G__16578;
continue;
} else {
var map__16435_16579 = cljs.core.first(seq__16429_16573__$1);
var map__16435_16580__$1 = ((((!((map__16435_16579 == null)))?((((map__16435_16579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16435_16579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16435_16579):map__16435_16579);
var gline_16581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16435_16580__$1,cljs.core.cst$kw$gline);
var gcol_16582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16435_16580__$1,cljs.core.cst$kw$gcol);
var name_16583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16435_16580__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16581], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16429_16559,chunk__16430_16560,count__16431_16561,i__16432_16562,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16435_16579,map__16435_16580__$1,gline_16581,gcol_16582,name_16583,seq__16429_16573__$1,temp__4657__auto___16572__$1,vec__16426_16556,column_16557,column_info_16558,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16582], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16550,cljs.core.cst$kw$col,column_16557,cljs.core.cst$kw$name,name_16583], null));
});})(seq__16429_16559,chunk__16430_16560,count__16431_16561,i__16432_16562,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16435_16579,map__16435_16580__$1,gline_16581,gcol_16582,name_16583,seq__16429_16573__$1,temp__4657__auto___16572__$1,vec__16426_16556,column_16557,column_info_16558,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted))
,cljs.core.sorted_map()));

var G__16584 = cljs.core.next(seq__16429_16573__$1);
var G__16585 = null;
var G__16586 = (0);
var G__16587 = (0);
seq__16429_16559 = G__16584;
chunk__16430_16560 = G__16585;
count__16431_16561 = G__16586;
i__16432_16562 = G__16587;
continue;
}
} else {
}
}
break;
}

var G__16588 = seq__16422_16552;
var G__16589 = chunk__16423_16553;
var G__16590 = count__16424_16554;
var G__16591 = (i__16425_16555 + (1));
seq__16422_16552 = G__16588;
chunk__16423_16553 = G__16589;
count__16424_16554 = G__16590;
i__16425_16555 = G__16591;
continue;
} else {
var temp__4657__auto___16592__$1 = cljs.core.seq(seq__16422_16552);
if(temp__4657__auto___16592__$1){
var seq__16422_16593__$1 = temp__4657__auto___16592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16422_16593__$1)){
var c__7616__auto___16594 = cljs.core.chunk_first(seq__16422_16593__$1);
var G__16595 = cljs.core.chunk_rest(seq__16422_16593__$1);
var G__16596 = c__7616__auto___16594;
var G__16597 = cljs.core.count(c__7616__auto___16594);
var G__16598 = (0);
seq__16422_16552 = G__16595;
chunk__16423_16553 = G__16596;
count__16424_16554 = G__16597;
i__16425_16555 = G__16598;
continue;
} else {
var vec__16437_16599 = cljs.core.first(seq__16422_16593__$1);
var column_16600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16437_16599,(0),null);
var column_info_16601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16437_16599,(1),null);
var seq__16440_16602 = cljs.core.seq(column_info_16601);
var chunk__16441_16603 = null;
var count__16442_16604 = (0);
var i__16443_16605 = (0);
while(true){
if((i__16443_16605 < count__16442_16604)){
var map__16444_16606 = chunk__16441_16603.cljs$core$IIndexed$_nth$arity$2(null,i__16443_16605);
var map__16444_16607__$1 = ((((!((map__16444_16606 == null)))?((((map__16444_16606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16444_16606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16444_16606):map__16444_16606);
var gline_16608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16444_16607__$1,cljs.core.cst$kw$gline);
var gcol_16609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16444_16607__$1,cljs.core.cst$kw$gcol);
var name_16610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16444_16607__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16608], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16440_16602,chunk__16441_16603,count__16442_16604,i__16443_16605,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16444_16606,map__16444_16607__$1,gline_16608,gcol_16609,name_16610,vec__16437_16599,column_16600,column_info_16601,seq__16422_16593__$1,temp__4657__auto___16592__$1,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16609], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16550,cljs.core.cst$kw$col,column_16600,cljs.core.cst$kw$name,name_16610], null));
});})(seq__16440_16602,chunk__16441_16603,count__16442_16604,i__16443_16605,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16444_16606,map__16444_16607__$1,gline_16608,gcol_16609,name_16610,vec__16437_16599,column_16600,column_info_16601,seq__16422_16593__$1,temp__4657__auto___16592__$1,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted))
,cljs.core.sorted_map()));

var G__16611 = seq__16440_16602;
var G__16612 = chunk__16441_16603;
var G__16613 = count__16442_16604;
var G__16614 = (i__16443_16605 + (1));
seq__16440_16602 = G__16611;
chunk__16441_16603 = G__16612;
count__16442_16604 = G__16613;
i__16443_16605 = G__16614;
continue;
} else {
var temp__4657__auto___16615__$2 = cljs.core.seq(seq__16440_16602);
if(temp__4657__auto___16615__$2){
var seq__16440_16616__$1 = temp__4657__auto___16615__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16440_16616__$1)){
var c__7616__auto___16617 = cljs.core.chunk_first(seq__16440_16616__$1);
var G__16618 = cljs.core.chunk_rest(seq__16440_16616__$1);
var G__16619 = c__7616__auto___16617;
var G__16620 = cljs.core.count(c__7616__auto___16617);
var G__16621 = (0);
seq__16440_16602 = G__16618;
chunk__16441_16603 = G__16619;
count__16442_16604 = G__16620;
i__16443_16605 = G__16621;
continue;
} else {
var map__16446_16622 = cljs.core.first(seq__16440_16616__$1);
var map__16446_16623__$1 = ((((!((map__16446_16622 == null)))?((((map__16446_16622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16446_16622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16446_16622):map__16446_16622);
var gline_16624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16446_16623__$1,cljs.core.cst$kw$gline);
var gcol_16625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16446_16623__$1,cljs.core.cst$kw$gcol);
var name_16626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16446_16623__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_16624], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__16440_16602,chunk__16441_16603,count__16442_16604,i__16443_16605,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16446_16622,map__16446_16623__$1,gline_16624,gcol_16625,name_16626,seq__16440_16616__$1,temp__4657__auto___16615__$2,vec__16437_16599,column_16600,column_info_16601,seq__16422_16593__$1,temp__4657__auto___16592__$1,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_16625], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_16550,cljs.core.cst$kw$col,column_16600,cljs.core.cst$kw$name,name_16626], null));
});})(seq__16440_16602,chunk__16441_16603,count__16442_16604,i__16443_16605,seq__16422_16552,chunk__16423_16553,count__16424_16554,i__16425_16555,seq__16386_16448,chunk__16387_16449,count__16388_16450,i__16389_16451,map__16446_16622,map__16446_16623__$1,gline_16624,gcol_16625,name_16626,seq__16440_16616__$1,temp__4657__auto___16615__$2,vec__16437_16599,column_16600,column_info_16601,seq__16422_16593__$1,temp__4657__auto___16592__$1,vec__16419_16549,line_16550,columns_16551,seq__16386_16543__$1,temp__4657__auto___16542,inverted))
,cljs.core.sorted_map()));

var G__16627 = cljs.core.next(seq__16440_16616__$1);
var G__16628 = null;
var G__16629 = (0);
var G__16630 = (0);
seq__16440_16602 = G__16627;
chunk__16441_16603 = G__16628;
count__16442_16604 = G__16629;
i__16443_16605 = G__16630;
continue;
}
} else {
}
}
break;
}

var G__16631 = cljs.core.next(seq__16422_16593__$1);
var G__16632 = null;
var G__16633 = (0);
var G__16634 = (0);
seq__16422_16552 = G__16631;
chunk__16423_16553 = G__16632;
count__16424_16554 = G__16633;
i__16425_16555 = G__16634;
continue;
}
} else {
}
}
break;
}

var G__16635 = cljs.core.next(seq__16386_16543__$1);
var G__16636 = null;
var G__16637 = (0);
var G__16638 = (0);
seq__16386_16448 = G__16635;
chunk__16387_16449 = G__16636;
count__16388_16450 = G__16637;
i__16389_16451 = G__16638;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});
