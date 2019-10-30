var I=document.querySelectorAll(".Input");
var O=document.querySelectorAll(".Output");
var C=document.querySelector(".Change");
var m=document.querySelector(".Menu");
var M=document.querySelector("#Menu");
C.addEventListener("click",change);
M.addEventListener("click",visible);
m.style.visibility="hidden";
var choice=null;
for(i=0;i<I.length;i++)
{
    I[i].addEventListener("click",enable);
}
function enable()
{
    for(i=0;i<I.length;i++){
        I[i].disabled=true;
}
    this.disabled=false;
    choice=this.innerHTML;
    for(i=0;i<O.length;i++){
        O[i].disabled=false;
}}
function change(){
    for (i=0;i<I.length;i++){
        I[i].disabled=false;
    }
    for (i=0;i<O.length;i++){
        O[i].disabled=true;
    }}
function visible(){
    if(m.style.visibility=="hidden")
    m.style.visibility="visible";
    else
    m.style.visibility="hidden";
}
