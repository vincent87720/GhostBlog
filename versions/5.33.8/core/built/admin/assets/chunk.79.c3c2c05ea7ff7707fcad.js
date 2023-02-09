"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[79],{38285:(t,e,n)=>{n.d(e,{ro:()=>g,lb:()=>m})
var i=n(8651),a=n(88521),s=n(16140),r=n(30180),o=n(8142),c=n(48206)
function _(){const t=(0,c.x1)()
if(t){const e="internal_error";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),t.setStatus(e)}}var d=n(27448),p=n(21535)
function l(){const t=this.getScope()
if(t){const e=t.getSpan()
if(e)return{"sentry-trace":e.toTraceparent()}}return{}}function u(t,e,n){if(!(0,c.zu)(e))return t.sampled=!1,t
if(void 0!==t.sampled)return t.setMetadata({sampleRate:Number(t.sampled)}),t
let i
return"function"==typeof e.tracesSampler?(i=e.tracesSampler(n),t.setMetadata({sampleRate:Number(i)})):void 0!==n.parentSampled?i=n.parentSampled:(i=e.tracesSampleRate,t.setMetadata({sampleRate:Number(i)})),r=i,((0,s.i2)(r)||"number"!=typeof r&&"boolean"!=typeof r?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`),0):!(r<0||r>1)||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${r}.`),0))?i?(t.sampled=Math.random()<i,t.sampled?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`),t)):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] Discarding transaction because "+("function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)
var r}function h(t,e){const n=this.getClient(),i=n&&n.getOptions()||{},s=i.instrumenter||"sentry",r=t.instrumenter||"sentry"
s!==r&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.error(`A transaction was started with instrumenter=\`${r}\`, but the SDK is configured with the \`${s}\` instrumenter.\nThe transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),t.sampled=!1)
let o=new p.Y(t,this)
return o=u(o,i,{parentSampled:t.parentSampled,transactionContext:t,...e}),o.sampled&&o.initSpanRecorder(i._experiments&&i._experiments.maxSpans),o}function m(t,e,n,i,a,s,r){const o=t.getClient(),c=o&&o.getOptions()||{}
let _=new d.io(e,t,n,i,r,a)
return _=u(_,c,{parentSampled:e.parentSampled,transactionContext:e,...s}),_.sampled&&_.initSpanRecorder(c._experiments&&c._experiments.maxSpans),_}function g(){!function(){const t=(0,i.cu)()
t.__SENTRY__&&(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=h),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=l))}(),(0,r.KV)()&&function(){const e=(0,i.cu)()
if(!e.__SENTRY__)return
const n={mongodb:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo),mongoose:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo)({mongoose:!0}),mysql:()=>new((0,r.l$)(t,"./integrations/node/mysql").Mysql),pg:()=>new((0,r.l$)(t,"./integrations/node/postgres").Postgres)},a=Object.keys(n).filter((t=>!!(0,r.$y)(t))).map((t=>{try{return n[t]()}catch(t){return}})).filter((t=>t))
a.length>0&&(e.__SENTRY__.integrations=[...e.__SENTRY__.integrations||[],...a])}(),(0,o.o)("error",_),(0,o.o)("unhandledrejection",_)}t=n.hmd(t)},27448:(t,e,n)=>{n.d(e,{hd:()=>_,io:()=>p,mg:()=>c,nT:()=>o})
var i=n(88468),a=n(88521),s=n(20484),r=n(21535)
const o=1e3,c=3e4,_=5e3
class d extends s.gB{constructor(t,e,n,i){super(i),this._pushActivity=t,this._popActivity=e,this.transactionSpanId=n}add(t){t.spanId!==this.transactionSpanId&&(t.finish=e=>{t.endTimestamp="number"==typeof e?e:(0,i._I)(),this._popActivity(t.spanId)},void 0===t.endTimestamp&&this._pushActivity(t.spanId)),super.add(t)}}class p extends r.Y{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._beforeFinishCallbacks=[]}constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:_,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
super(t,e),this._idleHub=e,this._idleTimeout=n,this._finalTimeout=i,this._heartbeatInterval=s,this._onScope=r,p.prototype.__init.call(this),p.prototype.__init2.call(this),p.prototype.__init3.call(this),p.prototype.__init4.call(this),r&&(l(e),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),e.configureScope((t=>t.setSpan(this)))),this._startIdleTimeout(),setTimeout((()=>{this._finished||(this.setStatus("deadline_exceeded"),this.finish())}),this._finalTimeout)}finish(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i._I)()
if(this._finished=!0,this.activities={},this.spanRecorder){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] finishing IdleTransaction",new Date(1e3*t).toISOString(),this.op)
for(const e of this._beforeFinishCallbacks)e(this,t)
this.spanRecorder.spans=this.spanRecorder.spans.filter((e=>{if(e.spanId===this.spanId)return!0
e.endTimestamp||(e.endTimestamp=t,e.setStatus("cancelled"),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(e,void 0,2)))
const n=e.startTimestamp<t
return n||("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(e,void 0,2)),n})),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] flushing IdleTransaction")}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] No active IdleTransaction")
return this._onScope&&l(this._idleHub),super.finish(t)}registerBeforeFinishCallback(t){this._beforeFinishCallbacks.push(t)}initSpanRecorder(t){if(!this.spanRecorder){const e=t=>{this._finished||this._pushActivity(t)},n=t=>{this._finished||this._popActivity(t)}
this.spanRecorder=new d(e,n,this.spanId,t),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}_cancelIdleTimeout(){this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0)}_startIdleTimeout(t){this._cancelIdleTimeout(),this._idleTimeoutID=setTimeout((()=>{this._finished||0!==Object.keys(this.activities).length||this.finish(t)}),this._idleTimeout)}_pushActivity(t){this._cancelIdleTimeout(),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] pushActivity: ${t}`),this.activities[t]=!0,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(t){if(this.activities[t]&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`[Tracing] popActivity ${t}`),delete this.activities[t],("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){const t=(0,i._I)()+this._idleTimeout/1e3
this._startIdleTimeout(t)}}_beat(){if(this._finished)return
const t=Object.keys(this.activities).join("")
t===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this.finish()):this._pingHeartbeat()}_pingHeartbeat(){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout((()=>{this._beat()}),this._heartbeatInterval)}}function l(t){const e=t.getScope()
e&&e.getTransaction()&&e.setSpan(void 0)}},98079:(t,e,n)=>{n.r(e),n.d(e,{BROWSER_TRACING_INTEGRATION_ID:()=>it,BrowserTracing:()=>st,IdleTransaction:()=>U.io,Integrations:()=>i,Span:()=>ct.Dr,SpanStatus:()=>ot,TRACEPARENT_REGEXP:()=>B.K,Transaction:()=>_t.Y,addExtensionMethods:()=>a.ro,defaultRequestInstrumentationOptions:()=>et,extractTraceparentData:()=>B.q,getActiveTransaction:()=>Y.x1,hasTracingEnabled:()=>Y.zu,instrumentOutgoingRequests:()=>nt,spanStatusfromHttpCode:()=>ct.Zd,startIdleTransaction:()=>a.lb,stripUrlQueryAndFragment:()=>o.rt})
var i={}
n.r(i),n.d(i,{Apollo:()=>N,BrowserTracing:()=>st,Express:()=>p,GraphQL:()=>b,Mongo:()=>v,Mysql:()=>T,Postgres:()=>f,Prisma:()=>R})
var a=n(38285)
function s(t){let e,n=t[0],i=1
for(;i<t.length;){const a=t[i],s=t[i+1]
if(i+=2,("optionalAccess"===a||"optionalCall"===a)&&null==n)return
"access"===a||"optionalAccess"===a?(e=n,n=s(n)):"call"!==a&&"optionalCall"!==a||(n=s((function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a]
return n.call(e,...i)})),e=void 0)}return n}var r=n(88521),o=n(72702),c=n(14205),_=n(16140)
function d(t){const e=s([t,"call",t=>t(),"access",t=>t.getClient,"call",t=>t(),"optionalAccess",t=>t.getOptions,"call",t=>t()])
return"sentry"!==(s([e,"optionalAccess",t=>t.instrumenter])||"sentry")}class p{static __initStatic(){this.id="Express"}__init(){this.name=p.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
p.prototype.__init.call(this),this._router=t.router||t.app,this._methods=(Array.isArray(t.methods)?t.methods:[]).concat("use")}setupOnce(t,e){this._router?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Express Integration is skipped because of instrumenter configuration."):(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
e.forEach((e=>h(t,e)))}(this._router,this._methods),function(t){const e="settings"in t
e&&void 0===t._router&&t.lazyrouter&&t.lazyrouter()
const n=e?t._router:t
if(!n)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Routing instrumentation is currently only supported in Express 4."))
const i=Object.getPrototypeOf(n),a=i.process_params
i.process_params=function(t,e,n,i,r){n._reconstructedRoute||(n._reconstructedRoute="")
const{layerRoutePath:d,isRegex:p,isArray:l,numExtraSegments:u}=function(t){const e=s([t,"access",t=>t.route,"optionalAccess",t=>t.path]),n=(0,_.Kj)(e),i=Array.isArray(e)
if(!e)return{isRegex:n,isArray:i,numExtraSegments:0}
const a=i?Math.max(e.reduce(((t,e)=>t+(0,o.$A)(e.toString())),0)-(0,o.$A)(t.path||""),0):0,r=function(t,e){return t?e.map((t=>t.toString())).join(","):e&&e.toString()}(i,e)
return{layerRoutePath:r,isRegex:n,isArray:i,numExtraSegments:a}}(t);(d||p||l)&&(n._hasParameters=!0)
const h=(d||t.path||"").split("/").filter((t=>t.length>0&&(p||l||!t.includes("*")))).join("/")
if(h&&h.length>0&&(n._reconstructedRoute+=`/${h}${p?"/":""}`),(0,o.$A)(n.originalUrl||"")+u===(0,o.$A)(n._reconstructedRoute)){n._hasParameters||n._reconstructedRoute!==n.originalUrl&&(n._reconstructedRoute=n.originalUrl)
const t=i.__sentry_transaction
if(t&&"custom"!==t.metadata.source){const e=n._reconstructedRoute||"/"
t.setName(...(0,c.oA)(n,{path:!0,method:!0,customRoute:e}))}}return a.call(this,t,e,n,i,r)}}(this._router)):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("ExpressIntegration is missing an Express instance")}}function l(t,e){const n=t.length
switch(n){case 2:return function(n,i){const a=i.__sentry_transaction
if(a){const n=a.startChild({description:t.name,op:`middleware.express.${e}`})
i.once("finish",(()=>{n.finish()}))}return t.call(this,n,i)}
case 3:return function(n,i,a){const r=s([i.__sentry_transaction,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,(function(){s([r,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
a.call(this,...e)}))}
case 4:return function(n,i,a,r){const o=s([a.__sentry_transaction,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,a,(function(){s([o,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
r.call(this,...e)}))}
default:throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)}}function u(t,e){return t.map((t=>"function"==typeof t?l(t,e):Array.isArray(t)?t.map((t=>"function"==typeof t?l(t,e):t)):t))}function h(t,e){const n=t[e]
return t[e]=function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a]
return n.call(this,...u(i,e))},t}p.__initStatic()
var m=n(30180),g=n(15834)
class f{static __initStatic(){this.id="Postgres"}__init(){this.name=f.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
f.prototype.__init.call(this),this._usePgNative=!!t.usePgNative}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Postgres Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("pg")
if(!n)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to require `pg` package."))
if(this._usePgNative&&!s([n,"access",t=>t.native,"optionalAccess",t=>t.Client]))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to access 'pg-native' bindings."))
const{Client:i}=this._usePgNative?n.native:n;(0,g.hl)(i.prototype,"query",(function(t){return function(n,i,a){const r=s([e().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),o=s([r,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.text,op:"db"})])
if("function"==typeof a)return t.call(this,n,i,(function(t,e){s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),a(t,e)}))
if("function"==typeof i)return t.call(this,n,(function(t,e){s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e)}))
const c=void 0!==i?t.call(this,n,i):t.call(this,n)
return(0,_.J8)(c)?c.then((t=>(s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):(s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),c)}}))}}f.__initStatic()
class T{constructor(){T.prototype.__init.call(this)}static __initStatic(){this.id="Mysql"}__init(){this.name=T.id}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Mysql Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("mysql/lib/Connection.js")
n?(0,g.hl)(n,"createQuery",(function(t){return function(n,i,a){const r=s([e().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),o=s([r,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.sql,op:"db"})])
return"function"==typeof a?t.call(this,n,i,(function(t,e,n){s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),a(t,e,n)})):"function"==typeof i?t.call(this,n,(function(t,e,n){s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e,n)})):t.call(this,n,i,a)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Mysql Integration was unable to require `mysql` package.")}}T.__initStatic()
const E=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],S={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]}
function y(t){return t&&"object"==typeof t&&t.once&&"function"==typeof t.once}class v{static __initStatic(){this.id="Mongo"}__init(){this.name=v.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
v.prototype.__init.call(this),this._operations=Array.isArray(t.operations)?t.operations:E,this._describeOperations=!("describeOperations"in t)||t.describeOperations,this._useMongoose=!!t.useMongoose}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Mongo Integration is skipped because of instrumenter configuration."))
const n=this._useMongoose?"mongoose":"mongodb",i=(0,m.$y)(n)
i?this._instrumentOperations(i.Collection,this._operations,e):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error(`Mongo Integration was unable to require \`${n}\` package.`)}_instrumentOperations(t,e,n){e.forEach((e=>this._patchOperation(t,e,n)))}_patchOperation(t,e,n){if(!(e in t.prototype))return
const i=this._getSpanContextFromOperationArguments.bind(this);(0,g.hl)(t.prototype,e,(function(t){return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
const c=r[r.length-1],d=n().getScope(),p=s([d,"optionalAccess",t=>t.getSpan,"call",t=>t()])
if("function"!=typeof c||"mapReduce"===e&&2===r.length){const n=s([p,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,r))]),a=t.call(this,...r)
if((0,_.J8)(a))return a.then((t=>(s([n,"optionalAccess",t=>t.finish,"call",t=>t()]),t)))
if(y(a)){const e=a
try{e.once("close",(()=>{s([n,"optionalAccess",t=>t.finish,"call",t=>t()])}))}catch(t){s([n,"optionalAccess",t=>t.finish,"call",t=>t()])}return e}return s([n,"optionalAccess",t=>t.finish,"call",t=>t()]),a}const l=s([p,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,r.slice(0,-1)))])
return t.call(this,...r.slice(0,-1),(function(t,e){s([l,"optionalAccess",t=>t.finish,"call",t=>t()]),c(t,e)}))}}))}_getSpanContextFromOperationArguments(t,e,n){const i={collectionName:t.collectionName,dbName:t.dbName,namespace:t.namespace},a={op:"db",description:e,data:i},s=S[e],r=Array.isArray(this._describeOperations)?this._describeOperations.includes(e):this._describeOperations
if(!s||!r)return a
try{if("mapReduce"===e){const[t,e]=n
i[s[0]]="string"==typeof t?t:t.name||"<anonymous>",i[s[1]]="string"==typeof e?e:e.name||"<anonymous>"}else for(let t=0;t<s.length;t++)i[s[t]]=JSON.stringify(n[t])}catch(t){}return a}}v.__initStatic()
class R{static __initStatic(){this.id="Prisma"}__init(){this.name=R.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var e
R.prototype.__init.call(this),(e=t.client)&&e.$use?this._client=t.client:("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)}setupOnce(t,e){this._client?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Prisma Integration is skipped because of instrumenter configuration."):this._client.$use(((t,n)=>{const i=s([e().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),a=t.action,r=t.model,o=s([i,"optionalAccess",t=>t.startChild,"call",t=>t({description:r?`${r} ${a}`:a,op:"db.sql.prisma"})]),c=n(t)
return(0,_.J8)(c)?c.then((t=>(s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):(s([o,"optionalAccess",t=>t.finish,"call",t=>t()]),c)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("PrismaIntegration is missing a Prisma Client Instance")}}R.__initStatic()
class b{constructor(){b.prototype.__init.call(this)}static __initStatic(){this.id="GraphQL"}__init(){this.name=b.id}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("GraphQL Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("graphql/execution/execute.js")
n?(0,g.hl)(n,"execute",(function(t){return function(){const n=e().getScope(),i=s([n,"optionalAccess",t=>t.getSpan,"call",t=>t()]),a=s([i,"optionalAccess",t=>t.startChild,"call",t=>t({description:"execute",op:"graphql.execute"})])
s([n,"optionalAccess",t=>t.setSpan,"call",t=>t(a)])
for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c]
const d=t.call(this,...o)
return(0,_.J8)(d)?d.then((t=>(s([a,"optionalAccess",t=>t.finish,"call",t=>t()]),s([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),t))):(s([a,"optionalAccess",t=>t.finish,"call",t=>t()]),s([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),d)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("GraphQL Integration was unable to require graphql/execution package.")}}b.__initStatic()
var D=n(7209)
class N{constructor(){N.prototype.__init.call(this)}static __initStatic(){this.id="Apollo"}__init(){this.name=N.id}setupOnce(t,e){if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Apollo Integration is skipped because of instrumenter configuration."))
const n=(0,m.$y)("apollo-server-core")
n?(0,g.hl)(n.ApolloServerBase.prototype,"constructSchema",(function(t){return function(){if(!this.config.resolvers)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&(this.config.schema?r.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property."):this.config.modules&&r.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."),r.kg.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")),t.call(this)
const n=(0,D.lE)(this.config.resolvers)
return this.config.resolvers=n.map((t=>(Object.keys(t).forEach((n=>{Object.keys(t[n]).forEach((i=>{"function"==typeof t[n][i]&&function(t,e,n,i){(0,g.hl)(t[e],n,(function(t){return function(){const a=s([i().getScope(),"optionalAccess",t=>t.getSpan,"call",t=>t()]),r=s([a,"optionalAccess",t=>t.startChild,"call",t=>t({description:`${e}.${n}`,op:"graphql.resolve"})])
for(var o=arguments.length,c=new Array(o),d=0;d<o;d++)c[d]=arguments[d]
const p=t.call(this,...c)
return(0,_.J8)(p)?p.then((t=>(s([r,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):(s([r,"optionalAccess",t=>t.finish,"call",t=>t()]),p)}}))}(t,n,i,e)}))})),t))),t.call(this)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Apollo Integration was unable to require apollo-server-core package.")}}N.__initStatic()
var B=n(75492),k=n(22850),G=n(68256),U=n(27448),Y=n(48206)
const x=n(27083).n2
var I=n(88468)
const A=(t,e,n)=>{let i,a
return s=>{e.value>=0&&(s||n)&&(a=e.value-(i||0),(a||void 0===i)&&(i=e.value,e.delta=a,t(e)))}},C=()=>x.__WEB_VITALS_POLYFILL__?x.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||(()=>{const t=x.performance.timing,e=x.performance.navigation.type,n={entryType:"navigation",startTime:0,type:2==e?"back_forward":1===e?"reload":"navigate"}
for(const i in t)"navigationStart"!==i&&"toJSON"!==i&&(n[i]=Math.max(t[i]-t.navigationStart,0))
return n})()):x.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],O=()=>{const t=C()
return t&&t.activationStart||0},w=(t,e)=>{const n=C()
let i="navigate"
return n&&(i=x.document.prerendering||O()>0?"prerender":n.type.replace(/_/g,"-")),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:`v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:i}},$=(t,e,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){const i=new PerformanceObserver((t=>{e(t.getEntries())}))
return i.observe(Object.assign({type:t,buffered:!0},n||{})),i}}catch(t){}},L=(t,e)=>{const n=i=>{"pagehide"!==i.type&&"hidden"!==x.document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}
addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)}
let M=-1
const P=()=>(M<0&&(M="hidden"!==x.document.visibilityState||x.document.prerendering?1/0:0,L((t=>{let{timeStamp:e}=t
M=e}),!0)),{get firstHiddenTime(){return M}}),q={}
function H(t){return"number"==typeof t&&isFinite(t)}function F(t,e){let{startTimestamp:n,...i}=e
return n&&t.startTimestamp>n&&(t.startTimestamp=n),t.startChild({startTimestamp:n,...i})}function j(){return x&&x.addEventListener&&x.performance}let z,X,J=0,Q={}
function W(t,e,n,i,a,s){const r=s?e[s]:e[`${n}End`],o=e[`${n}Start`]
o&&r&&F(t,{op:"browser",description:a||n,startTimestamp:i+(0,Y.XL)(o),endTimestamp:i+(0,Y.XL)(r)})}var Z=n(8651),K=n(8142),V=n(98902)
const tt=["localhost",/^\//],et={traceFetch:!0,traceXHR:!0,tracingOrigins:tt,tracePropagationTargets:tt}
function nt(t){const{traceFetch:e,traceXHR:n,tracePropagationTargets:i,tracingOrigins:a,shouldCreateSpanForRequest:s}={traceFetch:et.traceFetch,traceXHR:et.traceXHR,...t},r="function"==typeof s?s:t=>!0,o=t=>function(t,e){return(0,V.U0)(t,e||tt)}(t,i||a),c={}
e&&(0,K.o)("fetch",(t=>{!function(t,e,n,i){if(!(0,Y.zu)()||!t.fetchData||!e(t.fetchData.url))return
if(t.endTimestamp){const e=t.fetchData.__span
if(!e)return
const n=i[e]
return void(n&&(t.response?n.setHttpStatus(t.response.status):t.error&&n.setStatus("internal_error"),n.finish(),delete i[e]))}const a=(0,Z.Gd)().getScope(),s=a&&a.getSpan(),r=s&&s.transaction
if(s&&r){const e=s.startChild({data:{...t.fetchData,type:"fetch"},description:`${t.fetchData.method} ${t.fetchData.url}`,op:"http.client"})
t.fetchData.__span=e.spanId,i[e.spanId]=e
const a=t.args[0]
t.args[1]=t.args[1]||{}
const o=t.args[1]
n(t.fetchData.url)&&(o.headers=function(t,e,n,i){const a=(0,k.IQ)(e),s=n.toTraceparent(),r="undefined"!=typeof Request&&(0,_.V9)(t,Request)?t.headers:i.headers
if(r){if("undefined"!=typeof Headers&&(0,_.V9)(r,Headers)){const t=new Headers(r)
return t.append("sentry-trace",s),a&&t.append(k.bU,a),t}if(Array.isArray(r)){const t=[...r,["sentry-trace",s]]
return a&&t.push([k.bU,a]),t}{const t="baggage"in r?r.baggage:void 0,e=[]
return Array.isArray(t)?e.push(...t):t&&e.push(t),a&&e.push(a),{...r,"sentry-trace":s,baggage:e.length>0?e.join(","):void 0}}}return{"sentry-trace":s,baggage:a}}(a,r.getDynamicSamplingContext(),e,o),r.metadata.propagations++)}}(t,r,o,c)})),n&&(0,K.o)("xhr",(t=>{!function(t,e,n,i){if(!(0,Y.zu)()||t.xhr&&t.xhr.__sentry_own_request__||!(t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url)))return
const a=t.xhr.__sentry_xhr__
if(t.endTimestamp){const e=t.xhr.__sentry_xhr_span_id__
if(!e)return
const n=i[e]
return void(n&&(n.setHttpStatus(a.status_code),n.finish(),delete i[e]))}const s=(0,Z.Gd)().getScope(),r=s&&s.getSpan(),o=r&&r.transaction
if(r&&o){const e=r.startChild({data:{...a.data,type:"xhr",method:a.method,url:a.url},description:`${a.method} ${a.url}`,op:"http.client"})
if(t.xhr.__sentry_xhr_span_id__=e.spanId,i[t.xhr.__sentry_xhr_span_id__]=e,t.xhr.setRequestHeader&&n(t.xhr.__sentry_xhr__.url))try{t.xhr.setRequestHeader("sentry-trace",e.toTraceparent())
const n=o.getDynamicSamplingContext(),i=(0,k.IQ)(n)
i&&t.xhr.setRequestHeader(k.bU,i),o.metadata.propagations++}catch(t){}}}(t,r,o,c)}))}const it="BrowserTracing",at={idleTimeout:U.nT,finalTimeout:U.mg,heartbeatInterval:U.hd,markBackgroundTransactions:!0,routingInstrumentation:function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
if(!x||!x.location)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Could not initialize routing instrumentation due to invalid location"))
let i,a=x.location.href
e&&(i=t({name:x.location.pathname,op:"pageload",metadata:{source:"url"}})),n&&(0,K.o)("history",(e=>{let{to:n,from:s}=e
void 0===s&&a&&-1!==a.indexOf(n)?a=void 0:s!==n&&(a=void 0,i&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Finishing current transaction with op: ${i.op}`),i.finish()),i=t({name:x.location.pathname,op:"navigation",metadata:{source:"url"}}))}))},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{},...et}
class st{__init(){this.name=it}constructor(t){st.prototype.__init.call(this),this.options={...at,...t},void 0!==this.options._experiments.enableLongTask&&(this.options.enableLongTask=this.options._experiments.enableLongTask),t&&!t.tracePropagationTargets&&t.tracingOrigins&&(this.options.tracePropagationTargets=t.tracingOrigins),function(){const t=j()
t&&I.Z1&&(t.mark&&x.performance.mark("sentry-tracing-init"),(t=>{const e=w("CLS",0)
let n,i=0,a=[]
const s=t=>{t.forEach((t=>{if(!t.hadRecentInput){const s=a[0],r=a[a.length-1]
i&&0!==a.length&&t.startTime-r.startTime<1e3&&t.startTime-s.startTime<5e3?(i+=t.value,a.push(t)):(i=t.value,a=[t]),i>e.value&&(e.value=i,e.entries=a,n&&n())}}))},o=$("layout-shift",s)
o&&(n=A((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS"),Q.cls={value:t.value,unit:""},X=e)}),e),L((()=>{s(o.takeRecords()),n(!0)})))})(),(t=>{const e=P(),n=w("LCP")
let i
const a=t=>{const a=t[t.length-1]
if(a){const t=Math.max(a.startTime-O(),0)
t<e.firstHiddenTime&&(n.value=t,n.entries=[a],i())}},s=$("largest-contentful-paint",a)
if(s){i=A((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP"),Q.lcp={value:t.value,unit:"millisecond"},z=e)}),n)
const t=()=>{q[n.id]||(a(s.takeRecords()),s.disconnect(),q[n.id]=!0,i(!0))};["keydown","click"].forEach((e=>{addEventListener(e,t,{once:!0,capture:!0})})),L(t,!0)}})(),(t=>{const e=P(),n=w("FID")
let i
const a=t=>{t.startTime<e.firstHiddenTime&&(n.value=t.processingStart-t.startTime,n.entries.push(t),i(!0))},s=t=>{t.forEach(a)},o=$("first-input",s)
i=A((t=>{const e=t.entries.pop()
if(!e)return
const n=(0,Y.XL)(I.Z1),i=(0,Y.XL)(e.startTime);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FID"),Q.fid={value:t.value,unit:"millisecond"},Q["mark.fid"]={value:n+i,unit:"second"}}),n),o&&L((()=>{s(o.takeRecords()),o.disconnect()}),!0)})())}(),this.options.enableLongTask&&$("longtask",(t=>{for(const e of t){const t=(0,Y.x1)()
if(!t)return
const n=(0,Y.XL)(I.Z1+e.startTime),i=(0,Y.XL)(e.duration)
t.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:n,endTimestamp:n+i})}}))}setupOnce(t,e){this._getCurrentHub=e
const{routingInstrumentation:n,startTransactionOnLocationChange:i,startTransactionOnPageLoad:a,markBackgroundTransactions:s,traceFetch:o,traceXHR:c,tracePropagationTargets:_,shouldCreateSpanForRequest:d,_experiments:p}=this.options
n((t=>this._createRouteTransaction(t)),a,i),s&&(x&&x.document?x.document.addEventListener("visibilitychange",(()=>{const t=(0,Y.x1)()
if(x.document.hidden&&t){const e="cancelled";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),t.status||t.setStatus(e),t.setTag("visibilitychange","document.hidden"),t.finish()}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),p.enableInteractions&&this._registerInteractionListener(),nt({traceFetch:o,traceXHR:c,tracePropagationTargets:_,shouldCreateSpanForRequest:d})}_createRouteTransaction(t){if(!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`))
const{beforeNavigate:e,idleTimeout:n,finalTimeout:i,heartbeatInterval:s}=this.options,o="pageload"===t.op,c=o?rt("sentry-trace"):null,_=o?rt("baggage"):null,d=c?(0,B.q)(c):void 0,p=_?(0,k.EN)(_):void 0,l={...t,...d,metadata:{...t.metadata,dynamicSamplingContext:d&&!p?{}:p},trimEnd:!0},u="function"==typeof e?e(l):l,h=void 0===u?{...l,sampled:!1}:u
h.metadata=h.name!==l.name?{...h.metadata,source:"custom"}:h.metadata,this._latestRouteName=h.name,this._latestRouteSource=h.metadata&&h.metadata.source,!1===h.sampled&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Will not send ${h.op} transaction because of beforeNavigate.`),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Starting ${h.op} transaction on scope`)
const m=this._getCurrentHub(),{location:g}=x,f=(0,a.lb)(m,h,n,i,!0,{location:g},s)
return f.registerBeforeFinishCallback((t=>{!function(t){const e=j()
if(!e||!x.performance.getEntries||!I.Z1)return;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Tracing] Adding & adjusting spans using Performance API")
const n=(0,Y.XL)(I.Z1),i=e.getEntries()
let a,s
if(i.slice(J).forEach((e=>{const i=(0,Y.XL)(e.startTime),o=(0,Y.XL)(e.duration)
if(!("navigation"===t.op&&n+i<t.startTimestamp))switch(e.entryType){case"navigation":!function(t,e,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((i=>{W(t,e,i,n)})),W(t,e,"secureConnection",n,"TLS/SSL","connectEnd"),W(t,e,"fetch",n,"cache","domainLookupStart"),W(t,e,"domainLookup",n,"DNS"),function(t,e,n){F(t,{op:"browser",description:"request",startTimestamp:n+(0,Y.XL)(e.requestStart),endTimestamp:n+(0,Y.XL)(e.responseEnd)}),F(t,{op:"browser",description:"response",startTimestamp:n+(0,Y.XL)(e.responseStart),endTimestamp:n+(0,Y.XL)(e.responseEnd)})}(t,e,n)}(t,e,n),a=n+(0,Y.XL)(e.responseStart),s=n+(0,Y.XL)(e.requestStart)
break
case"mark":case"paint":case"measure":{!function(t,e,n,i,a){const s=a+n,r=s+i
F(t,{description:e.name,endTimestamp:r,op:e.entryType,startTimestamp:s})}(t,e,i,o,n)
const a=P(),s=e.startTime<a.firstHiddenTime
"first-paint"===e.name&&s&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FP"),Q.fp={value:e.startTime,unit:"millisecond"}),"first-contentful-paint"===e.name&&s&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FCP"),Q.fcp={value:e.startTime,unit:"millisecond"})
break}case"resource":{const a=e.name.replace(x.location.origin,"")
!function(t,e,n,i,a,s){if("xmlhttprequest"===e.initiatorType||"fetch"===e.initiatorType)return
const r={}
"transferSize"in e&&(r["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(r["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(r["Decoded Body Size"]=e.decodedBodySize)
const o=s+i
F(t,{description:n,endTimestamp:o+a,op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",startTimestamp:o,data:r})}(t,e,a,i,o,n)
break}}})),J=Math.max(i.length-1,0),function(t){const e=x.navigator
if(!e)return
const n=e.connection
n&&(n.effectiveType&&t.setTag("effectiveConnectionType",n.effectiveType),n.type&&t.setTag("connectionType",n.type),H(n.rtt)&&(Q["connection.rtt"]={value:n.rtt,unit:"millisecond"})),H(e.deviceMemory)&&t.setTag("deviceMemory",`${e.deviceMemory} GB`),H(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}(t),"pageload"===t.op){"number"==typeof a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding TTFB"),Q.ttfb={value:1e3*(a-t.startTimestamp),unit:"millisecond"},"number"==typeof s&&s<=a&&(Q["ttfb.requestTime"]={value:1e3*(a-s),unit:"millisecond"})),["fcp","fp","lcp"].forEach((e=>{if(!Q[e]||n>=t.startTimestamp)return
const i=Q[e].value,a=n+(0,Y.XL)(i),s=Math.abs(1e3*(a-t.startTimestamp)),o=s-i;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Measurements] Normalized ${e} from ${i} to ${s} (${o})`),Q[e].value=s}))
const e=Q["mark.fid"]
e&&Q.fid&&(F(t,{description:"first input delay",endTimestamp:e.value+(0,Y.XL)(Q.fid.value),op:"ui.action",startTimestamp:e.value}),delete Q["mark.fid"]),"fcp"in Q||delete Q.cls,Object.keys(Q).forEach((e=>{t.setMeasurement(e,Q[e].value,Q[e].unit)})),function(t){z&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP Data"),z.element&&t.setTag("lcp.element",(0,G.Rt)(z.element)),z.id&&t.setTag("lcp.id",z.id),z.url&&t.setTag("lcp.url",z.url.trim().slice(0,200)),t.setTag("lcp.size",z.size)),X&&X.sources&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS Data"),X.sources.forEach(((e,n)=>t.setTag(`cls.source.${n+1}`,(0,G.Rt)(e.node)))))}(t)}z=void 0,X=void 0,Q={}}(t)})),f}_registerInteractionListener(){let t
const e=()=>{const{idleTimeout:e,finalTimeout:n,heartbeatInterval:i}=this.options,s="ui.action.click"
if(t&&(t.finish(),t=void 0),!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${s} transaction because _getCurrentHub is invalid.`))
if(!this._latestRouteName)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`))
const o=this._getCurrentHub(),{location:c}=x,_={name:this._latestRouteName,op:s,trimEnd:!0,metadata:{source:this._latestRouteSource||"url"}}
t=(0,a.lb)(o,_,e,n,!0,{location:c},i)};["click"].forEach((t=>{addEventListener(t,e,{once:!1,capture:!0})}))}}function rt(t){const e=(0,G.qT)(`meta[name=${t}]`)
return e?e.getAttribute("content"):null}var ot,ct=n(20484)
!function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(ot||(ot={}))
var _t=n(21535);("undefined"==typeof __SENTRY_TRACING__||__SENTRY_TRACING__)&&(0,a.ro)()},20484:(t,e,n)=>{n.d(e,{Dr:()=>c,Zd:()=>_,gB:()=>o})
var i=n(7209),a=n(88468),s=n(88521),r=n(15834)
class o{__init(){this.spans=[]}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
o.prototype.__init.call(this),this._maxlen=t}add(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)}}class c{__init2(){this.traceId=(0,i.DM)()}__init3(){this.spanId=(0,i.DM)().substring(16)}__init4(){this.startTimestamp=(0,a._I)()}__init5(){this.tags={}}__init6(){this.data={}}__init7(){this.instrumenter="sentry"}constructor(t){if(c.prototype.__init2.call(this),c.prototype.__init3.call(this),c.prototype.__init4.call(this),c.prototype.__init5.call(this),c.prototype.__init6.call(this),c.prototype.__init7.call(this),!t)return this
t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp),t.instrumenter&&(this.instrumenter=t.instrumenter)}startChild(t){const e=new c({...t,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId})
if(e.spanRecorder=this.spanRecorder,e.spanRecorder&&e.spanRecorder.add(e),e.transaction=this.transaction,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&e.transaction){const n=`[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`
e.transaction.metadata.spanMetadata[e.spanId]={logMessage:n},s.kg.log(n)}return e}setTag(t,e){return this.tags={...this.tags,[t]:e},this}setData(t,e){return this.data={...this.data,[t]:e},this}setStatus(t){return this.status=t,this}setHttpStatus(t){this.setTag("http.status_code",String(t))
const e=_(t)
return"unknown_error"!==e&&this.setStatus(e),this}isSuccess(){return"ok"===this.status}finish(t){if(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:t}=this.transaction.metadata.spanMetadata[this.spanId]
t&&s.kg.log(t.replace("Starting","Finishing"))}this.endTimestamp="number"==typeof t?t:(0,a._I)()}toTraceparent(){let t=""
return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${t}`}toContext(){return(0,r.Jr)({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(t){return this.data=t.data||{},this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=t.spanId||this.spanId,this.startTimestamp=t.startTimestamp||this.startTimestamp,this.status=t.status,this.tags=t.tags||{},this.traceId=t.traceId||this.traceId,this}getTraceContext(){return(0,r.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return(0,r.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function _(t){if(t<400&&t>=100)return"ok"
if(t>=400&&t<500)switch(t){case 401:return"unauthenticated"
case 403:return"permission_denied"
case 404:return"not_found"
case 409:return"already_exists"
case 413:return"failed_precondition"
case 429:return"resource_exhausted"
default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline_exceeded"
default:return"internal_error"}return"unknown_error"}},21535:(t,e,n)=>{n.d(e,{Y:()=>c})
var i=n(8651),a=n(88468),s=n(88521),r=n(15834),o=n(20484)
class c extends o.Dr{__init(){this._measurements={}}__init2(){this._contexts={}}__init3(){this._frozenDynamicSamplingContext=void 0}constructor(t,e){super(t),c.prototype.__init.call(this),c.prototype.__init2.call(this),c.prototype.__init3.call(this),this._hub=e||(0,i.Gd)(),this._name=t.name||"",this.metadata={source:"custom",...t.metadata,spanMetadata:{},changes:[],propagations:0},this._trimEnd=t.trimEnd,this.transaction=this
const n=this.metadata.dynamicSamplingContext
n&&(this._frozenDynamicSamplingContext={...n})}get name(){return this._name}set name(t){this.setName(t)}setName(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom"
t===this.name&&e===this.metadata.source||this.metadata.changes.push({source:this.metadata.source,timestamp:(0,a.ph)(),propagations:this.metadata.propagations}),this._name=t,this.metadata.source=e}initSpanRecorder(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
this.spanRecorder||(this.spanRecorder=new o.gB(t)),this.spanRecorder.add(this)}setContext(t,e){null===e?delete this._contexts[t]:this._contexts[t]=e}setMeasurement(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
this._measurements[t]={value:e,unit:n}}setMetadata(t){this.metadata={...this.metadata,...t}}finish(t){if(void 0!==this.endTimestamp)return
if(this.name||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(t),!0!==this.sampled){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
const t=this._hub.getClient()
return void(t&&t.recordDroppedEvent("sample_rate","transaction"))}const e=this.spanRecorder?this.spanRecorder.spans.filter((t=>t!==this&&t.endTimestamp)):[]
this._trimEnd&&e.length>0&&(this.endTimestamp=e.reduce(((t,e)=>t.endTimestamp&&e.endTimestamp?t.endTimestamp>e.endTimestamp?t:e:t)).endTimestamp)
const n=this.metadata,i={contexts:{...this._contexts,trace:this.getTraceContext()},spans:e,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...n,dynamicSamplingContext:this.getDynamicSamplingContext()},...n.source&&{transaction_info:{source:n.source,changes:n.changes,propagations:n.propagations}}}
return Object.keys(this._measurements).length>0&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),i.measurements=this._measurements),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(i)}toContext(){const t=super.toContext()
return(0,r.Jr)({...t,name:this.name,trimEnd:this._trimEnd})}updateWithContext(t){return super.updateWithContext(t),this.name=t.name||"",this._trimEnd=t.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext
const t=this._hub||(0,i.Gd)(),e=t&&t.getClient()
if(!e)return{}
const{environment:n,release:a}=e.getOptions()||{},{publicKey:s}=e.getDsn()||{},o=this.metadata.sampleRate,c=void 0!==o?o.toString():void 0,_=t.getScope(),{segment:d}=_&&_.getUser()||{},p=this.metadata.source,l=p&&"url"!==p?this.name:void 0
return(0,r.Jr)({environment:n,release:a,transaction:l,user_segment:d,public_key:s,trace_id:this.traceId,sample_rate:c})}}},48206:(t,e,n)=>{n.d(e,{XL:()=>r,x1:()=>s,zu:()=>a})
var i=n(8651)
function a(t){const e=(0,i.Gd)().getClient(),n=t||e&&e.getOptions()
return!!n&&("tracesSampleRate"in n||"tracesSampler"in n)}function s(t){const e=(t||(0,i.Gd)()).getScope()
return e&&e.getTransaction()}function r(t){return t/1e3}}}])

//# sourceMappingURL=chunk.79.c3c2c05ea7ff7707fcad.map