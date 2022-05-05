var obsidian = require( 'obsidian' );
const http   = require( 'http' );

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function TurndownService() {
    return function(){"use strict";function e(e,n){return Array(n+1).join(e)}var n=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function t(e){return a(e,n)}var r=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function i(e){return a(e,r)}var o=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function a(e,n){return n.indexOf(e.nodeName)>=0}function l(e,n){return e.getElementsByTagName&&n.some((function(n){return e.getElementsByTagName(n).length}))}var u={};function c(e){return e?e.replace(/(\n+\s*)+/g,"\n"):""}function s(e){for(var n in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[n])}function f(e,n,t){for(var r=0;r<e.length;r++){var i=e[r];if(d(i,n,t))return i}}function d(e,n,t){var r=e.filter;if("string"==typeof r){if(r===n.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(n.nodeName.toLowerCase())>-1)return!0}else{if("function"!=typeof r)throw new TypeError("`filter` needs to be a string, array, or function");if(r.call(e,n,t))return!0}}function p(e){var n=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),n}function h(e,n,t){return e&&e.parentNode===n||t(n)?n.nextSibling||n.parentNode:n.firstChild||n.nextSibling||n.parentNode}u.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},u.lineBreak={filter:"br",replacement:function(e,n,t){return t.br+"\n"}},u.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(n,t,r){var i=Number(t.nodeName.charAt(1));return"setext"===r.headingStyle&&i<3?"\n\n"+n+"\n"+e(1===i?"=":"-",n.length)+"\n\n":"\n\n"+e("#",i)+" "+n+"\n\n"}},u.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},u.list={filter:["ul","ol"],replacement:function(e,n){var t=n.parentNode;return"LI"===t.nodeName&&t.lastElementChild===n?"\n"+e:"\n\n"+e+"\n\n"}},u.listItem={filter:"li",replacement:function(e,n,t){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=t.bulletListMarker+"   ",i=n.parentNode;if("OL"===i.nodeName){var o=i.getAttribute("start"),a=Array.prototype.indexOf.call(i.children,n);r=(o?Number(o)+a:a+1)+".  "}return r+e+(n.nextSibling&&!/\n$/.test(e)?"\n":"")}},u.indentedCodeBlock={filter:function(e,n){return"indented"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n,t){return"\n\n    "+n.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},u.fencedCodeBlock={filter:function(e,n){return"fenced"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(n,t,r){for(var i,o=((t.firstChild.getAttribute("class")||"").match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,l=r.fence.charAt(0),u=3,c=new RegExp("^"+l+"{3,}","gm");i=c.exec(a);)i[0].length>=u&&(u=i[0].length+1);var s=e(l,u);return"\n\n"+s+o+"\n"+a.replace(/\n$/,"")+"\n"+s+"\n\n"}},u.horizontalRule={filter:"hr",replacement:function(e,n,t){return"\n\n"+t.hr+"\n\n"}},u.inlineLink={filter:function(e,n){return"inlined"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n){var t=n.getAttribute("href"),r=c(n.getAttribute("title"));return r&&(r=' "'+r+'"'),"["+e+"]("+t+r+")"}},u.referenceLink={filter:function(e,n){return"referenced"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n,t){var r,i,o=n.getAttribute("href"),a=c(n.getAttribute("title"));switch(a&&(a=' "'+a+'"'),t.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+o+a;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+o+a;break;default:var l=this.references.length+1;r="["+e+"]["+l+"]",i="["+l+"]: "+o+a}return this.references.push(i),r},references:[],append:function(e){var n="";return this.references.length&&(n="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),n}},u.emphasis={filter:["em","i"],replacement:function(e,n,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}},u.strong={filter:["strong","b"],replacement:function(e,n,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}},u.code={filter:function(e){var n=e.previousSibling||e.nextSibling,t="PRE"===e.parentNode.nodeName&&!n;return"CODE"===e.nodeName&&!t},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var n=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",t="`",r=e.match(/`+/gm)||[];-1!==r.indexOf(t);)t+="`";return t+n+e+n+t}},u.image={filter:"img",replacement:function(e,n){var t=c(n.getAttribute("alt")),r=n.getAttribute("src")||"",i=c(n.getAttribute("title"));return r?"!["+t+"]("+r+(i?' "'+i+'"':"")+")":""}},s.prototype={add:function(e,n){this.array.unshift(n)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(n=f(this.array,e,this.options))||(n=f(this._keep,e,this.options))||(n=f(this._remove,e,this.options))?n:this.defaultRule;var n},forEach:function(e){for(var n=0;n<this.array.length;n++)e(this.array[n],n)}};var g="undefined"!=typeof window?window:{};var m,v,A=function(){var e=g.DOMParser,n=!1;try{(new e).parseFromString("","text/html")&&(n=!0)}catch(e){}return n}()?g.DOMParser:(m=function(){},function(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch(n){window.ActiveXObject&&(e=!0)}return e}()?m.prototype.parseFromString=function(e){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(e),n.close(),n}:m.prototype.parseFromString=function(e){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(e),n.close(),n},m);function y(e,n){var r;"string"==typeof e?r=(v=v||new A).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):r=e.cloneNode(!0);return function(e){var n=e.element,t=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(n.firstChild&&!i(n)){for(var o=null,a=!1,l=null,u=h(l,n,i);u!==n;){if(3===u.nodeType||4===u.nodeType){var c=u.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||a||" "!==c[0]||(c=c.substr(1)),!c){u=p(u);continue}u.data=c,o=u}else{if(1!==u.nodeType){u=p(u);continue}t(u)||"BR"===u.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,a=!1):r(u)||i(u)?(o=null,a=!0):o&&(a=!1)}var s=h(l,u,i);l=u,u=s}o&&(o.data=o.data.replace(/ $/,""),o.data||p(o))}}({element:r,isBlock:t,isVoid:i,isPre:n.preformattedCode?N:null}),r}function N(e){return"PRE"===e.nodeName||"CODE"===e.nodeName}function E(e,n){return e.isBlock=t(e),e.isCode="CODE"===e.nodeName||e.parentNode.isCode,e.isBlank=function(e){return!i(e)&&!function(e){return a(e,o)}(e)&&/^\s*$/i.test(e.textContent)&&!function(e){return l(e,r)}(e)&&!function(e){return l(e,o)}(e)}(e),e.flankingWhitespace=function(e,n){if(e.isBlock||n.preformattedCode&&e.isCode)return{leading:"",trailing:""};var t=(r=e.textContent,i=r.match(/^(([ \t\r\n]*)(\s*))[\s\S]*?((\s*?)([ \t\r\n]*))$/),{leading:i[1],leadingAscii:i[2],leadingNonAscii:i[3],trailing:i[4],trailingNonAscii:i[5],trailingAscii:i[6]});var r,i;t.leadingAscii&&T("left",e,n)&&(t.leading=t.leadingNonAscii);t.trailingAscii&&T("right",e,n)&&(t.trailing=t.trailingNonAscii);return{leading:t.leading,trailing:t.trailing}}(e,n),e}function T(e,n,r){var i,o,a;return"left"===e?(i=n.previousSibling,o=/ $/):(i=n.nextSibling,o=/^ /),i&&(3===i.nodeType?a=o.test(i.nodeValue):r.preformattedCode&&"CODE"===i.nodeName?a=!1:1!==i.nodeType||t(i)||(a=o.test(i.textContent))),a}var R=Array.prototype.reduce,C=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function k(e){if(!(this instanceof k))return new k(e);var n={rules:u,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(e,n){return n.isBlock?"\n\n":""},keepReplacement:function(e,n){return n.isBlock?"\n\n"+n.outerHTML+"\n\n":n.outerHTML},defaultReplacement:function(e,n){return n.isBlock?"\n\n"+e+"\n\n":e}};this.options=function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}return e}({},n,e),this.rules=new s(this.options)}function b(e){var n=this;return R.call(e.childNodes,(function(e,t){var r="";return 3===(t=new E(t,n.options)).nodeType?r=t.isCode?t.nodeValue:n.escape(t.nodeValue):1===t.nodeType&&(r=D.call(n,t)),S(e,r)}),"")}function O(e){var n=this;return this.rules.forEach((function(t){"function"==typeof t.append&&(e=S(e,t.append(n.options)))})),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function D(e){var n=this.rules.forNode(e),t=b.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(t=t.trim()),r.leading+n.replacement(t,e,this.options)+r.trailing}function S(e,n){var t=function(e){for(var n=e.length;n>0&&"\n"===e[n-1];)n--;return e.substring(0,n)}(e),r=n.replace(/^\n*/,""),i=Math.max(e.length-t.length,n.length-r.length);return t+"\n\n".substring(0,i)+r}return k.prototype={turndown:function(e){if(!function(e){return null!=e&&("string"==typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(""===e)return"";var n=b.call(this,new y(e,this.options));return O.call(this,n)},use:function(e){if(Array.isArray(e))for(var n=0;n<e.length;n++)this.use(e[n]);else{if("function"!=typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,n){return this.rules.add(e,n),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return C.reduce((function(e,n){return e.replace(n[0],n[1])}),e)}},k}();
}

function engine() {
    (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ejs=f()}})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";var fs=require("fs");var path=require("path");var utils=require("./utils");var scopeOptionWarned=false;var _VERSION_STRING=require("../package.json").version;var _DEFAULT_OPEN_DELIMITER="<";var _DEFAULT_CLOSE_DELIMITER=">";var _DEFAULT_DELIMITER="%";var _DEFAULT_LOCALS_NAME="locals";var _NAME="ejs";var _REGEX_STRING="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";var _OPTS_PASSABLE_WITH_DATA=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"];var _OPTS_PASSABLE_WITH_DATA_EXPRESS=_OPTS_PASSABLE_WITH_DATA.concat("cache");var _BOM=/^\uFEFF/;exports.cache=utils.cache;exports.fileLoader=fs.readFileSync;exports.localsName=_DEFAULT_LOCALS_NAME;exports.promiseImpl=new Function("return this;")().Promise;exports.resolveInclude=function(name,filename,isDir){var dirname=path.dirname;var extname=path.extname;var resolve=path.resolve;var includePath=resolve(isDir?filename:dirname(filename),name);var ext=extname(name);if(!ext){includePath+=".ejs"}return includePath};function resolvePaths(name,paths){var filePath;if(paths.some(function(v){filePath=exports.resolveInclude(name,v,true);return fs.existsSync(filePath)})){return filePath}}function getIncludePath(path,options){var includePath;var filePath;var views=options.views;var match=/^[A-Za-z]+:\\|^\//.exec(path);if(match&&match.length){path=path.replace(/^\/*/,"");if(Array.isArray(options.root)){includePath=resolvePaths(path,options.root)}else{includePath=exports.resolveInclude(path,options.root||"/",true)}}else{if(options.filename){filePath=exports.resolveInclude(path,options.filename);if(fs.existsSync(filePath)){includePath=filePath}}if(!includePath&&Array.isArray(views)){includePath=resolvePaths(path,views)}if(!includePath&&typeof options.includer!=="function"){throw new Error('Could not find the include file "'+options.escapeFunction(path)+'"')}}return includePath}function handleCache(options,template){var func;var filename=options.filename;var hasTemplate=arguments.length>1;if(options.cache){if(!filename){throw new Error("cache option requires a filename")}func=exports.cache.get(filename);if(func){return func}if(!hasTemplate){template=fileLoader(filename).toString().replace(_BOM,"")}}else if(!hasTemplate){if(!filename){throw new Error("Internal EJS error: no file name or template "+"provided")}template=fileLoader(filename).toString().replace(_BOM,"")}func=exports.compile(template,options);if(options.cache){exports.cache.set(filename,func)}return func}function tryHandleCache(options,data,cb){var result;if(!cb){if(typeof exports.promiseImpl=="function"){return new exports.promiseImpl(function(resolve,reject){try{result=handleCache(options)(data);resolve(result)}catch(err){reject(err)}})}else{throw new Error("Please provide a callback function")}}else{try{result=handleCache(options)(data)}catch(err){return cb(err)}cb(null,result)}}function fileLoader(filePath){return exports.fileLoader(filePath)}function includeFile(path,options){var opts=utils.shallowCopy({},options);opts.filename=getIncludePath(path,opts);if(typeof options.includer==="function"){var includerResult=options.includer(path,opts.filename);if(includerResult){if(includerResult.filename){opts.filename=includerResult.filename}if(includerResult.template){return handleCache(opts,includerResult.template)}}}return handleCache(opts)}function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n");var start=Math.max(lineno-3,0);var end=Math.min(lines.length,lineno+3);var filename=esc(flnm);var context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line}).join("\n");err.path=filename;err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message;throw err}function stripSemi(str){return str.replace(/;(\s*$)/,"$1")}exports.compile=function compile(template,opts){var templ;if(opts&&opts.scope){if(!scopeOptionWarned){console.warn("`scope` option is deprecated and will be removed in EJS 3");scopeOptionWarned=true}if(!opts.context){opts.context=opts.scope}delete opts.scope}templ=new Template(template,opts);return templ.compile()};exports.render=function(template,d,o){var data=d||{};var opts=o||{};if(arguments.length==2){utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA)}return handleCache(opts,template)(data)};exports.renderFile=function(){var args=Array.prototype.slice.call(arguments);var filename=args.shift();var cb;var opts={filename:filename};var data;var viewOpts;if(typeof arguments[arguments.length-1]=="function"){cb=args.pop()}if(args.length){data=args.shift();if(args.length){utils.shallowCopy(opts,args.pop())}else{if(data.settings){if(data.settings.views){opts.views=data.settings.views}if(data.settings["view cache"]){opts.cache=true}viewOpts=data.settings["view options"];if(viewOpts){utils.shallowCopy(opts,viewOpts)}}utils.shallowCopyFromList(opts,data,_OPTS_PASSABLE_WITH_DATA_EXPRESS)}opts.filename=filename}else{data={}}return tryHandleCache(opts,data,cb)};exports.Template=Template;exports.clearCache=function(){exports.cache.reset()};function Template(text,opts){opts=opts||{};var options={};this.templateText=text;this.mode=null;this.truncate=false;this.currentLine=1;this.source="";options.client=opts.client||false;options.escapeFunction=opts.escape||opts.escapeFunction||utils.escapeXML;options.compileDebug=opts.compileDebug!==false;options.debug=!!opts.debug;options.filename=opts.filename;options.openDelimiter=opts.openDelimiter||exports.openDelimiter||_DEFAULT_OPEN_DELIMITER;options.closeDelimiter=opts.closeDelimiter||exports.closeDelimiter||_DEFAULT_CLOSE_DELIMITER;options.delimiter=opts.delimiter||exports.delimiter||_DEFAULT_DELIMITER;options.strict=opts.strict||false;options.context=opts.context;options.cache=opts.cache||false;options.rmWhitespace=opts.rmWhitespace;options.root=opts.root;options.includer=opts.includer;options.outputFunctionName=opts.outputFunctionName;options.localsName=opts.localsName||exports.localsName||_DEFAULT_LOCALS_NAME;options.views=opts.views;options.async=opts.async;options.destructuredLocals=opts.destructuredLocals;options.legacyInclude=typeof opts.legacyInclude!="undefined"?!!opts.legacyInclude:true;if(options.strict){options._with=false}else{options._with=typeof opts._with!="undefined"?opts._with:true}this.opts=options;this.regex=this.createRegex()}Template.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"};Template.prototype={createRegex:function(){var str=_REGEX_STRING;var delim=utils.escapeRegExpChars(this.opts.delimiter);var open=utils.escapeRegExpChars(this.opts.openDelimiter);var close=utils.escapeRegExpChars(this.opts.closeDelimiter);str=str.replace(/%/g,delim).replace(/</g,open).replace(/>/g,close);return new RegExp(str)},compile:function(){var src;var fn;var opts=this.opts;var prepended="";var appended="";var escapeFn=opts.escapeFunction;var ctor;var sanitizedFilename=opts.filename?JSON.stringify(opts.filename):"undefined";if(!this.source){this.generateSource();prepended+='  var __output = "";\n'+"  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";if(opts.outputFunctionName){prepended+="  var "+opts.outputFunctionName+" = __append;"+"\n"}if(opts.destructuredLocals&&opts.destructuredLocals.length){var destructuring="  var __locals = ("+opts.localsName+" || {}),\n";for(var i=0;i<opts.destructuredLocals.length;i++){var name=opts.destructuredLocals[i];if(i>0){destructuring+=",\n  "}destructuring+=name+" = __locals."+name}prepended+=destructuring+";\n"}if(opts._with!==false){prepended+="  with ("+opts.localsName+" || {}) {"+"\n";appended+="  }"+"\n"}appended+="  return __output;"+"\n";this.source=prepended+this.source+appended}if(opts.compileDebug){src="var __line = 1"+"\n"+"  , __lines = "+JSON.stringify(this.templateText)+"\n"+"  , __filename = "+sanitizedFilename+";"+"\n"+"try {"+"\n"+this.source+"} catch (e) {"+"\n"+"  rethrow(e, __lines, __filename, __line, escapeFn);"+"\n"+"}"+"\n"}else{src=this.source}if(opts.client){src="escapeFn = escapeFn || "+escapeFn.toString()+";"+"\n"+src;if(opts.compileDebug){src="rethrow = rethrow || "+rethrow.toString()+";"+"\n"+src}}if(opts.strict){src='"use strict";\n'+src}if(opts.debug){console.log(src)}if(opts.compileDebug&&opts.filename){src=src+"\n"+"//# sourceURL="+sanitizedFilename+"\n"}try{if(opts.async){try{ctor=new Function("return (async function(){}).constructor;")()}catch(e){if(e instanceof SyntaxError){throw new Error("This environment does not support async/await")}else{throw e}}}else{ctor=Function}fn=new ctor(opts.localsName+", escapeFn, include, rethrow",src)}catch(e){if(e instanceof SyntaxError){if(opts.filename){e.message+=" in "+opts.filename}e.message+=" while compiling ejs\n\n";e.message+="If the above error is not helpful, you may want to try EJS-Lint:\n";e.message+="https://github.com/RyanZim/EJS-Lint";if(!opts.async){e.message+="\n";e.message+="Or, if you meant to create an async function, pass `async: true` as an option."}}throw e}var returnedFn=opts.client?fn:function anonymous(data){var include=function(path,includeData){var d=utils.shallowCopy({},data);if(includeData){d=utils.shallowCopy(d,includeData)}return includeFile(path,opts)(d)};return fn.apply(opts.context,[data||{},escapeFn,include,rethrow])};if(opts.filename&&typeof Object.defineProperty==="function"){var filename=opts.filename;var basename=path.basename(filename,path.extname(filename));try{Object.defineProperty(returnedFn,"name",{value:basename,writable:false,enumerable:false,configurable:true})}catch(e){}}return returnedFn},generateSource:function(){var opts=this.opts;if(opts.rmWhitespace){this.templateText=this.templateText.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")}this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var self=this;var matches=this.parseTemplateText();var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;if(matches&&matches.length){matches.forEach(function(line,index){var closing;if(line.indexOf(o+d)===0&&line.indexOf(o+d+d)!==0){closing=matches[index+2];if(!(closing==d+c||closing=="-"+d+c||closing=="_"+d+c)){throw new Error('Could not find matching close tag for "'+line+'".')}}self.scanLine(line)})}},parseTemplateText:function(){var str=this.templateText;var pat=this.regex;var result=pat.exec(str);var arr=[];var firstPos;while(result){firstPos=result.index;if(firstPos!==0){arr.push(str.substring(0,firstPos));str=str.slice(firstPos)}arr.push(result[0]);str=str.slice(result[0].length);result=pat.exec(str)}if(str){arr.push(str)}return arr},_addOutput:function(line){if(this.truncate){line=line.replace(/^(?:\r\n|\r|\n)/,"");this.truncate=false}if(!line){return line}line=line.replace(/\\/g,"\\\\");line=line.replace(/\n/g,"\\n");line=line.replace(/\r/g,"\\r");line=line.replace(/"/g,'\\"');this.source+='    ; __append("'+line+'")'+"\n"},scanLine:function(line){var self=this;var d=this.opts.delimiter;var o=this.opts.openDelimiter;var c=this.opts.closeDelimiter;var newLineCount=0;newLineCount=line.split("\n").length-1;switch(line){case o+d:case o+d+"_":this.mode=Template.modes.EVAL;break;case o+d+"=":this.mode=Template.modes.ESCAPED;break;case o+d+"-":this.mode=Template.modes.RAW;break;case o+d+"#":this.mode=Template.modes.COMMENT;break;case o+d+d:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(o+d+d,o+d)+'")'+"\n";break;case d+d+c:this.mode=Template.modes.LITERAL;this.source+='    ; __append("'+line.replace(d+d+c,d+c)+'")'+"\n";break;case d+c:case"-"+d+c:case"_"+d+c:if(this.mode==Template.modes.LITERAL){this._addOutput(line)}this.mode=null;this.truncate=line.indexOf("-")===0||line.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case Template.modes.EVAL:case Template.modes.ESCAPED:case Template.modes.RAW:if(line.lastIndexOf("//")>line.lastIndexOf("\n")){line+="\n"}}switch(this.mode){case Template.modes.EVAL:this.source+="    ; "+line+"\n";break;case Template.modes.ESCAPED:this.source+="    ; __append(escapeFn("+stripSemi(line)+"))"+"\n";break;case Template.modes.RAW:this.source+="    ; __append("+stripSemi(line)+")"+"\n";break;case Template.modes.COMMENT:break;case Template.modes.LITERAL:this._addOutput(line);break}}else{this._addOutput(line)}}if(self.opts.compileDebug&&newLineCount){this.currentLine+=newLineCount;this.source+="    ; __line = "+this.currentLine+"\n"}}};exports.escapeXML=utils.escapeXML;exports.__express=exports.renderFile;exports.VERSION=_VERSION_STRING;exports.name=_NAME;if(typeof window!="undefined"){window.ejs=exports}},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(require,module,exports){"use strict";var regExpChars=/[|\\{}()[\]^$+*?.]/g;exports.escapeRegExpChars=function(string){if(!string){return""}return String(string).replace(regExpChars,"\\$&")};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"};var _MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var escapeFuncStr="var _ENCODE_HTML_RULES = {\n"+'      "&": "&amp;"\n'+'    , "<": "&lt;"\n'+'    , ">": "&gt;"\n'+'    , \'"\': "&#34;"\n'+'    , "\'": "&#39;"\n'+"    }\n"+"  , _MATCH_HTML = /[&<>'\"]/g;\n"+"function encode_char(c) {\n"+"  return _ENCODE_HTML_RULES[c] || c;\n"+"};\n";exports.escapeXML=function(markup){return markup==undefined?"":String(markup).replace(_MATCH_HTML,encode_char)};exports.escapeXML.toString=function(){return Function.prototype.toString.call(this)+";\n"+escapeFuncStr};exports.shallowCopy=function(to,from){from=from||{};for(var p in from){to[p]=from[p]}return to};exports.shallowCopyFromList=function(to,from,list){for(var i=0;i<list.length;i++){var p=list[i];if(typeof from[p]!="undefined"){to[p]=from[p]}}return to};exports.cache={_data:{},set:function(key,val){this._data[key]=val},get:function(key){return this._data[key]},remove:function(key){delete this._data[key]},reset:function(){this._data={}}};exports.hyphenToCamel=function(str){return str.replace(/-[a-z]/g,function(match){return match[1].toUpperCase()})}},{}],3:[function(require,module,exports){},{}],4:[function(require,module,exports){(function(process){function normalizeArray(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up--;up){parts.unshift("..")}}return parts}exports.resolve=function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:process.cwd();if(typeof path!=="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){continue}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=path.charAt(0)==="/"}resolvedPath=normalizeArray(filter(resolvedPath.split("/"),function(p){return!!p}),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."};exports.normalize=function(path){var isAbsolute=exports.isAbsolute(path),trailingSlash=substr(path,-1)==="/";path=normalizeArray(filter(path.split("/"),function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path};exports.isAbsolute=function(path){return path.charAt(0)==="/"};exports.join=function(){var paths=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(paths,function(p,index){if(typeof p!=="string"){throw new TypeError("Arguments to path.join must be strings")}return p}).join("/"))};exports.relative=function(from,to){from=exports.resolve(from).substr(1);to=exports.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")};exports.sep="/";exports.delimiter=":";exports.dirname=function(path){if(typeof path!=="string")path=path+"";if(path.length===0)return".";var code=path.charCodeAt(0);var hasRoot=code===47;var end=-1;var matchedSlash=true;for(var i=path.length-1;i>=1;--i){code=path.charCodeAt(i);if(code===47){if(!matchedSlash){end=i;break}}else{matchedSlash=false}}if(end===-1)return hasRoot?"/":".";if(hasRoot&&end===1){return"/"}return path.slice(0,end)};function basename(path){if(typeof path!=="string")path=path+"";var start=0;var end=-1;var matchedSlash=true;var i;for(i=path.length-1;i>=0;--i){if(path.charCodeAt(i)===47){if(!matchedSlash){start=i+1;break}}else if(end===-1){matchedSlash=false;end=i+1}}if(end===-1)return"";return path.slice(start,end)}exports.basename=function(path,ext){var f=basename(path);if(ext&&f.substr(-1*ext.length)===ext){f=f.substr(0,f.length-ext.length)}return f};exports.extname=function(path){if(typeof path!=="string")path=path+"";var startDot=-1;var startPart=0;var end=-1;var matchedSlash=true;var preDotState=0;for(var i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(code===47){if(!matchedSlash){startPart=i+1;break}continue}if(end===-1){matchedSlash=false;end=i+1}if(code===46){if(startDot===-1)startDot=i;else if(preDotState!==1)preDotState=1}else if(startDot!==-1){preDotState=-1}}if(startDot===-1||end===-1||preDotState===0||preDotState===1&&startDot===end-1&&startDot===startPart+1){return""}return path.slice(startDot,end)};function filter(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i])}return res}var substr="ab".substr(-1)==="b"?function(str,start,len){return str.substr(start,len)}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len)}}).call(this,require("_process"))},{_process:5}],5:[function(require,module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){cachedSetTimeout=setTimeout}else{cachedSetTimeout=defaultSetTimout}}catch(e){cachedSetTimeout=defaultSetTimout}try{if(typeof clearTimeout==="function"){cachedClearTimeout=clearTimeout}else{cachedClearTimeout=defaultClearTimeout}}catch(e){cachedClearTimeout=defaultClearTimeout}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0)}if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0)}try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker)}if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker)}try{return cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=false;runClearTimeout(timeout)}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]};process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},{}],6:[function(require,module,exports){module.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.6",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.6.1"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.4","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"mocha"}}},{}]},{},[1])(1)});
}

const DEFAULT_SETTINGS = {
    config    : 'simpread_config.json',
    host      : 'localhost',
    port      : 7027,
    count     : '10',
    override  : true,
    folder    : 'SimpRead',
    path      : '',
    annote    : true,
    frequency : '-1',
    tag_prefix: '#',
    tag_suffix: ' ',
    format    : '{"headingStyle":"atx","hr":"---","bulletListMarker":"-"}',
    ext_uri   : '',
    title     : '{{id}}-{{title}}{{mode}}',
    template  : `---
title: "srAnnote@{{title}}"
alias: [<% if ( unread.note && unread.title != unread.note ) { %>"srAnnote@{{note}}",<% } %>"srAnnote@{{title}}"]
type: Simpread
tag: {{tags}}
---

# {{title}}
<% if ( unread.desc ) { %>
> [!summary] 描述  
> <%- unread.desc %>
<% } %>
> [!md] Metadata  
> **标题**:: "{{title}}"  
> **日期**:: [[{{create|yyyy-mm-dd}}]]  
<% if ( unread.refs ) { -%>
> **外部引用**:: {{refs}}  
<% } %>
## Annotations
<% if ( unread.annotations.length > 0 ) { %>
{{annotations}}
<% } %>
`,
    annotation: `<%
let colors = [ '#B4D9FB', '#ffeb3b', '#a2e9f2', '#a1e0ff', '#a8ea68', '#ffb7da' ],
    color  = colors[ annote.color ];
-%>
> [📌](<{{an_int_uri}}>) <mark style="background-color: <%= color %>">Highlight</mark> {{an_tags}}
{{{html_format|>|{{an_html}}}}}
<% if (annote.note) { -%>
> - {{an_note}}
<% } %>
^sran-{{an_id}}


`
}

const DEFAULT_COMMANDS = [{ title: '↩️  返回上级菜单查看全部命令', desc: '', idx: 'all' }, { title: '🗃  打开高级查询对话框', desc: '', idx: 'search' }, { title: '┅', desc: '', idx: 'divider' }];

class CommandsSuggest extends obsidian.SuggestModal {

    constructor() {
        super( ...arguments );
        this.settings   = arguments[1];
        this.template2  = arguments[2];
        this.safe       = arguments[3];
        this.parseTitle = arguments[4];
        this.commands    = [
            { title: '📗  查询今日的稍后读', desc: '', type: 'today' },
            { title: '📘  查询昨日的稍后读', desc: '', type: 'yestoday' },
            { title: '📙  查询本周的稍后读', desc: '', type: 'week' },
        ];
        this.filter     = arguments[6];
        this.unrdist    = arguments[7];
    }

    getSuggestions( query ) {
        return this.commands.filter( command =>
            command.title.toLowerCase().includes( query.toLowerCase() )
        );
    }

    renderSuggestion( command, el ) {
        el.createEl( 'div',   { text: command.title });
        el.createEl( 'small', { text: command.desc  });
    }

    onChooseSuggestion( command, evt ) {
        let arr = this.filter( command.type , this.unrdist );
        arr     = DEFAULT_COMMANDS.concat( arr );
        new UnreadSuggest( this.app, this.settings, this.template2, this.safe, this.parseTitle, arr, this.filter, this.unrdist ).open();
    }
}

class UnreadSuggest extends obsidian.SuggestModal {

    constructor() {
        super( ...arguments );
        this.settings   = arguments[1];
        this.template2  = arguments[2];
        this.safe       = arguments[3];
        this.parseTitle = arguments[4];
        this.unreads    = arguments[5];
        this.filter     = arguments[6];
        this.unrdist    = arguments[7];
    }

    getSuggestions( query ) {
        return this.unreads.filter( unread =>
            unread.title.toLowerCase().includes( query.toLowerCase() )
        );
    }

    renderSuggestion( unread, el ) {
        el.createEl( 'div',   { text: unread.title });
        el.createEl( 'small', { text: unread.desc  });
    }

    onChooseSuggestion( unread, evt ) {
        if ( unread.idx == 'divider' ) return;
        if ( unread.idx == 'all' || unread.idx == 'search' ) {
            unread.idx == 'all'    && new CommandsSuggest( this.app, this.settings, this.template2, this.safe, this.parseTitle, [], this.filter, this.unrdist ).open();
            unread.idx == 'search' && new SearchModal( this.app, this.settings, this.template2, this.safe, this.parseTitle, this.unrdist, this.filter ).open();
            return;
        }
        if ( !unread.annotations ) unread.annotations = [];
        try {
            this.template2( unread, this.unrdist, md => {
                const path  = this.app.vault.adapter.basePath + '/' + this.settings.folder,
                      title = this.safe( this.parseTitle( this.settings.title, unread ));
                this.app.vault.adapter.fs.writeFileSync( path + '/' + title + '.md', md );
            });
        } catch ( error ) {
            console.error( 'current unread write error: ', error, unread )
        }
    }
}

class SearchModal extends obsidian.Modal {

    constructor() {
        super( ...arguments );
        this.arguments = arguments;
        this.settings   = arguments[1];
        this.template2  = arguments[2];
        this.safe       = arguments[3];
        this.parseTitle = arguments[4];
        this.unrdist    = arguments[5];
        this.filter     = arguments[6];
    }

    onOpen() {
        const { contentEl } = this;

        contentEl.createEl( 'h2', { text: 'Advanced search' });

        new obsidian.Setting( contentEl )
            .setName( 'Search' )
            .setDesc( 'desc, note, tag, annote and any' )
            .addText( text =>
                text.onChange( value => {
                    this.result = value;
                }));

        new obsidian.Setting( contentEl )
            .addButton( btn =>
                btn
                .setButtonText( 'Search' )
                .setCta()
                .onClick(() => {
                    let arr = this.filter( this.result.includes( ':' ) ? this.result : 'any', this.unrdist, this.result );
                    arr     = DEFAULT_COMMANDS.concat( arr );
                    new UnreadSuggest( this.app, this.settings, this.template2, this.safe, this.parseTitle, arr, this.filter, this.unrdist ).open();
                    this.close();
                }));
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}

class SimpReadPlugin extends obsidian.Plugin {

    constructor() {
        super( ...arguments );
        this.scheduleInterval = null;
        this.srv = null;
        this.registerCommands();
        engine();
        setTimeout( () => this.server(), 400 )
    }

    registerCommands() {
        this.addCommand({
            id: "sr-command-today",
            name: "查询今日的稍后读",
            callback: () => {
                this.search( 'today' );
            }
        });
        this.addCommand({
            id: "sr-command-yestoday",
            name: "查询昨日的稍后读",
            callback: () => {
                this.search( 'yestoday' );
            }
        });
        this.addCommand({
            id: "sr-command-week",
            name: "查询本周的稍后读",
            callback: () => {
                this.search( 'week' );
            }
        });
        this.addCommand({
            id: "sr-command-search",
            name: "高级查询",
            callback: () => {
                this.search( 'search' );
            }
        });
    }

    search( type ) {
        this.config( () => {
            if ( type == 'search' ) {
                new SearchModal( this.app, this.settings, this.template2, this.safe, this.parseTitle, this.unrdist, this.filter ).open();
            } else {
                let arr = this.filter( type, this.unrdist );
                arr     = DEFAULT_COMMANDS.concat( arr );
                new UnreadSuggest( this.app, this.settings, this.template2, this.safe, this.parseTitle, arr, this.filter, this.unrdist ).open();
            }
        });
    }

    filter(type,arr,str){if(type=="today"){arr=arr.filter(item=>{const today=new Date(),date=new Date(item.create.replace(/年|月/ig,"-").replace("日",""));return today.getFullYear()==date.getFullYear()&&today.getMonth()==date.getMonth()&&today.getDate()==date.getDate()})}else if(type=="yestoday"){arr=arr.filter(item=>{const now=new Date(),year=now.getFullYear(),month=now.getMonth()+1,day=now.getDate(),oneday=24*60*60*1000,today=+new Date(`${year}-${month}-${day}00:00:00`),yestoday=+new Date(`${year}-${month}-${day}23:59:59`)-oneday,date=+new Date(item.create.replace(/年|月/ig,"-").replace("日",""));return date+oneday>yestoday&&date<today})}else if(type=="week"){arr=arr.filter(item=>{const now=new Date(),year=now.getFullYear(),month=now.getMonth()+1,day=now.getDate(),week=7*24*60*60*1000,today=+new Date(`${year}-${month}-${day}23:59:59`),date=+new Date(item.create.replace(/年|月/ig,"-").replace("日",""));return date+week>today})}else if(type=="sunday"){const now=new Date(),nowTime=now.getTime(),day=now.getDay()||7,oneday=24*60*60*1000,format=(date,time)=>{date=new Date(date);const year=date.getFullYear(),month=date.getMonth()+1,day=date.getDate();return+new Date(`${year}-${month}-${day}${time}`)},monday=format(nowTime-(day-1)*oneday,"00:00:00"),sunday=format(nowTime+(7-day)*oneday,"23:59:59");arr=arr.filter(item=>{const date=+new Date(item.create.replace(/年|月/ig,"-").replace("日",""));return date>=monday&&date<=sunday})}else if(type=="daily"){arr=arr.filter(item=>{const now=+new Date(),oneday=24*60*60*1000*1,date=+new Date(item.create.replace(/年|月/ig,"-").replace("日",""));return now-date<=oneday})}else if(type=="nohighlight"){arr=arr.filter(item=>!item.annotations||item.annotations.length==0)}else if(type=="notags"){arr=arr.filter(item=>!item.tags||item.tags.length==0)}else if(type=="unarchive"){arr=arr.filter(item=>!item.archive)}else if(type=="archive"){arr=arr.filter(item=>item.archive)}else if(type=="share"){arr=arr.filter(item=>item.share)}else if(type=="annoate"){let list=[];arr.forEach(unread=>{const find=annotations=>{let include=false;annotations&&annotations.forEach(t=>{t.note==undefined&&(t.note="");(t.note=="")&&(include=true)});include&&list.push(unread)};find(unread.annotations)});arr=list}else if(type=="img"||type=="code"){let list=[];arr.forEach(unread=>{const find=annotations=>{let include=false;annotations&&annotations.forEach(t=>t.type==type&&(include=true));include&&list.push(unread)};find(unread.annotations)});arr=list}else if(type=="note"){let list=[];arr.forEach(unread=>{const find=annotations=>{let include=false;annotations&&annotations.forEach(t=>t.note&&t.note.length>0&&(include=true));include&&list.push(unread)};unread.note&&unread.note.length>0&&list.push(unread);find(unread.annotations)});arr=list}else if(type=="any"){let list=[];arr.forEach(unread=>{const find=annotations=>{let include=false;annotations&&annotations.forEach(t=>{!t.note&&(t.note='');!t.tags&&(t.tags=[]);if(t.note.includes(str)||t.text.includes(str)||t.tags.includes(str)){include=true}});include&&list.push(unread)};!unread.desc&&(unread.desc='');!unread.note&&(unread.note='');!unread.tags&&(unread.tags=[]);!unread.annotations&&(unread.annotations=[]);if(unread.title.includes(str)||unread.desc.includes(str)||unread.note.includes(str)||unread.tags.includes(str)){list.push(unread)}else find(unread.annotations)});arr=list}else if(type.includes(':')){let list=[];str=type.split(':')[1];type=type.split(':')[0];arr.forEach(unread=>{const find=annotations=>{let include=false;annotations&&annotations.forEach(t=>{type=='annote'&&(type='text');type=='tag'&&(type='tags');!t.note&&(t.note='');!t.tags&&(t.tags=[]);if(t[type].includes(str)){include=true}});include&&list.push(unread)};!unread.desc&&(unread.desc='');!unread.note&&(unread.note='');!unread.tags&&(unread.tags=[]);!unread.annotations&&(unread.annotations=[]);if(['title','desc','note','tags','tag'].includes(type)){type=='tag'&&(type='tags');if(unread[type].includes(str)){list.push(unread)}}if(['note','tags','tag','annote','text'].includes(type)){find(unread.annotations)}});arr=list}return arr}

    server() {
        const requestListener = ( req, res ) => {
            if ( req.method === 'GET' ) {
                res.writeHead( 200 );
                res.end( 'SimpRead Sync server run' );
            } else if ( req.method === 'POST' ) {
                let body = '';
                req.on( 'data', chunk => {
                    body += chunk;
                });
                req.on( 'end', () => {
                    try {
                        body = JSON.parse( body );
                        console.log( 'simpread post data is', body )
                        this.read( body.title, ( file, md ) => this.update( file, md, body ) );
                        res.setHeader( 'Content-Type', 'application/json' );
                        res.writeHead( 200 );
                        res.end( `{ "code": 200, "message": "simpread data post success" }` );
                    } catch ( error ) {
                        console.error( error )
                        res.setHeader( 'Content-Type', 'application/json' );
                        res.writeHead( 403 );
                        res.end( `{ "code": 403, "message": "${ error.message }" }` );
                    }
                });
            }
        };
        this.srv = http.createServer( requestListener );
        this.srv.listen( this.settings.port, this.settings.host, () => {
            console.log( `Simpread Sync server is running on http://${this.settings.host}:${this.settings.port}` );
        });
    }

    onload() {
        return __awaiter( this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addSettingTab( new SimpReadSettingTab( this.app, this ));
            yield this.schedule();
            yield this.config();
        });
    }

    onunload() {
        this.srv.close();
        return;
    }

    loadSettings() {
        return __awaiter( this, void 0, void 0, function* () {
            this.settings = Object.assign( {}, DEFAULT_SETTINGS, yield this.loadData() );
        });
    }

    saveSettings() {
        return __awaiter( this, void 0, void 0, function* () {
            yield this.saveData( this.settings );
        });
    }

    config( callback ) {
        this.unrdist = [];
        const path = this.app.vault.adapter.path.resolve( this.settings.path, DEFAULT_SETTINGS.config );
        this.app.vault.adapter.fs.readFile( path, 'utf8', ( err, result ) => {
            if ( !err ) {
                const config  = JSON.parse( result ),
                      unrdist = config.unrdist;
                if ( unrdist && unrdist.length > 0 ) {
                    this.unrdist = [ ...unrdist ];
                    callback && callback();
                }
            }
        });
    }

    sync() {
        if ( this.settings.path.trim() == '/' ) {
            this.notice( 'SimpRead config path not empty', true, 4, true );
            return;
        }
        const path = this.app.vault.adapter.path.resolve( this.settings.path, DEFAULT_SETTINGS.config );
        this.app.vault.adapter.fs.readFile( path, 'utf8', ( err, result ) => {
            if ( !err ) {
                const config  = JSON.parse( result ),
                      unrdist = config.unrdist;
                if ( unrdist && unrdist.length > 0 ) this.write( unrdist );
                else this.notice( 'Not found unread list', true, 4, true );
            } else this.notice( 'Not found simpead_config.json', true, 4, true );
        });
    }

    safe( title ) {
        return title.replace( /:/ig, '：' )
                    .replace( /\?/ig, '？' )
                    .replace( /\/|\*|\||<|>|\.|,|=/ig, '_' )
                    .replace( /\\/ig, '-' )
                    .replace( /%/ig, '％' )
                    .replace( /;/ig, '；' )
                    .replace( /"/ig, '' );
    }

    parseTitle( title, unread , mode = '@annote' ) {
        return title = title && unread
                        ? title
                            .replace( /{{id}}/ig,               unread.idx )
                            .replace( /{{title}}/ig,            unread.title )
                            .replace( /{{un_title}}/ig,         unread.title )
                            .replace( /{{timestamp}}/ig,        unread.create.replace( /年|月|日|:| /ig, '' ) )
                            .replace( /{{note}}/ig,             unread.note || unread.title )
                            .replace( /{{mode}}/ig,             mode )
                        : unread ? unread.title : title;
    }

    update( file, md, body ) {
        /*
        const parseTags = tags => {
            let html = '';
            this.settings.tag_suffix == '\\n' && ( this.settings.tag_suffix = '\n' );
            tags && tags.forEach( tag => html += this.settings.tag_prefix + `${ tag.replace( / /ig, '_' ) }` + this.settings.tag_suffix );
            return html.trim();
        }
        let diff    = body.diff[0],
            id      = diff.id,
            props   = diff.props,
            start   = `%sran_id=${ id }_start%`,
            end     = `%sran_id=${ id }_end%`,
            startId = md.indexOf( start ),
            endId   = md.indexOf( end ),
            str     = md.substring( startId, endId ),
            new_str = str;
        if ( props == 'note' ) {
            new_str = str.replace( diff.old, diff.value );
        } else if ( props == 'tags' ) {
            let old   = parseTags( diff.old ),
                value = parseTags( diff.value );
            md        = md.replace( old, value );
        } else if ( props == 'color' ) {
            let colors = [ '#B4D9FB', '#ffeb3b', '#a2e9f2', '#a1e0ff', '#a8ea68', '#ffb7da' ],
                old    = colors[ diff.old ],
                value  = colors[ diff.value ];
            console.log( 'asffasdf', old, value )
            md         = md.replace( old, value );
        }
        md          = md.replace( str, new_str );
        console.log( md )
        */
        this.app.vault.adapter.fs.writeFileSync( file, body.md );
    }

    read( title, callback ) {
        const path  = this.app.vault.adapter.basePath + '/' + this.settings.folder,
              file  = this.app.vault.adapter.path.resolve( path, this.safe( title ) + '.md' );
        this.app.vault.adapter.fs.readFile( file, 'utf8', ( err, result ) => {
            if ( !err ) {
                callback( file, result );
            } else {
                callback( file, undefined );
            }
        });
    }

    write( unrdist ) {
        const path   = this.app.vault.adapter.basePath + '/' + this.settings.folder,
              exists = this.app.vault.adapter.fs.existsSync( path );
        if ( !exists ) {
            this.app.vault.adapter.fs.mkdirSync( path );
        }
        const files  = /{{id}}|{{timestamp}}/.test( this.settings.title ) ? this.app.vault.adapter.fs.readdirSync( path , { encoding:'utf8' }) : [];
        this.unrdist = [ ...unrdist ];
        if ( this.settings.count == 0 ) {
            unrdist = unrdist.reverse();
        } else {
            unrdist = unrdist.splice( 0, parseInt( this.settings.count ));
            unrdist = unrdist.reverse();
        }
        for ( let i = 0; i < unrdist.length; i++ ) {
            if ( i >= unrdist.length - 1 ) {
                this.notify && this.notice( 'Write all files complete.', true, 4, true);
                this.notify = false;
            }
            const unread = unrdist[i];
            if ( unread ) {
                if ( this.settings.annote && (( unread.annotations && unread.annotations.length == 0 ) || !unread.annotations )) {
                    continue;
                }
                const file = this.app.vault.adapter.path.resolve( path, this.safe( unread.title ) + '.md' );
                const existfiles = () => {
                    const idx       = unread.idx,
                          timestamp = unread.create.replace( /年|月|日|:| /ig, '' );
                    let   existfile = [];
                    /{{id}}/.test( this.settings.title ) && ( existfile = files.filter( item => {
                        const arr = item.match( /^\d+/ );
                        if ( arr && arr.length > 0 ) {
                            return arr[0] == idx;
                        }
                    }));
                    /{{timestamp}}/.test( this.settings.title ) && ( existfile = files.filter( item => {
                        const arr = item.match( /^\d+/ );
                        if ( arr && arr.length > 0 ) {
                            return arr[0] == timestamp;
                        }
                    }));
                    return existfile;
                },
                somefiles = existfiles();
                if ( !this.settings.override ) {
                    if ( files.length > 0 && somefiles.length > 0 ) {
                        continue;
                    } else if ( this.app.vault.adapter.fs.existsSync( file )) {
                        continue;
                    }
                }
                if ( !unread.annotations ) unread.annotations = [];
                try {
                    this.template2( unread, this.unrdist, md => {
                        const title = this.safe( this.parseTitle( this.settings.title, unread ));
                        // when override remove exist file
                        somefiles.forEach( remove => this.app.vault.adapter.fs.unlinkSync( path + '/' + remove ));
                        this.app.vault.adapter.fs.writeFileSync( path + '/' + title + '.md', md );
                    });
                } catch ( error ) {
                    console.error( 'current unread write error: ', error, unread )
                }
            }
        }
    }

    template2(unread,unrdist,global_callback){const plugin_storage=this.settings;function markdown(data,name,callback,is_return=false,options=""){try{options=JSON.parse(options||"{}")}catch(error){options={}}const turndownService=new TurndownService()(options),md=turndownService.turndown(data);callback&&callback(md)}function AnnoteMDTemplate2(md,md_opts,unread,annote,arr,parseMD,callback){const fmtDate=()=>{var dateFormat=function(){var token=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,timezone=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,timezoneClip=/[^-+\dA-Z]/g,pad=function(val,len){val=String(val);len=len||2;while(val.length<len)val="0"+val;return val};return function(date,mask,utc){var dF=dateFormat;if(arguments.length==1&&Object.prototype.toString.call(date)=="[object String]"&&!/\d/.test(date)){mask=date;date=undefined}date=date?new Date(date):new Date;if(isNaN(date))throw SyntaxError("invalid date");mask=String(dF.masks[mask]||mask||dF.masks["default"]);if(mask.slice(0,4)=="UTC:"){mask=mask.slice(4);utc=true}var _=utc?"getUTC":"get",d=date[_+"Date"](),D=date[_+"Day"](),m=date[_+"Month"](),y=date[_+"FullYear"](),H=date[_+"Hours"](),M=date[_+"Minutes"](),s=date[_+"Seconds"](),L=date[_+"Milliseconds"](),o=utc?0:date.getTimezoneOffset(),flags={d:d,dd:pad(d),ddd:dF.i18n.dayNames[D],dddd:dF.lang.dayNames.long[D],m:m+1,mm:pad(m+1),mmm:dF.i18n.monthNames[m],mmmm:dF.lang.monthNames.long[m],yy:String(y).slice(2),yyyy:y,h:H%12||12,hh:pad(H%12||12),H:H,HH:pad(H),M:M,MM:pad(M),s:s,ss:pad(s),l:pad(L,3),L:pad(L>99?Math.round(L/10):L),t:H<12?"a":"p",tt:H<12?"am":"pm",T:H<12?"A":"P",TT:H<12?"AM":"PM",Z:utc?"UTC":(String(date).match(timezone)||[""]).pop().replace(timezoneClip,""),o:(o>0?"-":"+")+pad(Math.floor(Math.abs(o)/60)*100+Math.abs(o)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10]};return mask.replace(token,function($0){return $0 in flags?flags[$0]:$0.slice(1,$0.length-1)})}}();dateFormat.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};dateFormat.lang={dayNames:{short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],zh:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],},monthNames:{short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"],zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],}};dateFormat.i18n={dayNames:dateFormat.lang.dayNames.short,monthNames:dateFormat.lang.monthNames.short,};dateFormat.setLocal=function(local){dateFormat.i18n={dayNames:dateFormat.lang.dayNames[local],monthNames:dateFormat.lang.monthNames[local],}};return dateFormat},fmtDate2=(x,y)=>{var z={M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()};y=y.replace(/(M+|d+|h+|m+|s+)/g,function(v){return((v.length>1?"0":"")+z[v.slice(-1)]).slice(-2)});return y.replace(/(y+)/g,function(v){return x.getFullYear().toString().slice(-v.length)})},parseDateOld=id=>{const arr=md.match(/{{date_format\|[\S ]+\|[\S ]+}} /);let replace="";try{if(arr&&arr.length>0){replace=arr[0];const item=arr[0].replace("{{date_format|","").replace("}}","");const keys=item.split("|"),type=keys[0],fmt=keys[1];if(type=="now"){replace=fmtDate2(new Date(),fmt)}else if(type=="id"&&id){replace=fmtDate2(new Date(id),fmt)}}return replace}catch(error){return replace}},findUnReadbyID=(idx,arr)=>{for(let i=0;i<arr.length;i++){if(arr[i].idx==idx){return arr[i]}}},findAnnotebyID=(id,arr)=>{for(let i=0;i<arr.length;i++){const target=arr[i],index=target.annotations&&target.annotations.findIndex(item=>item.id==id);if(index>-1){return{unread:target,annote:target.annotations[index]}}}return{unread:{},annote:{}}},parseTitle=unread=>{return title=plugin_storage.title&&unread?plugin_storage.title.replace(/{{id}}/ig,unread.idx).replace(/{{title}}/ig,unread.title).replace(/{{un_title}}/ig,unread.title).replace(/{{timestamp}}/ig,unread.create.replace(/年|月|日|:| /ig,'')).replace(/{{now\|[\w-\/ :]+}}/ig,parseDate2).replace(/{{note}}/ig,unread.note||unread.title):unread?unread.title:'<解析失败>'},parseExt=(url,unread)=>{return url&&unread?url.replace(/{{id}}/ig,unread.idx).replace(/{{title}}/ig,unread.title).replace(/{{un_title}}/ig,unread.title).replace(/{{timestamp}}/ig,unread.create.replace(/年|月|日|:| /ig,'')).replace(/{{now\|[\w-\/ :]+}}/ig,parseDate2).replace(/{{note}}/ig,unread.note||unread.title):url},parseURLScheme=url=>{return new URL(url)},parseTags=tags=>{let html='';plugin_storage.tag_suffix=='\\n'&&(plugin_storage.tag_suffix='\n');tags&&tags.forEach(tag=>html+=plugin_storage.tag_prefix+`${tag.replace(/ /ig,'_')}`+plugin_storage.tag_suffix);return html.trim()},parseTag=(match,tags)=>{let tmpl='';match=match.replace(/\{|\}/ig,'');const arr=match.split('|'),pre=arr[0],suf=arr[2];tags&&tags.forEach(item=>tmpl+=pre+item+(suf=='\\n'?'\n':suf));if(arr.length==4){tmpl=tmpl.replace(new RegExp(arr[3]+'$'),'')}return tmpl},parseRefs=refs=>{let tmpl="";refs&&refs.split("\n").forEach(url=>{if(url.startsWith('<')){url=url.replace(/^<|>$/g,'');tmpl+=`[${url}](<${url}>)`+"\n"}else{tmpl+=url+"\n"}});return tmpl.trim()},parseInline=(type,value)=>{const reg=new RegExp(`{{\[\\S\]\+\\|${type}}}`);if(reg.test(md)){let str="";const prefix=md.match(reg)[0].replace(/{|{|}|}|}|\|/ig,"").replace(type,"");value&&value.split("\n").forEach(item=>str+=prefix+" "+item+"\n");return str.trim()}else return value},parseUrl=(type,id,text,html)=>{if(type=="org"){return unread.url+"#:~:text="+encodeURIComponent(text)}else if(type=="int"){return"http://localhost:7026/reading/"+unread.idx+(id?"#id="+id:'')}else if(type=="ext"){let ext_uri=plugin_storage.ext_uri;if(ext_uri.startsWith('https://simpread.pro/@')){return ext_uri?ext_uri+unread.idx+(id?"#id="+id:''):`{{ext_uri}}`}else{ext_uri=parseExt(plugin_storage.ext_uri,unread);return ext_uri+(id?"#id="+id:'')}}},parseDate=(match,id)=>{const dateFormat=fmtDate(),[type,format,lang]=match.replace(/{|}/ig,'').split('|');dateFormat.setLocal(lang||'short');let day='';if(type=='create'){day=id.replace(/年|月/ig,'-').replace(/日/ig,'')}else day=new Date(id);const date=dateFormat(day,format);return date},parseDate2=match=>{const str=match.replace(/(\{\{now\|)|(\}\})/ig,''),date=fmtDate()(+new Date(),str);return date},parseTimetamp=(day)=>{const date=fmtDate()(day,'yyyyddmmHHMMss');return date},parseBakinks=backlinks=>{let tmpl="";backlinks&&backlinks.forEach(backlink=>{if(backlink.type=='unread'){const unread=findUnReadbyID(backlink.id,unrdist);unread&&(tmpl+=`${parseTitle(unread)}`)}else if(backlink.type=='annote'){const result=findAnnotebyID(backlink.id,unrdist);if(result){const unread=result.unread,annote=result.annote;unread&&!$.isEmptyObject(unread)&&(tmpl+=`${parseTitle(unread)}`)}}});return tmpl.trim()},parseFormat=(match)=>{const arr=match.split('|'),tag=arr[1],img=arr[arr.length-1].replace(/}{3}$/,'');if(/<\w+>/.test(tag)){return match}else{return tag+' '+img}},parseAnnote=()=>{const loop=md.match(/{{#each}}[\S\n ]+{{\/each}}/ig);const fmtDate=time=>{const date=new Date(time),format=value=>value=value<10?"0"+value:value;return date.getFullYear()+"年"+format(date.getMonth()+1)+"月"+format(date.getDate())+"日 "+format(date.getHours())+":"+format(date.getMinutes())+":"+format(date.getSeconds())};if(loop&&loop.length>0){let str="",tmpl=loop[0].replace("{{#each}}","").replace("{{/each}}","").trim();arr&&arr.forEach(annotate=>{const{type,text,html,note,tags,id,refs}=annotate;let content="";if(type=="img"){content=`![](${text})`}else if(type=="code"){content="```\n"+text.trim()+"\n```"}else if(type=="paragraph"){content=parseMD(html,undefined,undefined,true,md_opts.format)}str+=tmpl.replace(/{{an_create}}/ig,fmtDate(id)).replace(/{{an_html}}/ig,content).replace(/{{an_timestamp}}/ig,parseTimetamp(id)).replace(/{{an_id}}/ig,id).replace(/{{an_text}}/ig,text).replace(/{{an_short_text}}/ig,text.substr(0,20)+(text.length>10?"...":"")).replace(/{{an_note}}/ig,note).replace(/{{an_tags}}/ig,parseTags(tags)).replace(/{{[ \S]+\|an_text}}/ig,parseInline("an_text",text)).replace(/{{[ \S]+\|an_html}}/ig,parseInline("an_html",content)).replace(/{{[ \S]+\|an_note}}/ig,parseInline("an_note",note)).replace(/{{[ \S]+\|an_refs}}/ig,parseInline("an_refs",parseRefs(refs))).replace(/{{[ \S]+\|an_backlinks}}/ig,parseInline("an_backlinks",parseBakinks(annotate.backlinks))).replace(/{{an_backlinks}}/ig,parseBakinks(annotate.backlinks)).replace(/{{date_format\|[\S ]+\|[\S ]+}}/,parseDateOld(id)).replace(/{{an_org_uri}}/ig,parseUrl("org",id,text)).replace(/{{an_int_uri}}/ig,parseUrl("int",id,text)).replace(/{{an_ext_uri}}/ig,parseUrl("ext",id,text))+"\n"});return str}else return""};if(callback){callback({parseURLScheme,fmtDate,parseBakinks,});return}if(annote){const{type,text,html,note,tags,id,refs}=annote;let content="";if(type=="img"){content=`![](${text})`}else if(type=="code"){content="```\n"+text.trim()+"\n```"}else if(type=="paragraph"){content=html}md=md.replace(/{{an_create\|[ \S]+}}/ig,match=>parseDate(match,id)).replace(/{{now\|[ \S]+}}/ig,match=>parseDate(match,+new Date())).replace(/{{an_timestamp}}/ig,parseTimetamp(id)).replace(/{{an_html}}/ig,content).replace(/{{an_id}}/ig,id).replace(/{{an_text}}/ig,text).replace(/{{an_short_text}}/ig,text.substr(0,20)+(text.length>10?"...":"")).replace(/{{an_note}}/ig,note).replace(/{{an_tags}}/ig,parseTags(tags)).replace(/{{[\S ]+\|tag\|[\S ]+}}/ig,match=>parseTag(match,tags)).replace(/{{[ \S]+\|an_text}}/ig,parseInline("an_text",text)).replace(/{{[ \S]+\|an_html}}/ig,parseInline("an_html",content)).replace(/{{[ \S]+\|an_note}}/ig,parseInline("an_note",note)).replace(/{{[ \S]+\|an_refs}}/ig,parseInline("an_refs",parseRefs(refs))).replace(/{{[ \S]+\|an_backlinks}}/ig,parseInline("an_backlinks",parseBakinks(annote.backlinks))).replace(/{{an_backlinks}}/ig,parseBakinks(annote.backlinks)).replace(/{{an_org_uri}}/ig,parseUrl("org",id,text,html)).replace(/{{an_int_uri}}/ig,parseUrl("int",id,text)).replace(/{{an_ext_uri}}/ig,parseUrl("ext",id,text)).replace(/{{an_refs}}/ig,parseInline("an_refs",parseRefs(unread.refs))).replace(/{{3}html\_format\|[^|]+\|!\[\S?\]\([a-zA-z]+:\/\/[^\s]*\}\}\}/ig,parseFormat)}else{md=md.replace(/{{create\|[ \S]+}}/ig,match=>parseDate(match,unread.create)).replace(/{{now\|[ \S]+}}/ig,match=>parseDate(match,+new Date())).replace(/{{date_format\|[\S ]+\|[\S ]+}}/,parseDateOld()).replace(/{{idx}}/ig,unread.idx).replace(/{{url}}/ig,unread.url).replace(/{{title}}/ig,unread.title).replace(/{{create}}/ig,unread.create).replace(/{{timestamp}}/ig,unread.create.replace(/年|月|日|:| /ig,'')).replace(/{{desc}}/ig,unread.desc).replace(/{{note}}/ig,unread.note).replace(/{{backlinks}}/ig,parseBakinks(unread.backlinks)).replace(/{{host}}/ig,parseURLScheme(unread.url).host).replace(/{{tags}}/ig,parseTags(unread.tags)).replace(/{{[\S ]+\|tag\|[\S ]+}}/ig,match=>parseTag(match,unread.tags)).replace(/{{int_uri}}/ig,parseUrl("int")).replace(/{{ext_uri}}/ig,parseUrl("ext")).replace(/{{org_uri}}/ig,parseUrl("org")).replace(/{{refs}}/ig,parseInline("refs",parseRefs(unread.refs))).replace(/{{[ \S]+\|refs}}/ig,parseInline("refs",parseRefs(unread.refs))).replace(/{{[ \S]+\|desc}}/ig,parseInline("desc",unread.desc)).replace(/{{[ \S]+\|note}}/ig,parseInline("note",unread.note)).replace(/{{[ \S]+\|backlinks}}/ig,parseInline("backlinks",parseBakinks(unread.backlinks)));md=md.replace(/{{#each}}[\S\n ]+{{\/each}}/ig,parseAnnote(unread.annotations))}return md}function mdtemplate(unread){let str=plugin_storage.template,an_str=plugin_storage.annotation;const html_format=(value,tag,callback)=>{let option=plugin_storage.format;try{if(!option){option=JSON.stringify({bulletListMarker:'-'})}else{option=JSON.parse(option);option={...{bulletListMarker:'-'},...option}}}catch(error){option=JSON.stringify({bulletListMarker:'-'});console.error('format_html option error',error)}if(/^```/i.test(value)&&/```$/i.test(value)){value=value.replace(/</ig,'&lt;').replace(/>/ig,'&gt;')}if(!tag){value=`<p>${value}</p>`}else if(tag=='>'){value=`<blockquote>${value}</blockquote>`}else if(tag=='-'||tag=='*'){value=`<li>${value}</li>`}else if(/<\w+>/.test(tag)){tag=tag.replace(/<|>/ig,'');value=`<${tag}>${value}</<${tag}>`}value=value.replace(/\n/ig,'<br>');markdown(value,undefined,md=>{md=md.replace(/^!\\\[\\\]/i,'![]');callback(md)},false,JSON.stringify(option))};let template=ejs.render(str,{unread});template=AnnoteMDTemplate2(template,plugin_storage,unread,undefined,unread.annotations,markdown);const arr=template.match(/{{3}html\_format\|[^|]+\|[^{{{]+}{3}|{{3}html\_format\|[^|]+\|[^]+}{3}/ig)||[],max=arr.length,mds=[];let i=0;const loop=str=>{const tag=str.split('|')[1],html=str.replace('{{{html_format|'+tag+'|','').replace(/}}}$/,'');html_format(html,tag,md=>{mds.push(md);i++;if(i<max){loop(arr[i])}else{console.log('md template replace ',arr,mds);arr.forEach((repl,idx)=>{template=template.replace(repl,mds[idx])});if(/{{annotations}}/.test(template)){an_template()}else{ending()}}})};const an_template=()=>{let an_tmpl='',i=0;const max=unread.annotations.length;const an_loop=md=>{an_tmpl+=md;i++;if(i<max){antemplate(an_str,unread,unread.annotations[i],html_format,an_loop)}else{template=template.replace('{{annotations}}',an_tmpl);ending()}};max>0?antemplate(an_str,unread,unread.annotations[i],html_format,an_loop):ending()};const ending=()=>{console.log('unread template is ',template);global_callback?global_callback(template):console.log('unread template is ',template)};try{if(max>0)loop(arr[i]);else{an_template()}}catch(error){console.log(error)}}function antemplate(str,unread,annote,html_format,callback){let template=ejs.render(str,{annote});template=AnnoteMDTemplate2(template,plugin_storage,unread,annote,unread.annotations,markdown);const arr=template.match(/{{3}html\_format\|[^|]+\|[^{{{]+}{3}|{{3}html\_format\|[^|]+\|[^]+}{3}/ig)||[],max=arr.length,mds=[];let i=0;const loop=str=>{const tag=str.split('|')[1],html=str.replace('{{{html_format|'+tag+'|','').replace(/}}}$/,'');html_format(html,tag,md=>{mds.push(md);i++;if(i<max){loop(arr[i])}else{arr.forEach((repl,idx)=>{template=template.replace(repl,mds[idx])});callback(template)}})};if(max>0)loop(arr[i]);else{callback(template)}}mdtemplate(unread)}

    schedule() {
        window.clearInterval( this.interval );
        this.interval = null;
        this.updater  = 0;
        if ( this.settings.frequency == -1 ) {
            return;
        }
        if ( this.settings.frequency != -1 ) {
            this.notice( '监控 simpread_config.json 变化功能已下线，请使用 Sync Server 方案。', true, 4, true );
            this.settings.frequency = -1;
            this.saveSettings();
            return;
        }
        const minutes = parseInt( this.settings.frequency ),
              loop    = minutes * 60 * 1000;
        if ( this.settings.frequency == 0 ) {
            const path = this.app.vault.adapter.path.resolve( this.settings.path, DEFAULT_SETTINGS.config );
            this.app.vault.adapter.fs.watch( path, ( event, filename ) => {
                if ( this.settings.frequency != 0 ) {
                    return;
                }
                const now = +new Date();
                if ( now - this.updater > 2000 ) {
                    setTimeout( () => this.sync(), 2000 );
                    this.updater = now;
                }
            });
        } else {
            this.interval = window.setInterval(() => {
                this.sync();
            }, loop );
        }
    }

    notice( msg, show = false, timeout = 0, forcing = false ) {
        show && new obsidian.Notice( msg );
        //this.statusBar.displayMessage(msg.toLowerCase(), timeout, forcing);
    }

    getObsidianClientID() {
        let obsidianClientId = window.localStorage.getItem( 'rw-ObsidianClientId' );
        if ( obsidianClientId ) {
            return obsidianClientId;
        }
        else {
            obsidianClientId = Math.random().toString( 36 ).substring( 2, 15 );
            window.localStorage.setItem( 'rw-ObsidianClientId', obsidianClientId );
            return obsidianClientId;
        }
    }
}

class SimpReadSettingTab extends obsidian.PluginSettingTab {

    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    titleDesc() {
        const descEl = document.createDocumentFragment();
        descEl.appendText( 'By default is {{title}}, support placeholders:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( '{{url}} {{title}} {{timestamp}}' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'For more syntax, refer to ' );
        const a = document.createElement( 'a' );
        a.href = 'https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1388527';
        a.text = 'format reference';
        a.target = '_blank';
        descEl.appendChild( a );
        descEl.appendText( '.' );
        return descEl;
    }

    templateDesc() {
        const descEl = document.createDocumentFragment();
        descEl.appendText( 'Unread Markdown Template date support:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'Date formats are supported {{create|yyyy/dd/mm HH:MM:ss|zh}}' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'Unread Markdown Template placeholders:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( '{{url}} {{title}} {{desc}} {{note}} {{tags}} ...' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'For more syntax, refer to ' );
        const a = document.createElement( 'a' );
        a.href = 'https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1389535';
        a.text = 'format reference';
        a.target = '_blank';
        descEl.appendChild( a );
        descEl.appendText( '.' );
        return descEl;
    }

    annotationDesc() {
        const descEl = document.createDocumentFragment();
        descEl.appendText( 'Annotation Markdown Template placeholders:' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( '{{an_html}} {{an_note}} {{an_int_uri}} {{an_tags}} {{> |an_note}} ...' );
        descEl.appendChild( document.createElement( 'br' ));
        descEl.appendText( 'For more syntax, refer to ' );
        const a = document.createElement( 'a' );
        a.href = 'https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1393730';
        a.text = 'format reference';
        a.target = '_blank';
        descEl.appendChild( a );
        descEl.appendText( '.' );
        return descEl;
    }

    display() {
        let { containerEl } = this;

        containerEl.empty();
        containerEl.createEl( 'h1', { text: 'SimpRead Unreader Sync' });
        containerEl.createEl( 'p', { text: 'Created by ' }).createEl( 'a', { text: 'SimpRead', href: 'https://simpread.pro' });
        containerEl.getElementsByTagName( 'p' )[0].appendText(' 📚' );

        containerEl.createEl( 'h3', { text: 'Sync Server Settings' });

        containerEl.createEl( 'p', { text: 'Sync Server ' }).createEl( 'a', { text: 'reference', href: '' });

        new obsidian.Setting( containerEl )
            .setName( 'Server Host' )
            .setDesc( 'By default localhost' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: localhost' )
                .setValue( this.plugin.settings.host + '' )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.host = obsidian.normalizePath( value || DEFAULT_SETTINGS.host );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Server port' )
            .setDesc( 'By default 7027' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: 7027' )
                .setValue( this.plugin.settings.port + '' )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.port = obsidian.normalizePath( value || DEFAULT_SETTINGS.port );
                    yield this.plugin.saveSettings();
                }))
            );

        containerEl.createEl( 'h3', { text: 'Sync Settings' });

        new obsidian.Setting( containerEl )
            .setName( 'Sync your SimpRead unread data with Obsidian' )
            .setDesc( 'On first sync, the SimpRead plugin will create a new folder containing all your highlights' )
            .setClass( 'rw-setting-sync' )
            .addButton( button => {
                button.setCta().setTooltip( 'Once the sync begins, default synchronise up to 10 unread' )
                    .setButtonText( 'Manual Sync' )
                    .onClick(() => {
                        this.plugin.notify = true;
                        this.plugin.sync();
                    });
            });

        new obsidian.Setting( containerEl )
            .setName( 'Maximum number of Synchronize' )
            .setDesc( 'By default, Maximum number is 10, All will be saved when you set 0' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: 10' )
                .setValue( this.plugin.settings.count + '' )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.count = obsidian.normalizePath( value || DEFAULT_SETTINGS.count );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Configure resync frequency' )
            .addDropdown( dropdown => {
                dropdown.addOption( '-1', 'Do not monitor files' );
                dropdown.addOption( '0', 'Monitor file changes' );
                dropdown.addOption( '5', 'Every 5 mintues' );
                dropdown.addOption( '10', 'Every 10 mintues' );
                dropdown.addOption( '30', 'Every 30 mintues' );
                dropdown.setValue( this.plugin.settings.frequency + '' );
                dropdown.onChange( value => {
                    this.plugin.settings.frequency = value;
                    this.plugin.saveSettings();
                    this.plugin.schedule();
                });
            });

        new obsidian.Setting( containerEl )
            .setName( 'Do you want to overwrite existing files?' )
            .addToggle( toggle => {
                toggle.setValue( this.plugin.settings.override );
                toggle.onChange( value => {
                    this.plugin.settings.override = value;
                    this.plugin.saveSettings();
                });
            });

        new obsidian.Setting( containerEl )
            .setName( 'Customize base folder' )
            .setDesc( 'By default, the plugin will save all your highlights into a folder named SimpRead' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: SimpRead' )
                .setValue( this.plugin.settings.folder )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.folder = obsidian.normalizePath( value || DEFAULT_SETTINGS.folder );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'SimpRead config path' )
            .setDesc( 'Same as SimpRead Sync path' )
            .addText( text => text
                .setPlaceholder( 'Required, do\'nt empty' )
                .setValue( this.plugin.settings.path )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.path = obsidian.normalizePath( value );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Write only exist annotations with unread' )
            .setDesc( 'When unread not exist annotations, not saved to Obsidian.' )
            .addToggle( toggle => {
                toggle.setValue( this.plugin.settings.annote );
                toggle.onChange( value => {
                    this.plugin.settings.annote = value;
                    this.plugin.saveSettings();
                });
            });

        containerEl.createEl( 'h3', { text: 'Markdown Template Settings' });

        new obsidian.Setting( containerEl )
            .setName( 'Customize Title' )
            .setDesc( this.titleDesc() )
            .addText( text => text
                .setPlaceholder( 'Defaults to: {{title}}' )
                .setValue( this.plugin.settings.title )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.title = obsidian.normalizePath( value || DEFAULT_SETTINGS.title );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Customize External link' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: empty' )
                .setValue( this.plugin.settings.ext_uri )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.ext_uri = obsidian.normalizePath( value || DEFAULT_SETTINGS.ext_uri );
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Unread Markdown Template' )
            .addTextArea( text => {
                text
                    .setPlaceholder( 'When empty, use the default template' )
                    .setValue( this.plugin.settings.template )
                    .onChange( value => {
                        if ( value.trim() == '' ) value = DEFAULT_SETTINGS.template;
                        this.plugin.settings.template = value;
                        this.plugin.saveSettings();
                    });
                text.inputEl.rows = 10;
                text.inputEl.cols = 25;
            })
            .setDesc( this.templateDesc() );

        new obsidian.Setting( containerEl )
            .setName( 'Annotation Markdown Template' )
            .addTextArea( text => {
                text
                    .setPlaceholder( 'When empty, use the default annotation template' )
                    .setValue( this.plugin.settings.annotation )
                    .onChange( value => {
                        if ( value.trim() == '' ) value = DEFAULT_SETTINGS.annotation;
                        this.plugin.settings.annotation = value;
                        this.plugin.saveSettings();
                    });
                text.inputEl.rows = 10;
                text.inputEl.cols = 25;
            })
            .setDesc( this.annotationDesc() );

        new obsidian.Setting( containerEl )
            .setName( 'Customize Tag Prefix' )
            .setDesc( 'For example: when value is #, show as #tag1 #tag2' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: #' )
                .setValue( this.plugin.settings.tag_prefix )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.tag_prefix = value;
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Customize Tag Suffix' )
            .setDesc( 'For example: when value is , show as #tag1, #tag2' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: space' )
                .setValue( this.plugin.settings.tag_suffix )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.tag_suffix = value;
                    yield this.plugin.saveSettings();
                }))
            );

        new obsidian.Setting( containerEl )
            .setName( 'Customize Markdown Options' )
            .addText( text => text
                .setPlaceholder( 'Defaults to: empty' )
                .setValue( this.plugin.settings.format )
                .onChange( value => __awaiter(this, void 0, void 0, function* () {
                    this.plugin.settings.format = value;
                    yield this.plugin.saveSettings();
                }))
            );

        const help = containerEl.createEl( 'p' );
        help.innerHTML = `Question? Please see our <a href='https://github.com/Kenshin/simpread/discussions/2889'>Documentation</a> 🙂`;
    }
}

module.exports = SimpReadPlugin;
