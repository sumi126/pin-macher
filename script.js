document.getElementById("don't-match").style.display = "none";
document.getElementById("match").style.display = "none";

function pinGenerate(){
    let value = Math.ceil(10000*Math.random());
    let num ="" +value;
    if(num.length<4){
      value = 1000+value;
    }
    document.getElementById("input-text").style.textAlign = "center";
    document.getElementById("input-text").value = value;
    const btn = document.getElementById("submit-btn").disabled;
    if(btn){
        document.getElementById("submit-btn").disabled = false;
        document.getElementById("submit-btn").style.color = "white";
        left = 3;
        document.getElementById("action-left").innerText = left + " try left";
    }
    
}
let array = [];
function takeInput(num){
    array.push(num);
    let arrayStr = array.join("");
    document.getElementById("submit-text").value = arrayStr;
}
function clearText(){
    document.getElementById("submit-text").value = "";
    array = [];
}
function back(){
    array.pop();
    let arrayStr = array.join("");
    document.getElementById("submit-text").value = arrayStr;
}
let left = 3;
function submitText(){
    const input = document.getElementById("input-text").value;
    const output = document.getElementById("submit-text").value;
   
    if(input === output){
        document.getElementById("match").style.display = "block";
        document.getElementById("don't-match").style.display = "none";
        document.getElementById("action-left").style.display = "none";
        left = 3;
    }   
    else{
        document.getElementById("don't-match").style.display = "block";
        document.getElementById("match").style.display = "none";

        document.getElementById("submit-text").value = "";
        array = [];   
        
        if(left>0){
            left --;
            document.getElementById("action-left").innerText = left + " try left";
        }
        else{
            document.getElementById("submit-btn").style.color = "gray";
            document.getElementById("submit-btn").disabled = true;
        }
    }
}