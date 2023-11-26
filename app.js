const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1729000,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "lightgray",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 1939000,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "skyblue",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Airmax",
    price: 2989000,
    colors: [
      {
        code: "black",
        img: "./img/airmax.png",
      },
      {
        code: "lightgray",
        img: "./img/airmax2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Dunk Low",
    price: 2999000,
    colors: [
      {
        code: "black",
        img: "./img/dunklow.png",
      },
      {
        code: "lightgray",
        img: "./img/dunklow2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Air Monarch",
    price: 1999000,
    colors: [
      {
        code: "lightgray",
        img: "./img/monarch2.png",
      },
      {
        code: "black",
        img: "./img/monarch.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "IDR " + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
