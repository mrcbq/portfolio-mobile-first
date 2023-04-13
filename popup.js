const works = [
    {
        id: 0,
        title: 'Multi-Post Stories',
        img: '/images/img work alone.png',
        altImg: 'Image of my project',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
        tech1: 'CSS',
        tech2: 'HTML',
        tech3: 'Bootstrap',
        tech4: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },

    {
        id: 1,
        title: 'Profesional Art Printing Data More',
        img: "./images/card-type1.svg",
        altImg: 'Image of my project',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },

    {
        id: 2,
        title: 'Data Dashboard Healthcare',
        img: "./images/card-type2.svg",
        altImg: 'Image of my project',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },

    {
        id: 3,
        title: 'Website Portfolio',
        img: './images/card-type3.svg',
        altImg: 'Image of my project',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
    {
        id: 4,
        title: 'Profesional Art Printing Data More',
        img: "./images/card-type1.svg",
        altImg: 'Image of my project',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
    {
        id: 5,
        title: 'Data Dashboard Healthcare',
        img: "./images/card-type2.svg",
        altImg: 'Image of my project',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
    {
        id: 6,
        title: 'Website Portfolio',
        img: "./images/card-type3.svg",
        altImg: 'Image of my project',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
];

const worksContent = `<section class="works" id="works">
<div class="works-title">
    <h2 class="section-works-title crete">My Recent Works</h2>
    <div class="works-title-div"></div>
</div>
<div class="first-work-great">
    <div class="first-card-flex">
        <img class="desktop-display-none" src="./images/Img Placeholder.png" alt="Image of my project" />
        <img class="display-none show-on-desktop first-work-img" src="./images/img work alone.png"
            alt="Image of my project" />
        <div class="text-container">
            <h3 class="card-title crete card-title-desktop">Multi-Post Stories</h3>
            <p class="card-description inter400 card-description-desktop">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a standard
                dummy text.
            </p>

            <ul class="tag inter500">
                <li class="tag-description">CSS</li>
                <li class="tag-description">HTML</li>
                <li class="tag-description">Bootstrap</li>
                <li class="tag-description">Ruby</li>
            </ul>

            <button type="button" class="see-prj inter700">See project</button>
        </div>
    </div>
</div>

<div class="grid-container">

    <div class="card-flex proArt card-type1 card1">
        <div class="text-container card1-hover-noShow-desktop">
            <h3 class="card-title crete font-white desktop-display-none card1-hidde">
                Profesional Art Printing Data
            </h3>
            <h3 class="card-title crete font-white display-none show-on-desktop card1-hidde">Profesional Art
                Printing Data
                More</h3>
            <p class="card-description inter400 font-white card1-hidde">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. Has been the industry's standard.
            </p>
            <ul class="tag card1-hidde">
                <li class="tag-description-2">HTML</li>
                <li class="tag-description-2">Bootstrap</li>
                <li class="tag-description-2">Ruby</li>
            </ul>
        </div>
        <button type="button" class="see-prj inter700 wide desktop-display-none">
            See project
        </button>
    </div>

    <div class="card-flex proArt card-type2 card2">
        <div class="text-container">
            <h3 class="card-title crete font-white desktop-display-none card2-hidde">
                Profesional Art Printing Data
            </h3>
            <h3 class="card-title crete font-white display-none show-on-desktop card2-hidde">Data Dashboard
                Healthcare</h3>
            <p class="card-description inter400 font-white card2-hidde">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. Has been the industry's standard.
            </p>
            <ul class="tag card2-hidde">
                <li class="tag-description-2">HTML</li>
                <li class="tag-description-2">Bootstrap</li>
                <li class="tag-description-2">Ruby</li>
            </ul>
        </div>
        <button type="button" class="see-prj inter700 wide desktop-display-none">
            See project
        </button>
    </div>


    <div class="card-flex proArt card-type3 card3">
        <div class="text-container card3-hidde">
            <h3 class="card-title crete font-white desktop-display-none">
                Profesional Art Printing Data
            </h3>
            <h3 class="card-title crete font-white display-none show-on-desktop">Website Portfolio</h3>
            <p class="card-description inter400 font-white">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. Has been the industry's standard.
            </p>
            <ul class="tag">
                <li class="tag-description-2">HTML</li>
                <li class="tag-description-2">Bootstrap</li>
                <li class="tag-description-2">Ruby</li>
            </ul>
        </div>
        <button type="button" class="see-prj inter700 wide desktop-display-none">
            See project
        </button>
    </div>

    <div class="card-flex proArt card-type1 card4">
        <div class="text-container card4-hidde">
            <h3 class="card-title crete font-white desktop-display-none">
                Profesional Art Printing Data
            </h3>
            <h3 class="card-title crete font-white display-none show-on-desktop">Profesional Art Printing
                Data
                More</h3>
            <p class="card-description inter400 font-white">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. Has been the industry's standard.
            </p>
            <ul class="tag">
                <li class="tag-description-2">HTML</li>
                <li class="tag-description-2">Bootstrap</li>
                <li class="tag-description-2">Ruby</li>
            </ul>
        </div>
        <button type="button" class="see-prj inter700 wide desktop-display-none">
            See project
        </button>
    </div>

    <div class="card-flex proArt card-type2 card5">
        <div class="text-container card5-hidde">
            <h3 class="card-title crete font-white desktop-display-none">
                Profesional Art Printing Data
            </h3>
            <h3 class="card-title crete font-white display-none show-on-desktop">Data Dashboard Healthcare
            </h3>
            <p class="card-description inter400 font-white">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. Has been the industry's standard.
            </p>
            <ul class="tag">
                <li class="tag-description-2">HTML</li>
                <li class="tag-description-2">Bootstrap</li>
                <li class="tag-description-2">Ruby</li>
            </ul>
        </div>
        <button type="button" class="see-prj inter700 wide desktop-display-none">
            See project
        </button>
    </div>


    <div class="card-flex proArt card-type3 card6">
        <div class="text-container card6-hidde">
            <h3 class="card-title crete font-white desktop-display-none">
                Profesional Art Printing Data
            </h3>
            <h3 class="card-title crete font-white display-none show-on-desktop">Website Portfolio</h3>
            <p class="card-description inter400 font-white">
                A daily selection of privately personalized reads; no accounts or
                sign-ups required. Has been the industry's standard.
            </p>
            <ul class="tag">
                <li class="tag-description-2">HTML</li>
                <li class="tag-description-2">Bootstrap</li>
                <li class="tag-description-2">Ruby</li>
            </ul>
        </div>
        <button type="button" class="see-prj inter700 wide desktop-display-none">
            See project
        </button>
    </div>

</div>
</section>`;

const popupWindow = `    <div id="popup-container">
<div id="popup-head">
    <div id="popup-title-container">
        <h2 id="popup-title" class="crete400"></h2>
        <img id="popup-close-btn" src="./icons/closeIcon.svg" alt="close button">
    </div>
    <div id="popup-techs-container" class="poppins600">
        <div id="tech1"></div>
        <div id="tech2"></div>
        <div id="tech3"></div>
    </div>
</div>
<div id="popup-content">
    <div id="popup-image-wrapper">
        <img id="popup-image" src="" alt="portfolio image">
    </div>
    <div id="popup-text-btns-wrapper">
        <p id="popup-description" class="inter400"></p>
        <div id="popup-btns">
            <a href="" id="popup-live-btn" class="see-prj inter700">
                See live
                <img src="./icons/liveIcon.svg" alt="live icon">
            </a>
            <a href="" id="popup-prj-btn" class="see-prj inter700">
                See Source
                <img src="./icons/ghIcon.svg" alt="github icon">
            </a>
        </div>
    </div>
</div>
</div>`

const footer = document.querySelector('footer')
const header = document.querySelector('header')

window.addEventListener('load', () => {
    const worksContainer = document.querySelector('#worksContainer');
    worksContainer.innerHTML += worksContent;

    const popupModal = document.querySelector('#popup-window');
    popupModal.innerHTML += popupWindow;

    const seeProject = document.querySelectorAll('.see-prj.inter700')
    for (let i = 0; i <= 6; i++) {
        seeProject[i].addEventListener('click', function () {
            showPopup(i)
        })
    }

    const closePopupBtn = document.querySelector('#popup-close-btn')

    const closePopup = () => {
        popupModal.classList.remove('show')

        const sections = document.querySelectorAll('section');
        sections.forEach((opt) => {
            opt.classList.remove('blur')
        });
        header.classList.remove('blur')
        footer.classList.remove('blur')
    }
    closePopupBtn.addEventListener('click', closePopup)


    const showPopup = (idx) => {
        const popupTitle = document.querySelector('#popup-title')
        popupTitle.innerHTML = works[idx].title

        const popupImage = document.querySelector('#popup-image')
        popupImage.setAttribute('src', works[idx].img)

        const popupDescription = document.querySelector('#popup-description')
        popupDescription.innerHTML = works[idx].description

        const popupTech1 = document.querySelector('#tech1')
        popupTech1.innerHTML = works[idx].tech1

        const popupTech2 = document.querySelector('#tech2')
        popupTech2.innerHTML = works[idx].tech2

        const popupTech3 = document.querySelector('#tech3')
        popupTech3.innerHTML = works[idx].tech3

        const popupLivebtn = document.querySelector('#popup-live-btn')
        popupLivebtn.setAttribute('href', works[idx].demoLink)

        const popupPrjbtn = document.querySelector('#popup-prj-btn')
        popupPrjbtn.setAttribute('href', works[idx].projectLink)

        popupModal.classList.add('show')
        const sections = document.querySelectorAll('section');
        sections.forEach((opt) => {
            opt.classList.add('blur');
        });
        header.classList.add('blur')
        footer.classList.add('blur')
    };

});