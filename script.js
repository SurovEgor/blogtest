"use strict";

const searchButton = document.getElementById("search"),
      form = document.getElementById("form"),
      closeSearchButton = document.getElementById("close__search"),
      buttonMenu = document.getElementById("button-menu"),
      navCover = document.getElementById("nav-cover");

    searchButton.addEventListener("click", () => { 
      form.classList.add("open");
      searchButton.style.display = "none";
      closeSearchButton.style.display = "block";
    });
   
    document.addEventListener('click', (e) => {
      if (!form.contains(e.target) && !searchButton.contains(e.target)) {
        form.classList.remove("open");
         searchButton.style.display = "block";
         closeSearchButton.style.display = "none";
      }
    });
    
    closeSearchButton.addEventListener("click", () => {
      form.classList.remove("open");
        searchButton.style.display = "block";
        closeSearchButton.style.display = "none";
    });

    buttonMenu.addEventListener("click", () => {
        buttonMenu.classList.toggle("is-active");
        navCover.classList.toggle("opened");
    });