(this["webpackJsonpapi.ui.scrollbox.basic"]=this["webpackJsonpapi.ui.scrollbox.basic"]||[]).push([[0],{103:function(y,m,l){},126:function(y,m,l){"use strict";l.r(m);var P=l(0),s=l.n(P),U=l(10),oe=l.n(U),E=l(5),S=l(7),O=l(15),D=l(14),N=l(33),re=l(24),x=l.n(re),ae=l(3),R=l.n(ae),M=!!(typeof window!="undefined"&&window.document&&window.document.createElement),Ne=typeof Worker!="undefined",Re=M&&!!(window.addEventListener||window.attachEvent),Ie=M&&!!window.screen,We=!M,I={},V=["Webkit","ms","Moz","O"],K=M?document.createElement("div").style:{},ie=/-(.)/g;function le(o){return o.replace(ie,function(a,e){return e.toUpperCase()})}function se(o){for(var a=0;a<V.length;a+=1){var e=V[a]+o;if(e in K)return e}return null}function X(o){var a=le(o);if(I[a]===void 0){var e=a.charAt(0).toUpperCase()+a.slice(1);I[a]=a in K?a:se(e)}return I[a]}var je=function(){return!!X("animationName")},Ye=function(){return!!X("transition")},ce=function(){return!!X("transform")},ue=function(){return!!X("perspective")},G=X("transform"),de=X("backfaceVisibility"),he=function(){if(ce()){var o=window?window.navigator.userAgent:"",a=/Safari\//.test(o)&&!/Chrome\//.test(o);return!a&&ue()?function(e,t,n){e[G]="translate3d(".concat(t,"px,").concat(n,"px,0)"),e[de]="hidden"}:function(e,t,n){e[G]="translate(".concat(t,"px,").concat(n,"px)")}}return function(e,t,n){e.left="".concat(t,"px"),e.top="".concat(n,"px")}}(),pe=function(){return!0},me=function(){return!1};function C(o){return typeof o!="function"?o?pe:me:o}function Fe(o,a,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;t?(o.left="".concat(a,"px"),o.top="".concat(e,"px")):he(o,a,e)}function fe(o,a,e){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:window.setTimeout,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:window.clearTimeout,r,i=function c(){for(var h=arguments.length,d=new Array(h),u=0;u<h;u++)d[u]=arguments[u];c.reset();var p=function(){o.apply(e,d)};r=t(p,a)};return i.reset=function(){n(r)},i}var ve=l(52),J;M&&(J=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function ge(o,a){if((!M||a)&&!("addEventListener"in document))return!1;var e="on".concat(o),t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t=typeof n[e]=="function"}return!t&&J&&o==="wheel"&&(t=document.implementation.hasFeature("Events.wheel","3.0")),t}var _=10,Z=40,$=800,Ee=new ve.UAParser,be=Ee.getResult(),Se=be.browser.name==="Firefox";function we(o){var a=0,e=0,t=0,n=0;return"detail"in o&&(e=o.detail),"wheelDelta"in o&&(e=-o.wheelDelta/120),"wheelDeltaY"in o&&(e=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(a=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(a=e,e=0),t=a*_,n=e*_,"deltaY"in o&&(n=o.deltaY),"deltaX"in o&&(t=o.deltaX),(t||n)&&o.deltaMode&&(o.deltaMode===1?(t*=Z,n*=Z):(t*=$,n*=$)),t&&!a&&(a=t<1?-1:1),n&&!e&&(e=n<1?-1:1),{spinX:a,spinY:e,pixelX:t,pixelY:n}}function Be(){return Se?"DOMMouseScroll":ge("wheel")?"wheel":"mousewheel"}var Q=0,q=window.requestAnimationFrame||window.webkitRequestAnimationFrame,Te=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout).bind(window),A=q?q.bind(window):function(o){var a=Date.now(),e=Math.max(0,16-(a-Q));return Q=a+e,window.setTimeout(function(){o(Date.now())},e)},ee=function o(a){var e=this;Object(E.a)(this,o),this.onWheel=function(t){var n=we(t),r=n.pixelX,i=n.pixelY,c=e.deltaX+r,h=e.deltaY+i,d=e.shouldHandleScrollX(c,h),u=e.shouldHandleScrollY(h,c);if(!d&&!u)return;e.deltaX+=d?r:0,e.deltaY+=u?i:0;var p;(e.deltaX!==0||e.deltaY!==0)&&(e.stopPropagation()&&t.stopPropagation(),p=!0),p===!0&&e.animationFrameID==null&&(e.animationFrameID=A(e.didWheel))},this.didWheel=function(){e.animationFrameID=null,e.callback&&e.callback(e.deltaX,e.deltaY),e.deltaX=0,e.deltaY=0},this.callback=a.onWheel,this.stopPropagation=C(a.stopPropagation),this.shouldHandleScrollX=C(a.shouldHandleScrollX),this.shouldHandleScrollY=C(a.shouldHandleScrollY),this.deltaX=0,this.deltaY=0},W=function(){function o(a){var e=this;Object(E.a)(this,o),this.didTouchMove=function(){e.dragAnimationId=null,e.callback(e.deltaX,e.deltaY),e.accumulatedDeltaX+=e.deltaX,e.accumulatedDeltaY+=e.deltaY,e.deltaX=0,e.deltaY=0},this.track=function(){var t=Date.now(),n=t-e.lastFrameTimestamp,r=e.velocityX,i=e.velocityY,c=.8;n<o.TRACKER_TIMEOUT&&(c*=n/o.TRACKER_TIMEOUT),r===0&&i===0&&(c=1),e.velocityX=c*(o.TRACKER_TIMEOUT*e.accumulatedDeltaX/(1+n)),c<1&&(e.velocityX+=(1-c)*r),e.velocityY=c*(o.TRACKER_TIMEOUT*e.accumulatedDeltaY/(1+n)),c<1&&(e.velocityY+=(1-c)*i),e.accumulatedDeltaX=0,e.accumulatedDeltaY=0,e.lastFrameTimestamp=t},this.startAutoScroll=function(){e.autoScrollTimestamp=Date.now(),(e.deltaX>0||e.deltaY>0)&&e.didTouchMove(),e.track(),e.autoScroll()},this.autoScroll=function(){var t=Date.now()-e.autoScrollTimestamp,n=o.DECELERATION_AMPLITUDE*Math.exp(-t/o.DECELERATION_FACTOR),r=n*e.velocityX,i=n*e.velocityY;(Math.abs(r)<=5||!e.handleScrollX(r,i))&&(r=0),(Math.abs(i)<=5||!e.handleScrollY(i,r))&&(i=0),(r!==0||i!==0)&&(e.callback(r,i),A(e.autoScroll))},this.trackerId=null,this.dragAnimationId=null,this.deltaX=0,this.deltaY=0,this.lastTouchX=0,this.lastTouchY=0,this.velocityX=0,this.velocityY=0,this.accumulatedDeltaX=0,this.accumulatedDeltaY=0,this.lastFrameTimestamp=Date.now(),this.autoScrollTimestamp=Date.now(),this.callback=a.onTouchScroll,this.handleScrollX=C(a.shouldHandleScrollX),this.handleScrollY=C(a.shouldHandleScrollY),this.stopPropagation=C(a.stopPropagation)}return Object(S.a)(o,[{key:"onTouchStart",value:function(e){this.lastTouchX=e.touches[0].pageX,this.lastTouchY=e.touches[0].pageY,this.velocityX=0,this.velocityY=0,this.accumulatedDeltaX=0,this.accumulatedDeltaY=0,this.lastFrameTimestamp=Date.now(),this.trackerId!=null&&clearInterval(this.trackerId),this.trackerId=window.setInterval(this.track,o.TRACKER_TIMEOUT),this.stopPropagation()&&e.stopPropagation()}},{key:"onTouchEnd",value:function(e){this.onTouchCancel(e),A(this.startAutoScroll)}},{key:"onTouchCancel",value:function(e){this.trackerId!=null&&(clearInterval(this.trackerId),this.trackerId=null),this.stopPropagation()&&e.stopPropagation()}},{key:"onTouchMove",value:function(e){var t=e.touches[0].pageX,n=e.touches[0].pageY;this.deltaX=o.MOVE_AMPLITUDE*(this.lastTouchX-t),this.deltaY=o.MOVE_AMPLITUDE*(this.lastTouchY-n);var r=this.handleScrollX(this.deltaX,this.deltaY),i=this.handleScrollY(this.deltaY,this.deltaX);if(!r&&!i)return;r?this.lastTouchX=t:this.deltaX=0,i?this.lastTouchY=n:this.deltaY=0,e.preventDefault();var c=!1;(Math.abs(this.deltaX)>2||Math.abs(this.deltaY)>2)&&(this.stopPropagation()&&e.stopPropagation(),c=!0),c&&this.dragAnimationId==null&&(this.dragAnimationId=A(this.didTouchMove))}}]),o}();(function(o){o.MOVE_AMPLITUDE=1.6,o.DECELERATION_AMPLITUDE=1.6,o.DECELERATION_FACTOR=325,o.TRACKER_TIMEOUT=100})(W||(W={}));var ye=l(45),te=l.n(ye),ne=function(){function o(a){var e=this;Object(E.a)(this,o),this.onMouseMove=function(t){var n=t.clientX,r=t.clientY;e.deltaX+=n-e.clientX,e.deltaY+=r-e.clientY,e.animationFrameID==null&&(e.animationFrameID=A(e.triggerOnMouseMoveCallback)),e.clientX=n,e.clientY=r,t.preventDefault()},this.onMouseUp=function(){e.animationFrameID&&(Te(e.animationFrameID),e.triggerOnMouseMoveCallback()),e.triggerOnMouseMoveEndCallback(!1)},this.triggerOnMouseMoveCallback=function(){e.animationFrameID=null,e.onMouseMoveCallback(e.deltaX,e.deltaY,{clientX:e.clientX,clientY:e.clientY}),e.deltaX=0,e.deltaY=0},this.triggerOnMouseMoveEndCallback=function(t){e.onMouseMoveEndCallback(t)},this.elem=a.elem||document.documentElement,this.onMouseMoveCallback=a.onMouseMove,this.onMouseMoveEndCallback=a.onMouseMoveEnd,this.animationFrameID=null}return Object(S.a)(o,[{key:"capture",value:function(e){this.captured||(this.removeMouseMoveEvent=te()(this.elem,"mousemove",this.onMouseMove).remove,this.removeMouseUpEvent=te()(this.elem,"mouseup",this.onMouseUp).remove),this.captured=!0,this.dragging||(this.clientX=e.clientX,this.clientY=e.clientY,this.deltaX=0,this.deltaY=0,this.dragging=!0),e.preventDefault()}},{key:"release",value:function(){this.captured&&(this.removeMouseMoveEvent!=null&&(this.removeMouseMoveEvent(),this.removeMouseMoveEvent=null),this.removeMouseUpEvent!=null&&(this.removeMouseUpEvent(),this.removeMouseUpEvent=null)),this.captured=!1,this.dragging&&(this.dragging=!1,this.clientX=0,this.clientY=0,this.deltaX=0,this.deltaY=0)}},{key:"isDragging",value:function(){return this.dragging}}]),o}(),xe=l(13),f=l.n(xe),w=function(o){Object(O.a)(e,o);var a=Object(D.a)(e);function e(){var t;return Object(E.a)(this,e),t=a.apply(this,arguments),t.triggerCallback=function(n){var r=t.props.contentSize-t.props.containerSize,i=x()(n,0,r);i!==t.props.scrollPosition&&t.props.onScroll(i)},t.onWheel=function(n){t.triggerCallback(t.props.scrollPosition+n)},t.onWheelX=function(n,r){Math.abs(n)>=Math.abs(r)&&t.onWheel(n)},t.onWheelY=function(n,r){Math.abs(n)<=Math.abs(r)&&t.onWheel(r)},t.onKeyDown=function(n){var r=n.keyCode;if(r===f.a.TAB)return;var i=t.props,c=i.contentSize,h=i.containerSize,d=t.props.keyboardScrollAmount,u=0;if(t.isHorizontal())switch(r){case f.a.HOME:u=-1,d=c;break;case f.a.LEFT:u=-1;break;case f.a.RIGHT:u=1;break;default:return}else switch(r){case f.a.SPACE:n.shiftKey?u=-1:u=1;break;case f.a.HOME:u=-1,d=c;break;case f.a.UP:u=-1;break;case f.a.DOWN:u=1;break;case f.a.PAGE_UP:u=-1,d=h;break;case f.a.PAGE_DOWN:u=1,d=h;break;default:return}n.preventDefault(),t.triggerCallback(t.props.scrollPosition+d*u)},t.onMouseDown=function(n){if(n.target!==t.thumbElem){var r=n.nativeEvent,i=t.isHorizontal()?r.offsetX||r.layerX:r.offsetY||r.layerY;t.triggerCallback((i-t.thumbSize*.5)/t.scale)}else t.mouseMoveTracker.capture(n);t.props.stopPropagation&&n.stopPropagation(),t.containerElem.focus()},t.onMouseMove=function(n,r){var i=t.isHorizontal()?n:r;i!==0&&(i/=t.scale,t.triggerCallback(t.props.scrollPosition+i))},t.onMouseMoveEnd=function(){t.mouseMoveTracker.release()},t.refContainer=function(n){t.containerElem=n},t.refThumb=function(n){t.thumbElem=n},t}return Object(S.a)(e,[{key:"UNSAFE_componentWillMount",value:function(){this.wheelHandler=new ee({onWheel:this.isHorizontal()?this.onWheelX:this.onWheelY,shouldHandleScrollX:!0,shouldHandleScrollY:!0,stopPropagation:this.props.stopPropagation}),this.mouseMoveTracker=new ne({elem:document.documentElement,onMouseMove:this.onMouseMove,onMouseMoveEnd:this.onMouseMoveEnd})}},{key:"componentWillUnmount",value:function(){this.mouseMoveTracker.release()}},{key:"isHorizontal",value:function(){return this.props.orientation==="horizontal"}},{key:"fixPosition",value:function(n){var r=this.props.contentSize-this.props.containerSize;return x()(n,0,r)}},{key:"render",value:function(){var n,r=this.props,i=r.prefixCls,c=r.className,h=r.scrollPosition,d=r.containerSize,u=r.contentSize,p=r.miniThumbSize,T=r.zIndex,k=r.scrollbarSize;if(d<1||u<=d)return null;var v=d/u,g=d*v;g<p&&(v=(d-p)/(u-d),g=p),this.scale=v,this.thumbSize=g;var b,H,B=this.isHorizontal();B?(b={width:d,height:k},H={width:g,transform:"translate(".concat(h*v,"px, 0)")}):(b={width:k,height:d},H={height:g,transform:"translate(0, ".concat(h*v,"px)")}),T&&(b.zIndex=T);var z="".concat(i,"-scrollbar");return s.a.createElement("div",{className:R()(z,(n={},Object(N.a)(n,"".concat(z,"-vertical"),!B),Object(N.a)(n,"".concat(z,"-horizontal"),B),n),c),style:b,tabIndex:0,ref:this.refContainer,onKeyDown:this.onKeyDown,onMouseDown:this.onMouseDown,onWheel:this.wheelHandler.onWheel},s.a.createElement("div",{ref:this.refThumb,style:H,className:"".concat(z,"-thumb")}))}}]),e}(s.a.PureComponent);(function(o){o.defaultProps={prefixCls:"x6",orientation:"vertical",contentSize:0,containerSize:0,defaultPosition:0,scrollbarSize:4,miniThumbSize:16,keyboardScrollAmount:40}})(w||(w={}));var j=function(o){Object(O.a)(e,o);var a=Object(D.a)(e);function e(){var t;return Object(E.a)(this,e),t=a.apply(this,arguments),t.onScroll=function(n,r){t.scrolling||t.triggerScrollStart(),Math.abs(r)>Math.abs(n)&&t.state.hasVerticalBar?t.scrollVertical(r,!0):n&&t.state.hasHorizontalBar&&t.scrollHorizontal(n,!0),t.triggerScrollStop()},t.onVerticalScroll=function(n){if(n===t.state.scrollTop)return;t.scrolling||t.triggerScrollStart(),t.scrollVertical(n,!1),t.triggerScrollStop()},t.onHorizontalScroll=function(n){if(n===t.state.scrollLeft)return;t.scrolling||t.triggerScrollStart(),t.scrollHorizontal(n,!1),t.triggerScrollStop()},t.shouldHandleWheelX=function(n){return!t.state.hasHorizontalBar||n===0?!1:(n=Math.round(n),n===0?!1:n<0&&t.state.scrollLeft>0||n>=0&&t.state.scrollLeft<t.state.maxScrollLeft)},t.shouldHandleWheelY=function(n){return!t.state.hasVerticalBar||n===0?!1:(n=Math.round(n),n===0?!1:n<0&&t.state.scrollTop>0||n>=0&&t.state.scrollTop<t.state.maxScrollTop)},t.shouldHandleTouchX=function(n){return t.props.touchable?t.shouldHandleWheelX(n):!1},t.shouldHandleTouchY=function(n){return t.props.touchable?t.shouldHandleWheelY(n):!1},t.onMouseDown=function(n){t.mouseMoveTracker!=null&&t.mouseMoveTracker.capture(n)},t.onMouseMove=function(n,r){t.scrolling||t.triggerScrollStart(),t.scrollVertical(r,!0),t.scrollHorizontal(n,!0)},t.onMouseMoveEnd=function(){t.mouseMoveTracker!=null&&t.mouseMoveTracker.release(),t.triggerScrollStop()},t.refContainer=function(n){t.containerElem=n},t.refContent=function(n){t.contentElem=n},t.onWheel=function(n){t.wheelHandler!=null&&t.wheelHandler.onWheel(n)},t}return Object(S.a)(e,[{key:"UNSAFE_componentWillMount",value:function(){this.triggerScrollStop=fe(this.triggerScrollStopSync,200,this),this.wheelHandler=new ee({onWheel:this.onScroll,shouldHandleScrollX:this.shouldHandleWheelX,shouldHandleScrollY:this.shouldHandleWheelY,stopPropagation:this.props.stopPropagation}),this.props.touchable&&(this.touchHandler=new W({onTouchScroll:this.onScroll,shouldHandleScrollX:this.shouldHandleTouchX,shouldHandleScrollY:this.shouldHandleTouchY,stopPropagation:this.props.stopPropagation})),this.props.dragable&&(this.mouseMoveTracker=new ne({elem:document.documentElement,onMouseMove:this.onMouseMove,onMouseMoveEnd:this.onMouseMoveEnd})),this.setState(this.calculateState())}},{key:"componentDidMount",value:function(){this.mounted=!0,this.setState(this.calculateState())}},{key:"UNSAFE_componentWillReceiveProps",value:function(n){this.setState(this.calculateState(n))}},{key:"componentWillUnmount",value:function(){this.wheelHandler=null,this.props.touchable&&(this.touchHandler=null),this.props.dragable&&this.mouseMoveTracker!=null&&(this.mouseMoveTracker.release(),this.mouseMoveTracker=null);var n=this.triggerScrollStop;n.reset(),this.triggerScrollStopSync()}},{key:"calculateState",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props,r=n.containerWidth!==void 0&&n.containerWidth!==this.props.containerWidth?n.containerWidth:this.props.containerWidth!==void 0?this.props.containerWidth:this.containerElem&&this.containerElem.clientWidth||0,i=n.containerHeight!==void 0&&n.containerHeight!==this.props.containerHeight?n.containerHeight:this.props.containerHeight!==void 0?this.props.containerHeight:this.containerElem&&this.containerElem.clientHeight||0,c=n.contentWidth!==void 0&&n.contentWidth!==this.props.contentWidth?n.contentWidth:this.props.contentWidth!==void 0?this.props.contentWidth:this.contentElem&&this.contentElem.scrollWidth||0,h=n.contentHeight!==void 0&&n.contentHeight!==this.props.contentHeight?n.contentHeight:this.props.contentHeight!==void 0?this.props.contentHeight:this.contentElem&&this.contentElem.scrollHeight||0,d=h>i,u=c>r,p=0,T=0,k=0,v=0,g=i,b=r;d&&(u&&(g-=n.scrollbarSize),k=h-g,n.scrollTop!==this.props.scrollTop?p=n.scrollTop:p=(this.state?this.state.scrollTop:n.scrollTop)||0),u&&(d&&(b-=n.scrollbarSize),v=c-b,n.scrollLeft!==this.props.scrollLeft?T=n.scrollLeft:T=(this.state?this.state.scrollLeft:n.scrollLeft)||0);var H={containerWidth:r,containerHeight:i,contentWidth:c,contentHeight:h,verticalBarHeight:g,horizontalBarWidth:b,hasVerticalBar:d,hasHorizontalBar:u,maxScrollTop:k,maxScrollLeft:v,scrollTop:x()(p,0,k),scrollLeft:x()(T,0,v)};return H}},{key:"scrollVertical",value:function(n,r){var i=x()(r?this.state.scrollTop+n:n,0,this.state.maxScrollTop);this.props.onVerticalScroll&&this.props.onVerticalScroll(i),this.setState({scrollTop:i})}},{key:"scrollHorizontal",value:function(n,r){var i=x()(r?this.state.scrollLeft+n:n,0,this.state.maxScrollLeft);this.props.onHorizontalScroll&&this.props.onHorizontalScroll(i),this.setState({scrollLeft:i})}},{key:"triggerScrollStart",value:function(){if(this.scrolling)return;this.scrolling=!0,this.props.onScrollStart&&this.props.onScrollStart(this.state.scrollLeft,this.state.scrollTop)}},{key:"triggerScrollStopSync",value:function(){if(!this.scrolling)return;this.scrolling=!1,this.props.onScrollEnd&&this.props.onScrollEnd(this.state.scrollLeft,this.state.scrollTop)}},{key:"getScrollbarProps",value:function(){return{zIndex:this.props.zIndex,miniThumbSize:this.props.miniThumbSize,scrollbarSize:this.props.scrollbarSize,keyboardScrollAmount:this.props.keyboardScrollAmount,stopPropagation:!0}}},{key:"renderVerticalBar",value:function(){if(this.state.hasVerticalBar)return s.a.createElement(w,Object.assign({orientation:"vertical",scrollPosition:this.state.scrollTop,contentSize:this.state.contentHeight,containerSize:this.state.verticalBarHeight,onScroll:this.onVerticalScroll},this.getScrollbarProps()))}},{key:"renderHorizontalBar",value:function(){if(this.state.hasHorizontalBar)return s.a.createElement(w,Object.assign({orientation:"horizontal",scrollPosition:this.state.scrollLeft,contentSize:this.state.contentWidth,containerSize:this.state.horizontalBarWidth,onScroll:this.onHorizontalScroll},this.getScrollbarProps()))}},{key:"render",value:function(){var n={};this.props.touchable&&(n.onTouchStart=this.touchHandler.onTouchStart,n.onTouchEnd=this.touchHandler.onTouchEnd,n.onTouchMove=this.touchHandler.onTouchMove,n.onTouchCancel=this.touchHandler.onTouchCancel),this.props.dragable&&(n.onMouseDown=this.onMouseDown);var r={},i={};(this.props.containerWidth!=null||this.mounted)&&(i.width=this.state.containerWidth),(this.props.containerHeight!=null||this.mounted)&&(i.height=this.state.containerHeight),(this.props.contentWidth!=null||this.mounted)&&(r.width=this.state.contentWidth),(this.props.contentHeight!=null||this.mounted)&&(r.height=this.state.contentHeight),this.mounted&&(r.transform="translate(-".concat(this.state.scrollLeft,"px, -").concat(this.state.scrollTop,"px)"));var c=this.props,h=c.prefixCls,d=c.scrollbarAutoHide,u="".concat(h,"-scroll-box");return s.a.createElement("div",Object.assign({},n,{style:Object.assign(Object.assign({},this.props.containerStyle),i),ref:this.refContainer,onWheel:this.onWheel,className:R()(u,Object(N.a)({},"".concat(u,"-auto-hide"),d),this.props.containerClassName)}),s.a.createElement("div",{style:Object.assign(Object.assign({},this.props.contentStyle),r),ref:this.refContent,className:R()("".concat(u,"-content"),this.props.contentClassName)},this.props.children),this.renderVerticalBar(),this.renderHorizontalBar())}}]),e}(s.a.PureComponent);(function(o){o.defaultProps={prefixCls:"x6",scrollTop:0,scrollLeft:0,dragable:!0,touchable:!0,scrollbarAutoHide:!0,scrollbarSize:w.defaultProps.scrollbarSize,miniThumbSize:w.defaultProps.miniThumbSize,keyboardScrollAmount:w.defaultProps.keyboardScrollAmount}})(j||(j={}));var Ve=l(79),Me=function(o){Object(O.a)(e,o);var a=Object(D.a)(e);function e(){return Object(E.a)(this,e),a.apply(this,arguments)}return Object(S.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:{padding:24}},s.a.createElement(j,{containerWidth:300,containerHeight:200,contentWidth:1200,contentHeight:3e3,contentStyle:{position:"relative",cursor:"grab",background:"linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)"},containerStyle:{border:"1px solid #f0f0f0"}},s.a.createElement("div",{style:{position:"absolute",top:8,left:8}},"Top-Left-Corner"),s.a.createElement("div",{style:{position:"absolute",top:8,right:8}},"Top-Right-Corner"),s.a.createElement("div",{style:{position:"absolute",bottom:8,left:8}},"Bottom-Left-Corner"),s.a.createElement("div",{style:{position:"absolute",bottom:8,right:8}},"Bottom-Right-Corner")))}}]),e}(s.a.PureComponent),Xe=l(134),Ce=l(130),ke=l(135),Oe=l(136),De=l(137),L=l(132),Ke=l(83),Ae=l(53),Le=l(54),Ge=l(87),Y=l(86),He=function(){return s.a.createElement("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.4545 0H10.5C10.1988 0 10 0.198754 10 0.5C10 0.801246 10.1988 1 10.5 1H13L9.5 4.5L10.5 5.5L14 2V4.5C14 4.80125 14.1988 5 14.5 5C14.8012 5 15 4.80125 15 4.5V0.545455C15 0.244208 14.7558 0 14.4545 0ZM1.73333 1H8.00001V1.86667H1.73333C1.25469 1.86667 0.866667 2.25469 0.866667 2.73333V9.32003C0.866667 9.79868 1.25469 10.1867 1.73333 10.1867H12.1333C12.612 10.1867 13 9.79868 13 9.32004V7.00003H13.8667V9.32004C13.8667 10.2773 13.0906 11.0534 12.1333 11.0534H1.73333C0.776041 11.0534 0 10.2773 0 9.32003V2.73333C0 1.77604 0.77604 1 1.73333 1Z",fill:"currentcolor"}))},ze=function(o){Object(O.a)(e,o);var a=Object(D.a)(e);function e(){return Object(E.a)(this,e),a.apply(this,arguments)}return Object(S.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"demo-toolbar"},s.a.createElement(L.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"重新加载",mouseEnterDelay:.5},s.a.createElement(Xe.a,{onClick:function(){window.location.reload()}})),window.frameElement&&s.a.createElement(L.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"在新窗口打开",mouseEnterDelay:.5},s.a.createElement("a",{href:"".concat(window.location.href),rel:"noopener noreferrer",target:"_blank"},s.a.createElement(Ce.a,{component:He}))),s.a.createElement(L.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"在 Github 中查看",mouseEnterDelay:.5},s.a.createElement("a",{href:"".concat(Y.host),rel:"noopener noreferrer",target:"_blank"},s.a.createElement(ke.a,null))),s.a.createElement(L.a,{arrowPointAtCenter:!0,placement:"bottomLeft",title:"在 CodeSandbox 中打开",mouseEnterDelay:.5},s.a.createElement("form",{action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank"},s.a.createElement("input",{type:"hidden",name:"parameters",value:Object(Le.getParameters)(Y.getCodeSandboxParams())}),s.a.createElement("button",{type:"submit"},s.a.createElement(Oe.a,null)))),s.a.createElement(L.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"在 StackBlitz 中打开",mouseEnterDelay:.5},s.a.createElement(De.a,{onClick:function(){Ae.a.openProject(Y.getStackblitzPrefillConfig(),{openFile:"src/app.tsx"})}})))}}]),e}(s.a.Component),Pe=l(133),Je=l(103),F=function(o){Object(O.a)(e,o);var a=Object(D.a)(e);function e(t){var n;return Object(E.a)(this,e),n=a.call(this,t),n.refContainer=function(r){n.container=r},e.restoreIframeSize(),n}return Object(S.a)(e,[{key:"componentDidMount",value:function(){var n=this;if(this.updateIframeSize(),window.ResizeObserver){var r=new window.ResizeObserver(function(){n.updateIframeSize()});r.observe(this.container)}else window.addEventListener("resize",function(){return n.updateIframeSize()});setTimeout(function(){var i=document.getElementById("loading");i&&i.parentNode&&i.parentNode.removeChild(i)},1e3)}},{key:"updateIframeSize",value:function(){var n=window.frameElement;if(n){var r=this.container.scrollHeight||this.container.clientHeight;n.style.width="100%",n.style.height="".concat(r+16,"px"),n.style.border="0",n.style.overflow="hidden",e.saveIframeSize()}}},{key:"render",value:function(){return s.a.createElement("div",{className:"demo-wrap",ref:this.refContainer},s.a.createElement(ze,null),this.props.children)}}]),e}(s.a.Component);(function(o){var a=window.location.pathname,e="x6-iframe-size";function t(){var i=localStorage.getItem(e),c;if(i)try{c=JSON.parse(i)}catch(h){}else c={};return c}function n(){var i=window.frameElement;if(i){var c=i.style,h={width:c.width,height:c.height},d=t();d[a]=h,localStorage.setItem(e,JSON.stringify(d))}}o.saveIframeSize=n;function r(){var i=window.frameElement;if(i){var c=t(),h=c[a];h&&(i.style.width=h.width||"100%",i.style.height=h.height||"auto")}}o.restoreIframeSize=r})(F||(F={}));var _e=l(104),Ue=function(a){var e=a.children;return s.a.createElement(Pe.a.ErrorBoundary,null,s.a.createElement(F,null,e))};oe.a.render(s.a.createElement(Ue,null,s.a.createElement(Me,null)),document.getElementById("root"))},74:function(y,m,l){y.exports=l(126)},79:function(y,m,l){},86:function(y,m,l){"use strict";l.r(m),l.d(m,"host",function(){return P}),l.d(m,"getCodeSandboxParams",function(){return s}),l.d(m,"getStackblitzPrefillConfig",function(){return U});const P="https://github.com/antvis/X6/tree/master//home/runner/work/X6/X6/examples/x6-example-sites/packages/api/ui/scrollbox/basic";function s(){return{files:{"package.json":{isBinary:!1,content:'{"dependencies":{"@antv/x6-components":"latest","antd":"^4.4.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.1"},"devDependencies":{"@types/react":"^16.9.19","@types/react-dom":"^16.9.5","typescript":"^4.0.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'},".gitignore":{content:`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
react-app-env.d.ts
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,isBinary:!1},"public/index.html":{content:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title></title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
`,isBinary:!1},"src/app.tsx":{content:`import React from 'react'
import { ScrollBox } from '@antv/x6-components'
import '@antv/x6-components/es/scroll-box/style/index.css'

export default class Example extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: 24 }}>
        <ScrollBox
          containerWidth={300}
          containerHeight={200}
          contentWidth={1200}
          contentHeight={3000}
          contentStyle={{
            position: 'relative',
            cursor: 'grab',
            background:
              'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
          }}
          containerStyle={{ border: '1px solid #f0f0f0' }}
        >
          <div style={{ position: 'absolute', top: 8, left: 8 }}>
            Top-Left-Corner
          </div>
          <div style={{ position: 'absolute', top: 8, right: 8 }}>
            Top-Right-Corner
          </div>
          <div style={{ position: 'absolute', bottom: 8, left: 8 }}>
            Bottom-Left-Corner
          </div>
          <div style={{ position: 'absolute', bottom: 8, right: 8 }}>
            Bottom-Right-Corner
          </div>
        </ScrollBox>
      </div>
    )
  }
}
`,isBinary:!1},"src/index.css":{content:`body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`,isBinary:!1},"src/index.tsx":{content:`import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))`,isBinary:!1},"tsconfig.json":{content:`{
  "compilerOptions": {
    "allowJs": true,
    "strict": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "target": "es5",
    "lib": [
      "dom",
      "es2015"
    ]
  },
  "include": [
    "src"
  ]
}
`,isBinary:!1}}}}function U(){return{title:"api/ui/scrollbox/basic",description:"",template:"create-react-app",dependencies:{"@antv/x6-components":"latest",antd:"^4.4.2",react:"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.1"},files:{"package.json":'{"dependencies":{"@antv/x6-components":"latest","antd":"^4.4.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.1"},"devDependencies":{"@types/react":"^16.9.19","@types/react-dom":"^16.9.5","typescript":"^4.0.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}',".gitignore":`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
react-app-env.d.ts
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,"public/index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title></title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
`,"src/app.tsx":`import React from 'react'
import { ScrollBox } from '@antv/x6-components'
import '@antv/x6-components/es/scroll-box/style/index.css'

export default class Example extends React.PureComponent {
  render() {
    return (
      <div style={{ padding: 24 }}>
        <ScrollBox
          containerWidth={300}
          containerHeight={200}
          contentWidth={1200}
          contentHeight={3000}
          contentStyle={{
            position: 'relative',
            cursor: 'grab',
            background:
              'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
          }}
          containerStyle={{ border: '1px solid #f0f0f0' }}
        >
          <div style={{ position: 'absolute', top: 8, left: 8 }}>
            Top-Left-Corner
          </div>
          <div style={{ position: 'absolute', top: 8, right: 8 }}>
            Top-Right-Corner
          </div>
          <div style={{ position: 'absolute', bottom: 8, left: 8 }}>
            Bottom-Left-Corner
          </div>
          <div style={{ position: 'absolute', bottom: 8, right: 8 }}>
            Bottom-Right-Corner
          </div>
        </ScrollBox>
      </div>
    )
  }
}
`,"src/index.css":`body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`,"src/index.tsx":`import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))`,"tsconfig.json":`{
  "compilerOptions": {
    "allowJs": true,
    "strict": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "target": "es5",
    "lib": [
      "dom",
      "es2015"
    ]
  },
  "include": [
    "src"
  ]
}
`}}}},87:function(y,m,l){}},[[74,1,2]]]);
