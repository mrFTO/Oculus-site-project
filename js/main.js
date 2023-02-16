"use strict";

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");
tabItem.forEach(function (element) {
  element.addEventListener("click", open); // отслеживание нажатия, запуск функции open
});

function open(evt) {
  const tabTarget = evt.currentTarget; //на кого нажали
  const button = tabTarget.dataset.button; // понять кому добавлять класс

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active"); // убрали класс
  });

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active"); // убрали класс
  });

  tabTarget.classList.add("tabs__btn-item--active"); // добавили класс на кого нажали

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active"); //вернули класс кнопке нажатой
}
