import{fa as s}from"./chunk-JKC5LLPW.js";var f=(()=>{let r=class r{transform(a){let t=new Date(a),n=new Date,e=n.getTime()-t.getTime();if(e<6e4)return"Hace un momento";if(e<36e5)return`Hace ${Math.floor(e/6e4)} minutos`;if(n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear())return`Hace ${Math.floor(e/36e5)} horas`;if(e<1728e5)return"Ayer";if(e<6048e5)return`Hace ${Math.floor(e/864e5)} d\xEDas`;let u={year:"numeric",month:"long",day:"numeric"};return t.toLocaleDateString(u)}};r.\u0275fac=function(t){return new(t||r)},r.\u0275pipe=s({name:"formatfecha",type:r,pure:!0,standalone:!0});let o=r;return o})();export{f as a};
