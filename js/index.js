alert('Dom Carregado');

//Pontuação
var ganhadorVoce = 0;
var ganhadorComputador = 0;
var empate = 0;


function escolhaPedra(){
    //Escolha do Computador
    let escolhasComputador = ['pedra','papel','tesoura'];
    let escolhaComputador = escolhasComputador[Math.floor(Math.random() * escolhasComputador.length)];

    alert("A escolha do computador foi: "+escolhaComputador);

    if(escolhaComputador === 'pedra'){
        alert('Deu empate, TENTE NOVAMENTE!');
        document.getElementById("pontuacaoEmpate").innerHTML = ++empate;
    } else if (escolhaComputador === 'papel'){
       alert('Você perdeu, LOSER!!!!!!!');
       document.getElementById("pontuacaoComputador").innerHTML = ++ganhadorComputador;
    } else {
        alert('Você ganhou! CONGRATULATIONS!!!');
        document.getElementById("pontuacaoVoce").innerHTML = ++ganhadorVoce;
    }

  



}


function escolhaPapel(){
   //Escolha do Computador 
   let escolhasComputador = ['pedra','papel','tesoura'];
   let escolhaComputador = escolhasComputador[Math.floor(Math.random() * escolhasComputador.length)];

   alert("A escolha do computador foi: "+escolhaComputador);

   if(escolhaComputador === 'pedra'){
       alert('Você ganhou! CONGRATULATIONS!!!');
       document.getElementById("pontuacaoVoce").innerHTML = ++ganhadorVoce;
    } else if (escolhaComputador === 'papel'){
      alert('Deu empate, TENTE NOVAMENTE!');
      document.getElementById("pontuacaoEmpate").innerHTML = ++ganhadorComputador;
   } else {
       alert('Você perdeu, LOSER!!!!!!!');
       document.getElementById("pontuacaoComputador").innerHTML = ++empate;
   }

   
}


function escolhaTesoura(){
     //Escolha do Computador 
     let escolhasComputador = ['pedra','papel','tesoura'];
     let escolhaComputador = escolhasComputador[Math.floor(Math.random() * escolhasComputador.length)];

     alert("A escolha do computador foi: "+escolhaComputador);
  
     if(escolhaComputador === 'pedra'){
         alert('Você perdeu, LOSER!!!!!!!');
         document.getElementById("pontuacaoComputador").innerHTML = ++ganhadorComputador;
     } else if (escolhaComputador === 'papel'){
        alert('Você ganhou! CONGRATULATIONS!!!');
        document.getElementById("pontuacaoVoce").innerHTML = ++ganhadorVoce;
     } else {
         alert('Deu empate, TENTE NOVAMENTE!');
         document.getElementById("pontuacaoEmpate").innerHTML = ++empate;
     }

    
  }


  //Limpar os Campos;

  function limpar(){
    document.getElementById("pontuacaoVoce").innerHTML = 0 ;
    document.getElementById("pontuacaoComputador").innerHTML = 0;
    document.getElementById("pontuacaoEmpate").innerHTML = 0;
  }


