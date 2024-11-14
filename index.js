function breakTheText() {
   var h1 = document.querySelector("h1");
   var h1Text = h1.textContent;

   var splittedText = h1Text.split("").map(char => {
      // If the character is a space, return a span with a non-breaking space
      return char === " " ? "&nbsp;" : char; // or return `<span>&nbsp;</span>` if you prefer
   });

   var clutter = "";

   splittedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
   });

   h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 span", {
   y: 200,
   duration: 0.6,
   delay: 0.5,
   stagger: 0.15,
});
gsap.to("h1 span", {
   y: 0,
   duration: 0.6,
   delay: 0.5,
   stagger: 0.15,
});

setTimeout(() => {
   window.location.href = "HTML/index.html";
}, 4000);
