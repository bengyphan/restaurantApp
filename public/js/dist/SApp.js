(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId])resolves.push(installedChunks[chunkId][0]);installedChunks[chunkId]=0}for(moduleId in moreModules)if(Object.prototype.hasOwnProperty.call(moreModules,moduleId))modules[moduleId]=moreModules[moduleId];if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length)resolves.shift()();deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(0!==installedChunks[depId])fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={1:0};var deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name))Object.defineProperty(exports,name,{enumerable:true,get:getter})};__webpack_require__.r=function(exports){if("undefined"!==typeof Symbol&&Symbol.toStringTag)Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(1&mode)value=__webpack_require__(value);if(8&mode)return value;if(4&mode&&"object"===typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([10,4]);return checkDeferredModules()})({10:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var internal=__webpack_require__(0);function add_css(){var style=Object(internal["g"])("style");style.id="svelte-sjsaig-style";style.textContent="header.svelte-sjsaig{background:#676778;color:red;text-align:center;padding:20px;font-size:1.1rem;font-weight:700;color:white}";Object(internal["b"])(document.head,style)}function create_fragment(){let header;return{c(){header=Object(internal["g"])("header");header.textContent="Svelte Setup";Object(internal["c"])(header,"id","header");Object(internal["c"])(header,"class","svelte-sjsaig")},m(target,anchor){Object(internal["i"])(target,header,anchor)},p:internal["k"],i:internal["k"],o:internal["k"],d(detaching){if(detaching)Object(internal["f"])(header)}}}class Header_svelte_Header extends internal["a"]{constructor(options){super();if(!document.getElementById("svelte-sjsaig-style"))add_css();Object(internal["h"])(this,options,null,create_fragment,internal["l"],{})}}var Header_svelte=Header_svelte_Header;function App_svelte_add_css(){var style=Object(internal["g"])("style");style.id="svelte-1mwh9qx-style";style.textContent="h1.svelte-1mwh9qx{color:red}";Object(internal["b"])(document.head,style)}function App_svelte_create_fragment(){let t0;let div4;let current;const header=new Header_svelte({});return{c(){Object(internal["d"])(header.$$.fragment);t0=Object(internal["m"])();div4=Object(internal["g"])("div");div4.innerHTML=`<div class="Aligner"><div class="Aligner-item"><img alt="CodingPhase Logo" src="/img/logo.png"> \n            <h1 class="svelte-1mwh9qx">Dev-Starter-Kit</h1> \n            <div class="menu"><ul><li><a href="http://starterkit.codingphase.com" target="new">\n                            Documentation\n                        </a></li> \n                    <li><a href="http://www.codingphase.com" target="new">\n                            CodingPhase.Com\n                        </a></li></ul></div> \n            <div class="version-num">version 4.0.2</div> \n            <br> \n            <a class="github-button" href="https://github.com/codingphasedotcom/Dev-Starter-Kit" data-icon="octicon-star" data-style="mega" data-count-href="/codingphasedotcom/rocky/stargazers" data-count-api="/repos/codingphasedotcom/rocky#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star codingphasedotcom/rocky on GitHub">\n                Star\n            </a></div></div>`;Object(internal["c"])(div4,"class","home")},m(target,anchor){Object(internal["j"])(header,target,anchor);Object(internal["i"])(target,t0,anchor);Object(internal["i"])(target,div4,anchor);current=true},p:internal["k"],i(local){if(current)return;Object(internal["n"])(header.$$.fragment,local);current=true},o(local){Object(internal["o"])(header.$$.fragment,local);current=false},d(detaching){Object(internal["e"])(header,detaching);if(detaching)Object(internal["f"])(t0);if(detaching)Object(internal["f"])(div4)}}}function instance(){console.log("swag");return[]}class App_svelte_App extends internal["a"]{constructor(options){super();if(!document.getElementById("svelte-1mwh9qx-style"))App_svelte_add_css();Object(internal["h"])(this,options,instance,App_svelte_create_fragment,internal["l"],{})}}var App_svelte=App_svelte_App;const app=new App_svelte({target:document.getElementById("app"),props:{name:"blue"}});__webpack_exports__["default"]=app}});