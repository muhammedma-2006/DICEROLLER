 
function random(){
    const numOfDice = document.getElementById("numOfDice").value;

    const diceresult = document.getElementById("diceresult");
    const diceImage= document.getElementById("diceimage");

    const result = [];
    const image = [];

    for(let i=0; i<numOfDice; i++){
        const value = Math.floor(Math.random() * 6 )+ 1;
        result.push(value);
        image.push(`<img src="image/${value}.png">`);

    }
    diceresult.textContent = `dice: ${result.join(',')}`;
    diceImage.innerHTML = image.join('');
}
