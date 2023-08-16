const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//crie a variável ground

//crie a variável da fruta e da corda;
//crie a variável que irá conectar a fruta

function setup() 
{
  //cria o "fundo"
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  //crie aqui o objeto do chão utilizando a Classe Ground
  

 
  //crie aqui o objeto da corda utilizando a Classe Rope

  
  //crie aqui o corpo da fruta
  
  //adiciona fisica usando o matter.js
  //Matter.Composite.add(rope.body,fruit);

 
  //crie o link entre a corda e a fruta

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  //cor do "fundo"
  background(51);

  
  //chame a função show de Rope para mostrar a corda na tela

  
  //(fruit.position.x,fruit.position.y,30,30);

  //atualiza em tempo real a fisica
  Engine.update(engine);

  //chame a função show de Ground para mostrar o chão na tela
 
}
