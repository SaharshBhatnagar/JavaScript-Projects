// data.js

const slidesData = [
    {
        image: 'Images/Wallpaper-1.jpg',
        title: 'Wallpaper',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error mollitia quis autem vitae, numquam ipsam id.'
    },
    {
        image: 'Images/Wallpaper-2.jpg',
        title: 'Wallpaper-1',
        description: 'Architecto, dolorem animi tempore, iure quis, sunt nesciunt excepturi mollitia in dolore voluptate.'
    },
    {
        image: 'Images/Wallpaper-3.jpg',
        title: 'Wallpaper-2',
        description: 'Hic error mollitia quis autem vitae, numquam ipsam id. Architecto, dolorem animi tempore.'
    },
    {
        image: 'Images/Wallpaper-4.jpg',
        title: 'Wallpaper',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error mollitia quis autem vitae, numquam ipsam id.'
    },
    {
        image: 'Images/Wallpaper-5.jpg',
        title: 'Wallpaper-1',
        description: 'Architecto, dolorem animi tempore, iure quis, sunt nesciunt excepturi mollitia in dolore voluptate.'
    },
    {
        image: 'Images/Wallpaper-6.jpg',
        title: 'Wallpaper-2',
        description: 'Hic error mollitia quis autem vitae, numquam ipsam id. Architecto, dolorem animi tempore.'
    },
    {
        image: 'Images/Wallpaper-7.jpg',
        title: 'Wallpaper',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error mollitia quis autem vitae, numquam ipsam id.'
    }
];

// Get a reference to the container element from the DOM
const slideContainer = document.querySelector('.slide');

// This function runs immediately and builds the slides
function createSlides() {
    slidesData.forEach(slide => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.style.backgroundImage = `url(${slide.image})`;

        const contentHTML = `
            <div class="content">
                <div class="name">${slide.title}</div>
                <div class="des">${slide.description}</div>
                <button>See More</button>
            </div>
        `;

        itemDiv.innerHTML = contentHTML;
        slideContainer.appendChild(itemDiv);
    });
}

// Call the function to build the slides when this script loads
createSlides();