"use strict"
const SKY = document.querySelector('[data-sky');

//QUANTITY STARS PER 100 X 100 px
const QUANTITY = SKY.dataset.sky ? +SKY.dataset.sky : 100;

if (SKY) {
   setStars();
   window.addEventListener('resize', setStars);
   function setStars() {
      const skySize = {
         width: SKY.offsetWidth,
         height: SKY.offsetHeight,
      }
      const TOTAL_STARS = getStarsQuantity(skySize);
      let starTemplate = ``;

      for (let star = 0; star < TOTAL_STARS; star++) {
         const starPos = getStarsPos(skySize);
         const starStyle = `
         position: absolute;
         top: ${starPos.top}px;
         left: ${starPos.left}px;
         `;
         const starClass = `star star--type-${Math.floor(Math.random() * 3)}`;
         starTemplate += `<div style="${starStyle}" class="${starClass}"></div>`
      }
      SKY.innerHTML = starTemplate;
   }
   function getStarsQuantity(skySize) {
      const qV = skySize.width / 100 * (QUANTITY / 2);
      const qH = skySize.height / 100 * (QUANTITY / 2);
      return qV + qH;
   }
   function getStarsPos(skySize) {
      return {
         top: Math.floor(Math.random() * skySize.height),
         left: Math.floor(Math.random() * skySize.width)
      }
   }
}