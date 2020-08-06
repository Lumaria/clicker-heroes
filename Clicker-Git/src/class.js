import { test } from "./fonction";

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
    this.futurCost = baseCost;
  }

  puissance() {
    return Math.pow(1.07, this.level - 1);
  }

  puissanceFutur() {
    return Math.pow(1.07, this.level);
  }
  levelUpFutur() {
    this.futurCost = Math.floor(this.baseCost * this.puissanceFutur());
  }

  buy() {
    this.level += 1;
    globalGold -= this.baseCost;
    this.upgradeDps = this.baseDps * this.level;
    dpsHero += this.upgradeDps;
    this.upgradeCost = Math.floor(this.baseCost * this.puissance());
  }

  levelUp() {
    this.level += 1;
    this.upgradeCost = Math.floor(this.baseCost * this.puissance());
    globalGold -= this.upgradeCost;
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
    if(this.maxWave === 1){
      this.levelUp();
    } else{
    this.maxLife = Math.round(10 * (this.level - 1 + this.puissance()));
    this.life = this.maxLife;
    this.gold = (this.maxLife / 15);
    this.wave += 1;
    globalGold += Math.ceil(this.gold);
    }
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

  isBoss(){
    if (this.level%5===0){
      this.maxLife = Math.round((10 * (this.level - 1 + this.puissance()))*10);
      this.life = this.maxLife;
      this.maxWave=1;
      this.wave=1;
    }
  }
}

export class world{
  constructor(){
    this.zone = 1;
    this.zoneName = "forest";
    this.level = monster.level;
  }

  zoneAttribution(){
    if(this.level >=1 && this.level<=20){
      this.zone =1;
      this.zoneName = "forest";
    } else if(this.level >=21 && this.level<=40){
      this.zone =2;
      this.zoneName = "drylands";
    } else if(this.level >=41 && this.level<=60){
      this.zone =3;
      this.zoneName = "desert";
    } else if(this.level >=61 && this.level<=80){
      this.zone =4;
      this.zoneName = "beach";
    } else if(this.level >=81 && this.level<=100){
      this.zone =5;
      this.zoneName = "mudlands";
    } else if(this.level >=101 && this.level<=120){
      this.zone =6;
      this.zoneName = "rocklands";
    } else if(this.level >=121 && this.level<=140){
      this.zone =7;
      this.zoneName = "caverns";
    } else if(this.level >=141 && this.level<=160){
      this.zone =8;
      this.zoneName = "stone fields";
    } else if(this.level >=161 && this.level<=180){
      this.zone =9;
      this.zoneName = "tundra";
    } else if(this.level >=181 && this.level<=200){
      this.zone =10;
      this.zoneName = "astral rift";
    } else if(this.level >=201 && this.level<=220){
      this.zone =11;
      this.zoneName = "bloodlands";
    }
  }

}

/*

        Crée un univers:

  Dans cette univers il y a 11 zones
chaque zone contient 10 niveau avant d'aller à la prochaine

monde 1 forest : 14 +2 boss
monde 2 drylands : 9 + 2 boss
monde 3 desert : 9 + 2 boss
monde 4 beach : 11 +2 boss
monde 5 mudlands : 8 + 2 boss
monde 6 rocklands : 9 + 2 boss
monde 7 caverns : 12 + 2 boss
monde 8 stone fields: 10 + 2 boss
monde 9 tundra : 10 +2 boss
monde 10 astral rift: 9 + 2 boss
monde 11 bloodlands : 8 + 2 boss

avoir des images générer par rapport au pool d'image de ce monde


*/