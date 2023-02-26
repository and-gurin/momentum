(()=>{"use strict";const e=document.querySelector(".settings"),t=document.querySelector(".icon_settings"),n=document.querySelectorAll(".block input"),o=document.querySelectorAll(".block label"),a=document.querySelector(".title__language"),r=document.querySelector(".title__photo"),c=document.querySelector('option[value="ru"]'),l=document.querySelector('option[value="en"]');let s=!1;const i=e=>{o.forEach((t=>{t.textContent=q[e][`elements-${t.htmlFor}`]})),a.textContent=q[e]["change-lang"],r.textContent=q[e]["change-photo"],c.textContent=q[e].russian,l.textContent=q[e].english},u=document.querySelector(".quote"),d=document.querySelector(".author");async function m(e){const t=await fetch(E[e]);console.log(t);const n=await t.json(),o=Math.floor(15*Math.random()+1);u.textContent=n[o].text,d.textContent=n[o].author}document.querySelector(".qoutes-icon").addEventListener("click",m);const g=document.querySelector(".weather-icon"),h=document.querySelector(".weather__temperature"),y=document.querySelector(".weather__description"),S=document.querySelector(".weater__wind"),w=document.querySelector(".weather__humidity"),f=document.querySelector(".city");async function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage.getItem("city")?localStorage.getItem("city"):"Minsk";g.className="weather-icon owf";const n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&lang=${e}&appid=f793b145b04b72ffdfd775747be4fac1&units=metric`;try{const t=await fetch(n),o=await t.json();g.classList.add(`owf-${o.weather[0].id}`),h.textContent=`${Math.round(o.main.temp)} °C`,y.textContent=`${o.weather[0].description}`,S.textContent=`${p[e].wind}: ${Math.round(o.wind.speed)} ${p[e].wind_units}`,w.textContent=`${p[e].humidity}: ${o.main.humidity} %`}catch{h.textContent="",S.textContent="",w.textContent="",y.textContent="Data loading error. Enter the city again"}}window.addEventListener("beforeunload",(function(){localStorage.setItem("city",f.value)})),f.value=localStorage.getItem("city")?localStorage.getItem("city"):"Minsk",window.addEventListener("load",(function(){localStorage.getItem("city")})),f.addEventListener("change",(e=>{v(f.value),localStorage.setItem("city",e.target.value)}));const p={en:{lang:"en",wind:"Wind speed",wind_units:"m/s",humidity:"Humidity",err:"Data loading error. Enter the city again",city:"Minsk"},ru:{lang:"ru",wind:"Скорость ветра",wind_units:"м/с",humidity:"Влажность",err:"Ошибка загрузки данных. Введите город еще раз",city:"Минск"}},q={ru:{"change-lang":"Выбрать язык",russian:"русский",english:"английский","change-photo":"Выбрать фон","change-theme":"Выбрать тему фона",'text-show"':"Показать","elements-date":"дата","elements-time":"время","elements-weather":"погода","elements-greeting":"приветствие","elements-quotes":"цитаты","elements-audio":"плеер","elements-todo":"список дел"},en:{"change-lang":"Choose language",russian:"russian",english:"english","change-photo":"Choose Photo Source","change-theme":"Choose Background Theme",'text-show"':"Show","elements-date":"date","elements-time":"time","elements-weather":"weather","elements-greeting":"greeting","elements-quotes":"quotes","elements-audio-player":"audio","elements-todo":"todo"}},L={ru:"ru-RU",en:"en-US"},E={ru:"./quote-ru.json",en:"./quote-en.json"},$=["ru","en"],C=document.querySelector(".language"),M=localStorage.getItem("language")&&$.includes(x())?localStorage.getItem("language"):$[1];function x(){localStorage.getItem("language")}window.addEventListener("beforeunload",(function(){localStorage.setItem("language",C.value)})),C.value=x()||"en",window.addEventListener("load",x);const _=document.querySelector(".time"),I=document.querySelector(".date");let k;function b(e){const t=(new Date).toLocaleTimeString();_.textContent=t,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";const t=(new Date).toLocaleDateString(L[e],{weekday:"long",day:"numeric",month:"long"});I.textContent=`${t[0].toUpperCase()}${t.split(" ")[0].slice(1)} ${t.split(" ")[1]} ${t.split(" ")[2][0].toUpperCase()+t.split(" ")[2].slice(1)}`}(e),k=setTimeout(b,1e3)}const T=[{title:"Aqua Caelestis",src:"../../src/assets/sounds/Aqua-Caelestis.mp3",duration:"00:58"},{title:"River Flows In You",src:"../../src/assets/sounds/River-Flows-In-You.mp3",duration:"03:50"},{title:"Ennio Morricone",src:"../../src/assets/sounds/Ennio-Morricone.mp3",duration:"01:37"},{title:"Summer Wind",src:"../../src/assets/sounds/Summer-Wind.mp3",duration:"01:50"}],D=document.querySelector(".icon_play"),A=document.querySelector(".icon_prew-track"),j=document.querySelector(".icon_next-track"),H=document.querySelector(".audio-player__playlist");let N=!0;const G=new Audio(T[0].src);let U=0;T.forEach((e=>{const t=document.createElement("li");t.classList.add("play-item"),t.textContent=e.title,H.append(t)}));const F=document.querySelectorAll(".play-item");function R(){U<T.length-1?U++:U=0,G.src=T[U].src,N=!0,X(),console.log(U)}function W(){U>0?U--:U=T.length-1,G.src=T[U].src,N=!0,X(),console.log(U)}function X(){F.forEach(((e,t)=>{t===U?e.classList.add("item-active"):e.classList.remove("item-active")})),N?(G.play(),N=!1,D.classList.add("pause")):(G.pause(),N=!0,D.classList.remove("pause"))}G.addEventListener("ended",R);const Y=document.querySelector(".greeting__welcome");function B(){Y.textContent=function(){const e=["night","morning","afternoon","evening"],t=(new Date).getHours();return Math.floor(t/6)<1?`Good ${e[0]}`:Math.floor(t/6)<2?`Good ${e[1]}`:Math.floor(t/6)<3?`Good ${e[2]}`:Math.floor(t/6)<4?`Good ${e[0]}`:null}(),setTimeout(B,6e4)}const P=document.querySelector(".name");window.addEventListener("beforeunload",(function(){localStorage.setItem("name",P.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(P.value=localStorage.getItem("name"))}));const z=document.querySelector("body"),J=document.querySelector(".icon-slider_prew"),K=document.querySelector(".icon-slider_next");let O;function Q(){let e=String(O).padStart(2,"0"),t=function(){const e=["night","morning","afternoon","evening"],t=(new Date).getHours();return Math.floor(t/6)<1?`${e[0]}`:Math.floor(t/6)<2?`${e[1]}`:Math.floor(t/6)<3?`${e[2]}`:Math.floor(t/6)<4?`${e[0]}`:null}(),n=new Image;n.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${t}/${e}.jpg`,n.onload=()=>{z.style.backgroundImage=`url(${n.src})`}}O=Math.floor(20*Math.random()+1),J.addEventListener("click",(function(){O--,O<1&&(O=20),console.log(O),Q()})),K.addEventListener("click",(function(){O++,O>20&&(O=1),console.log(O),Q()}));const V=document.querySelector("#progress-bar"),Z=document.querySelector(".volume-button"),ee=document.querySelector(".volume"),te=document.querySelector(".volume-slider"),ne=document.querySelector(".volume-percentage"),oe=document.querySelector(".currentTime"),ae=document.querySelector(".durationTime");function re(){G.currentTime&&(V.max=G.duration,V.value=G.currentTime,oe.innerHTML=ce(Math.floor(G.currentTime)),ae.innerHTML=ce(Math.floor(G.duration)))}function ce(e){let t=Math.floor(e/60),n=Math.floor(e-60*t);return isNaN(t)&&(t="00"),isNaN(n)&&(n="00"),`${t}:${String(n).padStart(2,"0")}`}function le(e){G.currentTime=e.target.value}function se(e){const t=window.getComputedStyle(te).width,n=e.offsetX/parseInt(t);G.volume=n,ne.style.width=100*n+"%"}function ie(){G.muted=!G.muted;const e="icono-volumeMedium",t="icono-volumeMute";G.muted?(ee.classList.remove(e),ee.classList.add(t)):(ee.classList.add(e),ee.classList.remove(t))}window.onload=function(){window.addEventListener("load",(()=>setSettingsData(M))),D.addEventListener("click",X),j.addEventListener("click",R),A.addEventListener("click",W),setInterval(re,500),V.addEventListener("change",le),te.addEventListener("click",se,!1),Z.addEventListener("click",ie),b(M),B(),m(M),Q(),v(M),t.addEventListener("click",(()=>{!1===s?(s=!0,e.style.transform="translateX(0)"):!0===s&&(s=!1,e.style.transform="translateX(-120%)")})),n.forEach((e=>{e.addEventListener("click",(e=>{if(console.log(e.target.name),e.target.checked){const t=document.querySelector(`.${e.target.name}`);t.classList.remove("hide"),t.classList.add("show"),localStorage.setItem(e.target.name,"on")}else{const t=document.querySelector(`.${e.target.name}`);t.classList.remove("show"),t.classList.add("hide"),localStorage.setItem(e.target.name,"off")}}))})),i(C.value),C.addEventListener("change",(()=>{localStorage.setItem("language",C.value),m(C.value),clearTimeout(k),b(C.value),v(C.value),i(C.value)}))}})();