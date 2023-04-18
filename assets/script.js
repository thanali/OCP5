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
const bannerImg = document.querySelector('.banner-img')
const bannerText = document.querySelector('#banner p')
const dots = document.querySelector('.dots')

// Boucle afin de créer un point de navigation pour chaque élément de la const slides s'il y en a plus d'un
slides.forEach((slide) => {
	if (slides.length > 1) {
		const div = document.createElement('div');
		div.className = 'dot';
		dots.appendChild(div);
	}
})
// Rattacher chaque nouvelle div au bloc parent
const dot = document.querySelectorAll('.dot')

let currentSlide = 0
dot[currentSlide].classList.add('dot_selected')

// Mise en place du contenu d'une slide
function slide(index) {
	// Calcul de la slide à afficher
	currentSlide = index === slides.length ? 0 : index < 0 ? slides.length - 1 : index
	// Contenu de la slide après calcul	
	bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image
	bannerText.innerHTML = slides[currentSlide].tagLine
	dot[currentSlide].classList.add('dot_selected')
}


// Event Listener au clic sur flèches
arrowLeft.addEventListener('click', () => {
	dot[currentSlide].classList.remove("dot_selected") // Retire la classe du point liée à l'élément courant
	currentSlide -- // Compte en sens inverse
	slide(currentSlide) // Retourne la nouvelle slide qui devient la current
})

arrowRight.addEventListener('click',() => {
	dot[currentSlide].classList.remove("dot_selected")
	currentSlide ++ 
	slide(currentSlide)
})
