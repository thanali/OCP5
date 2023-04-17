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

const bannerImg = document.querySelector('.banner-img')
bannerImg.src = './assets/images/slideshow/' + slides[0].image

const bannerText = document.querySelector('#banner p')
bannerText.innerHTML = slides[0].tagLine

const nbrSlides = slides.length




// Event Listener au clic sur flèche
arrowLeft.addEventListener('click', () => {
	console.log('All Left')
})
arrowRight.addEventListener('click',() => {
	console.log('Allright')
})

// Boucle afin de créer un point de navigation pour chaque élément de la const slides s'il y en a plus d'un
for (slide in slides) {
	const dot = document.createElement('div');
	dot.className = 'dot';
	dots.appendChild(dot);
}

dotElement = document.querySelectorAll('.dot')
dotElement[0].classList.add('dot_selected')

console.log(dotElement)
