(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{22624:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var i=n(26729),s=n.n(i),r=n(17187),o=n(56186);class c extends o.IJsonRpcProvider{constructor(t){super(t),this.events=new r.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict((0,o.formatJsonRpcRequest)(t.method,t.params||[]),e)}async requestStrict(t,e){return new Promise((async(n,i)=>{if(!this.connection.connected)try{await this.open()}catch(s){i(s)}this.events.on(`${t.id}`,(t=>{(0,o.isJsonRpcError)(t)?i(t.error.message):n(t.result)}));try{await this.connection.send(t,e)}catch(s){i(s)}}))}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),(0,o.isJsonRpcResponse)(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),"string"===typeof t&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",(t=>this.onPayload(t))),this.connection.on("close",(()=>this.events.emit("disconnect"))),this.connection.on("error",(t=>this.events.emit("error",t))),this.hasRegisteredEventListeners=!0)}}var a=n(80699),h=n.n(a),d=n(85094);const u={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"};class l{constructor(t){if(this.url=t,this.events=new r.EventEmitter,this.isAvailable=!1,this.registering=!1,!(0,o.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t,e){this.isAvailable||await this.register();try{const e=(0,d.u)(t),n=await h()(this.url,Object.assign(Object.assign({},u),{body:e})),i=await n.json();this.onPayload({data:i})}catch(n){this.onError(t.id,n)}}async register(t=this.url){if(!(0,o.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering)return new Promise(((t,e)=>{this.events.once("register_error",(t=>{e(t)})),this.events.once("open",(()=>{if("undefined"===typeof this.isAvailable)return e(new Error("HTTP connection is missing or invalid"));t()}))}));this.url=t,this.registering=!0;try{const e=(0,d.u)({id:1,jsonrpc:"2.0",method:"test",params:[]});await h()(t,Object.assign(Object.assign({},u),{body:e})),this.onOpen()}catch(e){const t=this.parseError(e);throw this.events.emit("register_error",t),this.onClose(),t}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if("undefined"===typeof t.data)return;const e="string"===typeof t.data?(0,d.D)(t.data):t.data;this.events.emit("payload",e)}onError(t,e){const n=this.parseError(e),i=n.message||n.toString(),s=(0,o.formatJsonRpcError)(t,i);this.events.emit("payload",s)}parseError(t,e=this.url){return(0,o.parseConnectionError)(t,e,"HTTP")}}var p=n(81382),f=n(71516),y=n(4337),v=n.n(y),g=n(73416);class w extends g.XR{constructor(t){super(),this.events=new(s()),this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=t,this.chainId=(null===t||void 0===t?void 0:t.chainId)||this.chainId,this.wc=this.register(t)}get connected(){return"undefined"!==typeof this.wc&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t){if(!this.connected)return new Promise(((e,n)=>{this.on("error",(t=>{n(t)})),this.on("open",(()=>{e()})),this.create(t)}));this.onOpen()}async close(){"undefined"!==typeof this.wc&&(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(t){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(t).then((t=>this.events.emit("payload",t))).catch((e=>this.events.emit("payload",(0,o.formatJsonRpcError)(t.id,e.message))))}register(t){if(this.wc)return this.wc;this.opts=t||this.opts,this.bridge=(null===t||void 0===t?void 0:t.connector)?t.connector.bridge:(null===t||void 0===t?void 0:t.bridge)||"https://bridge.walletconnect.org",this.qrcode="undefined"===typeof(null===t||void 0===t?void 0:t.qrcode)||!1!==t.qrcode,this.chainId="undefined"!==typeof(null===t||void 0===t?void 0:t.chainId)?t.chainId:this.chainId,this.qrcodeModalOptions=null===t||void 0===t?void 0:t.qrcodeModalOptions;const e={bridge:this.bridge,qrcodeModal:this.qrcode?v():void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:null===t||void 0===t?void 0:t.storageId,signingMethods:null===t||void 0===t?void 0:t.signingMethods,clientMeta:null===t||void 0===t?void 0:t.clientMeta};if(this.wc="undefined"!==typeof(null===t||void 0===t?void 0:t.connector)?t.connector:new f.Z(e),"undefined"===typeof this.wc)throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(t){this.pending=!1,t&&(this.wc=t),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(t,e="Failed or Rejected Request",n=-32e3){const i={id:t.id,jsonrpc:t.jsonrpc,error:{code:n,message:e}};return this.events.emit("payload",i),i}create(t){this.wc=this.register(this.opts),this.chainId=t||this.chainId,this.connected||this.pending||(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then((()=>this.events.emit("created"))).catch((t=>this.events.emit("error",t))))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",(t=>{var e,n;t?this.events.emit("error",t):(this.accounts=(null===(e=this.wc)||void 0===e?void 0:e.accounts)||[],this.chainId=(null===(n=this.wc)||void 0===n?void 0:n.chainId)||this.chainId,this.onOpen())})),this.wc.on("disconnect",(t=>{t?this.events.emit("error",t):this.onClose()})),this.wc.on("modal_closed",(()=>{this.events.emit("error",new Error("User closed modal"))})),this.wc.on("session_update",((t,e)=>{const{accounts:n,chainId:i}=e.params[0];(!this.accounts||n&&this.accounts!==n)&&(this.accounts=n,this.events.emit("accountsChanged",n)),(!this.chainId||i&&this.chainId!==i)&&(this.chainId=i,this.events.emit("chainChanged",i))}))}async sendPayload(t){this.wc=this.register(this.opts);try{const e=await this.wc.unsafeSend(t);return this.sanitizeResponse(e)}catch(e){return this.onError(t,e.message)}}sanitizeResponse(t){return"undefined"!==typeof t.error&&"undefined"===typeof t.error.code?(0,o.formatJsonRpcError)(t.id,t.error.message):t}}var m=class{constructor(t){this.events=new(s()),this.rpc={infuraId:null===t||void 0===t?void 0:t.infuraId,custom:null===t||void 0===t?void 0:t.rpc},this.signer=new c(new w(t));const e=this.signer.connection.chainId||(null===t||void 0===t?void 0:t.chainId)||1;this.http=this.setHttpProvider(e),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var t;return(null===(t=this.http)||void 0===t?void 0:t.connection).url||""}async request(t){switch(t.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(p.V7.includes(t.method))return this.signer.request(t);if("undefined"===typeof this.http)throw new Error(`Cannot request JSON-RPC method (${t.method}) without provided rpc url`);return this.http.request(t)}sendAsync(t,e){this.request(t).then((t=>e(null,t))).catch((t=>e(t,void 0)))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}removeListener(t,e){this.events.removeListener(t,e)}off(t,e){this.events.off(t,e)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",(t=>{this.events.emit("accountsChanged",t)})),this.signer.connection.on("chainChanged",(t=>{this.http=this.setHttpProvider(t),this.events.emit("chainChanged",t)})),this.signer.on("disconnect",(()=>{this.events.emit("disconnect")}))}setHttpProvider(t){const e=(0,p.RM)(t,this.rpc);if("undefined"===typeof e)return;return new c(new l(e))}}},80699:function(t,e){var n="undefined"!==typeof self?self:this,i=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();!function(t){!function(e){var n="URLSearchParams"in t,i="Symbol"in t&&"iterator"in Symbol,s="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),r="FormData"in t,o="ArrayBuffer"in t;if(o)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function d(t){return"string"!==typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function y(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:r&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=f(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),i=0;i<e.length;i++)n[i]=String.fromCharCode(e[i]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=h(t),e=d(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[h(t)]},l.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},l.prototype.set=function(t,e){this.map[h(t)]=d(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),u(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),u(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),u(t)},i&&(l.prototype[Symbol.iterator]=l.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var n=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=function(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function b(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),i=n.shift().replace(/\+/g," "),s=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(i),decodeURIComponent(s))}})),e}function E(t){var e=new l;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),i=n.shift().trim();if(i){var s=n.join(":").trim();e.append(i,s)}})),e}function _(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},g.call(m.prototype),g.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];_.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(O){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function I(t,n){return new Promise((function(i,r){var o=new m(t,n);if(o.signal&&o.signal.aborted)return r(new e.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function a(){c.abort()}c.onload=function(){var t={status:c.status,statusText:c.statusText,headers:E(c.getAllResponseHeaders()||"")};t.url="responseURL"in c?c.responseURL:t.headers.get("X-Request-URL");var e="response"in c?c.response:c.responseText;i(new _(e,t))},c.onerror=function(){r(new TypeError("Network request failed"))},c.ontimeout=function(){r(new TypeError("Network request failed"))},c.onabort=function(){r(new e.DOMException("Aborted","AbortError"))},c.open(o.method,o.url,!0),"include"===o.credentials?c.withCredentials=!0:"omit"===o.credentials&&(c.withCredentials=!1),"responseType"in c&&s&&(c.responseType="blob"),o.headers.forEach((function(t,e){c.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",a),c.onreadystatechange=function(){4===c.readyState&&o.signal.removeEventListener("abort",a)}),c.send("undefined"===typeof o._bodyInit?null:o._bodyInit)}))}I.polyfill=!0,t.fetch||(t.fetch=I,t.Headers=l,t.Request=m,t.Response=_),e.Headers=l,e.Request=m,e.Response=_,e.fetch=I,Object.defineProperty(e,"__esModule",{value:!0})}({})}(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=i;(e=s.fetch).default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e},36563:function(){}}]);