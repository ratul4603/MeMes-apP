"use strict";
const card = document.querySelector(".card");
const getMeme = () => {
    fetch('https://meme-api.com/gimme')
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        card.innerHTML = `
            <img src="${data.url}" alt="">
            <p>${data.title}</p>
            <button id="btn">Get Meme</button>
        `;
        const button = document.getElementById("btn");
        button.addEventListener("click", getMeme);
    });
};
window.addEventListener("load", getMeme);
