const containerELe = document.querySelector(".container")


const career = ["Developer", "Gamer", "Traveller", "FreeLancer"];    //Created an array of word to include.

let careerIndex = 0;
let charIndex = 0;

update();

function update() 
{
    charIndex++;
    containerELe.innerHTML = `<h1>I am a ${career[careerIndex].slice(0, charIndex)}</h1>`                  

    
    if (charIndex === career[careerIndex].length) {
        careerIndex++;              //careerIndex++ here index of career is moving from developer to gamer, traveller, freelancer with help of index.
        charIndex=0;
    }
    setTimeout(update, 300);       //Function update should execute after 300 delay.
    


}

