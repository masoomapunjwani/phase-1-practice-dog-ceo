//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breeds = [];
document.addEventListener('DOMContentLoaded', () =>{
    //challenge 1
    fetch(imgUrl)//fetch images
    .then((response) => response.json())
    .then((result) => {
        imageArray = result.message
        imageArray.forEach((item) => addImage(element))
    })
    //chalenge 2
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((result) => {
        breadObject = result.message
        for (let item in breadObject){//iterate over the object with breed names
            addbreed(item) //add dog breed to the list
            breeds.push(item)

        }
    })
    //chalenge 3
    //change color of the lists when clicked
    .then(() => {
        document.querySelector('li');//grab the lists
        for (let breed of li){//iterate over all the list element
            breed.addEventListener('click', (event) => {
                event.target.style.color = 'green';
            })
        }
    })
    
})

//add image function
function addImage(imageSource){
    const img = document.createElement('img');
    img.src = imageSource;
    const imageDiv = document.querySelector('dog-image-container');
    imageDiv.appendChild(img);
}

function addbreed(breed){
    const li = document.createElement('li');
    li.textContent = breed;
    const ul = document.querySelector('#dog-breeds');
    ul.appendChild(li);
}