import{a as f,S as h,i as g}from"./assets/vendor-YT4DRQk6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const v="48710632-74e9a639a0cf21f0899e63b1f",b="https://pixabay.com/api/";async function u(e,r=1){const a={key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r},n=await f.get(b,{params:a});return console.log(n.data),n.data}const m=new h(".gallery-list a",{captionsData:"alt",captionDelay:250}),l=e=>{g.error({message:e,position:"topRight",maxWidth:432})};function d(e,r){const a=p(r);e.innerHTML=a,m.refresh()}function w(e,r){const a=p(r);e.insertAdjacentHTML("beforeend",a),m.refresh()}function p(e){return e.map(L).join("")}function L(e){return`<li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link">
              <img
                class="card-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
                data-source="${e.largeImageURL}"
              />
              <div class="card-texts">
                <div class="card-text-element likes">
                  <p class="element-title">Likes</p>
                  <p class="element-value">${e.likes}</p>
                </div>
                <div class="card-text-element views">
                  <p class="element-title">Views</p>
                  <p class="element-value">${e.views}</p>
                </div>
                <div class="card-text-element comments">
                  <p class="element-title">Comments</p>
                  <p class="element-value">${e.comments}</p>
                </div>
                <div class="card-text-element downloads">
                  <p class="element-title">Downloads</p>
                  <p class="element-value">${e.downloads}</p>
                </div>
              </div>
            </a>
          </li>`}const s={form:document.querySelector(".form"),input:document.querySelector(".form-input"),button:document.querySelector(".form-button"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),more:document.querySelector(".load-more")};s.form.addEventListener("submit",S);s.more.addEventListener("click",k);s.loader.style.display="none";let y="",i=1;async function S(e){e.preventDefault();const r=e.currentTarget.elements.search.value.trim();if(!r){l("Enter some value");return}y=r,i=1,d(s.gallery,[]),s.loader.style.display="block";try{const a=await u(r);a.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):(d(s.gallery,a.hits),a.hits.length<40?l("We're sorry, but you've reached the end of search results."):s.more.style.display="block")}catch{l("Sorry, something went wrong. Please try again!")}s.loader.style.display="none"}async function k(){i+=1,s.loader.style.display="block",s.more.style.display="none";try{const e=await u(y,i);e.hits.length<40||i*40>e.totalHits?l("We're sorry, but you've reached the end of search results."):s.more.style.display="block",w(s.gallery,e.hits)}catch{l("Sorry, something went wrong. Please try again!")}s.loader.style.display="none"}
//# sourceMappingURL=index.js.map
