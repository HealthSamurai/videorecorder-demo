// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('route_map.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
route_map.core.pathify = (function route_map$core$pathify(path){
return cljs.core.filterv((function (p1__26406_SHARP_){
return !(clojure.string.blank_QMARK_(p1__26406_SHARP_));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
route_map.core.Match = (function (parents,params,match,__meta,__extmap,__hash){
this.parents = parents;
this.params = params;
this.match = match;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
route_map.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7424__auto__,k__7425__auto__){
var self__ = this;
var this__7424__auto____$1 = this;
return this__7424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__7425__auto__,null);
});

route_map.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7426__auto__,k26408,else__7427__auto__){
var self__ = this;
var this__7426__auto____$1 = this;
var G__26410 = (((k26408 instanceof cljs.core.Keyword))?k26408.fqn:null);
switch (G__26410) {
case "parents":
return self__.parents;

break;
case "params":
return self__.params;

break;
case "match":
return self__.match;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26408,else__7427__auto__);

}
});

route_map.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7438__auto__,writer__7439__auto__,opts__7440__auto__){
var self__ = this;
var this__7438__auto____$1 = this;
var pr_pair__7441__auto__ = ((function (this__7438__auto____$1){
return (function (keyval__7442__auto__){
return cljs.core.pr_sequential_writer(writer__7439__auto__,cljs.core.pr_writer,""," ","",opts__7440__auto__,keyval__7442__auto__);
});})(this__7438__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7439__auto__,pr_pair__7441__auto__,"#route-map.core.Match{",", ","}",opts__7440__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parents,self__.parents],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$match,self__.match],null))], null),self__.__extmap));
});

route_map.core.Match.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

route_map.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26407){
var self__ = this;
var G__26407__$1 = this;
return (new cljs.core.RecordIter((0),G__26407__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents,cljs.core.cst$kw$params,cljs.core.cst$kw$match], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

route_map.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7422__auto__){
var self__ = this;
var this__7422__auto____$1 = this;
return self__.__meta;
});

route_map.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7418__auto__){
var self__ = this;
var this__7418__auto____$1 = this;
return (new route_map.core.Match(self__.parents,self__.params,self__.match,self__.__meta,self__.__extmap,self__.__hash));
});

route_map.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7428__auto__){
var self__ = this;
var this__7428__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

route_map.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7419__auto__){
var self__ = this;
var this__7419__auto____$1 = this;
var h__7237__auto__ = self__.__hash;
if(!((h__7237__auto__ == null))){
return h__7237__auto__;
} else {
var h__7237__auto____$1 = cljs.core.hash_imap(this__7419__auto____$1);
self__.__hash = h__7237__auto____$1;

return h__7237__auto____$1;
}
});

route_map.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7420__auto__,other__7421__auto__){
var self__ = this;
var this__7420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6785__auto__ = other__7421__auto__;
if(cljs.core.truth_(and__6785__auto__)){
return ((this__7420__auto____$1.constructor === other__7421__auto__.constructor)) && (cljs.core.equiv_map(this__7420__auto____$1,other__7421__auto__));
} else {
return and__6785__auto__;
}
})())){
return true;
} else {
return false;
}
});

route_map.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7433__auto__,k__7434__auto__){
var self__ = this;
var this__7433__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$parents,null,cljs.core.cst$kw$match,null], null), null),k__7434__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7433__auto____$1),self__.__meta),k__7434__auto__);
} else {
return (new route_map.core.Match(self__.parents,self__.params,self__.match,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7434__auto__)),null));
}
});

route_map.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7431__auto__,k__7432__auto__,G__26407){
var self__ = this;
var this__7431__auto____$1 = this;
var pred__26411 = cljs.core.keyword_identical_QMARK_;
var expr__26412 = k__7432__auto__;
if(cljs.core.truth_((function (){var G__26414 = cljs.core.cst$kw$parents;
var G__26415 = expr__26412;
return (pred__26411.cljs$core$IFn$_invoke$arity$2 ? pred__26411.cljs$core$IFn$_invoke$arity$2(G__26414,G__26415) : pred__26411.call(null,G__26414,G__26415));
})())){
return (new route_map.core.Match(G__26407,self__.params,self__.match,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26416 = cljs.core.cst$kw$params;
var G__26417 = expr__26412;
return (pred__26411.cljs$core$IFn$_invoke$arity$2 ? pred__26411.cljs$core$IFn$_invoke$arity$2(G__26416,G__26417) : pred__26411.call(null,G__26416,G__26417));
})())){
return (new route_map.core.Match(self__.parents,G__26407,self__.match,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26418 = cljs.core.cst$kw$match;
var G__26419 = expr__26412;
return (pred__26411.cljs$core$IFn$_invoke$arity$2 ? pred__26411.cljs$core$IFn$_invoke$arity$2(G__26418,G__26419) : pred__26411.call(null,G__26418,G__26419));
})())){
return (new route_map.core.Match(self__.parents,self__.params,G__26407,self__.__meta,self__.__extmap,null));
} else {
return (new route_map.core.Match(self__.parents,self__.params,self__.match,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7432__auto__,G__26407),null));
}
}
}
});

route_map.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7436__auto__){
var self__ = this;
var this__7436__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parents,self__.parents],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$match,self__.match],null))], null),self__.__extmap));
});

route_map.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7423__auto__,G__26407){
var self__ = this;
var this__7423__auto____$1 = this;
return (new route_map.core.Match(self__.parents,self__.params,self__.match,G__26407,self__.__extmap,self__.__hash));
});

route_map.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7429__auto__,entry__7430__auto__){
var self__ = this;
var this__7429__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7430__auto__)){
return this__7429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7430__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7430__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7429__auto____$1,entry__7430__auto__);
}
});

route_map.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parents,cljs.core.cst$sym$params,cljs.core.cst$sym$match], null);
});

route_map.core.Match.cljs$lang$type = true;

route_map.core.Match.cljs$lang$ctorPrSeq = (function (this__7458__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"route-map.core/Match");
});

route_map.core.Match.cljs$lang$ctorPrWriter = (function (this__7458__auto__,writer__7459__auto__){
return cljs.core._write(writer__7459__auto__,"route-map.core/Match");
});

route_map.core.__GT_Match = (function route_map$core$__GT_Match(parents,params,match){
return (new route_map.core.Match(parents,params,match,null,null,null));
});

route_map.core.map__GT_Match = (function route_map$core$map__GT_Match(G__26409){
return (new route_map.core.Match(cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(G__26409),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__26409),cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(G__26409),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26409,cljs.core.cst$kw$parents,cljs.core.array_seq([cljs.core.cst$kw$params,cljs.core.cst$kw$match], 0)),null));
});

route_map.core.is_glob_QMARK_ = (function route_map$core$is_glob_QMARK_(k){
var s = cljs.core.name(k);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.indexOf("*"),(s.length - (1)));
});
route_map.core.get_param = (function route_map$core$get_param(node){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26425){
var vec__26426 = p__26425;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26426,(1),null);
return cljs.core.vector_QMARK_(k);
}),node));
});
route_map.core.fn_param_QMARK_ = (function route_map$core$fn_param_QMARK_(k){
var and__6785__auto__ = cljs.core.vector_QMARK_(k);
if(and__6785__auto__){
var f = cljs.core.first(k);
return (cljs.core.fn_QMARK_(f)) && (!((f instanceof cljs.core.Keyword)));
} else {
return and__6785__auto__;
}
});
route_map.core.match_fn_params = (function route_map$core$match_fn_params(node,x){
if(cljs.core.map_QMARK_(node)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__26437){
var vec__26438 = p__26437;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26438,(1),null);
var temp__4655__auto__ = cljs.core.first(k).call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,v], null));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26441){
var vec__26442 = p__26441;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26442,(1),null);
return route_map.core.fn_param_QMARK_(k);
}),node)));
} else {
return null;
}
});
route_map.core._match = (function route_map$core$_match(rs,pth){
var acc = route_map.core.__GT_Match(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null);
var G__26467 = pth;
var vec__26468 = G__26467;
var seq__26469 = cljs.core.seq(vec__26468);
var first__26470 = cljs.core.first(seq__26469);
var seq__26469__$1 = cljs.core.next(seq__26469);
var x = first__26470;
var rpth = seq__26469__$1;
var pth__$1 = vec__26468;
var node = rs;
var acc__$1 = acc;
var G__26467__$1 = G__26467;
var node__$1 = node;
while(true){
var acc__$2 = acc__$1;
var vec__26471 = G__26467__$1;
var seq__26472 = cljs.core.seq(vec__26471);
var first__26473 = cljs.core.first(seq__26472);
var seq__26472__$1 = cljs.core.next(seq__26472);
var x__$1 = first__26473;
var rpth__$1 = seq__26472__$1;
var pth__$2 = vec__26471;
var node__$2 = node__$1;
if(cljs.core.empty_QMARK_(pth__$2)){
if(cljs.core.truth_(node__$2)){
if((cljs.core.map_QMARK_(node__$2)) && (cljs.core.contains_QMARK_(node__$2,cljs.core.cst$kw$_DOT_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents], null),cljs.core.conj,node__$2),cljs.core.cst$kw$match,cljs.core.cst$kw$_DOT_.cljs$core$IFn$_invoke$arity$1(node__$2));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$2,cljs.core.cst$kw$match,node__$2);
}
} else {
return null;
}
} else {
var node__$3 = ((cljs.core.var_QMARK_(node__$2))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(node__$2) : cljs.core.deref.call(null,node__$2)):node__$2);
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node__$3,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var branch = temp__4655__auto__;
var G__26483 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents], null),cljs.core.conj,node__$3);
var G__26484 = rpth__$1;
var G__26485 = branch;
acc__$1 = G__26483;
G__26467__$1 = G__26484;
node__$1 = G__26485;
continue;
} else {
var temp__4655__auto____$1 = route_map.core.match_fn_params(node__$3,x__$1);
if(cljs.core.truth_(temp__4655__auto____$1)){
var vec__26474 = temp__4655__auto____$1;
var fparams = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26474,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26474,(1),null);
var G__26486 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,fparams);
var G__26487 = rpth__$1;
var G__26488 = branch;
acc__$1 = G__26486;
G__26467__$1 = G__26487;
node__$1 = G__26488;
continue;
} else {
var temp__4657__auto__ = (function (){var and__6785__auto__ = !((x__$1 instanceof cljs.core.Keyword));
if(and__6785__auto__){
var and__6785__auto____$1 = cljs.core.map_QMARK_(node__$3);
if(and__6785__auto____$1){
return route_map.core.get_param(node__$3);
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var vec__26477 = temp__4657__auto__;
var vec__26480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26480,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(1),null);
var acc__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parents], null),cljs.core.conj,node__$3);
if(cljs.core.truth_(route_map.core.is_glob_QMARK_(k))){
if((cljs.core.last(pth__$2) instanceof cljs.core.Keyword)){
var G__26489 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(acc__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.assoc,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(pth__$2)));
var G__26490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pth__$2)], null);
var G__26491 = branch;
acc__$1 = G__26489;
G__26467__$1 = G__26490;
node__$1 = G__26491;
continue;
} else {
var G__26492 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(acc__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.assoc,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pth__$2));
var G__26493 = cljs.core.PersistentVector.EMPTY;
var G__26494 = branch;
acc__$1 = G__26492;
G__26467__$1 = G__26493;
node__$1 = G__26494;
continue;
}
} else {
var G__26495 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(acc__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.assoc,k,x__$1);
var G__26496 = rpth__$1;
var G__26497 = branch;
acc__$1 = G__26495;
G__26467__$1 = G__26496;
node__$1 = G__26497;
continue;
}
} else {
return null;
}
}
}
}
break;
}
});
route_map.core.match = (function route_map$core$match(path,routes){
if(cljs.core.vector_QMARK_(path)){
var vec__26501 = path;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26501,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26501,(1),null);
return route_map.core._match(routes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(route_map.core.pathify(url),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(meth)))));
} else {
return route_map.core._match(routes,route_map.core.pathify(path));
}
});
route_map.core.wrap_route_map = (function route_map$core$wrap_route_map(h,routes){

return (function (p__26508){
var map__26509 = p__26508;
var map__26509__$1 = ((((!((map__26509 == null)))?((((map__26509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26509):map__26509);
var req = map__26509__$1;
var meth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26509__$1,cljs.core.cst$kw$request_DASH_method);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26509__$1,cljs.core.cst$kw$uri);
var temp__4655__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth,uri], null),routes);
if(cljs.core.truth_(temp__4655__auto__)){
var match = temp__4655__auto__;
var G__26511 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$route_DASH_match,match);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__26511) : h.call(null,G__26511));
} else {
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(req) : h.call(null,req));
}
});
});
route_map.core.first_not_nil = (function route_map$core$first_not_nil(coll){
var not_nils = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26512_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__26512_SHARP_);
}),coll);
var all_nils = (not_nils == null);
if(all_nils){
return null;
} else {
return cljs.core.first(not_nils);
}
});
route_map.core.get_static_paths = (function route_map$core$get_static_paths(routes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26513_SHARP_){
return cljs.core.first(p1__26513_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26514_SHARP_){
var vec__26518 = p1__26514_SHARP_;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26518,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26518,(1),null);
return typeof k === 'string';
}),routes));
});
route_map.core.get_ways = (function route_map$core$get_ways(routes){
var params = cljs.core.first(route_map.core.get_param(routes));
var static_paths = route_map.core.get_static_paths(routes);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (params,static_paths){
return (function (p1__26521_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__26521_SHARP_);
});})(params,static_paths))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,static_paths));
});
route_map.core.find_url = (function route_map$core$find_url(routes,name,auto_name,params,path){
var path_found = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$$name.cljs$core$IFn$_invoke$arity$1(routes))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(auto_name))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(params))));
if(path_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",path)){
return "/";
} else {
return path;
}
} else {
return route_map.core.first_not_nil(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path_found){
return (function (p1__26522_SHARP_){
var vec__26531 = ((typeof p1__26522_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26522_SHARP_,params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,p1__26522_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",auto_name))?p1__26522_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(auto_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26522_SHARP_)].join(''))], null):(((p1__26522_SHARP_ instanceof cljs.core.Keyword))?((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__26522_SHARP_),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,p1__26522_SHARP_),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__26522_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26522_SHARP_], null)):null),auto_name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.rest(params),cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26522_SHARP_], null)),auto_name], null)):null));
var next_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,(0),null);
var next_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,(1),null);
var next_routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,(2),null);
var next_auto_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,(3),null);
var G__26534 = ((cljs.core.var_QMARK_(next_routes))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(next_routes) : cljs.core.deref.call(null,next_routes)):next_routes);
var G__26535 = name;
var G__26536 = next_auto_name;
var G__26537 = next_params;
var G__26538 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_path)].join('');
return (route_map.core.find_url.cljs$core$IFn$_invoke$arity$5 ? route_map.core.find_url.cljs$core$IFn$_invoke$arity$5(G__26534,G__26535,G__26536,G__26537,G__26538) : route_map.core.find_url.call(null,G__26534,G__26535,G__26536,G__26537,G__26538));
});})(path_found))
,route_map.core.get_ways(routes)));
}
});
route_map.core.url = (function route_map$core$url(var_args){
var args26539 = [];
var len__7910__auto___26542 = arguments.length;
var i__7911__auto___26543 = (0);
while(true){
if((i__7911__auto___26543 < len__7910__auto___26542)){
args26539.push((arguments[i__7911__auto___26543]));

var G__26544 = (i__7911__auto___26543 + (1));
i__7911__auto___26543 = G__26544;
continue;
} else {
}
break;
}

var G__26541 = args26539.length;
switch (G__26541) {
case 2:
return route_map.core.url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return route_map.core.url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26539.length)].join('')));

}
});

route_map.core.url.cljs$core$IFn$_invoke$arity$2 = (function (routes,name){
return route_map.core.url.cljs$core$IFn$_invoke$arity$3(routes,name,cljs.core.PersistentVector.EMPTY);
});

route_map.core.url.cljs$core$IFn$_invoke$arity$3 = (function (routes,name,params){
return route_map.core.find_url(routes,name,"",params,"");
});

route_map.core.url.cljs$lang$maxFixedArity = 3;

