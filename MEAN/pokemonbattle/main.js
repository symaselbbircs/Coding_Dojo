var game = {
  players: [],
  addPlayer: function(name){
    var newplayer = playerConstructor(name);
    game.players.push(newplayer);
    return newplayer
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};
