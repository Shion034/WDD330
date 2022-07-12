/*------------------------------Tempreture------------------------------*/ 
const getCelsius = document.querySelector('.Celsius').value;
const celNum = document.querySelector('.numinput1').value;
const convert1 = document.querySelector('.Convert1');

function celTofahren(){
    const celNum = document.querySelector('.numinput1').value;
    const OutputAreaT = document.querySelector('.outputTF');
    TempretureA = Math.round((celNum*9/5)+32);
    console.log(celNum);
    console.log(TempretureA);
    OutputAreaT.innerHTML = TempretureA;
}
convert1.addEventListener('click', celTofahren);
