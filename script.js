let current = 0;
const screens = [...document.querySelectorAll(".screen")];
const progress = document.getElementById("progress");
const nextNav = document.getElementById("nextNav");

function go(n){
  if(n < 0 || n >= screens.length) return;
  current = n;
  screens.forEach((s,i)=>s.classList.toggle("active",i===n));
  progress.textContent = `${n+1} / ${screens.length}`;
  nextNav.textContent = n === screens.length-1 ? "HOME" : "NEXT";
  nextNav.onclick = () => go(n === screens.length-1 ? 0 : n+1);
}

const field = document.getElementById("field");
const remaining = document.getElementById("remaining");
let found = 0;
const flowers = ["🌷","🌼","🌸","🌻","🪻","🌹","💮","🌺"];
flowers.forEach((f,i)=>{
  const el=document.createElement("div");
  el.className="flower";
  el.textContent=f;
  el.style.left=(8+Math.random()*84)+"%";
  el.style.top=(35+Math.random()*48)+"%";
  el.style.animationDelay=(Math.random()*1.5)+"s";
  field.appendChild(el);
});
for(let i=0;i<8;i++){
  const h=document.createElement("button");
  h.className="heart";
  h.textContent="♥";
  h.style.left=(7+Math.random()*86)+"%";
  h.style.top=(35+Math.random()*48)+"%";
  h.style.animationDelay=(Math.random()*1.5)+"s";
  h.onclick=()=>{
    if(h.classList.contains("collected")) return;
    h.classList.add("collected");
    found++;
    remaining.textContent=8-found;
  };
  field.appendChild(h);
}
function answer(correct){
  const r=document.getElementById("quizResult");
  r.textContent=correct ? "CORRECT! You really know me 😭❤️" : "Nooo 😭 try again!";
  if(correct) document.getElementById("quizNext").classList.remove("hidden");
}
function showSecret(){document.getElementById("secret").classList.remove("hidden")}
go(0);
