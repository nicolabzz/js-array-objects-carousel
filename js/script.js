/*
Consegna:
Riprendiamo l'esercizio carosello e modifichiamone il codice per renderlo funzionante con un array di oggetti al posto dell'array semplice.
Ecco l'array con i dati:
const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];
BONUS 1:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 2:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/ 

const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];



window.addEventListener('load', ()=> {
	
	const thumbnailHTML = document.querySelector('.thumbnail');
	

	for (let i=0; i < arrImages.length; i++) {
		const img = arrImages[i]

		thumbnailHTML.innerHTML = thumbnailHTML.innerHTML +
		`<div class="small-card' onclick="cambioImmagine(`+ i +`)">
			<img src="img/${img.image}" alt="">
		</div>`
	}

	let indexInVisione = 0;
	
	const indietroHTML = document.getElementById('indietro-btn');
	const avantiHTML = document.getElementById('avanti-btn');
	
	const indietro = () => {
		cambioImmagine(indexInVisione - 1) 
	};
	const avanti = () => {
		cambioImmagine(indexInVisione + 1)
	};

	indietroHTML.addEventListener('click', indietro);
	
	
	avantiHTML.addEventListener('click', avanti);
	
	
	
	const cambioImmagine = (indice) => {
		indexInVisione = indice;
		
		
		if (indexInVisione > arrImages.length - 1)
		{
			indexInVisione = arrImages.length - 1;
		}
		if (indexInVisione < 0)
		{
			indexInVisione = 0;
		}
	
		const img = arrImages[indexInVisione].image;
		const bigImg = document.querySelector('.big-pic');
	
		bigImg.innerHTML = `<img src="img/${img}" alt="">`;
	
		
	
	};

	cambioImmagine(indexInVisione)
});

