const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Récupération des éléments dans le DOM
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

const dots = document.querySelector('.dots')

// Boucle afin de créer un point de navigation pour chaque élément de la const slides s'il y en a plus d'un
slides.forEach((slide) => {
	if (slides.length > 1) {
		const div = document.createElement('div');
		div.className = 'dot';
		dots.appendChild(div);
	}
})

// Attacher chaque nouvelle div au bloc parent
const dot = document.querySelectorAll('.dot')
dot[0].classList.add('dot_selected')

let currentSlide = 0

// Mise en place du contenu d'une slide
function slide(item) {
	const bannerImg = document.querySelector('.banner-img')
	bannerImg.src = './assets/images/slideshow/' + slides[item].image
	const bannerText = document.querySelector('#banner p')
	bannerText.innerHTML = slides[item].tagLine
}


// Event Listener au clic sur flèches
arrowLeft.addEventListener('click', () => {
	dot[currentSlide].classList.remove("dot_selected")
	currentSlide --
	if(currentSlide < 0) {
		currentSlide = slides.length - 1
	}
	dot[currentSlide].classList.add("dot_selected")
	slide(currentSlide)
})

arrowRight.addEventListener('click',() => {
	dot[currentSlide].classList.remove("dot_selected")
	currentSlide ++
	if(currentSlide > slides.length - 1) {
		currentSlide = 0
	}
	dot[currentSlide].classList.add("dot_selected")
	slide(currentSlide)
})
