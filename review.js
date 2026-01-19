
const testimonials = [
 {
  name: "Ankit Joshi",
  role: "co-Founder, BloomDesk LLP",
  text: "SaffireTech is a reliable and highly professional company. They delivered excellent quality work and met our deadlines even with tight timelines. The team is supportive, friendly, and flexible, which is exactly what you need for website development. I strongly recommend them to anyone looking for premium professional services.",
  emoji1: "",
  emoji2: "💬"
},
{
  name: "Zia Khan",
  role: "Business Manager, Nahar Group",
  text: "SaffireTech has a very professional and skilled team. What I appreciate the most is their willingness to help and find solutions for any challenges. They delivered excellent quality work and met our deadlines. Working with them on our project was a great experience.  They delivered I wish them continued success in the future.",
  emoji1: "",
  emoji2: "💬"
},
{
  name: "Rob Graham",
  role: "President, Virtual-CME",
  text: "SaffireTech developed a custom LearnDash layout for us. What truly makes them stand out is the time they invest in understanding projects and challenges with their clients.  They delivered excellent quality work. Instead of just relying on emails and chats, they listen carefully and make sure every project detail is handled properly.",
  emoji1: "",
  emoji2: "✨"
},
{
  name: "Dakshina Sawant",
  role: "Founder, ITZ-Showtime",
  text: "It took me almost a year to find the right company for my website because the project required complete customization. After exploring many agencies, the confidence and dedication shown by Ankit and his team impressed me the most. They gave their best, met the deadline, and provided excellent service. Highly recommended!",
  emoji1: "",
  emoji2: "💡"
},
{
  name: "Resha Shroff",
  role: "CEO, Lynx",
  text: "SaffireTech has an energetic and passionate team. They stayed on track with the schedule and delivered exactly what was promised.  They delivered excellent quality work  My experience working with them was very positive, and I would happily recommend them to anyone who needs expert custom development done on time.",
  emoji1: "🎯",
  emoji2: ""
},
{
  name: "Kelly Utterback",
  role: "Program Director, Roddy Carter",
  text: "SaffireTech did a great job designing and setting up a new shopping cart along with a few additional features for our website. We are very satisfied with their work.  They delivered excellent quality work and met our deadlines. The team is very professional and easy to work with. I highly recommend them for any web development needs.",
  emoji1: "",
  emoji2: "🔥"
}
];

const els = {
  avatars: document.querySelectorAll(".profile-avatar"),
  name: document.querySelector(".testimonial-name"),
  role: document.querySelector(".testimonial-role"),
  text: document.querySelector(".testimonial-text"),
  emojis: document.querySelector(".emoji-icons"),
  dots: document.querySelectorAll(".nav-dot"),
  container: document.querySelector(".testimonial-container")
};

let idx = 0;
let timer = null;
let transitioning = false;
let autoPlayEnabled = true;

function update(i, animate = true) {
  if (transitioning || !testimonials[i]) return;
  
  const t = testimonials[i];
  
  if (animate) {
    transitioning = true;
    els.name.style.opacity = els.role.style.opacity = 
    els.text.style.opacity = els.emojis.style.opacity = "0";
    
    setTimeout(() => {
      setContent(t, i);
      els.name.style.opacity = els.role.style.opacity = 
      els.text.style.opacity = els.emojis.style.opacity = "1";
      transitioning = false;
    }, 150); 
  } else {
    setContent(t, i);
  }
}

function setContent(t, i) {
  els.name.textContent = t.name;
  els.role.textContent = t.role;
  els.text.textContent = t.text;
  els.emojis.innerHTML = (t.emoji1 ? `<span>${t.emoji1}</span>` : '') + 
                         (t.emoji2 ? `<span>${t.emoji2}</span>` : '');
  
  els.avatars[idx]?.classList.remove("active");
  els.dots[idx]?.classList.remove("active");
  els.avatars[i]?.classList.add("active");
  els.dots[i]?.classList.add("active");
  
  idx = i;
}

function start() {
  if (!autoPlayEnabled) return;
  timer = setInterval(() => update((idx + 1) % testimonials.length), 5000);
}

function restart() {
  clearInterval(timer);
  start();
}

function handleClick(e) {
  const avatar = e.target.closest(".profile-avatar");
  const dot = e.target.closest(".nav-dot");
  
  if (avatar) {
    const i = Array.from(els.avatars).indexOf(avatar);
    if (i !== -1 && i !== idx) {
      update(i);
      autoPlayEnabled = false;
      clearInterval(timer);
    }
  } else if (dot) {
    const i = Array.from(els.dots).indexOf(dot);
    if (i !== -1 && i !== idx) {
      update(i);
      autoPlayEnabled = false; 
      clearInterval(timer);
    }
  }
}

els.name.style.transition = els.role.style.transition = 
els.text.style.transition = els.emojis.style.transition = "opacity 150ms ease";

document.addEventListener("click", handleClick);

els.container?.addEventListener("mouseenter", () => clearInterval(timer));
els.container?.addEventListener("mouseleave", start);

document.addEventListener("keydown", (e) => {
  if (e.target.closest(".testimonial-container")) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + testimonials.length) % testimonials.length;
      update(prev);
      autoPlayEnabled = false; 
      clearInterval(timer);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      update((idx + 1) % testimonials.length);
      autoPlayEnabled = false;
      clearInterval(timer);
    }
  }
});

update(0, false);
start();

window.addEventListener("beforeunload", () => clearInterval(timer));