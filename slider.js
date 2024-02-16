let left=document.querySelector("#left")
let right=document.querySelector("#right")
let slider=document.querySelector("#slider")

let count=1

right.addEventListener('click',() => {
    if(count==20){
        slider.style.transform=`translateX(${0}px)`
        count=1
    }else{
        slider.style.transform=`translateX(-${(count++)*700}px)`
    }
})

left.addEventListener('click',() => {
    if(count==1){
        slider.style.transform=`translateX(-${19*700}px)`
        count=20
    }else{
        slider.style.transform=`translateX(${-(--count)*700+700}px)`
    }
})