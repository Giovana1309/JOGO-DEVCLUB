const result=document.querySelector('.result')

const usuario = (pessoa) => {


resultadojogo (pessoa,maquina())


}


const maquina = () => {
   const opcoesdamaquina = ['pedra', 'papel', 'tesoura']
const escolhamaq= Math.floor(Math.random () * 3 )

   return opcoesdamaquina[escolhamaq]
}

const resultadojogo =(usuario,maquina)=> {

    console.log('Humano:'+ usuario + "Maquina:"+ maquina)
}

if( usuario ===  maquina){
   result.innerHTML="empate!"
}

