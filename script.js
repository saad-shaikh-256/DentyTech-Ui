const images = [
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bg Image 1",
    rotate: -30,
    text: "Technology",
    icon: "ri-settings-3-line",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bg Image 2",
    rotate: -20,
    text: "Expert Dentists",
    icon: "ri-user-3-line",
  },
  {
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bg Image 3",
    rotate: -10,
    text: "Modern Clinic",
    icon: "ri-hospital-line",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bg Image 4",
    rotate: 0,
    text: "Patient Care",
    icon: "ri-heart-3-line",
  },
];

const container = document.createElement("div");
container.className = "w-full h-full flex justify-center items-center gap-8";

images.forEach((img, idx) => {
  const wrapper = document.createElement("div");
  wrapper.className = `h-[280px] w-[200px] sm:h-[350px] sm:w-[260px] md:h-[380px] md:w-[290px] lg:h-[420px] lg:w-[350px] overflow-hidden absolute top-1/2 left-1/2 text-center rounded-3xl`;
  wrapper.style.zIndex = idx + 1;

  wrapper.innerHTML = `
     <img src="${img.src}" alt="${img.alt}" class="object-cover w-full h-full" />
     <div class="icon-Text h-fit w-full absolute bottom-6">
       <div class="h-fit w-full flex justify-center">
         <i class="${img.icon} bg-white h-8 w-8 sm:h-10 sm:w-10 font-medium text-lg sm:text-2xl rounded-full flex justify-center items-center"></i>
         <span class="bg-white text-black font-semibold text-xs sm:text-base rounded-full flex justify-center items-center px-4">${img.text}</span>
       </div>
     </div>
   `;
  container.appendChild(wrapper);
});

document.getElementById("images-root").appendChild(container);

gsap.fromTo(
  container.children,
  {
    xPercent: -50,
    yPercent: -50,
    rotation: 0,
  },
  {
    xPercent: -50,
    yPercent: -50,
    rotation: (i) => images[i].rotate,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2,
  }
);

gsap.set(".gsap-top", { y: "-100%", opacity: 0 });
gsap.to(".gsap-top", {
  y: "0%",
  opacity: 1,
  duration: 1,
  stagger: 0.15,
  ease: "slow(0.7, 0.7, false)",
});

gsap.set(".gsap-bottom", { y: "100%", opacity: 0 });
gsap.to(".gsap-bottom", {
  y: "0%",
  opacity: 1,
  duration: 1,
  stagger: 0.15,
  ease: "slow(0.7, 0.7, false)",
});

gsap.set(".gsap-opacity", { opacity: 0 });
gsap.to(".gsap-opacity", {
  opacity: 1,
  duration: 1.2,
  stagger: 0.15,
  ease: "slow(0.7, 0.7, false)",
});
