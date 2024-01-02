const btnE1= document.getElementById("btn");
const emojiName1=document.getElementById("emoji-name");

const emoji= []
async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=f1905af1d688c728b9d5353c28d281e3ff1cb854")
  
    data = await response.json()  
    for(let i= 0;i<1500;i++){
        emoji.push({
        emojiName:data[i].character,
        emojiCode:data[i].unicodeName,

        });
    }

   
}
getEmoji();

btnE1.addEventListener("click",() => {
    const randomNum=Math.floor(Math.random()*emoji.length);
    btnE1.innerText= emoji[randomNum].emojiName;
    emojiName1.innerText= emoji[randomNum].emojiCode;
});