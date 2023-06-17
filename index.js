const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}
wrapGifts(gifts);

const fNames = ["Guadalupe", "Ollie", "Aki"];

function writeCards (fNames) {
    for (let i = 0; i < fNames.length; i++)
    console.log (`Thank you, ${fNames[i]},for the wonderful surprise gift!`)
}
writeCards(fNames)


const number = [10,9,8,7,6,5,4,3,2,1,0]
function countDown (number){
    let i = 0;
    while (i < number.length){
        console.log(number[i]);
        i++;    
    }
    return number
}
countDown(number)