var dpsHero = 0;
var globalGold = 100;
export { dpsHero, globalGold };

//class hero 
export class hero {
  constructor(baseCost, baseDps) {
    this.level = 0;
    this.baseCost = baseCost;
    this.baseDps = baseDps;
    this.upgradeCost = baseCost;
    this.upgradeDps = 0;
  }

  puissance() {
    return Math.pow(1.07, this.level - 1);
  }
  
  
  levelUp() {
    globalGold -= this.upgradeCost;
    this.level += 1;
    this.upgradeCost = Math.floor(this.baseCost * this.puissance());
    dpsHero -= this.upgradeDps;
    this.upgradeDps = this.baseDps * this.level;
    dpsHero += this.upgradeDps;
  }
}


//class monster
export class monster {
  constructor() {
    this.level = 1;
    this.life = 10;
    this.maxLife = 10;
    this.gold = 0;
    this.wave = 1;
    this.maxWave = 10;
  }

  waveLevelUp() {
    this.maxLife = Math.round(10 * (this.level - 1 + this.puissance()));
    this.life = this.maxLife;
    this.gold = (this.maxLife / 15);
    this.wave += 1;
    globalGold += Math.ceil(this.gold);
  }

  isWaveComplet() {
    if (this.wave >= 11) {
      this.wave = 1;
      this.levelUp();
    }
  }

  puissance() {
    return Math.pow(1.55, this.level - 1);
  }

  levelUp() {
    this.level += 1;
    this.maxLife = Math.round(10 * (this.level - 1 + this.puissance()));
    this.life = this.maxLife;
    this.gold = (this.maxLife / 15);
    globalGold += Math.ceil(this.gold);
  }
}


/*
à rajouter

1 ) Multiple de 5  pour vérifier les vagues de boss 

let multiple5 (arg1,arg2){
  if (arg1%arg2==0){
    return true;
  }else{false;}
}

2 ) formule des HP Boss pareil que monstre mais X10

⌈10×(Level−1+1.55Level−1)×[isBoss×10]⌉
*/