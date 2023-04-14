const works = [
    {
        id: 0,
        title: 'Multi-Post Stories',
        img: '/images/img-work-alone.png',
        altImg: 'Image of my project',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa recusandae voluptates fugit nulla nesciunt architecto omnis impedit, dicta fugiat totam quis ipsum provident pariatur quaerat, possimus dolores cupiditate eligendi amet quam. Inventore suscipit necessitatibus itaque et nihil magni repellendus, eaque minus quos dignissimos obcaecati aut delectus, molestias nam ab?",
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
        img: './images/SnapshootPortfolio.svg',
        altImg: 'Image of my project',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa recusandae voluptates fugit nulla nesciunt architecto omnis impedit, dicta fugiat totam quis ipsum provident pariatur quaerat, possimus dolores cupiditate eligendi amet quam. Inventore suscipit necessitatibus itaque et nihil magni repellendus, eaque minus quos dignissimos obcaecati aut delectus, molestias nam ab?",
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },

    {
        id: 2,
        title: 'Data Dashboard Healthcare',
        img: './images/SnapshootPortfolio.svg',
        altImg: 'Image of my project',
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa recusandae voluptates fugit nulla nesciunt architecto omnis impedit, dicta fugiat totam quis ipsum provident pariatur quaerat, possimus dolores cupiditate eligendi amet quam. Inventore suscipit necessitatibus itaque et nihil magni repellendus, eaque minus quos dignissimos obcaecati aut delectus, molestias nam ab?",
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },

    {
        id: 3,
        title: 'Website Portfolio',
        img: './images/SnapshootPortfolio.svg',
        altImg: 'Image of my project',
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa recusandae voluptates fugit nulla nesciunt architecto omnis impedit, dicta fugiat totam quis ipsum provident pariatur quaerat, possimus dolores cupiditate eligendi amet quam. Inventore suscipit necessitatibus itaque et nihil magni repellendus, eaque minus quos dignissimos obcaecati aut delectus, molestias nam ab?",
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
    {
        id: 4,
        title: 'Profesional Art Printing Data More',
        img: './images/SnapshootPortfolio.svg',
        altImg: 'Image of my project',
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa recusandae voluptates fugit nulla nesciunt architecto omnis impedit, dicta fugiat totam quis ipsum provident pariatur quaerat, possimus dolores cupiditate eligendi amet quam. Inventore suscipit necessitatibus itaque et nihil magni repellendus, eaque minus quos dignissimos obcaecati aut delectus, molestias nam ab?",
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
    {
        id: 5,
        title: 'Data Dashboard Healthcare',
        img: './images/SnapshootPortfolio.svg',
        altImg: 'Image of my project',
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa recusandae voluptates fugit nulla nesciunt architecto omnis impedit, dicta fugiat totam quis ipsum provident pariatur quaerat, possimus dolores cupiditate eligendi amet quam. Inventore suscipit necessitatibus itaque et nihil magni repellendus, eaque minus quos dignissimos obcaecati aut delectus, molestias nam ab?",
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
    {
        id: 6,
        title: 'Website Portfolio',
        img: './images/SnapshootPortfolio.svg',
        altImg: 'Image of my project',
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa recusandae voluptates fugit nulla nesciunt architecto omnis impedit, dicta fugiat totam quis ipsum provident pariatur quaerat, possimus dolores cupiditate eligendi amet quam. Inventore suscipit necessitatibus itaque et nihil magni repellendus, eaque minus quos dignissimos obcaecati aut delectus, molestias nam ab?",
        tech1: 'HTML',
        tech2: 'Bootstrap',
        tech3: 'Ruby',
        projectLink: '#',
        demoLink: '#',
    },
];

const footer = document.querySelector('footer');
const header = document.querySelector('header');
const work = document.querySelector('#works-container');
const mainSection = document.querySelector('.main-section');
const aboutSection = document.querySelector('.about');
const sections = document.querySelector('section')


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
        popupContainer.classList.add("show");
        closePopupBtn.onclick = () => {
            popupContainer.classList.remove('show');
        }
        // header.classList.add('blur');
        // footer.classList.add('blur');
        // mainSection.classList.add('blur');
        // aboutSection.classList.add('blur');
    });
}