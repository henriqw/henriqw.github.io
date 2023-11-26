let rankPoints;
let mD10;
let Rank;
let mD10Wins;

rankPoints = 6666;
Rank = calculateRank(rankPoints);
window.innerWidth = 200

function calculateRank(x){
    if (mD10 === true){
        if (x<1000){
            Rank = "Ruim";
            return Rank
        } else if (x>=1000 && x<3000){
            Rank = "Médio";
            return Rank 
        } else if (x>=3000){
            Rank = "Bom";
            return Rank
        }
    }  else {
        Rank = "não fez md10";
    }               
}

function toggleMD10Button(x){
    if (x == true){
        document.querySelector("#trueButton").style.backgroundColor = "green"
        document.querySelector("#trueButton").style.color = "white"
        document.querySelector("#falseButton").style.backgroundColor = "lightgrey"
        document.querySelector("#falseButton").style.color = "black"
        mD10 = true
    } else if (x == false){
        document.querySelector("#falseButton").style.backgroundColor = "red"
        document.querySelector("#falseButton").style.color = "white"
        document.querySelector("#trueButton").style.backgroundColor = "lightgrey"
        document.querySelector("#trueButton").style.color = "black"
        mD10 = false
    }
}

function showRangeValue (){
    mD10Wins = document.querySelector("#mD10Range").value;
    document.querySelector("#rangeValue").innerHTML = mD10Wins;
}

document.addEventListener("click", function(){
    if (mD10Wins != 0 && mD10 != undefined ) {
        document.querySelector("#message").innerHTML = "Tu é " + Rank;
    }
})


/* bibo nunes */