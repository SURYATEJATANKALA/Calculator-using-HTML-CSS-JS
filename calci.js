function clearScreen(){
    document.getElementById("result").value="";
}
function num(value) {
    document.getElementById("result").value += value;            
}
function ans() {
    var a=document.getElementById("result").value;
    var b=eval(a);
    document.getElementById("result").value=b;
}