import { dpsHero, globalGold } from './class.js';
import { hero } from './class.js';
import { monster } from './class.js';
import { canBuy, canUpgrade, futurCost, arrayDom, percentageOfLife } from './fonction.js';
let dpsClick = 100;

//déclaration des enfant de monster et hero
let monster1 = new monster();
let hero1 = new hero(50, 5);
let hero2 = new hero(250, 22);
let hero3 = new hero(1000, 74);
let hero4 = new hero(4000, 245);
let hero5 = new hero(20000, 976);
const heroArr = [hero1, hero2, hero3, hero4, hero5];



//déclaration DOM
let level = document.getElementById('level');
let bouton = document.getElementById('bouton-image');
let life = document.getElementById('life');
let GlobalMoney = document.getElementById('global-money');
let CanLevelUp = document.getElementById('LevelUp');
let wave = document.getElementById('wave');
let lifebar = document.getElementById('lifebar');

let buttons1 = document.getElementsByClassName('Upgrade');
let buttons = document.getElementsByClassName('buy');
let boutonHero = [];
let boutonupgrade = [];
arrayDom(buttons1, boutonupgrade);
arrayDom(buttons, boutonHero);


for (let i = 0; i < boutonupgrade.length; i++) {
  boutonupgrade[i].style.display = "none";
  boutonHero[i].innerHTML = "Achat" + "<br>" + '<img src="../assets/images/goldCoin5.png" >' + heroArr[i].baseCost;
}

//fonction de vérification si le monstre est mort, waveUp, levelUp global
let monsterIsDeath = () => {
  if (monster1.life <= 1) {
    monster1.waveLevelUp();
    monster1.isWaveComplet();
    monster1.isBoss();
  }
};

//fonction automatisation des hero ( dps hors clique sur 100 milliseconds ) 
let timerEveryOneSecond = () => {
  setInterval(function () {
    updateData();
  }, 50);
};

let timerEveryOneSecond2 = () => {
  setInterval(function () {
    monsterIsDeath();
    monster1.life -= Math.round((dpsHero) / 10);
    }, 100);
};

//fonction réunissant tout les paramètres à mettre à jours, mettre dans le setInterval
let updateData = () => {
  life.innerHTML = "life " + monster1.life + " / " + monster1.maxLife;
  level.innerHTML = "level " + monster1.level;
  GlobalMoney.innerHTML = " gold " + globalGold;
  CanLevelUp.innerHTML = " Votre DPS global est : " + dpsHero + "  Le niveau de hero 1 est : " + hero1.level;
  wave.innerHTML = "wave  : " + monster1.wave + " / " + monster1.maxWave;
  futurCost(boutonupgrade, heroArr);
  canBuy(globalGold, heroArr, boutonHero);
  canUpgrade(globalGold, heroArr, boutonupgrade);
  percentageOfLife(monster1.life,monster1.maxLife,lifebar);
  };

// addEventListener DPS
bouton.addEventListener('click', function () {
  monster1.life -= dpsClick;
  monster1.level +=10;
});

//boucle index class achat hero
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    heroArr[i].levelUp();
    buttons[i].style.display = "none";
    buttons1[i].style.display = "block";
  });
}

//boucle index class upgrade hero
for (let i = 0; i < buttons.length; i++) {
  buttons1[i].addEventListener('click', () => {
    heroArr[i].levelUp();
  })
}

timerEveryOneSecond();
timerEveryOneSecond2();



