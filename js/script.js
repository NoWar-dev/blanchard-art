// ДРОПДАУН

document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
});

const btns = document.querySelectorAll(".header__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach((item) => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach((el) => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

// плавный скролл.\\

(() => {
	const MOBILE_WIDTH = 1024;

	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}

	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}

	  const href = link.getAttribute('href').substring(1);
	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;

	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	}

	document.querySelectorAll('.js-scroll-link').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();

	      scrollToContent(this, true);
	  });
	});
})();



// СТРЕЛКА ДРОПДАУН------------------------------------------------------

var arrow = document.querySelectorAll(".header__arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].onclick = function(){
    this.classList.toggle("header__arrow--active");
  };
}

// СВАЙПЕР-HERO--------------------------------

const swiper = new Swiper(".js-hero-swiper", {
  allowTouchMove: false,
  loop: true,
  effect: "fade",
  speed: 10000,
  autoplay: {
    delay: 10000,
  },
});

// openform HEADER------------------------------------------------------------------

let openFormButton = document.querySelector(".header__btn-open");
let ret = document.querySelector(".header__form");
openFormButton.addEventListener("click", () => {
  ret.classList.toggle("header__form--activ");
});

let cancelButton = document.querySelector(".header__btn-cancel");
cancelButton.addEventListener("click", () => {
  ret.classList.remove("header__form--activ");
});

// BURGER--------------------------------------------------

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");
let menuenter = menu.querySelector(".header__enter-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--activ");


  menu.classList.toggle("header__nav--activ");

  document.body.classList.toggle("stop-scroll");

});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--activ");

    menu.classList.remove("header__nav--activ");

    document.body.classList.remove("stop-scroll");
  });
});

// SELECT------------------------------------------------

const element = document.querySelector(".js-choice");

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});

// SWIPER GALLERY--------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-back",
    },

    breakpoints: {
      501: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      971: {
        slidesPerView:2,
        spaceBetween:30
      },

      1281: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
    },
  });
});

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0],
  });
})();

// Табы
const params = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active",
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(
      `.${params.content}[data-target="${path}"]`
    );
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach((el) => {
      el.classList.remove(params.active);
    });

    currentContent.classList.add(params.active);

    tabBtns.forEach((el) => {
      el.classList.remove(params.active);
    });

    this.classList.add(params.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(params);

// cлайдер соытия-----------
const myswiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,

  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".events-next",
    prevEl: ".events-back",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clckable: true,
  },
});

const shwiper = new Swiper(".projects__swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {

    611: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    971: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1281: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: ".projects-next",
    prevEl: ".projects-back",
  },
});

(() => {
  tippy(".js-tooltip-btn", {
    arrow: true,
    theme: "light",
  });
})();

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("mymap1", {
    center: [55.758468, 37.601088],
    zoom: 12,
    controls: [],
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.8, 37.8], // координаты точки
    },
  });
  myMap.behaviors.disable('scrollZoom');
  var myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",

      iconImageHref: "img/pointmp.svg",

      iconImageSize: [20, 20],
    }
  );
  myMap.controls.add("geolocationControl", {
    float: "none",
    position: {
      right: 30,
      top: 420,
    },
  });

  myMap.controls.add("zoomControl", {
    float: "none",
    position: {
      right: 30,
      top: 350,
    },
  });

  // Размещение геообъекта на карте.

  myMap.geoObjects.add(myPlacemark);
}

var selector = document.querySelector("input[type='tel']");
var im = new window. Inputmask("+7 (999) 999-99-99");
im.mask(selector);

const validation = new JustValidate("#form");

validation
.addField("#name", [
  {
    rule:'required',
    // rule: "minLength",
      value: 2,
    errorMessage: "Недопустимый формат",
  },
  {
    rule: "maxLength",
    value: 30,
  },
])
.addField('#tel', [

  {
    required:true,
    rule:'required',
    errorMessage: 'Вы не ввели телефон',
  },
  {
    validator:(value)=> {

      const phone = selector.inputmask.unmaskedvalue()
      return !!Number (phone) && phone.length === 10;
    },
    colorWrong:'#D11616',
    errorMessage:'Телефон не корректный!',
  },

]);



