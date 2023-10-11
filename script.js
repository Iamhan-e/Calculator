const userInp= document.getElementById("inp")
var expression= ''

function press(num){
    expression+= num;
    userInp.value= expression
}

function equalto(){
    userInp.value = eval (expression) 
    expression= ''
}

function erase(){
    expression=''
    userInp.value = expression; 
}