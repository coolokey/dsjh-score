(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const b of o)if(b.type==="childList")for(const l of b.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function d(o){const b={};return o.integrity&&(b.integrity=o.integrity),o.referrerPolicy&&(b.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?b.credentials="include":o.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function n(o){if(o.ep)return;o.ep=!0;const b=d(o);fetch(o.href,b)}})();const G={GAS_URL:"daxi_grade_sys_gas_url",SESSION:"daxi_grade_sys_session_v4",LOCAL_DB:"daxi_grade_sys_local_mock_v4"},Be="https://script.google.com/macros/s/AKfycby0G1hk9Z3OxFq7uR5leRMZqHhNqYypZRzvByvQlYcV_0AoE-Y9fPnHoTsPcu9IJw_1yQ/exec";function te(){if(typeof window<"u"&&window.location&&window.location.hostname.includes("script.google.com"))return window.location.href.split("?")[0].split("#")[0];const e=localStorage.getItem(G.GAS_URL);return e!==null?e:Be}function se(e){const a=String(e||"").trim();a?localStorage.setItem(G.GAS_URL,a):localStorage.removeItem(G.GAS_URL)}function pe(){try{const e=sessionStorage.getItem(G.SESSION);return e?JSON.parse(e):null}catch{return null}}function ge(e){sessionStorage.setItem(G.SESSION,JSON.stringify(e))}function $e(){sessionStorage.removeItem(G.SESSION)}function fe(e){if(!e||typeof e!="number"||e<1)return null;const a=Math.floor((e-1)/5)*5+1,d=(Math.floor((e-1)/5)+1)*5;return a+"~"+d+"名"}function he(e){if(!e||typeof e!="number"||e<1)return null;const a=Math.floor((e-1)/10)*10+1,d=(Math.floor((e-1)/10)+1)*10;return a+"~"+d+"名"}function De(){const e=[{studentId:"11470101",name:"余子瀚",className:"7年1班",seatNo:1,idLast4:"1234",birthdayMMDD:"0101",password:"12340101"},{studentId:"11470102",name:"林玹德",className:"7年1班",seatNo:2,idLast4:"2345",birthdayMMDD:"0202",password:"23450202"},{studentId:"11470104",name:"徐常碩",className:"7年1班",seatNo:4,idLast4:"3456",birthdayMMDD:"0303",password:"34560303"},{studentId:"11470105",name:"許鈞翔",className:"7年1班",seatNo:5,idLast4:"4567",birthdayMMDD:"0404",password:"45670404"},{studentId:"11470106",name:"陳冠宇",className:"7年1班",seatNo:6,idLast4:"5678",birthdayMMDD:"0505",password:"56780505"},{studentId:"11480101",name:"申啟智",className:"8年1班",seatNo:1,idLast4:"3841",birthdayMMDD:"1018",password:"38411018"},{studentId:"11480102",name:"吳宏安",className:"8年1班",seatNo:2,idLast4:"5920",birthdayMMDD:"0815",password:"59200815"},{studentId:"11480103",name:"李明原",className:"8年1班",seatNo:3,idLast4:"7104",birthdayMMDD:"0520",password:"71040520"},{studentId:"11480105",name:"林烜",className:"8年1班",seatNo:5,idLast4:"6391",birthdayMMDD:"0412",password:"63910412"},{studentId:"11480106",name:"倪聖恩",className:"8年1班",seatNo:6,idLast4:"8412",birthdayMMDD:"0930",password:"84120930"},{studentId:"11480108",name:"曾承淞",className:"8年1班",seatNo:8,idLast4:"4726",birthdayMMDD:"0719",password:"47260719"},{studentId:"11480109",name:"黃瑀晨",className:"8年1班",seatNo:9,idLast4:"9035",birthdayMMDD:"1208",password:"90351208"},{studentId:"11480110",name:"楊宇傑",className:"8年1班",seatNo:10,idLast4:"3187",birthdayMMDD:"0314",password:"31870314"},{studentId:"11480111",name:"廖祥甫",className:"8年1班",seatNo:11,idLast4:"6540",birthdayMMDD:"0622",password:"65400622"},{studentId:"11480113",name:"潘暘昕",className:"8年1班",seatNo:13,idLast4:"4219",birthdayMMDD:"0808",password:"42190808"},{studentId:"11480114",name:"黎冠昇",className:"8年1班",seatNo:14,idLast4:"5308",birthdayMMDD:"1031",password:"53081031"},{studentId:"11480115",name:"顏丞佑",className:"8年1班",seatNo:15,idLast4:"1942",birthdayMMDD:"0505",password:"19420505"},{studentId:"11480116",name:"蘇昀晨",className:"8年1班",seatNo:16,idLast4:"7823",birthdayMMDD:"0228",password:"78230228"},{studentId:"11490101",name:"江成博",className:"9年1班",seatNo:1,idLast4:"1111",birthdayMMDD:"0901",password:"11110901"},{studentId:"11490102",name:"吳彥霆",className:"9年1班",seatNo:2,idLast4:"2222",birthdayMMDD:"0902",password:"22220902"},{studentId:"11490103",name:"李元翔",className:"9年1班",seatNo:3,idLast4:"3333",birthdayMMDD:"0903",password:"33330903"},{studentId:"11490106",name:"高俊哲",className:"9年1班",seatNo:6,idLast4:"6666",birthdayMMDD:"0906",password:"66660906"},{studentId:"11490107",name:"許修齊",className:"9年1班",seatNo:7,idLast4:"7777",birthdayMMDD:"0907",password:"77770907"}],a=[{account:"tf51056",name:"張雅琪 導師",assignedClass:"7年1班",password:"701701",mustChangePassword:!0,email:"tf51056@dsjh.tyc.edu.tw"},{account:"tf51032",name:"李俊毅 導師",assignedClass:"7年2班",password:"702702",mustChangePassword:!0,email:"tf51032@dsjh.tyc.edu.tw"},{account:"tf51011",name:"王明貴 導師",assignedClass:"7年3班",password:"703703",mustChangePassword:!0,email:"tf51011@dsjh.tyc.edu.tw"},{account:"tf51112",name:"王宣惠 導師",assignedClass:"7年4班",password:"704704",mustChangePassword:!0,email:"tf51112@dsjh.tyc.edu.tw"},{account:"tf51027",name:"陳小鈴 導師",assignedClass:"7年5班",password:"705705",mustChangePassword:!0,email:"tf51027@dsjh.tyc.edu.tw"},{account:"tf51237",name:"武道協卡 導師",assignedClass:"7年6班",password:"706706",mustChangePassword:!0,email:"tf51237@dsjh.tyc.edu.tw"},{account:"tf51154",name:"張銘峰 導師",assignedClass:"7年7班",password:"707707",mustChangePassword:!0,email:"tf51154@dsjh.tyc.edu.tw"},{account:"tf51125",name:"韓美瑛 導師",assignedClass:"7年8班",password:"708708",mustChangePassword:!0,email:"tf51125@dsjh.tyc.edu.tw"},{account:"tf51115",name:"吳嘉祥 導師",assignedClass:"7年9班",password:"709709",mustChangePassword:!0,email:"tf51115@dsjh.tyc.edu.tw"},{account:"tf51241",name:"塗美文 導師",assignedClass:"7年10班",password:"710710",mustChangePassword:!0,email:"tf51241@dsjh.tyc.edu.tw"},{account:"tf51076",name:"游敬廉 導師",assignedClass:"7年10班",password:"710710",mustChangePassword:!0,email:"tf51076@dsjh.tyc.edu.tw"},{account:"tf51039",name:"劉惠珠 導師",assignedClass:"8年1班",password:"801801",mustChangePassword:!0,email:"tf51039@dsjh.tyc.edu.tw"},{account:"tf51138",name:"羅培瑛 導師",assignedClass:"8年2班",password:"802802",mustChangePassword:!0,email:"tf51138@dsjh.tyc.edu.tw"},{account:"tf51035",name:"陳惠晶 導師",assignedClass:"8年3班",password:"803803",mustChangePassword:!0,email:"tf51035@dsjh.tyc.edu.tw"},{account:"tf51135",name:"張一梅 導師",assignedClass:"8年4班",password:"804804",mustChangePassword:!0,email:"tf51135@dsjh.tyc.edu.tw"},{account:"tf51057",name:"蔡淑禎 導師",assignedClass:"8年5班",password:"805805",mustChangePassword:!0,email:"tf51057@dsjh.tyc.edu.tw"},{account:"tf51130",name:"黃文昌 導師",assignedClass:"8年6班",password:"806806",mustChangePassword:!0,email:"tf51130@dsjh.tyc.edu.tw"},{account:"tf51134",name:"謝如琳 導師",assignedClass:"8年7班",password:"807807",mustChangePassword:!0,email:"tf51134@dsjh.tyc.edu.tw"},{account:"tf51073",name:"陳毅宏 導師",assignedClass:"8年8班",password:"808808",mustChangePassword:!0,email:"tf51073@dsjh.tyc.edu.tw"},{account:"tf51031",name:"陳秋梅 導師",assignedClass:"8年9班",password:"809809",mustChangePassword:!0,email:"tf51031@dsjh.tyc.edu.tw"},{account:"tf51140",name:"康嘉玲 導師",assignedClass:"9年1班",password:"901901",mustChangePassword:!0,email:"tf51140@dsjh.tyc.edu.tw"},{account:"tf51084",name:"陳建生 導師",assignedClass:"9年2班",password:"902902",mustChangePassword:!0,email:"tf51084@dsjh.tyc.edu.tw"},{account:"tf51142",name:"劉信志 導師",assignedClass:"9年3班",password:"903903",mustChangePassword:!0,email:"tf51142@dsjh.tyc.edu.tw"},{account:"tf51043",name:"林璟薇 導師",assignedClass:"9年4班",password:"904904",mustChangePassword:!0,email:"tf51043@dsjh.tyc.edu.tw"},{account:"tf51036",name:"張秀萍 導師",assignedClass:"9年5班",password:"905905",mustChangePassword:!0,email:"tf51036@dsjh.tyc.edu.tw"},{account:"tf51133",name:"周育秀 導師",assignedClass:"9年6班",password:"906906",mustChangePassword:!0,email:"tf51133@dsjh.tyc.edu.tw"},{account:"tf51055",name:"文明慧 導師",assignedClass:"9年7班",password:"907907",mustChangePassword:!0,email:"tf51055@dsjh.tyc.edu.tw"},{account:"tf51051",name:"潘建銘 導師",assignedClass:"9年8班",password:"908908",mustChangePassword:!0,email:"tf51051@dsjh.tyc.edu.tw"},{account:"tf51008",name:"陳麗芳 導師",assignedClass:"9年9班",password:"909909",mustChangePassword:!0,email:"tf51008@dsjh.tyc.edu.tw"}],d=[{account:"admin",name:"註冊組長",password:"admin1234"}],n=[],o=e.filter(c=>c.className==="7年1班"),b=[{name:"余子瀚",s:[88,96,94,72.5,87.5,90,87.5]},{name:"林玹德",s:[84,96,92,87.5,97.5,90,80]},{name:"徐常碩",s:[87,100,95,82.5,95,82.5,80]},{name:"許鈞翔",s:[72,33,65,50,90,75,52.5]},{name:"陳冠宇",s:[73,94,86,60,90,92.5,92.5]}],l=["國文","英文","數學","地理","歷史","公民","生物"];b.forEach(c=>{const g=o.find($=>$.name===c.name);if(!g)return;const x={};l.forEach(($,S)=>{x[$]=c.s[S]});const v=c.s.reduce(($,S)=>$+S,0),f=Number((v/l.length).toFixed(1));n.push({gradeSheet:"七年級成績資料庫",academicYear:"114學年度",semester:"第1學期",examName:"第1次定期評量",name:g.name,className:g.className,seatNo:g.seatNo,subjects:x,totalScore:Number(v.toFixed(1)),averageScore:f,gradeLevel:f>=90?"優":f>=80?"甲":f>=70?"乙":f>=60?"丙":"丁"})});const s=e.filter(c=>c.className==="8年1班"),t=["國文","英文","數學","地理","歷史","公民","理化"],r=[{name:"申啟智",s:[39.5,22,12,55,50,37.5,25]},{name:"吳宏安",s:[63,18,18,52.5,60,75,27.5]},{name:"李明原",s:[49.5,72,93,62.5,95,67.5,67.5]},{name:"林烜",s:[79.5,87,98,87.5,100,92.5,80]},{name:"倪聖恩",s:[54,34,78,55,45,40,47.5]},{name:"曾承淞",s:[75,71,69,75,95,75,70]},{name:"黃瑀晨",s:[76.5,45,65,62.5,65,65,70]},{name:"楊宇傑",s:[78,76,80,100,92.5,90,97.5]},{name:"廖祥甫",s:[55.5,68,57,60,70,57.5,57.5]},{name:"潘暘昕",s:[95,89,97,100,100,100,80]},{name:"黎冠昇",s:[49.5,66,79,55,70,75,67.5]},{name:"顏丞佑",s:[51.5,17,53,67.5,82.5,75,57.5]},{name:"蘇昀晨",s:[68,81,93,75,85,87.5,77.5]}];["第1次定期評量","第2次定期評量"].forEach((c,g)=>{r.forEach((x,v)=>{const f=s.find(m=>m.name===x.name);if(!f)return;const $=g===0?0:v%3===0?4:v%3===1?-2:3,S={};t.forEach((m,h)=>{S[m]=Math.min(100,Math.max(20,Number((x.s[h]+$).toFixed(1))))});const N=Object.values(S).reduce((m,h)=>m+h,0),w=Number((N/t.length).toFixed(1)),C=S.地理!==void 0&&S.歷史!==void 0&&S.公民!==void 0?Number(((S.地理+S.歷史+S.公民)/3).toFixed(1)):null;n.push({gradeSheet:"八年級成績資料庫",academicYear:"114學年度",semester:"第1學期",examName:c,name:f.name,className:f.className,seatNo:f.seatNo,subjects:S,socialAverage:C,scienceAverage:null,totalScore:Number(N.toFixed(1)),averageScore:w,gradeLevel:w>=90?"優":w>=80?"甲":w>=70?"乙":w>=60?"丙":"丁"})})});const i=e.filter(c=>c.className==="9年1班"),p=["國文","英文","數學","地理","歷史","公民","理化","地科","生物"];return[{name:"江成博",s:[43,63,52,45,60,62.5,40,46,35]},{name:"吳彥霆",s:[90,93,97,87.5,100,90,85,92,100]},{name:"李元翔",s:[47,38,48,55,72.5,47.5,30,59,50]},{name:"高俊哲",s:[64,83,75,80,95,90,75,73,100]},{name:"許修齊",s:[84,88,98,85,100,92.5,92.5,89,100]}].forEach(c=>{const g=i.find(N=>N.name===c.name);if(!g)return;const x={};p.forEach((N,w)=>{x[N]=c.s[w]});const v=c.s.reduce((N,w)=>N+w,0),f=Number((v/p.length).toFixed(1)),$=Number(((x.地理+x.歷史+x.公民)/3).toFixed(1)),S=Number(((x.理化*3+x.地科*2+x.生物*1)/6).toFixed(1));n.push({gradeSheet:"九年級成績資料庫",academicYear:"114學年度",semester:"第1學期",examName:"第1次定期評量",name:g.name,className:g.className,seatNo:g.seatNo,subjects:x,socialAverage:$,scienceAverage:S,totalScore:Number(v.toFixed(1)),averageScore:f,gradeLevel:f>=90?"優":f>=80?"甲":f>=70?"乙":f>=60?"丙":"丁"})}),{students:e,teachers:a,admins:d,grades:n}}function Te(){try{const a=localStorage.getItem(G.LOCAL_DB);if(a)return JSON.parse(a)}catch{}const e=De();return localStorage.setItem(G.LOCAL_DB,JSON.stringify(e)),e}function Pe(e){localStorage.setItem(G.LOCAL_DB,JSON.stringify(e))}function re(e,a){if(e==null||e===""||a==null||a==="")return!1;const d=String(e).trim(),n=String(a).trim();if(d===n)return!0;const o=s=>{if(!s)return null;const t=parseFloat(s);if(!isNaN(t)&&!s.includes("年")&&!s.includes("班")){let p=Math.floor(t);return p>=701&&p<=999&&(p=p%100),p}const r=s.match(/年(\d+)班/)||s.match(/(\d+)班/)||s.match(/(\d+)/);if(!r)return null;let i=parseInt(r[1],10);return i>=701&&i<=999&&(i=i%100),i},b=o(d),l=o(n);return b!==null&&l!==null&&b===l}function de(e){if(!e.length)return{ding:0,qian:0,jun:0,hou:0,di:0};const a=e.length,d=n=>{const o=(a-1)*n,b=Math.floor(o),l=Math.ceil(o),s=o-b;return Number((e[b]*(1-s)+e[l]*s).toFixed(1))};return{ding:d(.88),qian:d(.75),jun:d(.5),hou:d(.25),di:d(.12)}}function He(e,a){if(!e||!e.length)return 0;const d=e.slice().sort((s,t)=>s-t),n=d.length,o=(n-1)*(a/4),b=Math.floor(o),l=o-b;return b+1<n?d[b]+l*(d[b+1]-d[b]):d[b]}function Q(e){const a=[];let d=0;for(let r=0;r<e.length;r++){const i=e[r];typeof i=="number"&&isFinite(i)?a.push(i):d++}if(a.length===0)return{average:0,high:0,low:0};const n=a.reduce((r,i)=>r+i,0)/a.length,o=He(a,2),b=a.filter(r=>r>=o),l=b.length?b.reduce((r,i)=>r+i,0)/b.length:0,s=a.filter(r=>r<=o);for(let r=0;r<d;r++)s.push(0);const t=s.length?s.reduce((r,i)=>r+i,0)/s.length:0;return{average:n,high:l,low:t}}function ve(e,a,d){const n={};a.forEach(i=>{const p=e.map(L=>{const c=L.scores||L.subjects;return c&&typeof c[i]=="number"?c[i]:null});n[i]=Q(p),i==="英文"&&(n.英語=n[i]),i==="英語"&&(n.英文=n[i])});const o=e.map(i=>typeof i.socialAverage=="number"?i.socialAverage:null);if(n.社會=n.社會平均=n.社平=Q(o),d){const i=e.map(p=>typeof p.scienceAverage=="number"?p.scienceAverage:null);n.自然=n.自然平均=n.自平=Q(i)}const b=n.英語?"英語":"英文",l=d?"自然":n.生物?"生物":"理化",s=(n.國文?.average||0)+(n[b]?.average||0)+(n.數學?.average||0)+(n.社會?.average||0)+(n[l]?.average||0),t=(n.國文?.high||0)+(n[b]?.high||0)+(n.數學?.high||0)+(n.社會?.high||0)+(n[l]?.high||0),r=(n.國文?.low||0)+(n[b]?.low||0)+(n.數學?.low||0)+(n.社會?.low||0)+(n[l]?.low||0);if(n.總分={average:s,high:t,low:r},d){const i=e.map(p=>typeof p.averageScore=="number"?p.averageScore:null);n.平均=Q(i)}else n.平均={average:s/5,high:t/5,low:r/5};return n}function W(e,a){const d={};return e&&Object.keys(e).forEach(n=>{e[n]&&typeof e[n][a]=="number"&&(d[n]=Number(e[n][a].toFixed(2)))}),d}function ye(e,a,d,n,o){const b=a.filter(i=>{const p=i.identity;return p!=="體育班"&&p!=="特教"&&p!=="特教班"&&p!=="秀才"}),l=a.filter(i=>{const p=i.identity;return p!=="特教"&&p!=="特教班"&&p!=="秀才"}),s=ve(e,d,n),t=ve(o?l:b,d,n);return{cohortLabel:o?"含體育班":"不含體育班",isSportsClass:!!o,classBenchmarks:s,schoolBenchmarks:t,classAverage:W(s,"average"),schoolAverage:W(t,"average"),classHigh:W(s,"high"),schoolHigh:W(t,"high"),classLow:W(s,"low"),schoolLow:W(t,"low")}}async function P(e,a={}){const d=te(),n={action:e,authToken:pe()?.authToken,...a};if(typeof window<"u"&&window.google?.script?.run)try{return await new Promise((o,b)=>{window.google.script.run.withSuccessHandler(o).withFailureHandler(b).requestApiBridge(n)})}catch{return{success:!1,message:"系統服務暫時無法回應，請稍後重試或洽教務處註冊組。"}}if(d)try{const o=await fetch(d,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(n)});if(!o.ok)throw new Error(`GAS 伺服器回應錯誤 (狀態碼 ${o.status})`);return await o.json()}catch{return{success:!1,message:"無法連線至校務服務，請稍後重試；如持續發生，請洽教務處註冊組。"}}return qe(e,a)}function qe(e,a){const d=Te();switch(e){case"ping":return{success:!0,mode:"mock",message:"本地示範資料庫運作正常（未設定 GAS 網址）"};case"login":{const{role:n,account:o,password:b}=a;if(!o||!b)return{success:!1,message:"請輸入帳號與密碼"};if(n==="student"){const l=d.students.find(s=>s.studentId===o);return l?l.password!==b?{success:!1,message:"密碼錯誤，請輸入身分證後四碼＋生日共8碼"}:{success:!0,role:"student",authToken:"mock-token-student-"+l.studentId,user:{studentId:l.studentId,name:l.name,className:l.className,seatNo:l.seatNo},mustChangePassword:!1}:{success:!1,message:"查無此學號"}}if(n==="teacher"){const l=d.teachers.find(s=>s.account.toLowerCase()===o.toLowerCase()||o.toLowerCase()===`t${s.assignedClass.replace(/\D/g,"")}`||o===s.assignedClass.replace(/\D/g,"")||re(s.assignedClass,o));return l?l.password!==b?{success:!1,message:"導師密碼錯誤"}:{success:!0,role:"teacher",authToken:"mock-token-teacher-"+l.account,user:{account:l.account,name:l.name,assignedClass:l.assignedClass},mustChangePassword:!!l.mustChangePassword}:{success:!1,message:"查無此教師帳號"}}if(n==="admin"){const l=d.admins.find(s=>s.account.toLowerCase()===o.toLowerCase());return l?l.password!==b?{success:!1,message:"管理者密碼錯誤"}:{success:!0,role:"admin",authToken:"mock-token-admin-"+l.account,user:{account:l.account,name:l.name},mustChangePassword:!1}:{success:!1,message:"查無管理者帳號"}}return{success:!1,message:"未知的身分角色"}}case"changeTeacherPassword":{const{account:n,newPassword:o}=a,b=d.teachers.find(l=>l.account.toLowerCase()===(n||"").toLowerCase());return b?(b.password=o,b.mustChangePassword=!1,Pe(d),{success:!0,message:"密碼已順利變更完成！"}):{success:!1,message:"找不到導師帳號"}}case"getStudentScores":{const{studentId:n}=a,o=d.students.find(s=>s.studentId===n);if(!o)return{success:!1,message:"該學號目前不在最新在校學生名單中"};const l=d.grades.filter(s=>s.studentId&&s.studentId===n||s.name===o.name&&(s.seatNo===o.seatNo||re(s.className,o.className))).map(s=>{const t=d.grades.filter(N=>N.examName===s.examName&&N.className===s.className),r=t.map(N=>N.averageScore).sort((N,w)=>N-w),i=de(r),p=Object.keys(s.subjects||{}),L={};p.forEach(N=>{const w=t.map(C=>C.subjects&&C.subjects[N]||0).sort((C,m)=>C-m);L[N]={average:w.length?Number((w.reduce((C,m)=>C+m,0)/w.length).toFixed(1)):0,...de(w)}});const g=1+t.map(N=>N.averageScore).sort((N,w)=>w-N).filter(N=>N>s.averageScore).length,x=g,v=/[九9]/.test(s.gradeSheet||"")||/^([九9])\s*年|^9\d{2}$/.test(String(s.className||"").trim())||p.includes("地科"),f=s.identity==="體育班"||t.some(N=>N.identity==="體育班")||/(?:^|[^\d])9班|(?:\d09)$/.test(s.className),$=d.grades.filter(N=>N.examName===s.examName),S=ye(t,$.length?$:t,p,v,f);return{...s,scienceAverage:v?s.scienceAverage:null,classRank:g,classRankInterval:fe(g),schoolRank:x,schoolPR:80,schoolRankInterval:he(x),benchmarks:S,classStats:{studentCount:t.length,fiveBenchmarks:i,subjectBenchmarks:L}}});return{success:!0,student:o,exams:l}}case"getTeacherClassData":{const{teacherAccount:n,className:o}=a,b=d.teachers.find(i=>i.account.toLowerCase()===(n||"").toLowerCase()),l=o||(b?b.assignedClass:"8年1班"),s=d.grades.filter(i=>re(i.className,l)),r=Array.from(new Set(s.map(i=>i.examName))).map(i=>{const p=s.filter(m=>m.examName===i).sort((m,h)=>m.seatNo-h.seatNo),L=p.map(m=>m.averageScore).sort((m,h)=>m-h),c=p.length,g=de(L),x=p.length?Object.keys(p[0].subjects||{}):[],v={};x.forEach(m=>{const h=p.map(A=>A.subjects&&A.subjects[m]||0);v[m]=h.length?Number((h.reduce((A,j)=>A+j,0)/h.length).toFixed(1)):0});const f={優:0,甲:0,乙:0,丙:0,丁:0};p.forEach(m=>{f[m.gradeLevel]!==void 0&&f[m.gradeLevel]++});const $=p.filter(m=>m.averageScore>=60).length,S=/^([九9])\s*年|^9\d{2}$/.test(String(l||"").trim())||x.includes("地科"),N=p.some(m=>m.identity==="體育班")||/(?:^|[^\d])9班|(?:\d09)$/.test(l),w=d.grades.filter(m=>m.examName===i),C=ye(p,w.length?w:p,x,S,N);return{examName:i,totalStudents:c,subjects:x,subjectAverages:v,fiveBenchmarks:g,benchmarks:C,gradeDistribution:f,passCount:$,passRate:c?Math.round($/c*100):0,students:p.map(m=>{const h=1+L.filter(A=>A>m.averageScore).length;return{studentId:m.studentId,name:m.name,seatNo:m.seatNo,identity:m.identity,scores:m.subjects,socialAverage:m.socialAverage,scienceAverage:S?m.scienceAverage:null,totalScore:m.totalScore,averageScore:m.averageScore,gradeLevel:m.gradeLevel,classRank:h,classRankInterval:fe(h),schoolRank:h,schoolPR:80,schoolRankInterval:he(h),isFailing:m.averageScore<60}})}});return{success:!0,className:l,exams:r}}case"logout":case"logoutAdmin":return{success:!0};case"getAdminOverview":{const n=d.grades.filter(l=>(l.gradeSheet||"").includes("七年級")).length,o=d.grades.filter(l=>(l.gradeSheet||"").includes("八年級")).length,b=d.grades.filter(l=>(l.gradeSheet||"").includes("九年級")).length;return{success:!0,stats:{studentCount:d.students.length,teacherCount:d.teachers.length,grade7Count:n,grade8Count:o,grade9Count:b,gradeRecordCount:d.grades.length,examCount:2,exams:["第1次定期評量","第2次定期評量"]}}}default:return{success:!1,message:"未支援的本地測試動作: "+e}}}function u(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function M(e,a="success"){const d=document.getElementById("toast-root");if(!d)return;const n=document.createElement("div"),o=a==="error";n.className=`pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-lg shadow-xl text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${o?"bg-rose-600 text-white":"bg-slate-900 text-white border-l-4 border-emerald-500"}`,n.innerHTML=`
    <span>${o?"⚠️":"✓"}</span>
    <span>${u(e)}</span>
  `,d.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{n.classList.add("opacity-0","translate-y-2"),setTimeout(()=>n.remove(),300)},3600)}function ae(e,a){const d=document.getElementById("modal-root");if(!d)return;d.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="active-modal-backdrop">
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true">
        ${e}
      </div>
    </div>
  `;const n=document.getElementById("active-modal-backdrop");n?.addEventListener("click",o=>{o.target===n&&F()}),typeof a=="function"&&a(d)}function F(){const e=document.getElementById("modal-root");e&&(e.innerHTML="")}function U(e){const a=String(e||"丁").trim(),d={優:"bg-emerald-50 text-emerald-700 border-emerald-300",甲:"bg-blue-50 text-blue-700 border-blue-300",乙:"bg-sky-50 text-sky-700 border-sky-300",丙:"bg-amber-50 text-amber-700 border-amber-300",丁:"bg-rose-50 text-rose-700 border-rose-300 font-bold"},n={優:"優等 (90分以上)",甲:"甲等 (80-89分)",乙:"乙等 (70-79分)",丙:"丙等 (60-69分，及格基準)",丁:"丁等 (未滿60分，待加強扶助)"};return`<span class="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-semibold border ${d[a]||d.丁}" title="${n[a]||""}">${u(a)}等</span>`}function _e(e,a){if(!a)return'<span class="text-xs text-slate-400">-</span>';const{ding:d=0,qian:n=0,jun:o=0,hou:b=0,di:l=0}=a,s=Number(e)||0;let t="未達底標",r="bg-rose-100 text-rose-800";return s>=d?(t="🌟 超越頂標",r="bg-emerald-100 text-emerald-800 font-bold"):s>=n?(t="✨ 頂標 ~ 前標之間",r="bg-blue-100 text-blue-800 font-bold"):s>=o?(t="👍 前標 ~ 均標之間",r="bg-sky-100 text-sky-800"):s>=b?(t="均標 ~ 後標之間",r="bg-amber-100 text-amber-800"):s>=l&&(t="後標 ~ 底標之間",r="bg-orange-100 text-orange-800"),`
    <div class="flex flex-col gap-1 w-full max-w-xs">
      <div class="flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>底: ${l}</span>
        <span>均: ${o}</span>
        <span>頂: ${d}</span>
      </div>
      <div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
        <div class="h-full bg-rose-400" style="width: 20%;" title="底標: ${l}"></div>
        <div class="h-full bg-amber-400" style="width: 25%;" title="後標: ${b}"></div>
        <div class="h-full bg-sky-400" style="width: 25%;" title="均標: ${o}"></div>
        <div class="h-full bg-blue-400" style="width: 18%;" title="前標: ${n}"></div>
        <div class="h-full bg-emerald-500" style="width: 12%;" title="頂標: ${d}"></div>
      </div>
      <div class="mt-0.5">
        <span class="inline-block text-[11px] px-2 py-0.5 rounded ${r}">${t}</span>
      </div>
    </div>
  `}let Z=null,X=null;async function Fe(e,a){e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表載入成績紀錄...</span>
    </div>
  `;const d=await P("getStudentScores",{studentId:a.studentId});if(!d.success){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入成績資料</h3>
        <p class="text-slate-600 mb-6 text-sm">${u(d.message||"查無此學號之學籍或成績紀錄")}</p>
        <button id="btn-portal-back" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">返回登入頁</button>
      </div>
    `,document.getElementById("btn-portal-back")?.addEventListener("click",()=>{window.location.reload()});return}const{student:n,exams:o}=d;if(!o||o.length===0){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">尚未發布定期評量成績</h3>
        <p class="text-slate-600 text-sm">【${u(n.className)}】目前試算表尚無開放查詢之成績，請靜候學校教務處公告。</p>
      </div>
    `;return}let b=o.length-1;function l(){const t=o[b],r=Object.keys(t.subjects||{}),i=t.classStats||{},p=i.fiveBenchmarks||{},L=i.subjectBenchmarks||{},c=t.benchmarks||{},g=c.cohortLabel||t.schoolCohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(n.className)?"含體育班":"不含體育班"),x=f=>f==null||isNaN(f)?"-":Number(f).toFixed(2),v=/[九9]/.test(t.gradeSheet||"")||/^([九9])\s*年|^9\d{2}$/.test(String(t.className||"").trim())||r.includes("地科");e.innerHTML=`
      <div class="student-print-sheet">
      <!-- A4 列印頁首 (列印時才顯現) -->
      <div class="student-print-header hidden print:block mb-6 border-b-2 border-slate-800 pb-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-serif font-bold text-slate-900">市立大溪國民中學 學生定期學習評量成績通知單</h1>
            <p class="text-sm text-slate-600 mt-1">
              評量次別：${u(t.academicYear)} ${u(t.semester)} ${u(t.examName)} ｜ 
              班級：${u(t.className||n.className)} ｜ 座號：${u(n.seatNo)} 號 ｜ 姓名：${u(n.name)}（學號：${u(n.studentId)}）
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
            <h2 class="text-2xl font-bold text-slate-900">${u(n.name)} 同學</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${u(n.className)} ${u(n.seatNo)}號</span>
          </div>
          <p class="text-slate-500 text-xs mt-1 font-mono">學號：${u(n.studentId)} ｜ 個人評量紀錄</p>
        </div>

        <div class="flex items-center gap-3 w-full sm:w-auto">
          <!-- 考試切換下拉選單 -->
          <div class="flex-1 sm:flex-none">
            <select id="exam-selector" class="w-full sm:w-auto px-4 py-2 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              ${o.map((f,$)=>`
                <option value="${$}" ${$===b?"selected":""}>
                  ${u(f.academicYear)} ${u(f.semester)} ${u(f.examName)}
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

      <p class="calculation-note print:hidden">${u(t.calculationNote||"社會採地理、歷史、公民平均；各科折算依本次評量規則計算。")}</p>
      <!-- 核心成績指標概覽 (Cards) -->
      <div class="student-print-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 總分與平均 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">評量總成績</span>
            <div class="flex items-center gap-1.5">
              ${t.identity&&t.identity!=="*"?`<span class="text-xs px-2 py-0.5 rounded font-bold ${t.identity==="體育班"?"bg-blue-100 text-blue-800 border border-blue-200":"bg-amber-100 text-amber-800 border border-amber-200"}">${u(t.identity)}</span>`:""}
              <span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">五科總分 ${t.totalScore}</span>
            </div>
          </div>
          <div class="my-3">
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-black font-mono text-slate-900">${t.averageScore}</span>
              <span class="text-sm font-medium text-slate-500">五科平均</span>
            </div>
            <div class="flex items-center gap-2 mt-2 text-xs text-slate-600 font-mono">
              ${t.socialAverage!==null&&t.socialAverage!==void 0?`<span class="bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded font-medium">社平: <b>${Number(t.socialAverage).toFixed(1)}</b></span>`:""}
              ${v&&t.scienceAverage!==null&&t.scienceAverage!==void 0?`<span class="bg-cyan-50 text-cyan-800 border border-cyan-200 px-1.5 py-0.5 rounded font-medium">自平: <b>${Number(t.scienceAverage).toFixed(1)}</b></span>`:""}
            </div>
          </div>
          <div class="text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2.5">
            <span>及格基準：60 分</span>
            <span class="${t.averageScore>=60?"text-emerald-600 font-bold":"text-rose-600 font-bold"}">
              ${t.averageScore>=60?"達到及格標準":"建議加強練習"}
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
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-serif ${t.gradeLevel==="優"?"bg-emerald-100 text-emerald-800 border-2 border-emerald-400":t.gradeLevel==="甲"?"bg-blue-100 text-blue-800 border-2 border-blue-400":t.gradeLevel==="乙"?"bg-sky-100 text-sky-800 border-2 border-sky-400":t.gradeLevel==="丙"?"bg-amber-100 text-amber-800 border-2 border-amber-400":"bg-rose-100 text-rose-800 border-2 border-rose-400"}">
              ${u(t.gradeLevel)}
            </div>
            <div>
              <div class="font-bold text-slate-900">${u(t.gradeLevel)}等</div>
              <div class="text-xs text-slate-500 mt-0.5">
                ${t.gradeLevel==="優"?"表現優異 (90分以上)":t.gradeLevel==="甲"?"表現良好 (80-89分)":t.gradeLevel==="乙"?"表現尚可 (70-79分)":t.gradeLevel==="丙"?"法定及格基準 (60-69分)":"需補救扶助 (未滿60分)"}
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
              <span class="text-xs font-bold font-mono text-emerald-800">${u(t.classRankInterval||(t.classRank?t.classRank+"名":"-"))}</span>
            </div>
            <div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200">
              <span class="text-xs text-blue-900 font-medium">年級序位 (10人)</span>
              <span class="text-xs font-bold font-mono text-blue-800">${u(t.schoolRankInterval||(t.schoolRank?t.schoolRank+"名":"-"))}</span>
            </div>
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2.5 flex justify-between">
            <span>班級：${i.studentCount||t.classSize||"-"} 人</span>
            <span class="font-mono text-slate-400">${t.schoolCohortLabel?`${t.schoolCohortLabel}評定`:"全校評定"}</span>
          </div>
        </div>

        <!-- 班級五標落點定位條 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">班級五標落點分佈</span>
            <span class="text-[11px] text-slate-400">${i.studentCount||0} 人統計</span>
          </div>
          <div class="my-2">
            ${_e(t.averageScore,p)}
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-mono flex justify-between">
            <span>頂標: ${p.ding||0}</span>
            <span>均標: ${p.jun||0}</span>
            <span>底標: ${p.di||0}</span>
          </div>
        </div>
      </div>

      <!-- 各領域詳細成績表 -->
      <div class="student-print-table-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div class="student-print-table-header px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2">
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-slate-800 text-sm">各領域學科學習評量成績表</h3>
            <span class="text-[11px] bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-medium">年標參照：${u(g)}</span>
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
              ${(()=>{let f=!1;const $=()=>{if(t.socialAverage===null||t.socialAverage===void 0)return"";f=!0;const w=Number(Number(t.socialAverage).toFixed(1));let C="丁";w>=90?C="優":w>=80?C="甲":w>=70?C="乙":w>=60&&(C="丙");const m=x(c.classAverage?.社平??c.classAverage?.社會),h=x(c.schoolAverage?.社平??c.schoolAverage?.社會),A=x(c.classHigh?.社平??c.classHigh?.社會),j=x(c.schoolHigh?.社平??c.schoolHigh?.社會),I=x(c.classLow?.社平??c.classLow?.社會),E=x(c.schoolLow?.社平??c.schoolLow?.社會);return`
                    <tr class="bg-amber-50/50 font-medium">
                      <td class="px-4 py-3.5 font-bold text-amber-900 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>社會領域平均 (地理/歷史/公民)</span>
                      </td>
                      <td class="px-3 py-3.5 text-center font-mono font-black text-base ${w>=60?"text-amber-900":"text-rose-600"}">${w}</td>
                      <td class="px-3 py-3.5 text-center">${U(C)}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${m}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${h}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${A}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${j}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${I}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${E}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${w>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                      </td>
                    </tr>
                  `},S=r.map(w=>{const C=t.subjects[w],m=C!=null,h=m?C:null;let A="丁";m&&(h>=90?A="優":h>=80?A="甲":h>=70?A="乙":h>=60&&(A="丙"));const j=L[w]||{},I=c.classAverage?x(c.classAverage[w]):j.average?x(j.average):"-",E=c.schoolAverage?x(c.schoolAverage[w]):"-",D=c.classHigh?x(c.classHigh[w]):j.qian?x(j.qian):"-",T=c.schoolHigh?x(c.schoolHigh[w]):"-",oe=c.classLow?x(c.classLow[w]):j.hou?x(j.hou):"-",H=c.schoolLow?x(c.schoolLow[w]):"-",O=`
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="px-4 py-3.5 font-medium text-slate-900">${u(w)}</td>
                      <td class="px-3 py-3.5 text-center font-mono font-bold text-base ${m?h>=60?"text-slate-900":"text-rose-600":"text-slate-400"}">
                        ${m?h:'<span class="text-xs font-sans text-slate-400 font-normal">免測/個別評量</span>'}
                      </td>
                      <td class="px-3 py-3.5 text-center">${m?U(A):'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">特教適性</span>'}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${I}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${E}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${D}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${T}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${oe}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${H}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${m?h>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':'<span class="text-xs text-slate-400">個別化評定</span>'}
                      </td>
                    </tr>
                  `;return w==="公民"?O+$():O}).join(""),N=!f&&t.socialAverage!==null&&t.socialAverage!==void 0?$():"";return S+N})()}
              ${v&&t.scienceAverage!==null&&t.scienceAverage!==void 0?(()=>{const f=Number(Number(t.scienceAverage).toFixed(1));let $="丁";f>=90?$="優":f>=80?$="甲":f>=70?$="乙":f>=60&&($="丙");const S=x(c.classAverage?.自平??c.classAverage?.自然),N=x(c.schoolAverage?.自平??c.schoolAverage?.自然),w=x(c.classHigh?.自平??c.classHigh?.自然),C=x(c.schoolHigh?.自平??c.schoolHigh?.自然),m=x(c.classLow?.自平??c.classLow?.自然),h=x(c.schoolLow?.自平??c.schoolLow?.自然);return`
                  <tr class="bg-cyan-50/50 font-medium">
                    <td class="px-4 py-3.5 font-bold text-cyan-900 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span>自然科學領域平均 (理化3/地科2/生物1)</span>
                    </td>
                    <td class="px-3 py-3.5 text-center font-mono font-black text-base ${f>=60?"text-cyan-900":"text-rose-600"}">${f}</td>
                    <td class="px-3 py-3.5 text-center">${U($)}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${S}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${N}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${w}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${C}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${m}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${h}</td>
                    <td class="px-3 py-3.5 text-center">
                      ${f>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                    </td>
                  </tr>
                `})():""}
              <!-- 領域總分與總平均匯總行 -->
              ${c.classAverage?.總分!==void 0?`
                <tr class="bg-slate-100/70 font-semibold border-t-2 border-slate-300">
                  <td class="px-4 py-3 font-bold text-slate-800">領域總分</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${t.totalScore!==null&&t.totalScore!==void 0?t.totalScore:"-"}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-400">-</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(c.classAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(c.schoolAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(c.classHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(c.schoolHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(c.classLow?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(c.schoolLow?.總分)}</td>
                  <td class="px-3 py-3 text-center text-xs text-slate-400 font-normal">五領域加總</td>
                </tr>
                <tr class="bg-slate-100/70 font-semibold">
                  <td class="px-4 py-3 font-bold text-slate-800">評量平均</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${t.averageScore!==null&&t.averageScore!==void 0?t.averageScore:"-"}</td>
                  <td class="px-3 py-3 text-center">${t.hasScore!==!1?U(t.gradeLevel):'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>'}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(c.classAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${x(c.schoolAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(c.classHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${x(c.schoolHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(c.classLow?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${x(c.schoolLow?.平均)}</td>
                  <td class="px-3 py-3 text-center">
                    ${t.averageScore!==null&&t.averageScore!==void 0?t.averageScore>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':"-"}
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
    `,document.getElementById("exam-selector")?.addEventListener("change",f=>{b=Number(f.target.value)||0,l()}),document.getElementById("btn-print-report")?.addEventListener("click",()=>{window.print()}),s(t,o,r,L)}function s(t,r,i,p){if(typeof Chart>"u")return;Z&&(Z.destroy(),Z=null),X&&(X.destroy(),X=null);const L=document.getElementById("chart-radar");if(L){const g=i.map(v=>t.subjects[v]||0),x=i.map(v=>p[v]&&p[v].average||70);Z=new Chart(L,{type:"radar",data:{labels:i,datasets:[{label:"個人得分",data:g,fill:!0,backgroundColor:"rgba(13, 122, 95, 0.2)",borderColor:"#0D7A5F",pointBackgroundColor:"#0D7A5F",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#0D7A5F"},{label:"班級平均",data:x,fill:!0,backgroundColor:"rgba(71, 85, 105, 0.1)",borderColor:"#64748B",borderDash:[4,4],pointBackgroundColor:"#64748B"}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{r:{suggestedMin:30,suggestedMax:100,ticks:{stepSize:20}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}const c=document.getElementById("chart-trend");if(c){const g=r.map(f=>f.examName),x=r.map(f=>f.averageScore),v=r.map(f=>{const $=f.classStats||{};return $.fiveBenchmarks&&$.fiveBenchmarks.jun||70});X=new Chart(c,{type:"line",data:{labels:g,datasets:[{label:"個人平均分",data:x,borderColor:"#1D4ED8",backgroundColor:"#1D4ED8",tension:.3,borderWidth:3,pointRadius:5},{label:"班級均標 (P50)",data:v,borderColor:"#94A3B8",backgroundColor:"#94A3B8",borderDash:[5,5],tension:.2,pointRadius:3}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{suggestedMin:40,suggestedMax:100,ticks:{stepSize:10}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}}l()}function ce(){const e=new Date,a=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${a}年${d}月${n}日`}function Ge(e){if(e.identity==="學中")return"該生平時上課積極配合特教資源班適性課程，學習態度認真努力，各領域評量皆展現正向學習動機，期勉維持良好學習步調，持續突破自我！";if(e.identity==="體育班")return"該生兼顧體育專項訓練與學業課程，展現堅毅抗壓之運動員精神，學習態度專注踏實，期勉在競賽與課業雙軌上精益求精、為校爭光！";const a=e.averageScore||0;return a>=90?"該生本階段學習態度主動嚴謹，各領域核心素養精熟扎實，邏輯思維與學科探究能力俱佳，表現卓越非凡，值得高度嘉許！期勉持之以恆、勇於探索新知！":a>=80?"該生在校品學兼優、學習態度專注穩定，已確實掌握各領域核心概念，表現十分良好！若能在弱項科目更深入鑽研錯題盲點，必定能再攀高峰！":a>=70?"該生具備良好之學科基礎能力，上課規矩良好、能按時完成作業。建議課後多花時間統整觀念脈絡，主動向師長請教，學習成效必能大幅躍進！":a>=60?"該生各領域皆已達到法定及格基準，學習態度和善。建議妥善規劃每日課後複習時間，建立規律筆記習慣，循序漸進加強熟練度，期待更優異的表現！":"該生部分學科概念尚待強化，請家長毋須過度焦慮，建議與導師共同配合，落實課後錯題訂正並善用校內學習扶助輔導資源，攜手協助孩子重拾信心與成就感！"}function Oe(e,a){const d=a.ding||90,n=a.qian||80,o=a.jun||70,b=a.hou||60,l=a.di||50,s=Math.max(0,Math.min(100,e||0)),t=s;let r="均標附近";return s>=d?r="【頂標以上 (前12%)】表現精熟卓越":s>=n?r="【前標與頂標之間】表現良好":s>=o?r="【均標與前標之間】表現尚可":s>=b?r="【後標與均標之間】建議加強複習":s>=l?r="【底標與後標之間】需重點關懷":r="【底標以下】需積極參與補強扶助",`
    <div class="my-1.5 px-1">
      <div class="relative w-full h-5 bg-slate-100 rounded border border-slate-300 flex overflow-hidden">
        <!-- 5個區間 -->
        <div class="h-full bg-rose-50 border-r border-rose-200 flex items-center justify-center text-[9px] text-rose-700 font-mono" style="width: ${Math.max(10,l)}%;">底標 ${l}</div>
        <div class="h-full bg-amber-50 border-r border-amber-200 flex items-center justify-center text-[9px] text-amber-700 font-mono" style="width: ${Math.max(10,b-l)}%;">後標 ${b}</div>
        <div class="h-full bg-slate-50 border-r border-slate-300 flex items-center justify-center text-[9px] text-slate-700 font-mono" style="width: ${Math.max(10,o-b)}%;">均標 ${o}</div>
        <div class="h-full bg-blue-50 border-r border-blue-200 flex items-center justify-center text-[9px] text-blue-700 font-mono" style="width: ${Math.max(10,n-o)}%;">前標 ${n}</div>
        <div class="h-full bg-emerald-50 flex items-center justify-center text-[9px] text-emerald-800 font-mono flex-1">頂標 ${d}</div>
        
        <!-- 個人分數定位針 -->
        <div class="absolute top-0 bottom-0 w-1 bg-red-600 shadow-sm z-10" style="left: ${t}%;"></div>
      </div>
      <div class="flex justify-between items-center text-[10px] text-slate-600 mt-1">
        <span>個人落點診斷：<b class="text-slate-900">${r}</b></span>
        <span class="font-mono text-red-600 font-bold">▲ 學生五科平均: ${e} 分</span>
      </div>
    </div>
  `}function Ke(e){return["國文","英文","英語"].includes(e)?"語文領域":["數學"].includes(e)?"數學領域":["地理","歷史","公民"].includes(e)?"社會領域":["生物","理化","地科"].includes(e)?"自然科學領域":"專業學科"}function ke(e,a,d,n,o={}){const{includeRank:b=!0,includeTeacherNote:l=!0,printDate:s=ce(),customNote:t=""}=o,r=a.subjects||[],i=a.fiveBenchmarks||{},p=a.totalStudents||(a.students?a.students.length:0),L=t||Ge(e),c=a.className||d||"",g=/[九9]/.test(a.gradeSheet||"")||/[九9]/.test(a.gradeLevelLabel||"")||!a.gradeSheet&&/^([九9])\s*年|^9\d{2}$/.test(String(c).trim())||r.includes("地科");let x="一般生";return e.identity==="體育班"?x="體育班專項生":e.identity==="學中"?x="學習中心適性生":e.identity&&e.identity!=="*"&&(x=e.identity),`
    <div class="a4-report-card-page font-sans text-slate-900 bg-white flex flex-col justify-between" style="width: 100%; box-sizing: border-box;">
      
      <div>
        <!-- 1. 學校標頭與基本資料 -->
        <div class="text-center pb-1.5 border-b-2 border-slate-900 mb-1.5">
          <div class="flex items-center justify-center gap-2">
            <span class="text-xl font-black tracking-wider text-slate-900">桃園市立大溪國民中學</span>
          </div>
          <div class="text-sm font-bold tracking-wide text-slate-800 mt-0.5">
            ${u(a.academicYear||"114學年度")}${u(a.semester||"第1學期")} ${u(a.examName||"定期評量")} 個人成績通知單
          </div>
          
          <!-- 學生資訊條 -->
          <div class="mt-1.5 pt-1 border-t border-slate-300 grid grid-cols-6 gap-1 text-[11px] text-slate-700 text-left bg-slate-50/80 p-1.5 rounded border">
            <div>班級：<b class="text-slate-900">${u(d)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono text-xs">${e.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900 text-xs">${u(e.name)}</b></div>
            <div>學號：<span class="font-mono">${u(e.studentId||"-")}</span></div>
            <div>身分：<span class="${e.identity==="體育班"?"text-blue-700 font-bold":e.identity==="學中"?"text-amber-700 font-bold":"text-slate-700"}">${x}</span></div>
            <div class="text-right">導師：<span>${u(n)}</span></div>
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
              <div class="text-lg font-black mt-0.5 ${e.gradeLevel==="優"?"text-emerald-700":e.gradeLevel==="甲"?"text-blue-700":e.gradeLevel==="乙"?"text-sky-700":e.gradeLevel==="丙"?"text-amber-700":"text-rose-700"}">
                ${u(e.gradeLevel)} 等
              </div>
              <div class="text-[9px] text-slate-400">教育部第10條第3項</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 font-medium">序位區間 / 常模落點</div>
              <div class="text-xs font-bold font-mono text-slate-800 mt-0.5">
                ${b?`<div>班：<span class="text-slate-900 font-bold">${e.classRankInterval||(e.classRank?`第${e.classRank}名`:"-")}</span></div><div class="text-[10.5px] font-normal text-slate-600">校：${e.schoolRankInterval||(e.schoolRank?`第${e.schoolRank}名`:"-")}</div>`:'<span class="text-[11px] text-slate-500 font-normal">參見五標常模落點條</span>'}
              </div>
              <div class="text-[9px] text-slate-400">全班共 ${p} 人</div>
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
              ${(()=>{let v=!1;const f=()=>{if(e.socialAverage===null||e.socialAverage===void 0)return"";v=!0;const N=Number(Number(e.socialAverage).toFixed(1));let w="丁";N>=90?w="優":N>=80?w="甲":N>=70?w="乙":N>=60&&(w="丙");let C="-";return a.benchmarks?.classAverage?.社會!==void 0?C=Number(a.benchmarks.classAverage.社會).toFixed(1):a.subjectAverages&&a.subjectAverages.地理!==void 0&&a.subjectAverages.歷史!==void 0&&a.subjectAverages.公民!==void 0&&(C=(((Number(a.subjectAverages.地理)||0)+(Number(a.subjectAverages.歷史)||0)+(Number(a.subjectAverages.公民)||0))/3).toFixed(1)),`
                    <tr class="bg-amber-50/40 font-medium">
                      <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] font-bold text-amber-900">社會領域</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-amber-900">社會科平均</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-black ${N<60?"text-rose-600":"text-slate-900"}">${N}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        <span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${w==="優"?"bg-emerald-100 text-emerald-800":w==="甲"?"bg-blue-100 text-blue-800":w==="乙"?"bg-sky-100 text-sky-800":w==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${w}等</span>
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${N>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${C}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">採地理、歷史、公民三科平均計算</td>
                    </tr>
                  `},$=r.map(N=>{const w=e.scores[N],C=w!=null,m=C?Number(w):null;let h="丁";C&&(m>=90?h="優":m>=80?h="甲":m>=70?h="乙":m>=60&&(h="丙"));const A=a.benchmarks?.classAverage,j=A&&A[N]!==void 0?Number(A[N]).toFixed(1):a.subjectAverages&&a.subjectAverages[N]!==void 0?a.subjectAverages[N]:"-";let I="";C?m>=90?I="核心素養精熟，表現優異卓越":m>=80?I="學科概念清晰，表現穩定良好":m>=70?I="具備基礎知能，建議加強深究":m>=60?I="達法定及格標準，宜針對錯題複習":I="未達及格基準，建議落實課後學習扶助":I="學習中心個別化適性評量（段考免測）";const E=`
                    <tr class="hover:bg-slate-50 ${C&&m<60?"bg-rose-50/20":""}">
                      <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] text-slate-600">${Ke(N)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-slate-800">${u(N)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-bold ${C?m<60?"text-rose-600":"text-slate-900":"text-slate-400"}">
                        ${C?m:"-"}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${C?`<span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${h==="優"?"bg-emerald-100 text-emerald-800":h==="甲"?"bg-blue-100 text-blue-800":h==="乙"?"bg-sky-100 text-sky-800":h==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${h}等</span>`:'<span class="text-[10px] text-slate-400">適性</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${C?m>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>':'<span class="text-[10px] text-slate-400">個別評量</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${j}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">${I}</td>
                    </tr>
                  `;return N==="公民"?E+f():E}).join(""),S=!v&&e.socialAverage!==null&&e.socialAverage!==void 0?f():"";return $+S})()}
              ${g&&e.scienceAverage!==null&&e.scienceAverage!==void 0?(()=>{const v=Number(Number(e.scienceAverage).toFixed(1));let f="丁";v>=90?f="優":v>=80?f="甲":v>=70?f="乙":v>=60&&(f="丙");let $="-";return a.benchmarks?.classAverage?.自然!==void 0?$=Number(a.benchmarks.classAverage.自然).toFixed(1):a.subjectAverages&&a.subjectAverages.理化!==void 0&&a.subjectAverages.地科!==void 0&&a.subjectAverages.生物!==void 0&&($=(((Number(a.subjectAverages.理化)||0)*3+(Number(a.subjectAverages.地科)||0)*2+(Number(a.subjectAverages.生物)||0)*1)/6).toFixed(1)),`
                  <tr class="bg-cyan-50/40 font-medium">
                    <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] font-bold text-cyan-900">自然科學領域</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-cyan-900">自然科平均</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-black ${v<60?"text-rose-600":"text-slate-900"}">${v}</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      <span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${f==="優"?"bg-emerald-100 text-emerald-800":f==="甲"?"bg-blue-100 text-blue-800":f==="乙"?"bg-sky-100 text-sky-800":f==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${f}等</span>
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      ${v>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>'}
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${$}</td>
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
            <span class="text-[9px] text-slate-500 font-normal">全班 ${p} 人統計基準</span>
          </div>
          ${Oe(e.averageScore,i)}
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
              ${u(L)}
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
            <div>班級：<b class="text-slate-900">${u(d)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono">${e.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900">${u(e.name)}</b></div>
            <div>總平均：<b class="font-mono text-slate-900">${e.averageScore} 分 (${e.gradeLevel}等)</b></div>
            <div>印表日期：<span class="font-mono text-[10px] text-slate-500">${s}</span></div>
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
  `}function we(e,a,d,n,o=null){let b=!0,l=!0,s=o!==null?n.findIndex(p=>p.seatNo===o):0;s<0&&(s=0);let t=o===null;const r=document.createElement("div");r.id="report-card-modal-wrapper",r.className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-2 sm:p-4 backdrop-blur-sm print:hidden";function i(){const p=n.length,L=n[s]||n[0],c=ke(L,e,a,d,{includeRank:b,includeTeacherNote:l,printDate:ce()});r.innerHTML=`
      <div class="bg-white w-full max-w-5xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        <!-- 頂部控制列 -->
        <div class="px-6 py-3.5 bg-slate-900 text-white flex flex-wrap justify-between items-center gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">📄</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base leading-tight">個人成績通知單（A4 批量/個別列印）</h3>
              <p class="text-slate-400 text-xs mt-0.5">【${u(a)}】${u(e.examName||"定期評量")} ｜ 一人一張 A4 格式</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button id="btn-do-print" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow flex items-center gap-1.5 transition">
              <span>🖨️</span>
              <span>${t?`立即列印全班 (${p} 人 / ${p} 頁 A4)`:`列印當前學生 (${L.seatNo}號 ${L.name})`}</span>
            </button>
            <button id="btn-close-modal" class="p-2 text-slate-400 hover:text-white rounded-lg transition text-lg leading-none">✕</button>
          </div>
        </div>

        <!-- 輔助設定與切換列 -->
        <div class="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
          <!-- 選項開關 -->
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-1.5 cursor-pointer font-medium hover:text-slate-900">
              <input type="checkbox" id="chk-include-rank" ${b?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
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
              <button id="btn-mode-all" class="px-2.5 py-1 rounded text-xs font-semibold ${t?"bg-emerald-700 text-white":"text-slate-600 hover:bg-slate-50"}">
                全班列印 (${p}人)
              </button>
              <button id="btn-mode-single" class="px-2.5 py-1 rounded text-xs font-semibold ${t?"text-slate-600 hover:bg-slate-50":"bg-emerald-700 text-white"}">
                單生列印
              </button>
            </div>

            <!-- 單生切換下拉與按鈕 -->
            <div class="flex items-center gap-1 ml-2">
              <button id="btn-prev-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="上一位">◀</button>
              <select id="select-preview-student" class="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-medium">
                ${n.map((g,x)=>`
                  <option value="${x}" ${x===s?"selected":""}>
                    ${g.seatNo}號 ${u(g.name)}
                  </option>
                `).join("")}
              </select>
              <button id="btn-next-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="下一位">▶</button>
              <span class="text-slate-400 text-[11px] ml-1 font-mono">${s+1}/${p}</span>
            </div>
          </div>
        </div>

        <!-- 預覽容器 (模擬真實 A4 紙張白底陰影) -->
        <div class="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-200/80 flex justify-center">
          <div class="bg-white shadow-xl rounded-md border border-slate-300 w-full max-w-[210mm] p-4 sm:p-5 text-slate-900">
            ${c}
          </div>
        </div>

        <!-- 底部提示列 -->
        <div class="px-6 py-2 bg-slate-50 border-t border-slate-200 text-slate-500 text-[11px] flex justify-between items-center">
          <span>💡 提示：點選「立即列印」後，瀏覽器列印設定請確認選擇<b>「A4」尺寸</b>與<b>「預設邊界」</b>，系統已設定標準分頁，全班將精確印出 ${t?p:1} 張 A4。</span>
          <span class="font-mono text-slate-400">大溪國中成績查詢系統・合規列印模組</span>
        </div>
      </div>
    `,document.getElementById("btn-close-modal")?.addEventListener("click",()=>{r.remove()}),document.getElementById("chk-include-rank")?.addEventListener("change",g=>{b=g.target.checked,i()}),document.getElementById("chk-include-note")?.addEventListener("change",g=>{l=g.target.checked,i()}),document.getElementById("btn-mode-all")?.addEventListener("click",()=>{t=!0,i()}),document.getElementById("btn-mode-single")?.addEventListener("click",()=>{t=!1,i()}),document.getElementById("select-preview-student")?.addEventListener("change",g=>{s=Number(g.target.value)||0,i()}),document.getElementById("btn-prev-stu")?.addEventListener("click",()=>{s>0&&(s--,i())}),document.getElementById("btn-next-stu")?.addEventListener("click",()=>{s<p-1&&(s++,i())}),document.getElementById("btn-do-print")?.addEventListener("click",()=>{ze(t?n:[L],e,a,d,{includeRank:b,includeTeacherNote:l,printDate:ce()})})}document.body.appendChild(r),i()}function ze(e,a,d,n,o){let b=document.getElementById("print-report-cards-container");b||(b=document.createElement("div"),b.id="print-report-cards-container",document.body.appendChild(b)),b.innerHTML=e.map(l=>ke(l,a,d,n,o)).join(""),document.body.classList.add("printing-report-cards"),setTimeout(()=>{window.print(),setTimeout(()=>{document.body.classList.remove("printing-report-cards"),b&&(b.innerHTML="")},1e3)},250)}const Ne=Object.freeze([{label:"100 分",min:100,max:100},...Array.from({length:10},(e,a)=>{const d=90-a*10;return{label:`${d}～${d+9} 分`,min:d,max:d+10}})].map(Object.freeze));function We(e,a){return a.map(d=>{const n=Ne.map(r=>({...r,count:0})),o=[];let b=0,l=0;for(const r of e){const i=(r.assessmentScores??r.scores)?.[d];if(i==null||i==="")b++;else if(typeof i!="number"||!Number.isFinite(i)||i<0||i>100)l++;else{o.push(i);const p=i===100?0:10-Math.floor(i/10);n[p].count++}}const s=o.length,t=o.filter(r=>r>=60).length;return{subject:d,bands:n,validCount:s,unassessedCount:b,invalidCount:l,passCount:t,average:s?o.reduce((r,i)=>r+i,0)/s:null,highest:s?Math.max(...o):null,lowest:s?Math.min(...o):null,passRate:s?t/s*100:null}})}const ee=e=>e===null?"—":Number(e.toFixed(2)).toString(),ie=e=>e===null?"—":`${Number(e.toFixed(1))}%`;function Ue(e,a,d,n={}){const o=We(a,d),b=o.some(t=>t.invalidCount>0);e.innerHTML=`
    <div class="score-analysis-heading">
      <div>
        <p class="score-analysis-eyebrow">段考統計・全班 ${a.length} 人</p>
        <h3 id="score-analysis-title">各科分數區間分析</h3>
        <p>查看各分數區間人數與各科表現。本區統計完整班級，不受下方名冊搜尋影響。</p>
      </div>
      ${d.length?`<label class="score-subject-picker" for="score-distribution-subject">查看科目
        <select id="score-distribution-subject">${d.map((t,r)=>`<option value="${r}" ${t===n.selectedSubject?"selected":""}>${u(t)}</option>`).join("")}</select>
      </label>`:""}
    </div>
    <div id="score-distribution-detail" aria-live="polite"></div>
    <div class="score-matrix-heading"><h4>各科區間人數總表</h4><span>單位：人；表格可左右滑動</span></div>
    <div class="score-matrix-scroll" tabindex="0" role="region" aria-label="各科區間人數總表，可左右捲動">
      <table class="score-matrix">
        <caption class="sr-only">本次段考各科分數區間人數、有效人數、未評量人數、平均與及格率</caption>
        <thead><tr><th scope="col">科目</th>${Ne.map(t=>`<th scope="col">${t.label}</th>`).join("")}<th scope="col">有效人數</th><th scope="col">未評量</th>${b?'<th scope="col">待確認</th>':""}<th scope="col">平均</th><th scope="col">及格率</th></tr></thead>
        <tbody>${o.map(t=>`<tr data-subject="${u(t.subject)}">
          <th scope="row">${u(t.subject)}</th>
          ${t.bands.map((r,i)=>`<td data-band="${i}" data-count="${r.count}" class="${r.count?"score-count-present":"score-count-empty"}">${r.count}</td>`).join("")}
          <td data-stat="valid">${t.validCount}</td><td data-stat="unassessed">${t.unassessedCount}</td>${b?`<td data-stat="invalid">${t.invalidCount}</td>`:""}<td>${ee(t.average)}</td><td>${ie(t.passRate)}</td>
        </tr>`).join("")}</tbody>
      </table>
    </div>
    <p class="score-analysis-footnote">100 分單獨計數，其餘每 10 分一區；例如「90～99 分」含 90 分以上、未滿 100 分的小數成績。0 分計入統計；未評量${b?"及待確認資料":""}不列入平均與及格率，及格基準為 60 分。</p>
  `;function l(t){const r=o[t],i=e.querySelector("#score-distribution-detail");if(!r){i.innerHTML='<p class="score-analysis-empty">本次段考尚無可分析科目。</p>';return}i.innerHTML=`
      <div class="score-subject-summary">
        <div><span>有效成績／未評量</span><strong>${r.validCount}<small> 人 ／ ${r.unassessedCount} 人</small></strong></div>
        <div><span>${u(r.subject)}平均</span><strong>${ee(r.average)}<small> 分</small></strong></div>
        <div><span>最高／最低</span><strong>${ee(r.highest)}<small> ／ ${ee(r.lowest)} 分</small></strong></div>
        <div><span>及格率</span><strong>${ie(r.passRate)}</strong></div>
      </div>
      ${r.invalidCount?`<p class="score-analysis-empty">本科技分另有 ${r.invalidCount} 筆資料待確認，請洽註冊組。</p>`:""}
      ${r.validCount?"":'<p class="score-analysis-empty">本科目前尚無有效成績，區間人數均為 0。</p>'}
      <ol class="score-band-chart" aria-label="${u(r.subject)}各分數區間人數">
        ${r.bands.map(p=>{const L=r.validCount?p.count/r.validCount*100:0;return`<li><span class="score-band-label">${p.label}</span><span class="score-band-track" aria-hidden="true"><span style="width:${L}%"></span></span><span class="score-band-count">${p.count} 人</span><span class="score-band-percent">${ie(L)}</span></li>`}).join("")}
      </ol>
    `}const s=Math.max(0,d.indexOf(n.selectedSubject));l(s),e.querySelector("#score-distribution-subject")?.addEventListener("change",t=>{const r=Number(t.target.value);l(r),n.onSubjectChange?.(d[r])})}function Le(e,a={}){const{title:d="班級",isGradeWide:n=!1,examList:o=[],studentResults:b=[],onPrint:l=null}=a;let s="rankAvg",t=!0,r="",i="all";function p(){let c=b.slice();const g=(r||"").trim().toLowerCase();if(g)if(/^\d{1,2}$/.test(g)){const x=Number(g);c=c.filter(v=>Number(v.seatNo)===x)}else/^\d{3,}$/.test(g)?c=c.filter(x=>x.studentId&&String(x.studentId).toLowerCase().includes(g)||String(x.seatNo)===g):c=c.filter(x=>x.name&&x.name.toLowerCase().includes(g)||x.className&&x.className.toLowerCase().includes(g)||x.studentId&&String(x.studentId).toLowerCase().includes(g)||`${x.seatNo}號`===g);return c.sort((x,v)=>{if(s==="rankAvg")return x.rankAvg===null?1:v.rankAvg===null?-1:t?x.rankAvg-v.rankAvg:v.rankAvg-x.rankAvg;if(s==="seatNo")return x.className!==v.className?x.className.localeCompare(v.className,"zh-Hant"):t?x.seatNo-v.seatNo:v.seatNo-x.seatNo;if(s==="className")return x.className!==v.className?t?x.className.localeCompare(v.className,"zh-Hant"):v.className.localeCompare(x.className,"zh-Hant"):x.seatNo-v.seatNo;if(s==="latestRank"){const f=o.length?o[o.length-1].examKey:"",$=x.examRanks?.[f],S=v.examRanks?.[f];return $==null?1:S==null?-1:t?$-S:S-$}return 0}),c}function L(){const c=o.filter(m=>i==="all"?!0:i==="7"?m.label.startsWith("7"):i==="8"?m.label.startsWith("8"):i==="9"?m.label.startsWith("9"):!0),g=p(),x=b.length,v=b.filter(m=>m.rankAvg!==null).length,f=b.length&&b[0].rankAvg!==null?b[0].rankAvg:"-",$=o.some(m=>m.label.startsWith("7")),S=o.some(m=>m.label.startsWith("8")),N=o.some(m=>m.label.startsWith("9")),w=m=>m.length?m.map(h=>{const A=c.map(E=>{const D=h.examRanks?.[E.examKey];if(D==null)return'<td class="px-2 py-2 text-center text-xs text-slate-300 font-mono">-</td>';let T="text-slate-700";return D<=5?T="bg-amber-100 text-amber-950 font-black border border-amber-300 rounded px-1.5 py-0.5 shadow-2xs":D<=20?T="bg-blue-50 text-blue-900 font-bold border border-blue-200 rounded px-1.5 py-0.5":D<=50&&(T="bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 rounded px-1 py-0.5"),`
          <td class="px-2 py-2 text-center text-xs font-mono font-medium">
            <span class="${T}">${D}</span>
          </td>
        `}).join("");let j=`<span class="font-mono text-sm font-bold text-slate-600">${h.overallRank}</span>`;h.overallRank===1?j='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-950 font-black text-xs border border-amber-300 shadow-xs">🥇 1</span>':h.overallRank===2?j='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-900 font-black text-xs border border-slate-300 shadow-xs">🥈 2</span>':h.overallRank===3?j='<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 font-black text-xs border border-amber-200 shadow-xs">🥉 3</span>':typeof h.overallRank=="number"&&h.overallRank<=10&&(j=`<span class="inline-block px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-900 font-bold text-xs border border-indigo-200">${h.overallRank}</span>`);let I='<span class="text-slate-300 text-xs">-</span>';if(o.length>=2&&h.rankAvg!==null){const E=o[o.length-1].examKey,D=h.examRanks?.[E];if(D!=null){const T=h.rankAvg-D;T>=15?I='<span class="inline-flex items-center text-emerald-700 font-bold text-xs bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200" title="最新段考優於歷史平均 15 名以上">↗ 大幅進步</span>':T>=5?I='<span class="inline-flex items-center text-emerald-600 font-semibold text-xs" title="最新段考有所進步">↗ 成長中</span>':T<=-15?I='<span class="inline-flex items-center text-rose-700 font-bold text-xs bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200" title="最新段考落後歷史平均 15 名以上">↘ 需關懷</span>':T<=-5?I='<span class="inline-flex items-center text-amber-700 text-xs" title="最新段考有些微波動">↘ 略退步</span>':I='<span class="inline-flex items-center text-slate-500 text-xs">→ 穩定</span>'}}return`
        <tr class="group hover:bg-slate-50/90 transition border-b border-slate-100">
          <td class="roster-sticky-col-1 bg-white group-hover:bg-slate-50 text-center px-2 py-2 border-r border-slate-200">
            ${j}
          </td>
          ${n?`
            <td class="px-2.5 py-2 text-center text-xs font-semibold text-indigo-900 bg-indigo-50/40 border-r border-slate-200 whitespace-nowrap">
              ${u(h.className)}
            </td>
          `:""}
          <td class="${n?"":"roster-sticky-col-2"} bg-white group-hover:bg-slate-50 text-center font-mono font-bold text-slate-800 border-r border-slate-200 px-2 py-2 text-xs sm:text-sm">
            ${h.seatNo}
          </td>
          <td class="${n?"":"roster-sticky-col-3"} bg-white group-hover:bg-slate-50 font-medium text-slate-900 border-r border-slate-300 roster-sticky-shadow px-3 py-2 whitespace-nowrap text-xs sm:text-sm">
            <span>${u(h.name)}</span>
          </td>
          ${A}
          <td class="px-2.5 py-2 text-center text-xs font-mono text-slate-500 border-l border-slate-200 bg-slate-50/30">
            ${h.validCount} / ${h.totalExams}
          </td>
          <!-- 校排加總 -->
          <td class="px-3 py-2 text-center font-mono text-xs sm:text-sm font-bold text-slate-800 bg-amber-50/30 border-l border-amber-200/60">
            ${h.rankSum!==null?h.rankSum:"-"}
          </td>
          <!-- 校排平均 -->
          <td class="px-3 py-2 text-center font-mono text-xs sm:text-sm font-black text-emerald-900 bg-emerald-50/80 border-l border-r border-emerald-300 shadow-2xs">
            ${h.rankAvg!==null?h.rankAvg:"-"}
          </td>
          <!-- 綜合排名 -->
          <td class="px-3 py-2 text-center text-xs font-bold text-slate-700 bg-slate-50/50 border-r border-slate-200">
            ${typeof h.overallRank=="number"?`第 ${h.overallRank} 名`:"-"}
          </td>
          <!-- 歷屆走勢 -->
          <td class="px-2.5 py-2 text-center whitespace-nowrap">
            ${I}
          </td>
        </tr>
      `}).join(""):`
          <tr>
            <td colspan="${4+(n?1:0)+c.length+4}" class="py-10 text-center text-slate-400 text-sm">
              查無符合「<b class="text-slate-600">${u(r)}</b>」的座號或學生姓名
            </td>
          </tr>
        `,C=w(g);e.innerHTML=`
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
            <div class="text-[11px] text-slate-400">具備歷次成績：${v} 人</div>
          </div>

          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">定期評量考次跨度</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-indigo-700">${o.length}</span>
              <span class="text-xs text-slate-500">場考次</span>
            </div>
            <div class="text-[11px] text-slate-400">跨越國一至最新段考</div>
          </div>

          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div class="text-[11px] font-semibold text-slate-500 mb-1">最佳校排平均</div>
            <div class="flex items-baseline gap-1.5 my-1">
              <span class="text-2xl font-black font-mono text-amber-800">${f}</span>
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
                <span>${u(d)} 歷屆校排綜合追蹤大榜</span>
              </h3>
              <span id="cohort-count-badge" class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                共 ${g.length} 筆
              </span>
            </div>

            <!-- 控制群組 -->
            <div class="flex items-center gap-2.5 flex-wrap w-full md:w-auto">
              <!-- 年級考次篩選 -->
              ${$&&S?`
                <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-medium text-slate-700 shadow-2xs">
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${i==="all"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="all">全部考次</button>
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${i==="7"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="7">七年級</button>
                  <button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${i==="8"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="8">八年級</button>
                  ${N?`<button type="button" class="btn-filter-grade px-2.5 py-1 rounded-md transition ${i==="9"?"bg-slate-800 text-white font-bold":"hover:bg-slate-100"}" data-filter="9">九年級</button>`:""}
                </div>
              `:""}

              <!-- 排序切換鈕 -->
              <div class="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-xs font-medium text-slate-700 shadow-2xs">
                <button type="button" id="btn-sort-rank" class="px-2.5 py-1 rounded-md transition ${s==="rankAvg"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依校排平均排序">🏆 綜合名次</button>
                <button type="button" id="btn-sort-seat" class="px-2.5 py-1 rounded-md transition ${s==="seatNo"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依座號排序">🔢 座號排序</button>
                <button type="button" id="btn-sort-latest" class="px-2.5 py-1 rounded-md transition ${s==="latestRank"?"bg-emerald-700 text-white font-bold":"hover:bg-slate-100"}" title="依最新段考校排排序">🚀 最新校排</button>
              </div>

              <!-- 搜尋框 -->
              <div class="w-full sm:w-44">
                <input type="search" id="cohort-search-input" value="${u(r)}" placeholder="🔍 輸入座號(如 5)或姓名..." class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" autocomplete="off" />
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
          <div class="roster-table-container overflow-x-auto" tabindex="0" role="region" aria-label="歷屆校排綜合追蹤名冊，可左右捲動">
            <table class="roster-table w-full text-left text-sm text-slate-700 border-collapse">
              <thead class="text-slate-700 text-xs font-semibold">
                <!-- 第一層表頭 -->
                <tr class="text-xs font-bold border-b border-slate-200">
                  <th class="roster-sticky-header-1 bg-slate-100 text-slate-800 px-2 py-2 text-center border-r border-slate-200 w-[56px]">綜合名次</th>
                  ${n?'<th class="bg-indigo-50 text-indigo-900 px-2.5 py-2 text-center border-r border-slate-200 w-[70px]">班級</th>':""}
                  <th class="${n?"":"roster-sticky-header-2"} bg-slate-100 text-slate-700 px-2 py-2 text-center border-r border-slate-200 w-[42px]">座號</th>
                  <th class="${n?"":"roster-sticky-header-3"} bg-slate-100 text-slate-800 px-3 py-2 text-left border-r border-slate-300 roster-sticky-shadow w-[78px]">姓名</th>
                  <th colspan="${c.length||1}" class="bg-indigo-50/70 text-indigo-950 px-2 py-2 text-center border-r border-indigo-200">
                    歷次定期評量真實校排 (入學第1次 ➔ 最新評量)
                  </th>
                  <th class="bg-slate-100 text-slate-600 px-2 py-2 text-center border-r border-slate-200 w-[64px]">參測次數</th>
                  <th class="bg-amber-100/70 text-amber-950 px-3 py-2 text-center border-r border-amber-200 w-[76px]">校排加總</th>
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
                  ${c.map(m=>`
                    <th class="px-2 py-1.5 text-center font-mono text-xs w-[54px] bg-indigo-50/30 text-indigo-900 border-r border-slate-200" title="${u(m.academicYear)} ${u(m.semester)} ${u(m.examName)}">
                      ${u(m.label)}
                    </th>
                  `).join("")}
                  <th class="py-1.5 text-center font-mono border-r border-slate-200">次數</th>
                  <th class="py-1.5 text-center font-mono font-bold text-amber-950 bg-amber-50/50 border-r border-amber-200">總和</th>
                  <th class="py-1.5 text-center font-mono font-black text-emerald-900 bg-emerald-50 border-r border-emerald-300">平均</th>
                  <th class="py-1.5 text-center font-bold border-r border-slate-200">總排</th>
                  <th class="py-1.5 text-center">趨勢</th>
                </tr>
              </thead>
              <tbody id="cohort-tbody">
                ${C}
              </tbody>
            </table>
          </div>

          <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
            <span>📌 說明：各次段考真實校排由該次全體普通班/體育班常模精算；若學生當次未就讀或免測則以「-」標示。</span>
            <span class="font-mono text-slate-400">大溪國中教務處註冊組・歷屆學習歷程分析</span>
          </div>
        </div>
      </div>
    `,e.querySelector("#btn-sort-rank")?.addEventListener("click",()=>{s==="rankAvg"?t=!t:(s="rankAvg",t=!0),L()}),e.querySelector("#btn-sort-seat")?.addEventListener("click",()=>{s==="seatNo"?t=!t:(s="seatNo",t=!0),L()}),e.querySelector("#btn-sort-latest")?.addEventListener("click",()=>{s==="latestRank"?t=!t:(s="latestRank",t=!0),L()}),e.querySelectorAll(".btn-filter-grade").forEach(m=>{m.addEventListener("click",h=>{i=h.currentTarget.getAttribute("data-filter")||"all",L()})}),e.querySelector("#cohort-search-input")?.addEventListener("input",m=>{r=m.target.value;const h=p(),A=e.querySelector("#cohort-tbody"),j=e.querySelector("#cohort-count-badge");A&&(A.innerHTML=w(h)),j&&(j.textContent=`共 ${h.length} 筆`)}),e.querySelector("#btn-cohort-print")?.addEventListener("click",()=>{l?l():window.print()}),e.querySelector("#btn-cohort-export")?.addEventListener("click",()=>{Ve(d,c,p(),n)})}L()}function Ve(e,a,d,n){const o=["綜合排名"];n&&o.push("班級"),o.push("座號","姓名"),a.forEach(r=>o.push(r.label)),o.push("參測次數","校排加總","校排平均","總排名");const b=[o.join(",")];d.forEach(r=>{const i=[r.overallRank];n&&i.push(`"${r.className}"`),i.push(r.seatNo,`"${r.name}"`),a.forEach(p=>{const L=r.examRanks?.[p.examKey];i.push(L??"")}),i.push(`"${r.validCount}/${r.totalExams}"`,r.rankSum!==null?r.rankSum:"",r.rankAvg!==null?r.rankAvg:"",r.overallRank),b.push(i.join(","))});const l=new Blob(["\uFEFF"+b.join(`\r
`)],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(l),t=document.createElement("a");t.href=s,t.download=`${e}_歷屆校排綜合追蹤表_${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(s)}function Ye(e){if(!e||!e.length)return{examList:[],studentResults:[]};const a=e.map(l=>{const s=(l.semester||"").includes("1")?"上":"下",t=(l.examName||"").match(/\d+/),r=t?t[0]:"1",p=`${(l.gradeLevelLabel||"").includes("七")?"7":(l.gradeLevelLabel||"").includes("八")?"8":"9"}${s}-${r}`;return{examKey:l.examKey,label:p,academicYear:l.academicYear,semester:l.semester,examName:l.examName,gradeLevelLabel:l.gradeLevelLabel}}),d=e[e.length-1],o=(d.students||[]).map(l=>{let s=0,t=0;const r={};e.forEach(p=>{const L=p.students.find(g=>l.studentId&&g.studentId?g.studentId===l.studentId:!l.studentId&&!g.studentId?g.seatNo===l.seatNo&&g.name===l.name:g.name===l.name&&g.seatNo===l.seatNo),c=L&&typeof L.schoolRank=="number"?L.schoolRank:null;r[p.examKey]=c,c!==null&&(s+=c,t++)});const i=t>0?Number((s/t).toFixed(2)):null;return{studentId:l.studentId,name:l.name,className:l.className||d.className,seatNo:l.seatNo,identity:l.identity,examRanks:r,validCount:t,totalExams:e.length,rankSum:t>0?s:null,rankAvg:i}});o.sort((l,s)=>l.rankAvg===null?1:s.rankAvg===null?-1:l.rankAvg-s.rankAvg);let b=1;return o.forEach((l,s)=>{l.rankAvg===null?l.overallRank="-":(s>0&&o[s-1].rankAvg===l.rankAvg?l.overallRank=o[s-1].overallRank:l.overallRank=b,b++)}),{examList:a,studentResults:o}}async function ue(e,a,d={}){const n=a.role==="admin"&&!!d.className,o=n?d.className:a.assignedClass;e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表讀取【${u(o||"負責班級")}】成績資料...</span>
    </div>
  `;const b=n?await P("getAdminClassData",{className:o}):await P("getTeacherClassData",{teacherAccount:a.account,className:o});if(!b.success){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入班級成績</h3>
        <p class="text-slate-600 mb-6 text-sm">${u(b.message||"查無此班級之成績紀錄")}</p>
        <button id="btn-teacher-retry" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">重新整理</button>
      </div>
    `,e.querySelector("#btn-teacher-retry")?.addEventListener("click",()=>{ue(e,a,d)});return}const{className:l,exams:s}=b,t=n?b.teacherName||d.teacherName||"":a.displayName||a.account;if(!s||s.length===0){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">目前尚無班級成績資料</h3>
        <p class="text-slate-600 text-sm">【${u(l)}】在試算表成績資料庫中暫無紀錄，請由教務處統一匯入。</p>
      </div>
    `;return}let r="single",i=s.length-1,p="",L="",c=!1;function g(){const x=s[i],v=x.subjects||[],f=x.fiveBenchmarks||{},$=x.gradeDistribution||{},S=x.students||[],N=(k,y)=>{const R=(y||"").trim().toLowerCase();if(!R)return k;if(/^\d{1,2}$/.test(R)){const B=Number(R);return k.filter(le=>Number(le.seatNo)===B)}return/^\d{3,}$/.test(R)?k.filter(B=>B.studentId&&String(B.studentId).toLowerCase().includes(R)||String(B.seatNo)===R):k.filter(B=>B.name&&B.name.toLowerCase().includes(R)||B.studentId&&String(B.studentId).toLowerCase().includes(R)||`${B.seatNo}號`===R)},w=N(S,p),C=S.filter(k=>k.hasScore!==!1),m=C.length?Number((C.reduce((k,y)=>k+(y.rawAverageScore??y.averageScore),0)/C.length).toFixed(1)):0,h=/[九9]/.test(x.gradeSheet||"")||/[九9]/.test(x.gradeLevelLabel||"")||v.includes("地科"),A=h&&S.some(k=>k.scienceAverage!==null&&k.scienceAverage!==void 0),j=v.indexOf("公民"),I=j!==-1?v.slice(0,j+1):v,E=j!==-1?v.slice(j+1):[],D=3+I.length+1+E.length+(A?1:0)+6,T=k=>k.length?k.map(y=>{const R=z=>{const J=y.scores[z],me=["英文","英語","數學"].includes(z);return J==null?`<td class="px-1.5 py-2 text-center font-mono text-xs text-slate-400 ${me?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(z)?"bg-amber-50/20":["理化","地科","生物"].includes(z)?"bg-cyan-50/20":""}" title="學習中心/未測驗">-</td>`:`
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm ${me?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(z)?"bg-amber-50/20":["理化","地科","生物"].includes(z)?"bg-cyan-50/20":""} ${J<60?"text-rose-600 font-bold":"text-slate-700"}">
              ${J}
            </td>
          `},B=I.map(R).join(""),le=E.map(R).join(""),Ie=`
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-amber-950 bg-amber-50/60 border-r border-amber-200">
            ${y.socialAverage!==null&&y.socialAverage!==void 0?Number(y.socialAverage).toFixed(1):"-"}
          </td>
        `,Re=A?`
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-cyan-950 bg-cyan-50/60 border-r border-cyan-200">
            ${y.scienceAverage!==null&&y.scienceAverage!==void 0?Number(y.scienceAverage).toFixed(1):"-"}
          </td>
        `:"",Me=u(y.classRankInterval||(y.classRank?y.classRank+"名":"-")),Ee=u(y.schoolRankInterval||(y.schoolRank?y.schoolRank+"名":"-"));let Y='<span class="text-slate-300 text-xs">-</span>';return y.identity==="體育班"?Y='<span class="text-[10px] px-1 py-0.5 rounded bg-blue-100 text-blue-800 font-bold border border-blue-200">體育</span>':y.identity==="學中"?Y='<span class="text-[10px] px-1 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">學中</span>':y.identity&&y.identity!=="*"&&(Y=`<span class="text-[10px] px-1 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">${u(y.identity)}</span>`),`
          <tr class="group hover:bg-slate-50/90 transition ${y.isFailing?"bg-rose-50/30":""}">
            <td class="roster-sticky-col-1 bg-white group-hover:bg-slate-50 text-center font-mono font-bold text-slate-800 border-r border-slate-200 px-1 py-1.5 text-xs sm:text-sm">${y.seatNo}</td>
            <td class="roster-sticky-col-2 bg-white group-hover:bg-slate-50 font-medium text-slate-900 border-r border-slate-300 roster-sticky-shadow px-2 py-1.5 whitespace-nowrap text-xs sm:text-sm">
              <span>${u(y.name)}</span>
            </td>
            <td class="px-1.5 py-2 text-center border-r border-slate-200">${Y}</td>
            ${B}
            ${Ie}
            ${le}
            ${Re}
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-slate-800 bg-slate-50/40">
              ${y.totalScore!==null&&y.totalScore!==void 0?y.totalScore:"-"}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold ${y.isFailing?"text-rose-600":"text-slate-900"} bg-slate-50/40">
              ${y.averageScore!==null&&y.averageScore!==void 0?y.averageScore:"-"}
            </td>
            <td class="px-1.5 py-2 text-center text-xs">
              ${y.hasScore!==!1?U(y.gradeLevel):'<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>'}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap" title="${y.classRank?`班名次：第${y.classRank}名`:""}">
              <div class="font-bold text-slate-800">${Me}</div>
              ${y.classRank?`<div class="text-[10px] text-slate-400 font-normal">第${y.classRank}名</div>`:""}
            </td>
            <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap border-r border-slate-200" title="${y.schoolRank?`校名次：第${y.schoolRank}名 (PR ${y.schoolPR})`:""}">
              <div class="font-bold text-slate-800">${Ee}</div>
              ${y.schoolRank?`<div class="text-[10px] text-slate-400 font-normal">第${y.schoolRank}名 (PR ${y.schoolPR})</div>`:""}
            </td>
            <td class="px-2 py-2 text-center whitespace-nowrap">
              <button class="btn-print-single px-2 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition inline-flex items-center gap-0.5 shadow-xs" data-seat="${y.seatNo}" title="預覽或列印 ${y.seatNo}號 ${u(y.name)} 成績單">
                <span>🖨️</span>
                <span>列印</span>
              </button>
            </td>
          </tr>
        `}).join(""):`
          <tr>
            <td colspan="${D}" class="py-10 text-center text-slate-400 text-sm">
              查無符合「<b class="text-slate-600">${u(p)}</b>」的座號或學生姓名
            </td>
          </tr>
        `,oe=T(w),H=x.benchmarks||{},O=H.cohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(l)?"含體育班":"不含體育班"),K=k=>k==null||isNaN(k)?"-":Number(k).toFixed(2),Ae=[{label:"班平均",map:H.classAverage,cls:"bg-emerald-50/70 text-emerald-950 font-bold",stickyBg:"bg-emerald-50"},{label:`年平均 (${O})`,map:H.schoolAverage,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班高標",map:H.classHigh,cls:"bg-blue-50/70 text-blue-950 font-bold",stickyBg:"bg-blue-50"},{label:`年高標 (${O})`,map:H.schoolHigh,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班低標",map:H.classLow,cls:"bg-rose-50/70 text-rose-950 font-bold",stickyBg:"bg-rose-50"},{label:`年低標 (${O})`,map:H.schoolLow,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"}],je=H.classAverage?`
      <tfoot class="border-t-2 border-slate-300 divide-y divide-slate-200">
        ${Ae.map(k=>`
          <tr class="${k.cls}">
            <td class="roster-sticky-col-1 ${k.stickyBg||"bg-slate-50"} px-2 py-2 text-center text-xs font-mono font-bold text-slate-400 border-r border-slate-200">◆</td>
            <td class="roster-sticky-col-2 ${k.stickyBg||"bg-slate-50"} px-3 py-2 text-xs font-bold border-r border-slate-300 roster-sticky-shadow whitespace-nowrap">${u(k.label)}</td>
            <td class="px-1.5 py-2 text-center text-xs text-slate-400 border-r border-slate-200">基準</td>
            ${I.map(y=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${["英文","英語","數學"].includes(y)?"border-r border-slate-200":""}">${K(k.map?.[y])}</td>`).join("")}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-amber-950 bg-amber-100/70 border-r border-amber-200">${K(k.map?.社平??k.map?.社會)}</td>
            ${E.map((y,R)=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${R===E.length-1&&!A?"border-r border-slate-200":""}">${K(k.map?.[y])}</td>`).join("")}
            ${A?`<td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-cyan-950 bg-cyan-100/70 border-r border-cyan-200">${K(k.map?.自平??k.map?.自然)}</td>`:""}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${K(k.map?.總分)}</td>
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${K(k.map?.平均)}</td>
            <td colspan="4" class="px-3 py-2 text-center text-xs text-slate-400 font-normal">全班常模基準</td>
          </tr>
        `).join("")}
      </tfoot>
    `:"";e.innerHTML=`
      <!-- 導師專區頂部標題列 -->
      <div class="portal-toolbar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-bold text-slate-900">${u(l)} ${n?"班級成績管理":"導師成績儀表板"}${x&&x.className&&x.className!==l?` <span class="text-base font-normal text-slate-500">（評量時為 ${u(x.className)}）</span>`:""}</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${n?"註冊組長・全校檢視":u(a.displayName||a.account)}</span>
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
                <button type="button" id="btn-prev-exam" class="w-7 h-7 flex items-center justify-center rounded-md border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-bold shadow-2xs" title="看上一場段考" ${i<=0?"disabled":""}>
                  ◀
                </button>
                <select id="teacher-exam-select" class="px-2.5 py-1.5 bg-white border border-emerald-300 rounded-lg text-xs sm:text-sm font-bold text-slate-800 shadow-2xs focus:ring-2 focus:ring-emerald-500 cursor-pointer max-w-[290px]">
                  ${s.map((k,y)=>`
                    <option value="${y}" ${y===i?"selected":""}>
                      ${u(k.academicYear||"")} ${u(k.semester||"")} ${u(k.examName)}${k.gradeLevelLabel?` (${u(k.gradeLevelLabel)})`:""}
                    </option>
                  `).join("")}
                </select>
                <button type="button" id="btn-next-exam" class="w-7 h-7 flex items-center justify-center rounded-md border border-emerald-300 bg-white text-emerald-800 hover:bg-emerald-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-bold shadow-2xs" title="看下一場段考" ${i>=s.length-1?"disabled":""}>
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
              <span>當前考次：<b class="text-slate-800 font-bold">${u(x.academicYear)} ${u(x.semester)} ${u(x.examName)}</b></span>
            </span>
          `:`
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900">
              <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>涵蓋歷程：<b class="font-bold">國一至國三共 ${s.length} 場段考</b></span>
            </span>
          `}
        </div>
      </div>

      <!-- 視圖主內容掛載點 -->
      <div id="teacher-view-content"></div>
    `;const _=e.querySelector("#teacher-view-content");if(r==="cohort"){const k=Ye(s);Le(_,{title:l,isGradeWide:!1,examList:k.examList,studentResults:k.studentResults,onPrint:()=>window.print()})}else _.innerHTML=`
        <p class="calculation-note print:hidden">${u(x.calculationNote||"社會採地理、歷史、公民平均；各科折算及名次依本次評量規則計算。")}</p>
        <!-- 班級四大指標統計 (Tailwind Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <!-- 班級人數與平均 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級總人數 / 總平均</div>
            <div class="flex items-baseline gap-2 my-2">
              <span class="text-3xl font-black font-mono text-slate-900">${m}</span>
              <span class="text-xs text-slate-500">分 / 全班 ${S.length} 人</span>
            </div>
            <div class="text-[11px] text-slate-400">總平均達丙等 (60分) 以上及格基準</div>
          </div>

          <!-- 班級五標常模 (教育部合規) -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級常模五標</div>
            <div class="grid grid-cols-3 gap-1 my-2 text-xs font-mono">
              <div><span class="text-slate-400">頂:</span> <b class="text-emerald-700">${f.ding||0}</b></div>
              <div><span class="text-slate-400">前:</span> <b class="text-blue-700">${f.qian||0}</b></div>
              <div><span class="text-slate-400">均:</span> <b class="text-slate-800">${f.jun||0}</b></div>
              <div><span class="text-slate-400">後:</span> <b class="text-amber-700">${f.hou||0}</b></div>
              <div><span class="text-slate-400">底:</span> <b class="text-rose-700">${f.di||0}</b></div>
            </div>
            <div class="text-[11px] text-slate-400">P88 / P75 / P50 / P25 / P12</div>
          </div>

          <!-- 教育部等第人數分佈 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">等第人數分佈</div>
            <div class="flex items-center gap-2 my-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">優 ${$.優||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">甲 ${$.甲||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">乙 ${$.乙||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">丙 ${$.丙||0}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">丁 ${$.丁||0}</span>
            </div>
            <div class="text-[11px] text-slate-400">及格率：${S.length?Math.round((S.length-($.丁||0))/S.length*100):0}%</div>
          </div>

          <!-- 班級及格率 -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級及格率 (丙等以上)</div>
            <div class="flex items-baseline justify-between my-2">
              <span class="text-3xl font-black font-mono text-emerald-700">${x.passRate??Math.round((S.length-($.丁||0))/(S.length||1)*100)}%</span>
              <span class="text-xs font-mono text-slate-500">${S.length-($.丁||0)} / ${S.length} 及格</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-500" style="width: ${x.passRate??Math.round((S.length-($.丁||0))/(S.length||1)*100)}%;"></div>
            </div>
          </div>
        </div>

        <section id="subject-score-analysis" class="score-analysis" aria-labelledby="score-analysis-title"></section>

        <!-- 全班學生成績總表 -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div class="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="font-bold text-slate-800 text-sm">全班定期評量成績名冊</h3>
              <span id="roster-count-badge" class="text-xs bg-slate-200/80 text-slate-600 px-2 py-0.5 rounded-full font-medium">${w.length} 筆</span>
              ${h?'<span class="text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md font-medium hidden sm:inline">九年級 9 學科完整版面</span>':""}
            </div>
            <div class="flex items-center gap-2.5 w-full sm:w-auto">
              <button id="btn-toggle-density" type="button" class="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition flex items-center gap-1 shadow-xs" title="切換名冊檢視鬆緊度">
                <span>${c?"📐 舒適視圖":"📏 緊湊視圖"}</span>
              </button>
              <div class="w-full sm:w-56">
                <input type="search" id="teacher-search-input" value="${u(p)}" placeholder="🔍 輸入座號(如 5)或姓名..." class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" autocomplete="off" />
              </div>
            </div>
          </div>

          <div class="px-6 py-2 bg-slate-50/70 border-b border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5">
              <span class="text-emerald-600 font-bold">⇄</span>
              <span>表格支援左右滑動；<b>座號</b>與<b>姓名</b>恆定釘選於左側以利對照。</span>
            </span>
            <span class="text-slate-400 hidden sm:inline">社會領域（琥珀黃）與自然領域（青藍）已按領域分組對齊</span>
          </div>

          <div class="roster-table-container overflow-x-auto" tabindex="0" role="region" aria-label="班級成績名冊，可左右捲動">
            <table class="roster-table ${h?"roster-table-g9":""} ${c?"roster-compact":""} w-full text-left text-sm text-slate-700">
              <thead class="text-slate-700 text-xs font-semibold">
                <!-- 第一層：領域分類與結構分組 -->
                <tr class="text-xs font-bold border-b border-slate-200">
                  <th colspan="2" class="roster-sticky-header-1 bg-slate-100 text-slate-700 px-3 py-2 text-center border-r border-slate-300">學生基本</th>
                  <th class="bg-slate-100 text-slate-600 px-1.5 py-2 text-center border-r border-slate-200">身分</th>
                  <th colspan="2" class="bg-indigo-50/90 text-indigo-950 px-2 py-2 text-center border-r border-indigo-200/80">語文領域</th>
                  <th colspan="1" class="bg-violet-50/90 text-violet-950 px-1.5 py-2 text-center border-r border-violet-200/80">數學領域</th>
                  <th colspan="4" class="bg-amber-100/70 text-amber-950 px-2 py-2 text-center border-r border-amber-200/80">社會領域 (地理/歷史/公民 ➔ 社平)</th>
                  <th colspan="${A?4:E.length||1}" class="bg-cyan-100/70 text-cyan-950 px-2 py-2 text-center border-r border-cyan-200/80">自然領域 ${A?"(理化3/地科2/生物1 ➔ 自平)":""}</th>
                  <th colspan="5" class="bg-slate-100 text-slate-800 px-2 py-2 text-center border-r border-slate-200">總計評定與序位</th>
                  <th class="bg-slate-100 text-slate-600 px-2 py-2 text-center">操作</th>
                </tr>
                <!-- 第二層：各科目與欄位項目 -->
                <tr class="bg-slate-50 text-slate-600 text-xs font-semibold border-b border-slate-200">
                  <th class="roster-sticky-header-1 bg-slate-50 w-[42px] px-1 py-2 text-center border-r border-slate-200">座號</th>
                  <th class="roster-sticky-header-2 bg-slate-50 w-[74px] px-2 py-2 text-left border-r border-slate-300 roster-sticky-shadow">姓名</th>
                  <th class="w-[42px] px-1 py-2 text-center border-r border-slate-200">身分</th>
                  ${I.map(k=>`
                    <th class="w-[48px] px-1 py-2 text-center ${["英文","英語","數學"].includes(k)?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(k)?"bg-amber-50/30 text-amber-950":""}">${u(k)}</th>
                  `).join("")}
                  <th class="w-[52px] px-1 py-2 text-center font-bold bg-amber-100 text-amber-950 border-r border-amber-200" title="社會領域平均 (地理/歷史/公民)">社平</th>
                  ${E.map((k,y)=>`
                    <th class="w-[48px] px-1 py-2 text-center bg-cyan-50/30 text-cyan-950 ${y===E.length-1&&!A?"border-r border-slate-200":""}">${u(k)}</th>
                  `).join("")}
                  ${A?'<th class="w-[52px] px-1 py-2 text-center font-bold bg-cyan-100 text-cyan-950 border-r border-cyan-200" title="自然領域平均 (理化3/地科2/生物1)">自平</th>':""}
                  <th class="w-[56px] px-1 py-2 text-center font-bold bg-slate-50">總分</th>
                  <th class="w-[52px] px-1 py-2 text-center font-bold bg-slate-50">平均</th>
                  <th class="w-[46px] px-1 py-2 text-center">等第</th>
                  <th class="w-[74px] px-1 py-2 text-center" title="5人班級序位區間">班級序位</th>
                  <th class="w-[84px] px-1 py-2 text-center border-r border-slate-200" title="10人年級序位區間">年級序位</th>
                  <th class="w-[72px] px-1 py-2 text-center">成績單</th>
                </tr>
              </thead>
              <tbody id="roster-tbody" class="divide-y divide-slate-100">
                ${oe}
              </tbody>
              ${je}
            </table>
          </div>
          <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
            <span>📌 標標說明：年標採學校總表規範（普通班以普通班為母體，體育班以全體學生為母體）。</span>
            <span class="font-mono text-slate-400">高標 / 低標：Q2 中位數前後 50% 學生之平均值</span>
          </div>
        </div>
      `,Ue(_.querySelector("#subject-score-analysis"),S,v,{selectedSubject:L,onSubjectChange:k=>{L=k}}),e.querySelector("#teacher-exam-select")?.addEventListener("change",k=>{i=Number(k.target.value)||0,g()}),e.querySelector("#btn-prev-exam")?.addEventListener("click",()=>{i>0&&(i--,g())}),e.querySelector("#btn-next-exam")?.addEventListener("click",()=>{i<s.length-1&&(i++,g())}),_.querySelector("#btn-toggle-density")?.addEventListener("click",k=>{c=!c;const y=_.querySelector(".roster-table");y&&y.classList.toggle("roster-compact",c);const R=k.currentTarget.querySelector("span");R&&(R.textContent=c?"📐 舒適視圖":"📏 緊湊視圖")}),_.querySelector("#teacher-search-input")?.addEventListener("input",k=>{p=k.target.value;const y=N(S,p),R=_.querySelector("#roster-tbody"),B=_.querySelector("#roster-count-badge");R&&(R.innerHTML=T(y)),B&&(B.textContent=`${y.length} 筆`)}),e.querySelector("#btn-print-batch-cards")?.addEventListener("click",()=>{we(x,x&&x.className||l,t,S,null)}),_.querySelector("#roster-tbody")?.addEventListener("click",k=>{const y=k.target.closest(".btn-print-single");if(!y)return;const R=Number(y.getAttribute("data-seat"));we(x,x&&x.className||l,t,S,R)}),e.querySelector("#btn-print-class")?.addEventListener("click",()=>{window.print()});e.querySelector("#tab-btn-single-exam")?.addEventListener("click",()=>{r!=="single"&&(r="single",g())}),e.querySelector("#tab-btn-cohort-ranks")?.addEventListener("click",()=>{r!=="cohort"&&(r="cohort",g())})}g()}async function Se(e,a){e.innerHTML='<p class="admin-class-message" role="status">正在讀取全校班級名單…</p>';const d=await P("getAdminClasses");if(!d.success||!Array.isArray(d.classes)){e.innerHTML=`<div class="admin-class-message"><h3>無法載入全校班級</h3><p>${u(d.message||"請確認前後端版本一致，並重新登入註冊組長帳號。")}</p><button type="button" class="admin-class-retry">重新載入</button></div>`,e.querySelector("button")?.addEventListener("click",()=>Se(e,a));return}const n=d.classes;if(!n.length){e.innerHTML='<p class="admin-class-message">最新學生名冊尚無班級資料，請先確認學生名單。</p>';return}e.innerHTML=`
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
  `;const o=e.querySelector("#admin-grade-select"),b=e.querySelector("#admin-class-select"),l=e.querySelector("#admin-selected-class");let s=0;async function t(){const i=b.value;if(!i)return;if(i.startsWith("cohort_grade_")){const g=Number(i.replace("cohort_grade_","")),x=++s,v=document.createElement("div");v.className="admin-grade-cohort-stage",l.replaceChildren(v),e.querySelector("#admin-class-description").textContent=`${g}年級全校歷屆校排綜合追蹤大榜｜全校學生跨班級統一依照歷屆校排平均綜合排序`,v.innerHTML=`
        <div class="py-16 text-center text-slate-500">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-3"></div>
          <span class="text-sm">正在計算【${g}年級全校歷屆校排大榜】（包含所有班級學生與各次段考真實校排）...</span>
        </div>
      `;const f=await P("getAdminGradeCohortData",{grade:g});if(x!==s)return;f.success?(v.innerHTML="",Le(v,{title:`${g}年級全校`,isGradeWide:!0,examList:f.examList,studentResults:f.studentResults,onPrint:()=>window.print()})):v.innerHTML=`<div class="p-8 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl text-center text-sm font-medium">${u(f.message||"無法載入全校校排資料")}</div>`;return}const p=n.find(g=>g.className===i);if(!p)return;const L=++s,c=document.createElement("div");c.className="admin-inherited-class",l.replaceChildren(c),e.querySelector("#admin-class-description").textContent=`${p.className}｜在校名冊 ${p.studentCount} 人｜導師：${p.teacherName||"尚未設定"}`,await ue(c,a,{className:p.className,teacherName:p.teacherName}),L!==s&&c.remove()}function r(){const i=b.value,p=o.value,L=n.filter(g=>!p||g.className.startsWith(p+"年"));let c="";p?(c+='<optgroup label="🌟 全校年級綜合大榜">',c+=`<option value="cohort_grade_${p}">🏆【${p}年級全體・全校歷屆校排大榜】</option>`,c+="</optgroup>"):(c+='<optgroup label="🌟 全校年級綜合大榜">',c+='<option value="cohort_grade_9">🏆【九年級全體・全校歷屆校排大榜】</option>',c+='<option value="cohort_grade_8">🏆【八年級全體・全校歷屆校排大榜】</option>',c+='<option value="cohort_grade_7">🏆【七年級全體・全校歷屆校排大榜】</option>',c+="</optgroup>"),c+='<optgroup label="🏫 個別班級成績名冊與歷屆追蹤">',c+=L.map(g=>`<option value="${u(g.className)}">${u(g.className)}（${g.studentCount} 人｜導師: ${u(g.teacherName||"未設")}）</option>`).join(""),c+="</optgroup>",b.innerHTML=c,b.disabled=L.length===0,L.some(g=>g.className===i)?b.value=i:i&&i.startsWith("cohort_grade_")&&(b.value=p?`cohort_grade_${p}`:i),!b.value&&b.options.length>0&&(b.selectedIndex=0),b.value?t():(s++,l.innerHTML='<p class="admin-class-message">此年級尚無資料。</p>',e.querySelector("#admin-class-description").textContent="")}o.addEventListener("change",r),b.addEventListener("change",()=>void t()),r()}async function V(e,a){e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在讀取 Google Sheets 資料庫狀態...</span>
    </div>
  `;const d=await P("getAdminOverview");if(!d.success||!d.stats){e.innerHTML=`<div class="admin-class-message"><h2>無法載入管理資料</h2><p>${u(d.message||"請稍後重新載入。")}</p><button type="button" id="btn-admin-retry">重新載入</button></div>`,e.querySelector("#btn-admin-retry")?.addEventListener("click",()=>V(e,a));return}const n=d.stats,o=te();function b(){e.innerHTML=`
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

        <div class="flex items-center gap-2">
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
          <div class="text-2xl font-black font-mono text-slate-900 my-1">${n.studentCount||0}</div>
          <div class="text-[10px] text-slate-400">在校學生名冊</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-slate-500 mb-1">【導師名單】</div>
          <div class="text-2xl font-black font-mono text-emerald-700 my-1">${n.teacherCount||0}</div>
          <div class="text-[10px] text-slate-400">7、8、9年級導師</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-teal-700 mb-1">【七年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-teal-700 my-1">${n.grade7Count||0}</div>
          <div class="text-[10px] text-slate-400">7 門學科</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-sky-700 mb-1">【八年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-sky-700 my-1">${n.grade8Count||0}</div>
          <div class="text-[10px] text-slate-400">7 門學科（含理化）</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-purple-700 mb-1">【九年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-purple-700 my-1">${n.grade9Count||0}</div>
          <div class="text-[10px] text-slate-400">9 門學科（含理化地科）</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-slate-500 mb-1">全校累計筆數</div>
          <div class="text-2xl font-black font-mono text-indigo-700 my-1">${n.gradeRecordCount||0}</div>
          <div class="text-[10px] text-slate-400">${(n.exams||[]).length||1} 場定期評量</div>
        </div>
      </div>

      <!-- Google Sheets 試算表結構說明與管理面板 -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <h3 class="text-base font-bold text-slate-900 mb-2">📋 Google Sheets 試算表架構規劃（同一個 Google 試算表內）</h3>
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
              <b>密碼公式：=E2&F2</b>（自動產生8碼，學生不可改）
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
              ${o?`已連線：${o}`:"目前處於：【本地示範模式】（可立即點選右側設定貼上您的 GAS 網址）"}
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
    `;let p=!1;const L=e.querySelector("#admin-overview-panel"),c=e.querySelector("#admin-class-panel"),g=e.querySelector("#admin-tab-overview"),x=e.querySelector("#admin-tab-classes");function v(f){const $=f==="classes";L.hidden=$,c.hidden=!$,g.setAttribute("aria-pressed",String(!$)),x.setAttribute("aria-pressed",String($)),$&&!p&&(p=!0,Se(c,a))}g.addEventListener("click",()=>v("overview")),x.addEventListener("click",()=>v("classes")),document.getElementById("btn-config-gas")?.addEventListener("click",s),document.getElementById("btn-test-gas")?.addEventListener("click",t),document.getElementById("btn-init-db-remote")?.addEventListener("click",r),document.getElementById("btn-autoresize-remote")?.addEventListener("click",l),document.getElementById("btn-open-gas-instructions")?.addEventListener("click",i)}async function l(){M("正在自動調整試算表各工作表欄寬...");const p=await P("autoResizeColumns");p.success?M(p.message||"🎉 所有工作表欄寬已全數調整至最佳寬度！"):M(p.message||"調整欄寬失敗","error")}function s(){const p=`
      <div class="p-6">
        <h3 class="text-base font-bold text-slate-900 mb-2">設定 Google Apps Script Web App 網址</h3>
        <p class="text-xs text-slate-500 mb-4">
          請貼上您在 Google Apps Script 中點選「部署」➔「網頁應用程式」所取得的 URL（以 /exec 結尾）：
        </p>
        <input type="url" id="input-gas-url" value="${u(te())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono mb-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        <div class="flex justify-between items-center">
          <button id="btn-clear-gas-url" class="text-xs text-rose-600 hover:underline">清除網址 (切換為本地示範模式)</button>
          <div class="flex gap-2">
            <button id="btn-modal-cancel" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium">取消</button>
            <button id="btn-modal-save-gas" class="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-sm">儲存設定</button>
          </div>
        </div>
      </div>
    `;ae(p,()=>{document.getElementById("btn-modal-cancel")?.addEventListener("click",F),document.getElementById("btn-clear-gas-url")?.addEventListener("click",()=>{se(""),M("已切換為本地示範模式"),F(),V(e,a)}),document.getElementById("btn-modal-save-gas")?.addEventListener("click",()=>{const L=document.getElementById("input-gas-url")?.value.trim();se(L),M("GAS 網址已儲存！"),F(),V(e,a)})})}async function t(){M("正在測試 GAS 後端連線...");const p=await P("ping");p.success?M(`✓ 連線成功！試算表：${p.spreadsheetName||"已連線"}`):M(`連線失敗：${p.message}`,"error")}async function r(){if(!confirm("確定要在 Google Sheets 中建立【學生名單】、【導師名單】、【管理者名單】以及【七年級成績資料庫】、【八年級成績資料庫】、【九年級成績資料庫】三個工作表嗎？"))return;M("正在傳送初始化指令至 Google Apps Script...");const p=await P("initDatabase");p.success?(M("🎉 Google Sheets 資料庫結構與七、八、九年級示範資料已順利建立！"),V(e,a)):M(p.message||"初始化指令執行失敗","error")}function i(){ae(`
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
    `,()=>{document.getElementById("btn-close-instructions")?.addEventListener("click",F)})}b()}let q="student";function be(){const e=document.getElementById("app-masthead");if(!e)return;const a=pe();e.innerHTML=`
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
        ${a?.role==="admin"?'<button id="btn-masthead-gas-status" class="school-settings-button" title="管理系統連線設定">連線設定</button>':'<span class="school-service-label">校務查詢服務</span>'}

        ${a?`
          <div class="school-session">
            <div class="school-session-name">
              <span>
                ${a.role==="admin"?"管理者":a.role==="teacher"?"導師":"學生"}：
              </span>
              <span class="font-bold text-white">${u(a.displayName||a.account)}</span>
            </div>
            <button id="btn-logout" class="school-logout">
              登出
            </button>
          </div>
        `:""}
      </div>
    </div>
  `,document.getElementById("btn-masthead-gas-status")?.addEventListener("click",Ce),document.getElementById("btn-logout")?.addEventListener("click",()=>{P("logout"),$e(),M("您已安全登出系統。"),ne()})}function xe(e){const d={student:{role:"student",title:"學生與家長登入",subtitle:"查詢個人段考成績與歷次段考紀錄。",accLabel:"學生學號（7 碼）",accPlaceholder:"請輸入 7 碼學生學號",pwdLabel:"驗證密碼（身分證後四碼 ＋ 出生月日共 8 碼）",pwdPlaceholder:"請輸入 8 碼登入密碼",help:"出生月日請使用四碼，不足兩位的月份與日期請補 0。若無法登入，請洽教務處註冊組協助確認。",defaultAcc:"",defaultPwd:""},teacher:{role:"teacher",title:"班級導師登入",subtitle:"查詢班級段考成績、各科分數區間與列印成績單。",accLabel:"教師帳號",accPlaceholder:"請輸入公務信箱前綴帳號",pwdLabel:"教師密碼",pwdPlaceholder:"請輸入教師密碼",help:"請使用學校提供的教師帳號。首次登入須依畫面指示變更密碼；忘記密碼請洽教務處註冊組。",defaultAcc:"",defaultPwd:""},admin:{role:"admin",title:"註冊組長登入",subtitle:"管理全校資料，並可檢視各班成績與使用導師列印功能。",accLabel:"管理者帳號",accPlaceholder:"請輸入管理員帳號（例如：admin）",pwdLabel:"管理員密碼",pwdPlaceholder:"請輸入管理員密碼",help:"本專區限授權人員使用。請於使用完畢後登出，避免在共用設備儲存登入資料。",defaultAcc:"",defaultPwd:""}}[q];e.innerHTML=`
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
          <button type="button" aria-pressed="${q==="student"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${q==="student"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="student">
            學生／家長
          </button>
          <button type="button" aria-pressed="${q==="teacher"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${q==="teacher"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="teacher">
            班級導師
          </button>
          <button type="button" aria-pressed="${q==="admin"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${q==="admin"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="admin">
            註冊組長
          </button>
        </div>

        <div class="school-login-fields">
          <div class="mb-6">
            <h2 id="login-card-title" class="text-xl font-bold text-slate-900">${d.title}</h2>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">${d.subtitle}</p>
          </div>

          <!-- 登入表單 -->
          <form id="auth-login-form" class="space-y-4">
            <div>
              <label for="login-account-id" class="block text-xs font-semibold text-slate-700 mb-1.5">${d.accLabel}</label>
              <input type="text" id="login-account-id" autocomplete="username" ${q==="student"?'inputmode="numeric"':""} required value="${u(d.defaultAcc)}" placeholder="${u(d.accPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>

            <div>
              <label for="login-password" class="block text-xs font-semibold text-slate-700 mb-1.5">${d.pwdLabel}</label>
              <input type="password" id="login-password" autocomplete="current-password" aria-describedby="login-help" required value="${u(d.defaultPwd)}" placeholder="${u(d.pwdPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>

            <div id="login-help" class="school-login-help">
              ${d.help}
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
  `,e.querySelectorAll(".role-tab-btn").forEach(n=>{n.addEventListener("click",()=>{q=n.getAttribute("data-role"),xe(e)})}),document.getElementById("btn-open-gas-setup")?.addEventListener("click",Ce),document.getElementById("auth-login-form")?.addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("login-account-id")?.value.trim(),b=document.getElementById("login-password")?.value.trim(),l=document.getElementById("btn-submit-login");if(!o||!b){M("請輸入帳號與密碼！","error");return}l&&(l.disabled=!0,l.textContent="正在驗證帳密...");const s=await P("login",{role:q,account:o,password:b});if(l&&(l.disabled=!1,l.textContent="驗證身分並進入系統"),!s.success){M(s.message||"登入失敗，請確認帳號密碼","error");return}if(s.role==="teacher"&&s.mustChangePassword){Je(s.user.account,b,()=>{ge({role:"teacher",account:s.user.account,displayName:s.user.name,assignedClass:s.user.assignedClass,authToken:s.authToken}),M("密碼已成功變更！歡迎進入導師儀表板。"),ne()},s.authToken);return}const t={role:s.role,account:s.user&&(s.user.account||s.user.studentId)||o,displayName:s.user&&(s.user.name||s.user.displayName)||o,authToken:s.authToken,studentId:s.role==="student"?s.user.studentId:void 0,assignedClass:s.role==="teacher"?s.user.assignedClass:void 0};ge(t),M(`歡迎回來，${t.displayName}！`),ne()})}function Je(e,a,d,n){const o=`
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
          <input type="password" id="forced-curr-pwd" required value="${u(a)}" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
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
  `;ae(o,()=>{document.getElementById("forced-pwd-form")?.addEventListener("submit",async b=>{b.preventDefault();const l=document.getElementById("forced-curr-pwd")?.value.trim(),s=document.getElementById("forced-new-pwd")?.value.trim(),t=document.getElementById("forced-confirm-pwd")?.value.trim(),r=document.getElementById("btn-submit-forced-pwd");if(s!==t){M("兩次輸入的新密碼不一致！","error");return}if(s.length<6){M("新密碼長度請至少包含 6 個字元！","error");return}r&&(r.disabled=!0,r.textContent="正在寫入 Google Sheets...");const i=await P("changeTeacherPassword",{account:e,currentPassword:l,newPassword:s,authToken:n});i.success?(F(),typeof d=="function"&&d()):(M(i.message||"變更密碼失敗，請重試","error"),r&&(r.disabled=!1,r.textContent="確認變更新密碼並進入系統"))})})}function Ce(){const e=`
    <div class="p-6">
      <h3 class="text-base font-bold text-slate-900 mb-2">⚙️ Google Apps Script 試算表連線設定</h3>
      <p class="text-xs text-slate-500 mb-4 leading-relaxed">
        本系統可直接串接您的 Google 試算表。請將您部署為網頁應用程式 (Web App) 的 URL 貼於下方：
      </p>

      <div class="mb-4">
        <label class="block text-xs font-semibold text-slate-700 mb-1">Web App 部署網址 (以 /exec 結尾)</label>
        <input type="url" id="modal-gas-input" value="${u(te())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
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
  `;ae(e,()=>{document.getElementById("btn-modal-close")?.addEventListener("click",F),document.getElementById("btn-modal-clear-gas")?.addEventListener("click",()=>{se(""),M("已切換為本地示範模式"),F(),be()}),document.getElementById("btn-modal-save")?.addEventListener("click",()=>{const a=document.getElementById("modal-gas-input")?.value.trim();se(a),M("GAS 連線網址已更新！"),F(),be()})})}function ne(){be();const e=document.getElementById("app-root");if(!e)return;const a=pe();if(e.dataset.view=a?.role||"login",e.classList.toggle("school-portal-root",!!a),!a){xe(e);return}a.role==="student"?Fe(e,a):a.role==="teacher"?ue(e,a):a.role==="admin"?V(e,a):($e(),xe(e))}window.addEventListener("DOMContentLoaded",()=>{ne()});
