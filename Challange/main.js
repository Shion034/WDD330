/*------------------------------Tempreture------------------------------*/ 
//const getCelsius = document.querySelector('.Celsius').value;
//const celNum = document.querySelector('.numinput1').value;
const convert1 = document.querySelector('.Convert1');

function ConvertCF(){
    const celNum = document.querySelector('.numinput1').value;
    const OutputAreaT = document.querySelector('.outputTF');
    const sele = document.querySelector('.sele1').value;

    if (~sele.indexOf('Celsius')){
    /*TempretureA = Math.round((celNum*9/5)+32);
    console.log(celNum);
    console.log(TempretureA);
    OutputAreaT.innerHTML = TempretureA;*/
        console.log('hello1');
    } else if (~sele.indexOf('Fahrenheit')){
       /* TempretureA = Math.round((celNum-32)*5/9);
        OutputAreaT.innerHTML = TempretureA;*/
        console.log('hi1');
    }}
convert1.addEventListener('click', ConvertCF);

/*------------------------------Weight------------------------------*/ 
const convert3 = document.querySelector('.Convert3');

function convertW(){
const ConverNum = document.querySelector('.numinput3').value;
const outputW = document.querySelector('.output3');
const sele3 = document.querySelector('.sele3').value;
const outPutsele3 = document.querySelector('.outputsele3').value;

    if (~sele3.indexOf('gram') && ~outPutsele3.indexOf('ounce')) {
        weightGtoO = ConverNum/28.35;
        outputW.innerHTML = weightGtoO;
        console.log('hello3');
    } else if (~sele3.indexOf('gram') && ~outPutsele3.indexOf('pound')) {
        weightGtop = ConverNum/453.6;
        outputW.innerHTML = weightGtop;
    } else if (~sele3.indexOf('kilogram') && ~outPutsele3.indexOf('ounce') ) {
        weightKtoO = Math.round(ConverNum*35.274);
        outputW.innerHTML = weightKtoO;
}


}

convert3.addEventListener('click',convertW);

/*
const option1 = document.selection1;
const cOrF = option1.selectedIndex;
const str = document.selection1.options[cOrF].value;
console.log(str);

const sele = document.querySelector('.sele1').value;
const chosen = document.querySelector('.sele1');
function hahaha(){
    if (~sele.indexOf('Fahrenheit')) {
    console.log(sele);}
    else{
    console.log('HI');
    }}
chosen.addEventListener('change',hahaha);*/