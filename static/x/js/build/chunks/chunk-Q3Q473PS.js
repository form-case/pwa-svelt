import{b as xe,c as Se}from"./chunk-3RPRB7E5.js";var Re=xe((_e,ye)=>{(function(n,r){typeof define=="function"&&define.amd?define([],r):typeof ye=="object"&&typeof _e<"u"?ye.exports=r():n.Papa=r()})(_e,function n(){"use strict";var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},s=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,g={},d=0,o={parse:function(t,e){var i=(e=e||{}).dynamicTyping||!1;if(b(i)&&(e.dynamicTypingFunction=i,i={}),e.dynamicTyping=i,e.transform=!!b(e.transform)&&e.transform,e.worker&&o.WORKERS_SUPPORTED){var u=function(){if(!o.WORKERS_SUPPORTED)return!1;var m=(q=r.URL||r.webkitURL||null,T=n.toString(),o.BLOB_URL||(o.BLOB_URL=q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",T,")();"],{type:"text/javascript"})))),_=new r.Worker(m),q,T;return _.onmessage=De,_.id=d++,g[_.id]=_}();return u.userStep=e.step,u.userChunk=e.chunk,u.userComplete=e.complete,u.userError=e.error,e.step=b(e.step),e.chunk=b(e.chunk),e.complete=b(e.complete),e.error=b(e.error),delete e.worker,void u.postMessage({input:t,config:e,workerId:u.id})}var c=null;return o.NODE_STREAM_INPUT,typeof t=="string"?(t=function(m){return m.charCodeAt(0)===65279?m.slice(1):m}(t),c=e.download?new k(e):new ue(e)):t.readable===!0&&b(t.read)&&b(t.on)?c=new fe(e):(r.File&&t instanceof File||t instanceof Object)&&(c=new G(e)),c.stream(t)},unparse:function(t,e){var i=!1,u=!0,c=",",m=`\r
`,_='"',q=_+_,T=!1,f=null,x=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||o.BAD_DELIMITERS.filter(function(l){return e.delimiter.indexOf(l)!==-1}).length||(c=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(i=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(T=e.skipEmptyLines),typeof e.newline=="string"&&(m=e.newline),typeof e.quoteChar=="string"&&(_=e.quoteChar),typeof e.header=="boolean"&&(u=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");f=e.columns}e.escapeChar!==void 0&&(q=e.escapeChar+_),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(x=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var p=new RegExp(le(_),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return Q(null,t,T);if(typeof t[0]=="object")return Q(f||Object.keys(t[0]),t,T)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||f),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),Q(t.fields||[],t.data||[],T);throw new Error("Unable to serialize unrecognized input");function Q(l,O,N){var D="";typeof l=="string"&&(l=JSON.parse(l)),typeof O=="string"&&(O=JSON.parse(O));var B=Array.isArray(l)&&0<l.length,P=!Array.isArray(O[0]);if(B&&u){for(var z=0;z<l.length;z++)0<z&&(D+=c),D+=M(l[z],z);0<O.length&&(D+=m)}for(var h=0;h<O.length;h++){var v=B?l.length:O[h].length,A=!1,U=B?Object.keys(O[h]).length===0:O[h].length===0;if(N&&!B&&(A=N==="greedy"?O[h].join("").trim()==="":O[h].length===1&&O[h][0].length===0),N==="greedy"&&B){for(var C=[],$=0;$<v;$++){var S=P?l[$]:$;C.push(O[h][S])}A=C.join("").trim()===""}if(!A){for(var R=0;R<v;R++){0<R&&!U&&(D+=c);var X=B&&P?l[R]:R;D+=M(O[h][X],R)}h<O.length-1&&(!N||0<v&&!U)&&(D+=m)}}return D}function M(l,O){if(l==null)return"";if(l.constructor===Date)return JSON.stringify(l).slice(1,25);var N=!1;x&&typeof l=="string"&&x.test(l)&&(l="'"+l,N=!0);var D=l.toString().replace(p,q);return(N=N||i===!0||typeof i=="function"&&i(l,O)||Array.isArray(i)&&i[O]||function(B,P){for(var z=0;z<P.length;z++)if(-1<B.indexOf(P[z]))return!0;return!1}(D,o.BAD_DELIMITERS)||-1<D.indexOf(c)||D.charAt(0)===" "||D.charAt(D.length-1)===" ")?_+D+_:D}}};if(o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r",`
`,'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!s&&!!r.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=pe,o.ParserHandle=ke,o.NetworkStreamer=k,o.FileStreamer=G,o.StringStreamer=ue,o.ReadableStreamStreamer=fe,r.jQuery){var F=r.jQuery;F.fn.parse=function(t){var e=t.config||{},i=[];return this.each(function(m){if(!(F(this).prop("tagName").toUpperCase()==="INPUT"&&F(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var _=0;_<this.files.length;_++)i.push({file:this.files[_],inputElem:this,instanceConfig:F.extend({},e)})}),u(),this;function u(){if(i.length!==0){var m,_,q,T,f=i[0];if(b(t.before)){var x=t.before(f.file,f.inputElem);if(typeof x=="object"){if(x.action==="abort")return m="AbortError",_=f.file,q=f.inputElem,T=x.reason,void(b(t.error)&&t.error({name:m},_,q,T));if(x.action==="skip")return void c();typeof x.config=="object"&&(f.instanceConfig=F.extend(f.instanceConfig,x.config))}else if(x==="skip")return void c()}var p=f.instanceConfig.complete;f.instanceConfig.complete=function(Q){b(p)&&p(Q,f.file,f.inputElem),c()},o.parse(f.file,f.instanceConfig)}else b(t.complete)&&t.complete()}function c(){i.splice(0,1),u()}}}function w(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var i=ge(e);i.chunkSize=parseInt(i.chunkSize),e.step||e.chunk||(i.chunkSize=null),this._handle=new ke(i),(this._handle.streamer=this)._config=i}.call(this,t),this.parseChunk=function(e,i){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var u=this._config.beforeFirstChunk(e);u!==void 0&&(e=u)}this.isFirstChunk=!1,this._halted=!1;var c=this._partialLine+e;this._partialLine="";var m=this._handle.parse(c,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var _=m.meta.cursor;this._finished||(this._partialLine=c.substring(_-this._baseIndex),this._baseIndex=_),m&&m.data&&(this._rowCount+=m.data.length);var q=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(a)r.postMessage({results:m,workerId:o.WORKER_ID,finished:q});else if(b(this._config.chunk)&&!i){if(this._config.chunk(m,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);m=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(m.data),this._completeResults.errors=this._completeResults.errors.concat(m.errors),this._completeResults.meta=m.meta),this._completed||!q||!b(this._config.complete)||m&&m.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),q||m&&m.meta.paused||this._nextChunk(),m}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):a&&this._config.error&&r.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function k(t){var e;(t=t||{}).chunkSize||(t.chunkSize=o.RemoteChunkSize),w.call(this,t),this._nextChunk=s?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),s||(e.onload=ee(this._chunkLoaded,this),e.onerror=ee(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!s),this._config.downloadRequestHeaders){var i=this._config.downloadRequestHeaders;for(var u in i)e.setRequestHeader(u,i[u])}if(this._config.chunkSize){var c=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+c)}try{e.send(this._config.downloadRequestBody)}catch(m){this._chunkError(m.message)}s&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(i){var u=i.getResponseHeader("Content-Range");return u===null?-1:parseInt(u.substring(u.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(i){var u=e.statusText||i;this._sendError(new Error(u))}}function G(t){var e,i;(t=t||{}).chunkSize||(t.chunkSize=o.LocalChunkSize),w.call(this,t);var u=typeof FileReader<"u";this.stream=function(c){this._input=c,i=c.slice||c.webkitSlice||c.mozSlice,u?((e=new FileReader).onload=ee(this._chunkLoaded,this),e.onerror=ee(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var c=this._input;if(this._config.chunkSize){var m=Math.min(this._start+this._config.chunkSize,this._input.size);c=i.call(c,this._start,m)}var _=e.readAsText(c,this._config.encoding);u||this._chunkLoaded({target:{result:_}})},this._chunkLoaded=function(c){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(c.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ue(t){var e;w.call(this,t=t||{}),this.stream=function(i){return e=i,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var i,u=this._config.chunkSize;return u?(i=e.substring(0,u),e=e.substring(u)):(i=e,e=""),this._finished=!e,this.parseChunk(i)}}}function fe(t){w.call(this,t=t||{});var e=[],i=!0,u=!1;this.pause=function(){w.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){w.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(c){this._input=c,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){u&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):i=!0},this._streamData=ee(function(c){try{e.push(typeof c=="string"?c:c.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(m){this._streamError(m)}},this),this._streamError=ee(function(c){this._streamCleanUp(),this._sendError(c)},this),this._streamEnd=ee(function(){this._streamCleanUp(),u=!0,this._streamData("")},this),this._streamCleanUp=ee(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ke(t){var e,i,u,c=Math.pow(2,53),m=-c,_=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,T=this,f=0,x=0,p=!1,Q=!1,M=[],l={data:[],errors:[],meta:{}};if(b(t.step)){var O=t.step;t.step=function(h){if(l=h,B())D();else{if(D(),l.data.length===0)return;f+=h.data.length,t.preview&&f>t.preview?i.abort():(l.data=l.data[0],O(l,T))}}}function N(h){return t.skipEmptyLines==="greedy"?h.join("").trim()==="":h.length===1&&h[0].length===0}function D(){return l&&u&&(z("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),u=!1),t.skipEmptyLines&&(l.data=l.data.filter(function(h){return!N(h)})),B()&&function(){if(!l)return;function h(A,U){b(t.transformHeader)&&(A=t.transformHeader(A,U)),M.push(A)}if(Array.isArray(l.data[0])){for(var v=0;B()&&v<l.data.length;v++)l.data[v].forEach(h);l.data.splice(0,1)}else l.data.forEach(h)}(),function(){if(!l||!t.header&&!t.dynamicTyping&&!t.transform)return l;function h(A,U){var C,$=t.header?{}:[];for(C=0;C<A.length;C++){var S=C,R=A[C];t.header&&(S=C>=M.length?"__parsed_extra":M[C]),t.transform&&(R=t.transform(R,S)),R=P(S,R),S==="__parsed_extra"?($[S]=$[S]||[],$[S].push(R)):$[S]=R}return t.header&&(C>M.length?z("FieldMismatch","TooManyFields","Too many fields: expected "+M.length+" fields but parsed "+C,x+U):C<M.length&&z("FieldMismatch","TooFewFields","Too few fields: expected "+M.length+" fields but parsed "+C,x+U)),$}var v=1;return!l.data.length||Array.isArray(l.data[0])?(l.data=l.data.map(h),v=l.data.length):l.data=h(l.data,0),t.header&&l.meta&&(l.meta.fields=M),x+=v,l}()}function B(){return t.header&&M.length===0}function P(h,v){return A=h,t.dynamicTypingFunction&&t.dynamicTyping[A]===void 0&&(t.dynamicTyping[A]=t.dynamicTypingFunction(A)),(t.dynamicTyping[A]||t.dynamicTyping)===!0?v==="true"||v==="TRUE"||v!=="false"&&v!=="FALSE"&&(function(U){if(_.test(U)){var C=parseFloat(U);if(m<C&&C<c)return!0}return!1}(v)?parseFloat(v):q.test(v)?new Date(v):v===""?null:v):v;var A}function z(h,v,A,U){var C={type:h,code:v,message:A};U!==void 0&&(C.row=U),l.errors.push(C)}this.parse=function(h,v,A){var U=t.quoteChar||'"';if(t.newline||(t.newline=function(S,R){S=S.substring(0,1048576);var X=new RegExp(le(R)+"([^]*?)"+le(R),"gm"),W=(S=S.replace(X,"")).split("\r"),J=S.split(`
`),V=1<J.length&&J[0].length<W[0].length;if(W.length===1||V)return`
`;for(var H=0,I=0;I<W.length;I++)W[I][0]===`
`&&H++;return H>=W.length/2?`\r
`:"\r"}(h,U)),u=!1,t.delimiter)b(t.delimiter)&&(t.delimiter=t.delimiter(h),l.meta.delimiter=t.delimiter);else{var C=function(S,R,X,W,J){var V,H,I,L;J=J||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var ie=0;ie<J.length;ie++){var E=J[ie],oe=0,Y=0,se=0;I=void 0;for(var te=new pe({comments:W,delimiter:E,newline:R,preview:10}).parse(S),ne=0;ne<te.data.length;ne++)if(X&&N(te.data[ne]))se++;else{var re=te.data[ne].length;Y+=re,I!==void 0?0<re&&(oe+=Math.abs(re-I),I=re):I=re}0<te.data.length&&(Y/=te.data.length-se),(H===void 0||oe<=H)&&(L===void 0||L<Y)&&1.99<Y&&(H=oe,V=E,L=Y)}return{successful:!!(t.delimiter=V),bestDelimiter:V}}(h,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);C.successful?t.delimiter=C.bestDelimiter:(u=!0,t.delimiter=o.DefaultDelimiter),l.meta.delimiter=t.delimiter}var $=ge(t);return t.preview&&t.header&&$.preview++,e=h,i=new pe($),l=i.parse(e,v,A),D(),p?{meta:{paused:!0}}:l||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,i.abort(),e=b(t.chunk)?"":e.substring(i.getCharIndex())},this.resume=function(){T.streamer._halted?(p=!1,T.streamer.parseChunk(e,!0)):setTimeout(T.resume,3)},this.aborted=function(){return Q},this.abort=function(){Q=!0,i.abort(),l.meta.aborted=!0,b(t.complete)&&t.complete(l),e=""}}function le(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pe(t){var e,i=(t=t||{}).delimiter,u=t.newline,c=t.comments,m=t.step,_=t.preview,q=t.fastMode,T=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(T=t.escapeChar),(typeof i!="string"||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=","),c===i)throw new Error("Comment character same as delimiter");c===!0?c="#":(typeof c!="string"||-1<o.BAD_DELIMITERS.indexOf(c))&&(c=!1),u!==`
`&&u!=="\r"&&u!==`\r
`&&(u=`
`);var f=0,x=!1;this.parse=function(p,Q,M){if(typeof p!="string")throw new Error("Input must be a string");var l=p.length,O=i.length,N=u.length,D=c.length,B=b(m),P=[],z=[],h=[],v=f=0;if(!p)return K();if(t.header&&!Q){var A=p.split(u)[0].split(i),U=[],C={},$=!1;for(var S in A){var R=A[S];b(t.transformHeader)&&(R=t.transformHeader(R,S));var X=R,W=C[R]||0;for(0<W&&($=!0,X=R+"_"+W),C[R]=W+1;U.includes(X);)X=X+"_"+W;U.push(X)}if($){var J=p.split(u);J[0]=U.join(i),p=J.join(u)}}if(q||q!==!1&&p.indexOf(e)===-1){for(var V=p.split(u),H=0;H<V.length;H++){if(h=V[H],f+=h.length,H!==V.length-1)f+=u.length;else if(M)return K();if(!c||h.substring(0,D)!==c){if(B){if(P=[],se(h.split(i)),he(),x)return K()}else se(h.split(i));if(_&&_<=H)return P=P.slice(0,_),K(!0)}}return K()}for(var I=p.indexOf(i,f),L=p.indexOf(u,f),ie=new RegExp(le(T)+le(e),"g"),E=p.indexOf(e,f);;)if(p[f]!==e)if(c&&h.length===0&&p.substring(f,f+D)===c){if(L===-1)return K();f=L+N,L=p.indexOf(u,f),I=p.indexOf(i,f)}else if(I!==-1&&(I<L||L===-1))h.push(p.substring(f,I)),f=I+O,I=p.indexOf(i,f);else{if(L===-1)break;if(h.push(p.substring(f,L)),re(L+N),B&&(he(),x))return K();if(_&&P.length>=_)return K(!0)}else for(E=f,f++;;){if((E=p.indexOf(e,E+1))===-1)return M||z.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:P.length,index:f}),ne();if(E===l-1)return ne(p.substring(f,E).replace(ie,e));if(e!==T||p[E+1]!==T){if(e===T||E===0||p[E-1]!==T){I!==-1&&I<E+1&&(I=p.indexOf(i,E+1)),L!==-1&&L<E+1&&(L=p.indexOf(u,E+1));var oe=te(L===-1?I:Math.min(I,L));if(p.substr(E+1+oe,O)===i){h.push(p.substring(f,E).replace(ie,e)),p[f=E+1+oe+O]!==e&&(E=p.indexOf(e,f)),I=p.indexOf(i,f),L=p.indexOf(u,f);break}var Y=te(L);if(p.substring(E+1+Y,E+1+Y+N)===u){if(h.push(p.substring(f,E).replace(ie,e)),re(E+1+Y+N),I=p.indexOf(i,f),E=p.indexOf(e,f),B&&(he(),x))return K();if(_&&P.length>=_)return K(!0);break}z.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:P.length,index:f}),E++}}else E++}return ne();function se(j){P.push(j),v=f}function te(j){var Ce=0;if(j!==-1){var me=p.substring(E+1,j);me&&me.trim()===""&&(Ce=me.length)}return Ce}function ne(j){return M||(j===void 0&&(j=p.substring(f)),h.push(j),f=l,se(h),B&&he()),K()}function re(j){f=j,se(h),h=[],L=p.indexOf(u,f)}function K(j){return{data:P,errors:z,meta:{delimiter:i,linebreak:u,aborted:x,truncated:!!j,cursor:v+(Q||0)}}}function he(){m(K()),P=[],z=[]}},this.abort=function(){x=!0},this.getCharIndex=function(){return f}}function De(t){var e=t.data,i=g[e.workerId],u=!1;if(e.error)i.userError(e.error,e.file);else if(e.results&&e.results.data){var c={abort:function(){u=!0,Ee(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:be,resume:be};if(b(i.userStep)){for(var m=0;m<e.results.data.length&&(i.userStep({data:e.results.data[m],errors:e.results.errors,meta:e.results.meta},c),!u);m++);delete e.results}else b(i.userChunk)&&(i.userChunk(e.results,c,e.file),delete e.results)}e.finished&&!u&&Ee(e.workerId,e.results)}function Ee(t,e){var i=g[t];b(i.userComplete)&&i.userComplete(e),i.terminate(),delete g[t]}function be(){throw new Error("Not implemented.")}function ge(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var i in t)e[i]=ge(t[i]);return e}function ee(t,e){return function(){t.apply(e,arguments)}}function b(t){return typeof t=="function"}return a&&(r.onmessage=function(t){var e=t.data;if(o.WORKER_ID===void 0&&e&&(o.WORKER_ID=e.workerId),typeof e.input=="string")r.postMessage({workerId:o.WORKER_ID,results:o.parse(e.input,e.config),finished:!0});else if(r.File&&e.input instanceof File||e.input instanceof Object){var i=o.parse(e.input,e.config);i&&r.postMessage({workerId:o.WORKER_ID,results:i,finished:!0})}}),(k.prototype=Object.create(w.prototype)).constructor=k,(G.prototype=Object.create(w.prototype)).constructor=G,(ue.prototype=Object.create(ue.prototype)).constructor=ue,(fe.prototype=Object.create(w.prototype)).constructor=fe,o})});var we=Se(Re());var ce;function Ze(n,r){let s,a=new RegExp(`${r}\\s*\\(`,"g"),g=[];if(!n||!r)return g;for(;(s=a.exec(n))!==null;){let d=[],o=1,F=s.index,w=a.lastIndex,k=w-1;for(;o!==0&&k<n.length;)k++,n[k]==="("?o++:n[k]===")"?o--:n[k]===","&&o===1&&(d.push(n.substring(w,k).trim()),w=k+1);w<k&&d.push(n.substring(w,k).trim()),g.push([n.substring(F,k+1),d])}return g}function Ge(n){return/^".+"$/.test(n)||/^'.+'$/.test(n)?n.substring(1,n.length-1):n}function Ve(n,r){if(typeof n=="object"&&n!==null&&n.name){r=r||"";let s=n.name.split(".");return s.length>1?s[s.length-2]+=r:s.length===1&&(s[0]+=r),s.join(".")}return""}function Ye(n){return!isNaN(parseFloat(n))&&isFinite(n)}function et(n){if(ce)return ce[n];try{let r=document.cookie.split("; ");ce={};for(let s=r.length-1;s>=0;s--){let a=r[s].split("=");a[1]=decodeURIComponent(a[1]),a[1].substr(0,2)==="s:"&&(a[1]=a[1].slice(2),a[1]=a[1].slice(0,a[1].lastIndexOf("."))),ce[a[0]]=decodeURIComponent(a[1])}return ce[n]}catch(r){return console.error("Cookie error",r),null}}function ve(n){let r=atob(n.split(",")[1]),s=n.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(r.length),g=new Uint8Array(a);for(let d=0;d<r.length;d++)g[d]=r.charCodeAt(d);return new Blob([g],{type:s})}function tt(n){return n.clipboardData?n.clipboardData.getData("text"):null}function nt(n,r){return new Promise((s,a)=>{let g=new Image;g.src=URL.createObjectURL(n),g.onload=()=>{let{width:d}=g,{height:o}=g;d<=r&&o<=r&&s(n);let F,w;d>o?(w=o*(r/d),F=r):(F=d*(r/o),w=r);let k=document.createElement("canvas");k.width=F,k.height=w,k.getContext("2d").drawImage(g,0,0,F,w),k.toBlob(s,n.type)},g.onerror=a})}function rt(...n){let r=[];for(let a=0,g=n.length;a<g;a++)r=r.concat(n[a].split("/"));let s=[];for(let a=0,g=r.length;a<g;a++){let d=r[a];!d||d==="."||(d===".."?s.pop():s.push(d))}return r[0]===""&&s.unshift(""),s.join("/")||(s.length?"/":".")}function it(n){let r=document.createElement("script"),s=document.getElementsByTagName("script")[0];r.src=n,s.parentNode.insertBefore(r,s)}function st(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Oe={};function Le(n,r){let s,a=r||(n&&n.name?n.name:null),g=a?Oe[a]:null;return new Promise((d,o)=>{g?d(g):n instanceof Blob?(s=new FileReader,s.onloadend=()=>{let F=s.result;a&&(Oe[a]=F),d(F)},s.onerror=F=>{o(F)},s.readAsDataURL(n)):o(new Error("TypeError: Require Blob"))})}function Ue(n){let r=new FileReader;return new Promise((s,a)=>{r.onloadend=()=>{s(r.result)},r.onerror=g=>{a(g)},n instanceof Blob?r.readAsArrayBuffer(n):a(new Error("TypeError: Require Blob"))})}function Pe(n){let r;return new Promise((s,a)=>{try{r=ve(n),s(r)}catch(g){a(g)}})}function ze(n){let r=n.match(/<\s?form .*theme-([A-z-]+)/);return r&&r.length>1?r[1]:null}function qe(n){if(typeof n!="string"){console.error("Cannot extract form title. Not a string.");return}let r=n.match(/<\s?h3 [^>]*id="form-title">([^<]+)</);return r&&r.length>1?r[1]:null}function Fe(n){var g;let r=n.trim(),s={skipEmptyLines:!0},a=we.default.parse(r,s);if(a.errors.some(d=>d.code==="UndetectableDelimiter")){let d=we.default.parse(r,{...s,delimiter:","});d.errors.length===0&&d.data.every(o=>o.length===1)&&(a=d)}if(a.errors.length){let[d]=a.errors;throw d instanceof Error||(d=new Error((g=d.message)!=null?g:String(d))),d}return a.data}function Ae(n,r){let s=n.shift(),a=[];r=typeof r!="object"?{}:r,s=s.map(o=>o.trim()),s=s.map((o,F)=>{let w=o.split("::"),k;return w&&w.length===2?(k=r[w[1]]||w[1],a[F]=k,w[0]):(a[F]="",o)}),s.every(We);let d=new DOMParser().parseFromString("<root></root>","text/xml");return n.forEach(o=>{let F=d.createElement("item");d.firstChild.appendChild(F),o.forEach((w,k)=>{let G=d.createElement(s[k]);a[k]&&G.setAttribute("lang",a[k]),G.textContent=w.trim(),F.appendChild(G)})}),d}function Be(n,r){let s=Fe(n);return Ae(s,r)}function Me(n){let r,s;return Array.isArray(n)?r=n:r=[n],s=r.reduce((a,g)=>{let d="";return g&&typeof g.name<"u"&&typeof g.value<"u"&&g.value!==""&&g.value!==null&&(d=a?"&":"",d+=Ne(g.name,g.value)),a+d},""),s.length>0?`?${s}`:""}function Ne(n,r){let s,a="";if(typeof r=="object"){for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(a&&(a+="&"),a+=`${encodeURIComponent(n)}[${encodeURIComponent(s)}]=${encodeURIComponent(r[s])}`);return a}return`${encodeURIComponent(n)}=${encodeURIComponent(r)}`}var $e=(()=>{let n=["A-Z","a-z","_","\\u{C0}-\\u{D6}","\\u{D8}-\\u{F6}","\\u{F8}-\\u{2FF}","\\u{370}-\\u{37D}","\\u{37F}-\\u{1FFF}","\\u{200C}-\\u{200D}","\\u{2070}-\\u{218F}","\\u{2C00}-\\u{2FEF}","\\u{3001}-\\u{D7FF}","\\u{F900}-\\u{FDCF}","\\u{FDF0}-\\u{FFFD}","\\u{10000}-\\u{EFFFF}"],r=["-",...n,'"."',"\\u{B7}","0-9","\\u{0300}-\\u{036F}","\\u{203F}-\\u{2040}"],s=`[${n.join("")}]`,a=`[${r.join("")}]`,g=`^${s}${a}*$`;return new RegExp(g,"u")})(),We=n=>{if($e.test(n))return!0;throw new Error(`CSV column heading "${n}" cannot be turned into a valid XML element`)};function He(n){n=n.endsWith("/")?n.substring(0,n.length-1):n;let r=n.substring(n.lastIndexOf("/")+1);return r==="preview"||r==="i"?null:r}var Ie={blobToDataUri:Le,blobToArrayBuffer:Ue,dataUriToBlob:Pe,dataUriToBlobSync:ve,getThemeFromFormStr:ze,getTitleFromFormStr:qe,csvToXml:Be,arrayToXml:Ae,csvToArray:Fe,getQueryString:Me,getEnketoId:He};var de=window.env?{...window.env}:{},Te;de.experimentalOptimizations={...de.experimentalOptimizations,computeAsync:((Te=de.experimentalOptimizations)==null?void 0:Te.computeAsync)||/[?&]computeAsync\b/.test(window.location.search)};var ae=de;var Z=Je(),y={},Ke=5*1e3*1e3,je="/login",Qe="/thanks",Xe=["returnUrl",{q:"return_url",s:"returnUrl"},{q:"form",s:"xformUrl"},{q:"xform",s:"xformUrl"},"instanceId",{q:"instance_id",s:"instanceId"},"parentWindowOrigin",{q:"parent_window_origin",s:"parentWindowOrigin"},"print","format","landscape","margin","touch"];Xe.forEach(n=>{typeof n=="string"&&typeof Z[n]<"u"&&typeof y[n]>"u"?y[n]=Z[n]:typeof Z[n.q]<"u"&&typeof y[n.s]>"u"&&(y[n.s]=Z[n.q])});y.loginUrl=ae.basePath+je;y.defaultReturnUrl=ae.basePath+Qe;y.defaults={};for(let n in Z)if(Object.prototype.hasOwnProperty.call(Z,n)){let r=decodeURIComponent(n).match(/d\[(.*)\]/);r&&r[1]&&(y.defaults[r[1]]=Z[n])}for(let n in ae)Object.prototype.hasOwnProperty.call(ae,n)&&(y[n]=ae[n]);y.submissionParameter&&y.submissionParameter.name&&(y.submissionParameter.value=Z[y.submissionParameter.name]);y.languageOverrideParameter=Z.lang?{name:"lang",value:Z.lang}:void 0;y.maxSize=Ke;window.location.pathname.includes("/preview/")||window.location.pathname.endsWith("/preview")?y.type="preview":window.location.pathname.includes("/single/")?y.type="single":window.location.pathname.includes("/edit/")?y.type="edit":window.location.pathname.includes("/view/")?y.type="view":y.type="other";y.offline=window.location.pathname.includes("/x/");y.offlinePath=y.offline?"/x":"";y.enketoId=Ie.getEnketoId(window.location.pathname);y.type==="single"&&y.enketoId.length<32&&(y.multipleAllowed=!0);y.goTo=y.type==="edit"||y.type==="preview"||y.type==="view";y.printRelevantOnly=!!y.instanceId;function Je(){let n,r,a=window.location.search.substring(1).split("&"),g={};for(let d=0;d<a.length;d++){let o=a[d].split("=");o[0].length>0&&(n=decodeURIComponent(o[1]),r=n==="true"?!0:n==="false"?!1:n,g[o[0]]=r)}return g}var ht=y;export{ae as a,Ze as b,Ge as c,Ve as d,Ye as e,et as f,ve as g,tt as h,nt as i,rt as j,it as k,st as l,Ie as m,ht as n};
/*! Bundled license information:

papaparse/papaparse.min.js:
  (* @license
  Papa Parse
  v5.4.1
  https://github.com/mholt/PapaParse
  License: MIT
  *)
*/
//# sourceMappingURL=chunk-Q3Q473PS.js.map