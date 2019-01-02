/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e);
// Pass this if window is not defined yet
}("undefined"!=typeof window?window:this,function(x,e){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function m(e,t,n){var i,o=(t=t||se).createElement("script");if(o.text=e,n)for(i in we)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function g(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?fe[he.call(e)]||"object":typeof e;
// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function a(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=g(e);return!ye(e)&&!be(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function u(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
// Implement the identical functionality for filter and not
function t(e,n,i){return ye(n)?ke.grep(e,function(e,t){return!!n.call(e,t,e)!==i}):
// Single element
n.nodeType?ke.grep(e,function(e){return e===n!==i}):
// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?ke.grep(e,function(e){return-1<de.call(n,e)!==i}):ke.filter(n,e,i)}function n(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function c(e){var n={};return ke.each(e.match(Le)||[],function(e,t){n[t]=!0}),n}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */function d(e){return e}function f(e){throw e}function l(e,t,n,i){var o;try{
// Check for promise aspect first to privilege synchronous behavior
e&&ye(o=e.promise)?o.call(e).done(t).fail(n):e&&ye(o=e.then)?o.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i));
// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
// The ready event handler and self cleanup method
function i(){se.removeEventListener("DOMContentLoaded",i),x.removeEventListener("load",i),ke.ready()}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
// Used by camelCase as callback to replace()
function o(e,t){return t.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function h(e){return e.replace(He,"ms-").replace(Re,o)}function r(){this.expando=ke.expando+r.uid++}function s(e){return"true"===e||"false"!==e&&("null"===e?null:
// Only convert to a number if it doesn't change the string
e===+e+""?+e:Be.test(e)?JSON.parse(e):e)}function p(e,t,n){var i;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(We,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=s(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Fe.set(e,t,n)}else n=void 0;return n}function v(e,t,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return ke.css(e,t,"")},l=a(),u=n&&n[3]||(ke.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(ke.cssNumber[t]||"px"!==u&&+l)&&Ue.exec(ke.css(e,t));if(c&&c[3]!==u){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
u=u||c[3],
// Iteratively approximate from a nonzero starting point
c=+l||1;s--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
ke.style(e,t,c+u),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),c/=r;c*=2,ke.style(e,t,c+u),
// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+l||0,
// Apply relative offset (+=/-=) if specified
o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function y(e){var t,n=e.ownerDocument,i=e.nodeName,o=Ve[i];return o||(t=n.body.appendChild(n.createElement(i)),o=ke.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),Ve[i]=o)}function b(e,t){
// Determine new display value for elements that need to change
for(var n,i,o=[],r=0,s=e.length;r<s;r++)(i=e[r]).style&&(n=i.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(o[r]=Ie.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&Ye(i)&&(o[r]=y(i))):"none"!==n&&(o[r]="none",
// Remember what we're overwriting
Ie.set(i,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(r=0;r<s;r++)null!=o[r]&&(e[r].style.display=o[r]);return e}function w(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&u(e,t)?ke.merge([e],n):n}
// Mark scripts as having already been evaluated
function $(e,t){for(var n=0,i=e.length;n<i;n++)Ie.set(e[n],"globalEval",!t||Ie.get(t[n],"globalEval"))}function k(e,t,n,i,o){for(var r,s,a,l,u,c,d=t.createDocumentFragment(),f=[],h=0,p=e.length;h<p;h++)if((r=e[h])||0===r)
// Add nodes directly
if("object"===g(r))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(f,r.nodeType?[r]:r);
// Convert non-html into a text node
else if(tt.test(r)){for(s=s||d.appendChild(t.createElement("div")),
// Deserialize a standard representation
a=(Ze.exec(r)||["",""])[1].toLowerCase(),l=et[a]||et._default,s.innerHTML=l[1]+ke.htmlPrefilter(r)+l[2],
// Descend through wrappers to the right content
c=l[0];c--;)s=s.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(f,s.childNodes),
// Ensure the created nodes are orphaned (#12392)
(
// Remember the top-level container
s=d.firstChild).textContent=""}else f.push(t.createTextNode(r));
// Convert html into DOM nodes
// Remove wrapper from fragment
for(d.textContent="",h=0;r=f[h++];)
// Skip elements already in the context collection (trac-4087)
if(i&&-1<ke.inArray(r,i))o&&o.push(r);else
// Capture executables
if(u=ke.contains(r.ownerDocument,r),
// Append to fragment
s=w(d.appendChild(r),"script"),
// Preserve script evaluation history
u&&$(s),n)for(c=0;r=s[c++];)Je.test(r.type||"")&&n.push(r);return d}function j(){return!0}function _(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function C(){try{return se.activeElement}catch(e){}}function T(e,t,n,i,o,r){var s,a;
// Types can be a map of types/handlers
if("object"==typeof t){for(a in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
i=i||n,n=void 0),t)T(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(
// ( types, fn )
o=n,i=n=void 0):null==o&&("string"==typeof n?(
// ( types, selector, fn )
o=i,i=void 0):(
// ( types, data, fn )
o=i,i=n,n=void 0)),!1===o)o=_;else if(!o)return e;return 1===r&&(s=o,
// Use same guid so caller can remove using origFn
(o=function(e){
// Can use an empty set, since event contains the info
return ke().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=ke.guid++)),e.each(function(){ke.event.add(this,t,o,i,n)})}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// Prefer a tbody over its parent table for containing new rows
function O(e,t){return u(e,"table")&&u(11!==t.nodeType?t:t.firstChild,"tr")&&ke(e).children("tbody")[0]||e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function S(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function E(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function z(e,t){var n,i,o,r,s,a,l,u;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Ie.hasData(e)&&(r=Ie.access(e),s=Ie.set(t,r),u=r.events))for(o in delete s.handle,s.events={},u)for(n=0,i=u[o].length;n<i;n++)ke.event.add(t,o,u[o][n]);
// 2. Copy user data
Fe.hasData(e)&&(a=Fe.access(e),l=ke.extend({},a),Fe.set(t,l))}}
// Fix IE bugs, see support tests
function A(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Xe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function P(n,i,o,r){
// Flatten any nested arrays
i=ue.apply([],i);var e,t,s,a,l,u,c=0,d=n.length,f=d-1,h=i[0],p=ye(h);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||1<d&&"string"==typeof h&&!ve.checkClone&&dt.test(h))return n.each(function(e){var t=n.eq(e);p&&(i[0]=h.call(this,e,t.html())),P(t,i,o,r)});if(d&&(t=(e=k(i,n[0].ownerDocument,!1,n,r)).firstChild,1===e.childNodes.length&&(e=t),t||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=(s=ke.map(w(e,"script"),S)).length;c<d;c++)l=e,c!==f&&(l=ke.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
a&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ke.merge(s,w(l,"script"))),o.call(n[c],l,c);if(a)
// Evaluate executable scripts on first document insertion
for(u=s[s.length-1].ownerDocument,
// Reenable scripts
ke.map(s,E),c=0;c<a;c++)l=s[c],Je.test(l.type||"")&&!Ie.access(l,"globalEval")&&ke.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
ke._evalUrl&&ke._evalUrl(l.src):m(l.textContent.replace(ft,""),u,l))}return n}function L(e,t,n){for(var i,o=t?ke.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||ke.cleanData(w(i)),i.parentNode&&(n&&ke.contains(i.ownerDocument,i)&&$(w(i,"script")),i.parentNode.removeChild(i));return e}function D(e,t,n){var i,o,r,s,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
a=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||pt(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||ke.contains(e.ownerDocument,e)||(s=ke.style(e,t)),
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!ve.pixelBoxStyles()&&ht.test(s)&&mt.test(t)&&(
// Remember the original values
i=a.width,o=a.minWidth,r=a.maxWidth,
// Put in the new values to get a computed value out
a.minWidth=a.maxWidth=a.width=s,s=n.width,
// Revert the changed values
a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
s+"":s}function q(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!e())
// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}
// Return a css property mapped to a potentially vendor prefixed property
function M(e){
// Shortcut for names that are not vendor prefixed
if(e in $t)return e;
// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),n=wt.length;n--;)if((e=wt[n]+t)in $t)return e}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function H(e){var t=ke.cssProps[e];return t||(t=ke.cssProps[e]=M(e)||e),t}function R(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var i=Ue.exec(t);return i?
// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function N(e,t,n,i,o,r){var s="width"===t?1:0,a=0,l=0;
// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)
// Both box models exclude margin
"margin"===n&&(l+=ke.css(e,n+Qe[s],!0,o)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
i?(
// For "content", subtract padding
"content"===n&&(l-=ke.css(e,"padding"+Qe[s],!0,o)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=ke.css(e,"border"+Qe[s]+"Width",!0,o))):(
// Add padding
l+=ke.css(e,"padding"+Qe[s],!0,o),
// For "border" or "margin", add border
"padding"!==n?l+=ke.css(e,"border"+Qe[s]+"Width",!0,o):a+=ke.css(e,"border"+Qe[s]+"Width",!0,o));
// Account for positive content-box scroll gutter when requested by providing computedVal
return!i&&0<=r&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-.5))),l}function I(e,t,n){
// Start with computed style
var i=pt(e),o=D(e,t,i),r="border-box"===ke.css(e,"boxSizing",!1,i),s=r;
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(ht.test(o)){if(!n)return o;o="auto"}
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Adjust for the element's box model
return s=s&&(ve.boxSizingReliable()||o===e.style[t]),
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
("auto"===o||!parseFloat(o)&&"inline"===ke.css(e,"display",!1,i))&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)],
// offsetWidth/offsetHeight provide border-box values
s=!0),(
// Normalize "" and auto
o=parseFloat(o)||0)+N(e,t,n||(r?"border":"content"),s,i,
// Provide the current computed size to request scroll gutter calculation (gh-3589)
o)+"px"}function F(e,t,n,i,o){return new F.prototype.init(e,t,n,i,o)}function B(){xt&&(!1===se.hidden&&x.requestAnimationFrame?x.requestAnimationFrame(B):x.setTimeout(B,ke.fx.interval),ke.fx.tick())}
// Animations created synchronously will run synchronously
function W(){return x.setTimeout(function(){kt=void 0}),kt=Date.now()}
// Generate parameters to create a standard animation
function G(e,t){var n,i=0,o={height:e};
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=Qe[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function U(e,t,n){for(var i,o=(K.tweeners[t]||[]).concat(K.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))
// We're done with this property
return i}function Q(e,t,n){var i,o,r,s,a,l,u,c,d="width"in t||"height"in t,f=this,h={},p=e.style,m=e.nodeType&&Ye(e),g=Ie.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(i in n.queue||(null==(s=ke._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,f.always(function(){
// Ensure the complete handler is called before this completes
f.always(function(){s.unqueued--,ke.queue(e,"fx").length||s.empty.fire()})})),t)if(o=t[i],jt.test(o)){if(delete t[i],r=r||"toggle"===o,o===(m?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!g||void 0===g[i])continue;m=!0}h[i]=g&&g[i]||ke.style(e,i)}
// Bail out if this is a no-op like .hide().hide()
if((l=!ke.isEmptyObject(t))||!ke.isEmptyObject(h))for(i in
// Restrict "overflow" and "display" styles during box animations
d&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(
// Identify a display type, preferring old show/hide data over the CSS cascade
u=g&&g.display)&&(u=Ie.get(e,"display")),"none"===(c=ke.css(e,"display"))&&(u?c=u:(
// Get nonempty value(s) by temporarily forcing visibility
b([e],!0),u=e.style.display||u,c=ke.css(e,"display"),b([e]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=u)&&"none"===ke.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(f.done(function(){p.display=u}),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),
// Implement show/hide animations
l=!1,h)
// General show/hide setup for this element animation
l||(g?"hidden"in g&&(m=g.hidden):g=Ie.access(e,"fxshow",{display:u}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
r&&(g.hidden=!m),
// Show elements before animating them
m&&b([e],!0)
/* eslint-disable no-loop-func */,f.done(function(){for(i in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
m||b([e]),Ie.remove(e,"fxshow"),h)ke.style(e,i,h[i])})),
// Per-property setup
l=U(m?g[i]:0,i,f),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}function Y(e,t){var n,i,o,r,s;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(o=t[i=h(n)],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(s=ke.cssHooks[i])&&"expand"in s)
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in r=s.expand(r),delete e[i],r)n in e||(e[n]=r[n],t[n]=o);else t[i]=o}function K(s,e,t){var n,a,i=0,o=K.prefilters.length,l=ke.Deferred().always(function(){
// Don't match elem in the :animated selector
delete r.elem}),r=function(){if(a)return!1;for(var e=kt||W(),t=Math.max(0,u.startTime+u.duration-e),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
n,i=1-(t/u.duration||0),o=0,r=u.tweens.length;o<r;o++)u.tweens[o].run(i);
// If there's more to do, yield
return l.notifyWith(s,[u,i,t]),i<1&&r?t:(
// If this was an empty animation, synthesize a final progress notification
r||l.notifyWith(s,[u,1,0]),
// Resolve the animation and report its conclusion
l.resolveWith(s,[u]),!1)},u=l.promise({elem:s,props:ke.extend({},e),opts:ke.extend(!0,{specialEasing:{},easing:ke.easing._default},t),originalProperties:e,originalOptions:t,startTime:kt||W(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ke.Tween(s,u.opts,e,t,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var t=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=e?u.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)u.tweens[t].run(1);
// Resolve when we played the last frame; otherwise, reject
return e?(l.notifyWith(s,[u,1,0]),l.resolveWith(s,[u,e])):l.rejectWith(s,[u,e]),this}}),c=u.props;for(Y(c,u.opts.specialEasing);i<o;i++)if(n=K.prefilters[i].call(u,s,c,u.opts))return ye(n.stop)&&(ke._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return ke.map(c,U,u),ye(u.opts.start)&&u.opts.start.call(s,u),
// Attach callbacks from options
u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),ke.fx.timer(ke.extend(r,{elem:s,anim:u,queue:u.opts.queue})),u}
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function V(e){var t;return(e.match(Le)||[]).join(" ")}function X(e){return e.getAttribute&&e.getAttribute("class")||""}function Z(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Le)||[]}function J(n,e,i,o){var t;if(Array.isArray(e))
// Serialize array item.
ke.each(e,function(e,t){i||Rt.test(n)?
// Treat each array item as a scalar.
o(n,t):
// Item is non-scalar (array or object), encode its numeric index.
J(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,o)});else if(i||"object"!==g(e))
// Serialize scalar item.
o(n,e);else
// Serialize object item.
for(t in e)J(n+"["+t+"]",e[t],i,o)}
// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function ee(r){
// dataTypeExpression is optional and defaults to "*"
return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,i=0,o=e.toLowerCase().match(Le)||[];if(ye(t))
// For each dataType in the dataTypeExpression
for(;n=o[i++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(t)):(r[n]=r[n]||[]).push(t)}}
// Base inspection function for prefilters and transports
function te(t,o,r,s){function a(e){var i;return l[e]=!0,ke.each(t[e]||[],function(e,t){var n=t(o,r,s);return"string"!=typeof n||u||l[n]?u?!(i=n):void 0:(o.dataTypes.unshift(n),a(n),!1)}),i}var l={},u=t===Xt;return a(o.dataTypes[0])||!l["*"]&&a("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ne(e,t){var n,i,o=ke.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&ke.extend(!0,e,i),e}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ie(e,t,n){
// Remove auto dataType and get content-type in the process
for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)r=l[0];else{
// Try convertible dataTypes
for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}
// Or just use first one
r=r||s}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(r)return r!==l[0]&&l.unshift(r),n[r]}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function oe(e,t,n,i){var o,r,s,a,l,u={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];
// Convert to each sequential dataType
for(r=c.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),
// Apply the dataFilter if provided
!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===r)r=l;
// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==r){
// If none found, seek a pair
if(!(
// Seek a direct converter
s=u[l+" "+r]||u["* "+r]))for(o in u)if((
// If conv2 outputs current
a=o.split(" "))[1]===r&&(
// If prev can be converted to accepted input
s=u[l+" "+a[0]]||u["* "+a[0]])){
// Condense equivalence converters
!0===s?s=u[o]:!0!==u[o]&&(r=a[0],c.unshift(a[1]));break}
// Apply converter (if not an equivalence)
if(!0!==s)
// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}var re=[],se=x.document,ae=Object.getPrototypeOf,le=re.slice,ue=re.concat,ce=re.push,de=re.indexOf,fe={},he=fe.toString,pe=fe.hasOwnProperty,me=pe.toString,ge=me.call(Object),ve={},ye=function e(t){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof t&&"number"!=typeof t.nodeType},be=function e(t){return null!=t&&t===t.window},we={type:!0,src:!0,noModule:!0},$e="3.3.1",
// Define a local copy of jQuery
ke=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new ke.fn.init(e,t)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
xe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;ke.fn=ke.prototype={
// The current version of jQuery being used
jquery:$e,constructor:ke,
// The default length of a jQuery object is 0
length:0,toArray:function(){return le.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
return null==e?le.call(this):e<0?this[e+this.length]:this[e];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=ke.merge(this.constructor(),e);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return ke.each(this,e)},map:function(n){return this.pushStack(ke.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(le.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ce,sort:re.sort,splice:re.splice},ke.extend=ke.fn.extend=function(e){var t,n,i,o,r,s,a=e||{},l=1,u=arguments.length,c=!1;
// Handle a deep copy situation
for("boolean"==typeof a&&(c=a,
// Skip the boolean and the target
a=arguments[l]||{},l++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||ye(a)||(a={}),
// Extend jQuery itself if only one argument is passed
l===u&&(a=this,l--);l<u;l++)
// Only deal with non-null/undefined values
if(null!=(t=arguments[l]))
// Extend the base object
for(n in t)i=a[n],
// Prevent never-ending loop
a!==(o=t[n])&&(
// Recurse if we're merging plain objects or arrays
c&&o&&(ke.isPlainObject(o)||(r=Array.isArray(o)))?(s=r?(r=!1,i&&Array.isArray(i)?i:[]):i&&ke.isPlainObject(i)?i:{},
// Never move original objects, clone them
a[n]=ke.extend(c,s,o)):void 0!==o&&(a[n]=o));
// Return the modified object
return a},ke.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+($e+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!e||"[object Object]"!==he.call(e))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(t=ae(e))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
n=pe.call(t,"constructor")&&t.constructor)&&me.call(n)===ge)},isEmptyObject:function(e){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){m(e)},each:function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(xe,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(a(Object(e))?ke.merge(n,"string"==typeof e?[e]:e):ce.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:de.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var i,o=[],r=0,s=e.length,a=!n;r<s;r++)(i=!t(e[r],r))!==a&&o.push(e[r]);return o},
// arg is for internal usage only
map:function(e,t,n){var i,o,r=0,s=[];
// Go through the array, translating each of the items to their new values
if(a(e))for(i=e.length;r<i;r++)null!=(o=t(e[r],r,n))&&s.push(o);
// Go through every key on the object,
else for(r in e)null!=(o=t(e[r],r,n))&&s.push(o);
// Flatten any nested arrays
return ue.apply([],s)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:ve}),"function"==typeof Symbol&&(ke.fn[Symbol.iterator]=re[Symbol.iterator]),
// Populate the class2type map
ke.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){fe["[object "+t+"]"]=t.toLowerCase()});var je=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(n){function w(e,t,n,i){var o,r,s,a,l,u,c,d=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
f=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&((t?t.ownerDocument||t:I)!==P&&A(t),t=t||P,D)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==f&&(l=ve.exec(e)))
// ID selector
if(o=l[1]){
// Document context
if(9===f){if(!(s=t.getElementById(o)))return n;
// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(s.id===o)return n.push(s),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(s=d.getElementById(o))&&R(t,s)&&s.id===o)return n.push(s),n;
// Type selector
}else{if(l[2])return Z.apply(n,t.getElementsByTagName(e)),n;
// Class selector
if((o=l[3])&&k.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(o)),n}
// Take advantage of querySelectorAll
if(k.qsa&&!U[e+" "]&&(!q||!q.test(e))){if(1!==f)d=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(a=t.getAttribute("id"))?a=a.replace($e,ke):t.setAttribute("id",a=N),r=(
// Prefix every selector in the list
u=C(e)).length;r--;)u[r]="#"+a+" "+p(u[r]);c=u.join(","),
// Expand context for sibling selectors
d=ye.test(e)&&h(t.parentNode)||t}if(c)try{return Z.apply(n,d.querySelectorAll(c)),n}catch(e){}finally{a===N&&t.removeAttribute("id")}}}
// All others
return O(e.replace(ae,"$1"),t,n,i)}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function e(){function n(e,t){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return i.push(e+" ")>x.cacheLength&&
// Only keep the most recent entries
delete n[i.shift()],n[e+" "]=t}var i=[];return n}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function l(e){return e[N]=!0,e}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function o(e){var t=P.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function t(e,t){for(var n=e.split("|"),i=n.length;i--;)x.attrHandle[n[i]]=t}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function u(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(i)return i;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function i(n){return function(e){var t;return"input"===e.nodeName.toLowerCase()&&e.type===n}}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function r(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function s(t){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in e?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?
// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||
// Where there is no isDisabled, check manually
/* jshint -W018 */
e.isDisabled!==!t&&je(e)===t:e.disabled===t:"label"in e&&e.disabled===t;
// Remaining elements are neither :enabled nor :disabled
}}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function a(s){return l(function(r){return r=+r,l(function(e,t){
// Match elements found at the specified indexes
for(var n,i=s([],e.length,r),o=i.length;o--;)e[n=i[o]]&&(e[n]=!(t[n]=e[n]))})})}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function h(e){return e&&void 0!==e.getElementsByTagName&&e}
// Expose support vars for convenience
// Easy API for creating new setFilters
function c(){}function p(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function d(a,e,t){var l=e.dir,u=e.next,c=u||l,d=t&&"parentNode"===c,f=B++;return e.first?
// Check against closest ancestor/preceding element
function(e,t,n){for(;e=e[l];)if(1===e.nodeType||d)return a(e,t,n);return!1}:
// Check against all ancestor/preceding elements
function(e,t,n){var i,o,r,s=[F,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;e=e[l];)if((1===e.nodeType||d)&&a(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||d)if(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=e[N]||(e[N]={}))[e.uniqueID]||(r[e.uniqueID]={}),u&&u===e.nodeName.toLowerCase())e=e[l]||e;else{if((i=o[c])&&i[0]===F&&i[1]===f)
// Assign to newCache so results back-propagate to previous elements
return s[2]=i[2];
// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
o[c]=s)[2]=a(e,t,n))return!0}return!1}}function f(o){return 1<o.length?function(e,t,n){for(var i=o.length;i--;)if(!o[i](e,t,n))return!1;return!0}:o[0]}function y(e,t,n){for(var i=0,o=t.length;i<o;i++)w(e,t[i],n);return n}function $(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),u&&t.push(a)));return s}function b(h,p,m,g,v,e){return g&&!g[N]&&(g=b(g)),v&&!v[N]&&(v=b(v,e)),l(function(e,t,n,i){var o,r,s,a=[],l=[],u=t.length,
// Get initial elements from seed or context
c=e||y(p||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
d=!h||!e&&p?c:$(c,a,h,n,i),f=m?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
v||(e?h:u||g)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
t:d;
// Find primary matches
// Apply postFilter
if(m&&m(d,f,n,i),g)for(o=$(f,l),g(o,[],n,i),
// Un-match failing elements by moving them back to matcherIn
r=o.length;r--;)(s=o[r])&&(f[l[r]]=!(d[l[r]]=s));if(e){if(v||h){if(v){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
o=[],r=f.length;r--;)(s=f[r])&&
// Restore matcherIn since elem is not yet a final match
o.push(d[r]=s);v(null,f=[],o,i)}
// Move matched elements from seed to results to keep them synchronized
for(r=f.length;r--;)(s=f[r])&&-1<(o=v?ee(e,s):a[r])&&(e[o]=!(t[o]=s))}
// Add elements to results, through postFinder if defined
}else f=$(f===t?f.splice(u,f.length):f),v?v(null,t,f,i):Z.apply(t,f)})}function m(e){for(var o,t,n,i=e.length,r=x.relative[e[0].type],s=r||x.relative[" "],a=r?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=d(function(e){return e===o},s,!0),u=d(function(e){return-1<ee(o,e)},s,!0),c=[function(e,t,n){var i=!r&&(n||t!==S)||((o=t).nodeType?l(e,t,n):u(e,t,n));
// Avoid hanging onto element (issue #299)
return o=null,i}];a<i;a++)if(t=x.relative[e[a].type])c=[d(f(c),t)];else{
// Return special upon seeing a positional matcher
if((t=x.filter[e[a].type].apply(null,e[a].matches))[N]){for(
// Find the next relative operator (if any) for proper handling
n=++a;n<i&&!x.relative[e[n].type];n++);return b(1<a&&f(c),1<a&&p(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),t,a<n&&m(e.slice(a,n)),n<i&&m(e=e.slice(n)),n<i&&p(e))}c.push(t)}return f(c)}function g(g,v){var y=0<v.length,b=0<g.length,e=function(e,t,n,i,o){var r,s,a,l=0,u="0",c=e&&[],d=[],f=S,
// We must always have either seed elements or outermost context
h=e||b&&x.find.TAG("*",o),
// Use integer dirruns iff this is the outermost matcher
p=F+=null==f?1:Math.random()||.1,m=h.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(o&&(S=t===P||t||o);u!==m&&null!=(r=h[u]);u++){if(b&&r){for(s=0,t||r.ownerDocument===P||(A(r),n=!D);a=g[s++];)if(a(r,t||P,n)){i.push(r);break}o&&(F=p)}
// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(r=!a&&r)&&l--,
// Lengthen the array for every element, matched or not
e&&c.push(r))}
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(l+=u,y&&u!==l){for(s=0;a=v[s++];)a(c,d,t,n);if(e){
// Reintegrate element matches to eliminate the need for sorting
if(0<l)for(;u--;)c[u]||d[u]||(d[u]=V.call(i));
// Discard index placeholder values to get only actual matches
d=$(d)}
// Add matches to results
Z.apply(i,d),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
o&&!e&&0<d.length&&1<l+v.length&&w.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return o&&(F=p,S=f),c};return y?l(e):e}var v,k,x,j,_,C,T,O,S,E,z,
// Local document vars
A,P,L,D,q,M,H,R,
// Instance-specific data
N="sizzle"+1*new Date,I=n.document,F=0,B=0,W=e(),G=e(),U=e(),Q=function(e,t){return e===t&&(z=!0),0},
// Instance methods
Y={}.hasOwnProperty,K=[],V=K.pop,X=K.push,Z=K.push,J=K.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ne="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
ie="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
oe="\\["+ne+"*("+ie+")(?:"+ne+
// Operator (capture 2)
"*([*^$|!~]?=)"+ne+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",re=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(re),fe=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var i="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return i!=i||n?t:i<0?
// BMP codepoint
String.fromCharCode(i+65536):
// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(i>>10|55296,1023&i|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
$e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ke=function(e,t){return t?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;
// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
xe=function(){A()},je=d(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Z.apply(K=J.call(I.childNodes),I.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
K[I.childNodes.length].nodeType}catch(e){Z={apply:K.length?
// Leverage slice if possible
function(e,t){X.apply(e,J.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}
// Add button/input type pseudos
for(v in k=w.support={},
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
_=w.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
A=w.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:I;
// Return early if doc is invalid or already selected
return i!==P&&9===i.nodeType&&i.documentElement&&(
// Update global variables
L=(P=i).documentElement,D=!_(P),
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
I!==P&&(n=P.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
k.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
k.getElementsByTagName=o(function(e){return e.appendChild(P.createComment("")),!e.getElementsByTagName("*").length}),
// Support: IE<9
k.getElementsByClassName=ge.test(P.getElementsByClassName),
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
k.getById=o(function(e){return L.appendChild(e).id=N,!P.getElementsByName||!P.getElementsByName(N).length}),
// ID filter and find
k.getById?(x.filter.ID=function(e){var t=e.replace(be,we);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&D){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(be,we);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
x.find.ID=function(e,t){if(void 0!==t.getElementById&&D){var n,i,o,r=t.getElementById(e);if(r){if((
// Verify the id attribute
n=r.getAttributeNode("id"))&&n.value===e)return[r];
// Fall back on getElementsByName
for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),
// Tag
x.find.TAG=k.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):k.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
r=t.getElementsByTagName(e);
// Filter out possible comments
if("*"!==e)return r;for(;n=r[o++];)1===n.nodeType&&i.push(n);return i},
// Class
x.find.CLASS=k.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&D)return t.getElementsByClassName(e)},
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
M=[],
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
q=[],(k.qsa=ge.test(P.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
o(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
L.appendChild(e).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+ne+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||q.push("\\["+ne+"*(?:value|"+te+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+N+"-]").length||q.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||q.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+N+"+*").length||q.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=P.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&q.push("name"+ne+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
L.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),q.push(",.*:")})),(k.matchesSelector=ge.test(H=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&o(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
k.disconnectedMatch=H.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
H.call(e,"[s!='']:x"),M.push("!=",re)}),q=q.length&&new RegExp(q.join("|")),M=M.length&&new RegExp(M.join("|")),
/* Contains
	---------------------------------------------------------------------- */
t=ge.test(L.compareDocumentPosition),
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
R=t||ge.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
Q=t?function(e,t){
// Flag for duplicate removal
if(e===t)return z=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(
// Disconnected nodes
1&(
// Calculate position if both inputs belong to the same document
n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):
// Otherwise we know they are disconnected
1)||!k.sortDetached&&t.compareDocumentPosition(e)===n?
// Choose the first element that is related to our preferred document
e===P||e.ownerDocument===I&&R(I,e)?-1:t===P||t.ownerDocument===I&&R(I,t)?1:E?ee(E,e)-ee(E,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return z=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,s=[e],a=[t];
// Parentless nodes are either documents or disconnected
if(!o||!r)return e===P?-1:t===P?1:o?-1:r?1:E?ee(E,e)-ee(E,t):0;
// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(o===r)return u(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[i]===a[i];)i++;return i?
// Do a sibling check if the nodes have a common ancestor
u(s[i],a[i]):
// Otherwise nodes in our document sort first
s[i]===I?-1:a[i]===I?1:0}),P},w.matches=function(e,t){return w(e,null,null,t)},w.matchesSelector=function(e,t){if(
// Set document vars if needed
(e.ownerDocument||e)!==P&&A(e),
// Make sure that attribute selectors are quoted
t=t.replace(ce,"='$1']"),k.matchesSelector&&D&&!U[t+" "]&&(!M||!M.test(t))&&(!q||!q.test(t)))try{var n=H.call(e,t);
// IE 9's matchesSelector returns false on disconnected nodes
if(n||k.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<w(t,P,null,[e]).length},w.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==P&&A(e),R(e,t)},w.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==P&&A(e);var n=x.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
i=n&&Y.call(x.attrHandle,t.toLowerCase())?n(e,t,!D):void 0;return void 0!==i?i:k.attributes||!D?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},w.escape=function(e){return(e+"").replace($e,ke)},w.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
w.uniqueSort=function(e){var t,n=[],i=0,o=0;
// Unless we *know* we can detect duplicates, assume their presence
if(z=!k.detectDuplicates,E=!k.sortStable&&e.slice(0),e.sort(Q),z){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return E=null,e},
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
j=w.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=j(e)}else if(3===o||4===o)return e.nodeValue;
// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;t=e[i++];)
// Do not traverse comment nodes
n+=j(t);return n},(x=w.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:l,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,we),
// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(
// nth-* requires argument
e[3]||w.error(e[0]),
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&w.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(
// Accept quoted arguments as-is
e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(
// Get excess from tokenize (recursively)
t=C(n,!0))&&(
// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(
// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,i,o){return function(e){var t=w.attr(e,n);return null==t?"!="===i:!i||(t+="","="===i?t===o:"!="===i?t!==o:"^="===i?o&&0===t.indexOf(o):"*="===i?o&&-1<t.indexOf(o):"$="===i?o&&t.slice(-o.length)===o:"~="===i?-1<(" "+t.replace(se," ")+" ").indexOf(o):"|="===i&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(p,e,t,m,g){var v="nth"!==p.slice(0,3),y="last"!==p.slice(-4),b="of-type"===e;return 1===m&&0===g?
// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(e,t,n){var i,o,r,s,a,l,u=v!==y?"nextSibling":"previousSibling",c=e.parentNode,d=b&&e.nodeName.toLowerCase(),f=!n&&!b,h=!1;if(c){
// :(first|last|only)-(child|of-type)
if(v){for(;u;){for(s=e;s=s[u];)if(b?s.nodeName.toLowerCase()===d:1===s.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
l=u="only"===p&&!l&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(l=[y?c.firstChild:c.lastChild],y&&f){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
h=(a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=(s=c)[N]||(s[N]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]||[])[0]===F&&i[1])&&i[2],s=a&&c.childNodes[a];s=++a&&s&&s[u]||(
// Fallback to seeking `elem` from the start
h=a=0)||l.pop();)
// When found, cache indexes on `parent` and break
if(1===s.nodeType&&++h&&s===e){o[p]=[F,a,h];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
f&&(h=a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=(
// ...in a gzip-friendly way
s=e)[N]||(s[N]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]||[])[0]===F&&i[1]),!1===h)
// Use the same loop as above to seek `elem` from the start
for(;(s=++a&&s&&s[u]||(h=a=0)||l.pop())&&((b?s.nodeName.toLowerCase()!==d:1!==s.nodeType)||!++h||(
// Cache the index of each encountered element
f&&((
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=s[N]||(s[N]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]=[F,h]),s!==e)););
// Incorporate the offset, then check against cycle size
return(h-=g)===m||h%m==0&&0<=h/m}}},PSEUDO:function(e,r){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var t,s=x.pseudos[e]||x.setFilters[e.toLowerCase()]||w.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return s[N]?s(r):
// But maintain support for old signatures
1<s.length?(t=[e,e,"",r],x.setFilters.hasOwnProperty(e.toLowerCase())?l(function(e,t){for(var n,i=s(e,r),o=i.length;o--;)e[n=ee(e,i[o])]=!(t[n]=i[o])}):function(e){return s(e,0,t)}):s}},pseudos:{
// Potentially complex pseudos
not:l(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var i=[],o=[],a=T(e.replace(ae,"$1"));return a[N]?l(function(e,t,n,i){
// Match elements unmatched by `matcher`
for(var o,r=a(e,null,i,[]),s=e.length;s--;)(o=r[s])&&(e[s]=!(t[s]=o))}):function(e,t,n){return i[0]=e,a(i,null,n,o),
// Don't keep the element (issue #299)
i[0]=null,!o.pop()}}),has:l(function(t){return function(e){return 0<w(t,e).length}}),contains:l(function(t){return t=t.replace(be,we),function(e){return-1<(e.textContent||e.innerText||j(e)).indexOf(t)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:l(function(n){
// lang value must be a valid identifier
return fe.test(n||"")||w.error("unsupported lang: "+n),n=n.replace(be,we).toLowerCase(),function(e){var t;do{if(t=D?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),
// Miscellaneous
target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===L},focus:function(e){return e===P.activeElement&&(!P.hasFocus||P.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:s(!1),disabled:s(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},
// Element/input types
header:function(e){return me.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:a(function(){return[0]}),last:a(function(e,t){return[t-1]}),eq:a(function(e,t,n){return[n<0?n+t:n]}),even:a(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:a(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:a(function(e,t,n){for(var i=n<0?n+t:n;0<=--i;)e.push(i);return e}),gt:a(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[v]=i(v);for(v in{submit:!0,reset:!0})x.pseudos[v]=r(v);return c.prototype=x.filters=x.pseudos,x.setFilters=new c,C=w.tokenize=function(e,t){var n,i,o,r,s,a,l,u=G[e+" "];if(u)return t?0:u.slice(0);for(s=e,a=[],l=x.preFilter;s;){
// Filters
for(r in
// Comma and first run
n&&!(i=le.exec(s))||(i&&(
// Don't consume trailing commas as valid
s=s.slice(i[0].length)||s),a.push(o=[])),n=!1,
// Combinators
(i=ue.exec(s))&&(n=i.shift(),o.push({value:n,
// Cast descendant combinators to space
type:i[0].replace(ae," ")}),s=s.slice(n.length)),x.filter)!(i=he[r].exec(s))||l[r]&&!(i=l[r](i))||(n=i.shift(),o.push({value:n,type:r,matches:i}),s=s.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?s.length:s?w.error(e):
// Cache the tokens
G(e,a).slice(0)},T=w.compile=function(e,t/* Internal Use Only */){var n,i=[],o=[],r=U[e+" "];if(!r){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=C(e)),n=t.length;n--;)(r=m(t[n]))[N]?i.push(r):o.push(r);
// Cache the compiled function
// Save selector and tokenization
(r=U(e,g(o,i))).selector=e}return r},
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
O=w.select=function(e,t,n,i){var o,r,s,a,l,u="function"==typeof e&&e,c=!i&&C(e=u.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(2<(
// Reduce context if the leading compound selector is an ID
r=c[0]=c[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===t.nodeType&&D&&x.relative[r[1].type]){if(!(t=(x.find.ID(s.matches[0].replace(be,we),t)||[])[0]))return n;
// Precompiled matchers will still verify ancestry, so step up a level
u&&(t=t.parentNode),e=e.slice(r.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(o=he.needsContext.test(e)?0:r.length;o--&&(s=r[o],!x.relative[a=s.type]);)if((l=x.find[a])&&(i=l(s.matches[0].replace(be,we),ye.test(r[0].type)&&h(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
r.splice(o,1),!(e=i.length&&p(r)))return Z.apply(n,i),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(u||T(e,c))(i,t,!D,n,!t||ye.test(e)&&h(t.parentNode)||t),n},
// One-time assignments
// Sort stability
k.sortStable=N.split("").sort(Q).join("")===N,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
k.detectDuplicates=!!z,
// Initialize against the default document
A(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
k.sortDetached=o(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(P.createElement("fieldset"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||t("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
k.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||t("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
o(function(e){return null==e.getAttribute("disabled")})||t(te,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),w}(x);ke.find=je,ke.expr=je.selectors,
// Deprecated
ke.expr[":"]=ke.expr.pseudos,ke.uniqueSort=ke.unique=je.uniqueSort,ke.text=je.getText,ke.isXMLDoc=je.isXML,ke.contains=je.contains,ke.escapeSelector=je.escape;var _e=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&ke(e).is(n))break;i.push(e)}return i},Ce=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Te=ke.expr.match.needsContext,Oe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;ke.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?ke.find.matchesSelector(i,e)?[i]:[]:ke.find.matches(e,ke.grep(t,function(e){return 1===e.nodeType}))},ke.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(ke(e).filter(function(){for(t=0;t<i;t++)if(ke.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)ke.find(e,o[t],n);return 1<i?ke.uniqueSort(n):n},filter:function(e){return this.pushStack(t(this,e||[],!1))},not:function(e){return this.pushStack(t(this,e||[],!0))},is:function(e){return!!t(this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&Te.test(e)?ke(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var Se,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ze;
// Give the init function the jQuery prototype for later instantiation
(ke.fn.init=function(e,t,n){var i,o;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||Se,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):ye(e)?void 0!==n.ready?n.ready(e):
// Execute immediately if ready is not present
e(ke):ke.makeArray(e,this);
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Ee.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(t=t instanceof ke?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
ke.merge(this,ke.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:se,!0)),Oe.test(i[1])&&ke.isPlainObject(t))for(i in t)
// Properties of context are called as methods if possible
ye(this[i])?this[i](t[i]):this.attr(i,t[i]);return this;
// HANDLE: $(#id)
}
// HANDLE: $(expr, $(...))
return(o=se.getElementById(i[2]))&&(
// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this}).prototype=ke.fn,
// Initialize central reference
Se=ke(se);var Ae=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Pe={children:!0,contents:!0,next:!0,prev:!0};ke.fn.extend({has:function(e){var t=ke(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ke.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&ke(e);
// Positional selectors never match, since there's no _selection_ context
if(!Te.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(s?-1<s.index(n):
// Don't pass non-elements to Sizzle
1===n.nodeType&&ke.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?ke.uniqueSort(r):r)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
return e?
// Index in selector
"string"==typeof e?de.call(ke(e),this[0]):de.call(this,
// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ke.uniqueSort(ke.merge(this.get(),ke(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ke.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return _e(e,"parentNode")},parentsUntil:function(e,t,n){return _e(e,"parentNode",n)},next:function(e){return n(e,"nextSibling")},prev:function(e){return n(e,"previousSibling")},nextAll:function(e){return _e(e,"nextSibling")},prevAll:function(e){return _e(e,"previousSibling")},nextUntil:function(e,t,n){return _e(e,"nextSibling",n)},prevUntil:function(e,t,n){return _e(e,"previousSibling",n)},siblings:function(e){return Ce((e.parentNode||{}).firstChild,e)},children:function(e){return Ce(e.firstChild)},contents:function(e){return u(e,"iframe")?e.contentDocument:(
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
u(e,"template")&&(e=e.content||e),ke.merge([],e.childNodes))}},function(i,o){ke.fn[i]=function(e,t){var n=ke.map(this,o,e);return"Until"!==i.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ke.filter(t,n)),1<this.length&&(
// Remove duplicates
Pe[i]||ke.uniqueSort(n),
// Reverse order for parents* and prev-derivatives
Ae.test(i)&&n.reverse()),this.pushStack(n)}});var Le=/[^\x20\t\r\n\f]+/g;ke.Callbacks=function(i){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
i="string"==typeof i?c(i):ke.extend({},i);var// Flag to know if list is currently firing
n,
// Last fire value for non-forgettable lists
e,
// Flag to know if list was already fired
t,
// Flag to prevent firing
o,
// Actual callback list
r=[],
// Queue of execution data for repeatable lists
s=[],
// Index of currently firing callback (modified by add/remove as needed)
a=-1,
// Fire callbacks
l=function(){for(
// Enforce single-firing
o=o||i.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
t=n=!0;s.length;a=-1)for(e=s.shift();++a<r.length;)
// Run callback and check for early termination
!1===r[a].apply(e[0],e[1])&&i.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
a=r.length,e=!1);
// Forget the data if we're done with it
i.memory||(e=!1),n=!1,
// Clean up if we're done firing for good
o&&(
// Keep an empty list if we have data for future add calls
r=e?[]:"")},
// Actual Callbacks object
u={
// Add a callback or a collection of callbacks to the list
add:function(){return r&&(
// If we have memory from a past run, we should fire after adding
e&&!n&&(a=r.length-1,s.push(e)),function n(e){ke.each(e,function(e,t){ye(t)?i.unique&&u.has(t)||r.push(t):t&&t.length&&"string"!==g(t)&&
// Inspect recursively
n(t)})}(arguments),e&&!n&&l()),this},
// Remove a callback from the list
remove:function(){return ke.each(arguments,function(e,t){for(var n;-1<(n=ke.inArray(t,r,n));)r.splice(n,1),
// Handle firing indexes
n<=a&&a--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<ke.inArray(e,r):0<r.length},
// Remove all callbacks from the list
empty:function(){return r&&(r=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return o=s=[],r=e="",this},disabled:function(){return!r},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return o=s=[],e||n||(r=e=""),this},locked:function(){return!!o},
// Call all callbacks with the given context and arguments
fireWith:function(e,t){return o||(t=[e,(t=t||[]).slice?t.slice():t],s.push(t),n||l()),this},
// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!t}};return u},ke.extend({Deferred:function(e){var r=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",ke.Callbacks("memory"),ke.Callbacks("memory"),2],["resolve","done",ke.Callbacks("once memory"),ke.Callbacks("once memory"),0,"resolved"],["reject","fail",ke.Callbacks("once memory"),ke.Callbacks("once memory"),1,"rejected"]],o="pending",s={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return s.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var o=arguments;return ke.Deferred(function(i){ke.each(r,function(e,t){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=ye(o[t[4]])&&o[t[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&ye(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[t[0]+"With"](this,n?[e]:arguments)})}),o=null}).promise()},then:function(t,n,i){function l(o,r,s,a){return function(){var n=this,i=arguments,e=function(){var e,t;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(o<u)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=s.apply(n,i))===r.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
t=e&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof e||"function"==typeof e)&&e.then,
// Handle a returned thenable
ye(t)?
// Special processors (notify) just wait for resolution
a?t.call(e,l(u,r,d,a),l(u,r,f,a)):(
// ...and disregard older resolution values
u++,t.call(e,l(u,r,d,a),l(u,r,f,a),l(u,r,d,r.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
s!==d&&(n=void 0,i=[e]),
// Process the value(s)
// Default process is resolve
(a||r.resolveWith)(n,i))}},
// Only normal processors (resolve) catch and reject exceptions
t=a?e:function(){try{e()}catch(e){ke.Deferred.exceptionHook&&ke.Deferred.exceptionHook(e,t.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
u<=o+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
s!==f&&(n=void 0,i=[e]),r.rejectWith(n,i))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
o?t():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
ke.Deferred.getStackHook&&(t.stackTrace=ke.Deferred.getStackHook()),x.setTimeout(t))}}var u=0;return ke.Deferred(function(e){
// progress_handlers.add( ... )
r[0][3].add(l(0,e,ye(i)?i:d,e.notifyWith)),
// fulfilled_handlers.add( ... )
r[1][3].add(l(0,e,ye(t)?t:d)),
// rejected_handlers.add( ... )
r[2][3].add(l(0,e,ye(n)?n:f))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?ke.extend(e,s):s}},a={};
// Add list-specific methods
// All done!
return ke.each(r,function(e,t){var n=t[2],i=t[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
s[t[1]]=n.add,
// Handle state
i&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
o=i},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
r[3-e][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
r[3-e][3].disable,
// progress_callbacks.lock
r[0][2].lock,
// progress_handlers.lock
r[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(t[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
a[t[0]]=function(){return a[t[0]+"With"](this===a?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
a[t[0]+"With"]=n.fireWith}),
// Make the deferred a promise
s.promise(a),
// Call given func if any
e&&e.call(a,a),a},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
t=n,
// subordinate fulfillment data
i=Array(t),o=le.call(arguments),
// the master Deferred
r=ke.Deferred(),
// subordinate callback factory
s=function(t){return function(e){i[t]=this,o[t]=1<arguments.length?le.call(arguments):e,--n||r.resolveWith(i,o)}};
// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(l(e,r.done(s(t)).resolve,r.reject,!n),"pending"===r.state()||ye(o[t]&&o[t].then)))return r.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;t--;)l(o[t],s(t),r.reject);return r.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var De=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ke.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
x.console&&x.console.warn&&e&&De.test(e.name)&&x.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ke.readyException=function(e){x.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var qe=ke.Deferred();ke.fn.ready=function(e){return qe.then(e).catch(function(e){ke.readyException(e)}),this},ke.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--ke.readyWait:ke.isReady)||(
// Remember that the DOM is ready
ke.isReady=!0)!==e&&0<--ke.readyWait||
// If there are functions bound, to execute
qe.resolveWith(se,[ke])}}),ke.ready.then=qe.then,"complete"===se.readyState||"loading"!==se.readyState&&!se.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
x.setTimeout(ke.ready):(
// Use the handy event callback
se.addEventListener("DOMContentLoaded",i),
// A fallback to window.onload, that will always work
x.addEventListener("load",i));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Me=function(e,t,n,i,o,r,s){var a=0,l=e.length,u=null==n;
// Sets many values
if("object"===g(n))for(a in o=!0,n)Me(e,t,a,n[a],!0,r,s);
// Sets one value
else if(void 0!==i&&(o=!0,ye(i)||(s=!0),u&&(
// Bulk operations run against the entire set
t=s?(t.call(e,i),null):(u=t,function(e,t,n){return u.call(ke(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:
// Gets
u?t.call(e):l?t(e[0],n):r},He=/^-ms-/,Re=/-([a-z])/g,Ne=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};
// Matches dashed string for camelizing
r.uid=1,r.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
return t||(t={},
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
Ne(e)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)o[h(t)]=n;
// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(i in t)o[h(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):
// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][h(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(h):(t=h(t))in i?[t]:t.match(Le)||[]).length;for(;n--;)delete i[t[n]]}
// Remove the expando if there's no more data
(void 0===t||ke.isEmptyObject(i))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ke.isEmptyObject(t)}};var Ie=new r,Fe=new r,Be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,We=/[A-Z]/g;ke.extend({hasData:function(e){return Fe.hasData(e)||Ie.hasData(e)},data:function(e,t,n){return Fe.access(e,t,n)},removeData:function(e,t){Fe.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Ie.access(e,t,n)},_removeData:function(e,t){Ie.remove(e,t)}}),ke.fn.extend({data:function(n,e){var t,i,o,r=this[0],s=r&&r.attributes;
// Gets all values
if(void 0!==n)
// Sets multiple values
return"object"==typeof n?this.each(function(){Fe.set(this,n)}):Me(this,function(e){var t;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(r&&void 0===e)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
t=Fe.get(r,n))?t:void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
t=p(r,n))?t:
// We tried really hard, but the data doesn't exist.
void 0;
// Set the data...
this.each(function(){
// We always store the camelCased key
Fe.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(o=Fe.get(r),1===r.nodeType&&!Ie.get(r,"hasDataAttrs"))){for(t=s.length;t--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
s[t]&&0===(i=s[t].name).indexOf("data-")&&(i=h(i.slice(5)),p(r,i,o[i]));Ie.set(r,"hasDataAttrs",!0)}return o},removeData:function(e){return this.each(function(){Fe.remove(this,e)})}}),ke.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Ie.get(e,t),
// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!i||Array.isArray(n)?i=Ie.access(e,t,ke.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=ke.queue(e,t),i=n.length,o=n.shift(),r=ke._queueHooks(e,t),s=function(){ke.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),i--),o&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Ie.get(e,n)||Ie.access(e,n,{empty:ke.Callbacks("once memory").add(function(){Ie.remove(e,[t+"queue",n])})})}}),ke.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ke.queue(this[0],t):void 0===n?this:this.each(function(){var e=ke.queue(this,t,n);
// Ensure a hooks for this queue
ke._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ke.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ke.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,o=ke.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=Ie.get(r[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var Ge=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ue=new RegExp("^(?:([+-])=|)("+Ge+")([a-z%]*)$","i"),Qe=["Top","Right","Bottom","Left"],Ye=function(e,t){
// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
e=t||e).style.display||""===e.style.display&&
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ke.contains(e.ownerDocument,e)&&"none"===ke.css(e,"display")},Ke=function(e,t,n,i){var o,r,s={};
// Remember the old values, and insert the new ones
for(r in t)s[r]=e.style[r],e.style[r]=t[r];
// Revert the old values
for(r in o=n.apply(e,i||[]),t)e.style[r]=s[r];return o},Ve={};ke.fn.extend({show:function(){return b(this,!0)},hide:function(){return b(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ye(this)?ke(this).show():ke(this).hide()})}});var Xe=/^(?:checkbox|radio)$/i,Ze=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Je=/^$|^module$|\/(?:java|ecma)script/i,et={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
et.optgroup=et.option,et.tbody=et.tfoot=et.colgroup=et.caption=et.thead,et.th=et.td;var tt=/<|&#?\w+;/,nt,it,ot;it=se.createDocumentFragment().appendChild(se.createElement("div")),
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(ot=se.createElement("input")).setAttribute("type","radio"),ot.setAttribute("checked","checked"),ot.setAttribute("name","t"),it.appendChild(ot),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
ve.checkClone=it.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
it.innerHTML="<textarea>x</textarea>",ve.noCloneChecked=!!it.cloneNode(!0).lastChild.defaultValue;var rt=se.documentElement,st=/^key/,at=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,lt=/^([^.]*)(?:\.(.+)|)/;ke.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,u,c,d,f,h,p,m,g=Ie.get(t);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(g)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(r=n).handler,o=r.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
o&&ke.find.matchesSelector(rt,o),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=ke.guid++),
// Init the element's event structure and main handler, if this is the first
(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==ke&&ke.event.triggered!==e.type?ke.event.dispatch.apply(t,arguments):void 0}),u=(
// Handle multiple events separated by a space
e=(e||"").match(Le)||[""]).length;u--;)h=m=(a=lt.exec(e[u])||[])[1],p=(a[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
h&&(
// If event changes its type, use the special event handlers for the changed type
d=ke.event.special[h]||{},
// If selector defined, determine special event api type, otherwise given type
h=(o?d.delegateType:d.bindType)||h,
// Update special based on newly reset type
d=ke.event.special[h]||{},
// handleObj is passed to all event handlers
c=ke.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&ke.expr.match.needsContext.test(o),namespace:p.join(".")},r),
// Init the event handler queue if we're the first
(f=l[h])||((f=l[h]=[]).delegateCount=0,
// Only use addEventListener if the special events handler returns false
d.setup&&!1!==d.setup.call(t,i,p,s)||t.addEventListener&&t.addEventListener(h,s)),d.add&&(d.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
o?f.splice(f.delegateCount++,0,c):f.push(c),
// Keep track of which events have ever been used, for event optimization
ke.event.global[h]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,i,o){var r,s,a,l,u,c,d,f,h,p,m,g=Ie.hasData(e)&&Ie.get(e);if(g&&(l=g.events)){for(u=(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(Le)||[""]).length;u--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=m=(a=lt.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),h){for(d=ke.event.special[h]||{},f=l[h=(i?d.delegateType:d.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
s=r=f.length;r--;)c=f[r],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(f.splice(r,1),c.selector&&f.delegateCount--,d.remove&&d.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
s&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,p,g.handle)||ke.removeEvent(e,h,g.handle),delete l[h])}else for(h in l)ke.event.remove(e,h+t[u],n,i,!0);
// Remove data and the expando if it's no longer used
ke.isEmptyObject(l)&&Ie.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t=ke.event.fix(e),n,i,o,r,s,a,l=new Array(arguments.length),u=(Ie.get(this,"events")||{})[t.type]||[],c=ke.event.special[t.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=t,n=1;n<arguments.length;n++)l[n]=arguments[n];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){for(
// Determine handlers
a=ke.event.handlers.call(this,t,u),
// Run delegates first; they may want to stop propagation beneath us
n=0;(r=a[n++])&&!t.isPropagationStopped();)for(t.currentTarget=r.elem,i=0;(s=r.handlers[i++])&&!t.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
t.rnamespace&&!t.rnamespace.test(s.namespace)||(t.handleObj=s,t.data=s.data,void 0!==(o=((ke.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,l))&&!1===(t.result=o)&&(t.preventDefault(),t.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,i,o,r,s,a=[],l=t.delegateCount,u=e.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[
// Don't conflict with Object.prototype properties (#13203)
o=(i=t[n]).selector+" "]&&(s[o]=i.needsContext?-1<ke(o,this).index(u):ke.find(o,this,null,[u]).length),s[o]&&r.push(i);r.length&&a.push({elem:u,handlers:r})}
// Add the remaining (directly-bound) handlers
return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(t,e){Object.defineProperty(ke.Event.prototype,t,{enumerable:!0,configurable:!0,get:ye(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ke.expando]?e:new ke.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==C()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===C()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return u(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ke.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},ke.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof ke.Event))return new ke.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?j:_,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&ke.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),
// Mark it as fixed
this[ke.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ke.Event.prototype={constructor:ke.Event,isDefaultPrevented:_,isPropagationStopped:_,isImmediatePropagationStopped:_,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=j,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=j,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=j,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
ke.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
return null==e.which&&st.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:
// Add which for click: 1 === left; 2 === middle; 3 === right
!e.which&&void 0!==t&&at.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},ke.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
ke.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,r){ke.event.special[e]={delegateType:r,bindType:r,handle:function(e){var t,n=this,i=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===n||ke.contains(n,i))||(e.type=o.origType,t=o.handler.apply(this,arguments),e.type=r),t}}}),ke.fn.extend({on:function(e,t,n,i){return T(this,e,t,n,i)},one:function(e,t,n,i){return T(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return i=e.handleObj,ke(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(
// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=_),this.each(function(){ke.event.remove(this,e,n,t)});
// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
ut=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ct=/<script|<style|<link/i,
// checked="checked" or checked
dt=/checked\s*(?:[^=]|=\s*.checked.)/i,ft=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ke.extend({htmlPrefilter:function(e){return e.replace(ut,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=ke.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(ve.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ke.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
s=w(a),i=0,o=(r=w(e)).length;i<o;i++)A(r[i],s[i]);
// Copy the events from the original to the clone
if(t)if(n)for(r=r||w(e),s=s||w(a),i=0,o=r.length;i<o;i++)z(r[i],s[i]);else z(e,a);
// Preserve script evaluation history
// Return the cloned set
return 0<(s=w(a,"script")).length&&$(s,!l&&w(e,"script")),a},cleanData:function(e){for(var t,n,i,o=ke.event.special,r=0;void 0!==(n=e[r]);r++)if(Ne(n)){if(t=n[Ie.expando]){if(t.events)for(i in t.events)o[i]?ke.event.remove(n,i):ke.removeEvent(n,i,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ie.expando]=void 0}n[Fe.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Fe.expando]=void 0)}}}),ke.fn.extend({detach:function(e){return L(this,e,!0)},remove:function(e){return L(this,e)},text:function(e){return Me(this,function(e){return void 0===e?ke.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return P(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||O(this,e).appendChild(e)})},prepend:function(){return P(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=O(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return P(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return P(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
ke.cleanData(w(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ke.clone(this,e,t)})},html:function(e){return Me(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ct.test(e)&&!et[(Ze.exec(e)||["",""])[1].toLowerCase()]){e=ke.htmlPrefilter(e);try{for(;n<i;n++)
// Remove element nodes and prevent memory leaks
1===(t=this[n]||{}).nodeType&&(ke.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];
// Make the changes, replacing each non-ignored context element with the new content
return P(this,arguments,function(e){var t=this.parentNode;ke.inArray(this,n)<0&&(ke.cleanData(w(this)),t&&t.replaceChild(e,this));
// Force callback invocation
},n)}}),ke.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){ke.fn[e]=function(e){for(var t,n=[],i=ke(e),o=i.length-1,r=0;r<=o;r++)t=r===o?this:this.clone(!0),ke(i[r])[s](t),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ce.apply(n,t.get());return this.pushStack(n)}});var ht=new RegExp("^("+Ge+")(?!px)[a-z%]+$","i"),pt=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=x),t.getComputedStyle(e)},mt=new RegExp(Qe.join("|"),"i");!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(l){a.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",rt.appendChild(a).appendChild(l);var e=x.getComputedStyle(l);n="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
s=12===t(e.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
l.style.right="60%",r=36===t(e.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
i=36===t(e.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
l.style.position="absolute",o=36===l.offsetWidth||"absolute",rt.removeChild(a),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
l=null}}function t(e){return Math.round(parseFloat(e))}var n,i,o,r,s,a=se.createElement("div"),l=se.createElement("div");
// Finish early in limited (non-browser) environments
l.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",ve.clearCloneStyle="content-box"===l.style.backgroundClip,ke.extend(ve,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),r},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
gt=/^(none|table(?!-c[ea]).+)/,vt=/^--/,yt={position:"absolute",visibility:"hidden",display:"block"},bt={letterSpacing:"0",fontWeight:"400"},wt=["Webkit","Moz","ms"],$t=se.createElement("div").style;ke.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=D(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,i){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var o,r,s,a=h(t),l=vt.test(t),u=e.style;
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(t=H(a)),
// Gets hook for the prefixed version, then unprefixed version
s=ke.cssHooks[t]||ke.cssHooks[a],void 0===n)
// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:u[t];
// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(r=typeof n)&&(o=Ue.exec(n))&&o[1]&&(n=v(e,t,o),
// Fixes bug #9237
r="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===r&&(n+=o&&o[3]||(ke.cssNumber[a]?"":"px")),
// background-* props affect original clone's values
ve.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,i){var o,r,s,a=h(t),l;
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return vt.test(t)||(t=H(a)),
// If a hook was provided get the computed value from there
(
// Try prefixed name followed by the unprefixed name
s=ke.cssHooks[t]||ke.cssHooks[a])&&"get"in s&&(o=s.get(e,!0,n)),
// Otherwise, if a way to get the computed value exists, use that
void 0===o&&(o=D(e,t,i)),
// Convert "normal" to computed value
"normal"===o&&t in bt&&(o=bt[t]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),ke.each(["height","width"],function(e,a){ke.cssHooks[a]={get:function(e,t,n){if(t)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!gt.test(ke.css(e,"display"))||
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?I(e,a,n):Ke(e,yt,function(){return I(e,a,n)})},set:function(e,t,n){var i,o=pt(e),r="border-box"===ke.css(e,"boxSizing",!1,o),s=n&&N(e,a,n,r,o);
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return r&&ve.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(o[a])-N(e,a,"border",!1,o)-.5)),
// Convert to pixels if value adjustment is needed
s&&(i=Ue.exec(t))&&"px"!==(i[3]||"px")&&(e.style[a]=t,t=ke.css(e,a)),R(e,t,s)}}}),ke.cssHooks.marginLeft=q(ve.reliableMarginLeft,function(e,t){if(t)return(parseFloat(D(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
ke.each({margin:"",padding:"",border:"Width"},function(o,r){ke.cssHooks[o+r]={expand:function(e){for(var t=0,n={},
// Assumes a single number if not a string
i="string"==typeof e?e.split(" "):[e];t<4;t++)n[o+Qe[t]+r]=i[t]||i[t-2]||i[0];return n}},"margin"!==o&&(ke.cssHooks[o+r].set=R)}),ke.fn.extend({css:function(e,t){return Me(this,function(e,t,n){var i,o,r={},s=0;if(Array.isArray(t)){for(i=pt(e),o=t.length;s<o;s++)r[t[s]]=ke.css(e,t[s],!1,i);return r}return void 0!==n?ke.style(e,t,n):ke.css(e,t)},e,t,1<arguments.length)}}),(ke.Tween=F).prototype={constructor:F,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||ke.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(ke.cssNumber[n]?"":"px")},cur:function(){var e=F.propHooks[this.prop];return e&&e.get?e.get(this):F.propHooks._default.get(this)},run:function(e){var t,n=F.propHooks[this.prop];return this.options.duration?this.pos=t=ke.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):F.propHooks._default.set(this),this}},F.prototype.init.prototype=F.prototype,F.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
t=ke.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
ke.fx.step[e.prop]?ke.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ke.cssProps[e.prop]]&&!ke.cssHooks[e.prop]?e.elem[e.prop]=e.now:ke.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
F.propHooks.scrollTop=F.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ke.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ke.fx=F.prototype.init,
// Back compat <1.8 extension point
ke.fx.step={};var kt,xt,jt=/^(?:toggle|show|hide)$/,_t=/queueHooks$/,Ct,Tt,Ot;ke.Animation=ke.extend(K,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return v(n.elem,e,Ue.exec(t),n),n}]},tweener:function(e,t){for(var n,i=0,o=(e=ye(e)?(t=e,["*"]):e.match(Le)).length;i<o;i++)n=e[i],K.tweeners[n]=K.tweeners[n]||[],K.tweeners[n].unshift(t)},prefilters:[Q],prefilter:function(e,t){t?K.prefilters.unshift(e):K.prefilters.push(e)}}),ke.speed=function(e,t,n){var i=e&&"object"==typeof e?ke.extend({},e):{complete:n||!n&&t||ye(e)&&e,duration:e,easing:n&&t||t&&!ye(t)&&t};
// Go to the end state if fx are off
return ke.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in ke.fx.speeds?i.duration=ke.fx.speeds[i.duration]:i.duration=ke.fx.speeds._default),
// Normalize opt.queue - true/undefined/null -> "fx"
null!=i.queue&&!0!==i.queue||(i.queue="fx"),
// Queueing
i.old=i.complete,i.complete=function(){ye(i.old)&&i.old.call(this),i.queue&&ke.dequeue(this,i.queue)},i},ke.fn.extend({fadeTo:function(e,t,n,i){
// Show any hidden elements after setting opacity to 0
return this.filter(Ye).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,e,n,i){var o=ke.isEmptyObject(t),r=ke.speed(e,n,i),s=function(){
// Operate on a copy of prop so per-property easing won't be lost
var e=K(this,ke.extend({},t),r);
// Empty animations, or finishing resolves immediately
(o||Ie.get(this,"finish"))&&e.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(o,e,r){var s=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof o&&(r=e,e=o,o=void 0),e&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var e=!0,t=null!=o&&o+"queueHooks",n=ke.timers,i=Ie.get(this);if(t)i[t]&&i[t].stop&&s(i[t]);else for(t in i)i[t]&&i[t].stop&&_t.test(t)&&s(i[t]);for(t=n.length;t--;)n[t].elem!==this||null!=o&&n[t].queue!==o||(n[t].anim.stop(r),e=!1,n.splice(t,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!e&&r||ke.dequeue(this,o)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=Ie.get(this),n=t[s+"queue"],i=t[s+"queueHooks"],o=ke.timers,r=n?n.length:0;
// Enable finishing flag on private data
// Look for any active animations, and finish them
for(t.finish=!0,
// Empty the queue first
ke.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===s&&(o[e].anim.stop(!0),o.splice(e,1));
// Look for any animations in the old queue and finish them
for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);
// Turn off finishing flag
delete t.finish})}}),ke.each(["toggle","show","hide"],function(e,i){var o=ke.fn[i];ke.fn[i]=function(e,t,n){return null==e||"boolean"==typeof e?o.apply(this,arguments):this.animate(G(i,!0),e,t,n)}}),
// Generate shortcuts for custom animations
ke.each({slideDown:G("show"),slideUp:G("hide"),slideToggle:G("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){ke.fn[e]=function(e,t,n){return this.animate(i,e,t,n)}}),ke.timers=[],ke.fx.tick=function(){var e,t=0,n=ke.timers;for(kt=Date.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ke.fx.stop(),kt=void 0},ke.fx.timer=function(e){ke.timers.push(e),ke.fx.start()},ke.fx.interval=13,ke.fx.start=function(){xt||(xt=!0,B())},ke.fx.stop=function(){xt=null},ke.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
ke.fn.delay=function(i,e){return i=ke.fx&&ke.fx.speeds[i]||i,e=e||"fx",this.queue(e,function(e,t){var n=x.setTimeout(e,i);t.stop=function(){x.clearTimeout(n)}})},Ct=se.createElement("input"),Ot=se.createElement("select").appendChild(se.createElement("option")),Ct.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
ve.checkOn=""!==Ct.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
ve.optSelected=Ot.selected,(
// Support: IE <=11 only
// An input loses its value after becoming a radio
Ct=se.createElement("input")).value="t",Ct.type="radio",ve.radioValue="t"===Ct.value;var St,Et=ke.expr.attrHandle;ke.fn.extend({attr:function(e,t){return Me(this,ke.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ke.removeAttr(this,e)})}}),ke.extend({attr:function(e,t,n){var i,o,r=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)
// Fallback to prop when attributes are not supported
return void 0===e.getAttribute?ke.prop(e,t,n):(
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===r&&ke.isXMLDoc(e)||(o=ke.attrHooks[t.toLowerCase()]||(ke.expr.match.bool.test(t)?St:void 0)),void 0!==n?null===n?void ke.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:null==(i=ke.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!ve.radioValue&&"radio"===t&&u(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=t&&t.match(Le);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
St={set:function(e,t,n){return!1===t?
// Remove boolean attributes when set to false
ke.removeAttr(e,n):e.setAttribute(n,n),n}},ke.each(ke.expr.match.bool.source.match(/\w+/g),function(e,t){var s=Et[t]||ke.find.attr;Et[t]=function(e,t,n){var i,o,r=t.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
o=Et[r],Et[r]=i,i=null!=s(e,t,n)?r:null,Et[r]=o),i}});var zt=/^(?:input|select|textarea|button)$/i,At=/^(?:a|area)$/i;ke.fn.extend({prop:function(e,t){return Me(this,ke.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ke.propFix[e]||e]})}}),ke.extend({prop:function(e,t,n){var i,o,r=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)return 1===r&&ke.isXMLDoc(e)||(
// Fix name and attach hooks
t=ke.propFix[t]||t,o=ke.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=ke.find.attr(e,"tabindex");return t?parseInt(t,10):zt.test(e.nodeName)||At.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
ve.optSelected||(ke.propHooks.selected={get:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ke.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ke.propFix[this.toLowerCase()]=this}),ke.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,l=0;if(ye(t))return this.each(function(e){ke(this).addClass(t.call(this,e,X(this)))});if((e=Z(t)).length)for(;n=this[l++];)if(o=X(n),i=1===n.nodeType&&" "+V(o)+" "){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");
// Only assign if different to avoid unneeded rendering.
o!==(a=V(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,l=0;if(ye(t))return this.each(function(e){ke(this).removeClass(t.call(this,e,X(this)))});if(!arguments.length)return this.attr("class","");if((e=Z(t)).length)for(;n=this[l++];)if(o=X(n),
// This expression is here for better compressibility (see addClass)
i=1===n.nodeType&&" "+V(o)+" "){for(s=0;r=e[s++];)
// Remove *all* instances
for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");
// Only assign if different to avoid unneeded rendering.
o!==(a=V(i))&&n.setAttribute("class",a)}return this},toggleClass:function(o,t){var r=typeof o,s="string"===r||Array.isArray(o);return"boolean"==typeof t&&s?t?this.addClass(o):this.removeClass(o):ye(o)?this.each(function(e){ke(this).toggleClass(o.call(this,e,X(this),t),t)}):this.each(function(){var e,t,n,i;if(s)for(
// Toggle individual class names
t=0,n=ke(this),i=Z(o);e=i[t++];)
// Check each className given, space separated list
n.hasClass(e)?n.removeClass(e):n.addClass(e);
// Toggle whole class name
else void 0!==o&&"boolean"!==r||((e=X(this))&&
// Store className if set
Ie.set(this,"__className__",e),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",e||!1===o?"":Ie.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+V(X(n))+" ").indexOf(t))return!0;return!1}});var Pt=/\r/g;ke.fn.extend({val:function(n){var i,e,o,t=this[0];return arguments.length?(o=ye(n),this.each(function(e){var t;1===this.nodeType&&(
// Treat null/undefined as ""; convert numbers to string
null==(t=o?n.call(this,e,ke(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ke.map(t,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(i=ke.valHooks[this.type]||ke.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,t,"value")||(this.value=t))})):t?(i=ke.valHooks[t.type]||ke.valHooks[t.nodeName.toLowerCase()])&&"get"in i&&void 0!==(e=i.get(t,"value"))?e:
// Handle most common string cases
"string"==typeof(e=t.value)?e.replace(Pt,""):null==e?"":e:void 0}}),ke.extend({valHooks:{option:{get:function(e){var t=ke.find.attr(e,"value");return null!=t?t:
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
V(ke.text(e))}},select:{get:function(e){var t,n,i,o=e.options,r=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?r+1:o.length;
// Loop through all the selected options
for(i=r<0?l:s?r:0;i<l;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=o[i]).selected||i===r)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=ke(n).val(),s)return t;
// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,i,o=e.options,r=ke.makeArray(t),s=o.length;s--;)
/* eslint-disable no-cond-assign */
((i=o[s]).selected=-1<ke.inArray(ke.valHooks.option.get(i),r))&&(n=!0)
/* eslint-enable no-cond-assign */;
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),r}}}}),
// Radios and checkboxes getter/setter
ke.each(["radio","checkbox"],function(){ke.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ke.inArray(ke(e).val(),t)}},ve.checkOn||(ke.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),
// Return jQuery for attributes-only inclusion
ve.focusin="onfocusin"in x;var Lt=/^(?:focusinfocus|focusoutblur)$/,Dt=function(e){e.stopPropagation()};ke.extend(ke.event,{trigger:function(e,t,n,i){var o,r,s,a,l,u,c,d,f=[n||se],h=pe.call(e,"type")?e.type:e,p=pe.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(r=d=s=n=n||se,3!==n.nodeType&&8!==n.nodeType&&!Lt.test(h+ke.event.triggered)&&(-1<h.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
h=(p=h.split(".")).shift(),p.sort()),l=h.indexOf(":")<0&&"on"+h,
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[ke.expando]?e:new ke.Event(h,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=p.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:ke.makeArray(t,[e]),
// Allow special events to draw outside the lines
c=ke.event.special[h]||{},i||!c.trigger||!1!==c.trigger.apply(n,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!c.noBubble&&!be(n)){for(a=c.delegateType||h,Lt.test(a+h)||(r=r.parentNode);r;r=r.parentNode)f.push(r),s=r;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
s===(n.ownerDocument||se)&&f.push(s.defaultView||s.parentWindow||x)}
// Fire handlers on the event path
for(o=0;(r=f[o++])&&!e.isPropagationStopped();)d=r,e.type=1<o?a:c.bindType||h,(
// jQuery handler
u=(Ie.get(r,"events")||{})[e.type]&&Ie.get(r,"handle"))&&u.apply(r,t),(
// Native handler
u=l&&r[l])&&u.apply&&Ne(r)&&(e.result=u.apply(r,t),!1===e.result&&e.preventDefault());return e.type=h,
// If nobody prevented the default action, do it now
i||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(f.pop(),t)||!Ne(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
l&&ye(n[h])&&!be(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(s=n[l])&&(n[l]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
ke.event.triggered=h,e.isPropagationStopped()&&d.addEventListener(h,Dt),n[h](),e.isPropagationStopped()&&d.removeEventListener(h,Dt),ke.event.triggered=void 0,s&&(n[l]=s)),e.result}
// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=ke.extend(new ke.Event,n,{type:e,isSimulated:!0});ke.event.trigger(i,null,t)}}),ke.fn.extend({trigger:function(e,t){return this.each(function(){ke.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ke.event.trigger(e,t,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
ve.focusin||ke.each({focus:"focusin",blur:"focusout"},function(n,i){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var o=function(e){ke.event.simulate(i,e.target,ke.event.fix(e))};ke.event.special[i]={setup:function(){var e=this.ownerDocument||this,t=Ie.access(e,i);t||e.addEventListener(n,o,!0),Ie.access(e,i,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Ie.access(e,i)-1;t?Ie.access(e,i,t):(e.removeEventListener(n,o,!0),Ie.remove(e,i))}}});var qt=x.location,Mt=Date.now(),Ht=/\?/;
// Cross-browser xml parsing
ke.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new x.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||ke.error("Invalid XML: "+e),t};var Rt=/\[\]$/,Nt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,Ft=/^(?:input|select|textarea|keygen)/i;ke.param=function(e,t){var n,i=[],o=function(e,t){
// If value is a function, invoke it and use its return value
var n=ye(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!ke.isPlainObject(e))
// Serialize the form elements
ke.each(e,function(){o(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)J(n,e[n],t,o);
// Return the resulting serialization
return i.join("&")},ke.fn.extend({serialize:function(){return ke.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=ke.prop(this,"elements");return e?ke.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!ke(this).is(":disabled")&&Ft.test(this.nodeName)&&!It.test(e)&&(this.checked||!Xe.test(e))}).map(function(e,t){var n=ke(this).val();return null==n?null:Array.isArray(n)?ke.map(n,function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}}):{name:t.name,value:n.replace(Nt,"\r\n")}}).get()}});var Bt=/%20/g,Wt=/#.*$/,Gt=/([?&])_=[^&]*/,Ut=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Yt=/^(?:GET|HEAD)$/,Kt=/^\/\//,
/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Vt={},
/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Xt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Zt="*/".concat("*"),
// Anchor tag for parsing the document origin
Jt=se.createElement("a");Jt.href=qt.href,ke.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:qt.href,type:"GET",isLocal:Qt.test(qt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":ke.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?
// Building a settings object
ne(ne(e,ke.ajaxSettings),t):
// Extending ajaxSettings
ne(ke.ajaxSettings,e)},ajaxPrefilter:ee(Vt),ajaxTransport:ee(Xt),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function n(e,t,n,i){var o,r,s,a,l,u=t;
// Ignore repeat invocations
p||(p=!0,
// Clear timeout if it exists
h&&x.clearTimeout(h),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=void 0,
// Cache response headers
f=i||"",
// Set readyState
k.readyState=0<e?4:0,
// Determine if successful
o=200<=e&&e<300||304===e,
// Get response data
n&&(a=ie(g,k,n)),
// Convert no matter what (that way responseXXX fields are always set)
a=oe(g,a,k,o),
// If successful, handle type chaining
o?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&((l=k.getResponseHeader("Last-Modified"))&&(ke.lastModified[d]=l),(l=k.getResponseHeader("etag"))&&(ke.etag[d]=l)),
// if no content
204===e||"HEAD"===g.type?u="nocontent":304===e?u="notmodified":(u=a.state,r=a.data,o=!(s=a.error))):(
// Extract error from statusText and normalize for non-aborts
s=u,!e&&u||(u="error",e<0&&(e=0))),
// Set data for the fake xhr object
k.status=e,k.statusText=(t||u)+"",
// Success/Error
o?b.resolveWith(v,[r,u,k]):b.rejectWith(v,[k,u,s]),
// Status-dependent callbacks
k.statusCode($),$=void 0,m&&y.trigger(o?"ajaxSuccess":"ajaxError",[k,g,o?r:s]),
// Complete
w.fireWith(v,[k,u]),m&&(y.trigger("ajaxComplete",[k,g]),
// Handle the global AJAX counter
--ke.active||ke.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var c,
// URL without anti-cache param
d,
// Response headers
f,i,
// timeout handle
h,
// Url cleanup var
o,
// Request state (becomes false upon send and true upon completion)
p,
// To know if global events are to be dispatched
m,
// Loop variable
r,
// uncached part of the url
s,
// Create the final options object
g=ke.ajaxSetup({},t),
// Callbacks context
v=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(v.nodeType||v.jquery)?ke(v):ke.event,
// Deferreds
b=ke.Deferred(),w=ke.Callbacks("once memory"),
// Status-dependent callbacks
$=g.statusCode||{},
// Headers (they are sent all at once)
a={},l={},
// Default abort message
u="canceled",
// Fake xhr
k={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(p){if(!i)for(i={};t=Ut.exec(f);)i[t[1].toLowerCase()]=t[2];t=i[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return p?f:null},
// Caches the header
setRequestHeader:function(e,t){return null==p&&(e=l[e.toLowerCase()]=l[e.toLowerCase()]||e,a[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==p&&(g.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(p)
// Execute the appropriate callbacks
k.always(e[k.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)$[t]=[$[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||u;return c&&c.abort(t),n(0,t),this}};
// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(b.promise(k),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((e||g.url||qt.href)+"").replace(Kt,qt.protocol+"//"),
// Alias method option to type as per ticket #12004
g.type=t.method||t.type||g.method||g.type,
// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(Le)||[""],null==g.crossDomain){o=se.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{o.href=g.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
o.href=o.href,g.crossDomain=Jt.protocol+"//"+Jt.host!=o.protocol+"//"+o.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}
// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=ke.param(g.data,g.traditional)),
// Apply prefilters
te(Vt,g,t,k),p)return k;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(r in
// Watch for a new set of requests
(m=ke.event&&g.global)&&0==ke.active++&&ke.event.trigger("ajaxStart"),
// Uppercase the type
g.type=g.type.toUpperCase(),
// Determine if request has content
g.hasContent=!Yt.test(g.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
d=g.url.replace(Wt,""),
// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Bt,"+")):(
// Remember the hash so we can put it back
s=g.url.slice(d.length),
// If data is available and should be processed, append data to url
g.data&&(g.processData||"string"==typeof g.data)&&(d+=(Ht.test(d)?"&":"?")+g.data,
// #9682: remove data so that it's not used in an eventual retry
delete g.data),
// Add or update anti-cache param if needed
!1===g.cache&&(d=d.replace(Gt,"$1"),s=(Ht.test(d)?"&":"?")+"_="+Mt+++s),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=d+s),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(ke.lastModified[d]&&k.setRequestHeader("If-Modified-Since",ke.lastModified[d]),ke.etag[d]&&k.setRequestHeader("If-None-Match",ke.etag[d])),
// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&k.setRequestHeader("Content-Type",g.contentType),
// Set the Accepts header for the server, depending on the dataType
k.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Zt+"; q=0.01":""):g.accepts["*"]),g.headers)k.setRequestHeader(r,g.headers[r]);
// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(v,k,g)||p))
// Abort if not done already and return
return k.abort();
// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(u="abort",
// Install callbacks on deferreds
w.add(g.complete),k.done(g.success),k.fail(g.error),
// Get transport
c=te(Xt,g,t,k)){
// If request was aborted inside ajaxSend, stop there
if(k.readyState=1,
// Send global event
m&&y.trigger("ajaxSend",[k,g]),p)return k;
// Timeout
g.async&&0<g.timeout&&(h=x.setTimeout(function(){k.abort("timeout")},g.timeout));try{p=!1,c.send(a,n)}catch(e){
// Rethrow post-completion exceptions
if(p)throw e;
// Propagate others as results
n(-1,e)}}else n(-1,"No Transport");return k},getJSON:function(e,t,n){return ke.get(e,t,n,"json")},getScript:function(e,t){return ke.get(e,void 0,t,"script")}}),ke.each(["get","post"],function(e,o){ke[o]=function(e,t,n,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return ye(t)&&(i=i||n,n=t,t=void 0),ke.ajax(ke.extend({url:e,type:o,dataType:i,data:t,success:n},ke.isPlainObject(e)&&e))}}),ke._evalUrl=function(e){return ke.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ke.fn.extend({wrapAll:function(e){var t;return this[0]&&(ye(e)&&(e=e.call(this[0])),
// The elements to wrap the target around
t=ke(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return ye(n)?this.each(function(e){ke(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ke(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=ye(t);return this.each(function(e){ke(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ke(this).replaceWith(this.childNodes)}),this}}),ke.expr.pseudos.hidden=function(e){return!ke.expr.pseudos.visible(e)},ke.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ke.ajaxSettings.xhr=function(){try{return new x.XMLHttpRequest}catch(e){}};var en={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},tn=ke.ajaxSettings.xhr();ve.cors=!!tn&&"withCredentials"in tn,ve.ajax=tn=!!tn,ke.ajaxTransport(function(o){var r,s;
// Cross domain only allowed if supported through XMLHttpRequest
if(ve.cors||tn&&!o.crossDomain)return{send:function(e,t){var n,i=o.xhr();
// Apply custom fields if provided
if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];
// Override mime type if needed
// Set headers
for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
o.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)i.setRequestHeader(n,e[n]);
// Callback
r=function(e){return function(){r&&(r=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof i.status?t(0,"error"):t(
// File: protocol always yields status 0; see #8605, #14207
i.status,i.statusText):t(en[i.status]||i.status,i.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},
// Listen to events
i.onload=r(),s=i.onerror=i.ontimeout=r("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===i.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
x.setTimeout(function(){r&&s()})},
// Create the abort callback
r=r("abort");try{
// Do send the request (this may raise an exception)
i.send(o.hasContent&&o.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(r)throw e}},abort:function(){r&&r()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
ke.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
ke.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ke.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
ke.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
ke.ajaxTransport("script",function(n){var i,o;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(e,t){i=ke("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(e){i.remove(),o=null,e&&t("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
se.head.appendChild(i[0])},abort:function(){o&&o()}}});var nn=[],on=/(=)\?(?=&|$)|\?\?/,rn;
// Default jsonp settings
ke.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=nn.pop()||ke.expando+"_"+Mt++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
ke.ajaxPrefilter("json jsonp",function(e,t,n){var i,o,r,s=!1!==e.jsonp&&(on.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
return i=e.jsonpCallback=ye(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,
// Insert callback into url or form data
s?e[s]=e[s].replace(on,"$1"+i):!1!==e.jsonp&&(e.url+=(Ht.test(e.url)?"&":"?")+e.jsonp+"="+i),
// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return r||ke.error(i+" was not called"),r[0]},
// Force json dataType
e.dataTypes[0]="json",
// Install callback
o=x[i],x[i]=function(){r=arguments},
// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===o?ke(x).removeProp(i):x[i]=o,
// Save back as free
e[i]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
nn.push(i)),
// Call if it was a function and we have a response
r&&ye(o)&&o(r[0]),r=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
ve.createHTMLDocument=((rn=se.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===rn.childNodes.length),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
ke.parseHTML=function(e,t,n){return"string"!=typeof e?[]:(
// Single tag
"boolean"==typeof t&&(n=t,t=!1),t||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
ve.createHTMLDocument?((
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
i=(t=se.implementation.createHTMLDocument("")).createElement("base")).href=se.location.href,t.head.appendChild(i)):t=se),r=!n&&[],(o=Oe.exec(e))?[t.createElement(o[1])]:(o=k([e],t,r),r&&r.length&&ke(r).remove(),ke.merge([],o.childNodes)));var i,o,r},
/**
 * Load a url into a page
 */
ke.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return-1<a&&(i=V(e.slice(a)),e=e.slice(0,a)),
// If it's a function
ye(t)?(
// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),
// If we have elements to modify, make the request
0<s.length&&ke.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
r=arguments,s.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ke("<div>").append(ke.parseHTML(e)).find(i):
// Otherwise use the full result
e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
ke.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ke.fn[t]=function(e){return this.on(t,e)}}),ke.expr.pseudos.animated=function(t){return ke.grep(ke.timers,function(e){return t===e.elem}).length},ke.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,u,c=ke.css(e,"position"),d=ke(e),f={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),a=d.offset(),r=ke.css(e,"top"),l=ke.css(e,"left"),
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
o=(u=("absolute"===c||"fixed"===c)&&-1<(r+l).indexOf("auto"))?(s=(i=d.position()).top,i.left):(s=parseFloat(r)||0,parseFloat(l)||0),ye(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,ke.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+o),"using"in t?t.using.call(e,f):d.css(f)}},ke.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(t){
// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){ke.offset.setOffset(this,t,e)});var e,n,i=this[0];return i?
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===ke.css(i,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=i.getBoundingClientRect();else{for(t=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===ke.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(o=ke(e).offset()).top+=ke.css(e,"borderTopWidth",!0),o.left+=ke.css(e,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:t.top-o.top-ke.css(i,"marginTop",!0),left:t.left-o.left-ke.css(i,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ke.css(e,"position");)e=e.offsetParent;return e||rt})}}),
// Create scrollLeft and scrollTop methods
ke.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,o){var r="pageYOffset"===o;ke.fn[t]=function(e){return Me(this,function(e,t,n){
// Coalesce documents and windows
var i;if(be(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===n)return i?i[o]:e[t];i?i.scrollTo(r?i.pageXOffset:n,r?n:i.pageYOffset):e[t]=n},t,e,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
ke.each(["top","left"],function(e,n){ke.cssHooks[n]=q(ve.pixelPosition,function(e,t){if(t)
// If curCSS returns percentage, fallback to offset
return t=D(e,n),ht.test(t)?ke(e).position()[n]+"px":t})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ke.each({Height:"height",Width:"width"},function(s,a){ke.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,r){
// Margin is only for outerHeight, outerWidth
ke.fn[r]=function(e,t){var n=arguments.length&&(i||"boolean"!=typeof e),o=i||(!0===e||!0===t?"margin":"border");return Me(this,function(e,t,n){var i;return be(e)?0===r.indexOf("outer")?e["inner"+s]:e.document.documentElement["client"+s]:
// Get document width or height
9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+s],i["scroll"+s],e.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?
// Get width or height on the element, requesting but not forcing parseFloat
ke.css(e,t,o):
// Set width or height on the element
ke.style(e,t,n,o)},a,n?e:void 0,n)}})}),ke.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){
// Handle event binding
ke.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),ke.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ke.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
ke.proxy=function(e,t){var n,i,o;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),ye(e))
// Simulated bind
return i=le.call(arguments,2),
// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return e.apply(t||this,i.concat(le.call(arguments)))}).guid=e.guid=e.guid||ke.guid++,o},ke.holdReady=function(e){e?ke.readyWait++:ke.ready(!0)},ke.isArray=Array.isArray,ke.parseJSON=JSON.parse,ke.nodeName=u,ke.isFunction=ye,ke.isWindow=be,ke.camelCase=h,ke.type=g,ke.now=Date.now,ke.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=ke.type(e);return("number"===t||"string"===t)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return ke});var
// Map over jQuery in case of overwrite
sn=x.jQuery,
// Map over the $ in case of overwrite
an=x.$;return ke.noConflict=function(e){return x.$===ke&&(x.$=an),e&&x.jQuery===ke&&(x.jQuery=sn),ke},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
e||(x.jQuery=x.$=ke),ke}),function e(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],n);else{var i="object"==typeof exports?n(require("jquery")):n(t.jQuery);for(var o in i)("object"==typeof exports?exports:t)[o]=i[o]}}(window,function(n){/******/
return function(n){
/******/
/******/ // The require function
/******/function o(e){
/******/
/******/ // Check if module is in cache
/******/if(i[e])
/******/return i[e].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var t=i[e]={
/******/i:e,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[e].call(t.exports,t,t.exports,o),
/******/
/******/ // Flag the module as loaded
/******/t.l=!0,t.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var i={};
/******/
/******/
/******/ // Load entry module and return exports
/******/return o.m=n,
/******/
/******/ // expose the module cache
/******/o.c=i,
/******/
/******/ // define getter function for harmony exports
/******/o.d=function(e,t,n){
/******/o.o(e,t)||
/******/Object.defineProperty(e,t,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/o.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/o.t=function(t,e){
/******/if(
/******/1&e&&(t=o(t)),8&e)return t;
/******/if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;
/******/var n=Object.create(null);
/******/
/******/if(o.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(t){
/******/var e=t&&t.__esModule?
/******/function e(){return t.default}:
/******/function e(){return t};
/******/
/******/return o.d(e,"a",e),e;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/o.p="",o(o.s=0);
/******/}
/************************************************************************/
/******/({
/***/"./js/entries/foundation.js":
/*!**********************************!*\
  !*** ./js/entries/foundation.js ***!
  \**********************************/
/*! exports provided: Foundation, CoreUtils, Box, onImagesLoaded, Keyboard, MediaQuery, Motion, Nest, Timer, Touch, Triggers, Abide, Accordion, AccordionMenu, Drilldown, Dropdown, DropdownMenu, Equalizer, Interchange, Magellan, OffCanvas, Orbit, ResponsiveMenu, ResponsiveToggle, Reveal, Slider, SmoothScroll, Sticky, Tabs, Toggler, Tooltip, ResponsiveAccordionTabs, default */
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery"),o=/* */n.n(i),r=n(/*! ../foundation.core */"./js/foundation.core.js");
/* harmony import */
/* harmony reexport (safe) */n.d(t,"Foundation",function(){return r.Foundation});
/* harmony import */var s=n(/*! ../foundation.core.utils */"./js/foundation.core.utils.js");
/* harmony reexport (module object) */n.d(t,"CoreUtils",function(){return s});
/* harmony import */var a=n(/*! ../foundation.util.box */"./js/foundation.util.box.js");
/* harmony reexport (safe) */n.d(t,"Box",function(){return a.Box});
/* harmony import */var l=n(/*! ../foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");
/* harmony reexport (safe) */n.d(t,"onImagesLoaded",function(){return l.onImagesLoaded});
/* harmony import */var u=n(/*! ../foundation.util.keyboard */"./js/foundation.util.keyboard.js");
/* harmony reexport (safe) */n.d(t,"Keyboard",function(){return u.Keyboard});
/* harmony import */var c=n(/*! ../foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");
/* harmony reexport (safe) */n.d(t,"MediaQuery",function(){return c.MediaQuery});
/* harmony import */var d=n(/*! ../foundation.util.motion */"./js/foundation.util.motion.js");
/* harmony reexport (safe) */n.d(t,"Motion",function(){return d.Motion});
/* harmony import */var f=n(/*! ../foundation.util.nest */"./js/foundation.util.nest.js");
/* harmony reexport (safe) */n.d(t,"Nest",function(){return f.Nest});
/* harmony import */var h=n(/*! ../foundation.util.timer */"./js/foundation.util.timer.js");
/* harmony reexport (safe) */n.d(t,"Timer",function(){return h.Timer});
/* harmony import */var p=n(/*! ../foundation.util.touch */"./js/foundation.util.touch.js");
/* harmony reexport (safe) */n.d(t,"Touch",function(){return p.Touch});
/* harmony import */var m=n(/*! ../foundation.util.triggers */"./js/foundation.util.triggers.js");
/* harmony reexport (safe) */n.d(t,"Triggers",function(){return m.Triggers});
/* harmony import */var g=n(/*! ../foundation.abide */"./js/foundation.abide.js");
/* harmony reexport (safe) */n.d(t,"Abide",function(){return g.Abide});
/* harmony import */var v=n(/*! ../foundation.accordion */"./js/foundation.accordion.js");
/* harmony reexport (safe) */n.d(t,"Accordion",function(){return v.Accordion});
/* harmony import */var y=n(/*! ../foundation.accordionMenu */"./js/foundation.accordionMenu.js");
/* harmony reexport (safe) */n.d(t,"AccordionMenu",function(){return y.AccordionMenu});
/* harmony import */var b=n(/*! ../foundation.drilldown */"./js/foundation.drilldown.js");
/* harmony reexport (safe) */n.d(t,"Drilldown",function(){return b.Drilldown});
/* harmony import */var w=n(/*! ../foundation.dropdown */"./js/foundation.dropdown.js");
/* harmony reexport (safe) */n.d(t,"Dropdown",function(){return w.Dropdown});
/* harmony import */var $=n(/*! ../foundation.dropdownMenu */"./js/foundation.dropdownMenu.js");
/* harmony reexport (safe) */n.d(t,"DropdownMenu",function(){return $.DropdownMenu});
/* harmony import */var k=n(/*! ../foundation.equalizer */"./js/foundation.equalizer.js");
/* harmony reexport (safe) */n.d(t,"Equalizer",function(){return k.Equalizer});
/* harmony import */var x=n(/*! ../foundation.interchange */"./js/foundation.interchange.js");
/* harmony reexport (safe) */n.d(t,"Interchange",function(){return x.Interchange});
/* harmony import */var j=n(/*! ../foundation.magellan */"./js/foundation.magellan.js");
/* harmony reexport (safe) */n.d(t,"Magellan",function(){return j.Magellan});
/* harmony import */var _=n(/*! ../foundation.offcanvas */"./js/foundation.offcanvas.js");
/* harmony reexport (safe) */n.d(t,"OffCanvas",function(){return _.OffCanvas});
/* harmony import */var C=n(/*! ../foundation.orbit */"./js/foundation.orbit.js");
/* harmony reexport (safe) */n.d(t,"Orbit",function(){return C.Orbit});
/* harmony import */var T=n(/*! ../foundation.responsiveMenu */"./js/foundation.responsiveMenu.js");
/* harmony reexport (safe) */n.d(t,"ResponsiveMenu",function(){return T.ResponsiveMenu});
/* harmony import */var O=n(/*! ../foundation.responsiveToggle */"./js/foundation.responsiveToggle.js");
/* harmony reexport (safe) */n.d(t,"ResponsiveToggle",function(){return O.ResponsiveToggle});
/* harmony import */var S=n(/*! ../foundation.reveal */"./js/foundation.reveal.js");
/* harmony reexport (safe) */n.d(t,"Reveal",function(){return S.Reveal});
/* harmony import */var E=n(/*! ../foundation.slider */"./js/foundation.slider.js");
/* harmony reexport (safe) */n.d(t,"Slider",function(){return E.Slider});
/* harmony import */var z=n(/*! ../foundation.smoothScroll */"./js/foundation.smoothScroll.js");
/* harmony reexport (safe) */n.d(t,"SmoothScroll",function(){return z.SmoothScroll});
/* harmony import */var A=n(/*! ../foundation.sticky */"./js/foundation.sticky.js");
/* harmony reexport (safe) */n.d(t,"Sticky",function(){return A.Sticky});
/* harmony import */var P=n(/*! ../foundation.tabs */"./js/foundation.tabs.js");
/* harmony reexport (safe) */n.d(t,"Tabs",function(){return P.Tabs});
/* harmony import */var L=n(/*! ../foundation.toggler */"./js/foundation.toggler.js");
/* harmony reexport (safe) */n.d(t,"Toggler",function(){return L.Toggler});
/* harmony import */var D=n(/*! ../foundation.tooltip */"./js/foundation.tooltip.js");
/* harmony reexport (safe) */n.d(t,"Tooltip",function(){return D.Tooltip});
/* harmony import */var q=n(/*! ../foundation.responsiveAccordionTabs */"./js/foundation.responsiveAccordionTabs.js");
/* harmony reexport (safe) */n.d(t,"ResponsiveAccordionTabs",function(){return q.ResponsiveAccordionTabs}),r.Foundation.addToJquery(o.a),// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
r.Foundation.rtl=s.rtl,r.Foundation.GetYoDigits=s.GetYoDigits,r.Foundation.transitionend=s.transitionend,r.Foundation.RegExpEscape=s.RegExpEscape,r.Foundation.onLoad=s.onLoad,r.Foundation.Box=a.Box,r.Foundation.onImagesLoaded=l.onImagesLoaded,r.Foundation.Keyboard=u.Keyboard,r.Foundation.MediaQuery=c.MediaQuery,r.Foundation.Motion=d.Motion,r.Foundation.Move=d.Move,r.Foundation.Nest=f.Nest,r.Foundation.Timer=h.Timer,// Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.
p.Touch.init(o.a),m.Triggers.init(o.a,r.Foundation),c.MediaQuery._init(),r.Foundation.plugin(g.Abide,"Abide"),r.Foundation.plugin(v.Accordion,"Accordion"),r.Foundation.plugin(y.AccordionMenu,"AccordionMenu"),r.Foundation.plugin(b.Drilldown,"Drilldown"),r.Foundation.plugin(w.Dropdown,"Dropdown"),r.Foundation.plugin($.DropdownMenu,"DropdownMenu"),r.Foundation.plugin(k.Equalizer,"Equalizer"),r.Foundation.plugin(x.Interchange,"Interchange"),r.Foundation.plugin(j.Magellan,"Magellan"),r.Foundation.plugin(_.OffCanvas,"OffCanvas"),r.Foundation.plugin(C.Orbit,"Orbit"),r.Foundation.plugin(T.ResponsiveMenu,"ResponsiveMenu"),r.Foundation.plugin(O.ResponsiveToggle,"ResponsiveToggle"),r.Foundation.plugin(S.Reveal,"Reveal"),r.Foundation.plugin(E.Slider,"Slider"),r.Foundation.plugin(z.SmoothScroll,"SmoothScroll"),r.Foundation.plugin(A.Sticky,"Sticky"),r.Foundation.plugin(P.Tabs,"Tabs"),r.Foundation.plugin(L.Toggler,"Toggler"),r.Foundation.plugin(D.Tooltip,"Tooltip"),r.Foundation.plugin(q.ResponsiveAccordionTabs,"ResponsiveAccordionTabs"),
/* harmony default export */t.default=r.Foundation},
/***/"./js/foundation.abide.js":
/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************/
/*! exports provided: Abide */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Abide module.
 * @module foundation.abide
 */n.r(t),
/* harmony export (binding) */n.d(t,"Abide",function(){return g});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=
/* */
function(e){function o(){return r(this,o),a(this,u(o).apply(this,arguments))}return c(o,e),s(o,[{key:"_setup",
/**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n
/**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */){var i=1<arguments.length&&void 0!==n?n:{};this.$element=t,this.options=h.a.extend(!0,{},o.defaults,this.$element.data(),i),this.className="Abide",// ie9 back compat
this._init()}},{key:"_init",value:function e(){var n=this;this.$inputs=h.a.merge(// Consider as input to validate:
this.$element.find("input").not("[type=submit]"),// * all input fields expect submit
this.$element.find("textarea, select"));var t=this.$element.find("[data-abide-error]");// Add a11y attributes to all fields
this.options.a11yAttributes&&(this.$inputs.each(function(e,t){return n.addA11yAttributes(h()(t))}),t.each(function(e,t){return n.addGlobalErrorA11yAttributes(h()(t))})),this._events()}
/**
     * Initializes events for Abide.
     * @private
     */},{key:"_events",value:function e(){var t=this;this.$element.off(".abide").on("reset.zf.abide",function(){t.resetForm()}).on("submit.zf.abide",function(){return t.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(e){t.validateInput(h()(e.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(e){t.validateInput(h()(e.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(e){t.validateInput(h()(e.target))})}
/**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */},{key:"_reflow",value:function e(){this._init()}
/**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"requiredCheck",value:function e(t){if(!t.attr("required"))return!0;var n=!0;switch(t[0].type){case"checkbox":n=t[0].checked;break;case"select":case"select-one":case"select-multiple":var i=t.find("option:selected");i.length&&i.val()||(n=!1);break;default:t.val()&&t.val().length||(n=!1)}return n}
/**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */},{key:"findFormError",value:function e(t){var n=t[0].id,i=t.siblings(this.options.formErrorSelector);return i.length||(i=t.parent().find(this.options.formErrorSelector)),n&&(i=i.add(this.$element.find('[data-form-error-for="'.concat(n,'"]')))),i}
/**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findLabel",value:function e(t){var n=t[0].id,i=this.$element.find('label[for="'.concat(n,'"]'));return i.length?i:t.closest("label")}
/**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findRadioLabels",value:function e(t){var o=this,n=t.map(function(e,t){var n=t.id,i=o.$element.find('label[for="'.concat(n,'"]'));return i.length||(i=h()(t).closest("label")),i[0]});return h()(n)}
/**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */},{key:"addErrorClasses",value:function e(t){var n=this.findLabel(t),i=this.findFormError(t);n.length&&n.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),t.addClass(this.options.inputErrorClass).attr({"data-invalid":"","aria-invalid":!0})}
/**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */},{key:"addA11yAttributes",value:function e(t){var n=this.findFormError(t),i=n.filter("label"),o=n.first();if(n.length){// Set [aria-describedby] on the input toward the first form error if it is not set
if(void 0===t.attr("aria-describedby")){
// Get the first error ID or create one
var r=o.attr("id");void 0===r&&(r=Object(m.GetYoDigits)(6,"abide-error"),o.attr("id",r)),t.attr("aria-describedby",r)}if(i.filter("[for]").length<i.length){
// Get the input ID or create one
var s=t.attr("id");void 0===s&&(s=Object(m.GetYoDigits)(6,"abide-input"),t.attr("id",s)),// For each label targeting $el, set [for] if it is not set.
i.each(function(e,t){var n=h()(t);void 0===n.attr("for")&&n.attr("for",s)})}// For each error targeting $el, set [role=alert] if it is not set.
n.each(function(e,t){var n=h()(t);void 0===n.attr("role")&&n.attr("role","alert")}).end()}}
/**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */},{key:"addGlobalErrorA11yAttributes",value:function e(t){void 0===t.attr("aria-live")&&t.attr("aria-live",this.options.a11yErrorLevel)}
/**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */},{key:"removeRadioErrorClasses",value:function e(t){var n=this.$element.find(':radio[name="'.concat(t,'"]')),i=this.findRadioLabels(n),o=this.findFormError(n);i.length&&i.removeClass(this.options.labelErrorClass),o.length&&o.removeClass(this.options.formErrorClass),n.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */},{key:"removeErrorClasses",value:function e(t){
// radios need to clear all of the els
if("radio"==t[0].type)return this.removeRadioErrorClasses(t.attr("name"));var n=this.findLabel(t),i=this.findFormError(t);n.length&&n.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),t.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */},{key:"validateInput",value:function e(t){var n=this.requiredCheck(t),i=!1,o=!0,r=t.attr("data-validator"),s=!0;// don't validate ignored inputs or hidden inputs or disabled inputs
if(t.is("[data-abide-ignore]")||t.is('[type="hidden"]')||t.is("[disabled]"))return!0;switch(t[0].type){case"radio":i=this.validateRadio(t.attr("name"));break;case"checkbox":i=n;break;case"select":case"select-one":case"select-multiple":i=n;break;default:i=this.validateText(t)}r&&(o=this.matchValidation(t,r,t.attr("required"))),t.attr("data-equalto")&&(s=this.options.validators.equalTo(t));var a=-1===[n,i,o,s].indexOf(!1),l=(a?"valid":"invalid")+".zf.abide";if(a){
// Re-validate inputs that depend on this one with equalto
var u=this.$element.find('[data-equalto="'.concat(t.attr("id"),'"]'));if(u.length){var c=this;u.each(function(){h()(this).val()&&c.validateInput(h()(this))})}}return this[a?"removeErrorClasses":"addErrorClasses"](t),
/**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */
t.trigger(l,[t]),a}
/**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */},{key:"validateForm",value:function e(){var i=this,t=[],n=this;this.$inputs.each(function(){t.push(n.validateInput(h()(this)))});var o=-1===t.indexOf(!1);return this.$element.find("[data-abide-error]").each(function(e,t){var n=h()(t);// Ensure a11y attributes are set
i.options.a11yAttributes&&i.addGlobalErrorA11yAttributes(n),// Show or hide the error
n.css("display",o?"none":"block")}),
/**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */
this.$element.trigger((o?"formvalid":"forminvalid")+".zf.abide",[this.$element]),o}
/**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */},{key:"validateText",value:function e(t,n){
// A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
n=n||t.attr("pattern")||t.attr("type");var i=t.val(),o=!1;return i.length?
// If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
o=this.options.patterns.hasOwnProperty(n)?this.options.patterns[n].test(i):n===t.attr("type")||new RegExp(n).test(i):t.prop("required")||(o=!0),o}
/**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */},{key:"validateRadio",value:function e(t){
// If at least one radio in the group has the `required` attribute, the group is considered required
// Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
var n=this.$element.find(':radio[name="'.concat(t,'"]')),i=!1,o=!1;// For the group to be required, at least one radio needs to be required
return n.each(function(e,t){h()(t).attr("required")&&(o=!0)}),o||(i=!0),i||
// For the group to be valid, at least one radio needs to be checked
n.each(function(e,t){h()(t).prop("checked")&&(i=!0)}),i}
/**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */},{key:"matchValidation",value:function e(t,n,i){var o=this,r;return i=!!i,-1===n.split(" ").map(function(e){return o.options.validators[e](t,i,t.parent())}).indexOf(!1)}
/**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */},{key:"resetForm",value:function e(){var t=this.$element,n=this.options;h()(".".concat(n.labelErrorClass),t).not("small").removeClass(n.labelErrorClass),h()(".".concat(n.inputErrorClass),t).not("small").removeClass(n.inputErrorClass),h()("".concat(n.formErrorSelector,".").concat(n.formErrorClass)).removeClass(n.formErrorClass),t.find("[data-abide-error]").css("display","none"),h()(":input",t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({"data-invalid":null,"aria-invalid":null}),h()(":input:radio",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),h()(":input:checkbox",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),
/**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */
t.trigger("formreset.zf.abide",[t])}
/**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */},{key:"_destroy",value:function e(){var t=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){t.removeErrorClasses(h()(this))})}}]),o}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
g.defaults={
/**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
validateOn:"fieldChange",
/**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
labelErrorClass:"is-invalid-label",
/**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
inputErrorClass:"is-invalid-input",
/**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
formErrorSelector:".form-error",
/**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
formErrorClass:"is-visible",
/**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */
a11yAttributes:!0,
/**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
a11yErrorLevel:"assertive",
/**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
liveValidate:!1,
/**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,
// amex, visa, diners
card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,
// http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
// From CommonRegexJS (@talyssonoc)
// https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
// For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
// abc.de
domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
// YYYY-MM-DD
date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
// HH:MM:SS
time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
// MM/DD/YYYY
month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
// DD/MM/YYYY
day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
// #FFF or #FFFFFF
color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
// Domain || URL
website:{test:function e(t){return g.defaults.patterns.domain.test(t)||g.defaults.patterns.url.test(t)}}},
/**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
validators:{equalTo:function e(t,n,i){return h()("#".concat(t.attr("data-equalto"))).val()===t.val()}}}},
/***/"./js/foundation.accordion.js":
/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************/
/*! exports provided: Accordion */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */n.r(t),
/* harmony export (binding) */n.d(t,"Accordion",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g,v=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Accordion",// ie9 back compat
this._init(),m.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}
/**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */},{key:"_init",value:function e(){var o=this;this._isInitializing=!0,this.$element.attr("role","tablist"),this.$tabs=this.$element.children("[data-accordion-item]"),this.$tabs.each(function(e,t){var n=h()(t),i=n.children("[data-tab-content]"),o=i[0].id||Object(p.GetYoDigits)(6,"accordion"),r=t.id?"".concat(t.id,"-label"):"".concat(o,"-label");n.find("a:first").attr({"aria-controls":o,role:"tab",id:r,"aria-expanded":!1,"aria-selected":!1}),i.attr({role:"tabpanel","aria-labelledby":r,"aria-hidden":!0,id:o})});var t=this.$element.find(".is-active").children("[data-tab-content]");t.length&&(
// Save up the initial hash to return to it later when going back in history
this._initialAnchor=t.prev("a").attr("href"),this._openSingleTab(t)),this._checkDeepLink=function(){var e=window.location.hash;if(!e.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(o._isInitializing)return;// Otherwise, move to the initial anchor
o._initialAnchor&&(e=o._initialAnchor)}var t=e&&h()(e),n=e&&o.$element.find('[href$="'.concat(e,'"]')),i=!(!t.length||!n.length);// If there is an anchor for the hash, open it (if not already active)
t&&n&&n.length?n.parent("[data-accordion-item]").hasClass("is-active")||o._openSingleTab(t):o._closeAllTabs(),i&&(
// Roll up a little to show the titles
o.options.deepLinkSmudge&&Object(p.onLoad)(h()(window),function(){var e=o.$element.offset();h()("html, body").animate({scrollTop:e.top},o.options.deepLinkSmudgeDelay)})
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */,o.$element.trigger("deeplink.zf.accordion",[n,t]))},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the accordion.
     * @private
     */},{key:"_events",value:function e(){var o=this;this.$tabs.each(function(){var n=h()(this),i=n.children("[data-tab-content]");i.length&&n.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(e){e.preventDefault(),o.toggle(i)}).on("keydown.zf.accordion",function(t){m.Keyboard.handleKey(t,"Accordion",{toggle:function e(){o.toggle(i)},next:function e(){var t=n.next().find("a").focus();o.options.multiExpand||t.trigger("click.zf.accordion")},previous:function e(){var t=n.prev().find("a").focus();o.options.multiExpand||t.trigger("click.zf.accordion")},handled:function e(){t.preventDefault(),t.stopPropagation()}})})}),this.options.deepLink&&h()(window).on("hashchange",this._checkDeepLink)}
/**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */},{key:"toggle",value:function e(t){if(t.closest("[data-accordion]").is("[disabled]"))console.info("Cannot toggle an accordion that is disabled.");else//either replace or update browser history
if(t.parent().hasClass("is-active")?this.up(t):this.down(t),this.options.deepLink){var n=t.prev("a").attr("href");this.options.updateHistory?history.pushState({},"",n):history.replaceState({},"",n)}}
/**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */},{key:"down",value:function e(t){t.closest("[data-accordion]").is("[disabled]")?console.info("Cannot call down on an accordion that is disabled."):this.options.multiExpand?this._openTab(t):this._openSingleTab(t)}
/**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */},{key:"up",value:function e(t){if(this.$element.is("[disabled]"))console.info("Cannot call up on an accordion that is disabled.");else{// Don't close the item if it is already closed
var n=t.parent();if(n.hasClass("is-active")){// Don't close the item if there is no other active item (unless with `allowAllClosed`)
var i=n.siblings();(this.options.allowAllClosed||i.hasClass("is-active"))&&this._closeTab(t)}}}
/**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */},{key:"_openSingleTab",value:function e(t){
// Close all the others active tabs.
var n=this.$element.children(".is-active").children("[data-tab-content]");n.length&&this._closeTab(n.not(t)),// Then open the target.
this._openTab(t)}
/**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */},{key:"_openTab",value:function e(t){var n=this,i=t.parent(),o=t.attr("aria-labelledby");t.attr("aria-hidden",!1),i.addClass("is-active"),h()("#".concat(o)).attr({"aria-expanded":!0,"aria-selected":!0}),t.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
n.$element.trigger("down.zf.accordion",[t])})}
/**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeTab",value:function e(t){var n=this,i=t.parent(),o=t.attr("aria-labelledby");t.attr("aria-hidden",!0),i.removeClass("is-active"),h()("#".concat(o)).attr({"aria-expanded":!1,"aria-selected":!1}),t.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
n.$element.trigger("up.zf.accordion",[t])})}
/**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeAllTabs",value:function e(){var t=this.$element.children(".is-active").children("[data-tab-content]");t.length&&this._closeTab(t)}
/**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */},{key:"_destroy",value:function e(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),this.options.deepLink&&h()(window).off("hashchange",this._checkDeepLink)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
multiExpand:!1,
/**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
allowAllClosed:!1,
/**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1}},
/***/"./js/foundation.accordionMenu.js":
/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************/
/*! exports provided: AccordionMenu */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */n.r(t),
/* harmony export (binding) */n.d(t,"AccordionMenu",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="AccordionMenu",// ie9 back compat
this._init(),p.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}
/**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */},{key:"_init",value:function e(){m.Nest.Feather(this.$element,"accordion");var s=this;this.$element.find("[data-submenu]").not(".is-active").slideUp(0),//.find('a').css('padding-left', '1rem');
this.$element.attr({role:"tree","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var e=this.id||Object(g.GetYoDigits)(6,"acc-menu-link"),t=h()(this),n=t.children("[data-submenu]"),i=n[0].id||Object(g.GetYoDigits)(6,"acc-menu"),o=n.hasClass("is-active"),r;s.options.parentLink&&t.children("a").clone().prependTo(n).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');s.options.submenuToggle?(t.addClass("has-submenu-toggle"),t.children("a").after('<button id="'+e+'" class="submenu-toggle" aria-controls="'+i+'" aria-expanded="'+o+'" title="'+s.options.submenuToggleText+'"><span class="submenu-toggle-text">'+s.options.submenuToggleText+"</span></button>")):t.attr({"aria-controls":i,"aria-expanded":o,id:e}),n.attr({"aria-labelledby":e,"aria-hidden":!o,role:"group",id:i})}),this.$element.find("li").attr({role:"treeitem"});var t=this.$element.find(".is-active");if(t.length){var s=this;t.each(function(){s.down(h()(this))})}this._events()}
/**
     * Adds event handlers for items within the menu.
     * @private
     */},{key:"_events",value:function e(){var a=this;this.$element.find("li").each(function(){var t=h()(this).children("[data-submenu]");t.length&&(a.options.submenuToggle?h()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(e){a.toggle(t)}):h()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(e){e.preventDefault(),a.toggle(t)}))}).on("keydown.zf.accordionmenu",function(n){var t=h()(this),i=t.parent("ul").children("li"),o,r,s=t.children("[data-submenu]");i.each(function(e){if(h()(this).is(t))return o=i.eq(Math.max(0,e-1)).find("a").first(),r=i.eq(Math.min(e+1,i.length-1)).find("a").first(),h()(this).children("[data-submenu]:visible").length&&(
// has open sub menu
r=t.find("li:first-child").find("a").first()),h()(this).is(":first-child")?
// is first element of sub menu
o=t.parents("li").first().find("a").first():o.parents("li").first().children("[data-submenu]:visible").length&&(
// if previous element has open sub menu
o=o.parents("li").find("li:last-child").find("a").first()),void(h()(this).is(":last-child")&&(
// is last element of sub menu
r=t.parents("li").first().next("li").find("a").first()))}),p.Keyboard.handleKey(n,"AccordionMenu",{open:function e(){s.is(":hidden")&&(a.down(s),s.find("li").first().find("a").first().focus())},close:function e(){s.length&&!s.is(":hidden")?
// close active sub of this item
a.up(s):t.parent("[data-submenu]").length&&(
// close currently open sub
a.up(t.parent("[data-submenu]")),t.parents("li").first().find("a").first().focus())},up:function e(){return o.focus(),!0},down:function e(){return r.focus(),!0},toggle:function e(){return!a.options.submenuToggle&&(t.children("[data-submenu]").length?(a.toggle(t.children("[data-submenu]")),!0):void 0)},closeAll:function e(){a.hideAll()},handled:function e(t){t&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all panes of the menu.
     * @function
     */},{key:"hideAll",value:function e(){this.up(this.$element.find("[data-submenu]"))}
/**
     * Opens all panes of the menu.
     * @function
     */},{key:"showAll",value:function e(){this.down(this.$element.find("[data-submenu]"))}
/**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */},{key:"toggle",value:function e(t){t.is(":animated")||(t.is(":hidden")?this.down(t):this.up(t))}
/**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */},{key:"down",value:function e(t){var n=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))),t.addClass("is-active").attr({"aria-hidden":!1}),this.options.submenuToggle?t.prev(".submenu-toggle").attr({"aria-expanded":!0}):t.parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),t.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
n.$element.trigger("down.zf.accordionMenu",[t])})}
/**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */},{key:"up",value:function e(t){var n=this,i=t.find("[data-submenu]"),o=t.add(i);i.slideUp(0),o.removeClass("is-active").attr("aria-hidden",!0),this.options.submenuToggle?o.prev(".submenu-toggle").attr("aria-expanded",!1):o.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1),t.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
n.$element.trigger("up.zf.accordionMenu",[t])})}
/**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */},{key:"_destroy",value:function e(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),this.$element.find("[data-is-parent-link]").detach(),this.options.submenuToggle&&(this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"),this.$element.find(".submenu-toggle").remove()),m.Nest.Burn(this.$element,"accordion")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
submenuToggle:!1,
/**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
submenuToggleText:"Toggle menu",
/**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
multiOpen:!0}},
/***/"./js/foundation.core.js":
/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************/
/*! exports provided: Foundation */
/***/function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}// Polyfill to get the name of a function in IE9
function l(e){if(void 0!==Function.prototype.name)return void 0===e.prototype?e.constructor.name:e.prototype.constructor.name;var t,n=/function\s([^(]{1,})\(/.exec(e.toString());return n&&1<n.length?n[1].trim():""}function s(e){return"true"===e||"false"!==e&&(isNaN(1*e)?e:parseFloat(e))}// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function u(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Foundation",function(){return f});
/* harmony import */var i=n(/*! jquery */"jquery"),c=/* */n.n(i),o=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),r,f={version:"6.5.1",
/**
   * Stores initialized plugins.
   */
_plugins:{},
/**
   * Stores generated unique ids for plugin instances
   */
_uuids:[],
/**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
plugin:function e(t,n){
// Object key to use when adding to global Foundation object
// Examples: Foundation.Reveal, Foundation.OffCanvas
var i=n||l(t),o=u(i);// Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
// Examples: data-reveal, data-off-canvas
// Add to the Foundation object and the plugins list (for reflowing)
this._plugins[o]=this[i]=t},
/**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
registerPlugin:function e(t,n){var i=n?u(n):l(t.constructor).toLowerCase();t.uuid=Object(o.GetYoDigits)(6,i),t.$element.attr("data-".concat(i))||t.$element.attr("data-".concat(i),t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,t.$element.trigger("init.zf.".concat(i)),this._uuids.push(t.uuid)},
/**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
unregisterPlugin:function e(t){var n=u(l(t.$element.data("zfPlugin").constructor));for(var i in this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-".concat(n)).removeData("zfPlugin")
/**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */.trigger("destroyed.zf.".concat(n)),t)t[i]=null;//clean up script to prep for garbage collection.
},
/**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
reInit:function e(t){var n=t instanceof c.a;try{if(n)t.each(function(){c()(this).data("zfPlugin")._init()});else{var i=a(t),o=this,r;({object:function e(t){t.forEach(function(e){e=u(e),c()("[data-"+e+"]").foundation("_init")})},string:function e(){t=u(t),c()("[data-"+t+"]").foundation("_init")},undefined:function e(){this.object(Object.keys(o._plugins))}})[i](t)}}catch(e){console.error(e)}finally{return t}},
/**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
reflow:function e(i,t){
// If plugins is undefined, just grab everything
void 0===t?t=Object.keys(this._plugins):"string"==typeof t&&(t=[t]);var r=this;// Iterate through each plugin
c.a.each(t,function(e,n){
// Get the current plugin
var o=r._plugins[n],t;// Localize the search to all elements inside elem, as well as elem itself, unless elem === document
// For each plugin found, initialize it
c()(i).find("[data-"+n+"]").addBack("[data-"+n+"]").each(function(){var e=c()(this),i={};// Don't double-dip on plugins
if(e.data("zfPlugin"))console.warn("Tried to initialize "+n+" on an element that already has a Foundation plugin.");else{if(e.attr("data-options"))var t=e.attr("data-options").split(";").forEach(function(e,t){var n=e.split(":").map(function(e){return e.trim()});n[0]&&(i[n[0]]=s(n[1]))});try{e.data("zfPlugin",new o(c()(this),i))}catch(e){console.error(e)}finally{return}}})})},getFnName:l,addToJquery:function e(s){
// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
var t=function e(n){var t=a(n),i=s(".no-js");if(i.length&&i.removeClass("no-js"),"undefined"===t)
//needs to initialize the Foundation object, or an individual plugin.
d.MediaQuery._init(),f.reflow(this);else{if("string"!==t)
//error for invalid argument type
throw new TypeError("We're sorry, ".concat(t," is not a valid parameter. You must use a string representing the method you wish to invoke."));
//an individual method to invoke on a plugin or group of plugins
var o=Array.prototype.slice.call(arguments,1),r=this.data("zfPlugin");//collect all the arguments, if necessary
//determine the class of plugin
if(void 0===r||void 0===r[n])
//error for no class or no method
throw new ReferenceError("We're sorry, '"+n+"' is not an available method for "+(r?l(r):"this element")+".");
//make sure both the class and method exist
1===this.length?
//if there's only one, call it directly.
r[n].apply(r,o):this.each(function(e,t){
//otherwise loop through the jQuery collection and invoke the method on each
r[n].apply(s(t).data("zfPlugin"),o)})}return this};return s.fn.foundation=t,s}};
/* harmony import */f.util={
/**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
throttle:function e(n,i){var o=null;return function(){var e=this,t=arguments;null===o&&(o=setTimeout(function(){n.apply(e,t),o=null},i))}}},window.Foundation=f,// Polyfill for requestAnimationFrame
function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var e=["webkit","moz"],t=0;t<e.length&&!window.requestAnimationFrame;++t){var n=e[t];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(e){var t=Date.now(),n=Math.max(i+16,t);return setTimeout(function(){e(i=n)},n-t)},window.cancelAnimationFrame=clearTimeout}
/**
   * Polyfill for performance.now, required by rAF
   */window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function e(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)
// closest thing possible to the ECMAScript 5
// internal IsCallable function
throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),i=this,o=function e(){},e=function e(){return i.apply(this instanceof o?this:t,n.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(
// native functions don't have a prototype
o.prototype=this.prototype),e.prototype=new o,e})},
/***/"./js/foundation.core.plugin.js":
/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************/
/*! exports provided: Plugin */
/***/function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}
// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function s(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function a(e){return void 0!==e.constructor.name?s(e.constructor.name):s(e.className)}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Plugin",function(){return d});
/* harmony import */var l=n(/*! jquery */"jquery"),u=/* */n.n(l),c=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=
/* */
function(){function i(e,t){o(this,i),this._setup(e,t);var n=a(this);this.uuid=Object(c.GetYoDigits)(6,n),this.$element.attr("data-".concat(n))||this.$element.attr("data-".concat(n),this.uuid),this.$element.data("zfPlugin")||this.$element.data("zfPlugin",this)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,this.$element.trigger("init.zf.".concat(n))}return r(i,[{key:"destroy",value:function e(){this._destroy();var t=a(this);for(var n in this.$element.removeAttr("data-".concat(t)).removeData("zfPlugin")
/**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */.trigger("destroyed.zf.".concat(t)),this)this[n]=null;//clean up script to prep for garbage collection.
}}]),i}();
/* harmony import */},
/***/"./js/foundation.core.utils.js":
/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/function(e,t,n){"use strict";
// Core Foundation Utilities, utilized in a number of places.
/**
 * Returns a boolean for RTL support
 */
function i(){return"rtl"===c()("html").attr("dir")}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */function o(e,t){return e=e||6,Math.round(Math.pow(36,e+1)-Math.random()*Math.pow(36,e)).toString(36).slice(1)+(t?"-".concat(t):"")}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */function r(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function s(e){var t={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div"),i;for(var o in t)void 0!==n.style[o]&&(i=t[o]);return i||(i=setTimeout(function(){e.triggerHandler("transitionend",[e])},1),"transitionend")}
/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */function a(t,e){var n="complete"===document.readyState,i=(n?"_didLoad":"load")+".zf.util.onLoad",o=function e(){return t.triggerHandler(i)};return t&&(e&&t.one(i,e),n?setTimeout(o):c()(window).one("load",o)),i}
/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */function l(s,e
/***/){var t=1<arguments.length&&void 0!==e?e:{},n=t.ignoreLeaveWindow,a=void 0!==n&&n,i=t.ignoreReappear,l=void 0!==i&&i;return function e(n){for(var t=arguments.length,i=new Array(1<t?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];var r=s.bind.apply(s,[this,n].concat(i));// The mouse left: call the given callback if the mouse entered elsewhere
if(null!==n.relatedTarget)return r();// Otherwise, check if the mouse actually left the window.
// In firefox if the user switched between windows, the window sill have the focus by the time
// the event is triggered. We have to debounce the event to test this case.
setTimeout(function e(){if(!a&&document.hasFocus&&!document.hasFocus())return r();// Otherwise, wait for the mouse to reeapear outside of the element,
l||c()(document).one("mouseenter",function e(t){c()(n.currentTarget).has(t.target).length||(
// Fill where the mouse finally entered.
n.relatedTarget=t.target,r())})},0)}}n.r(t),
/* harmony export (binding) */n.d(t,"rtl",function(){return i}),
/* harmony export (binding) */n.d(t,"GetYoDigits",function(){return o}),
/* harmony export (binding) */n.d(t,"RegExpEscape",function(){return r}),
/* harmony export (binding) */n.d(t,"transitionend",function(){return s}),
/* harmony export (binding) */n.d(t,"onLoad",function(){return a}),
/* harmony export (binding) */n.d(t,"ignoreMousedisappear",function(){return l});
/* harmony import */var u=n(/*! jquery */"jquery"),c=/* */n.n(u);
/* harmony import */},
/***/"./js/foundation.drilldown.js":
/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************/
/*! exports provided: Drilldown */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */n.r(t),
/* harmony export (binding) */n.d(t,"Drilldown",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),y,b=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Drilldown",// ie9 back compat
this._init(),p.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}
/**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */},{key:"_init",value:function e(){m.Nest.Feather(this.$element,"drilldown"),this.options.autoApplyClass&&this.$element.addClass("drilldown"),this.$element.attr({role:"tree","aria-multiselectable":!1}),this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role","group"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","treeitem").find("a"),// Set the main menu as current by default (unless a submenu is selected)
// Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu
this.$currentMenu=this.$element,this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||Object(g.GetYoDigits)(6,"drilldown")),this._prepareMenu(),this._registerEvents(),this._keyboardEvents()}
/**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */},{key:"_prepareMenu",value:function e(){var n=this;// if(!this.options.holdOpen){
//   this._menuLinkEvents();
// }
this.$submenuAnchors.each(function(){var e=h()(this),t=e.parent();n.options.parentLink&&e.clone().prependTo(t.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'),e.data("savedHref",e.attr("href")).removeAttr("href").attr("tabindex",0),e.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"group"}),n._events(e)}),this.$submenus.each(function(){var e=h()(this),t;if(!e.find(".js-drilldown-back").length)switch(n.options.backButtonPosition){case"bottom":e.append(n.options.backButton);break;case"top":e.prepend(n.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+n.options.backButtonPosition+"'")}n._back(e)}),this.$submenus.addClass("invisible"),this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous"),// create a wrapper on element if it doesn't exist.
this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=h()(this.options.wrapper).addClass("is-drilldown"),this.options.animateHeight&&this.$wrapper.addClass("animate-height"),this.$element.wrap(this.$wrapper)),// set wrapper
this.$wrapper=this.$element.parent(),this.$wrapper.css(this._getMaxDims())}},{key:"_resize",value:function e(){this.$wrapper.css({"max-width":"none","min-height":"none"}),// _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths
this.$wrapper.css(this._getMaxDims())}
/**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */},{key:"_events",value:function e(n){var i=this;n.off("click.zf.drilldown").on("click.zf.drilldown",function(e){if(h()(e.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(e.stopImmediatePropagation(),e.preventDefault()),// if(e.target !== e.currentTarget.firstElementChild){
//   return false;
// }
i._show(n.parent("li")),i.options.closeOnClick){var t=h()("body");t.off(".zf.drilldown").on("click.zf.drilldown",function(e){e.target===i.$element[0]||h.a.contains(i.$element[0],e.target)||(e.preventDefault(),i._hideAll(),t.off(".zf.drilldown"))})}})}
/**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */},{key:"_registerEvents",value:function e(){this.options.scrollTop&&(this._bindHandler=this._scrollTop.bind(this),this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",this._bindHandler)),this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}
/**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */},{key:"_scrollTop",value:function e(){var t=this,n=""!=t.options.scrollTopElement?h()(t.options.scrollTopElement):t.$element,i=parseInt(n.offset().top+t.options.scrollTopOffset,10);h()("html, body").stop(!0).animate({scrollTop:i},t.options.animationDuration,t.options.animationEasing,function(){
/**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
this===h()("html")[0]&&t.$element.trigger("scrollme.zf.drilldown")})}
/**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */},{key:"_keyboardEvents",value:function e(){var s=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",function(n){var t=h()(this),i=t.parent("li").parent("ul").children("li").children("a"),o,r;i.each(function(e){if(h()(this).is(t))return o=i.eq(Math.max(0,e-1)),void(r=i.eq(Math.min(e+1,i.length-1)))}),p.Keyboard.handleKey(n,"Drilldown",{next:function e(){if(t.is(s.$submenuAnchors))return s._show(t.parent("li")),t.parent("li").one(Object(g.transitionend)(t),function(){t.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0},previous:function e(){return s._hide(t.parent("li").parent("ul")),t.parent("li").parent("ul").one(Object(g.transitionend)(t),function(){setTimeout(function(){t.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function e(){// Don't tap focus on first element in root ul
return o.focus(),!t.is(s.$element.find("> li:first-child > a"))},down:function e(){// Don't tap focus on last element in root ul
return r.focus(),!t.is(s.$element.find("> li:last-child > a"))},close:function e(){
// Don't close on element in root ul
t.is(s.$element.find("> li > a"))||(s._hide(t.parent().parent()),t.parent().parent().siblings("a").focus())},open:function e(){return(!s.options.parentLink||!t.attr("href"))&&(t.is(s.$menuItems)?t.is(s.$submenuAnchors)?(
// Sub menu item
s._show(t.parent("li")),t.parent("li").one(Object(g.transitionend)(t),function(){t.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0):void 0:(
// not menu item means back button
s._hide(t.parent("li").parent("ul")),t.parent("li").parent("ul").one(Object(g.transitionend)(t),function(){setTimeout(function(){t.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0))},handled:function e(t){t&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#closed
     */},{key:"_hideAll",value:function e(){var t=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")}),t.one(Object(g.transitionend)(t),function(e){t.removeClass("is-active is-closing")}),
/**
       * Fires when the menu is fully closed.
       * @event Drilldown#closed
       */
this.$element.trigger("closed.zf.drilldown")}
/**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */},{key:"_back",value:function e(n){var i=this;n.off("click.zf.drilldown"),n.children(".js-drilldown-back").on("click.zf.drilldown",function(e){e.stopImmediatePropagation(),// console.log('mouseup on back');
i._hide(n);// If there is a parent submenu, call show
var t=n.parent("li").parent("ul").parent("li");t.length&&i._show(t)})}
/**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */},{key:"_menuLinkEvents",value:function e(){var t=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(e){
// e.stopImmediatePropagation();
setTimeout(function(){t._hideAll()},0)})}
/**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setShowSubMenuClasses",value:function e(t,n){t.addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),t.parent("li").attr("aria-expanded",!0),!0===n&&this.$element.trigger("open.zf.drilldown",[t])}
/**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setHideSubMenuClasses",value:function e(t,n){t.removeClass("is-active").addClass("invisible").attr("aria-hidden",!0),t.parent("li").attr("aria-expanded",!1),!0===n&&t.trigger("hide.zf.drilldown",[t])}
/**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */},{key:"_showMenu",value:function e(n,i){var o=this,t;// Reset drilldown
// If target menu is root, focus first link & exit
if(this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(e){o._setHideSubMenuClasses(h()(this))}),(// Save the menu as the currently displayed one.
this.$currentMenu=n).is("[data-drilldown]"))return!0===i&&n.find('li[role="treeitem"] > a').first().focus(),void(this.options.autoHeight&&this.$wrapper.css("height",n.data("calcHeight")));// Find all submenus on way to root incl. the element itself
var r=n.children().first().parentsUntil("[data-drilldown]","[data-submenu]");// Open target menu and all submenus on its way to root
r.each(function(e){
// Update height of first child (target menu) if autoHeight option true
0===e&&o.options.autoHeight&&o.$wrapper.css("height",h()(this).data("calcHeight"));var t=e==r.length-1;// Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
// Last child makes sure the event gets always triggered even if going through several menus
!0===t&&h()(this).one(Object(g.transitionend)(h()(this)),function(){!0===i&&n.find('li[role="treeitem"] > a').first().focus()}),o._setShowSubMenuClasses(h()(this),t)})}
/**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */},{key:"_show",value:function e(t){var n=t.children("[data-submenu]");t.attr("aria-expanded",!0),(this.$currentMenu=n).addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),this.options.autoHeight&&this.$wrapper.css({height:n.data("calcHeight")})
/**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */,this.$element.trigger("open.zf.drilldown",[t])}
/**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */},{key:"_hide",value:function e(t){this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")});var n=this;t.parent("li").attr("aria-expanded",!1),t.attr("aria-hidden",!0),t.addClass("is-closing").one(Object(g.transitionend)(t),function(){t.removeClass("is-active is-closing"),t.blur().addClass("invisible")}),
/**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */
t.trigger("hide.zf.drilldown",[t])}
/**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */},{key:"_getMaxDims",value:function e(){var n=0,t={},i=this;// Recalculate menu heights and total max height
return this.$submenus.add(this.$element).each(function(){var e=h()(this).children("li").length,t=v.Box.GetDimensions(this).height;n=n<t?t:n,i.options.autoHeight&&h()(this).data("calcHeight",t)}),this.options.autoHeight?t.height=this.$currentMenu.data("calcHeight"):t["min-height"]="".concat(n,"px"),t["max-width"]="".concat(this.$element[0].getBoundingClientRect().width,"px"),t}
/**
     * Destroys the Drilldown Menu
     * @function
     */},{key:"_destroy",value:function e(){this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler),this._hideAll(),this.$element.off("mutateme.zf.trigger"),m.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){h()(this).off(".zf.drilldown")}),this.$element.find("[data-is-parent-link]").detach(),this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"),this.$element.find("a").each(function(){var e=h()(this);e.removeAttr("tabindex"),e.data("savedHref")&&e.attr("href",e.data("savedHref")).removeData("savedHref")})}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */b.defaults={
/**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolian}
   * @default true
   */
autoApplyClass:!0,
/**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
/**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
backButtonPosition:"top",
/**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
wrapper:"<div></div>",
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1,
/**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
autoHeight:!1,
/**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
animateHeight:!1,
/**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
scrollTop:!1,
/**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
scrollTopElement:"",
/**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
scrollTopOffset:0,
/**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
animationEasing:"swing"}},
/***/"./js/foundation.dropdown.js":
/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************/
/*! exports provided: Dropdown */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function e(t,n,i){var o=c(t,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(i):r.value}})(e,t,n||e)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"Dropdown",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),y=n(/*! ./foundation.positionable */"./js/foundation.positionable.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(e){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return f(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Dropdown",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(m.a),this._init(),g.Keyboard.register("Dropdown",{ENTER:"toggle",SPACE:"toggle",ESCAPE:"close"})}
/**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */},{key:"_init",value:function e(){var t=this.$element.attr("id");this.$anchors=m()('[data-toggle="'.concat(t,'"]')).length?m()('[data-toggle="'.concat(t,'"]')):m()('[data-open="'.concat(t,'"]')),this.$anchors.attr({"aria-controls":t,"data-is-focus":!1,"data-yeti-box":t,"aria-haspopup":!0,"aria-expanded":!1}),this._setCurrentAnchor(this.$anchors.first()),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,// Set [aria-labelledby] on the Dropdown if it is not set
void 0===this.$element.attr("aria-labelledby")&&(
// Get the anchor ID or create one
void 0===this.$currentAnchor.attr("id")&&this.$currentAnchor.attr("id",Object(v.GetYoDigits)(6,"dd-anchor")),this.$element.attr("aria-labelledby",this.$currentAnchor.attr("id"))),this.$element.attr({"aria-hidden":"true","data-yeti-box":t,"data-resize":t}),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function e(){
// handle legacy classnames
var t=this.$element[0].className.match(/(top|left|right|bottom)/g);return t?t[0]:"bottom"}},{key:"_getDefaultAlignment",value:function e(){
// handle legacy float approach
var t=/float-(\S+)/.exec(this.$currentAnchor.attr("class"));return t?t[1]:u(d(i.prototype),"_getDefaultAlignment",this).call(this)}
/**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */},{key:"_setPosition",value:function e(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment)),u(d(i.prototype),"_setPosition",this).call(this,this.$currentAnchor,this.$element,this.$parent),this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment))}
/**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */},{key:"_setCurrentAnchor",value:function e(t){this.$currentAnchor=m()(t)}
/**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */},{key:"_events",value:function e(){var i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.$anchors.off("click.zf.trigger").on("click.zf.trigger",function(){i._setCurrentAnchor(this)}),this.options.hover&&(this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){i._setCurrentAnchor(this);var e=m()("body").data();void 0!==e.whatinput&&"mouse"!==e.whatinput||(clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.open(),i.$anchors.data("hover",!0)},i.options.hoverDelay))}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)})),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(i.timeout)}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)}))),this.$anchors.add(this.$element).on("keydown.zf.dropdown",function(t){var n=m()(this),e=g.Keyboard.findFocusable(i.$element);g.Keyboard.handleKey(t,"Dropdown",{open:function e(){n.is(i.$anchors)&&!n.is("input, textarea")&&(i.open(),i.$element.attr("tabindex",-1).focus(),t.preventDefault())},close:function e(){i.close(),i.$anchors.focus()}})})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function e(){var t=m()(document.body).not(this.$element),n=this;t.off("click.zf.dropdown").on("click.zf.dropdown",function(e){n.$anchors.is(e.target)||n.$anchors.find(e.target).length||n.$element.is(e.target)||n.$element.find(e.target).length||(n.close(),t.off("click.zf.dropdown"))})}
/**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */},{key:"open",value:function e(){if(
// var _this = this;
/**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchors.addClass("hover").attr({"aria-expanded":!0}),// this.$element/*.show()*/;
this.$element.addClass("is-opening"),this._setPosition(),this.$element.removeClass("is-opening").addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var t=g.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&g.Keyboard.trapFocus(this.$element)
/**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */,this.$element.trigger("show.zf.dropdown",[this.$element])}
/**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */},{key:"close",value:function e(){if(!this.$element.hasClass("is-open"))return!1;this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchors.removeClass("hover").attr("aria-expanded",!1),
/**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */
this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&g.Keyboard.releaseFocus(this.$element)}
/**
     * Toggles the dropdown pane's visibility.
     * @function
     */},{key:"toggle",value:function e(){if(this.$element.hasClass("is-open")){if(this.$anchors.data("hover"))return;this.close()}else this.open()}
/**
     * Destroys the dropdown.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.off(".zf.trigger").hide(),this.$anchors.off(".zf.dropdown"),m()(document.body).off("click.zf.dropdown")}}]),i}(y.Positionable);
/* harmony import */w.defaults={
/**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
parentClass:null,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
hoverDelay:250,
/**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
hover:!1,
/**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
hoverPane:!1,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1,
/**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1}},
/***/"./js/foundation.dropdownMenu.js":
/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************/
/*! exports provided: DropdownMenu */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */n.r(t),
/* harmony export (binding) */n.d(t,"DropdownMenu",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),y=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),b=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="DropdownMenu",// ie9 back compat
this._init(),g.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}
/**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */},{key:"_init",value:function e(){v.Nest.Feather(this.$element,"dropdown");var t=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),"auto"===this.options.alignment?this.$element.hasClass(this.options.rightClass)||Object(m.rtl)()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",t.addClass("opens-left")):(this.options.alignment="left",t.addClass("opens-right")):"right"===this.options.alignment?t.addClass("opens-left"):t.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function e(){return"block"===this.$tabs.css("display")||"column"===this.$element.css("flex-direction")}},{key:"_isRtl",value:function e(){return this.$element.hasClass("align-right")||Object(m.rtl)()&&!this.$element.hasClass("align-left")}
/**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */},{key:"_events",value:function e(){var d=this,s="ontouchstart"in window||void 0!==window.ontouchstart,a="is-dropdown-submenu-parent",t=function e(t){var n=h()(t.target).parentsUntil("ul",".".concat(a)),i=n.hasClass(a),o="true"===n.attr("data-is-click"),r=n.children(".is-dropdown-submenu");if(i)if(o){if(!d.options.closeOnClick||!d.options.clickOpen&&!s||d.options.forceFollow&&s)return;t.stopImmediatePropagation(),t.preventDefault(),d._hide(n)}else t.preventDefault(),t.stopImmediatePropagation(),d._show(r),n.add(n.parentsUntil(d.$element,".".concat(a))).attr("data-is-click",!0)};// used for onClick and in the keyboard handlers
(this.options.clickOpen||s)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",t),// Handle Leaf element Clicks
d.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu",function(e){var t,n;h()(this).hasClass(a)||d._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(e){var t=h()(this),n;t.hasClass(a)&&(clearTimeout(t.data("_delay")),t.data("_delay",setTimeout(function(){d._show(t.children(".is-dropdown-submenu"))},d.options.hoverDelay)))}).on("mouseleave.zf.dropdownMenu",Object(m.ignoreMousedisappear)(function(e){var t=h()(this),n;if(t.hasClass(a)&&d.options.autoclose){if("true"===t.attr("data-is-click")&&d.options.clickOpen)return!1;clearTimeout(t.data("_delay")),t.data("_delay",setTimeout(function(){d._hide(t)},d.options.closingTime))}})),this.$menuItems.on("keydown.zf.dropdownmenu",function(n){var i=h()(n.target).parentsUntil("ul",'[role="menuitem"]'),e=-1<d.$tabs.index(i),t=e?d.$tabs:i.siblings("li").add(i),o,r;t.each(function(e){if(h()(this).is(i))return o=t.eq(e-1),void(r=t.eq(e+1))});var s=function e(){r.children("a:first").focus(),n.preventDefault()},a=function e(){o.children("a:first").focus(),n.preventDefault()},l=function e(){var t=i.children("ul.is-dropdown-submenu");t.length&&(d._show(t),i.find("li > a:first").focus(),n.preventDefault())},u=function e(){
//if ($element.is(':first-child')) {
var t=i.parent("ul").parent("li");t.children("a:first").focus(),d._hide(t),n.preventDefault()},c={open:l,close:function e(){d._hide(d.$element),d.$menuItems.eq(0).children("a").focus(),// focus to first element
n.preventDefault()},handled:function e(){n.stopImmediatePropagation()}};e?d._isVertical()?
// vertical menu
d._isRtl()?
// right aligned
h.a.extend(c,{down:s,up:a,next:u,previous:l}):
// left aligned
h.a.extend(c,{down:s,up:a,next:l,previous:u}):
// horizontal menu
d._isRtl()?
// right aligned
h.a.extend(c,{next:a,previous:s,down:l,up:u}):
// left aligned
h.a.extend(c,{next:s,previous:a,down:l,up:u}):
// not tabs -> one sub
d._isRtl()?
// right aligned
h.a.extend(c,{next:u,previous:l,down:s,up:a}):
// left aligned
h.a.extend(c,{next:l,previous:u,down:s,up:a}),g.Keyboard.handleKey(n,"DropdownMenu",c)})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function e(){var n=h()(document.body),i=this;n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(e){var t;i.$element.find(e.target).length||(i._hide(),n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}
/**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires Dropdownmenu#show
     */},{key:"_show",value:function e(n){var t=this.$tabs.index(this.$tabs.filter(function(e,t){return 0<h()(t).find(n).length})),i=n.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(i,t),n.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var o=y.Box.ImNotTouchingYou(n,null,!0);if(!o){var r="left"===this.options.alignment?"-right":"-left",s=n.parent(".is-dropdown-submenu-parent");s.removeClass("opens".concat(r)).addClass("opens-".concat(this.options.alignment)),(o=y.Box.ImNotTouchingYou(n,null,!0))||s.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"),this.changed=!0}n.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler()
/**
       * Fires when the new dropdown pane is visible.
       * @event Dropdownmenu#show
       */,this.$element.trigger("show.zf.dropdownmenu",[n])}
/**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */},{key:"_hide",value:function e(t,n){var i,o;if((i=t&&t.length?t:void 0!==n?this.$tabs.not(function(e,t){return e===n}):this.$element).hasClass("is-active")||0<i.find(".is-active").length){if(i.find("li.is-active").add(i).attr({"data-is-click":!1}).removeClass("is-active"),i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||i.find("opens-inner").length){var r="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(r)),this.changed=!1}
/**
         * Fires when the open menus are closed.
         * @event Dropdownmenu#hide
         */this.$element.trigger("hide.zf.dropdownmenu",[i])}}
/**
     * Destroys the plugin.
     * @function
     */},{key:"_destroy",value:function e(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),h()(document.body).off(".zf.dropdownmenu"),v.Nest.Burn(this.$element,"dropdown")}}]),i}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
b.defaults={
/**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
autoclose:!0,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
hoverDelay:50,
/**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
clickOpen:!1,
/**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
closingTime:500,
/**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClickInside:!0,
/**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
verticalClass:"vertical",
/**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
rightClass:"align-right",
/**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
forceFollow:!0}},
/***/"./js/foundation.equalizer.js":
/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************/
/*! exports provided: Equalizer */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */n.r(t),
/* harmony export (binding) */n.d(t,"Equalizer",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Equalizer",// ie9 back compat
this._init()}
/**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function e(){var t=this.$element.attr("data-equalizer")||"",n=this.$element.find('[data-equalizer-watch="'.concat(t,'"]'));p.MediaQuery._init(),this.$watched=n.length?n:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",t||Object(g.GetYoDigits)(6,"eq")),this.$element.attr("data-mutate",t||Object(g.GetYoDigits)(6,"eq")),this.hasNested=0<this.$element.find("[data-equalizer]").length,this.isNested=0<this.$element.parentsUntil(document.body,"[data-equalizer]").length,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var i=this.$element.find("img"),o;this.options.equalizeOn?(o=this._checkMQ(),h()(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==o&&!1===o||void 0===o)&&(i.length?Object(m.onImagesLoaded)(i,this._reflow.bind(this)):this._reflow())}
/**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */},{key:"_pauseEvents",value:function e(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}
/**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */},{key:"_onResizeMe",value:function e(t){this._reflow()}
/**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */},{key:"_onPostEqualized",value:function e(t){t.target!==this.$element[0]&&this._reflow()}
/**
     * Initializes events for Equalizer.
     * @private
     */},{key:"_events",value:function e(){var t=this;this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):(this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)),this.isOn=!0}
/**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */},{key:"_checkMQ",value:function e(){var t=!p.MediaQuery.is(this.options.equalizeOn);return t?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),t}
/**
     * A noop version for the plugin
     * @private
     */},{key:"_killswitch",value:function e(){}
/**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */},{key:"_reflow",value:function e(){if(!this.options.equalizeOnStack&&this._isStacked())return this.$watched.css("height","auto"),!1;this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this))}
/**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */},{key:"_isStacked",value:function e(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */},{key:"getHeights",value:function e(t){for(var n=[],i=0,o=this.$watched.length;i<o;i++)this.$watched[i].style.height="auto",n.push(this.$watched[i].offsetHeight);t(n)}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */},{key:"getHeightsByRow",value:function e(t){var n=this.$watched.length?this.$watched.first().offset().top:0,i=[],o=0;//group by Row
i[o]=[];for(var r=0,s=this.$watched.length;r<s;r++){this.$watched[r].style.height="auto";//maybe could use this.$watched[i].offsetTop
var a=h()(this.$watched[r]).offset().top;a!=n&&(i[++o]=[],n=a),i[o].push([this.$watched[r],this.$watched[r].offsetHeight])}for(var l=0,u=i.length;l<u;l++){var c=h()(i[l]).map(function(){return this[1]}).get(),d=Math.max.apply(null,c);i[l].push(d)}t(i)}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */},{key:"applyHeight",value:function e(t){var n=Math.max.apply(null,t);
/**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",n),
/**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */
this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */},{key:"applyHeightByRow",value:function e(t){
/**
       * Fires before the heights are applied
       */
this.$element.trigger("preequalized.zf.equalizer");for(var n=0,i=t.length;n<i;n++){var o=t[n].length,r=t[n][o-1];if(o<=2)h()(t[n][0][0]).css({height:"auto"});else{
/**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */
this.$element.trigger("preequalizedrow.zf.equalizer");for(var s=0,a=o-1;s<a;s++)h()(t[n][s][0]).css({height:r});
/**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */this.$element.trigger("postequalizedrow.zf.equalizer")}}
/**
       * Fires when the heights have been applied
       */this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Destroys an instance of Equalizer.
     * @function
     */},{key:"_destroy",value:function e(){this._pauseEvents(),this.$watched.css("height","auto")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
y.defaults={
/**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeOnStack:!1,
/**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeByRow:!1,
/**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
equalizeOn:""}},
/***/"./js/foundation.interchange.js":
/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************/
/*! exports provided: Interchange */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */n.r(t),
/* harmony export (binding) */n.d(t,"Interchange",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=
/* */
function(e){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,e),s(l,[{key:"_setup",
/**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},l.defaults,n),this.rules=[],this.currentPath="",this.className="Interchange",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */},{key:"_init",value:function e(){p.MediaQuery._init();var t=this.$element[0].id||Object(g.GetYoDigits)(6,"interchange");this.$element.attr({"data-resize":t,id:t}),this._addBreakpoints(),this._generateRules(),this._reflow()}
/**
     * Initializes events for Interchange.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t=this;this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(){return t._reflow()})}
/**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */},{key:"_reflow",value:function e(){var t;// Iterate through each rule, but only save the last match
for(var n in this.rules)if(this.rules.hasOwnProperty(n)){var i=this.rules[n];window.matchMedia(i.query).matches&&(t=i)}t&&this.replace(t.path)}
/**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */},{key:"_addBreakpoints",value:function e(){for(var t in p.MediaQuery.queries)if(p.MediaQuery.queries.hasOwnProperty(t)){var n=p.MediaQuery.queries[t];l.SPECIAL_QUERIES[n.name]=n.value}}
/**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */},{key:"_generateRules",value:function e(t){var n=[],i;for(var o in i="string"==typeof(i=this.options.rules?this.options.rules:this.$element.data("interchange"))?i.match(/\[.*?, .*?\]/g):i)if(i.hasOwnProperty(o)){var r=i[o].slice(1,-1).split(", "),s=r.slice(0,-1).join(""),a=r[r.length-1];l.SPECIAL_QUERIES[a]&&(a=l.SPECIAL_QUERIES[a]),n.push({path:s,query:a})}this.rules=n}
/**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */},{key:"replace",value:function e(t){if(this.currentPath!==t){var n=this,i="replaced.zf.interchange";// Replacing images
"IMG"===this.$element[0].nodeName?this.$element.attr("src",t).on("load",function(){n.currentPath=t}).trigger(i):t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?(t=t.replace(/\(/g,"%28").replace(/\)/g,"%29"),this.$element.css({"background-image":"url("+t+")"}).trigger(i)):h.a.get(t,function(e){n.$element.html(e).trigger(i),h()(e).foundation(),n.currentPath=t});
/**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
// this.$element.trigger('replaced.zf.interchange');
}}
/**
     * Destroys an instance of interchange.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.off("resizeme.zf.trigger")}}]),l}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
rules:null},v.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"}},
/***/"./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/*! exports provided: Magellan */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 */n.r(t),
/* harmony export (binding) */n.d(t,"Magellan",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.smoothScroll */"./js/foundation.smoothScroll.js"),v=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Magellan",// ie9 back compat
this._init(),this.calcPoints()}
/**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function e(){var t=this.$element[0].id||Object(p.GetYoDigits)(6,"magellan"),n=this;this.$targets=h()("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":t,"data-scroll":t,id:t}),this.$active=h()(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}
/**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */},{key:"calcPoints",value:function e(){var n=this,t=document.body,i=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,i.clientHeight)),this.docHeight=Math.round(Math.max(t.scrollHeight,t.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)),this.$targets.each(function(){var e=h()(this),t=Math.round(e.offset().top-n.options.threshold);e.targetPoint=t,n.points.push(t)})}
/**
     * Initializes events for Magellan.
     * @private
     */},{key:"_events",value:function e(){var n=this,t=h()("html, body"),i={duration:n.options.animationDuration,easing:n.options.animationEasing};h()(window).one("load",function(){n.options.deepLinking&&location.hash&&n.scrollToLoc(location.hash),n.calcPoints(),n._updateActive()}),n.onLoadListener=Object(p.onLoad)(h()(window),function(){n.$element.on({"resizeme.zf.trigger":n.reflow.bind(n),"scrollme.zf.trigger":n._updateActive.bind(n)}).on("click.zf.magellan",'a[href^="#"]',function(e){e.preventDefault();var t=this.getAttribute("href");n.scrollToLoc(t)})}),this._deepLinkScroll=function(e){n.options.deepLinking&&n.scrollToLoc(window.location.hash)},h()(window).on("hashchange",this._deepLinkScroll)}
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */},{key:"scrollToLoc",value:function e(t){this._inTransition=!0;var n=this,i={animationEasing:this.options.animationEasing,animationDuration:this.options.animationDuration,threshold:this.options.threshold,offset:this.options.offset};g.SmoothScroll.scrollToLoc(t,i,function(){n._inTransition=!1})}
/**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */},{key:"reflow",value:function e(){this.calcPoints(),this._updateActive()}
/**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */},{key:"_updateActive",value:function e(){var n=this;if(!this._inTransition){var i=parseInt(window.pageYOffset,10),o=this.scrollPos>i,t;// Before the first point: no link
if((this.scrollPos=i)<this.points[0]);else if(i+this.winHeight===this.docHeight)t=this.points.length-1;else{var r=this.points.filter(function(e,t){return e-n.options.offset-(o?n.options.threshold:0)<=i});t=r.length?r.length-1:0}// Get the new active link
var s=this.$active,a="";void 0!==t?(this.$active=this.$links.filter('[href="#'+this.$targets.eq(t).data("magellan-target")+'"]'),this.$active.length&&(a=this.$active[0].getAttribute("href"))):this.$active=h()();var l=!(!this.$active.length&&!s.length||this.$active.is(s)),u=a!==window.location.hash;// Update the hash (it may have changed with the same active link)
if(// Update the active link element
l&&(s.removeClass(this.options.activeClass),this.$active.addClass(this.options.activeClass)),this.options.deepLinking&&u)if(window.history.pushState){
// Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
var c=a||window.location.pathname+window.location.search;window.history.pushState(null,null,c)}else window.location.hash=a;l&&
/**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
this.$element.trigger("update.zf.magellan",[this.$active])}}
/**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */},{key:"_destroy",value:function e(){if(this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass),this.options.deepLinking){var t=this.$active[0].getAttribute("href");window.location.hash.replace(t,"")}h()(window).off("hashchange",this._deepLinkScroll),this.onLoadListener&&h()(window).off(this.onLoadListener)}}]),i}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
activeClass:"is-active",
/**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
deepLinking:!1,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.offcanvas.js":
/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************/
/*! exports provided: OffCanvas */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"OffCanvas",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(e){function o(){return r(this,o),a(this,u(o).apply(this,arguments))}return c(o,e),s(o,[{key:"_setup",
/**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){var i=this;this.className="OffCanvas",// ie9 back compat
this.$element=t,this.options=h.a.extend({},o.defaults,this.$element.data(),n),this.contentClasses={base:[],reveal:[]},this.$lastTrigger=h()(),this.$triggers=h()(),this.position="left",this.$content=h()(),this.nested=!!this.options.nested,// Defines the CSS transition/position classes of the off-canvas content container.
h()(["push","overlap"]).each(function(e,t){i.contentClasses.base.push("has-transition-"+t)}),h()(["left","right","top","bottom"]).each(function(e,t){i.contentClasses.base.push("has-position-"+t),i.contentClasses.reveal.push("has-reveal-"+t)}),// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(h.a),g.MediaQuery._init(),this._init(),this._events(),m.Keyboard.register("OffCanvas",{ESCAPE:"close"})}
/**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */},{key:"_init",value:function e(){var t=this.$element.attr("id");// Add an overlay over the content if necessary
if(this.$element.attr("aria-hidden","true"),// Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)
this.options.contentId?this.$content=h()("#"+this.options.contentId):this.$element.siblings("[data-off-canvas-content]").length?this.$content=this.$element.siblings("[data-off-canvas-content]").first():this.$content=this.$element.closest("[data-off-canvas-content]").first(),this.options.contentId?this.options.contentId&&null===this.options.nested&&
// Warning if using content ID without setting the nested option
// Once the element is nested it is required to work properly in this case
console.warn("Remember to use the nested option if using the content ID option!"):
// Assume that the off-canvas element is nested if it isn't a sibling of the content
this.nested=0===this.$element.siblings("[data-off-canvas-content]").length,!0===this.nested&&(
// Force transition overlap if nested
this.options.transition="overlap",// Remove appropriate classes if already assigned in markup
this.$element.removeClass("is-transition-push")),this.$element.addClass("is-transition-".concat(this.options.transition," is-closed")),// Find triggers that affect this element and add aria-expanded to them
this.$triggers=h()(document).find('[data-open="'+t+'"], [data-close="'+t+'"], [data-toggle="'+t+'"]').attr("aria-expanded","false").attr("aria-controls",t),// Get position by checking for related CSS class
this.position=this.$element.is(".position-left, .position-top, .position-right, .position-bottom")?this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1]:this.position,!0===this.options.contentOverlay){var n=document.createElement("div"),i="fixed"===h()(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";n.setAttribute("class","js-off-canvas-overlay "+i),this.$overlay=h()(n),"is-overlay-fixed"===i?h()(this.$overlay).insertAfter(this.$element):this.$content.append(this.$overlay)}// Get the revealOn option from the class.
var o,r=new RegExp(Object(p.RegExpEscape)(this.options.revealClass)+"([^\\s]+)","g").exec(this.$element[0].className);r&&(this.options.isRevealed=!0,this.options.revealOn=this.options.revealOn||r[1]),// Ensure the `reveal-on-*` class is set.
!0===this.options.isRevealed&&this.options.revealOn&&(this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)),this._setMQChecker()),this.options.transitionTime&&this.$element.css("transition-duration",this.options.transitionTime),// Initally remove all transition/position CSS classes from off-canvas content container.
this._removeContentClasses()}
/**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t;(this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),!0===this.options.closeOnClick)&&(this.options.contentOverlay?this.$overlay:this.$content).on({"click.zf.offcanvas":this.close.bind(this)})}
/**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */},{key:"_setMQChecker",value:function e(){var t=this;this.onLoadListener=Object(p.onLoad)(h()(window),function(){g.MediaQuery.atLeast(t.options.revealOn)&&t.reveal(!0)}),h()(window).on("changed.zf.mediaquery",function(){g.MediaQuery.atLeast(t.options.revealOn)?t.reveal(!0):t.reveal(!1)})}
/**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_removeContentClasses",value:function e(t){"boolean"!=typeof t?this.$content.removeClass(this.contentClasses.base.join(" ")):!1===t&&this.$content.removeClass("has-reveal-".concat(this.position))}
/**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_addContentClasses",value:function e(t){this._removeContentClasses(t),"boolean"!=typeof t?this.$content.addClass("has-transition-".concat(this.options.transition," has-position-").concat(this.position)):!0===t&&this.$content.addClass("has-reveal-".concat(this.position))}
/**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */},{key:"reveal",value:function e(t){t?(this.close(),this.isRevealed=!0,this.$element.attr("aria-hidden","false"),this.$element.off("open.zf.trigger toggle.zf.trigger"),this.$element.removeClass("is-closed")):(this.isRevealed=!1,this.$element.attr("aria-hidden","true"),this.$element.off("open.zf.trigger toggle.zf.trigger").on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),this.$element.addClass("is-closed")),this._addContentClasses(t)}
/**
     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
     * @private
     */},{key:"_stopScrolling",value:function e(t){return!1}// Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
// Only really works for y, not sure how to extend to x or if we need to.
},{key:"_recordScrollable",value:function e(t){var n=this;// called from event handler context with this as elem
// If the element is scrollable (content overflows), then...
n.scrollHeight!==n.clientHeight&&(
// If we're at the top, scroll down one pixel to allow scrolling up
0===n.scrollTop&&(n.scrollTop=1),// If we're at the bottom, scroll up one pixel to allow scrolling down
n.scrollTop===n.scrollHeight-n.clientHeight&&(n.scrollTop=n.scrollHeight-n.clientHeight-1)),n.allowUp=0<n.scrollTop,n.allowDown=n.scrollTop<n.scrollHeight-n.clientHeight,n.lastY=t.originalEvent.pageY}},{key:"_stopScrollPropagation",value:function e(t){var n=this,i=t.pageY<n.lastY,o=!i;// called from event handler context with this as elem
n.lastY=t.pageY,i&&n.allowUp||o&&n.allowDown?t.stopPropagation():t.preventDefault()}
/**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires Offcanvas#opened
     * @todo also trigger 'open' event?
     */},{key:"open",value:function e(t,n){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;n&&(this.$lastTrigger=n),"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight),this.options.transitionTime&&"overlap"!==this.options.transition?this.$element.siblings("[data-off-canvas-content]").css("transition-duration",this.options.transitionTime):this.$element.siblings("[data-off-canvas-content]").css("transition-duration",""),this.$element.addClass("is-open").removeClass("is-closed"),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false"),this.$content.addClass("is-open-"+this.position),// If `contentScroll` is set to false, add class and disable scrolling on touch devices.
!1===this.options.contentScroll&&(h()("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling),this.$element.on("touchstart",this._recordScrollable),this.$element.on("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.addClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.addClass("is-closable"),!0===this.options.autoFocus&&this.$element.one(Object(p.transitionend)(this.$element),function(){if(i.$element.hasClass("is-open")){var e=i.$element.find("[data-autofocus]");e.length?e.eq(0).focus():i.$element.find("a, button").eq(0).focus()}}),!0===this.options.trapFocus&&(this.$content.attr("tabindex","-1"),m.Keyboard.trapFocus(this.$element)),this._addContentClasses(),
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#opened
       */
this.$element.trigger("opened.zf.offcanvas")}}
/**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires Offcanvas#closed
     */},{key:"close",value:function e(t){if(this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;this.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true")
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#closed
       */.trigger("closed.zf.offcanvas"),this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"),// If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
!1===this.options.contentScroll&&(h()("body").removeClass("is-off-canvas-open").off("touchmove",this._stopScrolling),this.$element.off("touchstart",this._recordScrollable),this.$element.off("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.removeClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.removeClass("is-closable"),this.$triggers.attr("aria-expanded","false"),!0===this.options.trapFocus&&(this.$content.removeAttr("tabindex"),m.Keyboard.releaseFocus(this.$element)),// Listen to transitionEnd and add class when done.
this.$element.one(Object(p.transitionend)(this.$element),function(e){n.$element.addClass("is-closed"),n._removeContentClasses()})}}
/**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */},{key:"toggle",value:function e(t,n){this.$element.hasClass("is-open")?this.close(t,n):this.open(t,n)}
/**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */},{key:"_handleKeyboard",value:function e(t){var n=this;m.Keyboard.handleKey(t,"OffCanvas",{close:function e(){return n.close(),n.$lastTrigger.focus(),!0},handled:function e(){t.stopPropagation(),t.preventDefault()}})}
/**
     * Destroys the offcanvas plugin.
     * @function
     */},{key:"_destroy",value:function e(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$overlay.off(".zf.offcanvas"),this.onLoadListener&&h()(window).off(this.onLoadListener)}}]),o}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
contentOverlay:!0,
/**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
contentId:null,
/**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
nested:null,
/**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
contentScroll:!0,
/**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @type {number}
   * @default null
   */
transitionTime:null,
/**
   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
transition:"push",
/**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
forceTo:null,
/**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
isRevealed:!1,
/**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
revealOn:null,
/**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
autoFocus:!0,
/**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
revealClass:"reveal-for-",
/**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1}},
/***/"./js/foundation.orbit.js":
/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************/
/*! exports provided: Orbit */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */n.r(t),
/* harmony export (binding) */n.d(t,"Orbit",function(){return $});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g=n(/*! ./foundation.util.timer */"./js/foundation.util.timer.js"),v=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),y=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),b=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),w=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),$=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Orbit",// ie9 back compat
w.Touch.init(h.a),// Touch init is idempotent, we just need to make sure it's initialied.
this._init(),p.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}
/**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */},{key:"_init",value:function e(){
// @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
this._reset(),this.$wrapper=this.$element.find(".".concat(this.options.containerClass)),this.$slides=this.$element.find(".".concat(this.options.slideClass));var t=this.$element.find("img"),n=this.$slides.filter(".is-active"),i=this.$element[0].id||Object(y.GetYoDigits)(6,"orbit");this.$element.attr({"data-resize":i,id:i}),n.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),t.length?Object(v.onImagesLoaded)(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&1<this.$slides.length&&this.geoSync(),this.options.accessible&&
// allow wrapper to be focusable to enable arrow navigation
this.$wrapper.attr("tabindex",0)}
/**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */},{key:"_loadBullets",value:function e(){this.$bullets=this.$element.find(".".concat(this.options.boxOfBullets)).find("button")}
/**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */},{key:"geoSync",value:function e(){var t=this;this.timer=new g.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()}
/**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */},{key:"_prepareForOrbit",value:function e(){var t=this;this._setWrapperHeight()}
/**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */},{key:"_setWrapperHeight",value:function e(t){
//rewrite this to `for` loop
var n=0,i,o=0,r=this;this.$slides.each(function(){i=this.getBoundingClientRect().height,h()(this).attr("data-slide",o),// hide all slides but the active one
/mui/g.test(h()(this)[0].className)||r.$slides.filter(".is-active")[0]===r.$slides.eq(o)[0]||h()(this).css({display:"none"}),n=n<i?i:n,o++}),o===this.$slides.length&&(this.$wrapper.css({height:n}),//only change the wrapper height property once.
t&&t(n))}
/**
    * Sets the max-height of each slide.
    * @function
    * @private
    */},{key:"_setSlideHeight",value:function e(t){this.$slides.each(function(){h()(this).css("max-height",t)})}
/**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */},{key:"_events",value:function e(){var i=this;//***************************************
//**Now using custom event - thanks to:**
//**      Yohai Ararat of Toronto      **
//***************************************
//
if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),1<this.$slides.length){var t;if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(e){e.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(e){e.preventDefault(),i.changeSlide(!1)}),//***************************************
this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",!i.$element.data("clickedOn")),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons)this.$element.find(".".concat(this.options.nextClass,", .").concat(this.options.prevClass)).attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(e){e.preventDefault(),i.changeSlide(h()(this).hasClass(i.options.nextClass))});this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;//if this is active, kick out of function.
var e=h()(this).data("slide"),t=e>i.$slides.filter(".is-active").data("slide"),n=i.$slides.eq(e);i.changeSlide(t,n,e)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(t){
// handle keyboard event with keyboard util
p.Keyboard.handleKey(t,"Orbit",{next:function e(){i.changeSlide(!0)},previous:function e(){i.changeSlide(!1)},handled:function e(){
// if bullet is focused, make sure focus moves
h()(t.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})}}
/**
     * Resets Orbit so it can be reinitialized
     */},{key:"_reset",value:function e(){
// Don't do anything if there are no slides (first run)
void 0!==this.$slides&&1<this.$slides.length&&(
// Remove old events
this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),// Restart timer if autoPlay is enabled
this.options.autoPlay&&this.timer.restart(),// Reset all sliddes
this.$slides.each(function(e){h()(e).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),// Show the first slide
this.$slides.first().addClass("is-active").show(),// Triggers when the slide has finished animating
this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),// Select first bullet if bullets are present
this.options.bullets&&this._updateBullets(0))}
/**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */},{key:"changeSlide",value:function e(t,n,i){if(this.$slides){// Don't freak out if we're in the middle of cleanup
var o=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(o[0].className))return!1;//if the slide is currently animating, kick out of the function
var r=this.$slides.first(),s=this.$slides.last(),a=t?"Right":"Left",l=t?"Left":"Right",u=this,c;(c=n||(t?//if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
this.options.infiniteWrap?o.next(".".concat(this.options.slideClass)).length?o.next(".".concat(this.options.slideClass)):r:o.next(".".concat(this.options.slideClass))://pick next slide if moving left to right
this.options.infiniteWrap?o.prev(".".concat(this.options.slideClass)).length?o.prev(".".concat(this.options.slideClass)):s:o.prev(".".concat(this.options.slideClass)))).length&&(
/**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
this.$element.trigger("beforeslidechange.zf.orbit",[o,c]),this.options.bullets&&(i=i||this.$slides.index(c),//grab index to update bullets
this._updateBullets(i)),this.options.useMUI&&!this.$element.is(":hidden")?(m.Motion.animateIn(c.addClass("is-active"),this.options["animInFrom".concat(a)],function(){c.css({display:"block"}).attr("aria-live","polite")}),m.Motion.animateOut(o.removeClass("is-active"),this.options["animOutTo".concat(l)],function(){o.removeAttr("aria-live"),u.options.autoPlay&&!u.timer.isPaused&&u.timer.restart()})):(o.removeClass("is-active is-in").removeAttr("aria-live").hide(),c.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart())
/**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */,this.$element.trigger("slidechange.zf.orbit",[c]))}}
/**
    * Updates the active state of the bullets, if displayed.
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */},{key:"_updateBullets",value:function e(t){var n,i=this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach(),o=this.$bullets.eq(t).addClass("is-active").append(i)}
/**
    * Destroys the carousel and hides the element.
    * @function
    */},{key:"_destroy",value:function e(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()}}]),i}(b.Plugin);
/* harmony import */$.defaults={
/**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
bullets:!0,
/**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
navButtons:!0,
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
animInFromRight:"slide-in-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
animOutToRight:"slide-out-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
animInFromLeft:"slide-in-left",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
animOutToLeft:"slide-out-left",
/**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
autoPlay:!0,
/**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
timerDelay:5e3,
/**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
infiniteWrap:!0,
/**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
swipe:!0,
/**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
pauseOnHover:!0,
/**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
accessible:!0,
/**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
containerClass:"orbit-container",
/**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
slideClass:"orbit-slide",
/**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
boxOfBullets:"orbit-bullets",
/**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
nextClass:"orbit-next",
/**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
prevClass:"orbit-previous",
/**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
useMUI:!0}},
/***/"./js/foundation.positionable.js":
/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************/
/*! exports provided: Positionable */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function f(e,t){var n=t.indexOf(e);return n===t.length-1?t[0]:t[n+1]}n.r(t),
/* harmony export (binding) */n.d(t,"Positionable",function(){return w});
/* harmony import */var h=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=["left","right","top","bottom"],v=["top","bottom","center"],y=["left","right","center"],b={left:v,right:v,top:y,bottom:y},w=
/* */
function(e){function t(){return o(this,t),a(this,u(t).apply(this,arguments))}return c(t,e),s(t,[{key:"_init",
/**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/
value:function e(){this.triedPositions={},this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position,this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment,this.originalPosition=this.position,this.originalAlignment=this.alignment}},{key:"_getDefaultPosition",value:function e(){return"bottom"}},{key:"_getDefaultAlignment",value:function e(){switch(this.position){case"bottom":case"top":return Object(m.rtl)()?"right":"left";case"left":case"right":return"bottom"}}
/**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */},{key:"_reposition",value:function e(){this._alignmentsExhausted(this.position)?(this.position=f(this.position,g),this.alignment=b[this.position][0]):this._realign()}
/**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */},{key:"_realign",value:function e(){this._addTriedPosition(this.position,this.alignment),this.alignment=f(this.alignment,b[this.position])}},{key:"_addTriedPosition",value:function e(t,n){this.triedPositions[t]=this.triedPositions[t]||[],this.triedPositions[t].push(n)}},{key:"_positionsExhausted",value:function e(){for(var t=!0,n=0;n<g.length;n++)t=t&&this._alignmentsExhausted(g[n]);return t}},{key:"_alignmentsExhausted",value:function e(t){return this.triedPositions[t]&&this.triedPositions[t].length==b[t].length}// When we're trying to center, we don't want to apply offset that's going to
// take us just off center, so wrap around to return 0 for the appropriate
// offset in those alignments.  TODO: Figure out if we want to make this
// configurable behavior... it feels more intuitive, especially for tooltips, but
// it's possible someone might actually want to start from center and then nudge
// slightly off.
},{key:"_getVOffset",value:function e(){return this.options.vOffset}},{key:"_getHOffset",value:function e(){return this.options.hOffset}},{key:"_setPosition",value:function e(t,n,i){if("false"===t.attr("aria-expanded"))return!1;var o=h.Box.GetDimensions(n),r=h.Box.GetDimensions(t);if(this.options.allowOverlap||(
// restore original position & alignment before checking overlap
this.position=this.originalPosition,this.alignment=this.originalAlignment),n.offset(h.Box.GetExplicitOffsets(n,t,this.position,this.alignment,this._getVOffset(),this._getHOffset())),!this.options.allowOverlap){for(var s={},a=1e8,l={position:this.position,alignment:this.alignment};!this._positionsExhausted();){var u=h.Box.OverlapArea(n,i,!1,!1,this.options.allowBottomOverlap);if(0===u)return;u<a&&(a=u,l={position:this.position,alignment:this.alignment}),this._reposition(),n.offset(h.Box.GetExplicitOffsets(n,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}// If we get through the entire loop, there was no non-overlapping
// position available. Pick the version with least overlap.
this.position=l.position,this.alignment=l.alignment,n.offset(h.Box.GetExplicitOffsets(n,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}]),t}(p.Plugin);
/* harmony import */w.defaults={
/**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0}},
/***/"./js/foundation.responsiveAccordionTabs.js":
/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************/
/*! exports provided: ResponsiveAccordionTabs */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
// The plugin matches the plugin classes with these plugin instances.
n.r(t),
/* harmony export (binding) */n.d(t,"ResponsiveAccordionTabs",function(){return w});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.accordion */"./js/foundation.accordion.js"),y,b={tabs:{cssClass:"tabs",plugin:n(/*! ./foundation.tabs */"./js/foundation.tabs.js").Tabs},accordion:{cssClass:"accordion",plugin:v.Accordion}},w=
/* */
function(e){function t(){return o(this,t),a(this,u(t).apply(this,arguments))}return c(t,e),s(t,[{key:"_setup",
/**
     * Creates a new instance of a responsive accordion tabs.
     * @class
     * @name ResponsiveAccordionTabs
     * @fires ResponsiveAccordionTabs#init
     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=h()(t),this.options=h.a.extend({},this.$element.data(),n),this.rules=this.$element.data("responsive-accordion-tabs"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveAccordionTabs",// ie9 back compat
this.$element.attr("id")||this.$element.attr("id",Object(m.GetYoDigits)(6,"responsiveaccordiontabs")),this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function e(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var t={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),r=1<o.length?o[0]:"small",s=1<o.length?o[1]:o[0];null!==b[s]&&(t[r]=b[s])}this.rules=t}this._getAllOptions(),h.a.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function e(){
//get all defaults and options
var t=this;for(var n in t.allOptions={},b)if(b.hasOwnProperty(n)){var i=b[n];try{var o=h()("<ul></ul>"),r=new i.plugin(o,t.options);for(var s in r.options)if(r.options.hasOwnProperty(s)&&"zfPlugin"!==s){var a=r.options[s];t.allOptions[s]=a}r.destroy()}catch(e){}}}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function e(){this._changedZfMediaQueryHandler=this._checkMediaQueries.bind(this),h()(window).on("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function e(){var t,n=this;// Iterate through each rule and find the last matching rule
h.a.each(this.rules,function(e){p.MediaQuery.atLeast(e)&&(t=e)}),// No match? No dice
t&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[t].plugin||(// Remove existing plugin-specific CSS classes
h.a.each(b,function(e,t){n.$element.removeClass(t.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[t].cssClass),// Create an instance of the new plugin
this.currentPlugin&&(
//don't know why but on nested elements data zfPlugin get's lost
!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData),this.currentPlugin.destroy()),this._handleMarkup(this.rules[t].cssClass),this.currentPlugin=new this.rules[t].plugin(this.$element,{}),this.storezfData=this.currentPlugin.$element.data("zfPlugin")))}},{key:"_handleMarkup",value:function e(t){var n=this,i="accordion",o=h()("[data-tabs-content="+this.$element.attr("id")+"]");if(o.length&&(i="tabs"),i!==t){var r=n.allOptions.linkClass?n.allOptions.linkClass:"tabs-title",s=n.allOptions.panelClass?n.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var a=this.$element.children("."+r+",[data-accordion-item]").removeClass(r).removeClass("accordion-item").removeAttr("data-accordion-item"),l=a.children("a").removeClass("accordion-title");if("tabs"===i?(o=o.children("."+s).removeClass(s).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected"):o=a.children("[data-tab-content]").removeClass("accordion-content"),o.css({display:"",visibility:""}),a.css({display:"",visibility:""}),"accordion"===t)o.each(function(e,t){h()(t).appendTo(a.get(e)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""}),h()("[data-tabs-content="+n.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+n.$element.attr("id")+'"></div>').detach(),a.addClass("accordion-item").attr("data-accordion-item",""),l.addClass("accordion-title")});else if("tabs"===t){var u=h()("[data-tabs-content="+n.$element.attr("id")+"]"),c=h()("#tabs-placeholder-"+n.$element.attr("id"));c.length?(u=h()('<div class="tabs-content"></div>').insertAfter(c).attr("data-tabs-content",n.$element.attr("id")),c.remove()):u=h()('<div class="tabs-content"></div>').insertAfter(n.$element).attr("data-tabs-content",n.$element.attr("id")),o.each(function(e,t){var n=h()(t).appendTo(u).addClass(s),i=l.get(e).hash.slice(1),o=h()(t).attr("id")||Object(m.GetYoDigits)(6,"accordion"),r;i!==o&&(""!==i?h()(t).attr("id",i):(i=o,h()(t).attr("id",i),h()(l.get(e)).attr("href",h()(l.get(e)).attr("href").replace("#","")+"#"+i))),h()(a.get(e)).hasClass("is-active")&&n.addClass("is-active")}),a.addClass(r)}}}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function e(){this.currentPlugin&&this.currentPlugin.destroy(),h()(window).off("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}}]),t}(g.Plugin);
/* harmony import */w.defaults={}},
/***/"./js/foundation.responsiveMenu.js":
/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************/
/*! exports provided: ResponsiveMenu */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.r(t),
/* harmony export (binding) */n.d(t,"ResponsiveMenu",function(){return $});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.dropdownMenu */"./js/foundation.dropdownMenu.js"),y=n(/*! ./foundation.drilldown */"./js/foundation.drilldown.js"),b=n(/*! ./foundation.accordionMenu */"./js/foundation.accordionMenu.js"),w={dropdown:{cssClass:"dropdown",plugin:v.DropdownMenu},drilldown:{cssClass:"drilldown",plugin:y.Drilldown},accordion:{cssClass:"accordion-menu",plugin:b.AccordionMenu}},$=
/* */
function(e){function t(){return o(this,t),a(this,u(t).apply(this,arguments))}return c(t,e),s(t,[{key:"_setup",
/**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=h()(t),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveMenu",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function e(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var t={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),r=1<o.length?o[0]:"small",s=1<o.length?o[1]:o[0];null!==w[s]&&(t[r]=w[s])}this.rules=t}h.a.isEmptyObject(this.rules)||this._checkMediaQueries(),// Add data-mutate since children may need it.
this.$element.attr("data-mutate",this.$element.attr("data-mutate")||Object(m.GetYoDigits)(6,"responsive-menu"))}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t=this;h()(window).on("changed.zf.mediaquery",function(){t._checkMediaQueries()})}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function e(){var t,n=this;// Iterate through each rule and find the last matching rule
h.a.each(this.rules,function(e){p.MediaQuery.atLeast(e)&&(t=e)}),// No match? No dice
t&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[t].plugin||(// Remove existing plugin-specific CSS classes
h.a.each(w,function(e,t){n.$element.removeClass(t.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[t].cssClass),// Create an instance of the new plugin
this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[t].plugin(this.$element,{})))}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function e(){this.currentPlugin.destroy(),h()(window).off(".zf.ResponsiveMenu")}}]),t}(g.Plugin);
/* harmony import */$.defaults={}},
/***/"./js/foundation.responsiveToggle.js":
/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************/
/*! exports provided: ResponsiveToggle */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */n.r(t),
/* harmony export (binding) */n.d(t,"ResponsiveToggle",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g,v=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=h()(t),this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="ResponsiveToggle",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */},{key:"_init",value:function e(){p.MediaQuery._init();var t=this.$element.data("responsive-toggle");// If they were set, parse the animation classes
if(t||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=h()("#".concat(t)),this.$toggler=this.$element.find("[data-toggle]").filter(function(){var e=h()(this).data("toggle");return e===t||""===e}),this.options=h.a.extend({},this.options,this.$targetMenu.data()),this.options.animate){var n=this.options.animate.split(" ");this.animationIn=n[0],this.animationOut=n[1]||null}this._update()}
/**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t=this;this._updateMqHandler=this._update.bind(this),h()(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}
/**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */},{key:"_update",value:function e(){
// Mobile
p.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}
/**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */},{key:"toggleMenu",value:function e(){var t=this;p.MediaQuery.atLeast(this.options.hideFor)||(
/**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
this.options.animate?this.$targetMenu.is(":hidden")?m.Motion.animateIn(this.$targetMenu,this.animationIn,function(){t.$element.trigger("toggled.zf.responsiveToggle"),t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")}):m.Motion.animateOut(this.$targetMenu,this.animationOut,function(){t.$element.trigger("toggled.zf.responsiveToggle")}):(this.$targetMenu.toggle(0),this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),this.$element.trigger("toggled.zf.responsiveToggle")))}},{key:"_destroy",value:function e(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),h()(window).off("changed.zf.mediaquery",this._updateMqHandler)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
hideFor:"medium",
/**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.reveal.js":
/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************/
/*! exports provided: Reveal */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */n.r(t),
/* harmony export (binding) */n.d(t,"Reveal",function(){return w});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),y=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Reveal",// ie9 back compat
this._init(),// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(h.a),m.Keyboard.register("Reveal",{ESCAPE:"close"})}
/**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */},{key:"_init",value:function e(){var t=this;g.MediaQuery._init(),this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:g.MediaQuery.current},this.$anchor=h()('[data-open="'.concat(this.id,'"]')).length?h()('[data-open="'.concat(this.id,'"]')):h()('[data-toggle="'.concat(this.id,'"]')),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(h()(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#".concat(this.id)&&(this.onLoadListener=Object(p.onLoad)(h()(window),function(){return t.open()}))}
/**
     * Creates an overlay div to display behind the modal.
     * @private
     */},{key:"_makeOverlay",value:function e(){var t="";return this.options.additionalOverlayClasses&&(t=" "+this.options.additionalOverlayClasses),h()("<div></div>").addClass("reveal-overlay"+t).appendTo(this.options.appendTo)}
/**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */},{key:"_updatePosition",value:function e(){var t=this.$element.outerWidth(),n=h()(window).width(),i=this.$element.outerHeight(),o=h()(window).height(),r,s=null;r="auto"===this.options.hOffset?parseInt((n-t)/2,10):parseInt(this.options.hOffset,10),"auto"===this.options.vOffset?s=o<i?parseInt(Math.min(100,o/10),10):parseInt((o-i)/4,10):null!==this.options.vOffset&&(s=parseInt(this.options.vOffset,10)),null!==s&&this.$element.css({top:s+"px"}),// only worry about left if we don't have an overlay or we have a horizontal offset,
// otherwise we're perfectly in the middle
this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:r+"px"}),this.$element.css({margin:"0px"}))}
/**
     * Adds event handlers for the modal.
     * @private
     */},{key:"_events",value:function e(){var i=this,o=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function e(t,n){if(t.target===o.$element[0]||h()(t.target).parents("[data-closable]")[0]===n)
// only close reveal when it's explicitly called
return i.close.apply(i)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function e(){o._updatePosition()}}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(e){e.target!==o.$element[0]&&!h.a.contains(o.$element[0],e.target)&&h.a.contains(document,e.target)&&o.close()}),this.options.deepLink&&h()(window).on("hashchange.zf.reveal:".concat(this.id),this._handleState.bind(this))}
/**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */},{key:"_handleState",value:function e(t){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}
/**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */},{key:"_disableScroll",value:function e(t){t=t||h()(window).scrollTop(),h()(document).height()>h()(window).height()&&h()("html").css("top",-t)}
/**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */},{key:"_enableScroll",value:function e(t){t=t||parseInt(h()("html").css("top")),h()(document).height()>h()(window).height()&&(h()("html").css("top",""),h()(window).scrollTop(-t))}
/**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */},{key:"open",value:function e(){var t=this,n="#".concat(this.id);
// either update or replace browser history
this.options.deepLink&&window.location.hash!==n&&(window.history.pushState?this.options.updateHistory?window.history.pushState({},"",n):window.history.replaceState({},"",n):window.location.hash=n),// Remember anchor that opened it to set focus back later, have general anchors as fallback
this.$activeAnchor=h()(document.activeElement).is(this.$anchor)?h()(document.activeElement):this.$anchor,this.isActive=!0,// Make elements invisible, but remove display: none so we can get size and positioning
this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||
/**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
this.$element.trigger("closeme.zf.reveal",this.id),this._disableScroll();var i=this;// Motion UI method of reveal
if(this.options.animationIn){var o=function e(){i.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),i._addGlobalClasses(),m.Keyboard.trapFocus(i.$element)};this.options.overlay&&v.Motion.animateIn(this.$overlay,"fade-in"),v.Motion.animateIn(this.$element,this.options.animationIn,function(){t.$element&&(
// protect against object having been removed
t.focusableElements=m.Keyboard.findFocusable(t.$element),o())})}// jQuery method of reveal
else this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay);// handle accessibility
this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),m.Keyboard.trapFocus(this.$element),this._addGlobalClasses(),this._addGlobalListeners(),
/**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */
this.$element.trigger("open.zf.reveal")}
/**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - `.is-reveal-open` - Prevents the scroll on document
     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */},{key:"_addGlobalClasses",value:function e(){var t=function e(){h()("html").toggleClass("zf-has-scroll",!!(h()(document).height()>h()(window).height()))};this.$element.on("resizeme.zf.trigger.revealScrollbarListener",function(){return t()}),t(),h()("html").addClass("is-reveal-open")}
/**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */},{key:"_removeGlobalClasses",value:function e(){this.$element.off("resizeme.zf.trigger.revealScrollbarListener"),h()("html").removeClass("is-reveal-open"),h()("html").removeClass("zf-has-scroll")}
/**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */},{key:"_addGlobalListeners",value:function e(){var t=this;this.$element&&(// If we're in the middle of cleanup, don't freak out
this.focusableElements=m.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||h()("body").on("click.zf.reveal",function(e){e.target!==t.$element[0]&&!h.a.contains(t.$element[0],e.target)&&h.a.contains(document,e.target)&&t.close()}),this.options.closeOnEsc&&h()(window).on("keydown.zf.reveal",function(e){m.Keyboard.handleKey(e,"Reveal",{close:function e(){t.options.closeOnEsc&&t.close()}})}))}
/**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */},{key:"close",value:function e(){function t(){
// Get the current top before the modal is closed and restore the scroll after.
// TODO: use component properties instead of HTML properties
// See https://github.com/zurb/foundation-sites/pull/10786
var e=parseInt(h()("html").css("top"));0===h()(".reveal:visible").length&&n._removeGlobalClasses(),m.Keyboard.releaseFocus(n.$element),n.$element.attr("aria-hidden",!0),n._enableScroll(e),
/**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */
n.$element.trigger("closed.zf.reveal")}
/**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */if(!this.isActive||!this.$element.is(":visible"))return!1;var n=this;// Motion UI method of hiding
// If deepLink and we did not switched to an other modal...
if(this.options.animationOut?(this.options.overlay&&v.Motion.animateOut(this.$overlay,"fade-out"),v.Motion.animateOut(this.$element,this.options.animationOut,t)):(this.$element.hide(this.options.hideDelay),this.options.overlay?this.$overlay.hide(0,t):t()),// Conditionals to remove extra event listeners added on open
this.options.closeOnEsc&&h()(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&h()("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,n.options.deepLink&&window.location.hash==="#".concat(this.id))
// Remove the history hash
if(window.history.replaceState){var i=window.location.pathname+window.location.search;this.options.updateHistory?window.history.pushState({},"",i):window.history.replaceState("",document.title,i)}else window.location.hash="";this.$activeAnchor.focus()}
/**
     * Toggles the open/closed state of a modal.
     * @function
     */},{key:"toggle",value:function e(){this.isActive?this.close():this.open()}},{key:"_destroy",
/**
     * Destroys an instance of a modal.
     * @function
     */
value:function e(){this.options.overlay&&(this.$element.appendTo(h()(this.options.appendTo)),// move $element outside of $overlay to prevent error unregisterPlugin()
this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),h()(window).off(".zf.reveal:".concat(this.id)),this.onLoadListener&&h()(window).off(this.onLoadListener),0===h()(".reveal:visible").length&&this._removeGlobalClasses()}}]),i}(y.Plugin);
/* harmony import */w.defaults={
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationIn:"",
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationOut:"",
/**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
showDelay:0,
/**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
hideDelay:0,
/**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnEsc:!0,
/**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
multipleOpened:!1,
/**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
vOffset:"auto",
/**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
hOffset:"auto",
/**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
fullScreen:!1,
/**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
overlay:!0,
/**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
resetOnClose:!1,
/**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */
updateHistory:!1,
/**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
appendTo:"body",
/**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
additionalOverlayClasses:""}},
/***/"./js/foundation.slider.js":
/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************/
/*! exports provided: Slider */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */function x(e,t){return e/t}function w(e,t,n,i){return Math.abs(e.position()[t]+e[i]()/2-n)}function f(e,t){return Math.log(t)/Math.log(e)}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Slider",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),$=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),j=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),k=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=$.a.extend({},i.defaults,this.$element.data(),n),this.className="Slider",// ie9 back compat
// Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
g.Touch.init($.a),v.Triggers.init($.a),this._init(),p.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast",HOME:"min",END:"max"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}
/**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */},{key:"_init",value:function e(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):$()("#".concat(this.$handle.attr("aria-controls"))),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var t=!1,n=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=$()().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=1<this.inputs.length?this.inputs.eq(1):$()("#".concat(this.$handle2.attr("aria-controls"))),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),t=!0,// this.$handle.triggerHandler('click.zf.slider');
this._setInitAttr(1)),// Set handle positions
this.setHandles(),this._events()}},{key:"setHandles",value:function e(){var t=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0,function(){t._setHandlePos(t.$handle2,t.inputs.eq(1).val(),!0)}):this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0)}},{key:"_reflow",value:function e(){this.setHandles()}
/**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */},{key:"_pctOfBar",value:function e(t){var n=x(t-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":n=this._logTransform(n);break;case"log":n=this._powTransform(n);break}return n.toFixed(2)}
/**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */},{key:"_value",value:function e(t){switch(this.options.positionValueFunction){case"pow":t=this._powTransform(t);break;case"log":t=this._logTransform(t);break}var n;return(this.options.end-this.options.start)*t+parseFloat(this.options.start)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */},{key:"_logTransform",value:function e(t){return f(this.options.nonLinearBase,t*(this.options.nonLinearBase-1)+1)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */},{key:"_powTransform",value:function e(t){return(Math.pow(this.options.nonLinearBase,t)-1)/(this.options.nonLinearBase-1)}
/**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */},{key:"_setHandlePos",value:function e(t,n,i,o){
// don't move if the slider has been disabled since its initialization
if(!this.$element.hasClass(this.options.disabledClass)){//on input change events, convert string to number...grumble.
// prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
(//might need to alter that slightly for bars that will have odd number selections.
n=parseFloat(n))<this.options.start?n=this.options.start:n>this.options.end&&(n=this.options.end);var r=this.options.doubleSided;//this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
//for click and drag events, it's weird due to the scale(-1, 1) css property
if(this.options.vertical&&!i&&(n=this.options.end-n),r)
//this block is to prevent 2 handles from crossing eachother. Could/should be improved.
if(0===this.handles.index(t)){var s=parseFloat(this.$handle2.attr("aria-valuenow"));n=s<=n?s-this.options.step:n}else{var a=parseFloat(this.$handle.attr("aria-valuenow"));n=n<=a?a+this.options.step:n}var l=this,u=this.options.vertical,c=u?"height":"width",d=u?"top":"left",f=t[0].getBoundingClientRect()[c],h=this.$element[0].getBoundingClientRect()[c],
//percentage of bar min/max value based on click or drag point
p=this._pctOfBar(n),
//number of actual pixels to shift the handle, based on the percentage obtained above
m,
//percentage of bar to shift the handle
g=(100*x((h-f)*p,h)).toFixed(this.options.decimal);//fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
n=parseFloat(n.toFixed(this.options.decimal));// declare empty object for css adjustments, only used with 2 handled-sliders
var v={};// TODO update to calculate based on values set to respective inputs??
if(this._setValues(t,n),r){var y=0===this.handles.index(t),
//empty variable, will be used for min-height/width for fill bar
b,
//percentage w/h of the handle compared to the slider bar
w=~~(100*x(f,h));//if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
if(y)
//left or top percentage value to apply to the fill bar.
v[d]="".concat(g,"%"),//calculate the new min-height/width for the fill bar.
b=parseFloat(this.$handle2[0].style[d])-g+w,//this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
//plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
o&&"function"==typeof o&&o();else{
//just caching the value of the left/bottom handle's left/top property
var $=parseFloat(this.$handle[0].style[d]);//calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
//based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
b=g-(isNaN($)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):$)+w}// assign the min-height/width to our css object
v["min-".concat(c)]="".concat(b,"%")}this.$element.one("finished.zf.animate",function(){
/**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
l.$element.trigger("moved.zf.slider",[t])});//because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
var k=this.$element.data("dragging")?1e3/60:this.options.moveTime;Object(j.Move)(k,t,function(){
// adjusting the left/top property of the handle, based on the percentage calculated above
// if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
// fall back to next best guess.
isNaN(g)?t.css(d,"".concat(100*p,"%")):t.css(d,"".concat(g,"%")),l.options.doubleSided?
//otherwise, use the css object we created above
l.$fill.css(v):
//if single-handled, a simple method to expand the fill bar
l.$fill.css(c,"".concat(100*p,"%"))}),
/**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */
clearTimeout(l.timeout),l.timeout=setTimeout(function(){l.$element.trigger("changed.zf.slider",[t])},l.options.changedDelay)}}
/**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */},{key:"_setInitAttr",value:function e(t){var n=0===t?this.options.initialStart:this.options.initialEnd,i=this.inputs.eq(t).attr("id")||Object(k.GetYoDigits)(6,"slider");this.inputs.eq(t).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step}),this.inputs.eq(t).val(n),this.handles.eq(t).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":n,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}
/**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */},{key:"_setValues",value:function e(t,n){var i=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(i).val(n),t.attr("aria-valuenow",n)}
/**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */},{key:"_handleEvent",value:function e(t,n,i){var o,r;if(i)
//change event on input
o=this._adjustValue(null,i),r=!0;else{
//click or drag events
t.preventDefault();var s=this,a=this.options.vertical,l=a?"height":"width",u=a?"top":"left",c=a?t.pageY:t.pageX,d=this.$handle[0].getBoundingClientRect()[l]/2,f=this.$element[0].getBoundingClientRect()[l],h=a?$()(window).scrollTop():$()(window).scrollLeft(),p=this.$element.offset()[u];// touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
// best way to guess this is simulated is if clientY == pageY
t.clientY===t.pageY&&(c+=h);var m=c-p,g,v=x(g=m<0?0:f<m?f:m,f),y,b;if(o=this._value(v),// turn everything around for RTL, yay math!
Object(k.rtl)()&&!this.options.vertical&&(o=this.options.end-o),o=s._adjustValue(null,o),//boolean flag for the setHandlePos fn, specifically for vertical sliders
r=!1,!n)n=w(this.$handle,u,g,l)<=w(this.$handle2,u,g,l)?this.$handle:this.$handle2}this._setHandlePos(n,o,r)}
/**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */},{key:"_adjustValue",value:function e(t,n){var i,o=this.options.step,r=parseFloat(o/2),s,a,l;return 0===(s=0<=(i=t?parseFloat(t.attr("aria-valuenow")):n)?i%o:o+i%o)?i:i=(a=i-s)+r<=i?l=a+o:a}
/**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */},{key:"_events",value:function e(){this._eventsForHandle(this.$handle),this.handles[1]&&this._eventsForHandle(this.$handle2)}
/**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */},{key:"_eventsForHandle",value:function e(t){var r=this,n,i,o=function e(t){var n=r.inputs.index($()(this));r._handleEvent(t,r.handles.eq(n),$()(this).val())};if(// IE only triggers the change event when the input loses focus which strictly follows the HTML specification
// listen for the enter key and trigger a change
// @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events
this.inputs.off("keyup.zf.slider").on("keyup.zf.slider",function(e){13==e.keyCode&&o.call(this,e)}),this.inputs.off("change.zf.slider").on("change.zf.slider",o),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(e){if(r.$element.data("dragging"))return!1;$()(e.target).is("[data-slider-handle]")||(r.options.doubleSided?r._handleEvent(e):r._handleEvent(e,r.$handle))}),this.options.draggable){this.handles.addTouch();var s=$()("body");t.off("mousedown.zf.slider").on("mousedown.zf.slider",function(e){t.addClass("is-dragging"),r.$fill.addClass("is-dragging"),//
r.$element.data("dragging",!0),n=$()(e.currentTarget),s.on("mousemove.zf.slider",function(e){e.preventDefault(),r._handleEvent(e,n)}).on("mouseup.zf.slider",function(e){r._handleEvent(e,n),t.removeClass("is-dragging"),r.$fill.removeClass("is-dragging"),r.$element.data("dragging",!1),s.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(e){e.preventDefault()})}t.off("keydown.zf.slider").on("keydown.zf.slider",function(t){var n=$()(this),e=r.options.doubleSided?r.handles.index(n):0,i=parseFloat(r.inputs.eq(e).val()),o;// handle keyboard event with keyboard util
p.Keyboard.handleKey(t,"Slider",{decrease:function e(){o=i-r.options.step},increase:function e(){o=i+r.options.step},decrease_fast:function e(){o=i-10*r.options.step},increase_fast:function e(){o=i+10*r.options.step},min:function e(){o=r.options.start},max:function e(){o=r.options.end},handled:function e(){
// only set handle pos when event was handled specially
t.preventDefault(),r._setHandlePos(n,o,!0)}})})}
/**
     * Destroys the slider plugin.
     */},{key:"_destroy",value:function e(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),clearTimeout(this.timeout)}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
start:0,
/**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
end:100,
/**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
step:1,
/**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
initialStart:0,
/**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
initialEnd:100,
/**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
binding:!1,
/**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
clickSelect:!0,
/**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
vertical:!1,
/**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
draggable:!0,
/**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
disabled:!1,
/**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
doubleSided:!1,
/**
   * Potential future feature.
   */
// steps: 100,
/**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
decimal:2,
/**
   * Time delay for dragged elements.
   */
// dragDelay: 0,
/**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
moveTime:200,
//update this if changing the transition time in the sass
/**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
disabledClass:"disabled",
/**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
invertVertical:!1,
/**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
changedDelay:500,
/**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
nonLinearBase:5,
/**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
positionValueFunction:"linear"}},
/***/"./js/foundation.smoothScroll.js":
/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************/
/*! exports provided: SmoothScroll */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * SmoothScroll module.
 * @module foundation.smooth-scroll
 */n.r(t),
/* harmony export (binding) */n.d(t,"SmoothScroll",function(){return g});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m,g=
/* */
function(e){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,e),s(l,[{key:"_setup",
/**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},l.defaults,this.$element.data(),n),this.className="SmoothScroll",// ie9 back compat
this._init()}
/**
     * Initialize the SmoothScroll plugin
     * @private
     */},{key:"_init",value:function e(){var t=this.$element[0].id||Object(p.GetYoDigits)(6,"smooth-scroll");this.$element.attr({id:t}),this._events()}
/**
     * Initializes events for SmoothScroll.
     * @private
     */},{key:"_events",value:function e(){this.$element.on("click.zf.smoothScroll",this._handleLinkClick),this.$element.on("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}
/**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */},{key:"_handleLinkClick",value:function e(t){var n=this;
// Follow the link if it does not point to an anchor.
if(h()(t.currentTarget).is('a[href^="#"]')){var i=t.currentTarget.getAttribute("href");this._inTransition=!0,l.scrollToLoc(i,this.options,function(){n._inTransition=!1}),t.preventDefault()}}},{key:"_destroy",
/**
     * Destroys the SmoothScroll instance.
     * @function
     */
value:function e(){this.$element.off("click.zf.smoothScroll",this._handleLinkClick),this.$element.off("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}}],[{key:"scrollToLoc",
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
value:function e(t,n,i){var o=1<arguments.length&&void 0!==n?n:l.defaults,r=2<arguments.length?i:void 0,s=h()(t);// Do nothing if target does not exist to prevent errors
if(!s.length)return!1;var a=Math.round(s.offset().top-o.threshold/2-o.offset);h()("html, body").stop(!0).animate({scrollTop:a},o.animationDuration,o.animationEasing,function(){"function"==typeof r&&r()})}}]),l}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin.
 */
g.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.sticky.js":
/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************/
/*! exports provided: Sticky */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function f(e){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*e}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Sticky",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),p=/* */n.n(h),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
value:function e(t,n){this.$element=t,this.options=p.a.extend({},i.defaults,this.$element.data(),n),this.className="Sticky",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(p.a),this._init()}
/**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */},{key:"_init",value:function e(){g.MediaQuery._init();var t=this.$element.parent("[data-sticky-container]"),n=this.$element[0].id||Object(m.GetYoDigits)(6,"sticky"),i=this;t.length?this.$container=t:(this.wasWrapped=!0,this.$element.wrap(this.options.container),this.$container=this.$element.parent()),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":n,"data-mutate":n}),""!==this.options.anchor&&p()("#"+i.options.anchor).attr({"data-mutate":n}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,this.onLoadListener=Object(m.onLoad)(p()(window),function(){
//We calculate the container height to have correct values for anchor points offset calculation.
i.containerHeight="none"==i.$element.css("display")?0:i.$element[0].getBoundingClientRect().height,i.$container.css("height",i.containerHeight),i.elemHeight=i.containerHeight,""!==i.options.anchor?i.$anchor=p()("#"+i.options.anchor):i._parsePoints(),i._setSizes(function(){var e=window.pageYOffset;i._calc(!1,e),//Unstick the element will ensure that proper classes are set.
i.isStuck||i._removeSticky(!(e>=i.topPoint))}),i._events(n.split("-").reverse().join("-"))})}
/**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */},{key:"_parsePoints",value:function e(){for(var t,n,i=[""==this.options.topAnchor?1:this.options.topAnchor,""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor],o={},r=0,s=i.length;r<s&&i[r];r++){var a;if("number"==typeof i[r])a=i[r];else{var l=i[r].split(":"),u=p()("#".concat(l[0]));a=u.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(a+=u[0].getBoundingClientRect().height)}o[r]=a}this.points=o}
/**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_events",value:function e(n){var i=this,t=this.scrollListener="scroll.zf.".concat(n);this.isOn||(this.canStick&&(this.isOn=!0,p()(window).off(t).on(t,function(e){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(e,t){i._eventsHandler(n)}),this.$element.on("mutateme.zf.trigger",function(e,t){i._eventsHandler(n)}),this.$anchor&&this.$anchor.on("mutateme.zf.trigger",function(e,t){i._eventsHandler(n)}))}
/**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_eventsHandler",value:function e(t){var n=this,i=this.scrollListener="scroll.zf.".concat(t);n._setSizes(function(){n._calc(!1),n.canStick?n.isOn||n._events(t):n.isOn&&n._pauseListeners(i)})}
/**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */},{key:"_pauseListeners",value:function e(t){this.isOn=!1,p()(window).off(t),
/**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */
this.$element.trigger("pause.zf.sticky")}
/**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */},{key:"_calc",value:function e(t,n){if(t&&this._setSizes(),!this.canStick)return this.isStuck&&this._removeSticky(!0),!1;n||(n=window.pageYOffset),n>=this.topPoint?n<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0)}
/**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */},{key:"_setSticky",value:function e(){var t=this,n=this.options.stickTo,i="top"===n?"marginTop":"marginBottom",o="top"===n?"bottom":"top",r={};r[i]="".concat(this.options[i],"em"),r[n]=0,r[o]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-".concat(o)).addClass("is-stuck is-at-".concat(n)).css(r)
/**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */.trigger("sticky.zf.stuckto:".concat(n)),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}
/**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */},{key:"_removeSticky",value:function e(t){var n=this.options.stickTo,i="top"===n,o={},r=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,s,a=i?"bottom":"top",l=t?"top":"bottom";o[i?"marginTop":"marginBottom"]=0,o.bottom="auto",o.top=t?0:r,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-".concat(n)).addClass("is-anchored is-at-".concat(l)).css(o)
/**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */.trigger("sticky.zf.unstuckfrom:".concat(l))}
/**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */},{key:"_setSizes",value:function e(t){this.canStick=g.MediaQuery.is(this.options.stickyOn),this.canStick||t&&"function"==typeof t&&t();var n=this,i=this.$container[0].getBoundingClientRect().width,o=window.getComputedStyle(this.$container[0]),r=parseInt(o["padding-left"],10),s=parseInt(o["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":"".concat(i-r-s,"px")});var a=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(a=0),this.containerHeight=a,this.$container.css({height:a}),this.elemHeight=a,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var l=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",l)}this._setBreakPoints(a,function(){t&&"function"==typeof t&&t()})}
/**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */},{key:"_setBreakPoints",value:function e(t,n){if(!this.canStick){if(!n||"function"!=typeof n)return!1;n()}var i=f(this.options.marginTop),o=f(this.options.marginBottom),r=this.points?this.points[0]:this.$anchor.offset().top,s=this.points?this.points[1]:r+this.anchorHeight,
// topPoint = this.$anchor.offset().top || this.points[0],
// bottomPoint = topPoint + this.anchorHeight || this.points[1],
a=window.innerHeight;"top"===this.options.stickTo?(r-=i,s-=t+i):"bottom"===this.options.stickTo&&(r-=a-(t+o),s-=a-o),this.topPoint=r,this.bottomPoint=s,n&&"function"==typeof n&&n()}
/**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */},{key:"_destroy",value:function e(){this._removeSticky(!0),this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger").off("mutateme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),this.scrollListener&&p()(window).off(this.scrollListener),this.onLoadListener&&p()(window).off(this.onLoadListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""})}}]),i}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
container:"<div data-sticky-container></div>",
/**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
stickTo:"top",
/**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
anchor:"",
/**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
topAnchor:"",
/**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
btmAnchor:"",
/**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginTop:1,
/**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginBottom:1,
/**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
stickyOn:"medium",
/**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
stickyClass:"sticky",
/**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
containerClass:"sticky-container",
/**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
checkEvery:-1}},
/***/"./js/foundation.tabs.js":
/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************/
/*! exports provided: Tabs */
/***/function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */n.r(t),
/* harmony export (binding) */n.d(t,"Tabs",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),v,y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Tabs",// ie9 back compat
this._init(),m.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}
/**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */},{key:"_init",value:function e(){var r=this,s=this;if(this._isInitializing=!0,this.$element.attr({role:"tablist"}),this.$tabTitles=this.$element.find(".".concat(this.options.linkClass)),this.$tabContent=h()('[data-tabs-content="'.concat(this.$element[0].id,'"]')),this.$tabTitles.each(function(){var e=h()(this),t=e.find("a"),n=e.hasClass("".concat(s.options.linkActiveClass)),i=t.attr("data-tabs-target")||t[0].hash.slice(1),o=t[0].id?t[0].id:"".concat(i,"-label"),r=h()("#".concat(i));e.attr({role:"presentation"}),t.attr({role:"tab","aria-controls":i,"aria-selected":n,id:o,tabindex:n?"0":"-1"}),r.attr({role:"tabpanel","aria-labelledby":o}),// Save up the initial hash to return to it later when going back in history
n&&(s._initialAnchor="#".concat(i)),n||r.attr("aria-hidden","true"),n&&s.options.autoFocus&&(s.onLoadListener=Object(p.onLoad)(h()(window),function(){h()("html, body").animate({scrollTop:e.offset().top},s.options.deepLinkSmudgeDelay,function(){t.focus()})}))}),this.options.matchHeight){var t=this.$tabContent.find("img");t.length?Object(g.onImagesLoaded)(t,this._setHeight.bind(this)):this._setHeight()}// Current context-bound function to open tabs on page load or history hashchange
this._checkDeepLink=function(){var e=window.location.hash;if(!e.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(r._isInitializing)return;// Otherwise, move to the initial anchor
r._initialAnchor&&(e=r._initialAnchor)}var t=e&&h()(e),n=e&&r.$element.find('[href$="'+e+'"]'),i=!(!t.length||!n.length);if(// If there is an anchor for the hash, select it
t&&t.length&&n&&n.length?r.selectTab(t,!0):r._collapse(),i){
// Roll up a little to show the titles
if(r.options.deepLinkSmudge){var o=r.$element.offset();h()("html, body").animate({scrollTop:o.top},r.options.deepLinkSmudgeDelay)}
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */r.$element.trigger("deeplink.zf.tabs",[n,t])}},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the tabs.
     * @private
     */},{key:"_events",value:function e(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),h()(window).on("changed.zf.mediaquery",this._setHeightMqHandler)),this.options.deepLink&&h()(window).on("hashchange",this._checkDeepLink)}
/**
     * Adds click handlers for items within the tabs.
     * @private
     */},{key:"_addClickHandler",value:function e(){var t=this;this.$element.off("click.zf.tabs").on("click.zf.tabs",".".concat(this.options.linkClass),function(e){e.preventDefault(),e.stopPropagation(),t._handleTabChange(h()(this))})}
/**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */},{key:"_addKeyHandler",value:function e(){var s=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(t){if(9!==t.which){var n=h()(this),i=n.parent("ul").children("li"),o,r;i.each(function(e){h()(this).is(n)&&(r=s.options.wrapOnKeys?(o=0===e?i.last():i.eq(e-1),e===i.length-1?i.first():i.eq(e+1)):(o=i.eq(Math.max(0,e-1)),i.eq(Math.min(e+1,i.length-1))))}),// handle keyboard event with keyboard util
m.Keyboard.handleKey(t,"Tabs",{open:function e(){n.find('[role="tab"]').focus(),s._handleTabChange(n)},previous:function e(){o.find('[role="tab"]').focus(),s._handleTabChange(o)},next:function e(){r.find('[role="tab"]').focus(),s._handleTabChange(r)},handled:function e(){t.stopPropagation(),t.preventDefault()}})}})}
/**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */},{key:"_handleTabChange",value:function e(t,n){
// With `activeCollapse`, if the target is the active Tab, collapse it.
if(t.hasClass("".concat(this.options.linkActiveClass)))this.options.activeCollapse&&this._collapse();else{var i=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass)),o=t.find('[role="tab"]'),r=o.attr("data-tabs-target"),s=r&&r.length?"#".concat(r):o[0].hash,a=this.$tabContent.find(s);//close old tab
this._collapseTab(i),//open new tab
this._openTab(t),//either replace or update browser history
this.options.deepLink&&!n&&(this.options.updateHistory?history.pushState({},"",s):history.replaceState({},"",s))
/**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */,this.$element.trigger("change.zf.tabs",[t,a]),//fire to children a mutation event
a.find("[data-mutate]").trigger("mutateme.zf.trigger")}}
/**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */},{key:"_openTab",value:function e(t){var n=t.find('[role="tab"]'),i=n.attr("data-tabs-target")||n[0].hash.slice(1),o=this.$tabContent.find("#".concat(i));t.addClass("".concat(this.options.linkActiveClass)),n.attr({"aria-selected":"true",tabindex:"0"}),o.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")}
/**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */},{key:"_collapseTab",value:function e(t){var n=t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({"aria-selected":"false",tabindex:-1});h()("#".concat(n.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({"aria-hidden":"true"})}
/**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */},{key:"_collapse",value:function e(){var t=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass));t.length&&(this._collapseTab(t),
/**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */
this.$element.trigger("collapse.zf.tabs",[t]))}
/**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */},{key:"selectTab",value:function e(t,n){var i;(i="object"===r(t)?t[0].id:t).indexOf("#")<0&&(i="#".concat(i));var o=this.$tabTitles.has('[href$="'.concat(i,'"]'));this._handleTabChange(o,n)}},{key:"_setHeight",
/**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
value:function e(){var i=0,o=this;// Lock down the `this` value for the root tabs object
this.$tabContent.find(".".concat(this.options.panelClass)).css("height","").each(function(){var e=h()(this),t=e.hasClass("".concat(o.options.panelActiveClass));// get the options from the parent instead of trying to get them from the child
t||e.css({visibility:"hidden",display:"block"});var n=this.getBoundingClientRect().height;t||e.css({visibility:"",display:""}),i=i<n?n:i}).css("height","".concat(i,"px"))}
/**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */},{key:"_destroy",value:function e(){this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&h()(window).off("changed.zf.mediaquery",this._setHeightMqHandler),this.options.deepLink&&h()(window).off("hashchange",this._checkDeepLink),this.onLoadListener&&h()(window).off(this.onLoadListener)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1,
/**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
wrapOnKeys:!0,
/**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
matchHeight:!1,
/**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
activeCollapse:!1,
/**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
linkClass:"tabs-title",
/**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
linkActiveClass:"is-active",
/**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
panelClass:"tabs-panel",
/**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
panelActiveClass:"is-active"}},
/***/"./js/foundation.toggler.js":
/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************/
/*! exports provided: Toggler */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"Toggler",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=h.a.extend({},i.defaults,t.data(),n),this.className="",this.className="Toggler",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
v.Triggers.init(h.a),this._init(),this._events()}
/**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */},{key:"_init",value:function e(){var t;// Parse animation classes if they were set
this.options.animate?(t=this.options.animate.split(" "),this.animationIn=t[0],this.animationOut=t[1]||null):(t=this.$element.data("toggler"),// Allow for a . at the beginning of the string
this.className="."===t[0]?t.slice(1):t);// Add ARIA attributes to triggers:
var r=this.$element[0].id,n=h()('[data-open~="'.concat(r,'"], [data-close~="').concat(r,'"], [data-toggle~="').concat(r,'"]'));// - aria-expanded: according to the element visibility.
n.attr("aria-expanded",!this.$element.is(":hidden")),// - aria-controls: adding the element id to it if not already in it.
n.each(function(e,t){var n=h()(t),i=n.attr("aria-controls")||"",o;new RegExp("\\b".concat(Object(g.RegExpEscape)(r),"\\b")).test(i)||n.attr("aria-controls",i?"".concat(i," ").concat(r):r)})}
/**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */},{key:"_events",value:function e(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}
/**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */},{key:"toggle",value:function e(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function e(){this.$element.toggleClass(this.className);var t=this.$element.hasClass(this.className);t?
/**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
this.$element.trigger("on.zf.toggler"):
/**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
this.$element.trigger("off.zf.toggler"),this._updateARIA(t),this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function e(){var t=this;this.$element.is(":hidden")?p.Motion.animateIn(this.$element,this.animationIn,function(){t._updateARIA(!0),this.trigger("on.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")}):p.Motion.animateOut(this.$element,this.animationOut,function(){t._updateARIA(!1),this.trigger("off.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")})}},{key:"_updateARIA",value:function e(t){var n=this.$element[0].id;h()('[data-open="'.concat(n,'"], [data-close="').concat(n,'"], [data-toggle="').concat(n,'"]')).attr({"aria-expanded":!!t})}
/**
     * Destroys the instance of Toggler on the element.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.off(".zf.toggler")}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.tooltip.js":
/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************/
/*! exports provided: Tooltip */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function e(t,n,i){var o=c(t,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(i):r.value}})(e,t,n||e)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"Tooltip",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b,w=
/* */
function(e){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return f(i,e),s(i,[{key:"_setup",
/**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
value:function e(t,n){this.$element=t,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Tooltip",// ie9 back compat
this.isActive=!1,this.isClick=!1,// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(m.a),this._init()}
/**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */},{key:"_init",value:function e(){v.MediaQuery._init();var t=this.$element.attr("aria-describedby")||Object(g.GetYoDigits)(6,"tooltip");this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?m()(this.options.template):this._buildTemplate(t),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":t,"data-yeti-box":t,"data-toggle":t,"data-resize":t}).addClass(this.options.triggerClass),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function e(){
// handle legacy classnames
var t=this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);return t?t[0]:"top"}},{key:"_getDefaultAlignment",value:function e(){return"center"}},{key:"_getHOffset",value:function e(){return"left"===this.position||"right"===this.position?this.options.hOffset+this.options.tooltipWidth:this.options.hOffset}},{key:"_getVOffset",value:function e(){return"top"===this.position||"bottom"===this.position?this.options.vOffset+this.options.tooltipHeight:this.options.vOffset}
/**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */},{key:"_buildTemplate",value:function e(t){var n="".concat(this.options.tooltipClass," ").concat(this.options.templateClasses).trim(),i;return m()("<div></div>").addClass(n).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:t})}
/**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */},{key:"_setPosition",value:function e(){u(d(i.prototype),"_setPosition",this).call(this,this.$element,this.template)}
/**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */},{key:"show",value:function e(){if("all"!==this.options.showOn&&!v.MediaQuery.is(this.options.showOn))
// console.error('The screen is too small to display this tooltip');
return!1;var t=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.template.removeClass("top bottom left right").addClass(this.position),this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-"+this.alignment),
/**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */
this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),t.isActive=!0,// console.log(this.template);
this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){//maybe do stuff?
}),
/**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */
this.$element.trigger("show.zf.tooltip")}
/**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */},{key:"hide",value:function e(){
// console.log('hiding', this.$element.data('yeti-box'));
var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1}),
/**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */
this.$element.trigger("hide.zf.tooltip")}
/**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */},{key:"_events",value:function e(){var t=this,n=this.template,i=!1;this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(e){t.isActive||(t.timeout=setTimeout(function(){t.show()},t.options.hoverDelay))}).on("mouseleave.zf.tooltip",Object(g.ignoreMousedisappear)(function(e){clearTimeout(t.timeout),(!i||t.isClick&&!t.options.clickOpen)&&t.hide()})),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick||(t.isClick=!0,!t.options.disableHover&&t.$element.attr("tabindex")||t.isActive||t.show())}):this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(e){t.isActive?t.hide():t.show()}),this.$element.on({
// 'toggle.zf.trigger': this.toggle.bind(this),
// 'close.zf.trigger': this.hide.bind(this)
"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(e){if(i=!0,t.isClick)
// If we're not showing open on clicks, we need to pretend a click-launched focus isn't
// a real focus, otherwise on hover and come back we get bad behavior
return t.options.clickOpen||(i=!1),!1;t.show()}).on("focusout.zf.tooltip",function(e){i=!1,t.isClick=!1,t.hide()}).on("resizeme.zf.trigger",function(){t.isActive&&t._setPosition()})}
/**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */},{key:"toggle",value:function e(){this.isActive?this.hide():this.show()}
/**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove()}}]),i}(n(/*! ./foundation.positionable */"./js/foundation.positionable.js").Positionable);
/* harmony import */w.defaults={disableForTouch:!1,
/**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
hoverDelay:200,
/**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
fadeInDuration:150,
/**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
fadeOutDuration:150,
/**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
templateClasses:"",
/**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
tooltipClass:"tooltip",
/**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
triggerClass:"has-tip",
/**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
showOn:"small",
/**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
template:"",
/**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
tipText:"",touchCloseText:"Tap to close.",
/**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
clickOpen:!0,
/**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
allowBottomOverlap:!1,
/**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
tooltipHeight:14,
/**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
tooltipWidth:12,
/**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
allowHtml:!1}},
/***/"./js/foundation.util.box.js":
/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************/
/*! exports provided: Box */
/***/function(e,t,n){"use strict";function i(e,t,n,i,o){return 0===r(e,t,n,i,o)}function r(e,t,n,i,o){var r=d(e),s,a,l,u;if(t){var c=d(t);a=c.height+c.offset.top-(r.offset.top+r.height),s=r.offset.top-c.offset.top,l=r.offset.left-c.offset.left,u=c.width+c.offset.left-(r.offset.left+r.width)}else a=r.windowDims.height+r.windowDims.offset.top-(r.offset.top+r.height),s=r.offset.top-r.windowDims.offset.top,l=r.offset.left-r.windowDims.offset.left,u=r.windowDims.width-(r.offset.left+r.width);return a=o?0:Math.min(a,0),s=Math.min(s,0),l=Math.min(l,0),u=Math.min(u,0),n?l+u:i?s+a:Math.sqrt(s*s+a*a+l*l+u*u)}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */function d(e){if((e=e.length?e[0]:e)===window||e===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var t=e.getBoundingClientRect(),n=e.parentNode.getBoundingClientRect(),i=document.body.getBoundingClientRect(),o=window.pageYOffset,r=window.pageXOffset;return{width:t.width,height:t.height,offset:{top:t.top+o,left:t.left+r},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+r}},windowDims:{width:i.width,height:i.height,offset:{top:o,left:r}}}}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */function o(e,t,n,i,o,r){switch(console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"),n){case"top":return Object(a.rtl)()?s(e,t,"top","left",i,o,r):s(e,t,"top","right",i,o,r);case"bottom":return Object(a.rtl)()?s(e,t,"bottom","left",i,o,r):s(e,t,"bottom","right",i,o,r);case"center top":return s(e,t,"top","center",i,o,r);case"center bottom":return s(e,t,"bottom","center",i,o,r);case"center left":return s(e,t,"left","center",i,o,r);case"center right":return s(e,t,"right","center",i,o,r);case"left bottom":return s(e,t,"bottom","left",i,o,r);case"right bottom":return s(e,t,"bottom","right",i,o,r);
// Backwards compatibility... this along with the reveal and reveal full
// classes are the only ones that didn't reference anchor
case"center":return{left:$eleDims.windowDims.offset.left+$eleDims.windowDims.width/2-$eleDims.width/2+o,top:$eleDims.windowDims.offset.top+$eleDims.windowDims.height/2-($eleDims.height/2+i)};case"reveal":return{left:($eleDims.windowDims.width-$eleDims.width)/2+o,top:$eleDims.windowDims.offset.top+i};case"reveal full":return{left:$eleDims.windowDims.offset.left,top:$eleDims.windowDims.offset.top};break;default:return{left:Object(a.rtl)()?$anchorDims.offset.left-$eleDims.width+$anchorDims.width-o:$anchorDims.offset.left+o,top:$anchorDims.offset.top+$anchorDims.height+i}}}function s(e,t,n,i,o,r,s){var a=d(e),l=t?d(t):null,u,c;// set position related attribute
switch(n){case"top":u=l.offset.top-(a.height+o);break;case"bottom":u=l.offset.top+l.height+o;break;case"left":c=l.offset.left-(a.width+r);break;case"right":c=l.offset.left+l.width+r;break}// set alignment related attribute
switch(n){case"top":case"bottom":switch(i){case"left":c=l.offset.left+r;break;case"right":c=l.offset.left-a.width+l.width-r;break;case"center":c=s?r:l.offset.left+l.width/2-a.width/2+r;break}break;case"right":case"left":switch(i){case"bottom":u=l.offset.top-o+l.height-a.height;break;case"top":u=l.offset.top+o;break;case"center":u=l.offset.top+o+l.height/2-a.height/2;break}break}return{top:u,left:c}}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Box",function(){return l});
/* harmony import */var a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l={ImNotTouchingYou:i,OverlapArea:r,GetDimensions:d,GetOffsets:o,GetExplicitOffsets:s
/**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */}},
/***/"./js/foundation.util.imageLoader.js":
/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************/
/*! exports provided: onImagesLoaded */
/***/function(e,t,n){"use strict";
/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function i(e,t){function i(){0===--o&&t()}var n=this,o=e.length;0===o&&t(),e.each(function(){
// Check if image is loaded
if(this.complete&&void 0!==this.naturalWidth)i();else{
// If the above check failed, simulate loading on detached element.
var e=new Image,n="load.zf.images error.zf.images";// Still count image as loaded if it finalizes with an error.
r()(e).one(n,function e(t){
// Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
r()(this).off(n,e),i()}),e.src=r()(this).attr("src")}})}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"onImagesLoaded",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),r=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.keyboard.js":
/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************/
/*! exports provided: Keyboard */
/***/function(e,t,n){"use strict";// Functions pulled out to be referenceable from internals
function r(e){return!!e&&e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!c()(this).is(":visible")||c()(this).attr("tabindex")<0);//only have visible elements and those that have a tabindex greater or equal 0
})}function s(e){var t=a[e.which||e.keyCode]||String.fromCharCode(e.which).toUpperCase();// Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
return t=t.replace(/\W+/,""),e.shiftKey&&(t="SHIFT_".concat(t)),e.ctrlKey&&(t="CTRL_".concat(t)),e.altKey&&(t="ALT_".concat(t)),// Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
t=t.replace(/_$/,"")}
/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function i(e){var t={};for(var n in e)t[e[n]]=e[n];return t}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Keyboard",function(){return l});
/* harmony import */var o=n(/*! jquery */"jquery"),c=/* */n.n(o),d=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),a={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",35:"END",36:"HOME",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},f={},l={keys:i(a),
/**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
parseKey:s,
/**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
handleKey:function e(t,n,i){var o=f[n],r=this.parseKey(t),s,a,l;if(!o)return console.warn("Component not defined!");if((l=i[a=(
// this component does not differentiate between ltr and rtl
s=void 0===o.ltr?o:
// merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
Object(d.rtl)()?c.a.extend({},o.ltr,o.rtl):c.a.extend({},o.rtl,o.ltr))[r]])&&"function"==typeof l){
// execute function  if exists
var u=l.apply();(i.handled||"function"==typeof i.handled)&&
// execute function when event was handled
i.handled(u)}else(i.unhandled||"function"==typeof i.unhandled)&&
// execute function when event was not handled
i.unhandled()},
/**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
findFocusable:r,
/**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
register:function e(t,n){f[t]=n},
// TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
//
/**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
trapFocus:function e(t){var n=r(t),i=n.eq(0),o=n.eq(-1);t.on("keydown.zf.trapfocus",function(e){e.target===o[0]&&"TAB"===s(e)?(e.preventDefault(),i.focus()):e.target===i[0]&&"SHIFT_TAB"===s(e)&&(e.preventDefault(),o.focus())})},
/**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
releaseFocus:function e(t){t.off("keydown.zf.trapfocus")}};
/* harmony import */},
/***/"./js/foundation.util.mediaQuery.js":
/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************/
/*! exports provided: MediaQuery */
/***/function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}
// Default set of media queries
// Thank you: https://github.com/sindresorhus/query-string
function s(e){var t={};return"string"!=typeof e?t:// browsers re-quote string style values
(e=e.trim().slice(1,-1))?t=e.split("&").reduce(function(e,t){var n=t.replace(/\+/g," ").split("="),i=n[0],o=n[1];return i=decodeURIComponent(i),// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
o=void 0===o?null:decodeURIComponent(o),e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(o):e[i]=[e[i],o]:e[i]=o,e},{}):t}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"MediaQuery",function(){return l});
/* harmony import */var i=n(/*! jquery */"jquery"),a=/* */n.n(i),r={default:"only screen",landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"};
/* harmony import */ // matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license
/* eslint-disable */
window.matchMedia||(window.matchMedia=function(){// For browsers that support matchMedium api such as IE 9 and webkit
var t=window.styleMedia||window.media;// For those that don't support matchMedium
if(!t){var i=document.createElement("style"),e=document.getElementsByTagName("script")[0],o=null;i.type="text/css",i.id="matchmediajs-test",e?e.parentNode.insertBefore(i,e):document.head.appendChild(i),// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
o="getComputedStyle"in window&&window.getComputedStyle(i,null)||i.currentStyle,t={matchMedium:function e(t){var n="@media "+t+"{ #matchmediajs-test { width: 1px; } }";// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
// Test if media query is true or false
return i.styleSheet?i.styleSheet.cssText=n:i.textContent=n,"1px"===o.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}());
/* eslint-enable */
var l={queries:[],current:"",
/**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
_init:function e(){var t=this,n;a()("meta.foundation-mq").length||a()('<meta class="foundation-mq">').appendTo(document.head);var i=a()(".foundation-mq").css("font-family"),o;for(var r in o=s(i))o.hasOwnProperty(r)&&t.queries.push({name:r,value:"only screen and (min-width: ".concat(o[r],")")});this.current=this._getCurrentSize(),this._watcher()},
/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
atLeast:function e(t){var n=this.get(t);return!!n&&window.matchMedia(n).matches},
/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
is:function e(t){return 1<(t=t.trim().split(" ")).length&&"only"===t[1]?t[0]===this._getCurrentSize():this.atLeast(t[0])},
/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
get:function e(t){for(var n in this.queries)if(this.queries.hasOwnProperty(n)){var i=this.queries[n];if(t===i.name)return i.value}return null},
/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
_getCurrentSize:function e(){for(var t,n=0;n<this.queries.length;n++){var i=this.queries[n];window.matchMedia(i.value).matches&&(t=i)}return"object"===o(t)?t.name:t},
/**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
_watcher:function e(){var n=this;a()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery",function(){var e=n._getCurrentSize(),t=n.current;e!==t&&(
// Change the current media query
n.current=e,// Broadcast the media query change on the window
a()(window).trigger("changed.zf.mediaquery",[e,t]))})}}},
/***/"./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/*! exports provided: Move, Motion */
/***/function(e,t,n){"use strict";function i(t,n,i){function o(e){a||(a=e),// console.log(start, ts);
s=e-a,i.apply(n),s<t?r=window.requestAnimationFrame(o,n):(window.cancelAnimationFrame(r),n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]))}var r,s,a=null;// console.log('called');
if(0===t)return i.apply(n),void n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]);r=window.requestAnimationFrame(o)}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */function o(e,t,n,i){// Hides the element (for out animations), resets the element, and runs a callback
function o(){e||t.hide(),r(),i&&i.apply(t)}// Resets transitions and removes motion-specific classes
function r(){t[0].style.transitionDuration=0,t.removeClass("".concat(s," ").concat(a," ").concat(n))}if((t=l()(t).eq(0)).length){var s=e?c[0]:c[1],a=e?d[0]:d[1];// Set up the animation
r(),t.addClass(n).css("transition","none"),requestAnimationFrame(function(){t.addClass(s),e&&t.show()}),// Start the animation
requestAnimationFrame(function(){t[0].offsetWidth,t.css("transition","").addClass(a)}),// Clean up the animation when it finishes
t.one(Object(u.transitionend)(t),o)}}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Move",function(){return i}),
/* harmony export (binding) */n.d(t,"Motion",function(){return s});
/* harmony import */var r=n(/*! jquery */"jquery"),l=/* */n.n(r),u=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),c=["mui-enter","mui-leave"],d=["mui-enter-active","mui-leave-active"],s={animateIn:function e(t,n,i){o(!0,t,n,i)},animateOut:function e(t,n,i){o(!1,t,n,i)}};
/* harmony import */},
/***/"./js/foundation.util.nest.js":
/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************/
/*! exports provided: Nest */
/***/function(e,t,n){"use strict";n.r(t),
/* harmony export (binding) */n.d(t,"Nest",function(){return o});
/* harmony import */var i=n(/*! jquery */"jquery"),u=/* */n.n(i),o={Feather:function e(t,n){var i=1<arguments.length&&void 0!==n?n:"zf";t.attr("role","menubar");var o=t.find("li").attr({role:"menuitem"}),r="is-".concat(i,"-submenu"),s="".concat(r,"-item"),a="is-".concat(i,"-submenu-parent"),l="accordion"!==i;// Accordions handle their own ARIA attriutes.
o.each(function(){var e=u()(this),t=e.children("ul");t.length&&(e.addClass(a),t.addClass("submenu ".concat(r)).attr({"data-submenu":""}),l&&(e.attr({"aria-haspopup":!0,"aria-label":e.children("a:first").text()}),// Note:  Drilldowns behave differently in how they hide, and so need
// additional attributes.  We should look if this possibly over-generalized
// utility (Nest) is appropriate when we rework menus in 6.4
"drilldown"===i&&e.attr({"aria-expanded":!1})),t.addClass("submenu ".concat(r)).attr({"data-submenu":"",role:"menubar"}),"drilldown"===i&&t.attr({"aria-hidden":!0})),e.parent("[data-submenu]").length&&e.addClass("is-submenu-item ".concat(s))})},Burn:function e(t,n){var//items = menu.find('li'),
i="is-".concat(n,"-submenu"),o="".concat(i,"-item"),r="is-".concat(n,"-submenu-parent");t.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i," ").concat(o," ").concat(r," is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display","")}};
/* harmony import */},
/***/"./js/foundation.util.timer.js":
/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/function(e,t,n){"use strict";function i(t,e,n){var i=this,o=e.duration,
//options is an object for easily adding features later.
r=Object.keys(t.data())[0]||"timer",s=-1,a,l;this.isPaused=!1,this.restart=function(){s=-1,clearTimeout(l),this.start()},this.start=function(){this.isPaused=!1,// if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),s=s<=0?o:s,t.data("paused",!1),a=Date.now(),l=setTimeout(function(){e.infinite&&i.restart(),n&&"function"==typeof n&&n()},s),t.trigger("timerstart.zf.".concat(r))},this.pause=function(){this.isPaused=!0,//if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),t.data("paused",!0);var e=Date.now();s-=e-a,t.trigger("timerpaused.zf.".concat(r))}}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Timer",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),r=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.touch.js":
/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************/
/*! exports provided: Touch */
/***/function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}
//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
function s(e){// If the touch did not move, consider it as a "tap"
if(this.removeEventListener("touchmove",a),this.removeEventListener("touchend",s),!w){var t=f.a.Event("tap",y||e);f()(this).trigger(t)}y=null,w=b=!1}function a(e){if(f.a.spotSwipe.preventDefault&&e.preventDefault(),b){var t=e.touches[0].pageX,n=e.touches[0].pageY,i=p-t,o=m-n,r;w=!0,v=(new Date).getTime()-g,Math.abs(i)>=f.a.spotSwipe.moveThreshold&&v<=f.a.spotSwipe.timeThreshold&&(r=0<i?"left":"right"),// else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
//   dir = dy > 0 ? 'down' : 'up';
// }
r&&(e.preventDefault(),s.apply(this,arguments),f()(this).trigger(f.a.Event("swipe",e),r).trigger(f.a.Event("swipe".concat(r),e)))}}function l(e){1==e.touches.length&&(p=e.touches[0].pageX,m=e.touches[0].pageY,y=e,w=!(b=!0),g=(new Date).getTime(),this.addEventListener("touchmove",a,!1),this.addEventListener("touchend",s,!1))}function u(){this.addEventListener&&this.addEventListener("touchstart",l,!1)}function c(){this.removeEventListener("touchstart",l)}n.r(t),
/* harmony export (binding) */n.d(t,"Touch",function(){return h});
/* harmony import */var d=n(/*! jquery */"jquery"),f=/* */n.n(d),h={},p,m,g,v,y,b=!1,w=!1,$=
/* */
function(){function t(e){i(this,t),this.version="1.0.0",this.enabled="ontouchstart"in document.documentElement,this.preventDefault=!1,this.moveThreshold=75,this.timeThreshold=200,this.$=e,this._init()}return r(t,[{key:"_init",value:function e(){var t=this.$;t.event.special.swipe={setup:u},t.event.special.tap={setup:u},t.each(["left","up","down","right"],function(){t.event.special["swipe".concat(this)]={setup:function e(){t(this).on("swipe",t.noop)}}})}}]),t}();
/* harmony import */
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/
h.setupSpotSwipe=function(e){e.spotSwipe=new $(e)},
/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/
h.setupTouchHandler=function(i){i.fn.addTouch=function(){this.each(function(e,t){i(t).bind("touchstart touchmove touchend touchcancel",function(e){
//we pass the original event object because the jQuery event
//object is normalized to w3c specs and does not provide the TouchList
n(e)})});var n=function e(t){var n,i=t.changedTouches[0],o,r={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[t.type],s;"MouseEvent"in window&&"function"==typeof window.MouseEvent?s=new window.MouseEvent(r,{bubbles:!0,cancelable:!0,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY}):(s=document.createEvent("MouseEvent")).initMouseEvent(r,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0
/*left*/,null),i.target.dispatchEvent(s)}}},h.init=function(e){void 0===e.spotSwipe&&(h.setupSpotSwipe(e),h.setupTouchHandler(e))}},
/***/"./js/foundation.util.triggers.js":
/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************/
/*! exports provided: Triggers */
/***/function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function i(t,e,n){var i,o=Array.prototype.slice.call(arguments,3);s()(window).off(e).on(e,function(e){i&&clearTimeout(i),i=setTimeout(function(){n.apply(null,o)},t||10)})}n.r(t),
/* harmony export (binding) */n.d(t,"Triggers",function(){return d});
/* harmony import */var r=n(/*! jquery */"jquery"),s=/* */n.n(r),a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),u=function(){for(var e=["WebKit","Moz","O","Ms",""],t=0;t<e.length;t++)if("".concat(e[t],"MutationObserver")in window)return window["".concat(e[t],"MutationObserver")];return!1}(),c=function e(t,n){t.data(n).split(" ").forEach(function(e){s()("#".concat(e))["close"===n?"trigger":"triggerHandler"]("".concat(n,".zf.trigger"),[t])})},d={Listeners:{Basic:{},Global:{}},Initializers:{}};
/* harmony import */d.Listeners.Basic={openListener:function e(){c(s()(this),"open")},closeListener:function e(){var t;s()(this).data("close")?c(s()(this),"close"):s()(this).trigger("close.zf.trigger")},toggleListener:function e(){var t;s()(this).data("toggle")?c(s()(this),"toggle"):s()(this).trigger("toggle.zf.trigger")},closeableListener:function e(t){t.stopPropagation();var n=s()(this).data("closable");""!==n?l.Motion.animateOut(s()(this),n,function(){s()(this).trigger("closed.zf")}):s()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function e(){var t=s()(this).data("toggle-focus");s()("#".concat(t)).triggerHandler("toggle.zf.trigger",[s()(this)])}},// Elements with [data-open] will reveal a plugin that supports it when clicked.
d.Initializers.addOpenListener=function(e){e.off("click.zf.trigger",d.Listeners.Basic.openListener),e.on("click.zf.trigger","[data-open]",d.Listeners.Basic.openListener)},// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
d.Initializers.addCloseListener=function(e){e.off("click.zf.trigger",d.Listeners.Basic.closeListener),e.on("click.zf.trigger","[data-close]",d.Listeners.Basic.closeListener)},// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
d.Initializers.addToggleListener=function(e){e.off("click.zf.trigger",d.Listeners.Basic.toggleListener),e.on("click.zf.trigger","[data-toggle]",d.Listeners.Basic.toggleListener)},// Elements with [data-closable] will respond to close.zf.trigger events.
d.Initializers.addCloseableListener=function(e){e.off("close.zf.trigger",d.Listeners.Basic.closeableListener),e.on("close.zf.trigger","[data-closeable], [data-closable]",d.Listeners.Basic.closeableListener)},// Elements with [data-toggle-focus] will respond to coming in and out of focus
d.Initializers.addToggleFocusListener=function(e){e.off("focus.zf.trigger blur.zf.trigger",d.Listeners.Basic.toggleFocusListener),e.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",d.Listeners.Basic.toggleFocusListener)},// More Global/complex listeners and triggers
d.Listeners.Global={resizeListener:function e(t){u||
//fallback for IE 9
t.each(function(){s()(this).triggerHandler("resizeme.zf.trigger")}),//trigger all listening elements and signal a resize event
t.attr("data-events","resize")},scrollListener:function e(t){u||
//fallback for IE 9
t.each(function(){s()(this).triggerHandler("scrollme.zf.trigger")}),//trigger all listening elements and signal a scroll event
t.attr("data-events","scroll")},closeMeListener:function e(t,n){var i=t.namespace.split(".")[0],o;s()("[data-".concat(i,"]")).not('[data-yeti-box="'.concat(n,'"]')).each(function(){var e=s()(this);e.triggerHandler("close.zf.trigger",[e])})}// Global, parses whole document.
},d.Initializers.addClosemeListener=function(e){var t=s()("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(e&&("string"==typeof e?n.push(e):"object"===o(e)&&"string"==typeof e[0]?n.concat(e):console.error("Plugin names must be strings")),t.length){var i=n.map(function(e){return"closeme.zf.".concat(e)}).join(" ");s()(window).off(i).on(i,d.Listeners.Global.closeMeListener)}},d.Initializers.addResizeListener=function(e){var t=s()("[data-resize]");t.length&&i(e,"resize.zf.trigger",d.Listeners.Global.resizeListener,t)},d.Initializers.addScrollListener=function(e){var t=s()("[data-scroll]");t.length&&i(e,"scroll.zf.trigger",d.Listeners.Global.scrollListener,t)},d.Initializers.addMutationEventsListener=function(e){if(!u)return!1;var t=e.find("[data-resize], [data-scroll], [data-mutate]"),n=function e(t){var n=s()(t[0].target);//trigger the event handler for the element depending on type
switch(t[0].type){case"attributes":"scroll"===n.attr("data-events")&&"data-events"===t[0].attributeName&&n.triggerHandler("scrollme.zf.trigger",[n,window.pageYOffset]),"resize"===n.attr("data-events")&&"data-events"===t[0].attributeName&&n.triggerHandler("resizeme.zf.trigger",[n]),"style"===t[0].attributeName&&(n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]));break;case"childList":n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]);break;default:return!1;
//nothing
}};//element callback
if(t.length)
//for each element that needs to listen for resizing, scrolling, or mutation add a single observer
for(var i=0;i<=t.length-1;i++){var o;new u(n).observe(t[i],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},d.Initializers.addSimpleListeners=function(){var e=s()(document);d.Initializers.addOpenListener(e),d.Initializers.addCloseListener(e),d.Initializers.addToggleListener(e),d.Initializers.addCloseableListener(e),d.Initializers.addToggleFocusListener(e)},d.Initializers.addGlobalListeners=function(){var e=s()(document);d.Initializers.addMutationEventsListener(e),d.Initializers.addResizeListener(),d.Initializers.addScrollListener(),d.Initializers.addClosemeListener()},d.init=function(e,t){Object(a.onLoad)(e(window),function(){!0!==e.triggersInitialized&&(d.Initializers.addSimpleListeners(),d.Initializers.addGlobalListeners(),e.triggersInitialized=!0)}),t&&(t.Triggers=d,// Legacy included to be backwards compatible for now.
t.IHearYou=d.Initializers.addGlobalListeners)}},
/***/0:
/*!****************************************!*\
  !*** multi ./js/entries/foundation.js ***!
  \****************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/foundation.js */"./js/entries/foundation.js");
/***/},
/***/jquery:
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/function(e,t){e.exports=n;
/***/}
/******/})}),function e(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Swup=n():t.Swup=n()}(window,function(){/******/
return function(n){
/******/
/******/ // The require function
/******/function o(e){
/******/
/******/ // Check if module is in cache
/******/if(i[e])
/******/return i[e].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var t=i[e]={
/******/i:e,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[e].call(t.exports,t,t.exports,o),
/******/
/******/ // Flag the module as loaded
/******/t.l=!0,t.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var i={};
/******/
/******/
/******/ // Load entry module and return exports
/******/return o.m=n,
/******/
/******/ // expose the module cache
/******/o.c=i,
/******/
/******/ // define getter function for harmony exports
/******/o.d=function(e,t,n){
/******/o.o(e,t)||
/******/Object.defineProperty(e,t,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/o.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/o.t=function(t,e){
/******/if(
/******/1&e&&(t=o(t)),8&e)return t;
/******/if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;
/******/var n=Object.create(null);
/******/
/******/if(o.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(t){
/******/var e=t&&t.__esModule?
/******/function e(){return t.default}:
/******/function e(){return t};
/******/
/******/return o.d(e,"a",e),e;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/o.p="",o(o.s=2);
/******/}
/************************************************************************/
/******/([
/* 0 */
/***/function(e,t,n){"use strict";function i(e,t){var n=1<arguments.length&&void 0!==t?t:document;return"string"!=typeof e?e:n.querySelector(e)}function o(e,t
/***/){var n=1<arguments.length&&void 0!==t?t:document;return"string"!=typeof e?e:Array.prototype.slice.call(n.querySelectorAll(e))}Object.defineProperty(t,"__esModule",{value:!0}),t.query=i,t.queryAll=o},
/* 1 */
/***/function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),r=function(){function e(){i(this,e),this.link=document.createElement("a")}return o(e,[{key:"setPath",value:function e(t){this.link.href=t}},{key:"getPath",value:function e(){var t=this.link.pathname;return"/"!=t[0]&&(t="/"+t),t}},{key:"getAddress",value:function e(){var t=this.link.pathname+this.link.search;return"/"!=t[0]&&(t="/"+t),t}},{key:"getHash",value:function e(){return this.link.hash}}]),e}();t.default=r},
/* 2 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o,r=i(n(3));e.exports=r.default},
/* 3 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),a,l=i(n(4)),u,c=i(n(6)),d,f=i(n(1)),h,p=i(n(7)),m,g=i(n(8)),v,y=i(n(9)),b,w=i(n(10)),$,k=i(n(11)),x,j=i(n(12)),_,C=i(n(13)),T,O=i(n(14)),S,E=i(n(15)),z,A=i(n(16)),P,L=i(n(17)),D,q=i(n(18)),M,H=i(n(19)),R,N=i(n(20)),I,F=i(n(21)),B,W=i(n(22)),G,U=i(n(23)),Q,Y=i(n(24)),K,V=i(n(25)),X=function(){function i(e){o(this,i);
// default options
var t={cache:!0,animationSelector:'[class*="transition-"]',elements:["#swup"],pageClassPrefix:"",debugMode:!1,scroll:!0,doScrollingRightAway:!1,animateScroll:!0,scrollFriction:.3,scrollAcceleration:.04,preload:!0,support:!0,plugins:[],skipPopStateHandling:function e(t){return!t.state||"swup"!=t.state.source},animateHistoryBrowsing:!1,LINK_SELECTOR:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',FORM_SELECTOR:"form[data-swup-form]"
/**
             * current transition object
             */};this.transition={};var n=r({},t,e);
/**
         * handler arrays
         */this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],hoverLink:[],openPageInNewTab:[],pageLoaded:[],pagePreloaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],scrollDone:[],scrollStart:[],serverError:[],submitForm:[],willReplaceContent:[]},
/**
         * helper variables
         */
// id of element to scroll to after render
this.scrollToElement=null,
// promise used for preload, so no new loading of the same page starts while page is loading
this.preloadPromise=null,
// save options
this.options=n,
// plugins array
this.plugins=[],
/**
         * make modules accessible in instance
         */
this.getUrl=O.default,this.cache=new c.default,this.link=new f.default,this.transitionEndEvent=(0,p.default)(),this.getDataFromHtml=y.default,this.getPage=g.default,this.scrollTo=E.default,this.loadPage=w.default,this.renderPage=k.default,this.createState=j.default,this.triggerEvent=C.default,this.classify=A.default,this.doScrolling=L.default,this.markSwupElements=q.default,this.on=H.default,this.off=N.default,this.updateTransition=F.default,this.preloadPage=W.default,this.preloadPages=U.default,this.usePlugin=Y.default,this.log=V.default,this.enable=this.enable,this.destroy=this.destroy,
// attach instance to window in debug mode
this.options.debugMode&&(window.swup=this),this.getUrl(),this.enable()}return s(i,[{key:"enable",value:function e(){var t=this;
/**
             * support check
             */if(this.options.support){
// check pushState support
if(!("pushState"in window.history))return void console.warn("pushState is not supported");
// check transitionEnd support
if(!(0,p.default)())return void console.warn("transitionEnd detection is not supported");
// check Promise support
if(this.transitionEndEvent=(0,p.default)(),"undefined"==typeof Promise||-1===Promise.toString().indexOf("[native code]"))return void console.warn("Promise is not supported")}
// variable to keep event listeners from "delegate"
this.delegatedListeners={},
/**
             * link click handler
             */
this.delegatedListeners.click=(0,l.default)(document,this.options.LINK_SELECTOR,"click",this.linkClickHandler.bind(this)),
/**
             * link mouseover handler (preload)
             */
this.delegatedListeners.mouseover=(0,l.default)(document.body,this.options.LINK_SELECTOR,"mouseover",this.linkMouseoverHandler.bind(this)),
/**
             * form submit handler
             */
this.delegatedListeners.formSubmit=(0,l.default)(document,this.options.FORM_SELECTOR,"submit",this.formSubmitHandler.bind(this)),
/**
             * popstate handler
             */
window.addEventListener("popstate",this.popStateHandler.bind(this));
/**
             * initial save to cache
             */
var n=this.getDataFromHtml(document.documentElement.outerHTML);n.url=this.currentUrl,this.options.cache&&this.cache.cacheUrl(n,this.options.debugMode)
/**
             * mark swup blocks in html
             */,this.markSwupElements(document.documentElement),
/**
             * enable plugins from options
             */
this.options.plugins.forEach(function(e){return t.usePlugin(e)}),
/**
             * modify initial history record
             */
window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),
/**
             * Disable browser scroll control on popstates when animateHistoryBrowsing option is enabled
             */
this.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual")
/**
             * trigger enabled event
             */,this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),
/**
             * trigger page view event
             */
this.triggerEvent("pageView"),
/**
             * preload pages if possible
             */
this.preloadPages()}},{key:"destroy",value:function e(){
// remove delegated listeners
this.delegatedListeners.click.destroy(),this.delegatedListeners.mouseover.destroy(),
// remove popstate listener
window.removeEventListener("popstate",this.popStateHandler.bind(this)),
// empty cache
this.cache.empty(),
// remove swup data atributes from blocks
document.querySelectorAll("[data-swup]").forEach(function(e){delete e.dataset.swup}),
// remove handlers
this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function e(t){
// no control key pressed
if(t.metaKey)
// open in new tab (do nothing)
this.triggerEvent("openPageInNewTab",t);else
// index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
if(0===t.button){this.triggerEvent("clickLink",t);var n=new f.default;if(t.preventDefault(),n.setPath(t.delegateTarget.href),n.getAddress()==this.currentUrl||""==n.getAddress())
// link to the same URL
if(""!=n.getHash()){
// link to the same URL with hash
this.triggerEvent("samePageWithHash",t);var i=document.querySelector(n.getHash());if(null!=i){
// referenced element found
if(this.options.scroll){var o=i.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,o)}history.replaceState({url:n.getAddress()+n.getHash(),random:Math.random(),source:"swup"},document.title,n.getAddress()+n.getHash())}else
// referenced element not found
console.warn("Element for offset not found ("+n.getHash()+")")}else
// link to the same URL without hash
this.triggerEvent("samePage",t),this.options.scroll&&this.scrollTo(document.body,0,1);else{
// link to different url
""!=n.getHash()&&(this.scrollToElement=n.getHash());
// get custom transition from data
var r=t.delegateTarget.dataset.swupTransition;
// load page
this.loadPage({url:n.getAddress(),customTransition:r},!1)}}}},{key:"linkMouseoverHandler",value:function e(r){var s=this;if(this.triggerEvent("hoverLink",r),this.options.preload){var a=new f.default;a.setPath(r.delegateTarget.href),a.getAddress()==this.currentUrl||this.cache.exists(a.getAddress())||null!=this.preloadPromise||(this.preloadPromise=new Promise(function(i,o){s.getPage({url:a.getAddress()},function(e,t){if(500===t.status)return s.triggerEvent("serverError",r),void o(a.getAddress());
// get json data
var n=s.getDataFromHtml(e,t);null!=n?(n.url=a.getAddress(),s.cache.cacheUrl(n,s.options.debugMode),s.triggerEvent("pagePreloaded",r),i(),s.preloadPromise=null):o(a.getAddress())})}),this.preloadPromise.route=a.getAddress())}}},{key:"formSubmitHandler",value:function e(t){
// no control key pressed
if(t.metaKey)this.triggerEvent("openFormSubmitInNewTab",t);else{this.triggerEvent("submitForm",t),t.preventDefault();var n=t.target,i=new FormData(n),o=new f.default;if(o.setPath(n.action),""!=o.getHash()&&(this.scrollToElement=o.getHash()),"get"!=n.method.toLowerCase())
// remove page from cache
this.cache.remove(o.getAddress()),
// send data
this.loadPage({url:o.getAddress(),method:n.method,data:i});else{
// create base url
var r=o.getAddress()||window.location.href,s=n.querySelectorAll("input, select");-1==r.indexOf("?")?r+="?":r+="&",
// add form data to url
s.forEach(function(e){"checkbox"==e.type||"radio"==e.type?e.checked&&(r+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"):r+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}),
// remove last "&"
r=r.slice(0,-1),
// remove page from cache
this.cache.remove(r),
// send data
this.loadPage({url:r})}}}},{key:"popStateHandler",value:function e(t){var n=new f.default;this.options.skipPopStateHandling(t)||(n.setPath(t.state?t.state.url:window.location.pathname),""!=n.getHash()?this.scrollToElement=n.getHash():t.preventDefault(),this.triggerEvent("popState",t),this.loadPage({url:n.getAddress()},t))}}]),i}();t.default=X},
/* 4 */
/***/function(e,t,n){
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function i(e,t,n,i,o){var r=s.apply(this,arguments);return e.addEventListener(n,r,o),{destroy:function(){e.removeEventListener(n,r,o)}}}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */function s(t,n,e,i){return function(e){e.delegateTarget=o(e.target,n),e.delegateTarget&&i.call(t,e)}}var o=n(5);e.exports=i},
/* 5 */
/***/function(e,t){
/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function n(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var i=9;
/**
 * A polyfill for Element.matches()
 */if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=n},
/* 6 */
/***/function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),r=function(){function e(){i(this,e),this.pages={},this.count=0,this.last=null}return o(e,[{key:"cacheUrl",value:function e(t,n){this.count++,t.url in this.pages==!1&&(this.pages[t.url]=t),this.last=this.pages[t.url],n&&this.displayCache()}},{key:"getPage",value:function e(t){return this.pages[t]}},{key:"displayCache",value:function e(){for(var t in console.groupCollapsed("Cache ("+Object.keys(this.pages).length+")"),this.pages)console.log(this.pages[t]);console.groupEnd()}},{key:"exists",value:function e(t){return t in this.pages}},{key:"empty",value:function e(t){this.pages={},this.count=0,this.last=null,t&&console.log("Cache cleared")}},{key:"remove",value:function e(t){delete this.pages[t]}}]),e}();t.default=r},
/* 7 */
/***/function(e,t,n){"use strict";e.exports=function e(){var t=document.createElement("div"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in n)if(void 0!==t.style[i])return n[i];return!1}},
/* 8 */
/***/function(e,t,n){"use strict";var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};e.exports=function(e,t){var n=1<arguments.length&&void 0!==t&&t,i={url:window.location.pathname+window.location.search,method:"GET",data:null},o=s({},i,e),r=new XMLHttpRequest;return r.onreadystatechange=function(){4===r.readyState&&(500!==r.status?n(r.responseText,r):n(null,r))},r.open(o.method,o.url,!0),r.setRequestHeader("X-Requested-With","swup"),r.send(o.data),r}},
/* 9 */
/***/function(e,t,n){"use strict";var l=n(0);e.exports=function(e,t){var n=this,i=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),o=document.createElement("div"),r;o.innerHTML=i;for(var s=[],a=0;a<this.options.elements.length;a++){if(null==o.querySelector(this.options.elements[a]))return console.warn("Element "+this.options.elements[a]+" is not found in cached page."),null;(0,l.queryAll)(this.options.elements[a]).forEach(function(e,t){(0,l.queryAll)(n.options.elements[a],o)[t].dataset.swup=s.length,s.push((0,l.queryAll)(n.options.elements[a],o)[t].outerHTML)})}return{title:o.querySelector("title").innerText,pageClass:o.querySelector("#swupBody").className,originalContent:e,blocks:s,responseURL:null!=t?t.responseURL:window.location.href}}},
/* 10 */
/***/function(e,t,n){"use strict";var a=n(0),l=Array.prototype.forEach;e.exports=function(r,e){var s=this;
// scrolling
this.options.doScrollingRightAway&&!this.scrollToElement&&this.doScrolling(e);
// create array for storing animation promises
var t=[];
// set transition object
if(null!=r.customTransition?(this.updateTransition(window.location.pathname,r.url,r.customTransition),document.documentElement.classList.add("to-"+this.classify(r.customTransition))):this.updateTransition(window.location.pathname,r.url),!e||this.options.animateHistoryBrowsing){
// start animation
this.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),e&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+this.classify(r.url));
// detect animation end
var n=(0,a.queryAll)(this.options.animationSelector);
// create pop element with or without anchor
if(l.call(n,function(n){var e=new Promise(function(t){n.addEventListener(s.transitionEndEvent,function(e){n==e.target&&t()})});t.push(e)}),Promise.all(t).then(function(){s.triggerEvent("animationOutDone")}),null!=this.scrollToElement)var i=r.url+this.scrollToElement;else var i=r.url;e||this.createState(i)}else
// proceed without animating
this.triggerEvent("animationSkipped");if(this.cache.exists(r.url)){var o=new Promise(function(e){e()});this.triggerEvent("pageRetrievedFromCache")}else if(this.preloadPromise&&this.preloadPromise.route==r.url)var o=this.preloadPromise;else var o=new Promise(function(i,o){s.getPage(r,function(e,t){if(500===t.status)return s.triggerEvent("serverError"),void o(r.url);
// get json data
var n=s.getDataFromHtml(e,t);null!=n?(n.url=r.url,
// render page
s.cache.cacheUrl(n,s.options.debugMode),s.triggerEvent("pageLoaded"),i()):o(r.url)})});Promise.all(t.concat([o])).then(function(){
// render page
s.renderPage(s.cache.getPage(r.url),e),s.preloadPromise=null}).catch(function(e){
// rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
s.options.skipPopStateHandling=function(){return window.location=e,!0},
// go back to the actual page were still at
window.history.go(-1)})}},
/* 11 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=n(0),o,l=i(n(1)),u=Array.prototype.forEach;e.exports=function(e,t){var i=this;document.documentElement.classList.remove("is-leaving");
// replace state in case the url was redirected
var n=new l.default;n.setPath(e.responseURL),window.location.pathname!==n.getPath()&&window.history.replaceState({url:n.getPath(),random:Math.random(),source:"swup"},document.title,n.getPath()),
// only add for non-popstate transitions
t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent");
// replace blocks
for(var o=0;o<e.blocks.length;o++)document.body.querySelector('[data-swup="'+o+'"]').outerHTML=e.blocks[o];
// set title
document.title=e.title,
// handle classes after render
// remove
!1!==this.options.pageClassPrefix&&document.body.className.split(" ").forEach(function(e){
// empty string for page class
""!=e&&e.includes(i.options.pageClassPrefix)&&document.body.classList.remove(e)}),
// add
""!=e.pageClass&&e.pageClass.split(" ").forEach(function(e){""!=e&&e.includes(i.options.pageClassPrefix)&&document.body.classList.add(e)}),this.triggerEvent("contentReplaced"),this.triggerEvent("pageView"),this.options.cache||this.cache.empty(this.options.debugMode),setTimeout(function(){t&&!i.options.animateHistoryBrowsing||(i.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))},10),
// scrolling
this.options.doScrollingRightAway&&!this.scrollToElement||this.doScrolling(t);
// detect animation end
var r=(0,a.queryAll)(this.options.animationSelector),s=[];u.call(r,function(n){var e=new Promise(function(t){n.addEventListener(i.transitionEndEvent,function(e){n==e.target&&t()})});s.push(e)}),
//preload pages if possible
this.preloadPages(),t&&!this.options.animateHistoryBrowsing||Promise.all(s).then(function(){i.triggerEvent("animationInDone"),
// remove "to-{page}" classes
document.documentElement.className.split(" ").forEach(function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)})}),
// update current url
this.getUrl(),
// reset scroll-to element
this.scrollToElement=null}},
/* 12 */
/***/function(e,t,n){"use strict";e.exports=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},
/* 13 */
/***/function(e,t,n){"use strict";e.exports=function(e,t){this.options.debugMode&&t?(console.groupCollapsed("%cswup:%c"+e,"color: #343434","color: #009ACD"),console.log(t),console.groupEnd()):this.options.debugMode&&console.log("%cswup:%c"+e,"color: #343434","color: #009ACD"),
// call saved handlers with "on" method and pass originalEvent object if available
this._handlers[e].forEach(function(e){try{e(t)}catch(e){console.error(e)}});
// trigger event on document with prefix "swup:"
var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},
/* 14 */
/***/function(e,t,n){"use strict";e.exports=function(){this.currentUrl=window.location.pathname+window.location.search}},
/* 15 */
/***/function(e,t,n){"use strict";e.exports=function(e,t,n){function i(){return document.body.scrollTop||document.documentElement.scrollTop}function o(){var e=f-u,t;return g(e*l),u+=c*=a,e}var r=this,s=2<arguments.length&&void 0!==n?n:this.options.animateScroll,a=1-this.options.scrollFriction,l=this.options.scrollAcceleration,u=0,c=0,d=0,f=0,h=0,p=null,m=function e(){var t=o();v(),1===h&&u<d||-1===h&&d<u?p=requestAnimationFrame(e):(window.scrollTo(0,d),r.triggerEvent("scrollDone"))},g=function e(t){c+=t},v=function e(){window.scrollTo(0,u)};window.addEventListener("mousewheel",function(e){p&&(cancelAnimationFrame(p),p=null)},{passive:!0});var y=function e(t,n){u=i(),f=t+(h=t<u?-1:1),c=0,u!=(d=t)?m():r.triggerEvent("scrollDone")};this.triggerEvent("scrollStart"),0==s?(window.scrollTo(0,t),this.triggerEvent("scrollDone")):y(t)}},
/* 16 */
/***/function(e,t,n){"use strict";e.exports=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");// Trim - from end of text
return"/"==t[0]&&(t=t.splice(1)),""==t&&(t="homepage"),t}},
/* 17 */
/***/function(e,t,n){"use strict";e.exports=function(e){if(this.options.scroll&&(!e||this.options.animateHistoryBrowsing))if(null!=this.scrollToElement){var t=document.querySelector(this.scrollToElement);if(null!=t){var n=t.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,n)}else console.warn("Element for offset not found ("+this.scrollToElement+")");this.scrollToElement=null}else this.scrollTo(document.body,0)}},
/* 18 */
/***/function(e,t,n){"use strict";var s=n(0);e.exports=function(n){for(var i=this,o=0,r=0;r<this.options.elements.length;r++)null==n.querySelector(this.options.elements[r])?console.warn("Element "+this.options.elements[r]+" is not in current page."):(0,s.queryAll)(this.options.elements[r]).forEach(function(e,t){(0,s.queryAll)(i.options.elements[r],n)[t].dataset.swup=o,o++})}},
/* 19 */
/***/function(e,t,n){"use strict";e.exports=function e(t,n){this._handlers[t]?this._handlers[t].push(n):console.warn("Unsupported event "+t+".")}},
/* 20 */
/***/function(e,t,n){"use strict";e.exports=function e(t,n){var i=this;if(null!=t)if(null!=n)if(this._handlers[t]&&this._handlers[t].filter(function(e){return e===n}).length){var o=this._handlers[t].filter(function(e){return e===n})[0],r=this._handlers[t].indexOf(o);-1<r&&this._handlers[t].splice(r,1)}else console.warn("Handler for event '"+t+"' no found.");else this._handlers[t]=[];else Object.keys(this._handlers).forEach(function(e){i._handlers[e]=[]})}},
/* 21 */
/***/function(e,t,n){"use strict";e.exports=function(e,t,n){
// homepage case
"/"==e&&(e="/homepage"),"/"==t&&(t="/homepage"),
// transition routes
this.transition={from:e.replace("/",""),to:t.replace("/","")},n&&(this.transition.custom=n)}},
/* 22 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o,r=i(n(1));e.exports=function(e){var i=this,o=new r.default;o.setPath(e),o.getAddress()==this.currentUrl||this.cache.exists(o.getAddress())||null!=this.preloadPromise||this.getPage({url:o.getAddress()},function(e,t){if(500!==t.status){
// get json data
var n=i.getDataFromHtml(e,t);null!=n&&(n.url=o.getAddress(),i.cache.cacheUrl(n,i.options.debugMode),i.triggerEvent("pagePreloaded"))}else i.triggerEvent("serverError")})}},
/* 23 */
/***/function(e,t,n){"use strict";var i=n(0);e.exports=function(){var t=this;this.options.preload&&(0,i.queryAll)("[data-swup-preload]").forEach(function(e){t.preloadPage(e.href)})}},
/* 24 */
/***/function(e,t,n){"use strict";e.exports=function(e,t){var i=this;t=Object.assign({},e.options,t),e.options=t;var n=function e(){var t=i.cache.getPage(window.location.pathname+window.location.search),n=document.createElement("html");return n.innerHTML=t.originalContent,n};return this.plugins.push(e),e.exec(t,this,n),this.plugins}},
/* 25 */
/***/function(e,t,n){"use strict";e.exports=function(e){this.options.debugMode&&console.log(e+"%c","color: #009ACD")}}
/******/])}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(n){function i(e){if(o[e])return o[e].exports;var t=o[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}var o={};return i.m=n,i.c=o,i.p="dist/",i(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r,s,a=i((i(n(1)),n(6))),l,u=i(n(7)),c,d=i(n(8)),f,h=i(n(9)),p,m=i(n(10)),g,v=i(n(11)),y,b=i(n(14)),w=[],$=!1,k={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},x=function(e){var t;if(0<arguments.length&&void 0!==e&&e&&($=!0),$)return w=(0,v.default)(w,k),(0,m.default)(w,k.once),w},j=function(){w=(0,b.default)(),x()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},C=function(e){return!0===e||"mobile"===e&&h.default.mobile()||"phone"===e&&h.default.phone()||"tablet"===e&&h.default.tablet()||"function"==typeof e&&!0===e()},T=function(e){k=o(k,e),w=(0,b.default)();var t=document.all&&!window.atob;return C(k.disable)||t?_():(k.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),k.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),"DOMContentLoaded"===k.startEvent&&-1<["complete","interactive"].indexOf(document.readyState)?x(!0):"load"===k.startEvent?window.addEventListener(k.startEvent,function(){x(!0)}):document.addEventListener(k.startEvent,function(){x(!0)}),window.addEventListener("resize",(0,u.default)(x,k.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(x,k.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,m.default)(w,k.once)},k.throttleDelay)),k.disableMutationObserver||d.default.ready("[data-aos]",j),w)};e.exports={init:T,refresh:x,refreshHard:j}},function(e,t){},,,,,function(y,e){(function(e){"use strict";function r(i,o,e){function n(e){var t=f,n=h;return f=h=void 0,y=e,m=i.apply(n,t)}function r(e){return y=e,g=setTimeout(a,o),b?n(e):m}function t(e){var t,n,i=o-(e-v);return w?C(i,p-(e-y)):i}function s(e){var t=e-v,n;return void 0===v||o<=t||t<0||w&&p<=e-y}function a(){var e=T();return s(e)?l(e):void(g=setTimeout(a,t(e)))}function l(e){return g=void 0,$&&f?n(e):(f=h=void 0,m)}function u(){void 0!==g&&clearTimeout(g),f=v=h=g=void(y=0)}function c(){return void 0===g?m:l(T())}function d(){var e=T(),t=s(e);if(f=arguments,h=this,v=e,t){if(void 0===g)return r(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var f,h,p,m,g,v,y=0,b=!1,w=!1,$=!0;if("function"!=typeof i)throw new TypeError(j);return o=x(o)||0,k(e)&&(b=!!e.leading,p=(w="maxWait"in e)?_(x(e.maxWait)||0,o):p,$="trailing"in e?!!e.trailing:$),d.cancel=u,d.flush=c,d}function t(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(j);return k(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),r(e,t,{leading:i,maxWait:t,trailing:o})}function k(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function n(e){return!!e&&"object"==(void 0===e?"undefined":o(e))}function i(e){return"symbol"==(void 0===e?"undefined":o(e))||n(e)&&v.call(e)==a}function x(e){if("number"==typeof e)return e;if(i(e))return s;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=c.test(e);return n||d.test(e)?f(e.slice(2),n?2:8):u.test(e)?s:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j="Expected a function",s=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,h="object"==(void 0===e?"undefined":o(e))&&e&&e.Object===Object&&e,p="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,m=h||p||Function("return this")(),g,v=Object.prototype.toString,_=Math.max,C=Math.min,T=function(){return m.Date.now()};y.exports=t}).call(e,function(){return this}())},function(v,e){(function(e){"use strict";function t(i,o,e){function n(e){var t=f,n=h;return f=h=void 0,y=e,m=i.apply(n,t)}function r(e){return y=e,g=setTimeout(a,o),b?n(e):m}function t(e){var t,n,i=o-(e-v);return w?C(i,p-(e-y)):i}function s(e){var t=e-v,n;return void 0===v||o<=t||t<0||w&&p<=e-y}function a(){var e=T();return s(e)?l(e):void(g=setTimeout(a,t(e)))}function l(e){return g=void 0,$&&f?n(e):(f=h=void 0,m)}function u(){void 0!==g&&clearTimeout(g),f=v=h=g=void(y=0)}function c(){return void 0===g?m:l(T())}function d(){var e=T(),t=s(e);if(f=arguments,h=this,v=e,t){if(void 0===g)return r(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var f,h,p,m,g,v,y=0,b=!1,w=!1,$=!0;if("function"!=typeof i)throw new TypeError(j);return o=x(o)||0,k(e)&&(b=!!e.leading,p=(w="maxWait"in e)?_(x(e.maxWait)||0,o):p,$="trailing"in e?!!e.trailing:$),d.cancel=u,d.flush=c,d}function k(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function n(e){return!!e&&"object"==(void 0===e?"undefined":o(e))}function i(e){return"symbol"==(void 0===e?"undefined":o(e))||n(e)&&g.call(e)==s}function x(e){if("number"==typeof e)return e;if(i(e))return r;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):l.test(e)?r:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j="Expected a function",r=NaN,s="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f="object"==(void 0===e?"undefined":o(e))&&e&&e.Object===Object&&e,h="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,p=f||h||Function("return this")(),m,g=Object.prototype.toString,_=Math.max,C=Math.min,T=function(){return p.Date.now()};v.exports=t}).call(e,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(i=n.children&&o(n.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!r()}function i(e,t){var n=window.document,i,o=new(r())(s);a=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),i;if(o(t.concat(n)))return a()})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){};t.default={isSupported:n,ready:i}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=i();return!(!r.test(e)&&!s.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!a.test(e)&&!l.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},n=function(e,n){var i=window.pageYOffset,o=window.innerHeight;e.forEach(function(e,t){r(e,o+i,n)})};t.default=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r=i(n(12)),s=function(e,n){return e.forEach(function(e,t){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,n.offset)}),e};t.default=s},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,s=i(n(13)),r=function(e,t){var n=0,i=0,o=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(i=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,s.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+e.offsetHeight;break;case"center-center":n+=o/2+e.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=e.offsetHeight+o;break;case"center-top":n+=e.offsetHeight/2+o}return r.anchorPlacement||r.offset||isNaN(t)||(i=t),n+i};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])}),
/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
function(e,t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=t(require("jquery")):t(e.jQuery)}(this,function(v){!function(){"use strict";function t(e,t){
// When using dynamic mode, ensure dynamicEl is an array
if(
// Current lightGallery element
this.el=e,
// Current jquery element
this.$el=v(e),
// lightGallery settings
this.s=v.extend({},n,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";
// lightGallery modules
return this.modules={},
// false when lightgallery complete first slide;
this.lGalleryOn=!1,this.lgBusy=!1,
// Timeout function for hiding controls;
this.hideBartimeout=!1,
// To determine browser supports for touch events;
this.isTouch="ontouchstart"in document.documentElement,
// Disable hideControlOnEnd if sildeEndAnimation is true
this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),
// Gallery items
this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=v(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(v(this.s.selector)):this.$items=this.$el.children(),
// .lg-item
this.$slide="",
// .lg-outer
this.$outer="",this.init(),this}var n={mode:"lg-slide",
// Ex : 'ease'
cssEasing:"ease",
//'for jquery animation'
easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,
// .lg-item || '.lg-sub-html'
appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,
/**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",
// 0, 1
index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};t.prototype.init=function(){var e=this;
// s.preload should not be more than $item.length
e.s.preload>e.$items.length&&(e.s.preload=e.$items.length);
// if dynamic option is enabled execute immediately
var t=window.location.hash;0<t.indexOf("lg="+this.s.galleryId)&&(e.index=parseInt(t.split("&slide=")[1],10),v("body").addClass("lg-from-hash"),v("body").hasClass("lg-on")||(setTimeout(function(){e.build(e.index)}),v("body").addClass("lg-on"))),e.s.dynamic?(e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||0,
// prevent accidental double execution
v("body").hasClass("lg-on")||setTimeout(function(){e.build(e.index),v("body").addClass("lg-on")})):
// Using different namespace for click because click event should not unbind if selector is same object('this')
e.$items.on("click.lgcustom",function(t){
// For IE8
try{t.preventDefault(),t.preventDefault()}catch(e){t.returnValue=!1}e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||e.$items.index(this),
// prevent accidental double execution
v("body").hasClass("lg-on")||(e.build(e.index),v("body").addClass("lg-on"))})},t.prototype.build=function(e){var t=this;t.structure(),
// module constructor
v.each(v.fn.lightGallery.modules,function(e){t.modules[e]=new v.fn.lightGallery.modules[e](t.el)}),
// initiate slide function
t.slide(e,!1,!1,!1),t.s.keyPress&&t.keyPress(),1<t.$items.length?(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()):t.$slide.on("click.lg",function(){t.$el.trigger("onSlideClick.lg")}),t.counter(),t.closeGallery(),t.$el.trigger("onAfterOpen.lg"),
// Hide controllers if mouse doesn't move for some period
t.$outer.on("mousemove.lg click.lg touchstart.lg",function(){t.$outer.removeClass("lg-hide-items"),clearTimeout(t.hideBartimeout),
// Timeout will be cleared on each slide movement also
t.hideBartimeout=setTimeout(function(){t.$outer.addClass("lg-hide-items")},t.s.hideBarsDelay)}),t.$outer.trigger("mousemove.lg")},t.prototype.structure=function(){var e="",t="",n=0,i="",o,r=this;
// Create gallery items
for(v("body").append('<div class="lg-backdrop"></div>'),v(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),n=0;n<this.$items.length;n++)e+='<div class="lg-item"></div>';
// Create controlls
if(this.s.controls&&1<this.$items.length&&(t='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(i='<div class="lg-sub-html"></div>'),o='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+e+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+t+i+"</div></div>",v("body").append(o),this.$outer=v(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),
// Set mode lg-slide if use left is true;
this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),
// For fixed height gallery
r.setTop(),v(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){r.setTop()},100)}),
// add class lg-current to remove initial transition
this.$slide.eq(this.index).addClass("lg-current"),
// add Class for css support and transition mode
this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),
// Set speed 0 because no animation will happen if browser doesn't support css3
this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&1<this.$items.length&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var s=this.$outer.find(".lg-inner");s.css("transition-timing-function",this.s.cssEasing),s.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){v(".lg-backdrop").addClass("in")}),setTimeout(function(){r.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
// Store the current scroll top value to scroll back after closing the gallery..
this.prevScrollTop=v(window).scrollTop()},
// For fixed height gallery
t.prototype.setTop=function(){if("100%"!==this.s.height){var e=v(window).height(),t=(e-parseInt(this.s.height,10))/2,n=this.$outer.find(".lg");e>=parseInt(this.s.height,10)?n.css("top",t+"px"):n.css("top","0px")}},
// Find css3 support
t.prototype.doCss=function(){
// check for css animation support
var e;return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,n=0;for(n=0;n<e.length;n++)if(e[n]in t.style)return!0}()},
/**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
t.prototype.isVideo=function(e,t){var n;if(n=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e)return n?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(t+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),o=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),s=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:o?{vimeo:o}:r?{dailymotion:r}:s?{vk:s}:void 0},
/**
     *  @desc Create image counter
     *  Ex: 1/10
     */
t.prototype.counter=function(){this.s.counter&&v(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},
/**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
t.prototype.addHtml=function(e){var t=null,n,i;if(this.s.dynamic?this.s.dynamicEl[e].subHtmlUrl?n=this.s.dynamicEl[e].subHtmlUrl:t=this.s.dynamicEl[e].subHtml:(i=this.$items.eq(e)).attr("data-sub-html-url")?n=i.attr("data-sub-html-url"):(t=i.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!t&&(t=i.attr("title")||i.find("img").first().attr("alt"))),!n)if(null!=t){
// get first letter of subhtml
// if first letter starts with . or # get the html form the jQuery object
var o=t.substring(0,1);"."!==o&&"#"!==o||(t=this.s.subHtmlSelectorRelative&&!this.s.dynamic?i.find(t).html():v(t).html())}else t="";".lg-sub-html"===this.s.appendSubHtmlTo?n?this.$outer.find(this.s.appendSubHtmlTo).load(n):this.$outer.find(this.s.appendSubHtmlTo).html(t):n?this.$slide.eq(e).load(n):this.$slide.eq(e).append(t),
// Add lg-empty-html class if title doesn't exist
null!=t&&(""===t?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[e])},
/**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
t.prototype.preload=function(e){var t=1,n=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(n=1;n<=this.s.preload&&!(e-n<0);n++)this.loadContent(e-n,!1,0)},
/**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
t.prototype.loadContent=function(t,e,n){var i=this,o=!1,r,a,s,l,u,c,d=function(e){for(var t=[],n=[],i=0;i<e.length;i++){var o=e[i].split(" ");
// Manage empty space
""===o[0]&&o.splice(0,1),n.push(o[0]),t.push(o[1])}for(var r=v(window).width(),s=0;s<t.length;s++)if(parseInt(t[s],10)>r){a=n[s];break}};if(i.s.dynamic){var f;if(i.s.dynamicEl[t].poster&&(o=!0,s=i.s.dynamicEl[t].poster),c=i.s.dynamicEl[t].html,a=i.s.dynamicEl[t].src,i.s.dynamicEl[t].responsive)d(i.s.dynamicEl[t].responsive.split(","));l=i.s.dynamicEl[t].srcset,u=i.s.dynamicEl[t].sizes}else{var h;if(i.$items.eq(t).attr("data-poster")&&(o=!0,s=i.$items.eq(t).attr("data-poster")),c=i.$items.eq(t).attr("data-html"),a=i.$items.eq(t).attr("href")||i.$items.eq(t).attr("data-src"),i.$items.eq(t).attr("data-responsive"))d(i.$items.eq(t).attr("data-responsive").split(","));l=i.$items.eq(t).attr("data-srcset"),u=i.$items.eq(t).attr("data-sizes")}
//if (_src || _srcset || _sizes || _poster) {
var p=!1;i.s.dynamic?i.s.dynamicEl[t].iframe&&(p=!0):"true"===i.$items.eq(t).attr("data-iframe")&&(p=!0);var m=i.isVideo(a,t);if(!i.$slide.eq(t).hasClass("lg-loaded")){if(p)i.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+i.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(o){var g="";g=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",i.$slide.eq(t).prepend('<div class="lg-video-cont '+g+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+s+'" /></div></div>')}else m?(i.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),i.$el.trigger("hasVideo.lg",[t,a,c])):i.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>');if(i.$el.trigger("onAferAppendSlide.lg",[t]),r=i.$slide.eq(t).find(".lg-object"),u&&r.attr("sizes",u),l){r.attr("srcset",l);try{picturefill({elements:[r[0]]})}catch(e){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&i.addHtml(t),i.$slide.eq(t).addClass("lg-loaded")}i.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){
// For first time add some delay for displaying the start animation.
var e=0;
// Do not change the delay value because it is required for zoom plugin.
// If gallery opened from direct url (hash) speed value should be 0
n&&!v("body").hasClass("lg-from-hash")&&(e=n),setTimeout(function(){i.$slide.eq(t).addClass("lg-complete"),i.$el.trigger("onSlideItemLoad.lg",[t,n||0])},e)}),
// @todo check load state for html5 videos
m&&m.html5&&!o&&i.$slide.eq(t).addClass("lg-complete"),!0===e&&(i.$slide.eq(t).hasClass("lg-complete")?i.preload(t):i.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){i.preload(t)}))},
/**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    *   @param {String} direction - Direction of the slide(next/prev)
    */
t.prototype.slide=function(e,t,n,i){var o=this.$outer.find(".lg-current").index(),r=this;
// Prevent if multiple call
// Required for hsh plugin
if(!r.lGalleryOn||o!==e){var s=this.$slide.length,a=r.lGalleryOn?this.s.speed:0;if(!r.lgBusy){var l,u,c;if(this.s.download)(l=r.s.dynamic?!1!==r.s.dynamicEl[e].downloadUrl&&(r.s.dynamicEl[e].downloadUrl||r.s.dynamicEl[e].src):"false"!==r.$items.eq(e).attr("data-download-url")&&(r.$items.eq(e).attr("data-download-url")||r.$items.eq(e).attr("href")||r.$items.eq(e).attr("data-src")))?(v("#lg-download").attr("href",l),r.$outer.removeClass("lg-hide-download")):r.$outer.addClass("lg-hide-download");if(this.$el.trigger("onBeforeSlide.lg",[o,e,t,n]),r.lgBusy=!0,clearTimeout(r.hideBartimeout),
// Add title if this.s.appendSubHtmlTo === lg-sub-html
".lg-sub-html"===this.s.appendSubHtmlTo&&
// wait for slide animation to complete
setTimeout(function(){r.addHtml(e)},a),this.arrowDisable(e),i||(e<o?i="prev":o<e&&(i="next")),t)this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),2<s?(u=e-1,c=e+1,0===e&&o===s-1?(
// next slide
c=0,u=s-1):e===s-1&&0===o&&(
// prev slide
c=0,u=s-1)):(u=0,c=1),"prev"===i?r.$slide.eq(c).addClass("lg-next-slide"):r.$slide.eq(u).addClass("lg-prev-slide"),r.$slide.eq(e).addClass("lg-current");else
// remove all transitions
r.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===i?(
//prevslide
this.$slide.eq(e).addClass("lg-prev-slide"),this.$slide.eq(o).addClass("lg-next-slide")):(
// next slide
this.$slide.eq(e).addClass("lg-next-slide"),this.$slide.eq(o).addClass("lg-prev-slide")),
// give 50 ms for browser to add/remove class
setTimeout(function(){r.$slide.removeClass("lg-current"),
//_this.$slide.eq(_prevIndex).removeClass('lg-current');
r.$slide.eq(e).addClass("lg-current"),
// reset all transitions
r.$outer.removeClass("lg-no-trans")},50);r.lGalleryOn?(setTimeout(function(){r.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){r.lgBusy=!1,r.$el.trigger("onAfterSlide.lg",[o,e,t,n])},this.s.speed)):(r.loadContent(e,!0,r.s.backdropDuration),r.lgBusy=!1,r.$el.trigger("onAfterSlide.lg",[o,e,t,n])),r.lGalleryOn=!0,this.s.counter&&v("#lg-counter-current").text(e+1)}r.index=e}},
/**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
t.prototype.goToNextSlide=function(e){var t=this,n=t.s.loop;e&&t.$slide.length<3&&(n=!1),t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):n?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},
/**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
t.prototype.goToPrevSlide=function(e){var t=this,n=t.s.loop;e&&t.$slide.length<3&&(n=!1),t.lgBusy||(0<t.index?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):n?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},t.prototype.keyPress=function(){var t=this;1<this.$items.length&&v(window).on("keyup.lg",function(e){1<t.$items.length&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}),v(window).on("keydown.lg",function(e){!0===t.s.escKey&&27===e.keyCode&&(e.preventDefault(),t.$outer.hasClass("lg-thumb-open")?t.$outer.removeClass("lg-thumb-open"):t.destroy())})},t.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},t.prototype.arrowDisable=function(e){
// Disable arrows if s.hideControlOnEnd is true
!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),0<e?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},t.prototype.setTranslate=function(e,t,n){
// jQuery supports Automatic CSS prefixing since jQuery 1.8.0
this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+n+"px, 0px)"})},t.prototype.touchMove=function(e,t){var n=t-e;15<Math.abs(n)&&(
// reset opacity and transition duration
this.$outer.addClass("lg-dragging"),
// move current slide
this.setTranslate(this.$slide.eq(this.index),n,0),
// move next and prev slide with current slide
this.setTranslate(v(".lg-prev-slide"),-this.$slide.eq(this.index).width()+n,0),this.setTranslate(v(".lg-next-slide"),this.$slide.eq(this.index).width()+n,0))},t.prototype.touchEnd=function(e){var t=this;
// keep slide animation for any mode while dragg/swipe
"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),
// set transition duration
setTimeout(function(){t.$outer.removeClass("lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):0<e&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&
// Trigger click if distance is less than 5 pix
t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),
// remove slide class once drag/swipe is completed if mode is not slide
setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},t.prototype.enableSwipe=function(){var t=this,n=0,i=0,o=!1;t.s.enableSwipe&&t.doCss()&&(t.$slide.on("touchstart.lg",function(e){t.$outer.hasClass("lg-zoomed")||t.lgBusy||(e.preventDefault(),t.manageSwipeClass(),n=e.originalEvent.targetTouches[0].pageX)}),t.$slide.on("touchmove.lg",function(e){t.$outer.hasClass("lg-zoomed")||(e.preventDefault(),i=e.originalEvent.targetTouches[0].pageX,t.touchMove(n,i),o=!0)}),t.$slide.on("touchend.lg",function(){t.$outer.hasClass("lg-zoomed")||(o?(o=!1,t.touchEnd(i-n)):t.$el.trigger("onSlideClick.lg"))}))},t.prototype.enableDrag=function(){var t=this,n=0,i=0,o=!1,r=!1;t.s.enableDrag&&t.doCss()&&(t.$slide.on("mousedown.lg",function(e){t.$outer.hasClass("lg-zoomed")||t.lgBusy||v(e.target).text().trim()||(e.preventDefault(),t.manageSwipeClass(),n=e.pageX,o=!0,
// ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
t.$outer.scrollLeft+=1,t.$outer.scrollLeft-=1,
// *
t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),t.$el.trigger("onDragstart.lg"))}),v(window).on("mousemove.lg",function(e){o&&(r=!0,i=e.pageX,t.touchMove(n,i),t.$el.trigger("onDragmove.lg"))}),v(window).on("mouseup.lg",function(e){r?(r=!1,t.touchEnd(i-n),t.$el.trigger("onDragend.lg")):(v(e.target).hasClass("lg-object")||v(e.target).hasClass("lg-video-play"))&&t.$el.trigger("onSlideClick.lg"),
// Prevent execution on click
o&&(o=!1,t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},t.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1;this.s.loop&&2<this.$slide.length&&(0===this.index?t=this.$slide.length-1:this.index===this.$slide.length-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),-1<t&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},t.prototype.mousewheel=function(){var t=this;t.$outer.on("mousewheel.lg",function(e){e.deltaY&&(0<e.deltaY?t.goToPrevSlide():t.goToNextSlide(),e.preventDefault())})},t.prototype.closeGallery=function(){var t=this,n=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(
// If you drag the slide and release outside gallery gets close on chrome
// for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
t.$outer.on("mousedown.lg",function(e){n=!!(v(e.target).is(".lg-outer")||v(e.target).is(".lg-item ")||v(e.target).is(".lg-img-wrap"))}),t.$outer.on("mousemove.lg",function(){n=!1}),t.$outer.on("mouseup.lg",function(e){(v(e.target).is(".lg-outer")||v(e.target).is(".lg-item ")||v(e.target).is(".lg-img-wrap")&&n)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},t.prototype.destroy=function(e){var t=this;e||(t.$el.trigger("onBeforeClose.lg"),v(window).scrollTop(t.prevScrollTop))
/**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */,e&&(t.s.dynamic||
// only when not using dynamic mode is $items a jquery collection
this.$items.off("click.lg click.lgcustom"),v.removeData(t.el,"lightGallery")),
// Unbind all events added by lightGallery
this.$el.off(".lg.tm"),
// Distroy all lightGallery modules
v.each(v.fn.lightGallery.modules,function(e){t.modules[e]&&t.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,v(window).off(".lg"),v("body").removeClass("lg-on lg-from-hash"),t.$outer&&t.$outer.removeClass("lg-visible"),v(".lg-backdrop").removeClass("in"),setTimeout(function(){t.$outer&&t.$outer.remove(),v(".lg-backdrop").remove(),e||t.$el.trigger("onCloseAfter.lg")},t.s.backdropDuration+50)},v.fn.lightGallery=function(e){return this.each(function(){if(v.data(this,"lightGallery"))try{v(this).data("lightGallery").init()}catch(e){console.error("lightGallery has not initiated properly")}else v.data(this,"lightGallery",new t(this,e))})},v.fn.lightGallery.modules={}}()}),
/*! lg-autoplay - v1.0.4 - 2017-03-28
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
function(e,t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(e){return t(e)}):"object"==typeof exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=t(require("jquery")):t(jQuery)}(this,function(n){!function(){"use strict";var t={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},e=function(e){
// Execute only if items are above 1
return this.core=n(e).data("lightGallery"),this.$el=n(e),!(this.core.$items.length<2)&&(this.core.s=n.extend({},t,this.core.s),this.interval=!1,
// Identify if slide happened from autoplay
this.fromAuto=!0,
// Identify if autoplay canceled from touch/drag
this.canceledOnTouch=!1,
// save fourceautoplay value
this.fourceAutoplayTemp=this.core.s.fourceAutoplay,
// do not allow progress bar if browser does not support css3 transitions
this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};
/**
     * Creates the autoplay plugin.
     * @param {object} element - lightGallery element
     */e.prototype.init=function(){var e=this;
// append autoplay controls
e.core.s.autoplayControls&&e.controls(),
// Create progress bar
e.core.s.progressBar&&e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),
// set progress
e.progress(),
// Start autoplay
e.core.s.autoplay&&e.$el.one("onSlideItemLoad.lg.tm",function(){e.startlAuto()}),
// cancel interval on touchstart and dragstart
e.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){e.interval&&(e.cancelAuto(),e.canceledOnTouch=!0)}),
// restore autoplay if autoplay canceled from touchstart / dragstart
e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!e.interval&&e.canceledOnTouch&&(e.startlAuto(),e.canceledOnTouch=!1)})},e.prototype.progress=function(){var e=this,t,n;e.$el.on("onBeforeSlide.lg.tm",function(){
// start progress bar animation
e.core.s.progressBar&&e.fromAuto&&(t=e.core.$outer.find(".lg-progress-bar"),n=e.core.$outer.find(".lg-progress"),e.interval&&(n.removeAttr("style"),t.removeClass("lg-start"),setTimeout(function(){n.css("transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s"),t.addClass("lg-start")},20))),
// Remove setinterval if slide is triggered manually and fourceautoplay is false
e.fromAuto||e.core.s.fourceAutoplay||e.cancelAuto(),e.fromAuto=!1})},
// Manage autoplay via play/stop buttons
e.prototype.controls=function(){var e=this,t='<span class="lg-autoplay-button lg-icon"></span>';
// Append autoplay controls
n(this.core.s.appendAutoplayControlsTo).append(t),e.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){n(e.core.$outer).hasClass("lg-show-autoplay")?(e.cancelAuto(),e.core.s.fourceAutoplay=!1):e.interval||(e.startlAuto(),e.core.s.fourceAutoplay=e.fourceAutoplayTemp)})},
// Autostart gallery
e.prototype.startlAuto=function(){var e=this;e.core.$outer.find(".lg-progress").css("transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s"),e.core.$outer.addClass("lg-show-autoplay"),e.core.$outer.find(".lg-progress-bar").addClass("lg-start"),e.interval=setInterval(function(){e.core.index+1<e.core.$items.length?e.core.index++:e.core.index=0,e.fromAuto=!0,e.core.slide(e.core.index,!1,!1,"next")},e.core.s.speed+e.core.s.pause)},
// cancel Autostart
e.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},e.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},n.fn.lightGallery.modules.autoplay=e}()}),
/*! lg-video - v1.2.2 - 2018-05-01
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
function(e,t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=t(require("jquery")):t(e.jQuery)}(this,function(f){!function(){"use strict";function e(e,t,n,i){
/*jshint validthis:true */
var o=this;if(o.core.$slide.eq(t).find(".lg-video").append(o.loadVideo(n,"lg-object",!0,t,i)),i)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(t).find(".lg-html5").get(0),o.core.s.videojsOptions,function(){!o.videoLoaded&&o.core.s.autoplayFirstVideo&&this.play()})}catch(e){console.error("Make sure you have included videojs")}else!o.videoLoaded&&o.core.s.autoplayFirstVideo&&o.core.$slide.eq(t).find(".lg-html5").get(0).play()}function t(e,t){
/*jshint validthis:true */
var n=this.core.$slide.eq(t).find(".lg-video-cont");n.hasClass("lg-has-iframe")||(n.css("max-width",this.core.s.videoMaxWidth),this.videoLoaded=!0)}function n(e,t,n){
/*jshint validthis:true */
var i=this,o=i.core.$slide.eq(t),r=o.find(".lg-youtube").get(0),s=o.find(".lg-vimeo").get(0),a=o.find(".lg-dailymotion").get(0),l=o.find(".lg-vk").get(0),u=o.find(".lg-html5").get(0),c;if(r)r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(s)try{$f(s).api("pause")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(a)a.contentWindow.postMessage("pause","*");else if(u)if(i.core.s.videojs)try{videojs(u).pause()}catch(e){console.error("Make sure you have included videojs")}else u.pause();l&&f(l).attr("src",f(l).attr("src").replace("&autoplay","&noplay")),c=i.core.s.dynamic?i.core.s.dynamicEl[n].src:i.core.$items.eq(n).attr("href")||i.core.$items.eq(n).attr("data-src");var d=i.core.isVideo(c,n)||{};(d.youtube||d.vimeo||d.dailymotion||d.vk)&&i.core.$outer.addClass("lg-hide-download")}var i={videoMaxWidth:"855px",autoplayFirstVideo:!0,youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},o=function(e){return this.core=f(e).data("lightGallery"),this.$el=f(e),this.core.s=f.extend({},i,this.core.s),this.videoLoaded=!1,this.init(),this};o.prototype.init=function(){var i=this;
// Event triggered when video url found without poster
i.core.$el.on("hasVideo.lg.tm",e.bind(this)),
// Set max width for video
i.core.$el.on("onAferAppendSlide.lg.tm",t.bind(this)),i.core.doCss()&&1<i.core.$items.length&&(i.core.s.enableSwipe||i.core.s.enableDrag)?i.core.$el.on("onSlideClick.lg.tm",function(){var e=i.core.$slide.eq(i.core.index);i.loadVideoOnclick(e)}):
// For IE 9 and bellow
i.core.$slide.on("click.lg",function(){i.loadVideoOnclick(f(this))}),i.core.$el.on("onBeforeSlide.lg.tm",n.bind(this)),i.core.$el.on("onAfterSlide.lg.tm",function(e,t){i.core.$slide.eq(t).removeClass("lg-video-playing")}),i.core.s.autoplayFirstVideo&&i.core.$el.on("onAferAppendSlide.lg.tm",function(e,t){if(!i.core.lGalleryOn){var n=i.core.$slide.eq(t);setTimeout(function(){i.loadVideoOnclick(n)},100)}})},o.prototype.loadVideo=function(e,t,n,i,o){var r="",s=1,a="",l=this.core.isVideo(e,i)||{};if(
// Enable autoplay based on setting for first video if poster doesn't exist
n&&(s=this.videoLoaded?0:this.core.s.autoplayFirstVideo?1:0),l.youtube)a="?wmode=opaque&autoplay="+s+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(a=a+"&"+f.param(this.core.s.youtubePlayerParams)),r='<iframe class="lg-video-object lg-youtube '+t+'" width="560" height="315" src="//www.youtube.com/embed/'+l.youtube[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(l.vimeo)a="?autoplay="+s+"&api=1",this.core.s.vimeoPlayerParams&&(a=a+"&"+f.param(this.core.s.vimeoPlayerParams)),r='<iframe class="lg-video-object lg-vimeo '+t+'" width="560" height="315"  src="//player.vimeo.com/video/'+l.vimeo[1]+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(l.dailymotion)a="?wmode=opaque&autoplay="+s+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(a=a+"&"+f.param(this.core.s.dailymotionPlayerParams)),r='<iframe class="lg-video-object lg-dailymotion '+t+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+l.dailymotion[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(l.html5){var u=o.substring(0,1);"."!==u&&"#"!==u||(o=f(o).html()),r=o}else l.vk&&(a="&autoplay="+s,this.core.s.vkPlayerParams&&(a=a+"&"+f.param(this.core.s.vkPlayerParams)),r='<iframe class="lg-video-object lg-vk '+t+'" width="560" height="315" src="//vk.com/video_ext.php?'+l.vk[1]+a+'" frameborder="0" allowfullscreen></iframe>');return r},o.prototype.loadVideoOnclick=function(n){var i=this;
// check slide has poster
if(n.find(".lg-object").hasClass("lg-has-poster")&&n.find(".lg-object").is(":visible"))
// check already video element present
if(n.hasClass("lg-has-video")){var e=n.find(".lg-youtube").get(0),t=n.find(".lg-vimeo").get(0),o=n.find(".lg-dailymotion").get(0),r=n.find(".lg-html5").get(0);if(e)e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(t)try{$f(t).api("play")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(o)o.contentWindow.postMessage("play","*");else if(r)if(i.core.s.videojs)try{videojs(r).play()}catch(e){console.error("Make sure you have included videojs")}else r.play();n.addClass("lg-video-playing")}else{var s,a;n.addClass("lg-video-playing lg-has-video");var l=function(e,t){if(n.find(".lg-video").append(i.loadVideo(e,"",!1,i.core.index,t)),t)if(i.core.s.videojs)try{videojs(i.core.$slide.eq(i.core.index).find(".lg-html5").get(0),i.core.s.videojsOptions,function(){this.play()})}catch(e){console.error("Make sure you have included videojs")}else i.core.$slide.eq(i.core.index).find(".lg-html5").get(0).play()};i.core.s.dynamic?l(s=i.core.s.dynamicEl[i.core.index].src,a=i.core.s.dynamicEl[i.core.index].html):l(s=i.core.$items.eq(i.core.index).attr("href")||i.core.$items.eq(i.core.index).attr("data-src"),a=i.core.$items.eq(i.core.index).attr("data-html"));var u=n.find(".lg-object");n.find(".lg-video").append(u),
// @todo loading icon for html5 videos also
// for showing the loading indicator while loading video
n.find(".lg-video-object").hasClass("lg-html5")||(n.removeClass("lg-complete"),n.find(".lg-video-object").on("load.lg error.lg",function(){n.addClass("lg-complete")}))}},o.prototype.destroy=function(){this.videoLoaded=!1},f.fn.lightGallery.modules.video=o}()}),$(document).ready(function(){function e(){
// Foundation
// ----------
Foundation.Interchange.SPECIAL_QUERIES["medium-retina"]="only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["large-retina"]="only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xlarge-retina"]="only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xxlarge-retina"]="only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",$(document).foundation(),
// 2. Animate on Scroll
// --------------------
$(function(){AOS.init({offset:64,easing:"ease-in-out-quart",duration:600})}),$(function(){window.addEventListener("load",AOS.refresh)}),$(".video").lightGallery({counter:!1,youtubePlayerParams:{modestbranding:1,showinfo:0,rel:0,controls:0},vimeoPlayerParams:{autoplay:0,title:0,byline:0,portrait:0,color:"FFFFFF"}})}
// Run once
// ---------------------------------------------
// ---------------------------------------------
// Page Transitions
// ---------------------------------------------
var t;e(),new Swup({animationSelector:'[class*="swup-transition-"]',elements:["#main, #maintest"]}).on("contentReplaced",function(){e()})});