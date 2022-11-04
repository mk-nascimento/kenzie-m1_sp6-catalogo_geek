let items = [
	{
		image: './assets/img/actions/animewoman.jpg',
		name: 'Anime Woman',
		price: 'R$ 299,00',
		type: 'figures'
	},
	{
		image: './assets/img/actions/dragonballpersonagem.jpg',
		name: 'Dragon Ball Personagem',
		price: 'R$ 349,00',
		type: 'figures'
	},
	{
		image: './assets/img/actions/starwarspersonagem.jpg',
		name: 'Star Wars ',
		price: 'R$ 389,90',
		type: 'figures'
	},
	{
		image: './assets/img/painting/clock.jpg',
		name: 'Clock',
		price: 'R$ 289,90',
		type: 'frames'
	},
	{
		image: './assets/img/painting/gamepad.jpg',
		name: 'Gamepad',
		price: 'R$ 189,90',
		type: 'frames'
	},
	{
		image: './assets/img/painting/personagem.jpg',
		name: 'Personagem Vintage',
		price: 'R$ 380,00',
		type: 'frames'
	},
];
let listFigures = [];
let listFrames = [];

// Separando e preenchendo listas determinadas
function separateItem(items) {
	for (let i = 0; i < items.length; i++) {
		if (items[i].type.toLowerCase() == 'frames') {
			listFrames.push(items[i]);
		}
		if (items[i].type.toLowerCase() == 'figures') {
			listFigures.push(items[i]);
		};
	};

	return listFigures;
};
separateItem(items);

//Prenchendo lista Paintings
for (let i = 0; i < listFrames.length; i++) {
	let imageCard = document.createElement('img');
	imageCard.src = listFrames[i].image;
	imageCard.alt = listFrames[i].name;
	imageCard.classList.add('imageCard')
	let listSectionFrames = document.getElementsByClassName('framesList')[0];
	let elementoLista = document.createElement('li');		// criamos o elemento de lista
	let nome = document.createElement('h4');		//criamos um elemento do tipo h4 para renderizar o nome
	let p = document.createElement('p');
	nome.innerText = `${listFrames[i].name}`;//Inserimos um valor ao nosso h4, usando o valor nome do nosso objeto. 
	p.innerText = `${listFrames[i].price}`;

	elementoLista.appendChild(imageCard);
	elementoLista.appendChild(nome);
	elementoLista.appendChild(p);
	listSectionFrames.appendChild(elementoLista);
}
//Prenchendo lista Action Figures
for (let i = 0; i < listFigures.length; i++) {
	let imageCard = document.createElement('img');
	imageCard.src = listFigures[i].image;
	imageCard.alt = listFigures[i].name;
	imageCard.classList.add('imageCard');
	let listSectionfigures = document.getElementsByClassName('figuresList')[0];
	let elementoLista = document.createElement('li');		// criamos o elemento de lista
	let nome = document.createElement('h4');		//criamos um elemento do tipo h4 para renderizar o nome
	let p = document.createElement('p');
	nome.innerText = `${listFigures[i].name}`;//Inserimos um valor ao nosso h4, usando o valor nome do nosso objeto. 
	p.innerText = `${listFigures[i].price}`;

	elementoLista.appendChild(imageCard);
	elementoLista.appendChild(nome);
	elementoLista.appendChild(p);
	listSectionfigures.appendChild(elementoLista);
}
