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
const bannerImg = document.querySelector('.banner-img')
const bannerText = document.querySelector('#banner p')
const dots = document.querySelector('.dots')

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

// Boucle afin de créer un point de navigation pour chaque élément de la const slides s'il y en a plus d'un
slides.forEach((slide) => {
	if (slides.length > 1) {
		const div = document.createElement('div');
		div.className = 'dot';
		dots.appendChild(div);
	}
})
// Récupérer les nouveaux éléments dot
const dot = document.querySelectorAll('.dot')
// Initialiser le point de sélection par rapport au tableau 
dot[0].classList.add('dot_selected')

// Initialiser la slide
let currentSlide = 0

// Mise en place du contenu d'une slide
function slide() {
	bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image
	bannerText.innerHTML = slides[currentSlide].tagLine
	// Ajoute la classe du point liée à l'élément courant
	dot[currentSlide].classList.add('dot_selected')
}

arrowLeft.addEventListener('click', () => {
	// Retire la classe du point liée à l'élément courant
	dot[currentSlide].classList.remove("dot_selected")
	// Compte en sens inverse
	if(currentSlide === 0) {
		currentSlide = slides.length - 1
	} else {
		currentSlide --
	}
	// Retourne la nouvelle slide qui devient la current
	slide()
})

arrowRight.addEventListener('click', () => {
	dot[currentSlide].classList.remove("dot_selected")
	if(currentSlide === slides.length -1) {
		currentSlide = 0
	} else {
		currentSlide ++
	}
	slide()
})