//fonction  Buy Hero permet de désactiver l'appui du bouton en attendant la somme nécessaire de l'argument gold
export var canBuy = (gold, val, doc) => {
  if (gold < val.baseCost) {
    doc.disabled = true;
  } else {
    doc.disabled = false;
  }
};

//fonction Upgrade Hero, même but que Buy Hero mais pour le bouton upgrade
export var canUpgrade = (gold, val, doc) => {
  if (gold < val.upgradeCost) {
    doc.disabled = true;
  } else  {
    doc.disabled = false;
  }
};

