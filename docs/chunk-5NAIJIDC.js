import{L as i}from"./chunk-Q6J3GLUC.js";var r={url:"https://becoming-glowworm-huge.ngrok-free.app"};var h=(()=>{let a=class a{async login(o){let t=await fetch(`${r.url}/api/authentication/login`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!t.ok)throw new Error(await t.text());return localStorage.setItem("token",t.headers.get("Authorization")??""),await t.json()}async cadastrar(o){let t=await fetch(`${r.url}/api/authentication/cadastrar`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!t.ok)throw new Error(await t.text());return localStorage.setItem("token",t.headers.get("Authorization")??""),await t.json()}async atualizarDados(o){let t=localStorage.getItem("token"),e=await fetch(`${r.url}/api/usuario`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:t??""},body:JSON.stringify(o)});if(!e.ok)throw new Error(await e.text());return await e.json()}async getUsuario(o){let t=localStorage.getItem("token"),e=await fetch(`${r.url}/api/usuario/${o}`,{headers:{Authorization:t??""}});if(!e.ok)throw new Error(await e.text());return await e.json()}async sendFeedback(o){let t=localStorage.getItem("token"),e=await fetch(`${r.url}/api/usuario/feedback`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:t??""},body:JSON.stringify(o)});if(!e.ok)throw new Error(await e.text())}};a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=i({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();export{r as a,h as b};