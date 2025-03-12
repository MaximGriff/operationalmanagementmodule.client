import{k as Q,e as K,f as ye,b as P,c as N,g as O,h as On,i as Ln,a as An,_ as Tn,d as Fn}from"./@babel-FmsFFq6i.js";import{c as Ce}from"./classnames-ELZfJkp_.js";import{F as Ne}from"./rc-overflow-CksbVkIx.js";import{o as Vn,p as Ht,E as Un,K as oe,x as ke,D as je,b as Gt,e as zn,y as pt,z as Hn}from"./rc-util-CNc3xdVw.js";import{r as t}from"./react-cAKyJgT9.js";import{r as Gn}from"./react-dom-BuRsME7c.js";import{T as Wn}from"./@rc-component-CWPIUGqW.js";import{C as jn}from"./rc-motion-C75AOMAB.js";var Wt=t.createContext(null);function jt(e,r){return e===void 0?null:"".concat(e,"-").concat(r)}function Bt(e){var r=t.useContext(Wt);return jt(r,e)}var Bn=["children","locked"],ee=t.createContext(null);function qn(e,r){var a=K({},e);return Object.keys(r).forEach(function(n){var i=r[n];i!==void 0&&(a[n]=i)}),a}function $e(e){var r=e.children,a=e.locked,n=Q(e,Bn),i=t.useContext(ee),o=Vn(function(){return qn(i,n)},[i,n],function(l,u){return!a&&(l[0]!==u[0]||!Ht(l[1],u[1],!0))});return t.createElement(ee.Provider,{value:o},r)}var Yn=[],qt=t.createContext(null);function Xe(){return t.useContext(qt)}var Yt=t.createContext(Yn);function De(e){var r=t.useContext(Yt);return t.useMemo(function(){return e!==void 0?[].concat(ye(r),[e]):r},[r,e])}var Xt=t.createContext(null),gt=t.createContext({}),ct=oe.LEFT,st=oe.RIGHT,dt=oe.UP,Be=oe.DOWN,qe=oe.ENTER,Jt=oe.ESC,we=oe.HOME,Ke=oe.END,Tt=[dt,Be,ct,st];function Xn(e,r,a,n){var i,o="prev",l="next",u="children",v="parent";if(e==="inline"&&n===qe)return{inlineTrigger:!0};var c=P(P({},dt,o),Be,l),y=P(P(P(P({},ct,a?l:o),st,a?o:l),Be,u),qe,u),s=P(P(P(P(P(P({},dt,o),Be,l),qe,u),Jt,v),ct,a?u:v),st,a?v:u),p={inline:c,horizontal:y,vertical:s,inlineSub:c,horizontalSub:s,verticalSub:s},I=(i=p["".concat(e).concat(r?"":"Sub")])===null||i===void 0?void 0:i[n];switch(I){case o:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case v:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function Jn(e){for(var r=e;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Zn(e,r){for(var a=e||document.activeElement;a;){if(r.has(a))return a;a=a.parentElement}return null}function Ct(e,r){var a=Un(e,!0);return a.filter(function(n){return r.has(n)})}function Ft(e,r,a){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var i=Ct(e,r),o=i.length,l=i.findIndex(function(u){return a===u});return n<0?l===-1?l=o-1:l-=1:n>0&&(l+=1),l=(l+o)%o,i[l]}var vt=function(r,a){var n=new Set,i=new Map,o=new Map;return r.forEach(function(l){var u=document.querySelector("[data-menu-id='".concat(jt(a,l),"']"));u&&(n.add(u),o.set(u,l),i.set(l,u))}),{elements:n,key2element:i,element2key:o}};function Qn(e,r,a,n,i,o,l,u,v,c){var y=t.useRef(),s=t.useRef();s.current=r;var p=function(){ke.cancel(y.current)};return t.useEffect(function(){return function(){p()}},[]),function(I){var g=I.which;if([].concat(Tt,[qe,Jt,we,Ke]).includes(g)){var R=o(),f=vt(R,n),E=f,w=E.elements,m=E.key2element,C=E.element2key,h=m.get(r),d=Zn(h,w),T=C.get(d),M=Xn(e,l(T,!0).length===1,a,g);if(!M&&g!==we&&g!==Ke)return;(Tt.includes(g)||[we,Ke].includes(g))&&I.preventDefault();var W=function(V){if(V){var Y=V,B=V.querySelector("a");B!=null&&B.getAttribute("href")&&(Y=B);var X=C.get(V);u(X),p(),y.current=ke(function(){s.current===X&&Y.focus()})}};if([we,Ke].includes(g)||M.sibling||!d){var $;!d||e==="inline"?$=i.current:$=Jn(d);var _,F=Ct($,w);g===we?_=F[0]:g===Ke?_=F[F.length-1]:_=Ft($,w,d,M.offset),W(_)}else if(M.inlineTrigger)v(T);else if(M.offset>0)v(T,!0),p(),y.current=ke(function(){f=vt(R,n);var ne=d.getAttribute("aria-controls"),V=document.getElementById(ne),Y=Ft(V,f.elements);W(Y)},5);else if(M.offset<0){var L=l(T,!0),te=L[L.length-2],j=m.get(te);v(te,!1),W(j)}}c==null||c(I)}}function er(e){Promise.resolve().then(e)}var ht="__RC_UTIL_PATH_SPLIT__",Vt=function(r){return r.join(ht)},tr=function(r){return r.split(ht)},ft="rc-menu-more";function nr(){var e=t.useState({}),r=N(e,2),a=r[1],n=t.useRef(new Map),i=t.useRef(new Map),o=t.useState([]),l=N(o,2),u=l[0],v=l[1],c=t.useRef(0),y=t.useRef(!1),s=function(){y.current||a({})},p=t.useCallback(function(m,C){var h=Vt(C);i.current.set(h,m),n.current.set(m,h),c.current+=1;var d=c.current;er(function(){d===c.current&&s()})},[]),I=t.useCallback(function(m,C){var h=Vt(C);i.current.delete(h),n.current.delete(m)},[]),g=t.useCallback(function(m){v(m)},[]),R=t.useCallback(function(m,C){var h=n.current.get(m)||"",d=tr(h);return C&&u.includes(d[0])&&d.unshift(ft),d},[u]),f=t.useCallback(function(m,C){return m.filter(function(h){return h!==void 0}).some(function(h){var d=R(h,!0);return d.includes(C)})},[R]),E=function(){var C=ye(n.current.keys());return u.length&&C.push(ft),C},w=t.useCallback(function(m){var C="".concat(n.current.get(m)).concat(ht),h=new Set;return ye(i.current.keys()).forEach(function(d){d.startsWith(C)&&h.add(i.current.get(d))}),h},[]);return t.useEffect(function(){return function(){y.current=!0}},[]),{registerPath:p,unregisterPath:I,refreshOverflowKeys:g,isSubPathKey:f,getKeyPath:R,getKeys:E,getSubPathKeys:w}}function _e(e){var r=t.useRef(e);r.current=e;var a=t.useCallback(function(){for(var n,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(n=r.current)===null||n===void 0?void 0:n.call.apply(n,[r].concat(o))},[]);return e?a:void 0}var rr=Math.random().toFixed(5).toString().slice(2),Ut=0;function ar(e){var r=je(e,{value:e}),a=N(r,2),n=a[0],i=a[1];return t.useEffect(function(){Ut+=1;var o="".concat(rr,"-").concat(Ut);i("rc-menu-uuid-".concat(o))},[]),n}function Zt(e,r,a,n){var i=t.useContext(ee),o=i.activeKey,l=i.onActive,u=i.onInactive,v={active:o===e};return r||(v.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),l(e)},v.onMouseLeave=function(c){n==null||n({key:e,domEvent:c}),u(e)}),v}function Qt(e){var r=t.useContext(ee),a=r.mode,n=r.rtl,i=r.inlineIndent;if(a!=="inline")return null;var o=e;return n?{paddingRight:o*i}:{paddingLeft:o*i}}function en(e){var r=e.icon,a=e.props,n=e.children,i;return r===null||r===!1?null:(typeof r=="function"?i=t.createElement(r,K({},a)):typeof r!="boolean"&&(i=r),i||n||null)}var ir=["item"];function Ye(e){var r=e.item,a=Q(e,ir);return Object.defineProperty(a,"item",{get:function(){return Gt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),a}var or=["title","attribute","elementRef"],lr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],ur=["active"],cr=function(e){On(a,e);var r=Ln(a);function a(){return An(this,a),r.apply(this,arguments)}return Tn(a,[{key:"render",value:function(){var i=this.props,o=i.title,l=i.attribute,u=i.elementRef,v=Q(i,or),c=pt(v,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Gt(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(Ne.Item,O({},l,{title:typeof o=="string"?o:void 0},c,{ref:u}))}}]),a}(t.Component),sr=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.eventKey;e.warnKey;var o=e.disabled,l=e.itemIcon,u=e.children,v=e.role,c=e.onMouseEnter,y=e.onMouseLeave,s=e.onClick,p=e.onKeyDown,I=e.onFocus,g=Q(e,lr),R=Bt(i),f=t.useContext(ee),E=f.prefixCls,w=f.onItemClick,m=f.disabled,C=f.overflowDisabled,h=f.itemIcon,d=f.selectedKeys,T=f.onActive,M=t.useContext(gt),W=M._internalRenderMenuItem,$="".concat(E,"-item"),_=t.useRef(),F=t.useRef(),L=m||o,te=zn(r,F),j=De(i),ne=function(D){return{key:i,keyPath:ye(j).reverse(),item:_.current,domEvent:D}},V=l||h,Y=Zt(i,L,c,y),B=Y.active,X=Q(Y,ur),ae=d.includes(i),ce=Qt(j.length),se=function(D){if(!L){var J=ne(D);s==null||s(Ye(J)),w(J)}},A=function(D){if(p==null||p(D),D.which===oe.ENTER){var J=ne(D);s==null||s(Ye(J)),w(J)}},U=function(D){T(i),I==null||I(D)},he={};e.role==="option"&&(he["aria-selected"]=ae);var de=t.createElement(cr,O({ref:_,elementRef:te,role:v===null?"none":v||"menuitem",tabIndex:o?null:-1,"data-menu-id":C&&R?null:R},pt(g,["extra"]),X,he,{component:"li","aria-disabled":o,style:K(K({},ce),a),className:Ce($,P(P(P({},"".concat($,"-active"),B),"".concat($,"-selected"),ae),"".concat($,"-disabled"),L),n),onClick:se,onKeyDown:A,onFocus:U}),u,t.createElement(en,{props:K(K({},e),{},{isSelected:ae}),icon:V}));return W&&(de=W(de,e,{selected:ae})),de});function dr(e,r){var a=e.eventKey,n=Xe(),i=De(a);return t.useEffect(function(){if(n)return n.registerPath(a,i),function(){n.unregisterPath(a,i)}},[i]),n?null:t.createElement(sr,O({},e,{ref:r}))}const bt=t.forwardRef(dr);var vr=["className","children"],fr=function(r,a){var n=r.className,i=r.children,o=Q(r,vr),l=t.useContext(ee),u=l.prefixCls,v=l.mode,c=l.rtl;return t.createElement("ul",O({className:Ce(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(v==="inline"?"inline":"vertical"),n),role:"menu"},o,{"data-menu-list":!0,ref:a}),i)},yt=t.forwardRef(fr);yt.displayName="SubMenuList";function It(e,r){return Hn(e).map(function(a,n){if(t.isValidElement(a)){var i,o,l=a.key,u=(i=(o=a.props)===null||o===void 0?void 0:o.eventKey)!==null&&i!==void 0?i:l,v=u==null;v&&(u="tmp_key-".concat([].concat(ye(r),[n]).join("-")));var c={key:u,eventKey:u};return t.cloneElement(a,c)}return a})}var k={adjustX:1,adjustY:1},mr={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},leftTop:{points:["tr","tl"],overflow:k},leftBottom:{points:["br","bl"],overflow:k},rightTop:{points:["tl","tr"],overflow:k},rightBottom:{points:["bl","br"],overflow:k}},pr={topLeft:{points:["bl","tl"],overflow:k},topRight:{points:["br","tr"],overflow:k},bottomLeft:{points:["tl","bl"],overflow:k},bottomRight:{points:["tr","br"],overflow:k},rightTop:{points:["tr","tl"],overflow:k},rightBottom:{points:["br","bl"],overflow:k},leftTop:{points:["tl","tr"],overflow:k},leftBottom:{points:["bl","br"],overflow:k}};function tn(e,r,a){if(r)return r;if(a)return a[e]||a.other}var gr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Cr(e){var r=e.prefixCls,a=e.visible,n=e.children,i=e.popup,o=e.popupStyle,l=e.popupClassName,u=e.popupOffset,v=e.disabled,c=e.mode,y=e.onVisibleChange,s=t.useContext(ee),p=s.getPopupContainer,I=s.rtl,g=s.subMenuOpenDelay,R=s.subMenuCloseDelay,f=s.builtinPlacements,E=s.triggerSubMenuAction,w=s.forceSubMenuRender,m=s.rootClassName,C=s.motion,h=s.defaultMotions,d=t.useState(!1),T=N(d,2),M=T[0],W=T[1],$=I?K(K({},pr),f):K(K({},mr),f),_=gr[c],F=tn(c,C,h),L=t.useRef(F);c!=="inline"&&(L.current=F);var te=K(K({},L.current),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),j=t.useRef();return t.useEffect(function(){return j.current=ke(function(){W(a)}),function(){ke.cancel(j.current)}},[a]),t.createElement(Wn,{prefixCls:r,popupClassName:Ce("".concat(r,"-popup"),P({},"".concat(r,"-rtl"),I),l,m),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:p,builtinPlacements:$,popupPlacement:_,popupVisible:M,popup:i,popupStyle:o,popupAlign:u&&{offset:u},action:v?[]:[E],mouseEnterDelay:g,mouseLeaveDelay:R,onPopupVisibleChange:y,forceRender:w,popupMotion:te,fresh:!0},n)}function hr(e){var r=e.id,a=e.open,n=e.keyPath,i=e.children,o="inline",l=t.useContext(ee),u=l.prefixCls,v=l.forceSubMenuRender,c=l.motion,y=l.defaultMotions,s=l.mode,p=t.useRef(!1);p.current=s===o;var I=t.useState(!p.current),g=N(I,2),R=g[0],f=g[1],E=p.current?a:!1;t.useEffect(function(){p.current&&f(!1)},[s]);var w=K({},tn(o,c,y));n.length>1&&(w.motionAppear=!1);var m=w.onVisibleChanged;return w.onVisibleChanged=function(C){return!p.current&&!C&&f(!0),m==null?void 0:m(C)},R?null:t.createElement($e,{mode:o,locked:!p.current},t.createElement(jn,O({visible:E},w,{forceRender:v,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(C){var h=C.className,d=C.style;return t.createElement(yt,{id:r,className:h,style:d},i)}))}var br=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],yr=["active"],Ir=t.forwardRef(function(e,r){var a=e.style,n=e.className,i=e.title,o=e.eventKey;e.warnKey;var l=e.disabled,u=e.internalPopupClose,v=e.children,c=e.itemIcon,y=e.expandIcon,s=e.popupClassName,p=e.popupOffset,I=e.popupStyle,g=e.onClick,R=e.onMouseEnter,f=e.onMouseLeave,E=e.onTitleClick,w=e.onTitleMouseEnter,m=e.onTitleMouseLeave,C=Q(e,br),h=Bt(o),d=t.useContext(ee),T=d.prefixCls,M=d.mode,W=d.openKeys,$=d.disabled,_=d.overflowDisabled,F=d.activeKey,L=d.selectedKeys,te=d.itemIcon,j=d.expandIcon,ne=d.onItemClick,V=d.onOpenChange,Y=d.onActive,B=t.useContext(gt),X=B._internalRenderSubMenuItem,ae=t.useContext(Xt),ce=ae.isSubPathKey,se=De(),A="".concat(T,"-submenu"),U=$||l,he=t.useRef(),de=t.useRef(),ve=c??te,D=y??j,J=W.includes(o),ie=!_&&J,Oe=ce(L,o),Le=Zt(o,U,w,m),fe=Le.active,Ie=Q(Le,yr),Ze=t.useState(!1),Me=N(Ze,2),Re=Me[0],Ae=Me[1],Te=function(z){U||Ae(z)},Qe=function(z){Te(!0),R==null||R({key:o,domEvent:z})},Fe=function(z){Te(!1),f==null||f({key:o,domEvent:z})},re=t.useMemo(function(){return fe||(M!=="inline"?Re||ce([F],o):!1)},[M,fe,F,Re,o,ce]),et=Qt(se.length),tt=function(z){U||(E==null||E({key:o,domEvent:z}),M==="inline"&&V(o,!J))},Ve=_e(function(Z){g==null||g(Ye(Z)),ne(Z)}),Ue=function(z){M!=="inline"&&V(o,z)},nt=function(){Y(o)},le=h&&"".concat(h,"-popup"),Se=t.useMemo(function(){return t.createElement(en,{icon:M!=="horizontal"?D:void 0,props:K(K({},e),{},{isOpen:ie,isSubMenu:!0})},t.createElement("i",{className:"".concat(A,"-arrow")}))},[M,D,e,ie,A]),me=t.createElement("div",O({role:"menuitem",style:et,className:"".concat(A,"-title"),tabIndex:U?null:-1,ref:he,title:typeof i=="string"?i:null,"data-menu-id":_&&h?null:h,"aria-expanded":ie,"aria-haspopup":!0,"aria-controls":le,"aria-disabled":U,onClick:tt,onFocus:nt},Ie),i,Se),xe=t.useRef(M);if(M!=="inline"&&se.length>1?xe.current="vertical":xe.current=M,!_){var be=xe.current;me=t.createElement(Cr,{mode:be,prefixCls:A,visible:!u&&ie&&M!=="inline",popupClassName:s,popupOffset:p,popupStyle:I,popup:t.createElement($e,{mode:be==="horizontal"?"vertical":be},t.createElement(yt,{id:le,ref:de},v)),disabled:U,onVisibleChange:Ue},me)}var q=t.createElement(Ne.Item,O({ref:r,role:"none"},C,{component:"li",style:a,className:Ce(A,"".concat(A,"-").concat(M),n,P(P(P(P({},"".concat(A,"-open"),ie),"".concat(A,"-active"),re),"".concat(A,"-selected"),Oe),"".concat(A,"-disabled"),U)),onMouseEnter:Qe,onMouseLeave:Fe}),me,!_&&t.createElement(hr,{id:le,open:ie,keyPath:se},v));return X&&(q=X(q,e,{selected:Oe,active:re,open:ie,disabled:U})),t.createElement($e,{onItemClick:Ve,mode:M==="horizontal"?"vertical":M,itemIcon:ve,expandIcon:D},q)}),Mt=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=De(a),o=It(n,i),l=Xe();t.useEffect(function(){if(l)return l.registerPath(a,i),function(){l.unregisterPath(a,i)}},[i]);var u;return l?u=o:u=t.createElement(Ir,O({ref:r},e),o),t.createElement(Yt.Provider,{value:i},u)});function nn(e){var r=e.className,a=e.style,n=t.useContext(ee),i=n.prefixCls,o=Xe();return o?null:t.createElement("li",{role:"separator",className:Ce("".concat(i,"-item-divider"),r),style:a})}var Mr=["className","title","eventKey","children"],Rr=t.forwardRef(function(e,r){var a=e.className,n=e.title;e.eventKey;var i=e.children,o=Q(e,Mr),l=t.useContext(ee),u=l.prefixCls,v="".concat(u,"-item-group");return t.createElement("li",O({ref:r,role:"presentation"},o,{onClick:function(y){return y.stopPropagation()},className:Ce(v,a)}),t.createElement("div",{role:"presentation",className:"".concat(v,"-title"),title:typeof n=="string"?n:void 0},n),t.createElement("ul",{role:"group",className:"".concat(v,"-list")},i))}),rn=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,i=De(a),o=It(n,i),l=Xe();return l?o:t.createElement(Rr,O({ref:r},pt(e,["warnKey"])),o)}),Sr=["label","children","key","type","extra"];function mt(e,r,a){var n=r.item,i=r.group,o=r.submenu,l=r.divider;return(e||[]).map(function(u,v){if(u&&Fn(u)==="object"){var c=u,y=c.label,s=c.children,p=c.key,I=c.type,g=c.extra,R=Q(c,Sr),f=p??"tmp-".concat(v);return s||I==="group"?I==="group"?t.createElement(i,O({key:f},R,{title:y}),mt(s,r,a)):t.createElement(o,O({key:f},R,{title:y}),mt(s,r,a)):I==="divider"?t.createElement(l,O({key:f},R)):t.createElement(n,O({key:f},R,{extra:g}),y,(!!g||g===0)&&t.createElement("span",{className:"".concat(a,"-item-extra")},g))}return null}).filter(function(u){return u})}function zt(e,r,a,n,i){var o=e,l=K({divider:nn,item:bt,group:rn,submenu:Mt},n);return r&&(o=mt(r,l,i)),It(o,a)}var xr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],ge=[],Pr=t.forwardRef(function(e,r){var a,n=e,i=n.prefixCls,o=i===void 0?"rc-menu":i,l=n.rootClassName,u=n.style,v=n.className,c=n.tabIndex,y=c===void 0?0:c,s=n.items,p=n.children,I=n.direction,g=n.id,R=n.mode,f=R===void 0?"vertical":R,E=n.inlineCollapsed,w=n.disabled,m=n.disabledOverflow,C=n.subMenuOpenDelay,h=C===void 0?.1:C,d=n.subMenuCloseDelay,T=d===void 0?.1:d,M=n.forceSubMenuRender,W=n.defaultOpenKeys,$=n.openKeys,_=n.activeKey,F=n.defaultActiveFirst,L=n.selectable,te=L===void 0?!0:L,j=n.multiple,ne=j===void 0?!1:j,V=n.defaultSelectedKeys,Y=n.selectedKeys,B=n.onSelect,X=n.onDeselect,ae=n.inlineIndent,ce=ae===void 0?24:ae,se=n.motion,A=n.defaultMotions,U=n.triggerSubMenuAction,he=U===void 0?"hover":U,de=n.builtinPlacements,ve=n.itemIcon,D=n.expandIcon,J=n.overflowedIndicator,ie=J===void 0?"...":J,Oe=n.overflowedIndicatorPopupClassName,Le=n.getPopupContainer,fe=n.onClick,Ie=n.onOpenChange,Ze=n.onKeyDown;n.openAnimation,n.openTransitionName;var Me=n._internalRenderMenuItem,Re=n._internalRenderSubMenuItem,Ae=n._internalComponents,Te=Q(n,xr),Qe=t.useMemo(function(){return[zt(p,s,ge,Ae,o),zt(p,s,ge,{},o)]},[p,s,Ae]),Fe=N(Qe,2),re=Fe[0],et=Fe[1],tt=t.useState(!1),Ve=N(tt,2),Ue=Ve[0],nt=Ve[1],le=t.useRef(),Se=ar(g),me=I==="rtl",xe=je(W,{value:$,postState:function(b){return b||ge}}),be=N(xe,2),q=be[0],Z=be[1],z=function(b){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function H(){Z(b),Ie==null||Ie(b)}S?Gn.flushSync(H):H()},an=t.useState(q),Rt=N(an,2),on=Rt[0],ln=Rt[1],rt=t.useRef(!1),un=t.useMemo(function(){return(f==="inline"||f==="vertical")&&E?["vertical",E]:[f,!1]},[f,E]),St=N(un,2),ze=St[0],at=St[1],xt=ze==="inline",cn=t.useState(ze),Pt=N(cn,2),ue=Pt[0],sn=Pt[1],dn=t.useState(at),Et=N(dn,2),vn=Et[0],fn=Et[1];t.useEffect(function(){sn(ze),fn(at),rt.current&&(xt?Z(on):z(ge))},[ze,at]);var mn=t.useState(0),wt=N(mn,2),He=wt[0],pn=wt[1],it=He>=re.length-1||ue!=="horizontal"||m;t.useEffect(function(){xt&&ln(q)},[q]),t.useEffect(function(){return rt.current=!0,function(){rt.current=!1}},[]);var pe=nr(),Kt=pe.registerPath,_t=pe.unregisterPath,gn=pe.refreshOverflowKeys,Nt=pe.isSubPathKey,Cn=pe.getKeyPath,kt=pe.getKeys,hn=pe.getSubPathKeys,bn=t.useMemo(function(){return{registerPath:Kt,unregisterPath:_t}},[Kt,_t]),yn=t.useMemo(function(){return{isSubPathKey:Nt}},[Nt]);t.useEffect(function(){gn(it?ge:re.slice(He+1).map(function(x){return x.key}))},[He,it]);var In=je(_||F&&((a=re[0])===null||a===void 0?void 0:a.key),{value:_}),$t=N(In,2),Pe=$t[0],ot=$t[1],Mn=_e(function(x){ot(x)}),Rn=_e(function(){ot(void 0)});t.useImperativeHandle(r,function(){return{list:le.current,focus:function(b){var S,H=kt(),G=vt(H,Se),We=G.elements,lt=G.key2element,$n=G.element2key,Lt=Ct(le.current,We),At=Pe??(Lt[0]?$n.get(Lt[0]):(S=re.find(function(Dn){return!Dn.props.disabled}))===null||S===void 0?void 0:S.key),Ee=lt.get(At);if(At&&Ee){var ut;Ee==null||(ut=Ee.focus)===null||ut===void 0||ut.call(Ee,b)}}}});var Sn=je(V||[],{value:Y,postState:function(b){return Array.isArray(b)?b:b==null?ge:[b]}}),Dt=N(Sn,2),Ge=Dt[0],xn=Dt[1],Pn=function(b){if(te){var S=b.key,H=Ge.includes(S),G;ne?H?G=Ge.filter(function(lt){return lt!==S}):G=[].concat(ye(Ge),[S]):G=[S],xn(G);var We=K(K({},b),{},{selectedKeys:G});H?X==null||X(We):B==null||B(We)}!ne&&q.length&&ue!=="inline"&&z(ge)},En=_e(function(x){fe==null||fe(Ye(x)),Pn(x)}),Ot=_e(function(x,b){var S=q.filter(function(G){return G!==x});if(b)S.push(x);else if(ue!=="inline"){var H=hn(x);S=S.filter(function(G){return!H.has(G)})}Ht(q,S,!0)||z(S,!0)}),wn=function(b,S){var H=S??!q.includes(b);Ot(b,H)},Kn=Qn(ue,Pe,me,Se,le,kt,Cn,ot,wn,Ze);t.useEffect(function(){nt(!0)},[]);var _n=t.useMemo(function(){return{_internalRenderMenuItem:Me,_internalRenderSubMenuItem:Re}},[Me,Re]),Nn=ue!=="horizontal"||m?re:re.map(function(x,b){return t.createElement($e,{key:x.key,overflowDisabled:b>He},x)}),kn=t.createElement(Ne,O({id:g,ref:le,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:bt,className:Ce(o,"".concat(o,"-root"),"".concat(o,"-").concat(ue),v,P(P({},"".concat(o,"-inline-collapsed"),vn),"".concat(o,"-rtl"),me),l),dir:I,style:u,role:"menu",tabIndex:y,data:Nn,renderRawItem:function(b){return b},renderRawRest:function(b){var S=b.length,H=S?re.slice(-S):null;return t.createElement(Mt,{eventKey:ft,title:ie,disabled:it,internalPopupClose:S===0,popupClassName:Oe},H)},maxCount:ue!=="horizontal"||m?Ne.INVALIDATE:Ne.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(b){pn(b)},onKeyDown:Kn},Te));return t.createElement(gt.Provider,{value:_n},t.createElement(Wt.Provider,{value:Se},t.createElement($e,{prefixCls:o,rootClassName:l,mode:ue,openKeys:q,rtl:me,disabled:w,motion:Ue?se:null,defaultMotions:Ue?A:null,activeKey:Pe,onActive:Mn,onInactive:Rn,selectedKeys:Ge,inlineIndent:ce,subMenuOpenDelay:h,subMenuCloseDelay:T,forceSubMenuRender:M,builtinPlacements:de,triggerSubMenuAction:he,getPopupContainer:Le,itemIcon:ve,expandIcon:D,onItemClick:En,onOpenChange:Ot},t.createElement(Xt.Provider,{value:yn},kn),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(qt.Provider,{value:bn},et)))))}),Je=Pr;Je.Item=bt;Je.SubMenu=Mt;Je.ItemGroup=rn;Je.Divider=nn;export{Je as E,bt as M};
