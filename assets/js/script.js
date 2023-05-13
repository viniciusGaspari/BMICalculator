const inputName = document.querySelector("#name");

inputName.addEventListener('keypress', function(e) {

    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault();
    }

    if(!checkChar()){
        e.preventDefault();
    }

});

function checkChar(){

    const char = String.fromCharCode(e.keyCode);
 
    const pattern = '[a-zA-Z]';
    
    if(char.match(pattern)){
        return true;
    }

}

const maxWeight = document.querySelector('.maxWeight');

maxWeight.addEventListener('input', e => {

        maxWeight.value = maxWeight.value.substring(0, 3); 
    
});

    const maxHeight = document.querySelector('.maxHeight');

    maxHeight.addEventListener('input', e => {

        maxHeight.value = maxHeight.value.substring(0, 3);

});

function toggleButton(){
    const nome = document.getElementById("name");
    const peso = document.getElementById("weight").value;
    const altura = document.getElementById("height").value;
    const btnTurn = document.getElementById("btnCalc");
    
    if(peso  && altura && nome){
        btnTurn.disabled = false;
        return
    }else{
        btnTurn.disabled = true;
    }

}

function CalcIMC(){

    const peso = document.getElementById("weight").value;
    const altura = document.getElementById("height").value;
    const name = document.getElementById("name");
    const value = document.getElementById("resultJS");


    const nameInput = document.getElementById('name').value;

    document.getElementById("nameJS").innerHTML = nameInput;

    const IMC = ((peso * 10000)/(altura * altura)).toFixed(2);

    value.innerHTML = IMC;


    if(name !== '' && height !== '' && weight !== ''){

        let texto = '';

        value.style.color = "#dc2626"

        if(IMC < 18.5){
            texto = "Cuidado, você está abaixo do peso!"
        }else if (IMC >= 18.5 && IMC <= 25){
            texto = "Você está no peso ideal!"
            value.style.color = "#00ff88"
        }else if (IMC >= 25 && IMC <= 30){
            texto = "Cuidado! você está sobre peso"
        }else if (IMC >= 30 && IMC <= 35){
            texto = "Cuidado! Você está com obesidade moderada"
        }else if (IMC >= 35 && IMC <= 40){
            texto = "Cuidado! Você está com obsidade severa"
        }
            
        document.querySelector("#imcText").innerText = texto;

    }
    
}




    
