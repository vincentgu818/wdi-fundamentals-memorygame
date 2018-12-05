var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.")
	}
};

var resetBoard = function() {
	var cardElements = document.getElementsByTagName('img');
	for(var i = 0; i < cardElements.length; i++) {
		cardElements[i].setAttribute('src','images/back.png');
	}
}

var flipCard = function() {
	// A card is being flipped faceup.
	if(this.getAttribute('src') === 'images/back.png') {
		var cardId = this.getAttribute('data-id');
		console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit + " (" + cards[cardId].cardImage + ")");
		cardsInPlay.push(cards[cardId].rank);
		
		// Check for match if two cards are in play.
		if(cardsInPlay.length === 2) {
			checkForMatch();
			cardsInPlay.pop();
			cardsInPlay.pop();
		} 
		// Otherwise, one card in play means a new round with a new board.
		else {
			resetBoard();
		}
		this.setAttribute('src',cards[cardId].cardImage);
	} 
	// User flipping a card facedown also means a new round with a new board.
	else {
		cardsInPlay.pop();
		resetBoard();
	}
};

var createBoard = function() {
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();