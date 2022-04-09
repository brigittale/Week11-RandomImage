const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg"];
 
myButton.addEventListener('click', changeImage);
 
function changeImage() {
    let rndInt = randomIntFromInterval(0, images.length-1);
    image.src = '/images/'+ images[rndInt];
    }
    function randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    }