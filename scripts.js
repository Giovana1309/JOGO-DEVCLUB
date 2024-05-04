const result=document.querySelector('.result')
const pontuacaousuario=document.querySelector('.meuresultado')
const pontuacaomaquina=document.querySelector('.resultadomaquina')
const escolhausuario=document.querySelector('.escolhausuario')
const escolhamaquina=document.querySelector('.escolhamaquina')




let numeropontuacaousuario =0
let numeropontuacaomaquina =0






const usuario = (pessoa) => {


resultadojogo (pessoa,maquina())

escolhausuario.innerHTML=pessoa


}


const maquina = () => {
   const opcoesdamaquina = ['pedra', 'papel', 'tesoura']
const escolhamaq= Math.floor(Math.random () * 3 )

escolhamaquina.innerHTML=opcoesdamaquina[escolhamaq]


   return opcoesdamaquina[escolhamaq]

   }
   


const resultadojogo =(usuario,maquina)=> {


   const body = document.querySelector('body')
   const opcoesdeimagens =['img1.png','img2.png','img3.png']
   const escolhaimg= Math.floor(Math.random () * 3 )
   body.style.backgroundImage =`url(${opcoesdeimagens[escolhaimg]})`
   
   console.log('Humano:'+ usuario + "Maquina:"+ maquina)
   
  

    if( usuario ===  maquina){
      result.innerHTML="IHH EMPATOU &#128517;"
   } 

   else if((usuario === 'papel' && maquina === 'pedra' )||( usuario ===  'pedra' && maquina === 'tesoura')|| (usuario ===  'tesoura' && maquina === 'papel'))
   {
      result.innerHTML="PARABÉNS VOCÊ GANHOU HAHA &#128526";
      numeropontuacaousuario++
      pontuacaousuario.innerHTML= numeropontuacaousuario
   }

   else
   {
      result.innerHTML="XII VOCÊ PERDEU &#128557, A ALEXIA GANHOU ! <br> <br>JOGUE NOVAMENTE  &#128513 <br>"; 
      numeropontuacaomaquina++
      pontuacaomaquina.innerHTML=numeropontuacaomaquina
   }



}




