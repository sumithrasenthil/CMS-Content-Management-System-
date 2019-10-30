var c=document.getElementsByClassName("buttons");
var b=c[0].getElementsByTagName("button");
var m=document.getElementById("Menu");
var M=document.getElementsByClassName("Menu")[0];
M.style.visibility="hidden";
var choice=null;
for(i=0;i<b.length;i++)
{
    if(b[i].innerHTML=="Change"){
        b[i].addEventListener("click",change);
    }
    else if(b[i].innerHTML=="Submit"){
        b[i].addEventListener("click",submit);    
        }
    else{
    b[i].addEventListener("click",enable);
    }
}
function enable()
{
    for(i=0;i<b.length;i++){
    if(b[i].innerHTML!="Change"){
        b[i].disabled=true;
    }
}
    this.disabled=false;
    choice=this.innerHTML;
    document.getElementById("S").disabled=false;
    document.getElementById("V").disabled=false;
}
function change(){
    var ip=document.getElementsByClassName("Input");
    var op=document.getElementsByClassName("Output");
    for (i=0;i<ip.length;i++){
        ip[i].disabled=false;
    }
    for (i=0;i<op.length;i++){
        op[i].disabled=true;
    }
}
m.addEventListener("click",visible);
function visible(){
    if(M.style.visibility=="hidden")
    M.style.visibility="visible";
    else
    M.style.visibility="hidden";
}
