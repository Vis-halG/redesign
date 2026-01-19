const testimonials = [
  {
    name: "Ankit Joshi",
    role: "co-Founder, BloomDesk LLP",
    text: "SaffireTech is a genuine and highly professional company. They provided us quality work and On-Time Delivery even on short notice.The team is friendly and flexible which is what you want in developing your website.I highly recommended it for people looking for top - notch professional work!",
    emoji1: "",
    emoji2: "💬"
  },




  {
    name: "Zia Khan",
    role: "Business Manager, Nahar Group",
    text: "SaffireTech has a highly professional team, the best thing is that they are always ready to help & find the solution for any challenges. It has been a great experience to work with them for our project. I wish all good luck and best of the future to them.",
    emoji1: "",
    emoji2: "💬"
  },
  {
    name: "Rob Graham",
    role: "President, Virtual-CME",
    text: "SaffireTech created a custom layout with LearnDash. What sets them apart is the time they spend talking through projects and obstacles with their customers. Many 3rd party developers simply want to work through a project with email and chat. SaffireTech does a great job listening and ensuring all the detail of the project is covered.",
    emoji1: "",
    emoji2: "✨"
  },
  {
    name: "Dakshina Sawant",
    role: "Founder, ITZ-Showtime",
    text: "Woah I took almost a year to find out the right company to design my website, it was very complicated to develop as it had to be totally customized. I came across many agencies but the confidence and commitment Ankit & his team showed up was amazing and they did give their 100 percent and completed the project on deadline and giving us a great service as well. Totally recommended!",
    emoji1: "",
    emoji2: "💡"
  },
  {
    name: "Resha Shroff",
    role: "CEO, Lynx",
    text: "SaffireTech has a very energetic and passionate team to work with. They stayed on schedule and delivered the promised finished product. I had a wonderful experience working with them and would gladly recommend them to others who need expert custom coding solutions done right and on time.",
    emoji1: "🎯",
    emoji2: ""
  },
  {
    name: "Kelly Utterback",
    role: "Program Director, Roddy Carter",
    text:"SaffireTech did an excellent job designing and implementing a new shopping cart and a few other items for us.",
    emoji1: "",
    emoji2: "🔥"
  }
];

const avatars = document.querySelectorAll(".profile-avatar");
const testimonialName = document.querySelector(".testimonial-name");
const testimonialRole = document.querySelector(".testimonial-role");
const testimonialText = document.querySelector(".testimonial-text");
const emojiIcons = document.querySelector(".emoji-icons");
const dots = document.querySelectorAll(".nav-dot");

let currentIndex = 1;
let autoPlayInterval;

function updateTestimonial(index) {
  const testimonial = testimonials[index];

  testimonialName.style.opacity = "0";
  testimonialRole.style.opacity = "0";
  testimonialText.style.opacity = "0";
  emojiIcons.style.opacity = "0";

  setTimeout(() => {
    testimonialName.textContent = testimonial.name;
    testimonialRole.textContent = testimonial.role;
    testimonialText.textContent = testimonial.text;
    emojiIcons.innerHTML = `
      <span>${testimonial.emoji1}</span>
      <span>${testimonial.emoji2}</span>
    `;

    testimonialName.style.opacity = "1";
    testimonialRole.style.opacity = "1";
    testimonialText.style.opacity = "1";
    emojiIcons.style.opacity = "1";
  }, 300);

  avatars.forEach(a => {
    a.classList.remove("active");
    void a.offsetWidth;
  });

  avatars[index].classList.add("active");

  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");

  currentIndex = index;
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(nextIndex);
  }, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

function restartAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

avatars.forEach((avatar, index) => {
  avatar.addEventListener("click", () => {
    updateTestimonial(index);
    restartAutoPlay();
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateTestimonial(index);
    restartAutoPlay();
  });
});

testimonialName.style.transition = "opacity 0.3s ease";
testimonialRole.style.transition = "opacity 0.3s ease";
testimonialText.style.transition = "opacity 0.3s ease";
emojiIcons.style.transition = "opacity 0.3s ease";

startAutoPlay();

const testimonialContainer = document.querySelector(".testimonial-container");
testimonialContainer.addEventListener("mouseenter", stopAutoPlay);
testimonialContainer.addEventListener("mouseleave", startAutoPlay);
