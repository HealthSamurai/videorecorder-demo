// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__7917__auto__ = [];
var len__7910__auto___18091 = arguments.length;
var i__7911__auto___18092 = (0);
while(true){
if((i__7911__auto___18092 < len__7910__auto___18091)){
args__7917__auto__.push((arguments[i__7911__auto___18092]));

var G__18093 = (i__7911__auto___18092 + (1));
i__7911__auto___18092 = G__18093;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((0) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__7918__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_18090 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18090;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq18089){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18089));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR_18095 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join('')));

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_18095;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__18096){
var map__18099 = p__18096;
var map__18099__$1 = ((((!((map__18099 == null)))?((((map__18099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18099):map__18099);
var resource = map__18099__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18099__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var args18101 = [];
var len__7910__auto___18106 = arguments.length;
var i__7911__auto___18107 = (0);
while(true){
if((i__7911__auto___18107 < len__7910__auto___18106)){
args18101.push((arguments[i__7911__auto___18107]));

var G__18108 = (i__7911__auto___18107 + (1));
i__7911__auto___18107 = G__18108;
continue;
} else {
}
break;
}

var G__18103 = args18101.length;
switch (G__18103) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18101.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__18104 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__18104,((function (G__18104){
return (function (state){
});})(G__18104))
);

return G__18104;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__18105 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__18105,init);

return G__18105;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
var G__18111 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18111) : cljs.core.atom.call(null,G__18111));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__18112){
var map__18118 = p__18112;
var map__18118__$1 = ((((!((map__18118 == null)))?((((map__18118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18118):map__18118);
var opts = map__18118__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18118__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18118__$1,cljs.core.cst$kw$asset_DASH_path);
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace(cljs.core.munge([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')),".","/"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__6797__auto__ = output_dir;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__18120 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs?rel="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__18120,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''));
} else {
return G__18120;
}
})();
var file = (function (){var G__18121 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".js?rel="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('');
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__18121,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''));
} else {
return G__18121;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,name], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n//# sourceURL="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n//# sourceMappingURL=data:application/json;base64,"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18122 = clojure.string.replace(json,/%([0-9A-F]{2})/,String.fromCharCode("0x$1"));
return goog.crypt.base64.encodeString(G__18122);
})())].join(''));
});
cljs.js.current_alias_map = (function cljs$js$current_alias_map(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.analyzer._STAR_cljs_ns_STAR_,cljs.core.cst$kw$requires], null));
});
cljs.js._STAR_loaded_STAR_ = (function (){var G__18123 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18123) : cljs.core.atom.call(null,G__18123));
})();
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__18130 = cljs.core.first(coll);
var G__18131 = ((function (G__18130){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__18132 = proc;
var G__18133 = cljs.core.rest(coll);
var G__18134 = break_QMARK_;
var G__18135 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__18132,G__18133,G__18134,G__18135) : cljs.js.run_async_BANG_.call(null,G__18132,G__18133,G__18134,G__18135));
}
});})(G__18130))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__18130,G__18131) : proc.call(null,G__18130,G__18131));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return (cljs.js.require.cljs$core$IFn$_invoke$arity$5 ? cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1) : cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1));
}),names,cljs.core.cst$kw$error,cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),cb);
});
cljs.js.require = (function cljs$js$require(var_args){
var args18136 = [];
var len__7910__auto___18166 = arguments.length;
var i__7911__auto___18167 = (0);
while(true){
if((i__7911__auto___18167 < len__7910__auto___18166)){
args18136.push((arguments[i__7911__auto___18167]));

var G__18168 = (i__7911__auto___18167 + (1));
i__7911__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var G__18138 = args18136.length;
switch (G__18138) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18136.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__18139 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__18139);
} else {
return G__18139;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
var G__18140_18170 = cljs.js._STAR_loaded_STAR_;
var G__18141_18171 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18140_18170,G__18141_18171) : cljs.core.reset_BANG_.call(null,G__18140_18170,G__18141_18171));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Loading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" namespace")].join('')], 0));
} else {
}

if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.js._STAR_loaded_STAR_) : cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_)),aname))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name)], null),((function (env,bound_vars__$1,aname){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*load-fn* may only return a map or nil"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (map? resource) (nil? resource))")].join('')));
}

if(cljs.core.truth_(resource)){
var map__18144 = resource;
var map__18144__$1 = ((((!((map__18144 == null)))?((((map__18144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18144):map__18144);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,cljs.core.cst$kw$source_DASH_map);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,cljs.core.cst$kw$file);
var pred__18146 = cljs.core._EQ_;
var expr__18147 = lang;
if(cljs.core.truth_((function (){var G__18149 = cljs.core.cst$kw$clj;
var G__18150 = expr__18147;
return (pred__18146.cljs$core$IFn$_invoke$arity$2 ? pred__18146.cljs$core$IFn$_invoke$arity$2(G__18149,G__18150) : pred__18146.call(null,G__18149,G__18150));
})())){
var G__18151 = bound_vars__$1;
var G__18152 = source;
var G__18153 = name;
var G__18154 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file);
var G__18155 = ((function (G__18151,G__18152,G__18153,G__18154,pred__18146,expr__18147,map__18144,map__18144__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__18156 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18156) : cb.call(null,G__18156));
}
});})(G__18151,G__18152,G__18153,G__18154,pred__18146,expr__18147,map__18144,map__18144__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
;
return (cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__18151,G__18152,G__18153,G__18154,G__18155) : cljs.js.eval_str_STAR_.call(null,G__18151,G__18152,G__18153,G__18154,G__18155));
} else {
if(cljs.core.truth_((function (){var G__18157 = cljs.core.cst$kw$js;
var G__18158 = expr__18147;
return (pred__18146.cljs$core$IFn$_invoke$arity$2 ? pred__18146.cljs$core$IFn$_invoke$arity$2(G__18157,G__18158) : pred__18146.call(null,G__18157,G__18158));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__18146,expr__18147,map__18144,map__18144__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__18146,expr__18147,map__18144,map__18144__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e18159){var cause = e18159;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not require "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__18160 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18160) : cb.call(null,G__18160));
}
}
});})(pred__18146,expr__18147,map__18144,map__18144__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
}
});})(pred__18146,expr__18147,map__18144,map__18144__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
var G__18161 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid :lang specified "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", only :clj or :js allowed")].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18161) : cb.call(null,G__18161));
}
}
} else {
var G__18162 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__18163 = (cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns:cljs.core.cst$kw$undeclared_DASH_ns);
var G__18164 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__18163,G__18164) : cljs.analyzer.error_message.call(null,G__18163,G__18164));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18162) : cb.call(null,G__18162));
}
});})(env,bound_vars__$1,aname))
);
}catch (e18142){var cause = e18142;
var G__18143 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not require "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18143) : cb.call(null,G__18143));
}} else {
var G__18165 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18165) : cb.call(null,G__18165));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;


cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__6785__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to], true),cljs.core.vals(replaced));
} else {
return and__6785__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__18176){
var vec__18177 = p__18176;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18177,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18177,(1),null);
var entry = vec__18177;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)].join(''),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(cljs.core.cst$kw$requires,true);

patch(cljs.core.cst$kw$require_DASH_macros,true);

patch(cljs.core.cst$kw$uses,false);

patch(cljs.core.cst$kw$use_DASH_macros,false);

patch_renames(cljs.core.cst$kw$renames);

return patch_renames(cljs.core.cst$kw$rename_DASH_macros);
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var args18181 = [];
var len__7910__auto___18187 = arguments.length;
var i__7911__auto___18188 = (0);
while(true){
if((i__7911__auto___18188 < len__7910__auto___18187)){
args18181.push((arguments[i__7911__auto___18188]));

var G__18189 = (i__7911__auto___18188 + (1));
i__7911__auto___18188 = G__18189;
continue;
} else {
}
break;
}

var G__18183 = args18181.length;
switch (G__18183) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18181.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR_18184 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_18184){
return (function (p1__18180_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__18180_SHARP_));
});})(_STAR_cljs_dep_set_STAR_18184))
,deps)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Circular dependency detected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn* [p1__18180#] (not (contains? (:*cljs-dep-set* bound-vars) p1__18180#))) deps)")].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$ns);
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_18184){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading result: ",res], 0));
} else {
}

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__4655__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__4655__auto__)){
var cljs_dep = temp__4655__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_18184){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_18184){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__18185 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18185) : cb.call(null,G__18185));
}
});})(cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_18184))
);
}
});})(cljs_dep,temp__4655__auto__,dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_18184))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,_STAR_cljs_dep_set_STAR_18184))
);
} else {
var G__18186 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18186) : cb.call(null,G__18186));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_18184;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var args18192 = [];
var len__7910__auto___18217 = arguments.length;
var i__7911__auto___18218 = (0);
while(true){
if((i__7911__auto___18218 < len__7910__auto___18217)){
args18192.push((arguments[i__7911__auto___18218]));

var G__18219 = (i__7911__auto___18218 + (1));
i__7911__auto___18218 = G__18219;
continue;
} else {
}
break;
}

var G__18194 = args18192.length;
switch (G__18194) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18192.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var compiler = (function (){var G__18195 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18195) : cljs.core.deref.call(null,G__18195));
})();
var _STAR_cljs_dep_set_STAR_18196 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_18196,compiler){
return (function (p1__18191_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__18191_SHARP_));
});})(_STAR_cljs_dep_set_STAR_18196,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Circular dependency detected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(every? (fn* [p1__18191#] (not (contains? (:*cljs-dep-set* bound-vars) p1__18191#))) deps)")].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{return cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars).call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null),((function (dep,_STAR_cljs_dep_set_STAR_18196,compiler){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*load-fn* may only return a map or nil"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (map? resource) (nil? resource))")].join('')));
}

if(cljs.core.truth_(resource)){
var map__18199 = resource;
var map__18199__$1 = ((((!((map__18199 == null)))?((((map__18199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18199):map__18199);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18199__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18199__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18199__$1,cljs.core.cst$kw$source);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18199__$1,cljs.core.cst$kw$file);
var pred__18201 = cljs.core._EQ_;
var expr__18202 = lang;
if(cljs.core.truth_((function (){var G__18204 = cljs.core.cst$kw$clj;
var G__18205 = expr__18202;
return (pred__18201.cljs$core$IFn$_invoke$arity$2 ? pred__18201.cljs$core$IFn$_invoke$arity$2(G__18204,G__18205) : pred__18201.call(null,G__18204,G__18205));
})())){
var G__18206 = bound_vars;
var G__18207 = source;
var G__18208 = name;
var G__18209 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file);
var G__18210 = ((function (G__18206,G__18207,G__18208,G__18209,pred__18201,expr__18202,map__18199,map__18199__$1,name,lang,source,file,dep,_STAR_cljs_dep_set_STAR_18196,compiler){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(G__18206,G__18207,G__18208,G__18209,pred__18201,expr__18202,map__18199,map__18199__$1,name,lang,source,file,dep,_STAR_cljs_dep_set_STAR_18196,compiler))
;
return (cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__18206,G__18207,G__18208,G__18209,G__18210) : cljs.js.analyze_str_STAR_.call(null,G__18206,G__18207,G__18208,G__18209,G__18210));
} else {
if(cljs.core.truth_((function (){var G__18211 = cljs.core.cst$kw$js;
var G__18212 = expr__18202;
return (pred__18201.cljs$core$IFn$_invoke$arity$2 ? pred__18201.cljs$core$IFn$_invoke$arity$2(G__18211,G__18212) : pred__18201.call(null,G__18211,G__18212));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid :lang specified "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", only :clj or :js allowed")].join('')));
}
}
} else {
var G__18213 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__18214 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__18215 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__18214,G__18215) : cljs.analyzer.error_message.call(null,G__18214,G__18215));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18213) : cb.call(null,G__18213));
}
});})(dep,_STAR_cljs_dep_set_STAR_18196,compiler))
);
}catch (e18197){var cause = e18197;
var G__18198 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not analyze dep "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18198) : cb.call(null,G__18198));
}} else {
var G__18216 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18216) : cb.call(null,G__18216));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_18196;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__6797__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
var or__6797__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__6797__auto____$1)){
return or__6797__auto____$1;
} else {
var or__6797__auto____$2 = (function (){var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__6785__auto__){
var and__6785__auto____$1 = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__6785__auto____$1)){
return cljs.core.cst$kw$reload;
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})();
if(cljs.core.truth_(or__6797__auto____$2)){
return or__6797__auto____$2;
} else {
return null;
}
}
}
})();
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$ns),((function (nsym,k__$1){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
var G__18229 = bound_vars;
var G__18230 = k__$1;
var G__18231 = cljs.core.next(macros);
var G__18232 = reload;
var G__18233 = reloads;
var G__18234 = opts;
var G__18235 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$7 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$7(G__18229,G__18230,G__18231,G__18232,G__18233,G__18234,G__18235) : cljs.js.load_macros.call(null,G__18229,G__18230,G__18231,G__18232,G__18233,G__18234,G__18235));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(nsym,k__$1))
);
} else {
var G__18236 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18236) : cb.call(null,G__18236));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(ast,smap){
var rewrite_renames = (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__18243){
var vec__18244 = p__18243;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18244,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18244,(1),null);
var entry = vec__18244;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if(!((to == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([acc,entry], 0));
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$uses,((function (rewrite_renames){
return (function (p1__18237_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__18237_SHARP_);
});})(rewrite_renames))
),cljs.core.cst$kw$requires,((function (rewrite_renames){
return (function (p1__18238_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([smap,clojure.walk.postwalk_replace(smap,p1__18238_SHARP_)], 0));
});})(rewrite_renames))
),cljs.core.cst$kw$renames,rewrite_renames),cljs.core.cst$kw$rename_DASH_macros,rewrite_renames);
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var args18249 = [];
var len__7910__auto___18302 = arguments.length;
var i__7911__auto___18303 = (0);
while(true){
if((i__7911__auto___18303 < len__7910__auto___18302)){
args18249.push((arguments[i__7911__auto___18303]));

var G__18304 = (i__7911__auto___18303 + (1));
i__7911__auto___18303 = G__18304;
continue;
} else {
}
break;
}

var G__18251 = args18249.length;
switch (G__18251) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18249.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__18252,opts,cb){
var map__18253 = p__18252;
var map__18253__$1 = ((((!((map__18253 == null)))?((((map__18253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18253):map__18253);
var ast = map__18253__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18253__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null).call(null,op))){
var check_uses_and_load_macros = ((function (map__18253,map__18253__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__18288 = rewritten_ast;
var map__18288__$1 = ((((!((map__18288 == null)))?((((map__18288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18288):map__18288);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$uses);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$requires);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$require_DASH_macros);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18288__$1,cljs.core.cst$kw$reloads);
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,reload,reloads,opts,((function (env,map__18288,map__18288__$1,uses,requires,require_macros,use_macros,reload,reloads,map__18253,map__18253__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,reloads,reloads,opts,((function (env,map__18288,map__18288__$1,uses,requires,require_macros,use_macros,reload,reloads,map__18253,map__18253__$1,ast,op){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var res__$3 = (function (){try{if(cljs.core.seq(use_macros)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros,env);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e18290){var cause = e18290;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not parse ns form "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$3))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$3) : cb.call(null,res__$3));
} else {
try{var _STAR_analyze_deps_STAR_18293 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR_18294 = cljs.env._STAR_compiler_STAR_;
cljs.analyzer._STAR_analyze_deps_STAR_ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);

try{var ast_SINGLEQUOTE_ = cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast,env),env);
var G__18295 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18295) : cb.call(null,G__18295));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_18294;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR_18293;
}}catch (e18291){var cause = e18291;
var G__18292 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not parse ns form "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18292) : cb.call(null,G__18292));
}}
}
});})(env,map__18288,map__18288__$1,uses,requires,require_macros,use_macros,reload,reloads,map__18253,map__18253__$1,ast,op))
);
}
});})(env,map__18288,map__18288__$1,uses,requires,require_macros,use_macros,reload,reloads,map__18253,map__18253__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__6785__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core.seq(uses);
} else {
return and__6785__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__18298 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18298) : cb.call(null,G__18298));
}catch (e18296){var cause = e18296;
var G__18297 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not parse ns form "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18297) : cb.call(null,G__18297));
}}
}
});})(map__18253,map__18253__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__6785__auto__ = load;
if(cljs.core.truth_(and__6785__auto__)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__6785__auto__;
}
})())){
var map__18299 = ast;
var map__18299__$1 = ((((!((map__18299 == null)))?((((map__18299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18299):map__18299);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,cljs.core.cst$kw$reload);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,cljs.core.cst$kw$name);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,cljs.core.cst$kw$deps);
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__6797__auto__ = cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__18299,map__18299__$1,reload,name,deps,map__18253,map__18253__$1,ast,op){
return (function (p1__18247_SHARP_){
return check_uses_and_load_macros(p1__18247_SHARP_,cljs.js.rewrite_ns_ast(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__18247_SHARP_)));
});})(map__18299,map__18299__$1,reload,name,deps,map__18253,map__18253__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__6785__auto__ = cljs.core.not(load);
if(and__6785__auto__){
var and__6785__auto____$1 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__6785__auto____$1)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__18253,map__18253__$1,ast,op){
return (function (p1__18248_SHARP_){
return check_uses_and_load_macros(p1__18248_SHARP_,ast);
});})(map__18253,map__18253__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),ast);

}
}
} else {
var G__18301 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18301) : cb.call(null,G__18301));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__6797__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__18341 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18341,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__18341;
}
})();
return ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_18358 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_18359 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_18360 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_18361 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_18362 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR_18363 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_18364 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol18365 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_18366 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_18367 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.analyzer._STAR_passes_STAR_ = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e18368){var cause = e18368;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not analyze "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__18369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__18369__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18369,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__18369);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18369__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__18369__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e18370){var cause = e18370;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not analyze "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18358,_STAR_cljs_ns_STAR_18359,_STAR_cljs_static_fns_STAR_18360,_STAR_ns_STAR_18361,_STAR_passes_STAR_18362,_STAR_alias_map_STAR_18363,_STAR_data_readers_STAR_18364,resolve_symbol18365,_STAR_source_map_data_STAR_18366,_STAR_cljs_file_STAR_18367,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18358,_STAR_cljs_ns_STAR_18359,_STAR_cljs_static_fns_STAR_18360,_STAR_ns_STAR_18361,_STAR_passes_STAR_18362,_STAR_alias_map_STAR_18363,_STAR_data_readers_STAR_18364,resolve_symbol18365,_STAR_source_map_data_STAR_18366,_STAR_cljs_file_STAR_18367,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__18372 = ast;
var G__18373 = ns;
last_ast = G__18372;
ns = G__18373;
continue;
}
}
} else {
var G__18371 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,last_ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18371) : cb.call(null,G__18371));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_18367;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_18366;

cljs.tools.reader.resolve_symbol = resolve_symbol18365;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_18364;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_18363;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_18362;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_18361;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_18360;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_18359;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_18358;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
.call(null,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval          - eval function to invoke, see *eval-fn*
 *    :load          - library resolution function, see *load-fn*
 *    :source-map    - set to true to generate inline source map information
 *    :def-emits-var - sets whether def (and derived) forms return either a Var
 *                     (if set to true) or the def init value (if false). Default
 *                     is false.
 *    :static-fns    - employ static dispatch to specific function arities in
 *                     emitted JavaScript, as opposed to making use of the
 *                     `call` construct. Default is false.
 *    :ns            - optional, the namespace in which to evaluate the source.
 *    :verbose       - optional, emit details from compiler activity. Defaults to
 *                     false.
 *    :context       - optional, sets the context for the source. Possible values
 *                     are `:expr`, `:statement` and `:return`. Defaults to
 *                     `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var args18374 = [];
var len__7910__auto___18377 = arguments.length;
var i__7911__auto___18378 = (0);
while(true){
if((i__7911__auto___18378 < len__7910__auto___18377)){
args18374.push((arguments[i__7911__auto___18378]));

var G__18379 = (i__7911__auto___18378 + (1));
i__7911__auto___18378 = G__18379;
continue;
} else {
}
break;
}

var G__18376 = args18374.length;
switch (G__18376) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18374.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_passes_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__6797__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__18397 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18397,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__18397;
}
})();
var _STAR_compiler_STAR_18398 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_18399 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_18400 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_18401 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_18402 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_18403 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_18404 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol18405 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_18406 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__18407 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__18407__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18407,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__18407);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18407__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__18407__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e18408){var cause = e18408;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not eval "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv,aenv__$1,res,_STAR_compiler_STAR_18398,_STAR_eval_fn_STAR_18399,_STAR_cljs_ns_STAR_18400,_STAR_cljs_static_fns_STAR_18401,_STAR_ns_STAR_18402,_STAR_alias_map_STAR_18403,_STAR_data_readers_STAR_18404,resolve_symbol18405,_STAR_source_map_data_STAR_18406,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var src = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog.provide(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join('');
var G__18409 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18409) : cb.call(null,G__18409));
}
});})(ast,aenv,aenv__$1,res,_STAR_compiler_STAR_18398,_STAR_eval_fn_STAR_18399,_STAR_cljs_ns_STAR_18400,_STAR_cljs_static_fns_STAR_18401,_STAR_ns_STAR_18402,_STAR_alias_map_STAR_18403,_STAR_data_readers_STAR_18404,resolve_symbol18405,_STAR_source_map_data_STAR_18406,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__7791__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18410_18413 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18411_18414 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_18410_18413,_STAR_print_fn_STAR_18411_18414,sb__7791__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_18398,_STAR_eval_fn_STAR_18399,_STAR_cljs_ns_STAR_18400,_STAR_cljs_static_fns_STAR_18401,_STAR_ns_STAR_18402,_STAR_alias_map_STAR_18403,_STAR_data_readers_STAR_18404,resolve_symbol18405,_STAR_source_map_data_STAR_18406,the_ns,bound_vars__$1){
return (function (x__7792__auto__){
return sb__7791__auto__.append(x__7792__auto__);
});})(_STAR_print_newline_STAR_18410_18413,_STAR_print_fn_STAR_18411_18414,sb__7791__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_18398,_STAR_eval_fn_STAR_18399,_STAR_cljs_ns_STAR_18400,_STAR_cljs_static_fns_STAR_18401,_STAR_ns_STAR_18402,_STAR_alias_map_STAR_18403,_STAR_data_readers_STAR_18404,resolve_symbol18405,_STAR_source_map_data_STAR_18406,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18411_18414;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18410_18413;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__7791__auto__)].join('');
})();
var G__18412 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18412) : cb.call(null,G__18412));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_18406;

cljs.tools.reader.resolve_symbol = resolve_symbol18405;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_18404;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_18403;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_18402;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_18401;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_18400;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_18399;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_18398;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval          - eval function to invoke, see *eval-fn*
 *    :load          - library resolution function, see *load-fn*
 *    :source-map    - set to true to generate inline source map information
 *    :def-emits-var - sets whether def (and derived) forms return either a Var
 *                     (if set to true) or the def init value (if false). Default
 *                     is false.
 *    :static-fns    - employ static dispatch to specific function arities in
 *                     emitted JavaScript, as opposed to making use of the
 *                     `call` construct. Default is false.
 *    :ns            - optional, the namespace in which to evaluate the source.
 *    :verbose       - optional, emit details from compiler activity. Defaults to
 *                     false.
 *    :context       - optional, sets the context for the source. Possible values
 *                     are `:expr`, `:statement` and `:return`. Defaults to
 *                     `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var args18415 = [];
var len__7910__auto___18418 = arguments.length;
var i__7911__auto___18419 = (0);
while(true){
if((i__7911__auto___18419 < len__7910__auto___18418)){
args18415.push((arguments[i__7911__auto___18419]));

var G__18420 = (i__7911__auto___18419 + (1));
i__7911__auto___18419 = G__18420;
continue;
} else {
}
break;
}

var G__18417 = args18415.length;
switch (G__18417) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18415.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__6797__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__18458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18458,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__18458;
}
})();
return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_18475 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_18476 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_18477 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_18478 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_18479 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_18480 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_18481 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol18482 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_18483 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e18484){var cause = e18484;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not compile "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__18485 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__18485__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18485,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__18485);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18485__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__18485__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e18486){var cause = e18486;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not compile "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
sb.append((function (){var sb__7791__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18487_18490 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18488_18491 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_18487_18490,_STAR_print_fn_STAR_18488_18491,sb__7791__auto__,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18475,_STAR_eval_fn_STAR_18476,_STAR_cljs_ns_STAR_18477,_STAR_cljs_static_fns_STAR_18478,_STAR_ns_STAR_18479,_STAR_alias_map_STAR_18480,_STAR_data_readers_STAR_18481,resolve_symbol18482,_STAR_source_map_data_STAR_18483,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__7792__auto__){
return sb__7791__auto__.append(x__7792__auto__);
});})(ns,_STAR_print_newline_STAR_18487_18490,_STAR_print_fn_STAR_18488_18491,sb__7791__auto__,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18475,_STAR_eval_fn_STAR_18476,_STAR_cljs_ns_STAR_18477,_STAR_cljs_static_fns_STAR_18478,_STAR_ns_STAR_18479,_STAR_alias_map_STAR_18480,_STAR_data_readers_STAR_18481,resolve_symbol18482,_STAR_source_map_data_STAR_18483,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18488_18491;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18487_18490;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__7791__auto__)].join('');
})());

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18475,_STAR_eval_fn_STAR_18476,_STAR_cljs_ns_STAR_18477,_STAR_cljs_static_fns_STAR_18478,_STAR_ns_STAR_18479,_STAR_alias_map_STAR_18480,_STAR_data_readers_STAR_18481,resolve_symbol18482,_STAR_source_map_data_STAR_18483,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$compile_str_STAR__$_compile_loop(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18475,_STAR_eval_fn_STAR_18476,_STAR_cljs_ns_STAR_18477,_STAR_cljs_static_fns_STAR_18478,_STAR_ns_STAR_18479,_STAR_alias_map_STAR_18480,_STAR_data_readers_STAR_18481,resolve_symbol18482,_STAR_source_map_data_STAR_18483,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
var G__18492 = ns;
ns = G__18492;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var G__18489 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,sb.toString()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18489) : cb.call(null,G__18489));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_18483;

cljs.tools.reader.resolve_symbol = resolve_symbol18482;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_18481;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_18480;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_18479;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_18478;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_18477;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_18476;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_18475;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval          - eval function to invoke, see *eval-fn*
 *    :load          - library resolution function, see *load-fn*
 *    :source-map    - set to true to generate inline source map information
 *    :def-emits-var - sets whether def (and derived) forms return either a Var
 *                     (if set to true) or the def init value (if false). Default
 *                     is false.
 *    :static-fns    - employ static dispatch to specific function arities in
 *                     emitted JavaScript, as opposed to making use of the
 *                     `call` construct. Default is false.
 *    :ns            - optional, the namespace in which to evaluate the source.
 *    :verbose       - optional, emit details from compiler activity. Defaults to
 *                     false.
 *    :context       - optional, sets the context for the source. Possible values
 *                     are `:expr`, `:statement` and `:return`. Defaults to
 *                     `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var args18493 = [];
var len__7910__auto___18496 = arguments.length;
var i__7911__auto___18497 = (0);
while(true){
if((i__7911__auto___18497 < len__7910__auto___18496)){
args18493.push((arguments[i__7911__auto___18497]));

var G__18498 = (i__7911__auto___18497 + (1));
i__7911__auto___18497 = G__18498;
continue;
} else {
}
break;
}

var G__18495 = args18493.length;
switch (G__18495) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18493.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__6797__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__18542 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18542,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__18542;
}
})();
var aname = (function (){var G__18543 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__18543);
} else {
return G__18543;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Evaluating",name], 0));
} else {
}

return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_18562 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_18563 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_18564 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_18565 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_18566 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR_18567 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR_18568 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol18569 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_18570 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR_18571 = cljs.analyzer._STAR_cljs_file_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_alias_map_STAR_ = cljs.js.current_alias_map();

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.js.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_file_STAR_ = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e18572){var cause = e18572;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not eval "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__18573 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__18573__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18573,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__18573);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18573__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__18573__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e18574){var cause = e18574;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not eval "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast)))){
sb.append((function (){var sb__7791__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18575_18580 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18576_18581 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_18575_18580,_STAR_print_fn_STAR_18576_18581,sb__7791__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__7792__auto__){
return sb__7791__auto__.append(x__7792__auto__);
});})(ns,_STAR_print_newline_STAR_18575_18580,_STAR_print_fn_STAR_18576_18581,sb__7791__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog.provide(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\");")].join('')], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18576_18581;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18575_18580;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__7791__auto__)].join('');
})());

return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
sb.append((function (){var sb__7791__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_18577_18582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_18578_18583 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_18577_18582,_STAR_print_fn_STAR_18578_18583,sb__7791__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__7792__auto__){
return sb__7791__auto__.append(x__7792__auto__);
});})(ns,_STAR_print_newline_STAR_18577_18582,_STAR_print_fn_STAR_18578_18583,sb__7791__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18578_18583;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18577_18582;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__7791__auto__)].join('');
})());

var G__18584 = ns_SINGLEQUOTE_;
ns = G__18584;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$name,name,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,aname], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e18579){var cause = e18579;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_18562,_STAR_eval_fn_STAR_18563,_STAR_cljs_ns_STAR_18564,_STAR_cljs_static_fns_STAR_18565,_STAR_ns_STAR_18566,_STAR_alias_map_STAR_18567,_STAR_data_readers_STAR_18568,resolve_symbol18569,_STAR_source_map_data_STAR_18570,_STAR_cljs_file_STAR_18571,rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__4655__auto__ = cljs.core.cst$kw$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(evalm,complete) : f.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR_18571;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_18570;

cljs.tools.reader.resolve_symbol = resolve_symbol18569;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_18568;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_18567;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_18566;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_18565;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_18564;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_18563;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_18562;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1,aname))
.call(null,cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol)
 *  optional, the name of the source
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval          - eval function to invoke, see *eval-fn*
 *  :load          - library resolution function, see *load-fn*
 *  :source-map    - set to true to generate inline source map information
 *  :cache-source  - optional, a function to run side-effects with the
 *                   compilation result prior to actual evalution. This function
 *                   takes two arguments, the first is the eval map, the source
 *                   will be under :source. The second argument is a callback of
 *                   one argument. If an error occurs an :error key should be
 *                   supplied.
 *  :def-emits-var - sets whether def (and derived) forms return either a Var
 *                   (if set to true) or the def init value (if false). Default
 *                   is false.
 *  :static-fns    - employ static dispatch to specific function arities in
 *                   emitted JavaScript, as opposed to making use of the
 *                   `call` construct. Default is false.
 *  :ns            - optional, the namespace in which to evaluate the source.
 *  :verbose       - optional, emit details from compiler activity. Defaults to
 *                   false.
 *  :context       - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var args18585 = [];
var len__7910__auto___18588 = arguments.length;
var i__7911__auto___18589 = (0);
while(true){
if((i__7911__auto___18589 < len__7910__auto___18588)){
args18585.push((arguments[i__7911__auto___18589]));

var G__18590 = (i__7911__auto___18589 + (1));
i__7911__auto___18589 = G__18590;
continue;
} else {
}
break;
}

var G__18587 = args18585.length;
switch (G__18587) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18585.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__6797__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;
