function sliderFun(){
    let slider = document.getElementsByClassName("slider-circle")[0];
    if(slider.style.left == "0px" || slider.style.right ===""){
        slider.style.left=null;
        slider.style.right="0px";
        text.style.color="black";
    }
    
else if(slider.style.right == "0px"){
    slider.style.right=null;
    slider.style.left="0px";
    // text.style.color="black";
}

}
// sliderFun();
const text = document.querySelector('.text');

let btn = document.getElementById("dark");
console.log(btn);
const body = document.body;
let num = 0;
btn.addEventListener('click',()=>{
    body.classList.toggle('change')
    if(num%2==0){text.style.color="white";
    num++}
    else {
        text.style.color = "black"
        num--;
    }

})