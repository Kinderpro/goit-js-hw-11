import{i as d,S as u}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function c(i){return i.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:a,downloads:l})=>`<li class="card">
        <a href="${o}"><img class="img-card" src="${t}" alt="${s}" title="${s}" ></a>
        <div class="description"><p>Likes: ${e}</p> <p>Views: ${r}</p>
        <p>Comments: ${a}</p>
        <p>Downloads: ${l}</p></li>
   </div>`).join("")}const f="42801696-74e6805803c5f99662f25fde0";function p(i){const t="https://pixabay.com/api/",o=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${o}`).then(s=>{if(!s.ok)throw new Error("404 not found!");return s.json()})}const n={formEl:document.querySelector(".form-search"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.formEl.addEventListener("submit",m);function m(i){i.preventDefault();const t=i.target[0].value;n.loader.classList.remove("loader-none"),n.gallery.innerHTML="",p(t).then(o=>{c(o.hits)==[]?(n.loader.classList.add("loader-none"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})):(n.loader.classList.add("loader-none"),n.gallery.innerHTML=c(o.hits),h.refresh())}).catch(o=>{n.loader.classList.add("loader-none")})}let h=new u(".gallery a",{animationSpeed:1e3,captionDelay:250,captionsData:"alt",captionPosition:"bottom",captionText:"description",history:!1,swipeClose:!0,close:!0});
//# sourceMappingURL=commonHelpers.js.map