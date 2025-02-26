

const countLabel = document.getElementById('countLabel');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let interval;
let count = 0;


btn1.onclick = function(){
        count ++;
        countLabel.textContent = count;
}

btn1.onmousedown = btn1.ontouchstart = function(){
        interval = setInterval(() => {
                count ++;
                countLabel.textContent = count;
        }, 100);
}

btn1.onmouseup = btn1.onmouseleave = btn1.ontouchend = function(){
        interval = clearInterval(interval);
}


btn2.onclick = function(){
        count = 0;
        countLabel.textContent = count;
}

btn3.onclick = function(){
        if(count > 0){
                count --;
                countLabel.textContent = count;
        }
}

btn3.onmousedown = btn3.ontouchstart = function(){
        interval = setInterval(() => {
                if(count > 0){
                        count --;
                        countLabel.textContent = count;
                }
        }, 100);
}

btn3.onmouseup = btn3.onmouseleave = ontouchend = function(){
        interval = clearInterval(interval);
}