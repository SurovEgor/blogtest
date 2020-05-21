"use strict";

const searchButton = document.querySelector(".search__icon"),
      form = document.querySelector(".form"),
      buttonMenu = document.querySelector(".button-menu"),
      mobile = document.querySelector(".header__right"),
      closeSearchButton = document.getElementById("close__search");

  function openForm() {
      form.classList.remove("open");
      searchButton.style.display = "block";
      closeSearchButton.style.display = "none";
    }

  searchButton.addEventListener("click", () => { 
      form.classList.add("open");
      searchButton.style.display = "none";
      closeSearchButton.style.display = "block";
    });
   
  document.addEventListener('click', (e) => !form.contains(e.target) && !searchButton.contains(e.target) ?  openForm() : false)

  closeSearchButton.addEventListener("click", () => openForm())

  buttonMenu.addEventListener("click", () => {
        buttonMenu.classList.toggle("is-active");
        mobile.classList.toggle("mobile");
    });

