const t={"#email":localStorage.getItem(document.querySelector("input").id),"#msg":localStorage.getItem(document.querySelector("textarea").id)};console.log(t);for(const e in t){if(t[e]===null)continue;console.log(t[e]);const o=document.querySelector(e);o.value=t[e],console.log(o)}const l=document.querySelector(".feedback-form");console.log(l);l.addEventListener("input",e=>{e.preventDefault();const o=e.target;console.log(o.value),localStorage.setItem(o.id,o.value)});l.addEventListener("submit",e=>{localStorage.removeItem(document.querySelector("input").id),localStorage.removeItem(document.querySelector("textarea").id)});
//# sourceMappingURL=02-form-1bb93d18.js.map