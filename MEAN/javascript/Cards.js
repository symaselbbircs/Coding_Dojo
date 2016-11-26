function deckConstructor(){
  var suits = ['h','s','c','d'];
  var cards = ['2','3','4','5','6','7','8','9','0','J','Q','K','A']; //0 equals 10 in this case
  var buildDeck = function(){
    Deck = []
    for(var suit = 0; suit < suits.length; suit++){
      for(var card = 0; card< cards.length; card++){
        Deck.push(cards[card] + suits[suit])
      }
    }
    return Deck;
  }

  this.discard = [];
  this.players = [];
  this.deck = buildDeck();
  this.resetDeck = function(){
    for(player in this.players){
      console.log(this.players[player])
      this.players[player].hand = [];
    }
    this.discard = [];
    this.deck = buildDeck();
    console.log("Deck has been reset! Please shuffle and begin again.")
    return this
  };
}

deckConstructor.prototype.showdeck = function(){
  console.log(this.deck)
  return this
}
deckConstructor.prototype.shuffledeck = function(){
  var newdeck = [];
  var usedposition = [];
  var cardpointer;
  while(newdeck.length < this.deck.length){
    cardpointer = Math.floor(Math.random()*this.deck.length)
    if(newdeck.indexOf(this.deck[cardpointer]) < 0){
    newdeck.push(this.deck[cardpointer])
    }
  }
  this.deck = newdeck
  return this
}

function playerConstructor(deck, name){
  var deck = deck;
  this.name = name;
  this.hand = [];

  deck.players.push(this)
  console.log(deck)
}

playerConstructor.prototype.showHand = function(){
  console.log(this.name + " has a hand of: " + this.hand)
  return this
}
playerConstructor.prototype.draw = function(){
  this.hand.push(deck.deck.pop())
  return this
}
playerConstructor.prototype.discard = function(index){
  //this will input an index of the list in hand
  if(index >= this.hand.length){
    console.log(this.name + " doesn't have " + (index+1) + " cards in hand!")
  }
  else{
    var dis_card = this.hand[index]
    this.hand.splice(index,1)
    deck.discard.push(dis_card)
  }
  return this
}

var deck = new deckConstructor();
var amy = new playerConstructor(deck,"Amy")
var alice = new playerConstructor(deck,"Alice")
deck.shuffledeck()

amy.draw().showHand().draw().showHand().draw().showHand().discard(2).showHand()
console.log(deck.discard)
deck.resetDeck().shuffledeck();
amy.draw().draw().showHand()
alice.draw().draw().showHand()
amy.discard(0);
alice.discard(0);
console.log(deck.discard)
console.log(deck.deck.length)
