const openMenu = document.getElementById("hamburgerMenu");
const closeMenu = document.getElementById("closeMenu");

const mobileMenu = document.getElementById("mobileMenu");

function menu() {
  mobileMenu.classList.remove("-top-32");
  mobileMenu.classList.add("top-0", "transition-all", "duration-1000");
}

function close() {
  mobileMenu.classList.remove("top-0");
  mobileMenu.classList.add("-top-32");
}

openMenu.addEventListener("click", menu);
closeMenu.addEventListener("click", close);

// const titles = document.getElementById("title");
// const descriptions = document.getElementById("description");
// const backgrounds = document.getElementById("heroBg");
// const leftBtn = document.getElementById("leftBtn");
// const rightBtn = document.getElementById("rightBtn");

const titles = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
];

const descriptions = [
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
];

const backgrounds = [
    'bg-hero1mobile lg:bg-hero1desktop',
    'bg-hero2mobile lg:bg-hero2desktop',
    'bg-hero3mobile lg:bg-hero3desktop'
];

let currentIndex = 0;

function updateContent(index) {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const heroBg = document.getElementById('heroBg');

    // Change the content
    title.textContent = titles[index];
    description.textContent = descriptions[index];

    // Remove existing background classes
    backgrounds.forEach(bgClass => {
        const classes = bgClass.split(' ');
        classes.forEach(cls => heroBg.classList.remove(cls));

        const newClasses = backgrounds[index].split(' ');
        newClasses.forEach(cls => heroBg.classList.add(cls));
    });


    // Apply the animation class
    title.classList.add('animate-moveAndFade');
    description.classList.add('animate-moveAndFade');

    // Remove the animation class after animation ends to reset for future clicks
    title.addEventListener('animationend', () => title.classList.remove('animate-moveAndFade'));
    description.addEventListener('animationend', () => description.classList.remove('animate-moveAndFade'));
}

document.getElementById('leftBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + titles.length) % titles.length;
    updateContent(currentIndex);
});

document.getElementById('rightBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % titles.length;
    updateContent(currentIndex);
});