const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
const images = ["usa.jpg", "tokyo.jpg", "dubai.jpg"];
const headings = ["New York, USA", "Tokyo, Japan", "Dubai,UAE"];
const descriptions = [
    "The city That never sleeps",
    "The cith of light",
    "Home to the tallest skyscraper"
];

//slider id
let id = 0;
function slide(id) {
    // set the backgroung img
    slider.style.backgroundImage = `url(assets/img/${images[id]})`;
    //add img fade animation
    slider.classList.add('image-fade');
    /*remove animation after its done,
    so it can be used again*/
    setTimeout(() => {
        slider.classList.remove('image-fade');

    }, 550)
    // change heading
    heading.innerText = headings[id];
    //change description
    description.innerText = descriptions[id];

}
//add click event to the left arrow

arrLeft.addEventListener('click', () => {
    // decrement img id
    id--;
    /*check if id  is smaller than  the number of available slides*/
    if (id < 0) {
        //change the last image
        id = images.length - 1;
    }
    //run the slide  function
    slide(id);
});
//add click event to the left arrow
arrRight.addEventListener('click', () => {
    //increment img id
    id++;
    /*check if id  is greater than  the number of available slides*/
    if (id > images.length - 1) {
        id = 0;
    }
    //run the slide  function
    slide(id);
})