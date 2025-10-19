(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var km={exports:{}},Wl={},Om={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),i_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),o_=Symbol.for("react.forward_ref"),a_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),u_=Symbol.for("react.lazy"),Mh=Symbol.iterator;function c_(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zm=Object.assign,Hm={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||Bm}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vm(){}Vm.prototype=Ns.prototype;function lf(t,e,n){this.props=t,this.context=e,this.refs=Hm,this.updater=n||Bm}var uf=lf.prototype=new Vm;uf.constructor=lf;zm(uf,Ns.prototype);uf.isPureReactComponent=!0;var wh=Array.isArray,Gm=Object.prototype.hasOwnProperty,cf={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function jm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,i)&&!Wm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wo,type:t,key:s,ref:o,props:r,_owner:cf.current}}function d_(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function f_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Th=/\/+/g;function pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f_(""+t.key):e.toString(36)}function Ya(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case e_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pu(o,0):i,wh(r)?(n="",t!=null&&(n=t.replace(Th,"$&/")+"/"),Ya(r,e,n,"",function(u){return u})):r!=null&&(df(r)&&(r=d_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Th,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pu(s,a);o+=Ya(s,e,n,l,r)}else if(l=c_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pu(s,a++),o+=Ya(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var i=[],r=0;return Ya(t,i,"","",function(s){return e.call(n,s,r++)}),i}function h_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},qa={transition:null},p_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:qa,ReactCurrentOwner:cf};function Xm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Ns;Ve.Fragment=t_;Ve.Profiler=i_;Ve.PureComponent=lf;Ve.StrictMode=n_;Ve.Suspense=a_;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;Ve.act=Xm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gm.call(e,l)&&!Wm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Wo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:s_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r_,_context:t},t.Consumer=t};Ve.createElement=jm;Ve.createFactory=function(t){var e=jm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:o_,render:t}};Ve.isValidElement=df;Ve.lazy=function(t){return{$$typeof:u_,_payload:{_status:-1,_result:t},_init:h_}};Ve.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};Ve.unstable_act=Xm;Ve.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Ve.useContext=function(t){return Kt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Ve.useId=function(){return Kt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Kt.current.useRef(t)};Ve.useState=function(t){return Kt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Kt.current.useTransition()};Ve.version="18.3.1";Om.exports=Ve;var O=Om.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=O,g_=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),__=Object.prototype.hasOwnProperty,x_=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)__.call(e,i)&&!y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:g_,type:t,key:s,ref:o,props:r,_owner:x_.current}}Wl.Fragment=v_;Wl.jsx=$m;Wl.jsxs=$m;km.exports=Wl;var b=km.exports,Ym={exports:{}},_n={},qm={exports:{}},Km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,K){var J=I.length;I.push(K);e:for(;0<J;){var le=J-1>>>1,Te=I[le];if(0<r(Te,K))I[le]=K,I[J]=Te,J=le;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],J=I.pop();if(J!==K){I[0]=J;e:for(var le=0,Te=I.length,Ye=Te>>>1;le<Ye;){var $e=2*(le+1)-1,Ge=I[$e],Y=$e+1,ee=I[Y];if(0>r(Ge,J))Y<Te&&0>r(ee,Ge)?(I[le]=ee,I[Y]=J,le=Y):(I[le]=Ge,I[$e]=J,le=$e);else if(Y<Te&&0>r(ee,J))I[le]=ee,I[Y]=J,le=Y;else break e}}return K}function r(I,K){var J=I.sortIndex-K.sortIndex;return J!==0?J:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,h=3,p=!1,v=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=I)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function S(I){if(_=!1,y(I),!v)if(n(l)!==null)v=!0,$(A);else{var K=n(u);K!==null&&te(S,K.startTime-I)}}function A(I,K){v=!1,_&&(_=!1,c(L),L=-1),p=!0;var J=h;try{for(y(K),f=n(l);f!==null&&(!(f.expirationTime>K)||I&&!N());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var Te=le(f.expirationTime<=K);K=t.unstable_now(),typeof Te=="function"?f.callback=Te:f===n(l)&&i(l),y(K)}else i(l);f=n(l)}if(f!==null)var Ye=!0;else{var $e=n(u);$e!==null&&te(S,$e.startTime-K),Ye=!1}return Ye}finally{f=null,h=J,p=!1}}var R=!1,C=null,L=-1,w=5,E=-1;function N(){return!(t.unstable_now()-E<w)}function V(){if(C!==null){var I=t.unstable_now();E=I;var K=!0;try{K=C(!0,I)}finally{K?j():(R=!1,C=null)}}else R=!1}var j;if(typeof x=="function")j=function(){x(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Z=q.port2;q.port1.onmessage=V,j=function(){Z.postMessage(null)}}else j=function(){g(V,0)};function $(I){C=I,R||(R=!0,j())}function te(I,K){L=g(function(){I(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,$(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var J=h;h=K;try{return I()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=h;h=I;try{return K()}finally{h=J}},t.unstable_scheduleCallback=function(I,K,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,I){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,I={id:d++,callback:K,priorityLevel:I,startTime:J,expirationTime:Te,sortIndex:-1},J>le?(I.sortIndex=J,e(u,I),n(l)===null&&I===n(u)&&(_?(c(L),L=-1):_=!0,te(S,J-le))):(I.sortIndex=Te,e(l,I),v||p||(v=!0,$(A))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var K=h;return function(){var J=h;h=K;try{return I.apply(this,arguments)}finally{h=J}}}})(Km);qm.exports=Km;var S_=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_=O,vn=S_;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zm=new Set,_o={};function Ur(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(_o[t]=e,t=0;t<e.length;t++)Zm.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,M_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},Ch={};function w_(t){return yc.call(Ch,t)?!0:yc.call(Ah,t)?!1:M_.test(t)?Ch[t]=!0:(Ah[t]=!0,!1)}function T_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A_(t,e,n,i){if(e===null||typeof e>"u"||T_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ff=/[\-:]([a-z])/g;function hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ff,hf);Ot[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ff,hf);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ff,hf);Ot[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A_(e,n,r,i)&&(n=null),i||r===null?w_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=E_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Jm=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Mc=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),eg=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,mu;function io(t){if(mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mu=e&&e[1]||""}return`
`+mu+t}var gu=!1;function vu(t,e){if(!t||gu)return"";gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function C_(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=vu(t.type,!1),t;case 11:return t=vu(t.type.render,!1),t;case 1:return t=vu(t.type,!0),t;default:return""}}function wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Sc:return"Profiler";case mf:return"StrictMode";case Ec:return"Suspense";case Mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jm:return(t.displayName||"Context")+".Consumer";case Qm:return(t._context.displayName||"Context")+".Provider";case gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vf:return e=t.displayName||null,e!==null?e:wc(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return wc(t(e))}catch{}}return null}function R_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wc(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b_(t){var e=tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=b_(t))}function ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tc(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ig(t,e){e=e.checked,e!=null&&pf(t,"checked",e,!1)}function Ac(t,e){ig(t,e);var n=er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cc(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ro(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function rg(t,e){var n=er(e.value),i=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,og=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P_=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){P_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function ag(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ag(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var L_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(L_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dc=null;function _f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nc=null,ps=null,ms=null;function Nh(t){if(t=$o(t)){if(typeof Nc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=ql(e),Nc(t.stateNode,t.type,e))}}function ug(t){ps?ms?ms.push(t):ms=[t]:ps=t}function cg(){if(ps){var t=ps,e=ms;if(ms=ps=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function dg(t,e){return t(e)}function fg(){}var _u=!1;function hg(t,e,n){if(_u)return t(e,n);_u=!0;try{return dg(t,e,n)}finally{_u=!1,(ps!==null||ms!==null)&&(fg(),cg())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ic=!1;if(yi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Ic=!1}function D_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var uo=!1,pl=null,ml=!1,Uc=null,N_={onError:function(t){uo=!0,pl=t}};function I_(t,e,n,i,r,s,o,a,l){uo=!1,pl=null,D_.apply(N_,arguments)}function U_(t,e,n,i,r,s,o,a,l){if(I_.apply(this,arguments),uo){if(uo){var u=pl;uo=!1,pl=null}else throw Error(ne(198));ml||(ml=!0,Uc=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(Fr(t)!==t)throw Error(ne(188))}function F_(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ih(r),t;if(s===i)return Ih(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function mg(t){return t=F_(t),t!==null?gg(t):null}function gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gg(t);if(e!==null)return e;t=t.sibling}return null}var vg=vn.unstable_scheduleCallback,Uh=vn.unstable_cancelCallback,k_=vn.unstable_shouldYield,O_=vn.unstable_requestPaint,Mt=vn.unstable_now,B_=vn.unstable_getCurrentPriorityLevel,xf=vn.unstable_ImmediatePriority,_g=vn.unstable_UserBlockingPriority,gl=vn.unstable_NormalPriority,z_=vn.unstable_LowPriority,xg=vn.unstable_IdlePriority,jl=null,ei=null;function H_(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:W_,V_=Math.log,G_=Math.LN2;function W_(t){return t>>>=0,t===0?32:31-(V_(t)/G_|0)|0}var ua=64,ca=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function j_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=j_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yg(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function $_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eg,Sf,Mg,wg,Tg,kc=!1,da=[],Wi=null,ji=null,Xi=null,So=new Map,Eo=new Map,Bi=[],Y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$o(e),e!==null&&Sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q_(t,e,n,i,r){switch(e){case"focusin":return Wi=Ws(Wi,t,e,n,i,r),!0;case"dragenter":return ji=Ws(ji,t,e,n,i,r),!0;case"mouseover":return Xi=Ws(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return So.set(s,Ws(So.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eo.set(s,Ws(Eo.get(s)||null,t,e,n,i,r)),!0}return!1}function Ag(t){var e=Er(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=pg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){Mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Dc=i,n.target.dispatchEvent(i),Dc=null}else return e=$o(n),e!==null&&Sf(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){Ka(t)&&n.delete(e)}function K_(){kc=!1,Wi!==null&&Ka(Wi)&&(Wi=null),ji!==null&&Ka(ji)&&(ji=null),Xi!==null&&Ka(Xi)&&(Xi=null),So.forEach(kh),Eo.forEach(kh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,kc||(kc=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,K_)))}function Mo(t){function e(r){return js(r,t)}if(0<da.length){js(da[0],t);for(var n=1;n<da.length;n++){var i=da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&js(Wi,t),ji!==null&&js(ji,t),Xi!==null&&js(Xi,t),So.forEach(e),Eo.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&Bi.shift()}var gs=Ri.ReactCurrentBatchConfig,_l=!0;function Z_(t,e,n,i){var r=tt,s=gs.transition;gs.transition=null;try{tt=1,Ef(t,e,n,i)}finally{tt=r,gs.transition=s}}function Q_(t,e,n,i){var r=tt,s=gs.transition;gs.transition=null;try{tt=4,Ef(t,e,n,i)}finally{tt=r,gs.transition=s}}function Ef(t,e,n,i){if(_l){var r=Oc(t,e,n,i);if(r===null)bu(t,e,i,xl,n),Fh(t,i);else if(q_(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<Y_.indexOf(t)){for(;r!==null;){var s=$o(r);if(s!==null&&Eg(s),s=Oc(t,e,n,i),s===null&&bu(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bu(t,e,i,null,n)}}var xl=null;function Oc(t,e,n,i){if(xl=null,t=_f(i),t=Er(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B_()){case xf:return 1;case _g:return 4;case gl:case z_:return 16;case xg:return 536870912;default:return 16}default:return 16}}var Vi=null,Mf=null,Za=null;function Rg(){if(Za)return Za;var t,e=Mf,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Za=r.slice(t,1<i?1-i:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Oh(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fa:Oh,this.isPropagationStopped=Oh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=xn(Is),Xo=_t({},Is,{view:0,detail:0}),J_=xn(Xo),yu,Su,Xs,Xl=_t({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(yu=t.screenX-Xs.screenX,Su=t.screenY-Xs.screenY):Su=yu=0,Xs=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Bh=xn(Xl),ex=_t({},Xl,{dataTransfer:0}),tx=xn(ex),nx=_t({},Xo,{relatedTarget:0}),Eu=xn(nx),ix=_t({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=xn(ix),sx=_t({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ox=xn(sx),ax=_t({},Is,{data:0}),zh=xn(ax),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cx[t])?!!e[t]:!1}function Tf(){return dx}var fx=_t({},Xo,{key:function(t){if(t.key){var e=lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hx=xn(fx),px=_t({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=xn(px),mx=_t({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),gx=xn(mx),vx=_t({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=xn(vx),xx=_t({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=xn(xx),Sx=[9,13,27,32],Af=yi&&"CompositionEvent"in window,co=null;yi&&"documentMode"in document&&(co=document.documentMode);var Ex=yi&&"TextEvent"in window&&!co,bg=yi&&(!Af||co&&8<co&&11>=co),Vh=" ",Gh=!1;function Pg(t,e){switch(t){case"keyup":return Sx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Mx(t,e){switch(t){case"compositionend":return Lg(e);case"keypress":return e.which!==32?null:(Gh=!0,Vh);case"textInput":return t=e.data,t===Vh&&Gh?null:t;default:return null}}function wx(t,e){if(ns)return t==="compositionend"||!Af&&Pg(t,e)?(t=Rg(),Za=Mf=Vi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bg&&e.locale!=="ko"?null:e.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tx[t.type]:e==="textarea"}function Dg(t,e,n,i){ug(i),e=yl(e,"onChange"),0<e.length&&(n=new wf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fo=null,wo=null;function Ax(t){Gg(t,0)}function $l(t){var e=ss(t);if(ng(e))return t}function Cx(t,e){if(t==="change")return e}var Ng=!1;if(yi){var Mu;if(yi){var wu="oninput"in document;if(!wu){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),wu=typeof jh.oninput=="function"}Mu=wu}else Mu=!1;Ng=Mu&&(!document.documentMode||9<document.documentMode)}function Xh(){fo&&(fo.detachEvent("onpropertychange",Ig),wo=fo=null)}function Ig(t){if(t.propertyName==="value"&&$l(wo)){var e=[];Dg(e,wo,t,_f(t)),hg(Ax,e)}}function Rx(t,e,n){t==="focusin"?(Xh(),fo=e,wo=n,fo.attachEvent("onpropertychange",Ig)):t==="focusout"&&Xh()}function bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(wo)}function Px(t,e){if(t==="click")return $l(e)}function Lx(t,e){if(t==="input"||t==="change")return $l(e)}function Dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Dx;function To(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yc.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yh(t,e){var n=$h(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Nx(t){var e=Fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(i!==null&&Cf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Yh(n,s);var o=Yh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ix=yi&&"documentMode"in document&&11>=document.documentMode,is=null,Bc=null,ho=null,zc=!1;function qh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||is==null||is!==hl(i)||(i=is,"selectionStart"in i&&Cf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&To(ho,i)||(ho=i,i=yl(Bc,"onSelect"),0<i.length&&(e=new wf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},Tu={},kg={};yi&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Yl(t){if(Tu[t])return Tu[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kg)return Tu[t]=e[n];return t}var Og=Yl("animationend"),Bg=Yl("animationiteration"),zg=Yl("animationstart"),Hg=Yl("transitionend"),Vg=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Vg.set(t,e),Ur(e,[t])}for(var Au=0;Au<Kh.length;Au++){var Cu=Kh[Au],Ux=Cu.toLowerCase(),Fx=Cu[0].toUpperCase()+Cu.slice(1);rr(Ux,"on"+Fx)}rr(Og,"onAnimationEnd");rr(Bg,"onAnimationIteration");rr(zg,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Hg,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,U_(i,e,void 0,t),t.currentTarget=null}function Gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,a,u),s=l}}}if(ml)throw t=Uc,ml=!1,Uc=null,t}function ut(t,e){var n=e[jc];n===void 0&&(n=e[jc]=new Set);var i=t+"__bubble";n.has(i)||(Wg(e,t,2,!1),n.add(i))}function Ru(t,e,n){var i=0;e&&(i|=4),Wg(n,t,i,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[pa]){t[pa]=!0,Zm.forEach(function(n){n!=="selectionchange"&&(kx.has(n)||Ru(n,!1,t),Ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,Ru("selectionchange",!1,e))}}function Wg(t,e,n,i){switch(Cg(e)){case 1:var r=Z_;break;case 4:r=Q_;break;default:r=Ef}n=r.bind(null,e,n,t),r=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hg(function(){var u=s,d=_f(n),f=[];e:{var h=Vg.get(t);if(h!==void 0){var p=wf,v=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":p=hx;break;case"focusin":v="focus",p=Eu;break;case"focusout":v="blur",p=Eu;break;case"beforeblur":case"afterblur":p=Eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gx;break;case Og:case Bg:case zg:p=rx;break;case Hg:p=_x;break;case"scroll":p=J_;break;case"wheel":p=yx;break;case"copy":case"cut":case"paste":p=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hh}var _=(e&4)!==0,g=!_&&t==="scroll",c=_?h!==null?h+"Capture":null:h;_=[];for(var x=u,y;x!==null;){y=x;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,c!==null&&(S=yo(x,c),S!=null&&_.push(Co(x,S,y)))),g)break;x=x.return}0<_.length&&(h=new p(h,v,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Dc&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[Si]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Er(v):null,v!==null&&(g=Fr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=Bh,S="onMouseLeave",c="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Hh,S="onPointerLeave",c="onPointerEnter",x="pointer"),g=p==null?h:ss(p),y=v==null?h:ss(v),h=new _(S,x+"leave",p,n,d),h.target=g,h.relatedTarget=y,S=null,Er(d)===u&&(_=new _(c,x+"enter",v,n,d),_.target=y,_.relatedTarget=g,S=_),g=S,p&&v)t:{for(_=p,c=v,x=0,y=_;y;y=Br(y))x++;for(y=0,S=c;S;S=Br(S))y++;for(;0<x-y;)_=Br(_),x--;for(;0<y-x;)c=Br(c),y--;for(;x--;){if(_===c||c!==null&&_===c.alternate)break t;_=Br(_),c=Br(c)}_=null}else _=null;p!==null&&Qh(f,h,p,_,!1),v!==null&&g!==null&&Qh(f,g,v,_,!0)}}e:{if(h=u?ss(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=Cx;else if(Wh(h))if(Ng)A=Lx;else{A=bx;var R=Rx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Px);if(A&&(A=A(t,u))){Dg(f,A,n,d);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Cc(h,"number",h.value)}switch(R=u?ss(u):window,t){case"focusin":(Wh(R)||R.contentEditable==="true")&&(is=R,Bc=u,ho=null);break;case"focusout":ho=Bc=is=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,qh(f,n,d);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":qh(f,n,d)}var C;if(Af)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ns?Pg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(bg&&n.locale!=="ko"&&(ns||L!=="onCompositionStart"?L==="onCompositionEnd"&&ns&&(C=Rg()):(Vi=d,Mf="value"in Vi?Vi.value:Vi.textContent,ns=!0)),R=yl(u,L),0<R.length&&(L=new zh(L,t,null,n,d),f.push({event:L,listeners:R}),C?L.data=C:(C=Lg(n),C!==null&&(L.data=C)))),(C=Ex?Mx(t,n):wx(t,n))&&(u=yl(u,"onBeforeInput"),0<u.length&&(d=new zh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Gg(f,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=yo(t,n),s!=null&&i.unshift(Co(t,s,r)),s=yo(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=yo(n,s),l!=null&&o.unshift(Co(n,l,a))):r||(l=yo(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ox=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Jh(t){return(typeof t=="string"?t:""+t).replace(Ox,`
`).replace(Bx,"")}function ma(t,e,n){if(e=Jh(e),Jh(t)!==e&&n)throw Error(ne(425))}function Sl(){}var Hc=null,Vc=null;function Gc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(Vx)}:Wc;function Vx(t){setTimeout(function(){throw t})}function Pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mo(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Us,Ro="__reactProps$"+Us,Si="__reactContainer$"+Us,jc="__reactEvents$"+Us,Gx="__reactListeners$"+Us,Wx="__reactHandles$"+Us;function Er(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[Zn])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function $o(t){return t=t[Zn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function ql(t){return t[Ro]||null}var Xc=[],os=-1;function sr(t){return{current:t}}function ct(t){0>os||(t.current=Xc[os],Xc[os]=null,os--)}function at(t,e){os++,Xc[os]=t.current,t.current=e}var tr={},Wt=sr(tr),rn=sr(!1),br=tr;function Es(t,e){var n=t.type.contextTypes;if(!n)return tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function El(){ct(rn),ct(Wt)}function np(t,e,n){if(Wt.current!==tr)throw Error(ne(168));at(Wt,e),at(rn,n)}function jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,R_(t)||"Unknown",r));return _t({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,br=Wt.current,at(Wt,t),at(rn,rn.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=jg(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,ct(rn),ct(Wt),at(Wt,t)):ct(rn),at(rn,n)}var fi=null,Kl=!1,Lu=!1;function Xg(t){fi===null?fi=[t]:fi.push(t)}function jx(t){Kl=!0,Xg(t)}function or(){if(!Lu&&fi!==null){Lu=!0;var t=0,e=tt;try{var n=fi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Kl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),vg(xf,or),r}finally{tt=e,Lu=!1}}return null}var as=[],ls=0,wl=null,Tl=0,wn=[],Tn=0,Pr=null,pi=1,mi="";function gr(t,e){as[ls++]=Tl,as[ls++]=wl,wl=t,Tl=e}function $g(t,e,n){wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Pr,Pr=t;var i=pi;t=mi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Vn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function Rf(t){t.return!==null&&(gr(t,1),$g(t,1,0))}function bf(t){for(;t===wl;)wl=as[--ls],as[ls]=null,Tl=as[--ls],as[ls]=null;for(;t===Pr;)Pr=wn[--Tn],wn[Tn]=null,mi=wn[--Tn],wn[Tn]=null,pi=wn[--Tn],wn[Tn]=null}var mn=null,pn=null,ft=!1,On=null;function Yg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function $c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(ft){var e=pn;if(e){var n=e;if(!rp(t,e)){if($c(t))throw Error(ne(418));e=$i(n.nextSibling);var i=mn;e&&rp(t,e)?Yg(i,n):(t.flags=t.flags&-4097|2,ft=!1,mn=t)}}else{if($c(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ft=!1,mn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function ga(t){if(t!==mn)return!1;if(!ft)return sp(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gc(t.type,t.memoizedProps)),e&&(e=pn)){if($c(t))throw qg(),Error(ne(418));for(;e;)Yg(t,e),e=$i(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?$i(t.stateNode.nextSibling):null;return!0}function qg(){for(var t=pn;t;)t=$i(t.nextSibling)}function Ms(){pn=mn=null,ft=!1}function Pf(t){On===null?On=[t]:On.push(t)}var Xx=Ri.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function va(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function Kg(t){function e(c,x){if(t){var y=c.deletions;y===null?(c.deletions=[x],c.flags|=16):y.push(x)}}function n(c,x){if(!t)return null;for(;x!==null;)e(c,x),x=x.sibling;return null}function i(c,x){for(c=new Map;x!==null;)x.key!==null?c.set(x.key,x):c.set(x.index,x),x=x.sibling;return c}function r(c,x){return c=Zi(c,x),c.index=0,c.sibling=null,c}function s(c,x,y){return c.index=y,t?(y=c.alternate,y!==null?(y=y.index,y<x?(c.flags|=2,x):y):(c.flags|=2,x)):(c.flags|=1048576,x)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,x,y,S){return x===null||x.tag!==6?(x=Ou(y,c.mode,S),x.return=c,x):(x=r(x,y),x.return=c,x)}function l(c,x,y,S){var A=y.type;return A===ts?d(c,x,y.props.children,S,y.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ki&&op(A)===x.type)?(S=r(x,y.props),S.ref=$s(c,x,y),S.return=c,S):(S=sl(y.type,y.key,y.props,null,c.mode,S),S.ref=$s(c,x,y),S.return=c,S)}function u(c,x,y,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Bu(y,c.mode,S),x.return=c,x):(x=r(x,y.children||[]),x.return=c,x)}function d(c,x,y,S,A){return x===null||x.tag!==7?(x=Cr(y,c.mode,S,A),x.return=c,x):(x=r(x,y),x.return=c,x)}function f(c,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ou(""+x,c.mode,y),x.return=c,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oa:return y=sl(x.type,x.key,x.props,null,c.mode,y),y.ref=$s(c,null,x),y.return=c,y;case es:return x=Bu(x,c.mode,y),x.return=c,x;case ki:var S=x._init;return f(c,S(x._payload),y)}if(ro(x)||Vs(x))return x=Cr(x,c.mode,y,null),x.return=c,x;va(c,x)}return null}function h(c,x,y,S){var A=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:a(c,x,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:return y.key===A?l(c,x,y,S):null;case es:return y.key===A?u(c,x,y,S):null;case ki:return A=y._init,h(c,x,A(y._payload),S)}if(ro(y)||Vs(y))return A!==null?null:d(c,x,y,S,null);va(c,y)}return null}function p(c,x,y,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(y)||null,a(x,c,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oa:return c=c.get(S.key===null?y:S.key)||null,l(x,c,S,A);case es:return c=c.get(S.key===null?y:S.key)||null,u(x,c,S,A);case ki:var R=S._init;return p(c,x,y,R(S._payload),A)}if(ro(S)||Vs(S))return c=c.get(y)||null,d(x,c,S,A,null);va(x,S)}return null}function v(c,x,y,S){for(var A=null,R=null,C=x,L=x=0,w=null;C!==null&&L<y.length;L++){C.index>L?(w=C,C=null):w=C.sibling;var E=h(c,C,y[L],S);if(E===null){C===null&&(C=w);break}t&&C&&E.alternate===null&&e(c,C),x=s(E,x,L),R===null?A=E:R.sibling=E,R=E,C=w}if(L===y.length)return n(c,C),ft&&gr(c,L),A;if(C===null){for(;L<y.length;L++)C=f(c,y[L],S),C!==null&&(x=s(C,x,L),R===null?A=C:R.sibling=C,R=C);return ft&&gr(c,L),A}for(C=i(c,C);L<y.length;L++)w=p(C,c,L,y[L],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?L:w.key),x=s(w,x,L),R===null?A=w:R.sibling=w,R=w);return t&&C.forEach(function(N){return e(c,N)}),ft&&gr(c,L),A}function _(c,x,y,S){var A=Vs(y);if(typeof A!="function")throw Error(ne(150));if(y=A.call(y),y==null)throw Error(ne(151));for(var R=A=null,C=x,L=x=0,w=null,E=y.next();C!==null&&!E.done;L++,E=y.next()){C.index>L?(w=C,C=null):w=C.sibling;var N=h(c,C,E.value,S);if(N===null){C===null&&(C=w);break}t&&C&&N.alternate===null&&e(c,C),x=s(N,x,L),R===null?A=N:R.sibling=N,R=N,C=w}if(E.done)return n(c,C),ft&&gr(c,L),A;if(C===null){for(;!E.done;L++,E=y.next())E=f(c,E.value,S),E!==null&&(x=s(E,x,L),R===null?A=E:R.sibling=E,R=E);return ft&&gr(c,L),A}for(C=i(c,C);!E.done;L++,E=y.next())E=p(C,c,L,E.value,S),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?L:E.key),x=s(E,x,L),R===null?A=E:R.sibling=E,R=E);return t&&C.forEach(function(V){return e(c,V)}),ft&&gr(c,L),A}function g(c,x,y,S){if(typeof y=="object"&&y!==null&&y.type===ts&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:e:{for(var A=y.key,R=x;R!==null;){if(R.key===A){if(A=y.type,A===ts){if(R.tag===7){n(c,R.sibling),x=r(R,y.props.children),x.return=c,c=x;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ki&&op(A)===R.type){n(c,R.sibling),x=r(R,y.props),x.ref=$s(c,R,y),x.return=c,c=x;break e}n(c,R);break}else e(c,R);R=R.sibling}y.type===ts?(x=Cr(y.props.children,c.mode,S,y.key),x.return=c,c=x):(S=sl(y.type,y.key,y.props,null,c.mode,S),S.ref=$s(c,x,y),S.return=c,c=S)}return o(c);case es:e:{for(R=y.key;x!==null;){if(x.key===R)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(c,x.sibling),x=r(x,y.children||[]),x.return=c,c=x;break e}else{n(c,x);break}else e(c,x);x=x.sibling}x=Bu(y,c.mode,S),x.return=c,c=x}return o(c);case ki:return R=y._init,g(c,x,R(y._payload),S)}if(ro(y))return v(c,x,y,S);if(Vs(y))return _(c,x,y,S);va(c,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(c,x.sibling),x=r(x,y),x.return=c,c=x):(n(c,x),x=Ou(y,c.mode,S),x.return=c,c=x),o(c)):n(c,x)}return g}var ws=Kg(!0),Zg=Kg(!1),Al=sr(null),Cl=null,us=null,Lf=null;function Df(){Lf=us=Cl=null}function Nf(t){var e=Al.current;ct(Al),t._currentValue=e}function qc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){Cl=t,Lf=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Cl===null)throw Error(ne(308));us=t,Cl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var Mr=null;function If(t){Mr===null?Mr=[t]:Mr.push(t)}function Qg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,If(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,If(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}function ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(h=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=_t({},f,h);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=f}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Yo={},ti=sr(Yo),bo=sr(Yo),Po=sr(Yo);function wr(t){if(t===Yo)throw Error(ne(174));return t}function Ff(t,e){switch(at(Po,e),at(bo,t),at(ti,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bc(e,t)}ct(ti),at(ti,e)}function Ts(){ct(ti),ct(bo),ct(Po)}function ev(t){wr(Po.current);var e=wr(ti.current),n=bc(e,t.type);e!==n&&(at(bo,t),at(ti,n))}function kf(t){bo.current===t&&(ct(ti),ct(bo))}var mt=sr(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function Of(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var el=Ri.ReactCurrentDispatcher,Nu=Ri.ReactCurrentBatchConfig,Lr=0,gt=null,Ct=null,It=null,Pl=!1,po=!1,Lo=0,$x=0;function Bt(){throw Error(ne(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function zf(t,e,n,i,r,s){if(Lr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?Zx:Qx,t=n(i,r),po){s=0;do{if(po=!1,Lo=0,25<=s)throw Error(ne(301));s+=1,It=Ct=null,e.updateQueue=null,el.current=Jx,t=n(i,r)}while(po)}if(el.current=Ll,e=Ct!==null&&Ct.next!==null,Lr=0,It=Ct=gt=null,Pl=!1,e)throw Error(ne(300));return t}function Hf(){var t=Lo!==0;return Lo=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=t:It=It.next=t,It}function Ln(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?gt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(ne(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?gt.memoizedState=It=t:It=It.next=t}return It}function Do(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Lr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=d,Dr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tv(){}function nv(t,e){var n=gt,i=Ln(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Vf(sv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,No(9,rv.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ne(349));Lr&30||iv(n,e,r)}return r}function iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,i){e.value=n,e.getSnapshot=i,ov(e)&&av(t)}function sv(t,e,n){return n(function(){ov(e)&&av(t)})}function ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function av(t){var e=Ei(t,1);e!==null&&Gn(e,t,1,-1)}function up(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=Kx.bind(null,gt,t),[e.memoizedState,t]}function No(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lv(){return Ln().memoizedState}function tl(t,e,n,i){var r=qn();gt.flags|=t,r.memoizedState=No(1|e,n,void 0,i===void 0?null:i)}function Zl(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Bf(i,o.deps)){r.memoizedState=No(e,n,s,i);return}}gt.flags|=t,r.memoizedState=No(1|e,n,s,i)}function cp(t,e){return tl(8390656,8,t,e)}function Vf(t,e){return Zl(2048,8,t,e)}function uv(t,e){return Zl(4,2,t,e)}function cv(t,e){return Zl(4,4,t,e)}function dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fv(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,dv.bind(null,e,t),n)}function Gf(){}function hv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function pv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mv(t,e,n){return Lr&21?(jn(n,e)||(n=yg(),gt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function Yx(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{tt=n,Nu.transition=i}}function gv(){return Ln().memoizedState}function qx(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vv(t))_v(e,n);else if(n=Qg(t,e,n,i),n!==null){var r=Yt();Gn(n,t,i,r),xv(n,e,i)}}function Kx(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vv(t))_v(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,If(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qg(t,e,r,i),n!==null&&(r=Yt(),Gn(n,t,i,r),xv(n,e,i))}}function vv(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function _v(t,e){po=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yf(t,n)}}var Ll={readContext:Pn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Zx={readContext:Pn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qx.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:up,useDebugValue:Gf,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=up(!1),e=t[0];return t=Yx.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=qn();if(ft){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ut===null)throw Error(ne(349));Lr&30||iv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cp(sv.bind(null,i,s,t),[t]),i.flags|=2048,No(9,rv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Ut.identifierPrefix;if(ft){var n=mi,i=pi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qx={readContext:Pn,useCallback:hv,useContext:Pn,useEffect:Vf,useImperativeHandle:fv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:Iu,useRef:lv,useState:function(){return Iu(Do)},useDebugValue:Gf,useDeferredValue:function(t){var e=Ln();return mv(e,Ct.memoizedState,t)},useTransition:function(){var t=Iu(Do)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1},Jx={readContext:Pn,useCallback:hv,useContext:Pn,useEffect:Vf,useImperativeHandle:fv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:Uu,useRef:lv,useState:function(){return Uu(Do)},useDebugValue:Gf,useDeferredValue:function(t){var e=Ln();return Ct===null?e.memoizedState=t:mv(e,Ct.memoizedState,t)},useTransition:function(){var t=Uu(Do)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Ki(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Gn(e,t,r,i),Ja(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Ki(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Gn(e,t,r,i),Ja(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Ki(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(Gn(e,t,i,n),Ja(e,t,i))}};function dp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,i)||!To(r,s):!0}function yv(t,e,n){var i=!1,r=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=sn(e)?br:Wt.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function Zc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=sn(e)?br:Wt.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=C_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function Sv(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,ld=i),Qc(t,e)},n}function Ev(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qc(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ey;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=py.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var ty=Ri.ReactCurrentOwner,tn=!1;function $t(t,e,n,i){e.child=t===null?Zg(e,null,n,i):ws(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=zf(t,e,n,i,s,r),n=Hf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ft&&n&&Rf(e),e.flags|=1,$t(t,e,i,r),e.child)}function vp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mv(t,e,s,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Mv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(To(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Jc(t,e,n,i,r)}function wv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ds,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(ds,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(ds,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(ds,hn),hn|=i;return $t(t,e,r,n),e.child}function Tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jc(t,e,n,i,r){var s=sn(n)?br:Wt.current;return s=Es(e,s),vs(e,r),n=zf(t,e,n,i,s,r),i=Hf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(ft&&i&&Rf(e),e.flags|=1,$t(t,e,n,r),e.child)}function _p(t,e,n,i,r){if(sn(n)){var s=!0;Ml(e)}else s=!1;if(vs(e,r),e.stateNode===null)nl(t,e),yv(e,n,i),Zc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=sn(n)?br:Wt.current,u=Es(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&fp(e,o,i,u),Oi=!1;var h=e.memoizedState;o.state=h,Rl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||rn.current||Oi?(typeof d=="function"&&(Kc(e,n,d,i),l=e.memoizedState),(a=Oi||dp(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=sn(n)?br:Wt.current,l=Es(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&fp(e,o,i,l),Oi=!1,h=e.memoizedState,o.state=h,Rl(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||rn.current||Oi?(typeof p=="function"&&(Kc(e,n,p,i),v=e.memoizedState),(u=Oi||dp(e,n,u,i,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ed(t,e,n,i,s,r)}function ed(t,e,n,i,r,s){Tv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ip(e,n,!1),Mi(t,e,s);i=e.stateNode,ty.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function Av(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Ff(t,e.containerInfo)}function xp(t,e,n,i,r){return Ms(),Pf(r),e.flags|=256,$t(t,e,n,i),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cv(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return Yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tu(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):Wf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ny(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zi(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=td,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wf(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,i){return i!==null&&Pf(i),ws(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ny(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Fu(Error(ne(422))),_a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tu({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,s);if(!(e.mode&1))return _a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Fu(s,i,void 0),_a(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Gn(i,t,r,-1))}return Kf(),i=Fu(Error(ne(421))),_a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=my.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=$i(r.nextSibling),mn=e,ft=!0,On=null,t!==null&&(wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Pr,pi=t.id,mi=t.overflow,Pr=e),e=Wf(e,i.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qc(t.return,e,n)}function ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Rv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ku(e,!0,n,null,s);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iy(t,e,n){switch(e.tag){case 3:Av(e),Ms();break;case 5:ev(e);break;case 1:sn(e.type)&&Ml(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Cv(t,e,n):(at(mt,mt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Rv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,wv(t,e,n)}return Mi(t,e,n)}var bv,id,Pv,Lv;bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};Pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ti.current);var s=null;switch(n){case"input":r=Tc(t,r),i=Tc(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Rc(t,r),i=Rc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Pc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_o.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Lv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ry(t,e,n){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&El(),zt(e),null;case 3:return i=e.stateNode,Ts(),ct(rn),ct(Wt),Of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(dd(On),On=null))),id(t,e),zt(e),null;case 5:kf(e);var r=wr(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=wr(ti.current),ga(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)ut(oo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":bh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Lh(i,s),ut("invalid",i)}Pc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ma(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ma(i.textContent,a,t),r=["children",""+a]):_o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":aa(i),Ph(i,s,!0);break;case"textarea":aa(i),Dh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Ro]=i,bv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lc(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)ut(oo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":bh(t,i),r=Tc(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Lh(t,i),r=Rc(t,i),ut("invalid",t);break;default:r=i}Pc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?lg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&og(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&pf(t,s,l,o))}switch(n){case"input":aa(t),Ph(t,i,!1);break;case"textarea":aa(t),Dh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Lv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=wr(Po.current),wr(ti.current),ga(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:ma(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return zt(e),null;case 13:if(ct(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&pn!==null&&e.mode&1&&!(e.flags&128))qg(),Ms(),e.flags|=98560,s=!1;else if(s=ga(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Zn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else On!==null&&(dd(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Kf())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ts(),id(t,e),t===null&&Ao(e.stateNode.containerInfo),zt(e),null;case 10:return Nf(e.type._context),zt(e),null;case 17:return sn(e.type)&&El(),zt(e),null;case 19:if(ct(mt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ys(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,Ys(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Cs&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=bl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return zt(e),null}else 2*Mt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return qf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function sy(t,e){switch(bf(e),e.tag){case 1:return sn(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),ct(rn),ct(Wt),Of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(ct(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(mt),null;case 4:return Ts(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var xa=!1,Gt=!1,oy=typeof WeakSet=="function"?WeakSet:Set,ge=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function rd(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Sp=!1;function ay(t,e){if(Hc=_l,t=Fg(),Cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},_l=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,g=v.memoizedState,c=e.stateNode,x=c.getSnapshotBeforeUpdate(e.elementType===e.type?_:Fn(e.type,_),g);c.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=Sp,Sp=!1,v}function mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rd(e,n,s)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dv(t){var e=t.alternate;e!==null&&(t.alternate=null,Dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Ro],delete e[jc],delete e[Gx],delete e[Wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function Ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Ft=null,kn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)Iv(t,e,n),n=n.sibling}function Iv(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Gt||cs(n,e);case 6:var i=Ft,r=kn;Ft=null,Pi(t,e,n),Ft=i,kn=r,Ft!==null&&(kn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(kn?(t=Ft,n=n.stateNode,t.nodeType===8?Pu(t.parentNode,n):t.nodeType===1&&Pu(t,n),Mo(t)):Pu(Ft,n.stateNode));break;case 4:i=Ft,r=kn,Ft=n.stateNode.containerInfo,kn=!0,Pi(t,e,n),Ft=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Gt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Pi(t,e,n),Gt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oy),e.forEach(function(i){var r=gy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,kn=!1;break e;case 3:Ft=a.stateNode.containerInfo,kn=!0;break e;case 4:Ft=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(Ft===null)throw Error(ne(160));Iv(s,o,r),Ft=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uv(e,t),e=e.sibling}function Uv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Yn(t),i&4){try{mo(3,t,t.return),Jl(3,t)}catch(_){yt(t,t.return,_)}try{mo(5,t,t.return)}catch(_){yt(t,t.return,_)}}break;case 1:Dn(e,t),Yn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Dn(e,t),Yn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(_){yt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ig(r,s),Lc(a,o);var u=Lc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?lg(r,f):d==="dangerouslySetInnerHTML"?og(r,f):d==="children"?xo(r,f):pf(r,d,f,u)}switch(a){case"input":Ac(r,s);break;case"textarea":rg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(_){yt(t,t.return,_)}}break;case 6:if(Dn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){yt(t,t.return,_)}}break;case 3:if(Dn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(_){yt(t,t.return,_)}break;case 4:Dn(e,t),Yn(t);break;case 13:Dn(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($f=Mt())),i&4&&Mp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||d,Dn(e,t),Gt=u):Dn(e,t),Yn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(f=ge=d;ge!==null;){switch(h=ge,p=h.child,h.tag){case 0:case 11:case 14:case 15:mo(4,h,h.return);break;case 1:cs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){yt(i,n,_)}}break;case 5:cs(h,h.return);break;case 22:if(h.memoizedState!==null){Tp(f);continue}}p!==null?(p.return=h,ge=p):Tp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ag("display",o))}catch(_){yt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){yt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Yn(t),i&4&&Mp(t);break;case 21:break;default:Dn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=Ep(t);ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ep(t);od(t,a,o);break;default:throw Error(ne(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ly(t,e,n){ge=t,Fv(t)}function Fv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||xa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=xa;var u=Gt;if(xa=o,(Gt=l)&&!u)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Ap(r):l!==null?(l.return=o,ge=l):Ap(r);for(;s!==null;)ge=s,Fv(s),s=s.sibling;ge=r,xa=a,Gt=u}wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):wp(t)}}function wp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Gt||e.flags&512&&sd(e)}catch(h){yt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Tp(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Ap(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{sd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{sd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var uy=Math.ceil,Dl=Ri.ReactCurrentDispatcher,jf=Ri.ReactCurrentOwner,bn=Ri.ReactCurrentBatchConfig,qe=0,Ut=null,Tt=null,kt=0,hn=0,ds=sr(0),Rt=0,Io=null,Dr=0,eu=0,Xf=0,go=null,en=null,$f=0,Cs=1/0,di=null,Nl=!1,ld=null,qi=null,ya=!1,Gi=null,Il=0,vo=0,ud=null,il=-1,rl=0;function Yt(){return qe&6?Mt():il!==-1?il:il=Mt()}function Ki(t){return t.mode&1?qe&2&&kt!==0?kt&-kt:Xx.transition!==null?(rl===0&&(rl=yg()),rl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Cg(t.type)),t):1}function Gn(t,e,n,i){if(50<vo)throw vo=0,ud=null,Error(ne(185));jo(t,n,i),(!(qe&2)||t!==Ut)&&(t===Ut&&(!(qe&2)&&(eu|=n),Rt===4&&zi(t,kt)),on(t,i),n===1&&qe===0&&!(e.mode&1)&&(Cs=Mt()+500,Kl&&or()))}function on(t,e){var n=t.callbackNode;X_(t,e);var i=vl(t,t===Ut?kt:0);if(i===0)n!==null&&Uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uh(n),e===1)t.tag===0?jx(Cp.bind(null,t)):Xg(Cp.bind(null,t)),Hx(function(){!(qe&6)&&or()}),n=null;else{switch(Sg(i)){case 1:n=xf;break;case 4:n=_g;break;case 16:n=gl;break;case 536870912:n=xg;break;default:n=gl}n=Wv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(il=-1,rl=0,qe&6)throw Error(ne(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var i=vl(t,t===Ut?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=qe;qe|=2;var s=Bv();(Ut!==t||kt!==e)&&(di=null,Cs=Mt()+500,Ar(t,e));do try{fy();break}catch(a){Ov(t,a)}while(!0);Df(),Dl.current=s,qe=r,Tt!==null?e=0:(Ut=null,kt=0,e=Rt)}if(e!==0){if(e===2&&(r=Fc(t),r!==0&&(i=r,e=cd(t,r))),e===1)throw n=Io,Ar(t,0),zi(t,i),on(t,Mt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!cy(r)&&(e=Ul(t,i),e===2&&(s=Fc(t),s!==0&&(i=s,e=cd(t,s))),e===1))throw n=Io,Ar(t,0),zi(t,i),on(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:vr(t,en,di);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=$f+500-Mt(),10<e)){if(vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Wc(vr.bind(null,t,en,di),e);break}vr(t,en,di);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uy(i/1960))-i,10<i){t.timeoutHandle=Wc(vr.bind(null,t,en,di),i);break}vr(t,en,di);break;case 5:vr(t,en,di);break;default:throw Error(ne(329))}}}return on(t,Mt()),t.callbackNode===n?kv.bind(null,t):null}function cd(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=en,en=n,e!==null&&dd(e)),t}function dd(t){en===null?en=t:en.push.apply(en,t)}function cy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~Xf,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function Cp(t){if(qe&6)throw Error(ne(327));_s();var e=vl(t,0);if(!(e&1))return on(t,Mt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Fc(t);i!==0&&(e=i,n=cd(t,i))}if(n===1)throw n=Io,Ar(t,0),zi(t,e),on(t,Mt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,en,di),on(t,Mt()),null}function Yf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Cs=Mt()+500,Kl&&or())}}function Nr(t){Gi!==null&&Gi.tag===0&&!(qe&6)&&_s();var e=qe;qe|=1;var n=bn.transition,i=tt;try{if(bn.transition=null,tt=1,t)return t()}finally{tt=i,bn.transition=n,qe=e,!(qe&6)&&or()}}function qf(){hn=ds.current,ct(ds)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:Ts(),ct(rn),ct(Wt),Of();break;case 5:kf(i);break;case 4:Ts();break;case 13:ct(mt);break;case 19:ct(mt);break;case 10:Nf(i.type._context);break;case 22:case 23:qf()}n=n.return}if(Ut=t,Tt=t=Zi(t.current,null),kt=hn=e,Rt=0,Io=null,Xf=eu=Dr=0,en=go=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function Ov(t,e){do{var n=Tt;try{if(Df(),el.current=Ll,Pl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Lr=0,It=Ct=gt=null,po=!1,Lo=0,jf.current=null,n===null||n.return===null){Rt=1,Io=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=pp(o);if(p!==null){p.flags&=-257,mp(p,o,a,s,e),p.mode&1&&hp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){hp(s,u,e),Kf();break e}l=Error(ne(426))}}else if(ft&&a.mode&1){var g=pp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),mp(g,o,a,s,e),Pf(As(l,a));break e}}s=l=As(l,a),Rt!==4&&(Rt=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Sv(s,l,e);ap(s,c);break e;case 1:a=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(qi===null||!qi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ev(s,a,e);ap(s,S);break e}}s=s.return}while(s!==null)}Hv(n)}catch(A){e=A,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Bv(){var t=Dl.current;return Dl.current=Ll,t===null?Ll:t}function Kf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ut===null||!(Dr&268435455)&&!(eu&268435455)||zi(Ut,kt)}function Ul(t,e){var n=qe;qe|=2;var i=Bv();(Ut!==t||kt!==e)&&(di=null,Ar(t,e));do try{dy();break}catch(r){Ov(t,r)}while(!0);if(Df(),qe=n,Dl.current=i,Tt!==null)throw Error(ne(261));return Ut=null,kt=0,Rt}function dy(){for(;Tt!==null;)zv(Tt)}function fy(){for(;Tt!==null&&!k_();)zv(Tt)}function zv(t){var e=Gv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Hv(t):Tt=e,jf.current=null}function Hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=ry(n,e,hn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function vr(t,e,n){var i=tt,r=bn.transition;try{bn.transition=null,tt=1,hy(t,e,n,i)}finally{bn.transition=r,tt=i}return null}function hy(t,e,n,i){do _s();while(Gi!==null);if(qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($_(t,s),t===Ut&&(Tt=Ut=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ya||(ya=!0,Wv(gl,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=tt;tt=1;var a=qe;qe|=4,jf.current=null,ay(t,n),Uv(n,t),Nx(Vc),_l=!!Hc,Vc=Hc=null,t.current=n,ly(n),O_(),qe=a,tt=o,bn.transition=s}else t.current=n;if(ya&&(ya=!1,Gi=t,Il=r),s=t.pendingLanes,s===0&&(qi=null),H_(n.stateNode),on(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=ld,ld=null,t;return Il&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===ud?vo++:(vo=0,ud=t):vo=0,or(),null}function _s(){if(Gi!==null){var t=Sg(Il),e=bn.transition,n=tt;try{if(bn.transition=null,tt=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,Il=0,qe&6)throw Error(ne(331));var r=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:mo(8,d,s)}var f=d.child;if(f!==null)f.return=d,ge=f;else for(;ge!==null;){d=ge;var h=d.sibling,p=d.return;if(Dv(d),d===u){ge=null;break}if(h!==null){h.return=p,ge=h;break}ge=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ge=c;break e}ge=s.return}}var x=t.current;for(ge=x;ge!==null;){o=ge;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,ge=y;else e:for(o=x;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jl(9,a)}}catch(A){yt(a,a.return,A)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if(qe=r,or(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{tt=n,bn.transition=e}}return!1}function Rp(t,e,n){e=As(n,e),e=Sv(t,e,1),t=Yi(t,e,1),e=Yt(),t!==null&&(jo(t,1,e),on(t,e))}function yt(t,e,n){if(t.tag===3)Rp(t,t,n);else for(;e!==null;){if(e.tag===3){Rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=As(n,t),t=Ev(e,t,1),e=Yi(e,t,1),t=Yt(),e!==null&&(jo(e,1,t),on(e,t));break}}e=e.return}}function py(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(kt&n)===n&&(Rt===4||Rt===3&&(kt&130023424)===kt&&500>Mt()-$f?Ar(t,0):Xf|=n),on(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=Yt();t=Ei(t,e),t!==null&&(jo(t,e,n),on(t,n))}function my(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function gy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Vv(t,n)}var Gv;Gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,iy(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ft&&e.flags&1048576&&$g(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Es(e,Wt.current);vs(e,n),r=zf(null,e,i,t,r,n);var s=Hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,Zc(e,i,t,n),e=ed(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Rf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_y(i),t=Fn(i,t),r){case 0:e=Jc(null,e,i,t,n);break e;case 1:e=_p(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=vp(null,e,i,Fn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Jc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),_p(t,e,i,r,n);case 3:e:{if(Av(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jg(t,e),Rl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ne(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ne(424)),e),e=xp(t,e,i,n,r);break e}else for(pn=$i(e.stateNode.containerInfo.firstChild),mn=e,ft=!0,On=null,n=Zg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=Mi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return ev(e),t===null&&Yc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Gc(i,r)?o=null:s!==null&&Gc(i,s)&&(e.flags|=32),Tv(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Yc(e),null;case 13:return Cv(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),gp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(Al,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!rn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=Pn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),vp(t,e,i,r,n);case 15:return Mv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),nl(t,e),e.tag=1,sn(i)?(t=!0,Ml(e)):t=!1,vs(e,n),yv(e,i,r),Zc(e,i,r,n),ed(null,e,i,!0,t,n);case 19:return Rv(t,e,n);case 22:return wv(t,e,n)}throw Error(ne(156,e.tag))};function Wv(t,e){return vg(t,e)}function vy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new vy(t,e,n,i)}function Zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _y(t){if(typeof t=="function")return Zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gf)return 11;if(t===vf)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Cr(n.children,r,s,e);case mf:o=8,r|=8;break;case Sc:return t=An(12,n,e,r|2),t.elementType=Sc,t.lanes=s,t;case Ec:return t=An(13,n,e,r),t.elementType=Ec,t.lanes=s,t;case Mc:return t=An(19,n,e,r),t.elementType=Mc,t.lanes=s,t;case eg:return tu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qm:o=10;break e;case Jm:o=9;break e;case gf:o=11;break e;case vf:o=14;break e;case ki:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function tu(t,e,n,i){return t=An(22,t,i,e),t.elementType=eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ou(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qf(t,e,n,i,r,s,o,a,l){return t=new xy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),t}function yy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jv(t){if(!t)return tr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(sn(n))return jg(t,n,e)}return e}function Xv(t,e,n,i,r,s,o,a,l){return t=Qf(n,i,!0,t,r,s,o,a,l),t.context=jv(null),n=t.current,i=Yt(),r=Ki(n),s=gi(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,jo(t,r,i),on(t,i),t}function nu(t,e,n,i){var r=e.current,s=Yt(),o=Ki(r);return n=jv(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(Gn(t,r,o,s),Ja(t,r,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jf(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function Sy(){return null}var $v=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}iu.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));nu(t,e,null,null)};iu.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){nu(null,t,null,null)}),e[Si]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&Ag(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Ey(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Fl(o);s.call(u)}}var o=Xv(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=o,t[Si]=o.current,Ao(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Fl(l);a.call(u)}}var l=Qf(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Si]=l.current,Ao(t.nodeType===8?t.parentNode:t),Nr(function(){nu(e,l,n,i)}),l}function su(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fl(o);a.call(l)}}nu(e,o,t,r)}else o=Ey(n,e,t,r,i);return Fl(o)}Eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(yf(e,n|1),on(e,Mt()),!(qe&6)&&(Cs=Mt()+500,or()))}break;case 13:Nr(function(){var i=Ei(t,1);if(i!==null){var r=Yt();Gn(i,t,1,r)}}),Jf(t,1)}};Sf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Yt();Gn(e,t,134217728,n)}Jf(t,134217728)}};Mg=function(t){if(t.tag===13){var e=Ki(t),n=Ei(t,e);if(n!==null){var i=Yt();Gn(n,t,e,i)}Jf(t,e)}};wg=function(){return tt};Tg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Nc=function(t,e,n){switch(e){case"input":if(Ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(ne(90));ng(i),Ac(i,r)}}}break;case"textarea":rg(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};dg=Yf;fg=Nr;var My={usingClientEntryPoint:!1,Events:[$o,ss,ql,ug,cg,Yf]},qs={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mg(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Sy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{jl=Sa.inject(wy),ei=Sa}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(ne(200));return yy(t,e,null,n)};_n.createRoot=function(t,e){if(!th(t))throw Error(ne(299));var n=!1,i="",r=$v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qf(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Ao(t.nodeType===8?t.parentNode:t),new eh(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=mg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Nr(t)};_n.hydrate=function(t,e,n){if(!ru(e))throw Error(ne(200));return su(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!th(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$v;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xv(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,Ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new iu(e)};_n.render=function(t,e,n){if(!ru(e))throw Error(ne(200));return su(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!ru(t))throw Error(ne(40));return t._reactRootContainer?(Nr(function(){su(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};_n.unstable_batchedUpdates=Yf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ru(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return su(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function Yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)}catch(t){console.error(t)}}Yv(),Ym.exports=_n;var Ty=Ym.exports,qv,Lp=Ty;qv=Lp.createRoot,Lp.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dp="popstate";function Ay(t={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return fd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Uo(r)}return Ry(e,n,null,t)}function vt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Cy(){return Math.random().toString(36).substring(2,10)}function Np(t,e){return{usr:t.state,key:t.key,idx:e}}function fd(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Fs(e):e,state:n,key:e&&e.key||i||Cy()}}function Uo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function Ry(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",l=null,u=d();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function d(){return(o.state||{idx:null}).idx}function f(){a="POP";let g=d(),c=g==null?null:g-u;u=g,l&&l({action:a,location:_.location,delta:c})}function h(g,c){a="PUSH";let x=fd(_.location,g,c);u=d()+1;let y=Np(x,u),S=_.createHref(x);try{o.pushState(y,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(S)}s&&l&&l({action:a,location:_.location,delta:1})}function p(g,c){a="REPLACE";let x=fd(_.location,g,c);u=d();let y=Np(x,u),S=_.createHref(x);o.replaceState(y,"",S),s&&l&&l({action:a,location:_.location,delta:0})}function v(g){return by(g)}let _={get action(){return a},get location(){return t(r,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Dp,f),l=g,()=>{r.removeEventListener(Dp,f),l=null}},createHref(g){return e(r,g)},createURL:v,encodeLocation(g){let c=v(g);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:p,go(g){return o.go(g)}};return _}function by(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),vt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Uo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function Kv(t,e,n="/"){return Py(t,e,n,!1)}function Py(t,e,n,i){let r=typeof e=="string"?Fs(e):e,s=wi(r.pathname||"/",n);if(s==null)return null;let o=Zv(t);Ly(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Vy(s);a=zy(o[l],u,i)}return a}function Zv(t,e=[],n=[],i="",r=!1){let s=(o,a,l=r,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(i)&&l)return;vt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length)}let f=vi([i,d.relativePath]),h=n.concat(d);o.children&&o.children.length>0&&(vt(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Zv(o.children,e,h,f,l)),!(o.path==null&&!o.index)&&e.push({path:f,score:Oy(f,o.index),routesMeta:h})};return t.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let u of Qv(o.path))s(o,a,!0,u)}),e}function Qv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Qv(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Ly(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:By(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var Dy=/^:[\w-]+$/,Ny=3,Iy=2,Uy=1,Fy=10,ky=-2,Ip=t=>t==="*";function Oy(t,e){let n=t.split("/"),i=n.length;return n.some(Ip)&&(i+=ky),e&&(i+=Iy),n.filter(r=>!Ip(r)).reduce((r,s)=>r+(Dy.test(s)?Ny:s===""?Uy:Fy),i)}function By(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function zy(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=kl({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=kl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:vi([s,f.pathname]),pathnameBase:Xy(vi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=vi([s,f.pathnameBase]))}return o}function kl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Hy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,{paramName:d,isOptional:f},h)=>{if(d==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const p=a[h];return f&&!p?u[d]=void 0:u[d]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Hy(t,e=!1,n=!0){Xn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Vy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function wi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Gy(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Fs(t):t;return{pathname:n?n.startsWith("/")?n:Wy(n,e):e,search:$y(i),hash:Yy(r)}}function Wy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function zu(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jv(t){let e=jy(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function e0(t,e,n,i=!1){let r;typeof t=="string"?r=Fs(t):(r={...t},vt(!r.pathname||!r.pathname.includes("?"),zu("?","pathname","search",r)),vt(!r.pathname||!r.pathname.includes("#"),zu("#","pathname","hash",r)),vt(!r.search||!r.search.includes("#"),zu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=Gy(r,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var vi=t=>t.join("/").replace(/\/\/+/g,"/"),Xy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$y=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Yy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var t0=["POST","PUT","PATCH","DELETE"];new Set(t0);var Ky=["GET",...t0];new Set(Ky);var ks=O.createContext(null);ks.displayName="DataRouter";var ou=O.createContext(null);ou.displayName="DataRouterState";O.createContext(!1);var n0=O.createContext({isTransitioning:!1});n0.displayName="ViewTransition";var Zy=O.createContext(new Map);Zy.displayName="Fetchers";var Qy=O.createContext(null);Qy.displayName="Await";var ni=O.createContext(null);ni.displayName="Navigation";var qo=O.createContext(null);qo.displayName="Location";var ii=O.createContext({outlet:null,matches:[],isDataRoute:!1});ii.displayName="Route";var nh=O.createContext(null);nh.displayName="RouteError";function Jy(t,{relative:e}={}){vt(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=O.useContext(ni),{hash:r,pathname:s,search:o}=Zo(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:vi([n,s])),i.createHref({pathname:a,search:o,hash:r})}function Ko(){return O.useContext(qo)!=null}function ar(){return vt(Ko(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(qo).location}var i0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function r0(t){O.useContext(ni).static||O.useLayoutEffect(t)}function kr(){let{isDataRoute:t}=O.useContext(ii);return t?hS():eS()}function eS(){vt(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(ks),{basename:e,navigator:n}=O.useContext(ni),{matches:i}=O.useContext(ii),{pathname:r}=ar(),s=JSON.stringify(Jv(i)),o=O.useRef(!1);return r0(()=>{o.current=!0}),O.useCallback((l,u={})=>{if(Xn(o.current,i0),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=e0(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vi([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,r,t])}O.createContext(null);function tS(){let{matches:t}=O.useContext(ii),e=t[t.length-1];return e?e.params:{}}function Zo(t,{relative:e}={}){let{matches:n}=O.useContext(ii),{pathname:i}=ar(),r=JSON.stringify(Jv(n));return O.useMemo(()=>e0(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function nS(t,e){return s0(t,e)}function s0(t,e,n,i,r){var x;vt(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=O.useContext(ni),{matches:o}=O.useContext(ii),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",d=a?a.pathnameBase:"/",f=a&&a.route;{let y=f&&f.path||"";o0(u,!f||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let h=ar(),p;if(e){let y=typeof e=="string"?Fs(e):e;vt(d==="/"||((x=y.pathname)==null?void 0:x.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),p=y}else p=h;let v=p.pathname||"/",_=v;if(d!=="/"){let y=d.replace(/^\//,"").split("/");_="/"+v.replace(/^\//,"").split("/").slice(y.length).join("/")}let g=Kv(t,{pathname:_});Xn(f||g!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Xn(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let c=aS(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:vi([d,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:vi([d,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,i,r);return e&&c?O.createElement(qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},c):c}function iS(){let t=fS(),e=qy(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"ErrorBoundary")," or"," ",O.createElement("code",{style:s},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:r},n):null,o)}var rS=O.createElement(iS,null),sS=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?O.createElement(ii.Provider,{value:this.props.routeContext},O.createElement(nh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oS({routeContext:t,match:e,children:n}){let i=O.useContext(ks);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(ii.Provider,{value:t},n)}function aS(t,e=[],n=null,i=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let u=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);vt(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,u+1))}let a=!1,l=-1;if(n)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=u),d.route.id){let{loaderData:f,errors:h}=n,p=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!h||h[d.route.id]===void 0);if(d.route.lazy||p){a=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}return s.reduceRight((u,d,f)=>{let h,p=!1,v=null,_=null;n&&(h=o&&d.route.id?o[d.route.id]:void 0,v=d.route.errorElement||rS,a&&(l<0&&f===0?(o0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,_=null):l===f&&(p=!0,_=d.route.hydrateFallbackElement||null)));let g=e.concat(s.slice(0,f+1)),c=()=>{let x;return h?x=v:p?x=_:d.route.Component?x=O.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=u,O.createElement(oS,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?O.createElement(sS,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:c(),routeContext:{outlet:null,matches:g,isDataRoute:!0},unstable_onError:i}):c()},null)}function ih(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lS(t){let e=O.useContext(ks);return vt(e,ih(t)),e}function uS(t){let e=O.useContext(ou);return vt(e,ih(t)),e}function cS(t){let e=O.useContext(ii);return vt(e,ih(t)),e}function rh(t){let e=cS(t),n=e.matches[e.matches.length-1];return vt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function dS(){return rh("useRouteId")}function fS(){var i;let t=O.useContext(nh),e=uS("useRouteError"),n=rh("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function hS(){let{router:t}=lS("useNavigate"),e=rh("useNavigate"),n=O.useRef(!1);return r0(()=>{n.current=!0}),O.useCallback(async(r,s={})=>{Xn(n.current,i0),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Up={};function o0(t,e,n){!e&&!Up[t]&&(Up[t]=!0,Xn(!1,n))}O.memo(pS);function pS({routes:t,future:e,state:n,unstable_onError:i}){return s0(t,void 0,n,i,e)}function hd(t){vt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mS({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){vt(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof n=="string"&&(n=Fs(n));let{pathname:l="/",search:u="",hash:d="",state:f=null,key:h="default"}=n,p=O.useMemo(()=>{let v=wi(l,o);return v==null?null:{location:{pathname:v,search:u,hash:d,state:f,key:h},navigationType:i}},[o,l,u,d,f,h,i]);return Xn(p!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:O.createElement(ni.Provider,{value:a},O.createElement(qo.Provider,{children:e,value:p}))}function gS({children:t,location:e}){return nS(pd(t),e)}function pd(t,e=[]){let n=[];return O.Children.forEach(t,(i,r)=>{if(!O.isValidElement(i))return;let s=[...e,r];if(i.type===O.Fragment){n.push.apply(n,pd(i.props.children,s));return}vt(i.type===hd,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),vt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=pd(i.props.children,s)),n.push(o)}),n}var ol="get",al="application/x-www-form-urlencoded";function au(t){return t!=null&&typeof t.tagName=="string"}function vS(t){return au(t)&&t.tagName.toLowerCase()==="button"}function _S(t){return au(t)&&t.tagName.toLowerCase()==="form"}function xS(t){return au(t)&&t.tagName.toLowerCase()==="input"}function yS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function SS(t,e){return t.button===0&&(!e||e==="_self")&&!yS(t)}function md(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function ES(t,e){let n=md(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}var Ea=null;function MS(){if(Ea===null)try{new FormData(document.createElement("form"),0),Ea=!1}catch{Ea=!0}return Ea}var wS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hu(t){return t!=null&&!wS.has(t)?(Xn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${al}"`),null):t}function TS(t,e){let n,i,r,s,o;if(_S(t)){let a=t.getAttribute("action");i=a?wi(a,e):null,n=t.getAttribute("method")||ol,r=Hu(t.getAttribute("enctype"))||al,s=new FormData(t)}else if(vS(t)||xS(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(i=l?wi(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||ol,r=Hu(t.getAttribute("formenctype"))||Hu(a.getAttribute("enctype"))||al,s=new FormData(a,t),!MS()){let{name:u,type:d,value:f}=t;if(d==="image"){let h=u?`${u}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else u&&s.append(u,f)}}else{if(au(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ol,i=null,r=al,o=t}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function sh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function AS(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&wi(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function CS(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RS(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function bS(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await CS(s,n);return o.links?o.links():[]}return[]}));return NS(i.flat(1).filter(RS).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Fp(t,e,n,i,r,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var f;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function PS(t,e,{includeHydrateFallback:n}={}){return LS(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function LS(t){return[...new Set(t)]}function DS(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function NS(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(DS(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function a0(){let t=O.useContext(ks);return sh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function IS(){let t=O.useContext(ou);return sh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var oh=O.createContext(void 0);oh.displayName="FrameworkContext";function l0(){let t=O.useContext(oh);return sh(t,"You must render this element inside a <HydratedRouter> element"),t}function US(t,e){let n=O.useContext(oh),[i,r]=O.useState(!1),[s,o]=O.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=e,h=O.useRef(null);O.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let _=c=>{c.forEach(x=>{o(x.isIntersecting)})},g=new IntersectionObserver(_,{threshold:.5});return h.current&&g.observe(h.current),()=>{g.disconnect()}}},[t]),O.useEffect(()=>{if(i){let _=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(_)}}},[i]);let p=()=>{r(!0)},v=()=>{r(!1),o(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:Ks(a,p),onBlur:Ks(l,v),onMouseEnter:Ks(u,p),onMouseLeave:Ks(d,v),onTouchStart:Ks(f,p)}]:[!1,h,{}]}function Ks(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function FS({page:t,...e}){let{router:n}=a0(),i=O.useMemo(()=>Kv(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?O.createElement(OS,{page:t,matches:i,...e}):null}function kS(t){let{manifest:e,routeModules:n}=l0(),[i,r]=O.useState([]);return O.useEffect(()=>{let s=!1;return bS(t,e,n).then(o=>{s||r(o)}),()=>{s=!0}},[t,e,n]),i}function OS({page:t,matches:e,...n}){let i=ar(),{manifest:r,routeModules:s}=l0(),{basename:o}=a0(),{loaderData:a,matches:l}=IS(),u=O.useMemo(()=>Fp(t,e,l,r,i,"data"),[t,e,l,r,i]),d=O.useMemo(()=>Fp(t,e,l,r,i,"assets"),[t,e,l,r,i]),f=O.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let v=new Set,_=!1;if(e.forEach(c=>{var y;let x=r.routes[c.route.id];!x||!x.hasLoader||(!u.some(S=>S.route.id===c.route.id)&&c.route.id in a&&((y=s[c.route.id])!=null&&y.shouldRevalidate)||x.hasClientLoader?_=!0:v.add(c.route.id))}),v.size===0)return[];let g=AS(t,o,"data");return _&&v.size>0&&g.searchParams.set("_routes",e.filter(c=>v.has(c.route.id)).map(c=>c.route.id).join(",")),[g.pathname+g.search]},[o,a,i,r,u,e,t,s]),h=O.useMemo(()=>PS(d,r),[d,r]),p=kS(d);return O.createElement(O.Fragment,null,f.map(v=>O.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),h.map(v=>O.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),p.map(({key:v,link:_})=>O.createElement("link",{key:v,nonce:n.nonce,..._})))}function BS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var u0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{u0&&(window.__reactRouterVersion="7.8.2")}catch{}function zS({basename:t,children:e,window:n}){let i=O.useRef();i.current==null&&(i.current=Ay({window:n,v5Compat:!0}));let r=i.current,[s,o]=O.useState({action:r.action,location:r.location}),a=O.useCallback(l=>{O.startTransition(()=>o(l))},[o]);return O.useLayoutEffect(()=>r.listen(a),[r,a]),O.createElement(mS,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var c0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fo=O.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f,...h},p){let{basename:v}=O.useContext(ni),_=typeof u=="string"&&c0.test(u),g,c=!1;if(typeof u=="string"&&_&&(g=u,u0))try{let w=new URL(window.location.href),E=u.startsWith("//")?new URL(w.protocol+u):new URL(u),N=wi(E.pathname,v);E.origin===w.origin&&N!=null?u=N+E.search+E.hash:c=!0}catch{Xn(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=Jy(u,{relative:r}),[y,S,A]=US(i,h),R=WS(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:f});function C(w){e&&e(w),w.defaultPrevented||R(w)}let L=O.createElement("a",{...h,...A,href:g||x,onClick:c||s?e:C,ref:BS(p,S),target:l,"data-discover":!_&&n==="render"?"true":void 0});return y&&!_?O.createElement(O.Fragment,null,L,O.createElement(FS,{page:x})):L});Fo.displayName="Link";var HS=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:l,...u},d){let f=Zo(o,{relative:u.relative}),h=ar(),p=O.useContext(ou),{navigator:v,basename:_}=O.useContext(ni),g=p!=null&&qS(f)&&a===!0,c=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,x=h.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(x=x.toLowerCase(),y=y?y.toLowerCase():null,c=c.toLowerCase()),y&&_&&(y=wi(y,_)||y);const S=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let A=x===c||!r&&x.startsWith(c)&&x.charAt(S)==="/",R=y!=null&&(y===c||!r&&y.startsWith(c)&&y.charAt(c.length)==="/"),C={isActive:A,isPending:R,isTransitioning:g},L=A?e:void 0,w;typeof i=="function"?w=i(C):w=[i,A?"active":null,R?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(C):s;return O.createElement(Fo,{...u,"aria-current":L,className:w,ref:d,style:E,to:o,viewTransition:a},typeof l=="function"?l(C):l)});HS.displayName="NavLink";var VS=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:o=ol,action:a,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,...h},p)=>{let v=$S(),_=YS(a,{relative:u}),g=o.toLowerCase()==="get"?"get":"post",c=typeof a=="string"&&c0.test(a),x=y=>{if(l&&l(y),y.defaultPrevented)return;y.preventDefault();let S=y.nativeEvent.submitter,A=(S==null?void 0:S.getAttribute("formmethod"))||o;v(S||y.currentTarget,{fetcherKey:e,method:A,navigate:n,replace:r,state:s,relative:u,preventScrollReset:d,viewTransition:f})};return O.createElement("form",{ref:p,method:g,action:_,onSubmit:i?l:x,...h,"data-discover":!c&&t==="render"?"true":void 0})});VS.displayName="Form";function GS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d0(t){let e=O.useContext(ks);return vt(e,GS(t)),e}function WS(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=kr(),l=ar(),u=Zo(t,{relative:s});return O.useCallback(d=>{if(SS(d,e)){d.preventDefault();let f=n!==void 0?n:Uo(l)===Uo(u);a(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[l,a,u,n,i,e,t,r,s,o])}function ah(t){Xn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=O.useRef(md(t)),n=O.useRef(!1),i=ar(),r=O.useMemo(()=>ES(i.search,n.current?null:e.current),[i.search]),s=kr(),o=O.useCallback((a,l)=>{const u=md(typeof a=="function"?a(new URLSearchParams(r)):a);n.current=!0,s("?"+u,l)},[s,r]);return[r,o]}var jS=0,XS=()=>`__${String(++jS)}__`;function $S(){let{router:t}=d0("useSubmit"),{basename:e}=O.useContext(ni),n=dS();return O.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=TS(i,e);if(r.navigate===!1){let d=r.fetcherKey||XS();await t.fetch(d,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function YS(t,{relative:e}={}){let{basename:n}=O.useContext(ni),i=O.useContext(ii);vt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Zo(t||".",{relative:e})},o=ar();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(d=>d==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let d=a.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:vi([n,s.pathname])),Uo(s)}function qS(t,{relative:e}={}){let n=O.useContext(n0);vt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=d0("useViewTransitionState"),r=Zo(t,{relative:e});if(!n.isTransitioning)return!1;let s=wi(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=wi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return kl(r.pathname,o)!=null||kl(r.pathname,s)!=null}const KS=()=>{const[t,e]=O.useState(()=>typeof window<"u"&&localStorage.getItem("framzy-theme")||"light");return O.useEffect(()=>{const i=window.document.documentElement;t==="dark"?i.classList.add("dark"):i.classList.remove("dark"),localStorage.setItem("framzy-theme",t)},[t]),{theme:t,toggleTheme:()=>{e(i=>i==="light"?"dark":"light")}}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Lt=(t,e)=>{const n=O.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},d)=>O.createElement("svg",{ref:d,...ZS,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${QS(t)}`,a].join(" "),...u},[...e.map(([f,h])=>O.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=Lt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=Lt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=Lt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=Lt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=Lt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=Lt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=Lt("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=Lt("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=Lt("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Lt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=Lt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=Lt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=Lt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=Lt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=Lt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=Lt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=Lt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=Lt("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=Lt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),hE=({theme:t,onToggle:e})=>b.jsx("button",{onClick:e,className:"relative p-2 rounded-lg bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 group","aria-label":"Toggle theme",children:b.jsxs("div",{className:"relative w-6 h-6",children:[b.jsx(dE,{className:`absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-300 ${t==="dark"?"rotate-90 scale-0 opacity-0":"rotate-0 scale-100 opacity-100"}`}),b.jsx(lE,{className:`absolute inset-0 h-6 w-6 text-blue-300 transition-all duration-300 ${t==="dark"?"rotate-0 scale-100 opacity-100":"-rotate-90 scale-0 opacity-0"}`})]})}),kp=({onSearch:t})=>{const[e]=ah(),n=kr(),[i,r]=O.useState("");O.useEffect(()=>{const o=e.get("search")||"";r(o)},[e]);const s=o=>{o.preventDefault(),i.trim()&&(n(`/?search=${encodeURIComponent(i)}`),t&&t(i))};return b.jsxs("form",{onSubmit:s,className:"relative",children:[b.jsx("input",{type:"text",value:i,onChange:o=>r(o.target.value),placeholder:"Search wallpapers...",className:"w-full px-4 py-2 pl-10 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"}),b.jsx(cE,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"})]})},p0="/api/v1",m0="https://sample.com/user",Oo=async(t={})=>{var e,n,i;console.log("Fetching wallpapers with filters:",t);try{const r=new URLSearchParams({categories:"110",purity:"100",sorting:t.sorting||"toplist",order:t.order||"desc",page:t.page||"1",...t});(e=t.filter)!=null&&e.resolution&&r.append("resolutions",t.filter.resolution),(n=t.filter)!=null&&n.orientation&&r.append("ratios",t.filter.orientation),(i=t.filter)!=null&&i.color&&r.append("colors",t.filter.color);const s=await fetch(`${p0}/search?${r}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(r){throw console.error("Error fetching wallpapers:",r),r}},pE=async t=>{try{const e=await fetch(`${p0}/w/${t}`);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return(await e.json()).data}catch(e){throw console.error("Error fetching wallpaper:",e),e}},mE=async(t,e=1)=>Oo({q:t,sorting:"relevance",page:e.toString()}),gE=async(t,e=1,n)=>(console.log("filters:",n),Oo({q:t,sorting:"relevance",page:e.toString(),filter:n})),vE=async t=>{try{const e=await fetch(`${m0}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return{success:e.status===200,status:e.status,data:e.status===200?await e.json():null}}catch(e){return console.error("Login error:",e),{success:!1,status:500,data:null}}},_E=async t=>{try{const e=await fetch(`${m0}/registration`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return{success:e.status===200,status:e.status,data:e.status===200?await e.json():null}}catch(e){return console.error("Registration error:",e),{success:!1,status:500,data:null}}},g0=()=>{const[t,e]=O.useState(null),[n,i]=O.useState(!1);return{user:t,isLoading:n,login:async a=>{i(!0);try{const l=await vE(a);return l.success?(e(l.data),{success:!0,message:`Login Successful
Welcome!`}):{success:!1,message:`Login Failed
Please try again later`}}catch{return{success:!1,message:`Login Failed
Please try again later`}}finally{i(!1)}},register:async a=>{i(!0);try{return(await _E(a)).success?{success:!0,message:`Registration Successful
Welcome to Framzy!`}:{success:!1,message:`Registration Failed
Please try again later`}}catch{return{success:!1,message:`Registration Failed
Please try again later`}}finally{i(!1)}},logout:()=>{e(null)}}},xE=({isOpen:t,onClose:e,onNotification:n})=>{const[i,r]=O.useState({email:"",password:""}),[s,o]=O.useState(!1),{login:a,isLoading:l}=g0(),u=f=>{r({...i,[f.target.name]:f.target.value})},d=async f=>{f.preventDefault();const h=await a(i);n(h.message,h.success?"success":"error"),h.success&&(e(),r({email:"",password:""}))};return t?b.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[b.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:e}),b.jsx("div",{className:"relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700",children:b.jsxs("div",{className:"p-6",children:[b.jsxs("div",{className:"flex justify-between items-center mb-6",children:[b.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Login"}),b.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:b.jsx(lu,{className:"h-5 w-5"})})]}),b.jsxs("form",{onSubmit:d,className:"space-y-4",children:[b.jsxs("div",{children:[b.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Email"}),b.jsx("input",{type:"email",name:"email",value:i.email,onChange:u,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your email"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Password"}),b.jsxs("div",{className:"relative",children:[b.jsx("input",{type:s?"text":"password",name:"password",value:i.password,onChange:u,required:!0,className:"w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your password"}),b.jsx("button",{type:"button",onClick:()=>o(!s),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",children:s?b.jsx(gd,{className:"h-5 w-5"}):b.jsx(ko,{className:"h-5 w-5"})})]})]}),b.jsx("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed",children:l?"Signing In...":"Sign In"})]})]})})]}):null},yE=({isOpen:t,onClose:e,onNotification:n})=>{const[i,r]=O.useState({email:"",password:"",confirmPassword:"",username:""}),[s,o]=O.useState(!1),[a,l]=O.useState(!1),{register:u,isLoading:d}=g0(),f=p=>{r({...i,[p.target.name]:p.target.value})},h=async p=>{if(p.preventDefault(),i.password!==i.confirmPassword){n(`Passwords do not match
Please try again`,"error");return}const v=await u({email:i.email,password:i.password,username:i.username});n(v.message,v.success?"success":"error"),v.success&&(e(),r({email:"",password:"",confirmPassword:"",username:""}))};return t?b.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[b.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:e}),b.jsx("div",{className:"relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700",children:b.jsxs("div",{className:"p-6",children:[b.jsxs("div",{className:"flex justify-between items-center mb-6",children:[b.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Register"}),b.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:b.jsx(lu,{className:"h-5 w-5"})})]}),b.jsxs("form",{onSubmit:h,className:"space-y-4",children:[b.jsxs("div",{children:[b.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Username"}),b.jsx("input",{type:"text",name:"username",value:i.username,onChange:f,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Choose a username"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Email"}),b.jsx("input",{type:"email",name:"email",value:i.email,onChange:f,required:!0,className:"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your email"})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Password"}),b.jsxs("div",{className:"relative",children:[b.jsx("input",{type:s?"text":"password",name:"password",value:i.password,onChange:f,required:!0,className:"w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your password"}),b.jsx("button",{type:"button",onClick:()=>o(!s),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",children:s?b.jsx(gd,{className:"h-5 w-5"}):b.jsx(ko,{className:"h-5 w-5"})})]})]}),b.jsxs("div",{children:[b.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Confirm Password"}),b.jsxs("div",{className:"relative",children:[b.jsx("input",{type:a?"text":"password",name:"confirmPassword",value:i.confirmPassword,onChange:f,required:!0,className:"w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",placeholder:"Confirm your password"}),b.jsx("button",{type:"button",onClick:()=>l(!a),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",children:a?b.jsx(gd,{className:"h-5 w-5"}):b.jsx(ko,{className:"h-5 w-5"})})]})]}),b.jsx("button",{type:"submit",disabled:d,className:"w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed",children:d?"Creating Account...":"Create Account"})]})]})})]}):null},SE=({theme:t,onThemeToggle:e,onNotification:n,onSearch:i})=>{const[r,s]=O.useState(!1),[o,a]=O.useState(!1),[l,u]=O.useState(!1),d=kr(),f=h=>{d(`/?sorting=${h}`)};return b.jsxs(b.Fragment,{children:[b.jsxs("nav",{className:"relative z-40 bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/20 dark:border-white/10",children:[b.jsx("div",{className:"w-full mx-auto px-4 sm:px-6 lg:px-8",children:b.jsxs("div",{className:"flex justify-between items-center h-16",children:[b.jsxs(Fo,{to:"/",className:"flex items-center space-x-2 group",children:[b.jsx(sE,{className:"h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300"}),b.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent",children:"Framzy"})]}),b.jsxs("div",{className:"hidden md:flex items-center space-x-8 ml-4",children:[b.jsx("button",{onClick:()=>f("date_added"),className:"text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200",children:"Latest"}),b.jsx("button",{onClick:()=>f("toplist"),className:"text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200",children:"Popular"}),b.jsx("button",{onClick:()=>f("random"),className:"text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200",children:"Random"})]}),b.jsx("div",{className:"hidden md:block flex-1 max-w-md ml-4",children:b.jsx(kp,{onSearch:i})}),b.jsxs("div",{className:"flex items-center space-x-4",children:[b.jsx("button",{onClick:()=>u(!l),className:"md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400",children:l?b.jsx(lu,{className:"h-6 w-6"}):b.jsx(oE,{className:"h-6 w-6"})}),b.jsx("button",{onClick:()=>s(!0),className:"hidden md:block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200",children:"Login"}),b.jsx("button",{onClick:()=>a(!0),className:"hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105",children:"Register"}),b.jsx(hE,{theme:t,onToggle:e})]})]})}),l&&b.jsx("div",{className:"md:hidden border-t border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-md",children:b.jsxs("div",{className:"px-4 py-4 space-y-4",children:[b.jsx(kp,{onSearch:i}),b.jsxs("div",{className:"flex justify-center space-x-6",children:[b.jsx("button",{onClick:()=>{f("date_added"),u(!1)},className:"text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200",children:"Latest"}),b.jsx("button",{onClick:()=>{f("toplist"),u(!1)},className:"text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200",children:"Popular"}),b.jsx("button",{onClick:()=>{f("random"),u(!1)},className:"text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200",children:"Random"})]}),b.jsxs("div",{className:"flex justify-center space-x-4",children:[b.jsx("button",{onClick:()=>{s(!0),u(!1)},className:"px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200",children:"Login"}),b.jsx("button",{onClick:()=>{a(!0),u(!1)},className:"px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200",children:"Register"})]})]})})]}),b.jsx(xE,{isOpen:r,onClose:()=>s(!1),onNotification:n}),b.jsx(yE,{isOpen:o,onClose:()=>a(!1),onNotification:n})]})},EE=({wallpaper:t})=>{var u;const[e,n]=O.useState(!0),[i,r]=O.useState(!1),s=kr(),o=()=>{n(!1)},a=()=>{s(`/wallpaper/${t.id}`)},l=d=>d>=1e6?(d/1e6).toFixed(1)+"M":d>=1e3?(d/1e3).toFixed(1)+"K":d;return b.jsx("div",{className:"group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onClick:a,children:b.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden bg-gray-200 dark:bg-gray-700",children:[e&&b.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:b.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"})}),b.jsx("img",{src:((u=t.thumbs)==null?void 0:u.large)||t.path,alt:"Wallpaper",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",onLoad:o,loading:"lazy"}),b.jsx("div",{className:"absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md",children:t.resolution}),b.jsx("div",{className:`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${i?"opacity-100":"opacity-0"}`,children:b.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:b.jsx("div",{className:"flex items-center justify-between text-white",children:b.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[b.jsxs("div",{className:"flex items-center space-x-1",children:[b.jsx(ko,{className:"h-4 w-4"}),b.jsx("span",{children:l(t.views||0)})]}),b.jsxs("div",{className:"flex items-center space-x-1",children:[b.jsx(h0,{className:"h-4 w-4"}),b.jsx("span",{children:l(t.favorites||0)})]})]})})})}),b.jsx("div",{className:`absolute top-4 right-4 transition-opacity duration-300 ${i?"opacity-100":"opacity-0"}`,children:b.jsx("button",{onClick:d=>{d.stopPropagation(),window.open(t.path,"_blank")},className:"p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200",children:b.jsx(f0,{className:"h-4 w-4"})})})]})})},v0=({wallpapers:t})=>!t||t.length===0?b.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[b.jsx("div",{className:"text-6xl mb-4",children:"🖼️"}),b.jsx("h3",{className:"text-2xl font-semibold text-gray-900 dark:text-white mb-2",children:"No wallpapers found"}),b.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Try adjusting your search or browse our popular collection."})]}):b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6",children:t.map((e,n)=>b.jsx(EE,{wallpaper:e},e.id||n))}),ME=O.forwardRef(({onFilterChange:t,isLoading:e},n)=>{const[i]=ah(),r=kr(),[s,o]=O.useState({resolution:"",orientation:"",color:""}),[a,l]=O.useState(!1);O.useEffect(()=>{const _={resolution:i.get("resolution")||"",orientation:i.get("orientation")||"",color:i.get("color")||""};o(_)},[i]),O.useImperativeHandle(n,()=>({reset:()=>{o({resolution:"",orientation:"",color:""}),l(!1)}}));const u=[{value:"",label:"All Resolutions"},{value:"1920x1080",label:"1080p (1920x1080)"},{value:"2560x1440",label:"2K (2560x1440)"},{value:"3840x2160",label:"4K (3840x2160)"},{value:"1366x768",label:"HD (1366x768)"},{value:"1280x720",label:"HD (1280x720)"}],d=[{value:"",label:"All Orientations"},{value:"landscape",label:"Landscape"},{value:"portrait",label:"Portrait"}],f=[{value:"",label:"All Colors"},{value:"ff0000",label:"Red"},{value:"00ff00",label:"Green"},{value:"0000ff",label:"Blue"},{value:"ffff00",label:"Yellow"},{value:"ff00ff",label:"Magenta"},{value:"00ffff",label:"Cyan"},{value:"000000",label:"Black"},{value:"ffffff",label:"White"},{value:"ffa500",label:"Orange"},{value:"800080",label:"Purple"}],h=(_,g)=>{o(c=>({...c,[_]:g}))},p=()=>{const _=new URLSearchParams(i);s.resolution?_.set("resolution",s.resolution):_.delete("resolution"),s.orientation?_.set("orientation",s.orientation):_.delete("orientation"),s.color?_.set("color",s.color):_.delete("color"),_.delete("page"),r(`/?${_.toString()}`),t(s)},v=s.resolution||s.orientation||s.color;return b.jsx("div",{className:"relative z-30 bg-white/5 dark:bg-black/10 backdrop-blur-sm border-b border-white/10 dark:border-white/5",children:b.jsxs("div",{className:"w-full mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsx("div",{className:"md:hidden",children:b.jsxs("button",{onClick:()=>l(!a),className:"w-full flex items-center justify-between py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200",children:[b.jsxs("div",{className:"flex items-center space-x-2",children:[b.jsx(rE,{className:"h-4 w-4"}),b.jsx("span",{className:"font-medium",children:"Filters"}),v&&b.jsx("span",{className:"bg-purple-600 text-white text-xs px-2 py-1 rounded-full",children:"Active"})]}),a?b.jsx(iE,{className:"h-4 w-4"}):b.jsx(nE,{className:"h-4 w-4"})]})}),b.jsx("div",{className:`${a?"block":"hidden"} md:block py-3`,children:b.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6",children:[b.jsxs("div",{className:"flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 flex-1",children:[b.jsxs("div",{className:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2",children:[b.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap",children:"Resolution:"}),b.jsx("select",{value:s.resolution,onChange:_=>h("resolution",_.target.value),className:"w-[90%] md:w-[60%] lg:w-[90%] transition-all duration-500 ease-in-out px-3 py-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",children:u.map(_=>b.jsx("option",{value:_.value,children:_.label},_.value))})]}),b.jsxs("div",{className:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2",children:[b.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap",children:"Orientation:"}),b.jsx("select",{value:s.orientation,onChange:_=>h("orientation",_.target.value),className:"w-[90%] md:w-[60%] lg:w-[90%] transition-all duration-500 ease-in-out px-3 py-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",children:d.map(_=>b.jsx("option",{value:_.value,children:_.label},_.value))})]}),b.jsxs("div",{className:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2",children:[b.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap",children:"Color:"}),b.jsx("select",{value:s.color,onChange:_=>h("color",_.target.value),className:"w-[90%] md:w-[60%] lg:w-[90%] transition-all duration-500 ease-in-out px-3 py-1.5 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200",children:f.map(_=>b.jsx("option",{value:_.value,children:_.label},_.value))})]})]}),b.jsxs("button",{onClick:p,disabled:e,className:"flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed whitespace-nowrap",children:[b.jsx(uE,{className:`h-4 w-4 ${e?"animate-spin":""}`}),b.jsx("span",{children:e?"Applying...":"Apply Filters"})]})]})})]})})}),wE=({onSearch:t})=>{const[e,n]=O.useState([]),[i,r]=O.useState(!0),[s,o]=O.useState(1),[a,l]=O.useState(!1),[u]=ah(),d=kr(),f=O.useRef(),h=u.get("sorting")||"toplist",p=u.get("search")||"",v=parseInt(u.get("page"))||1,_={resolution:u.get("resolution")||"",orientation:u.get("orientation")||"",color:u.get("color")||""},g=_.resolution||_.orientation||_.color;O.useEffect(()=>{c()},[h,p,v,_.resolution,_.orientation,_.color]);const c=async()=>{var S;r(!0);try{let A;p?g?A=await gE(p,v,_):A=await mE(p,v):g?A=await Oo({sorting:h,page:v.toString(),filter:_}):A=await Oo({sorting:h,page:v.toString()}),n(A.data||[]),o(((S=A.meta)==null?void 0:S.last_page)||1)}catch(A){console.error("Error loading wallpapers:",A),n([])}finally{r(!1)}},x=async S=>{l(!0),setTimeout(()=>l(!1),500)},y=S=>{if(S>=1&&S<=s){const A=new URLSearchParams(u);A.set("page",S.toString()),d(`/?${A.toString()}`),window.scrollTo({top:0,behavior:"smooth"})}};return b.jsxs(b.Fragment,{children:[b.jsx(ME,{ref:f,onFilterChange:x,isLoading:a}),b.jsxs("div",{className:"w-full mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[b.jsxs("div",{className:"text-center mb-12",children:[b.jsx("h1",{className:"text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent",children:"Beautiful Wallpapers"}),b.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto",children:"Discover stunning wallpapers for your devices. High quality, free to download."})]}),i?b.jsx("div",{className:"flex justify-center items-center py-20",children:b.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"})}):b.jsxs(b.Fragment,{children:[b.jsx(v0,{wallpapers:e}),s>1&&b.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-12",children:[b.jsx("button",{onClick:()=>y(v-1),disabled:v===1,className:"px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 dark:hover:bg-black/60 transition-all duration-300 text-sm sm:text-base",children:"← Previous"}),b.jsx("div",{className:"flex items-center gap-1 sm:gap-2",children:(()=>{const S=Math.max(1,v-2),A=Math.min(s,S+4),R=[];for(let C=S;C<=A;C++)R.push(C);return R})().map(S=>b.jsx("button",{onClick:()=>y(S),className:`w-10 h-10 sm:w-12 sm:h-12 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${S===v?"bg-purple-600 text-white shadow-lg":"bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-black/60"}`,children:S},S))}),b.jsx("button",{onClick:()=>y(v+1),disabled:v===s,className:"px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-xl text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 dark:hover:bg-black/60 transition-all duration-300 text-sm sm:text-base",children:"Next →"})]})]})]})]})},TE=()=>{const{id:t}=tS(),[e,n]=O.useState(null),[i,r]=O.useState([]),[s,o]=O.useState(!0),[a,l]=O.useState(!0);O.useEffect(()=>{u(),d()},[t]);const u=async()=>{o(!0);try{const p=await pE(t);n(p)}catch(p){console.error("Error loading wallpaper:",p)}finally{o(!1)}},d=async()=>{var p;l(!0);try{const v=await Oo({sorting:"random",page:"1"});r(((p=v.data)==null?void 0:p.slice(0,12))||[])}catch(v){console.error("Error loading related wallpapers:",v)}finally{l(!1)}},f=()=>{if(e!=null&&e.path){const p=document.createElement("a");p.href=e.path,p.download=`framzy-wallpaper-${e.id}.jpg`,p.target="_blank",document.body.appendChild(p),p.click(),document.body.removeChild(p)}},h=p=>p>=1e6?(p/1e6).toFixed(1)+"M":p>=1e3?(p/1e3).toFixed(1)+"K":p;return s?b.jsx("div",{className:"min-h-screen flex justify-center items-center",children:b.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"})}):e?b.jsxs("div",{className:"w-full mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[b.jsxs(Fo,{to:"/",className:"inline-flex items-center space-x-2 mb-8 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200",children:[b.jsx(JS,{className:"h-5 w-5"}),b.jsx("span",{children:"Back to Gallery"})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-16",children:[b.jsx("div",{className:"lg:col-span-2",children:b.jsx("div",{className:"relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl w-full",children:b.jsx("img",{src:e.path,alt:"Wallpaper",className:"w-full h-auto max-h-[70vh] object-contain",loading:"lazy"})})}),b.jsx("div",{className:"space-y-4 lg:space-y-6",children:b.jsxs("div",{className:"bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 dark:border-white/20",children:[b.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Wallpaper Details"}),b.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-4 mb-6",children:[b.jsxs("div",{className:"flex items-center space-x-2 text-gray-600 dark:text-gray-300",children:[b.jsx(ko,{className:"h-4 w-4"}),b.jsxs("span",{className:"text-xs sm:text-sm",children:[h(e.views||0)," views"]})]}),b.jsxs("div",{className:"flex items-center space-x-2 text-gray-600 dark:text-gray-300",children:[b.jsx(h0,{className:"h-4 w-4"}),b.jsxs("span",{className:"text-xs sm:text-sm",children:[h(e.favorites||0)," likes"]})]})]}),b.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[b.jsx(aE,{className:"h-5 w-5 text-purple-600 dark:text-purple-400"}),b.jsxs("div",{children:[b.jsx("p",{className:"font-semibold text-gray-900 dark:text-white",children:"Resolution"}),b.jsx("p",{className:"text-xs sm:text-sm text-gray-600 dark:text-gray-300",children:e.resolution})]})]}),b.jsxs("div",{className:"flex items-center space-x-2 mb-6",children:[b.jsx(eE,{className:"h-5 w-5 text-purple-600 dark:text-purple-400"}),b.jsxs("div",{children:[b.jsx("p",{className:"font-semibold text-gray-900 dark:text-white",children:"Category"}),b.jsx("p",{className:"text-xs sm:text-sm text-gray-600 dark:text-gray-300 capitalize",children:e.category||"General"})]})]}),b.jsxs("button",{onClick:f,className:"w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base",children:[b.jsx(f0,{className:"h-5 w-5"}),b.jsx("span",{children:"Download Wallpaper"})]}),e.colors&&e.colors.length>0&&b.jsxs("div",{className:"mt-6",children:[b.jsx("p",{className:"font-semibold text-gray-900 dark:text-white mb-3",children:"Color Palette"}),b.jsx("div",{className:"flex space-x-2",children:e.colors.slice(0,5).map((p,v)=>b.jsx("div",{className:"w-6 h-6 sm:w-8 sm:h-8 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm",style:{backgroundColor:p},title:p},v))})]})]})})]}),b.jsxs("div",{children:[b.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center",children:"More Wallpapers"}),a?b.jsx("div",{className:"flex justify-center items-center py-20",children:b.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"})}):b.jsx(v0,{wallpapers:i})]})]}):b.jsxs("div",{className:"min-h-screen flex flex-col justify-center items-center",children:[b.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-4",children:"Wallpaper not found"}),b.jsx(Fo,{to:"/",className:"text-purple-600 hover:text-purple-700 dark:text-purple-400",children:"← Back to home"})]})},AE=({message:t,type:e,isVisible:n,onClose:i})=>{const[r,s]=O.useState(100);if(O.useEffect(()=>{if(!n)return;const l=setTimeout(()=>{i()},2e3),u=setInterval(()=>{s(d=>d<=0?(clearInterval(u),0):d-5)},100);return()=>{clearTimeout(l),clearInterval(u),s(100)}},[n,i]),!n)return null;const o=e==="success",a=t.split(`
`);return b.jsx("div",{className:"fixed top-4 right-4 z-50 transform transition-all duration-300 ease-out",children:b.jsxs("div",{className:`
        relative p-4 rounded-lg shadow-lg backdrop-blur-sm border max-w-sm
        ${o?"bg-green-500/90 border-green-400 text-white":"bg-red-500/90 border-red-400 text-white"}
      `,children:[b.jsxs("div",{className:"flex items-start space-x-3",children:[b.jsx("div",{className:"flex-shrink-0",children:o?b.jsx(tE,{className:"h-5 w-5"}):b.jsx(fE,{className:"h-5 w-5"})}),b.jsx("div",{className:"flex-1 min-w-0",children:a.map((l,u)=>b.jsx("p",{className:`text-sm ${u===0?"font-semibold":"font-normal opacity-90"}`,children:l},u))}),b.jsx("button",{onClick:i,className:"flex-shrink-0 text-white hover:text-gray-200 transition-colors",children:b.jsx(lu,{className:"h-4 w-4"})})]}),b.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-lg overflow-hidden",children:b.jsx("div",{className:"h-full bg-white/80 transition-all duration-100 ease-linear",style:{width:`${r}%`}})})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="180",CE=0,Op=1,RE=2,_0=1,bE=2,ci=3,nr=0,an=1,hi=2,Qi=0,xs=1,vd=2,Bp=3,zp=4,PE=5,yr=100,LE=101,DE=102,NE=103,IE=104,UE=200,FE=201,kE=202,OE=203,_d=204,xd=205,BE=206,zE=207,HE=208,VE=209,GE=210,WE=211,jE=212,XE=213,$E=214,yd=0,Sd=1,Ed=2,Rs=3,Md=4,wd=5,Td=6,Ad=7,x0=0,YE=1,qE=2,Ji=0,KE=1,ZE=2,QE=3,JE=4,eM=5,tM=6,nM=7,y0=300,bs=301,Ps=302,Cd=303,Rd=304,uu=306,bd=1e3,Hn=1001,Pd=1002,gn=1003,iM=1004,Ma=1005,nn=1006,Vu=1007,Tr=1008,Ti=1009,S0=1010,E0=1011,Bo=1012,uh=1013,Ir=1014,Qn=1015,Os=1016,ch=1017,dh=1018,zo=1020,M0=35902,w0=35899,T0=1021,A0=1022,Cn=1023,Ho=1026,Vo=1027,C0=1028,fh=1029,R0=1030,hh=1031,ph=1033,ll=33776,ul=33777,cl=33778,dl=33779,Ld=35840,Dd=35841,Nd=35842,Id=35843,Ud=36196,Fd=37492,kd=37496,Od=37808,Bd=37809,zd=37810,Hd=37811,Vd=37812,Gd=37813,Wd=37814,jd=37815,Xd=37816,$d=37817,Yd=37818,qd=37819,Kd=37820,Zd=37821,Qd=36492,Jd=36494,ef=36495,tf=36283,nf=36284,rf=36285,sf=36286,rM=3200,sM=3201,oM=0,aM=1,Hi="",Mn="srgb",Ls="srgb-linear",Ol="linear",it="srgb",zr=7680,Hp=519,lM=512,uM=513,cM=514,b0=515,dM=516,fM=517,hM=518,pM=519,Vp=35044,Gp="300 es",Jn=2e3,Bl=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=Math.PI/180,of=180/Math.PI;function Qo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function mM(t,e){return(t%e+e)%e}function Wu(t,e,n){return(1-n)*t+n*e}function Zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==h||u!==p||d!==v){let g=1-a;const c=l*h+u*p+d*v+f*_,x=c>=0?1:-1,y=1-c*c;if(y>Number.EPSILON){const A=Math.sqrt(y),R=Math.atan2(A,c*x);g=Math.sin(g*R)/A,a=Math.sin(a*R)/A}const S=a*x;if(l=l*g+h*S,u=u*g+p*S,d=d*g+v*S,f=f*g+_*S,g===1-a){const A=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=A,u*=A,d*=A,f*=A}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+d*f+l*p-u*h,e[n+1]=l*v+d*h+u*f-a*p,e[n+2]=u*v+d*p+a*h-l*f,e[n+3]=d*v-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*d*f+u*p*v,this._y=u*p*f-h*d*v,this._z=u*d*v+h*p*f,this._w=u*d*f-h*p*v;break;case"YXZ":this._x=h*d*f+u*p*v,this._y=u*p*f-h*d*v,this._z=u*d*v-h*p*f,this._w=u*d*f+h*p*v;break;case"ZXY":this._x=h*d*f-u*p*v,this._y=u*p*f+h*d*v,this._z=u*d*v+h*p*f,this._w=u*d*f-h*p*v;break;case"ZYX":this._x=h*d*f-u*p*v,this._y=u*p*f+h*d*v,this._z=u*d*v-h*p*f,this._w=u*d*f+h*p*v;break;case"YZX":this._x=h*d*f+u*p*v,this._y=u*p*f+h*d*v,this._z=u*d*v-h*p*f,this._w=u*d*f-h*p*v;break;case"XZY":this._x=h*d*f-u*p*v,this._y=u*p*f-h*d*v,this._z=u*d*v+h*p*f,this._w=u*d*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*d,this.y=i+l*d+a*u-s*f,this.z=r+l*f+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new z,Wp=new Jo;class ze{constructor(e,n,i,r,s,o,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],p=i[5],v=i[8],_=r[0],g=r[3],c=r[6],x=r[1],y=r[4],S=r[7],A=r[2],R=r[5],C=r[8];return s[0]=o*_+a*x+l*A,s[3]=o*g+a*y+l*R,s[6]=o*c+a*S+l*C,s[1]=u*_+d*x+f*A,s[4]=u*g+d*y+f*R,s[7]=u*c+d*S+f*C,s[2]=h*_+p*x+v*A,s[5]=h*g+p*y+v*R,s[8]=h*c+p*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*o-a*u,h=a*l-d*s,p=u*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*u-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xu.makeScale(e,n)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new ze;function P0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gM(){const t=zl("canvas");return t.style.display="block",t}const jp={};function Go(t){t in jp||(jp[t]=!0,console.warn(t))}function vM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Xp=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const t={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=ys(r.r),r.g=ys(r.g),r.b=ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?Ol:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Go("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Go("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ls]:{primaries:e,whitePoint:i,transfer:Ol,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const Qe=_M();function _i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class xM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=zl("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_i(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_i(n[i]/255)*255):n[i]=_i(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yM=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($u(r[o].image)):s.push($u(r[o]))}else s=$u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SM=0;const Yu=new z;class qt extends Bs{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Hn,r=Hn,s=nn,o=Tr,a=Cn,l=Ti,u=qt.DEFAULT_ANISOTROPY,d=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Qo(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yu).x}get height(){return this.source.getSize(Yu).y}get depth(){return this.source.getSize(Yu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=y0;qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],v=l[9],_=l[2],g=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(p+1)/2,A=(c+1)/2,R=(d+h)/4,C=(f+_)/4,L=(v+g)/4;return y>S&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=C/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=L/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(f-_)/x,this.z=(h-d)/x,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends Bs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new qt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new mh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends EM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class L0 extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Ta.subVectors(this.max,Qs),Vr.subVectors(e.a,Qs),Gr.subVectors(e.b,Qs),Wr.subVectors(e.c,Qs),Li.subVectors(Gr,Vr),Di.subVectors(Wr,Gr),cr.subVectors(Vr,Wr);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-cr.z,cr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,cr.z,0,-cr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-cr.y,cr.x,0];return!qu(n,Vr,Gr,Wr,Ta)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,Vr,Gr,Wr,Ta))?!1:(Aa.crossVectors(Li,Di),n=[Aa.x,Aa.y,Aa.z],qu(n,Vr,Gr,Wr,Ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new z,new z,new z,new z,new z,new z,new z,new z],Nn=new z,wa=new ea,Vr=new z,Gr=new z,Wr=new z,Li=new z,Di=new z,cr=new z,Qs=new z,Ta=new z,Aa=new z,dr=new z;function qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),u=n.dot(dr),d=i.dot(dr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const wM=new ea,Js=new z,Ku=new z;class cu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ku)),this.expandByPoint(Js.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oi=new z,Zu=new z,Ca=new z,Ni=new z,Qu=new z,Ra=new z,Ju=new z;class D0{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),Ca.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ca),a=Ni.dot(this.direction),l=-Ni.dot(Ca),u=Ni.lengthSq(),d=Math.abs(1-o*o);let f,h,p,v;if(d>0)if(f=o*l-a,h=o*a-l,v=s*d,f>=0)if(h>=-v)if(h<=v){const _=1/d;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zu).addScaledVector(Ca,h),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),Ra.subVectors(i,e),Ju.crossVectors(Qu,Ra);let o=this.direction.dot(Ju),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ra.crossVectors(Ni,Ra));if(l<0)return null;const u=a*this.direction.dot(Qu.cross(Ni));if(u<0||l+u>o)return null;const d=-a*Ni.dot(Ju);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,u,d,f,h,p,v,_,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,f,h,p,v,_,g)}set(e,n,i,r,s,o,a,l,u,d,f,h,p,v,_,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=v,c[11]=_,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,v=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=p+v*u,n[5]=h-_*u,n[9]=-a*l,n[2]=_-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,v=u*d,_=u*f;n[0]=h+_*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-v,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,v=u*d,_=u*f;n[0]=h-_*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*d,n[9]=_-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,v=a*d,_=a*f;n[0]=l*d,n[4]=v*u-p,n[8]=h*u+_,n[1]=l*f,n[5]=_*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,_=a*u;n[0]=l*d,n[4]=_-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*f+v,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,_=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=h*f+_,n[5]=o*d,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,AM)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ii.crossVectors(i,dn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ii.crossVectors(i,dn)),Ii.normalize(),ba.crossVectors(dn,Ii),r[0]=Ii.x,r[4]=ba.x,r[8]=dn.x,r[1]=Ii.y,r[5]=ba.y,r[9]=dn.y,r[2]=Ii.z,r[6]=ba.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],p=i[13],v=i[2],_=i[6],g=i[10],c=i[14],x=i[3],y=i[7],S=i[11],A=i[15],R=r[0],C=r[4],L=r[8],w=r[12],E=r[1],N=r[5],V=r[9],j=r[13],q=r[2],Z=r[6],$=r[10],te=r[14],I=r[3],K=r[7],J=r[11],le=r[15];return s[0]=o*R+a*E+l*q+u*I,s[4]=o*C+a*N+l*Z+u*K,s[8]=o*L+a*V+l*$+u*J,s[12]=o*w+a*j+l*te+u*le,s[1]=d*R+f*E+h*q+p*I,s[5]=d*C+f*N+h*Z+p*K,s[9]=d*L+f*V+h*$+p*J,s[13]=d*w+f*j+h*te+p*le,s[2]=v*R+_*E+g*q+c*I,s[6]=v*C+_*N+g*Z+c*K,s[10]=v*L+_*V+g*$+c*J,s[14]=v*w+_*j+g*te+c*le,s[3]=x*R+y*E+S*q+A*I,s[7]=x*C+y*N+S*Z+A*K,s[11]=x*L+y*V+S*$+A*J,s[15]=x*w+y*j+S*te+A*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],v=e[3],_=e[7],g=e[11],c=e[15];return v*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*d-s*l*d)+g*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*d-i*u*d)+c*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],v=e[12],_=e[13],g=e[14],c=e[15],x=f*g*u-_*h*u+_*l*p-a*g*p-f*l*c+a*h*c,y=v*h*u-d*g*u-v*l*p+o*g*p+d*l*c-o*h*c,S=d*_*u-v*f*u+v*a*p-o*_*p-d*a*c+o*f*c,A=v*f*l-d*_*l-v*a*h+o*_*h+d*a*g-o*f*g,R=n*x+i*y+r*S+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=x*C,e[1]=(_*h*s-f*g*s-_*r*p+i*g*p+f*r*c-i*h*c)*C,e[2]=(a*g*s-_*l*s+_*r*u-i*g*u-a*r*c+i*l*c)*C,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=y*C,e[5]=(d*g*s-v*h*s+v*r*p-n*g*p-d*r*c+n*h*c)*C,e[6]=(v*l*s-o*g*s-v*r*u+n*g*u+o*r*c-n*l*c)*C,e[7]=(o*h*s-d*l*s+d*r*u-n*h*u-o*r*p+n*l*p)*C,e[8]=S*C,e[9]=(v*f*s-d*_*s-v*i*p+n*_*p+d*i*c-n*f*c)*C,e[10]=(o*_*s-v*a*s+v*i*u-n*_*u-o*i*c+n*a*c)*C,e[11]=(d*a*s-o*f*s-d*i*u+n*f*u+o*i*p-n*a*p)*C,e[12]=A*C,e[13]=(d*_*r-v*f*r+v*i*h-n*_*h-d*i*g+n*f*g)*C,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*g-n*a*g)*C,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,f=a+a,h=s*u,p=s*d,v=s*f,_=o*d,g=o*f,c=a*f,x=l*u,y=l*d,S=l*f,A=i.x,R=i.y,C=i.z;return r[0]=(1-(_+c))*A,r[1]=(p+S)*A,r[2]=(v-y)*A,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(h+c))*R,r[6]=(g+x)*R,r[7]=0,r[8]=(v+y)*C,r[9]=(g-x)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const u=1/s,d=1/o,f=1/a;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Jn,l=!1){const u=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,_;if(l)v=s/(o-s),_=o*s/(o-s);else if(a===Jn)v=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Bl)v=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Jn,l=!1){const u=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,_;if(l)v=1/(o-s),_=o/(o-s);else if(a===Jn)v=-2/(o-s),_=-(o+s)/(o-s);else if(a===Bl)v=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new z,In=new At,TM=new z(0,0,0),AM=new z(1,1,1),Ii=new z,ba=new z,dn=new z,Yp=new At,qp=new Jo;class Ai{constructor(e=0,n=0,i=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CM=0;const Kp=new z,Xr=new Jo,ai=new At,Pa=new z,eo=new z,RM=new z,bM=new Jo,Zp=new z(1,0,0),Qp=new z(0,1,0),Jp=new z(0,0,1),em={type:"added"},PM={type:"removed"},$r={type:"childadded",child:null},ec={type:"childremoved",child:null};class ln extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new z,n=new Ai,i=new Jo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new ze}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Pa.copy(e):Pa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(eo,Pa,this.up):ai.lookAt(Pa,eo,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(ai),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(PM),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,RM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,bM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new z,li=new z,tc=new z,ui=new z,Yr=new z,qr=new z,tm=new z,nc=new z,ic=new z,rc=new z,sc=new St,oc=new St,ac=new St;class zn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),li.subVectors(i,n),tc.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(li),l=Un.dot(tc),u=li.dot(li),d=li.dot(tc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*d)*h,v=(o*d-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),li.subVectors(e,n),Un.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),qr.subVectors(s,i),nc.subVectors(e,i);const l=Yr.dot(nc),u=qr.dot(nc);if(l<=0&&u<=0)return n.copy(i);ic.subVectors(e,r);const d=Yr.dot(ic),f=qr.dot(ic);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Yr,o);rc.subVectors(e,s);const p=Yr.dot(rc),v=qr.dot(rc);if(v>=0&&p<=v)return n.copy(s);const _=p*u-l*v;if(_<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(qr,a);const g=d*v-p*f;if(g<=0&&f-d>=0&&p-v>=0)return tm.subVectors(s,r),a=(f-d)/(f-d+(p-v)),n.copy(r).addScaledVector(tm,a);const c=1/(g+_+h);return o=_*c,a=h*c,n.copy(i).addScaledVector(Yr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},La={h:0,s:0,l:0};function lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=mM(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lc(o,s,e+1/3),this.g=lc(o,s,e),this.b=lc(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Qe.workingToColorSpace(Vt.copy(this),e),Math.round(Xe(Vt.r*255,0,255))*65536+Math.round(Xe(Vt.g*255,0,255))*256+Math.round(Xe(Vt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Mn){Qe.workingToColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(La);const i=Wu(Ui.h,La.h,n),r=Wu(Ui.s,La.s,n),s=Wu(Ui.l,La.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Je;Je.NAMES=I0;let LM=0;class ta extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=xs,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=xd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_d&&(i.blendSrc=this.blendSrc),this.blendDst!==xd&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class U0 extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new z,Da=new ke;let DM=0;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vp,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Da.fromBufferAttribute(this,n),Da.applyMatrix3(e),this.setXY(n,Da.x,Da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class F0 extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class k0 extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xi extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NM=0;const En=new At,uc=new ln,Kr=new z,fn=new ea,to=new ea,Nt=new z;class bi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?k0:F0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(fn.min,to.min),fn.expandByPoint(Nt),Nt.addVectors(fn.max,to.max),fn.expandByPoint(Nt)):(fn.expandByPoint(to.min),fn.expandByPoint(to.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Nt.fromBufferAttribute(a,u),l&&(Kr.fromBufferAttribute(e,u),Nt.add(Kr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new z,l[L]=new z;const u=new z,d=new z,f=new z,h=new ke,p=new ke,v=new ke,_=new z,g=new z;function c(L,w,E){u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,E),d.sub(u),f.sub(u),p.sub(h),v.sub(h);const N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(N),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(N),a[L].add(_),a[w].add(_),a[E].add(_),l[L].add(g),l[w].add(g),l[E].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,w=x.length;L<w;++L){const E=x[L],N=E.start,V=E.count;for(let j=N,q=N+V;j<q;j+=3)c(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const y=new z,S=new z,A=new z,R=new z;function C(L){A.fromBufferAttribute(r,L),R.copy(A);const w=a[L];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),S.crossVectors(R,w);const N=S.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,N)}for(let L=0,w=x.length;L<w;++L){const E=x[L],N=E.start,V=E.count;for(let j=N,q=N+V;j<q;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,d=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),a.add(d),l.add(d),u.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let p=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let c=0;c<d;c++)h[v++]=u[p++]}return new Wn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],f=s[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nm=new At,fr=new D0,Na=new cu,im=new z,Ia=new z,Ua=new z,Fa=new z,cc=new z,ka=new z,rm=new z,Oa=new z;class Rn extends ln{constructor(e=new bi,n=new U0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],f=s[l];d!==0&&(cc.fromBufferAttribute(f,e),o?ka.addScaledVector(cc,d):ka.addScaledVector(cc.sub(n),d))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Na.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Na,im)===null||fr.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(s).invert(),fr.copy(e.ray).applyMatrix4(nm),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const g=h[v],c=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,A=y;S<A;S+=3){const R=a.getX(S),C=a.getX(S+1),L=a.getX(S+2);r=Ba(this,c,e,i,u,d,f,R,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=v,c=_;g<c;g+=3){const x=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);r=Ba(this,o,e,i,u,d,f,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){const g=h[v],c=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,A=y;S<A;S+=3){const R=S,C=S+1,L=S+2;r=Ba(this,c,e,i,u,d,f,R,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,c=_;g<c;g+=3){const x=g,y=g+1,S=g+2;r=Ba(this,o,e,i,u,d,f,x,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function IM(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===nr,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Oa);return u<n.near||u>n.far?null:{distance:u,point:Oa.clone(),object:t}}function Ba(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ia),t.getVertexPosition(l,Ua),t.getVertexPosition(u,Fa);const d=IM(t,e,n,i,Ia,Ua,Fa,rm);if(d){const f=new z;zn.getBarycoord(rm,Ia,Ua,Fa,f),r&&(d.uv=zn.getInterpolatedAttribute(r,a,l,u,f,new ke)),s&&(d.uv1=zn.getInterpolatedAttribute(s,a,l,u,f,new ke)),o&&(d.normal=zn.getInterpolatedAttribute(o,a,l,u,f,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new z,materialIndex:0};zn.getNormal(Ia,Ua,Fa,h.normal),d.face=h,d.barycoord=f}return d}class na extends bi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(d,3)),this.setAttribute("uv",new xi(f,2));function v(_,g,c,x,y,S,A,R,C,L,w){const E=S/C,N=A/L,V=S/2,j=A/2,q=R/2,Z=C+1,$=L+1;let te=0,I=0;const K=new z;for(let J=0;J<$;J++){const le=J*N-j;for(let Te=0;Te<Z;Te++){const Ye=Te*E-V;K[_]=Ye*x,K[g]=le*y,K[c]=q,u.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[c]=R>0?1:-1,d.push(K.x,K.y,K.z),f.push(Te/C),f.push(1-J/L),te+=1}}for(let J=0;J<L;J++)for(let le=0;le<C;le++){const Te=h+le+Z*J,Ye=h+le+Z*(J+1),$e=h+(le+1)+Z*(J+1),Ge=h+(le+1)+Z*J;l.push(Te,Ye,Ge),l.push(Ye,$e,Ge),I+=6}a.addGroup(p,I,w),p+=I,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function UM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function O0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const FM={clone:Ds,merge:Xt};var kM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=UM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Hl extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new z,sm=new ke,om=new ke;class Bn extends Hl{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,n){return this.getViewBounds(e,sm,om),n.subVectors(om,sm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class BM extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new Bn(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const o=new Bn(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const a=new Bn(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const l=new Bn(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const u=new Bn(Zr,Qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class B0 extends qt{constructor(e=[],n=bs,i,r,s,o,a,l,u,d){super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zM extends ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new na(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Qi});s.uniforms.tEquirect.value=n;const o=new Rn(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=nn),new BM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class za extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),c=this._getHandJoint(u,_);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class am extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class VM extends qt{constructor(e=null,n=1,i=1,r,s,o,a,l,u=gn,d=gn,f,h){super(null,o,a,l,u,d,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=new z,GM=new z,WM=new ze;class _r{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fc.subVectors(i,n).cross(GM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WM.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new cu,jM=new ke(.5,.5),Ha=new z;class z0{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Jn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],d=s[4],f=s[5],h=s[6],p=s[7],v=s[8],_=s[9],g=s[10],c=s[11],x=s[12],y=s[13],S=s[14],A=s[15];if(r[0].setComponents(u-o,p-d,c-v,A-x).normalize(),r[1].setComponents(u+o,p+d,c+v,A+x).normalize(),r[2].setComponents(u+a,p+f,c+_,A+y).normalize(),r[3].setComponents(u-a,p-f,c-_,A-y).normalize(),i)r[4].setComponents(l,h,g,S).normalize(),r[5].setComponents(u-l,p-h,c-g,A-S).normalize();else if(r[4].setComponents(u-l,p-h,c-g,A-S).normalize(),n===Jn)r[5].setComponents(u+l,p+h,c+g,A+S).normalize();else if(n===Bl)r[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);const n=jM.distanceTo(e.center);return hr.radius=.7071067811865476+n,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class XM extends ta{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vl=new z,Gl=new z,lm=new At,no=new D0,Va=new cu,hc=new z,um=new z;class $M extends ln{constructor(e=new bi,n=new XM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Vl.fromBufferAttribute(n,r-1),Gl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;lm.copy(r).invert(),no.copy(e.ray).applyMatrix4(lm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=u){const c=d.getX(_),x=d.getX(_+1),y=Ga(this,e,no,l,c,x,_);y&&n.push(y)}if(this.isLineLoop){const _=d.getX(v-1),g=d.getX(p),c=Ga(this,e,no,l,_,g,v-1);c&&n.push(c)}}else{const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=u){const c=Ga(this,e,no,l,_,_+1,_);c&&n.push(c)}if(this.isLineLoop){const _=Ga(this,e,no,l,v-1,p,v-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ga(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Vl.fromBufferAttribute(a,r),Gl.fromBufferAttribute(a,s),n.distanceSqToSegment(Vl,Gl,hc,um)>i)return;hc.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(hc);if(!(u<e.near||u>e.far))return{distance:u,point:um.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const cm=new z,dm=new z;class YM extends $M{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)cm.fromBufferAttribute(n,r),dm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cm.distanceTo(dm);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class H0 extends qt{constructor(e,n,i=Ir,r,s,o,a=gn,l=gn,u,d=Ho,f=1){if(d!==Ho&&d!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class V0 extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rr extends bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,h=n/l,p=[],v=[],_=[],g=[];for(let c=0;c<d;c++){const x=c*h-o;for(let y=0;y<u;y++){const S=y*f-s;v.push(S,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let x=0;x<a;x++){const y=x+u*c,S=x+u*(c+1),A=x+1+u*(c+1),R=x+1+u*c;p.push(y,S,R),p.push(S,A,R)}this.setIndex(p),this.setAttribute("position",new xi(v,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wa extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qM extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KM extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ZM extends Hl{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class QM extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class JM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function fm(t,e,n,i){const r=e1(i);switch(n){case T0:return t*e;case C0:return t*e/r.components*r.byteLength;case fh:return t*e/r.components*r.byteLength;case R0:return t*e*2/r.components*r.byteLength;case hh:return t*e*2/r.components*r.byteLength;case A0:return t*e*3/r.components*r.byteLength;case Cn:return t*e*4/r.components*r.byteLength;case ph:return t*e*4/r.components*r.byteLength;case ll:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:case Id:return Math.max(t,16)*Math.max(e,8)/4;case Ld:case Nd:return Math.max(t,8)*Math.max(e,8)/2;case Ud:case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qd:case Jd:case ef:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tf:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rf:case sf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function e1(t){switch(t){case Ti:case S0:return{byteLength:1,components:1};case Bo:case E0:case Os:return{byteLength:2,components:1};case ch:case dh:return{byteLength:2,components:4};case Ir:case uh:case Qn:return{byteLength:4,components:1};case M0:case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function t1(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const d=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,d);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],_=f[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const _=f[p];t.bufferSubData(u,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var n1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,T1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,A1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D1="gl_FragColor = linearToOutputTexel( gl_FragColor );",N1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ew=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ow=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_w=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ww=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ET=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:n1,alphahash_pars_fragment:i1,alphamap_fragment:r1,alphamap_pars_fragment:s1,alphatest_fragment:o1,alphatest_pars_fragment:a1,aomap_fragment:l1,aomap_pars_fragment:u1,batching_pars_vertex:c1,batching_vertex:d1,begin_vertex:f1,beginnormal_vertex:h1,bsdfs:p1,iridescence_fragment:m1,bumpmap_pars_fragment:g1,clipping_planes_fragment:v1,clipping_planes_pars_fragment:_1,clipping_planes_pars_vertex:x1,clipping_planes_vertex:y1,color_fragment:S1,color_pars_fragment:E1,color_pars_vertex:M1,color_vertex:w1,common:T1,cube_uv_reflection_fragment:A1,defaultnormal_vertex:C1,displacementmap_pars_vertex:R1,displacementmap_vertex:b1,emissivemap_fragment:P1,emissivemap_pars_fragment:L1,colorspace_fragment:D1,colorspace_pars_fragment:N1,envmap_fragment:I1,envmap_common_pars_fragment:U1,envmap_pars_fragment:F1,envmap_pars_vertex:k1,envmap_physical_pars_fragment:Y1,envmap_vertex:O1,fog_vertex:B1,fog_pars_vertex:z1,fog_fragment:H1,fog_pars_fragment:V1,gradientmap_pars_fragment:G1,lightmap_pars_fragment:W1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:X1,lights_pars_begin:$1,lights_toon_fragment:q1,lights_toon_pars_fragment:K1,lights_phong_fragment:Z1,lights_phong_pars_fragment:Q1,lights_physical_fragment:J1,lights_physical_pars_fragment:ew,lights_fragment_begin:tw,lights_fragment_maps:nw,lights_fragment_end:iw,logdepthbuf_fragment:rw,logdepthbuf_pars_fragment:sw,logdepthbuf_pars_vertex:ow,logdepthbuf_vertex:aw,map_fragment:lw,map_pars_fragment:uw,map_particle_fragment:cw,map_particle_pars_fragment:dw,metalnessmap_fragment:fw,metalnessmap_pars_fragment:hw,morphinstance_vertex:pw,morphcolor_vertex:mw,morphnormal_vertex:gw,morphtarget_pars_vertex:vw,morphtarget_vertex:_w,normal_fragment_begin:xw,normal_fragment_maps:yw,normal_pars_fragment:Sw,normal_pars_vertex:Ew,normal_vertex:Mw,normalmap_pars_fragment:ww,clearcoat_normal_fragment_begin:Tw,clearcoat_normal_fragment_maps:Aw,clearcoat_pars_fragment:Cw,iridescence_pars_fragment:Rw,opaque_fragment:bw,packing:Pw,premultiplied_alpha_fragment:Lw,project_vertex:Dw,dithering_fragment:Nw,dithering_pars_fragment:Iw,roughnessmap_fragment:Uw,roughnessmap_pars_fragment:Fw,shadowmap_pars_fragment:kw,shadowmap_pars_vertex:Ow,shadowmap_vertex:Bw,shadowmask_pars_fragment:zw,skinbase_vertex:Hw,skinning_pars_vertex:Vw,skinning_vertex:Gw,skinnormal_vertex:Ww,specularmap_fragment:jw,specularmap_pars_fragment:Xw,tonemapping_fragment:$w,tonemapping_pars_fragment:Yw,transmission_fragment:qw,transmission_pars_fragment:Kw,uv_pars_fragment:Zw,uv_pars_vertex:Qw,uv_vertex:Jw,worldpos_vertex:eT,background_vert:tT,background_frag:nT,backgroundCube_vert:iT,backgroundCube_frag:rT,cube_vert:sT,cube_frag:oT,depth_vert:aT,depth_frag:lT,distanceRGBA_vert:uT,distanceRGBA_frag:cT,equirect_vert:dT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:pT,meshbasic_vert:mT,meshbasic_frag:gT,meshlambert_vert:vT,meshlambert_frag:_T,meshmatcap_vert:xT,meshmatcap_frag:yT,meshnormal_vert:ST,meshnormal_frag:ET,meshphong_vert:MT,meshphong_frag:wT,meshphysical_vert:TT,meshphysical_frag:AT,meshtoon_vert:CT,meshtoon_frag:RT,points_vert:bT,points_frag:PT,shadow_vert:LT,shadow_frag:DT,sprite_vert:NT,sprite_frag:IT},ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Kn={basic:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([ce.lights,ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Kn.physical={uniforms:Xt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ja={r:0,b:0,g:0},pr=new Ai,UT=new At;function FT(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,d,f=null,h=0,p=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?n:e).get(S)),S}function _(y){let S=!1;const A=v(y);A===null?c(a,l):A&&A.isColor&&(c(A,1),S=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,S){const A=v(S);A&&(A.isCubeTexture||A.mapping===uu)?(d===void 0&&(d=new Rn(new na(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Ds(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),pr.copy(S.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(pr)),d.material.toneMapped=Qe.getTransfer(A.colorSpace)!==it,(f!==A||h!==A.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=A,h=A.version,p=t.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Rn(new Rr(2,2),new Ci({name:"BackgroundMaterial",uniforms:Ds(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(A.colorSpace)!==it,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function c(y,S){y.getRGB(ja,O0(t)),i.buffers.color.setClear(ja.r,ja.g,ja.b,S,o)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,c(a,l)},render:_,addToRenderList:g,dispose:x}}function kT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,N,V,j,q){let Z=!1;const $=f(j,V,N);s!==$&&(s=$,u(s.object)),Z=p(E,j,V,q),Z&&v(E,j,V,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(E,N,V,j),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,N,V){const j=V.wireframe===!0;let q=i[E.id];q===void 0&&(q={},i[E.id]=q);let Z=q[N.id];Z===void 0&&(Z={},q[N.id]=Z);let $=Z[j];return $===void 0&&($=h(l()),Z[j]=$),$}function h(E){const N=[],V=[],j=[];for(let q=0;q<n;q++)N[q]=0,V[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:j,object:E,attributes:{},index:null}}function p(E,N,V,j){const q=s.attributes,Z=N.attributes;let $=0;const te=V.getAttributes();for(const I in te)if(te[I].location>=0){const J=q[I];let le=Z[I];if(le===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;$++}return s.attributesNum!==$||s.index!==j}function v(E,N,V,j){const q={},Z=N.attributes;let $=0;const te=V.getAttributes();for(const I in te)if(te[I].location>=0){let J=Z[I];J===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),q[I]=le,$++}s.attributes=q,s.attributesNum=$,s.index=j}function _(){const E=s.newAttributes;for(let N=0,V=E.length;N<V;N++)E[N]=0}function g(E){c(E,0)}function c(E,N){const V=s.newAttributes,j=s.enabledAttributes,q=s.attributeDivisors;V[E]=1,j[E]===0&&(t.enableVertexAttribArray(E),j[E]=1),q[E]!==N&&(t.vertexAttribDivisor(E,N),q[E]=N)}function x(){const E=s.newAttributes,N=s.enabledAttributes;for(let V=0,j=N.length;V<j;V++)N[V]!==E[V]&&(t.disableVertexAttribArray(V),N[V]=0)}function y(E,N,V,j,q,Z,$){$===!0?t.vertexAttribIPointer(E,N,V,q,Z):t.vertexAttribPointer(E,N,V,j,q,Z)}function S(E,N,V,j){_();const q=j.attributes,Z=V.getAttributes(),$=N.defaultAttributeValues;for(const te in Z){const I=Z[te];if(I.location>=0){let K=q[te];if(K===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){const J=K.normalized,le=K.itemSize,Te=e.get(K);if(Te===void 0)continue;const Ye=Te.buffer,$e=Te.type,Ge=Te.bytesPerElement,Y=$e===t.INT||$e===t.UNSIGNED_INT||K.gpuType===uh;if(K.isInterleavedBufferAttribute){const ee=K.data,me=ee.stride,Ne=K.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<I.locationSize;Ae++)c(I.location+Ae,ee.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<I.locationSize;Ae++)g(I.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Ae=0;Ae<I.locationSize;Ae++)y(I.location+Ae,le/I.locationSize,$e,J,me*Ge,(Ne+le/I.locationSize*Ae)*Ge,Y)}else{if(K.isInstancedBufferAttribute){for(let ee=0;ee<I.locationSize;ee++)c(I.location+ee,K.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ee=0;ee<I.locationSize;ee++)g(I.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let ee=0;ee<I.locationSize;ee++)y(I.location+ee,le/I.locationSize,$e,J,le*Ge,le/I.locationSize*ee*Ge,Y)}}else if($!==void 0){const J=$[te];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}x()}function A(){L();for(const E in i){const N=i[E];for(const V in N){const j=N[V];for(const q in j)d(j[q].object),delete j[q];delete N[V]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const V in N){const j=N[V];for(const q in j)d(j[q].object),delete j[q];delete N[V]}delete i[E.id]}function C(E){for(const N in i){const V=i[N];if(V[E.id]===void 0)continue;const j=V[E.id];for(const q in j)d(j[q].object),delete j[q];delete V[E.id]}}function L(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function OT(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function a(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let p=0;for(let v=0;v<f;v++)p+=d[v];n.update(p,i,1)}function l(u,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],d[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,f);let v=0;for(let _=0;_<f;_++)v+=d[_]*h[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function BT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Cn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ti&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qn&&!L)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:c,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:A,maxSamples:R}}function zT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,c=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?d(null):u();else{const x=s?0:i,y=x*4;let S=c.clippingState||null;l.value=S,S=d(v,h,y,p);for(let A=0;A!==y;++A)S[A]=n[A];c.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,v){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const c=p+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<c)&&(g=new Float32Array(c));for(let y=0,S=p;y!==_;++y,S+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function HT(t){let e=new WeakMap;function n(o,a){return a===Cd?o.mapping=bs:a===Rd&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cd||a===Rd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new zM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const fs=4,hm=[.125,.215,.35,.446,.526,.582],Sr=20,pc=new ZM,pm=new Je;let mc=null,gc=0,vc=0,_c=!1;const xr=(1+Math.sqrt(5))/2,Jr=1/xr,mm=[new z(-xr,Jr,0),new z(xr,Jr,0),new z(-Jr,0,xr),new z(Jr,0,xr),new z(0,xr,-Jr),new z(0,xr,Jr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],VT=new z;class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=VT}=s;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,vc),this._renderer.xr.enabled=_c,e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Os,format:Cn,colorSpace:Ls,depthBuffer:!1},r=vm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GT(s)),this._blurMaterial=WT(s,e,n)}return r}_compileMaterial(e){const n=new Rn(this._lodPlanes[0],e);this._renderer.compile(n,pc)}_sceneToCubeUV(e,n,i,r,s){const l=new Bn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(pm),f.toneMapping=Ji,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new U0({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new Rn(new na,_);let c=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,c=!0):(_.color.copy(pm),c=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[y],s.y,s.z)):S===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[y]));const A=this._cubeSize;Xa(r,S*A,y>2?A:0,A,A),f.setRenderTarget(r),c&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mm[(r-s-1)%mm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Rn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),_=s/v,g=isFinite(s)?1+Math.floor(d*_):Sr;g>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Sr}`);const c=[];let x=0;for(let C=0;C<Sr;++C){const L=C/_,w=Math.exp(-L*L/2);c.push(w),C===0?x+=w:C<g&&(x+=2*w)}for(let C=0;C<c.length;C++)c[C]=c[C]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const S=this._sizeLods[r],A=3*S*(r>y-fs?r-y+fs:0),R=4*(this._cubeSize-S);Xa(n,A,R,3*S,2*S),l.setRenderTarget(n),l.render(f,pc)}}function GT(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+hm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fs?l=hm[o-t+fs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,v=6,_=3,g=2,c=1,x=new Float32Array(_*v*p),y=new Float32Array(g*v*p),S=new Float32Array(c*v*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,L=R>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];x.set(w,_*v*R),y.set(h,g*v*R);const E=[R,R,R,R,R,R];S.set(E,c*v*R)}const A=new bi;A.setAttribute("position",new Wn(x,_)),A.setAttribute("uv",new Wn(y,g)),A.setAttribute("faceIndex",new Wn(S,c)),e.push(A),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vm(t,e,n){const i=new ir(t,e,n);return i.texture.mapping=uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WT(t,e,n){const i=new Float32Array(Sr),r=new z(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function _m(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function xm(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cd||l===Rd,d=l===bs||l===Ps;if(u||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new gm(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new gm(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function XT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Go("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $T(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,v=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,S=x.length;y<S;y+=3){const A=x[y+0],R=x[y+1],C=x[y+2];h.push(A,R,R,C,C,A)}}else if(v!==void 0){const x=v.array;_=v.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const A=y+0,R=y+1,C=y+2;h.push(A,R,R,C,C,A)}}else return;const g=new(P0(h)?k0:F0)(h,1);g.version=_;const c=s.get(f);c&&e.remove(c),s.set(f,g)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function YT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function d(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let c=0;c<v;c++)g+=p[c];n.update(g,i,1)}function f(h,p,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let c=0;c<h.length;c++)u(h[c]/o,p[c],_[c]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,v);let c=0;for(let x=0;x<v;x++)c+=p[x]*_[x];n.update(c,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function qT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KT(t,e,n){const i=new WeakMap,r=new St;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*f),L=new L0(C,A,R,f);L.type=Qn,L.needsUpdate=!0;const w=S*4;for(let N=0;N<f;N++){const V=c[N],j=x[N],q=y[N],Z=A*R*4*N;for(let $=0;$<V.count;$++){const te=$*w;v===!0&&(r.fromBufferAttribute(V,$),C[Z+te+0]=r.x,C[Z+te+1]=r.y,C[Z+te+2]=r.z,C[Z+te+3]=0),_===!0&&(r.fromBufferAttribute(j,$),C[Z+te+4]=r.x,C[Z+te+5]=r.y,C[Z+te+6]=r.z,C[Z+te+7]=0),g===!0&&(r.fromBufferAttribute(q,$),C[Z+te+8]=r.x,C[Z+te+9]=r.y,C[Z+te+10]=r.z,C[Z+te+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new ke(A,R)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ZT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const W0=new qt,ym=new H0(1,1),j0=new L0,X0=new MM,$0=new B0,Sm=[],Em=[],Mm=new Float32Array(16),wm=new Float32Array(9),Tm=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sm[r];if(s===void 0&&(s=new Float32Array(r),Sm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function du(t,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function nA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Tm.set(i),t.uniformMatrix2fv(this.addr,!1,Tm),Pt(n,i)}}function iA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;wm.set(i),t.uniformMatrix3fv(this.addr,!1,wm),Pt(n,i)}}function rA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Mm.set(i),t.uniformMatrix4fv(this.addr,!1,Mm),Pt(n,i)}}function sA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function uA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function hA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ym.compareFunction=b0,s=ym):s=W0,n.setTexture2D(e||s,r)}function pA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||X0,r)}function mA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$0,r)}function gA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||j0,r)}function vA(t){switch(t){case 5126:return QT;case 35664:return JT;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return aA;case 35669:case 35673:return lA;case 5125:return uA;case 36294:return cA;case 36295:return dA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function _A(t,e){t.uniform1fv(this.addr,e)}function xA(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function yA(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function SA(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function EA(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MA(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wA(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TA(t,e){t.uniform1iv(this.addr,e)}function AA(t,e){t.uniform2iv(this.addr,e)}function CA(t,e){t.uniform3iv(this.addr,e)}function RA(t,e){t.uniform4iv(this.addr,e)}function bA(t,e){t.uniform1uiv(this.addr,e)}function PA(t,e){t.uniform2uiv(this.addr,e)}function LA(t,e){t.uniform3uiv(this.addr,e)}function DA(t,e){t.uniform4uiv(this.addr,e)}function NA(t,e,n){const i=this.cache,r=e.length,s=du(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||W0,s[o])}function IA(t,e,n){const i=this.cache,r=e.length,s=du(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||X0,s[o])}function UA(t,e,n){const i=this.cache,r=e.length,s=du(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||$0,s[o])}function FA(t,e,n){const i=this.cache,r=e.length,s=du(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||j0,s[o])}function kA(t){switch(t){case 5126:return _A;case 35664:return xA;case 35665:return yA;case 35666:return SA;case 35674:return EA;case 35675:return MA;case 35676:return wA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return CA;case 35669:case 35673:return RA;case 5125:return bA;case 36294:return PA;case 36295:return LA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return FA}}class OA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vA(n.type)}}class BA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kA(n.type)}}class zA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function HA(t,e,n){const i=t.name,r=i.length;for(xc.lastIndex=0;;){const s=xc.exec(i),o=xc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Am(n,u===void 0?new OA(a,t,e):new BA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new zA(a),Am(n,f)),n=f}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);HA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const VA=37297;let GA=0;function WA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Rm=new ze;function jA(t){Qe._getMatrix(Rm,Qe.workingColorSpace,t);const e=`mat3( ${Rm.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Ol:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+WA(t.getShaderSource(e),a)}else return s}function XA(t,e){const n=jA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function $A(t,e){let n;switch(e){case KE:n="Linear";break;case ZE:n="Reinhard";break;case QE:n="Cineon";break;case JE:n="ACESFilmic";break;case tM:n="AgX";break;case nM:n="Neutral";break;case eM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $a=new z;function YA(){Qe.getLuminanceCoefficients($a);const t=$a.x.toFixed(4),e=$a.y.toFixed(4),n=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function KA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function Pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(t){return t.replace(QA,eC)}const JA=new Map;function eC(t,e){let n=He[e];if(n===void 0){const i=JA.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return af(n)}const tC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(t){return t.replace(tC,nC)}function nC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function rC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Ps:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function oC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case YE:e="ENVMAP_BLENDING_MIX";break;case qE:e="ENVMAP_BLENDING_ADD";break}return e}function aC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=iC(n),u=rC(n),d=sC(n),f=oC(n),h=aC(n),p=qA(n),v=KA(s),_=r.createProgram();let g,c,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ao).join(`
`),g.length>0&&(g+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ao).join(`
`),c.length>0&&(c+=`
`)):(g=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),c=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?He.tonemapping_pars_fragment:"",n.toneMapping!==Ji?$A("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,XA("linearToOutputTexel",n.outputColorSpace),YA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=af(o),o=Pm(o,n),o=Lm(o,n),a=af(a),a=Pm(a,n),a=Lm(a,n),o=Dm(o),a=Dm(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,c=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const y=x+g+o,S=x+c+a,A=Cm(r,r.VERTEX_SHADER,y),R=Cm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(N){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(_)||"",j=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(R)||"",Z=V.trim(),$=j.trim(),te=q.trim();let I=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,A,R);else{const J=bm(r,A,"vertex"),le=bm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Z+`
`+J+`
`+le)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||te==="")&&(K=!1);K&&(N.diagnostics={runnable:I,programLog:Z,vertexShader:{log:$,prefix:g},fragmentShader:{log:te,prefix:c}})}r.deleteShader(A),r.deleteShader(R),L=new fl(r,_),w=ZA(r,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,VA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let uC=0;class cC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dC(e),n.set(e,i)),i}}class dC{constructor(e){this.id=uC++,this.code=e,this.usedTimes=0}}function fC(t,e,n,i,r,s,o){const a=new N0,l=new cC,u=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function g(w,E,N,V,j){const q=V.fog,Z=j.geometry,$=w.isMeshStandardMaterial?V.environment:null,te=(w.isMeshStandardMaterial?n:e).get(w.envMap||$),I=te&&te.mapping===uu?te.image.height:null,K=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const J=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=J!==void 0?J.length:0;let Te=0;Z.morphAttributes.position!==void 0&&(Te=1),Z.morphAttributes.normal!==void 0&&(Te=2),Z.morphAttributes.color!==void 0&&(Te=3);let Ye,$e,Ge,Y;if(K){const et=Kn[K];Ye=et.vertexShader,$e=et.fragmentShader}else Ye=w.vertexShader,$e=w.fragmentShader,l.update(w),Ge=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const ee=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),Ne=j.isInstancedMesh===!0,Ae=j.isBatchedMesh===!0,We=!!w.map,Dt=!!w.matcap,P=!!te,st=!!w.aoMap,Ue=!!w.lightMap,Pe=!!w.bumpMap,Se=!!w.normalMap,Ke=!!w.displacementMap,ye=!!w.emissiveMap,Oe=!!w.metalnessMap,Et=!!w.roughnessMap,dt=w.anisotropy>0,T=w.clearcoat>0,m=w.dispersion>0,D=w.iridescence>0,B=w.sheen>0,X=w.transmission>0,H=dt&&!!w.anisotropyMap,pe=T&&!!w.clearcoatMap,ae=T&&!!w.clearcoatNormalMap,_e=T&&!!w.clearcoatRoughnessMap,Ee=D&&!!w.iridescenceMap,se=D&&!!w.iridescenceThicknessMap,he=B&&!!w.sheenColorMap,De=B&&!!w.sheenRoughnessMap,Ce=!!w.specularMap,de=!!w.specularColorMap,Be=!!w.specularIntensityMap,U=X&&!!w.transmissionMap,oe=X&&!!w.thicknessMap,ue=!!w.gradientMap,xe=!!w.alphaMap,ie=w.alphaTest>0,Q=!!w.alphaHash,we=!!w.extensions;let Fe=Ji;w.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const ot={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:$e,defines:w.defines,customVertexShaderID:Ge,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&j._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&j.instanceColor!==null,instancingMorph:Ne&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ls,alphaToCoverage:!!w.alphaToCoverage,map:We,matcap:Dt,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:I,aoMap:st,lightMap:Ue,bumpMap:Pe,normalMap:Se,displacementMap:h&&Ke,emissiveMap:ye,normalMapObjectSpace:Se&&w.normalMapType===aM,normalMapTangentSpace:Se&&w.normalMapType===oM,metalnessMap:Oe,roughnessMap:Et,anisotropy:dt,anisotropyMap:H,clearcoat:T,clearcoatMap:pe,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,dispersion:m,iridescence:D,iridescenceMap:Ee,iridescenceThicknessMap:se,sheen:B,sheenColorMap:he,sheenRoughnessMap:De,specularMap:Ce,specularColorMap:de,specularIntensityMap:Be,transmission:X,transmissionMap:U,thicknessMap:oe,gradientMap:ue,opaque:w.transparent===!1&&w.blending===xs&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:Q,combine:w.combine,mapUv:We&&_(w.map.channel),aoMapUv:st&&_(w.aoMap.channel),lightMapUv:Ue&&_(w.lightMap.channel),bumpMapUv:Pe&&_(w.bumpMap.channel),normalMapUv:Se&&_(w.normalMap.channel),displacementMapUv:Ke&&_(w.displacementMap.channel),emissiveMapUv:ye&&_(w.emissiveMap.channel),metalnessMapUv:Oe&&_(w.metalnessMap.channel),roughnessMapUv:Et&&_(w.roughnessMap.channel),anisotropyMapUv:H&&_(w.anisotropyMap.channel),clearcoatMapUv:pe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(w.sheenRoughnessMap.channel),specularMapUv:Ce&&_(w.specularMap.channel),specularColorMapUv:de&&_(w.specularColorMap.channel),specularIntensityMapUv:Be&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:oe&&_(w.thicknessMap.channel),alphaMapUv:xe&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Se||dt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(We||xe),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:j.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:We&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===it,decodeVideoTextureEmissive:ye&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===hi,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:we&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&w.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ot.vertexUv1s=u.has(1),ot.vertexUv2s=u.has(2),ot.vertexUv3s=u.has(3),u.clear(),ot}function c(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)E.push(N),E.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(x(E,w),y(E,w),E.push(t.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function x(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const E=v[w.type];let N;if(E){const V=Kn[E];N=FM.clone(V.uniforms)}else N=w.uniforms;return N}function A(w,E){let N;for(let V=0,j=d.length;V<j;V++){const q=d[V];if(q.cacheKey===E){N=q,++N.usedTimes;break}}return N===void 0&&(N=new lC(t,E,w,s),d.push(N)),N}function R(w){if(--w.usedTimes===0){const E=d.indexOf(w);d[E]=d[d.length-1],d.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:S,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:d,dispose:L}}function hC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Um(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,_,g){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:_,group:g},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=v,c.renderOrder=f.renderOrder,c.z=_,c.group=g),e++,c}function a(f,h,p,v,_,g){const c=o(f,h,p,v,_,g);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(f,h,p,v,_,g){const c=o(f,h,p,v,_,g);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(f,h){n.length>1&&n.sort(f||pC),i.length>1&&i.sort(h||Im),r.length>1&&r.sort(h||Im)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function mC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Um,t.set(i,[o])):r>=s.length?(o=new Um,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Je};break;case"SpotLight":n={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function vC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _C=0;function xC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yC(t){const e=new gC,n=vC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new At,o=new At;function a(u){let d=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,_=0,g=0,c=0,x=0,y=0,S=0,A=0,R=0,C=0;u.sort(xC);for(let w=0,E=u.length;w<E;w++){const N=u[w],V=N.color,j=N.intensity,q=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*j,f+=V.g*j,h+=V.b*j;else if(N.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(N.sh.coefficients[$],j);C++}else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const te=N.shadow,I=n.get(N);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=N.shadow.matrix,x++}i.directional[p]=$,p++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(V).multiplyScalar(j),$.distance=q,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,i.spot[_]=$;const te=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,te.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[_]=te.matrix,N.castShadow){const I=n.get(N);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=Z,S++}_++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(V).multiplyScalar(j),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=$,g++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const te=N.shadow,I=n.get(N);I.shadowIntensity=te.intensity,I.shadowBias=te.bias,I.shadowNormalBias=te.normalBias,I.shadowRadius=te.radius,I.shadowMapSize=te.mapSize,I.shadowCameraNear=te.camera.near,I.shadowCameraFar=te.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=N.shadow.matrix,y++}i.point[v]=$,v++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(j),$.groundColor.copy(N.groundColor).multiplyScalar(j),i.hemi[c]=$,c++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==c||L.numDirectionalShadows!==x||L.numPointShadows!==y||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=p,L.pointLength=v,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=c,L.numDirectionalShadows=x,L.numPointShadows=y,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=C,i.version=_C++)}function l(u,d){let f=0,h=0,p=0,v=0,_=0;const g=d.matrixWorldInverse;for(let c=0,x=u.length;c<x;c++){const y=u[c];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Fm(t){const e=new yC(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function SC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fm(t),e.set(r,[a])):s>=o.length?(a=new Fm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const EC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wC(t,e,n){let i=new z0;const r=new ke,s=new ke,o=new St,a=new qM({depthPacking:sM}),l=new KM,u={},d=n.maxTextureSize,f={[nr]:an,[an]:nr,[hi]:hi},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:EC,fragmentShader:MC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new bi;v.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rn(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_0;let c=this.type;this.render=function(R,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const w=t.getRenderTarget(),E=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Qi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const j=c!==ci&&this.type===ci,q=c===ci&&this.type!==ci;for(let Z=0,$=R.length;Z<$;Z++){const te=R[Z],I=te.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||j===!0||q===!0){const le=this.type!==ci?{minFilter:gn,magFilter:gn}:{};I.map!==null&&I.map.dispose(),I.map=new ir(r.x,r.y,le),I.map.texture.name=te.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let le=0;le<J;le++){const Te=I.getViewport(le);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),V.viewport(o),I.updateMatrices(te,le),i=I.getFrustum(),S(C,L,I.camera,te,this.type)}I.isPointLightShadow!==!0&&this.type===ci&&x(I,L),I.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(w,E,N)};function x(R,C){const L=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ir(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,L,h,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,L,p,_,null)}function y(R,C,L,w){let E=null;const N=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const V=E.uuid,j=C.uuid;let q=u[V];q===void 0&&(q={},u[V]=q);let Z=q[j];Z===void 0&&(Z=E.clone(),q[j]=Z,C.addEventListener("dispose",A)),E=Z}if(E.visible=C.visible,E.wireframe=C.wireframe,w===ci?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=t.properties.get(E);V.light=L}return E}function S(R,C,L,w,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===ci)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const j=e.update(R),q=R.material;if(Array.isArray(q)){const Z=j.groups;for(let $=0,te=Z.length;$<te;$++){const I=Z[$],K=q[I.materialIndex];if(K&&K.visible){const J=y(R,K,w,E);R.onBeforeShadow(t,R,C,L,j,J,I),t.renderBufferDirect(L,null,j,J,R,I),R.onAfterShadow(t,R,C,L,j,J,I)}}}else if(q.visible){const Z=y(R,q,w,E);R.onBeforeShadow(t,R,C,L,j,Z,null),t.renderBufferDirect(L,null,j,Z,R,null),R.onAfterShadow(t,R,C,L,j,Z,null)}}const V=R.children;for(let j=0,q=V.length;j<q;j++)S(V[j],C,L,w,E)}function A(R){R.target.removeEventListener("dispose",A);for(const L in u){const w=u[L],E=R.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const TC={[yd]:Sd,[Ed]:Td,[Md]:Ad,[Rs]:wd,[Sd]:yd,[Td]:Ed,[Ad]:Md,[wd]:Rs};function AC(t,e){function n(){let U=!1;const oe=new St;let ue=null;const xe=new St(0,0,0,0);return{setMask:function(ie){ue!==ie&&!U&&(t.colorMask(ie,ie,ie,ie),ue=ie)},setLocked:function(ie){U=ie},setClear:function(ie,Q,we,Fe,ot){ot===!0&&(ie*=Fe,Q*=Fe,we*=Fe),oe.set(ie,Q,we,Fe),xe.equals(oe)===!1&&(t.clearColor(ie,Q,we,Fe),xe.copy(oe))},reset:function(){U=!1,ue=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,oe=!1,ue=null,xe=null,ie=null;return{setReversed:function(Q){if(oe!==Q){const we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=Q;const Fe=ie;ie=null,this.setClear(Fe)}},getReversed:function(){return oe},setTest:function(Q){Q?ee(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(Q){ue!==Q&&!U&&(t.depthMask(Q),ue=Q)},setFunc:function(Q){if(oe&&(Q=TC[Q]),xe!==Q){switch(Q){case yd:t.depthFunc(t.NEVER);break;case Sd:t.depthFunc(t.ALWAYS);break;case Ed:t.depthFunc(t.LESS);break;case Rs:t.depthFunc(t.LEQUAL);break;case Md:t.depthFunc(t.EQUAL);break;case wd:t.depthFunc(t.GEQUAL);break;case Td:t.depthFunc(t.GREATER);break;case Ad:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=Q}},setLocked:function(Q){U=Q},setClear:function(Q){ie!==Q&&(oe&&(Q=1-Q),t.clearDepth(Q),ie=Q)},reset:function(){U=!1,ue=null,xe=null,ie=null,oe=!1}}}function r(){let U=!1,oe=null,ue=null,xe=null,ie=null,Q=null,we=null,Fe=null,ot=null;return{setTest:function(et){U||(et?ee(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(et){oe!==et&&!U&&(t.stencilMask(et),oe=et)},setFunc:function(et,ri,$n){(ue!==et||xe!==ri||ie!==$n)&&(t.stencilFunc(et,ri,$n),ue=et,xe=ri,ie=$n)},setOp:function(et,ri,$n){(Q!==et||we!==ri||Fe!==$n)&&(t.stencilOp(et,ri,$n),Q=et,we=ri,Fe=$n)},setLocked:function(et){U=et},setClear:function(et){ot!==et&&(t.clearStencil(et),ot=et)},reset:function(){U=!1,oe=null,ue=null,xe=null,ie=null,Q=null,we=null,Fe=null,ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let d={},f={},h=new WeakMap,p=[],v=null,_=!1,g=null,c=null,x=null,y=null,S=null,A=null,R=null,C=new Je(0,0,0),L=0,w=!1,E=null,N=null,V=null,j=null,q=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(I)[1]),$=te>=1):I.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),$=te>=2);let K=null,J={};const le=t.getParameter(t.SCISSOR_BOX),Te=t.getParameter(t.VIEWPORT),Ye=new St().fromArray(le),$e=new St().fromArray(Te);function Ge(U,oe,ue,xe){const ie=new Uint8Array(4),Q=t.createTexture();t.bindTexture(U,Q),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ue;we++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(oe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Q}const Y={};Y[t.TEXTURE_2D]=Ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=Ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=Ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=Ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(t.DEPTH_TEST),o.setFunc(Rs),Pe(!1),Se(Op),ee(t.CULL_FACE),st(Qi);function ee(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function me(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Ne(U,oe){return f[U]!==oe?(t.bindFramebuffer(U,oe),f[U]=oe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=oe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ae(U,oe){let ue=p,xe=!1;if(U){ue=h.get(oe),ue===void 0&&(ue=[],h.set(oe,ue));const ie=U.textures;if(ue.length!==ie.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,we=ie.length;Q<we;Q++)ue[Q]=t.COLOR_ATTACHMENT0+Q;ue.length=ie.length,xe=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ue)}function We(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const Dt={[yr]:t.FUNC_ADD,[LE]:t.FUNC_SUBTRACT,[DE]:t.FUNC_REVERSE_SUBTRACT};Dt[NE]=t.MIN,Dt[IE]=t.MAX;const P={[UE]:t.ZERO,[FE]:t.ONE,[kE]:t.SRC_COLOR,[_d]:t.SRC_ALPHA,[GE]:t.SRC_ALPHA_SATURATE,[HE]:t.DST_COLOR,[BE]:t.DST_ALPHA,[OE]:t.ONE_MINUS_SRC_COLOR,[xd]:t.ONE_MINUS_SRC_ALPHA,[VE]:t.ONE_MINUS_DST_COLOR,[zE]:t.ONE_MINUS_DST_ALPHA,[WE]:t.CONSTANT_COLOR,[jE]:t.ONE_MINUS_CONSTANT_COLOR,[XE]:t.CONSTANT_ALPHA,[$E]:t.ONE_MINUS_CONSTANT_ALPHA};function st(U,oe,ue,xe,ie,Q,we,Fe,ot,et){if(U===Qi){_===!0&&(me(t.BLEND),_=!1);return}if(_===!1&&(ee(t.BLEND),_=!0),U!==PE){if(U!==g||et!==w){if((c!==yr||S!==yr)&&(t.blendEquation(t.FUNC_ADD),c=yr,S=yr),et)switch(U){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vd:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Bp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,y=null,A=null,R=null,C.set(0,0,0),L=0,g=U,w=et}return}ie=ie||oe,Q=Q||ue,we=we||xe,(oe!==c||ie!==S)&&(t.blendEquationSeparate(Dt[oe],Dt[ie]),c=oe,S=ie),(ue!==x||xe!==y||Q!==A||we!==R)&&(t.blendFuncSeparate(P[ue],P[xe],P[Q],P[we]),x=ue,y=xe,A=Q,R=we),(Fe.equals(C)===!1||ot!==L)&&(t.blendColor(Fe.r,Fe.g,Fe.b,ot),C.copy(Fe),L=ot),g=U,w=!1}function Ue(U,oe){U.side===hi?me(t.CULL_FACE):ee(t.CULL_FACE);let ue=U.side===an;oe&&(ue=!ue),Pe(ue),U.blending===xs&&U.transparent===!1?st(Qi):st(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const xe=U.stencilWrite;a.setTest(xe),xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(U){E!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),E=U)}function Se(U){U!==CE?(ee(t.CULL_FACE),U!==N&&(U===Op?t.cullFace(t.BACK):U===RE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),N=U}function Ke(U){U!==V&&($&&t.lineWidth(U),V=U)}function ye(U,oe,ue){U?(ee(t.POLYGON_OFFSET_FILL),(j!==oe||q!==ue)&&(t.polygonOffset(oe,ue),j=oe,q=ue)):me(t.POLYGON_OFFSET_FILL)}function Oe(U){U?ee(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function Et(U){U===void 0&&(U=t.TEXTURE0+Z-1),K!==U&&(t.activeTexture(U),K=U)}function dt(U,oe,ue){ue===void 0&&(K===null?ue=t.TEXTURE0+Z-1:ue=K);let xe=J[ue];xe===void 0&&(xe={type:void 0,texture:void 0},J[ue]=xe),(xe.type!==U||xe.texture!==oe)&&(K!==ue&&(t.activeTexture(ue),K=ue),t.bindTexture(U,oe||Y[U]),xe.type=U,xe.texture=oe)}function T(){const U=J[K];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function m(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(U){Ye.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ye.copy(U))}function De(U){$e.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),$e.copy(U))}function Ce(U,oe){let ue=u.get(oe);ue===void 0&&(ue=new WeakMap,u.set(oe,ue));let xe=ue.get(U);xe===void 0&&(xe=t.getUniformBlockIndex(oe,U.name),ue.set(U,xe))}function de(U,oe){const xe=u.get(oe).get(U);l.get(oe)!==xe&&(t.uniformBlockBinding(oe,xe,U.__bindingPointIndex),l.set(oe,xe))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},K=null,J={},f={},h=new WeakMap,p=[],v=null,_=!1,g=null,c=null,x=null,y=null,S=null,A=null,R=null,C=new Je(0,0,0),L=0,w=!1,E=null,N=null,V=null,j=null,q=null,Ye.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:me,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:We,setBlending:st,setMaterial:Ue,setFlipSided:Pe,setCullFace:Se,setLineWidth:Ke,setPolygonOffset:ye,setScissorTest:Oe,activeTexture:Et,bindTexture:dt,unbindTexture:T,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:Ee,texImage3D:se,updateUBOMapping:Ce,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:_e,texSubImage2D:B,texSubImage3D:X,compressedTexSubImage2D:H,compressedTexSubImage3D:pe,scissor:he,viewport:De,reset:Be}}function CC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,m){return p?new OffscreenCanvas(T,m):zl("canvas")}function _(T,m,D){let B=1;const X=dt(T);if((X.width>D||X.height>D)&&(B=D/Math.max(X.width,X.height)),B<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(B*X.width),pe=Math.floor(B*X.height);f===void 0&&(f=v(H,pe));const ae=m?v(H,pe):f;return ae.width=H,ae.height=pe,ae.getContext("2d").drawImage(T,0,0,H,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+H+"x"+pe+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),T;return T}function g(T){return T.generateMipmaps}function c(T){t.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(T,m,D,B,X=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=m;if(m===t.RED&&(D===t.FLOAT&&(H=t.R32F),D===t.HALF_FLOAT&&(H=t.R16F),D===t.UNSIGNED_BYTE&&(H=t.R8)),m===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(H=t.R8UI),D===t.UNSIGNED_SHORT&&(H=t.R16UI),D===t.UNSIGNED_INT&&(H=t.R32UI),D===t.BYTE&&(H=t.R8I),D===t.SHORT&&(H=t.R16I),D===t.INT&&(H=t.R32I)),m===t.RG&&(D===t.FLOAT&&(H=t.RG32F),D===t.HALF_FLOAT&&(H=t.RG16F),D===t.UNSIGNED_BYTE&&(H=t.RG8)),m===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(H=t.RG8UI),D===t.UNSIGNED_SHORT&&(H=t.RG16UI),D===t.UNSIGNED_INT&&(H=t.RG32UI),D===t.BYTE&&(H=t.RG8I),D===t.SHORT&&(H=t.RG16I),D===t.INT&&(H=t.RG32I)),m===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(H=t.RGB8UI),D===t.UNSIGNED_SHORT&&(H=t.RGB16UI),D===t.UNSIGNED_INT&&(H=t.RGB32UI),D===t.BYTE&&(H=t.RGB8I),D===t.SHORT&&(H=t.RGB16I),D===t.INT&&(H=t.RGB32I)),m===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),D===t.UNSIGNED_INT&&(H=t.RGBA32UI),D===t.BYTE&&(H=t.RGBA8I),D===t.SHORT&&(H=t.RGBA16I),D===t.INT&&(H=t.RGBA32I)),m===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(H=t.R11F_G11F_B10F)),m===t.RGBA){const pe=X?Ol:Qe.getTransfer(B);D===t.FLOAT&&(H=t.RGBA32F),D===t.HALF_FLOAT&&(H=t.RGBA16F),D===t.UNSIGNED_BYTE&&(H=pe===it?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function S(T,m){let D;return T?m===null||m===Ir||m===zo?D=t.DEPTH24_STENCIL8:m===Qn?D=t.DEPTH32F_STENCIL8:m===Bo&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Ir||m===zo?D=t.DEPTH_COMPONENT24:m===Qn?D=t.DEPTH_COMPONENT32F:m===Bo&&(D=t.DEPTH_COMPONENT16),D}function A(T,m){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==gn&&T.minFilter!==nn?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function R(T){const m=T.target;m.removeEventListener("dispose",R),L(m),m.isVideoTexture&&d.delete(m)}function C(T){const m=T.target;m.removeEventListener("dispose",C),E(m)}function L(T){const m=i.get(T);if(m.__webglInit===void 0)return;const D=T.source,B=h.get(D);if(B){const X=B[m.__cacheKey];X.usedTimes--,X.usedTimes===0&&w(T),Object.keys(B).length===0&&h.delete(D)}i.remove(T)}function w(T){const m=i.get(T);t.deleteTexture(m.__webglTexture);const D=T.source,B=h.get(D);delete B[m.__cacheKey],o.memory.textures--}function E(T){const m=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(m.__webglFramebuffer[B]))for(let X=0;X<m.__webglFramebuffer[B].length;X++)t.deleteFramebuffer(m.__webglFramebuffer[B][X]);else t.deleteFramebuffer(m.__webglFramebuffer[B]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[B])}else{if(Array.isArray(m.__webglFramebuffer))for(let B=0;B<m.__webglFramebuffer.length;B++)t.deleteFramebuffer(m.__webglFramebuffer[B]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let B=0;B<m.__webglColorRenderbuffer.length;B++)m.__webglColorRenderbuffer[B]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[B]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const D=T.textures;for(let B=0,X=D.length;B<X;B++){const H=i.get(D[B]);H.__webglTexture&&(t.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(D[B])}i.remove(T)}let N=0;function V(){N=0}function j(){const T=N;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),N+=1,T}function q(T){const m=[];return m.push(T.wrapS),m.push(T.wrapT),m.push(T.wrapR||0),m.push(T.magFilter),m.push(T.minFilter),m.push(T.anisotropy),m.push(T.internalFormat),m.push(T.format),m.push(T.type),m.push(T.generateMipmaps),m.push(T.premultiplyAlpha),m.push(T.flipY),m.push(T.unpackAlignment),m.push(T.colorSpace),m.join()}function Z(T,m){const D=i.get(T);if(T.isVideoTexture&&Oe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const B=T.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,T,m);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+m)}function $(T,m){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){Y(D,T,m);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+m)}function te(T,m){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){Y(D,T,m);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+m)}function I(T,m){const D=i.get(T);if(T.version>0&&D.__version!==T.version){ee(D,T,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+m)}const K={[bd]:t.REPEAT,[Hn]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},J={[gn]:t.NEAREST,[iM]:t.NEAREST_MIPMAP_NEAREST,[Ma]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Vu]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},le={[lM]:t.NEVER,[pM]:t.ALWAYS,[uM]:t.LESS,[b0]:t.LEQUAL,[cM]:t.EQUAL,[hM]:t.GEQUAL,[dM]:t.GREATER,[fM]:t.NOTEQUAL};function Te(T,m){if(m.type===Qn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===nn||m.magFilter===Vu||m.magFilter===Ma||m.magFilter===Tr||m.minFilter===nn||m.minFilter===Vu||m.minFilter===Ma||m.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,K[m.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,K[m.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,K[m.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,J[m.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,J[m.minFilter]),m.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,le[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===gn||m.minFilter!==Ma&&m.minFilter!==Tr||m.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ye(T,m){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",R));const B=m.source;let X=h.get(B);X===void 0&&(X={},h.set(B,X));const H=q(m);if(H!==T.__cacheKey){X[H]===void 0&&(X[H]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),X[H].usedTimes++;const pe=X[T.__cacheKey];pe!==void 0&&(X[T.__cacheKey].usedTimes--,pe.usedTimes===0&&w(m)),T.__cacheKey=H,T.__webglTexture=X[H].texture}return D}function $e(T,m,D){return Math.floor(Math.floor(T/D)/m)}function Ge(T,m,D,B){const H=T.updateRanges;if(H.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,D,B,m.data);else{H.sort((se,he)=>se.start-he.start);let pe=0;for(let se=1;se<H.length;se++){const he=H[pe],De=H[se],Ce=he.start+he.count,de=$e(De.start,m.width,4),Be=$e(he.start,m.width,4);De.start<=Ce+1&&de===Be&&$e(De.start+De.count-1,m.width,4)===de?he.count=Math.max(he.count,De.start+De.count-he.start):(++pe,H[pe]=De)}H.length=pe+1;const ae=t.getParameter(t.UNPACK_ROW_LENGTH),_e=t.getParameter(t.UNPACK_SKIP_PIXELS),Ee=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let se=0,he=H.length;se<he;se++){const De=H[se],Ce=Math.floor(De.start/4),de=Math.ceil(De.count/4),Be=Ce%m.width,U=Math.floor(Ce/m.width),oe=de,ue=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Be,U,oe,ue,D,B,m.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function Y(T,m,D){let B=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(B=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(B=t.TEXTURE_3D);const X=Ye(T,m),H=m.source;n.bindTexture(B,T.__webglTexture,t.TEXTURE0+D);const pe=i.get(H);if(H.version!==pe.__version||X===!0){n.activeTexture(t.TEXTURE0+D);const ae=Qe.getPrimaries(Qe.workingColorSpace),_e=m.colorSpace===Hi?null:Qe.getPrimaries(m.colorSpace),Ee=m.colorSpace===Hi||ae===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let se=_(m.image,!1,r.maxTextureSize);se=Et(m,se);const he=s.convert(m.format,m.colorSpace),De=s.convert(m.type);let Ce=y(m.internalFormat,he,De,m.colorSpace,m.isVideoTexture);Te(B,m);let de;const Be=m.mipmaps,U=m.isVideoTexture!==!0,oe=pe.__version===void 0||X===!0,ue=H.dataReady,xe=A(m,se);if(m.isDepthTexture)Ce=S(m.format===Vo,m.type),oe&&(U?n.texStorage2D(t.TEXTURE_2D,1,Ce,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ce,se.width,se.height,0,he,De,null));else if(m.isDataTexture)if(Be.length>0){U&&oe&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,Be[0].width,Be[0].height);for(let ie=0,Q=Be.length;ie<Q;ie++)de=Be[ie],U?ue&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,he,De,de.data):n.texImage2D(t.TEXTURE_2D,ie,Ce,de.width,de.height,0,he,De,de.data);m.generateMipmaps=!1}else U?(oe&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,se.width,se.height),ue&&Ge(m,se,he,De)):n.texImage2D(t.TEXTURE_2D,0,Ce,se.width,se.height,0,he,De,se.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){U&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ce,Be[0].width,Be[0].height,se.depth);for(let ie=0,Q=Be.length;ie<Q;ie++)if(de=Be[ie],m.format!==Cn)if(he!==null)if(U){if(ue)if(m.layerUpdates.size>0){const we=fm(de.width,de.height,m.format,m.type);for(const Fe of m.layerUpdates){const ot=de.data.subarray(Fe*we/de.data.BYTES_PER_ELEMENT,(Fe+1)*we/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Fe,de.width,de.height,1,he,ot)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,se.depth,he,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Ce,de.width,de.height,se.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,se.depth,he,De,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Ce,de.width,de.height,se.depth,0,he,De,de.data)}else{U&&oe&&n.texStorage2D(t.TEXTURE_2D,xe,Ce,Be[0].width,Be[0].height);for(let ie=0,Q=Be.length;ie<Q;ie++)de=Be[ie],m.format!==Cn?he!==null?U?ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,he,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ue&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,he,De,de.data):n.texImage2D(t.TEXTURE_2D,ie,Ce,de.width,de.height,0,he,De,de.data)}else if(m.isDataArrayTexture)if(U){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ce,se.width,se.height,se.depth),ue)if(m.layerUpdates.size>0){const ie=fm(se.width,se.height,m.format,m.type);for(const Q of m.layerUpdates){const we=se.data.subarray(Q*ie/se.data.BYTES_PER_ELEMENT,(Q+1)*ie/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,he,De,we)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,De,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,he,De,se.data);else if(m.isData3DTexture)U?(oe&&n.texStorage3D(t.TEXTURE_3D,xe,Ce,se.width,se.height,se.depth),ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,De,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,he,De,se.data);else if(m.isFramebufferTexture){if(oe)if(U)n.texStorage2D(t.TEXTURE_2D,xe,Ce,se.width,se.height);else{let ie=se.width,Q=se.height;for(let we=0;we<xe;we++)n.texImage2D(t.TEXTURE_2D,we,Ce,ie,Q,0,he,De,null),ie>>=1,Q>>=1}}else if(Be.length>0){if(U&&oe){const ie=dt(Be[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ce,ie.width,ie.height)}for(let ie=0,Q=Be.length;ie<Q;ie++)de=Be[ie],U?ue&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he,De,de):n.texImage2D(t.TEXTURE_2D,ie,Ce,he,De,de);m.generateMipmaps=!1}else if(U){if(oe){const ie=dt(se);n.texStorage2D(t.TEXTURE_2D,xe,Ce,ie.width,ie.height)}ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,De,se)}else n.texImage2D(t.TEXTURE_2D,0,Ce,he,De,se);g(m)&&c(B),pe.__version=H.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function ee(T,m,D){if(m.image.length!==6)return;const B=Ye(T,m),X=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+D);const H=i.get(X);if(X.version!==H.__version||B===!0){n.activeTexture(t.TEXTURE0+D);const pe=Qe.getPrimaries(Qe.workingColorSpace),ae=m.colorSpace===Hi?null:Qe.getPrimaries(m.colorSpace),_e=m.colorSpace===Hi||pe===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ee=m.isCompressedTexture||m.image[0].isCompressedTexture,se=m.image[0]&&m.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!Ee&&!se?he[Q]=_(m.image[Q],!0,r.maxCubemapSize):he[Q]=se?m.image[Q].image:m.image[Q],he[Q]=Et(m,he[Q]);const De=he[0],Ce=s.convert(m.format,m.colorSpace),de=s.convert(m.type),Be=y(m.internalFormat,Ce,de,m.colorSpace),U=m.isVideoTexture!==!0,oe=H.__version===void 0||B===!0,ue=X.dataReady;let xe=A(m,De);Te(t.TEXTURE_CUBE_MAP,m);let ie;if(Ee){U&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Be,De.width,De.height);for(let Q=0;Q<6;Q++){ie=he[Q].mipmaps;for(let we=0;we<ie.length;we++){const Fe=ie[we];m.format!==Cn?Ce!==null?U?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,Fe.width,Fe.height,Ce,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,Fe.width,Fe.height,Ce,de,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Be,Fe.width,Fe.height,0,Ce,de,Fe.data)}}}else{if(ie=m.mipmaps,U&&oe){ie.length>0&&xe++;const Q=dt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Be,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,Ce,de,he[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,he[Q].width,he[Q].height,0,Ce,de,he[Q].data);for(let we=0;we<ie.length;we++){const ot=ie[we].image[Q].image;U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,ot.width,ot.height,Ce,de,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Be,ot.width,ot.height,0,Ce,de,ot.data)}}else{U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,de,he[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,Ce,de,he[Q]);for(let we=0;we<ie.length;we++){const Fe=ie[we];U?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Ce,de,Fe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Be,Ce,de,Fe.image[Q])}}}g(m)&&c(t.TEXTURE_CUBE_MAP),H.__version=X.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function me(T,m,D,B,X,H){const pe=s.convert(D.format,D.colorSpace),ae=s.convert(D.type),_e=y(D.internalFormat,pe,ae,D.colorSpace),Ee=i.get(m),se=i.get(D);if(se.__renderTarget=m,!Ee.__hasExternalTextures){const he=Math.max(1,m.width>>H),De=Math.max(1,m.height>>H);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,H,_e,he,De,m.depth,0,pe,ae,null):n.texImage2D(X,H,_e,he,De,0,pe,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),ye(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,X,se.__webglTexture,0,Ke(m)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,B,X,se.__webglTexture,H),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(T,m,D){if(t.bindRenderbuffer(t.RENDERBUFFER,T),m.depthBuffer){const B=m.depthTexture,X=B&&B.isDepthTexture?B.type:null,H=S(m.stencilBuffer,X),pe=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Ke(m);ye(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,H,m.width,m.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,H,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,H,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,T)}else{const B=m.textures;for(let X=0;X<B.length;X++){const H=B[X],pe=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),_e=y(H.internalFormat,pe,ae,H.colorSpace),Ee=Ke(m);D&&ye(m)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,_e,m.width,m.height):ye(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,_e,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,_e,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(T,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(m.depthTexture);B.__renderTarget=m,(!B.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Z(m.depthTexture,0);const X=B.__webglTexture,H=Ke(m);if(m.depthTexture.format===Ho)ye(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(m.depthTexture.format===Vo)ye(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function We(T){const m=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){const B=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),B){const X=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,B.removeEventListener("dispose",X)};B.addEventListener("dispose",X),m.__depthDisposeCallback=X}m.__boundDepthTexture=B}if(T.depthTexture&&!m.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const B=T.texture.mipmaps;B&&B.length>0?Ae(m.__webglFramebuffer[0],T):Ae(m.__webglFramebuffer,T)}else if(D){m.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[B]),m.__webglDepthbuffer[B]===void 0)m.__webglDepthbuffer[B]=t.createRenderbuffer(),Ne(m.__webglDepthbuffer[B],T,!1);else{const X=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer[B];t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,H)}}else{const B=T.texture.mipmaps;if(B&&B.length>0?n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),Ne(m.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,H)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Dt(T,m,D){const B=i.get(T);m!==void 0&&me(B.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&We(T)}function P(T){const m=T.texture,D=i.get(T),B=i.get(m);T.addEventListener("dispose",C);const X=T.textures,H=T.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(B.__webglTexture===void 0&&(B.__webglTexture=t.createTexture()),B.__version=m.version,o.memory.textures++),H){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let _e=0;_e<m.mipmaps.length;_e++)D.__webglFramebuffer[ae][_e]=t.createFramebuffer()}else D.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<m.mipmaps.length;ae++)D.__webglFramebuffer[ae]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(pe)for(let ae=0,_e=X.length;ae<_e;ae++){const Ee=i.get(X[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<X.length;ae++){const _e=X[ae];D.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Ee=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),he=y(_e.internalFormat,Ee,se,_e.colorSpace,T.isXRRenderTarget===!0),De=Ke(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,he,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(D.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(H){n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),Te(t.TEXTURE_CUBE_MAP,m);for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0)for(let _e=0;_e<m.mipmaps.length;_e++)me(D.__webglFramebuffer[ae][_e],T,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e);else me(D.__webglFramebuffer[ae],T,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(m)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let ae=0,_e=X.length;ae<_e;ae++){const Ee=X[ae],se=i.get(Ee);let he=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,se.__webglTexture),Te(he,Ee),me(D.__webglFramebuffer,T,Ee,t.COLOR_ATTACHMENT0+ae,he,0),g(Ee)&&c(he)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,B.__webglTexture),Te(ae,m),m.mipmaps&&m.mipmaps.length>0)for(let _e=0;_e<m.mipmaps.length;_e++)me(D.__webglFramebuffer[_e],T,m,t.COLOR_ATTACHMENT0,ae,_e);else me(D.__webglFramebuffer,T,m,t.COLOR_ATTACHMENT0,ae,0);g(m)&&c(ae),n.unbindTexture()}T.depthBuffer&&We(T)}function st(T){const m=T.textures;for(let D=0,B=m.length;D<B;D++){const X=m[D];if(g(X)){const H=x(T),pe=i.get(X).__webglTexture;n.bindTexture(H,pe),c(H),n.unbindTexture()}}}const Ue=[],Pe=[];function Se(T){if(T.samples>0){if(ye(T)===!1){const m=T.textures,D=T.width,B=T.height;let X=t.COLOR_BUFFER_BIT;const H=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(T),ae=m.length>1;if(ae)for(let Ee=0;Ee<m.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ee=0;Ee<m.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ee]);const se=i.get(m[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,D,B,0,0,D,B,X,t.NEAREST),l===!0&&(Ue.length=0,Pe.length=0,Ue.push(t.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ue.push(H),Pe.push(H),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Pe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<m.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ee]);const se=i.get(m[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const m=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function Ke(T){return Math.min(r.maxSamples,T.samples)}function ye(T){const m=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Oe(T){const m=o.render.frame;d.get(T)!==m&&(d.set(T,m),T.update())}function Et(T,m){const D=T.colorSpace,B=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Ls&&D!==Hi&&(Qe.getTransfer(D)===it?(B!==Cn||X!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),m}function dt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=I,this.rebindTextures=Dt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ye}function RC(t,e){function n(i,r=Hi){let s;const o=Qe.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===ch)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===M0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===w0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===S0)return t.BYTE;if(i===E0)return t.SHORT;if(i===Bo)return t.UNSIGNED_SHORT;if(i===uh)return t.INT;if(i===Ir)return t.UNSIGNED_INT;if(i===Qn)return t.FLOAT;if(i===Os)return t.HALF_FLOAT;if(i===T0)return t.ALPHA;if(i===A0)return t.RGB;if(i===Cn)return t.RGBA;if(i===Ho)return t.DEPTH_COMPONENT;if(i===Vo)return t.DEPTH_STENCIL;if(i===C0)return t.RED;if(i===fh)return t.RED_INTEGER;if(i===R0)return t.RG;if(i===hh)return t.RG_INTEGER;if(i===ph)return t.RGBA_INTEGER;if(i===ll||i===ul||i===cl||i===dl)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ld||i===Dd||i===Nd||i===Id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ld)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Fd||i===kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Fd)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Od||i===Bd||i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===Yd||i===qd||i===Kd||i===Zd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Od)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$d)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qd||i===Jd||i===ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qd)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tf||i===nf||i===rf||i===sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const bC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new V0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ci({vertexShader:bC,fragmentShader:PC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rn(new Rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DC extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",g=new LC,c={},x=n.getContextAttributes();let y=null,S=null;const A=[],R=[],C=new ke;let L=null;const w=new Bn;w.viewport=new St;const E=new Bn;E.viewport=new St;const N=[w,E],V=new QM;let j=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=A[Y];return ee===void 0&&(ee=new dc,A[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=A[Y];return ee===void 0&&(ee=new dc,A[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=A[Y];return ee===void 0&&(ee=new dc,A[Y]=ee),ee.getHandSpace()};function Z(Y){const ee=R.indexOf(Y.inputSource);if(ee===-1)return;const me=A[ee];me!==void 0&&(me.update(Y.inputSource,Y.frame,u||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",te);for(let Y=0;Y<A.length;Y++){const ee=R[Y];ee!==null&&(R[Y]=null,A[Y].disconnect(ee))}j=null,q=null,g.reset();for(const Y in c)delete c[Y];e.setRenderTarget(y),p=null,h=null,f=null,r=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,Ae=null;x.depth&&(Ae=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=x.stencil?Vo:Ho,Ne=x.stencil?zo:Ir);const We={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new ir(h.textureWidth,h.textureHeight,{format:Cn,type:Ti,depthTexture:new H0(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ir(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(Y){for(let ee=0;ee<Y.removed.length;ee++){const me=Y.removed[ee],Ne=R.indexOf(me);Ne>=0&&(R[Ne]=null,A[Ne].disconnect(me))}for(let ee=0;ee<Y.added.length;ee++){const me=Y.added[ee];let Ne=R.indexOf(me);if(Ne===-1){for(let We=0;We<A.length;We++)if(We>=R.length){R.push(me),Ne=We;break}else if(R[We]===null){R[We]=me,Ne=We;break}if(Ne===-1)break}const Ae=A[Ne];Ae&&Ae.connect(me)}}const I=new z,K=new z;function J(Y,ee,me){I.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const Ne=I.distanceTo(K),Ae=ee.projectionMatrix.elements,We=me.projectionMatrix.elements,Dt=Ae[14]/(Ae[10]-1),P=Ae[14]/(Ae[10]+1),st=(Ae[9]+1)/Ae[5],Ue=(Ae[9]-1)/Ae[5],Pe=(Ae[8]-1)/Ae[0],Se=(We[8]+1)/We[0],Ke=Dt*Pe,ye=Dt*Se,Oe=Ne/(-Pe+Se),Et=Oe*-Pe;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Et),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const dt=Dt+Oe,T=P+Oe,m=Ke-Et,D=ye+(Ne-Et),B=st*P/T*dt,X=Ue*P/T*dt;Y.projectionMatrix.makePerspective(m,D,B,X,dt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,me=Y.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(me=g.depthFar)),V.near=E.near=w.near=ee,V.far=E.far=w.far=me,(j!==V.near||q!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),j=V.near,q=V.far),V.layers.mask=Y.layers.mask|6,w.layers.mask=V.layers.mask&3,E.layers.mask=V.layers.mask&5;const Ne=Y.parent,Ae=V.cameras;le(V,Ne);for(let We=0;We<Ae.length;We++)le(Ae[We],Ne);Ae.length===2?J(V,w,E):V.projectionMatrix.copy(w.projectionMatrix),Te(Y,V,Ne)};function Te(Y,ee,me){me===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=of*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Y){return c[Y]};let Ye=null;function $e(Y,ee){if(d=ee.getViewerPose(u||o),v=ee,d!==null){const me=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ne=!1;me.length!==V.cameras.length&&(V.cameras.length=0,Ne=!0);for(let P=0;P<me.length;P++){const st=me[P];let Ue=null;if(p!==null)Ue=p.getViewport(st);else{const Se=f.getViewSubImage(h,st);Ue=Se.viewport,P===0&&(e.setRenderTargetTextures(S,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(S))}let Pe=N[P];Pe===void 0&&(Pe=new Bn,Pe.layers.enable(P),Pe.viewport=new St,N[P]=Pe),Pe.matrix.fromArray(st.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(st.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),P===0&&(V.matrix.copy(Pe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ne===!0&&V.cameras.push(Pe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const P=f.getDepthInformation(me[0]);P&&P.isValid&&P.texture&&g.init(P,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<me.length;P++){const st=me[P].camera;if(st){let Ue=c[st];Ue||(Ue=new V0,c[st]=Ue);const Pe=f.getCameraImage(st);Ue.sourceTexture=Pe}}}}for(let me=0;me<A.length;me++){const Ne=R[me],Ae=A[me];Ne!==null&&Ae!==void 0&&Ae.update(Ne,ee,u||o)}Ye&&Ye(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Ge=new G0;Ge.setAnimationLoop($e),this.setAnimationLoop=function(Y){Ye=Y},this.dispose=function(){}}}const mr=new Ai,NC=new At;function IC(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,O0(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,x,y,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(g,c):c.isMeshToonMaterial?(s(g,c),f(g,c)):c.isMeshPhongMaterial?(s(g,c),d(g,c)):c.isMeshStandardMaterial?(s(g,c),h(g,c),c.isMeshPhysicalMaterial&&p(g,c,S)):c.isMeshMatcapMaterial?(s(g,c),v(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),_(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(o(g,c),c.isLineDashedMaterial&&a(g,c)):c.isPointsMaterial?l(g,c,x,y):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===an&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===an&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const x=e.get(c),y=x.envMap,S=x.envMapRotation;y&&(g.envMap.value=y,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.envMapRotation.value.setFromMatrix4(NC.makeRotationFromEuler(mr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,g.lightMapTransform)),c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function o(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function a(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,x,y){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*x,g.scale.value=y*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function d(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function f(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function h(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function p(g,c,x){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===an&&g.clearcoatNormalScale.value.negate())),c.dispersion>0&&(g.dispersion.value=c.dispersion),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,c){c.matcap&&(g.matcap.value=c.matcap)}function _(g,c){const x=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const S=y.program;i.uniformBlockBinding(x,S)}function u(x,y){let S=r[x.id];S===void 0&&(v(x),S=d(x),r[x.id]=S,x.addEventListener("dispose",g));const A=y.program;i.updateUBOMapping(x,A);const R=e.render.frame;s[x.id]!==R&&(h(x),s[x.id]=R)}function d(x){const y=f();x.__bindingPointIndex=y;const S=t.createBuffer(),A=x.__size,R=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],S=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let R=0,C=S.length;R<C;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,E=L.length;w<E;w++){const N=L[w];if(p(N,R,w,A)===!0){const V=N.__offset,j=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let Z=0;Z<j.length;Z++){const $=j[Z],te=_($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,V+q,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,q),q+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,y,S,A){const R=x.value,C=y+"_"+S;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const L=A[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function v(x){const y=x.uniforms;let S=0;const A=16;for(let C=0,L=y.length;C<L;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,N=w.length;E<N;E++){const V=w[E],j=Array.isArray(V.value)?V.value:[V.value];for(let q=0,Z=j.length;q<Z;q++){const $=j[q],te=_($),I=S%A,K=I%te.boundary,J=I+K;S+=K,J!==0&&A-J<te.storage&&(S+=A-J),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=te.storage}}}const R=S%A;return R>0&&(S+=A-R),x.__size=S,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function c(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class FC{constructor(e={}){const{canvas:n=gM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),_=new Int32Array(4);let g=null,c=null;const x=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Mn;let R=0,C=0,L=null,w=-1,E=null;const N=new St,V=new St;let j=null;const q=new Je(0);let Z=0,$=n.width,te=n.height,I=1,K=null,J=null;const le=new St(0,0,$,te),Te=new St(0,0,$,te);let Ye=!1;const $e=new z0;let Ge=!1,Y=!1;const ee=new At,me=new z,Ne=new St,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Dt(){return L===null?I:1}let P=i;function st(M,F){return n.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",ie,!1),P===null){const F="webgl2";if(P=st(F,M),P===null)throw st(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,Pe,Se,Ke,ye,Oe,Et,dt,T,m,D,B,X,H,pe,ae,_e,Ee,se,he,De,Ce,de,Be;function U(){Ue=new XT(P),Ue.init(),Ce=new RC(P,Ue),Pe=new BT(P,Ue,e,Ce),Se=new AC(P,Ue),Pe.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),Ke=new qT(P),ye=new hC,Oe=new CC(P,Ue,Se,ye,Pe,Ce,Ke),Et=new HT(S),dt=new jT(S),T=new t1(P),de=new kT(P,T),m=new $T(P,T,Ke,de),D=new ZT(P,m,T,Ke),se=new KT(P,Pe,Oe),ae=new zT(ye),B=new fC(S,Et,dt,Ue,Pe,de,ae),X=new IC(S,ye),H=new mC,pe=new SC(Ue),Ee=new FT(S,Et,dt,Se,D,p,l),_e=new wC(S,D,Pe),Be=new UC(P,Ke,Pe,Se),he=new OT(P,Ue,Ke),De=new YT(P,Ue,Ke),Ke.programs=B.programs,S.capabilities=Pe,S.extensions=Ue,S.properties=ye,S.renderLists=H,S.shadowMap=_e,S.state=Se,S.info=Ke}U();const oe=new DC(S,P);this.xr=oe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize($,te,!1))},this.getSize=function(M){return M.set($,te)},this.setSize=function(M,F,G=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,te=F,n.width=Math.floor(M*I),n.height=Math.floor(F*I),G===!0&&(n.style.width=M+"px",n.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set($*I,te*I).floor()},this.setDrawingBufferSize=function(M,F,G){$=M,te=F,I=G,n.width=Math.floor(M*G),n.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(N)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,F,G,W){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,F,G,W),Se.viewport(N.copy(le).multiplyScalar(I).round())},this.getScissor=function(M){return M.copy(Te)},this.setScissor=function(M,F,G,W){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,F,G,W),Se.scissor(V.copy(Te).multiplyScalar(I).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){Se.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,G=!0){let W=0;if(M){let k=!1;if(L!==null){const re=L.texture.format;k=re===ph||re===hh||re===fh}if(k){const re=L.texture.type,fe=re===Ti||re===Ir||re===Bo||re===zo||re===ch||re===dh,Me=Ee.getClearColor(),ve=Ee.getClearAlpha(),Le=Me.r,Ie=Me.g,Re=Me.b;fe?(v[0]=Le,v[1]=Ie,v[2]=Re,v[3]=ve,P.clearBufferuiv(P.COLOR,0,v)):(_[0]=Le,_[1]=Ie,_[2]=Re,_[3]=ve,P.clearBufferiv(P.COLOR,0,_))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),Ee.dispose(),H.dispose(),pe.dispose(),ye.dispose(),Et.dispose(),dt.dispose(),D.dispose(),de.dispose(),Be.dispose(),B.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",$n),oe.removeEventListener("sessionend",vh),lr.stop()};function ue(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Ke.autoReset,F=_e.enabled,G=_e.autoUpdate,W=_e.needsUpdate,k=_e.type;U(),Ke.autoReset=M,_e.enabled=F,_e.autoUpdate=G,_e.needsUpdate=W,_e.type=k}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Q(M){const F=M.target;F.removeEventListener("dispose",Q),we(F)}function we(M){Fe(M),ye.remove(M)}function Fe(M){const F=ye.get(M).programs;F!==void 0&&(F.forEach(function(G){B.releaseProgram(G)}),M.isShaderMaterial&&B.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,W,k,re){F===null&&(F=Ae);const fe=k.isMesh&&k.matrixWorld.determinant()<0,Me=Y0(M,F,G,W,k);Se.setMaterial(W,fe);let ve=G.index,Le=1;if(W.wireframe===!0){if(ve=m.getWireframeAttribute(G),ve===void 0)return;Le=2}const Ie=G.drawRange,Re=G.attributes.position;let je=Ie.start*Le,nt=(Ie.start+Ie.count)*Le;re!==null&&(je=Math.max(je,re.start*Le),nt=Math.min(nt,(re.start+re.count)*Le)),ve!==null?(je=Math.max(je,0),nt=Math.min(nt,ve.count)):Re!=null&&(je=Math.max(je,0),nt=Math.min(nt,Re.count));const xt=nt-je;if(xt<0||xt===1/0)return;de.setup(k,W,Me,G,ve);let lt,rt=he;if(ve!==null&&(lt=T.get(ve),rt=De,rt.setIndex(lt)),k.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*Dt()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(k.isLine){let be=W.linewidth;be===void 0&&(be=1),Se.setLineWidth(be*Dt()),k.isLineSegments?rt.setMode(P.LINES):k.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else k.isPoints?rt.setMode(P.POINTS):k.isSprite&&rt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Go("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))rt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const be=k._multiDrawStarts,ht=k._multiDrawCounts,Ze=k._multiDrawCount,un=ve?T.get(ve).bytesPerElement:1,Or=ye.get(W).currentProgram.getUniforms();for(let cn=0;cn<Ze;cn++)Or.setValue(P,"_gl_DrawID",cn),rt.render(be[cn]/un,ht[cn])}else if(k.isInstancedMesh)rt.renderInstances(je,xt,k.count);else if(G.isInstancedBufferGeometry){const be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ht=Math.min(G.instanceCount,be);rt.renderInstances(je,xt,ht)}else rt.render(je,xt)};function ot(M,F,G){M.transparent===!0&&M.side===hi&&M.forceSinglePass===!1?(M.side=an,M.needsUpdate=!0,ra(M,F,G),M.side=nr,M.needsUpdate=!0,ra(M,F,G),M.side=hi):ra(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),c=pe.get(G),c.init(F),y.push(c),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(c.pushLight(k),k.castShadow&&c.pushShadow(k))}),M!==G&&M.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(c.pushLight(k),k.castShadow&&c.pushShadow(k))}),c.setupLights();const W=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const re=k.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Me=re[fe];ot(Me,G,k),W.add(Me)}else ot(re,G,k),W.add(re)}),c=y.pop(),W},this.compileAsync=function(M,F,G=null){const W=this.compile(M,F,G);return new Promise(k=>{function re(){if(W.forEach(function(fe){ye.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){k(M);return}setTimeout(re,10)}Ue.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let et=null;function ri(M){et&&et(M)}function $n(){lr.stop()}function vh(){lr.start()}const lr=new G0;lr.setAnimationLoop(ri),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(M){et=M,oe.setAnimationLoop(M),M===null?lr.stop():lr.start()},oe.addEventListener("sessionstart",$n),oe.addEventListener("sessionend",vh),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,F,L),c=pe.get(M,y.length),c.init(F),y.push(c),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$e.setFromProjectionMatrix(ee,Jn,F.reversedDepth),Y=this.localClippingEnabled,Ge=ae.init(this.clippingPlanes,Y),g=H.get(M,x.length),g.init(),x.push(g),oe.enabled===!0&&oe.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&fu(re,F,-1/0,S.sortObjects)}fu(M,F,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(K,J),We=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,We&&Ee.addToRenderList(g,M),this.info.render.frame++,Ge===!0&&ae.beginShadows();const G=c.state.shadowsArray;_e.render(G,M,F),Ge===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,k=g.transmissive;if(c.setupLights(),F.isArrayCamera){const re=F.cameras;if(k.length>0)for(let fe=0,Me=re.length;fe<Me;fe++){const ve=re[fe];xh(W,k,M,ve)}We&&Ee.render(M);for(let fe=0,Me=re.length;fe<Me;fe++){const ve=re[fe];_h(g,M,ve,ve.viewport)}}else k.length>0&&xh(W,k,M,F),We&&Ee.render(M),_h(g,M,F);L!==null&&C===0&&(Oe.updateMultisampleRenderTarget(L),Oe.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(S,M,F),de.resetDefaultState(),w=-1,E=null,y.pop(),y.length>0?(c=y[y.length-1],Ge===!0&&ae.setGlobalState(S.clippingPlanes,c.state.camera)):c=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function fu(M,F,G,W){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)c.pushLight(M),M.castShadow&&c.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){W&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ee);const fe=D.update(M),Me=M.material;Me.visible&&g.push(M,fe,Me,G,Ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){const fe=D.update(M),Me=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ne.copy(fe.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(ee)),Array.isArray(Me)){const ve=fe.groups;for(let Le=0,Ie=ve.length;Le<Ie;Le++){const Re=ve[Le],je=Me[Re.materialIndex];je&&je.visible&&g.push(M,fe,je,G,Ne.z,Re)}}else Me.visible&&g.push(M,fe,Me,G,Ne.z,null)}}const re=M.children;for(let fe=0,Me=re.length;fe<Me;fe++)fu(re[fe],F,G,W)}function _h(M,F,G,W){const k=M.opaque,re=M.transmissive,fe=M.transparent;c.setupLightsView(G),Ge===!0&&ae.setGlobalState(S.clippingPlanes,G),W&&Se.viewport(N.copy(W)),k.length>0&&ia(k,F,G),re.length>0&&ia(re,F,G),fe.length>0&&ia(fe,F,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function xh(M,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[W.id]===void 0&&(c.state.transmissionRenderTarget[W.id]=new ir(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Os:Ti,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=c.state.transmissionRenderTarget[W.id],fe=W.viewport||N;re.setSize(fe.z*S.transmissionResolutionScale,fe.w*S.transmissionResolutionScale);const Me=S.getRenderTarget(),ve=S.getActiveCubeFace(),Le=S.getActiveMipmapLevel();S.setRenderTarget(re),S.getClearColor(q),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),We&&Ee.render(G);const Ie=S.toneMapping;S.toneMapping=Ji;const Re=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),c.setupLightsView(W),Ge===!0&&ae.setGlobalState(S.clippingPlanes,W),ia(M,G,W),Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let nt=0,xt=F.length;nt<xt;nt++){const lt=F[nt],rt=lt.object,be=lt.geometry,ht=lt.material,Ze=lt.group;if(ht.side===hi&&rt.layers.test(W.layers)){const un=ht.side;ht.side=an,ht.needsUpdate=!0,yh(rt,G,W,be,ht,Ze),ht.side=un,ht.needsUpdate=!0,je=!0}}je===!0&&(Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re))}S.setRenderTarget(Me,ve,Le),S.setClearColor(q,Z),Re!==void 0&&(W.viewport=Re),S.toneMapping=Ie}function ia(M,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,re=M.length;k<re;k++){const fe=M[k],Me=fe.object,ve=fe.geometry,Le=fe.group;let Ie=fe.material;Ie.allowOverride===!0&&W!==null&&(Ie=W),Me.layers.test(G.layers)&&yh(Me,F,G,ve,Ie,Le)}}function yh(M,F,G,W,k,re){M.onBeforeRender(S,F,G,W,k,re),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(S,F,G,W,M,re),k.transparent===!0&&k.side===hi&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,S.renderBufferDirect(G,F,W,k,M,re),k.side=nr,k.needsUpdate=!0,S.renderBufferDirect(G,F,W,k,M,re),k.side=hi):S.renderBufferDirect(G,F,W,k,M,re),M.onAfterRender(S,F,G,W,k,re)}function ra(M,F,G){F.isScene!==!0&&(F=Ae);const W=ye.get(M),k=c.state.lights,re=c.state.shadowsArray,fe=k.state.version,Me=B.getParameters(M,k.state,re,F,G),ve=B.getProgramCacheKey(Me);let Le=W.programs;W.environment=M.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(M.isMeshStandardMaterial?dt:Et).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Q),Le=new Map,W.programs=Le);let Ie=Le.get(ve);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===fe)return Eh(M,Me),Ie}else Me.uniforms=B.getUniforms(M),M.onBeforeCompile(Me,S),Ie=B.acquireProgram(Me,ve),Le.set(ve,Ie),W.uniforms=Me.uniforms;const Re=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=ae.uniform),Eh(M,Me),W.needsLights=K0(M),W.lightsStateVersion=fe,W.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ie,W.uniformsList=null,Ie}function Sh(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=fl.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Eh(M,F){const G=ye.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Y0(M,F,G,W,k){F.isScene!==!0&&(F=Ae),Oe.resetTextureUnits();const re=F.fog,fe=W.isMeshStandardMaterial?F.environment:null,Me=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ls,ve=(W.isMeshStandardMaterial?dt:Et).get(W.envMap||fe),Le=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,nt=!!G.morphAttributes.color;let xt=Ji;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xt=S.toneMapping);const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=lt!==void 0?lt.length:0,be=ye.get(W),ht=c.state.lights;if(Ge===!0&&(Y===!0||M!==E)){const jt=M===E&&W.id===w;ae.setState(W,M,jt)}let Ze=!1;W.version===be.__version?(be.needsLights&&be.lightsStateVersion!==ht.state.version||be.outputColorSpace!==Me||k.isBatchedMesh&&be.batching===!1||!k.isBatchedMesh&&be.batching===!0||k.isBatchedMesh&&be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&be.instancing===!1||!k.isInstancedMesh&&be.instancing===!0||k.isSkinnedMesh&&be.skinning===!1||!k.isSkinnedMesh&&be.skinning===!0||k.isInstancedMesh&&be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&be.instancingMorph===!1&&k.morphTexture!==null||be.envMap!==ve||W.fog===!0&&be.fog!==re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ae.numPlanes||be.numIntersection!==ae.numIntersection)||be.vertexAlphas!==Le||be.vertexTangents!==Ie||be.morphTargets!==Re||be.morphNormals!==je||be.morphColors!==nt||be.toneMapping!==xt||be.morphTargetsCount!==rt)&&(Ze=!0):(Ze=!0,be.__version=W.version);let un=be.currentProgram;Ze===!0&&(un=ra(W,F,k));let Or=!1,cn=!1,Hs=!1;const pt=un.getUniforms(),yn=be.uniforms;if(Se.useProgram(un.program)&&(Or=!0,cn=!0,Hs=!0),W.id!==w&&(w=W.id,cn=!0),Or||E!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(P,"projectionMatrix",M.projectionMatrix),pt.setValue(P,"viewMatrix",M.matrixWorldInverse);const Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(P,me.setFromMatrixPosition(M.matrixWorld)),Pe.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,cn=!0,Hs=!0)}if(k.isSkinnedMesh){pt.setOptional(P,k,"bindMatrix"),pt.setOptional(P,k,"bindMatrixInverse");const jt=k.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),pt.setValue(P,"boneTexture",jt.boneTexture,Oe))}k.isBatchedMesh&&(pt.setOptional(P,k,"batchingTexture"),pt.setValue(P,"batchingTexture",k._matricesTexture,Oe),pt.setOptional(P,k,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",k._indirectTexture,Oe),pt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",k._colorsTexture,Oe));const Sn=G.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&se.update(k,G,un),(cn||be.receiveShadow!==k.receiveShadow)&&(be.receiveShadow=k.receiveShadow,pt.setValue(P,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yn.envMap.value=ve,yn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(yn.envMapIntensity.value=F.environmentIntensity),cn&&(pt.setValue(P,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&q0(yn,Hs),re&&W.fog===!0&&X.refreshFogUniforms(yn,re),X.refreshMaterialUniforms(yn,W,I,te,c.state.transmissionRenderTarget[M.id]),fl.upload(P,Sh(be),yn,Oe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fl.upload(P,Sh(be),yn,Oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(P,"center",k.center),pt.setValue(P,"modelViewMatrix",k.modelViewMatrix),pt.setValue(P,"normalMatrix",k.normalMatrix),pt.setValue(P,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const jt=W.uniformsGroups;for(let Qt=0,hu=jt.length;Qt<hu;Qt++){const ur=jt[Qt];Be.update(ur,un),Be.bind(ur,un)}}return un}function q0(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function K0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,F,G){const W=ye.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=F,ye.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const G=ye.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Z0=P.createFramebuffer();this.setRenderTarget=function(M,F=0,G=0){L=M,R=F,C=G;let W=!0,k=null,re=!1,fe=!1;if(M){const ve=ye.get(M);if(ve.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(ve.__hasExternalTextures)Oe.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&ye.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Ie=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?k=Ie[F][G]:k=Ie[F],re=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?k=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[G]:k=Ie,N.copy(M.viewport),V.copy(M.scissor),j=M.scissorTest}else N.copy(le).multiplyScalar(I).floor(),V.copy(Te).multiplyScalar(I).floor(),j=Ye;if(G!==0&&(k=Z0),Se.bindFramebuffer(P.FRAMEBUFFER,k)&&W&&Se.drawBuffers(M,k),Se.viewport(N),Se.scissor(V),Se.setScissorTest(j),re){const ve=ye.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,G)}else if(fe){const ve=F;for(let Le=0;Le<M.textures.length;Le++){const Ie=ye.get(M.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Ie.__webglTexture,G,ve)}}else if(M!==null&&G!==0){const ve=ye.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,G)}w=-1},this.readRenderTargetPixels=function(M,F,G,W,k,re,fe,Me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Se.bindFramebuffer(P.FRAMEBUFFER,ve);try{const Le=M.textures[Me],Ie=Le.format,Re=Le.type;if(!Pe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-W&&G>=0&&G<=M.height-k&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,G,W,k,Ce.convert(Ie),Ce.convert(Re),re))}finally{const Le=L!==null?ye.get(L).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,F,G,W,k,re,fe,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(F>=0&&F<=M.width-W&&G>=0&&G<=M.height-k){Se.bindFramebuffer(P.FRAMEBUFFER,ve);const Le=M.textures[Me],Ie=Le.format,Re=Le.type;if(!Pe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,G,W,k,Ce.convert(Ie),Ce.convert(Re),0);const nt=L!==null?ye.get(L).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,nt);const xt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await vM(P,xt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(je),P.deleteSync(xt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,G=0){const W=Math.pow(2,-G),k=Math.floor(M.image.width*W),re=Math.floor(M.image.height*W),fe=F!==null?F.x:0,Me=F!==null?F.y:0;Oe.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,fe,Me,k,re),Se.unbindTexture()};const Q0=P.createFramebuffer(),J0=P.createFramebuffer();this.copyTextureToTexture=function(M,F,G=null,W=null,k=0,re=null){re===null&&(k!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=k,k=0):re=0);let fe,Me,ve,Le,Ie,Re,je,nt,xt;const lt=M.isCompressedTexture?M.mipmaps[re]:M.image;if(G!==null)fe=G.max.x-G.min.x,Me=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Ie=G.min.y,Re=G.isBox3?G.min.z:0;else{const Sn=Math.pow(2,-k);fe=Math.floor(lt.width*Sn),Me=Math.floor(lt.height*Sn),M.isDataArrayTexture?ve=lt.depth:M.isData3DTexture?ve=Math.floor(lt.depth*Sn):ve=1,Le=0,Ie=0,Re=0}W!==null?(je=W.x,nt=W.y,xt=W.z):(je=0,nt=0,xt=0);const rt=Ce.convert(F.format),be=Ce.convert(F.type);let ht;F.isData3DTexture?(Oe.setTexture3D(F,0),ht=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Oe.setTexture2DArray(F,0),ht=P.TEXTURE_2D_ARRAY):(Oe.setTexture2D(F,0),ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),un=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Or=P.getParameter(P.UNPACK_SKIP_PIXELS),cn=P.getParameter(P.UNPACK_SKIP_ROWS),Hs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const pt=M.isDataArrayTexture||M.isData3DTexture,yn=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Sn=ye.get(M),jt=ye.get(F),Qt=ye.get(Sn.__renderTarget),hu=ye.get(jt.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,hu.__webglFramebuffer);for(let ur=0;ur<ve;ur++)pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,k,Re+ur),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,re,xt+ur)),P.blitFramebuffer(Le,Ie,fe,Me,je,nt,fe,Me,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||ye.has(M)){const Sn=ye.get(M),jt=ye.get(F);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Q0),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,J0);for(let Qt=0;Qt<ve;Qt++)pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Sn.__webglTexture,k,Re+Qt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Sn.__webglTexture,k),yn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,re,xt+Qt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,re),k!==0?P.blitFramebuffer(Le,Ie,fe,Me,je,nt,fe,Me,P.COLOR_BUFFER_BIT,P.NEAREST):yn?P.copyTexSubImage3D(ht,re,je,nt,xt+Qt,Le,Ie,fe,Me):P.copyTexSubImage2D(ht,re,je,nt,Le,Ie,fe,Me);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else yn?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(ht,re,je,nt,xt,fe,Me,ve,rt,be,lt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,re,je,nt,xt,fe,Me,ve,rt,lt.data):P.texSubImage3D(ht,re,je,nt,xt,fe,Me,ve,rt,be,lt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,je,nt,fe,Me,rt,be,lt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,je,nt,lt.width,lt.height,rt,lt.data):P.texSubImage2D(P.TEXTURE_2D,re,je,nt,fe,Me,rt,be,lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,un),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Or),P.pixelStorei(P.UNPACK_SKIP_ROWS,cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Hs),re===0&&F.generateMipmaps&&P.generateMipmap(ht),Se.unbindTexture()},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,Se.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}function kC({mouseForce:t=20,cursorSize:e=100,isViscous:n=!1,viscous:i=30,iterationsViscous:r=32,iterationsPoisson:s=32,dt:o=.014,BFECC:a=!0,resolution:l=.5,isBounce:u=!1,colors:d=["#5227FF","#FF9FFC","#B19EEF"],style:f={},className:h="",autoDemo:p=!0,autoSpeed:v=.5,autoIntensity:_=2.2,takeoverDuration:g=.25,autoResumeDelay:c=1e3,autoRampDuration:x=.6}){const y=O.useRef(null),S=O.useRef(null),A=O.useRef(null),R=O.useRef(null),C=O.useRef(null),L=O.useRef(!0),w=O.useRef(null);return O.useEffect(()=>{if(!y.current)return;function E(T){let m;Array.isArray(T)&&T.length>0?T.length===1?m=[T[0],T[0]]:m=T:m=["#ffffff","#ffffff"];const D=m.length,B=new Uint8Array(D*4);for(let H=0;H<D;H++){const pe=new Je(m[H]);B[H*4+0]=Math.round(pe.r*255),B[H*4+1]=Math.round(pe.g*255),B[H*4+2]=Math.round(pe.b*255),B[H*4+3]=255}const X=new VM(B,D,1,Cn);return X.magFilter=nn,X.minFilter=nn,X.wrapS=Hn,X.wrapT=Hn,X.generateMipmaps=!1,X.needsUpdate=!0,X}const N=E(d),V=new St(0,0,0,0);class j{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(m){this.container=m,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new FC({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Je(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new JM,this.clock.start()}resize(){if(!this.container)return;const m=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(m.width)),this.height=Math.max(1,Math.floor(m.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const q=new j;class Z{constructor(){this.mouseMoved=!1,this.coords=new ke,this.coords_old=new ke,this.diff=new ke,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ke,this.takeoverTo=new ke,this.onInteract=null}init(m){this.container=m,m.addEventListener("mousemove",this._onMouseMove,!1),m.addEventListener("touchstart",this._onTouchStart,!1),m.addEventListener("touchmove",this._onTouchMove,!1),m.addEventListener("mouseenter",this._onMouseEnter,!1),m.addEventListener("mouseleave",this._onMouseLeave,!1),m.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(m,D){if(!this.container)return;this.timer&&clearTimeout(this.timer);const B=this.container.getBoundingClientRect(),X=(m-B.left)/B.width,H=(D-B.top)/B.height;this.coords.set(X*2-1,-(H*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(m,D){this.coords.set(m,D),this.mouseMoved=!0}onDocumentMouseMove(m){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const D=this.container.getBoundingClientRect(),B=(m.clientX-D.left)/D.width,X=(m.clientY-D.top)/D.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(B*2-1,-(X*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(m.clientX,m.clientY),this.hasUserControl=!0}onDocumentTouchStart(m){if(m.touches.length===1){const D=m.touches[0];this.onInteract&&this.onInteract(),this.setCoords(D.pageX,D.pageY),this.hasUserControl=!0}}onDocumentTouchMove(m){if(m.touches.length===1){const D=m.touches[0];this.onInteract&&this.onInteract(),this.setCoords(D.pageX,D.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const m=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(m>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const D=m*m*(3-2*m);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,D)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const $=new Z;class te{constructor(m,D,B){this.mouse=m,this.manager=D,this.enabled=B.enabled,this.speed=B.speed,this.resumeDelay=B.resumeDelay||3e3,this.rampDurationMs=(B.rampDuration||0)*1e3,this.active=!1,this.current=new ke(0,0),this.target=new ke,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ke,this.pickNewTarget()}pickNewTarget(){const m=Math.random;this.target.set((m()*2-1)*(1-this.margin),(m()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const m=performance.now();if(m-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=m,this.activationTime=m),!this.active)return;this.mouse.isAutoActive=!0;let B=(m-this.lastTime)/1e3;this.lastTime=m,B>.2&&(B=.016);const X=this._tmpDir.subVectors(this.target,this.current),H=X.length();if(H<.01){this.pickNewTarget();return}X.normalize();let pe=1;if(this.rampDurationMs>0){const Ee=Math.min(1,(m-this.activationTime)/this.rampDurationMs);pe=Ee*Ee*(3-2*Ee)}const ae=this.speed*B*pe,_e=Math.min(ae,H);this.current.addScaledVector(X,_e),this.mouse.setNormalized(this.current.x,this.current.y)}}const I=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,K=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,J=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,le=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Te=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Ye=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,$e=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ge=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Y=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ee=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class me{constructor(m){var D;this.props=m||{},this.uniforms=(D=this.props.material)==null?void 0:D.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new am,this.camera=new Hl,this.uniforms&&(this.material=new Wa(this.props.material),this.geometry=new Rr(2,2),this.plane=new Rn(this.geometry,this.material),this.scene.add(this.plane))}update(){q.renderer.setRenderTarget(this.props.output||null),q.renderer.render(this.scene,this.camera),q.renderer.setRenderTarget(null)}}class Ne extends me{constructor(m){super({material:{vertexShader:I,fragmentShader:le,uniforms:{boundarySpace:{value:m.cellScale},px:{value:m.cellScale},fboSize:{value:m.fboSize},velocity:{value:m.src.texture},dt:{value:m.dt},isBFECC:{value:!0}}},output:m.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const m=new bi,D=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);m.setAttribute("position",new Wn(D,3));const B=new Wa({vertexShader:K,fragmentShader:le,uniforms:this.uniforms});this.line=new YM(m,B),this.scene.add(this.line)}update({dt:m,isBounce:D,BFECC:B}){this.uniforms.dt.value=m,this.line.visible=D,this.uniforms.isBFECC.value=B,super.update()}}class Ae extends me{constructor(m){super({output:m.dst}),this.init(m)}init(m){super.init();const D=new Rr(1,1),B=new Wa({vertexShader:J,fragmentShader:$e,blending:vd,depthWrite:!1,uniforms:{px:{value:m.cellScale},force:{value:new ke(0,0)},center:{value:new ke(0,0)},scale:{value:new ke(m.cursor_size,m.cursor_size)}}});this.mouse=new Rn(D,B),this.scene.add(this.mouse)}update(m){const D=$.diff.x/2*m.mouse_force,B=$.diff.y/2*m.mouse_force,X=m.cursor_size*m.cellScale.x,H=m.cursor_size*m.cellScale.y,pe=Math.min(Math.max($.coords.x,-1+X+m.cellScale.x*2),1-X-m.cellScale.x*2),ae=Math.min(Math.max($.coords.y,-1+H+m.cellScale.y*2),1-H-m.cellScale.y*2),_e=this.mouse.material.uniforms;_e.force.value.set(D,B),_e.center.value.set(pe,ae),_e.scale.value.set(m.cursor_size,m.cursor_size),super.update()}}class We extends me{constructor(m){super({material:{vertexShader:I,fragmentShader:ee,uniforms:{boundarySpace:{value:m.boundarySpace},velocity:{value:m.src.texture},velocity_new:{value:m.dst_.texture},v:{value:m.viscous},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst,output0:m.dst_,output1:m.dst}),this.init()}update({viscous:m,iterations:D,dt:B}){let X,H;this.uniforms.v.value=m;for(let pe=0;pe<D;pe++)pe%2===0?(X=this.props.output0,H=this.props.output1):(X=this.props.output1,H=this.props.output0),this.uniforms.velocity_new.value=X.texture,this.props.output=H,this.uniforms.dt.value=B,super.update();return H}}class Dt extends me{constructor(m){super({material:{vertexShader:I,fragmentShader:Ye,uniforms:{boundarySpace:{value:m.boundarySpace},velocity:{value:m.src.texture},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst}),this.init()}update({vel:m}){this.uniforms.velocity.value=m.texture,super.update()}}class P extends me{constructor(m){super({material:{vertexShader:I,fragmentShader:Ge,uniforms:{boundarySpace:{value:m.boundarySpace},pressure:{value:m.dst_.texture},divergence:{value:m.src.texture},px:{value:m.cellScale}}},output:m.dst,output0:m.dst_,output1:m.dst}),this.init()}update({iterations:m}){let D,B;for(let X=0;X<m;X++)X%2===0?(D=this.props.output0,B=this.props.output1):(D=this.props.output1,B=this.props.output0),this.uniforms.pressure.value=D.texture,this.props.output=B,super.update();return B}}class st extends me{constructor(m){super({material:{vertexShader:I,fragmentShader:Y,uniforms:{boundarySpace:{value:m.boundarySpace},pressure:{value:m.src_p.texture},velocity:{value:m.src_v.texture},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst}),this.init()}update({vel:m,pressure:D}){this.uniforms.velocity.value=m.texture,this.uniforms.pressure.value=D.texture,super.update()}}class Ue{constructor(m){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...m},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ke,this.cellScale=new ke,this.boundarySpace=new ke,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Os:Qn}createAllFBO(){const D={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:nn,magFilter:nn,wrapS:Hn,wrapT:Hn};for(let B in this.fbos)this.fbos[B]=new ir(this.fboSize.x,this.fboSize.y,D)}createShaderPass(){this.advection=new Ne({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ae({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new We({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new P({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new st({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const m=Math.max(1,Math.round(this.options.resolution*q.width)),D=Math.max(1,Math.round(this.options.resolution*q.height)),B=1/m,X=1/D;this.cellScale.set(B,X),this.fboSize.set(m,D)}resize(){this.calcSize();for(let m in this.fbos)this.fbos[m].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let m=this.fbos.vel_1;this.options.isViscous&&(m=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:m});const D=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:m,pressure:D})}}class Pe{constructor(){this.init()}init(){this.simulation=new Ue,this.scene=new am,this.camera=new Hl,this.output=new Rn(new Rr(2,2),new Wa({vertexShader:I,fragmentShader:Te,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ke},palette:{value:N},bgColor:{value:V}}})),this.scene.add(this.output)}addScene(m){this.scene.add(m)}resize(){this.simulation.resize()}render(){q.renderer.setRenderTarget(null),q.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Se{constructor(m){this.props=m,q.init(m.$wrapper),$.init(m.$wrapper),$.autoIntensity=m.autoIntensity,$.takeoverDuration=m.takeoverDuration,this.lastUserInteraction=performance.now(),$.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new te($,this,{enabled:m.autoDemo,speed:m.autoSpeed,resumeDelay:m.autoResumeDelay,rampDuration:m.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():L.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(q.renderer.domElement),this.output=new Pe}resize(){q.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),$.update(),q.update(),this.output.update()}loop(){this.running&&(this.render(),R.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,R.current&&(cancelAnimationFrame(R.current),R.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),$.dispose(),q.renderer){const m=q.renderer.domElement;m&&m.parentNode&&m.parentNode.removeChild(m),q.renderer.dispose()}}catch{}}}const Ke=y.current;Ke.style.position=Ke.style.position||"relative",Ke.style.overflow=Ke.style.overflow||"hidden";const ye=new Se({$wrapper:Ke,autoDemo:p,autoSpeed:v,autoIntensity:_,takeoverDuration:g,autoResumeDelay:c,autoRampDuration:x});S.current=ye,(()=>{var D;if(!S.current)return;const T=(D=S.current.output)==null?void 0:D.simulation;if(!T)return;const m=T.options.resolution;Object.assign(T.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),l!==m&&T.resize()})(),ye.start();const Et=new IntersectionObserver(T=>{const m=T[0],D=m.isIntersecting&&m.intersectionRatio>0;L.current=D,S.current&&(D&&!document.hidden?S.current.start():S.current.pause())},{threshold:[0,.01,.1]});Et.observe(Ke),C.current=Et;const dt=new ResizeObserver(()=>{S.current&&(w.current&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{S.current&&S.current.resize()}))});return dt.observe(Ke),A.current=dt,()=>{if(R.current&&cancelAnimationFrame(R.current),A.current)try{A.current.disconnect()}catch{}if(C.current)try{C.current.disconnect()}catch{}S.current&&S.current.dispose(),S.current=null}},[a,e,o,u,n,s,r,t,l,i,d,p,v,_,g,c,x]),O.useEffect(()=>{var j;const E=S.current;if(!E)return;const N=(j=E.output)==null?void 0:j.simulation;if(!N)return;const V=N.options.resolution;Object.assign(N.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),E.autoDriver&&(E.autoDriver.enabled=p,E.autoDriver.speed=v,E.autoDriver.resumeDelay=c,E.autoDriver.rampDurationMs=x*1e3,E.autoDriver.mouse&&(E.autoDriver.mouse.autoIntensity=_,E.autoDriver.mouse.takeoverDuration=g)),l!==V&&N.resize()},[t,e,n,i,r,s,o,a,l,u,p,v,_,g,c,x]),b.jsx("div",{ref:y,className:`liquid-ether-container ${h||""}`,style:f})}function OC(){const{theme:t,toggleTheme:e}=KS(),[n,i]=O.useState(""),[r,s]=O.useState({message:"",type:"success",isVisible:!1}),o=(u,d="success")=>{s({message:u,type:d,isVisible:!0})},a=()=>{s(u=>({...u,isVisible:!1}))},l=u=>{i(u)};return b.jsx(zS,{children:b.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative",children:[b.jsx("div",{className:"absolute inset-0 z-0",style:{height:600},children:b.jsx(kC,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),b.jsxs("div",{className:"relative z-10",children:[b.jsx(SE,{theme:t,onThemeToggle:e,onNotification:o,onSearch:l}),b.jsx("main",{className:"relative z-10",children:b.jsxs(gS,{children:[b.jsx(hd,{path:"/",element:b.jsx(wE,{searchQuery:n,onSearch:l})}),b.jsx(hd,{path:"/wallpaper/:id",element:b.jsx(TE,{})})]})}),b.jsx(AE,{message:r.message,type:r.type,isVisible:r.isVisible,onClose:a})]})]})})}qv(document.getElementById("root")).render(b.jsx(O.StrictMode,{children:b.jsx(OC,{})}));
