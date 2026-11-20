var Mo=Object.defineProperty;var Lo=(s,t,e)=>t in s?Mo(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var D=(s,t,e)=>Lo(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Ft={GAS_URL:"daxi_grade_sys_gas_url",SESSION:"daxi_grade_sys_session_v4"},Ws=/^https:\/\/script\.google\.com\/macros\/s\/[a-zA-Z0-9_-]+\/exec$/,Ao=300*1e3,Co=new Set(["getStudentScores","getTeacherClassData","getAdminClasses","getAdminClassData","getAdminGradeCohortData","getAdminOverview"]),Po=new Set(["logout","logoutAdmin","changeTeacherPassword","changeStudentPassword","autoResizeColumns","updateHomeroomTeachers","adminImportHistoricalGrades"]),le=new Map,ce=new Map,To="https://script.google.com/macros/s/AKfycby0G1hk9Z3OxFq7uR5leRMZqHhNqYypZRzvByvQlYcV_0AoE-Y9fPnHoTsPcu9IJw_1yQ/exec";function Li(s){const t=String(s||"").trim();return t?Ws.test(t):!0}function $e(){le.clear(),ce.clear()}function Ze(){if(typeof window<"u"&&window.location&&window.location.hostname.includes("script.google.com"))return window.location.href.split("?")[0].split("#")[0];const s=localStorage.getItem(Ft.GAS_URL);return s&&Ws.test(s.trim())?s.trim():To}function Je(s){const t=String(s||"").trim();return t&&!Ws.test(t)?!1:($e(),t?localStorage.setItem(Ft.GAS_URL,t):localStorage.removeItem(Ft.GAS_URL),!0)}function Xt(){try{const s=sessionStorage.getItem(Ft.SESSION);return s?JSON.parse(s):null}catch{return null}}function Ms(s){$e(),sessionStorage.setItem(Ft.SESSION,JSON.stringify(s))}function Vs(){$e(),sessionStorage.removeItem(Ft.SESSION);try{localStorage.removeItem(Ft.SESSION)}catch{}}function Do(s){if(!s||typeof s!="object")return JSON.stringify(s);const t=Object.keys(s).filter(n=>n!=="authToken"&&s[n]!==void 0).sort(),e={};return t.forEach(n=>{e[n]=s[n]}),JSON.stringify(e)}function Wt(s){if(s===null||typeof s!="object")return s;if(typeof structuredClone=="function")try{return structuredClone(s)}catch{}return JSON.parse(JSON.stringify(s))}async function J(s,t={},e={}){Po.has(s)&&$e();const n=Ze(),i={action:s,authToken:Xt()?.authToken,...t},o=Co.has(s)&&typeof window<"u",a=!!(e&&e.forceRefresh),r=i.authToken||"anon",l=o?`${r}::${s}::${Do(t)}`:"";if(o&&!a){const h=le.get(l);if(h&&Date.now()-h.ts<Ao)return Wt(h.data);if(ce.has(l)){const f=await ce.get(l);return Wt(f)}}else o&&a&&le.delete(l);const c=(async()=>{if(typeof window<"u"&&window.google?.script?.run)try{const g=await new Promise((p,b)=>{window.google.script.run.withSuccessHandler(p).withFailureHandler(b).requestApiBridge(i)});return o&&g&&g.success&&le.set(l,{ts:Date.now(),data:Wt(g)}),g}catch{return{success:!1,message:"系統服務暫時無法回應，請稍後重試或洽教務處註冊組。"}}const h=typeof AbortController<"u"?new AbortController:null,u=h?setTimeout(()=>h.abort(),s==="getAdminGradeCohortData"?45e3:25e3):null;try{const g=await fetch(n,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(i),signal:h?h.signal:void 0});if(!g.ok)throw new Error(`GAS 伺服器回應錯誤 (狀態碼 ${g.status})`);const p=await g.json();return o&&p&&p.success&&le.set(l,{ts:Date.now(),data:Wt(p)}),p}catch(g){return g&&g.name==="AbortError"?{success:!1,timeout:!0,message:"伺服器回應較慢（連線逾時），請稍後點擊重新整理再試。"}:{success:!1,message:"無法連線至校務服務，請稍後重試；如持續發生，請洽教務處註冊組。"}}finally{u!==null&&clearTimeout(u)}})();if(o&&!a){ce.set(l,c);try{const h=await c;return Wt(h)}finally{ce.delete(l)}}const d=await c;return o?Wt(d):d}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Me(s){return s+.5|0}const _t=(s,t,e)=>Math.max(Math.min(s,e),t);function de(s){return _t(Me(s*2.55),0,255)}function Lt(s){return _t(Me(s*255),0,255)}function vt(s){return _t(Me(s/2.55)/100,0,1)}function dn(s){return _t(Me(s*100),0,100)}const at={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ls=[..."0123456789ABCDEF"],Oo=s=>Ls[s&15],Io=s=>Ls[(s&240)>>4]+Ls[s&15],Ce=s=>(s&240)>>4===(s&15),Ro=s=>Ce(s.r)&&Ce(s.g)&&Ce(s.b)&&Ce(s.a);function Eo(s){var t=s.length,e;return s[0]==="#"&&(t===4||t===5?e={r:255&at[s[1]]*17,g:255&at[s[2]]*17,b:255&at[s[3]]*17,a:t===5?at[s[4]]*17:255}:(t===7||t===9)&&(e={r:at[s[1]]<<4|at[s[2]],g:at[s[3]]<<4|at[s[4]],b:at[s[5]]<<4|at[s[6]],a:t===9?at[s[7]]<<4|at[s[8]]:255})),e}const No=(s,t)=>s<255?t(s):"";function Fo(s){var t=Ro(s)?Oo:Io;return s?"#"+t(s.r)+t(s.g)+t(s.b)+No(s.a,t):void 0}const Bo=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ai(s,t,e){const n=t*Math.min(e,1-e),i=(o,a=(o+s/30)%12)=>e-n*Math.max(Math.min(a-3,9-a,1),-1);return[i(0),i(8),i(4)]}function jo(s,t,e){const n=(i,o=(i+s/60)%6)=>e-e*t*Math.max(Math.min(o,4-o,1),0);return[n(5),n(3),n(1)]}function Ho(s,t,e){const n=Ai(s,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)n[i]*=1-t-e,n[i]+=t;return n}function zo(s,t,e,n,i){return s===i?(t-e)/n+(t<e?6:0):t===i?(e-s)/n+2:(s-t)/n+4}function qs(s){const e=s.r/255,n=s.g/255,i=s.b/255,o=Math.max(e,n,i),a=Math.min(e,n,i),r=(o+a)/2;let l,c,d;return o!==a&&(d=o-a,c=r>.5?d/(2-o-a):d/(o+a),l=zo(e,n,i,d,o),l=l*60+.5),[l|0,c||0,r]}function Gs(s,t,e,n){return(Array.isArray(t)?s(t[0],t[1],t[2]):s(t,e,n)).map(Lt)}function Us(s,t,e){return Gs(Ai,s,t,e)}function Wo(s,t,e){return Gs(Ho,s,t,e)}function Vo(s,t,e){return Gs(jo,s,t,e)}function Ci(s){return(s%360+360)%360}function qo(s){const t=Bo.exec(s);let e=255,n;if(!t)return;t[5]!==n&&(e=t[6]?de(+t[5]):Lt(+t[5]));const i=Ci(+t[2]),o=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?n=Wo(i,o,a):t[1]==="hsv"?n=Vo(i,o,a):n=Us(i,o,a),{r:n[0],g:n[1],b:n[2],a:e}}function Go(s,t){var e=qs(s);e[0]=Ci(e[0]+t),e=Us(e),s.r=e[0],s.g=e[1],s.b=e[2]}function Uo(s){if(!s)return;const t=qs(s),e=t[0],n=dn(t[1]),i=dn(t[2]);return s.a<255?`hsla(${e}, ${n}%, ${i}%, ${vt(s.a)})`:`hsl(${e}, ${n}%, ${i}%)`}const hn={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},un={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Yo(){const s={},t=Object.keys(un),e=Object.keys(hn);let n,i,o,a,r;for(n=0;n<t.length;n++){for(a=r=t[n],i=0;i<e.length;i++)o=e[i],r=r.replace(o,hn[o]);o=parseInt(un[a],16),s[r]=[o>>16&255,o>>8&255,o&255]}return s}let Pe;function Ko(s){Pe||(Pe=Yo(),Pe.transparent=[0,0,0,0]);const t=Pe[s.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Xo=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Zo(s){const t=Xo.exec(s);let e=255,n,i,o;if(t){if(t[7]!==n){const a=+t[7];e=t[8]?de(a):_t(a*255,0,255)}return n=+t[1],i=+t[3],o=+t[5],n=255&(t[2]?de(n):_t(n,0,255)),i=255&(t[4]?de(i):_t(i,0,255)),o=255&(t[6]?de(o):_t(o,0,255)),{r:n,g:i,b:o,a:e}}}function Jo(s){return s&&(s.a<255?`rgba(${s.r}, ${s.g}, ${s.b}, ${vt(s.a)})`:`rgb(${s.r}, ${s.g}, ${s.b})`)}const ps=s=>s<=.0031308?s*12.92:Math.pow(s,1/2.4)*1.055-.055,Vt=s=>s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);function Qo(s,t,e){const n=Vt(vt(s.r)),i=Vt(vt(s.g)),o=Vt(vt(s.b));return{r:Lt(ps(n+e*(Vt(vt(t.r))-n))),g:Lt(ps(i+e*(Vt(vt(t.g))-i))),b:Lt(ps(o+e*(Vt(vt(t.b))-o))),a:s.a+e*(t.a-s.a)}}function Te(s,t,e){if(s){let n=qs(s);n[t]=Math.max(0,Math.min(n[t]+n[t]*e,t===0?360:1)),n=Us(n),s.r=n[0],s.g=n[1],s.b=n[2]}}function Pi(s,t){return s&&Object.assign(t||{},s)}function fn(s){var t={r:0,g:0,b:0,a:255};return Array.isArray(s)?s.length>=3&&(t={r:s[0],g:s[1],b:s[2],a:255},s.length>3&&(t.a=Lt(s[3]))):(t=Pi(s,{r:0,g:0,b:0,a:1}),t.a=Lt(t.a)),t}function ta(s){return s.charAt(0)==="r"?Zo(s):qo(s)}class ve{constructor(t){if(t instanceof ve)return t;const e=typeof t;let n;e==="object"?n=fn(t):e==="string"&&(n=Eo(t)||Ko(t)||ta(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Pi(this._rgb);return t&&(t.a=vt(t.a)),t}set rgb(t){this._rgb=fn(t)}rgbString(){return this._valid?Jo(this._rgb):void 0}hexString(){return this._valid?Fo(this._rgb):void 0}hslString(){return this._valid?Uo(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,i=t.rgb;let o;const a=e===o?.5:e,r=2*a-1,l=n.a-i.a,c=((r*l===-1?r:(r+l)/(1+r*l))+1)/2;o=1-c,n.r=255&c*n.r+o*i.r+.5,n.g=255&c*n.g+o*i.g+.5,n.b=255&c*n.b+o*i.b+.5,n.a=a*n.a+(1-a)*i.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=Qo(this._rgb,t._rgb,e)),this}clone(){return new ve(this.rgb)}alpha(t){return this._rgb.a=Lt(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Me(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Te(this._rgb,2,t),this}darken(t){return Te(this._rgb,2,-t),this}saturate(t){return Te(this._rgb,1,t),this}desaturate(t){return Te(this._rgb,1,-t),this}rotate(t){return Go(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function bt(){}const ea=(()=>{let s=0;return()=>s++})();function j(s){return s==null}function q(s){if(Array.isArray&&Array.isArray(s))return!0;const t=Object.prototype.toString.call(s);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function E(s){return s!==null&&Object.prototype.toString.call(s)==="[object Object]"}function K(s){return(typeof s=="number"||s instanceof Number)&&isFinite(+s)}function ut(s,t){return K(s)?s:t}function I(s,t){return typeof s>"u"?t:s}const sa=(s,t)=>typeof s=="string"&&s.endsWith("%")?parseFloat(s)/100*t:+s;function z(s,t,e){if(s&&typeof s.call=="function")return s.apply(e,t)}function B(s,t,e,n){let i,o,a;if(q(s))for(o=s.length,i=0;i<o;i++)t.call(e,s[i],i);else if(E(s))for(a=Object.keys(s),o=a.length,i=0;i<o;i++)t.call(e,s[a[i]],a[i])}function Qe(s,t){let e,n,i,o;if(!s||!t||s.length!==t.length)return!1;for(e=0,n=s.length;e<n;++e)if(i=s[e],o=t[e],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function ts(s){if(q(s))return s.map(ts);if(E(s)){const t=Object.create(null),e=Object.keys(s),n=e.length;let i=0;for(;i<n;++i)t[e[i]]=ts(s[e[i]]);return t}return s}function Ti(s){return["__proto__","prototype","constructor"].indexOf(s)===-1}function na(s,t,e,n){if(!Ti(s))return;const i=t[s],o=e[s];E(i)&&E(o)?ye(i,o,n):t[s]=ts(o)}function ye(s,t,e){const n=q(t)?t:[t],i=n.length;if(!E(s))return s;e=e||{};const o=e.merger||na;let a;for(let r=0;r<i;++r){if(a=n[r],!E(a))continue;const l=Object.keys(a);for(let c=0,d=l.length;c<d;++c)o(l[c],s,a,e)}return s}function ge(s,t){return ye(s,t,{merger:ia})}function ia(s,t,e){if(!Ti(s))return;const n=t[s],i=e[s];E(n)&&E(i)?ge(n,i):Object.prototype.hasOwnProperty.call(t,s)||(t[s]=ts(i))}const pn={"":s=>s,x:s=>s.x,y:s=>s.y};function oa(s){const t=s.split("."),e=[];let n="";for(const i of t)n+=i,n.endsWith("\\")?n=n.slice(0,-1)+".":(e.push(n),n="");return e}function aa(s){const t=oa(s);return e=>{for(const n of t){if(n==="")break;e=e&&e[n]}return e}}function we(s,t){return(pn[t]||(pn[t]=aa(t)))(s)}function Ys(s){return s.charAt(0).toUpperCase()+s.slice(1)}const es=s=>typeof s<"u",At=s=>typeof s=="function",gn=(s,t)=>{if(s.size!==t.size)return!1;for(const e of s)if(!t.has(e))return!1;return!0};function ra(s){return s.type==="mouseup"||s.type==="click"||s.type==="contextmenu"}const Y=Math.PI,ot=2*Y,la=ot+Y,ss=Number.POSITIVE_INFINITY,ca=Y/180,it=Y/2,Tt=Y/4,bn=Y*2/3,Di=Math.log10,Zt=Math.sign;function be(s,t,e){return Math.abs(s-t)<e}function xn(s){const t=Math.round(s);s=be(s,t,s/1e3)?t:s;const e=Math.pow(10,Math.floor(Di(s))),n=s/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function da(s){const t=[],e=Math.sqrt(s);let n;for(n=1;n<e;n++)s%n===0&&(t.push(n),t.push(s/n));return e===(e|0)&&t.push(e),t.sort((i,o)=>i-o).pop(),t}function ha(s){return typeof s=="symbol"||typeof s=="object"&&s!==null&&!(Symbol.toPrimitive in s||"toString"in s||"valueOf"in s)}function _e(s){return!ha(s)&&!isNaN(parseFloat(s))&&isFinite(s)}function ua(s,t){const e=Math.round(s);return e-t<=s&&e+t>=s}function fa(s,t,e){let n,i,o;for(n=0,i=s.length;n<i;n++)o=s[n][e],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function kt(s){return s*(Y/180)}function Ks(s){return s*(180/Y)}function mn(s){if(!K(s))return;let t=1,e=0;for(;Math.round(s*t)/t!==s;)t*=10,e++;return e}function pa(s,t){const e=t.x-s.x,n=t.y-s.y,i=Math.sqrt(e*e+n*n);let o=Math.atan2(n,e);return o<-.5*Y&&(o+=ot),{angle:o,distance:i}}function As(s,t){return Math.sqrt(Math.pow(t.x-s.x,2)+Math.pow(t.y-s.y,2))}function ga(s,t){return(s-t+la)%ot-Y}function nt(s){return(s%ot+ot)%ot}function Oi(s,t,e,n){const i=nt(s),o=nt(t),a=nt(e),r=nt(o-i),l=nt(a-i),c=nt(i-o),d=nt(i-a);return i===o||i===a||n&&o===a||r>l&&c<d}function rt(s,t,e){return Math.max(t,Math.min(e,s))}function ba(s){return rt(s,-32768,32767)}function Gt(s,t,e,n=1e-6){return s>=Math.min(t,e)-n&&s<=Math.max(t,e)+n}function Xs(s,t,e){e=e||(a=>s[a]<t);let n=s.length-1,i=0,o;for(;n-i>1;)o=i+n>>1,e(o)?i=o:n=o;return{lo:i,hi:n}}const Et=(s,t,e,n)=>Xs(s,e,n?i=>{const o=s[i][t];return o<e||o===e&&s[i+1][t]===e}:i=>s[i][t]<e),xa=(s,t,e)=>Xs(s,e,n=>s[n][t]>=e);function ma(s,t,e){let n=0,i=s.length;for(;n<i&&s[n]<t;)n++;for(;i>n&&s[i-1]>e;)i--;return n>0||i<s.length?s.slice(n,i):s}const Ii=["push","pop","shift","splice","unshift"];function va(s,t){if(s._chartjs){s._chartjs.listeners.push(t);return}Object.defineProperty(s,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Ii.forEach(e=>{const n="_onData"+Ys(e),i=s[e];Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value(...o){const a=i.apply(this,o);return s._chartjs.listeners.forEach(r=>{typeof r[n]=="function"&&r[n](...o)}),a}})})}function vn(s,t){const e=s._chartjs;if(!e)return;const n=e.listeners,i=n.indexOf(t);i!==-1&&n.splice(i,1),!(n.length>0)&&(Ii.forEach(o=>{delete s[o]}),delete s._chartjs)}function ya(s){const t=new Set(s);return t.size===s.length?s:Array.from(t)}const Ri=(function(){return typeof window>"u"?function(s){return s()}:window.requestAnimationFrame})();function Ei(s,t){let e=[],n=!1;return function(...i){e=i,n||(n=!0,Ri.call(window,()=>{n=!1,s.apply(t,e)}))}}function wa(s,t){let e;return function(...n){return t?(clearTimeout(e),e=setTimeout(s,t,n)):s.apply(this,n),t}}const Ni=s=>s==="start"?"left":s==="end"?"right":"center",st=(s,t,e)=>s==="start"?t:s==="end"?e:(t+e)/2,_a=(s,t,e,n)=>s===(n?"left":"right")?e:s==="center"?(t+e)/2:t;function ka(s,t,e){const n=t.length;let i=0,o=n;if(s._sorted){const{iScale:a,vScale:r,_parsed:l}=s,c=s.dataset&&s.dataset.options?s.dataset.options.spanGaps:null,d=a.axis,{min:h,max:f,minDefined:u,maxDefined:g}=a.getUserBounds();if(u){if(i=Math.min(Et(l,d,h).lo,e?n:Et(t,d,a.getPixelForValue(h)).lo),c){const p=l.slice(0,i+1).reverse().findIndex(b=>!j(b[r.axis]));i-=Math.max(0,p)}i=rt(i,0,n-1)}if(g){let p=Math.max(Et(l,a.axis,f,!0).hi+1,e?0:Et(t,d,a.getPixelForValue(f),!0).hi+1);if(c){const b=l.slice(p-1).findIndex(x=>!j(x[r.axis]));p+=Math.max(0,b)}o=rt(p,i,n)-i}else o=n-i}return{start:i,count:o}}function Sa(s){const{xScale:t,yScale:e,_scaleRanges:n}=s,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!n)return s._scaleRanges=i,!0;const o=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==e.min||n.ymax!==e.max;return Object.assign(n,i),o}const De=s=>s===0||s===1,yn=(s,t,e)=>-(Math.pow(2,10*(s-=1))*Math.sin((s-t)*ot/e)),wn=(s,t,e)=>Math.pow(2,-10*s)*Math.sin((s-t)*ot/e)+1,xe={linear:s=>s,easeInQuad:s=>s*s,easeOutQuad:s=>-s*(s-2),easeInOutQuad:s=>(s/=.5)<1?.5*s*s:-.5*(--s*(s-2)-1),easeInCubic:s=>s*s*s,easeOutCubic:s=>(s-=1)*s*s+1,easeInOutCubic:s=>(s/=.5)<1?.5*s*s*s:.5*((s-=2)*s*s+2),easeInQuart:s=>s*s*s*s,easeOutQuart:s=>-((s-=1)*s*s*s-1),easeInOutQuart:s=>(s/=.5)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2),easeInQuint:s=>s*s*s*s*s,easeOutQuint:s=>(s-=1)*s*s*s*s+1,easeInOutQuint:s=>(s/=.5)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2),easeInSine:s=>-Math.cos(s*it)+1,easeOutSine:s=>Math.sin(s*it),easeInOutSine:s=>-.5*(Math.cos(Y*s)-1),easeInExpo:s=>s===0?0:Math.pow(2,10*(s-1)),easeOutExpo:s=>s===1?1:-Math.pow(2,-10*s)+1,easeInOutExpo:s=>De(s)?s:s<.5?.5*Math.pow(2,10*(s*2-1)):.5*(-Math.pow(2,-10*(s*2-1))+2),easeInCirc:s=>s>=1?s:-(Math.sqrt(1-s*s)-1),easeOutCirc:s=>Math.sqrt(1-(s-=1)*s),easeInOutCirc:s=>(s/=.5)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1),easeInElastic:s=>De(s)?s:yn(s,.075,.3),easeOutElastic:s=>De(s)?s:wn(s,.075,.3),easeInOutElastic(s){return De(s)?s:s<.5?.5*yn(s*2,.1125,.45):.5+.5*wn(s*2-1,.1125,.45)},easeInBack(s){return s*s*((1.70158+1)*s-1.70158)},easeOutBack(s){return(s-=1)*s*((1.70158+1)*s+1.70158)+1},easeInOutBack(s){let t=1.70158;return(s/=.5)<1?.5*(s*s*(((t*=1.525)+1)*s-t)):.5*((s-=2)*s*(((t*=1.525)+1)*s+t)+2)},easeInBounce:s=>1-xe.easeOutBounce(1-s),easeOutBounce(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},easeInOutBounce:s=>s<.5?xe.easeInBounce(s*2)*.5:xe.easeOutBounce(s*2-1)*.5+.5};function Zs(s){if(s&&typeof s=="object"){const t=s.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function _n(s){return Zs(s)?s:new ve(s)}function gs(s){return Zs(s)?s:new ve(s).saturate(.5).darken(.1).hexString()}const $a=["x","y","borderWidth","radius","tension"],Ma=["color","borderColor","backgroundColor"];function La(s){s.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),s.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),s.set("animations",{colors:{type:"color",properties:Ma},numbers:{type:"number",properties:$a}}),s.describe("animations",{_fallback:"animation"}),s.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Aa(s){s.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const kn=new Map;function Ca(s,t){t=t||{};const e=s+JSON.stringify(t);let n=kn.get(e);return n||(n=new Intl.NumberFormat(s,t),kn.set(e,n)),n}function Fi(s,t,e){return Ca(t,e).format(s)}const Pa={values(s){return q(s)?s:""+s},numeric(s,t,e){if(s===0)return"0";const n=this.chart.options.locale;let i,o=s;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(i="scientific"),o=Ta(s,e)}const a=Di(Math.abs(o)),r=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:i,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),Fi(s,n,l)}};function Ta(s,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&s!==Math.floor(s)&&(e=s-Math.floor(s)),e}var Js={formatters:Pa};function Da(s){s.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Js.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),s.route("scale.ticks","color","","color"),s.route("scale.grid","color","","borderColor"),s.route("scale.border","color","","borderColor"),s.route("scale.title","color","","color"),s.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),s.describe("scales",{_fallback:"scale"}),s.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Bt=Object.create(null),Cs=Object.create(null);function me(s,t){if(!t)return s;const e=t.split(".");for(let n=0,i=e.length;n<i;++n){const o=e[n];s=s[o]||(s[o]=Object.create(null))}return s}function bs(s,t,e){return typeof t=="string"?ye(me(s,t),e):ye(me(s,""),t)}class Oa{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,i)=>gs(i.backgroundColor),this.hoverBorderColor=(n,i)=>gs(i.borderColor),this.hoverColor=(n,i)=>gs(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return bs(this,t,e)}get(t){return me(this,t)}describe(t,e){return bs(Cs,t,e)}override(t,e){return bs(Bt,t,e)}route(t,e,n,i){const o=me(this,t),a=me(this,n),r="_"+e;Object.defineProperties(o,{[r]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[r],c=a[i];return E(l)?Object.assign({},c,l):I(l,c)},set(l){this[r]=l}}})}apply(t){t.forEach(e=>e(this))}}var G=new Oa({_scriptable:s=>!s.startsWith("on"),_indexable:s=>s!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[La,Aa,Da]);function Ia(s){return!s||j(s.size)||j(s.family)?null:(s.style?s.style+" ":"")+(s.weight?s.weight+" ":"")+s.size+"px "+s.family}function ns(s,t,e,n,i){let o=t[i];return o||(o=t[i]=s.measureText(i).width,e.push(i)),o>n&&(n=o),n}function Ra(s,t,e,n){n=n||{};let i=n.data=n.data||{},o=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(i=n.data={},o=n.garbageCollect=[],n.font=t),s.save(),s.font=t;let a=0;const r=e.length;let l,c,d,h,f;for(l=0;l<r;l++)if(h=e[l],h!=null&&!q(h))a=ns(s,i,o,a,h);else if(q(h))for(c=0,d=h.length;c<d;c++)f=h[c],f!=null&&!q(f)&&(a=ns(s,i,o,a,f));s.restore();const u=o.length/2;if(u>e.length){for(l=0;l<u;l++)delete i[o[l]];o.splice(0,u)}return a}function Dt(s,t,e){const n=s.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*n)/n+i}function Sn(s,t){!t&&!s||(t=t||s.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,s.width,s.height),t.restore())}function Ps(s,t,e,n){Bi(s,t,e,n,null)}function Bi(s,t,e,n,i){let o,a,r,l,c,d,h,f;const u=t.pointStyle,g=t.rotation,p=t.radius;let b=(g||0)*ca;if(u&&typeof u=="object"&&(o=u.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){s.save(),s.translate(e,n),s.rotate(b),s.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),s.restore();return}if(!(isNaN(p)||p<=0)){switch(s.beginPath(),u){default:i?s.ellipse(e,n,i/2,p,0,0,ot):s.arc(e,n,p,0,ot),s.closePath();break;case"triangle":d=i?i/2:p,s.moveTo(e+Math.sin(b)*d,n-Math.cos(b)*p),b+=bn,s.lineTo(e+Math.sin(b)*d,n-Math.cos(b)*p),b+=bn,s.lineTo(e+Math.sin(b)*d,n-Math.cos(b)*p),s.closePath();break;case"rectRounded":c=p*.516,l=p-c,a=Math.cos(b+Tt)*l,h=Math.cos(b+Tt)*(i?i/2-c:l),r=Math.sin(b+Tt)*l,f=Math.sin(b+Tt)*(i?i/2-c:l),s.arc(e-h,n-r,c,b-Y,b-it),s.arc(e+f,n-a,c,b-it,b),s.arc(e+h,n+r,c,b,b+it),s.arc(e-f,n+a,c,b+it,b+Y),s.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*p,d=i?i/2:l,s.rect(e-d,n-l,2*d,2*l);break}b+=Tt;case"rectRot":h=Math.cos(b)*(i?i/2:p),a=Math.cos(b)*p,r=Math.sin(b)*p,f=Math.sin(b)*(i?i/2:p),s.moveTo(e-h,n-r),s.lineTo(e+f,n-a),s.lineTo(e+h,n+r),s.lineTo(e-f,n+a),s.closePath();break;case"crossRot":b+=Tt;case"cross":h=Math.cos(b)*(i?i/2:p),a=Math.cos(b)*p,r=Math.sin(b)*p,f=Math.sin(b)*(i?i/2:p),s.moveTo(e-h,n-r),s.lineTo(e+h,n+r),s.moveTo(e+f,n-a),s.lineTo(e-f,n+a);break;case"star":h=Math.cos(b)*(i?i/2:p),a=Math.cos(b)*p,r=Math.sin(b)*p,f=Math.sin(b)*(i?i/2:p),s.moveTo(e-h,n-r),s.lineTo(e+h,n+r),s.moveTo(e+f,n-a),s.lineTo(e-f,n+a),b+=Tt,h=Math.cos(b)*(i?i/2:p),a=Math.cos(b)*p,r=Math.sin(b)*p,f=Math.sin(b)*(i?i/2:p),s.moveTo(e-h,n-r),s.lineTo(e+h,n+r),s.moveTo(e+f,n-a),s.lineTo(e-f,n+a);break;case"line":a=i?i/2:Math.cos(b)*p,r=Math.sin(b)*p,s.moveTo(e-a,n-r),s.lineTo(e+a,n+r);break;case"dash":s.moveTo(e,n),s.lineTo(e+Math.cos(b)*(i?i/2:p),n+Math.sin(b)*p);break;case!1:s.closePath();break}s.fill(),t.borderWidth>0&&s.stroke()}}function yt(s,t,e){return e=e||.5,!t||s&&s.x>t.left-e&&s.x<t.right+e&&s.y>t.top-e&&s.y<t.bottom+e}function ls(s,t){s.save(),s.beginPath(),s.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),s.clip()}function cs(s){s.restore()}function Ea(s,t,e,n,i){if(!t)return s.lineTo(e.x,e.y);if(i==="middle"){const o=(t.x+e.x)/2;s.lineTo(o,t.y),s.lineTo(o,e.y)}else i==="after"!=!!n?s.lineTo(t.x,e.y):s.lineTo(e.x,t.y);s.lineTo(e.x,e.y)}function Na(s,t,e,n){if(!t)return s.lineTo(e.x,e.y);s.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?e.cp2x:e.cp1x,n?e.cp2y:e.cp1y,e.x,e.y)}function Fa(s,t){t.translation&&s.translate(t.translation[0],t.translation[1]),j(t.rotation)||s.rotate(t.rotation),t.color&&(s.fillStyle=t.color),t.textAlign&&(s.textAlign=t.textAlign),t.textBaseline&&(s.textBaseline=t.textBaseline)}function Ba(s,t,e,n,i){if(i.strikethrough||i.underline){const o=s.measureText(n),a=t-o.actualBoundingBoxLeft,r=t+o.actualBoundingBoxRight,l=e-o.actualBoundingBoxAscent,c=e+o.actualBoundingBoxDescent,d=i.strikethrough?(l+c)/2:c;s.strokeStyle=s.fillStyle,s.beginPath(),s.lineWidth=i.decorationWidth||2,s.moveTo(a,d),s.lineTo(r,d),s.stroke()}}function ja(s,t){const e=s.fillStyle;s.fillStyle=t.color,s.fillRect(t.left,t.top,t.width,t.height),s.fillStyle=e}function Jt(s,t,e,n,i,o={}){const a=q(t)?t:[t],r=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(s.save(),s.font=i.string,Fa(s,o),l=0;l<a.length;++l)c=a[l],o.backdrop&&ja(s,o.backdrop),r&&(o.strokeColor&&(s.strokeStyle=o.strokeColor),j(o.strokeWidth)||(s.lineWidth=o.strokeWidth),s.strokeText(c,e,n,o.maxWidth)),s.fillText(c,e,n,o.maxWidth),Ba(s,e,n,c,o),n+=Number(i.lineHeight);s.restore()}function is(s,t){const{x:e,y:n,w:i,h:o,radius:a}=t;s.arc(e+a.topLeft,n+a.topLeft,a.topLeft,1.5*Y,Y,!0),s.lineTo(e,n+o-a.bottomLeft),s.arc(e+a.bottomLeft,n+o-a.bottomLeft,a.bottomLeft,Y,it,!0),s.lineTo(e+i-a.bottomRight,n+o),s.arc(e+i-a.bottomRight,n+o-a.bottomRight,a.bottomRight,it,0,!0),s.lineTo(e+i,n+a.topRight),s.arc(e+i-a.topRight,n+a.topRight,a.topRight,0,-it,!0),s.lineTo(e+a.topLeft,n)}const Ha=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,za=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Wa(s,t){const e=(""+s).match(Ha);if(!e||e[1]==="normal")return t*1.2;switch(s=+e[2],e[3]){case"px":return s;case"%":s/=100;break}return t*s}const Va=s=>+s||0;function ji(s,t){const e={},n=E(t),i=n?Object.keys(t):t,o=E(s)?n?a=>I(s[a],s[t[a]]):a=>s[a]:()=>s;for(const a of i)e[a]=Va(o(a));return e}function qa(s){return ji(s,{top:"y",right:"x",bottom:"y",left:"x"})}function Ut(s){return ji(s,["topLeft","topRight","bottomLeft","bottomRight"])}function Q(s){const t=qa(s);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Z(s,t){s=s||{},t=t||G.font;let e=I(s.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let n=I(s.style,t.style);n&&!(""+n).match(za)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);const i={family:I(s.family,t.family),lineHeight:Wa(I(s.lineHeight,t.lineHeight),e),size:e,style:n,weight:I(s.weight,t.weight),string:""};return i.string=Ia(i),i}function Oe(s,t,e,n){let i,o,a;for(i=0,o=s.length;i<o;++i)if(a=s[i],a!==void 0&&a!==void 0)return a}function Ga(s,t,e){const{min:n,max:i}=s,o=sa(t,(i-n)/2),a=(r,l)=>e&&r===0?0:r+l;return{min:a(n,-Math.abs(o)),max:a(i,o)}}function Pt(s,t){return Object.assign(Object.create(s),t)}function Qs(s,t=[""],e,n,i=()=>s[0]){const o=e||s;typeof n>"u"&&(n=Vi("_fallback",s));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:s,_rootScopes:o,_fallback:n,_getTarget:i,override:r=>Qs([r,...s],t,o,n)};return new Proxy(a,{deleteProperty(r,l){return delete r[l],delete r._keys,delete s[0][l],!0},get(r,l){return zi(r,l,()=>tr(l,t,s,r))},getOwnPropertyDescriptor(r,l){return Reflect.getOwnPropertyDescriptor(r._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(s[0])},has(r,l){return Mn(r).includes(l)},ownKeys(r){return Mn(r)},set(r,l,c){const d=r._storage||(r._storage=i());return r[l]=d[l]=c,delete r._keys,!0}})}function Qt(s,t,e,n){const i={_cacheable:!1,_proxy:s,_context:t,_subProxy:e,_stack:new Set,_descriptors:Hi(s,n),setContext:o=>Qt(s,o,e,n),override:o=>Qt(s.override(o),t,e,n)};return new Proxy(i,{deleteProperty(o,a){return delete o[a],delete s[a],!0},get(o,a,r){return zi(o,a,()=>Ya(o,a,r))},getOwnPropertyDescriptor(o,a){return o._descriptors.allKeys?Reflect.has(s,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(s,a)},getPrototypeOf(){return Reflect.getPrototypeOf(s)},has(o,a){return Reflect.has(s,a)},ownKeys(){return Reflect.ownKeys(s)},set(o,a,r){return s[a]=r,delete o[a],!0}})}function Hi(s,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:n=t.indexable,_allKeys:i=t.allKeys}=s;return{allKeys:i,scriptable:e,indexable:n,isScriptable:At(e)?e:()=>e,isIndexable:At(n)?n:()=>n}}const Ua=(s,t)=>s?s+Ys(t):t,tn=(s,t)=>E(t)&&s!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function zi(s,t,e){if(Object.prototype.hasOwnProperty.call(s,t)||t==="constructor")return s[t];const n=e();return s[t]=n,n}function Ya(s,t,e){const{_proxy:n,_context:i,_subProxy:o,_descriptors:a}=s;let r=n[t];return At(r)&&a.isScriptable(t)&&(r=Ka(t,r,s,e)),q(r)&&r.length&&(r=Xa(t,r,s,a.isIndexable)),tn(t,r)&&(r=Qt(r,i,o&&o[t],a)),r}function Ka(s,t,e,n){const{_proxy:i,_context:o,_subProxy:a,_stack:r}=e;if(r.has(s))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+s);r.add(s);let l=t(o,a||n);return r.delete(s),tn(s,l)&&(l=en(i._scopes,i,s,l)),l}function Xa(s,t,e,n){const{_proxy:i,_context:o,_subProxy:a,_descriptors:r}=e;if(typeof o.index<"u"&&n(s))return t[o.index%t.length];if(E(t[0])){const l=t,c=i._scopes.filter(d=>d!==l);t=[];for(const d of l){const h=en(c,i,s,d);t.push(Qt(h,o,a&&a[s],r))}}return t}function Wi(s,t,e){return At(s)?s(t,e):s}const Za=(s,t)=>s===!0?t:typeof s=="string"?we(t,s):void 0;function Ja(s,t,e,n,i){for(const o of t){const a=Za(e,o);if(a){s.add(a);const r=Wi(a._fallback,e,i);if(typeof r<"u"&&r!==e&&r!==n)return r}else if(a===!1&&typeof n<"u"&&e!==n)return null}return!1}function en(s,t,e,n){const i=t._rootScopes,o=Wi(t._fallback,e,n),a=[...s,...i],r=new Set;r.add(n);let l=$n(r,a,e,o||e,n);return l===null||typeof o<"u"&&o!==e&&(l=$n(r,a,o,l,n),l===null)?!1:Qs(Array.from(r),[""],i,o,()=>Qa(t,e,n))}function $n(s,t,e,n,i){for(;e;)e=Ja(s,t,e,n,i);return e}function Qa(s,t,e){const n=s._getTarget();t in n||(n[t]={});const i=n[t];return q(i)&&E(e)?e:i||{}}function tr(s,t,e,n){let i;for(const o of t)if(i=Vi(Ua(o,s),e),typeof i<"u")return tn(s,i)?en(e,n,s,i):i}function Vi(s,t){for(const e of t){if(!e)continue;const n=e[s];if(typeof n<"u")return n}}function Mn(s){let t=s._keys;return t||(t=s._keys=er(s._scopes)),t}function er(s){const t=new Set;for(const e of s)for(const n of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(n);return Array.from(t)}function sr(s,t,e,n){const{iScale:i}=s,{key:o="r"}=this._parsing,a=new Array(n);let r,l,c,d;for(r=0,l=n;r<l;++r)c=r+e,d=t[c],a[r]={r:i.parse(we(d,o),c)};return a}const nr=Number.EPSILON||1e-14,te=(s,t)=>t<s.length&&!s[t].skip&&s[t],qi=s=>s==="x"?"y":"x";function ir(s,t,e,n){const i=s.skip?t:s,o=t,a=e.skip?t:e,r=As(o,i),l=As(a,o);let c=r/(r+l),d=l/(r+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=n*c,f=n*d;return{previous:{x:o.x-h*(a.x-i.x),y:o.y-h*(a.y-i.y)},next:{x:o.x+f*(a.x-i.x),y:o.y+f*(a.y-i.y)}}}function or(s,t,e){const n=s.length;let i,o,a,r,l,c=te(s,0);for(let d=0;d<n-1;++d)if(l=c,c=te(s,d+1),!(!l||!c)){if(be(t[d],0,nr)){e[d]=e[d+1]=0;continue}i=e[d]/t[d],o=e[d+1]/t[d],r=Math.pow(i,2)+Math.pow(o,2),!(r<=9)&&(a=3/Math.sqrt(r),e[d]=i*a*t[d],e[d+1]=o*a*t[d])}}function ar(s,t,e="x"){const n=qi(e),i=s.length;let o,a,r,l=te(s,0);for(let c=0;c<i;++c){if(a=r,r=l,l=te(s,c+1),!r)continue;const d=r[e],h=r[n];a&&(o=(d-a[e])/3,r[`cp1${e}`]=d-o,r[`cp1${n}`]=h-o*t[c]),l&&(o=(l[e]-d)/3,r[`cp2${e}`]=d+o,r[`cp2${n}`]=h+o*t[c])}}function rr(s,t="x"){const e=qi(t),n=s.length,i=Array(n).fill(0),o=Array(n);let a,r,l,c=te(s,0);for(a=0;a<n;++a)if(r=l,l=c,c=te(s,a+1),!!l){if(c){const d=c[t]-l[t];i[a]=d!==0?(c[e]-l[e])/d:0}o[a]=r?c?Zt(i[a-1])!==Zt(i[a])?0:(i[a-1]+i[a])/2:i[a-1]:i[a]}or(s,i,o),ar(s,o,t)}function Ie(s,t,e){return Math.max(Math.min(s,e),t)}function lr(s,t){let e,n,i,o,a,r=yt(s[0],t);for(e=0,n=s.length;e<n;++e)a=o,o=r,r=e<n-1&&yt(s[e+1],t),o&&(i=s[e],a&&(i.cp1x=Ie(i.cp1x,t.left,t.right),i.cp1y=Ie(i.cp1y,t.top,t.bottom)),r&&(i.cp2x=Ie(i.cp2x,t.left,t.right),i.cp2y=Ie(i.cp2y,t.top,t.bottom)))}function cr(s,t,e,n,i){let o,a,r,l;if(t.spanGaps&&(s=s.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")rr(s,i);else{let c=n?s[s.length-1]:s[0];for(o=0,a=s.length;o<a;++o)r=s[o],l=ir(c,r,s[Math.min(o+1,a-(n?0:1))%a],t.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,c=r}t.capBezierPoints&&lr(s,e)}function sn(){return typeof window<"u"&&typeof document<"u"}function nn(s){let t=s.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function os(s,t,e){let n;return typeof s=="string"?(n=parseInt(s,10),s.indexOf("%")!==-1&&(n=n/100*t.parentNode[e])):n=s,n}const ds=s=>s.ownerDocument.defaultView.getComputedStyle(s,null);function dr(s,t){return ds(s).getPropertyValue(t)}const hr=["top","right","bottom","left"];function Nt(s,t,e){const n={};e=e?"-"+e:"";for(let i=0;i<4;i++){const o=hr[i];n[o]=parseFloat(s[t+"-"+o+e])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const ur=(s,t,e)=>(s>0||t>0)&&(!e||!e.shadowRoot);function fr(s,t){const e=s.touches,n=e&&e.length?e[0]:s,{offsetX:i,offsetY:o}=n;let a=!1,r,l;if(ur(i,o,s.target))r=i,l=o;else{const c=t.getBoundingClientRect();r=n.clientX-c.left,l=n.clientY-c.top,a=!0}return{x:r,y:l,box:a}}function It(s,t){if("native"in s)return s;const{canvas:e,currentDevicePixelRatio:n}=t,i=ds(e),o=i.boxSizing==="border-box",a=Nt(i,"padding"),r=Nt(i,"border","width"),{x:l,y:c,box:d}=fr(s,e),h=a.left+(d&&r.left),f=a.top+(d&&r.top);let{width:u,height:g}=t;return o&&(u-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-h)/u*e.width/n),y:Math.round((c-f)/g*e.height/n)}}function pr(s,t,e){let n,i;if(t===void 0||e===void 0){const o=s&&nn(s);if(!o)t=s.clientWidth,e=s.clientHeight;else{const a=o.getBoundingClientRect(),r=ds(o),l=Nt(r,"border","width"),c=Nt(r,"padding");t=a.width-c.width-l.width,e=a.height-c.height-l.height,n=os(r.maxWidth,o,"clientWidth"),i=os(r.maxHeight,o,"clientHeight")}}return{width:t,height:e,maxWidth:n||ss,maxHeight:i||ss}}const St=s=>Math.round(s*10)/10;function gr(s,t,e,n){const i=ds(s),o=Nt(i,"margin"),a=os(i.maxWidth,s,"clientWidth")||ss,r=os(i.maxHeight,s,"clientHeight")||ss,l=pr(s,t,e);let{width:c,height:d}=l;if(i.boxSizing==="content-box"){const f=Nt(i,"border","width"),u=Nt(i,"padding");c-=u.width+f.width,d-=u.height+f.height}return c=Math.max(0,c-o.width),d=Math.max(0,n?c/n:d-o.height),c=St(Math.min(c,a,l.maxWidth)),d=St(Math.min(d,r,l.maxHeight)),c&&!d&&(d=St(c/2)),(t!==void 0||e!==void 0)&&n&&l.height&&d>l.height&&(d=l.height,c=St(Math.floor(d*n))),{width:c,height:d}}function Ln(s,t,e){const n=t||1,i=St(s.height*n),o=St(s.width*n);s.height=St(s.height),s.width=St(s.width);const a=s.canvas;return a.style&&(e||!a.style.height&&!a.style.width)&&(a.style.height=`${s.height}px`,a.style.width=`${s.width}px`),s.currentDevicePixelRatio!==n||a.height!==i||a.width!==o?(s.currentDevicePixelRatio=n,a.height=i,a.width=o,s.ctx.setTransform(n,0,0,n,0,0),!0):!1}const br=(function(){let s=!1;try{const t={get passive(){return s=!0,!1}};sn()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return s})();function An(s,t){const e=dr(s,t),n=e&&e.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Rt(s,t,e,n){return{x:s.x+e*(t.x-s.x),y:s.y+e*(t.y-s.y)}}function xr(s,t,e,n){return{x:s.x+e*(t.x-s.x),y:n==="middle"?e<.5?s.y:t.y:n==="after"?e<1?s.y:t.y:e>0?t.y:s.y}}function mr(s,t,e,n){const i={x:s.cp2x,y:s.cp2y},o={x:t.cp1x,y:t.cp1y},a=Rt(s,i,e),r=Rt(i,o,e),l=Rt(o,t,e),c=Rt(a,r,e),d=Rt(r,l,e);return Rt(c,d,e)}const vr=function(s,t){return{x(e){return s+s+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,n){return e-n},leftForLtr(e,n){return e-n}}},yr=function(){return{x(s){return s},setWidth(s){},textAlign(s){return s},xPlus(s,t){return s+t},leftForLtr(s,t){return s}}};function Yt(s,t,e){return s?vr(t,e):yr()}function Gi(s,t){let e,n;(t==="ltr"||t==="rtl")&&(e=s.canvas.style,n=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),s.prevTextDirection=n)}function Ui(s,t){t!==void 0&&(delete s.prevTextDirection,s.canvas.style.setProperty("direction",t[0],t[1]))}function Yi(s){return s==="angle"?{between:Oi,compare:ga,normalize:nt}:{between:Gt,compare:(t,e)=>t-e,normalize:t=>t}}function Cn({start:s,end:t,count:e,loop:n,style:i}){return{start:s%e,end:t%e,loop:n&&(t-s+1)%e===0,style:i}}function wr(s,t,e){const{property:n,start:i,end:o}=e,{between:a,normalize:r}=Yi(n),l=t.length;let{start:c,end:d,loop:h}=s,f,u;if(h){for(c+=l,d+=l,f=0,u=l;f<u&&a(r(t[c%l][n]),i,o);++f)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:h,style:s.style}}function Ki(s,t,e){if(!e)return[s];const{property:n,start:i,end:o}=e,a=t.length,{compare:r,between:l,normalize:c}=Yi(n),{start:d,end:h,loop:f,style:u}=wr(s,t,e),g=[];let p=!1,b=null,x,m,_;const S=()=>l(i,_,x)&&r(i,_)!==0,w=()=>r(o,x)===0||l(o,_,x),$=()=>p||S(),y=()=>!p||w();for(let v=d,L=d;v<=h;++v)m=t[v%a],!m.skip&&(x=c(m[n]),x!==_&&(p=l(x,i,o),b===null&&$()&&(b=r(x,i)===0?v:L),b!==null&&y()&&(g.push(Cn({start:b,end:v,loop:f,count:a,style:u})),b=null),L=v,_=x));return b!==null&&g.push(Cn({start:b,end:h,loop:f,count:a,style:u})),g}function Xi(s,t){const e=[],n=s.segments;for(let i=0;i<n.length;i++){const o=Ki(n[i],s.points,t);o.length&&e.push(...o)}return e}function _r(s,t,e,n){let i=0,o=t-1;if(e&&!n)for(;i<t&&!s[i].skip;)i++;for(;i<t&&s[i].skip;)i++;for(i%=t,e&&(o+=i);o>i&&s[o%t].skip;)o--;return o%=t,{start:i,end:o}}function kr(s,t,e,n){const i=s.length,o=[];let a=t,r=s[t],l;for(l=t+1;l<=e;++l){const c=s[l%i];c.skip||c.stop?r.skip||(n=!1,o.push({start:t%i,end:(l-1)%i,loop:n}),t=a=c.stop?l:null):(a=l,r.skip&&(t=l)),r=c}return a!==null&&o.push({start:t%i,end:a%i,loop:n}),o}function Sr(s,t){const e=s.points,n=s.options.spanGaps,i=e.length;if(!i)return[];const o=!!s._loop,{start:a,end:r}=_r(e,i,o,n);if(n===!0)return Pn(s,[{start:a,end:r,loop:o}],e,t);const l=r<a?r+i:r,c=!!s._fullLoop&&a===0&&r===i-1;return Pn(s,kr(e,a,l,c),e,t)}function Pn(s,t,e,n){return!n||!n.setContext||!e?t:$r(s,t,e,n)}function $r(s,t,e,n){const i=s._chart.getContext(),o=Tn(s.options),{_datasetIndex:a,options:{spanGaps:r}}=s,l=e.length,c=[];let d=o,h=t[0].start,f=h;function u(g,p,b,x){const m=r?-1:1;if(g!==p){for(g+=l;e[g%l].skip;)g-=m;for(;e[p%l].skip;)p+=m;g%l!==p%l&&(c.push({start:g%l,end:p%l,loop:b,style:x}),d=x,h=p%l)}}for(const g of t){h=r?h:g.start;let p=e[h%l],b;for(f=h+1;f<=g.end;f++){const x=e[f%l];b=Tn(n.setContext(Pt(i,{type:"segment",p0:p,p1:x,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:a}))),Mr(b,d)&&u(h,f-1,g.loop,d),p=x,d=b}h<f-1&&u(h,f-1,g.loop,d)}return c}function Tn(s){return{backgroundColor:s.backgroundColor,borderCapStyle:s.borderCapStyle,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderJoinStyle:s.borderJoinStyle,borderWidth:s.borderWidth,borderColor:s.borderColor}}function Mr(s,t){if(!t)return!1;const e=[],n=function(i,o){return Zs(o)?(e.includes(o)||e.push(o),e.indexOf(o)):o};return JSON.stringify(s,n)!==JSON.stringify(t,n)}function Re(s,t,e){return s.options.clip?s[e]:t[e]}function Lr(s,t){const{xScale:e,yScale:n}=s;return e&&n?{left:Re(e,t,"left"),right:Re(e,t,"right"),top:Re(n,t,"top"),bottom:Re(n,t,"bottom")}:t}function Zi(s,t){const e=t._clip;if(e.disabled)return!1;const n=Lr(t,s.chartArea);return{left:e.left===!1?0:n.left-(e.left===!0?0:e.left),right:e.right===!1?s.width:n.right+(e.right===!0?0:e.right),top:e.top===!1?0:n.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?s.height:n.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Ar{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,i){const o=e.listeners[i],a=e.duration;o.forEach(r=>r({chart:t,initial:e.initial,numSteps:a,currentStep:Math.min(n-e.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=Ri.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((n,i)=>{if(!n.running||!n.items.length)return;const o=n.items;let a=o.length-1,r=!1,l;for(;a>=0;--a)l=o[a],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),r=!0):(o[a]=o[o.length-1],o.pop());r&&(i.draw(),this._notify(i,n,t,"progress")),o.length||(n.running=!1,this._notify(i,n,t,"complete"),n.initial=!1),e+=o.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((n,i)=>Math.max(n,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var xt=new Ar;const Dn="transparent",Cr={boolean(s,t,e){return e>.5?t:s},color(s,t,e){const n=_n(s||Dn),i=n.valid&&_n(t||Dn);return i&&i.valid?i.mix(n,e).hexString():t},number(s,t,e){return s+(t-s)*e}};class Pr{constructor(t,e,n,i){const o=e[n];i=Oe([t.to,i,o,t.from]);const a=Oe([t.from,o,i]);this._active=!0,this._fn=t.fn||Cr[t.type||typeof a],this._easing=xe[t.easing]||xe.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=a,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const i=this._target[this._prop],o=n-this._start,a=this._duration-o;this._start=n,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Oe([t.to,e,i,t.from]),this._from=Oe([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,i=this._prop,o=this._from,a=this._loop,r=this._to;let l;if(this._active=o!==r&&(a||e<n),!this._active){this._target[i]=r,this._notify(!0);return}if(e<0){this._target[i]=o;return}l=e/n%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(o,r,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][e]()}}class Ji{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!E(t))return;const e=Object.keys(G.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!E(o))return;const a={};for(const r of e)a[r]=o[r];(q(o.properties)&&o.properties||[i]).forEach(r=>{(r===i||!n.has(r))&&n.set(r,a)})})}_animateOptions(t,e){const n=e.options,i=Dr(t,n);if(!i)return[];const o=this._createAnimations(i,n);return n.$shared&&Tr(t.options.$animations,n).then(()=>{t.options=n},()=>{}),o}_createAnimations(t,e){const n=this._properties,i=[],o=t.$animations||(t.$animations={}),a=Object.keys(e),r=Date.now();let l;for(l=a.length-1;l>=0;--l){const c=a[l];if(c.charAt(0)==="$")continue;if(c==="options"){i.push(...this._animateOptions(t,e));continue}const d=e[c];let h=o[c];const f=n.get(c);if(h)if(f&&h.active()){h.update(f,d,r);continue}else h.cancel();if(!f||!f.duration){t[c]=d;continue}o[c]=h=new Pr(f,t,c,d),i.push(h)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const n=this._createAnimations(t,e);if(n.length)return xt.add(this._chart,n),!0}}function Tr(s,t){const e=[],n=Object.keys(t);for(let i=0;i<n.length;i++){const o=s[n[i]];o&&o.active()&&e.push(o.wait())}return Promise.all(e)}function Dr(s,t){if(!t)return;let e=s.options;if(!e){s.options=t;return}return e.$shared&&(s.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function On(s,t){const e=s&&s.options||{},n=e.reverse,i=e.min===void 0?t:0,o=e.max===void 0?t:0;return{start:n?o:i,end:n?i:o}}function Or(s,t,e){if(e===!1)return!1;const n=On(s,e),i=On(t,e);return{top:i.end,right:n.end,bottom:i.start,left:n.start}}function Ir(s){let t,e,n,i;return E(s)?(t=s.top,e=s.right,n=s.bottom,i=s.left):t=e=n=i=s,{top:t,right:e,bottom:n,left:i,disabled:s===!1}}function Qi(s,t){const e=[],n=s._getSortedDatasetMetas(t);let i,o;for(i=0,o=n.length;i<o;++i)e.push(n[i].index);return e}function In(s,t,e,n={}){const i=s.keys,o=n.mode==="single";let a,r,l,c;if(t===null)return;let d=!1;for(a=0,r=i.length;a<r;++a){if(l=+i[a],l===e){if(d=!0,n.all)continue;break}c=s.values[l],K(c)&&(o||t===0||Zt(t)===Zt(c))&&(t+=c)}return!d&&!n.all?0:t}function Rr(s,t){const{iScale:e,vScale:n}=t,i=e.axis==="x"?"x":"y",o=n.axis==="x"?"x":"y",a=Object.keys(s),r=new Array(a.length);let l,c,d;for(l=0,c=a.length;l<c;++l)d=a[l],r[l]={[i]:d,[o]:s[d]};return r}function xs(s,t){const e=s&&s.options.stacked;return e||e===void 0&&t.stack!==void 0}function Er(s,t,e){return`${s.id}.${t.id}.${e.stack||e.type}`}function Nr(s){const{min:t,max:e,minDefined:n,maxDefined:i}=s.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function Fr(s,t,e){const n=s[t]||(s[t]={});return n[e]||(n[e]={})}function Rn(s,t,e,n){for(const i of t.getMatchingVisibleMetas(n).reverse()){const o=s[i.index];if(e&&o>0||!e&&o<0)return i.index}return null}function En(s,t){const{chart:e,_cachedMeta:n}=s,i=e._stacks||(e._stacks={}),{iScale:o,vScale:a,index:r}=n,l=o.axis,c=a.axis,d=Er(o,a,n),h=t.length;let f;for(let u=0;u<h;++u){const g=t[u],{[l]:p,[c]:b}=g,x=g._stacks||(g._stacks={});f=x[c]=Fr(i,d,p),f[r]=b,f._top=Rn(f,a,!0,n.type),f._bottom=Rn(f,a,!1,n.type);const m=f._visualValues||(f._visualValues={});m[r]=b}}function ms(s,t){const e=s.scales;return Object.keys(e).filter(n=>e[n].axis===t).shift()}function Br(s,t){return Pt(s,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function jr(s,t,e){return Pt(s,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ne(s,t){const e=s.controller.index,n=s.vScale&&s.vScale.axis;if(n){t=t||s._parsed;for(const i of t){const o=i._stacks;if(!o||o[n]===void 0||o[n][e]===void 0)return;delete o[n][e],o[n]._visualValues!==void 0&&o[n]._visualValues[e]!==void 0&&delete o[n]._visualValues[e]}}}const vs=s=>s==="reset"||s==="none",Nn=(s,t)=>t?s:Object.assign({},s),Hr=(s,t,e)=>s&&!t.hidden&&t._stacked&&{keys:Qi(e,!0),values:null};class Kt{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=xs(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ne(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),i=(h,f,u,g)=>h==="x"?f:h==="r"?g:u,o=e.xAxisID=I(n.xAxisID,ms(t,"x")),a=e.yAxisID=I(n.yAxisID,ms(t,"y")),r=e.rAxisID=I(n.rAxisID,ms(t,"r")),l=e.indexAxis,c=e.iAxisID=i(l,o,a,r),d=e.vAxisID=i(l,a,o,r);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(a),e.rScale=this.getScaleForId(r),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&vn(this._data,this),t._stacked&&ne(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(E(e)){const i=this._cachedMeta;this._data=Rr(e,i)}else if(n!==e){if(n){vn(n,this);const i=this._cachedMeta;ne(i),i._parsed=[]}e&&Object.isExtensible(e)&&va(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let i=!1;this._dataCheck();const o=e._stacked;e._stacked=xs(e.vScale,e),e.stack!==n.stack&&(i=!0,ne(e),e.stack=n.stack),this._resyncElements(t),(i||o!==e._stacked)&&(En(this,e._parsed),e._stacked=xs(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:i}=this,{iScale:o,_stacked:a}=n,r=o.axis;let l=t===0&&e===i.length?!0:n._sorted,c=t>0&&n._parsed[t-1],d,h,f;if(this._parsing===!1)n._parsed=i,n._sorted=!0,f=i;else{q(i[t])?f=this.parseArrayData(n,i,t,e):E(i[t])?f=this.parseObjectData(n,i,t,e):f=this.parsePrimitiveData(n,i,t,e);const u=()=>h[r]===null||c&&h[r]<c[r];for(d=0;d<e;++d)n._parsed[d+t]=h=f[d],l&&(u()&&(l=!1),c=h);n._sorted=l}a&&En(this,f)}parsePrimitiveData(t,e,n,i){const{iScale:o,vScale:a}=t,r=o.axis,l=a.axis,c=o.getLabels(),d=o===a,h=new Array(i);let f,u,g;for(f=0,u=i;f<u;++f)g=f+n,h[f]={[r]:d||o.parse(c[g],g),[l]:a.parse(e[g],g)};return h}parseArrayData(t,e,n,i){const{xScale:o,yScale:a}=t,r=new Array(i);let l,c,d,h;for(l=0,c=i;l<c;++l)d=l+n,h=e[d],r[l]={x:o.parse(h[0],d),y:a.parse(h[1],d)};return r}parseObjectData(t,e,n,i){const{xScale:o,yScale:a}=t,{xAxisKey:r="x",yAxisKey:l="y"}=this._parsing,c=new Array(i);let d,h,f,u;for(d=0,h=i;d<h;++d)f=d+n,u=e[f],c[d]={x:o.parse(we(u,r),f),y:a.parse(we(u,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const i=this.chart,o=this._cachedMeta,a=e[t.axis],r={keys:Qi(i,!0),values:e._stacks[t.axis]._visualValues};return In(r,a,o.index,{mode:n})}updateRangeFromParsed(t,e,n,i){const o=n[e.axis];let a=o===null?NaN:o;const r=i&&n._stacks[e.axis];i&&r&&(i.values=r,a=In(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,e){const n=this._cachedMeta,i=n._parsed,o=n._sorted&&t===n.iScale,a=i.length,r=this._getOtherScale(t),l=Hr(e,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:h}=Nr(r);let f,u;function g(){u=i[f];const p=u[r.axis];return!K(u[t.axis])||d>p||h<p}for(f=0;f<a&&!(!g()&&(this.updateRangeFromParsed(c,t,u,l),o));++f);if(o){for(f=a-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(c,t,u,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let i,o,a;for(i=0,o=e.length;i<o;++i)a=e[i][t.axis],K(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,i=e.vScale,o=this.getParsed(t);return{label:n?""+n.getLabelForValue(o[n.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Ir(I(this.options.clip,Or(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,i=n.data||[],o=e.chartArea,a=[],r=this._drawStart||0,l=this._drawCount||i.length-r,c=this.options.drawActiveElementsOnTop;let d;for(n.dataset&&n.dataset.draw(t,o,r,l),d=r;d<r+l;++d){const h=i[d];h.hidden||(h.active&&c?a.push(h):h.draw(t,o))}for(d=0;d<a.length;++d)a[d].draw(t,o)}getStyle(t,e){const n=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];o=a.$context||(a.$context=jr(this.getContext(),t,a)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=Br(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=n,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const i=e==="active",o=this._cachedDataOpts,a=t+"-"+e,r=o[a],l=this.enableOptionSharing&&es(n);if(r)return Nn(r,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),h=i?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),d),u=Object.keys(G.elements[t]),g=()=>this.getContext(n,i,e),p=c.resolveNamedOptions(f,u,g,h);return p.$shared&&(p.$shared=l,o[a]=Object.freeze(Nn(p,l))),p}_resolveAnimations(t,e,n){const i=this.chart,o=this._cachedDataOpts,a=`animation-${e}`,r=o[a];if(r)return r;let l;if(i.options.animation!==!1){const d=this.chart.config,h=d.datasetAnimationScopeKeys(this._type,e),f=d.getOptionScopes(this.getDataset(),h);l=d.createResolver(f,this.getContext(t,n,e))}const c=new Ji(i,l&&l.animations);return l&&l._cacheable&&(o[a]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||vs(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const n=this.resolveDataElementOptions(t,e),i=this._sharedOptions,o=this.getSharedOptions(n),a=this.includeOptions(e,o)||o!==i;return this.updateSharedOptions(o,e,n),{sharedOptions:o,includeOptions:a}}updateElement(t,e,n,i){vs(i)?Object.assign(t,n):this._resolveAnimations(e,i).update(t,n)}updateSharedOptions(t,e,n){t&&!vs(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,i){t.active=i;const o=this.getStyle(e,i);this._resolveAnimations(e,n,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[r,l,c]of this._syncList)this[r](l,c);this._syncList=[];const i=n.length,o=e.length,a=Math.min(o,i);a&&this.parse(0,a),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,e,n=!0){const i=this._cachedMeta,o=i.data,a=t+e;let r;const l=c=>{for(c.length+=e,r=c.length-1;r>=a;r--)c[r]=c[r-e]};for(l(o),r=t;r<a;++r)o[r]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,e),n&&this.updateElements(o,t,e,"reset")}updateElements(t,e,n,i){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const i=n._parsed.splice(t,e);n._stacked&&ne(n,i)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,i]=t;this[e](n,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}D(Kt,"defaults",{}),D(Kt,"datasetElementType",null),D(Kt,"dataElementType",null);class Ge extends Kt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:i=[],_dataset:o}=e,a=this.chart._animationsDisabled;let{start:r,count:l}=ka(e,i,a);this._drawStart=r,this._drawCount=l,Sa(e)&&(r=0,l=i.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!o._decimated,n.points=i;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},t),this.updateElements(i,r,l,t)}updateElements(t,e,n,i){const o=i==="reset",{iScale:a,vScale:r,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:h}=this._getSharedOptions(e,i),f=a.axis,u=r.axis,{spanGaps:g,segment:p}=this.options,b=_e(g)?g:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||i==="none",m=e+n,_=t.length;let S=e>0&&this.getParsed(e-1);for(let w=0;w<_;++w){const $=t[w],y=x?$:{};if(w<e||w>=m){y.skip=!0;continue}const v=this.getParsed(w),L=j(v[u]),A=y[f]=a.getPixelForValue(v[f],w),C=y[u]=o||L?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,v,l):v[u],w);y.skip=isNaN(A)||isNaN(C)||L,y.stop=w>0&&Math.abs(v[f]-S[f])>b,p&&(y.parsed=v,y.raw=c.data[w]),h&&(y.options=d||this.resolveDataElementOptions(w,$.active?"active":i)),x||this.updateElement($,w,y,i),S=v}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return n;const o=i[0].size(this.resolveDataElementOptions(0)),a=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,o,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}D(Ge,"id","line"),D(Ge,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),D(Ge,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Ue extends Kt{getLabelAndValue(t){const e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,i){return sr.bind(this)(t,e,n,i)}update(t){const e=this._cachedMeta,n=e.dataset,i=e.data||[],o=e.iScale.getLabels();if(n.points=i,t!=="resize"){const a=this.resolveDatasetElementOptions(t);this.options.showLine||(a.borderWidth=0);const r={_loop:!0,_fullLoop:o.length===i.length,options:a};this.updateElement(n,void 0,r,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,n,i){const o=this._cachedMeta.rScale,a=i==="reset";for(let r=e;r<e+n;r++){const l=t[r],c=this.resolveDataElementOptions(r,l.active?"active":i),d=o.getPointPositionForValue(r,this.getParsed(r).r),h=a?o.xCenter:d.x,f=a?o.yCenter:d.y,u={x:h,y:f,angle:d.angle,skip:isNaN(h)||isNaN(f),options:c};this.updateElement(l,r,u,i)}}}D(Ue,"id","radar"),D(Ue,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),D(Ue,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});function Ot(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class on{constructor(t){D(this,"options");this.options=t||{}}static override(t){Object.assign(on.prototype,t)}init(){}formats(){return Ot()}parse(){return Ot()}format(){return Ot()}add(){return Ot()}diff(){return Ot()}startOf(){return Ot()}endOf(){return Ot()}}var zr={_date:on};function Wr(s,t,e,n){const{controller:i,data:o,_sorted:a}=s,r=i._cachedMeta.iScale,l=s.dataset&&s.dataset.options?s.dataset.options.spanGaps:null;if(r&&t===r.axis&&t!=="r"&&a&&o.length){const c=r._reversePixels?xa:Et;if(n){if(i._sharedOptions){const d=o[0],h=typeof d.getRange=="function"&&d.getRange(t);if(h){const f=c(o,t,e-h),u=c(o,t,e+h);return{lo:f.lo,hi:u.hi}}}}else{const d=c(o,t,e);if(l){const{vScale:h}=i._cachedMeta,{_parsed:f}=s,u=f.slice(0,d.lo+1).reverse().findIndex(p=>!j(p[h.axis]));d.lo-=Math.max(0,u);const g=f.slice(d.hi).findIndex(p=>!j(p[h.axis]));d.hi+=Math.max(0,g)}return d}}return{lo:0,hi:o.length-1}}function hs(s,t,e,n,i){const o=s.getSortedVisibleDatasetMetas(),a=e[t];for(let r=0,l=o.length;r<l;++r){const{index:c,data:d}=o[r],{lo:h,hi:f}=Wr(o[r],t,a,i);for(let u=h;u<=f;++u){const g=d[u];g.skip||n(g,c,u)}}}function Vr(s){const t=s.indexOf("x")!==-1,e=s.indexOf("y")!==-1;return function(n,i){const o=t?Math.abs(n.x-i.x):0,a=e?Math.abs(n.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(a,2))}}function ys(s,t,e,n,i){const o=[];return!i&&!s.isPointInArea(t)||hs(s,e,t,function(r,l,c){!i&&!yt(r,s.chartArea,0)||r.inRange(t.x,t.y,n)&&o.push({element:r,datasetIndex:l,index:c})},!0),o}function qr(s,t,e,n){let i=[];function o(a,r,l){const{startAngle:c,endAngle:d}=a.getProps(["startAngle","endAngle"],n),{angle:h}=pa(a,{x:t.x,y:t.y});Oi(h,c,d)&&i.push({element:a,datasetIndex:r,index:l})}return hs(s,e,t,o),i}function Gr(s,t,e,n,i,o){let a=[];const r=Vr(e);let l=Number.POSITIVE_INFINITY;function c(d,h,f){const u=d.inRange(t.x,t.y,i);if(n&&!u)return;const g=d.getCenterPoint(i);if(!(!!o||s.isPointInArea(g))&&!u)return;const b=r(t,g);b<l?(a=[{element:d,datasetIndex:h,index:f}],l=b):b===l&&a.push({element:d,datasetIndex:h,index:f})}return hs(s,e,t,c),a}function ws(s,t,e,n,i,o){return!o&&!s.isPointInArea(t)?[]:e==="r"&&!n?qr(s,t,e,i):Gr(s,t,e,n,i,o)}function Fn(s,t,e,n,i){const o=[],a=e==="x"?"inXRange":"inYRange";let r=!1;return hs(s,e,t,(l,c,d)=>{l[a]&&l[a](t[e],i)&&(o.push({element:l,datasetIndex:c,index:d}),r=r||l.inRange(t.x,t.y,i))}),n&&!r?[]:o}var Ur={modes:{index(s,t,e,n){const i=It(t,s),o=e.axis||"x",a=e.includeInvisible||!1,r=e.intersect?ys(s,i,o,n,a):ws(s,i,o,!1,n,a),l=[];return r.length?(s.getSortedVisibleDatasetMetas().forEach(c=>{const d=r[0].index,h=c.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:d})}),l):[]},dataset(s,t,e,n){const i=It(t,s),o=e.axis||"xy",a=e.includeInvisible||!1;let r=e.intersect?ys(s,i,o,n,a):ws(s,i,o,!1,n,a);if(r.length>0){const l=r[0].datasetIndex,c=s.getDatasetMeta(l).data;r=[];for(let d=0;d<c.length;++d)r.push({element:c[d],datasetIndex:l,index:d})}return r},point(s,t,e,n){const i=It(t,s),o=e.axis||"xy",a=e.includeInvisible||!1;return ys(s,i,o,n,a)},nearest(s,t,e,n){const i=It(t,s),o=e.axis||"xy",a=e.includeInvisible||!1;return ws(s,i,o,e.intersect,n,a)},x(s,t,e,n){const i=It(t,s);return Fn(s,i,"x",e.intersect,n)},y(s,t,e,n){const i=It(t,s);return Fn(s,i,"y",e.intersect,n)}}};const to=["left","top","right","bottom"];function ie(s,t){return s.filter(e=>e.pos===t)}function Bn(s,t){return s.filter(e=>to.indexOf(e.pos)===-1&&e.box.axis===t)}function oe(s,t){return s.sort((e,n)=>{const i=t?n:e,o=t?e:n;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function Yr(s){const t=[];let e,n,i,o,a,r;for(e=0,n=(s||[]).length;e<n;++e)i=s[e],{position:o,options:{stack:a,stackWeight:r=1}}=i,t.push({index:e,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:a&&o+a,stackWeight:r});return t}function Kr(s){const t={};for(const e of s){const{stack:n,pos:i,stackWeight:o}=e;if(!n||!to.includes(i))continue;const a=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=o}return t}function Xr(s,t){const e=Kr(s),{vBoxMaxWidth:n,hBoxMaxHeight:i}=t;let o,a,r;for(o=0,a=s.length;o<a;++o){r=s[o];const{fullSize:l}=r.box,c=e[r.stack],d=c&&r.stackWeight/c.weight;r.horizontal?(r.width=d?d*n:l&&t.availableWidth,r.height=i):(r.width=n,r.height=d?d*i:l&&t.availableHeight)}return e}function Zr(s){const t=Yr(s),e=oe(t.filter(c=>c.box.fullSize),!0),n=oe(ie(t,"left"),!0),i=oe(ie(t,"right")),o=oe(ie(t,"top"),!0),a=oe(ie(t,"bottom")),r=Bn(t,"x"),l=Bn(t,"y");return{fullSize:e,leftAndTop:n.concat(o),rightAndBottom:i.concat(l).concat(a).concat(r),chartArea:ie(t,"chartArea"),vertical:n.concat(i).concat(l),horizontal:o.concat(a).concat(r)}}function jn(s,t,e,n){return Math.max(s[e],t[e])+Math.max(s[n],t[n])}function eo(s,t){s.top=Math.max(s.top,t.top),s.left=Math.max(s.left,t.left),s.bottom=Math.max(s.bottom,t.bottom),s.right=Math.max(s.right,t.right)}function Jr(s,t,e,n){const{pos:i,box:o}=e,a=s.maxPadding;if(!E(i)){e.size&&(s[i]-=e.size);const h=n[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?o.height:o.width),e.size=h.size/h.count,s[i]+=e.size}o.getPadding&&eo(a,o.getPadding());const r=Math.max(0,t.outerWidth-jn(a,s,"left","right")),l=Math.max(0,t.outerHeight-jn(a,s,"top","bottom")),c=r!==s.w,d=l!==s.h;return s.w=r,s.h=l,e.horizontal?{same:c,other:d}:{same:d,other:c}}function Qr(s){const t=s.maxPadding;function e(n){const i=Math.max(t[n]-s[n],0);return s[n]+=i,i}s.y+=e("top"),s.x+=e("left"),e("right"),e("bottom")}function tl(s,t){const e=t.maxPadding;function n(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(a=>{o[a]=Math.max(t[a],e[a])}),o}return n(s?["left","right"]:["top","bottom"])}function he(s,t,e,n){const i=[];let o,a,r,l,c,d;for(o=0,a=s.length,c=0;o<a;++o){r=s[o],l=r.box,l.update(r.width||t.w,r.height||t.h,tl(r.horizontal,t));const{same:h,other:f}=Jr(t,e,r,n);c|=h&&i.length,d=d||f,l.fullSize||i.push(r)}return c&&he(i,t,e,n)||d}function Ee(s,t,e,n,i){s.top=e,s.left=t,s.right=t+n,s.bottom=e+i,s.width=n,s.height=i}function Hn(s,t,e,n){const i=e.padding;let{x:o,y:a}=t;for(const r of s){const l=r.box,c=n[r.stack]||{placed:0,weight:1},d=r.stackWeight/c.weight||1;if(r.horizontal){const h=t.w*d,f=c.size||l.height;es(c.start)&&(a=c.start),l.fullSize?Ee(l,i.left,a,e.outerWidth-i.right-i.left,f):Ee(l,t.left+c.placed,a,h,f),c.start=a,c.placed+=h,a=l.bottom}else{const h=t.h*d,f=c.size||l.width;es(c.start)&&(o=c.start),l.fullSize?Ee(l,o,i.top,f,e.outerHeight-i.bottom-i.top):Ee(l,o,t.top+c.placed,f,h),c.start=o,c.placed+=h,o=l.right}}t.x=o,t.y=a}var $t={addBox(s,t){s.boxes||(s.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},s.boxes.push(t)},removeBox(s,t){const e=s.boxes?s.boxes.indexOf(t):-1;e!==-1&&s.boxes.splice(e,1)},configure(s,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(s,t,e,n){if(!s)return;const i=Q(s.options.layout.padding),o=Math.max(t-i.width,0),a=Math.max(e-i.height,0),r=Zr(s.boxes),l=r.vertical,c=r.horizontal;B(s.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const d=l.reduce((p,b)=>b.box.options&&b.box.options.display===!1?p:p+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/d,hBoxMaxHeight:a/2}),f=Object.assign({},i);eo(f,Q(n));const u=Object.assign({maxPadding:f,w:o,h:a,x:i.left,y:i.top},i),g=Xr(l.concat(c),h);he(r.fullSize,u,h,g),he(l,u,h,g),he(c,u,h,g)&&he(l,u,h,g),Qr(u),Hn(r.leftAndTop,u,h,g),u.x+=u.w,u.y+=u.h,Hn(r.rightAndBottom,u,h,g),s.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},B(r.chartArea,p=>{const b=p.box;Object.assign(b,s.chartArea),b.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})})}};class so{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,i){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):n)}}isAttached(t){return!0}updateConfig(t){}}class el extends so{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ye="$chartjs",sl={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},zn=s=>s===null||s==="";function nl(s,t){const e=s.style,n=s.getAttribute("height"),i=s.getAttribute("width");if(s[Ye]={initial:{height:n,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",zn(i)){const o=An(s,"width");o!==void 0&&(s.width=o)}if(zn(n))if(s.style.height==="")s.height=s.width/(t||2);else{const o=An(s,"height");o!==void 0&&(s.height=o)}return s}const no=br?{passive:!0}:!1;function il(s,t,e){s&&s.addEventListener(t,e,no)}function ol(s,t,e){s&&s.canvas&&s.canvas.removeEventListener(t,e,no)}function al(s,t){const e=sl[s.type]||s.type,{x:n,y:i}=It(s,t);return{type:e,chart:t,native:s,x:n!==void 0?n:null,y:i!==void 0?i:null}}function as(s,t){for(const e of s)if(e===t||e.contains(t))return!0}function rl(s,t,e){const n=s.canvas,i=new MutationObserver(o=>{let a=!1;for(const r of o)a=a||as(r.addedNodes,n),a=a&&!as(r.removedNodes,n);a&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function ll(s,t,e){const n=s.canvas,i=new MutationObserver(o=>{let a=!1;for(const r of o)a=a||as(r.removedNodes,n),a=a&&!as(r.addedNodes,n);a&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const ke=new Map;let Wn=0;function io(){const s=window.devicePixelRatio;s!==Wn&&(Wn=s,ke.forEach((t,e)=>{e.currentDevicePixelRatio!==s&&t()}))}function cl(s,t){ke.size||window.addEventListener("resize",io),ke.set(s,t)}function dl(s){ke.delete(s),ke.size||window.removeEventListener("resize",io)}function hl(s,t,e){const n=s.canvas,i=n&&nn(n);if(!i)return;const o=Ei((r,l)=>{const c=i.clientWidth;e(r,l),c<i.clientWidth&&e()},window),a=new ResizeObserver(r=>{const l=r[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||o(c,d)});return a.observe(i),cl(s,o),a}function _s(s,t,e){e&&e.disconnect(),t==="resize"&&dl(s)}function ul(s,t,e){const n=s.canvas,i=Ei(o=>{s.ctx!==null&&e(al(o,s))},s);return il(n,t,i),i}class fl extends so{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(nl(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[Ye])return!1;const n=e[Ye].initial;["height","width"].forEach(o=>{const a=n[o];j(a)?e.removeAttribute(o):e.setAttribute(o,a)});const i=n.style||{};return Object.keys(i).forEach(o=>{e.style[o]=i[o]}),e.width=e.width,delete e[Ye],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),a={attach:rl,detach:ll,resize:hl}[e]||ul;i[e]=a(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),i=n[e];if(!i)return;({attach:_s,detach:_s,resize:_s}[e]||ol)(t,e,i),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,i){return gr(t,e,n,i)}isAttached(t){const e=t&&nn(t);return!!(e&&e.isConnected)}}function pl(s){return!sn()||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas?el:fl}class Ct{constructor(){D(this,"x");D(this,"y");D(this,"active",!1);D(this,"options");D(this,"$animations")}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return _e(this.x)&&_e(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const i={};return t.forEach(o=>{i[o]=n[o]&&n[o].active()?n[o]._to:this[o]}),i}}D(Ct,"defaults",{}),D(Ct,"defaultRoutes");function gl(s,t){const e=s.options.ticks,n=bl(s),i=Math.min(e.maxTicksLimit||n,n),o=e.major.enabled?ml(t):[],a=o.length,r=o[0],l=o[a-1],c=[];if(a>i)return vl(t,c,o,a/i),c;const d=xl(o,t,i);if(a>0){let h,f;const u=a>1?Math.round((l-r)/(a-1)):null;for(Ne(t,c,d,j(u)?0:r-u,r),h=0,f=a-1;h<f;h++)Ne(t,c,d,o[h],o[h+1]);return Ne(t,c,d,l,j(u)?t.length:l+u),c}return Ne(t,c,d),c}function bl(s){const t=s.options.offset,e=s._tickSize(),n=s._length/e+(t?0:1),i=s._maxLength/e;return Math.floor(Math.min(n,i))}function xl(s,t,e){const n=yl(s),i=t.length/e;if(!n)return Math.max(i,1);const o=da(n);for(let a=0,r=o.length-1;a<r;a++){const l=o[a];if(l>i)return l}return Math.max(i,1)}function ml(s){const t=[];let e,n;for(e=0,n=s.length;e<n;e++)s[e].major&&t.push(e);return t}function vl(s,t,e,n){let i=0,o=e[0],a;for(n=Math.ceil(n),a=0;a<s.length;a++)a===o&&(t.push(s[a]),i++,o=e[i*n])}function Ne(s,t,e,n,i){const o=I(n,0),a=Math.min(I(i,s.length),s.length);let r=0,l,c,d;for(e=Math.ceil(e),i&&(l=i-n,e=l/Math.floor(l/e)),d=o;d<0;)r++,d=Math.round(o+r*e);for(c=Math.max(o,0);c<a;c++)c===d&&(t.push(s[c]),r++,d=Math.round(o+r*e))}function yl(s){const t=s.length;let e,n;if(t<2)return!1;for(n=s[0],e=1;e<t;++e)if(s[e]-s[e-1]!==n)return!1;return n}const wl=s=>s==="left"?"right":s==="right"?"left":s,Vn=(s,t,e)=>t==="top"||t==="left"?s[t]+e:s[t]-e,qn=(s,t)=>Math.min(t||s,s);function Gn(s,t){const e=[],n=s.length/t,i=s.length;let o=0;for(;o<i;o+=n)e.push(s[Math.floor(o)]);return e}function _l(s,t,e){const n=s.ticks.length,i=Math.min(t,n-1),o=s._startPixel,a=s._endPixel,r=1e-6;let l=s.getPixelForTick(i),c;if(!(e&&(n===1?c=Math.max(l-o,a-l):t===0?c=(s.getPixelForTick(1)-l)/2:c=(l-s.getPixelForTick(i-1))/2,l+=i<t?c:-c,l<o-r||l>a+r)))return l}function kl(s,t){B(s,e=>{const n=e.gc,i=n.length/2;let o;if(i>t){for(o=0;o<i;++o)delete e.data[n[o]];n.splice(0,i)}})}function ae(s){return s.drawTicks?s.tickLength:0}function Un(s,t){if(!s.display)return 0;const e=Z(s.font,t),n=Q(s.padding);return(q(s.text)?s.text.length:1)*e.lineHeight+n.height}function Sl(s,t){return Pt(s,{scale:t,type:"scale"})}function $l(s,t,e){return Pt(s,{tick:e,index:t,type:"tick"})}function Ml(s,t,e){let n=Ni(s);return(e&&t!=="right"||!e&&t==="right")&&(n=wl(n)),n}function Ll(s,t,e,n){const{top:i,left:o,bottom:a,right:r,chart:l}=s,{chartArea:c,scales:d}=l;let h=0,f,u,g;const p=a-i,b=r-o;if(s.isHorizontal()){if(u=st(n,o,r),E(e)){const x=Object.keys(e)[0],m=e[x];g=d[x].getPixelForValue(m)+p-t}else e==="center"?g=(c.bottom+c.top)/2+p-t:g=Vn(s,e,t);f=r-o}else{if(E(e)){const x=Object.keys(e)[0],m=e[x];u=d[x].getPixelForValue(m)-b+t}else e==="center"?u=(c.left+c.right)/2-b+t:u=Vn(s,e,t);g=st(n,a,i),h=e==="left"?-it:it}return{titleX:u,titleY:g,maxWidth:f,rotation:h}}class se extends Ct{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:i}=this;return t=ut(t,Number.POSITIVE_INFINITY),e=ut(e,Number.NEGATIVE_INFINITY),n=ut(n,Number.POSITIVE_INFINITY),i=ut(i,Number.NEGATIVE_INFINITY),{min:ut(t,n),max:ut(e,i),minDefined:K(t),maxDefined:K(e)}}getMinMax(t){let{min:e,max:n,minDefined:i,maxDefined:o}=this.getUserBounds(),a;if(i&&o)return{min:e,max:n};const r=this.getMatchingVisibleMetas();for(let l=0,c=r.length;l<c;++l)a=r[l].controller.getMinMax(this,t),i||(e=Math.min(e,a.min)),o||(n=Math.max(n,a.max));return e=o&&e>n?n:e,n=i&&e>n?e:n,{min:ut(e,ut(n,e)),max:ut(n,ut(e,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){z(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:i,grace:o,ticks:a}=this.options,r=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Ga(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=r<this.ticks.length;this._convertTicksToLabels(l?Gn(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=gl(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,n;this.isHorizontal()?(e=this.left,n=this.right):(e=this.top,n=this.bottom,t=!t),this._startPixel=e,this._endPixel=n,this._reversePixels=t,this._length=n-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){z(this.options.afterUpdate,[this])}beforeSetDimensions(){z(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){z(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),z(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){z(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,i,o;for(n=0,i=t.length;n<i;n++)o=t[n],o.label=z(e.callback,[o.value,n,t],this)}afterTickToLabelConversion(){z(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){z(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=qn(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,o=e.maxRotation;let a=i,r,l,c;if(!this._isVisible()||!e.display||i>=o||n<=1||!this.isHorizontal()){this.labelRotation=i;return}const d=this._getLabelSizes(),h=d.widest.width,f=d.highest.height,u=rt(this.chart.width-h,0,this.maxWidth);r=t.offset?this.maxWidth/n:u/(n-1),h+6>r&&(r=u/(n-(t.offset?.5:1)),l=this.maxHeight-ae(t.grid)-e.padding-Un(t.title,this.chart.options.font),c=Math.sqrt(h*h+f*f),a=Ks(Math.min(Math.asin(rt((d.highest.height+6)/r,-1,1)),Math.asin(rt(l/c,-1,1))-Math.asin(rt(f/c,-1,1)))),a=Math.max(i,Math.min(o,a))),this.labelRotation=a}afterCalculateLabelRotation(){z(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){z(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:i,grid:o}}=this,a=this._isVisible(),r=this.isHorizontal();if(a){const l=Un(i,e.options.font);if(r?(t.width=this.maxWidth,t.height=ae(o)+l):(t.height=this.maxHeight,t.width=ae(o)+l),n.display&&this.ticks.length){const{first:c,last:d,widest:h,highest:f}=this._getLabelSizes(),u=n.padding*2,g=kt(this.labelRotation),p=Math.cos(g),b=Math.sin(g);if(r){const x=n.mirror?0:b*h.width+p*f.height;t.height=Math.min(this.maxHeight,t.height+x+u)}else{const x=n.mirror?0:p*h.width+b*f.height;t.width=Math.min(this.maxWidth,t.width+x+u)}this._calculatePadding(c,d,b,p)}}this._handleMargins(),r?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,i){const{ticks:{align:o,padding:a},position:r}=this.options,l=this.labelRotation!==0,c=r!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,u=0;l?c?(f=i*t.width,u=n*e.height):(f=n*t.height,u=i*e.width):o==="start"?u=e.width:o==="end"?f=t.width:o!=="inner"&&(f=t.width/2,u=e.width/2),this.paddingLeft=Math.max((f-d+a)*this.width/(this.width-d),0),this.paddingRight=Math.max((u-h+a)*this.width/(this.width-h),0)}else{let d=e.height/2,h=t.height/2;o==="start"?(d=0,h=t.height):o==="end"&&(d=e.height,h=0),this.paddingTop=d+a,this.paddingBottom=h+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){z(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,n;for(e=0,n=t.length;e<n;e++)j(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=Gn(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){const{ctx:i,_longestTextCache:o}=this,a=[],r=[],l=Math.floor(e/qn(e,n));let c=0,d=0,h,f,u,g,p,b,x,m,_,S,w;for(h=0;h<e;h+=l){if(g=t[h].label,p=this._resolveTickFontOptions(h),i.font=b=p.string,x=o[b]=o[b]||{data:{},gc:[]},m=p.lineHeight,_=S=0,!j(g)&&!q(g))_=ns(i,x.data,x.gc,_,g),S=m;else if(q(g))for(f=0,u=g.length;f<u;++f)w=g[f],!j(w)&&!q(w)&&(_=ns(i,x.data,x.gc,_,w),S+=m);a.push(_),r.push(S),c=Math.max(_,c),d=Math.max(S,d)}kl(o,e);const $=a.indexOf(c),y=r.indexOf(d),v=L=>({width:a[L]||0,height:r[L]||0});return{first:v(0),last:v(e-1),widest:v($),highest:v(y),widths:a,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return ba(this._alignToPixels?Dt(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=$l(this.getContext(),t,n))}return this.$context||(this.$context=Sl(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=kt(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),o=this._getLabelSizes(),a=t.autoSkipPadding||0,r=o?o.widest.width+a:0,l=o?o.highest.height+a:0;return this.isHorizontal()?l*n>r*i?r/n:l/i:l*i<r*n?l/n:r/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,i=this.options,{grid:o,position:a,border:r}=i,l=o.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),f=ae(o),u=[],g=r.setContext(this.getContext()),p=g.display?g.width:0,b=p/2,x=function(U){return Dt(n,U,p)};let m,_,S,w,$,y,v,L,A,C,P,O;if(a==="top")m=x(this.bottom),y=this.bottom-f,L=m-b,C=x(t.top)+b,O=t.bottom;else if(a==="bottom")m=x(this.top),C=t.top,O=x(t.bottom)-b,y=m+b,L=this.top+f;else if(a==="left")m=x(this.right),$=this.right-f,v=m-b,A=x(t.left)+b,P=t.right;else if(a==="right")m=x(this.left),A=t.left,P=x(t.right)-b,$=m+b,v=this.left+f;else if(e==="x"){if(a==="center")m=x((t.top+t.bottom)/2+.5);else if(E(a)){const U=Object.keys(a)[0],V=a[U];m=x(this.chart.scales[U].getPixelForValue(V))}C=t.top,O=t.bottom,y=m+b,L=y+f}else if(e==="y"){if(a==="center")m=x((t.left+t.right)/2);else if(E(a)){const U=Object.keys(a)[0],V=a[U];m=x(this.chart.scales[U].getPixelForValue(V))}$=m-b,v=$-f,A=t.left,P=t.right}const W=I(i.ticks.maxTicksLimit,h),H=Math.max(1,Math.ceil(h/W));for(_=0;_<h;_+=H){const U=this.getContext(_),V=o.setContext(U),ct=r.setContext(U),dt=V.lineWidth,wt=V.color,jt=ct.dash||[],X=ct.dashOffset,T=V.tickWidth,M=V.tickColor,R=V.tickBorderDash||[],N=V.tickBorderDashOffset;S=_l(this,_,l),S!==void 0&&(w=Dt(n,S,dt),c?$=v=A=P=w:y=L=C=O=w,u.push({tx1:$,ty1:y,tx2:v,ty2:L,x1:A,y1:C,x2:P,y2:O,width:dt,color:wt,borderDash:jt,borderDashOffset:X,tickWidth:T,tickColor:M,tickBorderDash:R,tickBorderDashOffset:N}))}return this._ticksLength=h,this._borderValue=m,u}_computeLabelItems(t){const e=this.axis,n=this.options,{position:i,ticks:o}=n,a=this.isHorizontal(),r=this.ticks,{align:l,crossAlign:c,padding:d,mirror:h}=o,f=ae(n.grid),u=f+d,g=h?-d:u,p=-kt(this.labelRotation),b=[];let x,m,_,S,w,$,y,v,L,A,C,P,O="middle";if(i==="top")$=this.bottom-g,y=this._getXAxisLabelAlignment();else if(i==="bottom")$=this.top+g,y=this._getXAxisLabelAlignment();else if(i==="left"){const H=this._getYAxisLabelAlignment(f);y=H.textAlign,w=H.x}else if(i==="right"){const H=this._getYAxisLabelAlignment(f);y=H.textAlign,w=H.x}else if(e==="x"){if(i==="center")$=(t.top+t.bottom)/2+u;else if(E(i)){const H=Object.keys(i)[0],U=i[H];$=this.chart.scales[H].getPixelForValue(U)+u}y=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")w=(t.left+t.right)/2-u;else if(E(i)){const H=Object.keys(i)[0],U=i[H];w=this.chart.scales[H].getPixelForValue(U)}y=this._getYAxisLabelAlignment(f).textAlign}e==="y"&&(l==="start"?O="top":l==="end"&&(O="bottom"));const W=this._getLabelSizes();for(x=0,m=r.length;x<m;++x){_=r[x],S=_.label;const H=o.setContext(this.getContext(x));v=this.getPixelForTick(x)+o.labelOffset,L=this._resolveTickFontOptions(x),A=L.lineHeight,C=q(S)?S.length:1;const U=C/2,V=H.color,ct=H.textStrokeColor,dt=H.textStrokeWidth;let wt=y;a?(w=v,y==="inner"&&(x===m-1?wt=this.options.reverse?"left":"right":x===0?wt=this.options.reverse?"right":"left":wt="center"),i==="top"?c==="near"||p!==0?P=-C*A+A/2:c==="center"?P=-W.highest.height/2-U*A+A:P=-W.highest.height+A/2:c==="near"||p!==0?P=A/2:c==="center"?P=W.highest.height/2-U*A:P=W.highest.height-C*A,h&&(P*=-1),p!==0&&!H.showLabelBackdrop&&(w+=A/2*Math.sin(p))):($=v,P=(1-C)*A/2);let jt;if(H.showLabelBackdrop){const X=Q(H.backdropPadding),T=W.heights[x],M=W.widths[x];let R=P-X.top,N=0-X.left;switch(O){case"middle":R-=T/2;break;case"bottom":R-=T;break}switch(y){case"center":N-=M/2;break;case"right":N-=M;break;case"inner":x===m-1?N-=M:x>0&&(N-=M/2);break}jt={left:N,top:R,width:M+X.width,height:T+X.height,color:H.backdropColor}}b.push({label:S,font:L,textOffset:P,options:{rotation:p,color:V,strokeColor:ct,strokeWidth:dt,textAlign:wt,textBaseline:O,translation:[w,$],backdrop:jt}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-kt(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:i,padding:o}}=this.options,a=this._getLabelSizes(),r=t+o,l=a.widest.width;let c,d;return e==="left"?i?(d=this.right+o,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-r,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d=this.left)):e==="right"?i?(d=this.left+o,n==="near"?c="right":n==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+r,n==="near"?c="left":n==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:i,width:o,height:a}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,i,o,a),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,n=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,a;const r=(l,c,d)=>{!d.width||!d.color||(n.save(),n.lineWidth=d.width,n.strokeStyle=d.color,n.setLineDash(d.borderDash||[]),n.lineDashOffset=d.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(e.display)for(o=0,a=i.length;o<a;++o){const l=i[o];e.drawOnChartArea&&r({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&r({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:n,grid:i}}=this,o=n.setContext(this.getContext()),a=n.display?o.width:0;if(!a)return;const r=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,h,f;this.isHorizontal()?(c=Dt(t,this.left,a)-a/2,d=Dt(t,this.right,r)+r/2,h=f=l):(h=Dt(t,this.top,a)-a/2,f=Dt(t,this.bottom,r)+r/2,c=d=l),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(c,h),e.lineTo(d,f),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const n=this.ctx,i=this._computeLabelArea();i&&ls(n,i);const o=this.getLabelItems(t);for(const a of o){const r=a.options,l=a.font,c=a.label,d=a.textOffset;Jt(n,c,0,d,l,r)}i&&cs(n)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:i}}=this;if(!n.display)return;const o=Z(n.font),a=Q(n.padding),r=n.align;let l=o.lineHeight/2;e==="bottom"||e==="center"||E(e)?(l+=a.bottom,q(n.text)&&(l+=o.lineHeight*(n.text.length-1))):l+=a.top;const{titleX:c,titleY:d,maxWidth:h,rotation:f}=Ll(this,l,e,r);Jt(t,n.text,0,0,o,{color:n.color,maxWidth:h,rotation:f,textAlign:Ml(r,e,i),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=I(t.grid&&t.grid.z,-1),i=I(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==se.prototype.draw?[{z:e,draw:o=>{this.draw(o)}}]:[{z:n,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",i=[];let o,a;for(o=0,a=e.length;o<a;++o){const r=e[o];r[n]===this.id&&(!t||r.type===t)&&i.push(r)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Z(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Fe{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;Pl(e)&&(n=this.register(e));const i=this.items,o=t.id,a=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,Al(t,a,n),this.override&&G.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,i=this.scope;n in e&&delete e[n],i&&n in G[i]&&(delete G[i][n],this.override&&delete Bt[n])}}function Al(s,t,e){const n=ye(Object.create(null),[e?G.get(e):{},G.get(t),s.defaults]);G.set(t,n),s.defaultRoutes&&Cl(t,s.defaultRoutes),s.descriptors&&G.describe(t,s.descriptors)}function Cl(s,t){Object.keys(t).forEach(e=>{const n=e.split("."),i=n.pop(),o=[s].concat(n).join("."),a=t[e].split("."),r=a.pop(),l=a.join(".");G.route(o,i,l,r)})}function Pl(s){return"id"in s&&"defaults"in s}class Tl{constructor(){this.controllers=new Fe(Kt,"datasets",!0),this.elements=new Fe(Ct,"elements"),this.plugins=new Fe(Object,"plugins"),this.scales=new Fe(se,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach(i=>{const o=n||this._getRegistryForType(i);n||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):B(i,a=>{const r=n||this._getRegistryForType(a);this._exec(t,r,a)})})}_exec(t,e,n){const i=Ys(t);z(n["before"+i],[],n),e[t](n),z(n["after"+i],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var gt=new Tl;class Dl{constructor(){this._init=void 0}notify(t,e,n,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=i?this._descriptors(t).filter(i):this._descriptors(t),a=this._notify(o,t,e,n);return e==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),a}_notify(t,e,n,i){i=i||{};for(const o of t){const a=o.plugin,r=a[n],l=[e,i,o.options];if(z(r,l,a)===!1&&i.cancelable)return!1}return!0}invalidate(){j(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,i=I(n.options&&n.options.plugins,{}),o=Ol(n);return i===!1&&!e?[]:Rl(t,o,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,i=(o,a)=>o.filter(r=>!a.some(l=>r.plugin.id===l.plugin.id));this._notify(i(e,n),t,"stop"),this._notify(i(n,e),t,"start")}}function Ol(s){const t={},e=[],n=Object.keys(gt.plugins.items);for(let o=0;o<n.length;o++)e.push(gt.getPlugin(n[o]));const i=s.plugins||[];for(let o=0;o<i.length;o++){const a=i[o];e.indexOf(a)===-1&&(e.push(a),t[a.id]=!0)}return{plugins:e,localIds:t}}function Il(s,t){return!t&&s===!1?null:s===!0?{}:s}function Rl(s,{plugins:t,localIds:e},n,i){const o=[],a=s.getContext();for(const r of t){const l=r.id,c=Il(n[l],i);c!==null&&o.push({plugin:r,options:El(s.config,{plugin:r,local:e[l]},c,a)})}return o}function El(s,{plugin:t,local:e},n,i){const o=s.pluginScopeKeys(t),a=s.getOptionScopes(n,o);return e&&t.defaults&&a.push(t.defaults),s.createResolver(a,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ts(s,t){const e=G.datasets[s]||{};return((t.datasets||{})[s]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Nl(s,t){let e=s;return s==="_index_"?e=t:s==="_value_"&&(e=t==="x"?"y":"x"),e}function Fl(s,t){return s===t?"_index_":"_value_"}function Yn(s){if(s==="x"||s==="y"||s==="r")return s}function Bl(s){if(s==="top"||s==="bottom")return"x";if(s==="left"||s==="right")return"y"}function Ds(s,...t){if(Yn(s))return s;for(const e of t){const n=e.axis||Bl(e.position)||s.length>1&&Yn(s[0].toLowerCase());if(n)return n}throw new Error(`Cannot determine type of '${s}' axis. Please provide 'axis' or 'position' option.`)}function Kn(s,t,e){if(e[t+"AxisID"]===s)return{axis:t}}function jl(s,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(n=>n.xAxisID===s||n.yAxisID===s);if(e.length)return Kn(s,"x",e[0])||Kn(s,"y",e[0])}return{}}function Hl(s,t){const e=Bt[s.type]||{scales:{}},n=t.scales||{},i=Ts(s.type,t),o=Object.create(null);return Object.keys(n).forEach(a=>{const r=n[a];if(!E(r))return console.error(`Invalid scale configuration for scale: ${a}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=Ds(a,r,jl(a,s),G.scales[r.type]),c=Fl(l,i),d=e.scales||{};o[a]=ge(Object.create(null),[{axis:l},r,d[l],d[c]])}),s.data.datasets.forEach(a=>{const r=a.type||s.type,l=a.indexAxis||Ts(r,t),d=(Bt[r]||{}).scales||{};Object.keys(d).forEach(h=>{const f=Nl(h,l),u=a[f+"AxisID"]||f;o[u]=o[u]||Object.create(null),ge(o[u],[{axis:f},n[u],d[h]])})}),Object.keys(o).forEach(a=>{const r=o[a];ge(r,[G.scales[r.type],G.scale])}),o}function oo(s){const t=s.options||(s.options={});t.plugins=I(t.plugins,{}),t.scales=Hl(s,t)}function ao(s){return s=s||{},s.datasets=s.datasets||[],s.labels=s.labels||[],s}function zl(s){return s=s||{},s.data=ao(s.data),oo(s),s}const Xn=new Map,ro=new Set;function Be(s,t){let e=Xn.get(s);return e||(e=t(),Xn.set(s,e),ro.add(e)),e}const re=(s,t,e)=>{const n=we(t,e);n!==void 0&&s.add(n)};class Wl{constructor(t){this._config=zl(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ao(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),oo(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Be(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Be(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Be(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,n=this.type;return Be(`${n}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const n=this._scopeCache;let i=n.get(t);return(!i||e)&&(i=new Map,n.set(t,i)),i}getOptionScopes(t,e,n){const{options:i,type:o}=this,a=this._cachedScopes(t,n),r=a.get(e);if(r)return r;const l=new Set;e.forEach(d=>{t&&(l.add(t),d.forEach(h=>re(l,t,h))),d.forEach(h=>re(l,i,h)),d.forEach(h=>re(l,Bt[o]||{},h)),d.forEach(h=>re(l,G,h)),d.forEach(h=>re(l,Cs,h))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),ro.has(e)&&a.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Bt[e]||{},G.datasets[e]||{},{type:e},G,Cs]}resolveNamedOptions(t,e,n,i=[""]){const o={$shared:!0},{resolver:a,subPrefixes:r}=Zn(this._resolverCache,t,i);let l=a;if(ql(a,e)){o.$shared=!1,n=At(n)?n():n;const c=this.createResolver(t,n,r);l=Qt(a,n,c)}for(const c of e)o[c]=l[c];return o}createResolver(t,e,n=[""],i){const{resolver:o}=Zn(this._resolverCache,t,n);return E(e)?Qt(o,e,void 0,i):o}}function Zn(s,t,e){let n=s.get(t);n||(n=new Map,s.set(t,n));const i=e.join();let o=n.get(i);return o||(o={resolver:Qs(t,e),subPrefixes:e.filter(r=>!r.toLowerCase().includes("hover"))},n.set(i,o)),o}const Vl=s=>E(s)&&Object.getOwnPropertyNames(s).some(t=>At(s[t]));function ql(s,t){const{isScriptable:e,isIndexable:n}=Hi(s);for(const i of t){const o=e(i),a=n(i),r=(a||o)&&s[i];if(o&&(At(r)||Vl(r))||a&&q(r))return!0}return!1}var Gl="4.5.1";const Ul=["top","bottom","left","right","chartArea"];function Jn(s,t){return s==="top"||s==="bottom"||Ul.indexOf(s)===-1&&t==="x"}function Qn(s,t){return function(e,n){return e[s]===n[s]?e[t]-n[t]:e[s]-n[s]}}function ti(s){const t=s.chart,e=t.options.animation;t.notifyPlugins("afterRender"),z(e&&e.onComplete,[s],t)}function Yl(s){const t=s.chart,e=t.options.animation;z(e&&e.onProgress,[s],t)}function lo(s){return sn()&&typeof s=="string"?s=document.getElementById(s):s&&s.length&&(s=s[0]),s&&s.canvas&&(s=s.canvas),s}const Ke={},ei=s=>{const t=lo(s);return Object.values(Ke).filter(e=>e.canvas===t).pop()};function Kl(s,t,e){const n=Object.keys(s);for(const i of n){const o=+i;if(o>=t){const a=s[i];delete s[i],(e>0||o>t)&&(s[o+e]=a)}}}function Xl(s,t,e,n){return!e||s.type==="mouseout"?null:n?t:s}class ht{static register(...t){gt.add(...t),si()}static unregister(...t){gt.remove(...t),si()}constructor(t,e){const n=this.config=new Wl(e),i=lo(t),o=ei(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||pl(i)),this.platform.updateConfig(n);const r=this.platform.acquireContext(i,a.aspectRatio),l=r&&r.canvas,c=l&&l.height,d=l&&l.width;if(this.id=ea(),this.ctx=r,this.canvas=l,this.width=d,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Dl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=wa(h=>this.update(h),a.resizeDelay||0),this._dataChanges=[],Ke[this.id]=this,!r||!l){console.error("Failed to create chart: can't acquire context from the given item");return}xt.listen(this,"complete",ti),xt.listen(this,"progress",Yl),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:i,_aspectRatio:o}=this;return j(t)?e&&o?o:i?n/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return gt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Ln(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Sn(this.canvas,this.ctx),this}stop(){return xt.stop(this),this}resize(t,e){xt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,i=this.canvas,o=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(i,t,e,o),r=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,Ln(this,r,!0)&&(this.notifyPlugins("resize",{size:a}),z(n.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};B(e,(n,i)=>{n.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,i=Object.keys(n).reduce((a,r)=>(a[r]=!1,a),{});let o=[];e&&(o=o.concat(Object.keys(e).map(a=>{const r=e[a],l=Ds(a,r),c=l==="r",d=l==="x";return{options:r,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),B(o,a=>{const r=a.options,l=r.id,c=Ds(l,r),d=I(r.type,a.dtype);(r.position===void 0||Jn(r.position,c)!==Jn(a.dposition))&&(r.position=a.dposition),i[l]=!0;let h=null;if(l in n&&n[l].type===d)h=n[l];else{const f=gt.getScale(d);h=new f({id:l,type:d,ctx:this.ctx,chart:this}),n[h.id]=h}h.init(r,t)}),B(i,(a,r)=>{a||delete n[r]}),B(n,a=>{$t.configure(this,a,a.options),$t.addBox(this,a)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort((i,o)=>i.index-o.index),n>e){for(let i=e;i<n;++i)this._destroyDatasetMeta(i);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(Qn("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((n,i)=>{e.filter(o=>o===n._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,i;for(this._removeUnreferencedMetasets(),n=0,i=e.length;n<i;n++){const o=e[n];let a=this.getDatasetMeta(n);const r=o.type||this.config.type;if(a.type&&a.type!==r&&(this._destroyDatasetMeta(n),a=this.getDatasetMeta(n)),a.type=r,a.indexAxis=o.indexAxis||Ts(r,this.options),a.order=o.order||0,a.index=n,a.label=""+o.label,a.visible=this.isDatasetVisible(n),a.controller)a.controller.updateIndex(n),a.controller.linkScales();else{const l=gt.getController(r),{datasetElementType:c,dataElementType:d}=G.datasets[r];Object.assign(l,{dataElementType:gt.getElement(d),datasetElementType:c&&gt.getElement(c)}),a.controller=new l(this,n),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){B(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:h}=this.getDatasetMeta(c),f=!i&&o.indexOf(h)===-1;h.buildOrUpdateElements(f),a=Math.max(+h.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),i||B(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Qn("z","_idx"));const{_active:r,_lastEvent:l}=this;l?this._eventHandler(l,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){B(this.scales,t=>{$t.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!gn(e,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:i,count:o}of e){const a=n==="_removeElements"?-o:o;Kl(t,i,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=o=>new Set(t.filter(a=>a[0]===o).map((a,r)=>r+","+a.splice(1).join(","))),i=n(0);for(let o=1;o<e;o++)if(!gn(i,n(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;$t.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],B(this.boxes,i=>{n&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,n=this.data.datasets.length;e<n;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,At(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),i={meta:n,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(n.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(xt.has(this)?this.attached&&!xt.running(this)&&xt.start(this):(this.draw(),ti({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:n,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(n,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let i,o;for(i=0,o=e.length;i<o;++i){const a=e[i];(!t||a.visible)&&n.push(a)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n={meta:t,index:t.index,cancelable:!0},i=Zi(this,t);this.notifyPlugins("beforeDatasetDraw",n)!==!1&&(i&&ls(e,i),t.controller.draw(),i&&cs(e),n.cancelable=!1,this.notifyPlugins("afterDatasetDraw",n))}isPointInArea(t){return yt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,i){const o=Ur.modes[e];return typeof o=="function"?o(this,t,n,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let i=n.filter(o=>o&&o._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(i)),i}getContext(){return this.$context||(this.$context=Pt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const i=n?"show":"hide",o=this.getDatasetMeta(t),a=o.controller._resolveAnimations(void 0,i);es(e)?(o.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),a.update(o,{visible:n}),this.update(r=>r.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),xt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Sn(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ke[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(o,a)=>{e.addEventListener(this,o,a),t[o]=a},i=(o,a,r)=>{o.offsetX=a,o.offsetY=r,this._eventHandler(o)};B(this.options.events,o=>n(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},i=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let a;const r=()=>{i("attach",r),this.attached=!0,this.resize(),n("resize",o),n("detach",a)};a=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),n("attach",r)},e.isAttached(this.canvas)?r():a()}unbindEvents(){B(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},B(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const i=n?"set":"remove";let o,a,r,l;for(e==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),r=0,l=t.length;r<l;++r){a=t[r];const c=a&&this.getDatasetMeta(a.datasetIndex).controller;c&&c[i+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map(({datasetIndex:o,index:a})=>{const r=this.getDatasetMeta(o);if(!r)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:r.data[a],index:a}});!Qe(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,n){const i=this.options.hover,o=(l,c)=>l.filter(d=>!c.some(h=>d.datasetIndex===h.datasetIndex&&d.index===h.index)),a=o(e,t),r=n?t:o(t,e);a.length&&this.updateHoverStyle(a,i.mode,!1),r.length&&i.mode&&this.updateHoverStyle(r,i.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,i)===!1)return;const o=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,i),(o||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:i=[],options:o}=this,a=e,r=this._getActiveElements(t,i,n,a),l=ra(t),c=Xl(t,this._lastEvent,n,l);n&&(this._lastEvent=null,z(o.onHover,[t,r,this],this),l&&z(o.onClick,[t,r,this],this));const d=!Qe(r,i);return(d||e)&&(this._active=r,this._updateHoverStyles(r,i,e)),this._lastEvent=c,d}_getActiveElements(t,e,n,i){if(t.type==="mouseout")return[];if(!n)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}}D(ht,"defaults",G),D(ht,"instances",Ke),D(ht,"overrides",Bt),D(ht,"registry",gt),D(ht,"version",Gl),D(ht,"getChart",ei);function si(){return B(ht.instances,s=>s._plugins.invalidate())}function co(s,t,e=t){s.lineCap=I(e.borderCapStyle,t.borderCapStyle),s.setLineDash(I(e.borderDash,t.borderDash)),s.lineDashOffset=I(e.borderDashOffset,t.borderDashOffset),s.lineJoin=I(e.borderJoinStyle,t.borderJoinStyle),s.lineWidth=I(e.borderWidth,t.borderWidth),s.strokeStyle=I(e.borderColor,t.borderColor)}function Zl(s,t,e){s.lineTo(e.x,e.y)}function Jl(s){return s.stepped?Ea:s.tension||s.cubicInterpolationMode==="monotone"?Na:Zl}function ho(s,t,e={}){const n=s.length,{start:i=0,end:o=n-1}=e,{start:a,end:r}=t,l=Math.max(i,a),c=Math.min(o,r),d=i<a&&o<a||i>r&&o>r;return{count:n,start:l,loop:t.loop,ilen:c<l&&!d?n+c-l:c-l}}function Ql(s,t,e,n){const{points:i,options:o}=t,{count:a,start:r,loop:l,ilen:c}=ho(i,e,n),d=Jl(o);let{move:h=!0,reverse:f}=n||{},u,g,p;for(u=0;u<=c;++u)g=i[(r+(f?c-u:u))%a],!g.skip&&(h?(s.moveTo(g.x,g.y),h=!1):d(s,p,g,f,o.stepped),p=g);return l&&(g=i[(r+(f?c:0))%a],d(s,p,g,f,o.stepped)),!!l}function tc(s,t,e,n){const i=t.points,{count:o,start:a,ilen:r}=ho(i,e,n),{move:l=!0,reverse:c}=n||{};let d=0,h=0,f,u,g,p,b,x;const m=S=>(a+(c?r-S:S))%o,_=()=>{p!==b&&(s.lineTo(d,b),s.lineTo(d,p),s.lineTo(d,x))};for(l&&(u=i[m(0)],s.moveTo(u.x,u.y)),f=0;f<=r;++f){if(u=i[m(f)],u.skip)continue;const S=u.x,w=u.y,$=S|0;$===g?(w<p?p=w:w>b&&(b=w),d=(h*d+S)/++h):(_(),s.lineTo(S,w),g=$,h=0,p=b=w),x=w}_()}function Os(s){const t=s.options,e=t.borderDash&&t.borderDash.length;return!s._decimated&&!s._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?tc:Ql}function ec(s){return s.stepped?xr:s.tension||s.cubicInterpolationMode==="monotone"?mr:Rt}function sc(s,t,e,n){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,n)&&i.closePath()),co(s,t.options),s.stroke(i)}function nc(s,t,e,n){const{segments:i,options:o}=t,a=Os(t);for(const r of i)co(s,o,r.style),s.beginPath(),a(s,t,r,{start:e,end:e+n-1})&&s.closePath(),s.stroke()}const ic=typeof Path2D=="function";function oc(s,t,e,n){ic&&!t.options.segment?sc(s,t,e,n):nc(s,t,e,n)}class Mt extends Ct{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){const i=n.spanGaps?this._loop:this._fullLoop;cr(this._points,n,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Sr(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,i=t[e],o=this.points,a=Xi(this,{property:e,start:i,end:i});if(!a.length)return;const r=[],l=ec(n);let c,d;for(c=0,d=a.length;c<d;++c){const{start:h,end:f}=a[c],u=o[h],g=o[f];if(u===g){r.push(u);continue}const p=Math.abs((i-u[e])/(g[e]-u[e])),b=l(u,g,p,n.stepped);b[e]=t[e],r.push(b)}return r.length===1?r[0]:r}pathSegment(t,e,n){return Os(this)(t,this,e,n)}path(t,e,n){const i=this.segments,o=Os(this);let a=this._loop;e=e||0,n=n||this.points.length-e;for(const r of i)a&=o(t,this,r,{start:e,end:e+n-1});return!!a}draw(t,e,n,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),oc(t,this,n,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}D(Mt,"id","line"),D(Mt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),D(Mt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),D(Mt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function ni(s,t,e,n){const i=s.options,{[e]:o}=s.getProps([e],n);return Math.abs(t-o)<i.radius+i.hitRadius}class Xe extends Ct{constructor(e){super();D(this,"parsed");D(this,"skip");D(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,n,i){const o=this.options,{x:a,y:r}=this.getProps(["x","y"],i);return Math.pow(e-a,2)+Math.pow(n-r,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(e,n){return ni(this,e,"x",n)}inYRange(e,n){return ni(this,e,"y",n)}getCenterPoint(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}size(e){e=e||this.options||{};let n=e.radius||0;n=Math.max(n,n&&e.hoverRadius||0);const i=n&&e.borderWidth||0;return(n+i)*2}draw(e,n){const i=this.options;this.skip||i.radius<.1||!yt(this,n,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,Ps(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}D(Xe,"id","point"),D(Xe,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),D(Xe,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function ac(s,t,e){const n=s.segments,i=s.points,o=t.points,a=[];for(const r of n){let{start:l,end:c}=r;c=us(l,c,i);const d=Is(e,i[l],i[c],r.loop);if(!t.segments){a.push({source:r,target:d,start:i[l],end:i[c]});continue}const h=Xi(t,d);for(const f of h){const u=Is(e,o[f.start],o[f.end],f.loop),g=Ki(r,i,u);for(const p of g)a.push({source:p,target:f,start:{[e]:ii(d,u,"start",Math.max)},end:{[e]:ii(d,u,"end",Math.min)}})}}return a}function Is(s,t,e,n){if(n)return;let i=t[s],o=e[s];return s==="angle"&&(i=nt(i),o=nt(o)),{property:s,start:i,end:o}}function rc(s,t){const{x:e=null,y:n=null}=s||{},i=t.points,o=[];return t.segments.forEach(({start:a,end:r})=>{r=us(a,r,i);const l=i[a],c=i[r];n!==null?(o.push({x:l.x,y:n}),o.push({x:c.x,y:n})):e!==null&&(o.push({x:e,y:l.y}),o.push({x:e,y:c.y}))}),o}function us(s,t,e){for(;t>s;t--){const n=e[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function ii(s,t,e,n){return s&&t?n(s[e],t[e]):s?s[e]:t?t[e]:0}function uo(s,t){let e=[],n=!1;return q(s)?(n=!0,e=s):e=rc(s,t),e.length?new Mt({points:e,options:{tension:0},_loop:n,_fullLoop:n}):null}function oi(s){return s&&s.fill!==!1}function lc(s,t,e){let i=s[t].fill;const o=[t];let a;if(!e)return i;for(;i!==!1&&o.indexOf(i)===-1;){if(!K(i))return i;if(a=s[i],!a)return!1;if(a.visible)return i;o.push(i),i=a.fill}return!1}function cc(s,t,e){const n=fc(s);if(E(n))return isNaN(n.value)?!1:n;let i=parseFloat(n);return K(i)&&Math.floor(i)===i?dc(n[0],t,i,e):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function dc(s,t,e,n){return(s==="-"||s==="+")&&(e=t+e),e===t||e<0||e>=n?!1:e}function hc(s,t){let e=null;return s==="start"?e=t.bottom:s==="end"?e=t.top:E(s)?e=t.getPixelForValue(s.value):t.getBasePixel&&(e=t.getBasePixel()),e}function uc(s,t,e){let n;return s==="start"?n=e:s==="end"?n=t.options.reverse?t.min:t.max:E(s)?n=s.value:n=t.getBaseValue(),n}function fc(s){const t=s.options,e=t.fill;let n=I(e&&e.target,e);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function pc(s){const{scale:t,index:e,line:n}=s,i=[],o=n.segments,a=n.points,r=gc(t,e);r.push(uo({x:null,y:t.bottom},n));for(let l=0;l<o.length;l++){const c=o[l];for(let d=c.start;d<=c.end;d++)bc(i,a[d],r)}return new Mt({points:i,options:{}})}function gc(s,t){const e=[],n=s.getMatchingVisibleMetas("line");for(let i=0;i<n.length;i++){const o=n[i];if(o.index===t)break;o.hidden||e.unshift(o.dataset)}return e}function bc(s,t,e){const n=[];for(let i=0;i<e.length;i++){const o=e[i],{first:a,last:r,point:l}=xc(o,t,"x");if(!(!l||a&&r)){if(a)n.unshift(l);else if(s.push(l),!r)break}}s.push(...n)}function xc(s,t,e){const n=s.interpolate(t,e);if(!n)return{};const i=n[e],o=s.segments,a=s.points;let r=!1,l=!1;for(let c=0;c<o.length;c++){const d=o[c],h=a[d.start][e],f=a[d.end][e];if(Gt(i,h,f)){r=i===h,l=i===f;break}}return{first:r,last:l,point:n}}class fo{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){const{x:i,y:o,radius:a}=this;return e=e||{start:0,end:ot},t.arc(i,o,a,e.end,e.start,!0),!n.bounds}interpolate(t){const{x:e,y:n,radius:i}=this,o=t.angle;return{x:e+Math.cos(o)*i,y:n+Math.sin(o)*i,angle:o}}}function mc(s){const{chart:t,fill:e,line:n}=s;if(K(e))return vc(t,e);if(e==="stack")return pc(s);if(e==="shape")return!0;const i=yc(s);return i instanceof fo?i:uo(i,n)}function vc(s,t){const e=s.getDatasetMeta(t);return e&&s.isDatasetVisible(t)?e.dataset:null}function yc(s){return(s.scale||{}).getPointPositionForValue?_c(s):wc(s)}function wc(s){const{scale:t={},fill:e}=s,n=hc(e,t);if(K(n)){const i=t.isHorizontal();return{x:i?n:null,y:i?null:n}}return null}function _c(s){const{scale:t,fill:e}=s,n=t.options,i=t.getLabels().length,o=n.reverse?t.max:t.min,a=uc(e,t,o),r=[];if(n.grid.circular){const l=t.getPointPositionForValue(0,o);return new fo({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(a)})}for(let l=0;l<i;++l)r.push(t.getPointPositionForValue(l,a));return r}function ks(s,t,e){const n=mc(t),{chart:i,index:o,line:a,scale:r,axis:l}=t,c=a.options,d=c.fill,h=c.backgroundColor,{above:f=h,below:u=h}=d||{},g=i.getDatasetMeta(o),p=Zi(i,g);n&&a.points.length&&(ls(s,e),kc(s,{line:a,target:n,above:f,below:u,area:e,scale:r,axis:l,clip:p}),cs(s))}function kc(s,t){const{line:e,target:n,above:i,below:o,area:a,scale:r,clip:l}=t,c=e._loop?"angle":t.axis;s.save();let d=o;o!==i&&(c==="x"?(ai(s,n,a.top),Ss(s,{line:e,target:n,color:i,scale:r,property:c,clip:l}),s.restore(),s.save(),ai(s,n,a.bottom)):c==="y"&&(ri(s,n,a.left),Ss(s,{line:e,target:n,color:o,scale:r,property:c,clip:l}),s.restore(),s.save(),ri(s,n,a.right),d=i)),Ss(s,{line:e,target:n,color:d,scale:r,property:c,clip:l}),s.restore()}function ai(s,t,e){const{segments:n,points:i}=t;let o=!0,a=!1;s.beginPath();for(const r of n){const{start:l,end:c}=r,d=i[l],h=i[us(l,c,i)];o?(s.moveTo(d.x,d.y),o=!1):(s.lineTo(d.x,e),s.lineTo(d.x,d.y)),a=!!t.pathSegment(s,r,{move:a}),a?s.closePath():s.lineTo(h.x,e)}s.lineTo(t.first().x,e),s.closePath(),s.clip()}function ri(s,t,e){const{segments:n,points:i}=t;let o=!0,a=!1;s.beginPath();for(const r of n){const{start:l,end:c}=r,d=i[l],h=i[us(l,c,i)];o?(s.moveTo(d.x,d.y),o=!1):(s.lineTo(e,d.y),s.lineTo(d.x,d.y)),a=!!t.pathSegment(s,r,{move:a}),a?s.closePath():s.lineTo(e,h.y)}s.lineTo(e,t.first().y),s.closePath(),s.clip()}function Ss(s,t){const{line:e,target:n,property:i,color:o,scale:a,clip:r}=t,l=ac(e,n,i);for(const{source:c,target:d,start:h,end:f}of l){const{style:{backgroundColor:u=o}={}}=c,g=n!==!0;s.save(),s.fillStyle=u,Sc(s,a,r,g&&Is(i,h,f)),s.beginPath();const p=!!e.pathSegment(s,c);let b;if(g){p?s.closePath():li(s,n,f,i);const x=!!n.pathSegment(s,d,{move:p,reverse:!0});b=p&&x,b||li(s,n,h,i)}s.closePath(),s.fill(b?"evenodd":"nonzero"),s.restore()}}function Sc(s,t,e,n){const i=t.chart.chartArea,{property:o,start:a,end:r}=n||{};if(o==="x"||o==="y"){let l,c,d,h;o==="x"?(l=a,c=i.top,d=r,h=i.bottom):(l=i.left,c=a,d=i.right,h=r),s.beginPath(),e&&(l=Math.max(l,e.left),d=Math.min(d,e.right),c=Math.max(c,e.top),h=Math.min(h,e.bottom)),s.rect(l,c,d-l,h-c),s.clip()}}function li(s,t,e,n){const i=t.interpolate(e,n);i&&s.lineTo(i.x,i.y)}var $c={id:"filler",afterDatasetsUpdate(s,t,e){const n=(s.data.datasets||[]).length,i=[];let o,a,r,l;for(a=0;a<n;++a)o=s.getDatasetMeta(a),r=o.dataset,l=null,r&&r.options&&r instanceof Mt&&(l={visible:s.isDatasetVisible(a),index:a,fill:cc(r,a,n),chart:s,axis:o.controller.options.indexAxis,scale:o.vScale,line:r}),o.$filler=l,i.push(l);for(a=0;a<n;++a)l=i[a],!(!l||l.fill===!1)&&(l.fill=lc(i,a,e.propagate))},beforeDraw(s,t,e){const n=e.drawTime==="beforeDraw",i=s.getSortedVisibleDatasetMetas(),o=s.chartArea;for(let a=i.length-1;a>=0;--a){const r=i[a].$filler;r&&(r.line.updateControlPoints(o,r.axis),n&&r.fill&&ks(s.ctx,r,o))}},beforeDatasetsDraw(s,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const n=s.getSortedVisibleDatasetMetas();for(let i=n.length-1;i>=0;--i){const o=n[i].$filler;oi(o)&&ks(s.ctx,o,s.chartArea)}},beforeDatasetDraw(s,t,e){const n=t.meta.$filler;!oi(n)||e.drawTime!=="beforeDatasetDraw"||ks(s.ctx,n,s.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const ci=(s,t)=>{let{boxHeight:e=t,boxWidth:n=t}=s;return s.usePointStyle&&(e=Math.min(e,t),n=s.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:e,itemHeight:Math.max(t,e)}},Mc=(s,t)=>s!==null&&t!==null&&s.datasetIndex===t.datasetIndex&&s.index===t.index;class di extends Ct{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=z(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(n=>t.filter(n,this.chart.data))),t.sort&&(e=e.sort((n,i)=>t.sort(n,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const n=t.labels,i=Z(n.font),o=i.size,a=this._computeTitleHeight(),{boxWidth:r,itemHeight:l}=ci(n,o);let c,d;e.font=i.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(a,o,r,l)+10):(d=this.maxHeight,c=this._fitCols(a,i,r,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,i){const{ctx:o,maxWidth:a,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=i+r;let h=t;o.textAlign="left",o.textBaseline="middle";let f=-1,u=-d;return this.legendItems.forEach((g,p)=>{const b=n+e/2+o.measureText(g.text).width;(p===0||c[c.length-1]+b+2*r>a)&&(h+=d,c[c.length-(p>0?0:1)]=0,u+=d,f++),l[p]={left:0,top:u,row:f,width:b,height:i},c[c.length-1]+=b+r}),h}_fitCols(t,e,n,i){const{ctx:o,maxHeight:a,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=a-t;let h=r,f=0,u=0,g=0,p=0;return this.legendItems.forEach((b,x)=>{const{itemWidth:m,itemHeight:_}=Lc(n,e,o,b,i);x>0&&u+_+2*r>d&&(h+=f+r,c.push({width:f,height:u}),g+=f+r,p++,f=u=0),l[x]={left:g,top:u,col:p,width:m,height:_},f=Math.max(f,m),u+=_+r}),h+=f,c.push({width:f,height:u}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:i},rtl:o}}=this,a=Yt(o,this.left,this.width);if(this.isHorizontal()){let r=0,l=st(n,this.left+i,this.right-this.lineWidths[r]);for(const c of e)r!==c.row&&(r=c.row,l=st(n,this.left+i,this.right-this.lineWidths[r])),c.top+=this.top+t+i,c.left=a.leftForLtr(a.x(l),c.width),l+=c.width+i}else{let r=0,l=st(n,this.top+t+i,this.bottom-this.columnSizes[r].height);for(const c of e)c.col!==r&&(r=c.col,l=st(n,this.top+t+i,this.bottom-this.columnSizes[r].height)),c.top=l,c.left+=this.left+i,c.left=a.leftForLtr(a.x(c.left),c.width),l+=c.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;ls(t,this),this._draw(),cs(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:i}=this,{align:o,labels:a}=t,r=G.color,l=Yt(t.rtl,this.left,this.width),c=Z(a.font),{padding:d}=a,h=c.size,f=h/2;let u;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=c.string;const{boxWidth:g,boxHeight:p,itemHeight:b}=ci(a,h),x=function($,y,v){if(isNaN(g)||g<=0||isNaN(p)||p<0)return;i.save();const L=I(v.lineWidth,1);if(i.fillStyle=I(v.fillStyle,r),i.lineCap=I(v.lineCap,"butt"),i.lineDashOffset=I(v.lineDashOffset,0),i.lineJoin=I(v.lineJoin,"miter"),i.lineWidth=L,i.strokeStyle=I(v.strokeStyle,r),i.setLineDash(I(v.lineDash,[])),a.usePointStyle){const A={radius:p*Math.SQRT2/2,pointStyle:v.pointStyle,rotation:v.rotation,borderWidth:L},C=l.xPlus($,g/2),P=y+f;Bi(i,A,C,P,a.pointStyleWidth&&g)}else{const A=y+Math.max((h-p)/2,0),C=l.leftForLtr($,g),P=Ut(v.borderRadius);i.beginPath(),Object.values(P).some(O=>O!==0)?is(i,{x:C,y:A,w:g,h:p,radius:P}):i.rect(C,A,g,p),i.fill(),L!==0&&i.stroke()}i.restore()},m=function($,y,v){Jt(i,v.text,$,y+b/2,c,{strikethrough:v.hidden,textAlign:l.textAlign(v.textAlign)})},_=this.isHorizontal(),S=this._computeTitleHeight();_?u={x:st(o,this.left+d,this.right-n[0]),y:this.top+d+S,line:0}:u={x:this.left+d,y:st(o,this.top+S+d,this.bottom-e[0].height),line:0},Gi(this.ctx,t.textDirection);const w=b+d;this.legendItems.forEach(($,y)=>{i.strokeStyle=$.fontColor,i.fillStyle=$.fontColor;const v=i.measureText($.text).width,L=l.textAlign($.textAlign||($.textAlign=a.textAlign)),A=g+f+v;let C=u.x,P=u.y;l.setWidth(this.width),_?y>0&&C+A+d>this.right&&(P=u.y+=w,u.line++,C=u.x=st(o,this.left+d,this.right-n[u.line])):y>0&&P+w>this.bottom&&(C=u.x=C+e[u.line].width+d,u.line++,P=u.y=st(o,this.top+S+d,this.bottom-e[u.line].height));const O=l.x(C);if(x(O,P,$),C=_a(L,C+g+f,_?C+A:this.right,t.rtl),m(l.x(C),P,$),_)u.x+=A+d;else if(typeof $.text!="string"){const W=c.lineHeight;u.y+=po($,W)+d}else u.y+=w}),Ui(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=Z(e.font),i=Q(e.padding);if(!e.display)return;const o=Yt(t.rtl,this.left,this.width),a=this.ctx,r=e.position,l=n.size/2,c=i.top+l;let d,h=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+c,h=st(t.align,h,this.right-f);else{const g=this.columnSizes.reduce((p,b)=>Math.max(p,b.height),0);d=c+st(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const u=st(r,h,h+f);a.textAlign=o.textAlign(Ni(r)),a.textBaseline="middle",a.strokeStyle=e.color,a.fillStyle=e.color,a.font=n.string,Jt(a,e.text,u,d,n)}_computeTitleHeight(){const t=this.options.title,e=Z(t.font),n=Q(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,i,o;if(Gt(t,this.left,this.right)&&Gt(e,this.top,this.bottom)){for(o=this.legendHitBoxes,n=0;n<o.length;++n)if(i=o[n],Gt(t,i.left,i.left+i.width)&&Gt(e,i.top,i.top+i.height))return this.legendItems[n]}return null}handleEvent(t){const e=this.options;if(!Pc(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=Mc(i,n);i&&!o&&z(e.onLeave,[t,i,this],this),this._hoveredItem=n,n&&!o&&z(e.onHover,[t,n,this],this)}else n&&z(e.onClick,[t,n,this],this)}}function Lc(s,t,e,n,i){const o=Ac(n,s,t,e),a=Cc(i,n,t.lineHeight);return{itemWidth:o,itemHeight:a}}function Ac(s,t,e,n){let i=s.text;return i&&typeof i!="string"&&(i=i.reduce((o,a)=>o.length>a.length?o:a)),t+e.size/2+n.measureText(i).width}function Cc(s,t,e){let n=s;return typeof t.text!="string"&&(n=po(t,e)),n}function po(s,t){const e=s.text?s.text.length:0;return t*e}function Pc(s,t){return!!((s==="mousemove"||s==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(s==="click"||s==="mouseup"))}var Tc={id:"legend",_element:di,start(s,t,e){const n=s.legend=new di({ctx:s.ctx,options:e,chart:s});$t.configure(s,n,e),$t.addBox(s,n)},stop(s){$t.removeBox(s,s.legend),delete s.legend},beforeUpdate(s,t,e){const n=s.legend;$t.configure(s,n,e),n.options=e},afterUpdate(s){const t=s.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(s,t){t.replay||s.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(s,t,e){const n=t.datasetIndex,i=e.chart;i.isDatasetVisible(n)?(i.hide(n),t.hidden=!0):(i.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:s=>s.chart.options.color,boxWidth:40,padding:10,generateLabels(s){const t=s.data.datasets,{labels:{usePointStyle:e,pointStyle:n,textAlign:i,color:o,useBorderRadius:a,borderRadius:r}}=s.legend.options;return s._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),d=Q(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:n||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:a&&(r||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:s=>s.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:s=>!s.startsWith("on"),labels:{_scriptable:s=>!["generateLabels","filter","sort"].includes(s)}}};const ue={average(s){if(!s.length)return!1;let t,e,n=new Set,i=0,o=0;for(t=0,e=s.length;t<e;++t){const r=s[t].element;if(r&&r.hasValue()){const l=r.tooltipPosition();n.add(l.x),i+=l.y,++o}}return o===0||n.size===0?!1:{x:[...n].reduce((r,l)=>r+l)/n.size,y:i/o}},nearest(s,t){if(!s.length)return!1;let e=t.x,n=t.y,i=Number.POSITIVE_INFINITY,o,a,r;for(o=0,a=s.length;o<a;++o){const l=s[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=As(t,c);d<i&&(i=d,r=l)}}if(r){const l=r.tooltipPosition();e=l.x,n=l.y}return{x:e,y:n}}};function pt(s,t){return t&&(q(t)?Array.prototype.push.apply(s,t):s.push(t)),s}function mt(s){return(typeof s=="string"||s instanceof String)&&s.indexOf(`
`)>-1?s.split(`
`):s}function Dc(s,t){const{element:e,datasetIndex:n,index:i}=t,o=s.getDatasetMeta(n).controller,{label:a,value:r}=o.getLabelAndValue(i);return{chart:s,label:a,parsed:o.getParsed(i),raw:s.data.datasets[n].data[i],formattedValue:r,dataset:o.getDataset(),dataIndex:i,datasetIndex:n,element:e}}function hi(s,t){const e=s.chart.ctx,{body:n,footer:i,title:o}=s,{boxWidth:a,boxHeight:r}=t,l=Z(t.bodyFont),c=Z(t.titleFont),d=Z(t.footerFont),h=o.length,f=i.length,u=n.length,g=Q(t.padding);let p=g.height,b=0,x=n.reduce((S,w)=>S+w.before.length+w.lines.length+w.after.length,0);if(x+=s.beforeBody.length+s.afterBody.length,h&&(p+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),x){const S=t.displayColors?Math.max(r,l.lineHeight):l.lineHeight;p+=u*S+(x-u)*l.lineHeight+(x-1)*t.bodySpacing}f&&(p+=t.footerMarginTop+f*d.lineHeight+(f-1)*t.footerSpacing);let m=0;const _=function(S){b=Math.max(b,e.measureText(S).width+m)};return e.save(),e.font=c.string,B(s.title,_),e.font=l.string,B(s.beforeBody.concat(s.afterBody),_),m=t.displayColors?a+2+t.boxPadding:0,B(n,S=>{B(S.before,_),B(S.lines,_),B(S.after,_)}),m=0,e.font=d.string,B(s.footer,_),e.restore(),b+=g.width,{width:b,height:p}}function Oc(s,t){const{y:e,height:n}=t;return e<n/2?"top":e>s.height-n/2?"bottom":"center"}function Ic(s,t,e,n){const{x:i,width:o}=n,a=e.caretSize+e.caretPadding;if(s==="left"&&i+o+a>t.width||s==="right"&&i-o-a<0)return!0}function Rc(s,t,e,n){const{x:i,width:o}=e,{width:a,chartArea:{left:r,right:l}}=s;let c="center";return n==="center"?c=i<=(r+l)/2?"left":"right":i<=o/2?c="left":i>=a-o/2&&(c="right"),Ic(c,s,t,e)&&(c="center"),c}function ui(s,t,e){const n=e.yAlign||t.yAlign||Oc(s,e);return{xAlign:e.xAlign||t.xAlign||Rc(s,t,e,n),yAlign:n}}function Ec(s,t){let{x:e,width:n}=s;return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function Nc(s,t,e){let{y:n,height:i}=s;return t==="top"?n+=e:t==="bottom"?n-=i+e:n-=i/2,n}function fi(s,t,e,n){const{caretSize:i,caretPadding:o,cornerRadius:a}=s,{xAlign:r,yAlign:l}=e,c=i+o,{topLeft:d,topRight:h,bottomLeft:f,bottomRight:u}=Ut(a);let g=Ec(t,r);const p=Nc(t,l,c);return l==="center"?r==="left"?g+=c:r==="right"&&(g-=c):r==="left"?g-=Math.max(d,f)+i:r==="right"&&(g+=Math.max(h,u)+i),{x:rt(g,0,n.width-t.width),y:rt(p,0,n.height-t.height)}}function je(s,t,e){const n=Q(e.padding);return t==="center"?s.x+s.width/2:t==="right"?s.x+s.width-n.right:s.x+n.left}function pi(s){return pt([],mt(s))}function Fc(s,t,e){return Pt(s,{tooltip:t,tooltipItems:e,type:"tooltip"})}function gi(s,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?s.override(e):s}const go={beforeTitle:bt,title(s){if(s.length>0){const t=s[0],e=t.chart.data.labels,n=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return e[t.dataIndex]}return""},afterTitle:bt,beforeBody:bt,beforeLabel:bt,label(s){if(this&&this.options&&this.options.mode==="dataset")return s.label+": "+s.formattedValue||s.formattedValue;let t=s.dataset.label||"";t&&(t+=": ");const e=s.formattedValue;return j(e)||(t+=e),t},labelColor(s){const e=s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(s){const e=s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:bt,afterBody:bt,beforeFooter:bt,footer:bt,afterFooter:bt};function tt(s,t,e,n){const i=s[t].call(e,n);return typeof i>"u"?go[t].call(e,n):i}class Rs extends Ct{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),i=n.enabled&&e.options.animation&&n.animations,o=new Ji(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=Fc(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:n}=e,i=tt(n,"beforeTitle",this,t),o=tt(n,"title",this,t),a=tt(n,"afterTitle",this,t);let r=[];return r=pt(r,mt(i)),r=pt(r,mt(o)),r=pt(r,mt(a)),r}getBeforeBody(t,e){return pi(tt(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:n}=e,i=[];return B(t,o=>{const a={before:[],lines:[],after:[]},r=gi(n,o);pt(a.before,mt(tt(r,"beforeLabel",this,o))),pt(a.lines,tt(r,"label",this,o)),pt(a.after,mt(tt(r,"afterLabel",this,o))),i.push(a)}),i}getAfterBody(t,e){return pi(tt(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:n}=e,i=tt(n,"beforeFooter",this,t),o=tt(n,"footer",this,t),a=tt(n,"afterFooter",this,t);let r=[];return r=pt(r,mt(i)),r=pt(r,mt(o)),r=pt(r,mt(a)),r}_createItems(t){const e=this._active,n=this.chart.data,i=[],o=[],a=[];let r=[],l,c;for(l=0,c=e.length;l<c;++l)r.push(Dc(this.chart,e[l]));return t.filter&&(r=r.filter((d,h,f)=>t.filter(d,h,f,n))),t.itemSort&&(r=r.sort((d,h)=>t.itemSort(d,h,n))),B(r,d=>{const h=gi(t.callbacks,d);i.push(tt(h,"labelColor",this,d)),o.push(tt(h,"labelPointStyle",this,d)),a.push(tt(h,"labelTextColor",this,d))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=a,this.dataPoints=r,r}update(t,e){const n=this.options.setContext(this.getContext()),i=this._active;let o,a=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const r=ue[n.position].call(this,i,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);const l=this._size=hi(this,n),c=Object.assign({},r,l),d=ui(this.chart,n,c),h=fi(n,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,o={opacity:1,x:h.x,y:h.y,width:l.width,height:l.height,caretX:r.x,caretY:r.y}}this._tooltipItems=a,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,i){const o=this.getCaretPosition(t,n,i);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,n){const{xAlign:i,yAlign:o}=this,{caretSize:a,cornerRadius:r}=n,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:h}=Ut(r),{x:f,y:u}=t,{width:g,height:p}=e;let b,x,m,_,S,w;return o==="center"?(S=u+p/2,i==="left"?(b=f,x=b-a,_=S+a,w=S-a):(b=f+g,x=b+a,_=S-a,w=S+a),m=b):(i==="left"?x=f+Math.max(l,d)+a:i==="right"?x=f+g-Math.max(c,h)-a:x=this.caretX,o==="top"?(_=u,S=_-a,b=x-a,m=x+a):(_=u+p,S=_+a,b=x+a,m=x-a),w=_),{x1:b,x2:x,x3:m,y1:_,y2:S,y3:w}}drawTitle(t,e,n){const i=this.title,o=i.length;let a,r,l;if(o){const c=Yt(n.rtl,this.x,this.width);for(t.x=je(this,n.titleAlign,n),e.textAlign=c.textAlign(n.titleAlign),e.textBaseline="middle",a=Z(n.titleFont),r=n.titleSpacing,e.fillStyle=n.titleColor,e.font=a.string,l=0;l<o;++l)e.fillText(i[l],c.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r,l+1===o&&(t.y+=n.titleMarginBottom-r)}}_drawColorBox(t,e,n,i,o){const a=this.labelColors[n],r=this.labelPointStyles[n],{boxHeight:l,boxWidth:c}=o,d=Z(o.bodyFont),h=je(this,"left",o),f=i.x(h),u=l<d.lineHeight?(d.lineHeight-l)/2:0,g=e.y+u;if(o.usePointStyle){const p={radius:Math.min(c,l)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},b=i.leftForLtr(f,c)+c/2,x=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Ps(t,p,b,x),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,Ps(t,p,b,x)}else{t.lineWidth=E(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const p=i.leftForLtr(f,c),b=i.leftForLtr(i.xPlus(f,1),c-2),x=Ut(a.borderRadius);Object.values(x).some(m=>m!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,is(t,{x:p,y:g,w:c,h:l,radius:x}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),is(t,{x:b,y:g+1,w:c-2,h:l-2,radius:x}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(p,g,c,l),t.strokeRect(p,g,c,l),t.fillStyle=a.backgroundColor,t.fillRect(b,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:i}=this,{bodySpacing:o,bodyAlign:a,displayColors:r,boxHeight:l,boxWidth:c,boxPadding:d}=n,h=Z(n.bodyFont);let f=h.lineHeight,u=0;const g=Yt(n.rtl,this.x,this.width),p=function(v){e.fillText(v,g.x(t.x+u),t.y+f/2),t.y+=f+o},b=g.textAlign(a);let x,m,_,S,w,$,y;for(e.textAlign=a,e.textBaseline="middle",e.font=h.string,t.x=je(this,b,n),e.fillStyle=n.bodyColor,B(this.beforeBody,p),u=r&&b!=="right"?a==="center"?c/2+d:c+2+d:0,S=0,$=i.length;S<$;++S){for(x=i[S],m=this.labelTextColors[S],e.fillStyle=m,B(x.before,p),_=x.lines,r&&_.length&&(this._drawColorBox(e,t,S,g,n),f=Math.max(h.lineHeight,l)),w=0,y=_.length;w<y;++w)p(_[w]),f=h.lineHeight;B(x.after,p)}u=0,f=h.lineHeight,B(this.afterBody,p),t.y-=o}drawFooter(t,e,n){const i=this.footer,o=i.length;let a,r;if(o){const l=Yt(n.rtl,this.x,this.width);for(t.x=je(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=l.textAlign(n.footerAlign),e.textBaseline="middle",a=Z(n.footerFont),e.fillStyle=n.footerColor,e.font=a.string,r=0;r<o;++r)e.fillText(i[r],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+n.footerSpacing}}drawBackground(t,e,n,i){const{xAlign:o,yAlign:a}=this,{x:r,y:l}=t,{width:c,height:d}=n,{topLeft:h,topRight:f,bottomLeft:u,bottomRight:g}=Ut(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(r+h,l),a==="top"&&this.drawCaret(t,e,n,i),e.lineTo(r+c-f,l),e.quadraticCurveTo(r+c,l,r+c,l+f),a==="center"&&o==="right"&&this.drawCaret(t,e,n,i),e.lineTo(r+c,l+d-g),e.quadraticCurveTo(r+c,l+d,r+c-g,l+d),a==="bottom"&&this.drawCaret(t,e,n,i),e.lineTo(r+u,l+d),e.quadraticCurveTo(r,l+d,r,l+d-u),a==="center"&&o==="left"&&this.drawCaret(t,e,n,i),e.lineTo(r,l+h),e.quadraticCurveTo(r,l,r+h,l),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,i=n&&n.x,o=n&&n.y;if(i||o){const a=ue[t.position].call(this,this._active,this._eventPosition);if(!a)return;const r=this._size=hi(this,t),l=Object.assign({},a,this._size),c=ui(e,t,l),d=fi(t,l,c,e);(i._to!==d.x||o._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=r.width,this.height=r.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const a=Q(e.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&r&&(t.save(),t.globalAlpha=n,this.drawBackground(o,t,i,e),Gi(t,e.textDirection),o.y+=a.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),Ui(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,i=t.map(({datasetIndex:r,index:l})=>{const c=this.chart.getDatasetMeta(r);if(!c)throw new Error("Cannot find a dataset at index "+r);return{datasetIndex:r,element:c.data[l],index:l}}),o=!Qe(n,i),a=this._positionChanged(i,e);(o||a)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],a=this._getActiveElements(t,o,e,n),r=this._positionChanged(a,t),l=e||!Qe(a,o)||r;return l&&(this._active=a,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,n,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(r=>this.chart.data.datasets[r.datasetIndex]&&this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index)!==void 0);const a=this.chart.getElementsAtEventForMode(t,o.mode,o,n);return o.reverse&&a.reverse(),a}_positionChanged(t,e){const{caretX:n,caretY:i,options:o}=this,a=ue[o.position].call(this,t,e);return a!==!1&&(n!==a.x||i!==a.y)}}D(Rs,"positioners",ue);var Bc={id:"tooltip",_element:Rs,positioners:ue,afterInit(s,t,e){e&&(s.tooltip=new Rs({chart:s,options:e}))},beforeUpdate(s,t,e){s.tooltip&&s.tooltip.initialize(e)},reset(s,t,e){s.tooltip&&s.tooltip.initialize(e)},afterDraw(s){const t=s.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(s.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(s.ctx),s.notifyPlugins("afterTooltipDraw",e)}},afterEvent(s,t){if(s.tooltip){const e=t.replay;s.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(s,t)=>t.bodyFont.size,boxWidth:(s,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:go},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:s=>s!=="filter"&&s!=="itemSort"&&s!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const jc=(s,t,e,n)=>(typeof t=="string"?(e=s.push(t)-1,n.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Hc(s,t,e,n){const i=s.indexOf(t);if(i===-1)return jc(s,t,e,n);const o=s.lastIndexOf(t);return i!==o?e:i}const zc=(s,t)=>s===null?null:rt(Math.round(s),0,t);function bi(s){const t=this.getLabels();return s>=0&&s<t.length?t[s]:s}class Es extends se{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const n=this.getLabels();for(const{index:i,label:o}of e)n[i]===o&&n.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(j(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:Hc(n,t,I(e,t),this._addedLabels),zc(e,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),e||(i=this.getLabels().length-1)),this.min=n,this.max=i}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,i=[];let o=this.getLabels();o=t===0&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let a=t;a<=e;a++)i.push({value:a});return i}getLabelForValue(t){return bi.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}D(Es,"id","category"),D(Es,"defaults",{ticks:{callback:bi}});function Wc(s,t){const e=[],{bounds:i,step:o,min:a,max:r,precision:l,count:c,maxTicks:d,maxDigits:h,includeBounds:f}=s,u=o||1,g=d-1,{min:p,max:b}=t,x=!j(a),m=!j(r),_=!j(c),S=(b-p)/(h+1);let w=xn((b-p)/g/u)*u,$,y,v,L;if(w<1e-14&&!x&&!m)return[{value:p},{value:b}];L=Math.ceil(b/w)-Math.floor(p/w),L>g&&(w=xn(L*w/g/u)*u),j(l)||($=Math.pow(10,l),w=Math.ceil(w*$)/$),i==="ticks"?(y=Math.floor(p/w)*w,v=Math.ceil(b/w)*w):(y=p,v=b),x&&m&&o&&ua((r-a)/o,w/1e3)?(L=Math.round(Math.min((r-a)/w,d)),w=(r-a)/L,y=a,v=r):_?(y=x?a:y,v=m?r:v,L=c-1,w=(v-y)/L):(L=(v-y)/w,be(L,Math.round(L),w/1e3)?L=Math.round(L):L=Math.ceil(L));const A=Math.max(mn(w),mn(y));$=Math.pow(10,j(l)?A:l),y=Math.round(y*$)/$,v=Math.round(v*$)/$;let C=0;for(x&&(f&&y!==a?(e.push({value:a}),y<a&&C++,be(Math.round((y+C*w)*$)/$,a,xi(a,S,s))&&C++):y<a&&C++);C<L;++C){const P=Math.round((y+C*w)*$)/$;if(m&&P>r)break;e.push({value:P})}return m&&f&&v!==r?e.length&&be(e[e.length-1].value,r,xi(r,S,s))?e[e.length-1].value=r:e.push({value:r}):(!m||v===r)&&e.push({value:v}),e}function xi(s,t,{horizontal:e,minRotation:n}){const i=kt(n),o=(e?Math.sin(i):Math.cos(i))||.001,a=.75*t*(""+s).length;return Math.min(t/o,a)}class Ns extends se{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return j(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:o}=this;const a=l=>i=e?i:l,r=l=>o=n?o:l;if(t){const l=Zt(i),c=Zt(o);l<0&&c<0?r(0):l>0&&c>0&&a(0)}if(i===o){let l=o===0?1:Math.abs(o*.05);r(o+l),t||a(i-l)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:n}=t,i;return n?(i=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const i={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},o=this._range||this,a=Wc(i,o);return t.bounds==="ticks"&&fa(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const i=(n-e)/Math.max(t.length-1,1)/2;e-=i,n+=i}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return Fi(t,this.chart.options.locale,this.options.ticks.format)}}class Fs extends Ns{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=K(t)?t:0,this.max=K(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=kt(this.options.ticks.minRotation),i=(t?Math.sin(n):Math.cos(n))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}D(Fs,"id","linear"),D(Fs,"defaults",{ticks:{callback:Js.formatters.numeric}});function Bs(s){const t=s.ticks;if(t.display&&s.display){const e=Q(t.backdropPadding);return I(t.font&&t.font.size,G.font.size)+e.height}return 0}function Vc(s,t,e){return e=q(e)?e:[e],{w:Ra(s,t.string,e),h:e.length*t.lineHeight}}function mi(s,t,e,n,i){return s===n||s===i?{start:t-e/2,end:t+e/2}:s<n||s>i?{start:t-e,end:t}:{start:t,end:t+e}}function qc(s){const t={l:s.left+s._padding.left,r:s.right-s._padding.right,t:s.top+s._padding.top,b:s.bottom-s._padding.bottom},e=Object.assign({},t),n=[],i=[],o=s._pointLabels.length,a=s.options.pointLabels,r=a.centerPointLabels?Y/o:0;for(let l=0;l<o;l++){const c=a.setContext(s.getPointLabelContext(l));i[l]=c.padding;const d=s.getPointPosition(l,s.drawingArea+i[l],r),h=Z(c.font),f=Vc(s.ctx,h,s._pointLabels[l]);n[l]=f;const u=nt(s.getIndexAngle(l)+r),g=Math.round(Ks(u)),p=mi(g,d.x,f.w,0,180),b=mi(g,d.y,f.h,90,270);Gc(e,t,u,p,b)}s.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),s._pointLabelItems=Kc(s,n,i)}function Gc(s,t,e,n,i){const o=Math.abs(Math.sin(e)),a=Math.abs(Math.cos(e));let r=0,l=0;n.start<t.l?(r=(t.l-n.start)/o,s.l=Math.min(s.l,t.l-r)):n.end>t.r&&(r=(n.end-t.r)/o,s.r=Math.max(s.r,t.r+r)),i.start<t.t?(l=(t.t-i.start)/a,s.t=Math.min(s.t,t.t-l)):i.end>t.b&&(l=(i.end-t.b)/a,s.b=Math.max(s.b,t.b+l))}function Uc(s,t,e){const n=s.drawingArea,{extra:i,additionalAngle:o,padding:a,size:r}=e,l=s.getPointPosition(t,n+i+a,o),c=Math.round(Ks(nt(l.angle+it))),d=Jc(l.y,r.h,c),h=Xc(c),f=Zc(l.x,r.w,h);return{visible:!0,x:l.x,y:d,textAlign:h,left:f,top:d,right:f+r.w,bottom:d+r.h}}function Yc(s,t){if(!t)return!0;const{left:e,top:n,right:i,bottom:o}=s;return!(yt({x:e,y:n},t)||yt({x:e,y:o},t)||yt({x:i,y:n},t)||yt({x:i,y:o},t))}function Kc(s,t,e){const n=[],i=s._pointLabels.length,o=s.options,{centerPointLabels:a,display:r}=o.pointLabels,l={extra:Bs(o)/2,additionalAngle:a?Y/i:0};let c;for(let d=0;d<i;d++){l.padding=e[d],l.size=t[d];const h=Uc(s,d,l);n.push(h),r==="auto"&&(h.visible=Yc(h,c),h.visible&&(c=h))}return n}function Xc(s){return s===0||s===180?"center":s<180?"left":"right"}function Zc(s,t,e){return e==="right"?s-=t:e==="center"&&(s-=t/2),s}function Jc(s,t,e){return e===90||e===270?s-=t/2:(e>270||e<90)&&(s-=t),s}function Qc(s,t,e){const{left:n,top:i,right:o,bottom:a}=e,{backdropColor:r}=t;if(!j(r)){const l=Ut(t.borderRadius),c=Q(t.backdropPadding);s.fillStyle=r;const d=n-c.left,h=i-c.top,f=o-n+c.width,u=a-i+c.height;Object.values(l).some(g=>g!==0)?(s.beginPath(),is(s,{x:d,y:h,w:f,h:u,radius:l}),s.fill()):s.fillRect(d,h,f,u)}}function td(s,t){const{ctx:e,options:{pointLabels:n}}=s;for(let i=t-1;i>=0;i--){const o=s._pointLabelItems[i];if(!o.visible)continue;const a=n.setContext(s.getPointLabelContext(i));Qc(e,a,o);const r=Z(a.font),{x:l,y:c,textAlign:d}=o;Jt(e,s._pointLabels[i],l,c+r.lineHeight/2,r,{color:a.color,textAlign:d,textBaseline:"middle"})}}function bo(s,t,e,n){const{ctx:i}=s;if(e)i.arc(s.xCenter,s.yCenter,t,0,ot);else{let o=s.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let a=1;a<n;a++)o=s.getPointPosition(a,t),i.lineTo(o.x,o.y)}}function ed(s,t,e,n,i){const o=s.ctx,a=t.circular,{color:r,lineWidth:l}=t;!a&&!n||!r||!l||e<0||(o.save(),o.strokeStyle=r,o.lineWidth=l,o.setLineDash(i.dash||[]),o.lineDashOffset=i.dashOffset,o.beginPath(),bo(s,e,a,n),o.closePath(),o.stroke(),o.restore())}function sd(s,t,e){return Pt(s,{label:e,index:t,type:"pointLabel"})}class fe extends Ns{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Q(Bs(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=K(t)&&!isNaN(t)?t:0,this.max=K(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Bs(this.options))}generateTickLabels(t){Ns.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,n)=>{const i=z(this.options.pointLabels.callback,[e,n],this);return i||i===0?i:""}).filter((e,n)=>this.chart.getDataVisibility(n))}fit(){const t=this.options;t.display&&t.pointLabels.display?qc(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,i))}getIndexAngle(t){const e=ot/(this._pointLabels.length||1),n=this.options.startAngle||0;return nt(t*e+kt(n))}getDistanceFromCenterForValue(t){if(j(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(j(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const n=e[t];return sd(this.getContext(),t,n)}}getPointPosition(t,e,n=0){const i=this.getIndexAngle(t)-it+n;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:i,bottom:o}=this._pointLabelItems[t];return{left:e,top:n,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),bo(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:n,grid:i,border:o}=e,a=this._pointLabels.length;let r,l,c;if(e.pointLabels.display&&td(this,a),i.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){l=this.getDistanceFromCenterForValue(d.value);const f=this.getContext(h),u=i.setContext(f),g=o.setContext(f);ed(this,u,l,a,g)}}),n.display){for(t.save(),r=a-1;r>=0;r--){const d=n.setContext(this.getPointLabelContext(r)),{color:h,lineWidth:f}=d;!f||!h||(t.lineWidth=f,t.strokeStyle=h,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(r,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;const i=this.getIndexAngle(0);let o,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((r,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=n.setContext(this.getContext(l)),d=Z(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,a=t.measureText(r.label).width,t.fillStyle=c.backdropColor;const h=Q(c.backdropPadding);t.fillRect(-a/2-h.left,-o-d.size/2-h.top,a+h.width,d.size+h.height)}Jt(t,r.label,0,-o,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}D(fe,"id","radialLinear"),D(fe,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Js.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),D(fe,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),D(fe,"descriptors",{angleLines:{_fallback:"grid"}});const fs={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},et=Object.keys(fs);function vi(s,t){return s-t}function yi(s,t){if(j(t))return null;const e=s._adapter,{parser:n,round:i,isoWeekday:o}=s._parseOpts;let a=t;return typeof n=="function"&&(a=n(a)),K(a)||(a=typeof n=="string"?e.parse(a,n):e.parse(a)),a===null?null:(i&&(a=i==="week"&&(_e(o)||o===!0)?e.startOf(a,"isoWeek",o):e.startOf(a,i)),+a)}function wi(s,t,e,n){const i=et.length;for(let o=et.indexOf(s);o<i-1;++o){const a=fs[et[o]],r=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((e-t)/(r*a.size))<=n)return et[o]}return et[i-1]}function nd(s,t,e,n,i){for(let o=et.length-1;o>=et.indexOf(e);o--){const a=et[o];if(fs[a].common&&s._adapter.diff(i,n,a)>=t-1)return a}return et[e?et.indexOf(e):0]}function id(s){for(let t=et.indexOf(s)+1,e=et.length;t<e;++t)if(fs[et[t]].common)return et[t]}function _i(s,t,e){if(!e)s[t]=!0;else if(e.length){const{lo:n,hi:i}=Xs(e,t),o=e[n]>=t?e[n]:e[i];s[o]=!0}}function od(s,t,e,n){const i=s._adapter,o=+i.startOf(t[0].value,n),a=t[t.length-1].value;let r,l;for(r=o;r<=a;r=+i.add(r,1,n))l=e[r],l>=0&&(t[l].major=!0);return t}function ki(s,t,e){const n=[],i={},o=t.length;let a,r;for(a=0;a<o;++a)r=t[a],i[r]=a,n.push({value:r,major:!1});return o===0||!e?n:od(s,n,i,e)}class rs extends se{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const n=t.time||(t.time={}),i=this._adapter=new zr._date(t.adapters.date);i.init(e),ge(n.displayFormats,i.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:yi(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:i,max:o,minDefined:a,maxDefined:r}=this.getUserBounds();function l(c){!a&&!isNaN(c.min)&&(i=Math.min(i,c.min)),!r&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!a||!r)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=K(i)&&!isNaN(i)?i:+e.startOf(Date.now(),n),o=K(o)&&!isNaN(o)?o:+e.endOf(Date.now(),n)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,i=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,a=this.max,r=ma(i,o,a);return this._unit=e.unit||(n.autoSkip?wi(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):nd(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:id(this._unit),this.initOffsets(i),t.reverse&&r.reverse(),ki(this,r,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,n=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?n=o:n=(o-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;e=rt(e,0,a),n=rt(n,0,a),this._offsets={start:e,end:n,factor:1/(e+1+n)}}_generate(){const t=this._adapter,e=this.min,n=this.max,i=this.options,o=i.time,a=o.unit||wi(o.minUnit,e,n,this._getLabelCapacity(e)),r=I(i.ticks.stepSize,1),l=a==="week"?o.isoWeekday:!1,c=_e(l)||l===!0,d={};let h=e,f,u;if(c&&(h=+t.startOf(h,"isoWeek",l)),h=+t.startOf(h,c?"day":a),t.diff(n,e,a)>1e5*r)throw new Error(e+" and "+n+" are too far apart with stepSize of "+r+" "+a);const g=i.ticks.source==="data"&&this.getDataTimestamps();for(f=h,u=0;f<n;f=+t.add(f,r,a),u++)_i(d,f,g);return(f===n||i.bounds==="ticks"||u===1)&&_i(d,f,g),Object.keys(d).sort(vi).map(p=>+p)}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,o=this._unit,a=e||i[o];return this._adapter.format(t,a)}_tickFormatFunction(t,e,n,i){const o=this.options,a=o.ticks.callback;if(a)return z(a,[t,e,n],this);const r=o.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&r[l],h=c&&r[c],f=n[e],u=c&&h&&f&&f.major;return this._adapter.format(t,i||(u?h:d))}generateTickLabels(t){let e,n,i;for(e=0,n=t.length;e<n;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,i=kt(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(i),a=Math.sin(i),r=this._resolveTickFontOptions(0).size;return{w:n*o+r*a,h:n*a+r*o}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,i=n[e.unit]||n.millisecond,o=this._tickFormatFunction(t,0,ki(this,[t],this._majorUnit),i),a=this._getLabelSize(o),r=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return r>0?r:1}getDataTimestamps(){let t=this._cache.data||[],e,n;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,n=i.length;e<n;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const i=this.getLabels();for(e=0,n=i.length;e<n;++e)t.push(yi(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return ya(t.sort(vi))}}D(rs,"id","time"),D(rs,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function He(s,t,e){let n=0,i=s.length-1,o,a,r,l;e?(t>=s[n].pos&&t<=s[i].pos&&({lo:n,hi:i}=Et(s,"pos",t)),{pos:o,time:r}=s[n],{pos:a,time:l}=s[i]):(t>=s[n].time&&t<=s[i].time&&({lo:n,hi:i}=Et(s,"time",t)),{time:o,pos:r}=s[n],{time:a,pos:l}=s[i]);const c=a-o;return c?r+(l-r)*(t-o)/c:r}class Si extends rs{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=He(e,this.min),this._tableRange=He(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,i=[],o=[];let a,r,l,c,d;for(a=0,r=t.length;a<r;++a)c=t[a],c>=e&&c<=n&&i.push(c);if(i.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(a=0,r=i.length;a<r;++a)d=i[a+1],l=i[a-1],c=i[a],Math.round((d+l)/2)!==c&&o.push({time:c,pos:a/(r-1)});return o}_generate(){const t=this.min,e=this.max;let n=super.getDataTimestamps();return(!n.includes(t)||!n.length)&&n.splice(0,0,t),(!n.includes(e)||n.length===1)&&n.push(e),n.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return e.length&&n.length?t=this.normalize(e.concat(n)):t=e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(He(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return He(this._table,n*this._tableRange+this._minPos,!0)}}D(Si,"id","timeseries"),D(Si,"defaults",rs.defaults);function k(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function F(s,t="success"){const e=document.getElementById("toast-root");if(!e)return;const n=document.createElement("div"),i=t==="error";n.className=`pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-lg shadow-xl text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${i?"bg-rose-600 text-white":"bg-slate-900 text-white border-l-4 border-emerald-500"}`,n.innerHTML=`
    <span>${i?"⚠️":"✓"}</span>
    <span>${k(s)}</span>
  `,e.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{n.classList.add("opacity-0","translate-y-2"),setTimeout(()=>n.remove(),300)},3600)}function Se(s,t){const e=document.getElementById("modal-root");if(!e)return;e.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="active-modal-backdrop">
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true">
        ${s}
      </div>
    </div>
  `;const n=document.getElementById("active-modal-backdrop");n?.addEventListener("click",i=>{i.target===n&&lt()}),typeof t=="function"&&t(e)}function lt(){const s=document.getElementById("modal-root");s&&(s.innerHTML="")}function pe(s){const t=String(s||"丁").trim(),e={優:"bg-emerald-50 text-emerald-700 border-emerald-300",甲:"bg-blue-50 text-blue-700 border-blue-300",乙:"bg-sky-50 text-sky-700 border-sky-300",丙:"bg-amber-50 text-amber-700 border-amber-300",丁:"bg-rose-50 text-rose-700 border-rose-300 font-bold"},n={優:"優等 (90分以上)",甲:"甲等 (80-89分)",乙:"乙等 (70-79分)",丙:"丙等 (60-69分，及格基準)",丁:"丁等 (未滿60分，待加強扶助)"};return`<span class="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-semibold border ${e[t]||e.丁}" title="${n[t]||""}">${k(t)}等</span>`}function ad(s,t){if(!t)return'<span class="text-xs text-slate-400">-</span>';const{ding:e=0,qian:n=0,jun:i=0,hou:o=0,di:a=0}=t,r=Number(s)||0;let l="未達底標",c="bg-rose-100 text-rose-800";return r>=e?(l="🌟 超越頂標",c="bg-emerald-100 text-emerald-800 font-bold"):r>=n?(l="✨ 頂標 ~ 前標之間",c="bg-blue-100 text-blue-800 font-bold"):r>=i?(l="👍 前標 ~ 均標之間",c="bg-sky-100 text-sky-800"):r>=o?(l="均標 ~ 後標之間",c="bg-amber-100 text-amber-800"):r>=a&&(l="後標 ~ 底標之間",c="bg-orange-100 text-orange-800"),`
    <div class="flex flex-col gap-1 w-full max-w-xs">
      <div class="flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>底: ${a}</span>
        <span>均: ${i}</span>
        <span>頂: ${e}</span>
      </div>
      <div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
        <div class="h-full bg-rose-400" style="width: 20%;" title="底標: ${a}"></div>
        <div class="h-full bg-amber-400" style="width: 25%;" title="後標: ${o}"></div>
        <div class="h-full bg-sky-400" style="width: 25%;" title="均標: ${i}"></div>
        <div class="h-full bg-blue-400" style="width: 18%;" title="前標: ${n}"></div>
        <div class="h-full bg-emerald-500" style="width: 12%;" title="頂標: ${e}"></div>
      </div>
      <div class="mt-0.5">
        <span class="inline-block text-[11px] px-2 py-0.5 rounded ${c}">${l}</span>
      </div>
    </div>
  `}ht.register(Ue,Ge,fe,Es,Fs,Xe,Mt,$c,Bc,Tc);let ze=null,We=null;async function rd(s,t){s.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表載入成績紀錄...</span>
    </div>
  `;const e=await J("getStudentScores",{studentId:t.studentId});if(!e.success){s.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入成績資料</h3>
        <p class="text-slate-600 mb-6 text-sm">${k(e.message||"查無此學號之學籍或成績紀錄")}</p>
        <button id="btn-portal-back" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">返回登入頁</button>
      </div>
    `,document.getElementById("btn-portal-back")?.addEventListener("click",()=>{window.location.reload()});return}const{student:n,exams:i}=e;if(!i||i.length===0){s.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">尚未發布定期評量成績</h3>
        <p class="text-slate-600 text-sm">【${k(n.className)}】目前試算表尚無開放查詢之成績，請靜候學校教務處公告。</p>
      </div>
    `;return}let o=i.length-1;function a(){const l=i[o],c=Object.keys(l.subjects||{}),d=l.classStats||{},h=d.fiveBenchmarks||{},f=d.subjectBenchmarks||{},u=l.benchmarks||{},g=u.cohortLabel||l.schoolCohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(n.className)?"含體育班":"不含體育班"),p=m=>m==null||isNaN(m)?"-":Number(m).toFixed(2),b=/[九9]/.test(l.gradeSheet||"")||/^([九9])\s*年|^9\d{2}$/.test(String(l.className||"").trim())||c.includes("地科"),x=["學中","特教","特教班","秀才"].includes(l.identity||n.identity);s.innerHTML=`
      <div class="student-print-sheet">
      <!-- A4 列印頁首 (列印時才顯現) -->
      <div class="student-print-header hidden print:block mb-6 border-b-2 border-slate-800 pb-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-serif font-bold text-slate-900">市立大溪國民中學 學生定期學習評量成績通知單</h1>
            <p class="text-sm text-slate-600 mt-1">
              評量次別：${k(l.academicYear)} ${k(l.semester)} ${k(l.examName)} ｜ 
              班級：${k(l.className||n.className)} ｜ 座號：${k(n.seatNo)} 號 ｜ 姓名：${k(n.name)}（學號：${k(n.studentId)}）
            </p>
          </div>
          <div class="border-2 border-emerald-800 px-3 py-1 rounded text-emerald-800 font-bold text-sm">
            定期評量紀錄
          </div>
        </div>
      </div>

      <!-- 畫面控制列 (列印時自動隱藏) -->
      <div class="portal-toolbar print:hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-bold text-slate-900">${k(n.name)} 同學</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${k(n.className)} ${k(n.seatNo)}號</span>
          </div>
          <p class="text-slate-500 text-xs mt-1 font-mono">學號：${k(n.studentId)} ｜ 個人評量紀錄</p>
        </div>

        <div class="flex items-center gap-3 w-full sm:w-auto">
          <!-- 考試切換下拉選單 -->
          <div class="flex-1 sm:flex-none">
            <select id="exam-selector" class="w-full sm:w-auto px-4 py-2 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              ${i.map((m,_)=>`
                <option value="${_}" ${_===o?"selected":""}>
                  ${k(m.academicYear)} ${k(m.semester)} ${k(m.examName)}
                </option>
              `).join("")}
            </select>
          </div>

          <button id="btn-print-report" class="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-sm font-medium shadow-sm transition">
            <span>🖨️</span>
            <span>列印成績單</span>
          </button>
        </div>
      </div>

      <p class="calculation-note print:hidden">${k(l.calculationNote||"社會採地理、歷史、公民平均；各科折算依本次評量規則計算。")}</p>
      <!-- 核心成績指標概覽 (Cards) -->
      <div class="student-print-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 總分與平均 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">評量總成績</span>
            <div class="flex items-center gap-1.5">
              ${l.identity&&l.identity!=="*"?`<span class="text-xs px-2 py-0.5 rounded font-bold ${l.identity==="體育班"?"bg-blue-100 text-blue-800 border border-blue-200":"bg-amber-100 text-amber-800 border border-amber-200"}">${k(l.identity)}</span>`:""}
              <span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">五科總分 ${l.totalScore}</span>
            </div>
          </div>
          <div class="my-3">
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-black font-mono text-slate-900">${l.averageScore}</span>
              <span class="text-sm font-medium text-slate-500">五科平均</span>
            </div>
            <div class="flex items-center gap-2 mt-2 text-xs text-slate-600 font-mono">
              ${l.socialAverage!==null&&l.socialAverage!==void 0?`<span class="bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded font-medium">社平: <b>${Number(l.socialAverage).toFixed(1)}</b></span>`:""}
              ${b&&l.scienceAverage!==null&&l.scienceAverage!==void 0?`<span class="bg-cyan-50 text-cyan-800 border border-cyan-200 px-1.5 py-0.5 rounded font-medium">自平: <b>${Number(l.scienceAverage).toFixed(1)}</b></span>`:""}
            </div>
          </div>
          <div class="text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2.5">
            <span>及格基準：60 分</span>
            <span class="${l.averageScore>=60?"text-emerald-600 font-bold":"text-rose-600 font-bold"}">
              ${l.averageScore>=60?"達到及格標準":"建議加強練習"}
            </span>
          </div>
        </div>

        <!-- 教育部法定五等第 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">本次評量參考等第</span>
            <span class="text-[11px] text-slate-400">教育部常模</span>
          </div>
          <div class="my-3 flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-serif ${l.hasScore===!1?"bg-slate-100 text-slate-500 border-2 border-slate-300":l.gradeLevel==="優"?"bg-emerald-100 text-emerald-800 border-2 border-emerald-400":l.gradeLevel==="甲"?"bg-blue-100 text-blue-800 border-2 border-blue-400":l.gradeLevel==="乙"?"bg-sky-100 text-sky-800 border-2 border-sky-400":l.gradeLevel==="丙"?"bg-amber-100 text-amber-800 border-2 border-amber-400":"bg-rose-100 text-rose-800 border-2 border-rose-400"}">
              ${l.hasScore===!1?x?"免":"缺":k(l.gradeLevel||"-")}
            </div>
            <div>
              <div class="font-bold text-slate-900">${l.hasScore===!1?x?"適性免測":"全科缺考":`${k(l.gradeLevel)}等`}</div>
              <div class="text-xs text-slate-500 mt-0.5">
                ${l.hasScore===!1?x?"學習中心個別化評量":"未有本次評量成績":l.gradeLevel==="優"?"表現優異 (90分以上)":l.gradeLevel==="甲"?"表現良好 (80-89分)":l.gradeLevel==="乙"?"表現尚可 (70-79分)":l.gradeLevel==="丙"?"法定及格基準 (60-69分)":"需補救扶助 (未滿60分)"}
              </div>
            </div>
          </div>
          <div class="text-[11px] text-slate-400 border-t border-slate-100 pt-2.5">
            依教育部學習評量辦法規範呈現
          </div>
        </div>

        <!-- 序位區間落點 (5人班級序位 & 10人年級序位) -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">序位區間落點</span>
            <span class="text-[11px] text-slate-400">常模級距</span>
          </div>
          <div class="my-2 space-y-1.5">
            <div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
              <span class="text-xs text-emerald-900 font-medium">班級序位 (5人)</span>
              <span class="text-xs font-bold font-mono text-emerald-800">${k(l.classRankInterval||(l.classRank?l.classRank+"名":"-"))}</span>
            </div>
            <div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200">
              <span class="text-xs text-blue-900 font-medium">年級序位 (10人)</span>
              <span class="text-xs font-bold font-mono text-blue-800">${k(l.schoolRankInterval||(l.schoolRank?l.schoolRank+"名":"-"))}</span>
            </div>
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2.5 flex justify-between">
            <span>班級：${d.studentCount||l.classSize||"-"} 人</span>
            <span class="font-mono text-slate-400">${l.schoolCohortLabel?`${l.schoolCohortLabel}評定`:"全校評定"}</span>
          </div>
        </div>

        <!-- 班級五標落點定位條 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">班級五標落點分佈</span>
            <span class="text-[11px] text-slate-400">${d.studentCount||0} 人統計</span>
          </div>
          <div class="my-2">
            ${ad(l.averageScore,h)}
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-mono flex justify-between">
            <span>頂標: ${h.ding||0}</span>
            <span>均標: ${h.jun||0}</span>
            <span>底標: ${h.di||0}</span>
          </div>
        </div>
      </div>

      <!-- 各領域詳細成績表 -->
      <div class="student-print-table-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div class="student-print-table-header px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2">
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-slate-800 text-sm">各領域學科學習評量成績表</h3>
            <span class="text-[11px] bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-medium">年標參照：${k(g)}</span>
          </div>
          <span class="text-xs text-slate-500">丙等 (60分) 以上為及格基準</span>
        </div>
        <p class="table-scroll-hint print:hidden">表格可左右滑動，查看完整科目與六大指標（班/年 平均、高標、低標）。</p>
        <div class="overflow-x-auto" tabindex="0" role="region" aria-label="各科成績表，可左右捲動">
          <table class="student-print-table w-full text-left text-sm text-slate-700">
            <thead class="bg-slate-100/70 text-slate-600 text-xs font-semibold uppercase">
              <tr>
                <th class="px-4 py-3.5">領域學科</th>
                <th class="px-3 py-3.5 text-center">實得分數</th>
                <th class="px-3 py-3.5 text-center">參考等第</th>
                <th class="px-3 py-3.5 text-center font-mono">班平均</th>
                <th class="px-3 py-3.5 text-center font-mono">年平均</th>
                <th class="px-3 py-3.5 text-center font-mono">班高標</th>
                <th class="px-3 py-3.5 text-center font-mono">年高標</th>
                <th class="px-3 py-3.5 text-center font-mono">班低標</th>
                <th class="px-3 py-3.5 text-center font-mono">年低標</th>
                <th class="px-3 py-3.5 text-center">學習指標及格</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${(()=>{let m=!1;const _=()=>{if(l.socialAverage===null||l.socialAverage===void 0)return"";m=!0;const $=Number(Number(l.socialAverage).toFixed(1));let y="丁";$>=90?y="優":$>=80?y="甲":$>=70?y="乙":$>=60&&(y="丙");const v=p(u.classAverage?.社平??u.classAverage?.社會),L=p(u.schoolAverage?.社平??u.schoolAverage?.社會),A=p(u.classHigh?.社平??u.classHigh?.社會),C=p(u.schoolHigh?.社平??u.schoolHigh?.社會),P=p(u.classLow?.社平??u.classLow?.社會),O=p(u.schoolLow?.社平??u.schoolLow?.社會);return`
                    <tr class="bg-amber-50/50 font-medium">
                      <td class="px-4 py-3.5 font-bold text-amber-900 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>社會領域平均 (地理/歷史/公民)</span>
                      </td>
                      <td class="px-3 py-3.5 text-center font-mono font-black text-base ${$>=60?"text-amber-900":"text-rose-600"}">${$}</td>
                      <td class="px-3 py-3.5 text-center">${pe(y)}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${v}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${L}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${A}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${C}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${P}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${O}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${$>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                      </td>
                    </tr>
                  `},S=c.map($=>{const y=l.subjects[$],v=y!=null,L=v?y:null;let A="丁";v&&(L>=90?A="優":L>=80?A="甲":L>=70?A="乙":L>=60&&(A="丙"));const C=f[$]||{},P=u.classAverage?p(u.classAverage[$]):C.average?p(C.average):"-",O=u.schoolAverage?p(u.schoolAverage[$]):"-",W=u.classHigh?p(u.classHigh[$]):C.qian?p(C.qian):"-",H=u.schoolHigh?p(u.schoolHigh[$]):"-",U=u.classLow?p(u.classLow[$]):C.hou?p(C.hou):"-",V=u.schoolLow?p(u.schoolLow[$]):"-",ct=`
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="px-4 py-3.5 font-medium text-slate-900">${k($)}</td>
                      <td class="px-3 py-3.5 text-center font-mono font-bold text-base ${v?L>=60?"text-slate-900":"text-rose-600":x?"text-slate-400":"text-amber-700"}">
                        ${v?L:x?'<span class="text-xs font-sans text-slate-400 font-normal">免測/個別評量</span>':'<span class="text-xs font-sans text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">缺考</span>'}
                      </td>
                      <td class="px-3 py-3.5 text-center">
                        ${v?pe(A):x?'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">特教適性</span>':'<span class="text-xs text-slate-400 font-normal">-</span>'}
                      </td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${P}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${O}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${W}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${H}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${U}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${V}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${v?L>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':x?'<span class="text-xs text-slate-400">個別化評定</span>':'<span class="text-xs font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">缺考未計</span>'}
                      </td>
                    </tr>
                  `;return $==="公民"?ct+_():ct}).join(""),w=!m&&l.socialAverage!==null&&l.socialAverage!==void 0?_():"";return S+w})()}
              ${b&&l.scienceAverage!==null&&l.scienceAverage!==void 0?(()=>{const m=Number(Number(l.scienceAverage).toFixed(1));let _="丁";m>=90?_="優":m>=80?_="甲":m>=70?_="乙":m>=60&&(_="丙");const S=p(u.classAverage?.自平??u.classAverage?.自然),w=p(u.schoolAverage?.自平??u.schoolAverage?.自然),$=p(u.classHigh?.自平??u.classHigh?.自然),y=p(u.schoolHigh?.自平??u.schoolHigh?.自然),v=p(u.classLow?.自平??u.classLow?.自然),L=p(u.schoolLow?.自平??u.schoolLow?.自然);return`
                  <tr class="bg-cyan-50/50 font-medium">
                    <td class="px-4 py-3.5 font-bold text-cyan-900 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span>自然科學領域平均 (理化3/地科2/生物1)</span>
                    </td>
                    <td class="px-3 py-3.5 text-center font-mono font-black text-base ${m>=60?"text-cyan-900":"text-rose-600"}">${m}</td>
                    <td class="px-3 py-3.5 text-center">${pe(_)}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${S}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${w}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${$}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${y}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${v}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${L}</td>
                    <td class="px-3 py-3.5 text-center">
                      ${m>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                    </td>
                  </tr>
                `})():""}
              <!-- 領域總分與總平均匯總行 -->
              ${u.classAverage?.總分!==void 0?`
                <tr class="bg-slate-100/70 font-semibold border-t-2 border-slate-300">
                  <td class="px-4 py-3 font-bold text-slate-800">領域總分</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${l.totalScore!==null&&l.totalScore!==void 0?l.totalScore:"-"}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-400">-</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${p(u.classAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${p(u.schoolAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${p(u.classHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${p(u.schoolHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${p(u.classLow?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${p(u.schoolLow?.總分)}</td>
                  <td class="px-3 py-3 text-center text-xs text-slate-400 font-normal">五領域加總</td>
                </tr>
                <tr class="bg-slate-100/70 font-semibold">
                  <td class="px-4 py-3 font-bold text-slate-800">評量平均</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${l.averageScore!==null&&l.averageScore!==void 0?l.averageScore:"-"}</td>
                  <td class="px-3 py-3 text-center">${l.hasScore!==!1&&l.gradeLevel?pe(l.gradeLevel):x?'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>':'<span class="text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold border border-amber-200">缺考</span>'}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${p(u.classAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${p(u.schoolAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${p(u.classHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${p(u.schoolHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${p(u.classLow?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${p(u.schoolLow?.平均)}</td>
                  <td class="px-3 py-3 text-center">
                    ${l.averageScore!==null&&l.averageScore!==void 0?l.averageScore>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':"-"}
                  </td>
                </tr>
              `:""}
            </tbody>
          </table>
        </div>
        <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
          <span>📌 指標說明：年標採學校總表規範（普通班以普通班為母體，體育班以全體學生為母體）。</span>
          <span class="font-mono text-slate-400">高標 / 低標：Q2 中位數前後 50% 學生之平均值</span>
        </div>
      </div>

      <!-- 領域雷達圖與趨勢圖 (Chart.js) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6 print:hidden">
        <!-- 領域五角雷達圖 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-800 text-sm mb-4 flex items-center justify-between">
            <span>🎯 各領域學習向度能力雷達圖</span>
            <span class="text-xs font-normal text-slate-400">個人得分 vs 班級平均</span>
          </h3>
          <div class="h-64 relative flex items-center justify-center">
            <canvas id="chart-radar"></canvas>
          </div>
        </div>

        <!-- 歷次定期評量進步趨勢折線圖 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-800 text-sm mb-4 flex items-center justify-between">
            <span>📈 歷次段考總平均進步追蹤</span>
            <span class="text-xs font-normal text-slate-400">學期學習成長曲線</span>
          </h3>
          <div class="h-64 relative flex items-center justify-center">
            <canvas id="chart-trend"></canvas>
          </div>
        </div>
      </div>
      </div>
    `,document.getElementById("exam-selector")?.addEventListener("change",m=>{o=Number(m.target.value)||0,a()}),document.getElementById("btn-print-report")?.addEventListener("click",()=>{window.print()}),r(l,i,c,f)}function r(l,c,d,h){if(!ht)return;ze&&(ze.destroy(),ze=null),We&&(We.destroy(),We=null);const f=document.getElementById("chart-radar");if(f){const g=d.map(b=>l.subjects[b]||0),p=d.map(b=>h[b]&&h[b].average||70);ze=new ht(f,{type:"radar",data:{labels:d,datasets:[{label:"個人得分",data:g,fill:!0,backgroundColor:"rgba(13, 122, 95, 0.2)",borderColor:"#0D7A5F",pointBackgroundColor:"#0D7A5F",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#0D7A5F"},{label:"班級平均",data:p,fill:!0,backgroundColor:"rgba(71, 85, 105, 0.1)",borderColor:"#64748B",borderDash:[4,4],pointBackgroundColor:"#64748B"}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{r:{suggestedMin:30,suggestedMax:100,ticks:{stepSize:20}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}const u=document.getElementById("chart-trend");if(u){const g=c.map(x=>x.examName),p=c.map(x=>x.averageScore),b=c.map(x=>{const m=x.classStats||{};return m.fiveBenchmarks&&m.fiveBenchmarks.jun||70});We=new ht(u,{type:"line",data:{labels:g,datasets:[{label:"個人平均分",data:p,borderColor:"#1D4ED8",backgroundColor:"#1D4ED8",tension:.3,borderWidth:3,pointRadius:5},{label:"班級均標 (P50)",data:b,borderColor:"#94A3B8",backgroundColor:"#94A3B8",borderDash:[5,5],tension:.2,pointRadius:3}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{suggestedMin:40,suggestedMax:100,ticks:{stepSize:10}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}}a()}function js(){const s=new Date,t=s.getFullYear(),e=String(s.getMonth()+1).padStart(2,"0"),n=String(s.getDate()).padStart(2,"0");return`${t}年${e}月${n}日`}function ld(s){if(s.identity==="學中")return"該生平時上課積極配合特教資源班適性課程，學習態度認真努力，各領域評量皆展現正向學習動機，期勉維持良好學習步調，持續突破自我！";if(s.identity==="體育班")return"該生兼顧體育專項訓練與學業課程，展現堅毅抗壓之運動員精神，學習態度專注踏實，期勉在競賽與課業雙軌上精益求精、為校爭光！";const t=s.averageScore||0;return t>=90?"該生本階段學習態度主動嚴謹，各領域核心素養精熟扎實，邏輯思維與學科探究能力俱佳，表現卓越非凡，值得高度嘉許！期勉持之以恆、勇於探索新知！":t>=80?"該生在校品學兼優、學習態度專注穩定，已確實掌握各領域核心概念，表現十分良好！若能在弱項科目更深入鑽研錯題盲點，必定能再攀高峰！":t>=70?"該生具備良好之學科基礎能力，上課規矩良好、能按時完成作業。建議課後多花時間統整觀念脈絡，主動向師長請教，學習成效必能大幅躍進！":t>=60?"該生各領域皆已達到法定及格基準，學習態度和善。建議妥善規劃每日課後複習時間，建立規律筆記習慣，循序漸進加強熟練度，期待更優異的表現！":"該生部分學科概念尚待強化，請家長毋須過度焦慮，建議與導師共同配合，落實課後錯題訂正並善用校內學習扶助輔導資源，攜手協助孩子重拾信心與成就感！"}function cd(s,t){const e=t.ding||90,n=t.qian||80,i=t.jun||70,o=t.hou||60,a=t.di||50,r=Math.max(0,Math.min(100,s||0)),l=r;let c="均標附近";return r>=e?c="【頂標以上 (前12%)】表現精熟卓越":r>=n?c="【前標與頂標之間】表現良好":r>=i?c="【均標與前標之間】表現尚可":r>=o?c="【後標與均標之間】建議加強複習":r>=a?c="【底標與後標之間】需重點關懷":c="【底標以下】需積極參與補強扶助",`
    <div class="my-1.5 px-1">
      <div class="relative w-full h-5 bg-slate-100 rounded border border-slate-300 flex overflow-hidden">
        <!-- 5個區間 -->
        <div class="h-full bg-rose-50 border-r border-rose-200 flex items-center justify-center text-[9px] text-rose-700 font-mono" style="width: ${Math.max(10,a)}%;">底標 ${a}</div>
        <div class="h-full bg-amber-50 border-r border-amber-200 flex items-center justify-center text-[9px] text-amber-700 font-mono" style="width: ${Math.max(10,o-a)}%;">後標 ${o}</div>
        <div class="h-full bg-slate-50 border-r border-slate-300 flex items-center justify-center text-[9px] text-slate-700 font-mono" style="width: ${Math.max(10,i-o)}%;">均標 ${i}</div>
        <div class="h-full bg-blue-50 border-r border-blue-200 flex items-center justify-center text-[9px] text-blue-700 font-mono" style="width: ${Math.max(10,n-i)}%;">前標 ${n}</div>
        <div class="h-full bg-emerald-50 flex items-center justify-center text-[9px] text-emerald-800 font-mono flex-1">頂標 ${e}</div>
        
        <!-- 個人分數定位針 -->
        <div class="absolute top-0 bottom-0 w-1 bg-red-600 shadow-sm z-10" style="left: ${l}%;"></div>
      </div>
      <div class="flex justify-between items-center text-[10px] text-slate-600 mt-1">
        <span>個人落點診斷：<b class="text-slate-900">${c}</b></span>
        <span class="font-mono text-red-600 font-bold">▲ 學生五科平均: ${s} 分</span>
      </div>
    </div>
  `}function dd(s){return["國文","英文","英語"].includes(s)?"語文領域":["數學"].includes(s)?"數學領域":["地理","歷史","公民"].includes(s)?"社會領域":["生物","理化","地科"].includes(s)?"自然科學領域":"專業學科"}function xo(s,t,e,n,i={}){const{includeRank:o=!0,includeTeacherNote:a=!0,printDate:r=js(),customNote:l=""}=i,c=Array.isArray(t.subjects)?t.subjects:t.subjects?Object.keys(t.subjects):Object.keys(s.scores||{}),d=t.fiveBenchmarks||{},h=t.totalStudents||(t.students?t.students.length:0),f=l||ld(s),u=t.className||e||"",g=/[九9]/.test(t.gradeSheet||"")||/[九9]/.test(t.gradeLevelLabel||"")||!t.gradeSheet&&/^([九9])\s*年|^9\d{2}$/.test(String(u).trim())||c.includes("地科"),p=["學中","特教","特教班","秀才"].includes(s.identity||t.identity);let b="一般生";return s.identity==="體育班"?b="體育班專項生":s.identity==="學中"?b="學習中心適性生":["特教","特教班","秀才"].includes(s.identity)?b="特教適性生":s.identity&&s.identity!=="*"&&(b=s.identity),`
    <div class="a4-report-card-page font-sans text-slate-900 bg-white flex flex-col justify-between" style="width: 100%; box-sizing: border-box;">
      
      <div>
        <!-- 1. 學校標頭與基本資料 -->
        <div class="text-center pb-1.5 border-b-2 border-slate-900 mb-1.5">
          <div class="flex items-center justify-center gap-2">
            <span class="text-xl font-black tracking-wider text-slate-900">桃園市立大溪國民中學</span>
          </div>
          <div class="text-sm font-bold tracking-wide text-slate-800 mt-0.5">
            ${k(t.academicYear||"114學年度")}${k(t.semester||"第1學期")} ${k(t.examName||"定期評量")} 個人成績通知單
          </div>
          
          <!-- 學生資訊條 -->
          <div class="mt-1.5 pt-1 border-t border-slate-300 grid grid-cols-6 gap-1 text-[11px] text-slate-700 text-left bg-slate-50/80 p-1.5 rounded border">
            <div>班級：<b class="text-slate-900">${k(e)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono text-xs">${s.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900 text-xs">${k(s.name)}</b></div>
            <div>學號：<span class="font-mono">${k(s.studentId||"-")}</span></div>
            <div>身分：<span class="${s.identity==="體育班"?"text-blue-700 font-bold":s.identity==="學中"?"text-amber-700 font-bold":"text-slate-700"}">${b}</span></div>
            <div class="text-right">導師：<span>${k(n)}</span></div>
          </div>
        </div>

        <!-- 2. 評量總成績綜合評定 (四大綜合指標卡) -->
        <div class="border border-slate-300 rounded-lg p-1.5 mb-1.5 bg-slate-50/50">
          <div class="grid grid-cols-4 gap-2 text-center">
            <div class="border-r border-slate-300 pr-1">
              <div class="text-[10px] text-slate-500 font-medium">五大領域總分</div>
              <div class="text-lg font-black font-mono text-slate-900 mt-0.5">${s.totalScore}</div>
              <div class="text-[9px] text-slate-400">標準領域總計</div>
            </div>
            <div class="border-r border-slate-300 pr-1">
              <div class="text-[10px] text-slate-500 font-medium">五大領域平均</div>
              <div class="text-lg font-black font-mono text-slate-900 mt-0.5">${s.averageScore}</div>
              <div class="text-[9px] text-slate-400">及格基準 60.0 分</div>
            </div>
            <div class="border-r border-slate-300 pr-1">
              <div class="text-[10px] text-slate-500 font-medium">評量法定等第</div>
              <div class="text-lg font-black mt-0.5 ${s.hasScore===!1?"text-slate-500":s.gradeLevel==="優"?"text-emerald-700":s.gradeLevel==="甲"?"text-blue-700":s.gradeLevel==="乙"?"text-sky-700":s.gradeLevel==="丙"?"text-amber-700":"text-rose-700"}">
                ${s.hasScore!==!1&&s.gradeLevel?`${k(s.gradeLevel)} 等`:p?"免測":"缺考"}
              </div>
              <div class="text-[9px] text-slate-400">教育部第10條第3項</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 font-medium">序位區間 / 常模落點</div>
              <div class="text-xs font-bold font-mono text-slate-800 mt-0.5">
                ${o?`<div>班：<span class="text-slate-900 font-bold">${s.classRankInterval||(s.classRank?`第${s.classRank}名`:"-")}</span></div><div class="text-[10.5px] font-normal text-slate-600">校：${s.schoolRankInterval||(s.schoolRank?`第${s.schoolRank}名`:"-")}</div>`:'<span class="text-[11px] text-slate-500 font-normal">參見五標常模落點條</span>'}
              </div>
              <div class="text-[9px] text-slate-400">全班共 ${h} 人</div>
            </div>
          </div>
        </div>

        <!-- 3. 各領域學科評量成績清冊 -->
        <div class="mb-1.5">
          <div class="text-[11px] font-bold text-slate-800 mb-0.5 flex justify-between items-center">
            <span>📋 各領域學科評量成績清冊</span>
            <span class="text-[9px] text-slate-500">※ 丙等 (60分) 以上為法定及格基準</span>
          </div>
          <table class="w-full text-xs text-left border-collapse border border-slate-300">
            <thead>
              <tr class="bg-slate-200/90 text-slate-800 font-semibold border-b border-slate-300">
                <th class="py-0.5 px-1 border border-slate-300 text-center w-20">領域名稱</th>
                <th class="py-0.5 px-1 border border-slate-300 text-center w-16">評量科目</th>
                <th class="py-0.5 px-1 border border-slate-300 text-center w-16">實得分數</th>
                <th class="py-0.5 px-1 border border-slate-300 text-center w-16">法定等第</th>
                <th class="py-0.5 px-1 border border-slate-300 text-center w-16">及格判定</th>
                <th class="py-0.5 px-1 border border-slate-300 text-center w-16">班級平均</th>
                <th class="py-0.5 px-1 border border-slate-300 text-center">學科個別學習表現診斷與備註</th>
              </tr>
            </thead>
            <tbody class="divide-y border-slate-300">
              ${(()=>{let x=!1;const m=()=>{if(s.socialAverage===null||s.socialAverage===void 0)return"";x=!0;const w=Number(Number(s.socialAverage).toFixed(1));let $="丁";w>=90?$="優":w>=80?$="甲":w>=70?$="乙":w>=60&&($="丙");let y="-";return t.benchmarks?.classAverage?.社會!==void 0?y=Number(t.benchmarks.classAverage.社會).toFixed(1):t.subjectAverages&&t.subjectAverages.地理!==void 0&&t.subjectAverages.歷史!==void 0&&t.subjectAverages.公民!==void 0&&(y=(((Number(t.subjectAverages.地理)||0)+(Number(t.subjectAverages.歷史)||0)+(Number(t.subjectAverages.公民)||0))/3).toFixed(1)),`
                    <tr class="bg-amber-50/40 font-medium">
                      <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] font-bold text-amber-900">社會領域</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-amber-900">社會科平均</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-black ${w<60?"text-rose-600":"text-slate-900"}">${w}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        <span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${$==="優"?"bg-emerald-100 text-emerald-800":$==="甲"?"bg-blue-100 text-blue-800":$==="乙"?"bg-sky-100 text-sky-800":$==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${$}等</span>
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${w>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${y}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">採地理、歷史、公民三科平均計算</td>
                    </tr>
                  `},_=c.map(w=>{const $=s.scores[w],y=$!=null,v=y?Number($):null;let L="丁";y&&(v>=90?L="優":v>=80?L="甲":v>=70?L="乙":v>=60&&(L="丙"));const A=t.benchmarks?.classAverage,C=A&&A[w]!==void 0?Number(A[w]).toFixed(1):t.subjectAverages&&t.subjectAverages[w]!==void 0?t.subjectAverages[w]:"-";let P="";y?v>=90?P="核心素養精熟，表現優異卓越":v>=80?P="學科概念清晰，表現穩定良好":v>=70?P="具備基礎知能，建議加強深究":v>=60?P="達法定及格標準，宜針對錯題複習":P="未達及格基準，建議落實課後學習扶助":P=p?"學習中心個別化適性評量（段考免測）":"該科缺考未受試（未計入該科成績）";const O=`
                    <tr class="hover:bg-slate-50 ${y&&v<60?"bg-rose-50/20":""}">
                      <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] text-slate-600">${dd(w)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-slate-800">${k(w)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-bold ${y?v<60?"text-rose-600":"text-slate-900":p?"text-slate-400":"text-amber-700"}">
                        ${y?v:p?"-":'<span class="text-[10px] font-bold text-amber-700">缺考</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${y?`<span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${L==="優"?"bg-emerald-100 text-emerald-800":L==="甲"?"bg-blue-100 text-blue-800":L==="乙"?"bg-sky-100 text-sky-800":L==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${L}等</span>`:p?'<span class="text-[10px] text-slate-400">適性</span>':'<span class="text-[10px] text-slate-400">-</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${y?v>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>':p?'<span class="text-[10px] text-slate-400">個別評量</span>':'<span class="text-[10px] font-bold text-amber-700">缺考</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${C}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">${P}</td>
                    </tr>
                  `;return w==="公民"?O+m():O}).join(""),S=!x&&s.socialAverage!==null&&s.socialAverage!==void 0?m():"";return _+S})()}
              ${g&&s.scienceAverage!==null&&s.scienceAverage!==void 0?(()=>{const x=Number(Number(s.scienceAverage).toFixed(1));let m="丁";x>=90?m="優":x>=80?m="甲":x>=70?m="乙":x>=60&&(m="丙");let _="-";return t.benchmarks?.classAverage?.自然!==void 0?_=Number(t.benchmarks.classAverage.自然).toFixed(1):t.subjectAverages&&t.subjectAverages.理化!==void 0&&t.subjectAverages.地科!==void 0&&t.subjectAverages.生物!==void 0&&(_=(((Number(t.subjectAverages.理化)||0)*3+(Number(t.subjectAverages.地科)||0)*2+(Number(t.subjectAverages.生物)||0)*1)/6).toFixed(1)),`
                  <tr class="bg-cyan-50/40 font-medium">
                    <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] font-bold text-cyan-900">自然科學領域</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-cyan-900">自然科平均</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-black ${x<60?"text-rose-600":"text-slate-900"}">${x}</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      <span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${m==="優"?"bg-emerald-100 text-emerald-800":m==="甲"?"bg-blue-100 text-blue-800":m==="乙"?"bg-sky-100 text-sky-800":m==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${m}等</span>
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      ${x>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>'}
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${_}</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">九年級採（理化×3＋地科×2＋生物×1）÷6 計算</td>
                  </tr>
                `})():""}
            </tbody>
          </table>
        </div>

        <!-- 4. 班級常模五標分佈與個人落點定位條 -->
        <div class="border border-slate-300 rounded-lg p-1.5 mb-1.5 bg-white">
          <div class="flex justify-between items-center text-[10px] font-bold text-slate-800 mb-0.5">
            <span>📊 班級常模五標分佈定位條（教育部公告常模）</span>
            <span class="text-[9px] text-slate-500 font-normal">全班 ${h} 人統計基準</span>
          </div>
          ${cd(s.averageScore,d)}
        </div>

        <!-- 5. 評量等第說明法規參照 (小字版) -->
        <div class="text-[9.5px] text-slate-600 bg-slate-50 border border-slate-300 rounded p-1 mb-1.5 leading-snug">
          <span class="font-bold text-slate-800">【教育部國民小學及國民中學學生學習評量辦法規範】</span>
          <b>優等</b> (90分以上)：表現優異 ｜ <b>甲等</b> (80~89分)：表現良好 ｜ <b>乙等</b> (70~79分)：表現尚可 ｜ <b>丙等</b> (60~69分)：<b>法定及格基準</b> ｜ <b>丁等</b> (未滿60分)：未達法定及格基準
        </div>

        <!-- 6. 導師個別評語與學習勉勵 -->
        ${a?`
          <div class="border border-slate-300 rounded-lg p-1.5 mb-1.5 bg-white">
            <div class="text-[10px] font-bold text-slate-800 mb-0.5 flex justify-between items-center">
              <span>📝 導師個別學習回饋與勉勵：</span>
              <span class="text-[9px] text-slate-500 font-normal">導師簽名/蓋章：<span class="border-b border-slate-600 inline-block w-24"></span></span>
            </div>
            <div class="text-[11px] text-slate-700 min-h-[26px] leading-relaxed italic px-1">
              ${k(f)}
            </div>
          </div>
        `:""}
      </div>

      <!-- 7. 家長簽章與意見回條 (撕角線，固定於A4頁底) -->
      <div class="border-t-2 border-dashed border-slate-400 pt-1.5 mt-auto">
        <div class="flex justify-between items-center text-[9px] font-bold text-slate-500 mb-0.5">
          <span>✂️ 請家長詳閱後沿虛線剪下，於三日內交回班級導師 ✂️</span>
          <span>大溪國中 定期評量家長簽章回條</span>
        </div>
        <div class="border border-slate-400 rounded-md p-1.5 bg-slate-50/60 text-xs">
          <div class="flex justify-between items-center mb-1 pb-0.5 border-b border-slate-200 text-[11px]">
            <div>班級：<b class="text-slate-900">${k(e)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono">${s.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900">${k(s.name)}</b></div>
            <div>總平均：<b class="font-mono text-slate-900">${s.hasScore!==!1&&s.averageScore!==null&&s.averageScore!==void 0?`${s.averageScore} 分 (${s.gradeLevel}等)`:p?"適性免測":"全科缺考"}</b></div>
            <div>印表日期：<span class="font-mono text-[10px] text-slate-500">${r}</span></div>
          </div>
          <div class="grid grid-cols-2 gap-4 my-1 text-[11px]">
            <div class="flex items-center gap-2">
              <span class="font-medium whitespace-nowrap">家長簽章：</span>
              <div class="border-b border-slate-800 flex-1 h-5"></div>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-medium whitespace-nowrap">簽章日期：</span>
              <div class="border-b border-slate-800 flex-1 h-5 text-center text-slate-400 font-mono text-[10px]">______年____月____日</div>
            </div>
          </div>
          <div class="flex items-center gap-2 mt-0.5 text-[11px]">
            <span class="whitespace-nowrap font-medium">家長回饋：</span>
            <div class="border-b border-slate-300 flex-1 h-5 text-[10px] text-slate-400">（如對貴子弟之學習有任何想法或回饋，歡迎簡要填寫於此）</div>
          </div>
        </div>
      </div>

    </div>
  `}function $i(s,t,e,n,i=null){let o=!0,a=!0,r=i!==null?n.findIndex(h=>h.seatNo===i):0;r<0&&(r=0);let l=i===null;const c=document.createElement("div");c.id="report-card-modal-wrapper",c.className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-2 sm:p-4 backdrop-blur-sm print:hidden";function d(){const h=n.length,f=n[r]||n[0],u=xo(f,s,t,e,{includeRank:o,includeTeacherNote:a,printDate:js()});c.innerHTML=`
      <div class="bg-white w-full max-w-5xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        <!-- 頂部控制列 -->
        <div class="px-6 py-3.5 bg-slate-900 text-white flex flex-wrap justify-between items-center gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">📄</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base leading-tight">個人成績通知單（A4 批量/個別列印）</h3>
              <p class="text-slate-400 text-xs mt-0.5">【${k(t)}】${k(s.examName||"定期評量")} ｜ 一人一張 A4 格式</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button id="btn-do-print" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow flex items-center gap-1.5 transition">
              <span>🖨️</span>
              <span>${l?`立即列印全班 (${h} 人 / ${h} 頁 A4)`:`列印當前學生 (${f.seatNo}號 ${f.name})`}</span>
            </button>
            <button id="btn-close-modal" class="p-2 text-slate-400 hover:text-white rounded-lg transition text-lg leading-none">✕</button>
          </div>
        </div>

        <!-- 輔助設定與切換列 -->
        <div class="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
          <!-- 選項開關 -->
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-1.5 cursor-pointer font-medium hover:text-slate-900">
              <input type="checkbox" id="chk-include-rank" ${o?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
              <span>包含班排與校排 PR 值</span>
            </label>
            <label class="flex items-center gap-1.5 cursor-pointer font-medium hover:text-slate-900">
              <input type="checkbox" id="chk-include-note" ${a?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
              <span>包含導師個別勉勵評語</span>
            </label>
          </div>

          <!-- 列印模式與學生切換 -->
          <div class="flex items-center gap-2">
            <div class="flex items-center bg-white border border-slate-300 rounded-lg p-0.5 shadow-sm">
              <button id="btn-mode-all" class="px-2.5 py-1 rounded text-xs font-semibold ${l?"bg-emerald-700 text-white":"text-slate-600 hover:bg-slate-50"}">
                全班列印 (${h}人)
              </button>
              <button id="btn-mode-single" class="px-2.5 py-1 rounded text-xs font-semibold ${l?"text-slate-600 hover:bg-slate-50":"bg-emerald-700 text-white"}">
                單生列印
              </button>
            </div>

            <!-- 單生切換下拉與按鈕 -->
            <div class="flex items-center gap-1 ml-2">
              <button id="btn-prev-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="上一位">◀</button>
              <select id="select-preview-student" class="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-medium">
                ${n.map((g,p)=>`
                  <option value="${p}" ${p===r?"selected":""}>
                    ${g.seatNo}號 ${k(g.name)}
                  </option>
                `).join("")}
              </select>
              <button id="btn-next-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="下一位">▶</button>
              <span class="text-slate-400 text-[11px] ml-1 font-mono">${r+1}/${h}</span>
            </div>
          </div>
        </div>

        <!-- 預覽容器 (模擬真實 A4 紙張白底陰影) -->
        <div class="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-200/80 flex justify-center">
          <div class="bg-white shadow-xl rounded-md border border-slate-300 w-full max-w-[210mm] p-4 sm:p-5 text-slate-900">
            ${u}
          </div>
        </div>

        <!-- 底部提示列 -->
        <div class="px-6 py-2 bg-slate-50 border-t border-slate-200 text-slate-500 text-[11px] flex justify-between items-center">
          <span>💡 提示：點選「立即列印」後，瀏覽器列印設定請確認選擇<b>「A4」尺寸</b>與<b>「預設邊界」</b>，系統已設定標準分頁，全班將精確印出 ${l?h:1} 張 A4。</span>
          <span class="font-mono text-slate-400">大溪國中成績查詢系統・合規列印模組</span>
        </div>
      </div>
    `,document.getElementById("btn-close-modal")?.addEventListener("click",()=>{c.remove()}),document.getElementById("chk-include-rank")?.addEventListener("change",g=>{o=g.target.checked,d()}),document.getElementById("chk-include-note")?.addEventListener("change",g=>{a=g.target.checked,d()}),document.getElementById("btn-mode-all")?.addEventListener("click",()=>{l=!0,d()}),document.getElementById("btn-mode-single")?.addEventListener("click",()=>{l=!1,d()}),document.getElementById("select-preview-student")?.addEventListener("change",g=>{r=Number(g.target.value)||0,d()}),document.getElementById("btn-prev-stu")?.addEventListener("click",()=>{r>0&&(r--,d())}),document.getElementById("btn-next-stu")?.addEventListener("click",()=>{r<h-1&&(r++,d())}),document.getElementById("btn-do-print")?.addEventListener("click",()=>{hd(l?n:[f],s,t,e,{includeRank:o,includeTeacherNote:a,printDate:js()})})}document.body.appendChild(c),d()}function hd(s,t,e,n,i){let o=document.getElementById("print-report-cards-container");o||(o=document.createElement("div"),o.id="print-report-cards-container",document.body.appendChild(o)),o.innerHTML=s.map(a=>xo(a,t,e,n,i)).join(""),document.body.classList.add("printing-report-cards"),setTimeout(()=>{window.print(),setTimeout(()=>{document.body.classList.remove("printing-report-cards"),o&&(o.innerHTML="")},1e3)},250)}const mo=Object.freeze([{label:"100 分",min:100,max:100},...Array.from({length:10},(s,t)=>{const e=90-t*10;return{label:`${e}～${e+9} 分`,min:e,max:e+10}})].map(Object.freeze));function ud(s,t){return t.map(e=>{const n=mo.map(c=>({...c,count:0})),i=[];let o=0,a=0;for(const c of s){const d=(c.assessmentScores??c.scores)?.[e];if(d==null||d==="")o++;else if(typeof d!="number"||!Number.isFinite(d)||d<0||d>100)a++;else{i.push(d);const h=d===100?0:10-Math.floor(d/10);n[h].count++}}const r=i.length,l=i.filter(c=>c>=60).length;return{subject:e,bands:n,validCount:r,unassessedCount:o,invalidCount:a,passCount:l,average:r?i.reduce((c,d)=>c+d,0)/r:null,highest:r?Math.max(...i):null,lowest:r?Math.min(...i):null,passRate:r?l/r*100:null}})}const Ve=s=>s===null?"—":Number(s.toFixed(2)).toString(),$s=s=>s===null?"—":`${Number(s.toFixed(1))}%`;function fd(s,t,e,n={}){const i=ud(t,e),o=i.some(l=>l.invalidCount>0);s.innerHTML=`
    <div class="score-analysis-heading">
      <div>
        <p class="score-analysis-eyebrow">段考統計・全班 ${t.length} 人</p>
        <h3 id="score-analysis-title">各科分數區間分析</h3>
        <p>查看各分數區間人數與各科表現。本區統計完整班級，不受下方名冊搜尋影響。</p>
      </div>
      ${e.length?`<label class="score-subject-picker" for="score-distribution-subject">查看科目
        <select id="score-distribution-subject">${e.map((l,c)=>`<option value="${c}" ${l===n.selectedSubject?"selected":""}>${k(l)}</option>`).join("")}</select>
      </label>`:""}
    </div>
    <div id="score-distribution-detail" aria-live="polite"></div>
    <div class="score-matrix-heading"><h4>各科區間人數總表</h4><span>單位：人；表格可左右滑動</span></div>
    <div class="score-matrix-scroll" tabindex="0" role="region" aria-label="各科區間人數總表，可左右捲動">
      <table class="score-matrix">
        <caption class="sr-only">本次段考各科分數區間人數、有效人數、未評量人數、平均與及格率</caption>
        <thead><tr><th scope="col">科目</th>${mo.map(l=>`<th scope="col">${l.label}</th>`).join("")}<th scope="col">有效人數</th><th scope="col">未評量</th>${o?'<th scope="col">待確認</th>':""}<th scope="col">平均</th><th scope="col">及格率</th></tr></thead>
        <tbody>${i.map(l=>`<tr data-subject="${k(l.subject)}">
          <th scope="row">${k(l.subject)}</th>
          ${l.bands.map((c,d)=>`<td data-band="${d}" data-count="${c.count}" class="${c.count?"score-count-present":"score-count-empty"}">${c.count}</td>`).join("")}
          <td data-stat="valid">${l.validCount}</td><td data-stat="unassessed">${l.unassessedCount}</td>${o?`<td data-stat="invalid">${l.invalidCount}</td>`:""}<td>${Ve(l.average)}</td><td>${$s(l.passRate)}</td>
        </tr>`).join("")}</tbody>
      </table>
    </div>
    <p class="score-analysis-footnote">100 分單獨計數，其餘每 10 分一區；例如「90～99 分」含 90 分以上、未滿 100 分的小數成績。0 分計入統計；未評量${o?"及待確認資料":""}不列入平均與及格率，及格基準為 60 分。</p>
  `;function a(l){const c=i[l],d=s.querySelector("#score-distribution-detail");if(!c){d.innerHTML='<p class="score-analysis-empty">本次段考尚無可分析科目。</p>';return}d.innerHTML=`
      <div class="score-subject-summary">
        <div><span>有效成績／未評量</span><strong>${c.validCount}<small> 人 ／ ${c.unassessedCount} 人</small></strong></div>
        <div><span>${k(c.subject)}平均</span><strong>${Ve(c.average)}<small> 分</small></strong></div>
        <div><span>最高／最低</span><strong>${Ve(c.highest)}<small> ／ ${Ve(c.lowest)} 分</small></strong></div>
        <div><span>及格率</span><strong>${$s(c.passRate)}</strong></div>
      </div>
      ${c.invalidCount?`<p class="score-analysis-empty">本科技分另有 ${c.invalidCount} 筆資料待確認，請洽註冊組。</p>`:""}
      ${c.validCount?"":'<p class="score-analysis-empty">本科目前尚無有效成績，區間人數均為 0。</p>'}
      <ol class="score-band-chart" aria-label="${k(c.subject)}各分數區間人數">
        ${c.bands.map(h=>{const f=c.validCount?h.count/c.validCount*100:0;return`<li><span class="score-band-label">${h.label}</span><span class="score-band-track" aria-hidden="true"><span style="width:${f}%"></span></span><span class="score-band-count">${h.count} 人</span><span class="score-band-percent">${$s(f)}</span></li>`}).join("")}
      </ol>
    `}const r=Math.max(0,e.indexOf(n.selectedSubject));a(r),s.querySelector("#score-distribution-subject")?.addEventListener("change",l=>{const c=Number(l.target.value);a(c),n.onSubjectChange?.(e[c])})}function vo(s,t={}){const{title:e="班級",isGradeWide:n=!1,examList:i=[],studentResults:o=[],onPrint:a=null}=t;let r="rankAvg",l=!0,c="",d="all";function h(){let u=o.slice();const g=(c||"").trim().toLowerCase();if(g)if(/^\d{1,2}$/.test(g)){const p=Number(g);u=u.filter(b=>Number(b.seatNo)===p)}else/^\d{3,}$/.test(g)?u=u.filter(p=>p.studentId&&String(p.studentId).toLowerCase().includes(g)||String(p.seatNo)===g):u=u.filter(p=>p.name&&p.name.toLowerCase().includes(g)||p.className&&p.className.toLowerCase().includes(g)||p.studentId&&String(p.studentId).toLowerCase().includes(g)||`${p.seatNo}號`===g);return u.sort((p,b)=>{if(r==="rankAvg")return p.rankAvg===null?1:b.rankAvg===null?-1:l?p.rankAvg-b.rankAvg:b.rankAvg-p.rankAvg;if(r==="seatNo")return p.className!==b.className?p.className.localeCompare(b.className,"zh-Hant"):l?p.seatNo-b.seatNo:b.seatNo-p.seatNo;if(r==="className")return p.className!==b.className?l?p.className.localeCompare(b.className,"zh-Hant"):b.className.localeCompare(p.className,"zh-Hant"):p.seatNo-b.seatNo;if(r==="latestRank"){const x=i.length?i[i.length-1].examKey:"",m=p.examRanks?.[x],_=b.examRanks?.[x];return m==null?1:_==null?-1:l?m-_:_-m}return 0}),u}function f(){const u=i.filter(y=>d==="all"?!0:d==="7"?y.label.startsWith("7"):d==="8"?y.label.startsWith("8"):d==="9"?y.label.startsWith("9"):!0),g=h(),p=o.length,b=o.filter(y=>y.rankAvg!==null).length,x=o.length&&o[0].rankAvg!==null?o[0].rankAvg:"-",m=i.some(y=>y.label.startsWith("7")),_=i.some(y=>y.label.startsWith("8")),S=i.some(y=>y.label.startsWith("9")),w=y=>y.length?y.map(v=>{const L=u.map(P=>{const O=v.examRanks?.[P.examKey];if(O==null)return'<td class="px-2 py-2 text-center text-xs text-slate-300 font-mono">-</td>';let W="text-slate-700";return O<=5?W="bg-amber-100 text-amber-950 font-black border border-amber-300 rounded px-1.5 py-0.5 shadow-2xs":O<=20?W="bg-blue-50 text-blue-900 font-bold border border-blue-200 rounded px-1.5 py-0.5":O<=50&&(W="bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 rounded px-1 py-0.5"),`
          <td class="px-2 py-2 text-center text-xs font-mono font-medium">
            <span class="${W}">${O}</span>
          </td>
        `}).join("");let A=`<span class="font-mono text-sm font-bold text-slate-600">${v.overallRank}</span>`;v.overallRank===1?A='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-950 font-black text-xs border border-amber-300 shadow-xs">🥇 1</span>':v.overallRank===2?A='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-900 font-black text-xs border border-slate-300 shadow-xs">🥈 2</span>':v.overallRank===3?A='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 font-black text-xs border border-amber-200 shadow-xs">🥉 3</span>':typeof v.overallRank=="number"&&v.overallRank<=10&&(A=`<span class="inline-block px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-900 font-bold text-xs border border-indigo-200">${v.overallRank}</span>`);let C='<span class="text-slate-300 text-xs">-</span>';if(i.length>=2&&v.rankAvg!==null){const P=i[i.length-1].examKey,O=v.examRanks?.[P];if(O!=null){const W=v.rankAvg-O;W>=15?C='<span class="inline-flex items-center text-emerald-700 font-bold text-xs bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200" title="最新段考優於歷史平均 15 名以上">↗ 大幅進步</span>':W>=5?C='<span class="inline-flex items-center text-emerald-600 font-semibold text-xs" title="最新段考有所進步">↗ 成長中</span>':W<=-15?C='<span class="inline-flex items-center text-rose-700 font-bold text-xs bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200" title="最新段考落後歷史平均 15 名以上">↘ 需關懷</span>':W<=-5?C='<span class="inline-flex items-center text-amber-700 text-xs" title="最新段考有些微波動">↘ 略退步</span>':C='<span class="inline-flex items-center text-slate-500 text-xs">→ 穩定</span>'}}return`
        <tr class="group hover:bg-slate-50/90 transition border-b border-slate-100">
          <td class="roster-sticky-col-1 bg-white group-hover:bg-slate-50 text-center px-2 py-2 border-r border-slate-200">
            ${A}
          </td>
          ${n?`
            <td class="px-2.5 py-2 text-center text-xs font-semibold text-indigo-900 bg-indigo-50/40 border-r border-slate-200 whitespace-nowrap">
              ${k(v.className)}
            </td>
          `:""}
          <td class="${n?"":"roster-sticky-col-2"} bg-white group-hover:bg-slate-50 text-center font-mono font-bold text-slate-800 border-r border-slate-200 px-2 py-2 text-xs sm:text-sm">
            ${v.seatNo}
          </td>
          <td class="${n?"":"roster-sticky-col-3"} bg-white group-hover:bg-slate-50 font-medium text-slate-900 border-r border-slate-300 roster-sticky-shadow px-3 py-2 whitespace-nowrap text-xs sm:text-sm">
            <span>${k(v.name)}</span>
          </td>
          ${L}
          <td class="px-2.5 py-2 text-center text-xs font-mono text-slate-500 border-l border-slate-200 bg-slate-50/30">
            ${v.validCount} / ${v.totalExams}
          </td>
          <!-- 校排加總 -->
          <td class="px-3 py-2 text-center font-mono text-xs sm:text-sm font-bold text-slate-800 bg-amber-50/30 border-l border-amber-200/60">
            ${v.rankSum!==null?v.rankSum:"-"}
          </td>
          <!-- 校排平均 -->
          <td class="px-3 py-2 text-center font-mono text-xs sm:text-sm font-black text-emerald-900 bg-emerald-50/80 border-l border-r border-emerald-300 shadow-2xs">
            ${v.rankAvg!==null?v.rankAvg:"-"}
          </td>
          <!-- 綜合排名 -->
          <td class="px-3 py-2 text-center text-xs font-bold text-slate-700 bg-slate-50/50 border-r border-slate-200">
            ${typeof v.overallRank=="number"?`第 ${v.overallRank} 名`:"-"}
          </td>
          <!-- 歷屆走勢 -->
          <td class="px-2.5 py-2 text-center whitespace-nowrap">
            ${C}
          </td>
        </tr>
      `}).join(""):`
          <tr>
            <td colspan="${4+(n?1:0)+u.length+4}" class="py-10 text-center text-slate-400 text-sm">
              查無符合「<b class="text-slate-600">${k(c)}</b>」的座號或學生姓名
            </td>
          </tr>
        `,$=w(g);s.innerHTML=`
      <!-- 頂部資訊與控制列 -->
      <div class="cohort-ranks-wrapper mb-6">
        <!-- 核心統計指標 -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-5">
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">參測學生總數</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-slate-900">${p}</span>
              <span class="text-xs text-slate-500">位學生</span>
            </div>
            <div class="text-[11px] text-slate-400">具備歷次成績：${b} 人</div>
          </div>

          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">定期評量考次跨度</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-indigo-700">${i.length}</span>
              <span class="text-xs text-slate-500">場考次</span>
            </div>
            <div class="text-[11px] text-slate-400">跨越國一至最新段考</div>
          </div>

          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">最佳校排平均</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-amber-800">${x}</span>
              <span class="text-xs text-slate-500">名</span>
            </div>
            <div class="text-[11px] text-slate-400">歷屆綜合表現最佳</div>
          </div>

          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">計算指標說明</div>
            <div class="text-xs font-medium text-emerald-800 mt-1.5">
              校排平均 ＝ 校排加總 ÷ 應考次數
            </div>
            <div class="text-[11px] text-slate-400 mt-0.5">平均名次越小代表長期越領先</div>
          </div>
        </div>

        <!-- 表格工具列 -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="p-4 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-3.5">
            <div class="flex items-center gap-2.5 flex-wrap">
              <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-1.5">
                <span>🏆</span>
                <span>${k(e)} 歷屆校排綜合追蹤大榜</span>
              </h3>
              <span id="cohort-count-badge" class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                共 ${g.length} 筆
              </span>
            </div>

            <!-- 控制群組 -->
            <div class="flex items-center gap-2.5 flex-wrap w-full md:w-auto">
              <!-- 年級考次篩選 -->
              ${m&&_?`
                <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-medium text-slate-700 shadow-2xs">
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${d==="all"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="all">全部考次</button>
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${d==="7"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="7">七年級</button>
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${d==="8"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="8">八年級</button>
                  ${S?`<button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${d==="9"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="9">九年級</button>`:""}
                </div>
              `:""}

              <!-- 排序切換鈕 -->
              <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-medium text-slate-700 shadow-2xs">
                <button type="button" id="btn-sort-rank" class="px-2.5 py-1 rounded-md transition ${r==="rankAvg"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依校排平均排序">🏆 綜合名次</button>
                <button type="button" id="btn-sort-seat" class="px-2.5 py-1 rounded-md transition ${r==="seatNo"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依座號排序">🔢 座號排序</button>
                <button type="button" id="btn-sort-latest" class="px-2.5 py-1 rounded-md transition ${r==="latestRank"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依最新段考校排排序">🚀 最新校排</button>
              </div>

              <!-- 搜尋框 -->
              <div class="w-full sm:w-44">
                <input type="search" id="cohort-search-input" value="${k(c)}" placeholder="🔍 輸入座號(如 5)或姓名..." class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" autocomplete="off" />
              </div>

              <!-- 列印與匯出按鈕 -->
              <button type="button" id="btn-cohort-print" class="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold shadow-2xs transition inline-flex items-center gap-1" title="列印歷屆校排總表">
                <span>🖨️</span>
                <span>列印</span>
              </button>
              <button type="button" id="btn-cohort-export" class="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-semibold shadow-2xs transition inline-flex items-center gap-1" title="匯出 CSV 檔">
                <span>📥</span>
                <span>匯出 CSV</span>
              </button>
            </div>
          </div>

          <!-- 說明列 -->
          <div class="px-6 py-2 bg-amber-50/50 border-b border-amber-200/60 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5">
              <span>💡</span>
              <span><b>各考次數值為該次之真實校排</b>。表格右側<b>【校排加總】</b>為歷次校排總和，<b>【校排平均】</b>為加總除以參測次數，並已依<b>校排平均由小至大進行綜合排名</b>。</span>
            </span>
            <span class="text-amber-800 font-medium">※ 特教生、體育班依教育部分類原則計算校排常模</span>
          </div>

          <!-- 大榜表格 -->
          <div class="roster-table-container overflow-x-auto" tabindex="0" role="region" aria-label="歷屆校排綜合追蹤名冊，可上下與左右捲動">
            <table class="roster-table cohort-roster-table w-full text-left text-sm text-slate-700 border-collapse">
              <thead class="text-slate-700 text-xs font-semibold">
                <!-- 第一層表頭 -->
                <tr class="text-xs font-bold border-b border-slate-200">
                  <th class="roster-sticky-header-1 bg-slate-100 text-slate-800 px-2 py-2 text-center border-r border-slate-200 w-[56px]">綜合名次</th>
                  ${n?'<th class="bg-indigo-50 text-indigo-900 px-2.5 py-2 text-center border-r border-slate-200 w-[70px]">班級</th>':""}
                  <th class="${n?"":"roster-sticky-header-2"} bg-slate-100 text-slate-700 px-2 py-2 text-center border-r border-slate-200 w-[42px]">座號</th>
                  <th class="${n?"":"roster-sticky-header-3"} bg-slate-100 text-slate-800 px-3 py-2 text-left border-r border-slate-300 roster-sticky-shadow w-[78px]">姓名</th>
                  <th colspan="${u.length||1}" class="bg-indigo-50 text-indigo-950 px-2 py-2 text-center border-r border-indigo-200">
                    歷次定期評量真實校排 (入學第1次 ➔ 最新評量)
                  </th>
                  <th class="bg-slate-100 text-slate-600 px-2 py-2 text-center border-r border-slate-200 w-[64px]">參測次數</th>
                  <th class="bg-amber-100 text-amber-950 px-3 py-2 text-center border-r border-amber-200 w-[76px]">校排加總</th>
                  <th class="bg-emerald-100 text-emerald-950 px-3 py-2 text-center border-r border-emerald-300 w-[84px] font-black">校排平均</th>
                  <th class="bg-slate-100 text-slate-800 px-3 py-2 text-center border-r border-slate-200 w-[74px]">綜合排名</th>
                  <th class="bg-slate-100 text-slate-600 px-2.5 py-2 text-center w-[74px]">歷屆走向</th>
                </tr>
                <!-- 第二層考次細目 -->
                <tr class="bg-slate-50 text-slate-600 text-xs font-semibold border-b border-slate-200">
                  <th class="roster-sticky-header-1 bg-slate-50 text-center border-r border-slate-200 py-1.5">名次</th>
                  ${n?'<th class="bg-slate-50 text-center border-r border-slate-200 py-1.5">班級</th>':""}
                  <th class="${n?"":"roster-sticky-header-2"} bg-slate-50 text-center border-r border-slate-200 py-1.5">座號</th>
                  <th class="${n?"":"roster-sticky-header-3"} bg-slate-50 text-left border-r border-slate-300 roster-sticky-shadow py-1.5 px-3">姓名</th>
                  ${u.map(y=>`
                    <th class="px-2 py-1.5 text-center font-mono text-xs w-[54px] bg-indigo-50 text-indigo-900 border-r border-slate-200" title="${k(y.academicYear)} ${k(y.semester)} ${k(y.examName)}">
                      ${k(y.label)}
                    </th>
                  `).join("")}
                  <th class="bg-slate-50 py-1.5 text-center font-mono border-r border-slate-200">次數</th>
                  <th class="py-1.5 text-center font-mono font-bold text-amber-950 bg-amber-50 border-r border-amber-200">總和</th>
                  <th class="py-1.5 text-center font-mono font-black text-emerald-900 bg-emerald-50 border-r border-emerald-300">平均</th>
                  <th class="bg-slate-50 py-1.5 text-center font-bold border-r border-slate-200">總排</th>
                  <th class="bg-slate-50 py-1.5 text-center">趨勢</th>
                </tr>
              </thead>
              <tbody id="cohort-tbody">
                ${$}
              </tbody>
            </table>
          </div>

          <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
            <span>📌 說明：各次段考真實校排由該次全體普通班/體育班常模精算；若學生當次未就讀、缺考或免測則以「-」標示。</span>
            <span class="font-mono text-slate-400">大溪國中教務處註冊組・歷屆學習歷程分析</span>
          </div>
        </div>
      </div>
    `,requestAnimationFrame(()=>{const y=s.querySelector(".roster-table"),v=y?.querySelector("thead tr:first-child");if(y&&v){const L=Math.round(v.getBoundingClientRect().height);L>0&&y.style.setProperty("--roster-head-row1-h",`${L}px`)}}),s.querySelector("#btn-sort-rank")?.addEventListener("click",()=>{r==="rankAvg"?l=!l:(r="rankAvg",l=!0),f()}),s.querySelector("#btn-sort-seat")?.addEventListener("click",()=>{r==="seatNo"?l=!l:(r="seatNo",l=!0),f()}),s.querySelector("#btn-sort-latest")?.addEventListener("click",()=>{r==="latestRank"?l=!l:(r="latestRank",l=!0),f()}),s.querySelectorAll(".btn-filter-grade").forEach(y=>{y.addEventListener("click",v=>{d=v.currentTarget.getAttribute("data-filter")||"all",f()})}),s.querySelector("#cohort-search-input")?.addEventListener("input",y=>{c=y.target.value;const v=h(),L=s.querySelector("#cohort-tbody"),A=s.querySelector("#cohort-count-badge");L&&(L.innerHTML=w(v)),A&&(A.textContent=`共 ${v.length} 筆`)}),s.querySelector("#btn-cohort-print")?.addEventListener("click",()=>{a?a():window.print()}),s.querySelector("#btn-cohort-export")?.addEventListener("click",()=>{pd(e,u,h(),n)})}f()}function pd(s,t,e,n){const i=["綜合排名"];n&&i.push("班級"),i.push("座號","姓名"),t.forEach(c=>i.push(c.label)),i.push("參測次數","校排加總","校排平均","總排名");const o=[i.join(",")];e.forEach(c=>{const d=[c.overallRank];n&&d.push(`"${c.className}"`),d.push(c.seatNo,`"${c.name}"`),t.forEach(h=>{const f=c.examRanks?.[h.examKey];d.push(f??"")}),d.push(`"${c.validCount}/${c.totalExams}"`,c.rankSum!==null?c.rankSum:"",c.rankAvg!==null?c.rankAvg:"",c.overallRank),o.push(d.join(","))});const a=new Blob(["\uFEFF"+o.join(`\r
`)],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(a),l=document.createElement("a");l.href=r,l.download=`${s}_歷屆校排綜合追蹤表_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(r)}function gd(s){if(!s||!s.length)return{examList:[],studentResults:[]};const t=s.map(a=>{const r=(a.semester||"").includes("1")?"上":"下",l=(a.examName||"").match(/\d+/),c=l?l[0]:"1",h=`${(a.gradeLevelLabel||"").includes("七")?"7":(a.gradeLevelLabel||"").includes("八")?"8":"9"}${r}-${c}`;return{examKey:a.examKey,label:h,academicYear:a.academicYear,semester:a.semester,examName:a.examName,gradeLevelLabel:a.gradeLevelLabel}}),e=s[s.length-1],i=(e.students||[]).map(a=>{let r=0,l=0;const c={};s.forEach(h=>{const f=h.students.find(g=>a.studentId&&g.studentId?g.studentId===a.studentId:!a.studentId&&!g.studentId?g.seatNo===a.seatNo&&g.name===a.name:g.name===a.name&&g.seatNo===a.seatNo),u=f&&typeof f.schoolRank=="number"?f.schoolRank:null;c[h.examKey]=u,u!==null&&(r+=u,l++)});const d=l>0?Number((r/l).toFixed(2)):null;return{studentId:a.studentId,name:a.name,className:a.className||e.className,seatNo:a.seatNo,identity:a.identity,examRanks:c,validCount:l,totalExams:s.length,rankSum:l>0?r:null,rankAvg:d}});i.sort((a,r)=>a.rankAvg===null?1:r.rankAvg===null?-1:a.rankAvg-r.rankAvg);let o=1;return i.forEach((a,r)=>{a.rankAvg===null?a.overallRank="-":(r>0&&i[r-1].rankAvg===a.rankAvg?a.overallRank=i[r-1].overallRank:a.overallRank=o,o++)}),{examList:t,studentResults:i}}async function an(s,t,e={}){const n=t.role==="admin"&&!!e.className,i=n?e.className:t.assignedClass;s.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表讀取【${k(i||"負責班級")}】成績資料...</span>
    </div>
  `;const o=!!e.forceRefresh,a=n?await J("getAdminClassData",{className:i},{forceRefresh:o}):await J("getTeacherClassData",{teacherAccount:t.account,className:i},{forceRefresh:o});if(!a.success){s.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入班級成績</h3>
        <p class="text-slate-600 mb-6 text-sm">${k(a.message||"查無此班級之成績紀錄")}</p>
        <button id="btn-teacher-retry" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">重新整理</button>
      </div>
    `,s.querySelector("#btn-teacher-retry")?.addEventListener("click",()=>{an(s,t,{...e,forceRefresh:!0})});return}const{className:r,exams:l}=a,c=n?a.teacherName||e.teacherName||"":t.displayName||t.account;if(!l||l.length===0){s.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">目前尚無班級成績資料</h3>
        <p class="text-slate-600 text-sm">【${k(r)}】在試算表成績資料庫中暫無紀錄，請由教務處統一匯入。</p>
      </div>
    `;return}let d="single",h=l.length-1,f="",u="",g=!1;function p(){const b=l[h],x=b.subjects||[],m=b.fiveBenchmarks||{},_=b.gradeDistribution||{},S=b.students||[],w=(T,M)=>{const R=(M||"").trim().toLowerCase();if(!R)return T;if(/^\d{1,2}$/.test(R)){const N=Number(R);return T.filter(Ht=>Number(Ht.seatNo)===N)}return/^\d{3,}$/.test(R)?T.filter(N=>N.studentId&&String(N.studentId).toLowerCase().includes(R)||String(N.seatNo)===R):T.filter(N=>N.name&&N.name.toLowerCase().includes(R)||N.studentId&&String(N.studentId).toLowerCase().includes(R)||`${N.seatNo}號`===R)},$=w(S,f),y=S.filter(T=>T.hasScore!==!1),v=y.length?Number((y.reduce((T,M)=>T+(M.rawAverageScore??M.averageScore),0)/y.length).toFixed(1)):0,L=/[九9]/.test(b.gradeSheet||"")||/[九9]/.test(b.gradeLevelLabel||"")||x.includes("地科"),A=L&&S.some(T=>T.scienceAverage!==null&&T.scienceAverage!==void 0),C=x.indexOf("公民"),P=C!==-1?x.slice(0,C+1):x,O=C!==-1?x.slice(C+1):[],W=3+P.length+1+O.length+(A?1:0)+6,H=T=>T.length?T.map(M=>{const R=zt=>{const Ae=M.scores[zt],ln=["英文","英語","數學"].includes(zt);if(Ae==null){const cn=["學中","特教","特教班","秀才"].includes(M.identity);return`<td class="px-1.5 py-2 text-center font-mono text-xs ${ln?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(zt)?"bg-amber-50/20":["理化","地科","生物"].includes(zt)?"bg-cyan-50/20":""}" title="${cn?"學習中心/特教免測":"缺考/未測驗"}">${cn?'<span class="text-slate-400">-</span>':'<span class="text-amber-700 font-bold">缺</span>'}</td>`}return`
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm ${ln?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(zt)?"bg-amber-50/20":["理化","地科","生物"].includes(zt)?"bg-cyan-50/20":""} ${Ae<60?"text-rose-600 font-bold":"text-slate-700"}">
              ${Ae}
            </td>
          `},N=P.map(R).join(""),Ht=O.map(R).join(""),_o=`
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-amber-950 bg-amber-50/60 border-r border-amber-200">
            ${M.socialAverage!==null&&M.socialAverage!==void 0?Number(M.socialAverage).toFixed(1):"-"}
          </td>
        `,ko=A?`
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-cyan-950 bg-cyan-50/60 border-r border-cyan-200">
            ${M.scienceAverage!==null&&M.scienceAverage!==void 0?Number(M.scienceAverage).toFixed(1):"-"}
          </td>
        `:"",So=k(M.classRankInterval||(M.classRank?M.classRank+"名":"-")),$o=k(M.schoolRankInterval||(M.schoolRank?M.schoolRank+"名":"-"));let Le='<span class="text-slate-300 text-xs">-</span>';return M.identity==="體育班"?Le='<span class="text-[10px] px-1 py-0.5 rounded bg-blue-100 text-blue-800 font-bold border border-blue-200">體育</span>':M.identity==="學中"?Le='<span class="text-[10px] px-1 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">學中</span>':M.identity&&M.identity!=="*"&&(Le=`<span class="text-[10px] px-1 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">${k(M.identity)}</span>`),`
          <tr class="group hover:bg-slate-50/90 transition ${M.isFailing?"bg-rose-50/30":""}">
            <td class="roster-sticky-col-1 bg-white group-hover:bg-slate-50 text-center font-mono font-bold text-slate-800 border-r border-slate-200 px-1 py-1.5 text-xs sm:text-sm">${M.seatNo}</td>
            <td class="roster-sticky-col-2 bg-white group-hover:bg-slate-50 font-medium text-slate-900 border-r border-slate-300 roster-sticky-shadow px-2 py-1.5 whitespace-nowrap text-xs sm:text-sm">
              <span>${k(M.name)}</span>
            </td>
            <td class="px-1.5 py-2 text-center border-r border-slate-200">${Le}</td>
            ${N}
            ${_o}
            ${Ht}
            ${ko}
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-slate-800 bg-slate-50/40">
              ${M.totalScore!==null&&M.totalScore!==void 0?M.totalScore:"-"}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold ${M.isFailing?"text-rose-600":"text-slate-900"} bg-slate-50/40">
              ${M.averageScore!==null&&M.averageScore!==void 0?M.averageScore:"-"}
            </td>
            <td class="px-1.5 py-2 text-center text-xs">
              ${M.hasScore!==!1&&M.gradeLevel?pe(M.gradeLevel):["學中","特教","特教班","秀才"].includes(M.identity)?'<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>':'<span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-bold border border-amber-200">缺考</span>'}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap" title="${M.classRank?`班名次：第${M.classRank}名`:""}">
              <div class="font-bold text-slate-800">${So}</div>
              ${M.classRank?`<div class="text-[10px] text-slate-400 font-normal">第${M.classRank}名</div>`:""}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap border-r border-slate-200" title="${M.schoolRank?`校名次：第${M.schoolRank}名 (PR ${M.schoolPR})`:""}">
              <div class="font-bold text-slate-800">${$o}</div>
              ${M.schoolRank?`<div class="text-[10px] text-slate-400 font-normal">第${M.schoolRank}名 (PR ${M.schoolPR})</div>`:""}
            </td>
            <td class="px-2 py-2 text-center whitespace-nowrap">
              <button class="btn-print-single px-2 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition inline-flex items-center gap-0.5 shadow-xs" data-seat="${M.seatNo}" title="預覽或列印 ${M.seatNo}號 ${k(M.name)} 成績單">
                <span>🖨️</span>
                <span>列印</span>
              </button>
            </td>
          </tr>
        `}).join(""):`
          <tr>
            <td colspan="${W}" class="py-10 text-center text-slate-400 text-sm">
              查無符合「<b class="text-slate-600">${k(f)}</b>」的座號或學生姓名
            </td>
          </tr>
        `,U=H($),V=b.benchmarks||{},ct=V.cohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(r)?"含體育班":"不含體育班"),dt=T=>T==null||isNaN(T)?"-":Number(T).toFixed(2),wt=[{label:"班平均",map:V.classAverage,cls:"bg-emerald-50/70 text-emerald-950 font-bold",stickyBg:"bg-emerald-50"},{label:`年平均 (${ct})`,map:V.schoolAverage,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班高標",map:V.classHigh,cls:"bg-blue-50/70 text-blue-950 font-bold",stickyBg:"bg-blue-50"},{label:`年高標 (${ct})`,map:V.schoolHigh,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班低標",map:V.classLow,cls:"bg-rose-50/70 text-rose-950 font-bold",stickyBg:"bg-rose-50"},{label:`年低標 (${ct})`,map:V.schoolLow,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"}],jt=V.classAverage?`
      <tfoot class="border-t-2 border-slate-300 divide-y divide-slate-200">
        ${wt.map(T=>`
          <tr class="${T.cls}">
            <td class="roster-sticky-col-1 ${T.stickyBg||"bg-slate-50"} px-2 py-2 text-center text-xs font-mono font-bold text-slate-400 border-r border-slate-200">◆</td>
            <td class="roster-sticky-col-2 ${T.stickyBg||"bg-slate-50"} px-3 py-2 text-xs font-bold border-r border-slate-300 roster-sticky-shadow whitespace-nowrap">${k(T.label)}</td>
            <td class="px-1.5 py-2 text-center text-xs text-slate-400 border-r border-slate-200">基準</td>
            ${P.map(M=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${["英文","英語","數學"].includes(M)?"border-r border-slate-200":""}">${dt(T.map?.[M])}</td>`).join("")}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-amber-950 bg-amber-100/70 border-r border-amber-200">${dt(T.map?.社平??T.map?.社會)}</td>
            ${O.map((M,R)=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${R===O.length-1&&!A?"border-r border-slate-200":""}">${dt(T.map?.[M])}</td>`).join("")}
            ${A?`<td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-cyan-950 bg-cyan-100/70 border-r border-cyan-200">${dt(T.map?.自平??T.map?.自然)}</td>`:""}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${dt(T.map?.總分)}</td>
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${dt(T.map?.平均)}</td>
            <td colspan="4" class="px-3 py-2 text-center text-xs text-slate-400 font-normal">全班常模基準</td>
          </tr>
        `).join("")}
      </tfoot>
    `:"";s.innerHTML=`
      <!-- 導師專區頂部標題列 -->
      <div class="portal-toolbar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-bold text-slate-900">${k(r)} ${n?"班級成績管理":"導師成績儀表板"}${b&&b.className&&b.className!==r?` <span class="text-base font-normal text-slate-500">（評量時為 ${k(b.className)}）</span>`:""}</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${n?"註冊組長・全校檢視":k(t.displayName||t.account)}</span>
          </div>
          <p class="text-slate-500 text-xs mt-1">
            各科段考成績、分數區間分析、歷屆真實校排綜合追蹤與成績單
          </p>
        </div>

        <div class="flex items-center gap-2.5 w-full sm:w-auto flex-wrap">
          <!-- 1人1頁 A4 個人成績單批量列印 -->
          <button id="btn-print-batch-cards" class="flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-sm transition">
            <span>📄</span>
            <span>全班成績單（A4）</span>
          </button>

          <!-- 全班成績名冊總表列印 -->
          <button id="btn-print-class" class="flex items-center gap-1 px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-sm font-medium shadow-sm transition" title="列印全班名冊橫式總表">
            <span>🖨️</span>
            <span>名冊總表</span>
          </button>
        </div>
      </div>

      <!-- 導師功能導航與段考選擇整控列 (名冊切換與考次選單緊密相鄰) -->
      <div class="teacher-control-bar bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-xs mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 print:hidden">
        <!-- 核心視圖切換與考次選單緊密結合 -->
        <div class="flex items-center gap-2 flex-wrap max-w-full min-w-0">
          <!-- 區塊 1：各科段考成績名冊 ＋ 緊鄰的考次選擇器 -->
          <div class="flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1 rounded-xl transition max-w-full min-w-0 ${d==="single"?"bg-emerald-50/90 border-2 border-emerald-500/60 shadow-2xs":"bg-slate-50 border border-slate-200"}">
            <button type="button" id="tab-btn-single-exam" class="px-3.5 py-2 rounded-lg text-sm font-bold transition flex items-center gap-1.5 ${d==="single"?"bg-emerald-700 text-white shadow-xs":"text-slate-600 hover:text-slate-900"}" aria-pressed="${d==="single"}">
              <span>📋</span>
              <span>各科段考成績名冊</span>
            </button>

            ${d==="single"?`
              <!-- 緊鄰各科段考成績名冊之考次選單與快速切換鍵 -->
              <div class="flex items-center gap-1 sm:pl-1.5 pr-1 sm:border-l sm:border-emerald-300 max-w-full min-w-0 w-full sm:w-auto">
                <span class="text-xs font-bold text-emerald-950 whitespace-nowrap hidden sm:inline">考次：</span>
                <button type="button" id="btn-prev-exam" class="w-7 h-7 shrink-0 flex items-center justify-center rounded-md border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-bold shadow-2xs" title="看上一場段考" ${h<=0?"disabled":""}>
                  ◀
                </button>
                <select id="teacher-exam-select" class="px-2.5 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs sm:text-sm font-bold text-slate-800 shadow-2xs focus:ring-2 focus:ring-emerald-500 cursor-pointer min-w-0 flex-1 sm:flex-initial max-w-full sm:max-w-[290px]">
                  ${l.map((T,M)=>`
                    <option value="${M}" ${M===h?"selected":""}>
                      ${k(T.academicYear||"")} ${k(T.semester||"")} ${k(T.examName)}${T.gradeLevelLabel?` (${k(T.gradeLevelLabel)})`:""}
                    </option>
                  `).join("")}
                </select>
                <button type="button" id="btn-next-exam" class="w-7 h-7 shrink-0 flex items-center justify-center rounded-md border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-bold shadow-2xs" title="看下一場段考" ${h>=l.length-1?"disabled":""}>
                  ▶
                </button>
              </div>
            `:""}
          </div>

          <!-- 區塊 2：歷屆校排綜合追蹤 -->
          <button type="button" id="tab-btn-cohort-ranks" class="px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-1.5 ${d==="cohort"?"bg-emerald-700 text-white shadow-xs border-2 border-emerald-600":"bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"}" aria-pressed="${d==="cohort"}">
            <span>🏆</span>
            <span>歷屆校排綜合追蹤（入學至最新）</span>
          </button>
        </div>

        <!-- 右側當前狀態標籤 -->
        <div class="text-xs flex items-center gap-2 pl-2 text-slate-600">
          ${d==="single"?`
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>當前考次：<b class="text-slate-800 font-bold">${k(b.academicYear)} ${k(b.semester)} ${k(b.examName)}</b></span>
            </span>
          `:`
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900">
              <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>涵蓋歷程：<b class="font-bold">國一至國三共 ${l.length} 場段考</b></span>
            </span>
          `}
        </div>
      </div>

      <!-- 視圖主內容掛載點 -->
      <div id="teacher-view-content"></div>
    `;const X=s.querySelector("#teacher-view-content");if(d==="cohort"){const T=gd(l);vo(X,{title:r,isGradeWide:!1,examList:T.examList,studentResults:T.studentResults,onPrint:()=>window.print()})}else{X.innerHTML=`
        <p class="calculation-note print:hidden">${k(b.calculationNote||"社會採地理、歷史、公民平均；各科折算及名次依本次評量規則計算。")}</p>
        <!-- 班級四大指標統計 (Tailwind Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <!-- 班級人數與平均 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級總人數 / 總平均</div>
            <div class="flex items-baseline gap-2 my-2">
              <span class="text-3xl font-black font-mono text-slate-900">${v}</span>
              <span class="text-xs text-slate-500">分 / 全班 ${S.length} 人</span>
            </div>
            <div class="text-[11px] text-slate-400">總平均達丙等 (60分) 以上及格基準</div>
          </div>

          <!-- 班級五標常模 (教育部合規) -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級常模五標</div>
            <div class="grid grid-cols-3 gap-1 my-2 text-xs font-mono">
              <div><span class="text-slate-400">頂:</span> <b class="text-emerald-700">${m.ding||0}</b></div>
              <div><span class="text-slate-400">前:</span> <b class="text-blue-700">${m.qian||0}</b></div>
              <div><span class="text-slate-400">均:</span> <b class="text-slate-800">${m.jun||0}</b></div>
              <div><span class="text-slate-400">後:</span> <b class="text-amber-700">${m.hou||0}</b></div>
              <div><span class="text-slate-400">底:</span> <b class="text-rose-700">${m.di||0}</b></div>
            </div>
            <div class="text-[11px] text-slate-400">P88 / P75 / P50 / P25 / P12</div>
          </div>

          <!-- 教育部等第人數分佈 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">等第人數分佈</div>
            <div class="flex items-center gap-2 my-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">優 ${_.優||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">甲 ${_.甲||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">乙 ${_.乙||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">丙 ${_.丙||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">丁 ${_.丁||0}</span>
            </div>
            <div class="text-[11px] text-slate-400">及格率：${S.length?Math.round((S.length-(_.丁||0))/S.length*100):0}%</div>
          </div>

          <!-- 班級及格率 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級及格率 (丙等以上)</div>
            <div class="flex items-baseline justify-between my-2">
              <span class="text-3xl font-black font-mono text-emerald-700">${b.passRate??Math.round((S.length-(_.丁||0))/(S.length||1)*100)}%</span>
              <span class="text-xs font-mono text-slate-500">${S.length-(_.丁||0)} / ${S.length} 及格</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-500" style="width: ${b.passRate??Math.round((S.length-(_.丁||0))/(S.length||1)*100)}%;"></div>
            </div>
          </div>
        </div>

        <section id="subject-score-analysis" class="score-analysis" aria-labelledby="score-analysis-title"></section>

        <!-- 全班學生成績總表 -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div class="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="font-bold text-slate-800 text-sm">全班定期評量成績名冊</h3>
              <span id="roster-count-badge" class="text-xs bg-slate-200/80 text-slate-600 px-2 py-0.5 rounded-full font-medium">${$.length} 筆</span>
              ${L?'<span class="text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md font-medium hidden sm:inline">九年級 9 學科完整版面</span>':""}
            </div>
            <div class="flex items-center gap-2.5 w-full sm:w-auto">
              <button id="btn-toggle-density" type="button" class="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition flex items-center gap-1 shadow-xs" title="切換名冊檢視鬆緊度">
                <span>${g?"📐 舒適視圖":"📏 緊湊視圖"}</span>
              </button>
              <div class="w-full sm:w-56">
                <input type="search" id="teacher-search-input" value="${k(f)}" placeholder="🔍 輸入座號(如 5)或姓名..." class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" autocomplete="off" />
              </div>
            </div>
          </div>

          <div class="px-6 py-2 bg-slate-50/70 border-b border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5">
              <span class="text-emerald-600 font-bold">📌</span>
              <span>已啟用 Excel 式凍結窗格：往下捲動時<b>上方領域與科目表頭</b>恆定固定，左右滑動時<b>左側座號與姓名</b>恆定釘選。</span>
            </span>
            <span class="text-slate-400 hidden sm:inline">社會領域（琥珀黃）與自然領域（青藍）已按領域分組對齊</span>
          </div>

          <div class="roster-table-container overflow-x-auto" tabindex="0" role="region" aria-label="班級成績名冊，可上下與左右捲動">
            <table class="roster-table ${L?"roster-table-g9":""} ${g?"roster-compact":""} w-full text-left text-sm text-slate-700">
              <thead class="text-slate-700 text-xs font-semibold">
                <!-- 第一層：領域分類與結構分組 -->
                <tr class="text-xs font-bold border-b border-slate-200">
                  <th colspan="2" class="roster-sticky-header-1 bg-slate-100 text-slate-700 px-3 py-2 text-center border-r border-slate-300">學生基本</th>
                  <th class="bg-slate-100 text-slate-600 px-1.5 py-2 text-center border-r border-slate-200">身分</th>
                  <th colspan="2" class="bg-indigo-50 text-indigo-950 px-2 py-2 text-center border-r border-indigo-200">語文領域</th>
                  <th colspan="1" class="bg-violet-50 text-violet-950 px-1.5 py-2 text-center border-r border-violet-200">數學領域</th>
                  <th colspan="4" class="bg-amber-100 text-amber-950 px-2 py-2 text-center border-r border-amber-200">社會領域 (地理/歷史/公民 ➔ 社平)</th>
                  <th colspan="${A?4:O.length||1}" class="bg-cyan-100 text-cyan-950 px-2 py-2 text-center border-r border-cyan-200">自然領域 ${A?"(理化3/地科2/生物1 ➔ 自平)":""}</th>
                  <th colspan="5" class="bg-slate-100 text-slate-800 px-2 py-2 text-center border-r border-slate-200">總計評定與序位</th>
                  <th class="bg-slate-100 text-slate-600 px-2 py-2 text-center">操作</th>
                </tr>
                <!-- 第二層：各科目與欄位項目 -->
                <tr class="bg-slate-50 text-slate-600 text-xs font-semibold border-b border-slate-200">
                  <th class="roster-sticky-header-1 bg-slate-50 w-[42px] px-1 py-2 text-center border-r border-slate-200">座號</th>
                  <th class="roster-sticky-header-2 bg-slate-50 w-[74px] px-2 py-2 text-left border-r border-slate-300 roster-sticky-shadow">姓名</th>
                  <th class="bg-slate-50 w-[42px] px-1 py-2 text-center border-r border-slate-200">身分</th>
                  ${P.map(M=>`
                    <th class="w-[48px] px-1 py-2 text-center ${["英文","英語","數學"].includes(M)?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(M)?"bg-amber-50 text-amber-950":"bg-slate-50"}">${k(M)}</th>
                  `).join("")}
                  <th class="w-[52px] px-1 py-2 text-center font-bold bg-amber-100 text-amber-950 border-r border-amber-200" title="社會領域平均 (地理/歷史/公民)">社平</th>
                  ${O.map((M,R)=>`
                    <th class="w-[48px] px-1 py-2 text-center bg-cyan-50 text-cyan-950 ${R===O.length-1&&!A?"border-r border-slate-200":""}">${k(M)}</th>
                  `).join("")}
                  ${A?'<th class="w-[52px] px-1 py-2 text-center font-bold bg-cyan-100 text-cyan-950 border-r border-cyan-200" title="自然領域平均 (理化3/地科2/生物1)">自平</th>':""}
                  <th class="w-[56px] px-1 py-2 text-center font-bold bg-slate-50">總分</th>
                  <th class="w-[52px] px-1 py-2 text-center font-bold bg-slate-50">平均</th>
                  <th class="w-[46px] px-1 py-2 text-center bg-slate-50">等第</th>
                  <th class="w-[74px] px-1 py-2 text-center bg-slate-50" title="5人班級序位區間">班級序位</th>
                  <th class="w-[84px] px-1 py-2 text-center bg-slate-50 border-r border-slate-200" title="10人年級序位區間">年級序位</th>
                  <th class="w-[72px] px-1 py-2 text-center bg-slate-50">成績單</th>
                </tr>
              </thead>
              <tbody id="roster-tbody" class="divide-y divide-slate-100">
                ${U}
              </tbody>
              ${jt}
            </table>
          </div>
          <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
            <span>📌 標標說明：年標採學校總表規範（普通班以普通班為母體，體育班以全體學生為母體）。</span>
            <span class="font-mono text-slate-400">高標 / 低標：Q2 中位數前後 50% 學生之平均值</span>
          </div>
        </div>
      `,fd(X.querySelector("#subject-score-analysis"),S,x,{selectedSubject:u,onSubjectChange:M=>{u=M}}),s.querySelector("#teacher-exam-select")?.addEventListener("change",M=>{h=Number(M.target.value)||0,p()}),s.querySelector("#btn-prev-exam")?.addEventListener("click",()=>{h>0&&(h--,p())}),s.querySelector("#btn-next-exam")?.addEventListener("click",()=>{h<l.length-1&&(h++,p())});const T=()=>{const M=X.querySelector(".roster-table"),R=M?.querySelector("thead tr:first-child");if(M&&R){const N=Math.round(R.getBoundingClientRect().height);N>0&&M.style.setProperty("--roster-head-row1-h",`${N}px`)}};requestAnimationFrame(T),X.querySelector("#btn-toggle-density")?.addEventListener("click",M=>{g=!g;const R=X.querySelector(".roster-table");R&&R.classList.toggle("roster-compact",g);const N=M.currentTarget.querySelector("span");N&&(N.textContent=g?"📐 舒適視圖":"📏 緊湊視圖"),T()}),X.querySelector("#teacher-search-input")?.addEventListener("input",M=>{f=M.target.value;const R=w(S,f),N=X.querySelector("#roster-tbody"),Ht=X.querySelector("#roster-count-badge");N&&(N.innerHTML=H(R)),Ht&&(Ht.textContent=`${R.length} 筆`)}),s.querySelector("#btn-print-batch-cards")?.addEventListener("click",()=>{$i(b,b&&b.className||r,c,S,null)}),X.querySelector("#roster-tbody")?.addEventListener("click",M=>{const R=M.target.closest(".btn-print-single");if(!R)return;const N=Number(R.getAttribute("data-seat"));$i(b,b&&b.className||r,c,S,N)}),s.querySelector("#btn-print-class")?.addEventListener("click",()=>{window.print()})}s.querySelector("#tab-btn-single-exam")?.addEventListener("click",()=>{d!=="single"&&(d="single",p())}),s.querySelector("#tab-btn-cohort-ranks")?.addEventListener("click",()=>{d!=="cohort"&&(d="cohort",p())})}p()}async function yo(s,t){s.innerHTML='<p class="admin-class-message" role="status">正在讀取全校班級名單…</p>';const e=await J("getAdminClasses");if(!e.success||!Array.isArray(e.classes)){s.innerHTML=`<div class="admin-class-message"><h3>無法載入全校班級</h3><p>${k(e.message||"請確認前後端版本一致，並重新登入註冊組長帳號。")}</p><button type="button" class="admin-class-retry">重新載入</button></div>`,s.querySelector("button")?.addEventListener("click",async()=>{await J("getAdminClasses",{},{forceRefresh:!0}),yo(s,t)});return}const n=e.classes;if(!n.length){s.innerHTML='<p class="admin-class-message">最新學生名冊尚無班級資料，請先確認學生名單。</p>';return}s.innerHTML=`
    <section class="admin-class-picker" aria-labelledby="admin-class-title">
      <div>
        <h3 id="admin-class-title">各班成績與全校歷屆校排檢視</h3>
        <p>註冊組長可檢視各班完整成績，亦可切換「全校全年級歷屆校排大榜」綜合排名。</p>
      </div>
      <div class="admin-class-selectors">
        <label>年級
          <select id="admin-grade-select">
            <option value="">全部年級</option>
            <option value="9">九年級（國一至國三13次段考）</option>
            <option value="8">八年級（國一至國二7次段考）</option>
            <option value="7">七年級（國一第1次段考）</option>
          </select>
        </label>
        <label>檢視項目（全校大榜或個別班級）
          <select id="admin-class-select"></select>
        </label>
        <button type="button" id="btn-admin-refresh-selection" class="px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs font-semibold shadow-2xs transition self-end" title="略過瀏覽器快取並從試算表重新讀取最新資料">
          🔄 重新整理
        </button>
      </div>
      <p id="admin-class-description" role="status"></p>
    </section>
    <div id="admin-selected-class"></div>
  `;const i=s.querySelector("#admin-grade-select"),o=s.querySelector("#admin-class-select"),a=s.querySelector("#btn-admin-refresh-selection"),r=s.querySelector("#admin-selected-class");let l=0;async function c(h={}){const f=!!h.forceRefresh,u=o.value;if(!u)return;if(u.startsWith("cohort_grade_")){const x=Number(u.replace("cohort_grade_","")),m=++l,_=document.createElement("div");_.className="admin-grade-cohort-stage",r.replaceChildren(_),s.querySelector("#admin-class-description").textContent=`${x}年級全校歷屆校排綜合追蹤大榜｜全校學生跨班級統一依照歷屆校排平均綜合排序`,_.innerHTML=`
        <div class="py-16 text-center text-slate-500">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-3"></div>
          <span class="text-sm">正在計算【${x}年級全校歷屆校排大榜】（包含所有班級學生與各次段考真實校排）...</span>
        </div>
      `;const S=await J("getAdminGradeCohortData",{grade:x},{forceRefresh:f});if(m!==l)return;S.success?(_.innerHTML="",vo(_,{title:`${x}年級全校`,isGradeWide:!0,examList:S.examList,studentResults:S.studentResults,onPrint:()=>window.print()})):_.innerHTML=`<div class="p-8 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl text-center text-sm font-medium">${k(S.message||"無法載入全校校排資料")}</div>`;return}const g=n.find(x=>x.className===u);if(!g)return;const p=++l,b=document.createElement("div");b.className="admin-inherited-class",r.replaceChildren(b),s.querySelector("#admin-class-description").textContent=`${g.className}｜在校名冊 ${g.studentCount} 人｜導師：${g.teacherName||"尚未設定"}`,await an(b,t,{className:g.className,teacherName:g.teacherName,forceRefresh:f}),p!==l&&b.remove()}function d(){const h=o.value,f=i.value,u=n.filter(p=>!f||p.className.startsWith(f+"年"));let g="";f?(g+='<optgroup label="🌟 全校年級綜合大榜">',g+=`<option value="cohort_grade_${f}">🏆【${f}年級全體・全校歷屆校排大榜】</option>`,g+="</optgroup>"):(g+='<optgroup label="🌟 全校年級綜合大榜">',g+='<option value="cohort_grade_9">🏆【九年級全體・全校歷屆校排大榜】</option>',g+='<option value="cohort_grade_8">🏆【八年級全體・全校歷屆校排大榜】</option>',g+='<option value="cohort_grade_7">🏆【七年級全體・全校歷屆校排大榜】</option>',g+="</optgroup>"),g+='<optgroup label="🏫 個別班級成績名冊與歷屆追蹤">',g+=u.map(p=>`<option value="${k(p.className)}">${k(p.className)}（${p.studentCount} 人｜導師: ${k(p.teacherName||"未設")}）</option>`).join(""),g+="</optgroup>",o.innerHTML=g,o.disabled=u.length===0,u.some(p=>p.className===h)?o.value=h:h&&h.startsWith("cohort_grade_")&&(o.value=f?`cohort_grade_${f}`:h),!o.value&&o.options.length>0&&(o.selectedIndex=0),o.value?c():(l++,r.innerHTML='<p class="admin-class-message">此年級尚無資料。</p>',s.querySelector("#admin-class-description").textContent="")}i.addEventListener("change",d),o.addEventListener("change",()=>void c()),a?.addEventListener("click",()=>void c({forceRefresh:!0})),d()}async function qt(s,t,e={}){s.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在讀取 Google Sheets 資料庫狀態...</span>
    </div>
  `;const n=await J("getAdminOverview",{},{forceRefresh:!!e.forceRefresh});if(!n.success||!n.stats){s.innerHTML=`<div class="admin-class-message"><h2>無法載入管理資料</h2><p>${k(n.message||"請稍後重新載入。")}</p><button type="button" id="btn-admin-retry">重新載入</button></div>`,s.querySelector("#btn-admin-retry")?.addEventListener("click",()=>qt(s,t,{forceRefresh:!0}));return}const i=n.stats,o=Ze(),a=n.spreadsheetUrl||"";function r(){s.innerHTML=`
      <!-- 管理者標題列 -->
      <div class="registrar-overview-toolbar portal-toolbar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-bold text-slate-900">註冊組長管理專區</h2>
            <span class="bg-indigo-100 text-indigo-800 text-xs px-2.5 py-1 rounded-full font-semibold">全校管理・包含導師功能</span>
          </div>
          <p class="text-slate-500 text-xs mt-1">
            全校資料概況、各班成績檢視與成績單列印
          </p>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
          ${a?`
          <a href="${k(a)}" target="_blank" rel="noopener noreferrer" id="btn-open-spreadsheet" class="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-sm font-bold shadow-xs transition inline-flex items-center gap-1.5" title="以新分頁開啟後端 Google 試算表資料庫">
            <span>📊</span>
            <span>開啟 Google 試算表資料庫</span>
            <span class="text-xs text-emerald-600">↗</span>
          </a>
          `:""}
          <button id="btn-config-gas" class="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-sm font-medium shadow-sm transition">
            ⚙️ GAS 網址設定
          </button>
          <button id="btn-test-gas" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-semibold shadow-sm transition">
            ⚡ 測試連線
          </button>
          <button type="button" id="btn-admin-refresh-overview" class="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-sm font-medium shadow-sm transition" title="清除瀏覽器快取並從試算表重新讀取最新數據">
            🔄 重新整理
          </button>
        </div>
      </div>

      <nav class="admin-section-tabs" aria-label="管理功能">
        <button type="button" id="admin-tab-overview" aria-pressed="true" aria-controls="admin-overview-panel">全校總覽與維護</button>
        <button type="button" id="admin-tab-classes" aria-pressed="false" aria-controls="admin-class-panel">各班成績與列印</button>
      </nav>
      <div id="admin-overview-panel">
      <!-- 核心統計數據 (Tailwind Cards) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-slate-500 mb-1">【學生名單】</div>
          <div class="text-2xl font-black font-mono text-slate-900 my-1">${i.studentCount||0}</div>
          <div class="text-[10px] text-slate-400">在校學生名冊</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-slate-500 mb-1">【導師名單】</div>
          <div class="text-2xl font-black font-mono text-emerald-700 my-1">${i.teacherCount||0}</div>
          <div class="text-[10px] text-slate-400">7、8、9年級導師</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-teal-700 mb-1">【七年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-teal-700 my-1">${i.grade7Count||0}</div>
          <div class="text-[10px] text-slate-400">7 門學科</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-sky-700 mb-1">【八年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-sky-700 my-1">${i.grade8Count||0}</div>
          <div class="text-[10px] text-slate-400">7 門學科（含理化）</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-purple-700 mb-1">【九年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-purple-700 my-1">${i.grade9Count||0}</div>
          <div class="text-[10px] text-slate-400">9 門學科（含理化地科）</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-slate-500 mb-1">全校累計筆數</div>
          <div class="text-2xl font-black font-mono text-indigo-700 my-1">${i.gradeRecordCount||0}</div>
          <div class="text-[10px] text-slate-400">${(i.exams||[]).length||1} 場定期評量</div>
        </div>
      </div>

      <!-- Google Sheets 試算表結構說明與管理面板 -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
          <h3 class="text-base font-bold text-slate-900">📋 Google Sheets 試算表架構規劃（同一個 Google 試算表內）</h3>
          ${a?`
          <a href="${k(a)}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-bold transition inline-flex items-center gap-1 shadow-2xs">
            <span>📊 開啟試算表</span>
            <span class="text-[10px]">↗</span>
          </a>
          `:""}
        </div>
        <p class="text-xs text-slate-500 mb-5">
          系統透過 Google Apps Script 自動對應試算表中的各工作表，無須另外架設傳統資料庫，直接於試算表中貼上或覆蓋資料即可生效：
        </p>

        <!-- 第一排：基本名冊 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <!-- 學生名單 -->
          <div class="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-slate-800 text-sm">1. 學生名單</span>
              <span class="text-[11px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono">Student List</span>
            </div>
            <p class="text-xs text-slate-600 mb-2">每次段考前直接覆蓋或更新，學號雙重防呆比對。</p>
            <div class="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
              欄位：學號、姓名、班級、座號、身分證後四碼、出生月日、密碼<br/>
              <b>預設密碼公式：=E2&F2</b>（自動產生8碼，學生可自由選擇是否自行加密修改）
            </div>
          </div>

          <!-- 導師名單 -->
          <div class="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-slate-800 text-sm">2. 導師名單</span>
              <span class="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">Teacher List</span>
            </div>
            <p class="text-xs text-slate-600 mb-2">管理導師登入帳號、負責班級與強制改密碼狀態。</p>
            <div class="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
              欄位：教師帳號、教師姓名、負責班級、密碼、首次登入標記<br/>
              <b>機制：首次登入標記為 TRUE 則強制彈窗修改密碼</b>
            </div>
          </div>

          <!-- 管理者名單 -->
          <div class="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-slate-800 text-sm">3. 管理者名單</span>
              <span class="text-[11px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-mono">Admin List</span>
            </div>
            <p class="text-xs text-slate-600 mb-2">註冊組長帳號；具全校管理權限及各班導師檢視、搜尋與列印功能。</p>
            <div class="text-[11px] font-mono text-slate-500 bg-white p-2 rounded border border-slate-200">
              欄位：帳號、姓名、密碼<br/>
              <b>帳號及密碼由授權管理人員維護</b>
            </div>
          </div>
        </div>

        <!-- 第二排：分年級成績工作表 (七、八、九年級) -->
        <div class="border-t border-slate-100 pt-4">
          <div class="text-xs font-bold text-slate-800 mb-3 flex items-center gap-1.5">
            <span>📊 成績庫工作表（分成三個獨立年級表，欄位以「班級、座號、姓名」開頭直連匯入）：</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 七年級成績資料庫 -->
            <div class="border border-teal-200 bg-teal-50/30 rounded-xl p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-teal-900 text-sm">4. 七年級成績資料庫</span>
                <span class="text-[11px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-mono">Grade 7 DB</span>
              </div>
              <p class="text-xs text-teal-800 font-semibold mb-1">7 科目：國文、英文、數學、地理、歷史、公民、生物</p>
              <div class="text-[11px] font-mono text-slate-600 bg-white p-2 rounded border border-teal-200">
                順序：<b>班級</b>、<b>座號</b>、<b>姓名</b>、國文、英文、數學、地理、歷史、公民、生物、<b>身分別</b>、考試別、學年度、學期
                <div class="mt-1 text-[10px] text-teal-700 font-sans">※ 身分別支援「*」(普通生)、「體育班」、「學中」(學習中心)。總分、平均與雙軌校排由系統自動運算</div>
              </div>
            </div>

            <!-- 八年級成績資料庫 -->
            <div class="border border-sky-200 bg-sky-50/30 rounded-xl p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-sky-900 text-sm">5. 八年級成績資料庫</span>
                <span class="text-[11px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-mono">Grade 8 DB</span>
              </div>
              <p class="text-xs text-sky-800 font-semibold mb-1">7 科目：國文、英文、數學、地理、歷史、公民、理化</p>
              <div class="text-[11px] font-mono text-slate-600 bg-white p-2 rounded border border-sky-200">
                順序：<b>班級</b>、<b>座號</b>、<b>姓名</b>、國文、英文、數學、地理、歷史、公民、理化、<b>身分別</b>、考試別、學年度、學期
                <div class="mt-1 text-[10px] text-sky-700 font-sans">※ 身分別支援「*」(普通生)、「體育班」、「學中」(學習中心)。總分、平均與雙軌校排由系統自動運算</div>
              </div>
            </div>

            <!-- 九年級成績資料庫 -->
            <div class="border border-purple-200 bg-purple-50/30 rounded-xl p-4">
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-purple-900 text-sm">6. 九年級成績資料庫</span>
                <span class="text-[11px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono">Grade 9 DB</span>
              </div>
              <p class="text-xs text-purple-800 font-semibold mb-1">9 科目：國文、英文、數學、地理、歷史、公民、理化、地科、生物</p>
              <div class="text-[11px] font-mono text-slate-600 bg-white p-2 rounded border border-purple-200">
                順序：<b>班級</b>、<b>座號</b>、<b>姓名</b>、國文、英文、數學、地理、歷史、公民、理化、地科、生物、<b>身分別</b>、考試別、學年度、學期
                <div class="mt-1 text-[10px] text-purple-700 font-sans">※ 身分別支援「*」(普通生)、「體育班」、「學中」(學習中心)。總分、平均與雙軌校排由系統自動運算</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 後端連線與快速操作卡片 -->
      <div class="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md mb-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 class="text-lg font-bold">Google Apps Script Web App 串接狀態</h3>
            <p class="text-slate-300 text-xs mt-1 font-mono break-all">
              ${o?`已連線：${k(o)}`:"目前處於：【本地示範模式】（可立即點選右側設定貼上您的 GAS 網址）"}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button id="btn-open-gas-instructions" class="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded-xl font-medium border border-white/20 transition">
              📖 檢視部署教學手冊
            </button>
            <button id="btn-autoresize-remote" class="px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs rounded-xl font-semibold shadow transition flex items-center gap-1.5">
              📐 自動調整所有欄寬
            </button>
            <button id="btn-init-db-remote" class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs rounded-xl font-semibold shadow transition">
              ⚡ 一鍵在試算表初始化資料庫
            </button>
          </div>
        </div>
      </div>
      </div>
      <section id="admin-class-panel" class="admin-class-panel" hidden></section>
    `;let u=!1;const g=s.querySelector("#admin-overview-panel"),p=s.querySelector("#admin-class-panel"),b=s.querySelector("#admin-tab-overview"),x=s.querySelector("#admin-tab-classes");function m(_){const S=_==="classes";g.hidden=S,p.hidden=!S,b.setAttribute("aria-pressed",String(!S)),x.setAttribute("aria-pressed",String(S)),S&&!u&&(u=!0,yo(p,t))}b.addEventListener("click",()=>m("overview")),x.addEventListener("click",()=>m("classes")),document.getElementById("btn-config-gas")?.addEventListener("click",c),document.getElementById("btn-test-gas")?.addEventListener("click",d),document.getElementById("btn-admin-refresh-overview")?.addEventListener("click",()=>{$e(),qt(s,t,{forceRefresh:!0})}),document.getElementById("btn-init-db-remote")?.addEventListener("click",h),document.getElementById("btn-autoresize-remote")?.addEventListener("click",l),document.getElementById("btn-open-gas-instructions")?.addEventListener("click",f)}async function l(){F("正在自動調整試算表各工作表欄寬...");const u=await J("autoResizeColumns");u.success?F(u.message||"🎉 所有工作表欄寬已全數調整至最佳寬度！"):F(u.message||"調整欄寬失敗","error")}function c(){const u=`
      <div class="p-6">
        <h3 class="text-base font-bold text-slate-900 mb-2">設定 Google Apps Script Web App 網址</h3>
        <p class="text-xs text-slate-500 mb-4">
          請貼上您在 Google Apps Script 中點選「部署」➔「網頁應用程式」所取得的 URL（以 /exec 結尾）：
        </p>
        <input type="url" id="input-gas-url" value="${k(Ze())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono mb-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        <div class="flex justify-between items-center">
          <button id="btn-clear-gas-url" class="text-xs text-rose-600 hover:underline">重設為本校預設連線網址</button>
          <div class="flex gap-2">
            <button id="btn-modal-cancel" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium">取消</button>
            <button id="btn-modal-save-gas" class="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-sm">儲存設定</button>
          </div>
        </div>
      </div>
    `;Se(u,()=>{document.getElementById("btn-modal-cancel")?.addEventListener("click",lt),document.getElementById("btn-clear-gas-url")?.addEventListener("click",()=>{Je(""),F("已重設為本校預設 GAS 連線網址"),lt(),qt(s,t,{forceRefresh:!0})}),document.getElementById("btn-modal-save-gas")?.addEventListener("click",()=>{const g=document.getElementById("input-gas-url")?.value.trim();if(!Li(g)){F("請輸入有效的 Google Apps Script Web App 網址（須以 https://script.google.com/macros/s/ 開頭並以 /exec 結尾）","error");return}Je(g),F("GAS 網址已儲存！"),lt(),qt(s,t,{forceRefresh:!0})})})}async function d(){F("正在測試 GAS 後端連線...");const u=await J("ping");u.success?F(`✓ 連線成功！試算表：${u.spreadsheetName||"已連線"}`):F(`連線失敗：${u.message}`,"error")}async function h(){if(!confirm("確定要在 Google Sheets 中建立【學生名單】、【導師名單】、【管理者名單】以及【七年級成績資料庫】、【八年級成績資料庫】、【九年級成績資料庫】三個工作表嗎？"))return;F("正在傳送初始化指令至 Google Apps Script...");const u=await J("initDatabase");u.success?(F("🎉 Google Sheets 資料庫結構與七、八、九年級示範資料已順利建立！"),qt(s,t)):F(u.message||"初始化指令執行失敗","error")}function f(){Se(`
      <div class="p-6 max-h-[80vh] overflow-y-auto">
        <h3 class="text-base font-bold text-slate-900 mb-2">📖 Google Sheets ＋ GAS 快速部署 3 步驟</h3>
        <ol class="list-decimal pl-5 space-y-3 text-xs text-slate-700 leading-relaxed">
          <li>
            <b>建立試算表</b>：在 Google Drive 建立新試算表，點選「擴充功能」➔「Apps Script」。
          </li>
          <li>
            <b>貼上 Code.gs</b>：將專案中的 <code>gas/Code.gs</code> 完整貼入，選擇 <code>initDatabase</code> 函式點選「執行」，允許權限後將自動建立六個工作表（學生名單、導師名單、管理者名單、七年級成績資料庫、八年級成績資料庫、九年級成績資料庫）與示範公式。
          </li>
          <li>
            <b>部署為網頁應用程式</b>：點選「部署」➔「新增部署作業」➔ 類型選擇「網頁應用程式」，設定「以我身分執行」，存取權限務必選<b>「任何人 (Anyone)」</b>，最後將 Web App 網址貼回系統即可！
          </li>
        </ol>
        <div class="mt-6 flex justify-end">
          <button id="btn-close-instructions" class="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-semibold">我知道了</button>
        </div>
      </div>
    `,()=>{document.getElementById("btn-close-instructions")?.addEventListener("click",lt)})}r()}let ft="student";const bd=900*1e3;let qe=null,Mi=0;function rn(){qe&&(clearTimeout(qe),qe=null),Xt()&&(qe=setTimeout(()=>{Xt()&&(J("logout"),Vs(),lt(),F("🔒 為保護個人成績與校務資料安全，系統因閒置超過 15 分鐘已自動安全登出。","error"),ee())},bd))}function xd(){const s=()=>{const t=Date.now();t-Mi<5e3||(Mi=t,Xt()&&rn())};["mousemove","mousedown","keydown","touchstart","scroll"].forEach(t=>{window.addEventListener(t,s,{passive:!0})})}function Hs(){const s=document.getElementById("app-masthead");if(!s)return;const t=Xt();s.innerHTML=`
    <div class="school-masthead-inner">
      <!-- 學校校名與品牌 -->
      <div class="school-brand">
        <div class="school-emblem" aria-hidden="true">
          大溪
        </div>
        <div>
          <p class="school-name">桃園市立大溪國民中學</p>
          <h1 class="school-product-name">歷屆段考成績查詢系統</h1>
        </div>
      </div>

      <!-- 右側連線狀態與登入身分 -->
      <div class="school-account-tools">
        <!-- GAS 連線標章 -->
        ${t?.role==="admin"?'<button id="btn-masthead-gas-status" class="school-settings-button" title="管理系統連線設定">連線設定</button>':'<span class="school-service-label">校務查詢服務</span>'}

        ${t?`
          <div class="school-session">
            <div class="school-session-name">
              <span>
                ${t.role==="admin"?"管理者":t.role==="teacher"?"導師":"學生"}：
              </span>
              <span class="font-bold text-white">${k(t.displayName||t.account)}</span>
            </div>
            ${t.role==="student"||t.role==="teacher"?`
              <button id="btn-change-password" class="school-settings-button" title="修改個人登入密碼（SHA-256 加密保護）">
                🔑 修改密碼
              </button>
            `:""}
            <button id="btn-logout" class="school-logout">
              登出
            </button>
          </div>
        `:""}
      </div>
    </div>
  `,document.getElementById("btn-masthead-gas-status")?.addEventListener("click",wo),document.getElementById("btn-change-password")?.addEventListener("click",()=>{t&&vd(t)}),document.getElementById("btn-logout")?.addEventListener("click",()=>{J("logout"),Vs(),rn(),F("您已安全登出系統。"),ee()})}function zs(s){const e={student:{role:"student",title:"學生與家長登入",subtitle:"查詢個人段考成績與歷次段考紀錄。",accLabel:"學生學號（7 碼）",accPlaceholder:"請輸入 7 碼學生學號",pwdLabel:"驗證密碼（預設為身分證後四碼＋出生月日共 8 碼，或自訂密碼）",pwdPlaceholder:"請輸入登入密碼",help:"預設密碼之出生月日請使用四碼（如 0509）。登入後可點擊右上角「🔑 修改密碼」設定專屬加密密碼；若忘記密碼請洽教務處註冊組。",defaultAcc:"",defaultPwd:""},teacher:{role:"teacher",title:"班級導師登入",subtitle:"查詢班級段考成績、各科分數區間與列印成績單。",accLabel:"教師帳號",accPlaceholder:"請輸入公務信箱前綴帳號",pwdLabel:"教師密碼",pwdPlaceholder:"請輸入教師密碼",help:"請使用學校提供的教師帳號。首次登入須依畫面指示變更密碼；忘記密碼請洽教務處註冊組。",defaultAcc:"",defaultPwd:""},admin:{role:"admin",title:"註冊組長登入",subtitle:"管理全校資料，並可檢視各班成績與使用導師列印功能。",accLabel:"管理者帳號",accPlaceholder:"請輸入管理員帳號（例如：admin）",pwdLabel:"管理員密碼",pwdPlaceholder:"請輸入管理員密碼",help:"本專區限授權人員使用。請於使用完畢後登出，避免在共用設備儲存登入資料。",defaultAcc:"",defaultPwd:""}}[ft];s.innerHTML=`
    <div class="school-login-layout">
      <section class="school-login-intro" aria-labelledby="login-intro-title">
        <p class="school-eyebrow">大溪國中・親師生服務</p>
        <h2 id="login-intro-title">段考成績查詢<br/><span>掌握各科成績紀錄</span></h2>
        <p class="school-intro-description">提供學生與家長查詢段考成績，協助導師檢視班級各科分數區間。請選擇您的身分登入。</p>
        <ol class="school-login-steps">
          <li><span>01</span><div><strong>選擇登入身分</strong><p>學生與家長、班級導師或系統管理員。</p></div></li>
          <li><span>02</span><div><strong>輸入帳號與密碼</strong><p>請使用學校提供的帳號及登入資料。</p></div></li>
          <li><span>03</span><div><strong>查閱段考成績</strong><p>確認學年度、學期與段考次別。</p></div></li>
        </ol>
        <p class="school-intro-contact">資料查詢與操作協助<span>教務處註冊組</span></p>
      </section>
      <!-- 登入卡片主體 -->
      <section class="school-login-card" aria-labelledby="login-card-title">
        <!-- 身分切換標籤頁 (Tabs) -->
        <div class="school-role-switch" role="group" aria-label="選擇登入身分">
          <button type="button" aria-pressed="${ft==="student"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${ft==="student"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="student">
            學生／家長
          </button>
          <button type="button" aria-pressed="${ft==="teacher"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${ft==="teacher"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="teacher">
            班級導師
          </button>
          <button type="button" aria-pressed="${ft==="admin"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${ft==="admin"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="admin">
            註冊組長
          </button>
        </div>

        <div class="school-login-fields">
          <div class="mb-6">
            <h2 id="login-card-title" class="text-xl font-bold text-slate-900">${e.title}</h2>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">${e.subtitle}</p>
          </div>

          <!-- 登入表單 -->
          <form id="auth-login-form" class="space-y-4">
            <div>
              <label for="login-account-id" class="block text-xs font-semibold text-slate-700 mb-1.5">${e.accLabel}</label>
              <input type="text" id="login-account-id" autocomplete="username" ${ft==="student"?'inputmode="numeric"':""} required value="${k(e.defaultAcc)}" placeholder="${k(e.accPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>

            <div>
              <label for="login-password" class="block text-xs font-semibold text-slate-700 mb-1.5">${e.pwdLabel}</label>
              <input type="password" id="login-password" autocomplete="current-password" aria-describedby="login-help" required value="${k(e.defaultPwd)}" placeholder="${k(e.pwdPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>

            <div id="login-help" class="school-login-help">
              ${e.help}
            </div>

            <button type="submit" id="btn-submit-login" class="w-full py-3 bg-[#0F2537] hover:bg-slate-800 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition">
              驗證身分並進入系統
            </button>
          </form>
        </div>

        <div class="school-login-bottom">
          <span>帳號或成績資料有疑問？</span><strong>請洽教務處註冊組</strong>
        </div>
      </section>
    </div>
  `,s.querySelectorAll(".role-tab-btn").forEach(n=>{n.addEventListener("click",()=>{ft=n.getAttribute("data-role"),zs(s)})}),document.getElementById("btn-open-gas-setup")?.addEventListener("click",wo),document.getElementById("auth-login-form")?.addEventListener("submit",async n=>{n.preventDefault();const i=document.getElementById("login-account-id")?.value.trim(),o=document.getElementById("login-password")?.value.trim(),a=document.getElementById("btn-submit-login");if(!i||!o){F("請輸入帳號與密碼！","error");return}a&&(a.disabled=!0,a.textContent="正在驗證帳密...");const r=await J("login",{role:ft,account:i,password:o});if(a&&(a.disabled=!1,a.textContent="驗證身分並進入系統"),!r.success){F(r.message||"登入失敗，請確認帳號密碼","error");return}if(r.role==="teacher"&&r.mustChangePassword){md(r.user.account,o,c=>{Ms({role:"teacher",account:r.user.account,displayName:r.user.name,assignedClass:r.user.assignedClass,authToken:c||r.authToken}),F("密碼已成功變更！歡迎進入導師儀表板。"),ee()},r.authToken);return}const l={role:r.role,account:r.user&&(r.user.account||r.user.studentId)||i,displayName:r.user&&(r.user.name||r.user.displayName)||i,authToken:r.authToken,studentId:r.role==="student"?r.user.studentId:void 0,assignedClass:r.role==="teacher"?r.user.assignedClass:void 0};Ms(l),F(`歡迎回來，${l.displayName}！`),ee()})}function md(s,t,e,n){const i=`
    <div class="p-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xl">🔒</span>
        <h3 class="text-base font-bold text-slate-900">首次登入強制變更密碼</h3>
      </div>
      <p class="text-xs text-slate-600 mb-4 leading-relaxed">
        為維護學生個資安全與校務評量系統資安，導師首次登入必須設定新的安全密碼。新密碼將直接寫回 Google 試算表「導師名單」，並解除首次登入標記。
      </p>

      <form id="forced-pwd-form" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">目前密碼</label>
          <input type="password" id="forced-curr-pwd" required value="${k(t)}" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">設定新密碼 (至少 6 碼)</label>
          <input type="password" id="forced-new-pwd" required placeholder="請輸入新密碼" minlength="6" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">再次確認新密碼</label>
          <input type="password" id="forced-confirm-pwd" required placeholder="請再次輸入新密碼" minlength="6" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        </div>
        <button type="submit" id="btn-submit-forced-pwd" class="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition shadow-sm mt-2">
          確認變更新密碼並進入系統
        </button>
      </form>
    </div>
  `;Se(i,()=>{document.getElementById("forced-pwd-form")?.addEventListener("submit",async o=>{o.preventDefault();const a=document.getElementById("forced-curr-pwd")?.value.trim(),r=document.getElementById("forced-new-pwd")?.value.trim(),l=document.getElementById("forced-confirm-pwd")?.value.trim(),c=document.getElementById("btn-submit-forced-pwd");if(r!==l){F("兩次輸入的新密碼不一致！","error");return}if(r.length<6){F("新密碼長度請至少包含 6 個字元！","error");return}c&&(c.disabled=!0,c.textContent="正在寫入 Google Sheets...");const d=await J("changeTeacherPassword",{account:s,currentPassword:a,newPassword:r,authToken:n});d.success?(lt(),typeof e=="function"&&e(d.authToken)):(F(d.message||"變更密碼失敗，請重試","error"),c&&(c.disabled=!1,c.textContent="確認變更新密碼並進入系統"))})})}function vd(s){const t=s.role==="student",e=t&&s.studentId||s.account,n=`
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">🔑</span>
          <h3 class="text-base font-bold text-slate-900">修改個人登入密碼</h3>
        </div>
      </div>
      <p class="text-xs text-slate-600 mb-4 leading-relaxed">
        帳號：<b class="text-slate-800">${k(e)}（${k(s.displayName||"")}）</b><br/>
        新密碼將透過 <b>SHA-256 單向加密雜湊</b> 寫入系統，防止他人以預設生日或身分證末碼查詢您的成績。若日後忘記密碼，可洽教務處註冊組協助重置。
      </p>

      <form id="self-pwd-form" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">目前密碼</label>
          <input type="password" id="self-curr-pwd" required placeholder="請輸入目前使用的登入密碼" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">設定新密碼 (至少 6 碼)</label>
          <input type="password" id="self-new-pwd" required placeholder="請輸入新密碼 (建議英數混合)" minlength="6" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">再次確認新密碼</label>
          <input type="password" id="self-confirm-pwd" required placeholder="請再次輸入新密碼" minlength="6" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" id="btn-cancel-self-pwd" class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition">
            取消
          </button>
          <button type="submit" id="btn-submit-self-pwd" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition shadow-sm">
            確認加密更新密碼
          </button>
        </div>
      </form>
    </div>
  `;Se(n,()=>{document.getElementById("btn-cancel-self-pwd")?.addEventListener("click",lt),document.getElementById("self-pwd-form")?.addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("self-curr-pwd")?.value.trim(),a=document.getElementById("self-new-pwd")?.value.trim(),r=document.getElementById("self-confirm-pwd")?.value.trim(),l=document.getElementById("btn-submit-self-pwd");if(a!==r){F("兩次輸入的新密碼不一致！","error");return}if(a.length<6){F("新密碼長度請至少包含 6 個字元！","error");return}if(o===a){F("新密碼不可與目前密碼相同！","error");return}l&&(l.disabled=!0,l.textContent="正在加密寫入...");const d=await J(t?"changeStudentPassword":"changeTeacherPassword",{account:e,studentId:t?e:void 0,currentPassword:o,newPassword:a,authToken:s.authToken});d.success?(d.authToken&&Ms({...s,authToken:d.authToken}),lt(),F(d.message||"密碼已成功變更並完成加密保護！")):(F(d.message||"變更密碼失敗，請確認目前密碼是否正確","error"),l&&(l.disabled=!1,l.textContent="確認加密更新密碼"))})})}function wo(){const s=`
    <div class="p-6">
      <h3 class="text-base font-bold text-slate-900 mb-2">⚙️ Google Apps Script 試算表連線設定</h3>
      <p class="text-xs text-slate-500 mb-4 leading-relaxed">
        本系統可直接串接您的 Google 試算表。請將您部署為網頁應用程式 (Web App) 的 URL 貼於下方：
      </p>

      <div class="mb-4">
        <label class="block text-xs font-semibold text-slate-700 mb-1">Web App 部署網址 (以 /exec 結尾)</label>
        <input type="url" id="modal-gas-input" value="${k(Ze())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
      </div>

      <div class="flex justify-between items-center text-xs">
        <button id="btn-modal-clear-gas" class="text-rose-600 hover:underline">
          重設為本校預設連線網址
        </button>
        <div class="flex gap-2">
          <button id="btn-modal-close" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium">
            取消
          </button>
          <button id="btn-modal-save" class="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold shadow-sm">
            儲存連線
          </button>
        </div>
      </div>
    </div>
  `;Se(s,()=>{document.getElementById("btn-modal-close")?.addEventListener("click",lt),document.getElementById("btn-modal-clear-gas")?.addEventListener("click",()=>{Je(""),F("已重設為本校預設 GAS 連線網址"),lt(),Hs()}),document.getElementById("btn-modal-save")?.addEventListener("click",()=>{const t=document.getElementById("modal-gas-input")?.value.trim();if(!Li(t)){F("請輸入有效的 Google Apps Script Web App 網址（須以 https://script.google.com/macros/s/ 開頭並以 /exec 結尾）","error");return}Je(t),F("GAS 連線網址已更新！"),lt(),Hs()})})}function ee(){Hs(),rn();const s=document.getElementById("app-root");if(!s)return;const t=Xt();if(s.dataset.view=t?.role||"login",s.classList.toggle("school-portal-root",!!t),!t){zs(s);return}t.role==="student"?rd(s,t):t.role==="teacher"?an(s,t):t.role==="admin"?qt(s,t):(Vs(),zs(s))}xd();document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{ee()}):ee();
