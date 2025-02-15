import{a as d,S as u,i as m}from"./assets/vendor-YT4DRQk6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const p="48710632-74e9a639a0cf21f0899e63b1f",f="https://pixabay.com/api/";async function y(e,s=1){const a={key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:s},l=await d.get(f,{params:a});return console.log(l.data),l.data.hits}const g=new u(".gallery-list a",{captionsData:"alt",captionDelay:250}),i=e=>{m.error({message:e,position:"topRight",maxWidth:432})};function c(e,s){const a=h(s);e.innerHTML=a,g.refresh()}function h(e){return e.map(v).join("")}function v(e){return`<li class="gallery-item">
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
          </li>`}const o={form:document.querySelector(".form"),input:document.querySelector(".form-input"),button:document.querySelector(".form-button"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",w);o.loader.style.display="none";async function w(e){e.preventDefault();const s=e.currentTarget.elements.search.value.trim();if(!s){i("Enter some value");return}c(o.gallery,[]),o.loader.style.display="block";try{const a=await y(s);o.loader.style.display="none",a.length===0?i("Sorry, there are no images matching your search query. Please try again!"):c(o.gallery,a)}catch{o.loader.style.display="none",i("Sorry, something went wrong. Please try again!")}}
//# sourceMappingURL=index.js.map
