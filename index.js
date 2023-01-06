const text = document.querySelector(".text")
const underscore = document.querySelector(".underscore")
// console.log(underscore)
const fullText = "Checking the network cables, modem and routerking";
var str = []
for(let i=1;i<=fullText.length;i++){
    str.push(fullText.slice(0,i))
}
for(let i=1;i<fullText.length;i++){
    str.push(fullText.slice(0,fullText.length-i))
}
console.log(str)
function show(){
   
    let i=0;
    let j=0;
    setInterval(()=>{
        if(i===str.length+1){
            i=0
        }
        text.textContent=str[i]
        i++
    },200)

    setInterval(()=>{
        if(j===5) j=0
        if(j===0){ underscore.style.opacity=0}
        if(j===1){ underscore.style.opacity=1}
        if(j===2){ underscore.style.opacity=0.5}
        if(j===3){ underscore.style.opacity=0.75}
        if(j===4){ underscore.style.opacity=0.25}
        
        j++
    },100)
   

     
    

}
show()