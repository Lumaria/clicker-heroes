import {dpsHero,globalGold} from './class.js';
import {hero} from './class.js';
import {monster} from './class.js';
import {canBuy,canUpgrade} from './fonction.js';
let dpsClick = 100;

//déclaration des enfant de monster et hero
let monster1 = new monster();
let hero1 = new hero(50, 5);
let hero2 = new hero(250, 22);

//déclaration DOM
let level = document.getElementById('level');
let bouton = document.getElementById('bouton-image');
let life = document.getElementById('life');
let GlobalMoney = document.getElementById('global-money');
let CanLevelUp = document.getElementById('LevelUp');
let boutonHero = document.getElementById('hero1B');
let boutonHero2 = document.getElementById('Hero2B')
let boutonupgrade1 = document.getElementById('bouton-upgrade1');
let boutonupgrade2 = document.getElementById('bouton-upgrade2');
let wave = document.getElementById('wave');
boutonupgrade1.style.display = "none";
boutonupgrade2.style.display = "none";
boutonHero.innerHTML = "Achat (" + hero1.baseCost + ") Gold";
boutonHero2.innerHTML = "Achat (" + hero2.baseCost + ") Gold";



//fonction de vérification si le monstre est mort, waveUp, levelUp global
let monsterIsDeath = () => {
  if (monster1.life <= 1) {
    monster1.waveLevelUp();
    monster1.isWaveComplet();
  }
};

//fonction automatisation des hero ( dps hors clique sur 100 milliseconds ) 
let timerEveryOneSecond = () => {
  setInterval(function () {
    monsterIsDeath();
    monster1.life -= Math.round((dpsHero) / 10);
    updateData();
  }, 100);
};

//fonction réunissant tout les paramètres à mettre à jours, mettre dans le setInterval
let updateData = () => {
  life.innerHTML = "life " + monster1.life + " / " + monster1.maxLife;
  level.innerHTML = "level " + monster1.level;
  GlobalMoney.innerHTML = " gold " + globalGold;
  CanLevelUp.innerHTML =  " Votre DPS global est : " + dpsHero;
  wave.innerHTML = "wave  : " + monster1.wave + " / " + monster1.maxWave ;
  boutonupgrade1.innerHTML = "Augementer de niveau (" + hero1.upgradeCost + ") Gold";
  boutonupgrade2.innerHTML  = "Augementer de niveau(" + hero2.upgradeCost + ") Gold";
  canBuy(globalGold,hero1, boutonHero);
  canBuy(globalGold,hero2, boutonHero2);
  canUpgrade(globalGold,hero1, boutonupgrade1);
  canUpgrade(globalGold,hero2, boutonupgrade2);
};

// addEventListener DPS
bouton.addEventListener('click', function () {
  monster1.life -= dpsClick;
});

let buttons1 = document.getElementsByClassName('Upgrade');
let buttons = document.getElementsByClassName('buy');

//boucle index class achat hero
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    if (i === 0) {
      hero1.levelUp();
      buttons[0].style.display ="none";
      buttons1[0].style.display = "block"; 
    } else if (i === 1) {
      hero2.levelUp();
      buttons[1].style.display ="none";
      buttons1[1].style.display = "block";
    }
  });
}
//boucle index class upgrade hero
for (let i = 0; i < buttons.length; i++) {
  buttons1[i].addEventListener('click', ()=>{
    if(i===0){
      hero1.levelUp();
    } else if(i===1){
      hero2.levelUp();
    }
  })
}


timerEveryOneSecond();
