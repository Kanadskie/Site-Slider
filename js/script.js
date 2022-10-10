let examples = [
  {
      url: './images/image_1.png',
      city: 'Rostov LCD admiral',
      area: "81 m2",
      time: '3.5 months',
      cost: 'Upon request'
  },

  {
      url: './images/image_2.png',
      city: 'Sochi Thieves',
      area: "105 m2",
      time: '4 months',
      cost: 'Upon request'
  },

  {
      url: './images/image_3.png',
      city: 'Rostov Patriotic',
      area: "93 m2",
      time: '3 months',
      cost: 'Upon request'
  },

  {
    url: './images/image_4.png',
    city: 'Krasnodar BH',
    area: "266 m2",
    time: '6 months',
    cost: 'Upon request'
  }
];

function initSlider() {
    if (!examples || !examples.length) return;
}

let sliderImages = document.querySelector(".completed-projects-img");
let sliderArrows = document.querySelector(".completed-slider-nav");
let sliderDots = document.querySelector(".slider-dots");
let sliderTitle = document.querySelector(".completed-projects-list");
let dataCity = document.querySelector(".city");
let dataArea = document.querySelector(".area");
let dataTime = document.querySelector(".time");

initImages();
initArrows();
initDots();
initTitles();
initParamentrs();
initAutoplay();

function initImages() {

    examples.forEach((example, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${examples[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });

  }

  function initArrows() {

    sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {

      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;

        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? examples.length - 1 : curNumber - 1;
        } else {

          nextNumber = curNumber === examples.length - 1? 0 : curNumber + 1;
        }

        moveSlider(nextNumber);

      });

    });

  }

function moveSlider(num) {

    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderTitle.querySelector(".active").classList.remove("active");
    sliderTitle.querySelector(".n" + num).classList.add("active");
    dataCity.querySelector(".active").classList.remove("active");
    dataCity.querySelector(".n" + num).classList.add("active");
    dataArea.querySelector(".active").classList.remove("active");
    dataArea.querySelector(".n" + num).classList.add("active");
    dataTime.querySelector(".active").classList.remove("active");
    dataTime.querySelector(".n" + num).classList.add("active");

}

function initDots() {

  examples.forEach((example, index) => {
    let dot = `<div class="slider-dots__item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });

  sliderDots.querySelectorAll(".slider-dots__item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })

}

function initTitles() {

  examples.forEach((example, index) => {
      let titleLi = `<li class="completed-projects-list__item n${index} ${index === 0? "active" : ""}" data-index="${index}">${examples[index].city}</li>`;
      sliderTitle.innerHTML += titleLi;
    });

  sliderTitle.querySelectorAll(".completed-projects-list__item").forEach(titleLi => {

      titleLi.addEventListener("click", function() {
      moveSlider(this.dataset.index);
      })

  })

}

function initParamentrs() {

  examples.forEach((example, index) => {

  let city = `<p class="parament-card-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${examples[index].city}</p>`;
  dataCity.innerHTML += city;

  let area = `<p class="parament-card-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${examples[index].area}</p>`;
  dataArea.innerHTML += area;

  let time = `<p class="parament-card-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${examples[index].time}</p>`;
  dataTime.innerHTML += time;

  });

}

function initAutoplay() {

  setInterval(() => {
    let curNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber = curNumber === examples.length - 1? 0 : curNumber + 1;
    moveSlider(nextNumber);
  }, 8000);

}

document.addEventListener("DOMContentLoaded", function() {

  initSlider();
  
});