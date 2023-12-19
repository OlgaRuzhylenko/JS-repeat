"use strict"


const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
 this.potions.push(potionName);
 return this.potions
    // Change code above this line
  },
  removePotion(potionName) {
let index = this.potions.indexOf(potionName);

if (index!== -1) {
  this.potions.splice(index, 1)
}
return this.potions;
  },
  updatePotionName(oldName, newName) {
    let index = this.potions.indexOf(oldName);

if (index!== -1) {
  this.potions.splice(index, 1, newName)
}
return this.potions;
  }
  
};

const result = atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
console.log(result);


