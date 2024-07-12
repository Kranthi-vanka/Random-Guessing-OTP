const userInput=document.querySelector('.input');
const checkBtn=document.querySelector('.checkBtn');
const message=document.querySelector('.message');
window.onload=()=> random=Math.floor(Math.random()*10);

    
    let length=4;
    let otp='';
    for(i=0;i<length;i++){
        random=Math.floor(Math.random()*10);
        otp=otp+random;
    }
    console.log(otp)


checkBtn.addEventListener('click',()=>{
    let uservalue=userInput.value
    if (uservalue===otp){
        message.textContent=`OTP matched with${otp}`
    }else{
        message.textContent=`OTP not matched with ${otp}`
    }
})

