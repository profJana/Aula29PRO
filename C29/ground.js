class //de o nome Ground a essa classe
{
  constructor() //completar com as posições e tamanho que o chão irá receber
  {
    let options = {
     // deixar estático como verdadeiro
    };
    
    //aqui constrói o corpo
    this.body = Bodies.(); //completar com o corpo do tipo retangulo e as propriedades para receber
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push(); //inicia a criação das formas na tela
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    //criar a linha para mostrar o corpo na tela
    pop(); //finaliza a criação das formas na tela
  }
}
