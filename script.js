'use strict';

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let buttonCloseModal = document.querySelector(".close-modal");
let buttonShowModal = document.querySelectorAll(".show-modal");
//Function that remove class
const openModal = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//function that hide class
const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < buttonShowModal.length; i++) { 
//add eventlistener to buttons, axecute class remove 
  buttonShowModal[i].addEventListener("click", openModal);  
//add eventlistener to close button, axecute class add 
  buttonCloseModal.addEventListener("click", closeModal);
//add eventlistener to overlay, axecute class add 
  overlay.addEventListener("click", closeModal); 

// add eventlistener to ESC button on the keyboard  
  document.addEventListener("keydown", function(e){
    console.log(e);
    if(e.key === "Escape" && !modal.classList.contains("hidden")) {      
      closeModal();
      }
  });
};

