import{a as p,S as g,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="52781164-186021ddb033549fd762d563f";function b(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(h,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250,close:!0});function S(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
  <li class='gallery-item'>
  <a href='${n}'>
  <img src='${o}' alt='${e}' />
  </a>
  <div class='info'>
  <p class='info-item'><b>Likes:</b> ${t}</p>
  <p class='info-item'><b>Views:</b> ${s}</p>
  <p class='info-item'><b>Comments:</b> ${d}</p>
  <p class='info-item'><b>Downloads:</b> ${f}</p>
  </div>
  </li>
  `).join("");c.innerHTML=r,L.refresh()}function v(){c.innerHTML=""}function w(){l.classList.add("visible")}function q(){l.classList.remove("visible")}const u=document.querySelector(".form"),m=document.querySelector("input[name = 'search-text']");m.removeAttribute("required");u.addEventListener("submit",P);function P(i){i.preventDefault();const r=m.value.trim().toLowerCase();if(!r){a.warning({message:"Please enter a search term!",position:"topRight",theme:"dark",backgroundColor:"red"});return}v(),w(),setTimeout(()=>{b(r).then(o=>{if(!o.hits.length){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark",backgroundColor:"red",messageSize:"16",timeout:5e3});return}S(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight",theme:"dark",backgroundColor:"red",timeout:5e3})}).finally(()=>{q(),u.reset()})},0)}
//# sourceMappingURL=index.js.map
