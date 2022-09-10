/*This code is for showing first dice random btwn 1 to 6 */
const firstRandonNumber = Math.floor(Math.random()*6)+1;

const firstDiceImage = 'Diceimg/dice' + firstRandonNumber + '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

/*This code is for showing secon dice random btwn 1 to 6 */
const secondRandonNumber = Math.floor(Math.random()*6)+1;

const secondDiceImage = 'Diceimg/dice' + secondRandonNumber + '.png';

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

/*This code is for showing the winner*/
if(firstRandonNumber>secondRandonNumber)
{
    document.querySelector('h2').innerHTML='The Winner Is User 1';
}
else if(firstRandonNumber<secondRandonNumber)
{
    document.querySelector('h2').innerHTML='The Winner Is User 2';
}
else
{
    document.querySelector('h2').innerHTML='Its A Draw';
}