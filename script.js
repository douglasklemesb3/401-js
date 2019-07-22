
/*let nomeCapivara = "jubiscreuda"
let contador = 0;

 while(contador <10 ){
     console.log(nomeCapivara);
     contador ++;
 }*/

 /*for(let contador=0; contador<4; contador ++){
    console.log(contador);
 }*/

/* let listaDeChamada = ["jusbiscleuda", "akida sorte", "natyele besta", "karen idiota", "trouxa"];

 /*for(let menstruaçao in listaDeChamada){
     console.log(menstruaçao)
 }
 for(let jujuba of listaDeChamada){
     console.log(jujuba)
 }*/



let filmes = [
             {nome:"rei leão", classificacao: 10, estilo: "animacao"},
             {nome:"velozes e furiosos",classificacao:16, estilo:"açao"},
             {nome:"ana belle", classificacao:41, estilo:"suspence"},
             {nome:"moana", classificacao:100, estilo:"animacao"}
]
let nome =prompt("digite seu nome");
let idade = prompt("digite sua idade");

for(let filme of filmes){
    if(idade >= filme.classificacao){
    console.log(` Olá, ${nome} pode assistir ${filme.nome}.`)
}

}