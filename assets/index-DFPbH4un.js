(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=o(l);fetch(l.href,d)}})();const D={GAS_URL:"daxi_grade_sys_gas_url",SESSION:"daxi_grade_sys_session_v4",LOCAL_DB:"daxi_grade_sys_local_mock_v4"},Le="https://script.google.com/macros/s/AKfycby0G1hk9Z3OxFq7uR5leRMZqHhNqYypZRzvByvQlYcV_0AoE-Y9fPnHoTsPcu9IJw_1yQ/exec";function J(){if(typeof window<"u"&&window.location&&window.location.hostname.includes("script.google.com"))return window.location.href.split("?")[0].split("#")[0];const e=localStorage.getItem(D.GAS_URL);return e!==null?e:Le}function Q(e){const t=String(e||"").trim();t?localStorage.setItem(D.GAS_URL,t):localStorage.removeItem(D.GAS_URL)}function de(){try{const e=sessionStorage.getItem(D.SESSION);return e?JSON.parse(e):null}catch{return null}}function ie(e){sessionStorage.setItem(D.SESSION,JSON.stringify(e))}function fe(){sessionStorage.removeItem(D.SESSION)}function xe(e){if(!e||typeof e!="number"||e<1)return null;const t=Math.floor((e-1)/5)*5+1,o=(Math.floor((e-1)/5)+1)*5;return t+"~"+o+"名"}function pe(e){if(!e||typeof e!="number"||e<1)return null;const t=Math.floor((e-1)/10)*10+1,o=(Math.floor((e-1)/10)+1)*10;return t+"~"+o+"名"}function Ce(){const e=[{studentId:"11470101",name:"余子瀚",className:"7年1班",seatNo:1,idLast4:"1234",birthdayMMDD:"0101",password:"12340101"},{studentId:"11470102",name:"林玹德",className:"7年1班",seatNo:2,idLast4:"2345",birthdayMMDD:"0202",password:"23450202"},{studentId:"11470104",name:"徐常碩",className:"7年1班",seatNo:4,idLast4:"3456",birthdayMMDD:"0303",password:"34560303"},{studentId:"11470105",name:"許鈞翔",className:"7年1班",seatNo:5,idLast4:"4567",birthdayMMDD:"0404",password:"45670404"},{studentId:"11470106",name:"陳冠宇",className:"7年1班",seatNo:6,idLast4:"5678",birthdayMMDD:"0505",password:"56780505"},{studentId:"11480101",name:"申啟智",className:"8年1班",seatNo:1,idLast4:"3841",birthdayMMDD:"1018",password:"38411018"},{studentId:"11480102",name:"吳宏安",className:"8年1班",seatNo:2,idLast4:"5920",birthdayMMDD:"0815",password:"59200815"},{studentId:"11480103",name:"李明原",className:"8年1班",seatNo:3,idLast4:"7104",birthdayMMDD:"0520",password:"71040520"},{studentId:"11480105",name:"林烜",className:"8年1班",seatNo:5,idLast4:"6391",birthdayMMDD:"0412",password:"63910412"},{studentId:"11480106",name:"倪聖恩",className:"8年1班",seatNo:6,idLast4:"8412",birthdayMMDD:"0930",password:"84120930"},{studentId:"11480108",name:"曾承淞",className:"8年1班",seatNo:8,idLast4:"4726",birthdayMMDD:"0719",password:"47260719"},{studentId:"11480109",name:"黃瑀晨",className:"8年1班",seatNo:9,idLast4:"9035",birthdayMMDD:"1208",password:"90351208"},{studentId:"11480110",name:"楊宇傑",className:"8年1班",seatNo:10,idLast4:"3187",birthdayMMDD:"0314",password:"31870314"},{studentId:"11480111",name:"廖祥甫",className:"8年1班",seatNo:11,idLast4:"6540",birthdayMMDD:"0622",password:"65400622"},{studentId:"11480113",name:"潘暘昕",className:"8年1班",seatNo:13,idLast4:"4219",birthdayMMDD:"0808",password:"42190808"},{studentId:"11480114",name:"黎冠昇",className:"8年1班",seatNo:14,idLast4:"5308",birthdayMMDD:"1031",password:"53081031"},{studentId:"11480115",name:"顏丞佑",className:"8年1班",seatNo:15,idLast4:"1942",birthdayMMDD:"0505",password:"19420505"},{studentId:"11480116",name:"蘇昀晨",className:"8年1班",seatNo:16,idLast4:"7823",birthdayMMDD:"0228",password:"78230228"},{studentId:"11490101",name:"江成博",className:"9年1班",seatNo:1,idLast4:"1111",birthdayMMDD:"0901",password:"11110901"},{studentId:"11490102",name:"吳彥霆",className:"9年1班",seatNo:2,idLast4:"2222",birthdayMMDD:"0902",password:"22220902"},{studentId:"11490103",name:"李元翔",className:"9年1班",seatNo:3,idLast4:"3333",birthdayMMDD:"0903",password:"33330903"},{studentId:"11490106",name:"高俊哲",className:"9年1班",seatNo:6,idLast4:"6666",birthdayMMDD:"0906",password:"66660906"},{studentId:"11490107",name:"許修齊",className:"9年1班",seatNo:7,idLast4:"7777",birthdayMMDD:"0907",password:"77770907"}],t=[{account:"tf51056",name:"張雅琪 導師",assignedClass:"7年1班",password:"701701",mustChangePassword:!0,email:"tf51056@dsjh.tyc.edu.tw"},{account:"tf51032",name:"李俊毅 導師",assignedClass:"7年2班",password:"702702",mustChangePassword:!0,email:"tf51032@dsjh.tyc.edu.tw"},{account:"tf51011",name:"王明貴 導師",assignedClass:"7年3班",password:"703703",mustChangePassword:!0,email:"tf51011@dsjh.tyc.edu.tw"},{account:"tf51112",name:"王宣惠 導師",assignedClass:"7年4班",password:"704704",mustChangePassword:!0,email:"tf51112@dsjh.tyc.edu.tw"},{account:"tf51027",name:"陳小鈴 導師",assignedClass:"7年5班",password:"705705",mustChangePassword:!0,email:"tf51027@dsjh.tyc.edu.tw"},{account:"tf51237",name:"武道協卡 導師",assignedClass:"7年6班",password:"706706",mustChangePassword:!0,email:"tf51237@dsjh.tyc.edu.tw"},{account:"tf51154",name:"張銘峰 導師",assignedClass:"7年7班",password:"707707",mustChangePassword:!0,email:"tf51154@dsjh.tyc.edu.tw"},{account:"tf51125",name:"韓美瑛 導師",assignedClass:"7年8班",password:"708708",mustChangePassword:!0,email:"tf51125@dsjh.tyc.edu.tw"},{account:"tf51115",name:"吳嘉祥 導師",assignedClass:"7年9班",password:"709709",mustChangePassword:!0,email:"tf51115@dsjh.tyc.edu.tw"},{account:"tf51241",name:"塗美文 導師",assignedClass:"7年10班",password:"710710",mustChangePassword:!0,email:"tf51241@dsjh.tyc.edu.tw"},{account:"tf51076",name:"游敬廉 導師",assignedClass:"7年10班",password:"710710",mustChangePassword:!0,email:"tf51076@dsjh.tyc.edu.tw"},{account:"tf51039",name:"劉惠珠 導師",assignedClass:"8年1班",password:"801801",mustChangePassword:!0,email:"tf51039@dsjh.tyc.edu.tw"},{account:"tf51138",name:"羅培瑛 導師",assignedClass:"8年2班",password:"802802",mustChangePassword:!0,email:"tf51138@dsjh.tyc.edu.tw"},{account:"tf51035",name:"陳惠晶 導師",assignedClass:"8年3班",password:"803803",mustChangePassword:!0,email:"tf51035@dsjh.tyc.edu.tw"},{account:"tf51135",name:"張一梅 導師",assignedClass:"8年4班",password:"804804",mustChangePassword:!0,email:"tf51135@dsjh.tyc.edu.tw"},{account:"tf51057",name:"蔡淑禎 導師",assignedClass:"8年5班",password:"805805",mustChangePassword:!0,email:"tf51057@dsjh.tyc.edu.tw"},{account:"tf51130",name:"黃文昌 導師",assignedClass:"8年6班",password:"806806",mustChangePassword:!0,email:"tf51130@dsjh.tyc.edu.tw"},{account:"tf51134",name:"謝如琳 導師",assignedClass:"8年7班",password:"807807",mustChangePassword:!0,email:"tf51134@dsjh.tyc.edu.tw"},{account:"tf51073",name:"陳毅宏 導師",assignedClass:"8年8班",password:"808808",mustChangePassword:!0,email:"tf51073@dsjh.tyc.edu.tw"},{account:"tf51031",name:"陳秋梅 導師",assignedClass:"8年9班",password:"809809",mustChangePassword:!0,email:"tf51031@dsjh.tyc.edu.tw"},{account:"tf51140",name:"康嘉玲 導師",assignedClass:"9年1班",password:"901901",mustChangePassword:!0,email:"tf51140@dsjh.tyc.edu.tw"},{account:"tf51084",name:"陳建生 導師",assignedClass:"9年2班",password:"902902",mustChangePassword:!0,email:"tf51084@dsjh.tyc.edu.tw"},{account:"tf51142",name:"劉信志 導師",assignedClass:"9年3班",password:"903903",mustChangePassword:!0,email:"tf51142@dsjh.tyc.edu.tw"},{account:"tf51043",name:"林璟薇 導師",assignedClass:"9年4班",password:"904904",mustChangePassword:!0,email:"tf51043@dsjh.tyc.edu.tw"},{account:"tf51036",name:"張秀萍 導師",assignedClass:"9年5班",password:"905905",mustChangePassword:!0,email:"tf51036@dsjh.tyc.edu.tw"},{account:"tf51133",name:"周育秀 導師",assignedClass:"9年6班",password:"906906",mustChangePassword:!0,email:"tf51133@dsjh.tyc.edu.tw"},{account:"tf51055",name:"文明慧 導師",assignedClass:"9年7班",password:"907907",mustChangePassword:!0,email:"tf51055@dsjh.tyc.edu.tw"},{account:"tf51051",name:"潘建銘 導師",assignedClass:"9年8班",password:"908908",mustChangePassword:!0,email:"tf51051@dsjh.tyc.edu.tw"},{account:"tf51008",name:"陳麗芳 導師",assignedClass:"9年9班",password:"909909",mustChangePassword:!0,email:"tf51008@dsjh.tyc.edu.tw"}],o=[{account:"admin",name:"註冊組長",password:"admin1234"}],s=[],l=e.filter(b=>b.className==="7年1班"),d=[{name:"余子瀚",s:[88,96,94,72.5,87.5,90,87.5]},{name:"林玹德",s:[84,96,92,87.5,97.5,90,80]},{name:"徐常碩",s:[87,100,95,82.5,95,82.5,80]},{name:"許鈞翔",s:[72,33,65,50,90,75,52.5]},{name:"陳冠宇",s:[73,94,86,60,90,92.5,92.5]}],c=["國文","英文","數學","地理","歷史","公民","生物"];d.forEach(b=>{const y=l.find(h=>h.name===b.name);if(!y)return;const u={};c.forEach((h,N)=>{u[h]=b.s[N]});const k=b.s.reduce((h,N)=>h+N,0),g=Number((k/c.length).toFixed(1));s.push({gradeSheet:"七年級成績資料庫",academicYear:"114學年度",semester:"第1學期",examName:"第1次定期評量",name:y.name,className:y.className,seatNo:y.seatNo,subjects:u,totalScore:Number(k.toFixed(1)),averageScore:g,gradeLevel:g>=90?"優":g>=80?"甲":g>=70?"乙":g>=60?"丙":"丁"})});const n=e.filter(b=>b.className==="8年1班"),a=["國文","英文","數學","地理","歷史","公民","理化"],r=[{name:"申啟智",s:[39.5,22,12,55,50,37.5,25]},{name:"吳宏安",s:[63,18,18,52.5,60,75,27.5]},{name:"李明原",s:[49.5,72,93,62.5,95,67.5,67.5]},{name:"林烜",s:[79.5,87,98,87.5,100,92.5,80]},{name:"倪聖恩",s:[54,34,78,55,45,40,47.5]},{name:"曾承淞",s:[75,71,69,75,95,75,70]},{name:"黃瑀晨",s:[76.5,45,65,62.5,65,65,70]},{name:"楊宇傑",s:[78,76,80,100,92.5,90,97.5]},{name:"廖祥甫",s:[55.5,68,57,60,70,57.5,57.5]},{name:"潘暘昕",s:[95,89,97,100,100,100,80]},{name:"黎冠昇",s:[49.5,66,79,55,70,75,67.5]},{name:"顏丞佑",s:[51.5,17,53,67.5,82.5,75,57.5]},{name:"蘇昀晨",s:[68,81,93,75,85,87.5,77.5]}];["第1次定期評量","第2次定期評量"].forEach((b,y)=>{r.forEach((u,k)=>{const g=n.find(f=>f.name===u.name);if(!g)return;const h=y===0?0:k%3===0?4:k%3===1?-2:3,N={};a.forEach((f,L)=>{N[f]=Math.min(100,Math.max(20,Number((u.s[L]+h).toFixed(1))))});const w=Object.values(N).reduce((f,L)=>f+L,0),v=Number((w/a.length).toFixed(1)),S=N.地理!==void 0&&N.歷史!==void 0&&N.公民!==void 0?Number(((N.地理+N.歷史+N.公民)/3).toFixed(1)):null;s.push({gradeSheet:"八年級成績資料庫",academicYear:"114學年度",semester:"第1學期",examName:b,name:g.name,className:g.className,seatNo:g.seatNo,subjects:N,socialAverage:S,scienceAverage:null,totalScore:Number(w.toFixed(1)),averageScore:v,gradeLevel:v>=90?"優":v>=80?"甲":v>=70?"乙":v>=60?"丙":"丁"})})});const i=e.filter(b=>b.className==="9年1班"),x=["國文","英文","數學","地理","歷史","公民","理化","地科","生物"];return[{name:"江成博",s:[43,63,52,45,60,62.5,40,46,35]},{name:"吳彥霆",s:[90,93,97,87.5,100,90,85,92,100]},{name:"李元翔",s:[47,38,48,55,72.5,47.5,30,59,50]},{name:"高俊哲",s:[64,83,75,80,95,90,75,73,100]},{name:"許修齊",s:[84,88,98,85,100,92.5,92.5,89,100]}].forEach(b=>{const y=i.find(w=>w.name===b.name);if(!y)return;const u={};x.forEach((w,v)=>{u[w]=b.s[v]});const k=b.s.reduce((w,v)=>w+v,0),g=Number((k/x.length).toFixed(1)),h=Number(((u.地理+u.歷史+u.公民)/3).toFixed(1)),N=Number(((u.理化*3+u.地科*2+u.生物*1)/6).toFixed(1));s.push({gradeSheet:"九年級成績資料庫",academicYear:"114學年度",semester:"第1學期",examName:"第1次定期評量",name:y.name,className:y.className,seatNo:y.seatNo,subjects:u,socialAverage:h,scienceAverage:N,totalScore:Number(k.toFixed(1)),averageScore:g,gradeLevel:g>=90?"優":g>=80?"甲":g>=70?"乙":g>=60?"丙":"丁"})}),{students:e,teachers:t,admins:o,grades:s}}function Ae(){try{const t=localStorage.getItem(D.LOCAL_DB);if(t)return JSON.parse(t)}catch{}const e=Ce();return localStorage.setItem(D.LOCAL_DB,JSON.stringify(e)),e}function je(e){localStorage.setItem(D.LOCAL_DB,JSON.stringify(e))}function se(e,t){if(e==null||e===""||t==null||t==="")return!1;const o=String(e).trim(),s=String(t).trim();if(o===s)return!0;const l=n=>{if(!n)return null;const a=parseFloat(n);if(!isNaN(a)&&!n.includes("年")&&!n.includes("班")){let x=Math.floor(a);return x>=701&&x<=999&&(x=x%100),x}const r=n.match(/年(\d+)班/)||n.match(/(\d+)班/)||n.match(/(\d+)/);if(!r)return null;let i=parseInt(r[1],10);return i>=701&&i<=999&&(i=i%100),i},d=l(o),c=l(s);return d!==null&&c!==null&&d===c}function ae(e){if(!e.length)return{ding:0,qian:0,jun:0,hou:0,di:0};const t=e.length,o=s=>{const l=(t-1)*s,d=Math.floor(l),c=Math.ceil(l),n=l-d;return Number((e[d]*(1-n)+e[c]*n).toFixed(1))};return{ding:o(.88),qian:o(.75),jun:o(.5),hou:o(.25),di:o(.12)}}function Ie(e,t){if(!e||!e.length)return 0;const o=e.slice().sort((n,a)=>n-a),s=o.length,l=(s-1)*(t/4),d=Math.floor(l),c=l-d;return d+1<s?o[d]+c*(o[d+1]-o[d]):o[d]}function V(e){const t=[];let o=0;for(let r=0;r<e.length;r++){const i=e[r];typeof i=="number"&&isFinite(i)?t.push(i):o++}if(t.length===0)return{average:0,high:0,low:0};const s=t.reduce((r,i)=>r+i,0)/t.length,l=Ie(t,2),d=t.filter(r=>r>=l),c=d.length?d.reduce((r,i)=>r+i,0)/d.length:0,n=t.filter(r=>r<=l);for(let r=0;r<o;r++)n.push(0);const a=n.length?n.reduce((r,i)=>r+i,0)/n.length:0;return{average:s,high:c,low:a}}function be(e,t,o){const s={};t.forEach(i=>{const x=e.map($=>{const b=$.scores||$.subjects;return b&&typeof b[i]=="number"?b[i]:null});s[i]=V(x),i==="英文"&&(s.英語=s[i]),i==="英語"&&(s.英文=s[i])});const l=e.map(i=>typeof i.socialAverage=="number"?i.socialAverage:null);if(s.社會=s.社會平均=s.社平=V(l),o){const i=e.map(x=>typeof x.scienceAverage=="number"?x.scienceAverage:null);s.自然=s.自然平均=s.自平=V(i)}const d=s.英語?"英語":"英文",c=o?"自然":s.生物?"生物":"理化",n=(s.國文?.average||0)+(s[d]?.average||0)+(s.數學?.average||0)+(s.社會?.average||0)+(s[c]?.average||0),a=(s.國文?.high||0)+(s[d]?.high||0)+(s.數學?.high||0)+(s.社會?.high||0)+(s[c]?.high||0),r=(s.國文?.low||0)+(s[d]?.low||0)+(s.數學?.low||0)+(s.社會?.low||0)+(s[c]?.low||0);if(s.總分={average:n,high:a,low:r},o){const i=e.map(x=>typeof x.averageScore=="number"?x.averageScore:null);s.平均=V(i)}else s.平均={average:n/5,high:a/5,low:r/5};return s}function F(e,t){const o={};return e&&Object.keys(e).forEach(s=>{e[s]&&typeof e[s][t]=="number"&&(o[s]=Number(e[s][t].toFixed(2)))}),o}function ue(e,t,o,s,l){const d=t.filter(i=>{const x=i.identity;return x!=="體育班"&&x!=="特教"&&x!=="特教班"&&x!=="秀才"}),c=t.filter(i=>{const x=i.identity;return x!=="特教"&&x!=="特教班"&&x!=="秀才"}),n=be(e,o,s),a=be(l?c:d,o,s);return{cohortLabel:l?"含體育班":"不含體育班",isSportsClass:!!l,classBenchmarks:n,schoolBenchmarks:a,classAverage:F(n,"average"),schoolAverage:F(a,"average"),classHigh:F(n,"high"),schoolHigh:F(a,"high"),classLow:F(n,"low"),schoolLow:F(a,"low")}}async function B(e,t={}){const o=J(),s={action:e,authToken:de()?.authToken,...t};if(typeof window<"u"&&window.google?.script?.run)try{return await new Promise((l,d)=>{window.google.script.run.withSuccessHandler(l).withFailureHandler(d).requestApiBridge(s)})}catch{return{success:!1,message:"系統服務暫時無法回應，請稍後重試或洽教務處註冊組。"}}if(o)try{const l=await fetch(o,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(s)});if(!l.ok)throw new Error(`GAS 伺服器回應錯誤 (狀態碼 ${l.status})`);return await l.json()}catch{return{success:!1,message:"無法連線至校務服務，請稍後重試；如持續發生，請洽教務處註冊組。"}}return Me(e,t)}function Me(e,t){const o=Ae();switch(e){case"ping":return{success:!0,mode:"mock",message:"本地示範資料庫運作正常（未設定 GAS 網址）"};case"login":{const{role:s,account:l,password:d}=t;if(!l||!d)return{success:!1,message:"請輸入帳號與密碼"};if(s==="student"){const c=o.students.find(n=>n.studentId===l);return c?c.password!==d?{success:!1,message:"密碼錯誤，請輸入身分證後四碼＋生日共8碼"}:{success:!0,role:"student",authToken:"mock-token-student-"+c.studentId,user:{studentId:c.studentId,name:c.name,className:c.className,seatNo:c.seatNo},mustChangePassword:!1}:{success:!1,message:"查無此學號"}}if(s==="teacher"){const c=o.teachers.find(n=>n.account.toLowerCase()===l.toLowerCase()||l.toLowerCase()===`t${n.assignedClass.replace(/\D/g,"")}`||l===n.assignedClass.replace(/\D/g,"")||se(n.assignedClass,l));return c?c.password!==d?{success:!1,message:"導師密碼錯誤"}:{success:!0,role:"teacher",authToken:"mock-token-teacher-"+c.account,user:{account:c.account,name:c.name,assignedClass:c.assignedClass},mustChangePassword:!!c.mustChangePassword}:{success:!1,message:"查無此教師帳號"}}if(s==="admin"){const c=o.admins.find(n=>n.account.toLowerCase()===l.toLowerCase());return c?c.password!==d?{success:!1,message:"管理者密碼錯誤"}:{success:!0,role:"admin",authToken:"mock-token-admin-"+c.account,user:{account:c.account,name:c.name},mustChangePassword:!1}:{success:!1,message:"查無管理者帳號"}}return{success:!1,message:"未知的身分角色"}}case"changeTeacherPassword":{const{account:s,newPassword:l}=t,d=o.teachers.find(c=>c.account.toLowerCase()===(s||"").toLowerCase());return d?(d.password=l,d.mustChangePassword=!1,je(o),{success:!0,message:"密碼已順利變更完成！"}):{success:!1,message:"找不到導師帳號"}}case"getStudentScores":{const{studentId:s}=t,l=o.students.find(n=>n.studentId===s);if(!l)return{success:!1,message:"該學號目前不在最新在校學生名單中"};const c=o.grades.filter(n=>n.studentId&&n.studentId===s||n.name===l.name&&(n.seatNo===l.seatNo||se(n.className,l.className))).map(n=>{const a=o.grades.filter(w=>w.examName===n.examName&&w.className===n.className),r=a.map(w=>w.averageScore).sort((w,v)=>w-v),i=ae(r),x=Object.keys(n.subjects||{}),$={};x.forEach(w=>{const v=a.map(S=>S.subjects&&S.subjects[w]||0).sort((S,f)=>S-f);$[w]={average:v.length?Number((v.reduce((S,f)=>S+f,0)/v.length).toFixed(1)):0,...ae(v)}});const y=1+a.map(w=>w.averageScore).sort((w,v)=>v-w).filter(w=>w>n.averageScore).length,u=y,k=/[九9]/.test(n.gradeSheet||"")||/[九9]/.test(n.className||"")||x.includes("地科"),g=n.identity==="體育班"||a.some(w=>w.identity==="體育班")||/(?:^|[^\d])9班|(?:\d09)$/.test(n.className),h=o.grades.filter(w=>w.examName===n.examName),N=ue(a,h.length?h:a,x,k,g);return{...n,scienceAverage:k?n.scienceAverage:null,classRank:y,classRankInterval:xe(y),schoolRank:u,schoolPR:80,schoolRankInterval:pe(u),benchmarks:N,classStats:{studentCount:a.length,fiveBenchmarks:i,subjectBenchmarks:$}}});return{success:!0,student:l,exams:c}}case"getTeacherClassData":{const{teacherAccount:s,className:l}=t,d=o.teachers.find(i=>i.account.toLowerCase()===(s||"").toLowerCase()),c=l||(d?d.assignedClass:"8年1班"),n=o.grades.filter(i=>se(i.className,c)),r=Array.from(new Set(n.map(i=>i.examName))).map(i=>{const x=n.filter(f=>f.examName===i).sort((f,L)=>f.seatNo-L.seatNo),$=x.map(f=>f.averageScore).sort((f,L)=>f-L),b=x.length,y=ae($),u=x.length?Object.keys(x[0].subjects||{}):[],k={};u.forEach(f=>{const L=x.map(I=>I.subjects&&I.subjects[f]||0);k[f]=L.length?Number((L.reduce((I,C)=>I+C,0)/L.length).toFixed(1)):0});const g={優:0,甲:0,乙:0,丙:0,丁:0};x.forEach(f=>{g[f.gradeLevel]!==void 0&&g[f.gradeLevel]++});const h=x.filter(f=>f.averageScore>=60).length,N=/[九9]/.test(c||"")||u.includes("地科"),w=x.some(f=>f.identity==="體育班")||/(?:^|[^\d])9班|(?:\d09)$/.test(c),v=o.grades.filter(f=>f.examName===i),S=ue(x,v.length?v:x,u,N,w);return{examName:i,totalStudents:b,subjects:u,subjectAverages:k,fiveBenchmarks:y,benchmarks:S,gradeDistribution:g,passCount:h,passRate:b?Math.round(h/b*100):0,students:x.map(f=>{const L=1+$.filter(C=>C>f.averageScore).length,I=/[九9]/.test(c||"")||u.includes("地科");return{studentId:f.studentId,name:f.name,seatNo:f.seatNo,identity:f.identity,scores:f.subjects,socialAverage:f.socialAverage,scienceAverage:I?f.scienceAverage:null,totalScore:f.totalScore,averageScore:f.averageScore,gradeLevel:f.gradeLevel,classRank:L,classRankInterval:xe(L),schoolRank:L,schoolPR:80,schoolRankInterval:pe(L),isFailing:f.averageScore<60}})}});return{success:!0,className:c,exams:r}}case"logout":case"logoutAdmin":return{success:!0};case"getAdminOverview":{const s=o.grades.filter(c=>(c.gradeSheet||"").includes("七年級")).length,l=o.grades.filter(c=>(c.gradeSheet||"").includes("八年級")).length,d=o.grades.filter(c=>(c.gradeSheet||"").includes("九年級")).length;return{success:!0,stats:{studentCount:o.students.length,teacherCount:o.teachers.length,grade7Count:s,grade8Count:l,grade9Count:d,gradeRecordCount:o.grades.length,examCount:2,exams:["第1次定期評量","第2次定期評量"]}}}default:return{success:!1,message:"未支援的本地測試動作: "+e}}}function m(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function j(e,t="success"){const o=document.getElementById("toast-root");if(!o)return;const s=document.createElement("div"),l=t==="error";s.className=`pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-lg shadow-xl text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${l?"bg-rose-600 text-white":"bg-slate-900 text-white border-l-4 border-emerald-500"}`,s.innerHTML=`
    <span>${l?"⚠️":"✓"}</span>
    <span>${m(e)}</span>
  `,o.appendChild(s),requestAnimationFrame(()=>{s.classList.remove("translate-y-2","opacity-0")}),setTimeout(()=>{s.classList.add("opacity-0","translate-y-2"),setTimeout(()=>s.remove(),300)},3600)}function Z(e,t){const o=document.getElementById("modal-root");if(!o)return;o.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="active-modal-backdrop">
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true">
        ${e}
      </div>
    </div>
  `;const s=document.getElementById("active-modal-backdrop");s?.addEventListener("click",l=>{l.target===s&&R()}),typeof t=="function"&&t(o)}function R(){const e=document.getElementById("modal-root");e&&(e.innerHTML="")}function _(e){const t=String(e||"丁").trim(),o={優:"bg-emerald-50 text-emerald-700 border-emerald-300",甲:"bg-blue-50 text-blue-700 border-blue-300",乙:"bg-sky-50 text-sky-700 border-sky-300",丙:"bg-amber-50 text-amber-700 border-amber-300",丁:"bg-rose-50 text-rose-700 border-rose-300 font-bold"},s={優:"優等 (90分以上)",甲:"甲等 (80-89分)",乙:"乙等 (70-79分)",丙:"丙等 (60-69分，及格基準)",丁:"丁等 (未滿60分，待加強扶助)"};return`<span class="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-semibold border ${o[t]||o.丁}" title="${s[t]||""}">${m(t)}等</span>`}function Be(e,t){if(!t)return'<span class="text-xs text-slate-400">-</span>';const{ding:o=0,qian:s=0,jun:l=0,hou:d=0,di:c=0}=t,n=Number(e)||0;let a="未達底標",r="bg-rose-100 text-rose-800";return n>=o?(a="🌟 超越頂標",r="bg-emerald-100 text-emerald-800 font-bold"):n>=s?(a="✨ 頂標 ~ 前標之間",r="bg-blue-100 text-blue-800 font-bold"):n>=l?(a="👍 前標 ~ 均標之間",r="bg-sky-100 text-sky-800"):n>=d?(a="均標 ~ 後標之間",r="bg-amber-100 text-amber-800"):n>=c&&(a="後標 ~ 底標之間",r="bg-orange-100 text-orange-800"),`
    <div class="flex flex-col gap-1 w-full max-w-xs">
      <div class="flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>底: ${c}</span>
        <span>均: ${l}</span>
        <span>頂: ${o}</span>
      </div>
      <div class="h-2 w-full bg-slate-200 rounded-full overflow-hidden flex">
        <div class="h-full bg-rose-400" style="width: 20%;" title="底標: ${c}"></div>
        <div class="h-full bg-amber-400" style="width: 25%;" title="後標: ${d}"></div>
        <div class="h-full bg-sky-400" style="width: 25%;" title="均標: ${l}"></div>
        <div class="h-full bg-blue-400" style="width: 18%;" title="前標: ${s}"></div>
        <div class="h-full bg-emerald-500" style="width: 12%;" title="頂標: ${o}"></div>
      </div>
      <div class="mt-0.5">
        <span class="inline-block text-[11px] px-2 py-0.5 rounded ${r}">${a}</span>
      </div>
    </div>
  `}let Y=null,K=null;async function Ee(e,t){e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表載入成績紀錄...</span>
    </div>
  `;const o=await B("getStudentScores",{studentId:t.studentId});if(!o.success){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入成績資料</h3>
        <p class="text-slate-600 mb-6 text-sm">${m(o.message||"查無此學號之學籍或成績紀錄")}</p>
        <button id="btn-portal-back" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">返回登入頁</button>
      </div>
    `,document.getElementById("btn-portal-back")?.addEventListener("click",()=>{window.location.reload()});return}const{student:s,exams:l}=o;if(!l||l.length===0){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">尚未發布定期評量成績</h3>
        <p class="text-slate-600 text-sm">【${m(s.className)}】目前試算表尚無開放查詢之成績，請靜候學校教務處公告。</p>
      </div>
    `;return}let d=l.length-1;function c(){const a=l[d],r=Object.keys(a.subjects||{}),i=a.classStats||{},x=i.fiveBenchmarks||{},$=i.subjectBenchmarks||{},b=a.benchmarks||{},y=b.cohortLabel||a.schoolCohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(s.className)?"含體育班":"不含體育班"),u=g=>g==null||isNaN(g)?"-":Number(g).toFixed(2),k=/[九9]/.test(s.className||"")||/[九9]/.test(a.gradeSheet||"")||r.includes("地科");e.innerHTML=`
      <!-- A4 列印頁首 (列印時才顯現) -->
      <div class="hidden print:block mb-6 border-b-2 border-slate-800 pb-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-serif font-bold text-slate-900">市立大溪國民中學 學生定期學習評量成績通知單</h1>
            <p class="text-sm text-slate-600 mt-1">
              評量次別：${m(a.academicYear)} ${m(a.semester)} ${m(a.examName)} ｜ 
              班級：${m(s.className)} ｜ 座號：${m(s.seatNo)} 號 ｜ 姓名：${m(s.name)}（學號：${m(s.studentId)}）
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
            <h2 class="text-2xl font-bold text-slate-900">${m(s.name)} 同學</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${m(s.className)} ${m(s.seatNo)}號</span>
          </div>
          <p class="text-slate-500 text-xs mt-1 font-mono">學號：${m(s.studentId)} ｜ 個人評量紀錄</p>
        </div>

        <div class="flex items-center gap-3 w-full sm:w-auto">
          <!-- 考試切換下拉選單 -->
          <div class="flex-1 sm:flex-none">
            <select id="exam-selector" class="w-full sm:w-auto px-4 py-2 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
              ${l.map((g,h)=>`
                <option value="${h}" ${h===d?"selected":""}>
                  ${m(g.academicYear)} ${m(g.semester)} ${m(g.examName)}
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

      <p class="calculation-note print:hidden">${m(a.calculationNote||"社會採地理、歷史、公民平均；各科折算依本次評量規則計算。")}</p>
      <!-- 核心成績指標概覽 (Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 總分與平均 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">評量總成績</span>
            <div class="flex items-center gap-1.5">
              ${a.identity&&a.identity!=="*"?`<span class="text-xs px-2 py-0.5 rounded font-bold ${a.identity==="體育班"?"bg-blue-100 text-blue-800 border border-blue-200":"bg-amber-100 text-amber-800 border border-amber-200"}">${m(a.identity)}</span>`:""}
              <span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">五科總分 ${a.totalScore}</span>
            </div>
          </div>
          <div class="my-3">
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-black font-mono text-slate-900">${a.averageScore}</span>
              <span class="text-sm font-medium text-slate-500">五科平均</span>
            </div>
            <div class="flex items-center gap-2 mt-2 text-xs text-slate-600 font-mono">
              ${a.socialAverage!==null&&a.socialAverage!==void 0?`<span class="bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded font-medium">社平: <b>${Number(a.socialAverage).toFixed(1)}</b></span>`:""}
              ${k&&a.scienceAverage!==null&&a.scienceAverage!==void 0?`<span class="bg-cyan-50 text-cyan-800 border border-cyan-200 px-1.5 py-0.5 rounded font-medium">自平: <b>${Number(a.scienceAverage).toFixed(1)}</b></span>`:""}
            </div>
          </div>
          <div class="text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-2.5">
            <span>及格基準：60 分</span>
            <span class="${a.averageScore>=60?"text-emerald-600 font-bold":"text-rose-600 font-bold"}">
              ${a.averageScore>=60?"達到及格標準":"建議加強練習"}
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
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-serif ${a.gradeLevel==="優"?"bg-emerald-100 text-emerald-800 border-2 border-emerald-400":a.gradeLevel==="甲"?"bg-blue-100 text-blue-800 border-2 border-blue-400":a.gradeLevel==="乙"?"bg-sky-100 text-sky-800 border-2 border-sky-400":a.gradeLevel==="丙"?"bg-amber-100 text-amber-800 border-2 border-amber-400":"bg-rose-100 text-rose-800 border-2 border-rose-400"}">
              ${m(a.gradeLevel)}
            </div>
            <div>
              <div class="font-bold text-slate-900">${m(a.gradeLevel)}等</div>
              <div class="text-xs text-slate-500 mt-0.5">
                ${a.gradeLevel==="優"?"表現優異 (90分以上)":a.gradeLevel==="甲"?"表現良好 (80-89分)":a.gradeLevel==="乙"?"表現尚可 (70-79分)":a.gradeLevel==="丙"?"法定及格基準 (60-69分)":"需補救扶助 (未滿60分)"}
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
              <span class="text-xs font-bold font-mono text-emerald-800">${m(a.classRankInterval||(a.classRank?a.classRank+"名":"-"))}</span>
            </div>
            <div class="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200">
              <span class="text-xs text-blue-900 font-medium">年級序位 (10人)</span>
              <span class="text-xs font-bold font-mono text-blue-800">${m(a.schoolRankInterval||(a.schoolRank?a.schoolRank+"名":"-"))}</span>
            </div>
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2.5 flex justify-between">
            <span>班級：${i.studentCount||a.classSize||"-"} 人</span>
            <span class="font-mono text-slate-400">${a.schoolCohortLabel?`${a.schoolCohortLabel}評定`:"全校評定"}</span>
          </div>
        </div>

        <!-- 班級五標落點定位條 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div class="flex justify-between items-start">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">班級五標落點分佈</span>
            <span class="text-[11px] text-slate-400">${i.studentCount||0} 人統計</span>
          </div>
          <div class="my-2">
            ${Be(a.averageScore,x)}
          </div>
          <div class="text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-mono flex justify-between">
            <span>頂標: ${x.ding||0}</span>
            <span>均標: ${x.jun||0}</span>
            <span>底標: ${x.di||0}</span>
          </div>
        </div>
      </div>

      <!-- 各領域詳細成績表 -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div class="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2">
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-slate-800 text-sm">各領域學科學習評量成績表</h3>
            <span class="text-[11px] bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-medium">年標參照：${m(y)}</span>
          </div>
          <span class="text-xs text-slate-500">丙等 (60分) 以上為及格基準</span>
        </div>
        <p class="table-scroll-hint">表格可左右滑動，查看完整科目與六大指標（班/年 平均、高標、低標）。</p>
        <div class="overflow-x-auto" tabindex="0" role="region" aria-label="各科成績表，可左右捲動">
          <table class="w-full text-left text-sm text-slate-700">
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
              ${(()=>{let g=!1;const h=()=>{if(a.socialAverage===null||a.socialAverage===void 0)return"";g=!0;const v=Number(Number(a.socialAverage).toFixed(1));let S="丁";v>=90?S="優":v>=80?S="甲":v>=70?S="乙":v>=60&&(S="丙");const f=u(b.classAverage?.社平??b.classAverage?.社會),L=u(b.schoolAverage?.社平??b.schoolAverage?.社會),I=u(b.classHigh?.社平??b.classHigh?.社會),C=u(b.schoolHigh?.社平??b.schoolHigh?.社會),P=u(b.classLow?.社平??b.classLow?.社會),M=u(b.schoolLow?.社平??b.schoolLow?.社會);return`
                    <tr class="bg-amber-50/50 font-medium">
                      <td class="px-4 py-3.5 font-bold text-amber-900 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>社會領域平均 (地理/歷史/公民)</span>
                      </td>
                      <td class="px-3 py-3.5 text-center font-mono font-black text-base ${v>=60?"text-amber-900":"text-rose-600"}">${v}</td>
                      <td class="px-3 py-3.5 text-center">${_(S)}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${f}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${L}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${I}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${C}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${P}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${M}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${v>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                      </td>
                    </tr>
                  `},N=r.map(v=>{const S=a.subjects[v],f=S!=null,L=f?S:null;let I="丁";f&&(L>=90?I="優":L>=80?I="甲":L>=70?I="乙":L>=60&&(I="丙"));const C=$[v]||{},P=b.classAverage?u(b.classAverage[v]):C.average?u(C.average):"-",M=b.schoolAverage?u(b.schoolAverage[v]):"-",G=b.classHigh?u(b.classHigh[v]):C.qian?u(C.qian):"-",T=b.schoolHigh?u(b.schoolHigh[v]):"-",ee=b.classLow?u(b.classLow[v]):C.hou?u(C.hou):"-",te=b.schoolLow?u(b.schoolLow[v]):"-",p=`
                    <tr class="hover:bg-slate-50/60 transition">
                      <td class="px-4 py-3.5 font-medium text-slate-900">${m(v)}</td>
                      <td class="px-3 py-3.5 text-center font-mono font-bold text-base ${f?L>=60?"text-slate-900":"text-rose-600":"text-slate-400"}">
                        ${f?L:'<span class="text-xs font-sans text-slate-400 font-normal">免測/個別評量</span>'}
                      </td>
                      <td class="px-3 py-3.5 text-center">${f?_(I):'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">特教適性</span>'}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${P}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-slate-600">${M}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${G}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-blue-700">${T}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${ee}</td>
                      <td class="px-3 py-3.5 text-center font-mono text-rose-700">${te}</td>
                      <td class="px-3 py-3.5 text-center">
                        ${f?L>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':'<span class="text-xs text-slate-400">個別化評定</span>'}
                      </td>
                    </tr>
                  `;return v==="公民"?p+h():p}).join(""),w=!g&&a.socialAverage!==null&&a.socialAverage!==void 0?h():"";return N+w})()}
              ${k&&a.scienceAverage!==null&&a.scienceAverage!==void 0?(()=>{const g=Number(Number(a.scienceAverage).toFixed(1));let h="丁";g>=90?h="優":g>=80?h="甲":g>=70?h="乙":g>=60&&(h="丙");const N=u(b.classAverage?.自平??b.classAverage?.自然),w=u(b.schoolAverage?.自平??b.schoolAverage?.自然),v=u(b.classHigh?.自平??b.classHigh?.自然),S=u(b.schoolHigh?.自平??b.schoolHigh?.自然),f=u(b.classLow?.自平??b.classLow?.自然),L=u(b.schoolLow?.自平??b.schoolLow?.自然);return`
                  <tr class="bg-cyan-50/50 font-medium">
                    <td class="px-4 py-3.5 font-bold text-cyan-900 flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span>自然科學領域平均 (理化3/地科2/生物1)</span>
                    </td>
                    <td class="px-3 py-3.5 text-center font-mono font-black text-base ${g>=60?"text-cyan-900":"text-rose-600"}">${g}</td>
                    <td class="px-3 py-3.5 text-center">${_(h)}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${N}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-slate-600">${w}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${v}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-blue-700">${S}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${f}</td>
                    <td class="px-3 py-3.5 text-center font-mono text-rose-700">${L}</td>
                    <td class="px-3 py-3.5 text-center">
                      ${g>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>'}
                    </td>
                  </tr>
                `})():""}
              <!-- 領域總分與總平均匯總行 -->
              ${b.classAverage?.總分!==void 0?`
                <tr class="bg-slate-100/70 font-semibold border-t-2 border-slate-300">
                  <td class="px-4 py-3 font-bold text-slate-800">領域總分</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${a.totalScore!==null&&a.totalScore!==void 0?a.totalScore:"-"}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-400">-</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${u(b.classAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${u(b.schoolAverage?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${u(b.classHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${u(b.schoolHigh?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${u(b.classLow?.總分)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${u(b.schoolLow?.總分)}</td>
                  <td class="px-3 py-3 text-center text-xs text-slate-400 font-normal">五領域加總</td>
                </tr>
                <tr class="bg-slate-100/70 font-semibold">
                  <td class="px-4 py-3 font-bold text-slate-800">評量平均</td>
                  <td class="px-3 py-3 text-center font-mono font-bold text-slate-900">${a.averageScore!==null&&a.averageScore!==void 0?a.averageScore:"-"}</td>
                  <td class="px-3 py-3 text-center">${a.hasScore!==!1?_(a.gradeLevel):'<span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>'}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${u(b.classAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-slate-700">${u(b.schoolAverage?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${u(b.classHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-blue-800">${u(b.schoolHigh?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${u(b.classLow?.平均)}</td>
                  <td class="px-3 py-3 text-center font-mono text-rose-800">${u(b.schoolLow?.平均)}</td>
                  <td class="px-3 py-3 text-center">
                    ${a.averageScore!==null&&a.averageScore!==void 0?a.averageScore>=60?'<span class="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">✓ 及格</span>':'<span class="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-bold">⚠️ 需扶助</span>':"-"}
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
    `,document.getElementById("exam-selector")?.addEventListener("change",g=>{d=Number(g.target.value)||0,c()}),document.getElementById("btn-print-report")?.addEventListener("click",()=>{window.print()}),n(a,l,r,$)}function n(a,r,i,x){if(typeof Chart>"u")return;Y&&(Y.destroy(),Y=null),K&&(K.destroy(),K=null);const $=document.getElementById("chart-radar");if($){const y=i.map(k=>a.subjects[k]||0),u=i.map(k=>x[k]&&x[k].average||70);Y=new Chart($,{type:"radar",data:{labels:i,datasets:[{label:"個人得分",data:y,fill:!0,backgroundColor:"rgba(13, 122, 95, 0.2)",borderColor:"#0D7A5F",pointBackgroundColor:"#0D7A5F",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#0D7A5F"},{label:"班級平均",data:u,fill:!0,backgroundColor:"rgba(71, 85, 105, 0.1)",borderColor:"#64748B",borderDash:[4,4],pointBackgroundColor:"#64748B"}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{r:{suggestedMin:30,suggestedMax:100,ticks:{stepSize:20}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}const b=document.getElementById("chart-trend");if(b){const y=r.map(g=>g.examName),u=r.map(g=>g.averageScore),k=r.map(g=>{const h=g.classStats||{};return h.fiveBenchmarks&&h.fiveBenchmarks.jun||70});K=new Chart(b,{type:"line",data:{labels:y,datasets:[{label:"個人平均分",data:u,borderColor:"#1D4ED8",backgroundColor:"#1D4ED8",tension:.3,borderWidth:3,pointRadius:5},{label:"班級均標 (P50)",data:k,borderColor:"#94A3B8",backgroundColor:"#94A3B8",borderDash:[5,5],tension:.2,pointRadius:3}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{suggestedMin:40,suggestedMax:100,ticks:{stepSize:10}}},plugins:{legend:{position:"bottom",labels:{boxWidth:12}}}}})}}c()}function oe(){const e=new Date,t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}年${o}月${s}日`}function Re(e){if(e.identity==="學中")return"該生平時上課積極配合特教資源班適性課程，學習態度認真努力，各領域評量皆展現正向學習動機，期勉維持良好學習步調，持續突破自我！";if(e.identity==="體育班")return"該生兼顧體育專項訓練與學業課程，展現堅毅抗壓之運動員精神，學習態度專注踏實，期勉在競賽與課業雙軌上精益求精、為校爭光！";const t=e.averageScore||0;return t>=90?"該生本階段學習態度主動嚴謹，各領域核心素養精熟扎實，邏輯思維與學科探究能力俱佳，表現卓越非凡，值得高度嘉許！期勉持之以恆、勇於探索新知！":t>=80?"該生在校品學兼優、學習態度專注穩定，已確實掌握各領域核心概念，表現十分良好！若能在弱項科目更深入鑽研錯題盲點，必定能再攀高峰！":t>=70?"該生具備良好之學科基礎能力，上課規矩良好、能按時完成作業。建議課後多花時間統整觀念脈絡，主動向師長請教，學習成效必能大幅躍進！":t>=60?"該生各領域皆已達到法定及格基準，學習態度和善。建議妥善規劃每日課後複習時間，建立規律筆記習慣，循序漸進加強熟練度，期待更優異的表現！":"該生部分學科概念尚待強化，請家長毋須過度焦慮，建議與導師共同配合，落實課後錯題訂正並善用校內學習扶助輔導資源，攜手協助孩子重拾信心與成就感！"}function De(e,t){const o=t.ding||90,s=t.qian||80,l=t.jun||70,d=t.hou||60,c=t.di||50,n=Math.max(0,Math.min(100,e||0)),a=n;let r="均標附近";return n>=o?r="【頂標以上 (前12%)】表現精熟卓越":n>=s?r="【前標與頂標之間】表現良好":n>=l?r="【均標與前標之間】表現尚可":n>=d?r="【後標與均標之間】建議加強複習":n>=c?r="【底標與後標之間】需重點關懷":r="【底標以下】需積極參與補強扶助",`
    <div class="my-1.5 px-1">
      <div class="relative w-full h-5 bg-slate-100 rounded border border-slate-300 flex overflow-hidden">
        <!-- 5個區間 -->
        <div class="h-full bg-rose-50 border-r border-rose-200 flex items-center justify-center text-[9px] text-rose-700 font-mono" style="width: ${Math.max(10,c)}%;">底標 ${c}</div>
        <div class="h-full bg-amber-50 border-r border-amber-200 flex items-center justify-center text-[9px] text-amber-700 font-mono" style="width: ${Math.max(10,d-c)}%;">後標 ${d}</div>
        <div class="h-full bg-slate-50 border-r border-slate-300 flex items-center justify-center text-[9px] text-slate-700 font-mono" style="width: ${Math.max(10,l-d)}%;">均標 ${l}</div>
        <div class="h-full bg-blue-50 border-r border-blue-200 flex items-center justify-center text-[9px] text-blue-700 font-mono" style="width: ${Math.max(10,s-l)}%;">前標 ${s}</div>
        <div class="h-full bg-emerald-50 flex items-center justify-center text-[9px] text-emerald-800 font-mono flex-1">頂標 ${o}</div>
        
        <!-- 個人分數定位針 -->
        <div class="absolute top-0 bottom-0 w-1 bg-red-600 shadow-sm z-10" style="left: ${a}%;"></div>
      </div>
      <div class="flex justify-between items-center text-[10px] text-slate-600 mt-1">
        <span>個人落點診斷：<b class="text-slate-900">${r}</b></span>
        <span class="font-mono text-red-600 font-bold">▲ 學生五科平均: ${e} 分</span>
      </div>
    </div>
  `}function Pe(e){return["國文"].includes(e)?"語文領域":["英文","英語"].includes(e)?"英語文領域":["數學"].includes(e)?"數學領域":["地理","歷史","公民"].includes(e)?"社會領域":["生物","理化","地科"].includes(e)?"自然科學領域":"專業學科"}function ge(e,t,o,s,l={}){const{includeRank:d=!0,includeTeacherNote:c=!0,printDate:n=oe(),customNote:a=""}=l,r=t.subjects||[],i=t.fiveBenchmarks||{},x=t.totalStudents||(t.students?t.students.length:0),$=a||Re(e),b=/[九9]/.test(o||"")||/[九9]/.test(t.gradeSheet||"")||r.includes("地科");let y="一般生";return e.identity==="體育班"?y="體育班專項生":e.identity==="學中"?y="學習中心適性生":e.identity&&e.identity!=="*"&&(y=e.identity),`
    <div class="a4-report-card-page font-sans text-slate-900 bg-white flex flex-col justify-between" style="page-break-after: always; break-after: page; width: 100%; box-sizing: border-box;">
      
      <div>
        <!-- 1. 學校標頭與基本資料 -->
        <div class="text-center pb-1.5 border-b-2 border-slate-900 mb-1.5">
          <div class="flex items-center justify-center gap-2">
            <span class="text-xl font-black tracking-wider text-slate-900">桃園市立大溪國民中學</span>
          </div>
          <div class="text-sm font-bold tracking-wide text-slate-800 mt-0.5">
            ${m(t.academicYear||"114學年度")}${m(t.semester||"第1學期")} ${m(t.examName||"定期評量")} 個人成績通知單
          </div>
          
          <!-- 學生資訊條 -->
          <div class="mt-1.5 pt-1 border-t border-slate-300 grid grid-cols-6 gap-1 text-[11px] text-slate-700 text-left bg-slate-50/80 p-1.5 rounded border">
            <div>班級：<b class="text-slate-900">${m(o)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono text-xs">${e.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900 text-xs">${m(e.name)}</b></div>
            <div>學號：<span class="font-mono">${m(e.studentId||"-")}</span></div>
            <div>身分：<span class="${e.identity==="體育班"?"text-blue-700 font-bold":e.identity==="學中"?"text-amber-700 font-bold":"text-slate-700"}">${y}</span></div>
            <div class="text-right">導師：<span>${m(s)}</span></div>
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
                ${m(e.gradeLevel)} 等
              </div>
              <div class="text-[9px] text-slate-400">教育部第10條第3項</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-500 font-medium">序位區間 / 常模落點</div>
              <div class="text-xs font-bold font-mono text-slate-800 mt-0.5">
                ${d?`<div>班：<span class="text-slate-900 font-bold">${e.classRankInterval||(e.classRank?`第${e.classRank}名`:"-")}</span></div><div class="text-[10.5px] font-normal text-slate-600">校：${e.schoolRankInterval||(e.schoolRank?`第${e.schoolRank}名`:"-")}</div>`:'<span class="text-[11px] text-slate-500 font-normal">參見五標常模落點條</span>'}
              </div>
              <div class="text-[9px] text-slate-400">全班共 ${x} 人</div>
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
              ${(()=>{let u=!1;const k=()=>{if(e.socialAverage===null||e.socialAverage===void 0)return"";u=!0;const N=Number(Number(e.socialAverage).toFixed(1));let w="丁";N>=90?w="優":N>=80?w="甲":N>=70?w="乙":N>=60&&(w="丙");let v="-";return t.benchmarks?.classAverage?.社會!==void 0?v=Number(t.benchmarks.classAverage.社會).toFixed(1):t.subjectAverages&&t.subjectAverages.地理!==void 0&&t.subjectAverages.歷史!==void 0&&t.subjectAverages.公民!==void 0&&(v=(((Number(t.subjectAverages.地理)||0)+(Number(t.subjectAverages.歷史)||0)+(Number(t.subjectAverages.公民)||0))/3).toFixed(1)),`
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
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${v}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">採地理、歷史、公民三科平均計算</td>
                    </tr>
                  `},g=r.map(N=>{const w=e.scores[N],v=w!=null,S=v?Number(w):null;let f="丁";v&&(S>=90?f="優":S>=80?f="甲":S>=70?f="乙":S>=60&&(f="丙"));const L=t.benchmarks?.classAverage,I=L&&L[N]!==void 0?Number(L[N]).toFixed(1):t.subjectAverages&&t.subjectAverages[N]!==void 0?t.subjectAverages[N]:"-";let C="";v?S>=90?C="核心素養精熟，表現優異卓越":S>=80?C="學科概念清晰，表現穩定良好":S>=70?C="具備基礎知能，建議加強深究":S>=60?C="達法定及格標準，宜針對錯題複習":C="未達及格基準，建議落實課後學習扶助":C="學習中心個別化適性評量（段考免測）";const P=`
                    <tr class="hover:bg-slate-50 ${v&&S<60?"bg-rose-50/20":""}">
                      <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] text-slate-600">${Pe(N)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-slate-800">${m(N)}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-bold ${v?S<60?"text-rose-600":"text-slate-900":"text-slate-400"}">
                        ${v?S:"-"}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${v?`<span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${f==="優"?"bg-emerald-100 text-emerald-800":f==="甲"?"bg-blue-100 text-blue-800":f==="乙"?"bg-sky-100 text-sky-800":f==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${f}等</span>`:'<span class="text-[10px] text-slate-400">適性</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center">
                        ${v?S>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>':'<span class="text-[10px] text-slate-400">個別評量</span>'}
                      </td>
                      <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${I}</td>
                      <td class="py-0.5 px-1 border border-slate-300 text-left text-[11px] text-slate-600 pl-2">${C}</td>
                    </tr>
                  `;return N==="公民"?P+k():P}).join(""),h=!u&&e.socialAverage!==null&&e.socialAverage!==void 0?k():"";return g+h})()}
              ${b&&e.scienceAverage!==null&&e.scienceAverage!==void 0?(()=>{const u=Number(Number(e.scienceAverage).toFixed(1));let k="丁";u>=90?k="優":u>=80?k="甲":u>=70?k="乙":u>=60&&(k="丙");let g="-";return t.benchmarks?.classAverage?.自然!==void 0?g=Number(t.benchmarks.classAverage.自然).toFixed(1):t.subjectAverages&&t.subjectAverages.理化!==void 0&&t.subjectAverages.地科!==void 0&&t.subjectAverages.生物!==void 0&&(g=(((Number(t.subjectAverages.理化)||0)*3+(Number(t.subjectAverages.地科)||0)*2+(Number(t.subjectAverages.生物)||0)*1)/6).toFixed(1)),`
                  <tr class="bg-cyan-50/40 font-medium">
                    <td class="py-0.5 px-1 border border-slate-300 text-center text-[11px] font-bold text-cyan-900">自然科學領域</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-bold text-cyan-900">自然科平均</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono font-black ${u<60?"text-rose-600":"text-slate-900"}">${u}</td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      <span class="px-1.5 py-0.2 rounded font-bold text-[10px] ${k==="優"?"bg-emerald-100 text-emerald-800":k==="甲"?"bg-blue-100 text-blue-800":k==="乙"?"bg-sky-100 text-sky-800":k==="丙"?"bg-amber-100 text-amber-800":"bg-rose-100 text-rose-800"}">${k}等</span>
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center">
                      ${u>=60?'<span class="text-[10px] text-emerald-700 font-bold">✓ 及格</span>':'<span class="text-[10px] text-rose-600 font-bold">⚠️ 待扶助</span>'}
                    </td>
                    <td class="py-0.5 px-1 border border-slate-300 text-center font-mono text-[11px] text-slate-500">${g}</td>
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
            <span class="text-[9px] text-slate-500 font-normal">全班 ${x} 人統計基準</span>
          </div>
          ${De(e.averageScore,i)}
        </div>

        <!-- 5. 評量等第說明法規參照 (小字版) -->
        <div class="text-[9.5px] text-slate-600 bg-slate-50 border border-slate-300 rounded p-1 mb-1.5 leading-snug">
          <span class="font-bold text-slate-800">【教育部國民小學及國民中學學生學習評量辦法規範】</span>
          <b>優等</b> (90分以上)：表現優異 ｜ <b>甲等</b> (80~89分)：表現良好 ｜ <b>乙等</b> (70~79分)：表現尚可 ｜ <b>丙等</b> (60~69分)：<b>法定及格基準</b> ｜ <b>丁等</b> (未滿60分)：未達法定及格基準
        </div>

        <!-- 6. 導師個別評語與學習勉勵 -->
        ${c?`
          <div class="border border-slate-300 rounded-lg p-1.5 mb-1.5 bg-white">
            <div class="text-[10px] font-bold text-slate-800 mb-0.5 flex justify-between items-center">
              <span>📝 導師個別學習回饋與勉勵：</span>
              <span class="text-[9px] text-slate-500 font-normal">導師簽名/蓋章：<span class="border-b border-slate-600 inline-block w-24"></span></span>
            </div>
            <div class="text-[11px] text-slate-700 min-h-[26px] leading-relaxed italic px-1">
              ${m($)}
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
            <div>班級：<b class="text-slate-900">${m(o)}</b></div>
            <div>座號：<b class="text-slate-900 font-mono">${e.seatNo} 號</b></div>
            <div>姓名：<b class="text-slate-900">${m(e.name)}</b></div>
            <div>總平均：<b class="font-mono text-slate-900">${e.averageScore} 分 (${e.gradeLevel}等)</b></div>
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
  `}function me(e,t,o,s,l=null){let d=!0,c=!0,n=l!==null?s.findIndex(x=>x.seatNo===l):0;n<0&&(n=0);let a=l===null;const r=document.createElement("div");r.id="report-card-modal-wrapper",r.className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-2 sm:p-4 backdrop-blur-sm print:hidden";function i(){const x=s.length,$=s[n]||s[0],b=ge($,e,t,o,{includeRank:d,includeTeacherNote:c,printDate:oe()});r.innerHTML=`
      <div class="bg-white w-full max-w-5xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        <!-- 頂部控制列 -->
        <div class="px-6 py-3.5 bg-slate-900 text-white flex flex-wrap justify-between items-center gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">📄</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base leading-tight">個人成績通知單（A4 批量/個別列印）</h3>
              <p class="text-slate-400 text-xs mt-0.5">【${m(t)}】${m(e.examName||"定期評量")} ｜ 一人一張 A4 格式</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button id="btn-do-print" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow flex items-center gap-1.5 transition">
              <span>🖨️</span>
              <span>${a?`立即列印全班 (${x} 人 / ${x} 頁 A4)`:`列印當前學生 (${$.seatNo}號 ${$.name})`}</span>
            </button>
            <button id="btn-close-modal" class="p-2 text-slate-400 hover:text-white rounded-lg transition text-lg leading-none">✕</button>
          </div>
        </div>

        <!-- 輔助設定與切換列 -->
        <div class="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
          <!-- 選項開關 -->
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-1.5 cursor-pointer font-medium hover:text-slate-900">
              <input type="checkbox" id="chk-include-rank" ${d?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
              <span>包含班排與校排 PR 值</span>
            </label>
            <label class="flex items-center gap-1.5 cursor-pointer font-medium hover:text-slate-900">
              <input type="checkbox" id="chk-include-note" ${c?"checked":""} class="rounded text-emerald-600 focus:ring-emerald-500">
              <span>包含導師個別勉勵評語</span>
            </label>
          </div>

          <!-- 列印模式與學生切換 -->
          <div class="flex items-center gap-2">
            <div class="flex items-center bg-white border border-slate-300 rounded-lg p-0.5 shadow-sm">
              <button id="btn-mode-all" class="px-2.5 py-1 rounded text-xs font-semibold ${a?"bg-emerald-700 text-white":"text-slate-600 hover:bg-slate-50"}">
                全班列印 (${x}人)
              </button>
              <button id="btn-mode-single" class="px-2.5 py-1 rounded text-xs font-semibold ${a?"text-slate-600 hover:bg-slate-50":"bg-emerald-700 text-white"}">
                單生列印
              </button>
            </div>

            <!-- 單生切換下拉與按鈕 -->
            <div class="flex items-center gap-1 ml-2">
              <button id="btn-prev-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="上一位">◀</button>
              <select id="select-preview-student" class="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-medium">
                ${s.map((y,u)=>`
                  <option value="${u}" ${u===n?"selected":""}>
                    ${y.seatNo}號 ${m(y.name)}
                  </option>
                `).join("")}
              </select>
              <button id="btn-next-stu" class="px-2 py-1 bg-white border border-slate-300 rounded hover:bg-slate-50 font-bold" title="下一位">▶</button>
              <span class="text-slate-400 text-[11px] ml-1 font-mono">${n+1}/${x}</span>
            </div>
          </div>
        </div>

        <!-- 預覽容器 (模擬真實 A4 紙張白底陰影) -->
        <div class="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-200/80 flex justify-center">
          <div class="bg-white shadow-xl rounded-md border border-slate-300 w-full max-w-[210mm] p-4 sm:p-5 text-slate-900">
            ${b}
          </div>
        </div>

        <!-- 底部提示列 -->
        <div class="px-6 py-2 bg-slate-50 border-t border-slate-200 text-slate-500 text-[11px] flex justify-between items-center">
          <span>💡 提示：點選「立即列印」後，瀏覽器列印設定請確認選擇<b>「A4」尺寸</b>與<b>「預設邊界」</b>，系統已設定標準分頁，全班將精確印出 ${a?x:1} 張 A4。</span>
          <span class="font-mono text-slate-400">大溪國中成績查詢系統・合規列印模組</span>
        </div>
      </div>
    `,document.getElementById("btn-close-modal")?.addEventListener("click",()=>{r.remove()}),document.getElementById("chk-include-rank")?.addEventListener("change",y=>{d=y.target.checked,i()}),document.getElementById("chk-include-note")?.addEventListener("change",y=>{c=y.target.checked,i()}),document.getElementById("btn-mode-all")?.addEventListener("click",()=>{a=!0,i()}),document.getElementById("btn-mode-single")?.addEventListener("click",()=>{a=!1,i()}),document.getElementById("select-preview-student")?.addEventListener("change",y=>{n=Number(y.target.value)||0,i()}),document.getElementById("btn-prev-stu")?.addEventListener("click",()=>{n>0&&(n--,i())}),document.getElementById("btn-next-stu")?.addEventListener("click",()=>{n<x-1&&(n++,i())}),document.getElementById("btn-do-print")?.addEventListener("click",()=>{Te(a?s:[$],e,t,o,{includeRank:d,includeTeacherNote:c,printDate:oe()})})}document.body.appendChild(r),i()}function Te(e,t,o,s,l){let d=document.getElementById("print-report-cards-container");d||(d=document.createElement("div"),d.id="print-report-cards-container",document.body.appendChild(d)),d.innerHTML=e.map(c=>ge(c,t,o,s,l)).join(""),document.body.classList.add("printing-report-cards"),setTimeout(()=>{window.print(),setTimeout(()=>{document.body.classList.remove("printing-report-cards"),d&&(d.innerHTML="")},1e3)},250)}const ve=Object.freeze([{label:"100 分",min:100,max:100},...Array.from({length:10},(e,t)=>{const o=90-t*10;return{label:`${o}～${o+9} 分`,min:o,max:o+10}})].map(Object.freeze));function He(e,t){return t.map(o=>{const s=ve.map(r=>({...r,count:0})),l=[];let d=0,c=0;for(const r of e){const i=(r.assessmentScores??r.scores)?.[o];if(i==null||i==="")d++;else if(typeof i!="number"||!Number.isFinite(i)||i<0||i>100)c++;else{l.push(i);const x=i===100?0:10-Math.floor(i/10);s[x].count++}}const n=l.length,a=l.filter(r=>r>=60).length;return{subject:o,bands:s,validCount:n,unassessedCount:d,invalidCount:c,passCount:a,average:n?l.reduce((r,i)=>r+i,0)/n:null,highest:n?Math.max(...l):null,lowest:n?Math.min(...l):null,passRate:n?a/n*100:null}})}const W=e=>e===null?"—":Number(e.toFixed(2)).toString(),ne=e=>e===null?"—":`${Number(e.toFixed(1))}%`;function Fe(e,t,o,s={}){const l=He(t,o),d=l.some(a=>a.invalidCount>0);e.innerHTML=`
    <div class="score-analysis-heading">
      <div>
        <p class="score-analysis-eyebrow">段考統計・全班 ${t.length} 人</p>
        <h3 id="score-analysis-title">各科分數區間分析</h3>
        <p>查看各分數區間人數與各科表現。本區統計完整班級，不受下方名冊搜尋影響。</p>
      </div>
      ${o.length?`<label class="score-subject-picker" for="score-distribution-subject">查看科目
        <select id="score-distribution-subject">${o.map((a,r)=>`<option value="${r}" ${a===s.selectedSubject?"selected":""}>${m(a)}</option>`).join("")}</select>
      </label>`:""}
    </div>
    <div id="score-distribution-detail" aria-live="polite"></div>
    <div class="score-matrix-heading"><h4>各科區間人數總表</h4><span>單位：人；表格可左右滑動</span></div>
    <div class="score-matrix-scroll" tabindex="0" role="region" aria-label="各科區間人數總表，可左右捲動">
      <table class="score-matrix">
        <caption class="sr-only">本次段考各科分數區間人數、有效人數、未評量人數、平均與及格率</caption>
        <thead><tr><th scope="col">科目</th>${ve.map(a=>`<th scope="col">${a.label}</th>`).join("")}<th scope="col">有效人數</th><th scope="col">未評量</th>${d?'<th scope="col">待確認</th>':""}<th scope="col">平均</th><th scope="col">及格率</th></tr></thead>
        <tbody>${l.map(a=>`<tr data-subject="${m(a.subject)}">
          <th scope="row">${m(a.subject)}</th>
          ${a.bands.map((r,i)=>`<td data-band="${i}" data-count="${r.count}" class="${r.count?"score-count-present":"score-count-empty"}">${r.count}</td>`).join("")}
          <td data-stat="valid">${a.validCount}</td><td data-stat="unassessed">${a.unassessedCount}</td>${d?`<td data-stat="invalid">${a.invalidCount}</td>`:""}<td>${W(a.average)}</td><td>${ne(a.passRate)}</td>
        </tr>`).join("")}</tbody>
      </table>
    </div>
    <p class="score-analysis-footnote">100 分單獨計數，其餘每 10 分一區；例如「90～99 分」含 90 分以上、未滿 100 分的小數成績。0 分計入統計；未評量${d?"及待確認資料":""}不列入平均與及格率，及格基準為 60 分。</p>
  `;function c(a){const r=l[a],i=e.querySelector("#score-distribution-detail");if(!r){i.innerHTML='<p class="score-analysis-empty">本次段考尚無可分析科目。</p>';return}i.innerHTML=`
      <div class="score-subject-summary">
        <div><span>有效成績／未評量</span><strong>${r.validCount}<small> 人 ／ ${r.unassessedCount} 人</small></strong></div>
        <div><span>${m(r.subject)}平均</span><strong>${W(r.average)}<small> 分</small></strong></div>
        <div><span>最高／最低</span><strong>${W(r.highest)}<small> ／ ${W(r.lowest)} 分</small></strong></div>
        <div><span>及格率</span><strong>${ne(r.passRate)}</strong></div>
      </div>
      ${r.invalidCount?`<p class="score-analysis-empty">本科技分另有 ${r.invalidCount} 筆資料待確認，請洽註冊組。</p>`:""}
      ${r.validCount?"":'<p class="score-analysis-empty">本科目前尚無有效成績，區間人數均為 0。</p>'}
      <ol class="score-band-chart" aria-label="${m(r.subject)}各分數區間人數">
        ${r.bands.map(x=>{const $=r.validCount?x.count/r.validCount*100:0;return`<li><span class="score-band-label">${x.label}</span><span class="score-band-track" aria-hidden="true"><span style="width:${$}%"></span></span><span class="score-band-count">${x.count} 人</span><span class="score-band-percent">${ne($)}</span></li>`}).join("")}
      </ol>
    `}const n=Math.max(0,o.indexOf(s.selectedSubject));c(n),e.querySelector("#score-distribution-subject")?.addEventListener("change",a=>{const r=Number(a.target.value);c(r),s.onSubjectChange?.(o[r])})}async function ce(e,t,o={}){const s=t.role==="admin"&&!!o.className,l=s?o.className:t.assignedClass;e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在從雲端試算表讀取【${m(l||"負責班級")}】成績資料...</span>
    </div>
  `;const d=s?await B("getAdminClassData",{className:l}):await B("getTeacherClassData",{teacherAccount:t.account,className:l});if(!d.success){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">無法載入班級成績</h3>
        <p class="text-slate-600 mb-6 text-sm">${m(d.message||"查無此班級之成績紀錄")}</p>
        <button id="btn-teacher-retry" class="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-medium hover:bg-slate-700">重新整理</button>
      </div>
    `,e.querySelector("#btn-teacher-retry")?.addEventListener("click",()=>{ce(e,t,o)});return}const{className:c,exams:n}=d,a=s?d.teacherName||o.teacherName||"":t.displayName||t.account;if(!n||n.length===0){e.innerHTML=`
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center max-w-lg mx-auto mt-12">
        <div class="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">📋</div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">目前尚無班級成績資料</h3>
        <p class="text-slate-600 text-sm">【${m(c)}】在試算表成績資料庫中暫無紀錄，請由教務處統一匯入。</p>
      </div>
    `;return}let r=n.length-1,i="",x="",$=!1;function b(){const y=n[r],u=y.subjects||[],k=y.fiveBenchmarks||{},g=y.gradeDistribution||{},h=y.students||[],N=h.filter(p=>{if(!i)return!0;const A=i.toLowerCase();return p.name.toLowerCase().includes(A)||p.studentId&&p.studentId.includes(A)||String(p.seatNo).includes(A)}),w=h.filter(p=>p.hasScore!==!1),v=w.length?Number((w.reduce((p,A)=>p+(A.rawAverageScore??A.averageScore),0)/w.length).toFixed(1)):0,S=/[九9]/.test(c||"")||/[九9]/.test(y.gradeSheet||"")||u.includes("地科"),f=S&&N.some(p=>p.scienceAverage!==null&&p.scienceAverage!==void 0),L=u.indexOf("公民"),I=L!==-1?u.slice(0,L+1):u,C=L!==-1?u.slice(L+1):[],P=N.map(p=>{const A=H=>{const U=p.scores[H];return U==null?`<td class="px-1.5 py-2 text-center font-mono text-xs text-slate-400 ${H==="數學"?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(H)?"bg-amber-50/20":["理化","地科","生物"].includes(H)?"bg-cyan-50/20":""}" title="學習中心/未測驗">-</td>`:`
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm ${H==="數學"?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(H)?"bg-amber-50/20":["理化","地科","生物"].includes(H)?"bg-cyan-50/20":""} ${U<60?"text-rose-600 font-bold":"text-slate-700"}">
            ${U}
          </td>
        `},q=I.map(A).join(""),we=C.map(A).join(""),$e=`
        <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-amber-950 bg-amber-50/60 border-r border-amber-200">
          ${p.socialAverage!==null&&p.socialAverage!==void 0?Number(p.socialAverage).toFixed(1):"-"}
        </td>
      `,ke=f?`
        <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-cyan-950 bg-cyan-50/60 border-r border-cyan-200">
          ${p.scienceAverage!==null&&p.scienceAverage!==void 0?Number(p.scienceAverage).toFixed(1):"-"}
        </td>
      `:"",Ne=m(p.classRankInterval||(p.classRank?p.classRank+"名":"-")),Se=m(p.schoolRankInterval||(p.schoolRank?p.schoolRank+"名":"-"));let z='<span class="text-slate-300 text-xs">-</span>';return p.identity==="體育班"?z='<span class="text-[10px] px-1 py-0.5 rounded bg-blue-100 text-blue-800 font-bold border border-blue-200">體育</span>':p.identity==="學中"?z='<span class="text-[10px] px-1 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">學中</span>':p.identity&&p.identity!=="*"&&(z=`<span class="text-[10px] px-1 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">${m(p.identity)}</span>`),`
        <tr class="group hover:bg-slate-50/90 transition ${p.isFailing?"bg-rose-50/30":""}">
          <td class="roster-sticky-col-1 bg-white group-hover:bg-slate-50 text-center font-mono font-bold text-slate-800 border-r border-slate-200 px-2 py-2 text-xs sm:text-sm">${p.seatNo}</td>
          <td class="roster-sticky-col-2 bg-white group-hover:bg-slate-50 font-medium text-slate-900 border-r border-slate-300 roster-sticky-shadow px-3 py-2 whitespace-nowrap text-xs sm:text-sm">
            <span>${m(p.name)}</span>
          </td>
          <td class="px-1.5 py-2 text-center border-r border-slate-200">${z}</td>
          ${q}
          ${$e}
          ${we}
          ${ke}
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold text-slate-800 bg-slate-50/40">
            ${p.totalScore!==null&&p.totalScore!==void 0?p.totalScore:"-"}
          </td>
          <td class="px-1.5 py-2 text-center font-mono text-xs sm:text-sm font-bold ${p.isFailing?"text-rose-600":"text-slate-900"} bg-slate-50/40">
            ${p.averageScore!==null&&p.averageScore!==void 0?p.averageScore:"-"}
          </td>
          <td class="px-1.5 py-2 text-center text-xs">
            ${p.hasScore!==!1?_(p.gradeLevel):'<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-400">免測</span>'}
          </td>
          <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap" title="${p.classRank?`班名次：第${p.classRank}名`:""}">
            <div class="font-bold text-slate-800">${Ne}</div>
            ${p.classRank?`<div class="text-[10px] text-slate-400 font-normal">第${p.classRank}名</div>`:""}
          </td>
          <td class="px-1.5 py-2 text-center font-mono text-xs whitespace-nowrap border-r border-slate-200" title="${p.schoolRank?`校名次：第${p.schoolRank}名 (PR ${p.schoolPR})`:""}">
            <div class="font-bold text-slate-800">${Se}</div>
            ${p.schoolRank?`<div class="text-[10px] text-slate-400 font-normal">第${p.schoolRank}名 (PR ${p.schoolPR})</div>`:""}
          </td>
          <td class="px-2 py-2 text-center whitespace-nowrap">
            <button class="btn-print-single px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition inline-flex items-center gap-1 shadow-xs" data-seat="${p.seatNo}" title="預覽或列印 ${p.seatNo}號 ${m(p.name)} 成績單">
              <span>🖨️</span>
              <span>印成績單</span>
            </button>
          </td>
        </tr>
      `}).join(""),M=y.benchmarks||{},G=M.cohortLabel||(/(?:^|[^\d])9班|(?:\d09)$/.test(c)?"含體育班":"不含體育班"),T=p=>p==null||isNaN(p)?"-":Number(p).toFixed(2),ee=[{label:"班平均",map:M.classAverage,cls:"bg-emerald-50/70 text-emerald-950 font-bold",stickyBg:"bg-emerald-50"},{label:`年平均 (${G})`,map:M.schoolAverage,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班高標",map:M.classHigh,cls:"bg-blue-50/70 text-blue-950 font-bold",stickyBg:"bg-blue-50"},{label:`年高標 (${G})`,map:M.schoolHigh,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"},{label:"班低標",map:M.classLow,cls:"bg-rose-50/70 text-rose-950 font-bold",stickyBg:"bg-rose-50"},{label:`年低標 (${G})`,map:M.schoolLow,cls:"bg-slate-50 text-slate-800 font-semibold",stickyBg:"bg-slate-50"}],te=M.classAverage?`
      <tfoot class="border-t-2 border-slate-300 divide-y divide-slate-200">
        ${ee.map(p=>`
          <tr class="${p.cls}">
            <td class="roster-sticky-col-1 ${p.stickyBg||"bg-slate-50"} px-2 py-2 text-center text-xs font-mono font-bold text-slate-400 border-r border-slate-200">◆</td>
            <td class="roster-sticky-col-2 ${p.stickyBg||"bg-slate-50"} px-3 py-2 text-xs font-bold border-r border-slate-300 roster-sticky-shadow whitespace-nowrap">${m(p.label)}</td>
            <td class="px-1.5 py-2 text-center text-xs text-slate-400 border-r border-slate-200">基準</td>
            ${I.map(A=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${A==="數學"?"border-r border-slate-200":""}">${T(p.map?.[A])}</td>`).join("")}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-amber-950 bg-amber-100/70 border-r border-amber-200">${T(p.map?.社平??p.map?.社會)}</td>
            ${C.map((A,q)=>`<td class="px-1.5 py-2 text-center font-mono text-xs ${q===C.length-1&&!f?"border-r border-slate-200":""}">${T(p.map?.[A])}</td>`).join("")}
            ${f?`<td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-cyan-950 bg-cyan-100/70 border-r border-cyan-200">${T(p.map?.自平??p.map?.自然)}</td>`:""}
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${T(p.map?.總分)}</td>
            <td class="px-1.5 py-2 text-center font-mono text-xs font-bold text-slate-900 bg-slate-100/60">${T(p.map?.平均)}</td>
            <td colspan="4" class="px-3 py-2 text-center text-xs text-slate-400 font-normal">全班常模基準</td>
          </tr>
        `).join("")}
      </tfoot>
    `:"";e.innerHTML=`
      <!-- 導師專區頂部標題列 -->
      <div class="portal-toolbar flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-2xl font-bold text-slate-900">${m(c)} ${s?"班級成績管理":"導師成績儀表板"}</h2>
            <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">${s?"註冊組長・全校檢視":m(t.displayName||t.account)}</span>
          </div>
          <p class="text-slate-500 text-xs mt-1">
            各科段考成績、分數區間分析與成績通知單
          </p>
        </div>

        <div class="flex items-center gap-2.5 w-full sm:w-auto flex-wrap">
          <!-- 評量次別切換 -->
          <select id="teacher-exam-select" class="px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
            ${n.map((p,A)=>`
              <option value="${A}" ${A===r?"selected":""}>
                ${m(p.academicYear||"")} ${m(p.semester||"")} ${m(p.examName)}
              </option>
            `).join("")}
          </select>

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

      <p class="calculation-note print:hidden">${m(y.calculationNote||"社會採地理、歷史、公民平均；各科折算及名次依本次評量規則計算。")}</p>
      <!-- 班級四大指標統計 (Tailwind Cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- 班級人數與平均 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級總人數 / 總平均</div>
          <div class="flex items-baseline gap-2 my-2">
            <span class="text-3xl font-black font-mono text-slate-900">${v}</span>
            <span class="text-xs text-slate-500">分 / 全班 ${h.length} 人</span>
          </div>
          <div class="text-[11px] text-slate-400">總平均達丙等 (60分) 以上及格基準</div>
        </div>

        <!-- 班級五標常模 (教育部合規) -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級常模五標</div>
          <div class="grid grid-cols-3 gap-1 my-2 text-xs font-mono">
            <div><span class="text-slate-400">頂:</span> <b class="text-emerald-700">${k.ding||0}</b></div>
            <div><span class="text-slate-400">前:</span> <b class="text-blue-700">${k.qian||0}</b></div>
            <div><span class="text-slate-400">均:</span> <b class="text-slate-800">${k.jun||0}</b></div>
            <div><span class="text-slate-400">後:</span> <b class="text-amber-700">${k.hou||0}</b></div>
            <div><span class="text-slate-400">底:</span> <b class="text-rose-700">${k.di||0}</b></div>
          </div>
          <div class="text-[11px] text-slate-400">P88 / P75 / P50 / P25 / P12</div>
        </div>

        <!-- 教育部等第人數分佈 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">等第人數分佈</div>
          <div class="flex items-center gap-2 my-2">
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">優 ${g.優||0}</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">甲 ${g.甲||0}</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">乙 ${g.乙||0}</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">丙 ${g.丙||0}</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">丁 ${g.丁||0}</span>
          </div>
          <div class="text-[11px] text-slate-400">及格率：${h.length?Math.round((h.length-(g.丁||0))/h.length*100):0}%</div>
        </div>

        <!-- 班級及格率 -->
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">班級及格率 (丙等以上)</div>
          <div class="flex items-baseline justify-between my-2">
            <span class="text-3xl font-black font-mono text-emerald-700">${y.passRate??Math.round((h.length-(g.丁||0))/(h.length||1)*100)}%</span>
            <span class="text-xs font-mono text-slate-500">${h.length-(g.丁||0)} / ${h.length} 及格</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div class="bg-emerald-600 h-full rounded-full transition-all duration-500" style="width: ${y.passRate??Math.round((h.length-(g.丁||0))/(h.length||1)*100)}%;"></div>
          </div>
        </div>
      </div>

      <section id="subject-score-analysis" class="score-analysis" aria-labelledby="score-analysis-title"></section>

      <!-- 全班學生成績總表 -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div class="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="font-bold text-slate-800 text-sm">全班定期評量成績名冊</h3>
            <span class="text-xs bg-slate-200/80 text-slate-600 px-2 py-0.5 rounded-full font-medium">${N.length} 筆</span>
            ${S?'<span class="text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md font-medium hidden sm:inline">九年級 9 學科完整版面</span>':""}
          </div>
          <div class="flex items-center gap-2.5 w-full sm:w-auto">
            <button id="btn-toggle-density" type="button" class="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition flex items-center gap-1 shadow-xs" title="切換名冊檢視鬆緊度">
              <span>${$?"📐 舒適視圖":"📏 緊湊視圖"}</span>
            </button>
            <div class="w-full sm:w-56">
              <input type="text" id="teacher-search-input" value="${m(i)}" placeholder="🔍 搜尋座號或姓名..." class="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
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
          <table class="roster-table ${S?"roster-table-g9":""} ${$?"roster-compact":""} w-full text-left text-sm text-slate-700">
            <thead class="text-slate-700 text-xs font-semibold">
              <!-- 第一層：領域分類與結構分組 -->
              <tr class="text-xs font-bold border-b border-slate-200">
                <th colspan="2" class="roster-sticky-header-1 bg-slate-100 text-slate-700 px-3 py-2 text-center border-r border-slate-300">學生基本</th>
                <th class="bg-slate-100 text-slate-600 px-1.5 py-2 text-center border-r border-slate-200">身分</th>
                <th colspan="3" class="bg-indigo-50/90 text-indigo-950 px-2 py-2 text-center border-r border-indigo-200/80">主科領域 (語文 / 數學)</th>
                <th colspan="4" class="bg-amber-100/70 text-amber-950 px-2 py-2 text-center border-r border-amber-200/80">社會領域 (地理/歷史/公民 ➔ 社平)</th>
                <th colspan="${f?4:C.length||1}" class="bg-cyan-100/70 text-cyan-950 px-2 py-2 text-center border-r border-cyan-200/80">自然領域 ${f?"(理化3/地科2/生物1 ➔ 自平)":""}</th>
                <th colspan="5" class="bg-slate-100 text-slate-800 px-2 py-2 text-center border-r border-slate-200">總計評定與序位</th>
                <th class="bg-slate-100 text-slate-600 px-2 py-2 text-center">操作</th>
              </tr>
              <!-- 第二層：各科目與欄位項目 -->
              <tr class="bg-slate-50 text-slate-600 text-xs font-semibold border-b border-slate-200">
                <th class="roster-sticky-header-1 bg-slate-50 w-[48px] px-2 py-2.5 text-center border-r border-slate-200">座號</th>
                <th class="roster-sticky-header-2 bg-slate-50 w-[84px] px-3 py-2.5 text-left border-r border-slate-300 roster-sticky-shadow">姓名</th>
                <th class="w-[48px] px-1.5 py-2.5 text-center border-r border-slate-200">身分</th>
                ${I.map(p=>`
                  <th class="w-[58px] px-1.5 py-2.5 text-center ${p==="數學"?"border-r border-slate-200":""} ${["地理","歷史","公民"].includes(p)?"bg-amber-50/30 text-amber-950":""}">${m(p)}</th>
                `).join("")}
                <th class="w-[66px] px-1.5 py-2.5 text-center font-bold bg-amber-100 text-amber-950 border-r border-amber-200" title="社會領域平均 (地理/歷史/公民)">社平</th>
                ${C.map((p,A)=>`
                  <th class="w-[58px] px-1.5 py-2.5 text-center bg-cyan-50/30 text-cyan-950 ${A===C.length-1&&!f?"border-r border-slate-200":""}">${m(p)}</th>
                `).join("")}
                ${f?'<th class="w-[66px] px-1.5 py-2.5 text-center font-bold bg-cyan-100 text-cyan-950 border-r border-cyan-200" title="自然領域平均 (理化3/地科2/生物1)">自平</th>':""}
                <th class="w-[68px] px-1.5 py-2.5 text-center font-bold bg-slate-50">總分</th>
                <th class="w-[68px] px-1.5 py-2.5 text-center font-bold bg-slate-50">平均</th>
                <th class="w-[52px] px-1.5 py-2.5 text-center">等第</th>
                <th class="w-[84px] px-1.5 py-2.5 text-center" title="5人班級序位區間">班級序位</th>
                <th class="w-[94px] px-1.5 py-2.5 text-center border-r border-slate-200" title="10人年級序位區間">年級序位</th>
                <th class="w-[92px] px-1.5 py-2.5 text-center">個人成績單</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${P}
            </tbody>
            ${te}
          </table>
        </div>
        <div class="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
          <span>📌 標標說明：年標採學校總表規範（普通班以普通班為母體，體育班以全體學生為母體）。</span>
          <span class="font-mono text-slate-400">高標 / 低標：Q2 中位數前後 50% 學生之平均值</span>
        </div>
      </div>
    `,Fe(e.querySelector("#subject-score-analysis"),h,u,{selectedSubject:x,onSubjectChange:p=>{x=p}}),e.querySelector("#teacher-exam-select")?.addEventListener("change",p=>{r=Number(p.target.value)||0,b()}),e.querySelector("#btn-toggle-density")?.addEventListener("click",()=>{$=!$,b()}),e.querySelector("#teacher-search-input")?.addEventListener("input",p=>{i=p.target.value.trim(),b();const A=e.querySelector("#teacher-search-input");A?.focus(),A?.setSelectionRange(A.value.length,A.value.length)}),e.querySelector("#btn-print-batch-cards")?.addEventListener("click",()=>{me(y,c,a,h,null)}),e.querySelectorAll(".btn-print-single").forEach(p=>{p.addEventListener("click",A=>{const q=Number(A.currentTarget.getAttribute("data-seat"));me(y,c,a,h,q)})}),e.querySelector("#btn-print-class")?.addEventListener("click",()=>{window.print()})}b()}async function he(e,t){e.innerHTML='<p class="admin-class-message" role="status">正在讀取全校班級名單…</p>';const o=await B("getAdminClasses");if(!o.success||!Array.isArray(o.classes)){e.innerHTML=`<div class="admin-class-message"><h3>無法載入全校班級</h3><p>${m(o.message||"請確認前後端版本一致，並重新登入註冊組長帳號。")}</p><button type="button" class="admin-class-retry">重新載入</button></div>`,e.querySelector("button")?.addEventListener("click",()=>he(e,t));return}const s=o.classes;if(!s.length){e.innerHTML='<p class="admin-class-message">最新學生名冊尚無班級資料，請先確認學生名單。</p>';return}e.innerHTML=`
    <section class="admin-class-picker" aria-labelledby="admin-class-title">
      <div><h3 id="admin-class-title">各班成績與列印</h3><p>註冊組長可使用各班完整導師功能；成績單導師欄位依該班導師名單顯示。</p></div>
      <div class="admin-class-selectors">
        <label>年級<select id="admin-grade-select"><option value="">全部年級</option><option value="7">七年級</option><option value="8">八年級</option><option value="9">九年級</option></select></label>
        <label>班級<select id="admin-class-select"></select></label>
      </div>
      <p id="admin-class-description" role="status"></p>
    </section>
    <div id="admin-selected-class"></div>
  `;const l=e.querySelector("#admin-grade-select"),d=e.querySelector("#admin-class-select"),c=e.querySelector("#admin-selected-class");let n=0;async function a(){const i=s.find(b=>b.className===d.value);if(!i)return;const x=++n,$=document.createElement("div");$.className="admin-inherited-class",c.replaceChildren($),e.querySelector("#admin-class-description").textContent=`${i.className}｜在校名冊 ${i.studentCount} 人｜導師：${i.teacherName||"尚未設定"}`,await ce($,t,{className:i.className,teacherName:i.teacherName}),x!==n&&$.remove()}function r(){const i=d.value,x=s.filter($=>!l.value||$.className.startsWith(l.value+"年"));d.innerHTML=x.map($=>`<option value="${m($.className)}">${m($.className)}（${$.studentCount} 人）</option>`).join(""),d.disabled=x.length===0,x.some($=>$.className===i)&&(d.value=i),x.length?a():(n++,c.innerHTML='<p class="admin-class-message">此年級尚無班級資料。</p>',e.querySelector("#admin-class-description").textContent="")}l.addEventListener("change",r),d.addEventListener("change",()=>void a()),r()}async function O(e,t){e.innerHTML=`
    <div class="flex items-center justify-center py-20 text-slate-500">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mr-3"></div>
      <span>正在讀取 Google Sheets 資料庫狀態...</span>
    </div>
  `;const o=await B("getAdminOverview");if(!o.success||!o.stats){e.innerHTML=`<div class="admin-class-message"><h2>無法載入管理資料</h2><p>${m(o.message||"請稍後重新載入。")}</p><button type="button" id="btn-admin-retry">重新載入</button></div>`,e.querySelector("#btn-admin-retry")?.addEventListener("click",()=>O(e,t));return}const s=o.stats,l=J();function d(){e.innerHTML=`
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
          <div class="text-2xl font-black font-mono text-slate-900 my-1">${s.studentCount||0}</div>
          <div class="text-[10px] text-slate-400">在校學生名冊</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-slate-500 mb-1">【導師名單】</div>
          <div class="text-2xl font-black font-mono text-emerald-700 my-1">${s.teacherCount||0}</div>
          <div class="text-[10px] text-slate-400">7、8、9年級導師</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-teal-700 mb-1">【七年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-teal-700 my-1">${s.grade7Count||0}</div>
          <div class="text-[10px] text-slate-400">7 門學科</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-sky-700 mb-1">【八年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-sky-700 my-1">${s.grade8Count||0}</div>
          <div class="text-[10px] text-slate-400">7 門學科（含理化）</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-purple-700 mb-1">【九年級成績資料庫】</div>
          <div class="text-2xl font-black font-mono text-purple-700 my-1">${s.grade9Count||0}</div>
          <div class="text-[10px] text-slate-400">9 門學科（含理化地科）</div>
        </div>

        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div class="text-[11px] font-semibold text-slate-500 mb-1">全校累計筆數</div>
          <div class="text-2xl font-black font-mono text-indigo-700 my-1">${s.gradeRecordCount||0}</div>
          <div class="text-[10px] text-slate-400">${(s.exams||[]).length||1} 場定期評量</div>
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
              ${l?`已連線：${l}`:"目前處於：【本地示範模式】（可立即點選右側設定貼上您的 GAS 網址）"}
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
    `;let x=!1;const $=e.querySelector("#admin-overview-panel"),b=e.querySelector("#admin-class-panel"),y=e.querySelector("#admin-tab-overview"),u=e.querySelector("#admin-tab-classes");function k(g){const h=g==="classes";$.hidden=h,b.hidden=!h,y.setAttribute("aria-pressed",String(!h)),u.setAttribute("aria-pressed",String(h)),h&&!x&&(x=!0,he(b,t))}y.addEventListener("click",()=>k("overview")),u.addEventListener("click",()=>k("classes")),document.getElementById("btn-config-gas")?.addEventListener("click",n),document.getElementById("btn-test-gas")?.addEventListener("click",a),document.getElementById("btn-init-db-remote")?.addEventListener("click",r),document.getElementById("btn-autoresize-remote")?.addEventListener("click",c),document.getElementById("btn-open-gas-instructions")?.addEventListener("click",i)}async function c(){j("正在自動調整試算表各工作表欄寬...");const x=await B("autoResizeColumns");x.success?j(x.message||"🎉 所有工作表欄寬已全數調整至最佳寬度！"):j(x.message||"調整欄寬失敗","error")}function n(){const x=`
      <div class="p-6">
        <h3 class="text-base font-bold text-slate-900 mb-2">設定 Google Apps Script Web App 網址</h3>
        <p class="text-xs text-slate-500 mb-4">
          請貼上您在 Google Apps Script 中點選「部署」➔「網頁應用程式」所取得的 URL（以 /exec 結尾）：
        </p>
        <input type="url" id="input-gas-url" value="${m(J())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono mb-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
        <div class="flex justify-between items-center">
          <button id="btn-clear-gas-url" class="text-xs text-rose-600 hover:underline">清除網址 (切換為本地示範模式)</button>
          <div class="flex gap-2">
            <button id="btn-modal-cancel" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium">取消</button>
            <button id="btn-modal-save-gas" class="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-sm">儲存設定</button>
          </div>
        </div>
      </div>
    `;Z(x,()=>{document.getElementById("btn-modal-cancel")?.addEventListener("click",R),document.getElementById("btn-clear-gas-url")?.addEventListener("click",()=>{Q(""),j("已切換為本地示範模式"),R(),O(e,t)}),document.getElementById("btn-modal-save-gas")?.addEventListener("click",()=>{const $=document.getElementById("input-gas-url")?.value.trim();Q($),j("GAS 網址已儲存！"),R(),O(e,t)})})}async function a(){j("正在測試 GAS 後端連線...");const x=await B("ping");x.success?j(`✓ 連線成功！試算表：${x.spreadsheetName||"已連線"}`):j(`連線失敗：${x.message}`,"error")}async function r(){if(!confirm("確定要在 Google Sheets 中建立【學生名單】、【導師名單】、【管理者名單】以及【七年級成績資料庫】、【八年級成績資料庫】、【九年級成績資料庫】三個工作表嗎？"))return;j("正在傳送初始化指令至 Google Apps Script...");const x=await B("initDatabase");x.success?(j("🎉 Google Sheets 資料庫結構與七、八、九年級示範資料已順利建立！"),O(e,t)):j(x.message||"初始化指令執行失敗","error")}function i(){Z(`
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
    `,()=>{document.getElementById("btn-close-instructions")?.addEventListener("click",R)})}d()}let E="student";function le(){const e=document.getElementById("app-masthead");if(!e)return;const t=de();e.innerHTML=`
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
              <span class="font-bold text-white">${m(t.displayName||t.account)}</span>
            </div>
            <button id="btn-logout" class="school-logout">
              登出
            </button>
          </div>
        `:""}
      </div>
    </div>
  `,document.getElementById("btn-masthead-gas-status")?.addEventListener("click",ye),document.getElementById("btn-logout")?.addEventListener("click",()=>{B("logout"),fe(),j("您已安全登出系統。"),X()})}function re(e){const o={student:{role:"student",title:"學生與家長登入",subtitle:"查詢個人段考成績與歷次段考紀錄。",accLabel:"學生學號（7 碼）",accPlaceholder:"請輸入 7 碼學生學號",pwdLabel:"驗證密碼（身分證後四碼 ＋ 出生月日共 8 碼）",pwdPlaceholder:"請輸入 8 碼登入密碼",help:"出生月日請使用四碼，不足兩位的月份與日期請補 0。若無法登入，請洽教務處註冊組協助確認。",defaultAcc:"",defaultPwd:""},teacher:{role:"teacher",title:"班級導師登入",subtitle:"查詢班級段考成績、各科分數區間與列印成績單。",accLabel:"教師帳號",accPlaceholder:"請輸入公務信箱前綴帳號",pwdLabel:"教師密碼",pwdPlaceholder:"請輸入教師密碼",help:"請使用學校提供的教師帳號。首次登入須依畫面指示變更密碼；忘記密碼請洽教務處註冊組。",defaultAcc:"",defaultPwd:""},admin:{role:"admin",title:"註冊組長登入",subtitle:"管理全校資料，並可檢視各班成績與使用導師列印功能。",accLabel:"管理者帳號",accPlaceholder:"請輸入管理員帳號（例如：admin）",pwdLabel:"管理員密碼",pwdPlaceholder:"請輸入管理員密碼",help:"本專區限授權人員使用。請於使用完畢後登出，避免在共用設備儲存登入資料。",defaultAcc:"",defaultPwd:""}}[E];e.innerHTML=`
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
          <button type="button" aria-pressed="${E==="student"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${E==="student"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="student">
            學生／家長
          </button>
          <button type="button" aria-pressed="${E==="teacher"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${E==="teacher"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="teacher">
            班級導師
          </button>
          <button type="button" aria-pressed="${E==="admin"}" class="role-tab-btn py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition ${E==="admin"?"bg-white text-slate-900 shadow-sm":"text-slate-600 hover:text-slate-900"}" data-role="admin">
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
              <input type="text" id="login-account-id" autocomplete="username" ${E==="student"?'inputmode="numeric"':""} required value="${m(o.defaultAcc)}" placeholder="${m(o.accPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>

            <div>
              <label for="login-password" class="block text-xs font-semibold text-slate-700 mb-1.5">${o.pwdLabel}</label>
              <input type="password" id="login-password" autocomplete="current-password" aria-describedby="login-help" required value="${m(o.defaultPwd)}" placeholder="${m(o.pwdPlaceholder)}" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
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
  `,e.querySelectorAll(".role-tab-btn").forEach(s=>{s.addEventListener("click",()=>{E=s.getAttribute("data-role"),re(e)})}),document.getElementById("btn-open-gas-setup")?.addEventListener("click",ye),document.getElementById("auth-login-form")?.addEventListener("submit",async s=>{s.preventDefault();const l=document.getElementById("login-account-id")?.value.trim(),d=document.getElementById("login-password")?.value.trim(),c=document.getElementById("btn-submit-login");if(!l||!d){j("請輸入帳號與密碼！","error");return}c&&(c.disabled=!0,c.textContent="正在驗證帳密...");const n=await B("login",{role:E,account:l,password:d});if(c&&(c.disabled=!1,c.textContent="驗證身分並進入系統"),!n.success){j(n.message||"登入失敗，請確認帳號密碼","error");return}if(n.role==="teacher"&&n.mustChangePassword){Ge(n.user.account,d,()=>{ie({role:"teacher",account:n.user.account,displayName:n.user.name,assignedClass:n.user.assignedClass,authToken:n.authToken}),j("密碼已成功變更！歡迎進入導師儀表板。"),X()},n.authToken);return}const a={role:n.role,account:n.user&&(n.user.account||n.user.studentId)||l,displayName:n.user&&(n.user.name||n.user.displayName)||l,authToken:n.authToken,studentId:n.role==="student"?n.user.studentId:void 0,assignedClass:n.role==="teacher"?n.user.assignedClass:void 0};ie(a),j(`歡迎回來，${a.displayName}！`),X()})}function Ge(e,t,o,s){const l=`
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
          <input type="password" id="forced-curr-pwd" required value="${m(t)}" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
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
  `;Z(l,()=>{document.getElementById("forced-pwd-form")?.addEventListener("submit",async d=>{d.preventDefault();const c=document.getElementById("forced-curr-pwd")?.value.trim(),n=document.getElementById("forced-new-pwd")?.value.trim(),a=document.getElementById("forced-confirm-pwd")?.value.trim(),r=document.getElementById("btn-submit-forced-pwd");if(n!==a){j("兩次輸入的新密碼不一致！","error");return}if(n.length<6){j("新密碼長度請至少包含 6 個字元！","error");return}r&&(r.disabled=!0,r.textContent="正在寫入 Google Sheets...");const i=await B("changeTeacherPassword",{account:e,currentPassword:c,newPassword:n,authToken:s});i.success?(R(),typeof o=="function"&&o()):(j(i.message||"變更密碼失敗，請重試","error"),r&&(r.disabled=!1,r.textContent="確認變更新密碼並進入系統"))})})}function ye(){const e=`
    <div class="p-6">
      <h3 class="text-base font-bold text-slate-900 mb-2">⚙️ Google Apps Script 試算表連線設定</h3>
      <p class="text-xs text-slate-500 mb-4 leading-relaxed">
        本系統可直接串接您的 Google 試算表。請將您部署為網頁應用程式 (Web App) 的 URL 貼於下方：
      </p>

      <div class="mb-4">
        <label class="block text-xs font-semibold text-slate-700 mb-1">Web App 部署網址 (以 /exec 結尾)</label>
        <input type="url" id="modal-gas-input" value="${m(J())}" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
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
  `;Z(e,()=>{document.getElementById("btn-modal-close")?.addEventListener("click",R),document.getElementById("btn-modal-clear-gas")?.addEventListener("click",()=>{Q(""),j("已切換為本地示範模式"),R(),le()}),document.getElementById("btn-modal-save")?.addEventListener("click",()=>{const t=document.getElementById("modal-gas-input")?.value.trim();Q(t),j("GAS 連線網址已更新！"),R(),le()})})}function X(){le();const e=document.getElementById("app-root");if(!e)return;const t=de();if(e.dataset.view=t?.role||"login",e.classList.toggle("school-portal-root",!!t),!t){re(e);return}t.role==="student"?Ee(e,t):t.role==="teacher"?ce(e,t):t.role==="admin"?O(e,t):(fe(),re(e))}window.addEventListener("DOMContentLoaded",()=>{X()});
