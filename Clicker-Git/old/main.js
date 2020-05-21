//déclaration DOM
let level = document.getElementById('level');
let bouton = document.getElementById('bouton-image');
let maxLife = document.getElementById('max-life');
let life = document.getElementById('life');
let puissance = document.getElementById('puissance');

//class
class monster{
  constructor(){
    this.level=0;
    this.life=0;
    this.maxLife=0;
  }

  puissance(){
    return Math.pow(1.55,this.level-1);
  }

  levelUp(){
    this.level+=1;
    this.maxLife = 10*(this.level-1+this.puissance());
    this.life = this.maxLife;
    
  }
}

let monster1 = new monster();


let monsterIsDeath=()=>{
if (monster1.life <=1){
  monster1.levelUp();
} else {
  monster1.life -=1;}
};

bouton.addEventListener('click',function(){
monsterIsDeath();
life.innerHTML = "life " + monster1.life;
maxLife.innerHTML = "max-life " + monster1.maxLife;
level.innerHTML = "level " + monster1.level;
puissance.innerHTML = "puissance " + monster1.puissance();
});