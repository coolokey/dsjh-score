(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=o(a);fetch(a.href,c)}})();const D={GAS_URL:"daxi_grade_sys_gas_url",SESSION:"daxi_grade_sys_session_v4",LOCAL_DB:"daxi_grade_sys_local_mock_v4"},Fe="https://script.google.com/macros/s/AKfycby0G1hk9Z3OxFq7uR5leRMZqHhNqYypZRzvByvQlYcV_0AoE-Y9fPnHoTsPcu9IJw_1yQ/exec";function re(){if(typeof window<"u"&&window.location&&window.location.hostname.includes("script.google.com"))return window.location.href.split("?")[0].split("#")[0];const e=localStorage.getItem(D.GAS_URL);return e!==null?e:Fe}function de(e){const t=String(e||"").trim();t?localStorage.setItem(D.GAS_URL,t):localStorage.removeItem(D.GAS_URL)}function W(){try{const e=sessionStorage.getItem(D.SESSION);return e?JSON.parse(e):null}catch{return null}}function pe(e){sessionStorage.setItem(D.SESSION,JSON.stringify(e))}function ge(){sessionStorage.removeItem(D.SESSION);try{localStorage.removeItem(D.SESSION)}catch{}}function $e(e){if(!e||typeof e!="number"||e<1)return null;const t=Math.floor((e-1)/5)*5+1,o=(Math.floor((e-1)/5)+1)*5;return t+"~"+o+"名"}function ke(e){if(!e||typeof e!="number"||e<1)return null;const t=Math.floor((e-1)/10)*10+1,o=(Math.floor((e-1)/10)+1)*10;return t+"~"+o+"名"}function Ge(){return{students:[],teachers:[],admins:[],grades:[]}}function De(){try{const t=localStorage.getItem(D.LOCAL_DB);if(t)return JSON.parse(t)}catch{}const e=Ge();return localStorage.setItem(D.LOCAL_DB,JSON.stringify(e)),e}function Se(e){localStorage.setItem(D.LOCAL_DB,JSON.stringify(e))}function ce(e,t){if(e==null||e===""||t==null||t==="")return!1;const o=String(e).trim(),i=String(t).trim();if(o===i)return!0;const a=n=>{if(!n)return null;const s=parseFloat(n);if(!isNaN(s)&&!n.includes("年")&&!n.includes("班")){let u=Math.floor(s);return u>=701&&u<=999&&(u=u%100),u}const r=n.match(/年(\d+)班/)||n.match(/(\d+)班/)||n.match(/(\d+)/);if(!r)return null;let b=parseInt(r[1],10);return b>=701&&b<=999&&(b=b%100),b},c=a(o),l=a(i);return c!==null&&l!==null&&c===l}function be(e){if(!e.length)return{ding:0,qian:0,jun:0,hou:0,di:0};const t=e.length,o=i=>{const a=(t-1)*i,c=Math.floor(a),l=Math.ceil(a),n=a-c;return Number((e[c]*(1-n)+e[l]*n).toFixed(1))};return{ding:o(.88),qian:o(.75),jun:o(.5),hou:o(.25),di:o(.12)}}function Oe(e,t){if(!e||!e.length)return 0;const o=e.slice().sort((n,s)=>n-s),i=o.length,a=(i-1)*(t/4),c=Math.floor(a),l=a-c;return c+1<i?o[c]+l*(o[c+1]-o[c]):o[c]}function z(e){const t=[];let o=0;for(let r=0;r<e.length;r++){const b=e[r];typeof b=="number"&&isFinite(b)?t.push(b):b===null&&o++}if(t.length===0)return{average:0,high:0,low:0};const i=t.reduce((r,b)=>r+b,0)/t.length,a=Oe(t,2),c=t.filter(r=>r>=a),l=c.length?c.reduce((r,b)=>r+b,0)/c.length:0,n=t.filter(r=>r<=a);for(let r=0;r<o;r++)n.push(0);const s=n.length?n.reduce((r,b)=>r+b,0)/n.length:0;return{average:i,high:l,low:s}}function Q(e,t){if(e.hasScore===!1)return!0;if(e.rawAverageScore===null||e.rawAverageScore===void 0){const o=e.scores||e.subjects||{};return!t.some(i=>typeof o[i]=="number"&&isFinite(o[i]))}return!1}function Le(e,t,o,i="class"){const a={};t.forEach(d=>{const f=e.map(x=>{const w=x.scores||x.subjects,$=w?w[d]:void 0;if(typeof $=="number"&&isFinite($))return $;const y=Q(x,t);if(x.identity==="學中"||y)return null});a[d]=z(f),d==="英文"&&(a.英語=a[d]),d==="英語"&&(a.英文=a[d])});const c=e.map(d=>typeof d.socialAverage=="number"&&isFinite(d.socialAverage)?d.socialAverage:Q(d,t)?null:void 0);if(a.社會=a.社會平均=a.社平=z(c),o){const d=e.map(f=>typeof f.scienceAverage=="number"&&isFinite(f.scienceAverage)?f.scienceAverage:Q(f,t)?null:void 0);a.自然=a.自然平均=a.自平=z(d)}const l=a.英語?"英語":"英文",n=o?"自然":a.生物?"生物":"理化",s=(a.國文?.average||0)+(a[l]?.average||0)+(a.數學?.average||0)+(a.社會?.average||0)+(a[n]?.average||0),r=(a.國文?.high||0)+(a[l]?.high||0)+(a.數學?.high||0)+(a.社會?.high||0)+(a[n]?.high||0),b=(a.國文?.low||0)+(a[l]?.low||0)+(a.數學?.low||0)+(a.社會?.low||0)+(a[n]?.low||0),u=d=>Q(d,t)?null:typeof d.rawTotalScore=="number"&&isFinite(d.rawTotalScore)?d.rawTotalScore:typeof d.totalScore=="number"&&isFinite(d.totalScore)?d.totalScore:null,h=d=>Q(d,t)?null:typeof d.rawAverageScore=="number"&&isFinite(d.rawAverageScore)?d.rawAverageScore:typeof d.averageScore=="number"&&isFinite(d.averageScore)?d.averageScore:null;if(o)if(a.總分={average:s,high:r,low:b},i==="school")a.平均={average:s/5,high:r/5,low:b/5};else{const d=e.map(h);a.平均=z(d)}else if(i==="school"){const d=e.map(u),f=e.map(h);a.總分=z(d),a.平均=z(f)}else a.總分={average:s,high:r,low:b},a.平均={average:s/5,high:r/5,low:b/5};return a}function V(e,t){const o={};return e&&Object.keys(e).forEach(i=>{e[i]&&typeof e[i][t]=="number"&&(o[i]=Number(e[i][t].toFixed(2)))}),o}function Ae(e,t,o,i,a){const c=t.filter(b=>{const u=b.identity;return u!=="體育班"&&u!=="特教"&&u!=="特教班"&&u!=="秀才"}),l=t.filter(b=>{const u=b.identity;return u!=="特教"&&u!=="特教班"&&u!=="秀才"}),n=Le(e,o,i,"class"),s=Le(a?l:c,o,i,"school");return{cohortLabel:a?"含體育班":"不含體育班",isSportsClass:!!a,classBenchmarks:n,schoolBenchmarks:s,classAverage:V(n,"average"),schoolAverage:V(s,"average"),classHigh:V(n,"high"),schoolHigh:V(s,"high"),classLow:V(n,"low"),schoolLow:V(s,"low")}}async function q(e,t={}){const o=re(),i={action:e,authToken:W()?.authToken,...t};if(typeof window<"u"&&window.google?.script?.run)try{return await new Promise((a,c)=>{window.google.script.run.withSuccessHandler(a).withFailureHandler(c).requestApiBridge(i)})}catch{return{success:!1,message:"系統服務暫時無法回應，請稍後重試或洽教務處註冊組。"}}if(o)try{const a=await fetch(o,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(i)});if(!a.ok)throw new Error(`GAS 伺服器回應錯誤 (狀態碼 ${a.status})`);return await a.json()}catch{return{success:!1,message:"無法連線至校務服務，請稍後重試；如持續發生，請洽教務處註冊組。"}}return Ue(e,t)}function Ue(e,t){const o=De();switch(e){case"ping":return{success:!0,mode:"mock",message:"本地示範資料庫運作正常（未設定 GAS 網址）"};case"login":{const{role:i,account:a,password:c}=t;if(!a||!c)return{success:!1,message:"請輸入帳號與密碼"};if(i==="student"){const l=o.students.find(n=>n.studentId===a);return l?l.password!==c?{success:!1,message:"密碼錯誤，請輸入身分證後四碼＋生日共8碼"}:{success:!0,role:"student",authToken:"mock-token-student-"+l.studentId,user:{studentId:l.studentId,name:l.name,className:l.className,seatNo:l.seatNo},mustChangePassword:!1}:{success:!1,message:"查無此學號"}}if(i==="teacher"){const l=o.teachers.find(n=>n.account.toLowerCase()===a.toLowerCase()||a.toLowerCase()===`t${n.assignedClass.replace(/\D/g,"")}`||a===n.assignedClass.replace(/\D/g,"")||ce(n.assignedClass,a));return l?l.password!==c?{success:!1,message:"導師密碼錯誤"}:{success:!0,role:"teacher",authToken:"mock-token-teacher-"+l.account,user:{account:l.account,name:l.name,assignedClass:l.assignedClass},mustChangePassword:!!l.mustChangePassword}:{success:!1,message:"查無此教師帳號"}}if(i==="admin"){const l=o.admins.find(n=>n.account.toLowerCase()===a.toLowerCase());return l?l.password!==c?{success:!1,message:"管理者密碼錯誤"}:{success:!0,role:"admin",authToken:"mock-token-admin-"+l.account,user:{account:l.account,name:l.name},mustChangePassword:!1}:{success:!1,message:"查無管理者帳號"}}return{success:!1,message:"未知的身分角色"}}case"changeTeacherPassword":{const{account:i,newPassword:a}=t,c=o.teachers.find(l=>l.account.toLowerCase()===(i||"").toLowerCase());return c?(c.password=a,c.mustChangePassword=!1,Se(o),{success:!0,message:"密碼已順利變更完成！"}):{success:!1,message:"找不到導師帳號"}}case"changeStudentPassword":{const i=t.studentId||t.account,{currentPassword:a,newPassword:c}=t,l=o.students.find(n=>n.studentId===i);return l?a&&l.password!==a?{success:!1,message:"目前舊密碼驗證不符，無法修改"}:(l.password=c,Se(o),{success:!0,message:"個人密碼已成功變更！下次請使用新密碼登入。"}):{success:!1,message:"找不到該學號紀錄"}}case"getStudentScores":{const{studentId:i}=t,a=o.students.find(n=>n.studentId===i);if(!a)return{success:!1,message:"該學號目前不在最新在校學生名單中"};const l=o.grades.filter(n=>n.studentId&&n.studentId===i||n.name===a.name&&(n.seatNo===a.seatNo||ce(n.className,a.className))).map(n=>{const s=o.grades.filter(C=>C.examName===n.examName&&C.className===n.className),r=s.map(C=>C.averageScore).sort((C,N)=>C-N),b=be(r),u=Object.keys(n.subjects||{}),h={};u.forEach(C=>{const N=s.map(S=>S.subjects&&S.subjects[C]||0).sort((S,m)=>S-m);h[C]={average:N.length?Number((N.reduce((S,m)=>S+m,0)/N.length).toFixed(1)):0,...be(N)}});const f=1+s.map(C=>C.averageScore).sort((C,N)=>N-C).filter(C=>C>n.averageScore).length,x=f,w=/[九9]/.test(n.gradeSheet||"")||/^([九9])\s*年|^9\d{2}$/.test(String(n.className||"").trim())||u.includes("地科"),$=n.identity==="體育班"||s.some(C=>C.identity==="體育班")||/(?:^|[^\d])9班|(?:\d09)$/.test(n.className),y=o.grades.filter(C=>C.examName===n.examName),k=Ae(s,y.length?y:s,u,w,$);return{...n,scienceAverage:w?n.scienceAverage:null,classRank:f,classRankInterval:$e(f),schoolRank:x,schoolPR:80,schoolRankInterval:ke(x),benchmarks:k,classStats:{studentCount:s.length,fiveBenchmarks:b,subjectBenchmarks:h}}});return{success:!0,student:a,exams:l}}case"getTeacherClassData":{const{teacherAccount:i,className:a}=t,c=o.teachers.find(b=>b.account.toLowerCase()===(i||"").toLowerCase()),l=a||(c?c.assignedClass:"8年1班"),n=o.grades.filter(b=>ce(b.className,l)),r=Array.from(new Set(n.map(b=>b.examName))).map(b=>{const u=n.filter(m=>m.examName===b).sort((m,v)=>m.seatNo-v.seatNo),h=u.map(m=>m.averageScore).sort((m,v)=>m-v),d=u.length,f=be(h),x=u.length?Object.keys(u[0].subjects||{}):[],w={};x.forEach(m=>{const v=u.map(L=>L.subjects&&L.subjects[m]||0);w[m]=v.length?Number((v.reduce((L,R)=>L+R,0)/v.length).toFixed(1)):0});const $={優:0,甲:0,乙:0,丙:0,丁:0};u.forEach(m=>{$[m.gradeLevel]!==void 0&&$[m.gradeLevel]++});const y=u.filter(m=>m.averageScore>=60).length,k=/^([九9])\s*年|^9\d{2}$/.test(String(l||"").trim())||x.includes("地科"),C=u.some(m=>m.identity==="體育班")||/(?:^|[^\d])9班|(?:\d09)$/.test(l),N=o.grades.filter(m=>m.examName===b),S=Ae(u,N.length?N:u,x,k,C);return{examName:b,totalStudents:d,subjects:x,subjectAverages:w,fiveBenchmarks:f,benchmarks:S,gradeDistribution:$,passCount:y,passRate:d?Math.round(y/d*100):0,students:u.map(m=>{const v=1+h.filter(L=>L>m.averageScore).length;return{studentId:m.studentId,name:m.name,seatNo:m.seatNo,identity:m.identity,scores:m.subjects,socialAverage:m.socialAverage,scienceAverage:k?m.scienceAverage:null,totalScore:m.totalScore,averageScore:m.averageScore,gradeLevel:m.gradeLevel,classRank:v,classRankInterval:$e(v),schoolRank:v,schoolPR:80,schoolRankInterval:ke(v),isFailing:m.averageScore<60}})}});return{success:!0,className:l,exams:r}}case"logout":case"logoutAdmin":return{success:!0};case"getAdminOverview":{const i=o.grades.filter(l=>(l.gradeSheet||"").includes("七年級")).length,a=o.grades.filter(l=>(l.gradeSheet||"").includes("八年級")).length,c=o.grades.filter(l=>(l.gradeSheet||"").includes("九年級")).length;return{success:!0,stats:{studentCount:o.students.length,teacherCount:o.teachers.length,grade7Count:i,grade8Count:a,grade9Count:c,gradeRecordCount:o.grades.length,examCount:2,exams:["第1次定期評量","第2次定期評量"]}}}default:return{success:!1,message:"未支援的本地測試動作: "+e}}}function p(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function I(e,t="success"){const o=document.getElementById("toast-root");if(!o)return;const i=document.createElement("div"),a=t==="error";i.className=`pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-lg shadow-xl text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${a?"bg-rose-600 text-white":"bg-slate-900 text-white border-l-4 border-emerald-500"}`,i.innerHTML=`
    <span>${a?"⚠️":"✓"}</span>
    <span>${p(e)}</span>
  `,o.appendChild(i),requestAnimationFrame(()=>{i.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{i.classList.add("opacity-0","translate-y-2"),setTimeout(()=>i.remove(),300)},3600)}function ee(e,t){const o=document.getElementById("modal-root");if(!o)return;o.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="active-modal-backdrop">
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true">
        ${e}
      </div>
    </div>
  `;const i=document.getElementById("active-modal-backdrop");i?.addEventListener("click",a=>{a.target===i&&P()}),typeof t=="function"&&t(o)}function P(){const e=document.getElementById("modal-root");e&&(e.innerHTML="")}function Z(e){const t=String(e||"丁").trim(),o={優:"bg-emerald-50 text-emerald-700 border-emerald-300",甲:"bg-blue-50 text-blue-700 border-blue-300",乙:"bg-sky-50 text-sky-700 border-sky-300",丙:"bg-amber-50 text-amber-700 border-amber-300",丁:"bg-rose-50 text-rose-700 border-rose-300 font-bold"},i={優:"優等 (90分以上)",甲:"甲等 (80-89分)",乙:"乙等 (70-79分)",丙:"丙等 (60-69分，及格基準)",丁:"丁等 (未滿60分，待加強扶助)"};return`<span class="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-semibold border ${o[t]||o.丁}" title="${i[t]||""}">${p(t)}等</span>`}function Ke(e,t){if(!t)return'<span class="text-xs text-slate-400">-</span>';const{ding:o=0,qian:i=0,jun:a=0,hou:c=0,di:l=0}=t,n=Number(e)||0;let s="未達底標",r="bg-rose-100 text-rose-800";return n>=o?(s="🌟 超越頂標",r="bg-emerald-100 text-emerald-800 font-bold"):n>=i?(s="✨ 頂標 ~ 前標之間",r="bg-blue-100 text-blue-800 font-bold"):n>=a?(s="👍 前標 ~ 均標之間",r="bg-sky-100 text-sky-800"):n>=c?(s="均標 ~ 後標之間",r="bg-amber-100 text-amber-800"):n>=l&&(s="後標 ~ 底標之間",r="bg-orange-100 text-orange-800"),`
    <div class="flex flex-col gap-1 w-full max-w-xs">
      <div class="flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>底: ${l}</span>
        <span>均: ${a}</span>
        <span>頂: ${o}</span>
      </div>
      <div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
        <div class="h-full bg-rose-400" style="width: 20%;" title="底標: ${l}"></div>
        <div class="h-full bg-amber-400" style="width: 25%;" title="後標: ${c}"></div>
        <div class="h-full bg-sky-400" style="width: 25%;" title="均標: ${a}"></div>
        <div class="h-full bg-blue-400" style="width: 18%;" title="前標: ${i}"></div>
        <div class="h-full bg-emerald-500" style="width: 12%;" title="頂標: ${o}"></div>
      </div>
      <div class="mt-0.5">
        <span class="inline-block text-[11px] px-2 py-0.5 rounded ${r}">${s}</span>
      </div>
    </div>
  `}let ae=null,ne=null;async function ze(e,t){e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表載入成績紀錄...</span>
    </div>
  `;const o=await q("getStudentScores",{studentId:t.studentId});if(!o.success){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入成績資料</h3>
        <p class="text-slate-600 mb-6 text-sm">${p(o.message||"查無此學號之學籍或成績紀錄")}</p>
        <button id="btn-portal-back" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">返回登入頁</button>
      </div>
    `,document.getElementById("btn-portal-back")?.addEventListener("click",()=>{window.location.reload()});return}const{student:i,exams:a}=o;if(!a||a.length===0){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">尚未發布定期評量成績</h3>
        <p class="text-slate-600 text-sm">【${p(i.className)}】目前試算表尚無開放查詢之成績，請靜候學校教務處公告。</p>
      </div>
    `;return}let c=a.length-1;function l(){const s=a[c],r=Object.keys(s.subjects||{}),b=s.classStats||{},u=b.fiveBenchmarks||{},h=b.subjectBenchmarks||{},d=s.benchmarks||{},f=d.cohortLabel||s.schoolCohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(i.className)?"含體育班":"不含體育班"),x=y=>y==null||isNaN(y)?"-":Number(y).toFixed(2),w=/[九9]/.test(s.gradeSheet||"")||/^([九9])\s*年|^9\d{2}$/.test(String(s.className||"").trim())||r.includes("地科"),$=["學中","特教","特教班","秀才"].includes(s.identity||i.identity);e.innerHTML=`
      <div class="student-print-sheet">
      <!-- A4 列印頁首 (列印時才顯現) -->
      <div class="student-print-header hidden print:block mb-6 border-b-2 border-slate-800 pb-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-serif font-bold text-slate-900">市立大溪國民中學 學生定期學習評量成績通知單</h1>
            <p class="text-sm text-slate-600 mt-1">
              評量次別：${p(s.academicYear)} ${p(s.semester)} ${p(s.examName)} ｜ 
              班級：${p(s.className||i.className)} ｜ 座號：${p(i.seatNo)} 號 ｜ 姓名：${p(i.name)}（學號：${p(i.studentId)}）
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
            <h2 class="text-2xl font-bold text-slate-900">${p(i.name)} 同學</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${p(i.className)} ${p(i.seatNo)}號</span>
          </div>
          <p class="text-slate-500 text-xs mt-1 font-mono">學號：${p(i.studentId)} ｜ 個人評量紀錄</p>
        </div>

        <div class="flex items-center gap-3 w-full sm:w-auto">
          <!-- 考試切換下拉選單 -->
          <div class="flex-1 sm:flex-none">
            <select id="exam-selector" class="w-full sm:w-auto px-4 py-2 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              ${a.map((y,k)=>`
                <option value="${k}" ${k===c?"selected":""}>
                  ${p(y.academicYear)} ${p(y.semester)} ${p(y.examName)}
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

      <p class="calculation-note print:hidden">${p(s.calculationNote||"社會採地理、歷史、公民平均；各科折算依本次評量規則計算。")}</p>
      <!-- 核心成績指標概覽 (Cards) -->
      <div class="student-print-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 總分與平均 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">評量總成績</span>
            <div class="flex items-center gap-1.5">
              ${s.identity&&s.identity!=="*"?`<span class="text-xs px-2 py-0.5 rounded font-bold ${s.identity==="體育班"?"bg-blue-100 text-blue-800 border border-blue-200":"bg-amber-100 text-amber-800 border border-amber-200"}">${p(s.identity)}</span>`:""}
              <span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">五科總分 ${s.totalScore}</span>
            </div>
          </div>
          <div class="my-3">
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-black font-mono text-slate-900">${s.averageScore}</span>
              <span class="text-sm font-medium text-slate-500">五科平均</span>
            </div>
            <div class="flex items-center gap-2 mt-2 text-xs text-slate-600 font-mono">
              ${s.socialAverage!==null&&s.socialAverage!==void 0?`<span class="bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded font-medium">社平: <b>${Number(s.socialAverage).toFixed(1)}</b></span>`:""}
              ${w&&s.scienceAverage!==null&&s.scienceAverage!==void 0?`<span class="bg-cyan-50 text-cyan-800 border border-cyan-200 px-1.5 py-0.5 rounded font-medium">自平: <b>${Number(s.scienceAverage).toFixed(1)}</b></span>`:""}
            </div>
          </div>
          <div class="text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2.5">
            <span>及格基準：60 分</span>
            <span class="${s.averageScore>=60?"text-emerald-600 font-bold":"text-rose-600 font-bold"}">
              ${s.averageScore>=60?"達到及格標準":"建議加強練習"}
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
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-serif ${s.hasScore===!1?"bg-slate-100 text-slate-500 border-2 border-slate-300":s.gradeLevel==="優"?"bg-emerald-100 text-emerald-800 border-2 border-emerald-400":s.gradeLevel==="甲"?"bg-blue-100 text-blue-800 border-2 border-blue-400":s.gradeLevel==="乙"?"bg-sky-100 text-sky-800 border-2 border-sky-400":s.gradeLevel==="丙"?"bg-amber-100 text-amber-800 border-2 border-amber-400":"bg-rose-100 text-rose-800 border-2 border-rose-400"}">
              ${s.hasScore===!1?$?"免":"缺":p(s.gradeLevel||"-")}
            </div>
            <div>
              <div class="font-bold text-slate-900">${s.hasScore===!1?$?"適性免測":"全科缺考":`${p(s.gradeLevel)}等`}</div>
              <div class="text-xs text-slate-500 mt-0.5">
                ${s.hasScore===!1?$?"學習中心個別化評量":"未有本次評量成績":s.gradeLevel==="優"?"表現優異 (90分以上)":s.gradeLevel==="甲"?"表現良好 (80-89分)":s.gradeLevel==="乙"?"表現尚可 (70-79分)":s.gradeLevel==="丙"?"法定及格基準 (60-69分)":"需補救扶助 (未滿60分)"}
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
              <span class="text-xs font-bold font-mono text-emerald-800">${p(s.classRankInterval||(s.classRank?s.classRank+"名":"-"))}</span>
            </div>
            <div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200">
              <span class="text-xs text-blue-900 font-medium">年級序位 (10人)</span>
              <span class="text-xs font-bold font-mono text-blue-800">${p(s.schoolRankInterval||(s.schoolRank?s.schoolRank+"名":"-"))}</span>
            </div>
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2.5 flex justify-between">
            <span>班級：${b.studentCount||s.classSize||"-"} 人</span>
            <span class="font-mono text-slate-400">${s.schoolCohortLabel?`${s.schoolCohortLabel}評定`:"全校評定"}</span>
          </div>
        </div>

        <!-- 班級五標落點定位條 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">班級五標落點分佈</span>
            <span class="text-[11px] text-slate-400">${b.studentCount||0} 人統計</span>
          </div>
          <div class="my-2">
            ${Ke(s.averageScore,u)}
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-mono flex justify-between">
            <span>頂標: ${u.ding||0}</span>
            <span>均標: ${u.jun||0}</span>
            <span>底標: ${u.di||0}</span>
          </div>
        </div>
      </div>

      <!-- 各領域詳細成績表 -->
      <div class="student-print-table-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div class="student-print-table-header px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2">
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-slate-800 text-sm">各領域學科學習評量成績表</h3>
            <span class="text-[11px] bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-medium">年標參照：${p(f)}</span>
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
              ${(()=>{let y=!1;const k=()=>{if(s.socialAverage===null||s.socialAverage===void 0)return"";y=!0;const S=Number(Number(s.socialAverage).toFixed(1));let m="丁";S>=90?m="優":S>=80?m="甲":S>=70?m="乙":S>=60&&(m="丙");const v=x(d.classAverage?.社平??d.classAverage?.社會),L=x(d.schoolAverage?.社平??d.schoolAverage?.社會),R=x(d.classHigh?.社平??d.classHigh?.社會),T=x(d.schoolHigh?.社平??d.schoolHigh?.社會),E=x(d.classLow?.社平??d.classLow?.社會),M=x(d.schoolLow?.社平??d.schoolLow?.社會);return`
                    <tr class="bg-amber-50/50 font-medium">
                      <td class="px-4 py-3.5 font-bold text-amber-900 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>社會領域平均 (地理/歷史/公民)</span>
                      </td>
                      <td class="px-3 py-3.5 text-center font-mono font-black text-base ${S>=60?"text-amber-900":"text-rose-600"}">${S}</td>
                      <td class="px-3 py-3.5 text-center">${Z(m)}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${v}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${L}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${R}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${T}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${E}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${M}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${S>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                      </td>
                    </tr>
                  `},C=r.map(S=>{const m=s.subjects[S],v=m!=null,L=v?m:null;let R="丁";v&&(L>=90?R="優":L>=80?R="甲":L>=70?R="乙":L>=60&&(R="丙"));const T=h[S]||{},E=d.classAverage?x(d.classAverage[S]):T.average?x(T.average):"-",M=d.schoolAverage?x(d.schoolAverage[S]):"-",H=d.classHigh?x(d.classHigh[S]):T.qian?x(T.qian):"-",ie=d.schoolHigh?x(d.schoolHigh[S]):"-",_=d.classLow?x(d.classLow[S]):T.hou?x(T.hou):"-",J=d.schoolLow?x(d.schoolLow[S]):"-",O=`
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="px-4 py-3.5 font-medium text-slate-900">${p(S)}</td>
                      <td class="px-3 py-3.5 text-center font-mono font-bold text-base ${v?L>=60?"text-slate-900":"text-rose-600":$?"text-slate-400":"text-amber-700"}">
                        ${v?L:$?'<span class="text-xs font-sans text-slate-400 font-normal">免測/個別評量</span>':'<span class="text-xs font-sans text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">缺考</span>'}
                      </td>
                      <td class="px-3 py-3.5 text-center">
                        ${v?Z(R):$?'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">特教適性</span>':'<span class="text-xs text-slate-400 font-normal">-</span>'}
                      </td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${E}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${M}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${H}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${ie}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${_}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${J}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${v?L>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':$?'<span class="text-xs text-slate-400">個別化評定</span>':'<span class="text-xs font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">缺考未計</span>'}
                      </td>
                    </tr>
                  `;return S==="公民"?O+k():O}).join(""),N=!y&&s.socialAverage!==null&&s.socialAverage!==void 0?k():"";return C+N})()}
              ${w&&s.scienceAverage!==null&&s.scienceAverage!==void 0?(()=>{const y=Number(Number(s.scienceAverage).toFixed(1));let k="丁";y>=90?k="優":y>=80?k="甲":y>=70?k="乙":y>=60&&(k="丙");const C=x(d.classAverage?.自平??d.classAverage?.自然),N=x(d.schoolAverage?.自平??d.schoolAverage?.自然),S=x(d.classHigh?.自平??d.classHigh?.自然),m=x(d.schoolHigh?.自平??d.schoolHigh?.自然),v=x(d.classLow?.自平??d.classLow?.自然),L=x(d.schoolLow?.自平??d.schoolLow?.自然);return`
                  <tr class="bg-cyan-50/50 font-medium">
                    <td class="px-4 py-3.5 font-bold text-cyan-900 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span>自然科學領域平均 (理化3/地科2/生物1)</span>
                    </td>
                    <td class="px-3 py-3.5 text-center font-mono font-black text-base ${y>=60?"text-cyan-900":"text-rose-600"}">${y}</td>
                    <td class="px-3 py-3.5 text-center">${Z(k)}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${C}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${N}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${S}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${m}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${v}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${L}</td>
                    <td class="px-3 py-3.5 text-center">
                      ${y>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                    </td>
                  </tr>
                `})():""}
              <!-- 領域總分與總平均匯總行 -->
              ${d.classAverage?.總分!==void 0?`
                <tr class="bg-slate-100/70 font-semibold border-t-2 border-slate-300">
                  <td class="px-4 py-3 font-bold text-slate-800">領域總分</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${s.totalScore!==null&&s.totalScore!==void 0?s.totalScore:"-"}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-400">-</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(d.classAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(d.schoolAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(d.classHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(d.schoolHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(d.classLow?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(d.schoolLow?.總分)}</td>
                  <td class="px-3 py-3 text-center text-xs text-slate-400 font-normal">五領域加總</td>
                </tr>
                <tr class="bg-slate-100/70 font-semibold">
                  <td class="px-4 py-3 font-bold text-slate-800">評量平均</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${s.averageScore!==null&&s.averageScore!==void 0?s.averageScore:"-"}</td>
                  <td class="px-3 py-3 text-center">${s.hasScore!==!1&&s.gradeLevel?Z(s.gradeLevel):$?'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>':'<span class="text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold border border-amber-200">缺考</span>'}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(d.classAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(d.schoolAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(d.classHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(d.schoolHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(d.classLow?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(d.schoolLow?.平均)}</td>
                  <td class="px-3 py-3 text-center">
                    ${s.averageScore!==null&&s.averageScore!==void 0?s.averageScore>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':"-"}
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
    `,document.getElementById("exam-selector")?.addEventListener("change",y=>{c=Number(y.target.value)||0,l()}),document.getElementById("btn-print-report")?.addEventListener("click",()=>{window.print()}),n(s,a,r,h)}function n(s,r,b,u){if(typeof Chart>"u")return;ae&&(ae.destroy(),ae=null),ne&&(ne.destroy(),ne=null);const h=document.getElementById("chart-radar");if(h){const f=b.map(w=>s.subjects[w]||0),x=b.map(w=>u[w]&&u[w].average||70);ae=new Chart(h,{type:"radar",data:{labels:b,datasets:[{label:"個人得分",data:f,fill:!0,backgroundColor:"rgba(13, 122, 95, 0.2)",borderColor:"#0D7A5F",pointBackgroundColor:"#0D7A5F",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#0D7A5F"},{label:"班級平均",data:x,fill:!0,backgroundColor:"rgba(71, 85, 105, 0.1)",borderColor:"#64748B",borderDash:[4,4],pointBackgroundColor:"#64748B"}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{r:{suggestedMin:30,suggestedMax:100,ticks:{stepSize:20}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}const d=document.getElementById("chart-trend");if(d){const f=r.map($=>$.examName),x=r.map($=>$.averageScore),w=r.map($=>{const y=$.classStats||{};return y.fiveBenchmarks&&y.fiveBenchmarks.jun||70});ne=new Chart(d,{type:"line",data:{labels:f,datasets:[{label:"個人平均分",data:x,borderColor:"#1D4ED8",backgroundColor:"#1D4ED8",tension:.3,borderWidth:3,pointRadius:5},{label:"班級均標 (P50)",data:w,borderColor:"#94A3B8",backgroundColor:"#94A3B8",borderDash:[5,5],tension:.2,pointRadius:3}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{suggestedMin:40,suggestedMax:100,ticks:{stepSize:10}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}}l()}function ue(){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}年${o}月${i}日`}function Ve(e){if(e.identity==="學中")return"該生平時上課積極配合特教資源班適性課程，學習態度認真努力，各領域評量皆展現正向學習動機，期勉維持良好學習步調，持續突破自我！";if(e.identity==="體育班")return"該生兼顧體育專項訓練與學業課程，展現堅毅抗壓之運動員精神，學習態度專注踏實，期勉在競賽與課業雙軌上精益求精、為校爭光！";const t=e.averageScore||0;return t>=90?"該生本階段學習態度主動嚴謹，各領域核心素養精熟扎實，邏輯思維與學科探究能力俱佳，表現卓越非凡，值得高度嘉許！期勉持之以恆、勇於探索新知！":t>=80?"該生在校品學兼優、學習態度專注穩定，已確實掌握各領域核心概念，表現十分良好！若能在弱項科目更深入鑽研錯題盲點，必定能再攀高峰！":t>=70?"該生具備良好之學科基礎能力，上課規矩良好、能按時完成作業。建議課後多花時間統整觀念脈絡，主動向師長請教，學習成效必能大幅躍進！":t>=60?"該生各領域皆已達到法定及格基準，學習態度和善。建議妥善規劃每日課後複習時間，建立規律筆記習慣，循序漸進加強熟練度，期待更優異的表現！":"該生部分學科概念尚待強化，請家長毋須過度焦慮，建議與導師共同配合，落實課後錯題訂正並善用校內學習扶助輔導資源，攜手協助孩子重拾信心與成就感！"}function We(e,t){const o=t.ding||90,i=t.qian||80,a=t.jun||70,c=t.hou||60,l=t.di||50,n=Math.max(0,Math.min(100,e||0)),s=n;let r="均標附近";return n>=o?r="【頂標以上 (前12%)】表現精熟卓越":n>=i?r="【前標與頂標之間】表現良好":n>=a?r="【均標與前標之間】表現尚可":n>=c?r="【後標與均標之間】建議加強複習":n>=l?r="【底標與後標之間】需重點關懷":r="【底標以下】需積極參與補強扶助",`
    <div class="my-1.5 px-1">
      <div class="relative w-full h-5 bg-slate-100 rounded border border-slate-300 flex overflow-hidden">
        <!-- 5個區間 -->
        <div class="h-full bg-rose-50 border-r border-rose-200 flex items-center justify-center text-[9px] text-rose-700 font-mono" style="width: ${Math.max(10,l)}%;">底標 ${l}</div>
        <div class="h-full bg-amber-50 border-r border-amber-200 flex items-center justify-center text-[9px] text-amber-700 font-mono" style="width: ${Math.max(10,c-l)}%;">後標 ${c}</div>
        <div class="h-full bg-slate-50 border-r border-slate-300 flex items-center justify-center text-[9px] text-slate-700 font-mono" style="width: ${Math.max(10,a-c)}%;">均標 ${a}</div>
        <div class="h-full bg-blue-50 border-r border-blue-200 flex items-center justify-center text-[9px] text-blue-700 font-mono" style="width: ${Math.max(10,i-a)}%;">前標 ${i}</div>
        <div class="h-full bg-emerald-50 flex items-center justify-center text-[9px] text-emerald-800 font-mono flex-1">頂標 ${o}</div>
        
        <!-- 個人分數定位針 -->
        <div class="absolute top-0 bottom-0 w-1 bg-red-600 shadow-sm z-10" style="left: ${s}%;"></div>
      </div>
      <div class="flex justify-between items-center text-[10px] text-slate-600 mt-1">
        <span>個人落點診斷：<b class="text-slate-900">${r}</b></span>
        <span class="font-mono text-red-600 font-bold">▲ 學生五科平均: ${e} 分</span>
      </div>
    </div>
  `}function Ye(e){return["國文","英文","英語"].includes(e)?"語文領域":["數學"].includes(e)?"數學領域":["地理","歷史","公民"].includes(e)?"社會領域":["生物","理化","地科"].includes(e)?"自然科學領域":"專業學科"}function je(e,t,o,i,a={}){const{includeRank:c=!0,includeTeacherNote:l=!0,printDate:n=ue(),customNote:s=""}=a,r=Array.isArray(t.subjects)?t.subjects:t.subjects?Object.keys(t.subjects):Object.keys(e.scores||{}),b=t.fiveBenchmarks||{},u=t.totalStudents||(t.students?t.students.length:0),h=s||Ve(e),d=t.className||o||"",f=/[九9]/.test(t.gradeSheet||"")||/[九9]/.test(t.gradeLevelLabel||"")||!t.gradeSheet&&/^([九9])\s*年|^9\d{2}$/.test(String(d).trim())||r.includes("地科"),x=["學中","特教","特教班","秀才"].includes(e.identity||t.identity);let w="一般生";return e.identity==="體育班"?w="體育班專項生":e.identity==="學中"?w="學習中心適性生":["特教","特教班","秀才"].includes(e.identity)?w="特教適性生":e.identity&&e.identity!=="*"&&(w=e.identity),`
    <div class="a4-report-card-page font-sans text-slate-900 bg-white flex flex-col justify-between" style="width: 100%; box-sizing: border-box;">
      
      <div>
        <!-- 1. 學校標頭與基本資料 -->
        <div class="text-center pb-1.5 border-b-2 border-slate-900 mb-1.5">
          <div class="flex items-center justify-center gap-2">
            <span class="text-xl font-black tracking-wider text-slate-900">桃園市立大溪國民中學</span>
          </div>
          <div class="text-sm font-bold tracking-wide text-slate-800 mt-0.5">
            ${p(t.academicYear||"114學年度")}${p(t.semester||"第1學期")} ${p(t.examName||"定期評量")} 個人成績通知單
          </div>
          
          <!-- 學生資訊條 -->
          <div class="mt-1.5 pt-1 border-t border-slate-300 grid grid-cols-6 gap-1 text-[11px] text-slate-700 text-left bg-slate-50/80 p-1.5 rounded border">
            <div>班級：<b class="text-slate-900">${p(o)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono text-xs">${e.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900 text-xs">${p(e.name)}</b></div>
            <div>學號：<span class="font-mono">${p(e.studentId||"-")}</span></div>
            <div>身分：<span class="${e.identity==="體育班"?"text-blue-700 font-bold":e.identity==="學中"?"text-amber-700 font-bold":"text-slate-700"}">${w}</span></div>
            <div class="text-right">導師：<span>${p(i)}</span></div>
          </div>
        </div>

        <!-- 2. 評量總成績綜合評定 (四大綜合指標卡) -->
        <div class="border border-slate-300 rounded-lg p-1.5 mb-1.5 bg-slate-50/50">
          <div class="grid grid-cols-4 gap-2 text-center">
            <div class="border-r border-slate-300 pr-1">
              <div class="text-[10px] text-slate-500 font-medium">五大領域總分</div>
              <div class="text-lg font-black font-mono text-slate-900 mt-0.5">${e.totalScore}</div>
              <div class="text-[9px] text-slate-400">標準領域總計</div>
            </div>
            <div class="border-r border-slate-300 pr-1">
              <div class="text-[10px] text-slate-500 font-medium">五大領域平均</div>
              <div class="text-lg font-black font-mono text-slate-900 mt-0.5">${e.averageScore}</div>
              <div class="text-[9px] text-slate-400">及格基準 60.0 分</div>
            </div>
            <div class="border-r border-slate-300 pr-1">
              <div class="text-[10px] text-slate-500 font-medium">評量法定等第</div>
              <div class="text-lg font-black mt-0.5 ${e.hasScore===!1?"text-slate-500":e.gradeLevel==="優"?"text-emerald-700":e.gradeLevel==="甲"?"text-blue-700":e.gradeLevel==="乙"?"text-sky-700":e.gradeLevel==="丙"?"text-amber-700":"text-rose-700"}">
                ${e.hasScore!==!1&&e.gradeLevel?`${p(e.gradeLevel)} 等`:x?"免測":"缺考"}
              </div>
              <div class="text-[9px] text-slate-400">教育部第10條第3項</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 font-medium">序位區間 / 常模落點</div>
              <div class="text-xs font-bold font-mono text-slate-800 mt-0.5">
                ${c?`<div>班：<span class="text-slate-900 font-bold">${e.classRankInterval||(e.classRank?`第${e.classRank}名`:"-")}</span></div><div class="text-[10.5px] font-normal text-slate-600">校：${e.schoolRankInterval||(e.schoolRank?`第${e.schoolRank}名`:"-")}</div>`:'<span class="text-[11px] text-slate-500 font-normal">參見五標常模落點條</span>'}
              </div>
              <div class="text-[9px] text-slate-400">全班共 ${u} 人</div>
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
              ${(()=>{let $=!1;const y=()=>{if(e.socialAverage===null||e.socialAverage===void 0)return"";$=!0;const N=Number(Number(e.socialAverage).toFixed(1));let S="丁";N>=90?S="優":N>=80?S="甲":N>=70?S="乙":N>=60&&(S="丙");let m="-";return t.benchmarks?.classAverage?.社會!==void 0?m=Number(t.benchmarks.classAverage.社會).toFixed(1):t.subjectAverages&&t.subjectAverages.地理!==void 0&&t.subjectAverages.歷史!==void 0&&t.subjectAverages.公民!==void 0&&(m=(((Number(t.subjectAverages.地理)||0)+(Number(t.subjectAverages.歷史)||0)+(Number(t.subjectAverages.公民)||0))/3).toFixed(1)),`
                    <tr class="bg-amber-50/40 font-medium">
                      <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] font-bold text-amber-900">社會領域</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-amber-900">社會科平均</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-black ${N<60?"text-rose-600":"text-slate-900"}">${N}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        <span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${S==="優"?"bg-emerald-100 text-emerald-800":S==="甲"?"bg-blue-100 text-blue-800":S==="乙"?"bg-sky-100 text-sky-800":S==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${S}等</span>
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${N>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${m}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">採地理、歷史、公民三科平均計算</td>
                    </tr>
                  `},k=r.map(N=>{const S=e.scores[N],m=S!=null,v=m?Number(S):null;let L="丁";m&&(v>=90?L="優":v>=80?L="甲":v>=70?L="乙":v>=60&&(L="丙"));const R=t.benchmarks?.classAverage,T=R&&R[N]!==void 0?Number(R[N]).toFixed(1):t.subjectAverages&&t.subjectAverages[N]!==void 0?t.subjectAverages[N]:"-";let E="";m?v>=90?E="核心素養精熟，表現優異卓越":v>=80?E="學科概念清晰，表現穩定良好":v>=70?E="具備基礎知能，建議加強深究":v>=60?E="達法定及格標準，宜針對錯題複習":E="未達及格基準，建議落實課後學習扶助":E=x?"學習中心個別化適性評量（段考免測）":"該科缺考未受試（未計入該科成績）";const M=`
                    <tr class="hover:bg-slate-50 ${m&&v<60?"bg-rose-50/20":""}">
                      <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] text-slate-600">${Ye(N)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-slate-800">${p(N)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-bold ${m?v<60?"text-rose-600":"text-slate-900":x?"text-slate-400":"text-amber-700"}">
                        ${m?v:x?"-":'<span class="text-[10px] font-bold text-amber-700">缺考</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${m?`<span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${L==="優"?"bg-emerald-100 text-emerald-800":L==="甲"?"bg-blue-100 text-blue-800":L==="乙"?"bg-sky-100 text-sky-800":L==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${L}等</span>`:x?'<span class="text-[10px] text-slate-400">適性</span>':'<span class="text-[10px] text-slate-400">-</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${m?v>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>':x?'<span class="text-[10px] text-slate-400">個別評量</span>':'<span class="text-[10px] font-bold text-amber-700">缺考</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${T}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">${E}</td>
                    </tr>
                  `;return N==="公民"?M+y():M}).join(""),C=!$&&e.socialAverage!==null&&e.socialAverage!==void 0?y():"";return k+C})()}
              ${f&&e.scienceAverage!==null&&e.scienceAverage!==void 0?(()=>{const $=Number(Number(e.scienceAverage).toFixed(1));let y="丁";$>=90?y="優":$>=80?y="甲":$>=70?y="乙":$>=60&&(y="丙");let k="-";return t.benchmarks?.classAverage?.自然!==void 0?k=Number(t.benchmarks.classAverage.自然).toFixed(1):t.subjectAverages&&t.subjectAverages.理化!==void 0&&t.subjectAverages.地科!==void 0&&t.subjectAverages.生物!==void 0&&(k=(((Number(t.subjectAverages.理化)||0)*3+(Number(t.subjectAverages.地科)||0)*2+(Number(t.subjectAverages.生物)||0)*1)/6).toFixed(1)),`
                  <tr class="bg-cyan-50/40 font-medium">
                    <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] font-bold text-cyan-900">自然科學領域</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-cyan-900">自然科平均</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-black ${$<60?"text-rose-600":"text-slate-900"}">${$}</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      <span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${y==="優"?"bg-emerald-100 text-emerald-800":y==="甲"?"bg-blue-100 text-blue-800":y==="乙"?"bg-sky-100 text-sky-800":y==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${y}等</span>
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      ${$>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>'}
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${k}</td>
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
            <span class="text-[9px] text-slate-500 font-normal">全班 ${u} 人統計基準</span>
          </div>
          ${We(e.averageScore,b)}
        </div>

        <!-- 5. 評量等第說明法規參照 (小字版) -->
        <div class="text-[9.5px] text-slate-600 bg-slate-50 border border-slate-300 rounded p-1 mb-1.5 leading-snug">
          <span class="font-bold text-slate-800">【教育部國民小學及國民中學學生學習評量辦法規範】</span>
          <b>優等</b> (90分以上)：表現優異 ｜ <b>甲等</b> (80~89分)：表現良好 ｜ <b>乙等</b> (70~79分)：表現尚可 ｜ <b>丙等</b> (60~69分)：<b>法定及格基準</b> ｜ <b>丁等</b> (未滿60分)：未達法定及格基準
        </div>

        <!-- 6. 導師個別評語與學習勉勵 -->
        ${l?`
          <div class="border border-slate-300 rounded-lg p-1.5 mb-1.5 bg-white">
            <div class="text-[10px] font-bold text-slate-800 mb-0.5 flex justify-between items-center">
              <span>📝 導師個別學習回饋與勉勵：</span>
              <span class="text-[9px] text-slate-500 font-normal">導師簽名/蓋章：<span class="border-b border-slate-600 inline-block w-24"></span></span>
            </div>
            <div class="text-[11px] text-slate-700 min-h-[26px] leading-relaxed italic px-1">
              ${p(h)}
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
            <div>班級：<b class="text-slate-900">${p(o)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono">${e.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900">${p(e.name)}</b></div>
            <div>總平均：<b class="font-mono text-slate-900">${e.hasScore!==!1&&e.averageScore!==null&&e.averageScore!==void 0?`${e.averageScore} 分 (${e.gradeLevel}等)`:x?"適性免測":"全科缺考"}</b></div>
            <div>印表日期：<span class="font-mono text-[10px] text-slate-500">${n}</span></div>
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
  `}function Ne(e,t,o,i,a=null){let c=!0,l=!0,n=a!==null?i.findIndex(u=>u.seatNo===a):0;n<0&&(n=0);let s=a===null;const r=document.createElement("div");r.id="report-card-modal-wrapper",r.className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-2 sm:p-4 backdrop-blur-sm print:hidden";function b(){const u=i.length,h=i[n]||i[0],d=je(h,e,t,o,{includeRank:c,includeTeacherNote:l,printDate:ue()});r.innerHTML=`
      <div class="bg-white w-full max-w-5xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        <!-- 頂部控制列 -->
        <div class="px-6 py-3.5 bg-slate-900 text-white flex flex-wrap justify-between items-center gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">📄</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base leading-tight">個人成績通知單（A4 批量/個別列印）</h3>
              <p class="text-slate-400 text-xs mt-0.5">【${p(t)}】${p(e.examName||"定期評量")} ｜ 一人一張 A4 格式</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button id="btn-do-print" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow flex items-center gap-1.5 transition">
              <span>🖨️</span>
              <span>${s?`立即列印全班 (${u} 人 / ${u} 頁 A4)`:`列印當前學生 (${h.seatNo}號 ${h.name})`}</span>
            </button>
            <button id="btn-close-modal" class="p-2 text-slate-400 hover:text-white rounded-lg transition text-lg leading-none">✕</button>
          </div>
        </div>

        <!-- 輔助設定與切換列 -->
        <div class="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
          <!-- 選項開關 -->
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-1.5 cursor-pointer font-medium hover:text-slate-900">
              <input type="checkbox" id="chk-include-rank" ${c?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
              <span>包含班排與校排 PR 值</span>
            </label>
            <label class="flex items-center gap-1.5 cursor-pointer font-medium hover:text-slate-900">
              <input type="checkbox" id="chk-include-note" ${l?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
              <span>包含導師個別勉勵評語</span>
            </label>
          </div>

          <!-- 列印模式與學生切換 -->
          <div class="flex items-center gap-2">
            <div class="flex items-center bg-white border border-slate-300 rounded-lg p-0.5 shadow-sm">
              <button id="btn-mode-all" class="px-2.5 py-1 rounded text-xs font-semibold ${s?"bg-emerald-700 text-white":"text-slate-600 hover:bg-slate-50"}">
                全班列印 (${u}人)
              </button>
              <button id="btn-mode-single" class="px-2.5 py-1 rounded text-xs font-semibold ${s?"text-slate-600 hover:bg-slate-50":"bg-emerald-700 text-white"}">
                單生列印
              </button>
            </div>

            <!-- 單生切換下拉與按鈕 -->
            <div class="flex items-center gap-1 ml-2">
              <button id="btn-prev-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="上一位">◀</button>
              <select id="select-preview-student" class="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-medium">
                ${i.map((f,x)=>`
                  <option value="${x}" ${x===n?"selected":""}>
                    ${f.seatNo}號 ${p(f.name)}
                  </option>
                `).join("")}
              </select>
              <button id="btn-next-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="下一位">▶</button>
              <span class="text-slate-400 text-[11px] ml-1 font-mono">${n+1}/${u}</span>
            </div>
          </div>
        </div>

        <!-- 預覽容器 (模擬真實 A4 紙張白底陰影) -->
        <div class="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-200/80 flex justify-center">
          <div class="bg-white shadow-xl rounded-md border border-slate-300 w-full max-w-[210mm] p-4 sm:p-5 text-slate-900">
            ${d}
          </div>
        </div>

        <!-- 底部提示列 -->
        <div class="px-6 py-2 bg-slate-50 border-t border-slate-200 text-slate-500 text-[11px] flex justify-between items-center">
          <span>💡 提示：點選「立即列印」後，瀏覽器列印設定請確認選擇<b>「A4」尺寸</b>與<b>「預設邊界」</b>，系統已設定標準分頁，全班將精確印出 ${s?u:1} 張 A4。</span>
          <span class="font-mono text-slate-400">大溪國中成績查詢系統・合規列印模組</span>
        </div>
      </div>
    `,document.getElementById("btn-close-modal")?.addEventListener("click",()=>{r.remove()}),document.getElementById("chk-include-rank")?.addEventListener("change",f=>{c=f.target.checked,b()}),document.getElementById("chk-include-note")?.addEventListener("change",f=>{l=f.target.checked,b()}),document.getElementById("btn-mode-all")?.addEventListener("click",()=>{s=!0,b()}),document.getElementById("btn-mode-single")?.addEventListener("click",()=>{s=!1,b()}),document.getElementById("select-preview-student")?.addEventListener("change",f=>{n=Number(f.target.value)||0,b()}),document.getElementById("btn-prev-stu")?.addEventListener("click",()=>{n>0&&(n--,b())}),document.getElementById("btn-next-stu")?.addEventListener("click",()=>{n<u-1&&(n++,b())}),document.getElementById("btn-do-print")?.addEventListener("click",()=>{Je(s?i:[h],e,t,o,{includeRank:c,includeTeacherNote:l,printDate:ue()})})}document.body.appendChild(r),b()}function Je(e,t,o,i,a){let c=document.getElementById("print-report-cards-container");c||(c=document.createElement("div"),c.id="print-report-cards-container",document.body.appendChild(c)),c.innerHTML=e.map(l=>je(l,t,o,i,a)).join(""),document.body.classList.add("printing-report-cards"),setTimeout(()=>{window.print(),setTimeout(()=>{document.body.classList.remove("printing-report-cards"),c&&(c.innerHTML="")},1e3)},250)}const Re=Object.freeze([{label:"100 分",min:100,max:100},...Array.from({length:10},(e,t)=>{const o=90-t*10;return{label:`${o}～${o+9} 分`,min:o,max:o+10}})].map(Object.freeze));function Qe(e,t){return t.map(o=>{const i=Re.map(r=>({...r,count:0})),a=[];let c=0,l=0;for(const r of e){const b=(r.assessmentScores??r.scores)?.[o];if(b==null||b==="")c++;else if(typeof b!="number"||!Number.isFinite(b)||b<0||b>100)l++;else{a.push(b);const u=b===100?0:10-Math.floor(b/10);i[u].count++}}const n=a.length,s=a.filter(r=>r>=60).length;return{subject:o,bands:i,validCount:n,unassessedCount:c,invalidCount:l,passCount:s,average:n?a.reduce((r,b)=>r+b,0)/n:null,highest:n?Math.max(...a):null,lowest:n?Math.min(...a):null,passRate:n?s/n*100:null}})}const le=e=>e===null?"—":Number(e.toFixed(2)).toString(),xe=e=>e===null?"—":`${Number(e.toFixed(1))}%`;function Ze(e,t,o,i={}){const a=Qe(t,o),c=a.some(s=>s.invalidCount>0);e.innerHTML=`
    <div class="score-analysis-heading">
      <div>
        <p class="score-analysis-eyebrow">段考統計・全班 ${t.length} 人</p>
        <h3 id="score-analysis-title">各科分數區間分析</h3>
        <p>查看各分數區間人數與各科表現。本區統計完整班級，不受下方名冊搜尋影響。</p>
      </div>
      ${o.length?`<label class="score-subject-picker" for="score-distribution-subject">查看科目
        <select id="score-distribution-subject">${o.map((s,r)=>`<option value="${r}" ${s===i.selectedSubject?"selected":""}>${p(s)}</option>`).join("")}</select>
      </label>`:""}
    </div>
    <div id="score-distribution-detail" aria-live="polite"></div>
    <div class="score-matrix-heading"><h4>各科區間人數總表</h4><span>單位：人；表格可左右滑動</span></div>
    <div class="score-matrix-scroll" tabindex="0" role="region" aria-label="各科區間人數總表，可左右捲動">
      <table class="score-matrix">
        <caption class="sr-only">本次段考各科分數區間人數、有效人數、未評量人數、平均與及格率</caption>
        <thead><tr><th scope="col">科目</th>${Re.map(s=>`<th scope="col">${s.label}</th>`).join("")}<th scope="col">有效人數</th><th scope="col">未評量</th>${c?'<th scope="col">待確認</th>':""}<th scope="col">平均</th><th scope="col">及格率</th></tr></thead>
        <tbody>${a.map(s=>`<tr data-subject="${p(s.subject)}">
          <th scope="row">${p(s.subject)}</th>
          ${s.bands.map((r,b)=>`<td data-band="${b}" data-count="${r.count}" class="${r.count?"score-count-present":"score-count-empty"}">${r.count}</td>`).join("")}
          <td data-stat="valid">${s.validCount}</td><td data-stat="unassessed">${s.unassessedCount}</td>${c?`<td data-stat="invalid">${s.invalidCount}</td>`:""}<td>${le(s.average)}</td><td>${xe(s.passRate)}</td>
        </tr>`).join("")}</tbody>
      </table>
    </div>
    <p class="score-analysis-footnote">100 分單獨計數，其餘每 10 分一區；例如「90～99 分」含 90 分以上、未滿 100 分的小數成績。0 分計入統計；未評量${c?"及待確認資料":""}不列入平均與及格率，及格基準為 60 分。</p>
  `;function l(s){const r=a[s],b=e.querySelector("#score-distribution-detail");if(!r){b.innerHTML='<p class="score-analysis-empty">本次段考尚無可分析科目。</p>';return}b.innerHTML=`
      <div class="score-subject-summary">
        <div><span>有效成績／未評量</span><strong>${r.validCount}<small> 人 ／ ${r.unassessedCount} 人</small></strong></div>
        <div><span>${p(r.subject)}平均</span><strong>${le(r.average)}<small> 分</small></strong></div>
        <div><span>最高／最低</span><strong>${le(r.highest)}<small> ／ ${le(r.lowest)} 分</small></strong></div>
        <div><span>及格率</span><strong>${xe(r.passRate)}</strong></div>
      </div>
      ${r.invalidCount?`<p class="score-analysis-empty">本科技分另有 ${r.invalidCount} 筆資料待確認，請洽註冊組。</p>`:""}
      ${r.validCount?"":'<p class="score-analysis-empty">本科目前尚無有效成績，區間人數均為 0。</p>'}
      <ol class="score-band-chart" aria-label="${p(r.subject)}各分數區間人數">
        ${r.bands.map(u=>{const h=r.validCount?u.count/r.validCount*100:0;return`<li><span class="score-band-label">${u.label}</span><span class="score-band-track" aria-hidden="true"><span style="width:${h}%"></span></span><span class="score-band-count">${u.count} 人</span><span class="score-band-percent">${xe(h)}</span></li>`}).join("")}
      </ol>
    `}const n=Math.max(0,o.indexOf(i.selectedSubject));l(n),e.querySelector("#score-distribution-subject")?.addEventListener("change",s=>{const r=Number(s.target.value);l(r),i.onSubjectChange?.(o[r])})}function Ie(e,t={}){const{title:o="班級",isGradeWide:i=!1,examList:a=[],studentResults:c=[],onPrint:l=null}=t;let n="rankAvg",s=!0,r="",b="all";function u(){let d=c.slice();const f=(r||"").trim().toLowerCase();if(f)if(/^\d{1,2}$/.test(f)){const x=Number(f);d=d.filter(w=>Number(w.seatNo)===x)}else/^\d{3,}$/.test(f)?d=d.filter(x=>x.studentId&&String(x.studentId).toLowerCase().includes(f)||String(x.seatNo)===f):d=d.filter(x=>x.name&&x.name.toLowerCase().includes(f)||x.className&&x.className.toLowerCase().includes(f)||x.studentId&&String(x.studentId).toLowerCase().includes(f)||`${x.seatNo}號`===f);return d.sort((x,w)=>{if(n==="rankAvg")return x.rankAvg===null?1:w.rankAvg===null?-1:s?x.rankAvg-w.rankAvg:w.rankAvg-x.rankAvg;if(n==="seatNo")return x.className!==w.className?x.className.localeCompare(w.className,"zh-Hant"):s?x.seatNo-w.seatNo:w.seatNo-x.seatNo;if(n==="className")return x.className!==w.className?s?x.className.localeCompare(w.className,"zh-Hant"):w.className.localeCompare(x.className,"zh-Hant"):x.seatNo-w.seatNo;if(n==="latestRank"){const $=a.length?a[a.length-1].examKey:"",y=x.examRanks?.[$],k=w.examRanks?.[$];return y==null?1:k==null?-1:s?y-k:k-y}return 0}),d}function h(){const d=a.filter(m=>b==="all"?!0:b==="7"?m.label.startsWith("7"):b==="8"?m.label.startsWith("8"):b==="9"?m.label.startsWith("9"):!0),f=u(),x=c.length,w=c.filter(m=>m.rankAvg!==null).length,$=c.length&&c[0].rankAvg!==null?c[0].rankAvg:"-",y=a.some(m=>m.label.startsWith("7")),k=a.some(m=>m.label.startsWith("8")),C=a.some(m=>m.label.startsWith("9")),N=m=>m.length?m.map(v=>{const L=d.map(E=>{const M=v.examRanks?.[E.examKey];if(M==null)return'<td class="px-2 py-2 text-center text-xs text-slate-300 font-mono">-</td>';let H="text-slate-700";return M<=5?H="bg-amber-100 text-amber-950 font-black border border-amber-300 rounded px-1.5 py-0.5 shadow-2xs":M<=20?H="bg-blue-50 text-blue-900 font-bold border border-blue-200 rounded px-1.5 py-0.5":M<=50&&(H="bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 rounded px-1 py-0.5"),`
          <td class="px-2 py-2 text-center text-xs font-mono font-medium">
            <span class="${H}">${M}</span>
          </td>
        `}).join("");let R=`<span class="font-mono text-sm font-bold text-slate-600">${v.overallRank}</span>`;v.overallRank===1?R='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-950 font-black text-xs border border-amber-300 shadow-xs">🥇 1</span>':v.overallRank===2?R='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-900 font-black text-xs border border-slate-300 shadow-xs">🥈 2</span>':v.overallRank===3?R='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 font-black text-xs border border-amber-200 shadow-xs">🥉 3</span>':typeof v.overallRank=="number"&&v.overallRank<=10&&(R=`<span class="inline-block px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-900 font-bold text-xs border border-indigo-200">${v.overallRank}</span>`);let T='<span class="text-slate-300 text-xs">-</span>';if(a.length>=2&&v.rankAvg!==null){const E=a[a.length-1].examKey,M=v.examRanks?.[E];if(M!=null){const H=v.rankAvg-M;H>=15?T='<span class="inline-flex items-center text-emerald-700 font-bold text-xs bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200" title="最新段考優於歷史平均 15 名以上">↗ 大幅進步</span>':H>=5?T='<span class="inline-flex items-center text-emerald-600 font-semibold text-xs" title="最新段考有所進步">↗ 成長中</span>':H<=-15?T='<span class="inline-flex items-center text-rose-700 font-bold text-xs bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200" title="最新段考落後歷史平均 15 名以上">↘ 需關懷</span>':H<=-5?T='<span class="inline-flex items-center text-amber-700 text-xs" title="最新段考有些微波動">↘ 略退步</span>':T='<span class="inline-flex items-center text-slate-500 text-xs">→ 穩定</span>'}}return`
        <tr class="group hover:bg-slate-50/90 transition border-b border-slate-100">
          <td class="roster-sticky-col-1 bg-white group-hover:bg-slate-50 text-center px-2 py-2 border-r border-slate-200">
            ${R}
          </td>
          ${i?`
            <td class="px-2.5 py-2 text-center text-xs font-semibold text-indigo-900 bg-indigo-50/40 border-r border-slate-200 whitespace-nowrap">
              ${p(v.className)}
            </td>
          `:""}
          <td class="${i?"":"roster-sticky-col-2"} bg-white group-hover:bg-slate-50 text-center font-mono font-bold text-slate-800 border-r border-slate-200 px-2 py-2 text-xs sm:text-sm">
            ${v.seatNo}
          </td>
          <td class="${i?"":"roster-sticky-col-3"} bg-white group-hover:bg-slate-50 font-medium text-slate-900 border-r border-slate-300 roster-sticky-shadow px-3 py-2 whitespace-nowrap text-xs sm:text-sm">
            <span>${p(v.name)}</span>
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
            ${T}
          </td>
        </tr>
      `}).join(""):`
          <tr>
            <td colspan="${4+(i?1:0)+d.length+4}" class="py-10 text-center text-slate-400 text-sm">
              查無符合「<b class="text-slate-600">${p(r)}</b>」的座號或學生姓名
            </td>
          </tr>
        `,S=N(f);e.innerHTML=`
      <!-- 頂部資訊與控制列 -->
      <div class="cohort-ranks-wrapper mb-6">
        <!-- 核心統計指標 -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-5">
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">參測學生總數</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-slate-900">${x}</span>
              <span class="text-xs text-slate-500">位學生</span>
            </div>
            <div class="text-[11px] text-slate-400">具備歷次成績：${w} 人</div>
          </div>

          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">定期評量考次跨度</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-indigo-700">${a.length}</span>
              <span class="text-xs text-slate-500">場考次</span>
            </div>
            <div class="text-[11px] text-slate-400">跨越國一至最新段考</div>
          </div>

          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">最佳校排平均</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-amber-800">${$}</span>
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
                <span>${p(o)} 歷屆校排綜合追蹤大榜</span>
              </h3>
              <span id="cohort-count-badge" class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                共 ${f.length} 筆
              </span>
            </div>

            <!-- 控制群組 -->
            <div class="flex items-center gap-2.5 flex-wrap w-full md:w-auto">
              <!-- 年級考次篩選 -->
              ${y&&k?`
                <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-medium text-slate-700 shadow-2xs">
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${b==="all"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="all">全部考次</button>
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${b==="7"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="7">七年級</button>
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${b==="8"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="8">八年級</button>
                  ${C?`<button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${b==="9"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="9">九年級</button>`:""}
                </div>
              `:""}

              <!-- 排序切換鈕 -->
              <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-medium text-slate-700 shadow-2xs">
                <button type="button" id="btn-sort-rank" class="px-2.5 py-1 rounded-md transition ${n==="rankAvg"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依校排平均排序">🏆 綜合名次</button>
                <button type="button" id="btn-sort-seat" class="px-2.5 py-1 rounded-md transition ${n==="seatNo"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依座號排序">🔢 座號排序</button>
                <button type="button" id="btn-sort-latest" class="px-2.5 py-1 rounded-md transition ${n==="latestRank"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依最新段考校排排序">🚀 最新校排</button>
              </div>

              <!-- 搜尋框 -->
              <div class="w-full sm:w-44">
                <input type="search" id="cohort-search-input" value="${p(r)}" placeholder="🔍 輸入座號(如 5)或姓名..." class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" autocomplete="off" />
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
                  ${i?'<th class="bg-indigo-50 text-indigo-900 px-2.5 py-2 text-center border-r border-slate-200 w-[70px]">班級</th>':""}
                  <th class="${i?"":"roster-sticky-header-2"} bg-slate-100 text-slate-700 px-2 py-2 text-center border-r border-slate-200 w-[42px]">座號</th>
                  <th class="${i?"":"roster-sticky-header-3"} bg-slate-100 text-slate-800 px-3 py-2 text-left border-r border-slate-300 roster-sticky-shadow w-[78px]">姓名</th>
                  <th colspan="${d.length||1}" class="bg-indigo-50 text-indigo-950 px-2 py-2 text-center border-r border-indigo-200">
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
                  ${i?'<th class="bg-slate-50 text-center border-r border-slate-200 py-1.5">班級</th>':""}
                  <th class="${i?"":"roster-sticky-header-2"} bg-slate-50 text-center border-r border-slate-200 py-1.5">座號</th>
                  <th class="${i?"":"roster-sticky-header-3"} bg-slate-50 text-left border-r border-slate-300 roster-sticky-shadow py-1.5 px-3">姓名</th>
                  ${d.map(m=>`
                    <th class="px-2 py-1.5 text-center font-mono text-xs w-[54px] bg-indigo-50 text-indigo-900 border-r border-slate-200" title="${p(m.academicYear)} ${p(m.semester)} ${p(m.examName)}">
                      ${p(m.label)}
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
                ${S}
              </tbody>
            </table>
          </div>

          <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
            <span>📌 說明：各次段考真實校排由該次全體普通班/體育班常模精算；若學生當次未就讀、缺考或免測則以「-」標示。</span>
            <span class="font-mono text-slate-400">大溪國中教務處註冊組・歷屆學習歷程分析</span>
          </div>
        </div>
      </div>
    `,requestAnimationFrame(()=>{const m=e.querySelector(".roster-table"),v=m?.querySelector("thead tr:first-child");if(m&&v){const L=Math.round(v.getBoundingClientRect().height);L>0&&m.style.setProperty("--roster-head-row1-h",`${L}px`)}}),e.querySelector("#btn-sort-rank")?.addEventListener("click",()=>{n==="rankAvg"?s=!s:(n="rankAvg",s=!0),h()}),e.querySelector("#btn-sort-seat")?.addEventListener("click",()=>{n==="seatNo"?s=!s:(n="seatNo",s=!0),h()}),e.querySelector("#btn-sort-latest")?.addEventListener("click",()=>{n==="latestRank"?s=!s:(n="latestRank",s=!0),h()}),e.querySelectorAll(".btn-filter-grade").forEach(m=>{m.addEventListener("click",v=>{b=v.currentTarget.getAttribute("data-filter")||"all",h()})}),e.querySelector("#cohort-search-input")?.addEventListener("input",m=>{r=m.target.value;const v=u(),L=e.querySelector("#cohort-tbody"),R=e.querySelector("#cohort-count-badge");L&&(L.innerHTML=N(v)),R&&(R.textContent=`共 ${v.length} 筆`)}),e.querySelector("#btn-cohort-print")?.addEventListener("click",()=>{l?l():window.print()}),e.querySelector("#btn-cohort-export")?.addEventListener("click",()=>{Xe(o,d,u(),i)})}h()}function Xe(e,t,o,i){const a=["綜合排名"];i&&a.push("班級"),a.push("座號","姓名"),t.forEach(r=>a.push(r.label)),a.push("參測次數","校排加總","校排平均","總排名");const c=[a.join(",")];o.forEach(r=>{const b=[r.overallRank];i&&b.push(`"${r.className}"`),b.push(r.seatNo,`"${r.name}"`),t.forEach(u=>{const h=r.examRanks?.[u.examKey];b.push(h??"")}),b.push(`"${r.validCount}/${r.totalExams}"`,r.rankSum!==null?r.rankSum:"",r.rankAvg!==null?r.rankAvg:"",r.overallRank),c.push(b.join(","))});const l=new Blob(["\uFEFF"+c.join(`\r
`)],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(l),s=document.createElement("a");s.href=n,s.download=`${e}_歷屆校排綜合追蹤表_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)}function et(e){if(!e||!e.length)return{examList:[],studentResults:[]};const t=e.map(l=>{const n=(l.semester||"").includes("1")?"上":"下",s=(l.examName||"").match(/\d+/),r=s?s[0]:"1",u=`${(l.gradeLevelLabel||"").includes("七")?"7":(l.gradeLevelLabel||"").includes("八")?"8":"9"}${n}-${r}`;return{examKey:l.examKey,label:u,academicYear:l.academicYear,semester:l.semester,examName:l.examName,gradeLevelLabel:l.gradeLevelLabel}}),o=e[e.length-1],a=(o.students||[]).map(l=>{let n=0,s=0;const r={};e.forEach(u=>{const h=u.students.find(f=>l.studentId&&f.studentId?f.studentId===l.studentId:!l.studentId&&!f.studentId?f.seatNo===l.seatNo&&f.name===l.name:f.name===l.name&&f.seatNo===l.seatNo),d=h&&typeof h.schoolRank=="number"?h.schoolRank:null;r[u.examKey]=d,d!==null&&(n+=d,s++)});const b=s>0?Number((n/s).toFixed(2)):null;return{studentId:l.studentId,name:l.name,className:l.className||o.className,seatNo:l.seatNo,identity:l.identity,examRanks:r,validCount:s,totalExams:e.length,rankSum:s>0?n:null,rankAvg:b}});a.sort((l,n)=>l.rankAvg===null?1:n.rankAvg===null?-1:l.rankAvg-n.rankAvg);let c=1;return a.forEach((l,n)=>{l.rankAvg===null?l.overallRank="-":(n>0&&a[n-1].rankAvg===l.rankAvg?l.overallRank=a[n-1].overallRank:l.overallRank=c,c++)}),{examList:t,studentResults:a}}async function ve(e,t,o={}){const i=t.role==="admin"&&!!o.className,a=i?o.className:t.assignedClass;e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表讀取【${p(a||"負責班級")}】成績資料...</span>
    </div>
  `;const c=i?await q("getAdminClassData",{className:a}):await q("getTeacherClassData",{teacherAccount:t.account,className:a});if(!c.success){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入班級成績</h3>
        <p class="text-slate-600 mb-6 text-sm">${p(c.message||"查無此班級之成績紀錄")}</p>
        <button id="btn-teacher-retry" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">重新整理</button>
      </div>
    `,e.querySelector("#btn-teacher-retry")?.addEventListener("click",()=>{ve(e,t,o)});return}const{className:l,exams:n}=c,s=i?c.teacherName||o.teacherName||"":t.displayName||t.account;if(!n||n.length===0){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">目前尚無班級成績資料</h3>
        <p class="text-slate-600 text-sm">【${p(l)}】在試算表成績資料庫中暫無紀錄，請由教務處統一匯入。</p>
      </div>
    `;return}let r="single",b=n.length-1,u="",h="",d=!1;function f(){const x=n[b],w=x.subjects||[],$=x.fiveBenchmarks||{},y=x.gradeDistribution||{},k=x.students||[],C=(A,g)=>{const j=(g||"").trim().toLowerCase();if(!j)return A;if(/^\d{1,2}$/.test(j)){const B=Number(j);return A.filter(U=>Number(U.seatNo)===B)}return/^\d{3,}$/.test(j)?A.filter(B=>B.studentId&&String(B.studentId).toLowerCase().includes(j)||String(B.seatNo)===j):A.filter(B=>B.name&&B.name.toLowerCase().includes(j)||B.studentId&&String(B.studentId).toLowerCase().includes(j)||`${B.seatNo}號`===j)},N=C(k,u),S=k.filter(A=>A.hasScore!==!1),m=S.length?Number((S.reduce((A,g)=>A+(g.rawAverageScore??g.averageScore),0)/S.length).toFixed(1)):0,v=/[九9]/.test(x.gradeSheet||"")||/[九9]/.test(x.gradeLevelLabel||"")||w.includes("地科"),L=v&&k.some(A=>A.scienceAverage!==null&&A.scienceAverage!==void 0),R=w.indexOf("公民"),T=R!==-1?w.slice(0,R+1):w,E=R!==-1?w.slice(R+1):[],M=3+T.length+1+E.length+(L?1:0)+6,H=A=>A.length?A.map(g=>{const j=K=>{const se=g.scores[K],ye=["英文","英語","數學"].includes(K);if(se==null){const we=["學中","特教","特教班","秀才"].includes(g.identity);return`<td class="px-1.5 py-2 text-center font-mono text-xs ${ye?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(K)?"bg-amber-50/20":["理化","地科","生物"].includes(K)?"bg-cyan-50/20":""}" title="${we?"學習中心/特教免測":"缺考/未測驗"}">${we?'<span class="text-slate-400">-</span>':'<span class="text-amber-700 font-bold">缺</span>'}</td>`}return`
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm ${ye?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(K)?"bg-amber-50/20":["理化","地科","生物"].includes(K)?"bg-cyan-50/20":""} ${se<60?"text-rose-600 font-bold":"text-slate-700"}">
              ${se}
            </td>
          `},B=T.map(j).join(""),U=E.map(j).join(""),He=`
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-amber-950 bg-amber-50/60 border-r border-amber-200">
            ${g.socialAverage!==null&&g.socialAverage!==void 0?Number(g.socialAverage).toFixed(1):"-"}
          </td>
        `,qe=L?`
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-cyan-950 bg-cyan-50/60 border-r border-cyan-200">
            ${g.scienceAverage!==null&&g.scienceAverage!==void 0?Number(g.scienceAverage).toFixed(1):"-"}
          </td>
        `:"",Pe=p(g.classRankInterval||(g.classRank?g.classRank+"名":"-")),_e=p(g.schoolRankInterval||(g.schoolRank?g.schoolRank+"名":"-"));let te='<span class="text-slate-300 text-xs">-</span>';return g.identity==="體育班"?te='<span class="text-[10px] px-1 py-0.5 rounded bg-blue-100 text-blue-800 font-bold border border-blue-200">體育</span>':g.identity==="學中"?te='<span class="text-[10px] px-1 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">學中</span>':g.identity&&g.identity!=="*"&&(te=`<span class="text-[10px] px-1 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">${p(g.identity)}</span>`),`
          <tr class="group hover:bg-slate-50/90 transition ${g.isFailing?"bg-rose-50/30":""}">
            <td class="roster-sticky-col-1 bg-white group-hover:bg-slate-50 text-center font-mono font-bold text-slate-800 border-r border-slate-200 px-1 py-1.5 text-xs sm:text-sm">${g.seatNo}</td>
            <td class="roster-sticky-col-2 bg-white group-hover:bg-slate-50 font-medium text-slate-900 border-r border-slate-300 roster-sticky-shadow px-2 py-1.5 whitespace-nowrap text-xs sm:text-sm">
              <span>${p(g.name)}</span>
            </td>
            <td class="px-1.5 py-2 text-center border-r border-slate-200">${te}</td>
            ${B}
            ${He}
            ${U}
            ${qe}
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-slate-800 bg-slate-50/40">
              ${g.totalScore!==null&&g.totalScore!==void 0?g.totalScore:"-"}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold ${g.isFailing?"text-rose-600":"text-slate-900"} bg-slate-50/40">
              ${g.averageScore!==null&&g.averageScore!==void 0?g.averageScore:"-"}
            </td>
            <td class="px-1.5 py-2 text-center text-xs">
              ${g.hasScore!==!1&&g.gradeLevel?Z(g.gradeLevel):["學中","特教","特教班","秀才"].includes(g.identity)?'<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>':'<span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-bold border border-amber-200">缺考</span>'}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap" title="${g.classRank?`班名次：第${g.classRank}名`:""}">
              <div class="font-bold text-slate-800">${Pe}</div>
              ${g.classRank?`<div class="text-[10px] text-slate-400 font-normal">第${g.classRank}名</div>`:""}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap border-r border-slate-200" title="${g.schoolRank?`校名次：第${g.schoolRank}名 (PR ${g.schoolPR})`:""}">
              <div class="font-bold text-slate-800">${_e}</div>
              ${g.schoolRank?`<div class="text-[10px] text-slate-400 font-normal">第${g.schoolRank}名 (PR ${g.schoolPR})</div>`:""}
            </td>
            <td class="px-2 py-2 text-center whitespace-nowrap">
              <button class="btn-print-single px-2 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition inline-flex items-center gap-0.5 shadow-xs" data-seat="${g.seatNo}" title="預覽或列印 ${g.seatNo}號 ${p(g.name)} 成績單">
                <span>🖨️</span>
                <span>列印</span>
              </button>
            </td>
          </tr>
        `}).join(""):`
          <tr>
            <td colspan="${M}" class="py-10 text-center text-slate-400 text-sm">
              查無符合「<b class="text-slate-600">${p(u)}</b>」的座號或學生姓名
            </td>
          </tr>
        `,ie=H(N),_=x.benchmarks||{},J=_.cohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(l)?"含體育班":"不含體育班"),O=A=>A==null||isNaN(A)?"-":Number(A).toFixed(2),Te=[{label:"班平均",map:_.classAverage,cls:"bg-emerald-50/70 text-emerald-950 font-bold",stickyBg:"bg-emerald-50"},{label:`年平均 (${J})`,map:_.schoolAverage,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班高標",map:_.classHigh,cls:"bg-blue-50/70 text-blue-950 font-bold",stickyBg:"bg-blue-50"},{label:`年高標 (${J})`,map:_.schoolHigh,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班低標",map:_.classLow,cls:"bg-rose-50/70 text-rose-950 font-bold",stickyBg:"bg-rose-50"},{label:`年低標 (${J})`,map:_.schoolLow,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"}],Me=_.classAverage?`
      <tfoot class="border-t-2 border-slate-300 divide-y divide-slate-200">
        ${Te.map(A=>`
          <tr class="${A.cls}">
            <td class="roster-sticky-col-1 ${A.stickyBg||"bg-slate-50"} px-2 py-2 text-center text-xs font-mono font-bold text-slate-400 border-r border-slate-200">◆</td>
            <td class="roster-sticky-col-2 ${A.stickyBg||"bg-slate-50"} px-3 py-2 text-xs font-bold border-r border-slate-300 roster-sticky-shadow whitespace-nowrap">${p(A.label)}</td>
            <td class="px-1.5 py-2 text-center text-xs text-slate-400 border-r border-slate-200">基準</td>
            ${T.map(g=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${["英文","英語","數學"].includes(g)?"border-r border-slate-200":""}">${O(A.map?.[g])}</td>`).join("")}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-amber-950 bg-amber-100/70 border-r border-amber-200">${O(A.map?.社平??A.map?.社會)}</td>
            ${E.map((g,j)=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${j===E.length-1&&!L?"border-r border-slate-200":""}">${O(A.map?.[g])}</td>`).join("")}
            ${L?`<td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-cyan-950 bg-cyan-100/70 border-r border-cyan-200">${O(A.map?.自平??A.map?.自然)}</td>`:""}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${O(A.map?.總分)}</td>
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${O(A.map?.平均)}</td>
            <td colspan="4" class="px-3 py-2 text-center text-xs text-slate-400 font-normal">全班常模基準</td>
          </tr>
        `).join("")}
      </tfoot>
    `:"";e.innerHTML=`
      <!-- 導師專區頂部標題列 -->
      <div class="portal-toolbar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-bold text-slate-900">${p(l)} ${i?"班級成績管理":"導師成績儀表板"}${x&&x.className&&x.className!==l?` <span class="text-base font-normal text-slate-500">（評量時為 ${p(x.className)}）</span>`:""}</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${i?"註冊組長・全校檢視":p(t.displayName||t.account)}</span>
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
        <div class="flex items-center gap-2 flex-wrap">
          <!-- 區塊 1：各科段考成績名冊 ＋ 緊鄰的考次選擇器 -->
          <div class="flex items-center gap-1.5 p-1 rounded-xl transition ${r==="single"?"bg-emerald-50/90 border-2 border-emerald-500/60 shadow-2xs":"bg-slate-50 border border-slate-200"}">
            <button type="button" id="tab-btn-single-exam" class="px-3.5 py-2 rounded-lg text-sm font-bold transition flex items-center gap-1.5 ${r==="single"?"bg-emerald-700 text-white shadow-xs":"text-slate-600 hover:text-slate-900"}" aria-pressed="${r==="single"}">
              <span>📋</span>
              <span>各科段考成績名冊</span>
            </button>

            ${r==="single"?`
              <!-- 緊鄰各科段考成績名冊之考次選單與快速切換鍵 -->
              <div class="flex items-center gap-1 pl-1.5 pr-1 border-l border-emerald-300">
                <span class="text-xs font-bold text-emerald-950 whitespace-nowrap hidden sm:inline">考次：</span>
                <button type="button" id="btn-prev-exam" class="w-7 h-7 flex items-center justify-center rounded-md border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-bold shadow-2xs" title="看上一場段考" ${b<=0?"disabled":""}>
                  ◀
                </button>
                <select id="teacher-exam-select" class="px-2.5 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs sm:text-sm font-bold text-slate-800 shadow-2xs focus:ring-2 focus:ring-emerald-500 cursor-pointer max-w-[290px]">
                  ${n.map((A,g)=>`
                    <option value="${g}" ${g===b?"selected":""}>
                      ${p(A.academicYear||"")} ${p(A.semester||"")} ${p(A.examName)}${A.gradeLevelLabel?` (${p(A.gradeLevelLabel)})`:""}
                    </option>
                  `).join("")}
                </select>
                <button type="button" id="btn-next-exam" class="w-7 h-7 flex items-center justify-center rounded-md border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-bold shadow-2xs" title="看下一場段考" ${b>=n.length-1?"disabled":""}>
                  ▶
                </button>
              </div>
            `:""}
          </div>

          <!-- 區塊 2：歷屆校排綜合追蹤 -->
          <button type="button" id="tab-btn-cohort-ranks" class="px-4 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-1.5 ${r==="cohort"?"bg-emerald-700 text-white shadow-xs border-2 border-emerald-600":"bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"}" aria-pressed="${r==="cohort"}">
            <span>🏆</span>
            <span>歷屆校排綜合追蹤（入學至最新）</span>
          </button>
        </div>

        <!-- 右側當前狀態標籤 -->
        <div class="text-xs flex items-center gap-2 pl-2 text-slate-600">
          ${r==="single"?`
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>當前考次：<b class="text-slate-800 font-bold">${p(x.academicYear)} ${p(x.semester)} ${p(x.examName)}</b></span>
            </span>
          `:`
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900">
              <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>涵蓋歷程：<b class="font-bold">國一至國三共 ${n.length} 場段考</b></span>
            </span>
          `}
        </div>
      </div>

      <!-- 視圖主內容掛載點 -->
      <div id="teacher-view-content"></div>
    `;const F=e.querySelector("#teacher-view-content");if(r==="cohort"){const A=et(n);Ie(F,{title:l,isGradeWide:!1,examList:A.examList,studentResults:A.studentResults,onPrint:()=>window.print()})}else{F.innerHTML=`
        <p class="calculation-note print:hidden">${p(x.calculationNote||"社會採地理、歷史、公民平均；各科折算及名次依本次評量規則計算。")}</p>
        <!-- 班級四大指標統計 (Tailwind Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <!-- 班級人數與平均 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級總人數 / 總平均</div>
            <div class="flex items-baseline gap-2 my-2">
              <span class="text-3xl font-black font-mono text-slate-900">${m}</span>
              <span class="text-xs text-slate-500">分 / 全班 ${k.length} 人</span>
            </div>
            <div class="text-[11px] text-slate-400">總平均達丙等 (60分) 以上及格基準</div>
          </div>

          <!-- 班級五標常模 (教育部合規) -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級常模五標</div>
            <div class="grid grid-cols-3 gap-1 my-2 text-xs font-mono">
              <div><span class="text-slate-400">頂:</span> <b class="text-emerald-700">${$.ding||0}</b></div>
              <div><span class="text-slate-400">前:</span> <b class="text-blue-700">${$.qian||0}</b></div>
              <div><span class="text-slate-400">均:</span> <b class="text-slate-800">${$.jun||0}</b></div>
              <div><span class="text-slate-400">後:</span> <b class="text-amber-700">${$.hou||0}</b></div>
              <div><span class="text-slate-400">底:</span> <b class="text-rose-700">${$.di||0}</b></div>
            </div>
            <div class="text-[11px] text-slate-400">P88 / P75 / P50 / P25 / P12</div>
          </div>

          <!-- 教育部等第人數分佈 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">等第人數分佈</div>
            <div class="flex items-center gap-2 my-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">優 ${y.優||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">甲 ${y.甲||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">乙 ${y.乙||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">丙 ${y.丙||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">丁 ${y.丁||0}</span>
            </div>
            <div class="text-[11px] text-slate-400">及格率：${k.length?Math.round((k.length-(y.丁||0))/k.length*100):0}%</div>
          </div>

          <!-- 班級及格率 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級及格率 (丙等以上)</div>
            <div class="flex items-baseline justify-between my-2">
              <span class="text-3xl font-black font-mono text-emerald-700">${x.passRate??Math.round((k.length-(y.丁||0))/(k.length||1)*100)}%</span>
              <span class="text-xs font-mono text-slate-500">${k.length-(y.丁||0)} / ${k.length} 及格</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-500" style="width: ${x.passRate??Math.round((k.length-(y.丁||0))/(k.length||1)*100)}%;"></div>
            </div>
          </div>
        </div>

        <section id="subject-score-analysis" class="score-analysis" aria-labelledby="score-analysis-title"></section>

        <!-- 全班學生成績總表 -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div class="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="font-bold text-slate-800 text-sm">全班定期評量成績名冊</h3>
              <span id="roster-count-badge" class="text-xs bg-slate-200/80 text-slate-600 px-2 py-0.5 rounded-full font-medium">${N.length} 筆</span>
              ${v?'<span class="text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md font-medium hidden sm:inline">九年級 9 學科完整版面</span>':""}
            </div>
            <div class="flex items-center gap-2.5 w-full sm:w-auto">
              <button id="btn-toggle-density" type="button" class="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition flex items-center gap-1 shadow-xs" title="切換名冊檢視鬆緊度">
                <span>${d?"📐 舒適視圖":"📏 緊湊視圖"}</span>
              </button>
              <div class="w-full sm:w-56">
                <input type="search" id="teacher-search-input" value="${p(u)}" placeholder="🔍 輸入座號(如 5)或姓名..." class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" autocomplete="off" />
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
            <table class="roster-table ${v?"roster-table-g9":""} ${d?"roster-compact":""} w-full text-left text-sm text-slate-700">
              <thead class="text-slate-700 text-xs font-semibold">
                <!-- 第一層：領域分類與結構分組 -->
                <tr class="text-xs font-bold border-b border-slate-200">
                  <th colspan="2" class="roster-sticky-header-1 bg-slate-100 text-slate-700 px-3 py-2 text-center border-r border-slate-300">學生基本</th>
                  <th class="bg-slate-100 text-slate-600 px-1.5 py-2 text-center border-r border-slate-200">身分</th>
                  <th colspan="2" class="bg-indigo-50 text-indigo-950 px-2 py-2 text-center border-r border-indigo-200">語文領域</th>
                  <th colspan="1" class="bg-violet-50 text-violet-950 px-1.5 py-2 text-center border-r border-violet-200">數學領域</th>
                  <th colspan="4" class="bg-amber-100 text-amber-950 px-2 py-2 text-center border-r border-amber-200">社會領域 (地理/歷史/公民 ➔ 社平)</th>
                  <th colspan="${L?4:E.length||1}" class="bg-cyan-100 text-cyan-950 px-2 py-2 text-center border-r border-cyan-200">自然領域 ${L?"(理化3/地科2/生物1 ➔ 自平)":""}</th>
                  <th colspan="5" class="bg-slate-100 text-slate-800 px-2 py-2 text-center border-r border-slate-200">總計評定與序位</th>
                  <th class="bg-slate-100 text-slate-600 px-2 py-2 text-center">操作</th>
                </tr>
                <!-- 第二層：各科目與欄位項目 -->
                <tr class="bg-slate-50 text-slate-600 text-xs font-semibold border-b border-slate-200">
                  <th class="roster-sticky-header-1 bg-slate-50 w-[42px] px-1 py-2 text-center border-r border-slate-200">座號</th>
                  <th class="roster-sticky-header-2 bg-slate-50 w-[74px] px-2 py-2 text-left border-r border-slate-300 roster-sticky-shadow">姓名</th>
                  <th class="bg-slate-50 w-[42px] px-1 py-2 text-center border-r border-slate-200">身分</th>
                  ${T.map(g=>`
                    <th class="w-[48px] px-1 py-2 text-center ${["英文","英語","數學"].includes(g)?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(g)?"bg-amber-50 text-amber-950":"bg-slate-50"}">${p(g)}</th>
                  `).join("")}
                  <th class="w-[52px] px-1 py-2 text-center font-bold bg-amber-100 text-amber-950 border-r border-amber-200" title="社會領域平均 (地理/歷史/公民)">社平</th>
                  ${E.map((g,j)=>`
                    <th class="w-[48px] px-1 py-2 text-center bg-cyan-50 text-cyan-950 ${j===E.length-1&&!L?"border-r border-slate-200":""}">${p(g)}</th>
                  `).join("")}
                  ${L?'<th class="w-[52px] px-1 py-2 text-center font-bold bg-cyan-100 text-cyan-950 border-r border-cyan-200" title="自然領域平均 (理化3/地科2/生物1)">自平</th>':""}
                  <th class="w-[56px] px-1 py-2 text-center font-bold bg-slate-50">總分</th>
                  <th class="w-[52px] px-1 py-2 text-center font-bold bg-slate-50">平均</th>
                  <th class="w-[46px] px-1 py-2 text-center bg-slate-50">等第</th>
                  <th class="w-[74px] px-1 py-2 text-center bg-slate-50" title="5人班級序位區間">班級序位</th>
                  <th class="w-[84px] px-1 py-2 text-center bg-slate-50 border-r border-slate-200" title="10人年級序位區間">年級序位</th>
                  <th class="w-[72px] px-1 py-2 text-center bg-slate-50">成績單</th>
                </tr>
              </thead>
              <tbody id="roster-tbody" class="divide-y divide-slate-100">
                ${ie}
              </tbody>
              ${Me}
            </table>
          </div>
          <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
            <span>📌 標標說明：年標採學校總表規範（普通班以普通班為母體，體育班以全體學生為母體）。</span>
            <span class="font-mono text-slate-400">高標 / 低標：Q2 中位數前後 50% 學生之平均值</span>
          </div>
        </div>
      `,Ze(F.querySelector("#subject-score-analysis"),k,w,{selectedSubject:h,onSubjectChange:g=>{h=g}}),e.querySelector("#teacher-exam-select")?.addEventListener("change",g=>{b=Number(g.target.value)||0,f()}),e.querySelector("#btn-prev-exam")?.addEventListener("click",()=>{b>0&&(b--,f())}),e.querySelector("#btn-next-exam")?.addEventListener("click",()=>{b<n.length-1&&(b++,f())});const A=()=>{const g=F.querySelector(".roster-table"),j=g?.querySelector("thead tr:first-child");if(g&&j){const B=Math.round(j.getBoundingClientRect().height);B>0&&g.style.setProperty("--roster-head-row1-h",`${B}px`)}};requestAnimationFrame(A),F.querySelector("#btn-toggle-density")?.addEventListener("click",g=>{d=!d;const j=F.querySelector(".roster-table");j&&j.classList.toggle("roster-compact",d);const B=g.currentTarget.querySelector("span");B&&(B.textContent=d?"📐 舒適視圖":"📏 緊湊視圖"),A()}),F.querySelector("#teacher-search-input")?.addEventListener("input",g=>{u=g.target.value;const j=C(k,u),B=F.querySelector("#roster-tbody"),U=F.querySelector("#roster-count-badge");B&&(B.innerHTML=H(j)),U&&(U.textContent=`${j.length} 筆`)}),e.querySelector("#btn-print-batch-cards")?.addEventListener("click",()=>{Ne(x,x&&x.className||l,s,k,null)}),F.querySelector("#roster-tbody")?.addEventListener("click",g=>{const j=g.target.closest(".btn-print-single");if(!j)return;const B=Number(j.getAttribute("data-seat"));Ne(x,x&&x.className||l,s,k,B)}),e.querySelector("#btn-print-class")?.addEventListener("click",()=>{window.print()})}e.querySelector("#tab-btn-single-exam")?.addEventListener("click",()=>{r!=="single"&&(r="single",f())}),e.querySelector("#tab-btn-cohort-ranks")?.addEventListener("click",()=>{r!=="cohort"&&(r="cohort",f())})}f()}async function Be(e,t){e.innerHTML='<p class="admin-class-message" role="status">正在讀取全校班級名單…</p>';const o=await q("getAdminClasses");if(!o.success||!Array.isArray(o.classes)){e.innerHTML=`<div class="admin-class-message"><h3>無法載入全校班級</h3><p>${p(o.message||"請確認前後端版本一致，並重新登入註冊組長帳號。")}</p><button type="button" class="admin-class-retry">重新載入</button></div>`,e.querySelector("button")?.addEventListener("click",()=>Be(e,t));return}const i=o.classes;if(!i.length){e.innerHTML='<p class="admin-class-message">最新學生名冊尚無班級資料，請先確認學生名單。</p>';return}e.innerHTML=`
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
      </div>
      <p id="admin-class-description" role="status"></p>
    </section>
    <div id="admin-selected-class"></div>
  `;const a=e.querySelector("#admin-grade-select"),c=e.querySelector("#admin-class-select"),l=e.querySelector("#admin-selected-class");let n=0;async function s(){const b=c.value;if(!b)return;if(b.startsWith("cohort_grade_")){const f=Number(b.replace("cohort_grade_","")),x=++n,w=document.createElement("div");w.className="admin-grade-cohort-stage",l.replaceChildren(w),e.querySelector("#admin-class-description").textContent=`${f}年級全校歷屆校排綜合追蹤大榜｜全校學生跨班級統一依照歷屆校排平均綜合排序`,w.innerHTML=`
        <div class="py-16 text-center text-slate-500">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-3"></div>
          <span class="text-sm">正在計算【${f}年級全校歷屆校排大榜】（包含所有班級學生與各次段考真實校排）...</span>
        </div>
      `;const $=await q("getAdminGradeCohortData",{grade:f});if(x!==n)return;$.success?(w.innerHTML="",Ie(w,{title:`${f}年級全校`,isGradeWide:!0,examList:$.examList,studentResults:$.studentResults,onPrint:()=>window.print()})):w.innerHTML=`<div class="p-8 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl text-center text-sm font-medium">${p($.message||"無法載入全校校排資料")}</div>`;return}const u=i.find(f=>f.className===b);if(!u)return;const h=++n,d=document.createElement("div");d.className="admin-inherited-class",l.replaceChildren(d),e.querySelector("#admin-class-description").textContent=`${u.className}｜在校名冊 ${u.studentCount} 人｜導師：${u.teacherName||"尚未設定"}`,await ve(d,t,{className:u.className,teacherName:u.teacherName}),h!==n&&d.remove()}function r(){const b=c.value,u=a.value,h=i.filter(f=>!u||f.className.startsWith(u+"年"));let d="";u?(d+='<optgroup label="🌟 全校年級綜合大榜">',d+=`<option value="cohort_grade_${u}">🏆【${u}年級全體・全校歷屆校排大榜】</option>`,d+="</optgroup>"):(d+='<optgroup label="🌟 全校年級綜合大榜">',d+='<option value="cohort_grade_9">🏆【九年級全體・全校歷屆校排大榜】</option>',d+='<option value="cohort_grade_8">🏆【八年級全體・全校歷屆校排大榜】</option>',d+='<option value="cohort_grade_7">🏆【七年級全體・全校歷屆校排大榜】</option>',d+="</optgroup>"),d+='<optgroup label="🏫 個別班級成績名冊與歷屆追蹤">',d+=h.map(f=>`<option value="${p(f.className)}">${p(f.className)}（${f.studentCount} 人｜導師: ${p(f.teacherName||"未設")}）</option>`).join(""),d+="</optgroup>",c.innerHTML=d,c.disabled=h.length===0,h.some(f=>f.className===b)?c.value=b:b&&b.startsWith("cohort_grade_")&&(c.value=u?`cohort_grade_${u}`:b),!c.value&&c.options.length>0&&(c.selectedIndex=0),c.value?s():(n++,l.innerHTML='<p class="admin-class-message">此年級尚無資料。</p>',e.querySelector("#admin-class-description").textContent="")}a.addEventListener("change",r),c.addEventListener("change",()=>void s()),r()}async function X(e,t){e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在讀取 Google Sheets 資料庫狀態...</span>
    </div>
  `;const o=await q("getAdminOverview");if(!o.success||!o.stats){e.innerHTML=`<div class="admin-class-message"><h2>無法載入管理資料</h2><p>${p(o.message||"請稍後重新載入。")}</p><button type="button" id="btn-admin-retry">重新載入</button></div>`,e.querySelector("#btn-admin-retry")?.addEventListener("click",()=>X(e,t));return}const i=o.stats,a=re(),c=o.spreadsheetUrl||"";function l(){e.innerHTML=`
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
          ${c?`
          <a href="${p(c)}" target="_blank" rel="noopener noreferrer" id="btn-open-spreadsheet" class="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-sm font-bold shadow-xs transition inline-flex items-center gap-1.5" title="以新分頁開啟後端 Google 試算表資料庫">
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
          ${c?`
          <a href="${p(c)}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-bold transition inline-flex items-center gap-1 shadow-2xs">
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
              ${a?`已連線：${p(a)}`:"目前處於：【本地示範模式】（可立即點選右側設定貼上您的 GAS 網址）"}
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
    `;let h=!1;const d=e.querySelector("#admin-overview-panel"),f=e.querySelector("#admin-class-panel"),x=e.querySelector("#admin-tab-overview"),w=e.querySelector("#admin-tab-classes");function $(y){const k=y==="classes";d.hidden=k,f.hidden=!k,x.setAttribute("aria-pressed",String(!k)),w.setAttribute("aria-pressed",String(k)),k&&!h&&(h=!0,Be(f,t))}x.addEventListener("click",()=>$("overview")),w.addEventListener("click",()=>$("classes")),document.getElementById("btn-config-gas")?.addEventListener("click",s),document.getElementById("btn-test-gas")?.addEventListener("click",r),document.getElementById("btn-init-db-remote")?.addEventListener("click",b),document.getElementById("btn-autoresize-remote")?.addEventListener("click",n),document.getElementById("btn-open-gas-instructions")?.addEventListener("click",u)}async function n(){I("正在自動調整試算表各工作表欄寬...");const h=await q("autoResizeColumns");h.success?I(h.message||"🎉 所有工作表欄寬已全數調整至最佳寬度！"):I(h.message||"調整欄寬失敗","error")}function s(){const h=`
      <div class="p-6">
        <h3 class="text-base font-bold text-slate-900 mb-2">設定 Google Apps Script Web App 網址</h3>
        <p class="text-xs text-slate-500 mb-4">
          請貼上您在 Google Apps Script 中點選「部署」➔「網頁應用程式」所取得的 URL（以 /exec 結尾）：
        </p>
        <input type="url" id="input-gas-url" value="${p(re())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono mb-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        <div class="flex justify-between items-center">
          <button id="btn-clear-gas-url" class="text-xs text-rose-600 hover:underline">清除網址 (切換為本地示範模式)</button>
          <div class="flex gap-2">
            <button id="btn-modal-cancel" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium">取消</button>
            <button id="btn-modal-save-gas" class="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-sm">儲存設定</button>
          </div>
        </div>
      </div>
    `;ee(h,()=>{document.getElementById("btn-modal-cancel")?.addEventListener("click",P),document.getElementById("btn-clear-gas-url")?.addEventListener("click",()=>{de(""),I("已切換為本地示範模式"),P(),X(e,t)}),document.getElementById("btn-modal-save-gas")?.addEventListener("click",()=>{const d=document.getElementById("input-gas-url")?.value.trim();de(d),I("GAS 網址已儲存！"),P(),X(e,t)})})}async function r(){I("正在測試 GAS 後端連線...");const h=await q("ping");h.success?I(`✓ 連線成功！試算表：${h.spreadsheetName||"已連線"}`):I(`連線失敗：${h.message}`,"error")}async function b(){if(!confirm("確定要在 Google Sheets 中建立【學生名單】、【導師名單】、【管理者名單】以及【七年級成績資料庫】、【八年級成績資料庫】、【九年級成績資料庫】三個工作表嗎？"))return;I("正在傳送初始化指令至 Google Apps Script...");const h=await q("initDatabase");h.success?(I("🎉 Google Sheets 資料庫結構與七、八、九年級示範資料已順利建立！"),X(e,t)):I(h.message||"初始化指令執行失敗","error")}function u(){ee(`
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
    `,()=>{document.getElementById("btn-close-instructions")?.addEventListener("click",P)})}l()}let G="student";const tt=900*1e3;let oe=null,Ce=0;function he(){oe&&(clearTimeout(oe),oe=null),W()&&(oe=setTimeout(()=>{W()&&(q("logout"),ge(),P(),I("🔒 為保護個人成績與校務資料安全，系統因閒置超過 15 分鐘已自動安全登出。","error"),Y())},tt))}function st(){const e=()=>{const t=Date.now();t-Ce<5e3||(Ce=t,W()&&he())};["mousemove","mousedown","keydown","touchstart","scroll"].forEach(t=>{window.addEventListener(t,e,{passive:!0})})}function me(){const e=document.getElementById("app-masthead");if(!e)return;const t=W();e.innerHTML=`
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
              <span class="font-bold text-white">${p(t.displayName||t.account)}</span>
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
  `,document.getElementById("btn-masthead-gas-status")?.addEventListener("click",Ee),document.getElementById("btn-change-password")?.addEventListener("click",()=>{t&&nt(t)}),document.getElementById("btn-logout")?.addEventListener("click",()=>{q("logout"),ge(),he(),I("您已安全登出系統。"),Y()})}function fe(e){const o={student:{role:"student",title:"學生與家長登入",subtitle:"查詢個人段考成績與歷次段考紀錄。",accLabel:"學生學號（7 碼）",accPlaceholder:"請輸入 7 碼學生學號",pwdLabel:"驗證密碼（預設為身分證後四碼＋出生月日共 8 碼，或自訂密碼）",pwdPlaceholder:"請輸入登入密碼",help:"預設密碼之出生月日請使用四碼（如 0509）。登入後可點擊右上角「🔑 修改密碼」設定專屬加密密碼；若忘記密碼請洽教務處註冊組。",defaultAcc:"",defaultPwd:""},teacher:{role:"teacher",title:"班級導師登入",subtitle:"查詢班級段考成績、各科分數區間與列印成績單。",accLabel:"教師帳號",accPlaceholder:"請輸入公務信箱前綴帳號",pwdLabel:"教師密碼",pwdPlaceholder:"請輸入教師密碼",help:"請使用學校提供的教師帳號。首次登入須依畫面指示變更密碼；忘記密碼請洽教務處註冊組。",defaultAcc:"",defaultPwd:""},admin:{role:"admin",title:"註冊組長登入",subtitle:"管理全校資料，並可檢視各班成績與使用導師列印功能。",accLabel:"管理者帳號",accPlaceholder:"請輸入管理員帳號（例如：admin）",pwdLabel:"管理員密碼",pwdPlaceholder:"請輸入管理員密碼",help:"本專區限授權人員使用。請於使用完畢後登出，避免在共用設備儲存登入資料。",defaultAcc:"",defaultPwd:""}}[G];e.innerHTML=`
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
          <button type="button" aria-pressed="${G==="student"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${G==="student"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="student">
            學生／家長
          </button>
          <button type="button" aria-pressed="${G==="teacher"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${G==="teacher"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="teacher">
            班級導師
          </button>
          <button type="button" aria-pressed="${G==="admin"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${G==="admin"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="admin">
            註冊組長
          </button>
        </div>

        <div class="school-login-fields">
          <div class="mb-6">
            <h2 id="login-card-title" class="text-xl font-bold text-slate-900">${o.title}</h2>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">${o.subtitle}</p>
          </div>

          <!-- 登入表單 -->
          <form id="auth-login-form" class="space-y-4">
            <div>
              <label for="login-account-id" class="block text-xs font-semibold text-slate-700 mb-1.5">${o.accLabel}</label>
              <input type="text" id="login-account-id" autocomplete="username" ${G==="student"?'inputmode="numeric"':""} required value="${p(o.defaultAcc)}" placeholder="${p(o.accPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>

            <div>
              <label for="login-password" class="block text-xs font-semibold text-slate-700 mb-1.5">${o.pwdLabel}</label>
              <input type="password" id="login-password" autocomplete="current-password" aria-describedby="login-help" required value="${p(o.defaultPwd)}" placeholder="${p(o.pwdPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>

            <div id="login-help" class="school-login-help">
              ${o.help}
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
  `,e.querySelectorAll(".role-tab-btn").forEach(i=>{i.addEventListener("click",()=>{G=i.getAttribute("data-role"),fe(e)})}),document.getElementById("btn-open-gas-setup")?.addEventListener("click",Ee),document.getElementById("auth-login-form")?.addEventListener("submit",async i=>{i.preventDefault();const a=document.getElementById("login-account-id")?.value.trim(),c=document.getElementById("login-password")?.value.trim(),l=document.getElementById("btn-submit-login");if(!a||!c){I("請輸入帳號與密碼！","error");return}l&&(l.disabled=!0,l.textContent="正在驗證帳密...");const n=await q("login",{role:G,account:a,password:c});if(l&&(l.disabled=!1,l.textContent="驗證身分並進入系統"),!n.success){I(n.message||"登入失敗，請確認帳號密碼","error");return}if(n.role==="teacher"&&n.mustChangePassword){at(n.user.account,c,r=>{pe({role:"teacher",account:n.user.account,displayName:n.user.name,assignedClass:n.user.assignedClass,authToken:r||n.authToken}),I("密碼已成功變更！歡迎進入導師儀表板。"),Y()},n.authToken);return}const s={role:n.role,account:n.user&&(n.user.account||n.user.studentId)||a,displayName:n.user&&(n.user.name||n.user.displayName)||a,authToken:n.authToken,studentId:n.role==="student"?n.user.studentId:void 0,assignedClass:n.role==="teacher"?n.user.assignedClass:void 0};pe(s),I(`歡迎回來，${s.displayName}！`),Y()})}function at(e,t,o,i){const a=`
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
          <input type="password" id="forced-curr-pwd" required value="${p(t)}" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
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
  `;ee(a,()=>{document.getElementById("forced-pwd-form")?.addEventListener("submit",async c=>{c.preventDefault();const l=document.getElementById("forced-curr-pwd")?.value.trim(),n=document.getElementById("forced-new-pwd")?.value.trim(),s=document.getElementById("forced-confirm-pwd")?.value.trim(),r=document.getElementById("btn-submit-forced-pwd");if(n!==s){I("兩次輸入的新密碼不一致！","error");return}if(n.length<6){I("新密碼長度請至少包含 6 個字元！","error");return}r&&(r.disabled=!0,r.textContent="正在寫入 Google Sheets...");const b=await q("changeTeacherPassword",{account:e,currentPassword:l,newPassword:n,authToken:i});b.success?(P(),typeof o=="function"&&o(b.authToken)):(I(b.message||"變更密碼失敗，請重試","error"),r&&(r.disabled=!1,r.textContent="確認變更新密碼並進入系統"))})})}function nt(e){const t=e.role==="student",o=t&&e.studentId||e.account,i=`
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">🔑</span>
          <h3 class="text-base font-bold text-slate-900">修改個人登入密碼</h3>
        </div>
      </div>
      <p class="text-xs text-slate-600 mb-4 leading-relaxed">
        帳號：<b class="text-slate-800">${p(o)}（${p(e.displayName||"")}）</b><br/>
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
  `;ee(i,()=>{document.getElementById("btn-cancel-self-pwd")?.addEventListener("click",P),document.getElementById("self-pwd-form")?.addEventListener("submit",async a=>{a.preventDefault();const c=document.getElementById("self-curr-pwd")?.value.trim(),l=document.getElementById("self-new-pwd")?.value.trim(),n=document.getElementById("self-confirm-pwd")?.value.trim(),s=document.getElementById("btn-submit-self-pwd");if(l!==n){I("兩次輸入的新密碼不一致！","error");return}if(l.length<6){I("新密碼長度請至少包含 6 個字元！","error");return}if(c===l){I("新密碼不可與目前密碼相同！","error");return}s&&(s.disabled=!0,s.textContent="正在加密寫入...");const b=await q(t?"changeStudentPassword":"changeTeacherPassword",{account:o,studentId:t?o:void 0,currentPassword:c,newPassword:l,authToken:e.authToken});b.success?(b.authToken&&pe({...e,authToken:b.authToken}),P(),I(b.message||"密碼已成功變更並完成加密保護！")):(I(b.message||"變更密碼失敗，請確認目前密碼是否正確","error"),s&&(s.disabled=!1,s.textContent="確認加密更新密碼"))})})}function Ee(){const e=`
    <div class="p-6">
      <h3 class="text-base font-bold text-slate-900 mb-2">⚙️ Google Apps Script 試算表連線設定</h3>
      <p class="text-xs text-slate-500 mb-4 leading-relaxed">
        本系統可直接串接您的 Google 試算表。請將您部署為網頁應用程式 (Web App) 的 URL 貼於下方：
      </p>

      <div class="mb-4">
        <label class="block text-xs font-semibold text-slate-700 mb-1">Web App 部署網址 (以 /exec 結尾)</label>
        <input type="url" id="modal-gas-input" value="${p(re())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
      </div>

      <div class="flex justify-between items-center text-xs">
        <button id="btn-modal-clear-gas" class="text-rose-600 hover:underline">
          清除網址 (切回本地示範模式)
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
  `;ee(e,()=>{document.getElementById("btn-modal-close")?.addEventListener("click",P),document.getElementById("btn-modal-clear-gas")?.addEventListener("click",()=>{de(""),I("已切換為本地示範模式"),P(),me()}),document.getElementById("btn-modal-save")?.addEventListener("click",()=>{const t=document.getElementById("modal-gas-input")?.value.trim();de(t),I("GAS 連線網址已更新！"),P(),me()})})}function Y(){me(),he();const e=document.getElementById("app-root");if(!e)return;const t=W();if(e.dataset.view=t?.role||"login",e.classList.toggle("school-portal-root",!!t),!t){fe(e);return}t.role==="student"?ze(e,t):t.role==="teacher"?ve(e,t):t.role==="admin"?X(e,t):(ge(),fe(e))}st();document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>{Y()}):Y();
