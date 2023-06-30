const works = [
  {
    id: 0,
    title: 'Coinmarket',
    img: '/images/Coinmarket.png',
    altImg: 'Coinmarket',
    description:
            'The Coinmarket is a SPA fully responsive, that displays information about the top 100 cryptocurrencies in the world. The application shows the top 100 and allows users to select a cryptocurrency to view more information about it, such as Market Capitalization, price, price change in the last week, rank, and website.',
    tech1: 'React.js',
    tech2: 'Redux.js',
    tech3: 'Jest.js',
    tech4: 'HTML/CSS',
    projectLink: 'https://github.com/mrcbq/coinmarket',
    demoLink: 'https://mrcbq.github.io/coinmarket/#/',
  },

  {
    id: 1,
    title: 'Rick And Morty App',
    img: './images/rickandmorty.png',
    altImg: 'Rick And Morty',
    description:
            'Web application created around Rick and Morty API, uses ES6 features and consume 2 API, one for get data (R&M API) another for post data (MV Involvement API). Permits add likes and comments taht are saved in the involvement API.',
    tech1: 'Javascript Vanilla',
    tech2: 'Jest.js',
    tech3: 'HTML/CSS',
    projectLink: 'https://github.com/mrcbq/capstone-rick-and-morty-api',
    demoLink: 'https://mrcbq.github.io/capstone-rick-and-morty-api/',
  },

  {
    id: 2,
    title: 'Space Travelers',
    img: './images/space-travelers.png',
    altImg: 'Space travelers',
    description:
            'Web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    tech1: 'React.js',
    tech2: 'Redux-Toolkit',
    tech3: 'Jest.js',
    projectLink: 'https://github.com/mrcbq/space-travelers-capstone',
    demoLink: 'https://mrcbq.github.io/space-travelers-capstone/',
  },

  {
    id: 3,
    title: 'DS Team Page',
    img: './images/dsteam.png',
    altImg: 'dsteam page',
    description:
            'Landing page fully responsive for InfoSec company, Capstone for module 1 at Microverse, Built with JS Vanilla, HTML and CSS.',
    tech1: 'Javascript Vanilla',
    tech2: 'HTML5',
    tech3: 'CSS3',
    projectLink: 'https://github.com/mrcbq/Capstone-module-1-dsteam-page',
    demoLink: 'https://mrcbq.github.io/Capstone-module-1-dsteam-page/#',
  },
  {
    id: 4,
    title: 'Math magicians',
    img: './images/Mathmagicians.png',
    altImg: 'Image of my project',
    description:
            'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. By building this application, you will learn how to use React.',
    tech1: 'React.js',
    tech2: 'Jest.js',
    tech3: 'Webpack',
    projectLink: 'https://github.com/mrcbq/math-magicians',
    demoLink: 'https://mrcbq.github.io/math-magicians/',
  },
  {
    id: 5,
    title: 'Awesome Books',
    img: './images/awesome-books.png',
    altImg: 'awesome books',
    description:
            'Library web app with JS vanilla, save you books in the Local Storage, permits search and remove books from your list of awesome books. Built with webpack using luxon library and ES6 features.',
    tech1: 'Javascript Vanilla',
    tech2: 'Webpack/Luxon.js',
    tech3: 'HTML/CSS',
    projectLink: 'https://github.com/mrcbq/awesome-books-es6',
    demoLink: 'https://mrcbq.github.io/awesome-books-es6/',
  },
  {
    id: 6,
    title: 'Website Portfolio',
    img: './images/portfolio.png',
    altImg: 'Portfolio',
    description:
            'Portfolio web page, It is a showcase of my main projects with my contact info. Built with JS Vanilla, HTML and CSS.',
    tech1: 'Javascript Vanilla',
    tech2: 'HTML5',
    tech3: 'CSS',
    projectLink: 'https://github.com/mrcbq/portfolio-mobile-first',
    demoLink: 'https://mrcbq.github.io/portfolio-mobile-first/',
  },
];

const work = document.querySelector('#works-container');
// const footer = document.querySelector('footer');
// const header = document.querySelector('header');
// const mainSection = document.querySelector('.main-section');
// const aboutSection = document.querySelector('.about');
// const sections = document.querySelector('section');

work.innerHTML += `
<div class="first-work-great">
    <div class="first-card-flex">
        <img class="first-work-img" src=${works[0].img} alt="Image of my project"/>
        <div class="text-container">
            <h3 class="card-title crete card-title-desktop">${works[0].title}</h3>
            <p class="card-description inter400 card-description-desktop">${works[0].description}</p>
            <ul class="tag inter500">
                <li class="tag-description">${works[0].tech1}</li>
                <li class="tag-description">${works[0].tech2}</li>
                <li class="tag-description">${works[0].tech3}</li>
                <li class="tag-description">${works[0].tech4}</li>
            </ul>
            <button type="button" class="see-prj inter700">See project</button>
        </div>
    </div>
</div>
`;
const gridContainer = document.querySelector('#div-container');
for (let i = 1; i < works.length; i += 1) {
  gridContainer.innerHTML += `
    <div class="card-flex proArt card-type${i} card${i}">
        <div class="text-container card${i}-hover-noShow-desktop">
            <h3 class="card-title crete font-white">${works[i].title}</h3>
            <p class="card-description inter400 font-white">${works[i].description}</p>
            <ul class="tag card1-hidde">
                <li class="tag-description-2">${works[i].tech1}</li>
                <li class="tag-description-2">${works[i].tech2}</li>
                <li class="tag-description-2">${works[i].tech3}</li>
            </ul>
        </div>
        <button type="button" class="see-prj inter700 wide desktop-display-none">
            See project
        </button>
    </div>
    `;
}
const seeProject = document.querySelectorAll('.see-prj.inter700');
const popupContainer = document.querySelector('#popup-container');
for (let i = 0; i <= 6; i += 1) {
  seeProject[i].addEventListener('click', () => {
    popupContainer.innerHTML = `
        <div id="popup-head">
            <div id="popup-title-container">
                <h2 id="popup-title" class="crete400">${works[i].title}</h2>
                <img id="popup-close-btn" class="popup-close-btn" src="./icons/closeIcon.svg" alt="close button">
            </div>
            <div id="popup-techs-container" class="poppins600">
                <div id='tech'>${works[i].tech1}</div>
                <div id='tech'>${works[i].tech2}</div>
                <div id='tech'>${works[i].tech3}</div>
            </div>
        </div>
        <div id="popup-content">
            <div id="popup-image-wrapper">
                <img id="popup-image" src=${works[i].img} alt=${works[i].altImg}>
            </div>
            <div id="popup-text-btns-wrapper">
                <p id="popup-description" class="inter400">${works[i].description}</p>
                <div id="popup-btns">
                    <a href=${works[i].demoLink} id="popup-live-btn" class="see-prj inter700">See live
                    <img src="./icons/liveIcon.svg" alt="live icon">
                    </a>
                    <a href=${works[i].projectLink} id="popup-prj-btn" class="see-prj inter700">
                        See Source
                        <img src="./icons/ghIcon.svg" alt="github icon">
                    </a>
                </div>
            </div>
        </div>
        `;

    const closePopupBtn = document.querySelector('.popup-close-btn');
    popupContainer.classList.add('show');
    closePopupBtn.onclick = () => {
      popupContainer.classList.remove('show');
    };
    // header.classList.add('blur');
    // footer.classList.add('blur');
    // mainSection.classList.add('blur');
    // aboutSection.classList.add('blur');
  });
}