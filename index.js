let s="0123456789ABCDEF";
let hex="";
function generate()
{
    hex="#";
    for(var i=0;i<6;i++)
    {
        hex+=s[Math.floor(Math.random()*16)];
    }
    document.querySelector(".title").innerHTML=hex;
    document.querySelector("body").style.backgroundColor=hex;
}