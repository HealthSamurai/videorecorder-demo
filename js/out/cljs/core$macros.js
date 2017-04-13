// Compiled by ClojureScript 1.9.456 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24526 = arguments.length;
var i__7911__auto___24527 = (0);
while(true){
if((i__7911__auto___24527 < len__7910__auto___24526)){
args__7917__auto__.push((arguments[i__7911__auto___24527]));

var G__24528 = (i__7911__auto___24527 + (1));
i__7911__auto___24527 = G__24528;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__7639__auto__ = form;
return cljs.core._conj((function (){var x__7639__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})());
var G__24529 = threaded;
var G__24530 = cljs.core.next(forms__$1);
x__$1 = G__24529;
forms__$1 = G__24530;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq24522){
var G__24523 = cljs.core.first(seq24522);
var seq24522__$1 = cljs.core.next(seq24522);
var G__24524 = cljs.core.first(seq24522__$1);
var seq24522__$2 = cljs.core.next(seq24522__$1);
var G__24525 = cljs.core.first(seq24522__$2);
var seq24522__$3 = cljs.core.next(seq24522__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24523,G__24524,G__24525,seq24522__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24535 = arguments.length;
var i__7911__auto___24536 = (0);
while(true){
if((i__7911__auto___24536 < len__7910__auto___24535)){
args__7917__auto__.push((arguments[i__7911__auto___24536]));

var G__24537 = (i__7911__auto___24536 + (1));
i__7911__auto___24536 = G__24537;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.next(form),cljs.core.array_seq([(function (){var x__7639__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__7639__auto__ = form;
return cljs.core._conj((function (){var x__7639__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})());
var G__24538 = threaded;
var G__24539 = cljs.core.next(forms__$1);
x__$1 = G__24538;
forms__$1 = G__24539;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq24531){
var G__24532 = cljs.core.first(seq24531);
var seq24531__$1 = cljs.core.next(seq24531);
var G__24533 = cljs.core.first(seq24531__$1);
var seq24531__$2 = cljs.core.next(seq24531__$1);
var G__24534 = cljs.core.first(seq24531__$2);
var seq24531__$3 = cljs.core.next(seq24531__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24532,G__24533,G__24534,seq24531__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args24540 = [];
var len__7910__auto___24548 = arguments.length;
var i__7911__auto___24549 = (0);
while(true){
if((i__7911__auto___24549 < len__7910__auto___24548)){
args24540.push((arguments[i__7911__auto___24549]));

var G__24550 = (i__7911__auto___24549 + (1));
i__7911__auto___24549 = G__24550;
continue;
} else {
}
break;
}

var G__24547 = args24540.length;
switch (G__24547) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24540.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq24541){
var G__24542 = cljs.core.first(seq24541);
var seq24541__$1 = cljs.core.next(seq24541);
var G__24543 = cljs.core.first(seq24541__$1);
var seq24541__$2 = cljs.core.next(seq24541__$1);
var G__24544 = cljs.core.first(seq24541__$2);
var seq24541__$3 = cljs.core.next(seq24541__$2);
var G__24545 = cljs.core.first(seq24541__$3);
var seq24541__$4 = cljs.core.next(seq24541__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__24542,G__24543,G__24544,G__24545,seq24541__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24555 = arguments.length;
var i__7911__auto___24556 = (0);
while(true){
if((i__7911__auto___24556 < len__7910__auto___24555)){
args__7917__auto__.push((arguments[i__7911__auto___24556]));

var G__24557 = (i__7911__auto___24556 + (1));
i__7911__auto___24556 = G__24557;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq24552){
var G__24553 = cljs.core.first(seq24552);
var seq24552__$1 = cljs.core.next(seq24552);
var G__24554 = cljs.core.first(seq24552__$1);
var seq24552__$2 = cljs.core.next(seq24552__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__24553,G__24554,seq24552__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24561 = arguments.length;
var i__7911__auto___24562 = (0);
while(true){
if((i__7911__auto___24562 < len__7910__auto___24561)){
args__7917__auto__.push((arguments[i__7911__auto___24562]));

var G__24563 = (i__7911__auto___24562 + (1));
i__7911__auto___24562 = G__24563;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__7639__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__7639__auto____$2 = cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_cond,cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$2);
})(),x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$if);
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq24558){
var G__24559 = cljs.core.first(seq24558);
var seq24558__$1 = cljs.core.next(seq24558);
var G__24560 = cljs.core.first(seq24558__$1);
var seq24558__$2 = cljs.core.next(seq24558__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__24559,G__24560,seq24558__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24568 = arguments.length;
var i__7911__auto___24569 = (0);
while(true){
if((i__7911__auto___24569 < len__7910__auto___24568)){
args__7917__auto__.push((arguments[i__7911__auto___24569]));

var G__24570 = (i__7911__auto___24569 + (1));
i__7911__auto___24569 = G__24570;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24564_SHARP_){
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__24564_SHARP_,cljs.core.assoc,cljs.core.cst$kw$declared,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$def);
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq24565){
var G__24566 = cljs.core.first(seq24565);
var seq24565__$1 = cljs.core.next(seq24565);
var G__24567 = cljs.core.first(seq24565__$1);
var seq24565__$2 = cljs.core.next(seq24565__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__24566,G__24567,seq24565__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24575 = arguments.length;
var i__7911__auto___24576 = (0);
while(true){
if((i__7911__auto___24576 < len__7910__auto___24575)){
args__7917__auto__.push((arguments[i__7911__auto___24576]));

var G__24577 = (i__7911__auto___24576 + (1));
i__7911__auto___24576 = G__24577;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__7639__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq24571){
var G__24572 = cljs.core.first(seq24571);
var seq24571__$1 = cljs.core.next(seq24571);
var G__24573 = cljs.core.first(seq24571__$1);
var seq24571__$2 = cljs.core.next(seq24571__$1);
var G__24574 = cljs.core.first(seq24571__$2);
var seq24571__$3 = cljs.core.next(seq24571__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__24572,G__24573,G__24574,seq24571__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__24578 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__24579 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__24578;
s = G__24579;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__24584){
var vec__24585 = p__24584;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7639__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24592 = arguments.length;
var i__7911__auto___24593 = (0);
while(true){
if((i__7911__auto___24593 < len__7910__auto___24592)){
args__7917__auto__.push((arguments[i__7911__auto___24593]));

var G__24594 = (i__7911__auto___24593 + (1));
i__7911__auto___24593 = G__24594;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq24588){
var G__24589 = cljs.core.first(seq24588);
var seq24588__$1 = cljs.core.next(seq24588);
var G__24590 = cljs.core.first(seq24588__$1);
var seq24588__$2 = cljs.core.next(seq24588__$1);
var G__24591 = cljs.core.first(seq24588__$2);
var seq24588__$3 = cljs.core.next(seq24588__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__24589,G__24590,G__24591,seq24588__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__24595 = cljs.core.next(params__$1);
var G__24596 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__24597 = lets;
params__$1 = G__24595;
new_params = G__24596;
lets = G__24597;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__24598 = cljs.core.next(params__$1);
var G__24599 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__24600 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__24598;
new_params = G__24599;
lets = G__24600;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24607 = arguments.length;
var i__7911__auto___24608 = (0);
while(true){
if((i__7911__auto___24608 < len__7910__auto___24607)){
args__7917__auto__.push((arguments[i__7911__auto___24608]));

var G__24609 = (i__7911__auto___24608 + (1));
i__7911__auto___24608 = G__24609;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__7639__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join('')));
} else {
}

var vec__24604 = sig;
var seq__24605 = cljs.core.seq(vec__24604);
var first__24606 = cljs.core.first(seq__24605);
var seq__24605__$1 = cljs.core.next(seq__24605);
var params = first__24606;
var body = seq__24605__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__6797__auto__ = conds;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_),(function (){var x__7639__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24604,seq__24605,first__24606,seq__24605__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__7639__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});})(vec__24604,seq__24605,first__24606,seq__24605__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24604,seq__24605,first__24606,seq__24605__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__7639__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});})(vec__24604,seq__24605,first__24606,seq__24605__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$fn_STAR_,name,new_sigs):cljs.core.cons(cljs.core.cst$sym$fn_STAR_,new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq24601){
var G__24602 = cljs.core.first(seq24601);
var seq24601__$1 = cljs.core.next(seq24601);
var G__24603 = cljs.core.first(seq24601__$1);
var seq24601__$2 = cljs.core.next(seq24601__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__24602,G__24603,seq24601__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24614 = arguments.length;
var i__7911__auto___24615 = (0);
while(true){
if((i__7911__auto___24615 < len__7910__auto___24614)){
args__7917__auto__.push((arguments[i__7911__auto___24615]));

var G__24616 = (i__7911__auto___24615 + (1));
i__7911__auto___24615 = G__24616;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),cljs.core.cst$kw$private,true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq24610){
var G__24611 = cljs.core.first(seq24610);
var seq24610__$1 = cljs.core.next(seq24610);
var G__24612 = cljs.core.first(seq24610__$1);
var seq24610__$2 = cljs.core.next(seq24610__$1);
var G__24613 = cljs.core.first(seq24610__$2);
var seq24610__$3 = cljs.core.next(seq24610__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__24611,G__24612,G__24613,seq24610__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args24618 = [];
var len__7910__auto___24627 = arguments.length;
var i__7911__auto___24628 = (0);
while(true){
if((i__7911__auto___24628 < len__7910__auto___24627)){
args24618.push((arguments[i__7911__auto___24628]));

var G__24629 = (i__7911__auto___24628 + (1));
i__7911__auto___24628 = G__24629;
continue;
} else {
}
break;
}

var G__24626 = args24618.length;
switch (G__24626) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24618.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7929__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__7639__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24617__auto__),(function (){var x__7639__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24617__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24617__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq24619){
var G__24620 = cljs.core.first(seq24619);
var seq24619__$1 = cljs.core.next(seq24619);
var G__24621 = cljs.core.first(seq24619__$1);
var seq24619__$2 = cljs.core.next(seq24619__$1);
var G__24622 = cljs.core.first(seq24619__$2);
var seq24619__$3 = cljs.core.next(seq24619__$2);
var G__24623 = cljs.core.first(seq24619__$3);
var seq24619__$4 = cljs.core.next(seq24619__$3);
var G__24624 = cljs.core.first(seq24619__$4);
var seq24619__$5 = cljs.core.next(seq24619__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__24620,G__24621,G__24622,G__24623,G__24624,seq24619__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args24631 = [];
var len__7910__auto___24634 = arguments.length;
var i__7911__auto___24635 = (0);
while(true){
if((i__7911__auto___24635 < len__7910__auto___24634)){
args24631.push((arguments[i__7911__auto___24635]));

var G__24636 = (i__7911__auto___24635 + (1));
i__7911__auto___24635 = G__24636;
continue;
} else {
}
break;
}

var G__24633 = args24631.length;
switch (G__24633) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args24631.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7639__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7639__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24643 = arguments.length;
var i__7911__auto___24644 = (0);
while(true){
if((i__7911__auto___24644 < len__7910__auto___24643)){
args__7917__auto__.push((arguments[i__7911__auto___24644]));

var G__24645 = (i__7911__auto___24644 + (1));
i__7911__auto___24644 = G__24645;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$letfn_STAR_),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24638_SHARP_){
return cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,p1__24638_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq24639){
var G__24640 = cljs.core.first(seq24639);
var seq24639__$1 = cljs.core.next(seq24639);
var G__24641 = cljs.core.first(seq24639__$1);
var seq24639__$2 = cljs.core.next(seq24639__$1);
var G__24642 = cljs.core.first(seq24639__$2);
var seq24639__$3 = cljs.core.next(seq24639__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__24640,G__24641,G__24642,seq24639__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24650 = arguments.length;
var i__7911__auto___24651 = (0);
while(true){
if((i__7911__auto___24651 < len__7910__auto___24650)){
args__7917__auto__.push((arguments[i__7911__auto___24651]));

var G__24652 = (i__7911__auto___24651 + (1));
i__7911__auto___24651 = G__24652;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq24646){
var G__24647 = cljs.core.first(seq24646);
var seq24646__$1 = cljs.core.next(seq24646);
var G__24648 = cljs.core.first(seq24646__$1);
var seq24646__$2 = cljs.core.next(seq24646__$1);
var G__24649 = cljs.core.first(seq24646__$2);
var seq24646__$3 = cljs.core.next(seq24646__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__24647,G__24648,G__24649,seq24646__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24657 = arguments.length;
var i__7911__auto___24658 = (0);
while(true){
if((i__7911__auto___24658 < len__7910__auto___24657)){
args__7917__auto__.push((arguments[i__7911__auto___24658]));

var G__24659 = (i__7911__auto___24658 + (1));
i__7911__auto___24658 = G__24659;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__7639__auto__ = test;
return cljs.core._conj((function (){var x__7639__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq24653){
var G__24654 = cljs.core.first(seq24653);
var seq24653__$1 = cljs.core.next(seq24653);
var G__24655 = cljs.core.first(seq24653__$1);
var seq24653__$2 = cljs.core.next(seq24653__$1);
var G__24656 = cljs.core.first(seq24653__$2);
var seq24653__$3 = cljs.core.next(seq24653__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__24654,G__24655,G__24656,seq24653__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24668 = arguments.length;
var i__7911__auto___24669 = (0);
while(true){
if((i__7911__auto___24669 < len__7910__auto___24668)){
args__7917__auto__.push((arguments[i__7911__auto___24669]));

var G__24670 = (i__7911__auto___24669 + (1));
i__7911__auto___24669 = G__24670;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__24665 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24665,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24665,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__24660__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7639__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__24660__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq24661){
var G__24662 = cljs.core.first(seq24661);
var seq24661__$1 = cljs.core.next(seq24661);
var G__24663 = cljs.core.first(seq24661__$1);
var seq24661__$2 = cljs.core.next(seq24661__$1);
var G__24664 = cljs.core.first(seq24661__$2);
var seq24661__$3 = cljs.core.next(seq24661__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__24662,G__24663,G__24664,seq24661__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24676 = arguments.length;
var i__7911__auto___24677 = (0);
while(true){
if((i__7911__auto___24677 < len__7910__auto___24676)){
args__7917__auto__.push((arguments[i__7911__auto___24677]));

var G__24678 = (i__7911__auto___24677 + (1));
i__7911__auto___24677 = G__24678;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24671__auto__),(function (){var x__7639__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24671__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24671__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq24672){
var G__24673 = cljs.core.first(seq24672);
var seq24672__$1 = cljs.core.next(seq24672);
var G__24674 = cljs.core.first(seq24672__$1);
var seq24672__$2 = cljs.core.next(seq24672__$1);
var G__24675 = cljs.core.first(seq24672__$2);
var seq24672__$3 = cljs.core.next(seq24672__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__24673,G__24674,G__24675,seq24672__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24683 = arguments.length;
var i__7911__auto___24684 = (0);
while(true){
if((i__7911__auto___24684 < len__7910__auto___24683)){
args__7917__auto__.push((arguments[i__7911__auto___24684]));

var G__24685 = (i__7911__auto___24684 + (1));
i__7911__auto___24684 = G__24685;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__7639__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),null),x__7639__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq24679){
var G__24680 = cljs.core.first(seq24679);
var seq24679__$1 = cljs.core.next(seq24679);
var G__24681 = cljs.core.first(seq24679__$1);
var seq24679__$2 = cljs.core.next(seq24679__$1);
var G__24682 = cljs.core.first(seq24679__$2);
var seq24679__$3 = cljs.core.next(seq24679__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__24680,G__24681,G__24682,seq24679__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24690 = arguments.length;
var i__7911__auto___24691 = (0);
while(true){
if((i__7911__auto___24691 < len__7910__auto___24690)){
args__7917__auto__.push((arguments[i__7911__auto___24691]));

var G__24692 = (i__7911__auto___24691 + (1));
i__7911__auto___24691 = G__24692;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7639__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body,(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq24686){
var G__24687 = cljs.core.first(seq24686);
var seq24686__$1 = cljs.core.next(seq24686);
var G__24688 = cljs.core.first(seq24686__$1);
var seq24686__$2 = cljs.core.next(seq24686__$1);
var G__24689 = cljs.core.first(seq24686__$2);
var seq24686__$3 = cljs.core.next(seq24686__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__24687,G__24688,G__24689,seq24686__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24701 = arguments.length;
var i__7911__auto___24702 = (0);
while(true){
if((i__7911__auto___24702 < len__7910__auto___24701)){
args__7917__auto__.push((arguments[i__7911__auto___24702]));

var G__24703 = (i__7911__auto___24702 + (1));
i__7911__auto___24702 = G__24703;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__24697){
var vec__24698 = p__24697;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24698,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24698,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq24693){
var G__24694 = cljs.core.first(seq24693);
var seq24693__$1 = cljs.core.next(seq24693);
var G__24695 = cljs.core.first(seq24693__$1);
var seq24693__$2 = cljs.core.next(seq24693__$1);
var G__24696 = cljs.core.first(seq24693__$2);
var seq24693__$3 = cljs.core.next(seq24693__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24694,G__24695,G__24696,seq24693__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24712 = arguments.length;
var i__7911__auto___24713 = (0);
while(true){
if((i__7911__auto___24713 < len__7910__auto___24712)){
args__7917__auto__.push((arguments[i__7911__auto___24713]));

var G__24714 = (i__7911__auto___24713 + (1));
i__7911__auto___24713 = G__24714;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__24708){
var vec__24709 = p__24708;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24709,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24709,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq24704){
var G__24705 = cljs.core.first(seq24704);
var seq24704__$1 = cljs.core.next(seq24704);
var G__24706 = cljs.core.first(seq24704__$1);
var seq24704__$2 = cljs.core.next(seq24704__$1);
var G__24707 = cljs.core.first(seq24704__$2);
var seq24704__$3 = cljs.core.next(seq24704__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24705,G__24706,G__24707,seq24704__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24720 = arguments.length;
var i__7911__auto___24721 = (0);
while(true){
if((i__7911__auto___24721 < len__7910__auto___24720)){
args__7917__auto__.push((arguments[i__7911__auto___24721]));

var G__24722 = (i__7911__auto___24721 + (1));
i__7911__auto___24721 = G__24722;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((4) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7918__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq24715){
var G__24716 = cljs.core.first(seq24715);
var seq24715__$1 = cljs.core.next(seq24715);
var G__24717 = cljs.core.first(seq24715__$1);
var seq24715__$2 = cljs.core.next(seq24715__$1);
var G__24718 = cljs.core.first(seq24715__$2);
var seq24715__$3 = cljs.core.next(seq24715__$2);
var G__24719 = cljs.core.first(seq24715__$3);
var seq24715__$4 = cljs.core.next(seq24715__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24716,G__24717,G__24718,G__24719,seq24715__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24727 = arguments.length;
var i__7911__auto___24728 = (0);
while(true){
if((i__7911__auto___24728 < len__7910__auto___24727)){
args__7917__auto__.push((arguments[i__7911__auto___24728]));

var G__24729 = (i__7911__auto___24728 + (1));
i__7911__auto___24728 = G__24729;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq24723){
var G__24724 = cljs.core.first(seq24723);
var seq24723__$1 = cljs.core.next(seq24723);
var G__24725 = cljs.core.first(seq24723__$1);
var seq24723__$2 = cljs.core.next(seq24723__$1);
var G__24726 = cljs.core.first(seq24723__$2);
var seq24723__$3 = cljs.core.next(seq24723__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24724,G__24725,G__24726,seq24723__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24734 = arguments.length;
var i__7911__auto___24735 = (0);
while(true){
if((i__7911__auto___24735 < len__7910__auto___24734)){
args__7917__auto__.push((arguments[i__7911__auto___24735]));

var G__24736 = (i__7911__auto___24735 + (1));
i__7911__auto___24735 = G__24736;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq24730){
var G__24731 = cljs.core.first(seq24730);
var seq24730__$1 = cljs.core.next(seq24730);
var G__24732 = cljs.core.first(seq24730__$1);
var seq24730__$2 = cljs.core.next(seq24730__$1);
var G__24733 = cljs.core.first(seq24730__$2);
var seq24730__$3 = cljs.core.next(seq24730__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__24731,G__24732,G__24733,seq24730__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args24738 = [];
var len__7910__auto___24747 = arguments.length;
var i__7911__auto___24748 = (0);
while(true){
if((i__7911__auto___24748 < len__7910__auto___24747)){
args24738.push((arguments[i__7911__auto___24748]));

var G__24749 = (i__7911__auto___24748 + (1));
i__7911__auto___24748 = G__24749;
continue;
} else {
}
break;
}

var G__24746 = args24738.length;
switch (G__24746) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24738.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7929__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_some),(function (){var x__7639__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24737__auto__),(function (){var x__7639__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24737__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24737__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq24739){
var G__24740 = cljs.core.first(seq24739);
var seq24739__$1 = cljs.core.next(seq24739);
var G__24741 = cljs.core.first(seq24739__$1);
var seq24739__$2 = cljs.core.next(seq24739__$1);
var G__24742 = cljs.core.first(seq24739__$2);
var seq24739__$3 = cljs.core.next(seq24739__$2);
var G__24743 = cljs.core.first(seq24739__$3);
var seq24739__$4 = cljs.core.next(seq24739__$3);
var G__24744 = cljs.core.first(seq24739__$4);
var seq24739__$5 = cljs.core.next(seq24739__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__24740,G__24741,G__24742,G__24743,G__24744,seq24739__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24756 = arguments.length;
var i__7911__auto___24757 = (0);
while(true){
if((i__7911__auto___24757 < len__7910__auto___24756)){
args__7917__auto__.push((arguments[i__7911__auto___24757]));

var G__24758 = (i__7911__auto___24757 + (1));
i__7911__auto___24757 = G__24758;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24751__auto__),(function (){var x__7639__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24751__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__24751__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq24752){
var G__24753 = cljs.core.first(seq24752);
var seq24752__$1 = cljs.core.next(seq24752);
var G__24754 = cljs.core.first(seq24752__$1);
var seq24752__$2 = cljs.core.next(seq24752__$1);
var G__24755 = cljs.core.first(seq24752__$2);
var seq24752__$3 = cljs.core.next(seq24752__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__24753,G__24754,G__24755,seq24752__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24759_SHARP_){
if(cljs.core.seq_QMARK_(p1__24759_SHARP_)){
return cljs.core.first(p1__24759_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24759_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a list")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24759_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__24760_SHARP_){
return cljs.core.vector_QMARK_(p1__24760_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__24761 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__24762 = cljs.core.next(fdecls);
ret = G__24761;
fdecls = G__24762;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__7639__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.array_seq([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.array_seq([cljs.core._conj((function (){var x__7639__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_seq)], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__24790 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__24791 = n;
var G__24792 = cljs.core.nnext(bs);
var G__24793 = true;
ret = G__24790;
n = G__24791;
bs = G__24792;
seen_rest_QMARK_ = G__24793;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$kw$as)){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__24794 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.array_seq([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7639__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__7639__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__7639__auto__ = gvec;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_nth)));
var G__24795 = (n + (1));
var G__24796 = cljs.core.next(bs);
var G__24797 = seen_rest_QMARK_;
ret = G__24794;
n = G__24795;
bs = G__24796;
seen_rest_QMARK_ = G__24797;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.array_seq([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ISeq),cljs.core.array_seq([(function (){var x__7639__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map),cljs.core.array_seq([(function (){var x__7639__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))));
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__24763_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__6797__auto__ = mkns;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.namespace(p1__24763_SHARP_);
}
})(),cljs.core.name(p1__24763_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__24764_SHARP_){
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__6797__auto__ = mkns;
if(cljs.core.truth_(or__6797__auto__)){
return or__6797__auto__;
} else {
return cljs.core.namespace(p1__24764_SHARP_);
}
})(),cljs.core.name(p1__24764_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$quote);
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__24765_SHARP_,p2__24766_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24765_SHARP_,p2__24766_SHARP_,cljs.core.val(entry).call(null,p2__24766_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),cljs.core.key(entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,cljs.core.cst$kw$as,cljs.core.array_seq([cljs.core.cst$kw$or], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__7639__auto__ = gmap;
return cljs.core._conj((function (){var x__7639__auto____$1 = bk;
return cljs.core._conj((function (){var x__7639__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$2);
})(),x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get):cljs.core._conj((function (){var x__7639__auto__ = gmap;
return cljs.core._conj((function (){var x__7639__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get));
var G__24798 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.array_seq([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__24799 = cljs.core.next(bes);
ret = G__24798;
bes = G__24799;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding form: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__24767_SHARP_){
return (cljs.core.first(p1__24767_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding key: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_declare),(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/** @define {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_define),(function (){var x__7639__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24804 = arguments.length;
var i__7911__auto___24805 = (0);
while(true){
if((i__7911__auto___24805 < len__7910__auto___24804)){
args__7917__auto__.push((arguments[i__7911__auto___24805]));

var G__24806 = (i__7911__auto___24805 + (1));
i__7911__auto___24805 = G__24806;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$let_STAR_),(function (){var x__7639__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq24800){
var G__24801 = cljs.core.first(seq24800);
var seq24800__$1 = cljs.core.next(seq24800);
var G__24802 = cljs.core.first(seq24800__$1);
var seq24800__$2 = cljs.core.next(seq24800__$1);
var G__24803 = cljs.core.first(seq24800__$2);
var seq24800__$3 = cljs.core.next(seq24800__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__24801,G__24802,G__24803,seq24800__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24815 = arguments.length;
var i__7911__auto___24816 = (0);
while(true){
if((i__7911__auto___24816 < len__7910__auto___24815)){
args__7917__auto__.push((arguments[i__7911__auto___24816]));

var G__24817 = (i__7911__auto___24816 + (1));
i__7911__auto___24816 = G__24817;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__7639__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__24811){
var vec__24812 = p__24811;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24812,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24812,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq24807){
var G__24808 = cljs.core.first(seq24807);
var seq24807__$1 = cljs.core.next(seq24807);
var G__24809 = cljs.core.first(seq24807__$1);
var seq24807__$2 = cljs.core.next(seq24807__$1);
var G__24810 = cljs.core.first(seq24807__$2);
var seq24807__$3 = cljs.core.next(seq24807__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__24808,G__24809,G__24810,seq24807__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24818_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24818_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$IFn,cljs.core.cst$sym$ICounted,cljs.core.cst$sym$IEmptyableCollection,cljs.core.cst$sym$ICollection,cljs.core.cst$sym$IIndexed,cljs.core.cst$sym$ASeq,cljs.core.cst$sym$ISeq,cljs.core.cst$sym$INext,cljs.core.cst$sym$ILookup,cljs.core.cst$sym$IAssociative,cljs.core.cst$sym$IMap,cljs.core.cst$sym$IMapEntry,cljs.core.cst$sym$ISet,cljs.core.cst$sym$IStack,cljs.core.cst$sym$IVector,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$IDerefWithTimeout,cljs.core.cst$sym$IMeta,cljs.core.cst$sym$IWithMeta,cljs.core.cst$sym$IReduce,cljs.core.cst$sym$IKVReduce,cljs.core.cst$sym$IEquiv,cljs.core.cst$sym$IHash,cljs.core.cst$sym$ISeqable,cljs.core.cst$sym$ISequential,cljs.core.cst$sym$IList,cljs.core.cst$sym$IRecord,cljs.core.cst$sym$IReversible,cljs.core.cst$sym$ISorted,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IWriter,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IPending,cljs.core.cst$sym$IWatchable,cljs.core.cst$sym$IEditableCollection,cljs.core.cst$sym$ITransientCollection,cljs.core.cst$sym$ITransientAssociative,cljs.core.cst$sym$ITransientMap,cljs.core.cst$sym$ITransientVector,cljs.core.cst$sym$ITransientSet,cljs.core.cst$sym$IMultiFn,cljs.core.cst$sym$IChunkedSeq,cljs.core.cst$sym$IChunkedNext,cljs.core.cst$sym$IComparable,cljs.core.cst$sym$INamed,cljs.core.cst$sym$ICloneable,cljs.core.cst$sym$IAtom,cljs.core.cst$sym$IReset,cljs.core.cst$sym$ISwap], true)),cljs.core.iterate((function (p__24819){
var vec__24820 = p__24819;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24820,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24820,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24826 = arguments.length;
var i__7911__auto___24827 = (0);
while(true){
if((i__7911__auto___24827 < len__7910__auto___24826)){
args__7917__auto__.push((arguments[i__7911__auto___24827]));

var G__24828 = (i__7911__auto___24827 + (1));
i__7911__auto___24827 = G__24828;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})")));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),cljs.core.str.cljs$core$IFn$_invoke$arity$1("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq24823){
var G__24824 = cljs.core.first(seq24823);
var seq24823__$1 = cljs.core.next(seq24823);
var G__24825 = cljs.core.first(seq24823__$1);
var seq24823__$2 = cljs.core.next(seq24823__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__24824,G__24825,seq24823__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean);
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__6785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$dot,null], null), null).call(null,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__6785__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null).call(null,cljs.analyzer.infer_tag(env,ast));
} else {
return and__6785__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args24832 = [];
var len__7910__auto___24839 = arguments.length;
var i__7911__auto___24840 = (0);
while(true){
if((i__7911__auto___24840 < len__7910__auto___24839)){
args24832.push((arguments[i__7911__auto___24840]));

var G__24841 = (i__7911__auto___24840 + (1));
i__7911__auto___24840 = G__24841;
continue;
} else {
}
break;
}

var G__24838 = args24832.length;
switch (G__24838) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24832.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7929__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__24829_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__24829_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__24830_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24830_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7639__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__24831__auto__),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__24831__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__24831__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq24833){
var G__24834 = cljs.core.first(seq24833);
var seq24833__$1 = cljs.core.next(seq24833);
var G__24835 = cljs.core.first(seq24833__$1);
var seq24833__$2 = cljs.core.next(seq24833__$1);
var G__24836 = cljs.core.first(seq24833__$2);
var seq24833__$3 = cljs.core.next(seq24833__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__24834,G__24835,G__24836,seq24833__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args24846 = [];
var len__7910__auto___24853 = arguments.length;
var i__7911__auto___24854 = (0);
while(true){
if((i__7911__auto___24854 < len__7910__auto___24853)){
args24846.push((arguments[i__7911__auto___24854]));

var G__24855 = (i__7911__auto___24854 + (1));
i__7911__auto___24854 = G__24855;
continue;
} else {
}
break;
}

var G__24852 = args24846.length;
switch (G__24852) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24846.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7929__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__24843_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__24843_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__24844_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__24844_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7639__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__24845__auto__),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__24845__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__24845__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq24847){
var G__24848 = cljs.core.first(seq24847);
var seq24847__$1 = cljs.core.next(seq24847);
var G__24849 = cljs.core.first(seq24847__$1);
var seq24847__$2 = cljs.core.next(seq24847__$1);
var G__24850 = cljs.core.first(seq24847__$2);
var seq24847__$3 = cljs.core.next(seq24847__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__24848,G__24849,G__24850,seq24847__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH__EQ_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.some_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"(!~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} != ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} == ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"~{}"),cljs.core.cst$sym$js_STAR_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/symbol? x)")].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} != null && ~{} !== false)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = obj;
return cljs.core._conj((function (){var x__7639__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"delete ~{}[~{}]"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = key;
return cljs.core._conj((function (){var x__7639__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"~{} in ~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),cljs.core.cst$sym$js_STAR_);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__7639__auto__);
})(),cljs.core.cst$sym$do);
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__24861 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__24862 = cljs.core.seq(vec__24861);
var first__24863 = cljs.core.first(seq__24862);
var seq__24862__$1 = cljs.core.next(seq__24862);
var x = first__24863;
var ys = seq__24862__$1;
return cljs.core._conj((function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n/**\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__24861,seq__24862,first__24863,seq__24862__$1,x,ys){
return (function (p1__24857_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__24857_SHARP_,/^   /,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
});})(vec__24861,seq__24862,first__24863,seq__24862__$1,x,ys))
,ys))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" */\n")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~{} = /** @type {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */ (~{})")].join('');
return cljs.core._conj((function (){var x__7639__auto__ = cast_expr;
return cljs.core._conj((function (){var x__7639__auto____$1 = x;
return cljs.core._conj((function (){var x__7639__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$2);
})(),x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*/")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"~{} === true"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"~{} === false"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"typeof ~{} === 'string'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"typeof ~{} !== 'undefined'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"(void 0 === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = a;
return cljs.core._conj((function (){var x__7639__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} instanceof ~{})"),cljs.core.cst$sym$js_STAR_):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24864__auto__),(function (){var x__7639__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24865__auto__),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__24865__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__24864__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"typeof ~{} === 'number'"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Symbol),cljs.core.array_seq([(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Keyword),cljs.core.array_seq([(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args24866 = [];
var len__7910__auto___24874 = arguments.length;
var i__7911__auto___24875 = (0);
while(true){
if((i__7911__auto___24875 < len__7910__auto___24874)){
args24866.push((arguments[i__7911__auto___24875]));

var G__24876 = (i__7911__auto___24875 + (1));
i__7911__auto___24875 = G__24876;
continue;
} else {
}
break;
}

var G__24873 = args24866.length;
switch (G__24873) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24866.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = a;
return cljs.core._conj((function (){var x__7639__auto____$1 = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),idxs], 0))));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq24867){
var G__24868 = cljs.core.first(seq24867);
var seq24867__$1 = cljs.core.next(seq24867);
var G__24869 = cljs.core.first(seq24867__$1);
var seq24867__$2 = cljs.core.next(seq24867__$1);
var G__24870 = cljs.core.first(seq24867__$2);
var seq24867__$3 = cljs.core.next(seq24867__$2);
var G__24871 = cljs.core.first(seq24867__$3);
var seq24867__$4 = cljs.core.next(seq24867__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__24868,G__24869,G__24870,G__24871,seq24867__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args24878 = [];
var len__7910__auto___24887 = arguments.length;
var i__7911__auto___24888 = (0);
while(true){
if((i__7911__auto___24888 < len__7910__auto___24887)){
args24878.push((arguments[i__7911__auto___24888]));

var G__24889 = (i__7911__auto___24888 + (1));
i__7911__auto___24888 = G__24889;
continue;
} else {
}
break;
}

var G__24886 = args24878.length;
switch (G__24886) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24878.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7929__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = a;
return cljs.core._conj((function (){var x__7639__auto____$1 = i;
return cljs.core._conj((function (){var x__7639__auto____$2 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$2);
})(),x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}][~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" = ~{})")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),idxv], 0))));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq24879){
var G__24880 = cljs.core.first(seq24879);
var seq24879__$1 = cljs.core.next(seq24879);
var G__24881 = cljs.core.first(seq24879__$1);
var seq24879__$2 = cljs.core.next(seq24879__$1);
var G__24882 = cljs.core.first(seq24879__$2);
var seq24879__$3 = cljs.core.next(seq24879__$2);
var G__24883 = cljs.core.first(seq24879__$3);
var seq24879__$4 = cljs.core.next(seq24879__$3);
var G__24884 = cljs.core.first(seq24879__$4);
var seq24879__$5 = cljs.core.next(seq24879__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__24880,G__24881,G__24882,G__24883,G__24884,seq24879__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args24891 = [];
var len__7910__auto___24899 = arguments.length;
var i__7911__auto___24900 = (0);
while(true){
if((i__7911__auto___24900 < len__7910__auto___24899)){
args24891.push((arguments[i__7911__auto___24900]));

var G__24901 = (i__7911__auto___24900 + (1));
i__7911__auto___24900 = G__24901;
continue;
} else {
}
break;
}

var G__24898 = args24891.length;
switch (G__24898) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24891.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} + ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq24892){
var G__24893 = cljs.core.first(seq24892);
var seq24892__$1 = cljs.core.next(seq24892);
var G__24894 = cljs.core.first(seq24892__$1);
var seq24892__$2 = cljs.core.next(seq24892__$1);
var G__24895 = cljs.core.first(seq24892__$2);
var seq24892__$3 = cljs.core.next(seq24892__$2);
var G__24896 = cljs.core.first(seq24892__$3);
var seq24892__$4 = cljs.core.next(seq24892__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__24893,G__24894,G__24895,G__24896,seq24892__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24906 = arguments.length;
var i__7911__auto___24907 = (0);
while(true){
if((i__7911__auto___24907 < len__7910__auto___24906)){
args__7917__auto__.push((arguments[i__7911__auto___24907]));

var G__24908 = (i__7911__auto___24907 + (1));
i__7911__auto___24907 = G__24908;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq24903){
var G__24904 = cljs.core.first(seq24903);
var seq24903__$1 = cljs.core.next(seq24903);
var G__24905 = cljs.core.first(seq24903__$1);
var seq24903__$2 = cljs.core.next(seq24903__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__24904,G__24905,seq24903__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24912 = arguments.length;
var i__7911__auto___24913 = (0);
while(true){
if((i__7911__auto___24913 < len__7910__auto___24912)){
args__7917__auto__.push((arguments[i__7911__auto___24913]));

var G__24914 = (i__7911__auto___24913 + (1));
i__7911__auto___24913 = G__24914;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq24909){
var G__24910 = cljs.core.first(seq24909);
var seq24909__$1 = cljs.core.next(seq24909);
var G__24911 = cljs.core.first(seq24909__$1);
var seq24909__$2 = cljs.core.next(seq24909__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__24910,G__24911,seq24909__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24918 = arguments.length;
var i__7911__auto___24919 = (0);
while(true){
if((i__7911__auto___24919 < len__7910__auto___24918)){
args__7917__auto__.push((arguments[i__7911__auto___24919]));

var G__24920 = (i__7911__auto___24919 + (1));
i__7911__auto___24919 = G__24920;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq24915){
var G__24916 = cljs.core.first(seq24915);
var seq24915__$1 = cljs.core.next(seq24915);
var G__24917 = cljs.core.first(seq24915__$1);
var seq24915__$2 = cljs.core.next(seq24915__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__24916,G__24917,seq24915__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24924 = arguments.length;
var i__7911__auto___24925 = (0);
while(true){
if((i__7911__auto___24925 < len__7910__auto___24924)){
args__7917__auto__.push((arguments[i__7911__auto___24925]));

var G__24926 = (i__7911__auto___24925 + (1));
i__7911__auto___24925 = G__24926;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq24921){
var G__24922 = cljs.core.first(seq24921);
var seq24921__$1 = cljs.core.next(seq24921);
var G__24923 = cljs.core.first(seq24921__$1);
var seq24921__$2 = cljs.core.next(seq24921__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__24922,G__24923,seq24921__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24930 = arguments.length;
var i__7911__auto___24931 = (0);
while(true){
if((i__7911__auto___24931 < len__7910__auto___24930)){
args__7917__auto__.push((arguments[i__7911__auto___24931]));

var G__24932 = (i__7911__auto___24931 + (1));
i__7911__auto___24931 = G__24932;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq24927){
var G__24928 = cljs.core.first(seq24927);
var seq24927__$1 = cljs.core.next(seq24927);
var G__24929 = cljs.core.first(seq24927__$1);
var seq24927__$2 = cljs.core.next(seq24927__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__24928,G__24929,seq24927__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mod),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24936 = arguments.length;
var i__7911__auto___24937 = (0);
while(true){
if((i__7911__auto___24937 < len__7910__auto___24936)){
args__7917__auto__.push((arguments[i__7911__auto___24937]));

var G__24938 = (i__7911__auto___24937 + (1));
i__7911__auto___24937 = G__24938;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq24933){
var G__24934 = cljs.core.first(seq24933);
var seq24933__$1 = cljs.core.next(seq24933);
var G__24935 = cljs.core.first(seq24933__$1);
var seq24933__$2 = cljs.core.next(seq24933__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__24934,G__24935,seq24933__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__7917__auto__ = [];
var len__7910__auto___24942 = arguments.length;
var i__7911__auto___24943 = (0);
while(true){
if((i__7911__auto___24943 < len__7910__auto___24942)){
args__7917__auto__.push((arguments[i__7911__auto___24943]));

var G__24944 = (i__7911__auto___24943 + (1));
i__7911__auto___24943 = G__24944;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq24939){
var G__24940 = cljs.core.first(seq24939);
var seq24939__$1 = cljs.core.next(seq24939);
var G__24941 = cljs.core.first(seq24939__$1);
var seq24939__$2 = cljs.core.next(seq24939__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__24940,G__24941,seq24939__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args24945 = [];
var len__7910__auto___24953 = arguments.length;
var i__7911__auto___24954 = (0);
while(true){
if((i__7911__auto___24954 < len__7910__auto___24953)){
args24945.push((arguments[i__7911__auto___24954]));

var G__24955 = (i__7911__auto___24954 + (1));
i__7911__auto___24954 = G__24955;
continue;
} else {
}
break;
}

var G__24952 = args24945.length;
switch (G__24952) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24945.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"(- ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} - ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq24946){
var G__24947 = cljs.core.first(seq24946);
var seq24946__$1 = cljs.core.next(seq24946);
var G__24948 = cljs.core.first(seq24946__$1);
var seq24946__$2 = cljs.core.next(seq24946__$1);
var G__24949 = cljs.core.first(seq24946__$2);
var seq24946__$3 = cljs.core.next(seq24946__$2);
var G__24950 = cljs.core.first(seq24946__$3);
var seq24946__$4 = cljs.core.next(seq24946__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__24947,G__24948,G__24949,G__24950,seq24946__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args24957 = [];
var len__7910__auto___24965 = arguments.length;
var i__7911__auto___24966 = (0);
while(true){
if((i__7911__auto___24966 < len__7910__auto___24965)){
args24957.push((arguments[i__7911__auto___24966]));

var G__24967 = (i__7911__auto___24966 + (1));
i__7911__auto___24966 = G__24967;
continue;
} else {
}
break;
}

var G__24964 = args24957.length;
switch (G__24964) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24957.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} * ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq24958){
var G__24959 = cljs.core.first(seq24958);
var seq24958__$1 = cljs.core.next(seq24958);
var G__24960 = cljs.core.first(seq24958__$1);
var seq24958__$2 = cljs.core.next(seq24958__$1);
var G__24961 = cljs.core.first(seq24958__$2);
var seq24958__$3 = cljs.core.next(seq24958__$2);
var G__24962 = cljs.core.first(seq24958__$3);
var seq24958__$4 = cljs.core.next(seq24958__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__24959,G__24960,G__24961,G__24962,seq24958__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args24969 = [];
var len__7910__auto___24977 = arguments.length;
var i__7911__auto___24978 = (0);
while(true){
if((i__7911__auto___24978 < len__7910__auto___24977)){
args24969.push((arguments[i__7911__auto___24978]));

var G__24979 = (i__7911__auto___24978 + (1));
i__7911__auto___24978 = G__24979;
continue;
} else {
}
break;
}

var G__24976 = args24969.length;
switch (G__24976) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24969.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq24970){
var G__24971 = cljs.core.first(seq24970);
var seq24970__$1 = cljs.core.next(seq24970);
var G__24972 = cljs.core.first(seq24970__$1);
var seq24970__$2 = cljs.core.next(seq24970__$1);
var G__24973 = cljs.core.first(seq24970__$2);
var seq24970__$3 = cljs.core.next(seq24970__$2);
var G__24974 = cljs.core.first(seq24970__$3);
var seq24970__$4 = cljs.core.next(seq24970__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__24971,G__24972,G__24973,G__24974,seq24970__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args24981 = [];
var len__7910__auto___24989 = arguments.length;
var i__7911__auto___24990 = (0);
while(true){
if((i__7911__auto___24990 < len__7910__auto___24989)){
args24981.push((arguments[i__7911__auto___24990]));

var G__24991 = (i__7911__auto___24990 + (1));
i__7911__auto___24990 = G__24991;
continue;
} else {
}
break;
}

var G__24988 = args24981.length;
switch (G__24988) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24981.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq24982){
var G__24983 = cljs.core.first(seq24982);
var seq24982__$1 = cljs.core.next(seq24982);
var G__24984 = cljs.core.first(seq24982__$1);
var seq24982__$2 = cljs.core.next(seq24982__$1);
var G__24985 = cljs.core.first(seq24982__$2);
var seq24982__$3 = cljs.core.next(seq24982__$2);
var G__24986 = cljs.core.first(seq24982__$3);
var seq24982__$4 = cljs.core.next(seq24982__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__24983,G__24984,G__24985,G__24986,seq24982__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args24993 = [];
var len__7910__auto___25001 = arguments.length;
var i__7911__auto___25002 = (0);
while(true){
if((i__7911__auto___25002 < len__7910__auto___25001)){
args24993.push((arguments[i__7911__auto___25002]));

var G__25003 = (i__7911__auto___25002 + (1));
i__7911__auto___25002 = G__25003;
continue;
} else {
}
break;
}

var G__25000 = args24993.length;
switch (G__25000) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args24993.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} < ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq24994){
var G__24995 = cljs.core.first(seq24994);
var seq24994__$1 = cljs.core.next(seq24994);
var G__24996 = cljs.core.first(seq24994__$1);
var seq24994__$2 = cljs.core.next(seq24994__$1);
var G__24997 = cljs.core.first(seq24994__$2);
var seq24994__$3 = cljs.core.next(seq24994__$2);
var G__24998 = cljs.core.first(seq24994__$3);
var seq24994__$4 = cljs.core.next(seq24994__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__24995,G__24996,G__24997,G__24998,seq24994__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args25005 = [];
var len__7910__auto___25013 = arguments.length;
var i__7911__auto___25014 = (0);
while(true){
if((i__7911__auto___25014 < len__7910__auto___25013)){
args25005.push((arguments[i__7911__auto___25014]));

var G__25015 = (i__7911__auto___25014 + (1));
i__7911__auto___25014 = G__25015;
continue;
} else {
}
break;
}

var G__25012 = args25005.length;
switch (G__25012) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25005.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} <= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq25006){
var G__25007 = cljs.core.first(seq25006);
var seq25006__$1 = cljs.core.next(seq25006);
var G__25008 = cljs.core.first(seq25006__$1);
var seq25006__$2 = cljs.core.next(seq25006__$1);
var G__25009 = cljs.core.first(seq25006__$2);
var seq25006__$3 = cljs.core.next(seq25006__$2);
var G__25010 = cljs.core.first(seq25006__$3);
var seq25006__$4 = cljs.core.next(seq25006__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__25007,G__25008,G__25009,G__25010,seq25006__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args25017 = [];
var len__7910__auto___25025 = arguments.length;
var i__7911__auto___25026 = (0);
while(true){
if((i__7911__auto___25026 < len__7910__auto___25025)){
args25017.push((arguments[i__7911__auto___25026]));

var G__25027 = (i__7911__auto___25026 + (1));
i__7911__auto___25026 = G__25027;
continue;
} else {
}
break;
}

var G__25024 = args25017.length;
switch (G__25024) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25017.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} > ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq25018){
var G__25019 = cljs.core.first(seq25018);
var seq25018__$1 = cljs.core.next(seq25018);
var G__25020 = cljs.core.first(seq25018__$1);
var seq25018__$2 = cljs.core.next(seq25018__$1);
var G__25021 = cljs.core.first(seq25018__$2);
var seq25018__$3 = cljs.core.next(seq25018__$2);
var G__25022 = cljs.core.first(seq25018__$3);
var seq25018__$4 = cljs.core.next(seq25018__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__25019,G__25020,G__25021,G__25022,seq25018__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args25029 = [];
var len__7910__auto___25037 = arguments.length;
var i__7911__auto___25038 = (0);
while(true){
if((i__7911__auto___25038 < len__7910__auto___25037)){
args25029.push((arguments[i__7911__auto___25038]));

var G__25039 = (i__7911__auto___25038 + (1));
i__7911__auto___25038 = G__25039;
continue;
} else {
}
break;
}

var G__25036 = args25029.length;
switch (G__25036) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25029.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} >= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq25030){
var G__25031 = cljs.core.first(seq25030);
var seq25030__$1 = cljs.core.next(seq25030);
var G__25032 = cljs.core.first(seq25030__$1);
var seq25030__$2 = cljs.core.next(seq25030__$1);
var G__25033 = cljs.core.first(seq25030__$2);
var seq25030__$3 = cljs.core.next(seq25030__$2);
var G__25034 = cljs.core.first(seq25030__$3);
var seq25030__$4 = cljs.core.next(seq25030__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__25031,G__25032,G__25033,G__25034,seq25030__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args25041 = [];
var len__7910__auto___25049 = arguments.length;
var i__7911__auto___25050 = (0);
while(true){
if((i__7911__auto___25050 < len__7910__auto___25049)){
args25041.push((arguments[i__7911__auto___25050]));

var G__25051 = (i__7911__auto___25050 + (1));
i__7911__auto___25050 = G__25051;
continue;
} else {
}
break;
}

var G__25048 = args25041.length;
switch (G__25048) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25041.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq25042){
var G__25043 = cljs.core.first(seq25042);
var seq25042__$1 = cljs.core.next(seq25042);
var G__25044 = cljs.core.first(seq25042__$1);
var seq25042__$2 = cljs.core.next(seq25042__$1);
var G__25045 = cljs.core.first(seq25042__$2);
var seq25042__$3 = cljs.core.next(seq25042__$2);
var G__25046 = cljs.core.first(seq25042__$3);
var seq25042__$4 = cljs.core.next(seq25042__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__25043,G__25044,G__25045,G__25046,seq25042__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args25055 = [];
var len__7910__auto___25063 = arguments.length;
var i__7911__auto___25064 = (0);
while(true){
if((i__7911__auto___25064 < len__7910__auto___25063)){
args25055.push((arguments[i__7911__auto___25064]));

var G__25065 = (i__7911__auto___25064 + (1));
i__7911__auto___25064 = G__25065;
continue;
} else {
}
break;
}

var G__25062 = args25055.length;
switch (G__25062) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25055.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25053__auto__),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__25054__auto__),(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25053__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__25054__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25053__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__25054__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq25056){
var G__25057 = cljs.core.first(seq25056);
var seq25056__$1 = cljs.core.next(seq25056);
var G__25058 = cljs.core.first(seq25056__$1);
var seq25056__$2 = cljs.core.next(seq25056__$1);
var G__25059 = cljs.core.first(seq25056__$2);
var seq25056__$3 = cljs.core.next(seq25056__$2);
var G__25060 = cljs.core.first(seq25056__$3);
var seq25056__$4 = cljs.core.next(seq25056__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__25057,G__25058,G__25059,G__25060,seq25056__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args25069 = [];
var len__7910__auto___25077 = arguments.length;
var i__7911__auto___25078 = (0);
while(true){
if((i__7911__auto___25078 < len__7910__auto___25077)){
args25069.push((arguments[i__7911__auto___25078]));

var G__25079 = (i__7911__auto___25078 + (1));
i__7911__auto___25078 = G__25079;
continue;
} else {
}
break;
}

var G__25076 = args25069.length;
switch (G__25076) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25069.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25067__auto__),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__25068__auto__),(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25067__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__25068__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25067__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__25068__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq25070){
var G__25071 = cljs.core.first(seq25070);
var seq25070__$1 = cljs.core.next(seq25070);
var G__25072 = cljs.core.first(seq25070__$1);
var seq25070__$2 = cljs.core.next(seq25070__$1);
var G__25073 = cljs.core.first(seq25070__$2);
var seq25070__$3 = cljs.core.next(seq25070__$2);
var G__25074 = cljs.core.first(seq25070__$3);
var seq25070__$4 = cljs.core.next(seq25070__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__25071,G__25072,G__25073,G__25074,seq25070__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = num;
return cljs.core._conj((function (){var x__7639__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} % ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"(~ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args25081 = [];
var len__7910__auto___25089 = arguments.length;
var i__7911__auto___25090 = (0);
while(true){
if((i__7911__auto___25090 < len__7910__auto___25089)){
args25081.push((arguments[i__7911__auto___25090]));

var G__25091 = (i__7911__auto___25090 + (1));
i__7911__auto___25090 = G__25091;
continue;
} else {
}
break;
}

var G__25088 = args25081.length;
switch (G__25088) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25081.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq25082){
var G__25083 = cljs.core.first(seq25082);
var seq25082__$1 = cljs.core.next(seq25082);
var G__25084 = cljs.core.first(seq25082__$1);
var seq25082__$2 = cljs.core.next(seq25082__$1);
var G__25085 = cljs.core.first(seq25082__$2);
var seq25082__$3 = cljs.core.next(seq25082__$2);
var G__25086 = cljs.core.first(seq25082__$3);
var seq25082__$4 = cljs.core.next(seq25082__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__25083,G__25084,G__25085,G__25086,seq25082__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args25093 = [];
var len__7910__auto___25101 = arguments.length;
var i__7911__auto___25102 = (0);
while(true){
if((i__7911__auto___25102 < len__7910__auto___25101)){
args25093.push((arguments[i__7911__auto___25102]));

var G__25103 = (i__7911__auto___25102 + (1));
i__7911__auto___25102 = G__25103;
continue;
} else {
}
break;
}

var G__25100 = args25093.length;
switch (G__25100) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25093.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq25094){
var G__25095 = cljs.core.first(seq25094);
var seq25094__$1 = cljs.core.next(seq25094);
var G__25096 = cljs.core.first(seq25094__$1);
var seq25094__$2 = cljs.core.next(seq25094__$1);
var G__25097 = cljs.core.first(seq25094__$2);
var seq25094__$3 = cljs.core.next(seq25094__$2);
var G__25098 = cljs.core.first(seq25094__$3);
var seq25094__$4 = cljs.core.next(seq25094__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__25095,G__25096,G__25097,G__25098,seq25094__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args25105 = [];
var len__7910__auto___25113 = arguments.length;
var i__7911__auto___25114 = (0);
while(true){
if((i__7911__auto___25114 < len__7910__auto___25113)){
args25105.push((arguments[i__7911__auto___25114]));

var G__25115 = (i__7911__auto___25114 + (1));
i__7911__auto___25114 = G__25115;
continue;
} else {
}
break;
}

var G__25112 = args25105.length;
switch (G__25112) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25105.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} | ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq25106){
var G__25107 = cljs.core.first(seq25106);
var seq25106__$1 = cljs.core.next(seq25106);
var G__25108 = cljs.core.first(seq25106__$1);
var seq25106__$2 = cljs.core.next(seq25106__$1);
var G__25109 = cljs.core.first(seq25106__$2);
var seq25106__$3 = cljs.core.next(seq25106__$2);
var G__25110 = cljs.core.first(seq25106__$3);
var seq25106__$4 = cljs.core.next(seq25106__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__25107,G__25108,G__25109,G__25110,seq25106__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args25117 = [];
var len__7910__auto___25125 = arguments.length;
var i__7911__auto___25126 = (0);
while(true){
if((i__7911__auto___25126 < len__7910__auto___25125)){
args25117.push((arguments[i__7911__auto___25126]));

var G__25127 = (i__7911__auto___25126 + (1));
i__7911__auto___25126 = G__25127;
continue;
} else {
}
break;
}

var G__25124 = args25117.length;
switch (G__25124) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25117.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} ^ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq25118){
var G__25119 = cljs.core.first(seq25118);
var seq25118__$1 = cljs.core.next(seq25118);
var G__25120 = cljs.core.first(seq25118__$1);
var seq25118__$2 = cljs.core.next(seq25118__$1);
var G__25121 = cljs.core.first(seq25118__$2);
var seq25118__$3 = cljs.core.next(seq25118__$2);
var G__25122 = cljs.core.first(seq25118__$3);
var seq25118__$4 = cljs.core.next(seq25118__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__25119,G__25120,G__25121,G__25122,seq25118__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args25129 = [];
var len__7910__auto___25137 = arguments.length;
var i__7911__auto___25138 = (0);
while(true){
if((i__7911__auto___25138 < len__7910__auto___25137)){
args25129.push((arguments[i__7911__auto___25138]));

var G__25139 = (i__7911__auto___25138 + (1));
i__7911__auto___25138 = G__25139;
continue;
} else {
}
break;
}

var G__25136 = args25129.length;
switch (G__25136) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25129.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} & ~~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq25130){
var G__25131 = cljs.core.first(seq25130);
var seq25130__$1 = cljs.core.next(seq25130);
var G__25132 = cljs.core.first(seq25130__$1);
var seq25130__$2 = cljs.core.next(seq25130__$1);
var G__25133 = cljs.core.first(seq25130__$2);
var seq25130__$3 = cljs.core.next(seq25130__$2);
var G__25134 = cljs.core.first(seq25130__$3);
var seq25130__$4 = cljs.core.next(seq25130__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__25131,G__25132,G__25133,G__25134,seq25130__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} & ~(1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} ^ (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} >> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = x;
return cljs.core._conj((function (){var x__7639__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"(~{} | (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = hash;
return cljs.core._conj((function (){var x__7639__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mask),(function (){var x__7639__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"(1 << ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("hash-key is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__25141__auto__),(function (){var x__7639__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__25141__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__25141__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__25141__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__25141__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__25141__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25142__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cargs,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25142__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25150 = arguments.length;
var i__7911__auto___25151 = (0);
while(true){
if((i__7911__auto___25151 < len__7910__auto___25150)){
args__7917__auto__.push((arguments[i__7911__auto___25151]));

var G__25152 = (i__7911__auto___25151 + (1));
i__7911__auto___25151 = G__25152;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((6) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7918__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq25143){
var G__25144 = cljs.core.first(seq25143);
var seq25143__$1 = cljs.core.next(seq25143);
var G__25145 = cljs.core.first(seq25143__$1);
var seq25143__$2 = cljs.core.next(seq25143__$1);
var G__25146 = cljs.core.first(seq25143__$2);
var seq25143__$3 = cljs.core.next(seq25143__$2);
var G__25147 = cljs.core.first(seq25143__$3);
var seq25143__$4 = cljs.core.next(seq25143__$3);
var G__25148 = cljs.core.first(seq25143__$4);
var seq25143__$5 = cljs.core.next(seq25143__$4);
var G__25149 = cljs.core.first(seq25143__$5);
var seq25143__$6 = cljs.core.next(seq25143__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__25144,G__25145,G__25146,G__25147,G__25148,G__25149,seq25143__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = clojure.walk.postwalk((function (p1__25153_SHARP_){
if(cljs.core.sequential_QMARK_(p1__25153_SHARP_)){
return ((cljs.core.vector_QMARK_(p1__25153_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k], true),p1__25153_SHARP_));
} else {
return p1__25153_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__25154,fkv){
var vec__25158 = p__25154;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25158,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25158,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",cljs.core.cst$sym$object,"object",cljs.core.cst$sym$string,"string",cljs.core.cst$sym$number,"number",cljs.core.cst$sym$array,"array",cljs.core.cst$sym$function,"function",cljs.core.cst$sym$boolean,"boolean",cljs.core.cst$sym$default,"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Boolean,"boolean",cljs.core.cst$sym$js_SLASH_String,"string",cljs.core.cst$sym$js_SLASH_Array,"array",cljs.core.cst$sym$js_SLASH_Object,"object",cljs.core.cst$sym$js_SLASH_Number,"number",cljs.core.cst$sym$js_SLASH_Function,"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25164 = arguments.length;
var i__7911__auto___25165 = (0);
while(true){
if((i__7911__auto___25165 < len__7910__auto___25164)){
args__7917__auto__.push((arguments[i__7911__auto___25165]));

var G__25166 = (i__7911__auto___25165 + (1));
i__7911__auto___25165 = G__25166;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("t_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_deftype),(function (){var x__7639__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__7639__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IWithMeta),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__7639__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IMeta),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([locals,(function (){var x__7639__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq25161){
var G__25162 = cljs.core.first(seq25161);
var seq25161__$1 = cljs.core.next(seq25161);
var G__25163 = cljs.core.first(seq25161__$1);
var seq25161__$2 = cljs.core.next(seq25161__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__25162,G__25163,seq25161__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25171 = arguments.length;
var i__7911__auto___25172 = (0);
while(true){
if((i__7911__auto___25172 < len__7910__auto___25171)){
args__7917__auto__.push((arguments[i__7911__auto___25172]));

var G__25173 = (i__7911__auto___25172 + (1));
i__7911__auto___25172 = G__25173;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,cljs.core.cst$kw$instance], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq25167){
var G__25168 = cljs.core.first(seq25167);
var seq25167__$1 = cljs.core.next(seq25167);
var G__25169 = cljs.core.first(seq25167__$1);
var seq25167__$2 = cljs.core.next(seq25167__$1);
var G__25170 = cljs.core.first(seq25167__$2);
var seq25167__$3 = cljs.core.next(seq25167__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25168,G__25169,G__25170,seq25167__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25178 = arguments.length;
var i__7911__auto___25179 = (0);
while(true){
if((i__7911__auto___25179 < len__7910__auto___25178)){
args__7917__auto__.push((arguments[i__7911__auto___25179]));

var G__25180 = (i__7911__auto___25179 + (1));
i__7911__auto___25179 = G__25180;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_clone),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq25174){
var G__25175 = cljs.core.first(seq25174);
var seq25174__$1 = cljs.core.next(seq25174);
var G__25176 = cljs.core.first(seq25174__$1);
var seq25174__$2 = cljs.core.next(seq25174__$1);
var G__25177 = cljs.core.first(seq25174__$2);
var seq25174__$3 = cljs.core.next(seq25174__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__25175,G__25176,G__25177,seq25174__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25185 = arguments.length;
var i__7911__auto___25186 = (0);
while(true){
if((i__7911__auto___25186 < len__7910__auto___25185)){
args__7917__auto__.push((arguments[i__7911__auto___25186]));

var G__25187 = (i__7911__auto___25186 + (1));
i__7911__auto___25186 = G__25187;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_this))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq25181){
var G__25182 = cljs.core.first(seq25181);
var seq25181__$1 = cljs.core.next(seq25181);
var G__25183 = cljs.core.first(seq25181__$1);
var seq25181__$2 = cljs.core.next(seq25181__$1);
var G__25184 = cljs.core.first(seq25181__$2);
var seq25181__$3 = cljs.core.next(seq25181__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__25182,G__25183,G__25184,seq25181__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
}

if(cljs.core.truth_((function (){var and__6785__auto__ = cljs.core.cst$kw$protocol_DASH_deprecated.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6785__auto__)){
var and__6785__auto____$1 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__6785__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__6785__auto____$1;
}
} else {
return and__6785__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),cljs.core.cst$kw$impls], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$undeclared.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't resolve: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__25188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__25189 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__25188;
s = G__25189;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__25190){
var vec__25198 = p__25190;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7639__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__25198,p,sigs){
return (function (p__25201){
var vec__25202 = p__25201;
var seq__25203 = cljs.core.seq(vec__25202);
var first__25204 = cljs.core.first(seq__25203);
var seq__25203__$1 = cljs.core.next(seq__25203);
var f = first__25204;
var meths = seq__25203__$1;
var form = vec__25202;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__25198,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__7730__auto__ = (function (){var G__25205 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25205) : cljs.core.atom.call(null,G__25205));
})();
var prefer_table__7731__auto__ = (function (){var G__25206 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25206) : cljs.core.atom.call(null,G__25206));
})();
var method_cache__7732__auto__ = (function (){var G__25207 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25207) : cljs.core.atom.call(null,G__25207));
})();
var cached_hierarchy__7733__auto__ = (function (){var G__25208 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25208) : cljs.core.atom.call(null,G__25208));
})();
var hierarchy__7734__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__7730__auto__,prefer_table__7731__auto__,method_cache__7732__auto__,cached_hierarchy__7733__auto__,hierarchy__7734__auto__){
return (function (tsym,sym){
return cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__7730__auto__,prefer_table__7731__auto__,method_cache__7732__auto__,cached_hierarchy__7733__auto__,hierarchy__7734__auto__))
,cljs.core.cst$kw$default,hierarchy__7734__auto__,method_table__7730__auto__,prefer_table__7731__auto__,method_cache__7732__auto__,cached_hierarchy__7733__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$instance,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7639__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__7639__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype),(function (){var x__7639__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__25209){
var vec__25216 = p__25209;
var seq__25217 = cljs.core.seq(vec__25216);
var first__25218 = cljs.core.first(seq__25217);
var seq__25217__$1 = cljs.core.next(seq__25217);
var vec__25219 = first__25218;
var seq__25220 = cljs.core.seq(vec__25219);
var first__25221 = cljs.core.first(seq__25220);
var seq__25220__$1 = cljs.core.next(seq__25220);
var this$ = first__25221;
var args = seq__25220__$1;
var sig = vec__25219;
var body = seq__25217__$1;
var x__7639__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__7639__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$this_DASH_as,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__25222){
var vec__25229 = p__25222;
var seq__25230 = cljs.core.seq(vec__25229);
var first__25231 = cljs.core.first(seq__25230);
var seq__25230__$1 = cljs.core.next(seq__25230);
var vec__25232 = first__25231;
var seq__25233 = cljs.core.seq(vec__25232);
var first__25234 = cljs.core.first(seq__25233);
var seq__25233__$1 = cljs.core.next(seq__25233);
var this$ = first__25234;
var args = seq__25233__$1;
var sig = vec__25232;
var body = seq__25230__$1;
var self_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7639__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__25235){
var vec__25242 = p__25235;
var seq__25243 = cljs.core.seq(vec__25242);
var first__25244 = cljs.core.first(seq__25243);
var seq__25243__$1 = cljs.core.next(seq__25243);
var vec__25245 = first__25244;
var seq__25246 = cljs.core.seq(vec__25245);
var first__25247 = cljs.core.first(seq__25246);
var seq__25246__$1 = cljs.core.next(seq__25246);
var this$ = first__25247;
var args = seq__25246__$1;
var sig = vec__25245;
var body = seq__25243__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7639__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__25248){
var vec__25255 = p__25248;
var seq__25256 = cljs.core.seq(vec__25255);
var first__25257 = cljs.core.first(seq__25256);
var seq__25256__$1 = cljs.core.next(seq__25256);
var vec__25258 = first__25257;
var seq__25259 = cljs.core.seq(vec__25258);
var first__25260 = cljs.core.first(seq__25259);
var seq__25259__$1 = cljs.core.next(seq__25259);
var this$ = first__25260;
var args = seq__25259__$1;
var sig = vec__25258;
var body = seq__25256__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7639__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25269){
var vec__25270 = p__25269;
var seq__25271 = cljs.core.seq(vec__25270);
var first__25272 = cljs.core.first(seq__25271);
var seq__25271__$1 = cljs.core.next(seq__25271);
var f = first__25272;
var meths = seq__25271__$1;
var form = vec__25270;
var vec__25273 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25273,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25273,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25273,f__$1,meths__$1,vec__25270,seq__25271,first__25272,seq__25271__$1,f,meths,form){
return (function (p1__25261_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__25261_SHARP_);
});})(vec__25273,f__$1,meths__$1,vec__25270,seq__25271,first__25272,seq__25271__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__25277){
var vec__25285 = p__25277;
var seq__25286 = cljs.core.seq(vec__25285);
var first__25287 = cljs.core.first(seq__25286);
var seq__25286__$1 = cljs.core.next(seq__25286);
var f = first__25287;
var meths = seq__25286__$1;
var form = vec__25285;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25285,seq__25286,first__25287,seq__25286__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = (function (){var G__25290 = type_sym;
var G__25291 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25290,G__25291) : cljs.core$macros.extend_prefix.call(null,G__25290,G__25291));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(vec__25285,seq__25286,first__25287,seq__25286__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25285,seq__25286,first__25287,seq__25286__$1,f,meths,form){
return (function (p1__25276_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__25276_SHARP_);
});})(vec__25285,seq__25286,first__25287,seq__25286__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__25293){
var vec__25305 = p__25293;
var seq__25306 = cljs.core.seq(vec__25305);
var first__25307 = cljs.core.first(seq__25306);
var seq__25306__$1 = cljs.core.next(seq__25306);
var f = first__25307;
var meths = seq__25306__$1;
var form = vec__25305;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25305,seq__25306,first__25307,seq__25306__$1,f,meths,form){
return (function (p1__25292_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__25292_SHARP_);
});})(vec__25305,seq__25306,first__25307,seq__25306__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = (function (){var G__25310 = type_sym;
var G__25311 = cljs.core.cst$sym$call;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25310,G__25311) : cljs.core$macros.extend_prefix.call(null,G__25310,G__25311));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = (function (){var G__25314 = type_sym;
var G__25315 = cljs.core.cst$sym$apply;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25314,G__25315) : cljs.core$macros.extend_prefix.call(null,G__25314,G__25315));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__7639__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_call),(function (){var x__7639__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$concat),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),(function (){var x__7639__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),(function (){var x__7639__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__25316){
var vec__25332 = p__25316;
var seq__25333 = cljs.core.seq(vec__25332);
var first__25334 = cljs.core.first(seq__25333);
var seq__25333__$1 = cljs.core.next(seq__25333);
var f = first__25334;
var meths = seq__25333__$1;
var form = vec__25332;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = (function (){var G__25337 = type_sym;
var G__25338 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25337,G__25338) : cljs.core$macros.extend_prefix.call(null,G__25337,G__25338));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__25332,seq__25333,first__25334,seq__25333__$1,f,meths,form){
return (function (p__25339){
var vec__25340 = p__25339;
var seq__25341 = cljs.core.seq(vec__25340);
var first__25342 = cljs.core.first(seq__25341);
var seq__25341__$1 = cljs.core.next(seq__25341);
var sig = first__25342;
var body = seq__25341__$1;
var meth = vec__25340;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = (function (){var G__25345 = type_sym;
var G__25346 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__25345,G__25346) : cljs.core$macros.extend_prefix.call(null,G__25345,G__25346));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(pf,vec__25332,seq__25333,first__25334,seq__25333__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__25347){
var vec__25351 = p__25347;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25351,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25351,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(cljs.core.cst$kw$skip_DASH_protocol_DASH_flag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL)], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__25351,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,cljs.core.cst$sym$cljs$core_SLASH_IFn)){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__25351,p,sigs))
,cljs.core.array_seq([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
var minfo = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__25357 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_25360 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(method_var_25360))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,method_name,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_duped_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$invalid_DASH_arity,c], null));
} else {
}

var G__25361 = cljs.core.next(sigs__$1);
var G__25362 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__25361;
seen = G__25362;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,proto], null));
} else {
}

var seen_25369 = cljs.core.PersistentHashSet.EMPTY;
var methods_25370__$1 = methods$;
while(true){
if(cljs.core.seq(methods_25370__$1)){
var vec__25366_25371 = cljs.core.first(methods_25370__$1);
var fname_25372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25366_25371,(0),null);
var method_25373 = vec__25366_25371;
if(cljs.core.contains_QMARK_(seen_25369,fname_25372)){
cljs.analyzer.warning(cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,proto,cljs.core.cst$kw$method,fname_25372], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_25373);

var G__25374 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_25369,fname_25372);
var G__25375 = cljs.core.next(methods_25370__$1);
seen_25369 = G__25374;
methods_25370__$1 = G__25375;
continue;
} else {
}
break;
}

var G__25376 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__25377 = impls__$2;
protos = G__25376;
impls__$1 = G__25377;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,cljs.core.cst$kw$tag,type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25386 = arguments.length;
var i__7911__auto___25387 = (0);
while(true){
if((i__7911__auto___25387 < len__7910__auto___25386)){
args__7917__auto__.push((arguments[i__7911__auto___25387]));

var G__25388 = (i__7911__auto___25387 + (1));
i__7911__auto___25387 = G__25388;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$number,null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__25383 = (function (){var temp__4655__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25383,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25383,(1),null);
if(cljs.core.truth_((function (){var and__6785__auto__ = cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__6785__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__6785__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_symbol,type_sym,cljs.core.cst$kw$suggested_DASH_symbol,(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__25383,type,assign_impls){
return (function (p1__25378_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__25378_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__25378_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__25383,type,assign_impls))
,cljs.core.array_seq([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq25379){
var G__25380 = cljs.core.first(seq25379);
var seq25379__$1 = cljs.core.next(seq25379);
var G__25381 = cljs.core.first(seq25379__$1);
var seq25379__$2 = cljs.core.next(seq25379__$1);
var G__25382 = cljs.core.first(seq25379__$2);
var seq25379__$3 = cljs.core.next(seq25379__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__25380,G__25381,G__25382,seq25379__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__25390){
var vec__25394 = p__25390;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25394,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25394,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25394,f,sigs){
return (function (p1__25389_SHARP_){
return cljs.core.cons(cljs.core.second(p1__25389_SHARP_),cljs.core.nnext(p1__25389_SHARP_));
});})(vec__25394,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args25397 = [];
var len__7910__auto___25400 = arguments.length;
var i__7911__auto___25401 = (0);
while(true){
if((i__7911__auto___25401 < len__7910__auto___25400)){
args25397.push((arguments[i__7911__auto___25401]));

var G__25402 = (i__7911__auto___25401 + (1));
i__7911__auto___25401 = G__25402;
continue;
} else {
}
break;
}

var G__25399 = args25397.length;
switch (G__25399) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25397.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_type,type,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,true,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__25404 = ret__$1;
var G__25405 = specs__$2;
ret = G__25404;
specs__$1 = G__25405;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25406_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p1__25406_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$positional));
var field_values = (cljs.core.truth_(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.array_seq([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7639__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25418 = arguments.length;
var i__7911__auto___25419 = (0);
while(true){
if((i__7911__auto___25419 < len__7910__auto___25418)){
args__7917__auto__.push((arguments[i__7911__auto___25419]));

var G__25420 = (i__7911__auto___25419 + (1));
i__7911__auto___25419 = G__25420;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((4) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7918__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),t));
var vec__25415 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25415,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25415,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$deftype_STAR_),(function (){var x__7639__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7639__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__7639__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__7639__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__7639__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__7639__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25407__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25408__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__25409__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25408__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq25410){
var G__25411 = cljs.core.first(seq25410);
var seq25410__$1 = cljs.core.next(seq25410);
var G__25412 = cljs.core.first(seq25410__$1);
var seq25410__$2 = cljs.core.next(seq25410__$1);
var G__25413 = cljs.core.first(seq25410__$2);
var seq25410__$3 = cljs.core.next(seq25410__$2);
var G__25414 = cljs.core.first(seq25410__$3);
var seq25410__$4 = cljs.core.next(seq25410__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__25411,G__25412,G__25413,G__25414,seq25410__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__25421_SHARP_){
return cljs.core.with_meta(p1__25421_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,cljs.core.cst$sym$__meta,cljs.core.array_seq([cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$IRecord,cljs.core.cst$sym$ICloneable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_clone),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25422__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$IHash,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_hash),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25423__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_caching_DASH_hash),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25423__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hash_DASH_imap),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__hash)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$IEquiv,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_equiv),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25424__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__25425__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__25425__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25424__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__25425__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_equiv_DASH_map),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25424__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$other__25425__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$IMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25426__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0)))),cljs.core.cst$sym$IWithMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25427__auto__),(function (){var x__7639__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$__meta,gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$ILookup,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25428__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25429__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25428__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25429__auto__),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25430__auto__),(function (){var x__7639__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__25431__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__7639__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([(function (){var x__7639__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__25431__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$ICounted,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_count),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25432__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__7639__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$ICollection,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_conj),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25433__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__25434__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__25434__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25433__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__25434__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__25434__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reduce),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25433__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__25434__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$IAssociative,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_assoc),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25435__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25436__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_condp),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keyword_DASH_identical_QMARK_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25436__auto__),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,cljs.core.cst$sym$__hash,null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25436__auto__),(function (){var x__7639__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$IMap,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_dissoc),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25437__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25438__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__7639__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25438__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_with_DASH_meta),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__7639__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25437__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25438__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__25438__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$ISeqable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_seq),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25440__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__25439_SHARP_){
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__25439_SHARP_);
return cljs.core._conj((function (){var x__7639__auto____$1 = p1__25439_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$IIterable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_iterator),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$RecordIter$),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__7639__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_DASH_iter))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.cst$sym$IPrintWithWriter,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_pr_DASH_writer),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25442__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25443__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__25444__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__25445__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__25446__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25443__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__25444__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__25446__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25443__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__25445__auto__),(function (){var x__7639__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__25444__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__25441_SHARP_){
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__25441_SHARP_);
return cljs.core._conj((function (){var x__7639__auto____$1 = p1__25441_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))], null));
var vec__25450 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25450,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25450,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defrecord_STAR_),(function (){var x__7639__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__7639__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$map_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$map));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7639__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__7639__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25460 = arguments.length;
var i__7911__auto___25461 = (0);
while(true){
if((i__7911__auto___25461 < len__7910__auto___25460)){
args__7917__auto__.push((arguments[i__7911__auto___25461]));

var G__25462 = (i__7911__auto___25461 + (1));
i__7911__auto___25461 = G__25462;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((4) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7918__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),rsym__$1)),cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__7639__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__7639__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrSeq),(function (){var x__7639__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25453__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__7639__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25453__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25454__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__25454__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq25455){
var G__25456 = cljs.core.first(seq25455);
var seq25455__$1 = cljs.core.next(seq25455);
var G__25457 = cljs.core.first(seq25455__$1);
var seq25455__$2 = cljs.core.next(seq25455__$1);
var G__25458 = cljs.core.first(seq25455__$2);
var seq25455__$3 = cljs.core.next(seq25455__$2);
var G__25459 = cljs.core.first(seq25455__$3);
var seq25455__$4 = cljs.core.next(seq25455__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__25456,G__25457,G__25458,G__25459,seq25455__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25490 = arguments.length;
var i__7911__auto___25491 = (0);
while(true){
if((i__7911__auto___25491 < len__7910__auto___25490)){
args__7917__auto__.push((arguments[i__7911__auto___25491]));

var G__25492 = (i__7911__auto___25491 + (1));
i__7911__auto___25491 = G__25492;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var vec__25469 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25469,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25469,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$protocol_DASH_symbol,true);
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__25469,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__25469,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__25472 = cljs.core.seq(methods$);
var chunk__25473 = null;
var count__25474 = (0);
var i__25475 = (0);
while(true){
if((i__25475 < count__25474)){
var vec__25476 = chunk__25473.cljs$core$IIndexed$_nth$arity$2(null,i__25475);
var seq__25477 = cljs.core.seq(vec__25476);
var first__25478 = cljs.core.first(seq__25477);
var seq__25477__$1 = cljs.core.next(seq__25477);
var mname = first__25478;
var arities = seq__25477__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__25493 = seq__25472;
var G__25494 = chunk__25473;
var G__25495 = count__25474;
var G__25496 = (i__25475 + (1));
seq__25472 = G__25493;
chunk__25473 = G__25494;
count__25474 = G__25495;
i__25475 = G__25496;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__25472);
if(temp__4657__auto__){
var seq__25472__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25472__$1)){
var c__7616__auto__ = cljs.core.chunk_first(seq__25472__$1);
var G__25497 = cljs.core.chunk_rest(seq__25472__$1);
var G__25498 = c__7616__auto__;
var G__25499 = cljs.core.count(c__7616__auto__);
var G__25500 = (0);
seq__25472 = G__25497;
chunk__25473 = G__25498;
count__25474 = G__25499;
i__25475 = G__25500;
continue;
} else {
var vec__25479 = cljs.core.first(seq__25472__$1);
var seq__25480 = cljs.core.seq(vec__25479);
var first__25481 = cljs.core.first(seq__25480);
var seq__25480__$1 = cljs.core.next(seq__25480);
var mname = first__25481;
var arities = seq__25480__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__25501 = cljs.core.next(seq__25472__$1);
var G__25502 = null;
var G__25503 = (0);
var G__25504 = (0);
seq__25472 = G__25501;
chunk__25473 = G__25502;
count__25474 = G__25503;
i__25475 = G__25504;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_(arg)) && (!((cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
});})(p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25463__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7639__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__25464__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7639__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_typeOf),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25463__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__25464__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__25464__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__25464__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7639__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__25464__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__25464__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_missing_DASH_protocol),(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});})(p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_info,cljs.core.cst$kw$methods], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__25482){
var vec__25483 = p__25482;
var seq__25484 = cljs.core.seq(vec__25483);
var first__25485 = cljs.core.first(seq__25484);
var seq__25484__$1 = cljs.core.next(seq__25484);
var fname = first__25485;
var sigs = seq__25484__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,cljs.core.cst$kw$doc,doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__25486){
var vec__25487 = p__25486;
var seq__25488 = cljs.core.seq(vec__25487);
var first__25489 = cljs.core.first(seq__25488);
var seq__25488__$1 = cljs.core.next(seq__25488);
var fname = first__25489;
var sigs = seq__25488__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,psym__$2,cljs.core.cst$kw$name,fname], null)):null);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$doc,doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__7639__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__25487,seq__25488,first__25489,seq__25488__$1,fname,sigs,p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__25487,seq__25488,first__25489,seq__25488__$1,fname,sigs,p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__25469,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7639__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq25465){
var G__25466 = cljs.core.first(seq25465);
var seq25465__$1 = cljs.core.next(seq25465);
var G__25467 = cljs.core.first(seq25465__$1);
var seq25465__$2 = cljs.core.next(seq25465__$1);
var G__25468 = cljs.core.first(seq25465__$2);
var seq25465__$3 = cljs.core.next(seq25465__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__25466,G__25467,G__25468,seq25465__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__25508 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25508,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25508,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7639__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7639__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__25514 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25514,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25514,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7639__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7639__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7639__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__7639__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7639__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__7639__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25520 = arguments.length;
var i__7911__auto___25521 = (0);
while(true){
if((i__7911__auto___25521 < len__7910__auto___25520)){
args__7917__auto__.push((arguments[i__7911__auto___25521]));

var G__25522 = (i__7911__auto___25521 + (1));
i__7911__auto___25521 = G__25522;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_LazySeq),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq25517){
var G__25518 = cljs.core.first(seq25517);
var seq25517__$1 = cljs.core.next(seq25517);
var G__25519 = cljs.core.first(seq25517__$1);
var seq25517__$2 = cljs.core.next(seq25517__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__25518,G__25519,seq25517__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25526 = arguments.length;
var i__7911__auto___25527 = (0);
while(true){
if((i__7911__auto___25527 < len__7910__auto___25526)){
args__7917__auto__.push((arguments[i__7911__auto___25527]));

var G__25528 = (i__7911__auto___25527 + (1));
i__7911__auto___25527 = G__25528;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Delay),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq25523){
var G__25524 = cljs.core.first(seq25523);
var seq25523__$1 = cljs.core.next(seq25523);
var G__25525 = cljs.core.first(seq25523__$1);
var seq25523__$2 = cljs.core.next(seq25523__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__25524,G__25525,seq25523__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25537 = arguments.length;
var i__7911__auto___25538 = (0);
while(true){
if((i__7911__auto___25538 < len__7910__auto___25537)){
args__7917__auto__.push((arguments[i__7911__auto___25538]));

var G__25539 = (i__7911__auto___25538 + (1));
i__7911__auto___25538 = G__25539;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__25533){
var vec__25534 = p__25533;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25534,(1),null);
return cljs.core._conj((function (){var x__7639__auto__ = k;
return cljs.core._conj((function (){var x__7639__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$set_BANG_);
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$try),body,cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$finally),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq25529){
var G__25530 = cljs.core.first(seq25529);
var seq25529__$1 = cljs.core.next(seq25529);
var G__25531 = cljs.core.first(seq25529__$1);
var seq25529__$2 = cljs.core.next(seq25529__$1);
var G__25532 = cljs.core.first(seq25529__$2);
var seq25529__$3 = cljs.core.next(seq25529__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__25530,G__25531,G__25532,seq25529__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25544 = arguments.length;
var i__7911__auto___25545 = (0);
while(true){
if((i__7911__auto___25545 < len__7910__auto___25544)){
args__7917__auto__.push((arguments[i__7911__auto___25545]));

var G__25546 = (i__7911__auto___25545 + (1));
i__7911__auto___25545 = G__25546;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_with_DASH_redefs),(function (){var x__7639__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq25540){
var G__25541 = cljs.core.first(seq25540);
var seq25540__$1 = cljs.core.next(seq25540);
var G__25542 = cljs.core.first(seq25540__$1);
var seq25540__$2 = cljs.core.next(seq25540__$1);
var G__25543 = cljs.core.first(seq25540__$2);
var seq25540__$3 = cljs.core.next(seq25540__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__25541,G__25542,G__25543,seq25540__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25565 = arguments.length;
var i__7911__auto___25566 = (0);
while(true){
if((i__7911__auto___25566 < len__7910__auto___25565)){
args__7917__auto__.push((arguments[i__7911__auto___25566]));

var G__25567 = (i__7911__auto___25566 + (1));
i__7911__auto___25566 = G__25567;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((4) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7918__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__25559 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_GT__GT_,cljs.core.second(args)))?(3):(2)),args);
var vec__25562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25559,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25562,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25562,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25562,(2),null);
var clause = vec__25562;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25559,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__7639__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__25547__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__25547__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq25548){
var G__25549 = cljs.core.first(seq25548);
var seq25548__$1 = cljs.core.next(seq25548);
var G__25550 = cljs.core.first(seq25548__$1);
var seq25548__$2 = cljs.core.next(seq25548__$1);
var G__25551 = cljs.core.first(seq25548__$2);
var seq25548__$3 = cljs.core.next(seq25548__$2);
var G__25552 = cljs.core.first(seq25548__$3);
var seq25548__$4 = cljs.core.next(seq25548__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__25549,G__25550,G__25551,G__25552,seq25548__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Duplicate case test constant '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__6785__auto__ = cljs.core.list_QMARK_(x);
if(and__6785__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__6785__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$const);
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25588 = arguments.length;
var i__7911__auto___25589 = (0);
while(true){
if((i__7911__auto___25589 < len__7910__auto___25588)){
args__7917__auto__.push((arguments[i__7911__auto___25589]));

var G__25590 = (i__7911__auto___25589 + (1));
i__7911__auto___25589 = G__25590;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([(function (){var x__7639__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (default$,env){
return (function (m,p__25576){
var vec__25577 = p__25576;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25577,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25577,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__25577,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__7639__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$quote):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__25577,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__7639__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$quote),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,cljs.core.cst$kw$nonchar),cljs.core.array_seq([((function (default$,env,pairs,esym,tests){
return (function (p1__25568_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__25568_SHARP_);
});})(default$,env,pairs,esym,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__25569_SHARP_){
if(cljs.core.seq_QMARK_(p1__25569_SHARP_)){
return cljs.core.vec(p1__25569_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25569_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__7639__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__25571_SHARP_){
if(cljs.core.seq_QMARK_(p1__25571_SHARP_)){
return cljs.core.vec(p1__25571_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25571_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__25570_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25570_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec(cljs.core.vals(pairs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_keyword_QMARK_),(function (){var x__7639__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_fqn),(function (){var x__7639__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__7639__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (default$,env,pairs,esym,tests){
return (function (p__25584){
var vec__25585 = p__25584;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25585,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25585,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7639__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,cljs.core.array_seq([pairs], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__7639__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq25572){
var G__25573 = cljs.core.first(seq25572);
var seq25572__$1 = cljs.core.next(seq25572);
var G__25574 = cljs.core.first(seq25572__$1);
var seq25572__$2 = cljs.core.next(seq25572__$1);
var G__25575 = cljs.core.first(seq25572__$2);
var seq25572__$3 = cljs.core.next(seq25572__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__25573,G__25574,G__25575,seq25572__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args25591 = [];
var len__7910__auto___25594 = arguments.length;
var i__7911__auto___25595 = (0);
while(true){
if((i__7911__auto___25595 < len__7910__auto___25594)){
args25591.push((arguments[i__7911__auto___25595]));

var G__25596 = (i__7911__auto___25595 + (1));
i__7911__auto___25595 = G__25596;
continue;
} else {
}
break;
}

var G__25593 = args25591.length;
switch (G__25593) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args25591.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7639__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([(function (){var x__7639__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__7639__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__25684){
var vec__25685 = p__25684;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25685,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__25765__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__25765 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__25766__i = 0, G__25766__a = new Array(arguments.length -  0);
while (G__25766__i < G__25766__a.length) {G__25766__a[G__25766__i] = arguments[G__25766__i + 0]; ++G__25766__i;}
  msg = new cljs.core.IndexedSeq(G__25766__a,0);
} 
return G__25765__delegate.call(this,msg);};
G__25765.cljs$lang$maxFixedArity = 0;
G__25765.cljs$lang$applyTo = (function (arglist__25767){
var msg = cljs.core.seq(arglist__25767);
return G__25765__delegate(msg);
});
G__25765.cljs$core$IFn$_invoke$arity$variadic = G__25765__delegate;
return G__25765;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__25688){
var vec__25727 = p__25688;
var seq__25728 = cljs.core.seq(vec__25727);
var first__25729 = cljs.core.first(seq__25728);
var seq__25728__$1 = cljs.core.next(seq__25728);
var vec__25730 = first__25729;
var seq__25731 = cljs.core.seq(vec__25730);
var first__25732 = cljs.core.first(seq__25731);
var seq__25731__$1 = cljs.core.next(seq__25731);
var bind = first__25732;
var first__25732__$1 = cljs.core.first(seq__25731__$1);
var seq__25731__$2 = cljs.core.next(seq__25731__$1);
var expr = first__25732__$1;
var mod_pairs = seq__25731__$2;
var vec__25733 = seq__25728__$1;
var vec__25736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25733,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25736,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25736,(1),null);
var next_groups = vec__25733;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__25727,seq__25728,first__25729,seq__25728__$1,vec__25730,seq__25731,first__25732,seq__25731__$1,bind,first__25732__$1,seq__25731__$2,expr,mod_pairs,vec__25733,vec__25736,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__25739){
var vec__25746 = p__25739;
var seq__25747 = cljs.core.seq(vec__25746);
var first__25748 = cljs.core.first(seq__25747);
var seq__25747__$1 = cljs.core.next(seq__25747);
var vec__25749 = first__25748;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(1),null);
var pair = vec__25749;
var etc = seq__25747__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__25598__auto__),(function (){var x__7639__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__25599__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__25598__auto__),(function (){var x__7639__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__25599__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__25599__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cons),(function (){var x__7639__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__25727,seq__25728,first__25729,seq__25728__$1,vec__25730,seq__25731,first__25732,seq__25731__$1,bind,first__25732__$1,seq__25731__$2,expr,mod_pairs,vec__25733,vec__25736,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_first),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__25727,seq__25728,first__25729,seq__25728__$1,vec__25730,seq__25731,first__25732,seq__25731__$1,bind,first__25732__$1,seq__25731__$2,expr,mod_pairs,vec__25733,vec__25736,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__25752){
var vec__25759 = p__25752;
var seq__25760 = cljs.core.seq(vec__25759);
var first__25761 = cljs.core.first(seq__25760);
var seq__25760__$1 = cljs.core.next(seq__25760);
var vec__25762 = first__25761;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25762,(1),null);
var pair = vec__25762;
var etc = seq__25760__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7639__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_append),(function (){var x__7639__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7639__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__25727,seq__25728,first__25729,seq__25728__$1,vec__25730,seq__25731,first__25732,seq__25731__$1,bind,first__25732__$1,seq__25731__$2,expr,mod_pairs,vec__25733,vec__25736,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__25600__auto__),(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/travis/build/HealthSamurai/videorecorder-demo/resources/public/js/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2331),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2331),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_native)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__25601__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__25600__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_buffer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__25601__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__25601__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__25600__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__7639__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__7639__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7639__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__25602__auto__),(function (){var x__7639__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__25602__auto__),(function (){var x__7639__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25777 = arguments.length;
var i__7911__auto___25778 = (0);
while(true){
if((i__7911__auto___25778 < len__7910__auto___25777)){
args__7917__auto__.push((arguments[i__7911__auto___25778]));

var G__25779 = (i__7911__auto___25778 + (1));
i__7911__auto___25778 = G__25779;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__25780__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__25780 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__25781__i = 0, G__25781__a = new Array(arguments.length -  0);
while (G__25781__i < G__25781__a.length) {G__25781__a[G__25781__i] = arguments[G__25781__i + 0]; ++G__25781__i;}
  msg = new cljs.core.IndexedSeq(G__25781__a,0);
} 
return G__25780__delegate.call(this,msg);};
G__25780.cljs$lang$maxFixedArity = 0;
G__25780.cljs$lang$applyTo = (function (arglist__25782){
var msg = cljs.core.seq(arglist__25782);
return G__25780__delegate(msg);
});
G__25780.cljs$core$IFn$_invoke$arity$variadic = G__25780__delegate;
return G__25780;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__7639__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__7639__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__7639__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),(function (){var x__7639__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__25768__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__25768__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__25768__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__7639__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq25769){
var G__25770 = cljs.core.first(seq25769);
var seq25769__$1 = cljs.core.next(seq25769);
var G__25771 = cljs.core.first(seq25769__$1);
var seq25769__$2 = cljs.core.next(seq25769__$1);
var G__25772 = cljs.core.first(seq25769__$2);
var seq25769__$3 = cljs.core.next(seq25769__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__25770,G__25771,G__25772,seq25769__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25786 = arguments.length;
var i__7911__auto___25787 = (0);
while(true){
if((i__7911__auto___25787 < len__7910__auto___25786)){
args__7917__auto__.push((arguments[i__7911__auto___25787]));

var G__25788 = (i__7911__auto___25787 + (1));
i__7911__auto___25787 = G__25788;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''),rest),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq25783){
var G__25784 = cljs.core.first(seq25783);
var seq25783__$1 = cljs.core.next(seq25783);
var G__25785 = cljs.core.first(seq25783__$1);
var seq25783__$2 = cljs.core.next(seq25783__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__25784,G__25785,seq25783__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args25792 = [];
var len__7910__auto___25800 = arguments.length;
var i__7911__auto___25801 = (0);
while(true){
if((i__7911__auto___25801 < len__7910__auto___25800)){
args25792.push((arguments[i__7911__auto___25801]));

var G__25802 = (i__7911__auto___25801 + (1));
i__7911__auto___25801 = G__25802;
continue;
} else {
}
break;
}

var G__25799 = args25792.length;
switch (G__25799) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25792.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7929__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Array$),(function (){var x__7639__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__7639__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__25789__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__25790__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__7639__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__25791__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__25790__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__25790__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__25791__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__25789__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__25790__auto__)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq25793){
var G__25794 = cljs.core.first(seq25793);
var seq25793__$1 = cljs.core.next(seq25793);
var G__25795 = cljs.core.first(seq25793__$1);
var seq25793__$2 = cljs.core.next(seq25793__$1);
var G__25796 = cljs.core.first(seq25793__$2);
var seq25793__$3 = cljs.core.next(seq25793__$2);
var G__25797 = cljs.core.first(seq25793__$3);
var seq25793__$4 = cljs.core.next(seq25793__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__25794,G__25795,G__25796,G__25797,seq25793__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args25805 = [];
var len__7910__auto___25812 = arguments.length;
var i__7911__auto___25813 = (0);
while(true){
if((i__7911__auto___25813 < len__7910__auto___25812)){
args25805.push((arguments[i__7911__auto___25813]));

var G__25814 = (i__7911__auto___25813 + (1));
i__7911__auto___25813 = G__25814;
continue;
} else {
}
break;
}

var G__25811 = args25805.length;
switch (G__25811) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25805.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7929__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_List);
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25804__auto__),(function (){var x__7639__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25804__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq25806){
var G__25807 = cljs.core.first(seq25806);
var seq25806__$1 = cljs.core.next(seq25806);
var G__25808 = cljs.core.first(seq25806__$1);
var seq25806__$2 = cljs.core.next(seq25806__$1);
var G__25809 = cljs.core.first(seq25806__$2);
var seq25806__$3 = cljs.core.next(seq25806__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__25807,G__25808,G__25809,seq25806__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args25816 = [];
var len__7910__auto___25822 = arguments.length;
var i__7911__auto___25823 = (0);
while(true){
if((i__7911__auto___25823 < len__7910__auto___25822)){
args25816.push((arguments[i__7911__auto___25823]));

var G__25824 = (i__7911__auto___25823 + (1));
i__7911__auto___25823 = G__25824;
continue;
} else {
}
break;
}

var G__25821 = args25816.length;
switch (G__25821) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25816.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7929__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7639__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY_DASH_NODE),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq25817){
var G__25818 = cljs.core.first(seq25817);
var seq25817__$1 = cljs.core.next(seq25817);
var G__25819 = cljs.core.first(seq25817__$1);
var seq25817__$2 = cljs.core.next(seq25817__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__25818,G__25819,seq25817__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args25828 = [];
var len__7910__auto___25834 = arguments.length;
var i__7911__auto___25835 = (0);
while(true){
if((i__7911__auto___25835 < len__7910__auto___25834)){
args25828.push((arguments[i__7911__auto___25835]));

var G__25836 = (i__7911__auto___25835 + (1));
i__7911__auto___25835 = G__25836;
continue;
} else {
}
break;
}

var G__25833 = args25828.length;
switch (G__25833) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25828.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7929__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap);
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__25826_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__25826_SHARP_),cljs.core.cst$kw$constant);
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__25827_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__25827_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7639__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq25829){
var G__25830 = cljs.core.first(seq25829);
var seq25829__$1 = cljs.core.next(seq25829);
var G__25831 = cljs.core.first(seq25829__$1);
var seq25829__$2 = cljs.core.next(seq25829__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__25830,G__25831,seq25829__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args25838 = [];
var len__7910__auto___25844 = arguments.length;
var i__7911__auto___25845 = (0);
while(true){
if((i__7911__auto___25845 < len__7910__auto___25844)){
args25838.push((arguments[i__7911__auto___25845]));

var G__25846 = (i__7911__auto___25845 + (1));
i__7911__auto___25845 = G__25846;
continue;
} else {
}
break;
}

var G__25843 = args25838.length;
switch (G__25843) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25838.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7929__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArrays),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap);
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq25839){
var G__25840 = cljs.core.first(seq25839);
var seq25839__$1 = cljs.core.next(seq25839);
var G__25841 = cljs.core.first(seq25839__$1);
var seq25839__$2 = cljs.core.next(seq25839__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__25840,G__25841,seq25839__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args25850 = [];
var len__7910__auto___25856 = arguments.length;
var i__7911__auto___25857 = (0);
while(true){
if((i__7911__auto___25857 < len__7910__auto___25856)){
args25850.push((arguments[i__7911__auto___25857]));

var G__25858 = (i__7911__auto___25857 + (1));
i__7911__auto___25857 = G__25858;
continue;
} else {
}
break;
}

var G__25855 = args25850.length;
switch (G__25855) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7929__auto__ = (new cljs.core.IndexedSeq(args25850.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7929__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__25848_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__25848_SHARP_),cljs.core.cst$kw$constant);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25849_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__25849_SHARP_);
}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet);
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq25851){
var G__25852 = cljs.core.first(seq25851);
var seq25851__$1 = cljs.core.next(seq25851);
var G__25853 = cljs.core.first(seq25851__$1);
var seq25851__$2 = cljs.core.next(seq25851__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__25852,G__25853,seq25851__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$object);
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25875 = arguments.length;
var i__7911__auto___25876 = (0);
while(true){
if((i__7911__auto___25876 < len__7910__auto___25875)){
args__7917__auto__.push((arguments[i__7911__auto___25876]));

var G__25877 = (i__7911__auto___25876 + (1));
i__7911__auto___25876 = G__25877;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__25863){
var vec__25864 = p__25863;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25864,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25864,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__7639__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__25867){
var vec__25868 = p__25867;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7639__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__25871){
var vec__25872 = p__25871;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25872,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7639__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__7639__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq25860){
var G__25861 = cljs.core.first(seq25860);
var seq25860__$1 = cljs.core.next(seq25860);
var G__25862 = cljs.core.first(seq25860__$1);
var seq25860__$2 = cljs.core.next(seq25860__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__25861,G__25862,seq25860__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"~{}.length"),cljs.core.cst$sym$js_STAR_),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$number);
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__25878__auto__),(function (){var x__7639__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__25878__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__25878__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7639__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__25879__auto__),(function (){var x__7639__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([(function (){var x__7639__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__25879__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7639__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25885 = arguments.length;
var i__7911__auto___25886 = (0);
while(true){
if((i__7911__auto___25886 < len__7910__auto___25885)){
args__7917__auto__.push((arguments[i__7911__auto___25886]));

var G__25887 = (i__7911__auto___25886 + (1));
i__7911__auto___25886 = G__25887;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__25880__auto__),(function (){var x__7639__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__25880__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body,(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__7639__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq25881){
var G__25882 = cljs.core.first(seq25881);
var seq25881__$1 = cljs.core.next(seq25881);
var G__25883 = cljs.core.first(seq25881__$1);
var seq25881__$2 = cljs.core.next(seq25881__$1);
var G__25884 = cljs.core.first(seq25881__$2);
var seq25881__$3 = cljs.core.next(seq25881__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__25882,G__25883,G__25884,seq25881__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25891 = arguments.length;
var i__7911__auto___25892 = (0);
while(true){
if((i__7911__auto___25892 < len__7910__auto___25891)){
args__7917__auto__.push((arguments[i__7911__auto___25892]));

var G__25893 = (i__7911__auto___25892 + (1));
i__7911__auto___25892 = G__25893;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((1) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7918__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25888_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25888_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq25889){
var G__25890 = cljs.core.first(seq25889);
var seq25889__$1 = cljs.core.next(seq25889);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__25890,seq25889__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25903 = arguments.length;
var i__7911__auto___25904 = (0);
while(true){
if((i__7911__auto___25904 < len__7910__auto___25903)){
args__7917__auto__.push((arguments[i__7911__auto___25904]));

var G__25905 = (i__7911__auto___25904 + (1));
i__7911__auto___25904 = G__25905;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$doc,docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$default);
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.array_seq([cljs.core.cst$kw$default,cljs.core.cst$kw$hierarchy], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defonce),(function (){var x__7639__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__25894__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7639__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__25895__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7639__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__25896__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7639__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__25897__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__7639__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__25898__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__7639__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$hierarchy),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_global_DASH_hierarchy))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_MultiFn$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__7639__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__25898__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__25894__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__25895__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__25896__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__25897__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq25899){
var G__25900 = cljs.core.first(seq25899);
var seq25899__$1 = cljs.core.next(seq25899);
var G__25901 = cljs.core.first(seq25899__$1);
var seq25899__$2 = cljs.core.next(seq25899__$1);
var G__25902 = cljs.core.first(seq25899__$2);
var seq25899__$3 = cljs.core.next(seq25899__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__25900,G__25901,G__25902,seq25899__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25911 = arguments.length;
var i__7911__auto___25912 = (0);
while(true){
if((i__7911__auto___25912 < len__7910__auto___25911)){
args__7917__auto__.push((arguments[i__7911__auto___25912]));

var G__25913 = (i__7911__auto___25912 + (1));
i__7911__auto___25912 = G__25913;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((4) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7918__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_add_DASH_method),(function (){var x__7639__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_MultiFn], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq25906){
var G__25907 = cljs.core.first(seq25906);
var seq25906__$1 = cljs.core.next(seq25906);
var G__25908 = cljs.core.first(seq25906__$1);
var seq25906__$2 = cljs.core.next(seq25906__$1);
var G__25909 = cljs.core.first(seq25906__$2);
var seq25906__$3 = cljs.core.next(seq25906__$2);
var G__25910 = cljs.core.first(seq25906__$3);
var seq25906__$4 = cljs.core.next(seq25906__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__25907,G__25908,G__25909,G__25910,seq25906__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25914__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25915__auto__),(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_prn),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$toFixed),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25914__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25915__auto__)], 0))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25930 = arguments.length;
var i__7911__auto___25931 = (0);
while(true){
if((i__7911__auto___25931 < len__7910__auto___25930)){
args__7917__auto__.push((arguments[i__7911__auto___25931]));

var G__25932 = (i__7911__auto___25931 + (1));
i__7911__auto___25931 = G__25932;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((5) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7918__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__25927){
var map__25928 = p__25927;
var map__25928__$1 = ((((!((map__25928 == null)))?((((map__25928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25928):map__25928);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25928__$1,cljs.core.cst$kw$print_DASH_fn,cljs.core.cst$sym$println);
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25916__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__25917__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$___25918__auto__),(function (){var x__7639__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__25919__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__25920__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__25919__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__25916__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),(function (){var x__7639__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__7639__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__7639__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__25920__auto__),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq25921){
var G__25922 = cljs.core.first(seq25921);
var seq25921__$1 = cljs.core.next(seq25921);
var G__25923 = cljs.core.first(seq25921__$1);
var seq25921__$2 = cljs.core.next(seq25921__$1);
var G__25924 = cljs.core.first(seq25921__$2);
var seq25921__$3 = cljs.core.next(seq25921__$2);
var G__25925 = cljs.core.first(seq25921__$3);
var seq25921__$4 = cljs.core.next(seq25921__$3);
var G__25926 = cljs.core.first(seq25921__$4);
var seq25921__$5 = cljs.core.next(seq25921__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__25922,G__25923,G__25924,G__25925,G__25926,seq25921__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args25933 = [];
var len__7910__auto___25940 = arguments.length;
var i__7911__auto___25941 = (0);
while(true){
if((i__7911__auto___25941 < len__7910__auto___25940)){
args25933.push((arguments[i__7911__auto___25941]));

var G__25942 = (i__7911__auto___25941 + (1));
i__7911__auto___25941 = G__25942;
continue;
} else {
}
break;
}

var G__25935 = args25933.length;
switch (G__25935) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25933.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = (function (){var G__25939 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__25939) : cljs.core$macros.cs.call(null,G__25939));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.array_seq([(function (){var x__7639__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.array_seq([(function (){var x__7639__auto__ = prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$apply_DASH_to),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_zero_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25949 = arguments.length;
var i__7911__auto___25950 = (0);
while(true){
if((i__7911__auto___25950 < len__7910__auto___25949)){
args__7917__auto__.push((arguments[i__7911__auto___25950]));

var G__25951 = (i__7911__auto___25950 + (1));
i__7911__auto___25950 = G__25951;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__25944__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog$string$StringBuffer$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_binding),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_newline_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_fn_STAR_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25945__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$append),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__25944__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__25945__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__25944__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq25946){
var G__25947 = cljs.core.first(seq25946);
var seq25946__$1 = cljs.core.next(seq25946);
var G__25948 = cljs.core.first(seq25946__$1);
var seq25946__$2 = cljs.core.next(seq25946__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__25947,G__25948,seq25946__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__7917__auto__ = [];
var len__7910__auto___25956 = arguments.length;
var i__7911__auto___25957 = (0);
while(true){
if((i__7911__auto___25957 < len__7910__auto___25956)){
args__7917__auto__.push((arguments[i__7911__auto___25957]));

var G__25958 = (i__7911__auto___25957 + (1));
i__7911__auto___25957 = G__25958;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25952_SHARP_){
return cljs.core._conj((function (){var x__7639__auto__ = p1__25952_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq);
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq25953){
var G__25954 = cljs.core.first(seq25953);
var seq25953__$1 = cljs.core.next(seq25953);
var G__25955 = cljs.core.first(seq25953__$1);
var seq25953__$2 = cljs.core.next(seq25953__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__25954,G__25955,seq25953__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__7639__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),"''+~{}"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__7639__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ITER_SYMBOL),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25959__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_es6_DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__25959__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__25960){
var vec__25972 = p__25960;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25972,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25972,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to ns-interns must be a quoted symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__7639__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25972,quote,ns){
return (function (p__25979){
var vec__25980 = p__25979;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25980,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25980,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__7639__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
});})(vec__25972,quote,ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__25983,p__25984){
var vec__25991 = p__25983;
var quote0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25991,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25991,(1),null);
var vec__25994 = p__25984;
var quote1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25994,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote0,cljs.core.cst$sym$quote)) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote1,cljs.core.cst$sym$quote)) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arguments to ns-unmap must be quoted symbols"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),cljs.core.dissoc,cljs.core.array_seq([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_delete),(function (){var x__7639__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26002 = arguments.length;
var i__7911__auto___26003 = (0);
while(true){
if((i__7911__auto___26003 < len__7910__auto___26002)){
args__7917__auto__.push((arguments[i__7911__auto___26003]));

var G__26004 = (i__7911__auto___26003 + (1));
i__7911__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((4) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7918__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_vreset_BANG_),(function (){var x__7639__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_deref),(function (){var x__7639__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq25997){
var G__25998 = cljs.core.first(seq25997);
var seq25997__$1 = cljs.core.next(seq25997);
var G__25999 = cljs.core.first(seq25997__$1);
var seq25997__$2 = cljs.core.next(seq25997__$1);
var G__26000 = cljs.core.first(seq25997__$2);
var seq25997__$3 = cljs.core.next(seq25997__$2);
var G__26001 = cljs.core.first(seq25997__$3);
var seq25997__$4 = cljs.core.next(seq25997__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25998,G__25999,G__26000,G__26001,seq25997__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26009 = arguments.length;
var i__7911__auto___26010 = (0);
while(true){
if((i__7911__auto___26010 < len__7910__auto___26009)){
args__7917__auto__.push((arguments[i__7911__auto___26010]));

var G__26011 = (i__7911__auto___26010 + (1));
i__7911__auto___26010 = G__26011;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq26005){
var G__26006 = cljs.core.first(seq26005);
var seq26005__$1 = cljs.core.next(seq26005);
var G__26007 = cljs.core.first(seq26005__$1);
var seq26005__$2 = cljs.core.next(seq26005__$1);
var G__26008 = cljs.core.first(seq26005__$2);
var seq26005__$3 = cljs.core.next(seq26005__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__26006,G__26007,G__26008,seq26005__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace..
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure/string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26015 = arguments.length;
var i__7911__auto___26016 = (0);
while(true){
if((i__7911__auto___26016 < len__7910__auto___26015)){
args__7917__auto__.push((arguments[i__7911__auto___26016]));

var G__26017 = (i__7911__auto___26016 + (1));
i__7911__auto___26016 = G__26017;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__7639__auto__ = cljs.core.cons(cljs.core.cst$kw$require,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq26012){
var G__26013 = cljs.core.first(seq26012);
var seq26012__$1 = cljs.core.next(seq26012);
var G__26014 = cljs.core.first(seq26012__$1);
var seq26012__$2 = cljs.core.next(seq26012__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__26013,G__26014,seq26012__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26021 = arguments.length;
var i__7911__auto___26022 = (0);
while(true){
if((i__7911__auto___26022 < len__7910__auto___26021)){
args__7917__auto__.push((arguments[i__7911__auto___26022]));

var G__26023 = (i__7911__auto___26022 + (1));
i__7911__auto___26022 = G__26023;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__7639__auto__ = cljs.core.cons(cljs.core.cst$kw$require_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq26018){
var G__26019 = cljs.core.first(seq26018);
var seq26018__$1 = cljs.core.next(seq26018);
var G__26020 = cljs.core.first(seq26018__$1);
var seq26018__$2 = cljs.core.next(seq26018__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__26019,G__26020,seq26018__$2);
});


cljs.core$macros.require_macros.cljs$lang$macro = true;
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26027 = arguments.length;
var i__7911__auto___26028 = (0);
while(true){
if((i__7911__auto___26028 < len__7910__auto___26027)){
args__7917__auto__.push((arguments[i__7911__auto___26028]));

var G__26029 = (i__7911__auto___26028 + (1));
i__7911__auto___26028 = G__26029;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__7639__auto__ = cljs.core.cons(cljs.core.cst$kw$use,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq26024){
var G__26025 = cljs.core.first(seq26024);
var seq26024__$1 = cljs.core.next(seq26024);
var G__26026 = cljs.core.first(seq26024__$1);
var seq26024__$2 = cljs.core.next(seq26024__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__26025,G__26026,seq26024__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26033 = arguments.length;
var i__7911__auto___26034 = (0);
while(true){
if((i__7911__auto___26034 < len__7910__auto___26033)){
args__7917__auto__.push((arguments[i__7911__auto___26034]));

var G__26035 = (i__7911__auto___26034 + (1));
i__7911__auto___26034 = G__26035;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__7639__auto__ = cljs.core.cons(cljs.core.cst$kw$use_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq26030){
var G__26031 = cljs.core.first(seq26030);
var seq26030__$1 = cljs.core.next(seq26030);
var G__26032 = cljs.core.first(seq26030__$1);
var seq26030__$2 = cljs.core.next(seq26030__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__26031,G__26032,seq26030__$2);
});


cljs.core$macros.use_macros.cljs$lang$macro = true;
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26039 = arguments.length;
var i__7911__auto___26040 = (0);
while(true){
if((i__7911__auto___26040 < len__7910__auto___26039)){
args__7917__auto__.push((arguments[i__7911__auto___26040]));

var G__26041 = (i__7911__auto___26040 + (1));
i__7911__auto___26040 = G__26041;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__7639__auto__ = cljs.core.cons(cljs.core.cst$kw$import,import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq26036){
var G__26037 = cljs.core.first(seq26036);
var seq26036__$1 = cljs.core.next(seq26036);
var G__26038 = cljs.core.first(seq26036__$1);
var seq26036__$2 = cljs.core.next(seq26036__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__26037,G__26038,seq26036__$2);
});


cljs.core$macros.import$.cljs$lang$macro = true;
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26045 = arguments.length;
var i__7911__auto___26046 = (0);
while(true){
if((i__7911__auto___26046 < len__7910__auto___26045)){
args__7917__auto__.push((arguments[i__7911__auto___26046]));

var G__26047 = (i__7911__auto___26046 + (1));
i__7911__auto___26046 = G__26047;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((2) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7918__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__7639__auto__ = cljs.core.cons(cljs.core.cst$kw$refer_DASH_clojure,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq26042){
var G__26043 = cljs.core.first(seq26042);
var seq26042__$1 = cljs.core.next(seq26042);
var G__26044 = cljs.core.first(seq26042__$1);
var seq26042__$2 = cljs.core.next(seq26042__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__26043,G__26044,seq26042__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$nodeGlobalRequire),(function (){var x__7639__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand-1 must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7639__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
} else {
return form;
}
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__26048 = form_SINGLEQUOTE_;
var G__26049 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__26048;
form_SINGLEQUOTE_ = G__26049;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__7639__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
}
break;
}
} else {
return form;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__6785__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__6785__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__6785__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args26050 = [];
var len__7910__auto___26057 = arguments.length;
var i__7911__auto___26058 = (0);
while(true){
if((i__7911__auto___26058 < len__7910__auto___26057)){
args26050.push((arguments[i__7911__auto___26058]));

var G__26059 = (i__7911__auto___26058 + (1));
i__7911__auto___26058 = G__26059;
continue;
} else {
}
break;
}

var G__26052 = args26050.length;
switch (G__26052) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26050.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__26053,solo){
var vec__26054 = p__26053;
var seq__26055 = cljs.core.seq(vec__26054);
var first__26056 = cljs.core.first(seq__26055);
var seq__26055__$1 = cljs.core.next(seq__26055);
var arglist = first__26056;
var body = seq__26055__$1;
var method = vec__26054;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic;
});})(sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_first,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/travis/build/HealthSamurai/videorecorder-demo/resources/public/js/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2885),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2885),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_next,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/travis/build/HealthSamurai/videorecorder-demo/resources/public/js/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2886),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2886),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))));
});})(sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.array_seq([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__7639__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),params,cljs.core.array_seq([(function (){var x__7639__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__7639__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
}
});})(sig,restarg,vec__26054,seq__26055,first__26056,seq__26055__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())))):null),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$applyTo)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__26061__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__26062__auto__),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__26062__auto__),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__26061__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),(function (){var x__7639__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__26062__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__26062__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__26065,emit_var_QMARK_){
var vec__26072 = p__26065;
var vec__26075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(0),null);
var seq__26076 = cljs.core.seq(vec__26075);
var first__26077 = cljs.core.first(seq__26076);
var seq__26076__$1 = cljs.core.next(seq__26076);
var arglist = first__26077;
var body = seq__26076__$1;
var method = vec__26075;
var fdecl = vec__26072;
var dest_args = ((function (vec__26072,vec__26075,seq__26076,first__26077,seq__26076__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26072,vec__26075,seq__26076,first__26077,seq__26076__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});})(vec__26072,vec__26075,seq__26076,first__26077,seq__26076__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__26072,vec__26075,seq__26076,first__26077,seq__26076__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,true,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,c_1,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.cst$kw$arglists,(function (){var x__7639__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7639__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__26063__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__26063__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__26064__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__7639__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__26063__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/travis/build/HealthSamurai/videorecorder-demo/resources/public/js/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2933),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2933),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__26063__auto__),cljs.core.array_seq([(function (){var x__7639__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__26064__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aget),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__26102){
var vec__26106 = p__26102;
var seq__26107 = cljs.core.seq(vec__26106);
var first__26108 = cljs.core.first(seq__26107);
var seq__26107__$1 = cljs.core.next(seq__26107);
var sig = first__26108;
var body = seq__26107__$1;
var method = vec__26106;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__26078_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),p1__26078_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,maxfa,cljs.core.cst$kw$method_DASH_params,sigs,cljs.core.cst$kw$arglists,arglists,cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__7639__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7639__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),(function (){var x__7639__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7639__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__26079_SHARP_){
return fixed_arity(rname,p1__26079_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,cljs.core.array_seq([sigs], 0)),(function (){var x__7639__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__7639__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__26080__auto__),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__7639__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/travis/build/HealthSamurai/videorecorder-demo/resources/public/js/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2991),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,58),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2991),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,78),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),(function (){var x__7639__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(maxfa),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__26080__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0)))):(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7639__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__7639__auto__ = args_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__7639__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.array_seq([(function (){var x__7639__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),(function (){var x__7639__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__7639__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})()], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__7639__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core._conj((function (){var x__7639__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})(),cljs.core.cst$sym$quote)], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__7639__auto____$1 = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$def);

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__26109__i = 0, G__26109__a = new Array(arguments.length -  3);
while (G__26109__i < G__26109__a.length) {G__26109__a[G__26109__i] = arguments[G__26109__i + 3]; ++G__26109__i;}
  fdecl = new cljs.core.IndexedSeq(G__26109__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__26110){
var _AMPERSAND_form = cljs.core.first(arglist__26110);
arglist__26110 = cljs.core.next(arglist__26110);
var _AMPERSAND_env = cljs.core.first(arglist__26110);
arglist__26110 = cljs.core.next(arglist__26110);
var name = cljs.core.first(arglist__26110);
var fdecl = cljs.core.rest(arglist__26110);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__7917__auto__ = [];
var len__7910__auto___26115 = arguments.length;
var i__7911__auto___26116 = (0);
while(true){
if((i__7911__auto___26116 < len__7910__auto___26115)){
args__7917__auto__.push((arguments[i__7911__auto___26116]));

var G__26117 = (i__7911__auto___26116 + (1));
i__7911__auto___26116 = G__26117;
continue;
} else {
}
break;
}

var argseq__7918__auto__ = ((((3) < args__7917__auto__.length))?(new cljs.core.IndexedSeq(args__7917__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7918__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__7639__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,cljs.core.cst$kw$macro,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__26118 = cljs.core.cons(f,p);
var G__26119 = cljs.core.next(args__$1);
p = G__26118;
args__$1 = G__26119;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__26120 = cljs.core.cons(f,p);
var G__26121 = cljs.core.next(args__$1);
p = G__26120;
args__$1 = G__26121;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__26122 = cljs.core.next(fd);
fd = G__26122;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__26123 = cljs.core.next(fd);
fd = G__26123;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__7639__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_env,args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__26124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__26125 = cljs.core.next(ds);
acc = G__26124;
ds = G__26125;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__26126 = cljs.core.next(p);
var G__26127 = cljs.core.cons(cljs.core.first(p),d);
p = G__26126;
d = G__26127;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj((function (){var x__7639__auto__ = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,decl);
return cljs.core._conj((function (){var x__7639__auto____$1 = cljs.core._conj((function (){var x__7639__auto____$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__7639__auto____$1 = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$macro)], 0))));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),x__7639__auto____$1);
})(),cljs.core.cst$sym$set_BANG_);
return cljs.core._conj(cljs.core.List.EMPTY,x__7639__auto____$1);
})(),x__7639__auto__);
})(),cljs.core.cst$sym$do);
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq26111){
var G__26112 = cljs.core.first(seq26111);
var seq26111__$1 = cljs.core.next(seq26111);
var G__26113 = cljs.core.first(seq26111__$1);
var seq26111__$2 = cljs.core.next(seq26111__$1);
var G__26114 = cljs.core.first(seq26111__$2);
var seq26111__$3 = cljs.core.next(seq26111__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__26112,G__26113,G__26114,seq26111__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
