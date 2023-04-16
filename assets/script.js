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

const banner = document.querySelector('#banner')
const dots = document.querySelector('.dots')
const bannerImg = document.querySelector('.banner-img')
const bannerText = document.querySelector('p')

// Event Listener au clic sur flèche
arrowLeft.addEventListener('click', () => {
	console.log('All Left') //Test de fonctionnalité
})
arrowRight.addEventListener('click', () => {
	console.log('Allright') //Test de fonctionnalité
})

// Boucle afin de créer un point de navigation pour chaque élément de la const slides
slides.forEach(img => {
	dots.innerHTML += '<div class="dot"></div>' // += permet d'ajouter aux éléments existants
});

console.log(bannerText)