//function attribution Dom dans un tableau
export var arrayDom = (classDom, array) => {
  for (let i = 0; i < classDom.length; i++) {
    array[i] = classDom[i];
  }
};

//fonction  Buy Hero permet de désactiver l'appui du bouton en attendant la somme nécessaire de l'argument gold
export var canBuy = (gold, val, doc) => {
  for (let i = 0; i < val.length; i++) {
    if (gold < val[i].baseCost) {
      doc[i].disabled = true;
    } else {
      doc[i].disabled = false;
    }
  }
};

//fonction Upgrade Hero, même but  pour le bouton upgrade
export var canUpgrade = (gold, val, doc) => {
  for (let i = 0; i < val.length; i++) {
    if (gold < val[i].futurCost) {
      doc[i].disabled = true;
    } else {
      doc[i].disabled = false;
    }
  }
};

//fonction d'affichage du cout futur
export var futurCost = (arrayUpgrade, arrayHero) => {
  for (let i = 0; i < arrayUpgrade.length; i++) {
    arrayHero[i].levelUpFutur();
    arrayUpgrade[i].innerHTML = "Lvl up" + "<br />" + '<img src="../assets/images/goldCoin5.png" >' + arrayHero[i].futurCost
  }
}


export var percentageOfLife = (life, maxLife, dom) => {
  let total = Math.round(life * 100 / maxLife).toString();
  let complement = "%";
  total += complement;
  dom.style.width = total;
}

export var test =()=>{
  console.log("le timeur est finit");
}

