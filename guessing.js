setTimeout(()=>{
    document.getElementById("welcome").style.display = "none";
    document.getElementById("startbt").style.display = "block";
},3000);

document.getElementById("startbt").addEventListener("click",function(){
   document.getElementById("startbt").style.display = "none";
   document.getElementById("number").style.display = "block";
});

let correctnumber =  Math.floor(Math.random()*100) + 1;
document.getElementById("enter").addEventListener("click",function(){
    const userinpt =  parseInt(document.getElementById("userguess").value);
    const resultbox = document.getElementById("result");

    if(userinpt === correctnumber){
        resultbox.textContent ="Hurrah! You Guessed Correctly";
        resultbox.style.color = "#FF4EDB";
        resultbox.style.fontSize = "20px";
        resultbox.style.fontFamily = "'Press Start 2P', system-ui";
        resultbox.style.marginTop = "20px";
    } else if (userinpt > correctnumber){
        resultbox.textContent = "Highhhhhhh";
        resultbox.style.color =  "#ff9900";
        resultbox.style.fontFamily = "'Press Start 2P', system-ui";
        resultbox.style.marginTop = "20px";
        resultbox.style.fontSize ="20px";
    }else{
        resultbox.textContent = "Lowwwwww";
        resultbox.style.color = "#3366ff";
        resultbox.style.fontFamily = "'Press Start 2P', system-ui";
        resultbox.style.fontSize ="20px";
        resultbox.style.marginTop = "20px";
    }

    document.getElementById("userguess").value = "";
})

