// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs.env');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(var_args){
var args14271 = [];
var len__7910__auto___14275 = arguments.length;
var i__7911__auto___14276 = (0);
while(true){
if((i__7911__auto___14276 < len__7910__auto___14275)){
args14271.push((arguments[i__7911__auto___14276]));

var G__14277 = (i__7911__auto___14276 + (1));
i__7911__auto___14276 = G__14277;
continue;
} else {
}
break;
}

var G__14273 = args14271.length;
switch (G__14273) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14271.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__14274 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$cljs$user,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$sym$cljs$user], null)], null),cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_data_DASH_readers,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_externs,null,cljs.core.cst$kw$options,options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14274) : cljs.core.atom.call(null,G__14274));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

