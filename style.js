
let profile = {
  email: "parrisschneider922@gmail.com",
  roles: ["Java Programming", "JavaScript", "HTML Web Pages"],  
  about: "I'm a 2nd-year college student passionate about technology and programming. I enjoy creating websites, exploring new ideas, and improving my skills through different projects. I'm always willing to learn and gain new experiences.",
  skills: [["Java", 70], ["JavaScript", 65], ["HTML", 80]],     
  projects: [
    { title: "Ordering System", description: "A console-based ordering program that allows users to select products, calculate the total cost, and view their order summary.", tags: "Java" },
    { title: "Student Analytics System",      description: "A Java-based system that tracks student participation points, manages student records, and displays leaderboards.",      tags: "Java, MySQL, Java Swing" },
    { title: "Calculator",     description: "A simple calculator that performs basic arithmetic operations with an easy-to-use interface.",             tags: "HTML, CSS, JavaScript" },
    { title: "MLBB Tournament Overlay",        description: "A custom tournament scoreboard overlay that displays team names, scores, and match information for livestreams.",        tags: "HTML, CSS, JavaScript, OBS" }
  ]
};


const C = {
  page: "rgb(232, 239, 235)", nav: "#111111", card: "#fcf8f8", cardBorder: "rgba(20,0,60,0.15)",
  text: "#ffffff",            
  ink: "#1a1a2e",             
  muted: "#55527a", heading: "#6a2fe0", accent: "#8a5cff", glow: "#7a3dff",
  heroGradient: "radial-gradient(circle at 50% 25%, #ff3b3b 0%, #c1121f 55%, #5a0008 100%)",
  font: '"Montserrat", "Segoe UI", Arial, sans-serif'
};


function $(id) { return document.getElementById(id); }
function style(el, s) { Object.assign(el.style, s); }


function styleAll() {
  style(document.documentElement, { scrollBehavior: "smooth" });
  style(document.body, { margin: 0, background: C.page, color: C.ink, fontFamily: C.font, lineHeight: 1.6 });

  
  style($("nav"), { position: "sticky", top: 0, zIndex: 10, background: C.nav, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", padding: "0.8rem 5%" });
  style($("logo"), { color: C.accent, fontSize: "1.3rem", letterSpacing: "0.1em" });
  style($("links"), { display: "flex", flexWrap: "wrap", gap: "1.4rem" });
  document.querySelectorAll("#links a").forEach(function (a) {
    style(a, { color: C.text, textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", paddingBottom: "2px", borderBottom: "2px solid transparent" });
    a.addEventListener("mouseenter", function () { a.style.borderBottomColor = C.accent; });
    a.addEventListener("mouseleave", function () { a.style.borderBottomColor = "transparent"; });
  });

  
  style($("home"), { position: "relative", overflow: "hidden", color: "#ffffff", background: C.heroGradient, minHeight: "32rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around", gap: "2rem", padding: "3rem 6%" });
  style($("hero-text"), { position: "relative", zIndex: 1, maxWidth: "30rem" });
  style($("hi"), { margin: 0, fontSize: "clamp(1.6rem, 4vw, 2.2rem)" });
  style(document.querySelector("#hero-text h1"), { margin: "0 0 0.6rem", fontSize: "clamp(2rem, 6vw, 3.2rem)" });
  style($("name"), { color: "#0a0020" });                       // dark name, like the reference
  style($("role-line"), { fontSize: "1.3rem", margin: "0 0 1.2rem" });
  style($("socials"), { display: "flex", gap: "0.8rem", marginBottom: "1.8rem" });
  style($("view-work"), { display: "inline-block", background: "#000", color: "#fff", textDecoration: "none", fontWeight: 700, padding: "0.8rem 1.6rem", borderRadius: "2rem" });

  
  style($("avatar"), {
    position: "relative", zIndex: 1, width: "min(16rem, 70vw)", height: "min(16rem, 70vw)", borderRadius: "50%",
    border: "5px solid #fff", boxShadow: "0 0 45px " + C.glow, background: "linear-gradient(160deg, #1d1d2b, #05050a)",
    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.5rem", fontWeight: 800, overflow: "hidden"
  });

  
  document.querySelectorAll("section").forEach(function (s) {
    style(s, { padding: "4rem 6%", maxWidth: "64rem", margin: "0 auto" });
  });
  document.querySelectorAll("section h2").forEach(function (h) {
    style(h, { fontSize: "2rem", margin: "0 0 1.5rem", color: C.heading });
  });
  
  style($("about-card"), {
    background: "#141418", color: "#ffffff", borderRadius: "1rem", borderLeft: "6px solid #6a2fe0",
    boxShadow: "0 0 40px rgba(122, 61, 255, 0.45)", padding: "2rem"
  });
  style(document.querySelector("#about-card h2"), { textAlign: "center", color: C.accent, textShadow: "0 0 14px rgba(138, 92, 255, 0.7)" });
  style($("about-body"), { display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "2rem" });
  style($("about-photo"), {
    width: "13rem", height: "15rem", borderRadius: "1rem", border: "3px solid #6a2fe0", boxShadow: "0 0 20px rgba(122, 61, 255, 0.5)",
    background: "linear-gradient(160deg, #2a2a3d, #0a0a12)", display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "3.5rem", fontWeight: 800, overflow: "hidden", flexShrink: 0
  });
  style($("about-info"), { flex: 1, minWidth: "16rem" });
  style(document.querySelector("#about-info h3"), { margin: "0 0 0.8rem", fontSize: "1.6rem" });
  style($("about-text"), { margin: 0, color: "#d7d3ee", fontSize: "1.05rem" });
  
  style($("grid"), { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))", gap: "1.2rem" });

  style($("copy"), { background: C.accent, color: "#fff", border: 0, fontFamily: C.font, fontWeight: 700, fontSize: "1rem", padding: "0.8rem 1.6rem", borderRadius: "2rem", cursor: "pointer" });
  style($("message"), { marginLeft: "0.8rem", color: C.muted });
  style($("footer"), { textAlign: "center", padding: "2rem", color: C.muted, fontSize: "0.9rem" });
}


function makeStars() {
  const hero = $("home");
  for (let i = 0; i < 70; i++) {
    const star = document.createElement("div");
    const size = 1 + Math.random() * 2.5;
    style(star, { position: "absolute", left: Math.random() * 100 + "%", top: Math.random() * 100 + "%", width: size + "px", height: size + "px", borderRadius: "50%", background: "#fff" });
    star.animate([{ opacity: 0.15 }, { opacity: 1 }], { duration: 1200 + Math.random() * 2800, iterations: Infinity, direction: "alternate" });
    hero.appendChild(star);
  }
}


function startTyping() {
  const typed = $("typed");
  let roleIndex = 0, letters = 0, deleting = false;

  $("cursor").animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, iterations: Infinity, direction: "alternate" });

  function tick() {
    const word = profile.roles[roleIndex % profile.roles.length];
    letters += deleting ? -1 : 1;
    typed.textContent = word.slice(0, letters);

    let delay = deleting ? 50 : 110;
    if (!deleting && letters === word.length) { deleting = true; delay = 1400; }   // pause when finished typing
    else if (deleting && letters === 0)       { deleting = false; roleIndex++; delay = 400; }
    setTimeout(tick, delay);
  }
  tick();
}


function makeSocials() {
  
  const facebookIcon  = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v6h4v-6h3l.5-4h-3.5V9c0-.6.3-1 1-1z"/></svg>';
  const instagramIcon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
  const linkedinIcon  = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><circle cx="6.5" cy="6.5" r="1.9"/><rect x="5" y="10" width="3" height="9"/><path d="M10.5 10h3v1.5c.6-1 1.7-1.7 3.2-1.7 2.6 0 3.3 1.7 3.3 4V19h-3v-4.6c0-1.1-.3-1.9-1.4-1.9s-2.1.9-2.1 2.1V19h-3z"/></svg>';
  const githubIcon    = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 7 3 12 8 17"/><polyline points="16 7 21 12 16 17"/><line x1="14" y1="5" x2="10" y2="19"/></svg>';

  
  const tiktokIcon = '<span style="font-weight:700">T</span>';   
  const items = [
    ["Facebook",  "https://www.facebook.com/sonof.karidadkid.5", facebookIcon,  "facebook.png"],
    ["TikTok",    "https://www.tiktok.com/@pryzz206?is_from_webapp=1&sender_device=pc", tiktokIcon, "tiktok.png"],
    
    ["Instagram", "https://www.instagram.com/parrisschneider6?stkn=MXBpbnVzZTJ5eGJxbg==", instagramIcon, "instagram.png"]
  ];
  items.forEach(function (item) {
    const a = document.createElement("a");
    a.innerHTML = item[2];   

    
    const logo = new Image();
    logo.alt = item[0];
    style(logo, { width: "1.5rem", height: "1.5rem", objectFit: "contain" });
    logo.onload = function () {
      a.innerHTML = "";
      a.style.background = "#ffffff";   
      a.appendChild(logo);
    };
    logo.src = item[3];
    a.setAttribute("aria-label", item[0]);
    a.href = item[1];
    a.target = "_blank";
    style(a, { width: "2.6rem", height: "2.6rem", borderRadius: "50%", background: "rgba(0,0,0,0.55)", color: "#8fd3ff", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem" });
    $("socials").appendChild(a);
  });
}


function fillContent() {
  $("about-text").textContent = profile.about;

  $("skill-list").innerHTML = "";
  profile.skills.forEach(function (skill) {
    const row = document.createElement("div");
    style(row, { margin: "0 0 1.1rem", maxWidth: "36rem" });
    row.innerHTML = '<div style="display:flex;justify-content:space-between;font-weight:700"><span>' + skill[0] + '</span><span>' + skill[1] + '%</span></div>';
    const track = document.createElement("div");
    style(track, { height: "0.6rem", background: "rgba(20,0,60,0.12)", borderRadius: "1rem", overflow: "hidden", marginTop: "0.3rem" });
    const bar = document.createElement("div");
    style(bar, { height: "100%", width: "0%", background: "linear-gradient(90deg, #8a5cff, #5bc8ff)", borderRadius: "1rem", transition: "width 1.2s ease" });
    track.appendChild(bar); row.appendChild(track);
    $("skill-list").appendChild(row);
    setTimeout(function () { bar.style.width = skill[1] + "%"; }, 300);   // animate the bar filling up
  });

  $("grid").innerHTML = "";
  profile.projects.forEach(function (p) {
    const card = document.createElement("article");
    style(card, { background: C.card, border: "1px solid " + C.cardBorder, borderRadius: "1rem", padding: "1.3rem", transition: "transform 0.2s, box-shadow 0.2s" });
    card.innerHTML = '<h3 style="margin:0 0 0.4rem">' + p.title + '</h3><p style="margin:0 0 0.7rem;color:' + C.muted + '">' + p.description + '</p><span style="color:#4a2fd0;font-size:0.85rem;font-weight:700">' + p.tags + '</span>';
    card.addEventListener("mouseenter", function () { card.style.transform = "translateY(-6px)"; card.style.boxShadow = "0 10px 30px " + C.glow + "66"; });
    card.addEventListener("mouseleave", function () { card.style.transform = "none"; card.style.boxShadow = "none"; });
    $("grid").appendChild(card);
  });
}


styleAll();
makeStars();
makeSocials();
fillContent();
startTyping();


$("avatar").animate([{ transform: "translateY(0)" }, { transform: "translateY(-12px)" }], { duration: 2200, iterations: Infinity, direction: "alternate", easing: "ease-in-out" });


const MY_PHOTO = "me.jpg";

if (MY_PHOTO) {
  const picture = '<img src="' + MY_PHOTO + '" alt="My photo" style="width:100%;height:100%;object-fit:cover">';
  $("avatar").innerHTML = picture;       
  $("about-photo").innerHTML = picture;  
}

$("copy").addEventListener("click", function () {
  navigator.clipboard.writeText(profile.email)
    .then(function () { $("message").textContent = "Copied " + profile.email; })
    .catch(function () { $("message").textContent = "Email: " + profile.email; });
});
$("year").textContent = new Date().getFullYear();


fetch("/api/profile")
  .then(function (r) { return r.json(); })
  .then(function (data) { profile = data; fillContent(); })
  .catch(function () {});