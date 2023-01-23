const incrementBtn= document.querySelector('.incrementBtn');
const digit=document.querySelector('.digits');
//console.log(incrementBtn, digit)
const colorBtn=document.querySelector('.colorBtn');


incrementBtn.addEventListener('click',()=>{

    digit.innerHTML=+(digit.innerHTML)+1;
})

colorBtn.addEventListener('click',()=>{
    incrementBtn.style.background="#17cdcd";
})