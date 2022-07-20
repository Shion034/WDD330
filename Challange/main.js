/*------------------------------Tempreture------------------------------*/ 
//const getCelsius = document.querySelector('.Celsius').value;
//const celNum = document.querySelector('.numinput1').value;
const convert1 = document.querySelector('.Convert1');

function ConvertCF(){
    const celNum = document.querySelector('.numinput1').value;
    const OutputAreaT = document.querySelector('.outputTF');
    const sele = document.querySelector('.sele1').value;

    if (~sele.indexOf('Celsius')){
    TempretureA = (celNum*9/5)+32;
    console.log(celNum);
    console.log(TempretureA);
    OutputAreaT.innerHTML = TempretureA;
    console.log("Now you selected Celsius");
    } else if (~sele.indexOf('Fahrenheit')){
        TempretureA = (celNum-32)*5/9;
        OutputAreaT.innerHTML = TempretureA;
        console.log("Now you selected Fahrenheit");
    }}
convert1.addEventListener('click', ConvertCF);

/*------------------------------length------------------------------*/ 

const convert2 = document.querySelector('.Convert2');

function convertL() {
    const celNum2 = document.querySelector('.numinput2').value;
    const outputL = document.querySelector('.output2');
    const sele2 = document.querySelector('.sele2').value;
    const outPutsele2 = document.querySelector('.outputsele2').value;
/********************************Kilimeter*************************************** */
    if (~sele2.indexOf('Kilometer') && ~outPutsele2.indexOf('Yard')) {
        LengthKtoY = celNum2 *1094;
        outputL.innerHTML = LengthKtoY;
        console.log("Now you selected Kilometer and Yard");
    } else if (~sele2.indexOf('Kilometer') && ~outPutsele2.indexOf('Foot')) {
        LengthKtoF = celNum2 * 3281;
        outputL.innerHTML = LengthKtoF;
        console.log("Now you selected Kilometer and Foot");
    } else if (~sele2.indexOf('Kilometer') && ~outPutsele2.indexOf('Inch')) {
        LengthKtoI = celNum2 * 39370;
        outputL.innerHTML = LengthKtoI; 
        console.log("Now you selected Kilometer and Inch");
    }
/********************************Meter*************************************** */    
    else if (~sele2.indexOf('Meter') && ~outPutsele2.indexOf('Yard')) {
        LengthMtoY = celNum2 * 1.094;
        outputL.innerHTML = LengthMtoY;
        console.log("Now you selected Meter and Yard");
    } else if (~sele2.indexOf('Meter') && ~outPutsele2.indexOf('Foot')) {
        LengthMtoF = celNum2 * 3.281;
        outputL.innerHTML = LengthMtoF;
        console.log("Now you selected Meter and Foot");
    } else if (~sele2.indexOf('Meter') && ~outPutsele2.indexOf('Inch')) {
        LengthMtoI = celNum2 * 39.37;
        outputL.innerHTML = LengthMtoI; 
        console.log("Now you selected Meter and Inch");
    }
/********************************Centimeter*************************************** */
    else if (~sele2.indexOf('Centimeter') && ~outPutsele2.indexOf('Yard')) {
        LengthCtoY = celNum2 /91.44;
        outputL.innerHTML = LengthCtoY; 
        console.log("Now you selected Centimeter and Yard");
    } else if (~sele2.indexOf('Centimeter') && ~outPutsele2.indexOf('Foot')) {
        LengthCtoF = celNum2 / 30.48;
        outputL.innerHTML = LengthCtoF; 
        console.log("Now you selected Centimeter and Foot");
    } else if (~sele2.indexOf('Centimeter') && ~outPutsele2.indexOf('Inch')) {
        LengthCtoI = celNum2 / 2.54;
        outputL.innerHTML = LengthCtoI; 
        console.log("Now you selected Centimeter and Inch");
    }
/********************************Millimeter*************************************** */
    else if (~sele2.indexOf('Millimeter') && ~outPutsele2.indexOf('Yard')) {
        LengthMmtoY = celNum2 / 914.4;
        outputL.innerHTML = LengthMmtoY; 
        console.log("Now you selected Millimeter and Yard");
    } else if (~sele2.indexOf('Millimeter') && ~outPutsele2.indexOf('Foot')) {
        LengthMmtoF = celNum2 / 304.8;
        outputL.innerHTML = LengthMmtoF;
        console.log("Now you selected Millimeter and Foot");
    } else if (~sele2.indexOf('Millimeter') && ~outPutsele2.indexOf('Inch')) {
        LengthMmtoI = celNum2 / 25.4;
        outputL.innerHTML = LengthMmtoI; 
        console.log("Now you selected Millimeter and Inch");
    }    
}

convert2.addEventListener('click', convertL);

/*------------------------------Weight------------------------------*/ 
const convert3 = document.querySelector('.Convert3');

function convertW(){
const celNum3 = document.querySelector('.numinput3').value;
const outputW = document.querySelector('.output3');
const sele3 = document.querySelector('.sele3').value;
const outPutsele3 = document.querySelector('.outputsele3').value;

    if (~sele3.indexOf('Gram') && ~outPutsele3.indexOf('Ounce')) {
        weightGtoO = celNum3 / 28.35;
        outputW.innerHTML = weightGtoO;
        console.log("Now you selected Gram and Ounce");
    } else if (~sele3.indexOf('Gram') && ~outPutsele3.indexOf('Pound')) {
        weightGtop = celNum3 / 453.6;
        outputW.innerHTML = weightGtop;
        console.log("Now you selected Gram and Pound");
    } else if (~sele3.indexOf('Kilogram') && ~outPutsele3.indexOf('Ounce')) {
        weightKtoO = celNum3 * 35.274;
        outputW.innerHTML = weightKtoO;
        console.log("Now you selected Kilogram and Ounce");
    } else if (~sele3.indexOf('Kilogram') && ~outPutsele3.indexOf('Pound')) {
        weightKtoO = celNum3 * 2.205;
        outputW.innerHTML = weightKtoO;
        console.log("Now you selected Kilogram and Pound");
    }
}

convert3.addEventListener('click',convertW);

/*------------------------------Area------------------------------*/ 
const convert5 = document.querySelector('.Convert5');

function convertA() {
    const celNum5 = document.querySelector('.numinput5').value;
    const outputA = document.querySelector('.output5');
    const sele5 = document.querySelector('.sele5').value;
    const outPutsele5 = document.querySelector('.outputsele5').value;

    if (~sele5.indexOf('Skilometer') && ~outPutsele5.indexOf('Smile')) {
        areaKtoM= celNum5 / 2.59;
        outputA.innerHTML = areaKtoM;
    }  else if (~sele5.indexOf('Skilometer') && ~outPutsele5.indexOf('Hectar')) {
        areaKtoH = celNum5 *100;
        outputA.innerHTML = areaKtoH;
    } else if (~sele5.indexOf('Skilometer') && ~outPutsele5.indexOf('Acre')) {
        areaKtoA = celNum5 * 247.1;
        outputA.innerHTML = areaKtoA;
    } 

    else if (~sele5.indexOf('Smeter') && ~outPutsele5.indexOf('Syard')) {
        weightMtoY = celNum5 *1.196;
        outputA.innerHTML = weightMtoY;
    } else if (~sele5.indexOf('Smeter') && ~outPutsele5.indexOf('Sfoot')) {
        weightMtoF = celNum5 * 10.764;
        outputA.innerHTML = weightMtoF;
    } else if (~sele5.indexOf('Smeter') && ~outPutsele5.indexOf('Sinch')) {
        weightMtoI = celNum5 * 1550;
        outputA.innerHTML = weightMtoI;
    } else if (~sele5.indexOf('Smeter') && ~outPutsele5.indexOf('Acre')) {
        weightMtoA = celNum5 /4047;
        outputA.innerHTML = weightMtoA;
    } else {
        outputA.innerHTML = ('‼');
    }

}

convert5.addEventListener('click', convertA);