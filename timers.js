function countdown(num){
let countTimer = setInterval(function(){

    num --;

    if (num <=0 ) {
clearInterval(countTimer);
        console.log("DONE!");
    }
else {console.log(num);}

}, 1000)}

function randomGame(){

    let num;

    let times = 0;

   let timer =  setInterval(function() {

        num = Math.random();{times ++;}

        if ( num > .75){clearInterval(timer);console.log("It took " + times + " try/tries.");}
    },1000)


}

