const works = [
  {
    id: 0,
    name: 'Multi-Post Stories',
    img: './images/img work alone.png',
    altImg: 'Image of my project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    projectLink: '*',
    demoLink: '*',
  },

  {
    id: 1,
    name: 'Profesional Art Printing Data',
    img: './images/img work alone.png',
    altImg: 'Image of my project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    projectLink: '*',
    demoLink: '*',
  },

  {
    id: 2,
    name: 'Profesional Art Printing Data More',
    img: './images/img work alone.png',
    altImg: 'Image of my project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    projectLink: '*',
    demoLink: '*',
  },

  {
    id: 3,
    name: 'Data Dashboard Healthcare',
    img: './images/img work alone.png',
    altImg: 'Image of my project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    projectLink: '*',
    demoLink: '*',
  },
  {
    id: 4,
    name: 'Data Dashboard Healthcare',
    img: './images/img work alone.png',
    altImg: 'Image of my project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    projectLink: '*',
    demoLink: '*',
  },
  {
    id: 5,
    name: 'Data Dashboard Healthcare',
    img: './images/img work alone.png',
    altImg: 'Image of my project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    projectLink: '*',
    demoLink: '*',
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

window.addEventListener('load', () => {
  const worksContainer = document.querySelector('#worksContainer');
  worksContainer.innerHTML += worksContent;
});
