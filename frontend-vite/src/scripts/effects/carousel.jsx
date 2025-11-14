export default function addAnimation() {
  const scrollers = document.querySelectorAll(".scroller");

  scrollers.forEach((scroller) => {
    scroller.setAttribute("animated", true);

    const inners = scroller.querySelector(".inner_scroller");
    if (!inners) return;

    const arrayInners = Array.from(inners.children);

    arrayInners.forEach((logos) => {
      const duplicateLogos = logos.cloneNode(true);

      duplicateLogos.setAttribute("aria-hidden", true);

      inners.appendChild(duplicateLogos);
    });
  });
}
