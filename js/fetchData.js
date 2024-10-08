function getRandomCountry(){
    const randomCountry = document.getElementById("randomCountry");
    fetch("Data/country.json")
        .then(response => response.json())
        .then(data => {
            let randomNumber = getRandomNumber(data.length);
            randomCountry.innerHTML = data[randomNumber].name.common;
        })
    .catch(error => console.log('error', error)) 
}

function getRandomNumber (maxLength){
    let min = 0;
    let max = maxLength;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function checkIfCorrect(){

    // var counter = document.getElementById("inARow").innerText;
    const capitalGuess = document.getElementById("capitalGuess").value;
    const checkAnswer = document.getElementById("check");
    const countryToCheck = document.getElementById("randomCountry").innerText;

    getCapitalWithCountry(countryToCheck).then(capital => {
        if (capitalGuess.toLowerCase() == capital.toLowerCase()) {
            checkAnswer.innerHTML = "correct";
            // counter ++;
            // document.getElementById("inARow").innerHTML = counter;

        }
        else{
            checkAnswer.innerHTML = `Wrong: The correct answer is: ${capital}`
            // counter = 0;
            // document.getElementById("inARow").innerHTML = counter;

        }
    });  
    getRandomCountry();
}

async function getCapitalWithCountry(country){
    var capital;

    let response = fetch("Data/country.json");
    let data = await (await response).json();

    for (let i = 0; i <= data.length; i++){
        let countryOutput = data[i].name.common;
        if (country == countryOutput){
            capital = data[i].capital[0];
            break;
        }     
    }

    return capital;
}