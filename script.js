var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{
    if(age.value=="" || height.value=="" || weight.value==""){
        alert("All fields are required!");
        document.getElementById("submit").removeEventListener("click",countBmi);
    }
    else{
        countBmi();
    }
}
document.getElementById("submit").removeEventListener("click",validateForm)

const countBmi=()=>{
    var p=[age.value, height.value, weight.value];
    form.reset();

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100)
    var result='';

    if (bmi<18.5){
        result='Oops! You are underweight. You gotta add pounds healthfully 😅'
    }
    else if(bmi>=18.5&&bmi<=24.9){
        result='Yay! You are healthy. You can have a pizza or two 😀'
    }
    else if(25<=bmi&&bmi<=29.9){
        result='You gotta cut down your healthy stuff and you will be perfectly healthy 😃'
    }
    else if(bmi>=30){
        result='Obesity alert 😨! No more junk I say ❌'
    }

    var h1=document.createElement("h1");
    var pr=document.createElement("p");

    var t=document.createTextNode(result);

    var b=document.createTextNode('BMI');

    var r=document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.appendChild(b);

    h1.appendChild(r);

    pr.appendChild(t);

    document.body.appendChild(h1);

    document.body.appendChild(pr);

    document.getElementById("submit").removeEventListener("click", countBmi);

    document.getElementById("submit").removeEventListener("click", validateForm);
}

document.getElementById("submit").addEventListener("click", countBmi)