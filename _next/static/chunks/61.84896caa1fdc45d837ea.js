(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[61],{"9Dpu":function(e,t,a){"use strict";var n=a("mXGw"),r=a("I9Y2");t.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},C6kF:function(e,t,a){"use strict";a.r(t);var n=a("mXGw"),r=a.n(n),o=a("WLS8"),i=a("6CzD"),l=a("aNYv"),d=a("dV/x"),c=a("Fcif"),s=(a("W0B4"),a("PDtE")),u=a("gbh0"),p=a("lOOT"),h=a("Rx6o"),g=a("VR6K"),v=a("xlJo"),m=a("j26d"),f=a("q3GK"),b=a("mxPc"),C=a("omU1");var y=Object(u.a)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:Object(c.a)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var t=e.children,a=e.classes,r=e.className,o=e.open,i=e.value,l=e.valueLabelDisplay;return"off"===l?t:n.cloneElement(t,{className:Object(s.default)(t.props.className,(o||"on"===l)&&a.open,a.thumb)},n.createElement("span",{className:Object(s.default)(a.offset,r)},n.createElement("span",{className:a.circle},n.createElement("span",{className:a.label},i))))}));function w(e,t){return e-t}function O(e,t,a){return Math.min(Math.max(t,e),a)}function x(e,t){return e.reduce((function(e,a,n){var r=Math.abs(t-a);return null===e||r<e.distance||r===e.distance?{distance:r,index:n}:e}),null).index}function P(e,t){if(void 0!==t.current&&e.changedTouches){for(var a=0;a<e.changedTouches.length;a+=1){var n=e.changedTouches[a];if(n.identifier===t.current)return{x:n.clientX,y:n.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function E(e,t,a){return 100*(e-t)/(a-t)}function k(e,t,a){var n=Math.round((e-a)/t)*t+a;return Number(n.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}var n=e.toString().split(".")[1];return n?n.length:0}(t)))}function L(e){var t=e.values,a=e.source,n=e.newValue,r=e.index;if(t[r]===n)return a;var o=t.slice();return o[r]=n,o}function _(e){var t=e.sliderRef,a=e.activeIndex,n=e.setActive;t.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===a||t.current.querySelector('[role="slider"][data-index="'.concat(a,'"]')).focus(),n&&n(a)}var M={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},D=function(e){return e},j=n.forwardRef((function(e,t){var a=e["aria-label"],r=e["aria-labelledby"],o=e["aria-valuetext"],u=e.classes,h=e.className,j=e.color,G=void 0===j?"primary":j,I=e.component,A=void 0===I?"span":I,S=e.defaultValue,F=e.disabled,R=void 0!==F&&F,N=e.getAriaLabel,B=e.getAriaValueText,T=e.marks,z=void 0!==T&&T,V=e.max,U=void 0===V?100:V,$=e.min,H=void 0===$?0:$,X=e.name,Y=e.onChange,K=e.onChangeCommitted,q=e.onMouseDown,J=e.orientation,W=void 0===J?"horizontal":J,Q=e.scale,Z=void 0===Q?D:Q,ee=e.step,te=void 0===ee?1:ee,ae=e.ThumbComponent,ne=void 0===ae?"span":ae,re=e.track,oe=void 0===re?"normal":re,ie=e.value,le=e.ValueLabelComponent,de=void 0===le?y:le,ce=e.valueLabelDisplay,se=void 0===ce?"off":ce,ue=e.valueLabelFormat,pe=void 0===ue?D:ue,he=Object(d.a)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),ge=Object(p.a)(),ve=n.useRef(),me=n.useState(-1),fe=me[0],be=me[1],Ce=n.useState(-1),ye=Ce[0],we=Ce[1],Oe=Object(C.a)({controlled:ie,default:S,name:"Slider"}),xe=Object(l.a)(Oe,2),Pe=xe[0],Ee=xe[1],ke=Array.isArray(Pe),Le=ke?Pe.slice().sort(w):[Pe];Le=Le.map((function(e){return O(e,H,U)}));var _e=!0===z&&null!==te?Object(i.a)(Array(Math.floor((U-H)/te)+1)).map((function(e,t){return{value:H+te*t}})):z||[],Me=Object(g.a)(),De=Me.isFocusVisible,je=Me.onBlurVisible,Ge=Me.ref,Ie=n.useState(-1),Ae=Ie[0],Se=Ie[1],Fe=n.useRef(),Re=Object(f.a)(Ge,Fe),Ne=Object(f.a)(t,Re),Be=Object(m.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));De(e)&&Se(t),we(t)})),Te=Object(m.a)((function(){-1!==Ae&&(Se(-1),je()),we(-1)})),ze=Object(m.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));we(t)})),Ve=Object(m.a)((function(){we(-1)})),Ue="rtl"===ge.direction,$e=Object(m.a)((function(e){var t,a=Number(e.currentTarget.getAttribute("data-index")),n=Le[a],r=(U-H)/10,o=_e.map((function(e){return e.value})),i=o.indexOf(n),l=Ue?"ArrowLeft":"ArrowRight",d=Ue?"ArrowRight":"ArrowLeft";switch(e.key){case"Home":t=H;break;case"End":t=U;break;case"PageUp":te&&(t=n+r);break;case"PageDown":te&&(t=n-r);break;case l:case"ArrowUp":t=te?n+te:o[i+1]||o[o.length-1];break;case d:case"ArrowDown":t=te?n-te:o[i-1]||o[0];break;default:return}if(e.preventDefault(),te&&(t=k(t,te,H)),t=O(t,H,U),ke){var c=t;t=L({values:Le,source:Pe,newValue:t,index:a}).sort(w),_({sliderRef:Fe,activeIndex:t.indexOf(c)})}Ee(t),Se(a),Y&&Y(e,t),K&&K(e,t)})),He=n.useRef(),Xe=W;Ue&&"vertical"!==W&&(Xe+="-reverse");var Ye=function(e){var t,a,n=e.finger,r=e.move,o=void 0!==r&&r,i=e.values,l=e.source,d=Fe.current.getBoundingClientRect(),c=d.width,s=d.height,u=d.bottom,p=d.left;if(t=0===Xe.indexOf("vertical")?(u-n.y)/s:(n.x-p)/c,-1!==Xe.indexOf("-reverse")&&(t=1-t),a=function(e,t,a){return(a-t)*e+t}(t,H,U),te)a=k(a,te,H);else{var h=_e.map((function(e){return e.value}));a=h[x(h,a)]}a=O(a,H,U);var g=0;if(ke){var v=a;g=(a=L({values:i,source:l,newValue:a,index:g=o?He.current:x(i,a)}).sort(w)).indexOf(v),He.current=g}return{newValue:a,activeIndex:g}},Ke=Object(m.a)((function(e){var t=P(e,ve);if(t){var a=Ye({finger:t,move:!0,values:Le,source:Pe}),n=a.newValue,r=a.activeIndex;_({sliderRef:Fe,activeIndex:r,setActive:be}),Ee(n),Y&&Y(e,n)}})),qe=Object(m.a)((function(e){var t=P(e,ve);if(t){var a=Ye({finger:t,values:Le,source:Pe}).newValue;be(-1),"touchend"===e.type&&we(-1),K&&K(e,a),ve.current=void 0;var n=Object(v.a)(Fe.current);n.removeEventListener("mousemove",Ke),n.removeEventListener("mouseup",qe),n.removeEventListener("touchmove",Ke),n.removeEventListener("touchend",qe)}})),Je=Object(m.a)((function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(ve.current=t.identifier);var a=P(e,ve),n=Ye({finger:a,values:Le,source:Pe}),r=n.newValue,o=n.activeIndex;_({sliderRef:Fe,activeIndex:o,setActive:be}),Ee(r),Y&&Y(e,r);var i=Object(v.a)(Fe.current);i.addEventListener("touchmove",Ke),i.addEventListener("touchend",qe)}));n.useEffect((function(){var e=Fe.current;e.addEventListener("touchstart",Je);var t=Object(v.a)(e);return function(){e.removeEventListener("touchstart",Je),t.removeEventListener("mousemove",Ke),t.removeEventListener("mouseup",qe),t.removeEventListener("touchmove",Ke),t.removeEventListener("touchend",qe)}}),[qe,Ke,Je]);var We=Object(m.a)((function(e){q&&q(e),e.preventDefault();var t=P(e,ve),a=Ye({finger:t,values:Le,source:Pe}),n=a.newValue,r=a.activeIndex;_({sliderRef:Fe,activeIndex:r,setActive:be}),Ee(n),Y&&Y(e,n);var o=Object(v.a)(Fe.current);o.addEventListener("mousemove",Ke),o.addEventListener("mouseup",qe)})),Qe=E(ke?Le[0]:H,H,U),Ze=E(Le[Le.length-1],H,U)-Qe,et=Object(c.a)({},M[Xe].offset(Qe),M[Xe].leap(Ze));return n.createElement(A,Object(c.a)({ref:Ne,className:Object(s.default)(u.root,u["color".concat(Object(b.a)(G))],h,R&&u.disabled,_e.length>0&&_e.some((function(e){return e.label}))&&u.marked,!1===oe&&u.trackFalse,"vertical"===W&&u.vertical,"inverted"===oe&&u.trackInverted),onMouseDown:We},he),n.createElement("span",{className:u.rail}),n.createElement("span",{className:u.track,style:et}),n.createElement("input",{value:Le.join(","),name:X,type:"hidden"}),_e.map((function(e,t){var a,r=E(e.value,H,U),o=M[Xe].offset(r);return a=!1===oe?-1!==Le.indexOf(e.value):"normal"===oe&&(ke?e.value>=Le[0]&&e.value<=Le[Le.length-1]:e.value<=Le[0])||"inverted"===oe&&(ke?e.value<=Le[0]||e.value>=Le[Le.length-1]:e.value>=Le[0]),n.createElement(n.Fragment,{key:e.value},n.createElement("span",{style:o,"data-index":t,className:Object(s.default)(u.mark,a&&u.markActive)}),null!=e.label?n.createElement("span",{"aria-hidden":!0,"data-index":t,style:o,className:Object(s.default)(u.markLabel,a&&u.markLabelActive)},e.label):null)})),Le.map((function(e,t){var i=E(e,H,U),l=M[Xe].offset(i);return n.createElement(de,{key:t,valueLabelFormat:pe,valueLabelDisplay:se,className:u.valueLabel,value:"function"===typeof pe?pe(Z(e),t):pe,index:t,open:ye===t||fe===t||"on"===se,disabled:R},n.createElement(ne,{className:Object(s.default)(u.thumb,u["thumbColor".concat(Object(b.a)(G))],fe===t&&u.active,R&&u.disabled,Ae===t&&u.focusVisible),tabIndex:R?null:0,role:"slider",style:l,"data-index":t,"aria-label":N?N(t):a,"aria-labelledby":r,"aria-orientation":W,"aria-valuemax":Z(U),"aria-valuemin":Z(H),"aria-valuenow":Z(e),"aria-valuetext":B?B(Z(e),t):o,onKeyDown:$e,onFocus:Be,onBlur:Te,onMouseOver:ze,onMouseLeave:Ve}))})))})),G=Object(u.a)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?Object(h.e)(e.palette.primary.main,.62):Object(h.b)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(h.a)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(h.a)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat(Object(h.a)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat(Object(h.a)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:Object(c.a)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})(j),I=a("mFzD"),A=a("CXRx"),S=a("dJqr"),F=a("/ZiB"),R=a("iT/z"),N=a.n(R),B=a("VmuM"),T=a.n(B),z=a("q8G3"),V=a.n(z),U=a("/6x2"),$=a("56Rm"),H=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){if("function"!==typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),X=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChangePickerBackgroundColor=function(e){return t.props.onChangeBackgroundColorPreview&&t.props.onChangeBackgroundColorPreview(e)},t.handleChangePickerBackgroundColorComplete=function(e){t.props.onChangeBackgroundColorPreview&&t.props.onChangeBackgroundColorPreview(void 0),t.props.onChange({backgroundColor:e})},t}return H(t,e),t.prototype.render=function(){var e=this.props,t=e.backgroundColorPreview,a=e.data.backgroundColor,n=void 0===a?this.props.defaultBackgroundColor:a;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement($.a,{color:t||n,onChange:this.handleChangePickerBackgroundColor,onDialogOpen:this.props.ensureModeOn,onChangeComplete:this.handleChangePickerBackgroundColorComplete,style:{margin:"auto"}}))},t}(n.Component),Y=a("kebl"),K=a("D9vu"),q=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){if("function"!==typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),J=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChangeBackground=function(e){t.props.ensureModeOn(),t.props.onChange({background:e.target.value})},t.handleChangeIsParallax=function(e){t.props.ensureModeOn(),t.props.onChange({isParallax:void 0!==t.props.data.isParallax&&!t.props.data.isParallax})},t.handleImageLoaded=function(e){t.props.ensureModeOn(),t.props.onImageLoaded(e)},t.handleImageUploaded=function(e){t.props.onImageUploaded(),t.props.onChange({background:e.url})},t}return q(t,e),t.prototype.render=function(){var e=this.props.data,t=e.isParallax,a=void 0===t||t,n=e.background,i=void 0===n?"":n;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},this.props.imageUpload&&r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{translations:this.props.translations,imageUpload:this.props.imageUpload,imageLoaded:this.handleImageLoaded,imageUploaded:this.handleImageUploaded}),r.a.createElement(F.a,{variant:"body1",style:{margin:"20px 16px 0 16px"}},this.props.translations.or)),r.a.createElement(Y.a,{placeholder:this.props.translations.srcPlaceholder,label:this.props.imageUpload?this.props.translations.haveUrl:this.props.translations.imageUrl,style:{width:"256px"},value:i,onChange:this.handleChangeBackground}),r.a.createElement(o.a,{control:r.a.createElement(I.a,{onChange:this.handleChangeIsParallax,checked:a}),label:this.props.translations.isParallax})))},t}(r.a.Component),W=a("/NZN"),Q=a("oQEK"),Z=a("uVDD"),ee=a.n(Z),te=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){if("function"!==typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),ae=function(){return(ae=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ne=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.addGradient=function(){t.props.ensureModeOn(),t.props.onChange({gradients:(t.props.data.gradients?t.props.data.gradients:[]).concat({deg:45,opacity:1})})},t.handleChangeDeg=function(e,a){return function(){t.props.onChangeGradientDegPreview&&t.props.onChangeGradientDegPreview(void 0,void 0),t.props.onChange({gradients:(t.props.data.gradients?t.props.data.gradients:[]).map((function(t,n){return n===e?ae(ae({},t),{deg:a}):t}))})}},t.handleChangeDegPreview=function(e){return function(a,n){t.props.onChangeGradientDegPreview&&t.props.onChangeGradientDegPreview(n,e)}},t.handleChangeOpacity=function(e,a){return function(){t.props.onChangeGradientOpacityPreview&&t.props.onChangeGradientOpacityPreview(void 0,void 0),t.props.onChange({gradients:(t.props.data.gradients?t.props.data.gradients:[]).map((function(t,n){return n===e?ae(ae({},t),{opacity:a}):t}))})}},t.handleChangeOpacityPreview=function(e){return function(a,n){t.props.onChangeGradientOpacityPreview&&t.props.onChangeGradientOpacityPreview(n,e)}},t.handleChangeGradientColor=function(e,a){return function(n){t.props.onChangeGradientColorPreview&&t.props.onChangeGradientColorPreview(void 0,void 0,void 0),t.props.onChange({gradients:[].concat(t.props.data.gradients?t.props.data.gradients:[]).map((function(t,r){return r===e?ae(ae({},t),{colors:(t.colors?t.colors:[]).map((function(e,t){return t===a?ae(ae({},e),{color:n}):e}))}):t}))})}},t.handleChangeGradientColorPreview=function(e,a){return function(n){t.props.onChangeGradientColorPreview&&t.props.onChangeGradientColorPreview(n,e,a)}},t.addColor=function(e){return function(){t.props.ensureModeOn(),t.props.onChange({gradients:(t.props.data.gradients?t.props.data.gradients:[]).map((function(a,n){return n===e?ae(ae({},a),{colors:(a.colors?a.colors:[]).concat({color:(a.colors?a.colors:[]).length%2===e%2?t.props.defaultGradientColor:t.props.defaultGradientSecondaryColor})}):a}))})}},t.removeColor=function(e,a){return function(){t.props.onChange({gradients:[].concat(t.props.data.gradients?t.props.data.gradients:[]).map((function(t,n){return n===e?ae(ae({},t),{colors:(t.colors?t.colors:[]).filter((function(e,t){return t!==a}))}):t}))})}},t.removeGradient=function(e){return function(){t.props.onChange({gradients:[].concat(t.props.data.gradients?t.props.data.gradients:[]).filter((function(t,a){return a!==e}))})}},t}return te(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.gradientDegPreview,n=t.gradientDegPreviewIndex,o=t.gradientOpacityPreview,i=t.gradientOpacityPreviewIndex,l=t.gradientColorPreview,d=t.gradientColorPreviewIndex,c=t.gradientColorPreviewColorIndex,s=t.data.gradients,u=void 0===s?[]:s;return r.a.createElement("div",null,u.map((function(t,s){var u=t.colors?t.colors:[],p=s===n&&void 0!==a?a:t.deg,h=s===i&&void 0!==o?o:t.opacity;return r.a.createElement("div",{key:s},r.a.createElement("div",{style:{display:"flex",maxWidth:"96%"}},r.a.createElement("div",{style:{flex:1}},r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-degree-label"},e.props.translations.gradientRotation," (",p,e.props.translations.degrees,")"),r.a.createElement(G,{"aria-labelledby":"linear-gradient-degree-label",value:p,onChange:e.handleChangeDegPreview(s),onChangeCommitted:e.handleChangeDeg(s,p),step:5,min:0,max:360})),r.a.createElement("div",{style:{flex:1,marginLeft:16}},r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-opacity-label"},e.props.translations.gradientOpacity," (",(100*h).toFixed(0),"%)"),r.a.createElement(G,{"aria-labelledby":"linear-gradient-opacity-label",value:h,onChange:e.handleChangeOpacityPreview(s),onChangeCommitted:e.handleChangeOpacity(s,h),step:.01,min:0,max:1}))),r.a.createElement("div",{style:{marginBottom:32}},u.map((function(t,a){var n=s===d&&a===c&&void 0!==l?l:t.color;return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement($.a,{buttonContent:"Select color "+a,style:{marginLeft:"8px"},color:n,onChange:e.handleChangeGradientColorPreview(s,a),onChangeComplete:e.handleChangeGradientColor(s,a)}),r.a.createElement(Q.a,{"aria-label":"Delete",onClick:e.removeColor(s,a)},r.a.createElement(ee.a,null)))})),r.a.createElement(W.a,{variant:"contained",onClick:e.addColor(s),style:{marginLeft:"8px"}},e.props.translations.addColor),r.a.createElement(Q.a,{"aria-label":"Delete",onClick:e.removeGradient(s)},r.a.createElement(ee.a,null))))})),r.a.createElement(W.a,{style:{margin:"auto"},variant:"outlined",onClick:this.addGradient,disabled:u.length>5},this.props.translations.addGradient))},t}(r.a.Component),re=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){if("function"!==typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),oe=function(){return(oe=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ie=function(e){function t(t){var a=e.call(this,t)||this;return a.renderModeSwitch=function(){var e=a.props.data.modeFlag,t=void 0===e?a.props.defaultModeFlag:e;return r.a.createElement(o.a,{style:{marginBottom:16},control:r.a.createElement(I.a,{onChange:a.props.handleChangeModeSwitch(a.state.mode,t),checked:Boolean(t&a.state.mode)}),label:a.props.translations.onOff})},a.renderUI=function(){switch(a.state.mode){case U.a.COLOR_MODE_FLAG:return r.a.createElement(r.a.Fragment,null,a.renderModeSwitch(),r.a.createElement(X,oe({},a.props,{ensureModeOn:a.ensureModeOn(U.a.COLOR_MODE_FLAG),onChangeBackgroundColorPreview:a.props.handleChangeBackgroundColorPreview,backgroundColorPreview:a.props.backgroundColorPreview})));case U.a.GRADIENT_MODE_FLAG:return r.a.createElement(r.a.Fragment,null,a.renderModeSwitch(),r.a.createElement(ne,oe({},a.props,{ensureModeOn:a.ensureModeOn(U.a.GRADIENT_MODE_FLAG),gradientDegPreview:a.props.gradientDegPreview,gradientDegPreviewIndex:a.props.gradientDegPreviewIndex,gradientOpacityPreview:a.props.gradientOpacityPreview,gradientOpacityPreviewIndex:a.props.gradientOpacityPreviewIndex,gradientColorPreview:a.props.gradientColorPreview,gradientColorPreviewIndex:a.props.gradientColorPreviewIndex,gradientColorPreviewColorIndex:a.props.gradientColorPreviewColorIndex,onChangeGradientDegPreview:a.props.handleChangeGradientDegPreview,onChangeGradientOpacityPreview:a.props.handleChangeGradientOpacityPreview,onChangeGradientColorPreview:a.props.handleChangeGradientColorPreview})));case U.a.IMAGE_MODE_FLAG:default:return r.a.createElement(r.a.Fragment,null,a.renderModeSwitch(),r.a.createElement(J,oe({},a.props,{onImageLoaded:a.props.handleImageLoaded,onImageUploaded:a.props.handleImageUploaded,ensureModeOn:a.ensureModeOn(U.a.IMAGE_MODE_FLAG)})))}},a.ensureModeOn=function(e){return function(){var t=a.props.data.modeFlag,n=void 0===t?a.props.defaultModeFlag:t;0===(n&e)&&a.props.handleChangeModeSwitch(e,n)()}},a.handleChangeMode=function(e,t){return a.setState({mode:t})},a.state={mode:t.defaultMode},a}return re(t,e),t.prototype.render=function(){var e=this,t=this.props.data,a=t.hasPadding,n=void 0===a?this.props.defaultHasPadding:a,i=t.modeFlag,l=void 0===i?this.props.defaultModeFlag:i,d=t.darken,c=void 0===d?this.props.defaultDarken:d,s=t.lighten,u=void 0===s?this.props.defaultLighten:s,p=void 0!==this.props.darkenPreview?this.props.darkenPreview:c,h=void 0!==this.props.lightenPreview?this.props.lightenPreview:u;return r.a.createElement("div",null,r.a.createElement(S.a,{style:{marginBottom:16},value:this.state.mode,onChange:this.handleChangeMode,centered:!0},(this.props.enabledModes&U.a.IMAGE_MODE_FLAG)>0&&r.a.createElement(A.a,{icon:r.a.createElement(V.a,{color:(l&U.a.IMAGE_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.imageMode,value:U.a.IMAGE_MODE_FLAG}),(this.props.enabledModes&U.a.COLOR_MODE_FLAG)>0&&r.a.createElement(A.a,{icon:r.a.createElement(N.a,{color:(l&U.a.COLOR_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.colorMode,value:U.a.COLOR_MODE_FLAG}),(this.props.enabledModes&U.a.GRADIENT_MODE_FLAG)>0&&r.a.createElement(A.a,{icon:r.a.createElement(T.a,{color:(l&U.a.GRADIENT_MODE_FLAG)>0?"secondary":void 0}),label:this.props.translations.gradientMode,value:U.a.GRADIENT_MODE_FLAG})),this.renderUI(),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{flex:1}},r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-darken-label"},this.props.translations.darken," (",(100*p).toFixed(0),"%)"),r.a.createElement(G,{"aria-labelledby":"linear-gradient-darken-label",value:p,onChange:function(t,a){return e.props.handleChangeDarkenPreview(a instanceof Array?a[0]:a)},onChangeCommitted:this.props.handleChangeDarken,step:.01,min:0,max:1})),r.a.createElement("div",{style:{flex:1,marginLeft:16}},r.a.createElement(F.a,{variant:"body1",id:"linear-gradient-lighten-label"},this.props.translations.lighten," (",(100*h).toFixed(0),"%)"),r.a.createElement(G,{"aria-labelledby":"linear-gradient-lighten-label",value:h,onChange:function(t,a){return e.props.handleChangeLightenPreview(a instanceof Array?a[0]:a)},onChangeCommitted:this.props.handleChangeLighten,step:.01,min:0,max:1})),r.a.createElement("div",{style:{flex:1,marginLeft:16}},r.a.createElement(o.a,{control:r.a.createElement(I.a,{onChange:this.props.handleChangeHasPadding,checked:n}),label:this.props.translations.usePadding}))))},t}(r.a.Component),le=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){if("function"!==typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),de=function(){return(de=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ce=function(e){function t(t){var a=e.call(this,t)||this;return a.handleChangeDarken=function(){a.props.onChange({darken:a.state.darkenPreview}),a.setState({darkenPreview:void 0})},a.handleChangeDarkenPreview=function(e){a.setState({darkenPreview:e})},a.handleChangeLighten=function(){a.props.onChange({lighten:a.state.lightenPreview}),a.setState({lightenPreview:void 0})},a.handleChangeLightenPreview=function(e){a.setState({lightenPreview:e})},a.handleChangeHasPadding=function(){a.props.onChange({hasPadding:void 0===a.props.data.hasPadding?!a.props.defaultHasPadding:!a.props.data.hasPadding})},a.handleChangeBackgroundColorPreview=function(e){return a.setState({backgroundColorPreview:e})},a.handleChangeGradientDegPreview=function(e,t){return a.setState({gradientDegPreview:e,gradientDegPreviewIndex:t})},a.handleChangeGradientOpacityPreview=function(e,t){return a.setState({gradientOpacityPreview:e,gradientOpacityPreviewIndex:t})},a.handleChangeGradientColorPreview=function(e,t,n){return a.setState({gradientColorPreview:e,gradientColorPreviewIndex:t,gradientColorPreviewColorIndex:n})},a.handleImageLoaded=function(e){return a.setState({imagePreview:e})},a.handleImageUploaded=function(){return a.setState({imagePreview:void 0})},a.handleChangeModeSwitch=function(e,t){return function(){t^=e,a.props.onChange({modeFlag:t})}},a.state={},a}return le(t,e),t.prototype.render=function(){return r.a.createElement(ie,de({},this.props,{handleChangeDarken:this.handleChangeDarken,handleChangeDarkenPreview:this.handleChangeDarkenPreview,handleChangeLighten:this.handleChangeLighten,handleChangeLightenPreview:this.handleChangeLightenPreview,handleChangeHasPadding:this.handleChangeHasPadding,handleChangeModeSwitch:this.handleChangeModeSwitch,handleChangeBackgroundColorPreview:this.handleChangeBackgroundColorPreview,handleChangeGradientDegPreview:this.handleChangeGradientDegPreview,handleChangeGradientOpacityPreview:this.handleChangeGradientOpacityPreview,handleChangeGradientColorPreview:this.handleChangeGradientColorPreview,handleImageLoaded:this.handleImageLoaded,handleImageUploaded:this.handleImageUploaded},this.state))},t}(r.a.Component);t.default=ce},LdlQ:function(e,t,a){"use strict";var n=a("mXGw"),r=a("I9Y2");t.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},VmuM:function(e,t,a){"use strict";var n=a("63Ad"),r=a("vdEC");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("mXGw")),i=(0,n(a("c9Um")).default)(o.createElement("path",{d:"M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"}),"Gradient");t.default=i},"iT/z":function(e,t,a){"use strict";var n=a("63Ad"),r=a("vdEC");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("mXGw")),i=(0,n(a("c9Um")).default)(o.createElement("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"ColorLens");t.default=i}}]);