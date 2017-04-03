// our socket code for physics to send updates back
const sockets = require('./sockets.js');

let charList = {}; // list of characters

const appGravity = (newDest, jump) => {
   if(newDest < 400 && !jump){
       return newDest += 2;
   }
    else if(newDest > 0 && jump){
        return newDest -= 1;
    } else if (newDest > 400){
        return 400;
    } else {
        return newDest;
    }
};
// update our entire character list
const setCharacterList = (characterList) => {
  charList = characterList;
};

// update an individual character
const setCharacter = (character) => {
  charList[character.hash] = character;
};



module.exports.setCharacterList = setCharacterList;
module.exports.setCharacter = setCharacter;
module.exports.appGravity = appGravity;
