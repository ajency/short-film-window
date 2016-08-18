//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
//! moment.js
//! version : 2.11.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    // internal storage for locale config files
    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function get_set__set (mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        return isArray(this._months) ? this._months[m.month()] :
            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(utils_hooks__hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        if (!valid__isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(utils_hooks__hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             if (this.isValid() && other.isValid()) {
                 return other < this ? this : other;
             } else {
                 return valid__createInvalid();
             }
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = ((string || '').match(matcher) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(matchOffset, this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this > +localInput;
        } else {
            return +localInput < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this < +localInput;
        } else {
            return +this.clone().endOf(units) < +localInput;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return +this === +localInput;
        } else {
            inputMs = +localInput;
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // JSON.stringify(new Date(NaN)) === 'null'
        return this.isValid() ? this.toISOString() : 'null';
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        // console.log("got", weekYear, week, weekday, "set", date.toISOString());
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = local__createLocal([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add               = add_subtract__add;
    momentPrototype__proto.calendar          = moment_calendar__calendar;
    momentPrototype__proto.clone             = clone;
    momentPrototype__proto.diff              = diff;
    momentPrototype__proto.endOf             = endOf;
    momentPrototype__proto.format            = format;
    momentPrototype__proto.from              = from;
    momentPrototype__proto.fromNow           = fromNow;
    momentPrototype__proto.to                = to;
    momentPrototype__proto.toNow             = toNow;
    momentPrototype__proto.get               = getSet;
    momentPrototype__proto.invalidAt         = invalidAt;
    momentPrototype__proto.isAfter           = isAfter;
    momentPrototype__proto.isBefore          = isBefore;
    momentPrototype__proto.isBetween         = isBetween;
    momentPrototype__proto.isSame            = isSame;
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
    momentPrototype__proto.isValid           = moment_valid__isValid;
    momentPrototype__proto.lang              = lang;
    momentPrototype__proto.locale            = locale;
    momentPrototype__proto.localeData        = localeData;
    momentPrototype__proto.max               = prototypeMax;
    momentPrototype__proto.min               = prototypeMin;
    momentPrototype__proto.parsingFlags      = parsingFlags;
    momentPrototype__proto.set               = getSet;
    momentPrototype__proto.startOf           = startOf;
    momentPrototype__proto.subtract          = add_subtract__subtract;
    momentPrototype__proto.toArray           = toArray;
    momentPrototype__proto.toObject          = toObject;
    momentPrototype__proto.toDate            = toDate;
    momentPrototype__proto.toISOString       = moment_format__toISOString;
    momentPrototype__proto.toJSON            = toJSON;
    momentPrototype__proto.toString          = toString;
    momentPrototype__proto.unix              = unix;
    momentPrototype__proto.valueOf           = to_type__valueOf;
    momentPrototype__proto.creationData      = creationData;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months            =        localeMonths;
    prototype__proto._months           = defaultLocaleMonths;
    prototype__proto.monthsShort       =        localeMonthsShort;
    prototype__proto._monthsShort      = defaultLocaleMonthsShort;
    prototype__proto.monthsParse       =        localeMonthsParse;
    prototype__proto._monthsRegex      = defaultMonthsRegex;
    prototype__proto.monthsRegex       = monthsRegex;
    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
    prototype__proto.monthsShortRegex  = monthsShortRegex;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes <= 1           && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   <= 1           && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    <= 1           && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  <= 1           && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   <= 1           && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.11.1';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.now                   = now;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.prototype             = momentPrototype;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var r;return e(this).each(function(){var e=new t(this,a);r||(r=e)}),r}}var a,t=function(e,i){function s(e){return Math.floor(e)}function n(){b.autoplayTimeoutId=setTimeout(function(){b.params.loop?(b.fixLoop(),b._slideNext(),b.emit("onAutoplay",b)):b.isEnd?i.autoplayStopOnLast?b.stopAutoplay():(b._slideTo(0),b.emit("onAutoplay",b)):(b._slideNext(),b.emit("onAutoplay",b))},b.params.autoplay)}function o(e,t){var r=a(e.target);if(!r.is(t))if("string"==typeof t)r=r.parents(t);else if(t.nodeType){var i;return r.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==r.length)return r[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){b.onResize(!0),b.emit("onObserverUpdate",b,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),b.observers.push(r)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!b.params.allowSwipeToNext&&(b.isHorizontal()&&39===a||!b.isHorizontal()&&40===a))return!1;if(!b.params.allowSwipeToPrev&&(b.isHorizontal()&&37===a||!b.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(b.container.parents(".swiper-slide").length>0&&0===b.container.parents(".swiper-slide-active").length)return;var r={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,s=window.innerHeight,n=b.container.offset();b.rtl&&(n.left=n.left-b.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+b.width,n.top],[n.left,n.top+b.height],[n.left+b.width,n.top+b.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=r.left&&p[0]<=r.left+i&&p[1]>=r.top&&p[1]<=r.top+s&&(t=!0)}if(!t)return}b.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!b.rtl||37===a&&b.rtl)&&b.slideNext(),(37===a&&!b.rtl||39===a&&b.rtl)&&b.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&b.slideNext(),38===a&&b.slidePrev())}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=b.mousewheel.event,t=0,r=b.rtl?-1:1;if("mousewheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*r}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*r:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*r}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*r:-e.deltaY;if(0!==t){if(b.params.mousewheelInvert&&(t=-t),b.params.freeMode){var i=b.getWrapperTranslate()+t*b.params.mousewheelSensitivity,s=b.isBeginning,n=b.isEnd;if(i>=b.minTranslate()&&(i=b.minTranslate()),i<=b.maxTranslate()&&(i=b.maxTranslate()),b.setWrapperTransition(0),b.setWrapperTranslate(i),b.updateProgress(),b.updateActiveIndex(),(!s&&b.isBeginning||!n&&b.isEnd)&&b.updateClasses(),b.params.freeModeSticky?(clearTimeout(b.mousewheel.timeout),b.mousewheel.timeout=setTimeout(function(){b.slideReset()},300)):b.params.lazyLoading&&b.lazy&&b.lazy.load(),0===i||i===b.maxTranslate())return}else{if((new window.Date).getTime()-b.mousewheel.lastScrollTime>60)if(0>t)if(b.isEnd&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slideNext();else if(b.isBeginning&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slidePrev();b.mousewheel.lastScrollTime=(new window.Date).getTime()}return b.params.autoplay&&b.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(e,t){e=a(e);var r,i,s,n=b.rtl?-1:1;r=e.attr("data-swiper-parallax")||"0",i=e.attr("data-swiper-parallax-x"),s=e.attr("data-swiper-parallax-y"),i||s?(i=i||"0",s=s||"0"):b.isHorizontal()?(i=r,s="0"):(s=r,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",e.transform("translate3d("+i+", "+s+",0px)")}function c(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,i);var m={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=i&&i.virtualTranslate;i=i||{};var f={};for(var g in i)if("object"!=typeof i[g]||null===i[g]||(i[g].nodeType||i[g]===window||i[g]===document||"undefined"!=typeof r&&i[g]instanceof r||"undefined"!=typeof jQuery&&i[g]instanceof jQuery))f[g]=i[g];else{f[g]={};for(var v in i[g])f[g][v]=i[g][v]}for(var w in m)if("undefined"==typeof i[w])i[w]=m[w];else if("object"==typeof i[w])for(var y in m[w])"undefined"==typeof i[w][y]&&(i[w][y]=m[w][y]);var b=this;if(b.params=i,b.originalParams=f,b.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof r&&(a=r),("undefined"!=typeof a||(a="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r))&&(b.$=a,b.currentBreakpoint=void 0,b.getActiveBreakpoint=function(){if(!b.params.breakpoints)return!1;var e,a=!1,t=[];for(e in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var r=0;r<t.length;r++)e=t[r],e>=window.innerWidth&&!a&&(a=e);return a||"max"},b.setBreakpoint=function(){var e=b.getActiveBreakpoint();if(e&&b.currentBreakpoint!==e){var a=e in b.params.breakpoints?b.params.breakpoints[e]:b.originalParams,t=b.params.loop&&a.slidesPerView!==b.params.slidesPerView;for(var r in a)b.params[r]=a[r];b.currentBreakpoint=e,t&&b.destroyLoop&&b.reLoop(!0)}},b.params.breakpoints&&b.setBreakpoint(),b.container=a(e),0!==b.container.length)){if(b.container.length>1){var x=[];return b.container.each(function(){x.push(new t(this,i))}),x}b.container[0].swiper=b,b.container.data("swiper",b),b.classNames.push("swiper-container-"+b.params.direction),b.params.freeMode&&b.classNames.push("swiper-container-free-mode"),b.support.flexbox||(b.classNames.push("swiper-container-no-flexbox"),b.params.slidesPerColumn=1),b.params.autoHeight&&b.classNames.push("swiper-container-autoheight"),(b.params.parallax||b.params.watchSlidesVisibility)&&(b.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(b.params.effect)>=0&&(b.support.transforms3d?(b.params.watchSlidesProgress=!0,b.classNames.push("swiper-container-3d")):b.params.effect="slide"),"slide"!==b.params.effect&&b.classNames.push("swiper-container-"+b.params.effect),"cube"===b.params.effect&&(b.params.resistanceRatio=0,b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.centeredSlides=!1,b.params.spaceBetween=0,b.params.virtualTranslate=!0,b.params.setWrapperSize=!1),("fade"===b.params.effect||"flip"===b.params.effect)&&(b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.watchSlidesProgress=!0,b.params.spaceBetween=0,b.params.setWrapperSize=!1,"undefined"==typeof h&&(b.params.virtualTranslate=!0)),b.params.grabCursor&&b.support.touch&&(b.params.grabCursor=!1),b.wrapper=b.container.children("."+b.params.wrapperClass),b.params.pagination&&(b.paginationContainer=a(b.params.pagination),b.params.uniqueNavElements&&"string"==typeof b.params.pagination&&b.paginationContainer.length>1&&1===b.container.find(b.params.pagination).length&&(b.paginationContainer=b.container.find(b.params.pagination)),"bullets"===b.params.paginationType&&b.params.paginationClickable?b.paginationContainer.addClass("swiper-pagination-clickable"):b.params.paginationClickable=!1,b.paginationContainer.addClass("swiper-pagination-"+b.params.paginationType)),(b.params.nextButton||b.params.prevButton)&&(b.params.nextButton&&(b.nextButton=a(b.params.nextButton),b.params.uniqueNavElements&&"string"==typeof b.params.nextButton&&b.nextButton.length>1&&1===b.container.find(b.params.nextButton).length&&(b.nextButton=b.container.find(b.params.nextButton))),b.params.prevButton&&(b.prevButton=a(b.params.prevButton),b.params.uniqueNavElements&&"string"==typeof b.params.prevButton&&b.prevButton.length>1&&1===b.container.find(b.params.prevButton).length&&(b.prevButton=b.container.find(b.params.prevButton)))),b.isHorizontal=function(){return"horizontal"===b.params.direction},b.rtl=b.isHorizontal()&&("rtl"===b.container[0].dir.toLowerCase()||"rtl"===b.container.css("direction")),b.rtl&&b.classNames.push("swiper-container-rtl"),b.rtl&&(b.wrongRTL="-webkit-box"===b.wrapper.css("display")),b.params.slidesPerColumn>1&&b.classNames.push("swiper-container-multirow"),b.device.android&&b.classNames.push("swiper-container-android"),b.container.addClass(b.classNames.join(" ")),b.translate=0,b.progress=0,b.velocity=0,b.lockSwipeToNext=function(){b.params.allowSwipeToNext=!1},b.lockSwipeToPrev=function(){b.params.allowSwipeToPrev=!1},b.lockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!1},b.unlockSwipeToNext=function(){b.params.allowSwipeToNext=!0},b.unlockSwipeToPrev=function(){b.params.allowSwipeToPrev=!0},b.unlockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!0},b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab"),b.imagesToLoad=[],b.imagesLoaded=0,b.loadImage=function(e,a,t,r,i){function s(){i&&i()}var n;e.complete&&r?s():a?(n=new window.Image,n.onload=s,n.onerror=s,t&&(n.srcset=t),a&&(n.src=a)):s()},b.preloadImages=function(){function e(){"undefined"!=typeof b&&null!==b&&(void 0!==b.imagesLoaded&&b.imagesLoaded++,b.imagesLoaded===b.imagesToLoad.length&&(b.params.updateOnImagesReady&&b.update(),b.emit("onImagesReady",b)))}b.imagesToLoad=b.container.find("img");for(var a=0;a<b.imagesToLoad.length;a++)b.loadImage(b.imagesToLoad[a],b.imagesToLoad[a].currentSrc||b.imagesToLoad[a].getAttribute("src"),b.imagesToLoad[a].srcset||b.imagesToLoad[a].getAttribute("srcset"),!0,e)},b.autoplayTimeoutId=void 0,b.autoplaying=!1,b.autoplayPaused=!1,b.startAutoplay=function(){return"undefined"!=typeof b.autoplayTimeoutId?!1:b.params.autoplay?b.autoplaying?!1:(b.autoplaying=!0,b.emit("onAutoplayStart",b),void n()):!1},b.stopAutoplay=function(e){b.autoplayTimeoutId&&(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplaying=!1,b.autoplayTimeoutId=void 0,b.emit("onAutoplayStop",b))},b.pauseAutoplay=function(e){b.autoplayPaused||(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplayPaused=!0,0===e?(b.autoplayPaused=!1,n()):b.wrapper.transitionEnd(function(){b&&(b.autoplayPaused=!1,b.autoplaying?n():b.stopAutoplay())}))},b.minTranslate=function(){return-b.snapGrid[0]},b.maxTranslate=function(){return-b.snapGrid[b.snapGrid.length-1]},b.updateAutoHeight=function(){var e=b.slides.eq(b.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&b.wrapper.css("height",a+"px")}},b.updateContainerSize=function(){var e,a;e="undefined"!=typeof b.params.width?b.params.width:b.container[0].clientWidth,a="undefined"!=typeof b.params.height?b.params.height:b.container[0].clientHeight,0===e&&b.isHorizontal()||0===a&&!b.isHorizontal()||(e=e-parseInt(b.container.css("padding-left"),10)-parseInt(b.container.css("padding-right"),10),a=a-parseInt(b.container.css("padding-top"),10)-parseInt(b.container.css("padding-bottom"),10),b.width=e,b.height=a,b.size=b.isHorizontal()?b.width:b.height)},b.updateSlidesSize=function(){b.slides=b.wrapper.children("."+b.params.slideClass),b.snapGrid=[],b.slidesGrid=[],b.slidesSizesGrid=[];var e,a=b.params.spaceBetween,t=-b.params.slidesOffsetBefore,r=0,i=0;if("undefined"!=typeof b.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*b.size),b.virtualSize=-a,b.rtl?b.slides.css({marginLeft:"",marginTop:""}):b.slides.css({marginRight:"",marginBottom:""});var n;b.params.slidesPerColumn>1&&(n=Math.floor(b.slides.length/b.params.slidesPerColumn)===b.slides.length/b.params.slidesPerColumn?b.slides.length:Math.ceil(b.slides.length/b.params.slidesPerColumn)*b.params.slidesPerColumn,"auto"!==b.params.slidesPerView&&"row"===b.params.slidesPerColumnFill&&(n=Math.max(n,b.params.slidesPerView*b.params.slidesPerColumn)));var o,l=b.params.slidesPerColumn,p=n/l,d=p-(b.params.slidesPerColumn*p-b.slides.length);for(e=0;e<b.slides.length;e++){o=0;var u=b.slides.eq(e);if(b.params.slidesPerColumn>1){var c,m,h;"column"===b.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css({"margin-top":0!==h&&b.params.spaceBetween&&b.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===b.params.slidesPerView?(o=b.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),b.params.roundLengths&&(o=s(o))):(o=(b.size-(b.params.slidesPerView-1)*a)/b.params.slidesPerView,b.params.roundLengths&&(o=s(o)),b.isHorizontal()?b.slides[e].style.width=o+"px":b.slides[e].style.height=o+"px"),b.slides[e].swiperSlideSize=o,b.slidesSizesGrid.push(o),b.params.centeredSlides?(t=t+o/2+r/2+a,0===e&&(t=t-b.size/2-a),Math.abs(t)<.001&&(t=0),i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t)):(i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t),t=t+o+a),b.virtualSize+=o+a,r=o,i++)}b.virtualSize=Math.max(b.virtualSize,b.size)+b.params.slidesOffsetAfter;var f;if(b.rtl&&b.wrongRTL&&("slide"===b.params.effect||"coverflow"===b.params.effect)&&b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),(!b.support.flexbox||b.params.setWrapperSize)&&(b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"})),b.params.slidesPerColumn>1&&(b.virtualSize=(o+b.params.spaceBetween)*n,b.virtualSize=Math.ceil(b.virtualSize/b.params.slidesPerColumn)-b.params.spaceBetween,b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),b.params.centeredSlides)){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<b.virtualSize+b.snapGrid[0]&&f.push(b.snapGrid[e]);b.snapGrid=f}if(!b.params.centeredSlides){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<=b.virtualSize-b.size&&f.push(b.snapGrid[e]);b.snapGrid=f,Math.floor(b.virtualSize-b.size)-Math.floor(b.snapGrid[b.snapGrid.length-1])>1&&b.snapGrid.push(b.virtualSize-b.size)}0===b.snapGrid.length&&(b.snapGrid=[0]),0!==b.params.spaceBetween&&(b.isHorizontal()?b.rtl?b.slides.css({marginLeft:a+"px"}):b.slides.css({marginRight:a+"px"}):b.slides.css({marginBottom:a+"px"})),b.params.watchSlidesProgress&&b.updateSlidesOffset()}},b.updateSlidesOffset=function(){for(var e=0;e<b.slides.length;e++)b.slides[e].swiperSlideOffset=b.isHorizontal()?b.slides[e].offsetLeft:b.slides[e].offsetTop},b.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=b.translate||0),0!==b.slides.length){"undefined"==typeof b.slides[0].swiperSlideOffset&&b.updateSlidesOffset();var a=-e;b.rtl&&(a=e),b.slides.removeClass(b.params.slideVisibleClass);for(var t=0;t<b.slides.length;t++){var r=b.slides[t],i=(a-r.swiperSlideOffset)/(r.swiperSlideSize+b.params.spaceBetween);if(b.params.watchSlidesVisibility){var s=-(a-r.swiperSlideOffset),n=s+b.slidesSizesGrid[t],o=s>=0&&s<b.size||n>0&&n<=b.size||0>=s&&n>=b.size;o&&b.slides.eq(t).addClass(b.params.slideVisibleClass)}r.progress=b.rtl?-i:i}}},b.updateProgress=function(e){"undefined"==typeof e&&(e=b.translate||0);var a=b.maxTranslate()-b.minTranslate(),t=b.isBeginning,r=b.isEnd;0===a?(b.progress=0,b.isBeginning=b.isEnd=!0):(b.progress=(e-b.minTranslate())/a,b.isBeginning=b.progress<=0,b.isEnd=b.progress>=1),b.isBeginning&&!t&&b.emit("onReachBeginning",b),b.isEnd&&!r&&b.emit("onReachEnd",b),b.params.watchSlidesProgress&&b.updateSlidesProgress(e),b.emit("onProgress",b,b.progress)},b.updateActiveIndex=function(){var e,a,t,r=b.rtl?b.translate:-b.translate;for(a=0;a<b.slidesGrid.length;a++)"undefined"!=typeof b.slidesGrid[a+1]?r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]-(b.slidesGrid[a+1]-b.slidesGrid[a])/2?e=a:r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]&&(e=a+1):r>=b.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/b.params.slidesPerGroup),t>=b.snapGrid.length&&(t=b.snapGrid.length-1),e!==b.activeIndex&&(b.snapIndex=t,b.previousIndex=b.activeIndex,b.activeIndex=e,b.updateClasses())},b.updateClasses=function(){b.slides.removeClass(b.params.slideActiveClass+" "+b.params.slideNextClass+" "+b.params.slidePrevClass);var e=b.slides.eq(b.activeIndex);e.addClass(b.params.slideActiveClass);var t=e.next("."+b.params.slideClass).addClass(b.params.slideNextClass);b.params.loop&&0===t.length&&b.slides.eq(0).addClass(b.params.slideNextClass);var r=e.prev("."+b.params.slideClass).addClass(b.params.slidePrevClass);if(b.params.loop&&0===r.length&&b.slides.eq(-1).addClass(b.params.slidePrevClass),b.paginationContainer&&b.paginationContainer.length>0){var i,s=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length;if(b.params.loop?(i=Math.ceil((b.activeIndex-b.loopedSlides)/b.params.slidesPerGroup),i>b.slides.length-1-2*b.loopedSlides&&(i-=b.slides.length-2*b.loopedSlides),i>s-1&&(i-=s),0>i&&"bullets"!==b.params.paginationType&&(i=s+i)):i="undefined"!=typeof b.snapIndex?b.snapIndex:b.activeIndex||0,"bullets"===b.params.paginationType&&b.bullets&&b.bullets.length>0&&(b.bullets.removeClass(b.params.bulletActiveClass),b.paginationContainer.length>1?b.bullets.each(function(){a(this).index()===i&&a(this).addClass(b.params.bulletActiveClass)}):b.bullets.eq(i).addClass(b.params.bulletActiveClass)),"fraction"===b.params.paginationType&&(b.paginationContainer.find("."+b.params.paginationCurrentClass).text(i+1),b.paginationContainer.find("."+b.params.paginationTotalClass).text(s)),"progress"===b.params.paginationType){var n=(i+1)/s,o=n,l=1;b.isHorizontal()||(l=n,o=1),b.paginationContainer.find("."+b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(b.params.speed)}"custom"===b.params.paginationType&&b.params.paginationCustomRender&&(b.paginationContainer.html(b.params.paginationCustomRender(b,i+1,s)),b.emit("onPaginationRendered",b,b.paginationContainer[0]))}b.params.loop||(b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.isBeginning?(b.prevButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.prevButton)):(b.prevButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.prevButton))),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.isEnd?(b.nextButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.nextButton)):(b.nextButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.nextButton))))},b.updatePagination=function(){if(b.params.pagination&&b.paginationContainer&&b.paginationContainer.length>0){var e="";if("bullets"===b.params.paginationType){for(var a=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length,t=0;a>t;t++)e+=b.params.paginationBulletRender?b.params.paginationBulletRender(t,b.params.bulletClass):"<"+b.params.paginationElement+' class="'+b.params.bulletClass+'"></'+b.params.paginationElement+">";b.paginationContainer.html(e),b.bullets=b.paginationContainer.find("."+b.params.bulletClass),b.params.paginationClickable&&b.params.a11y&&b.a11y&&b.a11y.initPagination()}"fraction"===b.params.paginationType&&(e=b.params.paginationFractionRender?b.params.paginationFractionRender(b,b.params.paginationCurrentClass,b.params.paginationTotalClass):'<span class="'+b.params.paginationCurrentClass+'"></span> / <span class="'+b.params.paginationTotalClass+'"></span>',b.paginationContainer.html(e)),"progress"===b.params.paginationType&&(e=b.params.paginationProgressRender?b.params.paginationProgressRender(b,b.params.paginationProgressbarClass):'<span class="'+b.params.paginationProgressbarClass+'"></span>',b.paginationContainer.html(e)),"custom"!==b.params.paginationType&&b.emit("onPaginationRendered",b,b.paginationContainer[0])}},b.update=function(e){function a(){r=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate()),b.setWrapperTranslate(r),b.updateActiveIndex(),b.updateClasses()}if(b.updateContainerSize(),b.updateSlidesSize(),b.updateProgress(),b.updatePagination(),b.updateClasses(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),e){var t,r;b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode?(a(),b.params.autoHeight&&b.updateAutoHeight()):(t=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0),t||a())}else b.params.autoHeight&&b.updateAutoHeight()},b.onResize=function(e){b.params.breakpoints&&b.setBreakpoint();var a=b.params.allowSwipeToPrev,t=b.params.allowSwipeToNext;b.params.allowSwipeToPrev=b.params.allowSwipeToNext=!0,b.updateContainerSize(),b.updateSlidesSize(),("auto"===b.params.slidesPerView||b.params.freeMode||e)&&b.updatePagination(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),b.controller&&b.controller.spline&&(b.controller.spline=void 0);var r=!1;if(b.params.freeMode){var i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate());b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses(),b.params.autoHeight&&b.updateAutoHeight()}else b.updateClasses(),r=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0);b.params.lazyLoading&&!r&&b.lazy&&b.lazy.load(),b.params.allowSwipeToPrev=a,b.params.allowSwipeToNext=t};var T=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?T=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(T=["MSPointerDown","MSPointerMove","MSPointerUp"]),b.touchEvents={start:b.support.touch||!b.params.simulateTouch?"touchstart":T[0],move:b.support.touch||!b.params.simulateTouch?"touchmove":T[1],end:b.support.touch||!b.params.simulateTouch?"touchend":T[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===b.params.touchEventsTarget?b.container:b.wrapper).addClass("swiper-wp8-"+b.params.direction),b.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===b.params.touchEventsTarget?b.container[0]:b.wrapper[0],s=b.support.touch?r:document,n=b.params.nested?!0:!1;b.browser.ie?(r[t](b.touchEvents.start,b.onTouchStart,!1),s[t](b.touchEvents.move,b.onTouchMove,n),s[t](b.touchEvents.end,b.onTouchEnd,!1)):(b.support.touch&&(r[t](b.touchEvents.start,b.onTouchStart,!1),r[t](b.touchEvents.move,b.onTouchMove,n),r[t](b.touchEvents.end,b.onTouchEnd,!1)),!i.simulateTouch||b.device.ios||b.device.android||(r[t]("mousedown",b.onTouchStart,!1),document[t]("mousemove",b.onTouchMove,n),document[t]("mouseup",b.onTouchEnd,!1))),window[t]("resize",b.onResize),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.nextButton[a]("click",b.onClickNext),b.params.a11y&&b.a11y&&b.nextButton[a]("keydown",b.a11y.onEnterKey)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.prevButton[a]("click",b.onClickPrev),b.params.a11y&&b.a11y&&b.prevButton[a]("keydown",b.a11y.onEnterKey)),b.params.pagination&&b.params.paginationClickable&&(b.paginationContainer[a]("click","."+b.params.bulletClass,b.onClickIndex),b.params.a11y&&b.a11y&&b.paginationContainer[a]("keydown","."+b.params.bulletClass,b.a11y.onEnterKey)),(b.params.preventClicks||b.params.preventClicksPropagation)&&r[t]("click",b.preventClicks,!0)},b.attachEvents=function(){b.initEvents()},b.detachEvents=function(){b.initEvents(!0)},b.allowClick=!0,b.preventClicks=function(e){b.allowClick||(b.params.preventClicks&&e.preventDefault(),b.params.preventClicksPropagation&&b.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},b.onClickNext=function(e){e.preventDefault(),(!b.isEnd||b.params.loop)&&b.slideNext()},b.onClickPrev=function(e){e.preventDefault(),(!b.isBeginning||b.params.loop)&&b.slidePrev()},b.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*b.params.slidesPerGroup;b.params.loop&&(t+=b.loopedSlides),b.slideTo(t)},b.updateClickedSlide=function(e){var t=o(e,"."+b.params.slideClass),r=!1;if(t)for(var i=0;i<b.slides.length;i++)b.slides[i]===t&&(r=!0);if(!t||!r)return b.clickedSlide=void 0,void(b.clickedIndex=void 0);if(b.clickedSlide=t,b.clickedIndex=a(t).index(),b.params.slideToClickedSlide&&void 0!==b.clickedIndex&&b.clickedIndex!==b.activeIndex){var s,n=b.clickedIndex;if(b.params.loop){if(b.animating)return;s=a(b.clickedSlide).attr("data-swiper-slide-index"),b.params.centeredSlides?n<b.loopedSlides-b.params.slidesPerView/2||n>b.slides.length-b.loopedSlides+b.params.slidesPerView/2?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n):n>b.slides.length-b.params.slidesPerView?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n)}else b.slideTo(n)}};var S,C,z,M,E,P,k,I,L,B,D="input, select, textarea, button",H=Date.now(),A=[];b.animating=!1,b.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,O;if(b.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(b.params.noSwiping&&o(e,"."+b.params.noSwipingClass))return void(b.allowClick=!0);if(!b.params.swipeHandler||o(e,b.params.swipeHandler)){var t=b.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r=b.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(b.device.ios&&b.params.iOSEdgeSwipeDetection&&t<=b.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,O=void 0,b.touches.startX=t,b.touches.startY=r,M=Date.now(),b.allowClick=!0,b.updateContainerSize(),b.swipeDirection=void 0,b.params.threshold>0&&(I=!1),"touchstart"!==e.type){var i=!0;a(e.target).is(D)&&(i=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),i&&e.preventDefault()}b.emit("onTouchStart",b,e)}}}},b.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return b.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(b.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(b.params.onlyExternal)return b.allowClick=!1,void(S&&(b.touches.startX=b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.startY=b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,M=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return C=!0,void(b.allowClick=!1);if(z&&b.emit("onTouchMove",b,e),!(e.targetTouches&&e.targetTouches.length>1)){if(b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof E){var t=180*Math.atan2(Math.abs(b.touches.currentY-b.touches.startY),Math.abs(b.touches.currentX-b.touches.startX))/Math.PI;E=b.isHorizontal()?t>b.params.touchAngle:90-t>b.params.touchAngle}if(E&&b.emit("onTouchMoveOpposite",b,e),"undefined"==typeof O&&b.browser.ieTouch&&(b.touches.currentX!==b.touches.startX||b.touches.currentY!==b.touches.startY)&&(O=!0),S){if(E)return void(S=!1);if(O||!b.browser.ieTouch){b.allowClick=!1,b.emit("onSliderMove",b,e),e.preventDefault(),b.params.touchMoveStopPropagation&&!b.params.nested&&e.stopPropagation(),C||(i.loop&&b.fixLoop(),k=b.getWrapperTranslate(),b.setWrapperTransition(0),b.animating&&b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),b.params.autoplay&&b.autoplaying&&(b.params.autoplayDisableOnInteraction?b.stopAutoplay():b.pauseAutoplay()),B=!1,b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grabbing",b.container[0].style.cursor="-moz-grabbin",b.container[0].style.cursor="grabbing")),C=!0;var r=b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY;r*=b.params.touchRatio,b.rtl&&(r=-r),b.swipeDirection=r>0?"prev":"next",P=r+k;var s=!0;if(r>0&&P>b.minTranslate()?(s=!1,b.params.resistance&&(P=b.minTranslate()-1+Math.pow(-b.minTranslate()+k+r,b.params.resistanceRatio))):0>r&&P<b.maxTranslate()&&(s=!1,b.params.resistance&&(P=b.maxTranslate()+1-Math.pow(b.maxTranslate()-k-r,b.params.resistanceRatio))),
s&&(e.preventedByNestedSwiper=!0),!b.params.allowSwipeToNext&&"next"===b.swipeDirection&&k>P&&(P=k),!b.params.allowSwipeToPrev&&"prev"===b.swipeDirection&&P>k&&(P=k),b.params.followFinger){if(b.params.threshold>0){if(!(Math.abs(r)>b.params.threshold||I))return void(P=k);if(!I)return I=!0,b.touches.startX=b.touches.currentX,b.touches.startY=b.touches.currentY,P=k,void(b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY)}(b.params.freeMode||b.params.watchSlidesProgress)&&b.updateActiveIndex(),b.params.freeMode&&(0===A.length&&A.push({position:b.touches[b.isHorizontal()?"startX":"startY"],time:M}),A.push({position:b.touches[b.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),b.updateProgress(P),b.setWrapperTranslate(P)}}}}}},b.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),z&&b.emit("onTouchEnd",b,e),z=!1,S){b.params.grabCursor&&C&&S&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab");var t=Date.now(),r=t-M;if(b.allowClick&&(b.updateClickedSlide(e),b.emit("onTap",b,e),300>r&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){b&&(b.params.paginationHide&&b.paginationContainer.length>0&&!a(e.target).hasClass(b.params.bulletClass)&&b.paginationContainer.toggleClass(b.params.paginationHiddenClass),b.emit("onClick",b,e))},300)),300>r&&300>t-H&&(L&&clearTimeout(L),b.emit("onDoubleTap",b,e))),H=Date.now(),setTimeout(function(){b&&(b.allowClick=!0)},0),!S||!C||!b.swipeDirection||0===b.touches.diff||P===k)return void(S=C=!1);S=C=!1;var i;if(i=b.params.followFinger?b.rtl?b.translate:-b.translate:-P,b.params.freeMode){if(i<-b.minTranslate())return void b.slideTo(b.activeIndex);if(i>-b.maxTranslate())return void(b.slides.length<b.snapGrid.length?b.slideTo(b.snapGrid.length-1):b.slideTo(b.slides.length-1));if(b.params.freeModeMomentum){if(A.length>1){var s=A.pop(),n=A.pop(),o=s.position-n.position,l=s.time-n.time;b.velocity=o/l,b.velocity=b.velocity/2,Math.abs(b.velocity)<b.params.freeModeMinimumVelocity&&(b.velocity=0),(l>150||(new window.Date).getTime()-s.time>300)&&(b.velocity=0)}else b.velocity=0;A.length=0;var p=1e3*b.params.freeModeMomentumRatio,d=b.velocity*p,u=b.translate+d;b.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(b.velocity)*b.params.freeModeMomentumBounceRatio;if(u<b.maxTranslate())b.params.freeModeMomentumBounce?(u+b.maxTranslate()<-h&&(u=b.maxTranslate()-h),c=b.maxTranslate(),m=!0,B=!0):u=b.maxTranslate();else if(u>b.minTranslate())b.params.freeModeMomentumBounce?(u-b.minTranslate()>h&&(u=b.minTranslate()+h),c=b.minTranslate(),m=!0,B=!0):u=b.minTranslate();else if(b.params.freeModeSticky){var f,g=0;for(g=0;g<b.snapGrid.length;g+=1)if(b.snapGrid[g]>-u){f=g;break}u=Math.abs(b.snapGrid[f]-u)<Math.abs(b.snapGrid[f-1]-u)||"next"===b.swipeDirection?b.snapGrid[f]:b.snapGrid[f-1],b.rtl||(u=-u)}if(0!==b.velocity)p=b.rtl?Math.abs((-u-b.translate)/b.velocity):Math.abs((u-b.translate)/b.velocity);else if(b.params.freeModeSticky)return void b.slideReset();b.params.freeModeMomentumBounce&&m?(b.updateProgress(c),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating=!0,b.wrapper.transitionEnd(function(){b&&B&&(b.emit("onMomentumBounce",b),b.setWrapperTransition(b.params.speed),b.setWrapperTranslate(c),b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))})):b.velocity?(b.updateProgress(u),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))):b.updateProgress(u),b.updateActiveIndex()}return void((!b.params.freeModeMomentum||r>=b.params.longSwipesMs)&&(b.updateProgress(),b.updateActiveIndex()))}var v,w=0,y=b.slidesSizesGrid[0];for(v=0;v<b.slidesGrid.length;v+=b.params.slidesPerGroup)"undefined"!=typeof b.slidesGrid[v+b.params.slidesPerGroup]?i>=b.slidesGrid[v]&&i<b.slidesGrid[v+b.params.slidesPerGroup]&&(w=v,y=b.slidesGrid[v+b.params.slidesPerGroup]-b.slidesGrid[v]):i>=b.slidesGrid[v]&&(w=v,y=b.slidesGrid[b.slidesGrid.length-1]-b.slidesGrid[b.slidesGrid.length-2]);var x=(i-b.slidesGrid[w])/y;if(r>b.params.longSwipesMs){if(!b.params.longSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&(x>=b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w)),"prev"===b.swipeDirection&&(x>1-b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w))}else{if(!b.params.shortSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&b.slideTo(w+b.params.slidesPerGroup),"prev"===b.swipeDirection&&b.slideTo(w)}}},b._slideTo=function(e,a){return b.slideTo(e,a,!0,!0)},b.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),b.snapIndex=Math.floor(e/b.params.slidesPerGroup),b.snapIndex>=b.snapGrid.length&&(b.snapIndex=b.snapGrid.length-1);var i=-b.snapGrid[b.snapIndex];b.params.autoplay&&b.autoplaying&&(r||!b.params.autoplayDisableOnInteraction?b.pauseAutoplay(a):b.stopAutoplay()),b.updateProgress(i);for(var s=0;s<b.slidesGrid.length;s++)-Math.floor(100*i)>=Math.floor(100*b.slidesGrid[s])&&(e=s);return!b.params.allowSwipeToNext&&i<b.translate&&i<b.minTranslate()?!1:!b.params.allowSwipeToPrev&&i>b.translate&&i>b.maxTranslate()&&(b.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=b.params.speed),b.previousIndex=b.activeIndex||0,b.activeIndex=e,b.rtl&&-i===b.translate||!b.rtl&&i===b.translate?(b.params.autoHeight&&b.updateAutoHeight(),b.updateClasses(),"slide"!==b.params.effect&&b.setWrapperTranslate(i),!1):(b.updateClasses(),b.onTransitionStart(t),0===a?(b.setWrapperTranslate(i),b.setWrapperTransition(0),b.onTransitionEnd(t)):(b.setWrapperTranslate(i),b.setWrapperTransition(a),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd(t)}))),!0))},b.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),b.params.autoHeight&&b.updateAutoHeight(),b.lazy&&b.lazy.onTransitionStart(),e&&(b.emit("onTransitionStart",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeStart",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextStart",b):b.emit("onSlidePrevStart",b)))},b.onTransitionEnd=function(e){b.animating=!1,b.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),b.lazy&&b.lazy.onTransitionEnd(),e&&(b.emit("onTransitionEnd",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeEnd",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextEnd",b):b.emit("onSlidePrevEnd",b))),b.params.hashnav&&b.hashnav&&b.hashnav.setHash()},b.slideNext=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)}return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)},b._slideNext=function(e){return b.slideNext(!0,e,!0)},b.slidePrev=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex-1,a,e,t)}return b.slideTo(b.activeIndex-1,a,e,t)},b._slidePrev=function(e){return b.slidePrev(!0,e,!0)},b.slideReset=function(e,a,t){return b.slideTo(b.activeIndex,a,e)},b.setWrapperTransition=function(e,a){b.wrapper.transition(e),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTransition(e),b.params.parallax&&b.parallax&&b.parallax.setTransition(e),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTransition(e),b.params.control&&b.controller&&b.controller.setTransition(e,a),b.emit("onSetTransition",b,e)},b.setWrapperTranslate=function(e,a,t){var r=0,i=0,n=0;b.isHorizontal()?r=b.rtl?-e:e:i=e,b.params.roundLengths&&(r=s(r),i=s(i)),b.params.virtualTranslate||(b.support.transforms3d?b.wrapper.transform("translate3d("+r+"px, "+i+"px, "+n+"px)"):b.wrapper.transform("translate("+r+"px, "+i+"px)")),b.translate=b.isHorizontal()?r:i;var o,l=b.maxTranslate()-b.minTranslate();o=0===l?0:(e-b.minTranslate())/l,o!==b.progress&&b.updateProgress(e),a&&b.updateActiveIndex(),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTranslate(b.translate),b.params.parallax&&b.parallax&&b.parallax.setTranslate(b.translate),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTranslate(b.translate),b.params.control&&b.controller&&b.controller.setTranslate(b.translate,t),b.emit("onSetTranslate",b,b.translate)},b.getTranslate=function(e,a){var t,r,i,s;return"undefined"==typeof a&&(a="x"),b.params.virtualTranslate?b.rtl?-b.translate:b.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=i.transform||i.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new window.WebKitCSSMatrix("none"===r?"":r)):(s=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=s.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?s.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?s.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),b.rtl&&r&&(r=-r),r||0)},b.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=b.isHorizontal()?"x":"y"),b.getTranslate(b.wrapper[0],e)},b.observers=[],b.initObservers=function(){if(b.params.observeParents)for(var e=b.container.parents(),a=0;a<e.length;a++)l(e[a]);l(b.container[0],{childList:!1}),l(b.wrapper[0],{attributes:!1})},b.disconnectObservers=function(){for(var e=0;e<b.observers.length;e++)b.observers[e].disconnect();b.observers=[]},b.createLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove();var e=b.wrapper.children("."+b.params.slideClass);"auto"!==b.params.slidesPerView||b.params.loopedSlides||(b.params.loopedSlides=e.length),b.loopedSlides=parseInt(b.params.loopedSlides||b.params.slidesPerView,10),b.loopedSlides=b.loopedSlides+b.params.loopAdditionalSlides,b.loopedSlides>e.length&&(b.loopedSlides=e.length);var t,r=[],i=[];for(e.each(function(t,s){var n=a(this);t<b.loopedSlides&&i.push(s),t<e.length&&t>=e.length-b.loopedSlides&&r.push(s),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));for(t=r.length-1;t>=0;t--)b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))},b.destroyLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove(),b.slides.removeAttr("data-swiper-slide-index")},b.reLoop=function(e){var a=b.activeIndex-b.loopedSlides;b.destroyLoop(),b.createLoop(),b.updateSlidesSize(),e&&b.slideTo(a+b.loopedSlides,0,!1)},b.fixLoop=function(){var e;b.activeIndex<b.loopedSlides?(e=b.slides.length-3*b.loopedSlides+b.activeIndex,e+=b.loopedSlides,b.slideTo(e,0,!1,!0)):("auto"===b.params.slidesPerView&&b.activeIndex>=2*b.loopedSlides||b.activeIndex>b.slides.length-2*b.params.slidesPerView)&&(e=-b.slides.length+b.activeIndex+b.loopedSlides,e+=b.loopedSlides,b.slideTo(e,0,!1,!0))},b.appendSlide=function(e){if(b.params.loop&&b.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&b.wrapper.append(e[a]);else b.wrapper.append(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0)},b.prependSlide=function(e){b.params.loop&&b.destroyLoop();var a=b.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&b.wrapper.prepend(e[t]);a=b.activeIndex+e.length}else b.wrapper.prepend(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.slideTo(a,0,!1)},b.removeSlide=function(e){b.params.loop&&(b.destroyLoop(),b.slides=b.wrapper.children("."+b.params.slideClass));var a,t=b.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.params.loop?b.slideTo(t+b.loopedSlides,0,!1):b.slideTo(t,0,!1)},b.removeAllSlides=function(){for(var e=[],a=0;a<b.slides.length;a++)e.push(a);b.removeSlide(e)},b.effects={fade:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var a=b.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;b.params.virtualTranslate||(r-=b.translate);var i=0;b.isHorizontal()||(i=r,r=0);var s=b.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:s}).transform("translate3d("+r+"px, "+i+"px, 0px)")}},setTransition:function(e){if(b.slides.transition(e),b.params.virtualTranslate&&0!==e){var a=!1;b.slides.transitionEnd(function(){if(!a&&b){a=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)b.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var t=b.slides.eq(e),r=t[0].progress;b.params.flip.limitRotation&&(r=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,s=-180*r,n=s,o=0,l=-i,p=0;if(b.isHorizontal()?b.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(r))+b.slides.length,b.params.flip.slideShadows){var d=b.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=b.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.virtualTranslate&&0!==e){var t=!1;b.slides.eq(b.activeIndex).transitionEnd(function(){if(!t&&b&&a(this).hasClass(b.params.slideActiveClass)){t=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=0;r<e.length;r++)b.wrapper.trigger(e[r])}})}}},cube:{setTranslate:function(){var e,t=0;b.params.cube.shadow&&(b.isHorizontal()?(e=b.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.wrapper.append(e)),e.css({height:b.width+"px"})):(e=b.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.container.append(e))));for(var r=0;r<b.slides.length;r++){var i=b.slides.eq(r),s=90*r,n=Math.floor(s/360);b.rtl&&(s=-s,n=Math.floor(-s/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;r%4===0?(l=4*-n*b.size,d=0):(r-1)%4===0?(l=0,d=4*-n*b.size):(r-2)%4===0?(l=b.size+4*n*b.size,d=b.size):(r-3)%4===0&&(l=-b.size,d=3*b.size+4*b.size*n),b.rtl&&(l=-l),b.isHorizontal()||(p=l,l=0);var u="rotateX("+(b.isHorizontal()?0:-s)+"deg) rotateY("+(b.isHorizontal()?s:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*r+90*o,b.rtl&&(t=90*-r-90*o)),i.transform(u),b.params.cube.slideShadows){var c=b.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=b.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(b.wrapper.css({"-webkit-transform-origin":"50% 50% -"+b.size/2+"px","-moz-transform-origin":"50% 50% -"+b.size/2+"px","-ms-transform-origin":"50% 50% -"+b.size/2+"px","transform-origin":"50% 50% -"+b.size/2+"px"}),b.params.cube.shadow)if(b.isHorizontal())e.transform("translate3d(0px, "+(b.width/2+b.params.cube.shadowOffset)+"px, "+-b.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+b.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),f=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),g=b.params.cube.shadowScale,v=b.params.cube.shadowScale/f,w=b.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(b.height/2+w)+"px, "+-b.height/2/v+"px) rotateX(-90deg)")}var y=b.isSafari||b.isUiWebView?-b.size/2:0;b.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(b.isHorizontal()?0:t)+"deg) rotateY("+(b.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.cube.shadow&&!b.isHorizontal()&&b.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=b.translate,t=b.isHorizontal()?-e+b.width/2:-e+b.height/2,r=b.isHorizontal()?b.params.coverflow.rotate:-b.params.coverflow.rotate,i=b.params.coverflow.depth,s=0,n=b.slides.length;n>s;s++){var o=b.slides.eq(s),l=b.slidesSizesGrid[s],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*b.params.coverflow.modifier,u=b.isHorizontal()?r*d:0,c=b.isHorizontal()?0:r*d,m=-i*Math.abs(d),h=b.isHorizontal()?0:b.params.coverflow.stretch*d,f=b.isHorizontal()?b.params.coverflow.stretch*d:0;Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+f+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,b.params.coverflow.slideShadows){var v=b.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=b.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(b.browser.ie){var y=b.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},b.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==b.slides.length)){var r=b.slides.eq(e),i=r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy")||r.hasClass("swiper-lazy-loaded")||r.hasClass("swiper-lazy-loading")||(i=i.add(r[0])),0!==i.length&&i.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var i=e.attr("data-background"),s=e.attr("data-src"),n=e.attr("data-srcset");b.loadImage(e[0],s||i,n,!1,function(){if(i?(e.css("background-image",'url("'+i+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),s&&(e.attr("src",s),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),r.find(".swiper-lazy-preloader, .preloader").remove(),b.params.loop&&t){var a=r.attr("data-swiper-slide-index");if(r.hasClass(b.params.slideDuplicateClass)){var o=b.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+b.params.slideDuplicateClass+")");b.lazy.loadImageInSlide(o.index(),!1)}else{var l=b.wrapper.children("."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');b.lazy.loadImageInSlide(l.index(),!1)}}b.emit("onLazyImageReady",b,r[0],e[0])}),b.emit("onLazyImageLoad",b,r[0],e[0])})}},load:function(){var e;if(b.params.watchSlidesVisibility)b.wrapper.children("."+b.params.slideVisibleClass).each(function(){b.lazy.loadImageInSlide(a(this).index())});else if(b.params.slidesPerView>1)for(e=b.activeIndex;e<b.activeIndex+b.params.slidesPerView;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);else b.lazy.loadImageInSlide(b.activeIndex);if(b.params.lazyLoadingInPrevNext)if(b.params.slidesPerView>1||b.params.lazyLoadingInPrevNextAmount&&b.params.lazyLoadingInPrevNextAmount>1){var t=b.params.lazyLoadingInPrevNextAmount,r=b.params.slidesPerView,i=Math.min(b.activeIndex+r+Math.max(t,r),b.slides.length),s=Math.max(b.activeIndex-Math.max(r,t),0);for(e=b.activeIndex+b.params.slidesPerView;i>e;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);for(e=s;e<b.activeIndex;e++)b.slides[e]&&b.lazy.loadImageInSlide(e)}else{var n=b.wrapper.children("."+b.params.slideNextClass);n.length>0&&b.lazy.loadImageInSlide(n.index());var o=b.wrapper.children("."+b.params.slidePrevClass);o.length>0&&b.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){b.params.lazyLoading&&(b.params.lazyLoadingOnTransitionStart||!b.params.lazyLoadingOnTransitionStart&&!b.lazy.initialImageLoaded)&&b.lazy.load()},onTransitionEnd:function(){b.params.lazyLoading&&!b.params.lazyLoadingOnTransitionStart&&b.lazy.load()}},b.scrollbar={isTouched:!1,setDragPosition:function(e){var a=b.scrollbar,t=b.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[b.isHorizontal()?"left":"top"]-a.dragSize/2,i=-b.minTranslate()*a.moveDivider,s=-b.maxTranslate()*a.moveDivider;i>r?r=i:r>s&&(r=s),r=-r/a.moveDivider,b.updateProgress(r),b.setWrapperTranslate(r,!0)},dragStart:function(e){var a=b.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),b.params.scrollbarHide&&a.track.css("opacity",1),b.wrapper.transition(100),a.drag.transition(100),b.emit("onScrollbarDragStart",b)},dragMove:function(e){var a=b.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),b.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),b.emit("onScrollbarDragMove",b))},dragEnd:function(e){var a=b.scrollbar;a.isTouched&&(a.isTouched=!1,b.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),b.emit("onScrollbarDragEnd",b),b.params.scrollbarSnapOnRelease&&b.slideReset())},enableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).on(b.touchEvents.start,e.dragStart),a(t).on(b.touchEvents.move,e.dragMove),a(t).on(b.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).off(b.touchEvents.start,e.dragStart),a(t).off(b.touchEvents.move,e.dragMove),a(t).off(b.touchEvents.end,e.dragEnd)},set:function(){if(b.params.scrollbar){var e=b.scrollbar;e.track=a(b.params.scrollbar),b.params.uniqueNavElements&&"string"==typeof b.params.scrollbar&&e.track.length>1&&1===b.container.find(b.params.scrollbar).length&&(e.track=b.container.find(b.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=b.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=b.size/b.virtualSize,e.moveDivider=e.divider*(e.trackSize/b.size),e.dragSize=e.trackSize*e.divider,b.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",b.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(b.params.scrollbar){var e,a=b.scrollbar,t=(b.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*b.progress,b.rtl&&b.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),b.isHorizontal()?(b.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(b.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),b.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){b.params.scrollbar&&b.scrollbar.drag.transition(e)}},b.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,r;this.x.length;this.interpolate=function(e){return e?(r=i(this.x,e),t=r-1,(e-this.x[t])*(this.y[r]-this.y[t])/(this.x[r]-this.x[t])+this.y[t]):0};var i=function(){var e,a,t;return function(r,i){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=i?a=t:e=t;return e}}()},getInterpolateFunction:function(e){b.controller.spline||(b.controller.spline=b.params.loop?new b.controller.LinearSpline(b.slidesGrid,e.slidesGrid):new b.controller.LinearSpline(b.snapGrid,e.snapGrid))},setTranslate:function(e,a){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-b.translate:b.translate,"slide"===b.params.controlBy&&(b.controller.getInterpolateFunction(a),s=-b.controller.spline.interpolate(-e)),s&&"container"!==b.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(b.maxTranslate()-b.minTranslate()),s=(e-b.minTranslate())*i+a.minTranslate()),b.params.controlInverse&&(s=a.maxTranslate()-s),a.updateProgress(s),a.setWrapperTranslate(s,!1,b),a.updateActiveIndex()}var i,s,n=b.params.control;if(b.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&r(n[o]);else n instanceof t&&a!==n&&r(n)},setTransition:function(e,a){function r(a){a.setWrapperTransition(e,b),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){s&&(a.params.loop&&"slide"===b.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,s=b.params.control;if(b.isArray(s))for(i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof t&&r(s[i]);else s instanceof t&&a!==s&&r(s)}},b.hashnav={init:function(){if(b.params.hashnav){b.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=b.slides.length;r>t;t++){var i=b.slides.eq(t),s=i.attr("data-hash");if(s===e&&!i.hasClass(b.params.slideDuplicateClass)){var n=i.index();b.slideTo(n,a,b.params.runCallbacksOnInit,!0)}}}},setHash:function(){b.hashnav.initialized&&b.params.hashnav&&(document.location.hash=b.slides.eq(b.activeIndex).attr("data-hash")||"")}},b.disableKeyboardControl=function(){b.params.keyboardControl=!1,a(document).off("keydown",p)},b.enableKeyboardControl=function(){b.params.keyboardControl=!0,a(document).on("keydown",p)},b.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},b.params.mousewheelControl){try{new window.WheelEvent("wheel"),b.mousewheel.event="wheel"}catch(N){(window.WheelEvent||b.container[0]&&"wheel"in b.container[0])&&(b.mousewheel.event="wheel")}!b.mousewheel.event&&window.WheelEvent,b.mousewheel.event||void 0===document.onmousewheel||(b.mousewheel.event="mousewheel"),b.mousewheel.event||(b.mousewheel.event="DOMMouseScroll")}b.disableMousewheelControl=function(){return b.mousewheel.event?(b.container.off(b.mousewheel.event,d),!0):!1},b.enableMousewheelControl=function(){return b.mousewheel.event?(b.container.on(b.mousewheel.event,d),!0):!1},b.parallax={setTranslate:function(){b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){u(this,b.progress)}),b.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);u(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=b.params.speed),b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),r=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),t.transition(r)})}},b._plugins=[];for(var R in b.plugins){var W=b.plugins[R](b,b.params[R]);W&&b._plugins.push(W)}return b.callPlugins=function(e){for(var a=0;a<b._plugins.length;a++)e in b._plugins[a]&&b._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.emitterEventListeners={},b.emit=function(e){b.params[e]&&b.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(b.emitterEventListeners[e])for(a=0;a<b.emitterEventListeners[e].length;a++)b.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);b.callPlugins&&b.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.on=function(e,a){return e=c(e),b.emitterEventListeners[e]||(b.emitterEventListeners[e]=[]),b.emitterEventListeners[e].push(a),b},b.off=function(e,a){var t;if(e=c(e),"undefined"==typeof a)return b.emitterEventListeners[e]=[],b;if(b.emitterEventListeners[e]&&0!==b.emitterEventListeners[e].length){for(t=0;t<b.emitterEventListeners[e].length;t++)b.emitterEventListeners[e][t]===a&&b.emitterEventListeners[e].splice(t,1);return b}},b.once=function(e,a){e=c(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),b.off(e,t)};return b.on(e,t),b},b.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(b.params.nextButton)?(b.onClickNext(e),b.isEnd?b.a11y.notify(b.params.lastSlideMessage):b.a11y.notify(b.params.nextSlideMessage)):a(e.target).is(b.params.prevButton)&&(b.onClickPrev(e),b.isBeginning?b.a11y.notify(b.params.firstSlideMessage):b.a11y.notify(b.params.prevSlideMessage)),a(e.target).is("."+b.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=b.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.a11y.makeFocusable(b.nextButton),b.a11y.addRole(b.nextButton,"button"),b.a11y.addLabel(b.nextButton,b.params.nextSlideMessage)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.a11y.makeFocusable(b.prevButton),b.a11y.addRole(b.prevButton,"button"),b.a11y.addLabel(b.prevButton,b.params.prevSlideMessage)),a(b.container).append(b.a11y.liveRegion)},initPagination:function(){b.params.pagination&&b.params.paginationClickable&&b.bullets&&b.bullets.length&&b.bullets.each(function(){var e=a(this);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){b.a11y.liveRegion&&b.a11y.liveRegion.length>0&&b.a11y.liveRegion.remove()}},b.init=function(){b.params.loop&&b.createLoop(),b.updateContainerSize(),b.updateSlidesSize(),b.updatePagination(),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.set(),b.params.scrollbarDraggable&&b.scrollbar.enableDraggable()),"slide"!==b.params.effect&&b.effects[b.params.effect]&&(b.params.loop||b.updateProgress(),b.effects[b.params.effect].setTranslate()),b.params.loop?b.slideTo(b.params.initialSlide+b.loopedSlides,0,b.params.runCallbacksOnInit):(b.slideTo(b.params.initialSlide,0,b.params.runCallbacksOnInit),0===b.params.initialSlide&&(b.parallax&&b.params.parallax&&b.parallax.setTranslate(),b.lazy&&b.params.lazyLoading&&(b.lazy.load(),b.lazy.initialImageLoaded=!0))),b.attachEvents(),b.params.observer&&b.support.observer&&b.initObservers(),b.params.preloadImages&&!b.params.lazyLoading&&b.preloadImages(),b.params.autoplay&&b.startAutoplay(),b.params.keyboardControl&&b.enableKeyboardControl&&b.enableKeyboardControl(),b.params.mousewheelControl&&b.enableMousewheelControl&&b.enableMousewheelControl(),
b.params.hashnav&&b.hashnav&&b.hashnav.init(),b.params.a11y&&b.a11y&&b.a11y.init(),b.emit("onInit",b)},b.cleanupStyles=function(){b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),b.wrapper.removeAttr("style"),b.slides&&b.slides.length&&b.slides.removeClass([b.params.slideVisibleClass,b.params.slideActiveClass,b.params.slideNextClass,b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),b.paginationContainer&&b.paginationContainer.length&&b.paginationContainer.removeClass(b.params.paginationHiddenClass),b.bullets&&b.bullets.length&&b.bullets.removeClass(b.params.bulletActiveClass),b.params.prevButton&&a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.nextButton&&a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.track&&b.scrollbar.track.length&&b.scrollbar.track.removeAttr("style"),b.scrollbar.drag&&b.scrollbar.drag.length&&b.scrollbar.drag.removeAttr("style"))},b.destroy=function(e,a){b.detachEvents(),b.stopAutoplay(),b.params.scrollbar&&b.scrollbar&&b.params.scrollbarDraggable&&b.scrollbar.disableDraggable(),b.params.loop&&b.destroyLoop(),a&&b.cleanupStyles(),b.disconnectObservers(),b.params.keyboardControl&&b.disableKeyboardControl&&b.disableKeyboardControl(),b.params.mousewheelControl&&b.disableMousewheelControl&&b.disableMousewheelControl(),b.params.a11y&&b.a11y&&b.a11y.destroy(),b.emit("onDestroy"),e!==!1&&(b=null)},b.init(),b}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||i||r,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var r=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var s,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)r.push(n.childNodes[i])}else for(s=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<s.length;i++)s[i]&&r.push(s[i])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)r.push(a[i]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var r=this[t];r.dom7ElementDataStorage||(r.dom7ElementDataStorage={}),r.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,i){function s(e){var i=e.target;if(a(i).is(t))r.call(i,e);else for(var s=a(i).parents(),n=0;n<s.length;n++)a(s[n]).is(t)&&r.call(s[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:s}),this[n].addEventListener(l[o],s,i);return this},off:function(e,a,t,r){for(var i=e.split(" "),s=0;s<i.length;s++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(i[s],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[s],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function i(n){t(n),s.off(e,a,i,r)}var s=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),s.on(e,a,i,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(i){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,s=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+s-r,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var r,i;if("string"==typeof t){var s=this[0];if(s===document)return t===document;if(s===window)return t===window;if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.mozMatchesSelector)return s.mozMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(r=a(t),i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,r=i.childNodes.length-1;r>=0;r--)this[t].insertBefore(i.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].querySelectorAll(a),s=0;s<i.length;s++)t.push(i[s]);return new e(t)},children:function(t){for(var r=[],i=0;i<this.length;i++)for(var s=this[i].childNodes,n=0;n<s.length;n++)t?1===s[n].nodeType&&a(s[n]).is(t)&&r.push(s[n]):1===s[n].nodeType&&r.push(s[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)r[r.length]=i[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),i=["jQuery","Zepto","Dom7"],s=0;s<i.length;s++)window[i[s]]&&e(window[i[s]]);var n;n="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map

/**
 * angular-snapscroll
 * Version: 0.2.5
 * (c) 2014-2015 Joel Mukuthu
 * MIT License
 * Built on: 31-07-2015 17:23:24 GMT+0200
 **/

(function () {
  'use strict';

  function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) {
      return c/2*t*t + b;
    }
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  angular
    .module('snapscroll', [])
    .value('defaultSnapscrollScrollEasing', easeInOutQuad)
    .value('defaultSnapscrollScrollDelay', 250)
    .value('defaultSnapscrollSnapDuration', 800)
    .value('defaultSnapscrollResizeDelay', 400)
    .value('defaultSnapscrollBindScrollTimeout', 400);
})();
(function () {
  'use strict';

  angular.module('snapscroll')
    .directive('fitWindowHeight', ['$window', '$timeout', 'defaultSnapscrollResizeDelay',
      function ($window, $timeout, defaultSnapscrollResizeDelay) {
        return {
          restrict: 'A',
          require: 'snapscroll',
          link: function (scope, element, attributes, snapscroll) {
            var windowElement,
                resizePromise,
                resizeDelay = attributes.resizeDelay;

            function onWindowResize() {
              if (resizeDelay === false) {
                snapscroll.setSnapHeight($window.innerHeight);
              } else {
                $timeout.cancel(resizePromise);
                resizePromise = $timeout(function () {
                  snapscroll.setSnapHeight($window.innerHeight);
                }, resizeDelay);
              }
            }

            function init() {
              if (resizeDelay === 'false') {
                resizeDelay = false;
              } else {
                resizeDelay = parseInt(resizeDelay, 10);
                if (isNaN(resizeDelay)) {
                  resizeDelay = defaultSnapscrollResizeDelay;
                }
              }

              // set initial snapHeight
              snapscroll.setSnapHeight($window.innerHeight);

              // update snapHeight on window resize
              windowElement = angular.element($window);
              windowElement.on('resize', onWindowResize);
              scope.$on('$destroy', function () {
                windowElement.off('resize');
              });
            }

            init();
          }
        };
    }]);

})();

(function () {
  'use strict';

  var scopeObject = {
    snapIndex: '=?',
    snapHeight: '=?',
    beforeSnap: '&',
    afterSnap: '&',
    snapAnimation: '=?'
  };

  var controller = ['$scope', function ($scope) {
    this.setSnapHeight = function (height) {
      $scope.snapHeight = height;
    };
  }];

  var isNumber = function(value) {
    return angular.isNumber(value) && !isNaN(value);
  };

  var watchSnapHeight = function (scope, callback) {
    scope.$watch('snapHeight', function (snapHeight, previousSnapHeight) {
      if (angular.isUndefined(snapHeight)) {
        scope.snapHeight = scope.defaultSnapHeight;
        return;
      }
      if (!isNumber(snapHeight)) {
        if (isNumber(previousSnapHeight)) {
          scope.snapHeight = previousSnapHeight;
        } else {
          scope.snapHeight = scope.defaultSnapHeight;
        }
        return;
      }
      if (angular.isFunction(callback)) {
        callback(snapHeight);
      }
    });
  };

  var watchSnapIndex = function (scope, callback) {
    scope.$watch('snapIndex', function (snapIndex, previousSnapIndex) {
      if (angular.isUndefined(snapIndex)) {
        scope.snapIndex = 0;
        return;
      }
      if (!isNumber(snapIndex)) {
        if (isNumber(previousSnapIndex)) {
          scope.snapIndex = previousSnapIndex;
        } else {
          scope.snapIndex = 0;
        }
        return;
      }
      if (snapIndex % 1 !== 0) {
        scope.snapIndex = Math.round(snapIndex);
        return;
      }
      if (scope.ignoreThisSnapIndexChange) {
        scope.ignoreThisSnapIndexChange = undefined;
        return;
      }
      if (!scope.isValid(snapIndex)) {
        scope.ignoreThisSnapIndexChange = true;
        scope.snapIndex = previousSnapIndex;
        scope.snapDirection = 0;
        return;
      }
      if (scope.beforeSnap({snapIndex: snapIndex}) === false) {
        scope.ignoreThisSnapIndexChange = true;
        scope.snapIndex = previousSnapIndex;
        return;
      }
      if (angular.isFunction(callback)) {
        if (snapIndex > previousSnapIndex) {
          scope.snapDirection = 1;
        } else if (snapIndex < previousSnapIndex) {
          scope.snapDirection = -1;
        }
        callback(snapIndex, function () {
          scope.snapDirection = 0;
          scope.afterSnap({snapIndex: snapIndex});
        });
      }
    });
  };

  var initWheelEvents = function (scope, element) {
    var onWheel,
        bindWheel,
        unbindWheel;

    onWheel = function (e) {
      var bubbleUp,
          delta;

      if (e.originalEvent) {
        e = e.originalEvent;
      }

      e.preventDefault();

      delta = Math.max(-1, Math.min(1, (e.wheelDelta || -(e.deltaY || e.detail))));

      if (isNaN(delta)) {
        return;
      }

      if (delta < 0) {
        if (scope.snapDirection !== 1) {
          if (scope.snapIndex + 1 > scope.scopeIndexMax()) {
            bubbleUp = true;
          } else {
            bubbleUp = false;
            scope.$apply(function () {
              scope.snapIndex += 1;
            });
          }
        }
      } else {
        if (scope.snapDirection !== -1) {
          if (scope.snapIndex - 1 < scope.snapIndexMin()) {
            bubbleUp = true;
          } else {
            bubbleUp = false;
            scope.$apply(function () {
              scope.snapIndex -= 1;
            });
          }
        }
      }

      if (!bubbleUp) {
        e.stopPropagation();
      }
    };

    bindWheel = function () {
      element.on('wheel mousewheel onmousewheel', onWheel);
    };

    unbindWheel = function () {
      element.off('wheel mousewheel onmousewheel', onWheel);
    };

    bindWheel();
    scope.$on('$destroy', unbindWheel);
  };

  var snapscrollAsAnAttribute = ['$timeout', 'scroll', 'defaultSnapscrollScrollDelay', 'defaultSnapscrollSnapDuration', 'defaultSnapscrollBindScrollTimeout',
    function ($timeout, scroll, defaultSnapscrollScrollDelay, defaultSnapscrollSnapDuration, defaultSnapscrollBindScrollTimeout) {
      return {
        restrict: 'A',
        scope: scopeObject,
        controller: controller,
        link: function (scope, element, attributes) {
          var init,
              snapTo,
              onScroll,
              bindScroll,
              scrollBound,
              unbindScroll,
              scrollPromise,
              bindScrollPromise,
              snapEasing = attributes.snapEasing,
              scrollDelay = attributes.scrollDelay,
              snapDuration = attributes.snapDuration,
              preventSnappingAfterManualScroll = angular.isDefined(attributes.preventSnappingAfterManualScroll);

          snapTo = function (index, afterSnap) {
            var args,
                top = index * scope.snapHeight;
            if (scope.snapAnimation) {
              if (angular.isDefined(snapEasing)) {
                args = [element, top, snapDuration, snapEasing];
              } else {
                args = [element, top, snapDuration];
              }
            } else {
              args = [element, top];
            }
            if (!preventSnappingAfterManualScroll && scrollBound) {
              unbindScroll();
            }
            scroll.to.apply(scroll, args).then(function () {
              if (angular.isFunction(afterSnap)) {
                afterSnap();
              }
              if (!preventSnappingAfterManualScroll) {
                // bind scroll after a timeout
                $timeout.cancel(bindScrollPromise);
                bindScrollPromise = $timeout(bindScroll, defaultSnapscrollBindScrollTimeout);
              }
            });
          };

          onScroll = function () {
            var snap = function () {
              var top = element[0].scrollTop,
                  newSnapIndex = Math.round(top / scope.snapHeight);
              if (scope.snapIndex === newSnapIndex) {
                snapTo(newSnapIndex);
              } else {
                scope.$apply(function () {
                  scope.snapIndex = newSnapIndex;
                });
              }
            };
            scroll.stop(element);
            if (scrollDelay === false) {
              snap();
            } else {
              $timeout.cancel(scrollPromise);
              scrollPromise = $timeout(snap, scrollDelay);
            }
          };

          bindScroll = function () {
            // if the bindScroll timeout expires while snapping is ongoing, restart the timer
            if (scope.snapDirection !== 0) {
              bindScrollPromise = $timeout(bindScroll, defaultSnapscrollBindScrollTimeout);
              return;
            }
            element.on('scroll', onScroll);
            scrollBound = true;
          };

          unbindScroll = function () {
            element.off('scroll', onScroll);
            scrollBound = false;
          };

          init = function () {
            if (scrollDelay === 'false') {
              scrollDelay = false;
            } else {
              scrollDelay = parseInt(scrollDelay, 10);
              if (isNaN(scrollDelay)) {
                scrollDelay = defaultSnapscrollScrollDelay;
              }
            }

            if (angular.isDefined(snapEasing)) {
              snapEasing = scope.$parent.$eval(snapEasing);
            }

            snapDuration = parseInt(snapDuration, 10);
            if (isNaN(snapDuration)) {
              snapDuration = defaultSnapscrollSnapDuration;
            }

            scope.$watch('snapAnimation', function (animation) {
              if (animation === undefined) {
                scope.snapAnimation = true;
              }
            });

            scope.defaultSnapHeight = element[0].offsetHeight;

            scope.snapIndexMin = function () {
              return 0;
            };

            scope.scopeIndexMax = function () {
              return element.children().length - 1;
            };

            scope.isValid = function (snapIndex) {
              return snapIndex >= scope.snapIndexMin() && snapIndex <= scope.scopeIndexMax();
            };

            element.css('overflowY', 'auto');

            watchSnapHeight(scope, function () {
              var snaps = element.children();
              element.css('height', scope.snapHeight + 'px');
              if (snaps.length) {
                angular.forEach(snaps, function (snap) {
                  angular.element(snap).css('height', scope.snapHeight + 'px');
                });
              }
              snapTo(scope.snapIndex);
            });

            watchSnapIndex(scope, snapTo);

            if (!preventSnappingAfterManualScroll) {
              bindScroll();
              scope.$on('$destroy', unbindScroll);
            }

            initWheelEvents(scope, element);
          };

          init();
        }
      };
    }
  ];

  angular.module('snapscroll')
    .directive('snapscroll', snapscrollAsAnAttribute);
})();

(function () {
  'use strict';
  
  // all this is adapted from https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
  // ngAnimate does have $$animateReflow, but that was not built to be a wrapper around requestAnimationFrame, hence this.

  var getWithVendorPrefix = function (funcName, $window) {
    var vendors = ['webkit', 'moz'],
        func;
    for (var i = 0; i < vendors.length && !func; ++i) {
      var vp = vendors[i];
      func = $window[vp + funcName];
    }
    return func;
  };

  var iOS6 = function ($window) {
    return /iP(ad|hone|od).*OS 6/.test($window.navigator.userAgent);
  };

  if (!Date.now) {
    Date.now = function() {
      return new Date().getTime();
    };
  }

  var snapscroll = angular.module('snapscroll');

  snapscroll.factory('requestAnimation', ['$timeout', '$window', 
    function ($timeout, $window) {
      var lastTime,
          requestAnimation = $window.requestAnimationFrame || getWithVendorPrefix('RequestAnimationFrame', $window);

      if (!requestAnimation || iOS6($window)) { // iOS6 is buggy
        requestAnimation = function(callback) {
          var now = Date.now();
          var nextTime = Math.max(lastTime + 16, now);
          return $timeout(function() {
            callback(lastTime = nextTime);
          }, nextTime - now);
        };
      }

      return requestAnimation;
  }]);

  snapscroll.factory('cancelAnimation', ['$timeout', '$window', 
    function ($timeout, $window) {
      var cancelAnimation = $window.cancelAnimationFrame || getWithVendorPrefix('CancelAnimationFrame', $window) || getWithVendorPrefix('CancelRequestAnimationFrame', $window);

      if (!cancelAnimation || iOS6($window)) { // iOS6 is buggy
        cancelAnimation = $timeout.cancel;
      }

      return cancelAnimation;
    }]);
  
})();
(function () {
  'use strict';
  
  // this is built upon http://stackoverflow.com/a/16136789/1004406

  var snapscroll = angular.module('snapscroll');

  snapscroll.factory('scroll', ['$q', 'requestAnimation', 'cancelAnimation', 'defaultSnapscrollScrollEasing',
    function ($q, requestAnimation, cancelAnimation, defaultSnapscrollScrollEasing) {

      function cleanUp(element, animation) {
        animation = null;
        element.data('snapscroll-animation', null);
        element.data('snapscroll-animation-deferred', null);
      }

      return {
        to: function (element, top, duration, easing) {
          var start,
              change,
              animate,
              deferred,
              animation,
              increment,
              currentTime;

          animate = function () {
            currentTime += increment;
            element[0].scrollTop = easing(currentTime, start, change, duration);
            if(currentTime < duration) {
              animation = requestAnimation(animate, increment);
              element.data('snapscroll-animation', animation);
            } else {
              cleanUp(element, animation);
              deferred.resolve();
            }
          };

          if (!angular.isElement(element) || !angular.isNumber(top)) {
            return;
          }

          deferred = $q.defer();
          duration = parseInt(duration);
          animation = element.data('snapscroll-animation');

          if (animation) {
            cancelAnimation(animation);
            // TODO: should the promise be rejected at this point since this is just cleaning up? 
            // element.data('snapscroll-animation-deferred').reject();
            cleanUp(element, animation);
          }

          if (duration === 0 || isNaN(duration)) {
            element[0].scrollTop = top;
            deferred.resolve();
          } else {
            if (typeof easing !== 'function') {
              easing = defaultSnapscrollScrollEasing;
            }
            start = element[0].scrollTop;
            change = top - start;
            currentTime = 0;
            increment = 20;
            animate();
          }

          element.data('snapscroll-animation-deferred', deferred);
          return deferred.promise;
        },

        stop: function (element) {
          var animation = element.data('snapscroll-animation');
          if (animation) {
            cancelAnimation(animation);
            element.data('snapscroll-animation-deferred').reject();
            cleanUp(element, animation);
          }
        }
      };
  }]);
  
})();
/*!
 * ngCordova
 * v0.1.23-alpha
 * Copyright 2015 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
!function(){angular.module("ngCordova",["ngCordova.plugins"]),angular.module("ngCordova.plugins.actionSheet",[]).factory("$cordovaActionSheet",["$q","$window",function(e,n){return{show:function(t){var r=e.defer();return n.plugins.actionsheet.show(t,function(e){r.resolve(e)}),r.promise},hide:function(){return n.plugins.actionsheet.hide()}}}]),angular.module("ngCordova.plugins.adMob",[]).factory("$cordovaAdMob",["$q","$window",function(e,n){return{createBannerView:function(t){var r=e.defer();return n.plugins.AdMob.createBannerView(t,function(){r.resolve()},function(){r.reject()}),r.promise},createInterstitialView:function(t){var r=e.defer();return n.plugins.AdMob.createInterstitialView(t,function(){r.resolve()},function(){r.reject()}),r.promise},requestAd:function(t){var r=e.defer();return n.plugins.AdMob.requestAd(t,function(){r.resolve()},function(){r.reject()}),r.promise},showAd:function(t){var r=e.defer();return n.plugins.AdMob.showAd(t,function(){r.resolve()},function(){r.reject()}),r.promise},requestInterstitialAd:function(t){var r=e.defer();return n.plugins.AdMob.requestInterstitialAd(t,function(){r.resolve()},function(){r.reject()}),r.promise}}}]),angular.module("ngCordova.plugins.appAvailability",[]).factory("$cordovaAppAvailability",["$q",function(e){return{check:function(n){var t=e.defer();return appAvailability.check(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.appRate",[]).provider("$cordovaAppRate",[function(){this.setPreferences=function(e){e&&angular.isObject(e)&&(AppRate.preferences.useLanguage=e.language||null,AppRate.preferences.displayAppName=e.appName||"",AppRate.preferences.promptAgainForEachNewVersion=e.promptForNewVersion||!0,AppRate.preferences.openStoreInApp=e.openStoreInApp||!1,AppRate.preferences.usesUntilPrompt=e.usesUntilPrompt||3,AppRate.preferences.useCustomRateDialog=e.useCustomRateDialog||!1,AppRate.preferences.storeAppURL.ios=e.iosURL||null,AppRate.preferences.storeAppURL.android=e.androidURL||null,AppRate.preferences.storeAppURL.blackberry=e.blackberryURL||null,AppRate.preferences.storeAppURL.windows8=e.windowsURL||null)},this.setCustomLocale=function(e){var n={title:"Rate %@",message:"If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",cancelButtonLabel:"No, Thanks",laterButtonLabel:"Remind Me Later",rateButtonLabel:"Rate It Now"};n=angular.extend(n,e),AppRate.preferences.customLocale=n},this.$get=["$q",function(e){return{promptForRating:function(n){var t=e.defer(),r=AppRate.promptForRating(n);return t.resolve(r),t.promise},navigateToAppStore:function(){var n=e.defer(),t=AppRate.navigateToAppStore();return n.resolve(t),n.promise},onButtonClicked:function(e){AppRate.onButtonClicked=function(n){e.call(this,n)}},onRateDialogShow:function(e){AppRate.onRateDialogShow=e()}}}]}]),angular.module("ngCordova.plugins.appVersion",[]).factory("$cordovaAppVersion",["$q",function(e){return{getVersionNumber:function(){var n=e.defer();return cordova.getAppVersion.getVersionNumber(function(e){n.resolve(e)}),n.promise},getVersionCode:function(){var n=e.defer();return cordova.getAppVersion.getVersionCode(function(e){n.resolve(e)}),n.promise}}}]),angular.module("ngCordova.plugins.backgroundGeolocation",[]).factory("$cordovaBackgroundGeolocation",["$q","$window",function(e,n){return{init:function(){n.navigator.geolocation.getCurrentPosition(function(e){return e})},configure:function(t){this.init();var r=e.defer();return n.plugins.backgroundGeoLocation.configure(function(e){r.notify(e),n.plugins.backgroundGeoLocation.finish()},function(e){r.reject(e)},t),this.start(),r.promise},start:function(){var t=e.defer();return n.plugins.backgroundGeoLocation.start(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},stop:function(){var t=e.defer();return n.plugins.backgroundGeoLocation.stop(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.badge",[]).factory("$cordovaBadge",["$q",function(e){return{hasPermission:function(){var n=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?n.resolve(!0):n.reject("You do not have permission")}),n.promise},promptForPermission:function(){return cordova.plugins.notification.badge.promptForPermission()},set:function(n,t,r){var o=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?o.resolve(cordova.plugins.notification.badge.set(n,t,r)):o.reject("You do not have permission to set Badge")}),o.promise},get:function(){var n=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?cordova.plugins.notification.badge.get(function(e){n.resolve(e)}):n.reject("You do not have permission to get Badge")}),n.promise},clear:function(n,t){var r=e.defer();return cordova.plugins.notification.badge.hasPermission(function(e){e?r.resolve(cordova.plugins.notification.badge.clear(n,t)):r.reject("You do not have permission to clear Badge")}),r.promise},increase:function(n,t,r){var o=e.defer();return this.hasPermission().then(function(){o.resolve(cordova.plugins.notification.badge.increase(n,t,r))},function(){o.reject("You do not have permission to increase Badge")}),o.promise},decrease:function(n,t,r){var o=e.defer();return this.hasPermission().then(function(){o.resolve(cordova.plugins.notification.badge.decrease(n,t,r))},function(){o.reject("You do not have permission to decrease Badge")}),o.promise},configure:function(e){return cordova.plugins.notification.badge.configure(e)}}}]),angular.module("ngCordova.plugins.barcodeScanner",[]).factory("$cordovaBarcodeScanner",["$q",function(e){return{scan:function(n){var t=e.defer();return cordova.plugins.barcodeScanner.scan(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},encode:function(n,t){var r=e.defer();return n=n||"TEXT_TYPE",cordova.plugins.barcodeScanner.encode(n,t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.batteryStatus",[]).factory("$cordovaBatteryStatus",["$rootScope","$window","$timeout",function(e,n,t){var r=function(n){t(function(){e.$broadcast("$cordovaBatteryStatus:status",n)})},o=function(n){t(function(){e.$broadcast("$cordovaBatteryStatus:critical",n)})},i=function(n){t(function(){e.$broadcast("$cordovaBatteryStatus:low",n)})};return document.addEventListener("deviceready",function(){navigator.battery&&(n.addEventListener("batterystatus",r,!1),n.addEventListener("batterycritical",o,!1),n.addEventListener("batterylow",i,!1))},!1),!0}]).run(["$injector",function(e){e.get("$cordovaBatteryStatus")}]),angular.module("ngCordova.plugins.beacon",[]).factory("$cordovaBeacon",["$window","$rootScope","$timeout","$q",function(e,n,t,r){var o=null,i=null,a=null,c=null,s=null,u=null,l=null,d=null;return document.addEventListener("deviceready",function(){if(e.cordova&&e.cordova.plugins&&e.cordova.plugins.locationManager){var r=new e.cordova.plugins.locationManager.Delegate;r.didDetermineStateForRegion=function(e){t(function(){n.$broadcast("$cordovaBeacon:didDetermineStateForRegion",e)}),o&&o(e)},r.didStartMonitoringForRegion=function(e){t(function(){n.$broadcast("$cordovaBeacon:didStartMonitoringForRegion",e)}),i&&i(e)},r.didExitRegion=function(e){t(function(){n.$broadcast("$cordovaBeacon:didExitRegion",e)}),a&&a(e)},r.didEnterRegion=function(e){t(function(){n.$broadcast("$cordovaBeacon:didEnterRegion",e)}),c&&c(e)},r.didRangeBeaconsInRegion=function(e){t(function(){n.$broadcast("$cordovaBeacon:didRangeBeaconsInRegion",e)}),s&&s(e)},r.peripheralManagerDidStartAdvertising=function(e){t(function(){n.$broadcast("$cordovaBeacon:peripheralManagerDidStartAdvertising",e)}),u&&u(e)},r.peripheralManagerDidUpdateState=function(e){t(function(){n.$broadcast("$cordovaBeacon:peripheralManagerDidUpdateState",e)}),l&&l(e)},r.didChangeAuthorizationStatus=function(e){t(function(){n.$broadcast("$cordovaBeacon:didChangeAuthorizationStatus",e)}),d&&d(e)},e.cordova.plugins.locationManager.setDelegate(r)}},!1),{setCallbackDidDetermineStateForRegion:function(e){o=e},setCallbackDidStartMonitoringForRegion:function(e){i=e},setCallbackDidExitRegion:function(e){a=e},setCallbackDidEnterRegion:function(e){c=e},setCallbackDidRangeBeaconsInRegion:function(e){s=e},setCallbackPeripheralManagerDidStartAdvertising:function(e){u=e},setCallbackPeripheralManagerDidUpdateState:function(e){l=e},setCallbackDidChangeAuthorizationStatus:function(e){d=e},createBeaconRegion:function(n,t,r,o,i){return r=r||void 0,o=o||void 0,new e.cordova.plugins.locationManager.BeaconRegion(n,t,r,o,i)},isBluetoothEnabled:function(){return r.when(e.cordova.plugins.locationManager.isBluetoothEnabled())},enableBluetooth:function(){return r.when(e.cordova.plugins.locationManager.enableBluetooth())},disableBluetooth:function(){return r.when(e.cordova.plugins.locationManager.disableBluetooth())},startMonitoringForRegion:function(n){return r.when(e.cordova.plugins.locationManager.startMonitoringForRegion(n))},stopMonitoringForRegion:function(n){return r.when(e.cordova.plugins.locationManager.stopMonitoringForRegion(n))},requestStateForRegion:function(n){return r.when(e.cordova.plugins.locationManager.requestStateForRegion(n))},startRangingBeaconsInRegion:function(n){return r.when(e.cordova.plugins.locationManager.startRangingBeaconsInRegion(n))},stopRangingBeaconsInRegion:function(n){return r.when(e.cordova.plugins.locationManager.stopRangingBeaconsInRegion(n))},getAuthorizationStatus:function(){return r.when(e.cordova.plugins.locationManager.getAuthorizationStatus())},requestWhenInUseAuthorization:function(){return r.when(e.cordova.plugins.locationManager.requestWhenInUseAuthorization())},requestAlwaysAuthorization:function(){return r.when(e.cordova.plugins.locationManager.requestAlwaysAuthorization())},getMonitoredRegions:function(){return r.when(e.cordova.plugins.locationManager.getMonitoredRegions())},getRangedRegions:function(){return r.when(e.cordova.plugins.locationManager.getRangedRegions())},isRangingAvailable:function(){return r.when(e.cordova.plugins.locationManager.isRangingAvailable())},isMonitoringAvailableForClass:function(n){return r.when(e.cordova.plugins.locationManager.isMonitoringAvailableForClass(n))},startAdvertising:function(n,t){return r.when(e.cordova.plugins.locationManager.startAdvertising(n,t))},stopAdvertising:function(){return r.when(e.cordova.plugins.locationManager.stopAdvertising())},isAdvertisingAvailable:function(){return r.when(e.cordova.plugins.locationManager.isAdvertisingAvailable())},isAdvertising:function(){return r.when(e.cordova.plugins.locationManager.isAdvertising())},disableDebugLogs:function(){return r.when(e.cordova.plugins.locationManager.disableDebugLogs())},enableDebugNotifications:function(){return r.when(e.cordova.plugins.locationManager.enableDebugNotifications())},disableDebugNotifications:function(){return r.when(e.cordova.plugins.locationManager.disableDebugNotifications())},enableDebugLogs:function(){return r.when(e.cordova.plugins.locationManager.enableDebugLogs())},appendToDeviceLog:function(n){return r.when(e.cordova.plugins.locationManager.appendToDeviceLog(n))}}}]),angular.module("ngCordova.plugins.ble",[]).factory("$cordovaBLE",["$q","$timeout",function(e,n){return{scan:function(t,r){var o=e.defer();return ble.startScan(t,function(e){o.notify(e)},function(e){o.reject(e)}),n(function(){ble.stopScan(function(){o.resolve()},function(e){o.reject(e)})},1e3*r),o.promise},connect:function(n){var t=e.defer();return ble.connect(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},disconnect:function(n){var t=e.defer();return ble.disconnect(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},read:function(n,t,r){var o=e.defer();return ble.read(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},write:function(n,t,r,o){var i=e.defer();return ble.write(n,t,r,o,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise},writeCommand:function(n,t,r,o){var i=e.defer();return ble.writeCommand(n,t,r,o,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise},startNotification:function(n,t,r){var o=e.defer();return ble.startNotification(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},stopNotification:function(n,t,r){var o=e.defer();return ble.stopNotification(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},isConnected:function(n){var t=e.defer();return ble.isConnected(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},isEnabled:function(){var n=e.defer();return ble.isEnabled(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.bluetoothSerial",[]).factory("$cordovaBluetoothSerial",["$q","$window",function(e,n){return{connect:function(t){var r=e.defer(),o=e.defer(),i=!1;return n.bluetoothSerial.connect(t,function(){i=!0,r.resolve(o)},function(e){i===!1&&o.reject(e),r.reject(e)}),r.promise},connectInsecure:function(t){var r=e.defer();return n.bluetoothSerial.connectInsecure(t,function(){r.resolve()},function(e){r.reject(e)}),r.promise},disconnect:function(){var t=e.defer();return n.bluetoothSerial.disconnect(function(){t.resolve()},function(e){t.reject(e)}),t.promise},list:function(){var t=e.defer();return n.bluetoothSerial.list(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},discoverUnpaired:function(){var t=e.defer();return n.bluetoothSerial.discoverUnpaired(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},setDeviceDiscoveredListener:function(){var t=e.defer();return n.bluetoothSerial.setDeviceDiscoveredListener(function(e){t.notify(e)}),t.promise},clearDeviceDiscoveredListener:function(){n.bluetoothSerial.clearDeviceDiscoveredListener()},showBluetoothSettings:function(){var t=e.defer();return n.bluetoothSerial.showBluetoothSettings(function(){t.resolve()},function(e){t.reject(e)}),t.promise},isEnabled:function(){var t=e.defer();return n.bluetoothSerial.isEnabled(function(){t.resolve()},function(){t.reject()}),t.promise},enable:function(){var t=e.defer();return n.bluetoothSerial.enable(function(){t.resolve()},function(){t.reject()}),t.promise},isConnected:function(){var t=e.defer();return n.bluetoothSerial.isConnected(function(){t.resolve()},function(){t.reject()}),t.promise},available:function(){var t=e.defer();return n.bluetoothSerial.available(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},read:function(){var t=e.defer();return n.bluetoothSerial.read(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},readUntil:function(t){var r=e.defer();return n.bluetoothSerial.readUntil(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},write:function(t){var r=e.defer();return n.bluetoothSerial.write(t,function(){r.resolve()},function(e){r.reject(e)}),r.promise},subscribe:function(t){var r=e.defer();return n.bluetoothSerial.subscribe(t,function(e){r.notify(e)},function(e){r.reject(e)}),r.promise},subscribeRawData:function(){var t=e.defer();return n.bluetoothSerial.subscribeRawData(function(e){t.notify(e)},function(e){t.reject(e)}),t.promise},unsubscribe:function(){var t=e.defer();return n.bluetoothSerial.unsubscribe(function(){t.resolve()},function(e){t.reject(e)}),t.promise},unsubscribeRawData:function(){var t=e.defer();return n.bluetoothSerial.unsubscribeRawData(function(){t.resolve()},function(e){t.reject(e)}),t.promise},clear:function(){var t=e.defer();return n.bluetoothSerial.clear(function(){t.resolve()},function(e){t.reject(e)}),t.promise},readRSSI:function(){var t=e.defer();return n.bluetoothSerial.readRSSI(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.brightness",[]).factory("$cordovaBrightness",["$q","$window",function(e,n){return{get:function(){var t=e.defer();return n.cordova?n.cordova.plugins.brightness.getBrightness(function(e){t.resolve(e)},function(e){t.reject(e)}):t.reject("Not supported without cordova.js"),t.promise},set:function(t){var r=e.defer();return n.cordova?n.cordova.plugins.brightness.setBrightness(t,function(e){r.resolve(e)},function(e){r.reject(e)}):r.reject("Not supported without cordova.js"),r.promise},setKeepScreenOn:function(t){var r=e.defer();return n.cordova?n.cordova.plugins.brightness.setKeepScreenOn(t,function(e){r.resolve(e)},function(e){r.reject(e)}):r.reject("Not supported without cordova.js"),r.promise}}}]),angular.module("ngCordova.plugins.calendar",[]).factory("$cordovaCalendar",["$q","$window",function(e,n){return{createCalendar:function(t){var r=e.defer(),o=n.plugins.calendar.getCreateCalendarOptions();return"string"==typeof t?o.calendarName=t:o=angular.extend(o,t),n.plugins.calendar.createCalendar(o,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},deleteCalendar:function(t){var r=e.defer();return n.plugins.calendar.deleteCalendar(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEvent:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.createEvent(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEventWithOptions:function(t){var r=e.defer(),o=[],i=window.plugins.calendar.getCalendarOptions(),a={title:null,location:null,notes:null,startDate:null,endDate:null};o=Object.keys(a);for(var c in t)-1===o.indexOf(c)?i[c]=t[c]:a[c]=t[c];return n.plugins.calendar.createEventWithOptions(a.title,a.location,a.notes,new Date(a.startDate),new Date(a.endDate),i,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEventInteractively:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.createEventInteractively(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},createEventInNamedCalendar:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null,calendarName:null};return o=angular.extend(o,t),n.plugins.calendar.createEventInNamedCalendar(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),o.calendarName,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},findEvent:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.findEvent(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},listEventsInRange:function(t,r){var o=e.defer();return n.plugins.calendar.listEventsInRange(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},listCalendars:function(){var t=e.defer();return n.plugins.calendar.listCalendars(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},findAllEventsInNamedCalendar:function(t){var r=e.defer();return n.plugins.calendar.findAllEventsInNamedCalendar(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},modifyEvent:function(t){var r=e.defer(),o={title:null,location:null,notes:null,startDate:null,endDate:null,newTitle:null,newLocation:null,newNotes:null,newStartDate:null,newEndDate:null};return o=angular.extend(o,t),n.plugins.calendar.modifyEvent(o.title,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),o.newTitle,o.newLocation,o.newNotes,new Date(o.newStartDate),new Date(o.newEndDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},deleteEvent:function(t){var r=e.defer(),o={newTitle:null,location:null,notes:null,startDate:null,endDate:null};return o=angular.extend(o,t),n.plugins.calendar.deleteEvent(o.newTitle,o.location,o.notes,new Date(o.startDate),new Date(o.endDate),function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.camera",[]).factory("$cordovaCamera",["$q",function(e){return{getPicture:function(n){var t=e.defer();return navigator.camera?(navigator.camera.getPicture(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)},cleanup:function(){var n=e.defer();return navigator.camera.cleanup(function(){n.resolve()},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.capture",[]).factory("$cordovaCapture",["$q",function(e){return{captureAudio:function(n){var t=e.defer();return navigator.device.capture?(navigator.device.capture.captureAudio(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)},captureImage:function(n){var t=e.defer();return navigator.device.capture?(navigator.device.capture.captureImage(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)},captureVideo:function(n){var t=e.defer();return navigator.device.capture?(navigator.device.capture.captureVideo(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise):(t.resolve(null),t.promise)}}}]),angular.module("ngCordova.plugins.cardIO",[]).provider("$cordovaNgCardIO",[function(){var e=["card_type","redacted_card_number","card_number","expiry_month","expiry_year","short_expiry_year","cvv","zip"],n={expiry:!0,cvv:!0,zip:!1,suppressManual:!1,suppressConfirm:!1,hideLogo:!0};this.setCardIOResponseFields=function(n){n&&angular.isArray(n)&&(e=n)},this.setScanerConfig=function(e){e&&angular.isObject(e)&&(n.expiry=e.expiry||!0,n.cvv=e.cvv||!0,n.zip=e.zip||!1,n.suppressManual=e.suppressManual||!1,n.suppressConfirm=e.suppressConfirm||!1,n.hideLogo=e.hideLogo||!0)},this.$get=["$q",function(t){return{scanCard:function(){var r=t.defer();return CardIO.scan(n,function(n){if(null===n)r.reject(null);else{for(var t={},o=0,i=e.length;i>o;o++){var a=e[o];"short_expiry_year"===a?t[a]=String(n.expiry_year).substr(2,2)||"":t[a]=n[a]||""}r.resolve(t)}},function(){r.reject(null)}),r.promise}}}]}]),angular.module("ngCordova.plugins.clipboard",[]).factory("$cordovaClipboard",["$q","$window",function(e,n){return{copy:function(t){var r=e.defer();return n.cordova.plugins.clipboard.copy(t,function(){r.resolve()},function(){r.reject()}),r.promise},paste:function(){var t=e.defer();return n.cordova.plugins.clipboard.paste(function(e){t.resolve(e)},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.contacts",[]).factory("$cordovaContacts",["$q",function(e){return{save:function(n){var t=e.defer(),r=navigator.contacts.create(n);return r.save(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},remove:function(n){var t=e.defer(),r=navigator.contacts.create(n);return r.remove(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},clone:function(e){var n=navigator.contacts.create(e);return n.clone(e)},find:function(n){var t=e.defer(),r=n.fields||["id","displayName"];return delete n.fields,0===Object.keys(n).length?navigator.contacts.find(r,function(e){t.resolve(e)},function(e){t.reject(e)}):navigator.contacts.find(r,function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},pickContact:function(){var n=e.defer();return navigator.contacts.pickContact(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.datePicker",[]).factory("$cordovaDatePicker",["$window","$q",function(e,n){return{show:function(t){var r=n.defer();return t=t||{date:new Date,mode:"date"},e.datePicker.show(t,function(e){r.resolve(e)}),r.promise}}}]),angular.module("ngCordova.plugins.device",[]).factory("$cordovaDevice",[function(){return{getDevice:function(){return device},getCordova:function(){return device.cordova},getModel:function(){return device.model},getName:function(){return device.name},getPlatform:function(){return device.platform},getUUID:function(){return device.uuid},getVersion:function(){return device.version},getManufacturer:function(){return device.manufacturer}}}]),angular.module("ngCordova.plugins.deviceMotion",[]).factory("$cordovaDeviceMotion",["$q",function(e){return{getCurrentAcceleration:function(){var n=e.defer();return(angular.isUndefined(navigator.accelerometer)||!angular.isFunction(navigator.accelerometer.getCurrentAcceleration))&&n.reject("Device do not support watchAcceleration"),navigator.accelerometer.getCurrentAcceleration(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},watchAcceleration:function(n){var t=e.defer();(angular.isUndefined(navigator.accelerometer)||!angular.isFunction(navigator.accelerometer.watchAcceleration))&&t.reject("Device do not support watchAcceleration");var r=navigator.accelerometer.watchAcceleration(function(e){t.notify(e)},function(e){t.reject(e)},n);return t.promise.cancel=function(){navigator.accelerometer.clearWatch(r)},t.promise.clearWatch=function(e){navigator.accelerometer.clearWatch(e||r)},t.promise.watchID=r,t.promise},clearWatch:function(e){return navigator.accelerometer.clearWatch(e)}}}]),angular.module("ngCordova.plugins.deviceOrientation",[]).factory("$cordovaDeviceOrientation",["$q",function(e){var n={frequency:3e3};return{getCurrentHeading:function(){var n=e.defer();return navigator.compass?(navigator.compass.getCurrentHeading(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise):(n.reject("No compass on Device"),n.promise)},watchHeading:function(t){var r=e.defer();if(!navigator.compass)return r.reject("No compass on Device"),r.promise;var o=angular.extend(n,t),i=navigator.compass.watchHeading(function(e){r.notify(e)},function(e){r.reject(e)},o);return r.promise.cancel=function(){navigator.compass.clearWatch(i)},r.promise.clearWatch=function(e){navigator.compass.clearWatch(e||i)},r.promise.watchID=i,r.promise},clearWatch:function(e){return navigator.compass.clearWatch(e)}}}]),angular.module("ngCordova.plugins.dialogs",[]).factory("$cordovaDialogs",["$q","$window",function(e,n){return{alert:function(t,r,o){var i=e.defer();return n.navigator.notification?navigator.notification.alert(t,function(){i.resolve()},r,o):(n.alert(t),i.resolve()),i.promise},confirm:function(t,r,o){var i=e.defer();return n.navigator.notification?navigator.notification.confirm(t,function(e){i.resolve(e)},r,o):n.confirm(t)?i.resolve(1):i.resolve(2),i.promise},prompt:function(t,r,o,i){var a=e.defer();if(n.navigator.notification)navigator.notification.prompt(t,function(e){a.resolve(e)},r,o,i);else{var c=n.prompt(t,i);null!==c?a.resolve({input1:c,buttonIndex:1}):a.resolve({input1:c,buttonIndex:2})}return a.promise},beep:function(e){return navigator.notification.beep(e)}}}]),angular.module("ngCordova.plugins.emailComposer",[]).factory("$cordovaEmailComposer",["$q",function(e){return{isAvailable:function(){var n=e.defer();return cordova.plugins.email.isAvailable(function(e){e?n.resolve():n.reject()}),n.promise},open:function(n){var t=e.defer();return cordova.plugins.email.open(n,function(){t.reject()}),t.promise},addAlias:function(e,n){cordova.plugins.email.addAlias(e,n)}}}]),angular.module("ngCordova.plugins.facebook",[]).provider("$cordovaFacebook",[function(){this.browserInit=function(e,n){this.appID=e,this.appVersion=n||"v2.0",facebookConnectPlugin.browserInit(this.appID,this.appVersion)},this.$get=["$q",function(e){return{login:function(n){var t=e.defer();return facebookConnectPlugin.login(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},showDialog:function(n){var t=e.defer();return facebookConnectPlugin.showDialog(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},api:function(n,t){var r=e.defer();return facebookConnectPlugin.api(n,t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},getAccessToken:function(){var n=e.defer();return facebookConnectPlugin.getAccessToken(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getLoginStatus:function(){var n=e.defer();return facebookConnectPlugin.getLoginStatus(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},logout:function(){var n=e.defer();return facebookConnectPlugin.logout(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}}]}]),angular.module("ngCordova.plugins.facebookAds",[]).factory("$cordovaFacebookAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.FacebookAds.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.FacebookAds.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.FacebookAds.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.FacebookAds.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.FacebookAds.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.FacebookAds.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.FacebookAds.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.FacebookAds.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.file",[]).constant("$cordovaFileError",{1:"NOT_FOUND_ERR",2:"SECURITY_ERR",3:"ABORT_ERR",4:"NOT_READABLE_ERR",5:"ENCODING_ERR",6:"NO_MODIFICATION_ALLOWED_ERR",7:"INVALID_STATE_ERR",8:"SYNTAX_ERR",9:"INVALID_MODIFICATION_ERR",10:"QUOTA_EXCEEDED_ERR",11:"TYPE_MISMATCH_ERR",12:"PATH_EXISTS_ERR"}).provider("$cordovaFile",[function(){this.$get=["$q","$window","$cordovaFileError",function(e,n,t){return{getFreeDiskSpace:function(){var n=e.defer();return cordova.exec(function(e){n.resolve(e)},function(e){n.reject(e)},"File","getFreeDiskSpace",[]),n.promise},checkDir:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("directory cannot start with /");try{var a=r+o;n.resolveLocalFileSystemURL(a,function(e){e.isDirectory===!0?i.resolve(e):i.reject({code:13,message:"input is not a directory"})},function(e){e.message=t[e.code],i.reject(e)})}catch(c){c.message=t[c.code],i.reject(c)}return i.promise},checkFile:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("directory cannot start with /");try{var a=r+o;n.resolveLocalFileSystemURL(a,function(e){e.isFile===!0?i.resolve(e):i.reject({code:13,message:"input is not a file"})},function(e){e.message=t[e.code],i.reject(e)})}catch(c){c.message=t[c.code],i.reject(c)}return i.promise},createDir:function(r,o,i){var a=e.defer();/^\//.test(o)&&a.reject("directory cannot start with /"),i=i?!1:!0;var c={create:!0,exclusive:i};try{n.resolveLocalFileSystemURL(r,function(e){e.getDirectory(o,c,function(e){a.resolve(e)},function(e){e.message=t[e.code],a.reject(e)})},function(e){e.message=t[e.code],a.reject(e)})}catch(s){s.message=t[s.code],a.reject(s)}return a.promise},createFile:function(r,o,i){var a=e.defer();/^\//.test(o)&&a.reject("file-name cannot start with /"),i=i?!1:!0;var c={create:!0,exclusive:i};try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,c,function(e){a.resolve(e)},function(e){e.message=t[e.code],a.reject(e)})},function(e){e.message=t[e.code],a.reject(e)})}catch(s){s.message=t[s.code],a.reject(s)}return a.promise},removeDir:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getDirectory(o,{create:!1},function(e){e.remove(function(){i.resolve({success:!0,fileRemoved:e})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})}catch(a){a.message=t[a.code],i.reject(a)}return i.promise},removeFile:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1},function(e){e.remove(function(){i.resolve({success:!0,fileRemoved:e})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],
i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})}catch(a){a.message=t[a.code],i.reject(a)}return i.promise},removeRecursively:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getDirectory(o,{create:!1},function(e){e.removeRecursively(function(){i.resolve({success:!0,fileRemoved:e})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})}catch(a){a.message=t[a.code],i.reject(a)}return i.promise},writeFile:function(r,o,i,a){var c=e.defer();/^\//.test(o)&&c.reject("file-name cannot start with /"),a=a?!1:!0;var s={create:!0,exclusive:a};try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,s,function(e){e.createWriter(function(e){s.append===!0&&e.seek(e.length),s.truncate&&e.truncate(s.truncate),e.onwriteend=function(e){this.error?c.reject(this.error):c.resolve(e)},e.write(i),c.promise.abort=function(){e.abort()}})},function(e){e.message=t[e.code],c.reject(e)})},function(e){e.message=t[e.code],c.reject(e)})}catch(u){u.message=t[u.code],c.reject(u)}return c.promise},writeExistingFile:function(r,o,i){var a=e.defer();/^\//.test(o)&&a.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1},function(e){e.createWriter(function(e){e.seek(e.length),e.onwriteend=function(e){this.error?a.reject(this.error):a.resolve(e)},e.write(i),a.promise.abort=function(){e.abort()}})},function(e){e.message=t[e.code],a.reject(e)})},function(e){e.message=t[e.code],a.reject(e)})}catch(c){c.message=t[c.code],a.reject(c)}return a.promise},readAsText:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsText(e)})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})}catch(a){a.message=t[a.code],i.reject(a)}return i.promise},readAsDataURL:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsDataURL(e)})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})}catch(a){a.message=t[a.code],i.reject(a)}return i.promise},readAsBinaryString:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsBinaryString(e)})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})}catch(a){a.message=t[a.code],i.reject(a)}return i.promise},readAsArrayBuffer:function(r,o){var i=e.defer();/^\//.test(o)&&i.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(e){void 0!==e.target.result||null!==e.target.result?i.resolve(e.target.result):void 0!==e.target.error||null!==e.target.error?i.reject(e.target.error):i.reject({code:null,message:"READER_ONLOADEND_ERR"})},n.readAsArrayBuffer(e)})},function(e){e.message=t[e.code],i.reject(e)})},function(e){e.message=t[e.code],i.reject(e)})}catch(a){a.message=t[a.code],i.reject(a)}return i.promise},moveFile:function(t,r,o,i){var a=e.defer();i=i||r,(/^\//.test(r)||/^\//.test(i))&&a.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(t,function(e){e.getFile(r,{create:!1},function(e){n.resolveLocalFileSystemURL(o,function(n){e.moveTo(n,i,function(e){a.resolve(e)},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})}catch(c){a.reject(c)}return a.promise},moveDir:function(t,r,o,i){var a=e.defer();i=i||r,(/^\//.test(r)||/^\//.test(i))&&a.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(t,function(e){e.getDirectory(r,{create:!1},function(e){n.resolveLocalFileSystemURL(o,function(n){e.moveTo(n,i,function(e){a.resolve(e)},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})},function(e){a.reject(e)})}catch(c){a.reject(c)}return a.promise},copyDir:function(r,o,i,a){var c=e.defer();a=a||o,(/^\//.test(o)||/^\//.test(a))&&c.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getDirectory(o,{create:!1,exclusive:!1},function(e){n.resolveLocalFileSystemURL(i,function(n){e.copyTo(n,a,function(e){c.resolve(e)},function(e){e.message=t[e.code],c.reject(e)})},function(e){e.message=t[e.code],c.reject(e)})},function(e){e.message=t[e.code],c.reject(e)})},function(e){e.message=t[e.code],c.reject(e)})}catch(s){s.message=t[s.code],c.reject(s)}return c.promise},copyFile:function(r,o,i,a){var c=e.defer();a=a||o,/^\//.test(o)&&c.reject("file-name cannot start with /");try{n.resolveLocalFileSystemURL(r,function(e){e.getFile(o,{create:!1,exclusive:!1},function(e){n.resolveLocalFileSystemURL(i,function(n){e.copyTo(n,a,function(e){c.resolve(e)},function(e){e.message=t[e.code],c.reject(e)})},function(e){e.message=t[e.code],c.reject(e)})},function(e){e.message=t[e.code],c.reject(e)})},function(e){e.message=t[e.code],c.reject(e)})}catch(s){s.message=t[s.code],c.reject(s)}return c.promise}}}]}]),angular.module("ngCordova.plugins.fileOpener2",[]).factory("$cordovaFileOpener2",["$q",function(e){return{open:function(n,t){var r=e.defer();return cordova.plugins.fileOpener2.open(n,t,{error:function(e){r.reject(e)},success:function(){r.resolve()}}),r.promise},uninstall:function(n){var t=e.defer();return cordova.plugins.fileOpener2.uninstall(n,{error:function(e){t.reject(e)},success:function(){t.resolve()}}),t.promise},appIsInstalled:function(n){var t=e.defer();return cordova.plugins.fileOpener2.appIsInstalled(n,{success:function(e){t.resolve(e)}}),t.promise}}}]),angular.module("ngCordova.plugins.fileTransfer",[]).factory("$cordovaFileTransfer",["$q","$timeout",function(e,n){return{download:function(t,r,o,i){var a=e.defer(),c=new FileTransfer,s=o&&o.encodeURI===!1?t:encodeURI(t);return o&&void 0!==o.timeout&&null!==o.timeout&&(n(function(){c.abort()},o.timeout),o.timeout=null),c.onprogress=function(e){a.notify(e)},a.promise.abort=function(){c.abort()},c.download(s,r,a.resolve,a.reject,i,o),a.promise},upload:function(t,r,o,i){var a=e.defer(),c=new FileTransfer,s=o&&o.encodeURI===!1?t:encodeURI(t);return o&&void 0!==o.timeout&&null!==o.timeout&&(n(function(){c.abort()},o.timeout),o.timeout=null),c.onprogress=function(e){a.notify(e)},a.promise.abort=function(){c.abort()},c.upload(r,s,a.resolve,a.reject,o,i),a.promise}}}]),angular.module("ngCordova.plugins.flashlight",[]).factory("$cordovaFlashlight",["$q","$window",function(e,n){return{available:function(){var t=e.defer();return n.plugins.flashlight.available(function(e){t.resolve(e)}),t.promise},switchOn:function(){var t=e.defer();return n.plugins.flashlight.switchOn(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},switchOff:function(){var t=e.defer();return n.plugins.flashlight.switchOff(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},toggle:function(){var t=e.defer();return n.plugins.flashlight.toggle(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.flurryAds",[]).factory("$cordovaFlurryAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.FlurryAds.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.FlurryAds.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.FlurryAds.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.FlurryAds.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.FlurryAds.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.FlurryAds.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.FlurryAds.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.FlurryAds.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.ga",[]).factory("$cordovaGA",["$q","$window",function(e,n){return{init:function(t,r){var o=e.defer();return r=r>=0?r:10,n.plugins.gaPlugin.init(function(e){o.resolve(e)},function(e){o.reject(e)},t,r),o.promise},trackEvent:function(t,r,o,i,a,c){var s=e.defer();return n.plugins.gaPlugin.trackEvent(function(e){s.resolve(e)},function(e){s.reject(e)},o,i,a,c),s.promise},trackPage:function(t,r,o){var i=e.defer();return n.plugins.gaPlugin.trackPage(function(e){i.resolve(e)},function(e){i.reject(e)},o),i.promise},setVariable:function(t,r,o,i){var a=e.defer();return n.plugins.gaPlugin.setVariable(function(e){a.resolve(e)},function(e){a.reject(e)},o,i),a.promise},exit:function(){var t=e.defer();return n.plugins.gaPlugin.exit(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.geolocation",[]).factory("$cordovaGeolocation",["$q",function(e){return{getCurrentPosition:function(n){var t=e.defer();return navigator.geolocation.getCurrentPosition(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},watchPosition:function(n){var t=e.defer(),r=navigator.geolocation.watchPosition(function(e){t.notify(e)},function(e){t.reject(e)},n);return t.promise.cancel=function(){navigator.geolocation.clearWatch(r)},t.promise.clearWatch=function(e){navigator.geolocation.clearWatch(e||r)},t.promise.watchID=r,t.promise},clearWatch:function(e){return navigator.geolocation.clearWatch(e)}}}]),angular.module("ngCordova.plugins.globalization",[]).factory("$cordovaGlobalization",["$q",function(e){return{getPreferredLanguage:function(){var n=e.defer();return navigator.globalization.getPreferredLanguage(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getLocaleName:function(){var n=e.defer();return navigator.globalization.getLocaleName(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},getFirstDayOfWeek:function(){var n=e.defer();return navigator.globalization.getFirstDayOfWeek(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},dateToString:function(n,t){var r=e.defer();return navigator.globalization.dateToString(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},stringToDate:function(n,t){var r=e.defer();return navigator.globalization.stringToDate(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},getDatePattern:function(n){var t=e.defer();return navigator.globalization.getDatePattern(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},getDateNames:function(n){var t=e.defer();return navigator.globalization.getDateNames(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},isDayLightSavingsTime:function(n){var t=e.defer();return navigator.globalization.isDayLightSavingsTime(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},numberToString:function(n,t){var r=e.defer();return navigator.globalization.numberToString(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},stringToNumber:function(n,t){var r=e.defer();return navigator.globalization.stringToNumber(n,function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},getNumberPattern:function(n){var t=e.defer();return navigator.globalization.getNumberPattern(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise},getCurrencyPattern:function(n){var t=e.defer();return navigator.globalization.getCurrencyPattern(n,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.googleAds",[]).factory("$cordovaGoogleAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.AdMob.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.AdMob.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.AdMob.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.AdMob.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.AdMob.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.AdMob.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.AdMob.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.AdMob.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.googleAnalytics",[]).factory("$cordovaGoogleAnalytics",["$q","$window",function(e,n){return{startTrackerWithId:function(t){var r=e.defer();return n.analytics.startTrackerWithId(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},setUserId:function(t){var r=e.defer();return n.analytics.setUserId(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},debugMode:function(){var t=e.defer();return n.analytics.debugMode(function(e){t.resolve(e)},function(){t.reject()}),t.promise},trackView:function(t){var r=e.defer();return n.analytics.trackView(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},addCustomDimension:function(t,r){var o=e.defer();return n.analytics.addCustomDimension(t,r,function(){o.resolve()},function(e){o.reject(e)}),o.promise},trackEvent:function(t,r,o,i){var a=e.defer();return n.analytics.trackEvent(t,r,o,i,function(e){a.resolve(e)},function(e){a.reject(e)}),a.promise},trackException:function(t,r){var o=e.defer();return n.analytics.trackException(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},trackTiming:function(t,r,o,i){var a=e.defer();return n.analytics.trackTiming(t,r,o,i,function(e){a.resolve(e)},function(e){a.reject(e)}),a.promise},addTransaction:function(t,r,o,i,a,c){var s=e.defer();return n.analytics.addTransaction(t,r,o,i,a,c,function(e){s.resolve(e)},function(e){s.reject(e)}),s.promise},addTransactionItem:function(t,r,o,i,a,c,s){var u=e.defer();return n.analytics.addTransactionItem(t,r,o,i,a,c,s,function(e){u.resolve(e)},function(e){u.reject(e)}),u.promise}}}]),angular.module("ngCordova.plugins.googleMap",[]).factory("$cordovaGoogleMap",["$q","$window",function(e,n){var t=null;return{getMap:function(r){var o=e.defer();if(n.plugin.google.maps){var i=document.getElementById("map_canvas");t=n.plugin.google.maps.Map.getMap(r),t.setDiv(i),o.resolve(t)}else o.reject(null);return o.promise},isMapLoaded:function(){return!!t},addMarker:function(n){var r=e.defer();return t.addMarker(n,function(e){r.resolve(e)}),r.promise},getMapTypeIds:function(){return n.plugin.google.maps.mapTypeId},setVisible:function(n){var r=e.defer();return t.setVisible(n),r.promise},cleanup:function(){t=null}}}]),angular.module("ngCordova.plugins.googlePlayGame",[]).factory("$cordovaGooglePlayGame",["$q",function(e){return{auth:function(){var n=e.defer();return googleplaygame.auth(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},signout:function(){var n=e.defer();return googleplaygame.signout(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},isSignedIn:function(){var n=e.defer();return googleplaygame.isSignedIn(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},showPlayer:function(){var n=e.defer();return googleplaygame.showPlayer(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},submitScore:function(n){var t=e.defer();return googleplaygame.submitScore(n,function(e){return t.resolve(e)},function(e){return t.reject(e)}),t.promise},showAllLeaderboards:function(){var n=e.defer();return googleplaygame.showAllLeaderboards(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise},showLeaderboard:function(n){var t=e.defer();return googleplaygame.showLeaderboard(n,function(e){return t.resolve(e)},function(e){return t.reject(e)}),t.promise},unlockAchievement:function(n){var t=e.defer();return googleplaygame.unlockAchievement(n,function(e){return t.resolve(e)},function(e){return t.reject(e)}),t.promise},incrementAchievement:function(n){var t=e.defer();return googleplaygame.incrementAchievement(n,function(e){return t.resolve(e)},function(e){return t.reject(e)}),t.promise},showAchievements:function(){var n=e.defer();return googleplaygame.showAchievements(function(e){return n.resolve(e)},function(e){return n.reject(e)}),n.promise}}}]),angular.module("ngCordova.plugins.googlePlus",[]).factory("$cordovaGooglePlus",["$q","$window",function(e,n){return{login:function(t){var r=e.defer();return void 0===t&&(t={}),n.plugins.googleplus.login({iOSApiKey:t},function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},silentLogin:function(t){var r=e.defer();return void 0===t&&(t={}),n.plugins.googleplus.trySilentLogin({iOSApiKey:t},function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},logout:function(){var t=e.defer();n.plugins.googleplus.logout(function(e){t.resolve(e)})},disconnect:function(){var t=e.defer();n.plugins.googleplus.disconnect(function(e){t.resolve(e)})},isAvailable:function(){var t=e.defer();return n.plugins.googleplus.isAvailable(function(e){e?t.resolve(e):t.reject(e)}),t.promise}}}]),angular.module("ngCordova.plugins.healthKit",[]).factory("$cordovaHealthKit",["$q","$window",function(e,n){return{isAvailable:function(){var t=e.defer();return n.plugins.healthkit.available(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise},checkAuthStatus:function(t){var r=e.defer();return t=t||"HKQuantityTypeIdentifierHeight",n.plugins.healthkit.checkAuthStatus({type:t},function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},requestAuthorization:function(t,r){var o=e.defer();return t=t||["HKCharacteristicTypeIdentifierDateOfBirth","HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight"],r=r||["HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight","HKQuantityTypeIdentifierDistanceCycling"],n.plugins.healthkit.requestAuthorization({readTypes:t,writeTypes:r},function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},readDateOfBirth:function(){var t=e.defer();return n.plugins.healthkit.readDateOfBirth(function(e){t.resolve(e)},function(e){t.resolve(e)}),t.promise},readGender:function(){var t=e.defer();return n.plugins.healthkit.readGender(function(e){t.resolve(e)},function(e){t.resolve(e)}),t.promise},saveWeight:function(t,r,o){var i=e.defer();return n.plugins.healthkit.saveWeight({unit:r||"lb",amount:t,date:o||new Date},function(e){i.resolve(e)},function(e){i.resolve(e)}),i.promise},readWeight:function(t){var r=e.defer();return n.plugins.healthkit.readWeight({unit:t||"lb"},function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},saveHeight:function(t,r,o){var i=e.defer();return n.plugins.healthkit.saveHeight({unit:r||"in",amount:t,date:o||new Date},function(e){i.resolve(e)},function(e){i.resolve(e)}),i.promise},readHeight:function(t){var r=e.defer();return n.plugins.healthkit.readHeight({unit:t||"in"},function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},findWorkouts:function(){var t=e.defer();return n.plugins.healthkit.findWorkouts({},function(e){t.resolve(e)},function(e){t.resolve(e)}),t.promise},saveWorkout:function(t){var r=e.defer();return n.plugins.healthkit.saveWorkout(t,function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise},querySampleType:function(t){var r=e.defer();return n.plugins.healthkit.querySampleType(t,function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise}}}]),angular.module("ngCordova.plugins.httpd",[]).factory("$cordovaHttpd",["$q",function(e){return{startServer:function(n){var t=e.defer();return cordova.plugins.CorHttpd.startServer(n,function(){t.resolve()},function(){t.reject()}),t.promise},stopServer:function(){var n=e.defer();return cordova.plugins.CorHttpd.stopServer(function(){n.resolve()},function(){n.reject()}),n.promise},getURL:function(){var n=e.defer();return cordova.plugins.CorHttpd.getURL(function(e){n.resolve(e)},function(){n.reject()}),n.promise},getLocalPath:function(){var n=e.defer();return cordova.plugins.CorHttpd.getLocalPath(function(e){n.resolve(e)},function(){n.reject()}),n.promise}}}]),angular.module("ngCordova.plugins.iAd",[]).factory("$cordovaiAd",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.iAd.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.iAd.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.iAd.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.iAd.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.iAd.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.iAd.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.iAd.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.iAd.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.imagePicker",[]).factory("$cordovaImagePicker",["$q","$window",function(e,n){return{getPictures:function(t){var r=e.defer();return n.imagePicker.getPictures(function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise}}}]),angular.module("ngCordova.plugins.inAppBrowser",[]).provider("$cordovaInAppBrowser",[function(){var e,n=this.defaultOptions={};this.setDefaultOptions=function(e){n=angular.extend(n,e)},this.$get=["$rootScope","$q","$window","$timeout",function(t,r,o,i){return{open:function(a,c,s){var u=r.defer();if(s&&!angular.isObject(s))return u.reject("options must be an object"),u.promise;var l=angular.extend({},n,s),d=[];angular.forEach(l,function(e,n){d.push(n+"="+e)});var f=d.join();return e=o.open(a,c,f),e.addEventListener("loadstart",function(e){i(function(){t.$broadcast("$cordovaInAppBrowser:loadstart",e)})},!1),e.addEventListener("loadstop",function(e){u.resolve(e),i(function(){t.$broadcast("$cordovaInAppBrowser:loadstop",e)})},!1),e.addEventListener("loaderror",function(e){u.reject(e),i(function(){t.$broadcast("$cordovaInAppBrowser:loaderror",e)})},!1),e.addEventListener("exit",function(e){i(function(){t.$broadcast("$cordovaInAppBrowser:exit",e)})},!1),u.promise},close:function(){e.close(),e=null},show:function(){e.show()},executeScript:function(n){var t=r.defer();return e.executeScript(n,function(e){t.resolve(e)}),t.promise},insertCSS:function(n){var t=r.defer();return e.insertCSS(n,function(e){t.resolve(e)}),t.promise}}}]}]),angular.module("ngCordova.plugins.insomnia",[]).factory("$cordovaInsomnia",["$window",function(e){return{keepAwake:function(){return e.plugins.insomnia.keepAwake()},allowSleepAgain:function(){return e.plugins.insomnia.allowSleepAgain()}}}]),angular.module("ngCordova.plugins.instagram",[]).factory("$cordovaInstagram",["$q",function(e){return{share:function(n){var t=e.defer();return window.Instagram?(Instagram.share(n.image,n.caption,function(e){e?t.reject(e):t.resolve(!0)}),t.promise):(console.error("Tried to call Instagram.share but the Instagram plugin isn't installed!"),t.resolve(null),t.promise)},isInstalled:function(){var n=e.defer();return window.Instagram?(Instagram.isInstalled(function(e,t){e?n.reject(e):n.resolve(t)}),n.promise):(console.error("Tried to call Instagram.isInstalled but the Instagram plugin isn't installed!"),n.resolve(null),n.promise)}}}]),angular.module("ngCordova.plugins.keyboard",[]).factory("$cordovaKeyboard",["$rootScope",function(e){var n=function(){e.$evalAsync(function(){e.$broadcast("$cordovaKeyboard:show")})},t=function(){e.$evalAsync(function(){e.$broadcast("$cordovaKeyboard:hide")})};return document.addEventListener("deviceready",function(){cordova.plugins.Keyboard&&(window.addEventListener("native.keyboardshow",n,!1),window.addEventListener("native.keyboardhide",t,!1))}),{hideAccessoryBar:function(e){return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(e)},close:function(){return cordova.plugins.Keyboard.close()},show:function(){return cordova.plugins.Keyboard.show()},disableScroll:function(e){return cordova.plugins.Keyboard.disableScroll(e)},isVisible:function(){return cordova.plugins.Keyboard.isVisible},clearShowWatch:function(){document.removeEventListener("native.keyboardshow",n),e.$$listeners["$cordovaKeyboard:show"]=[]},clearHideWatch:function(){document.removeEventListener("native.keyboardhide",t),e.$$listeners["$cordovaKeyboard:hide"]=[]}}}]),angular.module("ngCordova.plugins.keychain",[]).factory("$cordovaKeychain",["$q",function(e){return{getForKey:function(n,t){var r=e.defer(),o=new Keychain;return o.getForKey(r.resolve,r.reject,n,t),r.promise},setForKey:function(n,t,r){var o=e.defer(),i=new Keychain;return i.setForKey(o.resolve,o.reject,n,t,r),o.promise},removeForKey:function(n,t){var r=e.defer(),o=new Keychain;return o.removeForKey(r.resolve,r.reject,n,t),r.promise}}}]),angular.module("ngCordova.plugins.launchNavigator",[]).factory("$cordovaLaunchNavigator",["$q",function(e){return{navigate:function(n,t,r){var o=e.defer();return launchnavigator.navigate(n,t,function(){o.resolve()},function(e){o.reject(e)},r),o.promise}}}]),angular.module("ngCordova.plugins.localNotification",[]).factory("$cordovaLocalNotification",["$q","$window","$rootScope","$timeout",function(e,n,t,r){return document.addEventListener("deviceready",function(){n.cordova&&n.cordova.plugins&&n.cordova.plugins.notification&&n.cordova.plugins.notification.local&&(n.cordova.plugins.notification.local.on("schedule",function(e,n){r(function(){t.$broadcast("$cordovaLocalNotification:schedule",e,n)})}),n.cordova.plugins.notification.local.on("trigger",function(e,n){r(function(){t.$broadcast("$cordovaLocalNotification:trigger",e,n)})}),n.cordova.plugins.notification.local.on("update",function(e,n){r(function(){t.$broadcast("$cordovaLocalNotification:update",e,n)})}),n.cordova.plugins.notification.local.on("clear",function(e,n){r(function(){t.$broadcast("$cordovaLocalNotification:clear",e,n)})}),n.cordova.plugins.notification.local.on("clearall",function(e){r(function(){t.$broadcast("$cordovaLocalNotification:clearall",e)})}),n.cordova.plugins.notification.local.on("cancel",function(e,n){r(function(){t.$broadcast("$cordovaLocalNotification:cancel",e,n)})}),n.cordova.plugins.notification.local.on("cancelall",function(e){r(function(){t.$broadcast("$cordovaLocalNotification:cancelall",e)})}),n.cordova.plugins.notification.local.on("click",function(e,n){r(function(){t.$broadcast("$cordovaLocalNotification:click",e,n)})}))},!1),{schedule:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.schedule(t,function(e){o.resolve(e)},r),o.promise},add:function(t,r){console.warn('Deprecated: use "schedule" instead.');var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.schedule(t,function(e){o.resolve(e)},r),o.promise},update:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.update(t,function(e){o.resolve(e)},r),o.promise},clear:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.clear(t,function(e){o.resolve(e)},r),o.promise},clearAll:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.clearAll(function(e){r.resolve(e)},t),r.promise},cancel:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.cancel(t,function(e){o.resolve(e)},r),o.promise},cancelAll:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.cancelAll(function(e){r.resolve(e)},t),r.promise},isPresent:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.isPresent(t,function(e){o.resolve(e)},r),o.promise},isScheduled:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.isScheduled(t,function(e){o.resolve(e)},r),o.promise},isTriggered:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.isTriggered(t,function(e){o.resolve(e)},r),o.promise},hasPermission:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.hasPermission(function(e){e?r.resolve(e):r.reject(e)},t),r.promise},registerPermission:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.registerPermission(function(e){e?r.resolve(e):r.reject(e)},t),r.promise},promptForPermission:function(t){console.warn('Deprecated: use "registerPermission" instead.');var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.registerPermission(function(e){e?r.resolve(e):r.reject(e)},t),r.promise},getAllIds:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.getAllIds(function(e){r.resolve(e)},t),r.promise},getIds:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.getIds(function(e){r.resolve(e)},t),r.promise},getScheduledIds:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.getScheduledIds(function(e){r.resolve(e)},t),r.promise},getTriggeredIds:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.getTriggeredIds(function(e){r.resolve(e)},t),r.promise},get:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.get(t,function(e){o.resolve(e)},r),o.promise},getAll:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.getAll(function(e){r.resolve(e)},t),r.promise},getScheduled:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getScheduled(t,function(e){o.resolve(e)},r),o.promise},getAllScheduled:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.getAllScheduled(function(e){r.resolve(e)},t),r.promise},getTriggered:function(t,r){var o=e.defer();return r=r||null,n.cordova.plugins.notification.local.getTriggered(t,function(e){o.resolve(e)},r),o.promise},getAllTriggered:function(t){var r=e.defer();return t=t||null,n.cordova.plugins.notification.local.getAllTriggered(function(e){r.resolve(e)},t),r.promise},getDefaults:function(){return n.cordova.plugins.notification.local.getDefaults()},setDefaults:function(e){n.cordova.plugins.notification.local.setDefaults(e)}}}]),angular.module("ngCordova.plugins.mMediaAds",[]).factory("$cordovaMMediaAds",["$q","$window",function(e,n){
return{setOptions:function(t){var r=e.defer();return n.mMedia.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.mMedia.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.mMedia.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.mMedia.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.mMedia.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.mMedia.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.mMedia.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.mMedia.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.media",[]).service("NewMedia",["$q","$interval",function(e,n){function t(e){angular.isDefined(u)||(u=n(function(){0>f&&(f=e.getDuration(),a&&f>0&&a.notify({duration:f})),e.getCurrentPosition(function(e){e>-1&&(d=e)},function(e){console.log("Error getting pos="+e)}),a&&a.notify({position:d})},1e3))}function r(){angular.isDefined(u)&&(n.cancel(u),u=void 0)}function o(){d=-1,f=-1}function i(e){this.media=new Media(e,function(e){r(),o(),a.resolve(e)},function(e){r(),o(),a.reject(e)},function(e){l=e,a.notify({status:l})})}var a,c,s,u,l=null,d=-1,f=-1;return i.prototype.play=function(n){return a=e.defer(),"object"!=typeof n&&(n={}),this.media.play(n),t(this.media),a.promise},i.prototype.pause=function(){r(),this.media.pause()},i.prototype.stop=function(){this.media.stop()},i.prototype.release=function(){this.media.release(),this.media=void 0},i.prototype.seekTo=function(e){this.media.seekTo(e)},i.prototype.setVolume=function(e){this.media.setVolume(e)},i.prototype.startRecord=function(){this.media.startRecord()},i.prototype.stopRecord=function(){this.media.stopRecord()},i.prototype.currentTime=function(){return c=e.defer(),this.media.getCurrentPosition(function(e){c.resolve(e)}),c.promise},i.prototype.getDuration=function(){return s=e.defer(),this.media.getDuration(function(e){s.resolve(e)}),s.promise},i}]).factory("$cordovaMedia",["NewMedia",function(e){return{newMedia:function(n){return new e(n)}}}]),angular.module("ngCordova.plugins.mobfoxAds",[]).factory("$cordovaMobFoxAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.MobFox.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.MobFox.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.MobFox.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.MobFox.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.MobFox.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.MobFox.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.MobFox.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.MobFox.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins",["ngCordova.plugins.actionSheet","ngCordova.plugins.adMob","ngCordova.plugins.appAvailability","ngCordova.plugins.appRate","ngCordova.plugins.appVersion","ngCordova.plugins.backgroundGeolocation","ngCordova.plugins.badge","ngCordova.plugins.barcodeScanner","ngCordova.plugins.batteryStatus","ngCordova.plugins.beacon","ngCordova.plugins.ble","ngCordova.plugins.bluetoothSerial","ngCordova.plugins.brightness","ngCordova.plugins.calendar","ngCordova.plugins.camera","ngCordova.plugins.capture","ngCordova.plugins.clipboard","ngCordova.plugins.contacts","ngCordova.plugins.datePicker","ngCordova.plugins.device","ngCordova.plugins.deviceMotion","ngCordova.plugins.deviceOrientation","ngCordova.plugins.dialogs","ngCordova.plugins.emailComposer","ngCordova.plugins.facebook","ngCordova.plugins.facebookAds","ngCordova.plugins.file","ngCordova.plugins.fileTransfer","ngCordova.plugins.fileOpener2","ngCordova.plugins.flashlight","ngCordova.plugins.flurryAds","ngCordova.plugins.ga","ngCordova.plugins.geolocation","ngCordova.plugins.globalization","ngCordova.plugins.googleAds","ngCordova.plugins.googleAnalytics","ngCordova.plugins.googleMap","ngCordova.plugins.googlePlayGame","ngCordova.plugins.googlePlus","ngCordova.plugins.healthKit","ngCordova.plugins.httpd","ngCordova.plugins.iAd","ngCordova.plugins.imagePicker","ngCordova.plugins.inAppBrowser","ngCordova.plugins.instagram","ngCordova.plugins.keyboard","ngCordova.plugins.keychain","ngCordova.plugins.launchNavigator","ngCordova.plugins.localNotification","ngCordova.plugins.media","ngCordova.plugins.mMediaAds","ngCordova.plugins.mobfoxAds","ngCordova.plugins.mopubAds","ngCordova.plugins.nativeAudio","ngCordova.plugins.network","ngCordovaOauth","ngCordova.plugins.pinDialog","ngCordova.plugins.preferences","ngCordova.plugins.printer","ngCordova.plugins.progressIndicator","ngCordova.plugins.push","ngCordova.plugins.push_v5","ngCordova.plugins.sms","ngCordova.plugins.socialSharing","ngCordova.plugins.spinnerDialog","ngCordova.plugins.splashscreen","ngCordova.plugins.sqlite","ngCordova.plugins.statusbar","ngCordova.plugins.toast","ngCordova.plugins.touchid","ngCordova.plugins.vibration","ngCordova.plugins.videoCapturePlus","ngCordova.plugins.zip","ngCordova.plugins.insomnia"]),angular.module("ngCordova.plugins.mopubAds",[]).factory("$cordovaMoPubAds",["$q","$window",function(e,n){return{setOptions:function(t){var r=e.defer();return n.MoPub.setOptions(t,function(){r.resolve()},function(){r.reject()}),r.promise},createBanner:function(t){var r=e.defer();return n.MoPub.createBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},removeBanner:function(){var t=e.defer();return n.MoPub.removeBanner(function(){t.resolve()},function(){t.reject()}),t.promise},showBanner:function(t){var r=e.defer();return n.MoPub.showBanner(t,function(){r.resolve()},function(){r.reject()}),r.promise},showBannerAtXY:function(t,r){var o=e.defer();return n.MoPub.showBannerAtXY(t,r,function(){o.resolve()},function(){o.reject()}),o.promise},hideBanner:function(){var t=e.defer();return n.MoPub.hideBanner(function(){t.resolve()},function(){t.reject()}),t.promise},prepareInterstitial:function(t){var r=e.defer();return n.MoPub.prepareInterstitial(t,function(){r.resolve()},function(){r.reject()}),r.promise},showInterstitial:function(){var t=e.defer();return n.MoPub.showInterstitial(function(){t.resolve()},function(){t.reject()}),t.promise}}}]),angular.module("ngCordova.plugins.nativeAudio",[]).factory("$cordovaNativeAudio",["$q","$window",function(e,n){return{preloadSimple:function(t,r){var o=e.defer();return n.plugins.NativeAudio.preloadSimple(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise},preloadComplex:function(t,r,o,i){var a=e.defer();return n.plugins.NativeAudio.preloadComplex(t,r,o,i,function(e){a.resolve(e)},function(e){a.reject(e)}),a.promise},play:function(t,r){var o=e.defer();return n.plugins.NativeAudio.play(t,r,function(e){o.reject(e)},function(e){o.resolve(e)}),o.promise},stop:function(t){var r=e.defer();return n.plugins.NativeAudio.stop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},loop:function(t){var r=e.defer();return n.plugins.NativeAudio.loop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},unload:function(t){var r=e.defer();return n.plugins.NativeAudio.unload(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},setVolumeForComplexAsset:function(t,r){var o=e.defer();return n.plugins.NativeAudio.setVolumeForComplexAsset(t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.network",[]).factory("$cordovaNetwork",["$rootScope","$timeout",function(e,n){var t=function(){var t=navigator.connection.type;n(function(){e.$broadcast("$cordovaNetwork:offline",t)})},r=function(){var t=navigator.connection.type;n(function(){e.$broadcast("$cordovaNetwork:online",t)})};return document.addEventListener("deviceready",function(){navigator.connection&&(document.addEventListener("offline",t,!1),document.addEventListener("online",r,!1))}),{getNetwork:function(){return navigator.connection.type},isOnline:function(){var e=navigator.connection.type;return e!==Connection.UNKNOWN&&e!==Connection.NONE},isOffline:function(){var e=navigator.connection.type;return e===Connection.UNKNOWN||e===Connection.NONE},clearOfflineWatch:function(){document.removeEventListener("offline",t),e.$$listeners["$cordovaNetwork:offline"]=[]},clearOnlineWatch:function(){document.removeEventListener("online",r),e.$$listeners["$cordovaNetwork:online"]=[]}}}]).run(["$injector",function(e){e.get("$cordovaNetwork")}]),angular.module("ngCordova.plugins.pinDialog",[]).factory("$cordovaPinDialog",["$q","$window",function(e,n){return{prompt:function(t,r,o){var i=e.defer();return n.plugins.pinDialog.prompt(t,function(e){i.resolve(e)},r,o),i.promise}}}]),angular.module("ngCordova.plugins.preferences",[]).factory("$cordovaPreferences",["$window","$q",function(e,n){return{pluginNotEnabledMessage:"Plugin not enabled",decoratePromise:function(e){e.success=function(n){return e.then(n),e},e.error=function(n){return e.then(null,n),e}},store:function(t,r,o){function i(e){c.resolve(e)}function a(e){c.reject(new Error(e))}var c=n.defer(),s=c.promise;if(e.plugins){var u;u=3===arguments.length?e.plugins.appPreferences.store(o,t,r):e.plugins.appPreferences.store(t,r),u.then(i,a)}else c.reject(new Error(this.pluginNotEnabledMessage));return this.decoratePromise(s),s},fetch:function(t,r){function o(e){a.resolve(e)}function i(e){a.reject(new Error(e))}var a=n.defer(),c=a.promise;if(e.plugins){var s;s=2===arguments.length?e.plugins.appPreferences.fetch(r,t):e.plugins.appPreferences.fetch(t),s.then(o,i)}else a.reject(new Error(this.pluginNotEnabledMessage));return this.decoratePromise(c),c},remove:function(t,r){function o(e){a.resolve(e)}function i(e){a.reject(new Error(e))}var a=n.defer(),c=a.promise;if(e.plugins){var s;s=2===arguments.length?e.plugins.appPreferences.remove(r,t):e.plugins.appPreferences.remove(t),s.then(o,i)}else a.reject(new Error(this.pluginNotEnabledMessage));return this.decoratePromise(c),c},show:function(){function t(e){o.resolve(e)}function r(e){o.reject(new Error(e))}var o=n.defer(),i=o.promise;return e.plugins?e.plugins.appPreferences.show().then(t,r):o.reject(new Error(this.pluginNotEnabledMessage)),this.decoratePromise(i),i}}}]),angular.module("ngCordova.plugins.printer",[]).factory("$cordovaPrinter",["$q","$window",function(e,n){return{isAvailable:function(){var t=e.defer();return n.plugin.printer.isAvailable(function(e){t.resolve(e)}),t.promise},print:function(t,r){var o=e.defer();return n.plugin.printer.print(t,r,function(){o.resolve()}),o.promise}}}]),angular.module("ngCordova.plugins.progressIndicator",[]).factory("$cordovaProgress",[function(){return{show:function(e){var n=e||"Please wait...";return ProgressIndicator.show(n)},showSimple:function(e){var n=e||!1;return ProgressIndicator.showSimple(n)},showSimpleWithLabel:function(e,n){var t=e||!1,r=n||"Loading...";return ProgressIndicator.showSimpleWithLabel(t,r)},showSimpleWithLabelDetail:function(e,n,t){var r=e||!1,o=n||"Loading...",i=t||"Please wait";return ProgressIndicator.showSimpleWithLabelDetail(r,o,i)},showDeterminate:function(e,n){var t=e||!1,r=n||5e4;return ProgressIndicator.showDeterminate(t,r)},showDeterminateWithLabel:function(e,n,t){var r=e||!1,o=n||5e4,i=t||"Loading...";return ProgressIndicator.showDeterminateWithLabel(r,o,i)},showAnnular:function(e,n){var t=e||!1,r=n||5e4;return ProgressIndicator.showAnnular(t,r)},showAnnularWithLabel:function(e,n,t){var r=e||!1,o=n||5e4,i=t||"Loading...";return ProgressIndicator.showAnnularWithLabel(r,o,i)},showBar:function(e,n){var t=e||!1,r=n||5e4;return ProgressIndicator.showBar(t,r)},showBarWithLabel:function(e,n,t){var r=e||!1,o=n||5e4,i=t||"Loading...";return ProgressIndicator.showBarWithLabel(r,o,i)},showSuccess:function(e,n){var t=e||!1,r=n||"Success";return ProgressIndicator.showSuccess(t,r)},showText:function(e,n,t){var r=e||!1,o=n||"Warning",i=t||"center";return ProgressIndicator.showText(r,o,i)},hide:function(){return ProgressIndicator.hide()}}}]),angular.module("ngCordova.plugins.push",[]).factory("$cordovaPush",["$q","$window","$rootScope","$timeout",function(e,n,t,r){return{onNotification:function(e){r(function(){t.$broadcast("$cordovaPush:notificationReceived",e)})},register:function(t){var r,o=e.defer();return void 0!==t&&void 0===t.ecb&&(r=null===document.querySelector("[ng-app]")?"document.body":"document.querySelector('[ng-app]')",t.ecb="angular.element("+r+").injector().get('$cordovaPush').onNotification"),n.plugins.pushNotification.register(function(e){o.resolve(e)},function(e){o.reject(e)},t),o.promise},unregister:function(t){var r=e.defer();return n.plugins.pushNotification.unregister(function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise},setBadgeNumber:function(t){var r=e.defer();return n.plugins.pushNotification.setApplicationIconBadgeNumber(function(e){r.resolve(e)},function(e){r.reject(e)},t),r.promise}}}]),angular.module("ngCordova.plugins.push_v5",[]).factory("$cordovaPushV5",["$q","$rootScope","$timeout",function(e,n,t){var r;return{initialize:function(n){var t=e.defer();return r=PushNotification.init(n),t.resolve(r),t.promise},onNotification:function(){t(function(){r.on("notification",function(e){n.$emit("$cordovaPushV5:notificationReceived",e)})})},onError:function(){t(function(){r.on("error",function(e){n.$emit("$cordovaPushV5:errorOccurred",e)})})},register:function(){var n=e.defer();return void 0===r?n.reject(new Error("init must be called before any other operation")):r.on("registration",function(e){n.resolve(e.registrationId)}),n.promise},unregister:function(){var n=e.defer();return void 0===r?n.reject(new Error("init must be called before any other operation")):r.unregister(function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise},setBadgeNumber:function(n){var t=e.defer();return void 0===r?t.reject(new Error("init must be called before any other operation")):r.setApplicationIconBadgeNumber(function(e){t.resolve(e)},function(e){t.reject(e)},n),t.promise}}}]),angular.module("ngCordova.plugins.sms",[]).factory("$cordovaSms",["$q",function(e){return{send:function(n,t,r){var o=e.defer();return sms.send(n,t,r,function(e){o.resolve(e)},function(e){o.reject(e)}),o.promise}}}]),angular.module("ngCordova.plugins.socialSharing",[]).factory("$cordovaSocialSharing",["$q","$window",function(e,n){return{share:function(t,r,o,i){var a=e.defer();return r=r||null,o=o||null,i=i||null,n.plugins.socialsharing.share(t,r,o,i,function(){a.resolve(!0)},function(){a.reject(!1)}),a.promise},shareViaTwitter:function(t,r,o){var i=e.defer();return r=r||null,o=o||null,n.plugins.socialsharing.shareViaTwitter(t,r,o,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaWhatsApp:function(t,r,o){var i=e.defer();return r=r||null,o=o||null,n.plugins.socialsharing.shareViaWhatsApp(t,r,o,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaFacebook:function(t,r,o){var i=e.defer();return t=t||null,r=r||null,o=o||null,n.plugins.socialsharing.shareViaFacebook(t,r,o,function(){i.resolve(!0)},function(){i.reject(!1)}),i.promise},shareViaFacebookWithPasteMessageHint:function(t,r,o,i){var a=e.defer();return r=r||null,o=o||null,n.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(t,r,o,i,function(){a.resolve(!0)},function(){a.reject(!1)}),a.promise},shareViaSMS:function(t,r){var o=e.defer();return n.plugins.socialsharing.shareViaSMS(t,r,function(){o.resolve(!0)},function(){o.reject(!1)}),o.promise},shareViaEmail:function(t,r,o,i,a,c){var s=e.defer();return o=o||null,i=i||null,a=a||null,c=c||null,n.plugins.socialsharing.shareViaEmail(t,r,o,i,a,c,function(){s.resolve(!0)},function(){s.reject(!1)}),s.promise},shareVia:function(t,r,o,i,a){var c=e.defer();return r=r||null,o=o||null,i=i||null,a=a||null,n.plugins.socialsharing.shareVia(t,r,o,i,a,function(){c.resolve(!0)},function(){c.reject(!1)}),c.promise},canShareViaEmail:function(){var t=e.defer();return n.plugins.socialsharing.canShareViaEmail(function(){t.resolve(!0)},function(){t.reject(!1)}),t.promise},canShareVia:function(t,r,o,i,a){var c=e.defer();return n.plugins.socialsharing.canShareVia(t,r,o,i,a,function(e){c.resolve(e)},function(e){c.reject(e)}),c.promise},available:function(){var n=e.defer();window.plugins.socialsharing.available(function(e){e?n.resolve():n.reject()})}}}]),angular.module("ngCordova.plugins.spinnerDialog",[]).factory("$cordovaSpinnerDialog",["$window",function(e){return{show:function(n,t,r){return r=r||!1,e.plugins.spinnerDialog.show(n,t,r)},hide:function(){return e.plugins.spinnerDialog.hide()}}}]),angular.module("ngCordova.plugins.splashscreen",[]).factory("$cordovaSplashscreen",[function(){return{hide:function(){return navigator.splashscreen.hide()},show:function(){return navigator.splashscreen.show()}}}]),angular.module("ngCordova.plugins.sqlite",[]).factory("$cordovaSQLite",["$q","$window",function(e,n){return{openDB:function(e,t){return angular.isObject(e)&&!angular.isString(e)?("undefined"!=typeof t&&(e.bgType=t),n.sqlitePlugin.openDatabase(e)):n.sqlitePlugin.openDatabase({name:e,bgType:t})},execute:function(n,t,r){var o=e.defer();return n.transaction(function(e){e.executeSql(t,r,function(e,n){o.resolve(n)},function(e,n){o.reject(n)})}),o.promise},insertCollection:function(n,t,r){var o=e.defer(),i=r.slice(0);return n.transaction(function(e){!function n(){var r=i.splice(0,1)[0];try{e.executeSql(t,r,function(e,t){0===i.length?o.resolve(t):n()},function(e,n){o.reject(n)})}catch(a){o.reject(a)}}()}),o.promise},nestedExecute:function(n,t,r,o,i){var a=e.defer();return n.transaction(function(e){e.executeSql(t,o,function(e,n){a.resolve(n),e.executeSql(r,i,function(e,n){a.resolve(n)})})},function(e,n){a.reject(n)}),a.promise},deleteDB:function(t){var r=e.defer();return n.sqlitePlugin.deleteDatabase(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise}}}]),angular.module("ngCordova.plugins.statusbar",[]).factory("$cordovaStatusbar",[function(){return{overlaysWebView:function(e){return StatusBar.overlaysWebView(!!e)},STYLES:{DEFAULT:0,LIGHT_CONTENT:1,BLACK_TRANSLUCENT:2,BLACK_OPAQUE:3},style:function(e){switch(e){case 0:return StatusBar.styleDefault();case 1:return StatusBar.styleLightContent();case 2:return StatusBar.styleBlackTranslucent();case 3:return StatusBar.styleBlackOpaque();default:return StatusBar.styleDefault()}},styleColor:function(e){return StatusBar.backgroundColorByName(e)},styleHex:function(e){return StatusBar.backgroundColorByHexString(e)},hide:function(){return StatusBar.hide()},show:function(){return StatusBar.show()},isVisible:function(){return StatusBar.isVisible}}}]),angular.module("ngCordova.plugins.toast",[]).factory("$cordovaToast",["$q","$window",function(e,n){return{showShortTop:function(t){var r=e.defer();return n.plugins.toast.showShortTop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showShortCenter:function(t){var r=e.defer();return n.plugins.toast.showShortCenter(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showShortBottom:function(t){var r=e.defer();return n.plugins.toast.showShortBottom(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showLongTop:function(t){var r=e.defer();return n.plugins.toast.showLongTop(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showLongCenter:function(t){var r=e.defer();return n.plugins.toast.showLongCenter(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},showLongBottom:function(t){var r=e.defer();return n.plugins.toast.showLongBottom(t,function(e){r.resolve(e)},function(e){r.reject(e)}),r.promise},show:function(t,r,o){var i=e.defer();return n.plugins.toast.show(t,r,o,function(e){i.resolve(e)},function(e){i.reject(e)}),i.promise}}}]),angular.module("ngCordova.plugins.touchid",[]).factory("$cordovaTouchID",["$q",function(e){return{checkSupport:function(){var n=e.defer();return window.cordova?touchid.checkSupport(function(e){n.resolve(e)},function(e){n.reject(e)}):n.reject("Not supported without cordova.js"),n.promise},authenticate:function(n){var t=e.defer();return window.cordova?touchid.authenticate(function(e){t.resolve(e)},function(e){t.reject(e)},n):t.reject("Not supported without cordova.js"),t.promise}}}]),angular.module("ngCordova.plugins.upsPush",[]).factory("$cordovaUpsPush",["$q","$window","$rootScope","$timeout",function(e,n,t,r){return{register:function(o){var i=e.defer();return n.push.register(function(e){r(function(){t.$broadcast("$cordovaUpsPush:notificationReceived",e)})},function(){i.resolve()},function(e){i.reject(e)},o),i.promise},unregister:function(t){var r=e.defer();return n.push.unregister(function(){r.resolve()},function(e){r.reject(e)},t),r.promise},setBadgeNumber:function(t){var r=e.defer();return n.push.setApplicationIconBadgeNumber(function(){r.resolve()},t),r.promise}}}]),angular.module("ngCordova.plugins.vibration",[]).factory("$cordovaVibration",[function(){return{vibrate:function(e){return navigator.notification.vibrate(e)},vibrateWithPattern:function(e,n){return navigator.notification.vibrateWithPattern(e,n)},cancelVibration:function(){return navigator.notification.cancelVibration()}}}]),angular.module("ngCordova.plugins.videoCapturePlus",[]).provider("$cordovaVideoCapturePlus",[function(){var e={};this.setLimit=function(n){e.limit=n},this.setMaxDuration=function(n){e.duration=n},this.setHighQuality=function(n){e.highquality=n},this.useFrontCamera=function(n){e.frontcamera=n},this.setPortraitOverlay=function(n){e.portraitOverlay=n},this.setLandscapeOverlay=function(n){e.landscapeOverlay=n},this.setOverlayText=function(n){e.overlayText=n},this.$get=["$q","$window",function(n,t){return{captureVideo:function(r){var o=n.defer();return t.plugins.videocaptureplus?(t.plugins.videocaptureplus.captureVideo(o.resolve,o.reject,angular.extend({},e,r)),o.promise):(o.resolve(null),o.promise)}}}]}]),angular.module("ngCordova.plugins.zip",[]).factory("$cordovaZip",["$q","$window",function(e,n){return{unzip:function(t,r){var o=e.defer();return n.zip.unzip(t,r,function(e){0===e?o.resolve():o.reject()},function(e){o.notify(e)}),o.promise}}}]),angular.module("oauth.providers",["oauth.utils"]).factory("$cordovaOauth",["$q","$http","$cordovaOauthUtility",function(e,n,t){return{azureAD:function(r,o,i){var a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(c)===!0){var s=window.open("https://login.microsoftonline.com/"+o+"/oauth2/authorize?response_type=code&client_id="+r+"&redirect_uri=http://localhost/callback","_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){var t=e.url.split("code=")[1];console.log(t),n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://login.microsoftonline.com/"+o+"/oauth2/token",data:"client_id="+r+"&code="+t+"&redirect_uri=http://localhost/callback&grant_type=authorization_code&resource="+i}).success(function(e){a.resolve(e)}).error(function(e,n){a.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){s.close()},10)})}}),s.addEventListener("exit",function(e){a.reject("The sign in flow was canceled")})}else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},adfs:function(r,o,i){var a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(c)===!0){var s=window.open(o+"/adfs/oauth2/authorize?response_type=code&client_id="+r+"&redirect_uri=http://localhost/callback&resource="+i,"_blank","location=no");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){var t=e.url.split("code=")[1];n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:o+"/adfs/oauth2/token",data:"client_id="+r+"&code="+t+"&redirect_uri=http://localhost/callback&grant_type=authorization_code"}).success(function(e){a.resolve(e)}).error(function(e,n){a.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){s.close()},10)})}}),s.addEventListener("exit",function(e){a.reject("The sign in flow was canceled")})}else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},dropbox:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a="http://localhost/callback";void 0!==r&&r.hasOwnProperty("redirect_uri")&&(a=r.redirect_uri);var c=window.open("https://www.dropbox.com/1/oauth2/authorize?client_id="+n+"&redirect_uri="+a+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf(a)){c.removeEventListener("exit",function(e){}),c.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];void 0!==r.access_token&&null!==r.access_token?o.resolve({access_token:r.access_token,token_type:r.token_type,uid:r.uid}):o.reject("Problem authenticating")}}),c.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},digitalOcean:function(r,o,i){var a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(c)===!0){var s="http://localhost/callback";void 0!==i&&i.hasOwnProperty("redirect_uri")&&(s=i.redirect_uri);var u=window.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id="+r+"&redirect_uri="+s+"&response_type=code&scope=read%20write","_blank","location=no,clearsessioncache=yes,clearcache=yes");u.addEventListener("loadstart",function(e){if(0===e.url.indexOf(s)){var t=e.url.split("code=")[1];n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://cloud.digitalocean.com/v1/oauth/token",data:"client_id="+r+"&client_secret="+o+"&redirect_uri="+s+"&grant_type=authorization_code&code="+t}).success(function(e){a.resolve(e)}).error(function(e,n){a.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){u.close()},10)})}}),u.addEventListener("exit",function(e){a.reject("The sign in flow was canceled")})}else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},google:function(n,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(a)===!0){var c="http://localhost/callback";void 0!==o&&o.hasOwnProperty("redirect_uri")&&(c=o.redirect_uri);var s=window.open("https://accounts.google.com/o/oauth2/auth?client_id="+n+"&redirect_uri="+c+"&scope="+r.join(" ")+"&approval_prompt=force&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf(c)){s.removeEventListener("exit",function(e){}),s.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],o=0;o<t.length;o++)r[t[o].split("=")[0]]=t[o].split("=")[1];void 0!==r.access_token&&null!==r.access_token?i.resolve({access_token:r.access_token,token_type:r.token_type,expires_in:r.expires_in}):i.reject("Problem authenticating")}}),s.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},github:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l=window.open("https://github.com/login/oauth/authorize?client_id="+r+"&redirect_uri="+u+"&scope="+i.join(","),"_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){0===e.url.indexOf(u)&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n.defaults.headers.post.accept="application/json",n({method:"post",url:"https://github.com/login/oauth/access_token",data:"client_id="+r+"&client_secret="+o+"&redirect_uri="+u+"&code="+requestToken}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){l.close()},10)}))}),l.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},facebook:function(n,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(a)===!0){var c="http://localhost/callback";void 0!==o&&o.hasOwnProperty("redirect_uri")&&(c=o.redirect_uri);var s="https://www.facebook.com/v2.0/dialog/oauth?client_id="+n+"&redirect_uri="+c+"&response_type=token&scope="+r.join(",");void 0!==o&&o.hasOwnProperty("auth_type")&&(s+="&auth_type="+o.auth_type);var u=window.open(s,"_blank","location=no,clearsessioncache=yes,clearcache=yes");u.addEventListener("loadstart",function(e){if(0===e.url.indexOf(c)){u.removeEventListener("exit",function(e){}),u.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],o=0;o<t.length;o++)r[t[o].split("=")[0]]=t[o].split("=")[1];void 0!==r.access_token&&null!==r.access_token?i.resolve({access_token:r.access_token,expires_in:r.expires_in}):0!==e.url.indexOf("error_code=100")?i.reject("Facebook returned error_code=100: Invalid permissions"):i.reject("Problem authenticating")}}),u.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},linkedin:function(r,o,i,a,c){var s=e.defer();if(window.cordova){var u=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(u)===!0){var l="http://localhost/callback";void 0!==c&&c.hasOwnProperty("redirect_uri")&&(l=c.redirect_uri);var d=window.open("https://www.linkedin.com/uas/oauth2/authorization?client_id="+r+"&redirect_uri="+l+"&scope="+i.join(" ")+"&response_type=code&state="+a,"_blank","location=no,clearsessioncache=yes,clearcache=yes");d.addEventListener("loadstart",function(e){0===e.url.indexOf(l)&&(requestToken=e.url.split("code=")[1].split("&")[0],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://www.linkedin.com/uas/oauth2/accessToken",data:"client_id="+r+"&client_secret="+o+"&redirect_uri="+l+"&grant_type=authorization_code&code="+requestToken}).success(function(e){s.resolve(e)}).error(function(e,n){s.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){d.close()},10)}))}),d.addEventListener("exit",function(e){s.reject("The sign in flow was canceled")})}else s.reject("Could not find InAppBrowser plugin");
}else s.reject("Cannot authenticate via a web browser");return s.promise},instagram:function(n,r,o){var i=e.defer(),a={code:"?",token:"#"};if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(c)===!0){var s="http://localhost/callback",u="token";void 0!==o&&(o.hasOwnProperty("redirect_uri")&&(s=o.redirect_uri),o.hasOwnProperty("response_type")&&(u=o.response_type));var l="";r&&r.length>0&&(l="&scope"+r.join("+"));var d=window.open("https://api.instagram.com/oauth/authorize/?client_id="+n+"&redirect_uri="+s+l+"&response_type="+u,"_blank","location=no,clearsessioncache=yes,clearcache=yes");d.addEventListener("loadstart",function(e){if(0===e.url.indexOf(s)){d.removeEventListener("exit",function(e){}),d.close();var n=e.url.split(a[u])[1],r=t.parseResponseParameters(n);void 0!==r.access_token&&null!==r.access_token?i.resolve({access_token:r.access_token}):void 0!==r.code&&null!==r.code?i.resolve({code:r.code}):i.reject("Problem authenticating")}}),d.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},box:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l=window.open("https://app.box.com/api/oauth2/authorize/?client_id="+r+"&redirect_uri="+u+"&state="+i+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){0===e.url.indexOf(u)&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://app.box.com/api/oauth2/token",data:"client_id="+r+"&client_secret="+o+"&redirect_uri="+u+"&grant_type=authorization_code&code="+requestToken}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){l.close()},10)}))}),l.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},reddit:function(r,o,i,a,c){var s=e.defer();if(window.cordova){var u=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(u)===!0){var l="http://localhost/callback";void 0!==c&&c.hasOwnProperty("redirect_uri")&&(l=c.redirect_uri);var d=window.open("https://ssl.reddit.com/api/v1/authorize"+(a?".compact":"")+"?client_id="+r+"&redirect_uri="+l+"&duration=permanent&state=ngcordovaoauth&scope="+i.join(",")+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");d.addEventListener("loadstart",function(e){0===e.url.indexOf(l)&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n.defaults.headers.post.Authorization="Basic "+btoa(r+":"+o),n({method:"post",url:"https://ssl.reddit.com/api/v1/access_token",data:"redirect_uri="+l+"&grant_type=authorization_code&code="+requestToken}).success(function(e){s.resolve(e)}).error(function(e,n){s.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){d.close()},10)}))}),d.addEventListener("exit",function(e){s.reject("The sign in flow was canceled")})}else s.reject("Could not find InAppBrowser plugin")}else s.reject("Cannot authenticate via a web browser");return s.promise},slack:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l=window.open("https://slack.com/oauth/authorize?client_id="+r+"&redirect_uri="+u+"&state=ngcordovaoauth&scope="+i.join(","),"_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){0===e.url.indexOf(u)&&(requestToken=e.url.split("code=")[1],console.log("Request token is "+requestToken),n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://slack.com/api/oauth.access",data:"client_id="+r+"&client_secret="+o+"&redirect_uri="+u+"&grant_type=authorization_code&code="+requestToken}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){l.close()},10)}))}),l.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},twitter:function(r,o,i){var a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(c)===!0){var s="http://localhost/callback";if(void 0!==i&&i.hasOwnProperty("redirect_uri")&&(s=i.redirect_uri),"undefined"!=typeof jsSHA){var u={oauth_consumer_key:r,oauth_nonce:t.createNonce(10),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"},l=t.createSignature("POST","https://api.twitter.com/oauth/request_token",u,{oauth_callback:s},o);n({method:"post",url:"https://api.twitter.com/oauth/request_token",headers:{Authorization:l.authorization_header,"Content-Type":"application/x-www-form-urlencoded"},data:"oauth_callback="+encodeURIComponent(s)}).success(function(e){for(var r=e.split("&"),i={},c=0;c<r.length;c++)i[r[c].split("=")[0]]=r[c].split("=")[1];i.hasOwnProperty("oauth_token")===!1&&a.reject("Oauth request token was not received");var l=window.open("https://api.twitter.com/oauth/authenticate?oauth_token="+i.oauth_token,"_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){if(0===e.url.indexOf(s)){for(var r=e.url.split("?")[1],i=r.split("&"),c={},d=0;d<i.length;d++)c[i[d].split("=")[0]]=i[d].split("=")[1];c.hasOwnProperty("oauth_verifier")===!1&&a.reject("Browser authentication failed to complete.  No oauth_verifier was returned"),delete u.oauth_signature,u.oauth_token=c.oauth_token;var f=t.createSignature("POST","https://api.twitter.com/oauth/access_token",u,{oauth_verifier:c.oauth_verifier},o);n({method:"post",url:"https://api.twitter.com/oauth/access_token",headers:{Authorization:f.authorization_header},params:{oauth_verifier:c.oauth_verifier}}).success(function(e){for(var n=e.split("&"),t={},r=0;r<n.length;r++)t[n[r].split("=")[0]]=n[r].split("=")[1];t.hasOwnProperty("oauth_token_secret")===!1&&a.reject("Oauth access token was not received"),a.resolve(t)}).error(function(e){a.reject(e)})["finally"](function(){setTimeout(function(){l.close()},10)})}}),l.addEventListener("exit",function(e){a.reject("The sign in flow was canceled")})}).error(function(e){a.reject(e)})}else a.reject("Missing jsSHA JavaScript library")}else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},meetup:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a="http://localhost/callback";void 0!==r&&r.hasOwnProperty("redirect_uri")&&(a=r.redirect_uri);var c=window.open("https://secure.meetup.com/oauth2/authorize/?client_id="+n+"&redirect_uri="+a+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf(a)){c.removeEventListener("exit",function(e){}),c.close();for(var n=e.url.split("#")[1],t=n.split("&"),r={},i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];void 0!==r.access_token&&null!==r.access_token?o.resolve(r):o.reject("Problem authenticating")}}),c.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},salesforce:function(n,r){var o="http://localhost/callback",i=function(e,n,t){return e+"services/oauth2/authorize?display=touch&response_type=token&client_id="+escape(n)+"&redirect_uri="+escape(t)},a=function(e,n){return e.substr(0,n.length)===n},c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u=window.open(i(n,r,o),"_blank","location=no,clearsessioncache=yes,clearcache=yes");u.addEventListener("loadstart",function(e){if(a(e.url,o)){var n={},t=e.url.split("#")[1];if(t){var r=t.split("&");for(var i in r){var s=r[i].split("=");n[s[0]]=unescape(s[1])}}"undefined"==typeof n||"undefined"==typeof n.access_token?c.reject("Problem authenticating"):c.resolve(n),setTimeout(function(){u.close()},10)}}),u.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},strava:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l=window.open("https://www.strava.com/oauth/authorize?client_id="+r+"&redirect_uri="+u+"&scope="+i.join(",")+"&response_type=code&approval_prompt=force","_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){0===e.url.indexOf(u)&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://www.strava.com/oauth/token",data:"client_id="+r+"&client_secret="+o+"&code="+requestToken}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){l.close()},10)}))}),l.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},withings:function(r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(a)===!0)if("undefined"!=typeof jsSHA){var c=t.generateOauthParametersInstance(r);c.oauth_callback="http://localhost/callback";var s="https://oauth.withings.com/account/request_token",u=t.createSignature("GET",s,{},c,o);c.oauth_signature=u.signature;var l=t.generateUrlParameters(c);n({method:"get",url:s+"?"+l}).success(function(e){var a=t.parseResponseParameters(e);a.hasOwnProperty("oauth_token")===!1&&i.reject("Oauth request token was not received");var c=t.generateOauthParametersInstance(r);c.oauth_token=a.oauth_token;var s=a.oauth_token_secret,u="https://oauth.withings.com/account/authorize",l=t.createSignature("GET",u,{},c,o);c.oauth_signature=l.signature;var d=t.generateUrlParameters(c),f=window.open(u+"?"+d,"_blank","location=no,clearsessioncache=yes,clearcache=yes");f.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){var c=e.url.split("?")[1];a=t.parseResponseParameters(c),a.hasOwnProperty("oauth_verifier")===!1&&i.reject("Browser authentication failed to complete.  No oauth_verifier was returned");var u=t.generateOauthParametersInstance(r);u.oauth_token=a.oauth_token;var l="https://oauth.withings.com/account/access_token",d=t.createSignature("GET",l,{},u,o,s);u.oauth_signature=d.signature;var p=t.generateUrlParameters(u);n({method:"get",url:l+"?"+p}).success(function(e){var n=t.parseResponseParameters(e);n.hasOwnProperty("oauth_token_secret")===!1&&i.reject("Oauth access token was not received"),i.resolve(n)}).error(function(e){i.reject(e)})["finally"](function(){setTimeout(function(){f.close()},10)})}}),f.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}).error(function(e){i.reject(e)})}else i.reject("Missing jsSHA JavaScript library");else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},foursquare:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a="http://localhost/callback";void 0!==r&&r.hasOwnProperty("redirect_uri")&&(a=r.redirect_uri);var c=window.open("https://foursquare.com/oauth2/authenticate?client_id="+n+"&redirect_uri="+a+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf(a)){c.removeEventListener("exit",function(e){}),c.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];if(void 0!==r.access_token&&null!==r.access_token){var s={access_token:r.access_token,expires_in:r.expires_in};o.resolve(s)}else o.reject("Problem authenticating")}}),c.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},magento:function(r,o,i){var a=e.defer();if(window.cordova){var c=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(c)===!0)if("undefined"!=typeof jsSHA){var s={oauth_callback:"http://localhost/callback",oauth_consumer_key:o,oauth_nonce:t.createNonce(5),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"},u=t.createSignature("POST",r+"/oauth/initiate",s,{oauth_callback:"http://localhost/callback"},i);n.defaults.headers.post.Authorization=u.authorization_header,n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:r+"/oauth/initiate",data:"oauth_callback=http://localhost/callback"}).success(function(e){for(var o=e.split("&"),c={},u=0;u<o.length;u++)c[o[u].split("=")[0]]=o[u].split("=")[1];c.hasOwnProperty("oauth_token")===!1&&a.reject("Oauth request token was not received");var l=c.oauth_token_secret,d=window.open(r+"/oauth/authorize?oauth_token="+c.oauth_token,"_blank","location=no,clearsessioncache=yes,clearcache=yes");d.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var o=e.url.split("?")[1],c=o.split("&"),u={},f=0;f<c.length;f++)u[c[f].split("=")[0]]=c[f].split("=")[1];u.hasOwnProperty("oauth_verifier")===!1&&a.reject("Browser authentication failed to complete.  No oauth_verifier was returned"),delete s.oauth_signature,delete s.oauth_callback,s.oauth_token=u.oauth_token,s.oauth_nonce=t.createNonce(5),s.oauth_verifier=u.oauth_verifier;var p=t.createSignature("POST",r+"/oauth/token",s,{},i,l);n.defaults.headers.post.Authorization=p.authorization_header,n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:r+"/oauth/token"}).success(function(e){for(var n=e.split("&"),t={},r=0;r<n.length;r++)t[n[r].split("=")[0]]=n[r].split("=")[1];t.hasOwnProperty("oauth_token_secret")===!1&&a.reject("Oauth access token was not received"),a.resolve(t)}).error(function(e){a.reject(e)})["finally"](function(){setTimeout(function(){d.close()},10)})}}),d.addEventListener("exit",function(e){a.reject("The sign in flow was canceled")})}).error(function(e){a.reject(e)})}else a.reject("Missing jsSHA JavaScript library");else a.reject("Could not find InAppBrowser plugin")}else a.reject("Cannot authenticate via a web browser");return a.promise},vkontakte:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a=window.open("https://oauth.vk.com/authorize?client_id="+n+"&redirect_uri=http://oauth.vk.com/blank.html&response_type=token&scope="+r.join(",")+"&display=touch&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");a.addEventListener("loadstart",function(e){var n=e.url.split("#");if("https://oauth.vk.com/blank.html"==n[0]||"http://oauth.vk.com/blank.html"==n[0]){a.removeEventListener("exit",function(e){}),a.close();for(var t=e.url.split("#")[1],r=t.split("&"),i=[],c=0;c<r.length;c++)i[r[c].split("=")[0]]=r[c].split("=")[1];if(void 0!==i.access_token&&null!==i.access_token){var s={access_token:i.access_token,expires_in:i.expires_in};void 0!==i.email&&null!==i.email&&(s.email=i.email),o.resolve(s)}else o.reject("Problem authenticating")}}),a.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},odnoklassniki:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a=window.open("http://www.odnoklassniki.ru/oauth/authorize?client_id="+n+"&scope="+r.join(",")+"&response_type=token&redirect_uri=http://localhost/callback&layout=m","_blank","location=no,clearsessioncache=yes,clearcache=yes");a.addEventListener("loadstart",function(e){if(0===e.url.indexOf("http://localhost/callback")){for(var n=e.url.split("#")[1],t=n.split("&"),r=[],i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];void 0!==r.access_token&&null!==r.access_token?o.resolve({access_token:r.access_token,session_secret_key:r.session_secret_key}):o.reject("Problem authenticating"),setTimeout(function(){a.close()},10)}}),a.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},imgur:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a="http://localhost/callback";void 0!==r&&r.hasOwnProperty("redirect_uri")&&(a=r.redirect_uri);var c=window.open("https://api.imgur.com/oauth2/authorize?client_id="+n+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf(a)){c.removeEventListener("exit",function(e){}),c.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];void 0!==r.access_token&&null!==r.access_token?o.resolve({access_token:r.access_token,expires_in:r.expires_in,account_username:r.account_username}):o.reject("Problem authenticating")}}),c.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},spotify:function(n,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(a)===!0){var c="http://localhost/callback";void 0!==o&&o.hasOwnProperty("redirect_uri")&&(c=o.redirect_uri);var s=window.open("https://accounts.spotify.com/authorize?client_id="+n+"&redirect_uri="+c+"&response_type=token&scope="+r.join(" "),"_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf(c)){s.removeEventListener("exit",function(e){}),s.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],o=0;o<t.length;o++)r[t[o].split("=")[0]]=t[o].split("=")[1];void 0!==r.access_token&&null!==r.access_token?i.resolve({access_token:r.access_token,expires_in:r.expires_in,account_username:r.account_username}):i.reject("Problem authenticating")}}),s.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},uber:function(n,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(a)===!0){var c="http://localhost/callback";void 0!==o&&o.hasOwnProperty("redirect_uri")&&(c=o.redirect_uri);var s=window.open("https://login.uber.com/oauth/authorize?client_id="+n+"&redirect_uri="+c+"&response_type=token&scope="+r.join(" "),"_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf(c)){s.removeEventListener("exit",function(e){}),s.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],o=0;o<t.length;o++)r[t[o].split("=")[0]]=t[o].split("=")[1];void 0!==r.access_token&&null!==r.access_token?i.resolve({access_token:r.access_token,token_type:r.token_type,expires_in:r.expires_in,scope:r.scope}):i.reject("Problem authenticating")}}),s.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},windowsLive:function(n,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(a)===!0){var c="https://login.live.com/oauth20_desktop.srf";void 0!==o&&o.hasOwnProperty("redirect_uri")&&(c=o.redirect_uri);var s=window.open("https://login.live.com/oauth20_authorize.srf?client_id="+n+"&scope="+r.join(",")+"&response_type=token&display=touch&redirect_uri="+c,"_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf(c)){s.removeEventListener("exit",function(e){}),s.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],o=0;o<t.length;o++)r[t[o].split("=")[0]]=t[o].split("=")[1];void 0!==r.access_token&&null!==r.access_token?i.resolve({access_token:r.access_token,expires_in:r.expires_in}):i.reject("Problem authenticating")}}),s.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},yammer:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a="http://localhost/callback";void 0!==r&&r.hasOwnProperty("redirect_uri")&&(a=r.redirect_uri);var c=window.open("https://www.yammer.com/dialog/oauth?client_id="+n+"&redirect_uri="+a+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf(a)){c.removeEventListener("exit",function(e){}),c.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];void 0!==r.access_token&&null!==r.access_token?o.resolve({access_token:r.access_token}):o.reject("Problem authenticating")}}),c.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},venmo:function(n,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(a)===!0){var c="http://localhost/callback";void 0!==o&&o.hasOwnProperty("redirect_uri")&&(c=o.redirect_uri);var s=window.open("https://api.venmo.com/v1/oauth/authorize?client_id="+n+"&redirect_uri="+c+"&response_type=token&scope="+r.join(" "),"_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf(c)){s.removeEventListener("exit",function(e){}),s.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],o=0;o<t.length;o++)r[t[o].split("=")[0]]=t[o].split("=")[1];void 0!==r.access_token&&null!==r.access_token?i.resolve({access_token:r.access_token,expires_in:r.expires_in}):i.reject("Problem authenticating")}}),s.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},stripe:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l=window.open("https://connect.stripe.com/oauth/authorize?client_id="+r+"&redirect_uri="+u+"&scope="+i+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){0===e.url.indexOf("http://localhost/callback")&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://connect.stripe.com/oauth/token",data:"client_id="+r+"&client_secret="+o+"&redirect_uri="+u+"&grant_type=authorization_code&code="+requestToken}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){l.close()},10)}))}),l.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},rally:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l=window.open("https://rally1.rallydev.com/login/oauth2/auth?client_id="+r+"&redirect_uri="+u+"&scope="+i+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){0===e.url.indexOf("http://localhost/callback")&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://rally1.rallydev.com/login/oauth2/auth",data:"client_id="+r+"&client_secret="+o+"&redirect_uri="+u+"&grant_type=authorization_code&code="+requestToken}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){l.close()},10)}))}),l.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},familySearch:function(t,r,o){var i=e.defer();if(window.cordova){var a=cordova.require("cordova/plugin_list").metadata;if(a.hasOwnProperty("cordova-plugin-inappbrowser")===!0){var c="http://localhost/callback";void 0!==o&&o.hasOwnProperty("redirect_uri")&&(c=o.redirect_uri);var s=window.open("https://ident.familysearch.org/cis-web/oauth2/v3/authorization?client_id="+t+"&redirect_uri="+c+"&response_type=code&state="+r,"_blank","location=no,clearsessioncache=yes,clearcache=yes");s.addEventListener("loadstart",function(e){if(0===e.url.indexOf(c)){var r=e.url.split("code=")[1];n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://ident.familysearch.org/cis-web/oauth2/v3/token",data:"client_id="+t+"&redirect_uri="+c+"&grant_type=authorization_code&code="+r}).success(function(e){i.resolve(e)}).error(function(e,n){i.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){s.close()},10)})}}),s.addEventListener("exit",function(e){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin")}else i.reject("Cannot authenticate via a web browser");return i.promise},envato:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a="http://localhost/callback";void 0!==r&&r.hasOwnProperty("redirect_uri")&&(a=r.redirect_uri);var c=window.open("https://api.envato.com/authorization?client_id="+n+"&redirect_uri="+a+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf(a)){c.removeEventListener("exit",function(e){}),c.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];void 0!==r.access_token&&null!==r.access_token?o.resolve({access_token:r.access_token,expires_in:r.expires_in}):o.reject("Problem authenticating")}}),c.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");return o.promise},weibo:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l="https://open.weibo.cn/oauth2/authorize?display=mobile&client_id="+r+"&redirect_uri="+u+"&scope="+i.join(",");void 0!==a&&(a.hasOwnProperty("language")&&(l+="&language="+a.language),a.hasOwnProperty("forcelogin")&&(l+="&forcelogin="+a.forcelogin));var d=window.open(l,"_blank","location=no,clearsessioncache=yes,clearcache=yes");d.addEventListener("loadstart",function(e){0===e.url.indexOf(u)&&(requestToken=e.url.split("code=")[1],n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://api.weibo.com/oauth2/access_token",data:"client_id="+r+"&client_secret="+o+"&grant_type=authorization_code&code="+requestToken+"&redirect_uri="+u}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){d.close()},10)}))}),d.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},jawbone:function(r,o,i,a){var c=e.defer();if(window.cordova){var s=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(s)===!0){var u="http://localhost/callback";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(u=a.redirect_uri);var l=window.open("https://jawbone.com/auth/oauth2/auth?client_id="+r+"&redirect_uri="+u+"&response_type=code&scope="+i.join(" "),"_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(e){if(0===e.url.indexOf(u)){var t=e.url.split("code=")[1];n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:"https://jawbone.com/auth/oauth2/token",data:"client_id="+r+"&client_secret="+o+"&grant_type=authorization_code&code="+t}).success(function(e){c.resolve(e)}).error(function(e,n){c.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){l.close()},10)})}}),l.addEventListener("exit",function(e){c.reject("The sign in flow was canceled")})}else c.reject("Could not find InAppBrowser plugin")}else c.reject("Cannot authenticate via a web browser");return c.promise},untappd:function(n,r){var o=e.defer();if(window.cordova){var i=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(i)===!0){var a="http://localhost/callback";void 0!==r&&r.hasOwnProperty("redirect_url")&&(a=r.redirect_url);var c=window.open("https://untappd.com/oauth/authenticate/?client_id="+n+"&redirect_url="+a+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");c.addEventListener("loadstart",function(e){if(0===e.url.indexOf(a)){c.removeEventListener("exit",function(e){}),c.close();for(var n=e.url.split("#")[1],t=n.split("&"),r=[],i=0;i<t.length;i++)r[t[i].split("=")[0]]=t[i].split("=")[1];if(void 0!==r.access_token&&null!==r.access_token){var s={access_token:r.access_token};o.resolve(s)}else o.reject("Problem authenticating")}}),c.addEventListener("exit",function(e){o.reject("The sign in flow was canceled")})}else o.reject("Could not find InAppBrowser plugin")}else o.reject("Cannot authenticate via a web browser");
return o.promise},dribble:function(r,o,i,a,c){var s=e.defer();if(window.cordova){var u=cordova.require("cordova/plugin_list").metadata;if(t.isInAppBrowserInstalled(u)===!0){var l="http://localhost/callback",d="https://dribbble.com/oauth/authorize",f="https://dribbble.com/oauth/token";void 0!==a&&a.hasOwnProperty("redirect_uri")&&(l=a.redirect_uri),void 0===c&&(c=t.createNonce(5));var p=i.join(",").replace(/,/g,"+"),v=window.open(d+"?client_id="+r+"&redirect_uri="+l+"&scope="+p+"&state="+c,"_blank","location=no,clearsessioncache=yes,clearcache=yes");v.addEventListener("loadstart",function(e){if(0===e.url.indexOf(l)){var t=e.url.split("code=")[1],i=t.split("&")[0];n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n({method:"post",url:f,data:"client_id="+r+"&redirect_uri="+l+"&client_secret="+o+"&code="+i}).success(function(e){s.resolve(e)}).error(function(e,n){s.reject("Problem authenticating ")})["finally"](function(){setTimeout(function(){v.close()},10)})}}),v.addEventListener("exit",function(e){s.reject("The sign in flow was canceled")})}else s.reject("Could not find InAppBrowser plugin")}else s.reject("Cannot authenticate via a web browser");return s.promise}}}]),angular.module("ngCordovaOauth",["oauth.providers","oauth.utils"]),angular.module("oauth.utils",[]).factory("$cordovaOauthUtility",["$q",function(e){return{isInAppBrowserInstalled:function(e){var n=["cordova-plugin-inappbrowser","org.apache.cordova.inappbrowser"];return n.some(function(n){return e.hasOwnProperty(n)})},createSignature:function(e,n,t,r,o,i){if("undefined"!=typeof jsSHA){for(var a=angular.copy(t),c=Object.keys(r),s=0;s<c.length;s++)a[c[s]]=encodeURIComponent(r[c[s]]);var u=e+"&"+encodeURIComponent(n)+"&",l=Object.keys(a).sort();for(s=0;s<l.length;s++)u+=s==l.length-1?encodeURIComponent(l[s]+"="+a[l[s]]):encodeURIComponent(l[s]+"="+a[l[s]]+"&");var d=new jsSHA(u,"TEXT"),f="";i&&(f=encodeURIComponent(i)),t.oauth_signature=encodeURIComponent(d.getHMAC(encodeURIComponent(o)+"&"+f,"TEXT","SHA-1","B64"));var p=Object.keys(t),v="OAuth ";for(s=0;s<p.length;s++)v+=s==p.length-1?p[s]+'="'+t[p[s]]+'"':p[s]+'="'+t[p[s]]+'",';return{signature_base_string:u,authorization_header:v,signature:t.oauth_signature}}return"Missing jsSHA JavaScript library"},createNonce:function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;e>r;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n},generateUrlParameters:function(e){var n=Object.keys(e);n.sort();for(var t="",r="",o=0;o<n.length;o++)t+=r+n[o]+"="+e[n[o]],r="&";return t},parseResponseParameters:function(e){if(e.split){for(var n=e.split("&"),t={},r=0;r<n.length;r++)t[n[r].split("=")[0]]=n[r].split("=")[1];return t}return{}},generateOauthParametersInstance:function(e){var n=new jsSHA(Math.round((new Date).getTime()/1e3),"TEXT"),t={oauth_consumer_key:e,oauth_nonce:n.getHash("SHA-1","HEX"),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"};return t}}}])}();
/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,t,W){'use strict';function ua(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function va(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ea(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function ba(a,b,c){var d="";a=X(a)?a:a&&U(a)&&a.length?a.split(/\s+/):[];u(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Fa(a){if(a instanceof G)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return G(ka(a))}if(1===a.nodeType)return G(a)}function ka(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ga(a,b,c){u(b,function(b){a.addClass(b,c)})}function Ha(a,b,c){u(b,function(b){a.removeClass(b,c)})}function ha(a){return function(b,c){c.addClass&&(Ga(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ha(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
H;a.domOperation=function(){a.$$domOperationFired=!0;b();b=H};a.$$prepared=!0}return a}function ca(a,b){wa(a,b);xa(a,b)}function wa(a,b){b.from&&(a.css(b.from),b.from=null)}function xa(a,b){b.to&&(a.css(b.to),b.to=null)}function R(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ia(a.attr("class"),d,e);ya(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ia(a,b,c){function d(a){U(a)&&(a=a.split(" "));
var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);u(b,function(a,b){e[b]=1});c=d(c);u(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};u(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(s[d].length&&(s[d]+=" "),s[d]+=c)});return s}function z(a){return a instanceof t.element?a[0]:a}function za(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};u(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);
if("-"===k||"+"===k||0<=k)c=Ja(c);0===c&&(c=null);d[b]=c}});return d}function Ja(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function la(a){return 0===a||null!=a}function Aa(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ja(a,b){var c=b?"-"+b+"s":"";da(a,[ea,c]);return[ea,c]}function ma(a,b){var c=b?"paused":"",d=V+"PlayState";da(a,[d,c]);return[d,c]}function da(a,
b){a.style[b[0]]=b[1]}function Ba(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var H=t.noop,ya=t.extend,G=t.element,u=t.forEach,X=t.isArray,U=t.isString,na=t.isObject,Ka=t.isUndefined,La=t.isDefined,Ca=t.isFunction,oa=t.isElement,O,pa,V,qa;F.ontransitionend===W&&F.onwebkittransitionend!==W?(O="WebkitTransition",pa="webkitTransitionEnd transitionend"):
(O="transition",pa="transitionend");F.onanimationend===W&&F.onwebkitanimationend!==W?(V="WebkitAnimation",qa="webkitAnimationEnd animationend"):(V="animation",qa="animationend");var ra=V+"Delay",sa=V+"Duration",ea=O+"Delay";F=O+"Duration";var Ma={transitionDuration:F,transitionDelay:ea,transitionProperty:O+"Property",animationDuration:sa,animationDelay:ra,animationIterationCount:V+"IterationCount"},Na={transitionDuration:F,transitionDelay:ea,animationDuration:sa,animationDelay:ra};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d.push([].concat(a));c()}function c(){if(d.length){for(var b=[],n=
0;n<d.length;n++){var h=d[n];h.shift()();h.length&&b.push(h)}d=b;e||a(function(){e||c()})}}var d=[],e;b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(n===a.length)b(!0);else a[n](function(a){!1===a?b(!1):(n++,c())})}var n=0;c()};c.all=function(a,b){function c(s){h=h&&s;++n===
a.length&&b(h)}var n=0,h=!0;u(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:H,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(u(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",
function(a){function b(a,b,c,h){return d[a].some(function(a){return a(b,c,h)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,
b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,s,n,h,k,D,A,Z,I){function w(a,b){var c=z(a),f=[],m=l[b];m&&u(m,function(a){a.node.contains(c)&&f.push(a.callback)});
return f}function B(a,b,c,f){d(function(){u(w(b,a),function(a){a(b,c,f)})})}function r(a,S,p){function d(b,c,f,p){B(c,a,f,p);b.progress(c,f,p)}function g(b){Da(a,p);ca(a,p);p.domOperation();l.complete(!b)}var P,E;if(a=Fa(a))P=z(a),E=a.parent();p=ia(p);var l=new A;if(!P)return g(),l;X(p.addClass)&&(p.addClass=p.addClass.join(" "));X(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!na(p.from)&&(p.from=null);p.to&&!na(p.to)&&(p.to=null);var e=[P.className,p.addClass,p.removeClass].join(" ");
if(!v(e))return g(),l;var M=0<=["enter","move","leave"].indexOf(S),h=!x||L.get(P),e=!h&&m.get(P)||{},k=!!e.state;h||k&&1==e.state||(h=!ta(a,E,S));if(h)return g(),l;M&&K(a);h={structural:M,element:a,event:S,close:g,options:p,runner:l};if(k){if(b("skip",a,h,e)){if(2===e.state)return g(),l;R(a,e.options,p);return e.runner}if(b("cancel",a,h,e))2===e.state?e.runner.end():e.structural?e.close():R(a,h.options,e.options);else if(b("join",a,h,e))if(2===e.state)R(a,p,{});else return S=h.event=e.event,p=R(a,
e.options,h.options),l}else R(a,p,{});(k=h.structural)||(k="animate"===h.event&&0<Object.keys(h.options.to||{}).length||c(h.options));if(!k)return g(),C(a),l;M&&f(E);var r=(e.counter||0)+1;h.counter=r;ga(a,1,h);s.$$postDigest(function(){var b=m.get(P),v=!b,b=b||{},e=a.parent()||[],E=0<e.length&&("animate"===b.event||b.structural||c(b.options));if(v||b.counter!==r||!E){v&&(Da(a,p),ca(a,p));if(v||M&&b.event!==S)p.domOperation(),l.end();E||C(a)}else S=!b.structural&&c(b.options,!0)?"setClass":b.event,
b.structural&&f(e),ga(a,2),b=D(a,S,b.options),b.done(function(b){g(!b);(b=m.get(P))&&b.counter===r&&C(z(a));d(l,S,"close",{})}),l.setHost(b),d(l,S,"start",{})});return l}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function C(a){a=z(a);a.removeAttribute("data-ng-animate");m.remove(a)}function E(a,b){return z(a)===z(b)}function f(a){a=z(a);do{if(!a||1!==
a.nodeType)break;var b=m.get(a);if(b){var f=a;!b.structural&&c(b.options)&&(2===b.state&&b.runner.end(),C(f))}a=a.parentNode}while(1)}function ta(a,b,c){var f=c=!1,d=!1,v;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){f||(f=E(b,n));a=b[0];if(1!==a.nodeType)break;var e=m.get(a)||{};d||(d=e.structural||L.get(a));if(Ka(v)||!0===v)a=b.data("$$ngAnimateChildren"),La(a)&&(v=a);if(d&&!1===v)break;f||(f=E(b,n),f||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=E(b,g));b=b.parent()}return(!d||v)&&f&&c}function ga(a,
b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=m.get(a))?ya(b,c):c;m.put(a,c)}var m=new k,L=new k,x=null,M=s.$watch(function(){return 0===Z.totalPendingRequests},function(a){a&&(M(),s.$$postDigest(function(){s.$$postDigest(function(){null===x&&(x=!0)})}))}),g=G(h[0].body),l={},P=a.classNameFilter(),v=P?function(a){return P.test(a)}:function(){return!0},Da=ha(I);return{on:function(a,b,c){b=ka(b);l[a]=l[a]||[];l[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,
b,c){var d=ka(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=l[a];d&&(l[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ua(oa(a),"element","not an element");ua(oa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return r(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!x;else if(oa(a)){var f=z(a),d=L.get(f);1===c?b=!d:(b=!!b)?d&&L.remove(f):L.put(f,!0)}else b=x=!!a;return b}}}]}]).provider("$$animation",
["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(a,e,s,n,h){var k=[],D=ha(a),A=0,Z=0,I=[];return function(w,B,r){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function C(a){var b=[],c={};u(a,function(a,f){var d=z(a.element),
m=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var g=m?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:f,element:G(a)}})}else b.push(a)});var f={},d={};u(c,function(c,m){var g=c.from,e=c.to;if(g&&e){var l=a[g.animationID],h=a[e.animationID],x=g.animationID.toString();if(!d[x]){var B=d[x]={structural:!0,beforeStart:function(){l.beforeStart();h.beforeStart()},close:function(){l.close();h.close()},classes:E(l.classes,h.classes),
from:l,to:h,anchors:[]};B.classes.length?b.push(B):(b.push(l),b.push(h))}d[x].anchors.push({out:g.element,"in":e.element})}else g=g?g.animationID:e.animationID,e=g.toString(),f[e]||(f[e]=!0,b.push(a[g]))});return b}function E(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var g=0;g<b.length;g++)if(d===b[g]){c.push(d);break}}return c.join(" ")}function f(a){for(var b=c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}
function ta(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ga(){var a=b(w);!a||"leave"===B&&r.$$domOperationFired||a.end()}function m(b){w.off("$destroy",ga);w.removeData("$$animationRunner");D(w,r);ca(w,r);r.domOperation();g&&a.removeClass(w,g);w.removeClass("ng-animate");x.complete(!b)}r=ia(r);var L=0<=["enter","move","leave"].indexOf(B),x=new n({end:function(){m()},cancel:function(){m(!0)}});if(!c.length)return m(),x;w.data("$$animationRunner",
x);var M=va(w.attr("class"),va(r.addClass,r.removeClass)),g=r.tempClasses;g&&(M+=" "+g,r.tempClasses=null);var l;L||(l=A,A+=1);k.push({element:w,classes:M,event:B,classBasedIndex:l,structural:L,options:r,beforeStart:function(){w.addClass("ng-animate");g&&a.addClass(w,g)},close:m});w.on("$destroy",ga);if(1<k.length)return x;e.$$postDigest(function(){Z=A;A=0;I.length=0;var a=[];u(k,function(c){b(c.element)&&a.push(c)});k.length=0;u(C(a),function(a){function c(){a.beforeStart();var d,g=a.close,e=a.anchors?
a.from.element||a.to.element:a.element;b(e)&&z(e).parentNode&&(e=f(a))&&(d=e.start);d?(d=d(),d.done(function(a){g(!a)}),ta(a,d)):g()}a.structural?c():(I.push({node:z(a.element),fn:c}),a.classBasedIndex===Z-1&&(I=I.sort(function(a,b){return b.node.contains(a.node)}).map(function(a){return a.fn}),h(I)))})});return x}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ba(),c=Ba();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(a,
e,s,n,h,k,D){function A(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++r))+"-"+a.getAttribute("class")+"-"+b}function Z(h,f,B,k){var m;0<b.count(B)&&(m=c.get(B),m||(f=ba(f,"-stagger"),e.addClass(h,f),m=za(a,h,k),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(h,f),c.put(B,m)));return m||{}}function I(a){C.push(a);D.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K.offsetWidth+1,d=0;d<
C.length;d++)C[d](a);C.length=0})}function w(c,f,e){f=b.get(e);f||(f=za(a,c,Ma),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var B=ha(e),r=0,K=z(h).body,C=[];return function(a,c){function d(){m()}function h(){m(!0)}function m(b){if(!(K||C&&D)){K=!0;D=!1;e.removeClass(a,Y);e.removeClass(a,
W);ma(g,!1);ja(g,!1);u(l,function(a){g.style[a[0]]=""});B(a,c);ca(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function L(a){q.blockTransition&&ja(g,a);q.blockKeyframeAnimation&&ma(g,!!a)}function x(){p=new s({end:d,cancel:h});m();return{$$willAnimate:!1,start:function(){return p},end:d}}function M(){function b(){if(!K){L(!1);u(l,function(a){g.style[a[0]]=a[1]});B(a,c);e.addClass(a,W);if(q.recalculateTimingStyles){fa=g.className+" "+Y;$=A(g,fa);y=w(g,fa,$);Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;
if(0===J){m();return}q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){Q="boolean"!==typeof c.delay&&la(c.delay)?parseFloat(c.delay):Q;H=Math.max(Q,0);var k;q.applyTransitionDelay&&(y.transitionDelay=Q,k=[ea,Q+"s"],l.push(k),g.style[k[0]]=k[1]);q.applyAnimationDelay&&(y.animationDelay=Q,k=[ra,Q+"s"],l.push(k),g.style[k[0]]=k[1])}F=1E3*H;G=1E3*J;if(c.easing){var r=c.easing;q.hasTransitions&&(k=O+"TimingFunction",l.push([k,
r]),g.style[k]=r);q.hasAnimations&&(k=V+"TimingFunction",l.push([k,r]),g.style[k]=r)}y.transitionDuration&&p.push(pa);y.animationDuration&&p.push(qa);x=Date.now();a.on(p.join(" "),h);n(d,F+1.5*G);xa(a,c)}}function d(){m()}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-x,0)>=F&&b>=J&&(C=!0,m())}if(!K)if(g.parentNode){var x,p=[],k=function(a){if(C)D&&a&&(D=!1,m());else if(D=!a,y.animationDuration)if(a=
ma(g,D),D)l.push(a);else{var b=l,c=b.indexOf(a);0<=a&&b.splice(c,1)}},r=0<U&&(y.transitionDuration&&0===T.transitionDuration||y.animationDuration&&0===T.animationDuration)&&Math.max(T.animationDelay,T.transitionDelay);r?n(b,Math.floor(r*U*1E3),!1):b();t.resume=function(){k(!0)};t.pause=function(){k(!1)}}else m()}var g=z(a);if(!g||!g.parentNode)return x();c=ia(c);var l=[],r=a.attr("class"),v=Ea(c),K,D,C,p,t,H,F,J,G;if(0===c.duration||!k.animations&&!k.transitions)return x();var aa=c.event&&X(c.event)?
c.event.join(" "):c.event,R="",N="";aa&&c.structural?R=ba(aa,"ng-",!0):aa&&(R=aa);c.addClass&&(N+=ba(c.addClass,"-add"));c.removeClass&&(N.length&&(N+=" "),N+=ba(c.removeClass,"-remove"));c.applyClassesEarly&&N.length&&(B(a,c),N="");var Y=[R,N].join(" ").trim(),fa=r+" "+Y,W=ba(Y,"-active"),r=v.to&&0<Object.keys(v.to).length;if(!(0<(c.keyframeStyle||"").length||r||Y))return x();var $,T;0<c.stagger?(v=parseFloat(c.stagger),T={transitionDelay:v,animationDelay:v,transitionDuration:0,animationDuration:0}):
($=A(g,fa),T=Z(g,Y,$,Na));e.addClass(a,Y);c.transitionStyle&&(v=[O,c.transitionStyle],da(g,v),l.push(v));0<=c.duration&&(v=0<g.style[O].length,v=Aa(c.duration,v),da(g,v),l.push(v));c.keyframeStyle&&(v=[V,c.keyframeStyle],da(g,v),l.push(v));var U=T?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(aa=0===U)&&ja(g,9999);var y=w(g,fa,$),Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&
"all"==y.transitionProperty;q.applyTransitionDuration=r&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&q.hasAnimations;q.applyTransitionDelay=la(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=la(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<N.length;if(q.applyTransitionDuration||q.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=
J,v=0<g.style[O+"Property"].length,l.push(Aa(J,v))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=J,l.push([sa,J+"s"]));if(0===J&&!q.recalculateTimingStyles)return x();null==c.duration&&0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||aa);F=1E3*H;G=1E3*J;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<T.animationDelay&&0===T.animationDuration);wa(a,c);q.blockTransition||ja(g,!1);L(J);return{$$willAnimate:!0,
end:d,start:function(){if(!K)return t={end:d,cancel:h,resume:null,pause:null},p=new s(t),I(M),p}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,e,s,n){function h(a){return a.replace(/\bng-\S+\b/g,"")}function k(a,b){U(a)&&(a=a.split(" "));U(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function D(c,
e,A){function D(a){var b={},c=z(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function s(){var c=h(A.attr("class")||""),d=k(c,t),c=k(t,c),d=a(n,{to:D(A),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function f(){n.remove();e.removeClass("ng-animate-shim");A.removeClass("ng-animate-shim")}var n=G(z(e).cloneNode(!0)),
t=h(n.attr("class")||"");e.addClass("ng-animate-shim");A.addClass("ng-animate-shim");n.addClass("ng-anchor");w.append(n);var m;c=function(){var c=a(n,{addClass:"ng-anchor-out",delay:!0,from:D(e)});return c.$$willAnimate?c:null}();if(!c&&(m=s(),!m))return f();var L=c||m;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!m&&(m=s()))return c=m.start(),c.done(function(){c=null;f();b.complete()}),c;f();b.complete()});return b=new d({end:a,cancel:a})}}}function A(a,
b,c,e){var h=t(a),f=t(b),k=[];u(e,function(a){(a=D(c,a.out,a["in"]))&&k.push(a)});if(h||f||0!==k.length)return{start:function(){function a(){u(b,function(a){a.end()})}var b=[];h&&b.push(h.start());f&&b.push(f.start());u(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural?(e.structural=e.applyClassesEarly=!0,e.event=c.event,"leave"===e.event&&(e.onDone=e.domOperation)):e.event=null;
c=a(d,e);return c.$$willAnimate?c:null}if(!n.animations&&!n.transitions)return H;var I=z(s).body;c=z(e);var w=G(I.parentNode===c?I:c);return function(a){return a.from&&a.to?A(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,e){function s(c){c=X(c)?c:c.split(" ");for(var d=[],e={},A=0;A<c.length;A++){var n=c[A],s=a.$$registeredAnimations[n];s&&!e[n]&&(d.push(b.get(s)),e[n]=
!0)}return d}var n=ha(e);return function(a,b,d,e){function t(){e.domOperation();n(a,e)}function z(a,b,d,e,g){switch(d){case "animate":b=[b,e.from,e.to,g];break;case "setClass":b=[b,r,K,g];break;case "addClass":b=[b,r,g];break;case "removeClass":b=[b,K,g];break;default:b=[b,g]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(g);else if(Ca(a))return a;return H}function w(a,b,d,e,g){var f=[];u(e,function(e){var h=e[g];h&&f.push(function(){var e,g,f=!1,l=function(a){f||
(f=!0,(g||H)(a),e.complete(!a))};e=new c({end:function(){l()},cancel:function(){l(!0)}});g=z(h,a,b,d,function(a){l(!1===a)});return e})});return f}function B(a,b,d,e,g){var f=w(a,b,d,e,g);if(0===f.length){var h,k;"beforeSetClass"===g?(h=w(a,"removeClass",d,e,"beforeRemoveClass"),k=w(a,"addClass",d,e,"beforeAddClass")):"setClass"===g&&(h=w(a,"removeClass",d,e,"removeClass"),k=w(a,"addClass",d,e,"addClass"));h&&(f=f.concat(h));k&&(f=f.concat(k))}if(0!==f.length)return function(a){var b=[];f.length&&
u(f,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&na(d)&&(e=d,d=null);e=ia(e);d||(d=a.attr("class")||"",e.addClass&&(d+=" "+e.addClass),e.removeClass&&(d+=" "+e.removeClass));var r=e.addClass,K=e.removeClass,C=s(d),E,f;if(C.length){var F,G;"leave"==b?(G="leave",F="afterLeave"):(G="before"+b.charAt(0).toUpperCase()+b.substr(1),F=b);"enter"!==b&&"move"!==b&&(E=B(a,b,e,C,G));f=B(a,b,e,C,F)}if(E||f)return{start:function(){function b(c){n=
!0;t();ca(a,e);g.complete(c)}var d,k=[];E&&k.push(function(a){d=E(a)});k.length?k.push(function(a){t();a(!0)}):t();f&&k.push(function(a){d=f(a)});var n=!1,g=new c({end:function(){n||((d||H)(void 0),b(void 0))},cancel:function(){n||((d||H)(!0),b(!0))}});c.chain(k,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}
return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/**
 * Created by PAVEI on 30/09/2014.
 * Updated by Ross Martin on 12/05/2014
 * Updated by Davide Pastore on 04/14/2015
 * Updated by Michel Vidailhet on 05/12/2015
 * Updated by Rene Korss on 11/25/2015
 */

angular.module('ionicLazyLoad', []);

angular.module('ionicLazyLoad')

.directive('lazyScroll', ['$rootScope',
    function($rootScope) {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                var origEvent = $scope.$onScroll;
                $scope.$onScroll = function () {
                    $rootScope.$broadcast('lazyScrollEvent');

                    if(typeof origEvent === 'function'){
                      origEvent();
                    }
                };
            }
        };
}])

.directive('imageLazySrc', ['$document', '$timeout', '$ionicScrollDelegate', '$compile',
    function ($document, $timeout, $ionicScrollDelegate, $compile) {
        return {
            restrict: 'A',
            scope: {
                lazyScrollResize: "@lazyScrollResize",
                imageLazyBackgroundImage: "@imageLazyBackgroundImage",
                imageLazySrc: "@"
            },
            link: function ($scope, $element, $attributes) {
                if (!$attributes.imageLazyDistanceFromBottomToLoad) {
                    $attributes.imageLazyDistanceFromBottomToLoad = 0;
                }
                if (!$attributes.imageLazyDistanceFromRightToLoad) {
                    $attributes.imageLazyDistanceFromRightToLoad = 0;
                }

                var loader;
                if ($attributes.imageLazyLoader) {
                    loader = $compile('<div class="image-loader-container"><ion-spinner class="image-loader" icon="' + $attributes.imageLazyLoader + '"></ion-spinner></div>')($scope);
                    $element.after(loader);
                }

                $scope.$watch('imageLazySrc', function (oldV, newV) {
                    if(loader)
                        loader.remove();
                    if ($attributes.imageLazyLoader) {
                        loader = $compile('<div class="image-loader-container"><ion-spinner class="image-loader" icon="' + $attributes.imageLazyLoader + '"></ion-spinner></div>')($scope);
                        $element.after(loader);
                    }
                    var deregistration = $scope.$on('lazyScrollEvent', function () {
                        //    console.log('scroll');
                            if (isInView()) {
                                loadImage();
                                deregistration();
                            }
                        }
                    );
                    $timeout(function () {
                        if (isInView()) {
                            loadImage();
                            deregistration();
                        }
                    }, 500);
                });
                var deregistration = $scope.$on('lazyScrollEvent', function () {
                       // console.log('scroll');
                        if (isInView()) {
                            loadImage();
                            deregistration();
                        }
                    }
                );

                function loadImage() {
                    //Bind "load" event
                    $element.bind("load", function (e) {
                        if ($attributes.imageLazyLoader) {
                            loader.remove();
                        }
                        if ($scope.lazyScrollResize == "true") {
                            //Call the resize to recalculate the size of the screen
                            $ionicScrollDelegate.resize();
                        }
                        $element.unbind("load");
                    });

                    if ($scope.imageLazyBackgroundImage == "true") {
                        var bgImg = new Image();
                        bgImg.onload = function () {
                            if ($attributes.imageLazyLoader) {
                                loader.remove();
                            }
                            $element[0].style.backgroundImage = 'url(' + $attributes.imageLazySrc + ')'; // set style attribute on element (it will load image)
                            if ($scope.lazyScrollResize == "true") {
                                //Call the resize to recalculate the size of the screen
                                $ionicScrollDelegate.resize();
                            }
                        };
                        bgImg.src = $attributes.imageLazySrc;
                    } else {
                        $element[0].src = $attributes.imageLazySrc; // set src attribute on element (it will load image)
                    }
                }

                function isInView() {
                    var clientHeight = $document[0].documentElement.clientHeight;
                    var clientWidth = $document[0].documentElement.clientWidth;
                    var imageRect = $element[0].getBoundingClientRect();
                    return (imageRect.top >= 0 && imageRect.top <= clientHeight + parseInt($attributes.imageLazyDistanceFromBottomToLoad))
                        && (imageRect.left >= 0 && imageRect.left <= clientWidth + parseInt($attributes.imageLazyDistanceFromRightToLoad));
                }

                // bind listener
                // listenerRemover = scrollAndResizeListener.bindListener(isInView);

                // unbind event listeners if element was destroyed
                // it happens when you change view, etc
                $element.on('$destroy', function () {
                    deregistration();
                });

                // explicitly call scroll listener (because, some images are in viewport already and we haven't scrolled yet)
                $timeout(function () {
                    if (isInView()) {
                        loadImage();
                        deregistration();
                    }
                }, 500);
            }
        };
    }]);

angular.module('ion-sticky', ['ionic'])
    .directive('ionSticky', ['$ionicPosition', '$compile', '$timeout', function ($ionicPosition, $compile, $timeout) {
        return {
            restrict: 'A',
            require: '^$ionicScroll',
            link: function ($scope, $element, $attr, $ionicScroll) {
                var scroll = angular.element($ionicScroll.element);
                var clone;
                var cloneVal = function(original, to) {
                    var my_textareas = original.getElementsByTagName('textarea');
                    var result_textareas = to.getElementsByTagName('textarea');
                    var my_selects = original.getElementsByTagName('select');
                    var result_selects = to.getElementsByTagName('select');
                    for (var i = 0, l = my_textareas.length; i < l; ++i)
                        result_textareas[i].value = my_textareas[i].value;
                    for (var i = 0, l = my_selects.length; i < l; ++i)
                        result_selects[i].value = my_selects[i].value;
                };
                // creates the sticky divider clone and adds it to DOM
                var createStickyClone = function ($element) {
                    clone = $element.clone().css({
                        position: 'absolute',
                        top: $ionicPosition.position(scroll).top + "px", // put to top
                        left: 0,
                        right: 0
                    });
                    $attr.ionStickyClass = ($attr.ionStickyClass) ? $attr.ionStickyClass : 'assertive';
                    cloneVal($element[0], clone[0]);
                    clone[0].className += ' ' + $attr.ionStickyClass;

                    clone.removeAttr('ng-repeat-start').removeAttr('ng-if');

                    scroll.parent().append(clone);

                    // compile the clone so that anything in it is in Angular lifecycle.
                    $compile(clone)($scope);
                };

                var removeStickyClone = function () {
                    if (clone)
                        clone.remove();
                    clone = null;
                };

                $scope.$on("$destroy", function () {
                    // remove the clone and unbind the scroll listener
                    removeStickyClone();
                    angular.element($ionicScroll.element).off('scroll');
                });

                var lastActive;
                var updateSticky = ionic.throttle(function() {
                    //console.log(performance.now());
                    var active = null;
                    var dividers = [];
                    var tmp = $element[0].getElementsByClassName("item-divider");
                    for (var i = 0; i < tmp.length; ++i) dividers.push(angular.element(tmp[i]));
                    for (var i = 0; i < dividers.length; ++i) { // can be changed to binary search
                        if ($ionicPosition.offset(dividers[i]).top - dividers[i].prop('offsetHeight') < 0) { // this equals to jquery outerHeight
                            if (i === dividers.length-1 || $ionicPosition.offset(dividers[i+1]).top -
                                 (dividers[i].prop('offsetHeight') + dividers[i+1].prop('offsetHeight')) > 0) {
                                active = dividers[i][0];
                                break;
                            }
                        }
                    }

                    if (lastActive != active) {
                        removeStickyClone();
                        lastActive = active;
                        if (active != null)
                            createStickyClone(angular.element(active));
                    }
                    //console.log(performance.now());
                }, 200);
                scroll.on('scroll', function (event) {
                    updateSticky();
                });
            }
        }
    }]);

angular.module('ionic.ion.imageCacheFactory', [])

.factory('$ImageCacheFactory', ['$q', function($q) {
    return {
        Cache: function(urls) {
            if (!(urls instanceof Array))
                return $q.reject('Input is not an array');

            var promises = [];
            
            for (var i = 0; i < urls.length; i++) {
                var deferred = $q.defer();
                var img = new Image();

                img.onload = (function(deferred) {
                    return function(){
                        deferred.resolve();
                    }
                })(deferred);
                
                img.onerror = (function(deferred,url) {
                    return function(){
                        deferred.reject(url);
                    }
                })(deferred,urls[i]);

                promises.push(deferred.promise);
                img.src = urls[i];
            }
            
            return $q.all(promises);
        }
    }
}]);
/*!
    localForage -- Offline Storage, Improved
    Version 1.4.2
    https://mozilla.github.io/localForage
    (c) 2013-2015 Mozilla, Apache License 2.0
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||"undefined"==typeof a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(e){return p.reject(a,e)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;return a&&"object"==typeof a&&"function"==typeof b?function(){b.apply(a,arguments)}:void 0}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(d){c.status="error",c.value=d}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=c=e,e.prototype["catch"]=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){var e=this.state===r?a:b;g(c,e,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},c.resolve=k,c.reject=l,c.all=m,c.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){return"undefined"!=typeof indexedDB?indexedDB:"undefined"!=typeof webkitIndexedDB?webkitIndexedDB:"undefined"!=typeof mozIndexedDB?mozIndexedDB:"undefined"!=typeof OIndexedDB?OIndexedDB:"undefined"!=typeof msIndexedDB?msIndexedDB:void 0}function f(){try{return fa?"undefined"!=typeof openDatabase&&"undefined"!=typeof navigator&&navigator.userAgent&&/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)?!1:fa&&"function"==typeof fa.open&&"undefined"!=typeof IDBKeyRange:!1}catch(a){return!1}}function g(){return"function"==typeof openDatabase}function h(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&localStorage.setItem}catch(a){return!1}}function i(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(c){if("TypeError"!==c.name)throw c;for(var d="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,e=new d,f=0;f<a.length;f+=1)e.append(a[f]);return e.getBlob(b.type)}}function j(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function k(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;b>e;e++)d[e]=a.charCodeAt(e);return c}function l(a){return new ia(function(b){var c=i([""]);a.objectStore(ja).put(c,"key"),a.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},a.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}})["catch"](function(){return!1})}function m(a){return"boolean"==typeof ga?ia.resolve(ga):l(a).then(function(a){return ga=a})}function n(a){var b=ha[a.name],c={};c.promise=new ia(function(a){c.resolve=a}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function o(a){var b=ha[a.name],c=b.deferredOperations.pop();c&&c.resolve()}function p(a,b){return new ia(function(c,d){if(a.db){if(!b)return c(a.db);n(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=fa.open.apply(fa,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(ja)}catch(d){if("ConstraintError"!==d.name)throw d;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(){d(f.error)},f.onsuccess=function(){c(f.result),o(a)}})}function q(a){return p(a,!1)}function r(a){return p(a,!0)}function s(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function t(a){return new ia(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function u(a){var b=k(atob(a.data));return i([b],{type:a.type})}function v(a){return a&&a.__local_forage_encoded_blob}function w(a){var b=this,c=b._initReady().then(function(){var a=ha[b._dbInfo.name];return a&&a.dbReady?a.dbReady:void 0});return c.then(a,a),c}function x(a){function b(){return ia.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];ha||(ha={});var f=ha[d.name];f||(f={forages:[],db:null,dbReady:null,deferredOperations:[]},ha[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=w);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady()["catch"](b))}var j=f.forages.slice(0);return ia.all(g).then(function(){return d.db=f.db,q(d)}).then(function(a){return d.db=a,s(d,c._defaultConfig.version)?r(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function y(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.get(a);g.onsuccess=function(){var a=g.result;void 0===a&&(a=null),v(a)&&(a=u(a)),b(a)},g.onerror=function(){d(g.error)}})["catch"](d)});return j(d,b),d}function z(a,b){var c=this,d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=f.openCursor(),h=1;g.onsuccess=function(){var c=g.result;if(c){var d=c.value;v(d)&&(d=u(d));var e=a(d,c.key,h++);void 0!==e?b(e):c["continue"]()}else b()},g.onerror=function(){d(g.error)}})["catch"](d)});return j(d,b),d}function A(a,b,c){var d=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new ia(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,b instanceof Blob?m(f.db).then(function(a){return a?b:t(b)}):b}).then(function(b){var d=f.db.transaction(f.storeName,"readwrite"),g=d.objectStore(f.storeName);null===b&&(b=void 0),d.oncomplete=function(){void 0===b&&(b=null),c(b)},d.onabort=d.onerror=function(){var a=h.error?h.error:h.transaction.error;e(a)};var h=g.put(b,a)})["catch"](e)});return j(e,c),e}function B(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readwrite"),g=f.objectStore(e.storeName),h=g["delete"](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}})["catch"](d)});return j(d,b),d}function C(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readwrite"),f=e.objectStore(d.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}})["catch"](c)});return j(c,a),c}function D(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.count();f.onsuccess=function(){a(f.result)},f.onerror=function(){c(f.error)}})["catch"](c)});return j(c,a),c}function E(a,b){var c=this,d=new ia(function(b,d){return 0>a?void b(null):void c.ready().then(function(){var e=c._dbInfo,f=e.db.transaction(e.storeName,"readonly").objectStore(e.storeName),g=!1,h=f.openCursor();h.onsuccess=function(){var c=h.result;return c?void(0===a?b(c.key):g?b(c.key):(g=!0,c.advance(a))):void b(null)},h.onerror=function(){d(h.error)}})["catch"](d)});return j(d,b),d}function F(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo,e=d.db.transaction(d.storeName,"readonly").objectStore(d.storeName),f=e.openCursor(),g=[];f.onsuccess=function(){var b=f.result;return b?(g.push(b.key),void b["continue"]()):void a(g)},f.onerror=function(){c(f.error)}})["catch"](c)});return j(c,a),c}function G(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;h>b;b+=4)c=la.indexOf(a[b]),d=la.indexOf(a[b+1]),e=la.indexOf(a[b+2]),f=la.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function H(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=la[c[b]>>2],d+=la[(3&c[b])<<4|c[b+1]>>4],d+=la[(15&c[b+1])<<2|c[b+2]>>6],d+=la[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}function I(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=oa;a instanceof ArrayBuffer?(d=a,e+=qa):(d=a.buffer,"[object Int8Array]"===c?e+=sa:"[object Uint8Array]"===c?e+=ta:"[object Uint8ClampedArray]"===c?e+=ua:"[object Int16Array]"===c?e+=va:"[object Uint16Array]"===c?e+=xa:"[object Int32Array]"===c?e+=wa:"[object Uint32Array]"===c?e+=ya:"[object Float32Array]"===c?e+=za:"[object Float64Array]"===c?e+=Aa:b(new Error("Failed to get type for BinaryArray"))),b(e+H(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=ma+a.type+"~"+H(this.result);b(oa+ra+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(g){console.error("Couldn't convert value into a JSON string: ",a),b(null,g)}}function J(a){if(a.substring(0,pa)!==oa)return JSON.parse(a);var b,c=a.substring(Ba),d=a.substring(pa,Ba);if(d===ra&&na.test(c)){var e=c.match(na);b=e[1],c=c.substring(e[0].length)}var f=G(c);switch(d){case qa:return f;case ra:return i([f],{type:b});case sa:return new Int8Array(f);case ta:return new Uint8Array(f);case ua:return new Uint8ClampedArray(f);case va:return new Int16Array(f);case xa:return new Uint16Array(f);case wa:return new Int32Array(f);case ya:return new Uint32Array(f);case za:return new Float32Array(f);case Aa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function K(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new ia(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(e){return d(e)}c.db.transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS "+c.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){b._dbInfo=c,a()},function(a,b){d(b)})})});return c.serializer=Ca,e}function L(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function M(a,b){var c=this,d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;g>h;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),j=a(j,i.key,h+1),void 0!==j)return void b(j)}b()},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function N(a,b,c){var d=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=new ia(function(c,e){d.ready().then(function(){void 0===b&&(b=null);var f=b,g=d._dbInfo;g.serializer.serialize(b,function(b,d){d?e(d):g.db.transaction(function(d){d.executeSql("INSERT OR REPLACE INTO "+g.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){c(f)},function(a,b){e(b)})},function(a){a.code===a.QUOTA_ERR&&e(a)})})})["catch"](e)});return j(e,c),e}function O(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function P(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function Q(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function R(a,b){var c=this,d=new ia(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){c.executeSql("SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})["catch"](d)});return j(d,b),d}function S(a){var b=this,c=new ia(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){b.executeSql("SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})["catch"](c)});return j(c,a),c}function T(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=c.name+"/",c.storeName!==b._defaultConfig.storeName&&(c.keyPrefix+=c.storeName+"/"),b._dbInfo=c,c.serializer=Ca,ia.resolve()}function U(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return j(c,a),c}function V(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return j(d,b),d}function W(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;f>h;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),j=a(j,i.substring(e),g++),void 0!==j)return j}}});return j(d,b),d}function X(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(e){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return j(d,b),d}function Y(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;c>e;e++)0===localStorage.key(e).indexOf(a.keyPrefix)&&d.push(localStorage.key(e).substring(a.keyPrefix.length));return d});return j(c,a),c}function Z(a){var b=this,c=b.keys().then(function(a){return a.length});return j(c,a),c}function $(a,b){var c=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return j(d,b),d}function _(a,b,c){var d=this;"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a));var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new ia(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(h){"QuotaExceededError"!==h.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==h.name||f(h),f(h)}})})});return j(e,c),e}function aa(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a["catch"](c)}function ba(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function ca(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&(La(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}function da(a){for(var b in Ga)if(Ga.hasOwnProperty(b)&&Ga[b]===a)return!0;return!1}var ea="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},fa=e();"undefined"==typeof Promise&&"undefined"!=typeof a&&a(3);var ga,ha,ia=Promise,ja="local-forage-detect-blob-support",ka={_driver:"asyncStorage",_initStorage:x,iterate:z,getItem:y,setItem:A,removeItem:B,clear:C,length:D,key:E,keys:F},la="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ma="~~local_forage_type~",na=/^~~local_forage_type~([^~]+)~/,oa="__lfsc__:",pa=oa.length,qa="arbf",ra="blob",sa="si08",ta="ui08",ua="uic8",va="si16",wa="si32",xa="ur16",ya="ui32",za="fl32",Aa="fl64",Ba=pa+qa.length,Ca={serialize:I,deserialize:J,stringToBuffer:G,bufferToString:H},Da={_driver:"webSQLStorage",_initStorage:K,iterate:M,getItem:L,setItem:N,removeItem:O,clear:P,length:Q,key:R,keys:S},Ea={_driver:"localStorageWrapper",_initStorage:T,iterate:W,getItem:V,setItem:_,removeItem:$,clear:U,length:Z,key:X,keys:Y},Fa={},Ga={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},Ha=[Ga.INDEXEDDB,Ga.WEBSQL,Ga.LOCALSTORAGE],Ia=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],Ja={description:"",driver:Ha.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},Ka={};Ka[Ga.INDEXEDDB]=f(),Ka[Ga.WEBSQL]=g(),Ka[Ga.LOCALSTORAGE]=h();var La=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},Ma=function(){function a(b){d(this,a),this.INDEXEDDB=Ga.INDEXEDDB,this.LOCALSTORAGE=Ga.LOCALSTORAGE,this.WEBSQL=Ga.WEBSQL,this._defaultConfig=ca({},Ja),this._config=ca({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)}return a.prototype.config=function(a){if("object"===("undefined"==typeof a?"undefined":ea(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a)"storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),this._config[b]=a[b];return"driver"in a&&a.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(a,b,c){var d=new ia(function(b,c){try{var d=a._driver,e=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),f=new Error("Custom driver name already in use: "+a._driver);if(!a._driver)return void c(e);if(da(a._driver))return void c(f);for(var g=Ia.concat("_initStorage"),h=0;h<g.length;h++){var i=g[h];if(!i||!a[i]||"function"!=typeof a[i])return void c(e)}var j=ia.resolve(!0);"_support"in a&&(j=a._support&&"function"==typeof a._support?a._support():ia.resolve(!!a._support)),j.then(function(c){Ka[d]=c,Fa[d]=a,b()},c)}catch(k){c(k)}});return aa(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=this,e=ia.resolve().then(function(){if(!da(a)){if(Fa[a])return Fa[a];throw new Error("Driver not found.")}switch(a){case d.INDEXEDDB:return ka;case d.LOCALSTORAGE:return Ea;case d.WEBSQL:return Da}});return aa(e,b,c),e},a.prototype.getSerializer=function(a){var b=ia.resolve(Ca);return aa(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return aa(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){f._config.driver=f.driver()}function e(a){return function(){function b(){for(;c<a.length;){var e=a[c];return c++,f._dbInfo=null,f._ready=null,f.getDriver(e).then(function(a){return f._extend(a),d(),f._ready=f._initStorage(f._config),f._ready})["catch"](b)}d();var g=new Error("No available storage method found.");return f._driverSet=ia.reject(g),f._driverSet}var c=0;return b()}}var f=this;La(a)||(a=[a]);var g=this._getSupportedDrivers(a),h=null!==this._driverSet?this._driverSet["catch"](function(){return ia.resolve()}):ia.resolve();return this._driverSet=h.then(function(){var a=g[0];return f._dbInfo=null,f._ready=null,f.getDriver(a).then(function(a){f._driver=a._driver,d(),f._wrapLibraryMethodsWithReady(),f._initDriver=e(g)})})["catch"](function(){d();var a=new Error("No available storage method found.");return f._driverSet=ia.reject(a),f._driverSet}),aa(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!Ka[a]},a.prototype._extend=function(a){ca(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0;a<Ia.length;a++)ba(this,Ia[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),Na=new Ma;b.exports=Na},{3:3}]},{},[4])(4)});
/**
 * Parse JavaScript SDK v1.6.14
 *
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * The source tree of this library can be found at
 *   https://github.com/ParsePlatform/Parse-SDK-JS
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Parse=e()}}(function(){return function e(t,r,n){function a(o,i){if(!r[o]){if(!t[o]){var u="function"==typeof require&&require;if(!i&&u)return u(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var c=r[o]={exports:{}};t[o][0].call(c.exports,function(e){var r=t[o][1][e];return a(r?r:e)},c,c.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(e,t,r){"use strict";function n(e,t,r){if(e=e||"",e=e.replace(/^\s*/,""),e=e.replace(/\s*$/,""),0===e.length)throw new TypeError("A name for the custom event must be provided");for(var n in t)if("string"!=typeof n||"string"!=typeof t[n])throw new TypeError('track() dimensions expects keys and values of type "string".');return r=r||{},o["default"].getAnalyticsController().track(e,t)._thenRunCallbacks(r)}var a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r.track=n;var s=e("./CoreManager"),o=a(s);o["default"].setAnalyticsController({track:function(e,t){var r=o["default"].getRESTController();return r.request("POST","events/"+e,{dimensions:t})}})},{"./CoreManager":3,"babel-runtime/helpers/interop-require-default":47}],2:[function(e,t,r){"use strict";function n(e,t,r){if(r=r||{},"string"!=typeof e||0===e.length)throw new TypeError("Cloud function name must be a string.");var n={};return r.useMasterKey&&(n.useMasterKey=r.useMasterKey),r.sessionToken&&(n.sessionToken=r.sessionToken),o["default"].getCloudController().run(e,t,n)._thenRunCallbacks(r)}var a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r.run=n;var s=e("./CoreManager"),o=a(s),i=e("./decode"),u=a(i),l=e("./encode"),c=a(l),f=e("./ParseError"),d=a(f),h=e("./ParsePromise"),p=a(h);o["default"].setCloudController({run:function(e,t,r){var n=o["default"].getRESTController(),a=(0,c["default"])(t,!0),s={};r.hasOwnProperty("useMasterKey")&&(s.useMasterKey=r.useMasterKey),r.hasOwnProperty("sessionToken")&&(s.sessionToken=r.sessionToken);var i=n.request("POST","functions/"+e,a,s);return i.then(function(e){var t=(0,u["default"])(e);return t&&t.hasOwnProperty("result")?p["default"].as(t.result):p["default"].error(new d["default"](d["default"].INVALID_JSON,"The server returned an invalid response."))})._thenRunCallbacks(r)}})},{"./CoreManager":3,"./ParseError":10,"./ParsePromise":16,"./decode":29,"./encode":30,"babel-runtime/helpers/interop-require-default":47}],3:[function(e,t,r){(function(e){"use strict";var r={IS_NODE:"undefined"!=typeof e&&!!e.versions&&!!e.versions.node,REQUEST_ATTEMPT_LIMIT:5,SERVER_URL:"https://api.parse.com/1",VERSION:"js1.6.14",APPLICATION_ID:null,JAVASCRIPT_KEY:null,MASTER_KEY:null,USE_MASTER_KEY:!1,PERFORM_USER_REWRITE:!0,FORCE_REVOCABLE_SESSION:!1};t.exports={get:function(e){if(r.hasOwnProperty(e))return r[e];throw new Error("Configuration key not found: "+e)},set:function(e,t){r[e]=t},setAnalyticsController:function(e){if("function"!=typeof e.track)throw new Error("AnalyticsController must implement track()");r.AnalyticsController=e},getAnalyticsController:function(){return r.AnalyticsController},setCloudController:function(e){if("function"!=typeof e.run)throw new Error("CloudController must implement run()");r.CloudController=e},getCloudController:function(){return r.CloudController},setConfigController:function(e){if("function"!=typeof e.current)throw new Error("ConfigController must implement current()");if("function"!=typeof e.get)throw new Error("ConfigController must implement get()");r.ConfigController=e},getConfigController:function(){return r.ConfigController},setFileController:function(e){if("function"!=typeof e.saveFile)throw new Error("FileController must implement saveFile()");if("function"!=typeof e.saveBase64)throw new Error("FileController must implement saveBase64()");r.FileController=e},getFileController:function(){return r.FileController},setInstallationController:function(e){if("function"!=typeof e.currentInstallationId)throw new Error("InstallationController must implement currentInstallationId()");r.InstallationController=e},getInstallationController:function(){return r.InstallationController},setPushController:function(e){if("function"!=typeof e.send)throw new Error("PushController must implement send()");r.PushController=e},getPushController:function(){return r.PushController},setObjectController:function(e){if("function"!=typeof e.save)throw new Error("ObjectController must implement save()");if("function"!=typeof e.fetch)throw new Error("ObjectController must implement fetch()");if("function"!=typeof e.destroy)throw new Error("ObjectController must implement destroy()");r.ObjectController=e},getObjectController:function(){return r.ObjectController},setQueryController:function(e){if("function"!=typeof e.find)throw new Error("QueryController must implement find()");r.QueryController=e},getQueryController:function(){return r.QueryController},setRESTController:function(e){if("function"!=typeof e.request)throw new Error("RESTController must implement request()");if("function"!=typeof e.ajax)throw new Error("RESTController must implement ajax()");r.RESTController=e},getRESTController:function(){return r.RESTController},setSessionController:function(e){if("function"!=typeof e.getSession)throw new Error("A SessionController must implement getSession()");r.SessionController=e},getSessionController:function(){return r.SessionController},setStorageController:function(e){if(e.async){if("function"!=typeof e.getItemAsync)throw new Error("An async StorageController must implement getItemAsync()");if("function"!=typeof e.setItemAsync)throw new Error("An async StorageController must implement setItemAsync()");if("function"!=typeof e.removeItemAsync)throw new Error("An async StorageController must implement removeItemAsync()")}else{if("function"!=typeof e.getItem)throw new Error("A synchronous StorageController must implement getItem()");if("function"!=typeof e.setItem)throw new Error("A synchronous StorageController must implement setItem()");if("function"!=typeof e.removeItem)throw new Error("A synchonous StorageController must implement removeItem()")}r.StorageController=e},getStorageController:function(){return r.StorageController},setUserController:function(e){if("function"!=typeof e.setCurrentUser)throw new Error("A UserController must implement setCurrentUser()");if("function"!=typeof e.currentUser)throw new Error("A UserController must implement currentUser()");if("function"!=typeof e.currentUserAsync)throw new Error("A UserController must implement currentUserAsync()");if("function"!=typeof e.signUp)throw new Error("A UserController must implement signUp()");if("function"!=typeof e.logIn)throw new Error("A UserController must implement logIn()");if("function"!=typeof e.become)throw new Error("A UserController must implement become()");if("function"!=typeof e.logOut)throw new Error("A UserController must implement logOut()");if("function"!=typeof e.requestPasswordReset)throw new Error("A UserController must implement requestPasswordReset()");if("function"!=typeof e.upgradeToRevocableSession)throw new Error("A UserController must implement upgradeToRevocableSession()");if("function"!=typeof e.linkWith)throw new Error("A UserController must implement linkWith()");r.UserController=e},getUserController:function(){return r.UserController}}}).call(this,e("_process"))},{_process:75}],4:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var a,s,o=e("./parseDate"),i=n(o),u=e("./ParseUser"),l=n(u),c=!1;r["default"]={init:function(e){if("undefined"==typeof FB)throw new Error("The Facebook JavaScript SDK must be loaded before calling init.");if(s={},e)for(var t in e)s[t]=e[t];if(s.status&&"undefined"!=typeof console){var r=console.warn||console.log||function(){};r.call(console,'The "status" flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.')}s.status=!1,FB.init(s),l["default"]._registerAuthenticationProvider({authenticate:function(e){var t=this;"undefined"==typeof FB&&e.error(this,"Facebook SDK not found."),FB.login(function(r){r.authResponse?e.success&&e.success(t,{id:r.authResponse.userID,access_token:r.authResponse.accessToken,expiration_date:new Date(1e3*r.authResponse.expiresIn+(new Date).getTime()).toJSON()}):e.error&&e.error(t,r)},{scope:a})},restoreAuthentication:function(e){if(e){var t=(0,i["default"])(e.expiration_date),r=t?(t.getTime()-(new Date).getTime())/1e3:0,n={userID:e.id,accessToken:e.access_token,expiresIn:r},a={};if(s)for(var o in s)a[o]=s[o];a.authResponse=n,a.status=!1;var u=FB.getAuthResponse();u&&u.userID!==n.userID&&FB.logout(),FB.init(a)}return!0},getAuthType:function(){return"facebook"},deauthenticate:function(){this.restoreAuthentication(null)}}),c=!0},isLinked:function(e){return e._isLinked("facebook")},logIn:function(e,t){if(e&&"string"!=typeof e){var r={};if(t)for(var n in t)r[n]=t[n];return r.authData=e,l["default"]._logInWith("facebook",r)}if(!c)throw new Error("You must initialize FacebookUtils before calling logIn.");return a=e,l["default"]._logInWith("facebook",t)},link:function(e,t,r){if(t&&"string"!=typeof t){var n={};if(r)for(var s in r)n[s]=r[s];return n.authData=t,e._linkWith("facebook",n)}if(!c)throw new Error("You must initialize FacebookUtils before calling link.");return a=t,e._linkWith("facebook",r)},unlink:function(e,t){if(!c)throw new Error("You must initialize FacebookUtils before calling unlink.");return e._unlinkFrom("facebook",t)}},t.exports=r["default"]},{"./ParseUser":21,"./parseDate":34,"babel-runtime/helpers/interop-require-default":47}],5:[function(e,t,r){"use strict";function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function a(){return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}var s=e("babel-runtime/helpers/interop-require-default")["default"],o=e("./CoreManager"),i=(s(o),e("./ParsePromise")),u=s(i),l=e("./Storage"),c=s(l),f=null;t.exports={currentInstallationId:function(){if("string"==typeof f)return u["default"].as(f);var e=c["default"].generatePath("installationId");return c["default"].getItemAsync(e).then(function(t){return t?(f=t,t):(t=a(),c["default"].setItemAsync(e,t).then(function(){return f=t,t}))})},_clearCache:function(){f=null},_setInstallationIdCache:function(e){f=e}}},{"./CoreManager":3,"./ParsePromise":16,"./Storage":24,"babel-runtime/helpers/interop-require-default":47}],6:[function(e,t,r){"use strict";function n(e,t){var r=N[e];return r?r[t]||null:null}function a(e,t,r){var a=n(e,t);return a?a:(N[e]||(N[e]={}),r||(r={serverData:{},pendingOps:[{}],objectCache:{},tasks:new I["default"],existed:!1}),a=N[e][t]=r)}function s(e,t){var r=n(e,t);return null===r?null:(delete N[e][t],r)}function o(e,t){var r=n(e,t);return r?r.serverData:{}}function i(e,t,r){var n=a(e,t).serverData;for(var s in r)"undefined"!=typeof r[s]?n[s]=r[s]:delete n[s]}function u(e,t){var r=n(e,t);return r?r.pendingOps:[{}]}function l(e,t,r,n){var s=a(e,t).pendingOps,o=s.length-1;n?s[o][r]=n:delete s[o][r]}function c(e,t){var r=a(e,t).pendingOps;r.push({})}function f(e,t){var r=a(e,t).pendingOps,n=r.shift();return r.length||(r[0]={}),n}function d(e,t){var r=f(e,t),n=u(e,t),a=n[0];for(var s in r)if(a[s]&&r[s]){var o=a[s].mergeWith(r[s]);o&&(a[s]=o)}else a[s]=r[s]}function h(e,t){var r=n(e,t);return r?r.objectCache:{}}function p(e,t,r){for(var n=o(e,t),a=n[r],s=u(e,t),i=0;i<s.length;i++)s[i][r]&&(a=s[i][r]instanceof T.RelationOp?s[i][r].applyTo(a,{className:e,id:t},r):s[i][r].applyTo(a));return a}function y(e,t){var r,n={},a=o(e,t);for(r in a)n[r]=a[r];for(var s=u(e,t),i=0;i<s.length;i++)for(r in s[i])s[i][r]instanceof T.RelationOp?n[r]=s[i][r].applyTo(n[r],{className:e,id:t},r):n[r]=s[i][r].applyTo(n[r]);return n}function v(e,t,r){var n=a(e,t);for(var s in r){var o=r[s];if(n.serverData[s]=o,o&&"object"==typeof o&&!(o instanceof k["default"])&&!(o instanceof C["default"])&&!(o instanceof S["default"])){var i=(0,w["default"])(o,!1,!0);n.objectCache[s]=JSON.stringify(i)}}}function m(e,t,r){var n=a(e,t);return n.tasks.enqueue(r)}function b(){N={}}var _=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r.getState=n,r.initializeState=a,r.removeState=s,r.getServerData=o,r.setServerData=i,r.getPendingOps=u,r.setPendingOp=l,r.pushPendingState=c,r.popPendingState=f,r.mergeFirstPendingState=d,r.getObjectCache=h,r.estimateAttribute=p,r.estimateAttributes=y,r.commitServerChanges=v,r.enqueueTask=m,r._clearAllState=b;var g=e("./encode"),w=_(g),O=e("./ParseFile"),C=_(O),P=e("./ParseObject"),k=_(P),A=e("./ParsePromise"),E=(_(A),e("./ParseRelation")),S=_(E),j=e("./TaskQueue"),I=_(j),T=e("./ParseOp"),N={}},{"./ParseFile":11,"./ParseObject":14,"./ParseOp":15,"./ParsePromise":16,"./ParseRelation":18,"./TaskQueue":26,"./encode":30,"babel-runtime/helpers/interop-require-default":47}],7:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"],a=e("babel-runtime/helpers/interop-require-wildcard")["default"],s=e("./decode"),o=n(s),i=e("./encode"),u=n(i),l=e("./CoreManager"),c=n(l),f=e("./InstallationController"),d=n(f),h=e("./ParseOp"),p=a(h),y=e("./RESTController"),v=n(y),m={initialize:function(e,t){c["default"].get("IS_NODE")&&console.log("It looks like you're using the browser version of the SDK in a node.js environment. You should require('parse/node') instead."),m._initialize(e,t)},_initialize:function(e,t,r){c["default"].set("APPLICATION_ID",e),c["default"].set("JAVASCRIPT_KEY",t),c["default"].set("MASTER_KEY",r),c["default"].set("USE_MASTER_KEY",!1)}};Object.defineProperty(m,"applicationId",{get:function(){return c["default"].get("APPLICATION_ID")},set:function(e){c["default"].set("APPLICATION_ID",e)}}),Object.defineProperty(m,"javaScriptKey",{get:function(){return c["default"].get("JAVASCRIPT_KEY")},set:function(e){c["default"].set("JAVASCRIPT_KEY",e)}}),Object.defineProperty(m,"masterKey",{get:function(){return c["default"].get("MASTER_KEY")},set:function(e){c["default"].set("MASTER_KEY",e)}}),Object.defineProperty(m,"serverURL",{get:function(){return c["default"].get("SERVER_URL")},set:function(e){c["default"].set("SERVER_URL",e)}}),m.ACL=e("./ParseACL"),m.Analytics=e("./Analytics"),m.Cloud=e("./Cloud"),m.CoreManager=e("./CoreManager"),m.Config=e("./ParseConfig"),m.Error=e("./ParseError"),m.FacebookUtils=e("./FacebookUtils"),m.File=e("./ParseFile"),m.GeoPoint=e("./ParseGeoPoint"),m.Installation=e("./ParseInstallation"),m.Object=e("./ParseObject"),m.Op={Set:p.SetOp,Unset:p.UnsetOp,Increment:p.IncrementOp,Add:p.AddOp,Remove:p.RemoveOp,AddUnique:p.AddUniqueOp,Relation:p.RelationOp},m.Promise=e("./ParsePromise"),m.Push=e("./Push"),m.Query=e("./ParseQuery"),m.Relation=e("./ParseRelation"),m.Role=e("./ParseRole"),m.Session=e("./ParseSession"),m.Storage=e("./Storage"),m.User=e("./ParseUser"),m._request=function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return c["default"].getRESTController().request.apply(null,t)},m._ajax=function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return c["default"].getRESTController().ajax.apply(null,t)},m._decode=function(e,t){return(0,o["default"])(t)},m._encode=function(e,t,r){return(0,u["default"])(e,r)},m._getInstallationId=function(){return c["default"].getInstallationController().currentInstallationId()},c["default"].setInstallationController(d["default"]),c["default"].setRESTController(v["default"]),m.Parse=m,t.exports=m},{"./Analytics":1,"./Cloud":2,"./CoreManager":3,"./FacebookUtils":4,"./InstallationController":5,"./ParseACL":8,"./ParseConfig":9,"./ParseError":10,"./ParseFile":11,"./ParseGeoPoint":12,"./ParseInstallation":13,"./ParseObject":14,"./ParseOp":15,"./ParsePromise":16,"./ParseQuery":17,"./ParseRelation":18,"./ParseRole":19,"./ParseSession":20,"./ParseUser":21,"./Push":22,"./RESTController":23,"./Storage":24,"./decode":29,"./encode":30,"babel-runtime/helpers/interop-require-default":47,"babel-runtime/helpers/interop-require-wildcard":48}],8:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/core-js/object/keys")["default"],o=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=e("./ParseRole"),u=o(i),l=e("./ParseUser"),c=o(l),f="*",d=function(){function e(t){if(a(this,e),this.permissionsById={},t&&"object"==typeof t)if(t instanceof c["default"])this.setReadAccess(t,!0),this.setWriteAccess(t,!0);else for(var r in t){var n=t[r];if("string"!=typeof r)throw new TypeError("Tried to create an ACL with an invalid user id.");this.permissionsById[r]={};for(var s in n){var o=n[s];if("read"!==s&&"write"!==s)throw new TypeError("Tried to create an ACL with an invalid permission type.");if("boolean"!=typeof o)throw new TypeError("Tried to create an ACL with an invalid permission value.");this.permissionsById[r][s]=o}}else if("function"==typeof t)throw new TypeError("ParseACL constructed with a function. Did you forget ()?")}return n(e,[{key:"toJSON",value:function(){var e={};for(var t in this.permissionsById)e[t]=this.permissionsById[t];return e}},{key:"equals",value:function(t){if(!(t instanceof e))return!1;var r=s(this.permissionsById),n=s(t.permissionsById);if(r.length!==n.length)return!1;for(var a in this.permissionsById){if(!t.permissionsById[a])return!1;if(this.permissionsById[a].read!==t.permissionsById[a].read)return!1;if(this.permissionsById[a].write!==t.permissionsById[a].write)return!1}return!0}},{key:"_setAccess",value:function(e,t,r){if(t instanceof c["default"]?t=t.id:t instanceof u["default"]&&(t="role:"+t.getName()),"string"!=typeof t)throw new TypeError("userId must be a string.");if("boolean"!=typeof r)throw new TypeError("allowed must be either true or false.");var n=this.permissionsById[t];if(!n){if(!r)return;n={},this.permissionsById[t]=n}r?this.permissionsById[t][e]=!0:(delete n[e],0===s(n).length&&delete this.permissionsById[t])}},{key:"_getAccess",value:function(e,t){t instanceof c["default"]?t=t.id:t instanceof u["default"]&&(t="role:"+t.getName());var r=this.permissionsById[t];return r?!!r[e]:!1}},{key:"setReadAccess",value:function(e,t){this._setAccess("read",e,t)}},{key:"getReadAccess",value:function(e){return this._getAccess("read",e)}},{key:"setWriteAccess",value:function(e,t){this._setAccess("write",e,t)}},{key:"getWriteAccess",value:function(e){return this._getAccess("write",e)}},{key:"setPublicReadAccess",value:function(e){this.setReadAccess(f,e)}},{key:"getPublicReadAccess",value:function(){return this.getReadAccess(f)}},{key:"setPublicWriteAccess",value:function(e){this.setWriteAccess(f,e)}},{key:"getPublicWriteAccess",value:function(){return this.getWriteAccess(f)}},{key:"getRoleReadAccess",value:function(e){if(e instanceof u["default"]&&(e=e.getName()),"string"!=typeof e)throw new TypeError("role must be a ParseRole or a String");return this.getReadAccess("role:"+e)}},{key:"getRoleWriteAccess",value:function(e){if(e instanceof u["default"]&&(e=e.getName()),"string"!=typeof e)throw new TypeError("role must be a ParseRole or a String");return this.getWriteAccess("role:"+e)}},{key:"setRoleReadAccess",value:function(e,t){if(e instanceof u["default"]&&(e=e.getName()),"string"!=typeof e)throw new TypeError("role must be a ParseRole or a String");this.setReadAccess("role:"+e,t)}},{key:"setRoleWriteAccess",value:function(e,t){if(e instanceof u["default"]&&(e=e.getName()),"string"!=typeof e)throw new TypeError("role must be a ParseRole or a String");this.setWriteAccess("role:"+e,t)}}]),e}();r["default"]=d,t.exports=r["default"]},{"./ParseRole":19,"./ParseUser":21,"babel-runtime/core-js/object/keys":41,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47}],9:[function(e,t,r){"use strict";function n(e){try{var t=JSON.parse(e);if(t&&"object"==typeof t)return(0,c["default"])(t)}catch(r){return null}}var a=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],o=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=e("./CoreManager"),u=o(i),l=e("./decode"),c=o(l),f=e("./encode"),d=(o(f),e("./escape")),h=o(d),p=e("./ParseError"),y=o(p),v=e("./ParsePromise"),m=o(v),b=e("./Storage"),_=o(b),g=function(){function e(){s(this,e),this.attributes={},this._escapedAttributes={}}return a(e,[{key:"get",value:function(e){return this.attributes[e]}},{key:"escape",value:function(e){var t=this._escapedAttributes[e];if(t)return t;var r=this.attributes[e],n="";return null!=r&&(n=(0,h["default"])(r.toString())),this._escapedAttributes[e]=n,n}}],[{key:"current",value:function(){var e=u["default"].getConfigController();return e.current()}},{key:"get",value:function(e){e=e||{};var t=u["default"].getConfigController();return t.get()._thenRunCallbacks(e)}}]),e}();r["default"]=g;var w=null,O="currentConfig";u["default"].setConfigController({current:function(){if(w)return w;var e,t=new g,r=_["default"].generatePath(O);if(!_["default"].async()){if(e=_["default"].getItem(r)){var a=n(e);a&&(t.attributes=a,w=t)}return t}return _["default"].getItemAsync(r).then(function(e){if(e){var r=n(e);r&&(t.attributes=r,w=t)}return t})},get:function(){var e=u["default"].getRESTController();return e.request("GET","config",{},{}).then(function(e){if(!e||!e.params){var t=new y["default"](y["default"].INVALID_JSON,"Config JSON response invalid.");return m["default"].error(t)}var r=new g;r.attributes={};for(var n in e.params)r.attributes[n]=(0,c["default"])(e.params[n]);return w=r,_["default"].setItemAsync(_["default"].generatePath(O),JSON.stringify(e.params)).then(function(){return r})})}}),t.exports=r["default"]},{"./CoreManager":3,"./ParseError":10,"./ParsePromise":16,"./Storage":24,"./decode":29,"./encode":30,"./escape":32,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47}],10:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var a=function s(e,t){n(this,s),this.code=e,this.message=t};r["default"]=a,a.OTHER_CAUSE=-1,a.INTERNAL_SERVER_ERROR=1,a.CONNECTION_FAILED=100,a.OBJECT_NOT_FOUND=101,a.INVALID_QUERY=102,a.INVALID_CLASS_NAME=103,a.MISSING_OBJECT_ID=104,a.INVALID_KEY_NAME=105,a.INVALID_POINTER=106,a.INVALID_JSON=107,a.COMMAND_UNAVAILABLE=108,a.NOT_INITIALIZED=109,a.INCORRECT_TYPE=111,a.INVALID_CHANNEL_NAME=112,a.PUSH_MISCONFIGURED=115,a.OBJECT_TOO_LARGE=116,a.OPERATION_FORBIDDEN=119,a.CACHE_MISS=120,a.INVALID_NESTED_KEY=121,a.INVALID_FILE_NAME=122,a.INVALID_ACL=123,a.TIMEOUT=124,a.INVALID_EMAIL_ADDRESS=125,a.MISSING_CONTENT_TYPE=126,a.MISSING_CONTENT_LENGTH=127,a.INVALID_CONTENT_LENGTH=128,a.FILE_TOO_LARGE=129,a.FILE_SAVE_ERROR=130,a.DUPLICATE_VALUE=137,a.INVALID_ROLE_NAME=139,a.EXCEEDED_QUOTA=140,a.SCRIPT_FAILED=141,a.VALIDATION_ERROR=142,a.INVALID_IMAGE_DATA=143,a.UNSAVED_FILE_ERROR=151,a.INVALID_PUSH_TIME_ERROR=152,a.FILE_DELETE_ERROR=153,a.REQUEST_LIMIT_EXCEEDED=155,a.INVALID_EVENT_NAME=160,a.USERNAME_MISSING=200,a.PASSWORD_MISSING=201,a.USERNAME_TAKEN=202,a.EMAIL_TAKEN=203,a.EMAIL_MISSING=204,a.EMAIL_NOT_FOUND=205,a.SESSION_MISSING=206,a.MUST_CREATE_USER_THROUGH_SIGNUP=207,a.ACCOUNT_ALREADY_LINKED=208,a.INVALID_SESSION_TOKEN=209,a.LINKED_ID_MISSING=250,a.INVALID_LINKED_SESSION=251,a.UNSUPPORTED_SERVICE=252,a.AGGREGATE_ERROR=600,a.FILE_READ_ERROR=601,a.X_DOMAIN_REQUEST=602,t.exports=r["default"]},{"babel-runtime/helpers/class-call-check":43}],11:[function(e,t,r){"use strict";function n(e){if(26>e)return String.fromCharCode(65+e);if(52>e)return String.fromCharCode(97+(e-26));if(62>e)return String.fromCharCode(48+(e-52));if(62===e)return"+";if(63===e)return"/";throw new TypeError("Tried to encode large digit "+e+" in base64.")}var a=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],o=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=e("./CoreManager"),u=o(i),l=e("./ParsePromise"),c=(o(l),function(){function e(t,r,n){s(this,e);var a=n||"";if(this._name=t,Array.isArray(r))this._source={format:"base64",base64:e.encodeBase64(r),type:a};else if("undefined"!=typeof File&&r instanceof File)this._source={format:"file",file:r,type:a};else if(r&&r.hasOwnProperty("base64")){var o=/^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/.exec(r.base64);o&&o.length>0?this._source={format:"base64",base64:4===o.length?o[3]:o[2],type:o[1]}:this._source={format:"base64",base64:r.base64,type:a}}else if("undefined"!=typeof r)throw new TypeError("Cannot create a Parse.File with that data.")}return a(e,[{key:"name",value:function(){return this._name}},{key:"url",value:function(){return this._url}},{key:"save",value:function(e){var t=this;e=e||{};var r=u["default"].getFileController();return this._previousSave||("file"===this._source.format?this._previousSave=r.saveFile(this._name,this._source).then(function(e){return t._name=e.name,t._url=e.url,t}):this._previousSave=r.saveBase64(this._name,this._source).then(function(e){return t._name=e.name,t._url=e.url,t})),this._previousSave?this._previousSave._thenRunCallbacks(e):void 0}},{key:"toJSON",value:function(){return{__type:"File",name:this._name,url:this._url}}},{key:"equals",value:function(t){return this===t?!0:t instanceof e&&this.name()===t.name()&&this.url()===t.url()&&"undefined"!=typeof this.url()}}],[{key:"fromJSON",value:function(t){if("File"!==t.__type)throw new TypeError("JSON object does not represent a ParseFile");var r=new e(t.name);return r._url=t.url,r}},{key:"encodeBase64",value:function(e){var t=[];t.length=Math.ceil(e.length/3);for(var r=0;r<t.length;r++){var a=e[3*r],s=e[3*r+1]||0,o=e[3*r+2]||0,i=3*r+1<e.length,u=3*r+2<e.length;t[r]=[n(a>>2&63),n(a<<4&48|s>>4&15),i?n(s<<2&60|o>>6&3):"=",u?n(63&o):"="].join("")}return t.join("")}}]),e}());r["default"]=c,u["default"].setFileController({saveFile:function(e,t){if("file"!==t.format)throw new Error("saveFile can only be used with File-type sources.");var r={"X-Parse-Application-ID":u["default"].get("APPLICATION_ID"),"X-Parse-JavaScript-Key":u["default"].get("JAVASCRIPT_KEY")},n=u["default"].get("SERVER_URL");return"/"!==n[n.length-1]&&(n+="/"),n+="files/"+e,u["default"].getRESTController().ajax("POST",n,t.file,r)},saveBase64:function(e,t){if("base64"!==t.format)throw new Error("saveBase64 can only be used with Base64-type sources.");var r={base64:t.base64};return t.type&&(r._ContentType=t.type),u["default"].getRESTController().request("POST","files/"+e,r)}}),t.exports=r["default"]},{"./CoreManager":3,"./ParsePromise":16,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47}],12:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=e("./ParsePromise"),i=s(o),u=function(){function e(t,r){a(this,e),Array.isArray(t)?(e._validate(t[0],t[1]),this._latitude=t[0],this._longitude=t[1]):"object"==typeof t?(e._validate(t.latitude,t.longitude),this._latitude=t.latitude,this._longitude=t.longitude):"number"==typeof t&&"number"==typeof r?(e._validate(t,r),this._latitude=t,this._longitude=r):(this._latitude=0,this._longitude=0)}return n(e,[{key:"toJSON",value:function(){return e._validate(this._latitude,this._longitude),{__type:"GeoPoint",latitude:this._latitude,longitude:this._longitude}}},{key:"equals",value:function(t){return t instanceof e&&this.latitude===t.latitude&&this.longitude===t.longitude}},{key:"radiansTo",value:function(e){var t=Math.PI/180,r=this.latitude*t,n=this.longitude*t,a=e.latitude*t,s=e.longitude*t,o=Math.sin((r-a)/2),i=Math.sin((n-s)/2),u=o*o+Math.cos(r)*Math.cos(a)*i*i;return u=Math.min(1,u),2*Math.asin(Math.sqrt(u))}},{key:"kilometersTo",value:function(e){return 6371*this.radiansTo(e)}},{key:"milesTo",value:function(e){return 3958.8*this.radiansTo(e)}},{key:"latitude",get:function(){return this._latitude},set:function(t){e._validate(t,this.longitude),this._latitude=t}},{key:"longitude",get:function(){return this._longitude},set:function(t){e._validate(this.latitude,t),this._longitude=t}}],[{key:"_validate",value:function(e,t){if(e!==e||t!==t)throw new TypeError("GeoPoint latitude and longitude must be valid numbers");if(-90>e)throw new TypeError("GeoPoint latitude out of bounds: "+e+" < -90.0.");if(e>90)throw new TypeError("GeoPoint latitude out of bounds: "+e+" > 90.0.");if(-180>t)throw new TypeError("GeoPoint longitude out of bounds: "+t+" < -180.0.");if(t>180)throw new TypeError("GeoPoint longitude out of bounds: "+t+" > 180.0.")}},{key:"current",value:function(t){var r=new i["default"];return navigator.geolocation.getCurrentPosition(function(t){r.resolve(new e(t.coords.latitude,t.coords.longitude))},function(e){r.reject(e)}),r._thenRunCallbacks(t)}}]),e}();r["default"]=u,t.exports=r["default"]},{"./ParsePromise":16,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47}],13:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],a=e("babel-runtime/helpers/inherits")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],o=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=e("./ParseObject"),u=o(i),l=function(e){function t(e){if(s(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,"_Installation"),e&&"object"==typeof e&&!this.set(e||{}))throw new Error("Can't create an invalid Session")}return a(t,e),t}(u["default"]);r["default"]=l,u["default"].registerSubclass("_Installation",l),t.exports=r["default"]},{"./ParseObject":14,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/get":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/interop-require-default":47}],14:[function(e,t,r){"use strict";function n(){var e=h["default"].get("SERVER_URL");"/"!==e[e.length-1]&&(e+="/");var t=e.replace(/https?:\/\//,"");return t.substr(t.indexOf("/"))}var a=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],o=e("babel-runtime/core-js/object/keys")["default"],i=e("babel-runtime/core-js/object/freeze")["default"],u=e("babel-runtime/core-js/object/create")["default"],l=e("babel-runtime/core-js/object/define-property")["default"],c=e("babel-runtime/helpers/interop-require-default")["default"],f=e("babel-runtime/helpers/interop-require-wildcard")["default"];Object.defineProperty(r,"__esModule",{value:!0});var d=e("./CoreManager"),h=c(d),p=e("./canBeSerialized"),y=c(p),v=e("./decode"),m=c(v),b=e("./encode"),_=c(b),g=e("./equals"),w=(c(g),e("./escape")),O=c(w),C=e("./ObjectState"),P=f(C),k=e("./ParseACL"),A=c(k),E=e("./parseDate"),S=c(E),j=e("./ParseError"),I=c(j),T=e("./ParseFile"),N=c(T),R=e("./ParseOp"),M=e("./ParsePromise"),x=c(M),D=e("./ParseQuery"),U=c(D),q=e("./ParseRelation"),L=c(q),F=e("./unique"),K=c(F),$=e("./unsavedChildren"),J=c($),W={},B=0,G=0,V=!h["default"].get("IS_NODE"),z=function(){
function e(t,r,n){s(this,e),"function"==typeof this.initialize&&this.initialize.apply(this,arguments);var a=null;if(this._objCount=G++,"string"==typeof t)this.className=t,r&&"object"==typeof r&&(a=r);else if(t&&"object"==typeof t){this.className=t.className,a={};for(var o in t)"className"!==o&&(a[o]=t[o]);r&&"object"==typeof r&&(n=r)}if(a&&!this.set(a,n))throw new Error("Can't create an invalid Parse Object")}return a(e,[{key:"_getId",value:function(){if("string"==typeof this.id)return this.id;if("string"==typeof this._localId)return this._localId;var e="local"+String(B++);return this._localId=e,e}},{key:"_getStateIdentifier",value:function(){return"string"==typeof this.id?V?this.id:this.id+"_"+String(this._objCount):this._getId()}},{key:"_getServerData",value:function(){return P.getServerData(this.className,this._getStateIdentifier())}},{key:"_clearServerData",value:function(){var e=this._getServerData(),t={};for(var r in e)t[r]=void 0;P.setServerData(this.className,this._getStateIdentifier(),t)}},{key:"_getPendingOps",value:function(){return P.getPendingOps(this.className,this._getStateIdentifier())}},{key:"_clearPendingOps",value:function(){var e=this._getPendingOps(),t=e[e.length-1],r=o(t);r.forEach(function(e){delete t[e]})}},{key:"_getDirtyObjectAttributes",value:function(){var t=this.attributes,r=P.getObjectCache(this.className,this._getStateIdentifier()),n={};for(var a in t){var s=t[a];if(s&&"object"==typeof s&&!(s instanceof e)&&!(s instanceof N["default"])&&!(s instanceof L["default"]))try{var o=(0,_["default"])(s,!1,!0),i=JSON.stringify(o);r[a]!==i&&(n[a]=s)}catch(u){n[a]=s}}return n}},{key:"_toFullJSON",value:function(e){var t=this.toJSON(e);return t.__type="Object",t.className=this.className,t}},{key:"_getSaveJSON",value:function(){var e,t=this._getPendingOps(),r=this._getDirtyObjectAttributes(),n={};for(e in r)n[e]=new R.SetOp(r[e]).toJSON();for(e in t[0])n[e]=t[0][e].toJSON();return n}},{key:"_getSaveParams",value:function(){var e=this.id?"PUT":"POST",t=this._getSaveJSON(),r="classes/"+this.className;return this.id?r+="/"+this.id:"_User"===this.className&&(r="users"),{method:e,body:t,path:r}}},{key:"_finishFetch",value:function(e){!this.id&&e.objectId&&(this.id=e.objectId),P.initializeState(this.className,this._getStateIdentifier());var t={};for(var r in e)"ACL"===r?t[r]=new A["default"](e[r]):"objectId"!==r&&(t[r]=(0,m["default"])(e[r]),t[r]instanceof L["default"]&&t[r]._ensureParentAndKey(this,r));t.createdAt&&"string"==typeof t.createdAt&&(t.createdAt=(0,S["default"])(t.createdAt)),t.updatedAt&&"string"==typeof t.updatedAt&&(t.updatedAt=(0,S["default"])(t.updatedAt)),!t.updatedAt&&t.createdAt&&(t.updatedAt=t.createdAt),P.commitServerChanges(this.className,this._getStateIdentifier(),t)}},{key:"_setExisted",value:function(e){var t=P.getState(this.className,this._getStateIdentifier());t&&(t.existed=e)}},{key:"_migrateId",value:function(e){if(this._localId&&e){var t=P.removeState(this.className,this._getStateIdentifier());this.id=e,delete this._localId,t&&P.initializeState(this.className,this._getStateIdentifier(),t)}}},{key:"_handleSaveResponse",value:function(e,t){var r,n={},a=P.popPendingState(this.className,this._getStateIdentifier());for(r in a)a[r]instanceof R.RelationOp?n[r]=a[r].applyTo(void 0,this,r):r in e||(n[r]=a[r].applyTo(void 0));for(r in e)"createdAt"!==r&&"updatedAt"!==r||"string"!=typeof e[r]?"ACL"===r?n[r]=new A["default"](e[r]):"objectId"!==r&&(n[r]=(0,m["default"])(e[r])):n[r]=(0,S["default"])(e[r]);n.createdAt&&!n.updatedAt&&(n.updatedAt=n.createdAt),this._migrateId(e.objectId),201!==t&&this._setExisted(!0),P.commitServerChanges(this.className,this._getStateIdentifier(),n)}},{key:"_handleSaveError",value:function(){this._getPendingOps();P.mergeFirstPendingState(this.className,this._getStateIdentifier())}},{key:"initialize",value:function(){}},{key:"toJSON",value:function(e){var t=this.id?this.className+":"+this.id:this,e=e||[t],r={},n=this.attributes;for(var a in n)"createdAt"!==a&&"updatedAt"!==a||!n[a].toJSON?r[a]=(0,_["default"])(n[a],!1,!1,e):r[a]=n[a].toJSON();var s=this._getPendingOps();for(var a in s[0])r[a]=s[0][a].toJSON();return this.id&&(r.objectId=this.id),r}},{key:"equals",value:function(t){return this===t?!0:t instanceof e&&this.className===t.className&&this.id===t.id&&"undefined"!=typeof this.id}},{key:"dirty",value:function(e){if(!this.id)return!0;var t=this._getPendingOps(),r=this._getDirtyObjectAttributes();if(e){if(r.hasOwnProperty(e))return!0;for(var n=0;n<t.length;n++)if(t[n].hasOwnProperty(e))return!0;return!1}return 0!==o(t[0]).length?!0:0!==o(r).length?!0:!1}},{key:"dirtyKeys",value:function(){for(var e=this._getPendingOps(),t={},r=0;r<e.length;r++)for(var n in e[r])t[n]=!0;var a=this._getDirtyObjectAttributes();for(var n in a)t[n]=!0;return o(t)}},{key:"toPointer",value:function(){if(!this.id)throw new Error("Cannot create a pointer to an unsaved ParseObject");return{__type:"Pointer",className:this.className,objectId:this.id}}},{key:"get",value:function(e){return this.attributes[e]}},{key:"relation",value:function(e){var t=this.get(e);if(t){if(!(t instanceof L["default"]))throw new Error("Called relation() on non-relation field "+e);return t._ensureParentAndKey(this,e),t}return new L["default"](this,e)}},{key:"escape",value:function(e){var t=this.attributes[e];if(null==t)return"";if("string"!=typeof t){if("function"!=typeof t.toString)return"";t=t.toString()}return(0,O["default"])(t)}},{key:"has",value:function(e){var t=this.attributes;return t.hasOwnProperty(e)?null!=t[e]:!1}},{key:"set",value:function(e,t,r){var n={},a={};if(e&&"object"==typeof e)n=e,r=t;else{if("string"!=typeof e)return this;n[e]=t}r=r||{};var s=[];"function"==typeof this.constructor.readOnlyAttributes&&(s=s.concat(this.constructor.readOnlyAttributes()));for(var o in n)if("createdAt"!==o&&"updatedAt"!==o){if(s.indexOf(o)>-1)throw new Error("Cannot modify readonly attribute: "+o);r.unset?a[o]=new R.UnsetOp:n[o]instanceof R.Op?a[o]=n[o]:n[o]&&"object"==typeof n[o]&&"string"==typeof n[o].__op?a[o]=(0,R.opFromJSON)(n[o]):"objectId"===o||"id"===o?this.id=n[o]:"ACL"!==o||"object"!=typeof n[o]||n[o]instanceof A["default"]?a[o]=new R.SetOp(n[o]):a[o]=new R.SetOp(new A["default"](n[o]))}var i=this.attributes,u={};for(var l in a)a[l]instanceof R.RelationOp?u[l]=a[l].applyTo(i[l],this,l):a[l]instanceof R.UnsetOp||(u[l]=a[l].applyTo(i[l]));if(!r.ignoreValidation){var c=this.validate(u);if(c)return"function"==typeof r.error&&r.error(this,c),!1}var f=this._getPendingOps(),d=f.length-1;for(var l in a){var h=a[l].mergeWith(f[d][l]);P.setPendingOp(this.className,this._getStateIdentifier(),l,h)}return this}},{key:"unset",value:function(e,t){return t=t||{},t.unset=!0,this.set(e,null,t)}},{key:"increment",value:function(e,t){if("undefined"==typeof t&&(t=1),"number"!=typeof t)throw new Error("Cannot increment by a non-numeric amount.");return this.set(e,new R.IncrementOp(t))}},{key:"add",value:function(e,t){return this.set(e,new R.AddOp([t]))}},{key:"addUnique",value:function(e,t){return this.set(e,new R.AddUniqueOp([t]))}},{key:"remove",value:function(e,t){return this.set(e,new R.RemoveOp([t]))}},{key:"op",value:function(e){for(var t=this._getPendingOps(),r=t.length;r--;)if(t[r][e])return t[r][e]}},{key:"clone",value:function t(){var t=new this.constructor;return t.className||(t.className=this.className),t.set&&t.set(this.attributes),t}},{key:"isNew",value:function(){return!this.id}},{key:"existed",value:function(){if(!this.id)return!1;var e=P.getState(this.className,this._getStateIdentifier());return e?e.existed:!1}},{key:"isValid",value:function(){return!this.validate(this.attributes)}},{key:"validate",value:function(e){if(e.hasOwnProperty("ACL")&&!(e.ACL instanceof A["default"]))return new I["default"](I["default"].OTHER_CAUSE,"ACL must be a Parse ACL.");for(var t in e)if(!/^[A-Za-z][0-9A-Za-z_]*$/.test(t))return new I["default"](I["default"].INVALID_KEY_NAME);return!1}},{key:"getACL",value:function(){var e=this.get("ACL");return e instanceof A["default"]?e:null}},{key:"setACL",value:function(e,t){return this.set("ACL",e,t)}},{key:"clear",value:function(){var e=this.attributes,t={},r=["createdAt","updatedAt"];"function"==typeof this.constructor.readOnlyAttributes&&(r=r.concat(this.constructor.readOnlyAttributes()));for(var n in e)r.indexOf(n)<0&&(t[n]=!0);return this.set(t,{unset:!0})}},{key:"fetch",value:function(e){e=e||{};var t={};e.hasOwnProperty("useMasterKey")&&(t.useMasterKey=e.useMasterKey),e.hasOwnProperty("sessionToken")&&(t.sessionToken=e.sessionToken);var r=h["default"].getObjectController();return r.fetch(this,!0,t)._thenRunCallbacks(e)}},{key:"save",value:function(e,t,r){var n,a,s=this;if("object"==typeof e||"undefined"==typeof e?(n=e,a=t):(n={},n[e]=t,a=r),!a&&n&&(a={},"function"==typeof n.success&&(a.success=n.success,delete n.success),"function"==typeof n.error&&(a.error=n.error,delete n.error)),n){var o=this.validate(n);if(o)return a&&"function"==typeof a.error&&a.error(this,o),x["default"].error(o);this.set(n,a)}a=a||{};var i={};a.hasOwnProperty("useMasterKey")&&(i.useMasterKey=a.useMasterKey),a.hasOwnProperty("sessionToken")&&(i.sessionToken=a.sessionToken);var u=h["default"].getObjectController(),l=(0,J["default"])(this);return u.save(l,i).then(function(){return u.save(s,i)})._thenRunCallbacks(a,this)}},{key:"destroy",value:function(e){e=e||{};var t={};return e.hasOwnProperty("useMasterKey")&&(t.useMasterKey=e.useMasterKey),e.hasOwnProperty("sessionToken")&&(t.sessionToken=e.sessionToken),this.id?h["default"].getObjectController().destroy(this,t)._thenRunCallbacks(e):x["default"].as()._thenRunCallbacks(e)}},{key:"attributes",get:function(){return i(P.estimateAttributes(this.className,this._getStateIdentifier()))}},{key:"createdAt",get:function(){return this._getServerData().createdAt}},{key:"updatedAt",get:function(){return this._getServerData().updatedAt}}],[{key:"_clearAllState",value:function(){P._clearAllState()}},{key:"fetchAll",value:function(e,t){var t=t||{},r={};return t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey),t.hasOwnProperty("sessionToken")&&(r.sessionToken=t.sessionToken),h["default"].getObjectController().fetch(e,!0,r)._thenRunCallbacks(t)}},{key:"fetchAllIfNeeded",value:function(e,t){var t=t||{},r={};return t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey),t.hasOwnProperty("sessionToken")&&(r.sessionToken=t.sessionToken),h["default"].getObjectController().fetch(e,!1,r)._thenRunCallbacks(t)}},{key:"destroyAll",value:function(e,t){var t=t||{},r={};return t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey),t.hasOwnProperty("sessionToken")&&(r.sessionToken=t.sessionToken),h["default"].getObjectController().destroy(e,r)._thenRunCallbacks(t)}},{key:"saveAll",value:function(e,t){var t=t||{},r={};return t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey),t.hasOwnProperty("sessionToken")&&(r.sessionToken=t.sessionToken),h["default"].getObjectController().save(e,r)._thenRunCallbacks(t)}},{key:"createWithoutData",value:function(e){var t=new this;return t.id=e,t}},{key:"fromJSON",value:function(t){if(!t.className)throw new Error("Cannot create an object without a className");var r=W[t.className],n=r?new r:new e(t.className),a={};for(var s in t)"className"!==s&&"__type"!==s&&(a[s]=t[s]);return n._finishFetch(a),t.objectId&&n._setExisted(!0),n}},{key:"registerSubclass",value:function(e,t){if("string"!=typeof e)throw new TypeError("The first argument must be a valid class name.");if("undefined"==typeof t)throw new TypeError("You must supply a subclass constructor.");if("function"!=typeof t)throw new TypeError("You must register the subclass constructor. Did you attempt to register an instance of the subclass?");W[e]=t,t.className||(t.className=e)}},{key:"extend",value:function(t,r,n){if("string"!=typeof t){if(t&&"string"==typeof t.className)return e.extend(t.className,t,r);throw new Error("Parse.Object.extend's first argument should be the className.")}var a=t;"User"===a&&h["default"].get("PERFORM_USER_REWRITE")&&(a="_User");var s=e.prototype;this.hasOwnProperty("__super__")&&this.__super__?s=this.prototype:W[a]&&(s=W[a].prototype);var o=function(e,t){if("function"==typeof this.initialize&&this.initialize.apply(this,arguments),this.className=a,this._objCount=G++,e&&"object"==typeof e&&!this.set(e||{},t))throw new Error("Can't create an invalid Parse Object")};if(o.className=a,o.__super__=s,o.prototype=u(s,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r)for(var i in r)"className"!==i&&l(o.prototype,i,{value:r[i],enumerable:!1,writable:!0,configurable:!0});if(n)for(var i in n)"className"!==i&&l(o,i,{value:n[i],enumerable:!1,writable:!0,configurable:!0});return o.extend=function(t,r,n){return"string"==typeof t?e.extend.call(o,t,r,n):e.extend.call(o,a,t,r)},o.createWithoutData=e.createWithoutData,W[a]=o,o}},{key:"enableSingleInstance",value:function(){V=!0}},{key:"disableSingleInstance",value:function(){V=!1}}]),e}();r["default"]=z,h["default"].setObjectController({fetch:function(e,t,r){if(Array.isArray(e)){if(e.length<1)return x["default"].as([]);var n=[],a=[],s=null,i=[],u=null;if(e.forEach(function(e,r){u||(s||(s=e.className),s!==e.className&&(u=new I["default"](I["default"].INVALID_CLASS_NAME,"All objects should be of the same class")),e.id||(u=new I["default"](I["default"].MISSING_OBJECT_ID,"All objects must have an ID")),(t||0===o(e._getServerData()).length)&&(a.push(e.id),n.push(e)),i.push(e))}),u)return x["default"].error(u);var l=new U["default"](s);return l.containedIn("objectId",a),l._limit=a.length,l.find(r).then(function(e){var r={};e.forEach(function(e){r[e.id]=e});for(var a=0;a<n.length;a++){var s=n[a];if((!s||!s.id||!r[s.id])&&t)return x["default"].error(new I["default"](I["default"].OBJECT_NOT_FOUND,"All objects must exist on the server."))}if(!V)for(var a=0;a<i.length;a++){var s=i[a];if(s&&s.id&&r[s.id]){var o=s.id;s._finishFetch(r[o].toJSON()),i[a]=r[o]}}return x["default"].as(i)})}var c=h["default"].getRESTController();return c.request("GET","classes/"+e.className+"/"+e._getId(),{},r).then(function(t,r,n){return e instanceof z&&(e._clearPendingOps(),e._finishFetch(t)),e})},destroy:function(e,t){var r=h["default"].getRESTController();if(Array.isArray(e)){if(e.length<1)return x["default"].as([]);var a=[[]];e.forEach(function(e){e.id&&(a[a.length-1].push(e),a[a.length-1].length>=20&&a.push([]))}),0===a[a.length-1].length&&a.pop();var s=x["default"].as(),o=[];return a.forEach(function(e){s=s.then(function(){return r.request("POST","batch",{requests:e.map(function(e){return{method:"DELETE",path:n()+"classes/"+e.className+"/"+e._getId(),body:{}}})},t).then(function(t){for(var r=0;r<t.length;r++)if(t[r]&&t[r].hasOwnProperty("error")){var n=new I["default"](t[r].error.code,t[r].error.error);n.object=e[r],o.push(n)}})})}),s.then(function(){if(o.length){var t=new I["default"](I["default"].AGGREGATE_ERROR);return t.errors=o,x["default"].error(t)}return x["default"].as(e)})}return e instanceof z?r.request("DELETE","classes/"+e.className+"/"+e._getId(),{},t).then(function(){return x["default"].as(e)}):x["default"].as(e)},save:function(e,t){var r=h["default"].getRESTController();if(Array.isArray(e)){if(e.length<1)return x["default"].as([]);for(var a=e.concat(),s=0;s<e.length;s++)e[s]instanceof z&&(a=a.concat((0,J["default"])(e[s],!0)));a=(0,K["default"])(a);var o=x["default"].as(),i=[];return a.forEach(function(e){e instanceof N["default"]?o=o.then(function(){return e.save()}):e instanceof z&&i.push(e)}),o.then(function(){var a=null;return x["default"]._continueWhile(function(){return i.length>0},function(){var e=[],s=[];if(i.forEach(function(t){e.length<20&&(0,y["default"])(t)?e.push(t):s.push(t)}),i=s,e.length<1)return x["default"].error(new I["default"](I["default"].OTHER_CAUSE,"Tried to save a batch with a cycle."));var o=new x["default"],u=[],l=[];return e.forEach(function(e,t){var r=new x["default"];u.push(r);var n=function(){return r.resolve(),o.then(function(r,n){if(r[t].hasOwnProperty("success"))e._handleSaveResponse(r[t].success,n);else{if(!a&&r[t].hasOwnProperty("error")){var s=r[t].error;a=new I["default"](s.code,s.error),i=[]}e._handleSaveError()}})};P.pushPendingState(e.className,e._getStateIdentifier()),l.push(P.enqueueTask(e.className,e._getStateIdentifier(),n))}),x["default"].when(u).then(function(){return r.request("POST","batch",{requests:e.map(function(e){var t=e._getSaveParams();return t.path=n()+t.path,t})},t)}).then(function(e,t,r){o.resolve(e,t)}),x["default"].when(l)}).then(function(){return a?x["default"].error(a):x["default"].as(e)})})}if(e instanceof z){var u=e,l=function(){var e=u._getSaveParams();return r.request(e.method,e.path,e.body,t).then(function(e,t){u._handleSaveResponse(e,t)},function(e){return u._handleSaveError(),x["default"].error(e)})};return P.pushPendingState(e.className,e._getStateIdentifier()),P.enqueueTask(e.className,e._getStateIdentifier(),l).then(function(){return e},function(e){return e})}return x["default"].as()}}),t.exports=r["default"]},{"./CoreManager":3,"./ObjectState":6,"./ParseACL":8,"./ParseError":10,"./ParseFile":11,"./ParseOp":15,"./ParsePromise":16,"./ParseQuery":17,"./ParseRelation":18,"./canBeSerialized":28,"./decode":29,"./encode":30,"./equals":31,"./escape":32,"./parseDate":34,"./unique":35,"./unsavedChildren":36,"babel-runtime/core-js/object/create":37,"babel-runtime/core-js/object/define-property":38,"babel-runtime/core-js/object/freeze":39,"babel-runtime/core-js/object/keys":41,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47,"babel-runtime/helpers/interop-require-wildcard":48}],15:[function(e,t,r){"use strict";function n(e){if(!e||!e.__op)return null;switch(e.__op){case"Delete":return new C;case"Increment":return new P(e.amount);case"Add":return new k((0,d["default"])(e.objects));case"AddUnique":return new A((0,d["default"])(e.objects));case"Remove":return new E((0,d["default"])(e.objects));case"AddRelation":var t=(0,d["default"])(e.objects);return Array.isArray(t)?new S(t,[]):new S([],[]);case"RemoveRelation":var r=(0,d["default"])(e.objects);return Array.isArray(r)?new S([],r):new S([],[]);case"Batch":for(var t=[],r=[],n=0;n<e.ops.length;n++)"AddRelation"===e.ops[n].__op?t=t.concat((0,d["default"])(e.ops[n].objects)):"RemoveRelation"===e.ops[n].__op&&(r=r.concat((0,d["default"])(e.ops[n].objects)));return new S(t,r)}return null}var a=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],o=e("babel-runtime/helpers/get")["default"],i=e("babel-runtime/helpers/inherits")["default"],u=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r.opFromJSON=n;var l=e("./arrayContainsObject"),c=u(l),f=e("./decode"),d=u(f),h=e("./encode"),p=u(h),y=e("./ParseObject"),v=u(y),m=e("./ParseRelation"),b=u(m),_=e("./unique"),g=u(_),w=function(){function e(){s(this,e)}return a(e,[{key:"applyTo",value:function(e){}},{key:"mergeWith",value:function(e){}},{key:"toJSON",value:function(){}}]),e}();r.Op=w;var O=function(e){function t(e){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this._value=e}return i(t,e),a(t,[{key:"applyTo",value:function(e){return this._value}},{key:"mergeWith",value:function(e){return new t(this._value)}},{key:"toJSON",value:function(){return(0,p["default"])(this._value,!1,!0)}}]),t}(w);r.SetOp=O;var C=function(e){function t(){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return i(t,e),a(t,[{key:"applyTo",value:function(e){}},{key:"mergeWith",value:function(e){return new t}},{key:"toJSON",value:function(){return{__op:"Delete"}}}]),t}(w);r.UnsetOp=C;var P=function(e){function t(e){if(s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),"number"!=typeof e)throw new TypeError("Increment Op must be initialized with a numeric amount.");this._amount=e}return i(t,e),a(t,[{key:"applyTo",value:function(e){if("undefined"==typeof e)return this._amount;if("number"!=typeof e)throw new TypeError("Cannot increment a non-numeric value.");return this._amount+e}},{key:"mergeWith",value:function(e){if(!e)return this;if(e instanceof O)return new O(this.applyTo(e._value));if(e instanceof C)return new O(this._amount);if(e instanceof t)return new t(this.applyTo(e._amount));throw new Error("Cannot merge Increment Op with the previous Op")}},{key:"toJSON",value:function(){return{__op:"Increment",amount:this._amount}}}]),t}(w);r.IncrementOp=P;var k=function(e){function t(e){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this._value=Array.isArray(e)?e:[e]}return i(t,e),a(t,[{key:"applyTo",value:function(e){if(null==e)return this._value;if(Array.isArray(e))return e.concat(this._value);throw new Error("Cannot add elements to a non-array value")}},{key:"mergeWith",value:function(e){if(!e)return this;if(e instanceof O)return new O(this.applyTo(e._value));if(e instanceof C)return new O(this._value);if(e instanceof t)return new t(this.applyTo(e._value));throw new Error("Cannot merge Add Op with the previous Op")}},{key:"toJSON",value:function(){return{__op:"Add",objects:(0,p["default"])(this._value,!1,!0)}}}]),t}(w);r.AddOp=k;var A=function(e){function t(e){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this._value=(0,g["default"])(Array.isArray(e)?e:[e])}return i(t,e),a(t,[{key:"applyTo",value:function(e){if(null==e)return this._value||[];if(Array.isArray(e)){var t=e,r=[];return this._value.forEach(function(e){e instanceof v["default"]?(0,c["default"])(t,e)||r.push(e):t.indexOf(e)<0&&r.push(e)}),e.concat(r)}throw new Error("Cannot add elements to a non-array value")}},{key:"mergeWith",value:function(e){if(!e)return this;if(e instanceof O)return new O(this.applyTo(e._value));if(e instanceof C)return new O(this._value);if(e instanceof t)return new t(this.applyTo(e._value));throw new Error("Cannot merge AddUnique Op with the previous Op")}},{key:"toJSON",value:function(){return{__op:"AddUnique",objects:(0,p["default"])(this._value,!1,!0)}}}]),t}(w);r.AddUniqueOp=A;var E=function(e){function t(e){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this._value=(0,g["default"])(Array.isArray(e)?e:[e])}return i(t,e),a(t,[{key:"applyTo",value:function(e){if(null==e)return[];if(Array.isArray(e)){for(var t=e.indexOf(this._value),r=e.concat([]),t=0;t<this._value.length;t++){for(var n=r.indexOf(this._value[t]);n>-1;)r.splice(n,1),n=r.indexOf(this._value[t]);if(this._value[t]instanceof v["default"]&&this._value[t].id)for(var a=0;a<r.length;a++)r[a]instanceof v["default"]&&this._value[t].id===r[a].id&&(r.splice(a,1),a--)}return r}throw new Error("Cannot remove elements from a non-array value")}},{key:"mergeWith",value:function(e){if(!e)return this;if(e instanceof O)return new O(this.applyTo(e._value));if(e instanceof C)return new C;if(e instanceof t){for(var r=e._value.concat([]),n=0;n<this._value.length;n++)this._value[n]instanceof v["default"]?(0,c["default"])(r,this._value[n])||r.push(this._value[n]):r.indexOf(this._value[n])<0&&r.push(this._value[n]);return new t(r)}throw new Error("Cannot merge Remove Op with the previous Op")}},{key:"toJSON",value:function(){return{__op:"Remove",objects:(0,p["default"])(this._value,!1,!0)}}}]),t}(w);r.RemoveOp=E;var S=function(e){function t(e,r){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this._targetClassName=null,Array.isArray(e)&&(this.relationsToAdd=(0,g["default"])(e.map(this._extractId,this))),Array.isArray(r)&&(this.relationsToRemove=(0,g["default"])(r.map(this._extractId,this)))}return i(t,e),a(t,[{key:"_extractId",value:function(e){if("string"==typeof e)return e;if(!e.id)throw new Error("You cannot add or remove an unsaved Parse Object from a relation");if(this._targetClassName||(this._targetClassName=e.className),this._targetClassName!==e.className)throw new Error("Tried to create a Relation with 2 different object types: "+this._targetClassName+" and "+e.className+".");return e.id}},{key:"applyTo",value:function(e,t,r){if(!e){var n=new v["default"](t.className);t.id&&0===t.id.indexOf("local")?n._localId=t.id:t.id&&(n.id=t.id);var a=new b["default"](n,r);return a.targetClassName=this._targetClassName,a}if(e instanceof b["default"]){if(this._targetClassName)if(e.targetClassName){if(this._targetClassName!==e.targetClassName)throw new Error("Related object must be a "+e.targetClassName+", but a "+this._targetClassName+" was passed in.")}else e.targetClassName=this._targetClassName;return e}throw new Error("Relation cannot be applied to a non-relation field")}},{key:"mergeWith",value:function(e){if(!e)return this;if(e instanceof C)throw new Error("You cannot modify a relation after deleting it.");if(e instanceof t){if(e._targetClassName&&e._targetClassName!==this._targetClassName)throw new Error("Related object must be of class "+e._targetClassName+", but "+(this._targetClassName||"null")+" was passed in.");var r=e.relationsToAdd.concat([]);this.relationsToRemove.forEach(function(e){var t=r.indexOf(e);t>-1&&r.splice(t,1)}),this.relationsToAdd.forEach(function(e){var t=r.indexOf(e);0>t&&r.push(e)});var n=e.relationsToRemove.concat([]);this.relationsToAdd.forEach(function(e){var t=n.indexOf(e);t>-1&&n.splice(t,1)}),this.relationsToRemove.forEach(function(e){var t=n.indexOf(e);0>t&&n.push(e)});var a=new t(r,n);return a._targetClassName=this._targetClassName,a}throw new Error("Cannot merge Relation Op with the previous Op")}},{key:"toJSON",value:function(){var e=this,t=function(t){return{__type:"Pointer",className:e._targetClassName,objectId:t}},r=null,n=null,a=null;return this.relationsToAdd.length>0&&(a=this.relationsToAdd.map(t),r={__op:"AddRelation",objects:a}),this.relationsToRemove.length>0&&(a=this.relationsToRemove.map(t),n={__op:"RemoveRelation",objects:a}),r&&n?{__op:"Batch",ops:[r,n]}:r||n||{}}}]),t}(w);r.RelationOp=S},{"./ParseObject":14,"./ParseRelation":18,"./arrayContainsObject":27,"./decode":29,"./encode":30,"./unique":35,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/get":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/interop-require-default":47}],16:[function(e,t,r){(function(n){"use strict";var a=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=!1,i=function(){function e(){s(this,e),this._resolved=!1,this._rejected=!1,this._resolvedCallbacks=[],this._rejectedCallbacks=[]}return a(e,[{key:"resolve",value:function(){if(this._resolved||this._rejected)throw new Error("A promise was resolved even though it had already been "+(this._resolved?"resolved":"rejected")+".");this._resolved=!0;for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];this._result=t;for(var n=0;n<this._resolvedCallbacks.length;n++)this._resolvedCallbacks[n].apply(this,t);this._resolvedCallbacks=[],this._rejectedCallbacks=[]}},{key:"reject",value:function(e){if(this._resolved||this._rejected)throw new Error("A promise was resolved even though it had already been "+(this._resolved?"resolved":"rejected")+".");this._rejected=!0,this._error=e;for(var t=0;t<this._rejectedCallbacks.length;t++)this._rejectedCallbacks[t](e);this._resolvedCallbacks=[],this._rejectedCallbacks=[]}},{key:"then",value:function(t,r){var a=this,s=new e,i=function(){for(var r=arguments.length,n=Array(r),a=0;r>a;a++)n[a]=arguments[a];if("function"==typeof t)if(o)try{n=[t.apply(this,n)]}catch(i){n=[e.error(i)]}else n=[t.apply(this,n)];1===n.length&&e.is(n[0])?n[0].then(function(){s.resolve.apply(s,arguments)},function(e){s.reject(e)}):s.resolve.apply(s,n)},u=function(t){var n=[];if("function"==typeof r){if(o)try{n=[r(t)]}catch(a){n=[e.error(a)]}else n=[r(t)];1===n.length&&e.is(n[0])?n[0].then(function(){s.resolve.apply(s,arguments)},function(e){s.reject(e)}):o?s.resolve.apply(s,n):s.reject(n[0])}else s.reject(t)},l=function(e){e.call()};return o&&("undefined"!=typeof n&&"function"==typeof n.nextTick?l=function(e){n.nextTick(e)}:"function"==typeof setTimeout&&(l=function(e){setTimeout(e,0)})),this._resolved?l(function(){i.apply(a,a._result)}):this._rejected?l(function(){u(a._error)}):(this._resolvedCallbacks.push(i),this._rejectedCallbacks.push(u)),s}},{key:"always",value:function(e){return this.then(e,e)}},{key:"done",value:function(e){return this.then(e)}},{key:"fail",value:function(e){return this.then(null,e)}},{key:"_thenRunCallbacks",value:function(t,r){var n={};return"function"==typeof t?(n.success=function(e){t(e,null)},n.error=function(e){t(null,e)}):"object"==typeof t&&("function"==typeof t.success&&(n.success=t.success),"function"==typeof t.error&&(n.error=t.error)),this.then(function(){for(var t=arguments.length,r=Array(t),a=0;t>a;a++)r[a]=arguments[a];return n.success&&n.success.apply(this,r),e.as.apply(e,arguments)},function(t){return n.error&&("undefined"!=typeof r?n.error(r,t):n.error(t)),e.error(t)})}},{key:"_continueWith",value:function(e){return this.then(function(){return e(arguments,null)},function(t){return e(null,t)})}}],[{key:"is",value:function(e){return null!=e&&"function"==typeof e.then}},{key:"as",value:function(){for(var t=new e,r=arguments.length,n=Array(r),a=0;r>a;a++)n[a]=arguments[a];return t.resolve.apply(t,n),t}},{key:"error",value:function(){for(var t=new e,r=arguments.length,n=Array(r),a=0;r>a;a++)n[a]=arguments[a];return t.reject.apply(t,n),t}},{key:"when",value:function(t){var r;r=Array.isArray(t)?t:arguments;var n=r.length,a=!1,s=[],o=[];if(s.length=r.length,o.length=r.length,0===n)return e.as.apply(this,s);for(var i=new e,u=function(){n--,0>=n&&(a?i.reject(o):i.resolve.apply(i,s))},l=function(t,r){e.is(t)?t.then(function(e){s[r]=e,u()},function(e){o[r]=e,a=!0,u()}):(s[c]=t,u())},c=0;c<r.length;c++)l(r[c],c);return i}},{key:"_continueWhile",value:function(t,r){return t()?r().then(function(){return e._continueWhile(t,r)}):e.as()}},{key:"isPromisesAPlusCompliant",value:function(){return o}},{key:"enableAPlusCompliant",value:function(){o=!0}},{key:"disableAPlusCompliant",value:function(){o=!1}}]),e}();r["default"]=i,t.exports=r["default"]}).call(this,e("_process"))},{_process:75,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44}],17:[function(e,t,r){"use strict";function n(e){return"\\Q"+e.replace("\\E","\\E\\\\E\\Q")+"\\E"}var a=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],o=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=e("./CoreManager"),u=o(i),l=e("./encode"),c=o(l),f=e("./ParseError"),d=o(f),h=e("./ParseGeoPoint"),p=o(h),y=e("./ParseObject"),v=o(y),m=e("./ParsePromise"),b=o(m),_=function(){function e(t){if(s(this,e),"string"==typeof t)"User"===t&&u["default"].get("PERFORM_USER_REWRITE")?this.className="_User":this.className=t;else if(t instanceof v["default"])this.className=t.className;else{if("function"!=typeof t)throw new TypeError("A ParseQuery must be constructed with a ParseObject or class name.");if("string"==typeof t.className)this.className=t.className;else{var r=new t;this.className=r.className}}this._where={},this._include=[],this._limit=-1,this._skip=0,this._extraOptions={}}return a(e,[{key:"_orQuery",value:function(e){var t=e.map(function(e){return e.toJSON().where});return this._where.$or=t,this}},{key:"_addCondition",value:function(e,t,r){return this._where[e]&&"string"!=typeof this._where[e]||(this._where[e]={}),this._where[e][t]=(0,c["default"])(r,!1,!0),this}},{key:"toJSON",value:function(){var e={where:this._where};this._include.length&&(e.include=this._include.join(",")),this._select&&(e.keys=this._select.join(",")),this._limit>=0&&(e.limit=this._limit),this._skip>0&&(e.skip=this._skip),this._order&&(e.order=this._order.join(","));
for(var t in this._extraOptions)e[t]=this._extraOptions[t];return e}},{key:"get",value:function(e,t){this.equalTo("objectId",e);var r={};return t&&t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey),t&&t.hasOwnProperty("sessionToken")&&(r.sessionToken=t.sessionToken),this.first(r).then(function(e){if(e)return e;var t=new d["default"](d["default"].OBJECT_NOT_FOUND,"Object not found.");return b["default"].error(t)})._thenRunCallbacks(t,null)}},{key:"find",value:function(e){var t=this;e=e||{};var r={};e.hasOwnProperty("useMasterKey")&&(r.useMasterKey=e.useMasterKey),e.hasOwnProperty("sessionToken")&&(r.sessionToken=e.sessionToken);var n=u["default"].getQueryController();return n.find(this.className,this.toJSON(),r).then(function(e){return e.results.map(function(e){return e.className||(e.className=t.className),v["default"].fromJSON(e)})})._thenRunCallbacks(e)}},{key:"count",value:function(e){e=e||{};var t={};e.hasOwnProperty("useMasterKey")&&(t.useMasterKey=e.useMasterKey),e.hasOwnProperty("sessionToken")&&(t.sessionToken=e.sessionToken);var r=u["default"].getQueryController(),n=this.toJSON();return n.limit=0,n.count=1,r.find(this.className,n,t).then(function(e){return e.count})._thenRunCallbacks(e)}},{key:"first",value:function(e){var t=this;e=e||{};var r={};e.hasOwnProperty("useMasterKey")&&(r.useMasterKey=e.useMasterKey),e.hasOwnProperty("sessionToken")&&(r.sessionToken=e.sessionToken);var n=u["default"].getQueryController(),a=this.toJSON();return a.limit=1,n.find(this.className,a,r).then(function(e){var r=e.results;if(r[0])return r[0].className||(r[0].className=t.className),v["default"].fromJSON(r[0])})._thenRunCallbacks(e)}},{key:"each",value:function(t,r){if(r=r||{},this._order||this._skip||this._limit>=0)return b["default"].error("Cannot iterate on a query with sort, skip, or limit.")._thenRunCallbacks(r);var n=(new b["default"],new e(this.className));n._limit=r.batchSize||100,n._include=this._include.map(function(e){return e}),this._select&&(n._select=this._select.map(function(e){return e})),n._where={};for(var a in this._where){var s=this._where[a];if(Array.isArray(s))n._where[a]=s.map(function(e){return e});else if(s&&"object"==typeof s){var o={};n._where[a]=o;for(var i in s)o[i]=s[i]}else n._where[a]=s}n.ascending("objectId");var u={};r.hasOwnProperty("useMasterKey")&&(u.useMasterKey=r.useMasterKey),r.hasOwnProperty("sessionToken")&&(u.sessionToken=r.sessionToken);var l=!1;return b["default"]._continueWhile(function(){return!l},function(){return n.find(u).then(function(e){var r=b["default"].as();return e.forEach(function(e){r=r.then(function(){return t(e)})}),r.then(function(){e.length>=n._limit?n.greaterThan("objectId",e[e.length-1].id):l=!0})})})._thenRunCallbacks(r)}},{key:"equalTo",value:function(e,t){return"undefined"==typeof t?this.doesNotExist(e):(this._where[e]=(0,c["default"])(t,!1,!0),this)}},{key:"notEqualTo",value:function(e,t){return this._addCondition(e,"$ne",t)}},{key:"lessThan",value:function(e,t){return this._addCondition(e,"$lt",t)}},{key:"greaterThan",value:function(e,t){return this._addCondition(e,"$gt",t)}},{key:"lessThanOrEqualTo",value:function(e,t){return this._addCondition(e,"$lte",t)}},{key:"greaterThanOrEqualTo",value:function(e,t){return this._addCondition(e,"$gte",t)}},{key:"containedIn",value:function(e,t){return this._addCondition(e,"$in",t)}},{key:"notContainedIn",value:function(e,t){return this._addCondition(e,"$nin",t)}},{key:"containsAll",value:function(e,t){return this._addCondition(e,"$all",t)}},{key:"exists",value:function(e){return this._addCondition(e,"$exists",!0)}},{key:"doesNotExist",value:function(e){return this._addCondition(e,"$exists",!1)}},{key:"matches",value:function(e,t,r){return this._addCondition(e,"$regex",t),r||(r=""),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),r.length&&this._addCondition(e,"$options",r),this}},{key:"matchesQuery",value:function(e,t){var r=t.toJSON();return r.className=t.className,this._addCondition(e,"$inQuery",r)}},{key:"doesNotMatchQuery",value:function(e,t){var r=t.toJSON();return r.className=t.className,this._addCondition(e,"$notInQuery",r)}},{key:"matchesKeyInQuery",value:function(e,t,r){var n=r.toJSON();return n.className=r.className,this._addCondition(e,"$select",{key:t,query:n})}},{key:"doesNotMatchKeyInQuery",value:function(e,t,r){var n=r.toJSON();return n.className=r.className,this._addCondition(e,"$dontSelect",{key:t,query:n})}},{key:"contains",value:function(e,t){if("string"!=typeof t)throw new Error("The value being searched for must be a string.");return this._addCondition(e,"$regex",n(t))}},{key:"startsWith",value:function(e,t){if("string"!=typeof t)throw new Error("The value being searched for must be a string.");return this._addCondition(e,"$regex","^"+n(t))}},{key:"endsWith",value:function(e,t){if("string"!=typeof t)throw new Error("The value being searched for must be a string.");return this._addCondition(e,"$regex",n(t)+"$")}},{key:"near",value:function(e,t){return t instanceof p["default"]||(t=new p["default"](t)),this._addCondition(e,"$nearSphere",t)}},{key:"withinRadians",value:function(e,t,r){return this.near(e,t),this._addCondition(e,"$maxDistance",r)}},{key:"withinMiles",value:function(e,t,r){return this.withinRadians(e,t,r/3958.8)}},{key:"withinKilometers",value:function(e,t,r){return this.withinRadians(e,t,r/6371)}},{key:"withinGeoBox",value:function(e,t,r){return t instanceof p["default"]||(t=new p["default"](t)),r instanceof p["default"]||(r=new p["default"](r)),this._addCondition(e,"$within",{$box:[t,r]}),this}},{key:"ascending",value:function(){this._order=[];for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return this.addAscending.apply(this,t)}},{key:"addAscending",value:function(){var e=this;this._order||(this._order=[]);for(var t=arguments.length,r=Array(t),n=0;t>n;n++)r[n]=arguments[n];return r.forEach(function(t){Array.isArray(t)&&(t=t.join()),e._order=e._order.concat(t.replace(/\s/g,"").split(","))}),this}},{key:"descending",value:function(){this._order=[];for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return this.addDescending.apply(this,t)}},{key:"addDescending",value:function(){var e=this;this._order||(this._order=[]);for(var t=arguments.length,r=Array(t),n=0;t>n;n++)r[n]=arguments[n];return r.forEach(function(t){Array.isArray(t)&&(t=t.join()),e._order=e._order.concat(t.replace(/\s/g,"").split(",").map(function(e){return"-"+e}))}),this}},{key:"skip",value:function(e){if("number"!=typeof e||0>e)throw new Error("You can only skip by a positive number");return this._skip=e,this}},{key:"limit",value:function(e){if("number"!=typeof e)throw new Error("You can only set the limit to a numeric value");return this._limit=e,this}},{key:"include",value:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;t>n;n++)r[n]=arguments[n];return r.forEach(function(t){Array.isArray(t)?e._include=e._include.concat(t):e._include.push(t)}),this}},{key:"select",value:function(){var e=this;this._select||(this._select=[]);for(var t=arguments.length,r=Array(t),n=0;t>n;n++)r[n]=arguments[n];return r.forEach(function(t){Array.isArray(t)?e._select=e._select.concat(t):e._select.push(t)}),this}}],[{key:"or",value:function(){for(var t=null,r=arguments.length,n=Array(r),a=0;r>a;a++)n[a]=arguments[a];n.forEach(function(e){if(t||(t=e.className),t!==e.className)throw new Error("All queries must be for the same class.")});var s=new e(t);return s._orQuery(n),s}}]),e}();r["default"]=_,u["default"].setQueryController({find:function(e,t,r){var n=u["default"].getRESTController();return n.request("GET","classes/"+e,t,r)}}),t.exports=r["default"]},{"./CoreManager":3,"./ParseError":10,"./ParseGeoPoint":12,"./ParseObject":14,"./ParsePromise":16,"./encode":30,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47}],18:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=e("./ParseOp"),i=e("./ParseObject"),u=(s(i),e("./ParseQuery")),l=s(u),c=function(){function e(t,r){a(this,e),this.parent=t,this.key=r,this.targetClassName=null}return n(e,[{key:"_ensureParentAndKey",value:function(e,t){if(this.key=this.key||t,this.key!==t)throw new Error("Internal Error. Relation retrieved from two different keys.");if(this.parent){if(this.parent.className!==e.className)throw new Error("Internal Error. Relation retrieved from two different Objects.");if(this.parent.id){if(this.parent.id!==e.id)throw new Error("Internal Error. Relation retrieved from two different Objects.")}else e.id&&(this.parent=e)}else this.parent=e}},{key:"add",value:function(e){Array.isArray(e)||(e=[e]);var t=new o.RelationOp(e,[]);return this.parent.set(this.key,t),this.targetClassName=t._targetClassName,this.parent}},{key:"remove",value:function(e){Array.isArray(e)||(e=[e]);var t=new o.RelationOp([],e);this.parent.set(this.key,t),this.targetClassName=t._targetClassName}},{key:"toJSON",value:function(){return{__type:"Relation",className:this.targetClassName}}},{key:"query",value:function t(){var t;return this.targetClassName?t=new l["default"](this.targetClassName):(t=new l["default"](this.parent.className),t._extraOptions.redirectClassNameForKey=this.key),t._addCondition("$relatedTo","object",{__type:"Pointer",className:this.parent.className,objectId:this.parent.id}),t._addCondition("$relatedTo","key",this.key),t}}]),e}();r["default"]=c,t.exports=r["default"]},{"./ParseObject":14,"./ParseOp":15,"./ParseQuery":17,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47}],19:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],a=e("babel-runtime/helpers/inherits")["default"],s=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./ParseACL"),l=i(u),c=e("./ParseError"),f=i(c),d=e("./ParseObject"),h=i(d),p=function(e){function t(e,r){o(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,"_Role"),"string"==typeof e&&r instanceof l["default"]&&(this.setName(e),this.setACL(r))}return a(t,e),s(t,[{key:"getName",value:function(){return this.get("name")}},{key:"setName",value:function(e,t){return this.set("name",e,t)}},{key:"getUsers",value:function(){return this.relation("users")}},{key:"getRoles",value:function(){return this.relation("roles")}},{key:"validate",value:function(e,r){var a=n(Object.getPrototypeOf(t.prototype),"validate",this).call(this,e,r);if(a)return a;if("name"in e&&e.name!==this.getName()){var s=e.name;if(this.id&&this.id!==e.objectId)return new f["default"](f["default"].OTHER_CAUSE,"A role's name can only be set before it has been saved.");if("string"!=typeof s)return new f["default"](f["default"].OTHER_CAUSE,"A role's name must be a String.");if(!/^[0-9a-zA-Z\-_ ]+$/.test(s))return new f["default"](f["default"].OTHER_CAUSE,"A role's name can be only contain alphanumeric characters, _, -, and spaces.")}return!1}}]),t}(h["default"]);r["default"]=p,h["default"].registerSubclass("_Role",p),t.exports=r["default"]},{"./ParseACL":8,"./ParseError":10,"./ParseObject":14,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/get":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/interop-require-default":47}],20:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],a=e("babel-runtime/helpers/inherits")["default"],s=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./CoreManager"),l=i(u),c=e("./isRevocableSession"),f=i(c),d=e("./ParseObject"),h=i(d),p=e("./ParsePromise"),y=i(p),v=e("./ParseUser"),m=i(v),b=function(e){function t(e){if(o(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,"_Session"),e&&"object"==typeof e&&!this.set(e||{}))throw new Error("Can't create an invalid Session")}return a(t,e),s(t,[{key:"getSessionToken",value:function(){return this.get("sessionToken")}}],[{key:"readOnlyAttributes",value:function(){return["createdWith","expiresAt","installationId","restricted","sessionToken","user"]}},{key:"current",value:function(e){e=e||{};var t=l["default"].getSessionController(),r={};return e.hasOwnProperty("useMasterKey")&&(r.useMasterKey=e.useMasterKey),m["default"].currentAsync().then(function(e){if(!e)return y["default"].error("There is no current user.");e.getSessionToken();return r.sessionToken=e.getSessionToken(),t.getSession(r)})}},{key:"isCurrentSessionRevocable",value:function(){var e=m["default"].current();return e?(0,f["default"])(e.getSessionToken()||""):!1}}]),t}(h["default"]);r["default"]=b,h["default"].registerSubclass("_Session",b),l["default"].setSessionController({getSession:function(e){var t=l["default"].getRESTController(),r=new b;return t.request("GET","sessions/me",{},e).then(function(e){return r._finishFetch(e),r._setExisted(!0),r})}}),t.exports=r["default"]},{"./CoreManager":3,"./ParseObject":14,"./ParsePromise":16,"./ParseUser":21,"./isRevocableSession":33,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/get":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/interop-require-default":47}],21:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],a=e("babel-runtime/helpers/inherits")["default"],s=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/object/define-property")["default"],u=e("babel-runtime/helpers/interop-require-default")["default"],l=e("babel-runtime/helpers/interop-require-wildcard")["default"];Object.defineProperty(r,"__esModule",{value:!0});var c=e("./CoreManager"),f=u(c),d=e("./isRevocableSession"),h=u(d),p=e("./ObjectState"),y=l(p),v=e("./ParseError"),m=u(v),b=e("./ParseObject"),_=u(b),g=e("./ParsePromise"),w=u(g),O=e("./ParseSession"),C=u(O),P=e("./Storage"),k=u(P),A="currentUser",E=!f["default"].get("IS_NODE"),S=!1,j=null,I={},T=function(e){function t(e){if(o(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,"_User"),e&&"object"==typeof e&&!this.set(e||{}))throw new Error("Can't create an invalid Parse User")}return a(t,e),s(t,[{key:"_upgradeToRevocableSession",value:function(e){e=e||{};var t={};e.hasOwnProperty("useMasterKey")&&(t.useMasterKey=e.useMasterKey);var r=f["default"].getUserController();return r.upgradeToRevocableSession(this,t)._thenRunCallbacks(e)}},{key:"_linkWith",value:function(e,t){var r,n=this;if("string"==typeof e?(r=e,e=I[e]):r=e.getAuthType(),t&&t.hasOwnProperty("authData")){var a=this.get("authData")||{};a[r]=t.authData;var s=f["default"].getUserController();return s.linkWith(this,a)._thenRunCallbacks(t,this)}var o=new w["default"];return e.authenticate({success:function(e,r){var a={};a.authData=r,t.success&&(a.success=t.success),t.error&&(a.error=t.error),n._linkWith(e,a).then(function(){o.resolve(n)},function(e){o.reject(e)})},error:function(e,r){t.error&&t.error(n,r),o.reject(r)}}),o}},{key:"_synchronizeAuthData",value:function(e){if(this.isCurrent()&&e){var t;"string"==typeof e?(t=e,e=I[t]):t=e.getAuthType();var r=this.get("authData");if(e&&"object"==typeof r){var n=e.restoreAuthentication(r[t]);n||this._unlinkFrom(e)}}}},{key:"_synchronizeAllAuthData",value:function(){var e=this.get("authData");if("object"==typeof e)for(var t in e)this._synchronizeAuthData(t)}},{key:"_cleanupAuthData",value:function(){if(this.isCurrent()){var e=this.get("authData");if("object"==typeof e)for(var t in e)e[t]||delete e[t]}}},{key:"_unlinkFrom",value:function(e,t){var r,n=this;return"string"==typeof e?(r=e,e=I[e]):r=e.getAuthType(),this._linkWith(e,{authData:null}).then(function(){return n._synchronizeAuthData(e),w["default"].as(n)})._thenRunCallbacks(t)}},{key:"_isLinked",value:function(e){var t;t="string"==typeof e?e:e.getAuthType();var r=this.get("authData")||{};return!!r[t]}},{key:"_logOutWithAll",value:function(){var e=this.get("authData");if("object"==typeof e)for(var t in e)this._logOutWith(t)}},{key:"_logOutWith",value:function(e){this.isCurrent()&&("string"==typeof e&&(e=I[e]),e&&e.deauthenticate&&e.deauthenticate())}},{key:"isCurrent",value:function(){var e=t.current();return!!e&&e.id===this.id}},{key:"getUsername",value:function(){return this.get("username")}},{key:"setUsername",value:function(e){var t=this.get("authData");t&&t.hasOwnProperty("anonymous")&&(t.anonymous=null),this.set("username",e)}},{key:"setPassword",value:function(e){this.set("password",e)}},{key:"getEmail",value:function(){return this.get("email")}},{key:"setEmail",value:function(e){this.set("email",e)}},{key:"getSessionToken",value:function(){return this.get("sessionToken")}},{key:"authenticated",value:function(){var e=t.current();return!!this.get("sessionToken")&&!!e&&e.id===this.id}},{key:"signUp",value:function(e,t){t=t||{};var r={};t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey);var n=f["default"].getUserController();return n.signUp(this,e,r)._thenRunCallbacks(t,this)}},{key:"logIn",value:function(e){e=e||{};var t={};e.hasOwnProperty("useMasterKey")&&(t.useMasterKey=e.useMasterKey);var r=f["default"].getUserController();return r.logIn(this,t)._thenRunCallbacks(e,this)}},{key:"save",value:function(){for(var e=this,r=arguments.length,a=Array(r),s=0;r>s;s++)a[s]=arguments[s];return n(Object.getPrototypeOf(t.prototype),"save",this).apply(this,a).then(function(){return e.isCurrent()?f["default"].getUserController().updateUserOnDisk(e):e})}},{key:"fetch",value:function(){for(var e=this,r=arguments.length,a=Array(r),s=0;r>s;s++)a[s]=arguments[s];return n(Object.getPrototypeOf(t.prototype),"fetch",this).apply(this,a).then(function(){return e.isCurrent()?f["default"].getUserController().updateUserOnDisk(e):e})}}],[{key:"readOnlyAttributes",value:function(){return["sessionToken"]}},{key:"extend",value:function(e,r){if(e)for(var n in e)"className"!==n&&i(t.prototype,n,{value:e[n],enumerable:!1,writable:!0,configurable:!0});if(r)for(var n in r)"className"!==n&&i(t,n,{value:r[n],enumerable:!1,writable:!0,configurable:!0});return t}},{key:"current",value:function(){if(!E)return null;var e=f["default"].getUserController();return e.currentUser()}},{key:"currentAsync",value:function(){if(!E)return w["default"].as(null);var e=f["default"].getUserController();return e.currentUserAsync()}},{key:"signUp",value:function(e,r,n,a){n=n||{},n.username=e,n.password=r;var s=new t(n);return s.signUp({},a)}},{key:"logIn",value:function(e,r,n){var a=new t;return a._finishFetch({username:e,password:r}),a.logIn(n)}},{key:"become",value:function(e,t){if(!E)throw new Error("It is not memory-safe to become a user in a server environment");t=t||{};var r={sessionToken:e};t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey);var n=f["default"].getUserController();return n.become(r)._thenRunCallbacks(t)}},{key:"logInWith",value:function(e,r){return t._logInWith(e,r)}},{key:"logOut",value:function(){if(!E)throw new Error("There is no current user user on a node.js server environment.");var e=f["default"].getUserController();return e.logOut()}},{key:"requestPasswordReset",value:function(e,t){t=t||{};var r={};t.hasOwnProperty("useMasterKey")&&(r.useMasterKey=t.useMasterKey);var n=f["default"].getUserController();return n.requestPasswordReset(e,r)._thenRunCallbacks(t)}},{key:"allowCustomUserClass",value:function(e){f["default"].set("PERFORM_USER_REWRITE",!e)}},{key:"enableRevocableSession",value:function(e){if(e=e||{},f["default"].set("FORCE_REVOCABLE_SESSION",!0),E){var r=t.current();if(r)return r._upgradeToRevocableSession(e)}return w["default"].as()._thenRunCallbacks(e)}},{key:"enableUnsafeCurrentUser",value:function(){E=!0}},{key:"disableUnsafeCurrentUser",value:function(){E=!1}},{key:"_registerAuthenticationProvider",value:function(e){I[e.getAuthType()]=e,t.currentAsync().then(function(t){t&&t._synchronizeAuthData(e.getAuthType())})}},{key:"_logInWith",value:function(e,r){var n=new t;return n._linkWith(e,r)}},{key:"_clearCache",value:function(){j=null,S=!1}},{key:"_setCurrentUserCache",value:function(e){j=e}}]),t}(_["default"]);r["default"]=T,_["default"].registerSubclass("_User",T);var N={updateUserOnDisk:function(e){var t=k["default"].generatePath(A),r=e.toJSON();return r.className="_User",k["default"].setItemAsync(t,JSON.stringify(r)).then(function(){return e})},setCurrentUser:function(e){return j=e,e._cleanupAuthData(),e._synchronizeAllAuthData(),N.updateUserOnDisk(e)},currentUser:function(){if(j)return j;if(S)return null;if(k["default"].async())throw new Error("Cannot call currentUser() when using a platform with an async storage system. Call currentUserAsync() instead.");var e=k["default"].generatePath(A),t=k["default"].getItem(e);if(S=!0,!t)return j=null,null;t=JSON.parse(t),t.className||(t.className="_User"),t._id&&(t.objectId!==t._id&&(t.objectId=t._id),delete t._id),t._sessionToken&&(t.sessionToken=t._sessionToken,delete t._sessionToken);var r=_["default"].fromJSON(t);return j=r,r._synchronizeAllAuthData(),r},currentUserAsync:function(){if(j)return w["default"].as(j);if(S)return w["default"].as(null);var e=k["default"].generatePath(A);return k["default"].getItemAsync(e).then(function(e){if(S=!0,!e)return j=null,w["default"].as(null);e=JSON.parse(e),e.className||(e.className="_User"),e._id&&(e.objectId!==e._id&&(e.objectId=e._id),delete e._id),e._sessionToken&&(e.sessionToken=e._sessionToken,delete e._sessionToken);var t=_["default"].fromJSON(e);return j=t,t._synchronizeAllAuthData(),w["default"].as(t)})},signUp:function(e,t,r){var n=t&&t.username||e.get("username"),a=t&&t.password||e.get("password");return n&&n.length?a&&a.length?e.save(t,r).then(function(){return e._finishFetch({password:void 0}),E?N.setCurrentUser(e):e}):w["default"].error(new m["default"](m["default"].OTHER_CAUSE,"Cannot sign up user with an empty password.")):w["default"].error(new m["default"](m["default"].OTHER_CAUSE,"Cannot sign up user with an empty name."))},logIn:function(e,t){var r=f["default"].getRESTController(),n={username:e.get("username"),password:e.get("password")};return r.request("GET","login",n,t).then(function(t,r){return e._migrateId(t.objectId),e._setExisted(!0),y.setPendingOp(e.className,e._getId(),"username",void 0),y.setPendingOp(e.className,e._getId(),"password",void 0),t.password=void 0,e._finishFetch(t),E?N.setCurrentUser(e):w["default"].as(e)})},become:function(e){var t=new T,r=f["default"].getRESTController();return r.request("GET","users/me",{},e).then(function(e,r){return t._finishFetch(e),t._setExisted(!0),N.setCurrentUser(t)})},logOut:function(){return N.currentUserAsync().then(function(e){var t=k["default"].generatePath(A),r=k["default"].removeItemAsync(t),n=f["default"].getRESTController();if(null!==e){var a=e.getSessionToken();a&&(0,h["default"])(a)&&(r=r.then(function(){return n.request("POST","logout",{},{sessionToken:a})})),e._logOutWithAll(),e._finishFetch({sessionToken:void 0})}return S=!0,j=null,r})},requestPasswordReset:function(e,t){var r=f["default"].getRESTController();return r.request("POST","requestPasswordReset",{email:e},t)},upgradeToRevocableSession:function(e,t){var r=e.getSessionToken();if(!r)return w["default"].error(new m["default"](m["default"].SESSION_MISSING,"Cannot upgrade a user with no session token"));t.sessionToken=r;var n=f["default"].getRESTController();return n.request("POST","upgradeToRevocableSession",{},t).then(function(t){var r=new C["default"];return r._finishFetch(t),e._finishFetch({sessionToken:r.getSessionToken()}),e.isCurrent()?N.setCurrentUser(e):w["default"].as(e)})},linkWith:function(e,t){return e.save({authData:t}).then(function(){return E?N.setCurrentUser(e):e})}};f["default"].setUserController(N),t.exports=r["default"]},{"./CoreManager":3,"./ObjectState":6,"./ParseError":10,"./ParseObject":14,"./ParsePromise":16,"./ParseSession":20,"./Storage":24,"./isRevocableSession":33,"babel-runtime/core-js/object/define-property":38,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/get":45,"babel-runtime/helpers/inherits":46,"babel-runtime/helpers/interop-require-default":47,"babel-runtime/helpers/interop-require-wildcard":48}],22:[function(e,t,r){"use strict";function n(e,t){if(t=t||{},e.where&&e.where instanceof u["default"]&&(e.where=e.where.toJSON().where),e.push_time&&"object"==typeof e.push_time&&(e.push_time=e.push_time.toJSON()),e.expiration_time&&"object"==typeof e.expiration_time&&(e.expiration_time=e.expiration_time.toJSON()),e.expiration_time&&e.expiration_interval)throw new Error("expiration_time and expiration_interval cannot both be set.");return o["default"].getPushController().send(e,{useMasterKey:t.useMasterKey})._thenRunCallbacks(t)}var a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r.send=n;var s=e("./CoreManager"),o=a(s),i=e("./ParseQuery"),u=a(i);o["default"].setPushController({send:function(e,t){var r=o["default"].getRESTController(),n=r.request("POST","push",e,{useMasterKey:!!t.useMasterKey});return n._thenRunCallbacks(t)}})},{"./CoreManager":3,"./ParseQuery":17,"babel-runtime/helpers/interop-require-default":47}],23:[function(e,t,r){(function(n){"use strict";function a(e,t,r){var n=new f["default"],a=new XDomainRequest;return a.onload=function(){var e;try{e=JSON.parse(a.responseText)}catch(t){n.reject(t)}e&&n.resolve(e)},a.onerror=a.ontimeout=function(){var e={responseText:JSON.stringify({code:l["default"].X_DOMAIN_REQUEST,error:"IE's XDomainRequest does not supply error info."})};n.reject(e)},a.onprogress=function(){},a.open(e,t),a.send(r),n}var s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=e("./CoreManager"),i=s(o),u=e("./ParseError"),l=s(u),c=e("./ParsePromise"),f=s(c),d=e("./Storage"),h=(s(d),null);"undefined"!=typeof XMLHttpRequest&&(h=XMLHttpRequest);var p=!1;"undefined"==typeof XDomainRequest||"withCredentials"in new XMLHttpRequest||(p=!0);var y={ajax:function(e,t,r,s){if(p)return a(e,t,r,s);var o=new f["default"],u=0,l=function c(){if(null==h)throw new Error("Cannot make a request: No definition of XMLHttpRequest was found.");var a=!1,l=new h;l.onreadystatechange=function(){if(4===l.readyState&&!a)if(a=!0,l.status>=200&&l.status<300){var e;try{e=JSON.parse(l.responseText)}catch(t){o.reject(t.toString())}e&&o.resolve(e,l.status,l)}else if(l.status>=500||0===l.status)if(++u<i["default"].get("REQUEST_ATTEMPT_LIMIT")){var r=Math.round(125*Math.random()*Math.pow(2,u));setTimeout(c,r)}else 0===l.status?o.reject("Unable to connect to the Parse API"):o.reject(l);else o.reject(l)},s=s||{},s["Content-Type"]="text/plain",i["default"].get("IS_NODE")&&(s["User-Agent"]="Parse/"+i["default"].get("VERSION")+" (NodeJS "+n.versions.node+")"),l.open(e,t,!0);for(var f in s)l.setRequestHeader(f,s[f]);l.send(r)};return l(),o},request:function(e,t,r,n){n=n||{};var a=i["default"].get("SERVER_URL");"/"!==a[a.length-1]&&(a+="/"),a+=t;var s={};if(r&&"object"==typeof r)for(var o in r)s[o]=r[o];"POST"!==e&&(s._method=e,e="POST"),s._ApplicationId=i["default"].get("APPLICATION_ID"),s._JavaScriptKey=i["default"].get("JAVASCRIPT_KEY"),s._ClientVersion=i["default"].get("VERSION");var u=n.useMasterKey;if("undefined"==typeof u&&(u=i["default"].get("USE_MASTER_KEY")),u){if(!i["default"].get("MASTER_KEY"))throw new Error("Cannot use the Master Key, it has not been provided.");delete s._JavaScriptKey,s._MasterKey=i["default"].get("MASTER_KEY")}i["default"].get("FORCE_REVOCABLE_SESSION")&&(s._RevocableSession="1");var c=i["default"].getInstallationController();return c.currentInstallationId().then(function(e){s._InstallationId=e;var t=i["default"].getUserController();return n&&"string"==typeof n.sessionToken?f["default"].as(n.sessionToken):t?t.currentUserAsync().then(function(e){return e?f["default"].as(e.getSessionToken()):f["default"].as(null)}):f["default"].as(null)}).then(function(t){t&&(s._SessionToken=t);var r=JSON.stringify(s);return y.ajax(e,a,r)}).then(null,function(e){var t;if(e&&e.responseText)try{var r=JSON.parse(e.responseText);t=new l["default"](r.code,r.error)}catch(n){t=new l["default"](l["default"].INVALID_JSON,"Received an error with invalid JSON from Parse: "+e.responseText)}else t=new l["default"](l["default"].CONNECTION_FAILED,"XMLHttpRequest failed: "+JSON.stringify(e));return f["default"].error(t)})},_setXHR:function(e){h=e}};t.exports=y}).call(this,e("_process"))},{"./CoreManager":3,"./ParseError":10,"./ParsePromise":16,"./Storage":24,_process:75,"babel-runtime/helpers/interop-require-default":47}],24:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"],a=e("./CoreManager"),s=n(a),o=e("./ParsePromise"),i=n(o);t.exports={async:function(){var e=s["default"].getStorageController();return!!e.async},getItem:function(e){var t=s["default"].getStorageController();if(1===t.async)throw new Error("Synchronous storage is not supported by the current storage controller");return t.getItem(e)},getItemAsync:function(e){var t=s["default"].getStorageController();return 1===t.async?t.getItemAsync(e):i["default"].as(t.getItem(e))},setItem:function(e,t){var r=s["default"].getStorageController();if(1===r.async)throw new Error("Synchronous storage is not supported by the current storage controller");return r.setItem(e,t)},setItemAsync:function(e,t){var r=s["default"].getStorageController();return 1===r.async?r.setItemAsync(e,t):i["default"].as(r.setItem(e,t))},removeItem:function(e){var t=s["default"].getStorageController();if(1===t.async)throw new Error("Synchronous storage is not supported by the current storage controller");return t.removeItem(e)},removeItemAsync:function(e){var t=s["default"].getStorageController();return 1===t.async?t.removeItemAsync(e):i["default"].as(t.removeItem(e))},generatePath:function(e){if(!s["default"].get("APPLICATION_ID"))throw new Error("You need to call Parse.initialize before using Parse.");if("string"!=typeof e)throw new Error("Tried to get a Storage path that was not a String.");return"/"===e[0]&&(e=e.substr(1)),"Parse/"+s["default"].get("APPLICATION_ID")+"/"+e},_clear:function(){var e=s["default"].getStorageController();e.hasOwnProperty("clear")&&e.clear()}},s["default"].setStorageController(e("./StorageController.browser"))},{"./CoreManager":3,"./ParsePromise":16,"./StorageController.browser":25,"babel-runtime/helpers/interop-require-default":47}],25:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"],a=e("./ParsePromise");n(a);t.exports={async:0,getItem:function(e){return localStorage.getItem(e)},setItem:function(e,t){try{localStorage.setItem(e,t)}catch(r){}},removeItem:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}}},{"./ParsePromise":16,"babel-runtime/helpers/interop-require-default":47}],26:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],a=e("babel-runtime/helpers/class-call-check")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"],o=e("./ParsePromise"),i=s(o);t.exports=function(){function e(){a(this,e),this.queue=[]}return n(e,[{key:"enqueue",value:function(e){var t=this,r=new i["default"];return this.queue.push({task:e,_completion:r}),1===this.queue.length&&e().then(function(){t._dequeue(),r.resolve()},function(e){t._dequeue(),r.reject(e)}),r}},{key:"_dequeue",value:function(){var e=this;if(this.queue.shift(),this.queue.length){
var t=this.queue[0];t.task().then(function(){e._dequeue(),t._completion.resolve()},function(r){e._dequeue(),t._completion.reject(r)})}}}]),e}()},{"./ParsePromise":16,"babel-runtime/helpers/class-call-check":43,"babel-runtime/helpers/create-class":44,"babel-runtime/helpers/interop-require-default":47}],27:[function(e,t,r){"use strict";function n(e,t){if(e.indexOf(t)>-1)return!0;for(var r=0;r<e.length;r++)if(e[r]instanceof o["default"]&&e[r].className===t.className&&e[r]._getId()===t._getId())return!0;return!1}var a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var s=e("./ParseObject"),o=a(s);t.exports=r["default"]},{"./ParseObject":14,"babel-runtime/helpers/interop-require-default":47}],28:[function(e,t,r){"use strict";function n(e){if(!(e instanceof l["default"]))return!0;var t=e.attributes;for(var r in t){var n=t[r];if(!a(n))return!1}return!0}function a(e){if("object"!=typeof e)return!0;if(e instanceof f["default"])return!0;if(e instanceof l["default"])return!!e.id;if(e instanceof i["default"])return e.url()?!0:!1;if(Array.isArray(e)){for(var t=0;t<e.length;t++)if(!a(e[t]))return!1;return!0}for(var r in e)if(!a(e[r]))return!1;return!0}var s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=e("./ParseFile"),i=s(o),u=e("./ParseObject"),l=s(u),c=e("./ParseRelation"),f=s(c);t.exports=r["default"]},{"./ParseFile":11,"./ParseObject":14,"./ParseRelation":18,"babel-runtime/helpers/interop-require-default":47}],29:[function(e,t,r){"use strict";function n(e){if(null===e||"object"!=typeof e)return e;if(Array.isArray(e)){var t=[];return e.forEach(function(e,r){t[r]=n(e)}),t}if("string"==typeof e.__op)return(0,d.opFromJSON)(e);if("Pointer"===e.__type&&e.className)return f["default"].fromJSON(e);if("Object"===e.__type&&e.className)return f["default"].fromJSON(e);if("Relation"===e.__type){var r=new p["default"](null,null);return r.targetClassName=e.className,r}if("Date"===e.__type)return new Date(e.iso);if("File"===e.__type)return i["default"].fromJSON(e);if("GeoPoint"===e.__type)return new l["default"]({latitude:e.latitude,longitude:e.longitude});var a={};for(var s in e)a[s]=n(e[s]);return a}var a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var s=e("./ParseACL"),o=(a(s),e("./ParseFile")),i=a(o),u=e("./ParseGeoPoint"),l=a(u),c=e("./ParseObject"),f=a(c),d=e("./ParseOp"),h=e("./ParseRelation"),p=a(h);t.exports=r["default"]},{"./ParseACL":8,"./ParseFile":11,"./ParseGeoPoint":12,"./ParseObject":14,"./ParseOp":15,"./ParseRelation":18,"babel-runtime/helpers/interop-require-default":47}],30:[function(e,t,r){"use strict";function n(e,t,r,s){if(e instanceof h["default"]){if(t)throw new Error("Parse Objects not allowed here");var o=e.id?e.className+":"+e.id:e;return r||!s||s.indexOf(o)>-1||e.dirty()||a(e._getServerData()).length<1?e.toPointer():(s=s.concat(o),e._toFullJSON(s))}if(e instanceof p.Op||e instanceof i["default"]||e instanceof f["default"]||e instanceof v["default"])return e.toJSON();if(e instanceof l["default"]){if(!e.url())throw new Error("Tried to encode an unsaved file.");return e.toJSON()}if("[object Date]"===m.call(e)){if(isNaN(e))throw new Error("Tried to encode an invalid date.");return{__type:"Date",iso:e.toJSON()}}if("[object RegExp]"===m.call(e)&&"string"==typeof e.source)return e.source;if(Array.isArray(e))return e.map(function(e){return n(e,t,r,s)});if(e&&"object"==typeof e){var u={};for(var c in e)u[c]=n(e[c],t,r,s);return u}return e}var a=e("babel-runtime/core-js/object/keys")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=e("./ParseACL"),i=s(o),u=e("./ParseFile"),l=s(u),c=e("./ParseGeoPoint"),f=s(c),d=e("./ParseObject"),h=s(d),p=e("./ParseOp"),y=e("./ParseRelation"),v=s(y),m=Object.prototype.toString;r["default"]=function(e,t,r,a){return n(e,!!t,!!r,a||[])},t.exports=r["default"]},{"./ParseACL":8,"./ParseFile":11,"./ParseGeoPoint":12,"./ParseObject":14,"./ParseOp":15,"./ParseRelation":18,"babel-runtime/core-js/object/keys":41,"babel-runtime/helpers/interop-require-default":47}],31:[function(e,t,r){"use strict";function n(e,t){if(typeof e!=typeof t)return!1;if(!e||"object"!=typeof e)return e===t;if(Array.isArray(e)||Array.isArray(t)){if(!Array.isArray(e)||!Array.isArray(t))return!1;if(e.length!==t.length)return!1;for(var r=e.length;r--;)if(!n(e[r],t[r]))return!1;return!0}if(e instanceof i["default"]||e instanceof l["default"]||e instanceof f["default"]||e instanceof h["default"])return e.equals(t);if(a(e).length!==a(t).length)return!1;for(var s in e)if(!n(e[s],t[s]))return!1;return!0}var a=e("babel-runtime/core-js/object/keys")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=e("./ParseACL"),i=s(o),u=e("./ParseFile"),l=s(u),c=e("./ParseGeoPoint"),f=s(c),d=e("./ParseObject"),h=s(d);t.exports=r["default"]},{"./ParseACL":8,"./ParseFile":11,"./ParseGeoPoint":12,"./ParseObject":14,"babel-runtime/core-js/object/keys":41,"babel-runtime/helpers/interop-require-default":47}],32:[function(e,t,r){"use strict";function n(e){return e.replace(/[&<>\/'"]/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;","/":"&#x2F;","'":"&#x27;",'"':"&quot;"}[e]})}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n,t.exports=r["default"]},{}],33:[function(e,t,r){"use strict";function n(e){return e.indexOf("r:")>-1}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n,t.exports=r["default"]},{}],34:[function(e,t,r){"use strict";function n(e){var t=new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),r=t.exec(e);if(!r)return null;var n=r[1]||0,a=(r[2]||1)-1,s=r[3]||0,o=r[4]||0,i=r[5]||0,u=r[6]||0,l=r[8]||0;return new Date(Date.UTC(n,a,s,o,i,u,l))}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n,t.exports=r["default"]},{}],35:[function(e,t,r){"use strict";function n(e){var t=[];return e.forEach(function(e){e instanceof u["default"]?(0,o["default"])(t,e)||t.push(e):t.indexOf(e)<0&&t.push(e)}),t}var a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var s=e("./arrayContainsObject"),o=a(s),i=e("./ParseObject"),u=a(i);t.exports=r["default"]},{"./ParseObject":14,"./arrayContainsObject":27,"babel-runtime/helpers/interop-require-default":47}],36:[function(e,t,r){"use strict";function n(e,t){var r={objects:{},files:[]},n=e.className+":"+e._getId();r.objects[n]=e.dirty()?e:!0;var s=e.attributes;for(var o in s)"object"==typeof s[o]&&a(s[o],r,!1,!!t);var i=[];for(var u in r.objects)u!==n&&r.objects[u]!==!0&&i.push(r.objects[u]);return i.concat(r.files)}function a(e,t,r,n){if(e instanceof l["default"]){if(!e.id&&r)throw new Error("Cannot create a pointer to an unsaved Object.");var s=e.className+":"+e._getId();if(!t.objects[s]){t.objects[s]=e.dirty()?e:!0;var o=e.attributes;for(var u in o)"object"==typeof o[u]&&a(o[u],t,!n,n)}}else{if(e instanceof i["default"])return void(!e.url()&&t.files.indexOf(e)<0&&t.files.push(e));if(!(e instanceof f["default"])){Array.isArray(e)&&e.forEach(function(e){a(e,t,r,n)});for(var c in e)"object"==typeof e[c]&&a(e[c],t,r,n)}}}var s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var o=e("./ParseFile"),i=s(o),u=e("./ParseObject"),l=s(u),c=e("./ParseRelation"),f=s(c);t.exports=r["default"]},{"./ParseFile":11,"./ParseObject":14,"./ParseRelation":18,"babel-runtime/helpers/interop-require-default":47}],37:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":49}],38:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":50}],39:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/freeze"),__esModule:!0}},{"core-js/library/fn/object/freeze":51}],40:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":52}],41:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":53}],42:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":54}],43:[function(e,t,r){"use strict";r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r.__esModule=!0},{}],44:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/object/define-property")["default"];r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),n(e,a.key,a)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r.__esModule=!0},{"babel-runtime/core-js/object/define-property":38}],45:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/object/get-own-property-descriptor")["default"];r["default"]=function(e,t,r){for(var a=!0;a;){var s=e,o=t,i=r;a=!1,null===s&&(s=Function.prototype);var u=n(s,o);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return;e=c,t=o,r=i,a=!0,u=c=void 0}},r.__esModule=!0},{"babel-runtime/core-js/object/get-own-property-descriptor":40}],46:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/object/create")["default"],a=e("babel-runtime/core-js/object/set-prototype-of")["default"];r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=n(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(a?a(e,t):e.__proto__=t)},r.__esModule=!0},{"babel-runtime/core-js/object/create":37,"babel-runtime/core-js/object/set-prototype-of":42}],47:[function(e,t,r){"use strict";r["default"]=function(e){return e&&e.__esModule?e:{"default":e}},r.__esModule=!0},{}],48:[function(e,t,r){"use strict";r["default"]=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t},r.__esModule=!0},{}],49:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t){return n.create(e,t)}},{"../../modules/$":66}],50:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t,r){return n.setDesc(e,t,r)}},{"../../modules/$":66}],51:[function(e,t,r){e("../../modules/es6.object.freeze"),t.exports=e("../../modules/$.core").Object.freeze},{"../../modules/$.core":58,"../../modules/es6.object.freeze":71}],52:[function(e,t,r){var n=e("../../modules/$");e("../../modules/es6.object.get-own-property-descriptor"),t.exports=function(e,t){return n.getDesc(e,t)}},{"../../modules/$":66,"../../modules/es6.object.get-own-property-descriptor":72}],53:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/$.core").Object.keys},{"../../modules/$.core":58,"../../modules/es6.object.keys":73}],54:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/$.core").Object.setPrototypeOf},{"../../modules/$.core":58,"../../modules/es6.object.set-prototype-of":74}],55:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],56:[function(e,t,r){var n=e("./$.is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":65}],57:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],58:[function(e,t,r){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},{}],59:[function(e,t,r){var n=e("./$.a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},{"./$.a-function":55}],60:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],61:[function(e,t,r){var n=e("./$.global"),a=e("./$.core"),s=e("./$.ctx"),o="prototype",i=function(e,t,r){var u,l,c,f=e&i.F,d=e&i.G,h=e&i.S,p=e&i.P,y=e&i.B,v=e&i.W,m=d?a:a[t]||(a[t]={}),b=d?n:h?n[t]:(n[t]||{})[o];d&&(r=t);for(u in r)l=!f&&b&&u in b,l&&u in m||(c=l?b[u]:r[u],m[u]=d&&"function"!=typeof b[u]?r[u]:y&&l?s(c,n):v&&b[u]==c?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[o]=e[o],t}(c):p&&"function"==typeof c?s(Function.call,c):c,p&&((m[o]||(m[o]={}))[u]=c))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,t.exports=i},{"./$.core":58,"./$.ctx":59,"./$.global":63}],62:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],63:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],64:[function(e,t,r){var n=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./$.cof":57}],65:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],66:[function(e,t,r){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},{}],67:[function(e,t,r){var n=e("./$.export"),a=e("./$.core"),s=e("./$.fails");t.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],o={};o[e]=t(r),n(n.S+n.F*s(function(){r(1)}),"Object",o)}},{"./$.core":58,"./$.export":61,"./$.fails":62}],68:[function(e,t,r){var n=e("./$").getDesc,a=e("./$.is-object"),s=e("./$.an-object"),o=function(e,t){if(s(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,a){try{a=e("./$.ctx")(Function.call,n(Object.prototype,"__proto__").set,2),a(t,[]),r=!(t instanceof Array)}catch(s){r=!0}return function(e,t){return o(e,t),r?e.__proto__=t:a(e,t),e}}({},!1):void 0),check:o}},{"./$":66,"./$.an-object":56,"./$.ctx":59,"./$.is-object":65}],69:[function(e,t,r){var n=e("./$.iobject"),a=e("./$.defined");t.exports=function(e){return n(a(e))}},{"./$.defined":60,"./$.iobject":64}],70:[function(e,t,r){var n=e("./$.defined");t.exports=function(e){return Object(n(e))}},{"./$.defined":60}],71:[function(e,t,r){var n=e("./$.is-object");e("./$.object-sap")("freeze",function(e){return function(t){return e&&n(t)?e(t):t}})},{"./$.is-object":65,"./$.object-sap":67}],72:[function(e,t,r){var n=e("./$.to-iobject");e("./$.object-sap")("getOwnPropertyDescriptor",function(e){return function(t,r){return e(n(t),r)}})},{"./$.object-sap":67,"./$.to-iobject":69}],73:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("keys",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":67,"./$.to-object":70}],74:[function(e,t,r){var n=e("./$.export");n(n.S,"Object",{setPrototypeOf:e("./$.set-proto").set})},{"./$.export":61,"./$.set-proto":68}],75:[function(e,t,r){},{}]},{},[7])(7)});
// ng-cordova-oauth - v0.2.10 (2016-07-20)
// http://www.nraboy.com
!function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("https://api.500px.com/v1/api/js-sdk/authorize?sdk_key="+b+"&callback="+f,"_blank","toolbar=no,zoom=no,location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){var b=a.url.split("#token:")[1].split(",")[0];e.resolve({error:!1,success:!0,access_token:b,callback:f})}else e.reject({success:!1,callback:f,error:!0,access_token:null})}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.500px",["oauth.utils"]).factory("$ngCordova500px",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f){var g=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var h=window.cordova.InAppBrowser.open(e+"/adfs/oauth2/authorize?response_type=code&client_id="+d+"&redirect_uri=http://localhost/callback&resource="+f,"_blank","location=no");h.addEventListener("loadstart",function(a){if(0===a.url.indexOf("http://localhost/callback")){var c=a.url.split("code=")[1];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:e+"/adfs/oauth2/token",data:"client_id="+d+"&code="+c+"&redirect_uri=http://localhost/callback&grant_type=authorization_code"}).success(function(a){g.resolve(a)}).error(function(a,b){g.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){h.close()},10)})}}),h.addEventListener("exit",function(a){g.reject("The sign in flow was canceled")})}else g.reject("Could not find InAppBrowser plugin");else g.reject("Cannot authenticate via a web browser");return g.promise}return{signin:d}}angular.module("oauth.adfs",["oauth.utils"]).factory("$ngCordovaAdfs",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f){var g=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var h=window.cordova.InAppBrowser.open("https://login.microsoftonline.com/"+e+"/oauth2/authorize?response_type=code&client_id="+d+"&redirect_uri=http://localhost/callback","_blank","location=no,clearsessioncache=yes,clearcache=yes");h.addEventListener("loadstart",function(a){if(0===a.url.indexOf("http://localhost/callback")){var c=a.url.split("code=")[1];console.log(c),b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://login.microsoftonline.com/"+e+"/oauth2/token",data:"client_id="+d+"&code="+c+"&redirect_uri=http://localhost/callback&grant_type=authorization_code&resource="+f}).success(function(a){g.resolve(a)}).error(function(a,b){g.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){h.close()},10)})}}),h.addEventListener("exit",function(a){g.reject("The sign in flow was canceled")})}else g.reject("Could not find InAppBrowser plugin");else g.reject("Cannot authenticate via a web browser");return g.promise}return{signin:d}}angular.module("oauth.azuread",["oauth.utils"]).factory("$ngCordovaAzureAD",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j=window.cordova.InAppBrowser.open("https://app.box.com/api/oauth2/authorize/?client_id="+d+"&redirect_uri="+i+"&state="+f+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");j.addEventListener("loadstart",function(a){if(0===a.url.indexOf(i)){var c=a.url.split("code=")[1];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://app.box.com/api/oauth2/token",data:"client_id="+d+"&client_secret="+e+"&redirect_uri="+i+"&grant_type=authorization_code&code="+c}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){j.close()},10)})}}),j.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.box",["oauth.utils"]).factory("$ngCordovaBox",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f){var g=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var h="http://localhost/callback";void 0!==f&&f.hasOwnProperty("redirect_uri")&&(h=f.redirect_uri);var i=window.cordova.InAppBrowser.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id="+d+"&redirect_uri="+h+"&response_type=code&scope=read%20write","_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(a){if(0===a.url.indexOf(h)){var c=a.url.split("code=")[1];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://cloud.digitalocean.com/v1/oauth/token",data:"client_id="+d+"&client_secret="+e+"&redirect_uri="+h+"&grant_type=authorization_code&code="+c}).success(function(a){g.resolve(a)}).error(function(a,b){g.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){i.close()},10)})}}),i.addEventListener("exit",function(a){g.reject("The sign in flow was canceled")})}else g.reject("Could not find InAppBrowser plugin");else g.reject("Cannot authenticate via a web browser");return g.promise}return{signin:d}}angular.module("oauth.digitalOcean",["oauth.utils"]).factory("$ngCordovaDigitalOcean",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g,h){var i=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var j="http://localhost/callback",k="https://dribbble.com/oauth/authorize",l="https://dribbble.com/oauth/token";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(j=g.redirect_uri),void 0===h&&(h=c.createNonce(5));var m=f.join(",").replace(/,/g,"+"),n=window.cordova.InAppBrowser.open(k+"?client_id="+d+"&redirect_uri="+j+"&scope="+m+"&state="+h,"_blank","location=no,clearsessioncache=yes,clearcache=yes");n.addEventListener("loadstart",function(a){if(0===a.url.indexOf(j)){var c=a.url.split("code=")[1],f=c.split("&")[0];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:l,data:"client_id="+d+"&redirect_uri="+j+"&client_secret="+e+"&code="+f}).success(function(a){i.resolve(a)}).error(function(a,b){i.reject("Problem authenticating ")})["finally"](function(){setTimeout(function(){n.close()},10)})}}),n.addEventListener("exit",function(a){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin");else i.reject("Cannot authenticate via a web browser");return i.promise}return{signin:d}}angular.module("oauth.dribble",["oauth.utils"]).factory("$ngCordovaDribble",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("https://www.dropbox.com/1/oauth2/authorize?client_id="+b+"&redirect_uri="+f+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];void 0!==d.access_token&&null!==d.access_token?e.resolve({access_token:d.access_token,token_type:d.token_type,uid:d.uid}):e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.dropbox",["oauth.utils"]).factory("$ngCordovaDropbox",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("https://api.envato.com/authorization?client_id="+b+"&redirect_uri="+f+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];void 0!==d.access_token&&null!==d.access_token?e.resolve({access_token:d.access_token,expires_in:d.expires_in}):e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.envato",["oauth.utils"]).factory("$ngCordovaEnvato",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var g="http://localhost/callback";void 0!==e&&e.hasOwnProperty("redirect_uri")&&(g=e.redirect_uri);var h="https://www.facebook.com/v2.6/dialog/oauth?client_id="+b+"&redirect_uri="+g+"&response_type=token&scope="+d.join(",");void 0!==e&&e.hasOwnProperty("auth_type")&&(h+="&auth_type="+e.auth_type);var i=window.cordova.InAppBrowser.open(h,"_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(a){if(0===a.url.indexOf(g)){i.removeEventListener("exit",function(a){}),i.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],e=0;e<c.length;e++)d[c[e].split("=")[0]]=c[e].split("=")[1];void 0!==d.access_token&&null!==d.access_token?f.resolve({access_token:d.access_token,expires_in:d.expires_in}):0!==a.url.indexOf("error_code=100")?f.reject("Facebook returned error_code=100: Invalid permissions"):f.reject("Problem authenticating")}}),i.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.facebook",["oauth.utils"]).factory("$ngCordovaFacebook",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f){var g=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var h="http://localhost/callback";void 0!==f&&f.hasOwnProperty("redirect_uri")&&(h=f.redirect_uri);var i=window.cordova.InAppBrowser.open("https://ident.familysearch.org/cis-web/oauth2/v3/authorization?client_id="+d+"&redirect_uri="+h+"&response_type=code&state="+e,"_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(a){if(0===a.url.indexOf(h)){var c=a.url.split("code=")[1];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://ident.familysearch.org/cis-web/oauth2/v3/token",data:"client_id="+d+"&redirect_uri="+h+"&grant_type=authorization_code&code="+c}).success(function(a){g.resolve(a)}).error(function(a,b){g.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){i.close()},10)})}}),i.addEventListener("exit",function(a){g.reject("The sign in flow was canceled")})}else g.reject("Could not find InAppBrowser plugin");else g.reject("Cannot authenticate via a web browser");return g.promise}return{signin:d}}angular.module("oauth.familySearch",["oauth.utils"]).factory("$ngCordovaFamilySearch",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("https://foursquare.com/oauth2/authenticate?client_id="+b+"&redirect_uri="+f+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];if(void 0!==d.access_token&&null!==d.access_token){var i={access_token:d.access_token,expires_in:d.expires_in};e.resolve(i)}else e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.foursquare",["oauth.utils"]).factory("$ngCordovaFoursquare",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j=window.cordova.InAppBrowser.open("https://github.com/login/oauth/authorize?client_id="+d+"&redirect_uri="+i+"&scope="+f.join(","),"_blank","location=no,clearsessioncache=yes,clearcache=yes");j.addEventListener("loadstart",function(a){if(0===a.url.indexOf(i)){var c=a.url.split("code=")[1];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded",accept:"application/json"},url:"https://github.com/login/oauth/access_token",data:"client_id="+d+"&client_secret="+e+"&redirect_uri="+i+"&code="+c}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){j.close()},10)})}}),j.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.github",["oauth.utils"]).factory("$ngCordovaGithub",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var g="http://localhost/callback";void 0!==e&&e.hasOwnProperty("redirect_uri")&&(g=e.redirect_uri);var h=window.cordova.InAppBrowser.open("https://accounts.google.com/o/oauth2/auth?client_id="+b+"&redirect_uri="+g+"&scope="+d.join(" ")+"&approval_prompt=force&response_type=token id_token","_blank","location=no,clearsessioncache=yes,clearcache=yes");h.addEventListener("loadstart",function(a){if(0===a.url.indexOf(g)){h.removeEventListener("exit",function(a){}),h.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],e=0;e<c.length;e++)d[c[e].split("=")[0]]=c[e].split("=")[1];void 0!==d.access_token&&null!==d.access_token?f.resolve({access_token:d.access_token,token_type:d.token_type,expires_in:d.expires_in,id_token:d.id_token}):f.reject("Problem authenticating")}}),h.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.google",["oauth.utils"]).factory("$ngCordovaGoogle",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("https://api.imgur.com/oauth2/authorize?client_id="+b+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];void 0!==d.access_token&&null!==d.access_token?e.resolve({access_token:d.access_token,expires_in:d.expires_in,account_username:d.account_username}):e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.imgur",["oauth.utils"]).factory("$ngCordovaImgur",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d,e){var f=a.defer(),g={code:"?",token:"#"};if(window.cordova)if(c.isInAppBrowserInstalled()){var h="http://localhost/callback",i="token";void 0!==e&&(e.hasOwnProperty("redirect_uri")&&(h=e.redirect_uri),e.hasOwnProperty("response_type")&&(i=e.response_type));var j="";d&&d.length>0&&(j="&scope"+d.join("+"));var k=window.cordova.InAppBrowser.open("https://api.instagram.com/oauth/authorize/?client_id="+b+"&redirect_uri="+h+j+"&response_type="+i,"_blank","location=no,clearsessioncache=yes,clearcache=yes");k.addEventListener("loadstart",function(a){if(0===a.url.indexOf(h)){k.removeEventListener("exit",function(a){}),k.close();var b=a.url.split(g[i])[1],d=c.parseResponseParameters(b);d.access_token?f.resolve({access_token:d.access_token}):void 0!==d.code&&null!==d.code?f.resolve({code:d.code}):f.reject("Problem authenticating")}}),k.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.instagram",["oauth.utils"]).factory("$ngCordovaInstagram",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j=window.cordova.InAppBrowser.open("https://jawbone.com/auth/oauth2/auth?client_id="+d+"&redirect_uri="+i+"&response_type=code&scope="+f.join(" "),"_blank","location=no,clearsessioncache=yes,clearcache=yes");j.addEventListener("loadstart",function(a){if(0===a.url.indexOf(i)){var c=a.url.split("code=")[1];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://jawbone.com/auth/oauth2/token",data:"client_id="+d+"&client_secret="+e+"&grant_type=authorization_code&code="+c}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){j.close()},10)})}}),j.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.jawbone",["oauth.utils"]).factory("$ngCordovaJawbone",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return{azureAD:d.signin,adfs:e.signin,dropbox:f.signin,digitalOcean:g.signin,google:h.signin,github:i.signin,facebook:j.signin,linkedin:k.signin,instagram:l.signin,box:m.signin,reddit:n.signin,slack:o.signin,twitter:p.signin,meetup:q.signin,salesforce:r.signin,strava:s.signin,withings:t.signin,foursquare:u.signin,magento:v.signin,vkontakte:w.signin,odnoklassniki:x.signin,imgur:y.signin,spotify:z.signin,uber:A.signin,windowsLive:B.signin,yammer:C.signin,venmo:D.signin,stripe:E.signin,rally:F.signin,familySearch:G.signin,envato:H.signin,weibo:I.signin,jawbone:J.signin,untappd:K.signin,dribble:L.signin,pocket:M.signin,mercadolibre:N.signin,xing:O.signin,netatmo:P.signin,trakttv:Q.signin,yahoo:R.signin}}angular.module("oauth.providers",["oauth.utils","oauth.500px","oauth.azuread","oauth.adfs","oauth.dropbox","oauth.digitalOcean","oauth.google","oauth.github","oauth.facebook","oauth.linkedin","oauth.instagram","oauth.box","oauth.reddit","oauth.slack","oauth.twitter","oauth.meetup","oauth.salesforce","oauth.strava","oauth.withings","oauth.foursquare","oauth.magento","oauth.vkontakte","oauth.odnoklassniki","oauth.imgur","oauth.spotify","oauth.uber","oauth.windowslive","oauth.yammer","oauth.venmo","oauth.stripe","oauth.rally","oauth.familySearch","oauth.envato","oauth.weibo","oauth.jawbone","oauth.untappd","oauth.dribble","oauth.pocket","oauth.mercadolibre","oauth.xing","oauth.netatmo","oauth.trakttv","oauth.yahoo"]).factory("$cordovaOauth",a),a.$inject=["$q","$http","$cordovaOauthUtility","$ngCordovaAzureAD","$ngCordovaAdfs","$ngCordovaDropbox","$ngCordovaDigitalOcean","$ngCordovaGoogle","$ngCordovaGithub","$ngCordovaFacebook","$ngCordovaLinkedin","$ngCordovaInstagram","$ngCordovaBox","$ngCordovaReddit","$ngCordovaSlack","$ngCordovaTwitter","$ngCordovaMeetup","$ngCordovaSalesforce","$ngCordovaStrava","$ngCordovaWithings","$ngCordovaFoursquare","$ngCordovaMagento","$ngCordovaVkontakte","$ngCordovaOdnoklassniki","$ngCordovaImgur","$ngCordovaSpotify","$ngCordovaUber","$ngCordovaWindowslive","$ngCordovaYammer","$ngCordovaVenmo","$ngCordovaStripe","$ngCordovaRally","$ngCordovaFamilySearch","$ngCordovaEnvato","$ngCordovaWeibo","$ngCordovaJawbone","$ngCordovaUntappd","$ngCordovaDribble","$ngCordovaPocket","$ngCordovaMercadolibre","$ngCordovaXing","$ngCordovaNetatmo","$ngCordovaTraktTv","$ngCordovaYahoo"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g,h){var i=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var j="http://localhost/callback";void 0!==h&&h.hasOwnProperty("redirect_uri")&&(j=h.redirect_uri);var k=window.cordova.InAppBrowser.open("https://www.linkedin.com/uas/oauth2/authorization?client_id="+d+"&redirect_uri="+j+"&scope="+f.join(" ")+"&response_type=code&state="+g,"_blank","location=no,clearsessioncache=yes,clearcache=yes");k.addEventListener("loadstart",function(a){if(0===a.url.indexOf(j))try{var c=a.url.split("code=")[1].split("&")[0];b({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://www.linkedin.com/uas/oauth2/accessToken",data:"client_id="+d+"&client_secret="+e+"&redirect_uri="+j+"&grant_type=authorization_code&code="+c}).success(function(a){i.resolve(a)}).error(function(a,b){i.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){k.close()},10)})}catch(f){setTimeout(function(){k.close()},10)}}),k.addEventListener("exit",function(a){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin");else i.reject("Cannot authenticate via a web browser");return i.promise}return{signin:d}}angular.module("oauth.linkedin",["oauth.utils"]).factory("$ngCordovaLinkedin",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f){var g=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled())if("undefined"!=typeof jsSHA){var h={oauth_callback:"http://localhost/callback",oauth_consumer_key:e,oauth_nonce:c.createNonce(5),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"},i=c.createSignature("POST",d+"/oauth/initiate",h,{oauth_callback:"http://localhost/callback"},f);b.defaults.headers.post.Authorization=i.authorization_header,b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b({method:"post",url:d+"/oauth/initiate",data:"oauth_callback=http://localhost/callback"}).success(function(a){for(var e=a.split("&"),i={},j=0;j<e.length;j++)i[e[j].split("=")[0]]=e[j].split("=")[1];i.hasOwnProperty("oauth_token")===!1&&g.reject("Oauth request token was not received");var k=i.oauth_token_secret,l=window.cordova.InAppBrowser.open(d+"/oauth/authorize?oauth_token="+i.oauth_token,"_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(a){if(0===a.url.indexOf("http://localhost/callback")){for(var e=a.url.split("?")[1],i=e.split("&"),j={},m=0;m<i.length;m++)j[i[m].split("=")[0]]=i[m].split("=")[1];j.hasOwnProperty("oauth_verifier")===!1&&g.reject("Browser authentication failed to complete.  No oauth_verifier was returned"),delete h.oauth_signature,delete h.oauth_callback,h.oauth_token=j.oauth_token,h.oauth_nonce=c.createNonce(5),h.oauth_verifier=j.oauth_verifier;var n=c.createSignature("POST",d+"/oauth/token",h,{},f,k);b.defaults.headers.post.Authorization=n.authorization_header,b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b({method:"post",url:d+"/oauth/token"}).success(function(a){for(var b=a.split("&"),c={},d=0;d<b.length;d++)c[b[d].split("=")[0]]=b[d].split("=")[1];c.hasOwnProperty("oauth_token_secret")===!1&&g.reject("Oauth access token was not received"),g.resolve(c)}).error(function(a){g.reject(a)})["finally"](function(){setTimeout(function(){l.close()},10)})}}),l.addEventListener("exit",function(a){g.reject("The sign in flow was canceled")})}).error(function(a){g.reject(a)})}else g.reject("Missing jsSHA JavaScript library");else g.reject("Could not find InAppBrowser plugin");else g.reject("Cannot authenticate via a web browser");return g.promise}return{signin:d}}angular.module("oauth.magento",["oauth.utils"]).factory("$ngCordovaMagento",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("https://secure.meetup.com/oauth2/authorize/?client_id="+b+"&redirect_uri="+f+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d={},h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];void 0!==d.access_token&&null!==d.access_token?e.resolve(d):e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.meetup",["oauth.utils"]).factory("$ngCordovaMeetup",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("http://auth.mercadolibre.com.ar/authorization?client_id="+b+"&redirect_uri="+f+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];void 0!==d.access_token&&null!==d.access_token?e.resolve({access_token:d.access_token,expires_in:d.expires_in,user_id:d.user_id,domains:d.domains}):e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.mercadolibre",["oauth.utils"]).factory("$ngCordovaMercadolibre",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d){function e(a){function c(a){g.resolve(a)}function d(a){g.reject(a)}function e(){}var f=0===a.url.indexOf(n),m=a.url.split("?")[0]===n;if(f&&m){h=!0,p.close();for(var o=a.url.split("?")[1],q=o.split("&"),r=[],s=0;s<q.length;s++)r[q[s].split("=")[0]]=q[s].split("=")[1];var t=r.code,u=r.state;if(l===u){var v={method:"post",url:"https://api.netatmo.com/oauth2/token",data:"grant_type=authorization_code&client_id="+i+"&client_secret="+j+"&code="+t+"&scope="+k+"&redirect_uri="+n,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}};b(v).success(c).error(d)["finally"](e)}else g.reject({error:"string_missmatch"})}}function f(a){if(!h){var b={error:"flow_canceled"};g.reject(b)}}var g=a.defer(),h=!1,i=d.clientId?d.clientId:null,j=d.clientSecret?d.clientSecret:null,k=d.appScope?d.appScope:null,l=d.state?d.state:Math.random().toString(36).substr(2,5),m=d.inappbrowserOptions?d.inappbrowserOptions:"location=no,clearsessioncache=yes,clearcache=yes";if(window.cordova)if(c.isInAppBrowserInstalled()){var n="http://localhost/callback",o="https://api.netatmo.com/oauth2/authorize?client_id="+i+"&redirect_uri="+n+"&scope="+k+"&state="+l,p=window.cordova.InAppBrowser.open(o,"_blank",m);p.addEventListener("loadstart",e),p.addEventListener("exit",f)}else g.reject({error:"no_inappbrowser_plugin"});else g.reject({error:"no_inappbrowser_plugin"});return g.promise}return{signin:d}}angular.module("oauth.netatmo",["oauth.utils"]).factory("$ngCordovaNetatmo",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f=window.cordova.InAppBrowser.open("http://www.odnoklassniki.ru/oauth/authorize?client_id="+b+"&scope="+d.join(",")+"&response_type=token&redirect_uri=http://localhost/callback&layout=m","_blank","location=no,clearsessioncache=yes,clearcache=yes");f.addEventListener("loadstart",function(a){if(0===a.url.indexOf("http://localhost/callback")){for(var b=a.url.split("#")[1],c=b.split("&"),d=[],g=0;g<c.length;g++)d[c[g].split("=")[0]]=c[g].split("=")[1];void 0!==d.access_token&&null!==d.access_token?e.resolve({access_token:d.access_token,session_secret_key:d.session_secret_key}):e.reject("Problem authenticating"),setTimeout(function(){f.close()},10)}}),f.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.odnoklassniki",["oauth.utils"]).factory("$ngCordovaOdnoklassniki",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var g="http://localhost/callback";void 0!==e&&e.hasOwnProperty("redirect_url")&&(g=e.redirect_url);var h="consumer_key="+d+"&redirect_uri="+encodeURIComponent(g);b({method:"post",url:"https://getpocket.com/v3/oauth/request",headers:{"X-Accept":"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:h}).success(function(a){var c=a.split("code=")[1],e=window.cordova.InAppBrowser.open("https://getpocket.com/auth/authorize?request_token="+c+"&redirect_uri="+g,"_blank","location=no,clearsessioncache=yes,clearcache=yes");e.addEventListener("loadstart",function(h){0===h.url.indexOf(g)&&(e.removeEventListener("exit",function(a){}),a="consumer_key="+d+"&code="+c,b({method:"post",url:"https://getpocket.com/v3/oauth/authorize",headers:{"X-Accept":"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
},data:a}).success(function(a){f.resolve(a)}).error(function(a){f.reject(a)})["finally"](function(){setTimeout(function(){e.close()},10)}))}),e.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}).error(function(a){f.reject(a)})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.pocket",["oauth.utils"]).factory("$ngCordovaPocket",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j=window.cordova.InAppBrowser.open("https://rally1.rallydev.com/login/oauth2/auth?client_id="+d+"&redirect_uri="+i+"&scope="+f+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");j.addEventListener("loadstart",function(a){if(0===a.url.indexOf("http://localhost/callback")){var c=a.url.split("code=")[1];b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b({method:"post",url:"https://rally1.rallydev.com/login/oauth2/auth",data:"client_id="+d+"&client_secret="+e+"&redirect_uri="+i+"&grant_type=authorization_code&code="+c}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){j.close()},10)})}}),j.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.rally",["oauth.utils"]).factory("$ngCordovaRally",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g,h){var i=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var j="http://localhost/callback";void 0!==h&&h.hasOwnProperty("redirect_uri")&&(j=h.redirect_uri);var k=window.cordova.InAppBrowser.open("https://ssl.reddit.com/api/v1/authorize"+(g?".compact":"")+"?client_id="+d+"&redirect_uri="+j+"&duration=permanent&state=ngcordovaoauth&scope="+f.join(",")+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");k.addEventListener("loadstart",function(a){if(0===a.url.indexOf(j)){var c=a.url.split("code=")[1];b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b.defaults.headers.post.Authorization="Basic "+btoa(d+":"+e),b({method:"post",url:"https://ssl.reddit.com/api/v1/access_token",data:"redirect_uri="+j+"&grant_type=authorization_code&code="+c}).success(function(a){i.resolve(a)}).error(function(a,b){i.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){k.close()},10)})}}),k.addEventListener("exit",function(a){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin");else i.reject("Cannot authenticate via a web browser");return i.promise}return{signin:d}}angular.module("oauth.reddit",["oauth.utils"]).factory("$ngCordovaReddit",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e="http://localhost/callback",f=function(a,b,c){return a+"services/oauth2/authorize?display=touch&response_type=token&client_id="+escape(b)+"&redirect_uri="+escape(c)},g=function(a,b){return a.substr(0,b.length)===b},h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i=window.cordova.InAppBrowser.open(f(b,d,e),"_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(a){if(g(a.url,e)){var b={},c=a.url.split("#")[1];if(c){var d=c.split("&");for(var f in d){var j=d[f].split("=");b[j[0]]=unescape(j[1])}}"undefined"==typeof b||"undefined"==typeof b.access_token?h.reject("Problem authenticating"):h.resolve(b),setTimeout(function(){i.close()},10)}}),i.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.salesforce",["oauth.utils"]).factory("$ngCordovaSalesforce",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j=window.cordova.InAppBrowser.open("https://slack.com/oauth/authorize?client_id="+d+"&redirect_uri="+i+"&state=ngcordovaoauth&scope="+f.join(","),"_blank","location=no,clearsessioncache=yes,clearcache=yes");j.addEventListener("loadstart",function(a){if(0===a.url.indexOf(i)){var c=a.url.split("code=")[1];b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b({method:"post",url:"https://slack.com/api/oauth.access",data:"client_id="+d+"&client_secret="+e+"&redirect_uri="+i+"&grant_type=authorization_code&code="+c}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){j.close()},10)})}}),j.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.slack",["oauth.utils"]).factory("$ngCordovaSlack",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var g="http://localhost/callback",h="token",i="",j="";void 0!==e&&(e.hasOwnProperty("redirect_uri")&&(g=e.redirect_uri),e.hasOwnProperty("response_type")&&(h=e.response_type),e.hasOwnProperty("state")&&(i="&state="+e.state),e.hasOwnProperty("show_dialog")&&(j="&show_dialog="+e.show_dialog));var k=window.cordova.InAppBrowser.open("https://accounts.spotify.com/authorize?client_id="+b+"&redirect_uri="+g+"&response_type="+h+i+"&scope="+d.join(" ")+j,"_blank","location=no,clearsessioncache=yes,clearcache=yes");k.addEventListener("loadstart",function(a){if(0===a.url.indexOf(g)){k.removeEventListener("exit",function(a){}),k.close();for(var b="code"===h?"?":"#",c=a.url.split(b)[1],d=c.split("&"),e=[],i=0;i<d.length;i++)e[d[i].split("=")[0]]=d[i].split("=")[1];"token"===h&&void 0!==e.access_token&&null!==e.access_token?f.resolve({access_token:e.access_token,expires_in:e.expires_in,account_username:e.account_username}):"code"===h&&void 0!==e.code&&null!==e.code?f.resolve({code:e.code,state:e.state}):f.reject("Problem authenticating")}}),k.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.spotify",["oauth.utils"]).factory("$ngCordovaSpotify",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j=window.cordova.InAppBrowser.open("https://www.strava.com/oauth/authorize?client_id="+d+"&redirect_uri="+i+"&scope="+f.join(",")+"&response_type=code&approval_prompt=force","_blank","location=no,clearsessioncache=yes,clearcache=yes");j.addEventListener("loadstart",function(a){if(0===a.url.indexOf(i)){var c=a.url.split("code=")[1];b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b({method:"post",url:"https://www.strava.com/oauth/token",data:"client_id="+d+"&client_secret="+e+"&code="+c}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){j.close()},10)})}}),j.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.strava",["oauth.utils"]).factory("$ngCordovaStrava",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j=window.cordova.InAppBrowser.open("https://connect.stripe.com/oauth/authorize?client_id="+d+"&redirect_uri="+i+"&scope="+f+"&response_type=code","_blank","location=no,clearsessioncache=yes,clearcache=yes");j.addEventListener("loadstart",function(a){if(0===a.url.indexOf("http://localhost/callback")){var c=a.url.split("code=")[1];b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b({method:"post",url:"https://connect.stripe.com/oauth/token",data:"client_id="+d+"&client_secret="+e+"&redirect_uri="+i+"&grant_type=authorization_code&code="+c}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){j.close()},10)})}}),j.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.stripe",["oauth.utils"]).factory("$ngCordovaStripe",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g,h){var i=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var j="http://localhost/callback";void 0!==h&&h.hasOwnProperty("redirect_uri")&&(j=h.redirect_uri);var k=window.cordova.InAppBrowser.open("https://trakt.tv/oauth/authorize?client_id="+d+"&redirect_uri="+j+"&response_type=code&state="+g,"_blank","location=no,clearsessioncache=yes,clearcache=yes");k.addEventListener("loadstart",function(a){if(0===a.url.indexOf(j))try{var c=a.url.split("code=")[1].split("&")[0];b({method:"post",headers:{"Content-Type":"application/json"},url:"https://trakt.tv/oauth/token",data:{code:c,client_id:d,client_secret:e,redirect_uri:j,grant_type:"authorization_code"}}).success(function(a){i.resolve(a)}).error(function(a,b){i.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){k.close()},10)})}catch(f){setTimeout(function(){k.close()},10)}}),k.addEventListener("exit",function(a){i.reject("The sign in flow was canceled")})}else i.reject("Could not find InAppBrowser plugin");else i.reject("Cannot authenticate via a web browser");return i.promise}return{signin:d}}angular.module("oauth.trakttv",["oauth.utils"]).factory("$ngCordovaTraktTv",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f){var g=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var h="http://localhost/callback";if(void 0!==f&&f.hasOwnProperty("redirect_uri")&&(h=f.redirect_uri),"undefined"!=typeof jsSHA){var i={oauth_consumer_key:d,oauth_nonce:c.createNonce(10),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"},j=c.createSignature("POST","https://api.twitter.com/oauth/request_token",i,{oauth_callback:h},e);b({method:"post",url:"https://api.twitter.com/oauth/request_token",headers:{Authorization:j.authorization_header,"Content-Type":"application/x-www-form-urlencoded"},data:"oauth_callback="+encodeURIComponent(h)}).success(function(a){for(var d=a.split("&"),f={},j=0;j<d.length;j++)f[d[j].split("=")[0]]=d[j].split("=")[1];f.hasOwnProperty("oauth_token")===!1&&g.reject("Oauth request token was not received");var k=window.cordova.InAppBrowser.open("https://api.twitter.com/oauth/authenticate?oauth_token="+f.oauth_token,"_blank","location=no,clearsessioncache=yes,clearcache=yes");k.addEventListener("loadstart",function(a){if(0===a.url.indexOf(h)){for(var d=a.url.split("?")[1],f=d.split("&"),j={},l=0;l<f.length;l++)j[f[l].split("=")[0]]=f[l].split("=")[1];j.hasOwnProperty("oauth_verifier")===!1&&g.reject("Browser authentication failed to complete.  No oauth_verifier was returned"),delete i.oauth_signature,i.oauth_token=j.oauth_token;var m=c.createSignature("POST","https://api.twitter.com/oauth/access_token",i,{oauth_verifier:j.oauth_verifier},e);b({method:"post",url:"https://api.twitter.com/oauth/access_token",headers:{Authorization:m.authorization_header},params:{oauth_verifier:j.oauth_verifier}}).success(function(a){for(var b=a.split("&"),c={},d=0;d<b.length;d++)c[b[d].split("=")[0]]=b[d].split("=")[1];c.hasOwnProperty("oauth_token_secret")===!1&&g.reject("Oauth access token was not received"),g.resolve(c)}).error(function(a){g.reject(a)})["finally"](function(){setTimeout(function(){k.close()},10)})}}),k.addEventListener("exit",function(a){g.reject("The sign in flow was canceled")})}).error(function(a){g.reject(a)})}else g.reject("Missing jsSHA JavaScript library")}else g.reject("Could not find InAppBrowser plugin");else g.reject("Cannot authenticate via a web browser");return g.promise}return{signin:d}}angular.module("oauth.twitter",["oauth.utils"]).factory("$ngCordovaTwitter",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var g="http://localhost/callback";void 0!==e&&e.hasOwnProperty("redirect_uri")&&(g=e.redirect_uri);var h=window.cordova.InAppBrowser.open("https://login.uber.com/oauth/authorize?client_id="+b+"&redirect_uri="+g+"&response_type=token&scope="+d.join(" "),"_blank","location=no,clearsessioncache=yes,clearcache=yes");h.addEventListener("loadstart",function(a){if(0===a.url.indexOf(g)){h.removeEventListener("exit",function(a){}),h.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],e=0;e<c.length;e++)d[c[e].split("=")[0]]=c[e].split("=")[1];void 0!==d.access_token&&null!==d.access_token?f.resolve({access_token:d.access_token,token_type:d.token_type,expires_in:d.expires_in,scope:d.scope}):f.reject("Problem authenticating")}}),h.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.uber",["oauth.utils"]).factory("$ngCordovaUber",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_url")&&(f=d.redirect_url);var g=window.cordova.InAppBrowser.open("https://untappd.com/oauth/authenticate/?client_id="+b+"&redirect_url="+f+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];if(void 0!==d.access_token&&null!==d.access_token){var i={access_token:d.access_token};e.resolve(i)}else e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.untappd",["oauth.utils"]).factory("$ngCordovaUntappd",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var g="http://localhost/callback";void 0!==e&&e.hasOwnProperty("redirect_uri")&&(g=e.redirect_uri);var h=window.cordova.InAppBrowser.open("https://api.venmo.com/v1/oauth/authorize?client_id="+b+"&redirect_uri="+g+"&response_type=token&scope="+d.join(" "),"_blank","location=no,clearsessioncache=yes,clearcache=yes");h.addEventListener("loadstart",function(a){if(0===a.url.indexOf(g)){h.removeEventListener("exit",function(a){}),h.close();for(var b=a.url.split("?")[1],c=b.split("&"),d=[],e=0;e<c.length;e++)d[c[e].split("=")[0]]=c[e].split("=")[1];void 0!==d.access_token&&null!==d.access_token?f.resolve({access_token:d.access_token}):void 0!==d.error&&null!==d.error?f.reject(d.error.replace("+"," ")):f.reject("Problem authenticating")}}),h.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.venmo",["oauth.utils"]).factory("$ngCordovaVenmo",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f=window.cordova.InAppBrowser.open("https://oauth.vk.com/authorize?client_id="+b+"&redirect_uri=http://oauth.vk.com/blank.html&response_type=token&scope="+d.join(",")+"&display=touch&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");f.addEventListener("loadstart",function(a){var b=a.url.split("#");if("https://oauth.vk.com/blank.html"==b[0]||"http://oauth.vk.com/blank.html"==b[0]){f.removeEventListener("exit",function(a){}),f.close();for(var c=a.url.split("#")[1],d=c.split("&"),g=[],h=0;h<d.length;h++)g[d[h].split("=")[0]]=d[h].split("=")[1];if(void 0!==g.access_token&&null!==g.access_token){var i={access_token:g.access_token,expires_in:g.expires_in};void 0!==g.email&&null!==g.email&&(i.email=g.email),e.resolve(i)}else e.reject("Problem authenticating")}}),f.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.vkontakte",["oauth.utils"]).factory("$ngCordovaVkontakte",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f,g){var h=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var i="http://localhost/callback";void 0!==g&&g.hasOwnProperty("redirect_uri")&&(i=g.redirect_uri);var j="https://open.weibo.cn/oauth2/authorize?display=mobile&client_id="+d+"&redirect_uri="+i+"&scope="+f.join(",");void 0!==g&&(g.hasOwnProperty("language")&&(j+="&language="+g.language),g.hasOwnProperty("forcelogin")&&(j+="&forcelogin="+g.forcelogin));var k=window.cordova.InAppBrowser.open(j,"_blank","location=no,clearsessioncache=yes,clearcache=yes");k.addEventListener("loadstart",function(a){if(0===a.url.indexOf(i)){var c=a.url.split("code=")[1];b.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",b({method:"post",url:"https://api.weibo.com/oauth2/access_token",data:"client_id="+d+"&client_secret="+e+"&grant_type=authorization_code&code="+c+"&redirect_uri="+i}).success(function(a){h.resolve(a)}).error(function(a,b){h.reject("Problem authenticating")})["finally"](function(){setTimeout(function(){k.close()},10)})}}),k.addEventListener("exit",function(a){h.reject("The sign in flow was canceled")})}else h.reject("Could not find InAppBrowser plugin");else h.reject("Cannot authenticate via a web browser");return h.promise}return{signin:d}}angular.module("oauth.weibo",["oauth.utils"]).factory("$ngCordovaWeibo",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var g="https://login.live.com/oauth20_desktop.srf";void 0!==e&&e.hasOwnProperty("redirect_uri")&&(g=e.redirect_uri);var h=window.cordova.InAppBrowser.open("https://login.live.com/oauth20_authorize.srf?client_id="+b+"&scope="+d.join(",")+"&response_type=token&display=touch&redirect_uri="+g,"_blank","location=no,clearsessioncache=yes,clearcache=yes");h.addEventListener("loadstart",function(a){if(0===a.url.indexOf(g)){h.removeEventListener("exit",function(a){}),h.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],e=0;e<c.length;e++)d[c[e].split("=")[0]]=c[e].split("=")[1];void 0!==d.access_token&&null!==d.access_token?f.resolve({access_token:d.access_token,expires_in:d.expires_in}):f.reject("Problem authenticating")}}),h.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.windowslive",["oauth.utils"]).factory("$ngCordovaWindowslive",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e){var f=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled())if("undefined"!=typeof jsSHA){var g=c.generateOauthParametersInstance(d);g.oauth_callback="http://localhost/callback";var h="https://oauth.withings.com/account/request_token",i=c.createSignature("GET",h,{},g,e);g.oauth_signature=i.signature;var j=c.generateUrlParameters(g);b({method:"get",url:h+"?"+j}).success(function(a){var g=c.parseResponseParameters(a);g.oauth_token||f.reject("Oauth request token was not received");var h=c.generateOauthParametersInstance(d);h.oauth_token=g.oauth_token;var i=g.oauth_token_secret,j="https://oauth.withings.com/account/authorize",k=c.createSignature("GET",j,{},h,e);h.oauth_signature=k.signature;var l=c.generateUrlParameters(h),m=window.cordova.InAppBrowser.open(j+"?"+l,"_blank","location=no,clearsessioncache=yes,clearcache=yes");m.addEventListener("loadstart",function(a){if(0===a.url.indexOf("http://localhost/callback")){var h=a.url.split("?")[1];g=c.parseResponseParameters(h),g.oauth_verifier||f.reject("Browser authentication failed to complete.  No oauth_verifier was returned");var j=c.generateOauthParametersInstance(d);j.oauth_token=g.oauth_token;var k="https://oauth.withings.com/account/access_token",l=c.createSignature("GET",k,{},j,e,i);j.oauth_signature=l.signature;var n=c.generateUrlParameters(j);b({method:"get",url:k+"?"+n}).success(function(a){var b=c.parseResponseParameters(a);b.oauth_token_secret||f.reject("Oauth access token was not received"),f.resolve(b)}).error(function(a){f.reject(a)})["finally"](function(){setTimeout(function(){m.close()},10)})}}),m.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}).error(function(a){f.reject(a)})}else f.reject("Missing jsSHA JavaScript library");else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:d}}angular.module("oauth.withings",["oauth.utils"]).factory("$ngCordovaWithings",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(d,e,f){var g=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var h="http://localhost/callback";if(void 0!==f&&f.hasOwnProperty("redirect_uri")&&(h=f.redirect_uri),"undefined"!=typeof jsSHA){var i={oauth_consumer_key:d,oauth_nonce:c.createNonce(10),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"},j=c.createSignature("POST","https://api.xing.com/v1/request_token",i,{oauth_callback:h},e);b({method:"post",url:"https://api.xing.com/v1/request_token",headers:{Authorization:j.authorization_header,"Content-Type":"application/x-www-form-urlencoded"},data:"oauth_callback="+encodeURIComponent(h)}).success(function(a){for(var d=a.split("&"),f={},j=0;j<d.length;j++)f[d[j].split("=")[0]]=d[j].split("=")[1];f.hasOwnProperty("oauth_token")===!1&&g.reject("Oauth request token was not received");var k=f.oauth_token_secret,l=window.cordova.InAppBrowser.open("https://api.xing.com/v1/authorize?oauth_token="+f.oauth_token,"_blank","location=no,clearsessioncache=yes,clearcache=yes");l.addEventListener("loadstart",function(a){if(0===a.url.indexOf(h)){for(var d=a.url.split("?")[1],f=d.split("&"),j={},m=0;m<f.length;m++)j[f[m].split("=")[0]]=f[m].split("=")[1];j.hasOwnProperty("oauth_verifier")===!1&&g.reject("Browser authentication failed to complete.  No oauth_verifier was returned"),delete i.oauth_signature,i.oauth_token=j.oauth_token;var n=c.createSignature("POST","https://api.xing.com/v1/access_token",i,{oauth_verifier:j.oauth_verifier},e,k);b({method:"post",url:"https://api.xing.com/v1/access_token",headers:{Authorization:n.authorization_header},params:{oauth_verifier:j.oauth_verifier}}).success(function(a){for(var b=a.split("&"),c={},d=0;d<b.length;d++)c[b[d].split("=")[0]]=b[d].split("=")[1];c.hasOwnProperty("oauth_token_secret")===!1&&g.reject("Oauth access token was not received"),g.resolve(c)}).error(function(a){g.reject(a)})["finally"](function(){setTimeout(function(){l.close()},10)})}}),l.addEventListener("exit",function(a){g.reject("The sign in flow was canceled")})}).error(function(a){g.reject(a)})}else g.reject("Missing jsSHA JavaScript library")}else g.reject("Could not find InAppBrowser plugin");else g.reject("Cannot authenticate via a web browser");return g.promise}return{signin:d}}angular.module("oauth.xing",["oauth.utils"]).factory("$ngCordovaXing",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b){function c(c,d,e){var f=a.defer();if(window.cordova)if(b.isInAppBrowserInstalled()){var g="http://localhost/callback";void 0!==e&&e.hasOwnProperty("redirect_uri")&&(g=e.redirect_uri);var h="https://api.login.yahoo.com/oauth2/request_auth?client_id="+c;h+="&redirect_uri="+g,h+="&response_type=token",h+="&scope="+d.join(" ");var i=window.cordova.InAppBrowser.open(h,"_blank","location=no,clearsessioncache=yes,clearcache=yes");i.addEventListener("loadstart",function(a){if(0===a.url.indexOf(g)){i.removeEventListener("exit",function(a){}),i.close();for(var b=a.url.split("#")[1],c=b.split("&"),d={},e=0;e<c.length;e++)d[c[e].split("=")[0]]=c[e].split("=")[1];void 0!==d.access_token&&null!==d.access_token?f.resolve({access_token:d.access_token,token_type:d.token_type,expires_in:d.expires_in,id_token:d.id_token}):f.reject("Problem authenticating")}}),i.addEventListener("exit",function(a){f.reject("The sign in flow was canceled")})}else f.reject("Could not find InAppBrowser plugin");else f.reject("Cannot authenticate via a web browser");return f.promise}return{signin:c}}angular.module("oauth.yahoo",["oauth.utils"]).factory("$ngCordovaYahoo",a),a.$inject=["$q","$cordovaOauthUtility"]}(),function(){"use strict";function a(a,b,c){function d(b,d){var e=a.defer();if(window.cordova)if(c.isInAppBrowserInstalled()){var f="http://localhost/callback";void 0!==d&&d.hasOwnProperty("redirect_uri")&&(f=d.redirect_uri);var g=window.cordova.InAppBrowser.open("https://www.yammer.com/dialog/oauth?client_id="+b+"&redirect_uri="+f+"&response_type=token","_blank","location=no,clearsessioncache=yes,clearcache=yes");g.addEventListener("loadstart",function(a){if(0===a.url.indexOf(f)){g.removeEventListener("exit",function(a){}),g.close();for(var b=a.url.split("#")[1],c=b.split("&"),d=[],h=0;h<c.length;h++)d[c[h].split("=")[0]]=c[h].split("=")[1];void 0!==d.access_token&&null!==d.access_token?e.resolve({access_token:d.access_token}):e.reject("Problem authenticating")}}),g.addEventListener("exit",function(a){e.reject("The sign in flow was canceled")})}else e.reject("Could not find InAppBrowser plugin");else e.reject("Cannot authenticate via a web browser");return e.promise}return{signin:d}}angular.module("oauth.yammer",["oauth.utils"]).factory("$ngCordovaYammer",a),a.$inject=["$q","$http","$cordovaOauthUtility"]}(),angular.module("ngCordovaOauth",["oauth.providers","oauth.utils"]),function(){function a(a){function b(){var a=cordova.require("cordova/plugin_list"),b=["cordova-plugin-inappbrowser","cordova-plugin-inappbrowser.inappbrowser","org.apache.cordova.inappbrowser"];if(0===Object.keys(a.metadata).length){var c=a.map(function(a){return a.id||a.pluginId});return b.some(function(a){return c.indexOf(a)!=-1})}return b.some(function(b){return a.metadata.hasOwnProperty(b)})}function c(a,b,c,d,e,f){if("undefined"!=typeof jsSHA){for(var g=angular.copy(c),h=Object.keys(d),i=0;i<h.length;i++)g[h[i]]=encodeURIComponent(d[h[i]]);var j=a+"&"+encodeURIComponent(b)+"&",k=Object.keys(g).sort();for(i=0;i<k.length;i++)j+=i==k.length-1?encodeURIComponent(k[i]+"="+g[k[i]]):encodeURIComponent(k[i]+"="+g[k[i]]+"&");var l=new jsSHA(j,"TEXT"),m="";f&&(m=encodeURIComponent(f)),c.oauth_signature=encodeURIComponent(l.getHMAC(encodeURIComponent(e)+"&"+m,"TEXT","SHA-1","B64"));var n=Object.keys(c),o="OAuth ";for(i=0;i<n.length;i++)o+=i==n.length-1?n[i]+'="'+c[n[i]]+'"':n[i]+'="'+c[n[i]]+'",';return{signature_base_string:j,authorization_header:o,signature:c.oauth_signature}}return"Missing jsSHA JavaScript library"}function d(a){for(var b="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=0;d<a;d++)b+=c.charAt(Math.floor(Math.random()*c.length));return b}function e(a){var b=Object.keys(a);b.sort();for(var c="",d="",e=0;e<b.length;e++)c+=d+b[e]+"="+a[b[e]],d="&";return c}function f(a){if(a.split){for(var b=a.split("&"),c={},d=0;d<b.length;d++)c[b[d].split("=")[0]]=b[d].split("=")[1];return c}return{}}function g(a){var b=new jsSHA(Math.round((new Date).getTime()/1e3),"TEXT"),c={oauth_consumer_key:a,oauth_nonce:b.getHash("SHA-1","HEX"),oauth_signature_method:"HMAC-SHA1",oauth_timestamp:Math.round((new Date).getTime()/1e3),oauth_version:"1.0"};return c}return{isInAppBrowserInstalled:b,createSignature:c,createNonce:d,generateUrlParameters:e,parseResponseParameters:f,generateOauthParametersInstance:g}}angular.module("oauth.utils",[]).factory("$cordovaOauthUtility",a),a.$inject=["$q"]}();
(function() {
	'use strict';

	angular.module('ionic.contrib.ui.ionThread', ['SFWApp'])
		.directive('ionComment', ionComment)
		.directive('ionThread', ionThread);

	function ionComment() {
		return {
			restrict: 'E',
			scope: {
				comment: '='
			},
			template: '<ion-item class="ion-comment item">\
						<div class="ion-comment--author">{{comment.from.name}}:</div>\
						<div class="ion-comment--score"><span class="ion-arrow-up-a"></span>{{comment.like_count || 0}}</div>\
						<div class="ion-comment--text">{{comment.message}}</div>\
						<div class="ion-comment--replies">{{comment.comments.data.length || 0}} <span ng-if="comment.comments.data.length==1">reply</span><span ng-if="comment.comments.data.length!=1">replies</span></div>\
					    <div class="ion-comment--author rplyCommentDiv" ng-if="showCommentDiv"></div>\
					   </ion-item>',
			controller: function($scope,FacebookGraphAPI) {
				$scope.showCommentDiv =false;
				$scope.upvoteComment = function() {}

				$scope.downvoteComment = function() {}

				$scope.replyToComment = function() {
					$scope.showCommentDiv = !$scope.showCommentDiv;
				}
				$scope.postReply =function(commentID,comment){
					console.log(commentID);
					console.log(comment);
					FacebookGraphAPI.checkLoginStatus().then(function(data) {
					  console.log('User is Logged In');
					  console.log(data);
					  //FacebookGraphAPI.postReplyToComment();
					}, function(error) {
					  console.log('Login Error');
					});
				}
			}
		}
	}

	function ionThread() {
		return {
			restrict: 'E',
			scope: {
				comments: '='
			},
			//Replace ng-if="!comment.showChildren" with ng-if="comment.showChildren" to hide all child comments by default
			//Replace comment.data.replies.data.children according to the API you are using
			template: '<script type="text/ng-template" id="node.html">\
							<ion-comment ng-click="toggleComment(comment)" comment="comment">\
							</ion-comment>\
							<div class="reddit-post--comment--container">\
								 <ul ng-if="comment.comments.data.length!=0" class="animate-if ion-comment--children">\
								    <li ng-repeat="comment in comment.comments.data">\
								        <ng-include src="\'node.html\'"/>\
								    </li>\
								</ul>\
							</div>\
						</script>\
						<ion-list ng-if="comments && comments.length > 0">\
						  <ul>\
						    <li ng-repeat="comment in comments">\
						        <ng-include src="\'node.html\'"/>\
						    </li>\
						  </ul>\
						</ion-list>',
			controller: function($scope,FacebookGraphAPI) {
				$scope.postComment = function(comment) {
					console.log(comment);
					FacebookGraphAPI.checkLoginStatus().then(function(data) {
					  FacebookGraphAPI.postComment();
					}, function(error) {
					});
				}			
			}
		}
	}
})();
