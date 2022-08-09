// getting elements
const launchModalBtn = document.querySelector("#modal-launch");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("#close-modal-btn");
const modalText = document.querySelector("#modal-text");
const modalMessage = document.querySelector("#modal-message");

const openModal = (e)=>{
    e.preventDefault();
    modal.classList.add("modal-show");
    modalText.innerText = modalMessage.value;
}
const closeModal = (e)=>{
    e.preventDefault();
    modal.classList.remove("modal-show");
}
launchModalBtn.addEventListener('click',openModal);
modalCloseBtn.addEventListener('click',closeModal);
modal.addEventListener('click',closeModal);