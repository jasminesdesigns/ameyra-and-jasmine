let current = 0;

const screens = [...document.querySelectorAll(".screen")];
const progress = document.getElementById("progress");
const nextNav = document.getElementById("nextNav");

function go(n){
  if(n < 0 || n >= screens.length) return;

  current = n;

  screens.forEach((s,i)=>{
    s.classList.toggle("active", i === n);
  });

  progress.textContent = `${n + 1} / ${screens.length}`;

  nextNav.textContent =
    n === screens.length - 1 ? "HOME" : "NEXT";

  nextNav.onclick = () =>
    go(n === screens.length - 1 ? 0 : n + 1);
}


/* =========================
   8 THINGS I LOVE ABOUT YOU
   ========================= */

const field = document.getElementById("field");
const remaining = document.getElementById("remaining");

let found = 0;

const reasons = [
  {
    title: "Never a boring day",
    text: "I know this sounds corny, but I really feel this all the time when I say there's never a boring day with you. You make me laugh till my stomach hurts most days."
  },
  {
    title: "You always take care of me",
    text: "You always get up to get something for me or grab something for me, even when you're tired or sleepy."
  },
  {
    title: "My favorite everyday moments",
    text: "I love that we have the same interests and always find a way to make everyday count, even if it's just getting dinner and playing Brawl Stars."
  },
  {
    title: "Everything about you",
    text: "I love all of your physical characteristics. I love your body and your face and your eyes, and I love how warm you always are and how good you always smell."
  },
  {
    title: "You're a 1/1",
    text: "I love how unique you are because I swear you're a 1/1. I've never met anyone that's similar to you BESIDES ME 😭 I love your ADHD brain."
  },
  {
    title: "My talented girlfriend",
    text: "I love how talented you are in everything that you attempt. Like deadass, what are you NOT good at? 😭 I love my talented gf. It's such a flex."
  },
  {
    title: "You meet me in the middle",
    text: "I love that you put just as much effort into me as I do for you, because that's really what keeps us thriving. This wouldn't work with just me, or just you. So thank you for always meeting me in the middle."
  },
  {
    title: "EVERYTHING!!!",
    text: "I am so in love with all that there is to you. I'm in awe like everyday, and I fall more in love everyday. Nothing could ever pull my eyes off of you."
  }
];


/* Flowers */

const flowers = ["🌷","🌼","🌸","🌻","🪻","🌹","💮","🌺"];

if(field){

  flowers.forEach((f)=>{
    const el = document.createElement("div");

    el.className = "flower";
    el.textContent = f;

    el.style.left = (8 + Math.random() * 84) + "%";
    el.style.top = (35 + Math.random() * 48) + "%";
    el.style.animationDelay = (Math.random() * 1.5) + "s";

    field.appendChild(el);
  });


  /* Hearts */

  reasons.forEach((reason,i)=>{

    const h = document.createElement("button");

    h.className = "heart";
    h.textContent = "♥";

    h.style.left = (7 + Math.random() * 86) + "%";
    h.style.top = (35 + Math.random() * 48) + "%";
    h.style.animationDelay = (Math.random() * 1.5) + "s";

    h.onclick = ()=>{

      if(h.classList.contains("collected")) return;

      h.classList.add("collected");

      found++;

      remaining.textContent = 8 - found;

      document.getElementById("reasonNumber").textContent =
        `THING ${i + 1} OF 8`;

      document.getElementById("reasonTitle").textContent =
        reason.title;

      document.getElementById("reasonText").textContent =
        reason.text;

      document.getElementById("reasonPopup").classList.remove("hidden");

    };

    field.appendChild(h);

  });

}


/* Close reason popup */

function closeReason(){

  document
    .getElementById("reasonPopup")
    .classList.add("hidden");

}


/* Quiz */

function answer(correct){

  const r = document.getElementById("quizResult");

  r.textContent = correct
    ? "CORRECT! You really know me 😭❤️"
    : "Nooo 😭 try again!";

  if(correct){
    document
      .getElementById("quizNext")
      .classList.remove("hidden");
  }

}


/* Secret */

function showSecret(){

  document
    .getElementById("secret")
    .classList.remove("hidden");

}


/* Start */

go(0);