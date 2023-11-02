function showcart0(){
    document.getElementsByClassName("hiddenText")[0].style.display="block";
}
function hidecart0(){
    document.getElementsByClassName("hiddenText")[0].style.display="none";
}
function showcart1(){
    document.getElementsByClassName("hiddenText")[1].style.display="block";
}
function hidecart1(){
    document.getElementsByClassName("hiddenText")[1].style.display="none";
}
function showcart2(){
    document.getElementsByClassName("hiddenText")[2].style.display="block";
}
function hidecart2(){
    document.getElementsByClassName("hiddenText")[2].style.display="none";
}
function showcart3(){
    document.getElementsByClassName("hiddenText")[3].style.display="block";
}
function hidecart3(){
    document.getElementsByClassName("hiddenText")[3].style.display="none";
}
function showcart4(){
    document.getElementsByClassName("hiddenText")[4].style.display="block";
}
function hidecart4(){
    document.getElementsByClassName("hiddenText")[4].style.display="none";
}
function showcart5(){
    document.getElementsByClassName("hiddenText")[5].style.display="block";
}
function hidecart5(){
    document.getElementsByClassName("hiddenText")[5].style.display="none";
}
function showcart6(){
    document.getElementsByClassName("hiddenText")[6].style.display="block";
}
function hidecart6(){
    document.getElementsByClassName("hiddenText")[6].style.display="none";
}
function showcart7(){
    document.getElementsByClassName("hiddenText")[7].style.display="block";
}
function hidecart7(){
    document.getElementsByClassName("hiddenText")[7].style.display="none";
}
function showcart8(){
    document.getElementsByClassName("hiddenText")[8].style.display="block";
}
function hidecart8(){
    document.getElementsByClassName("hiddenText")[8].style.display="none";
}
function showcart9(){
    document.getElementsByClassName("hiddenText")[9].style.display="block";
}
function hidecart9(){
    document.getElementsByClassName("hiddenText")[9].style.display="none";
}

function showdetails0(){
    document.getElementsByClassName("hiddenDetails")[0].style.display="block";
}
function hidedetails0(){
    document.getElementsByClassName("hiddenDetails")[0].style.display="none";
}
function showdetails1(){
    document.getElementsByClassName("hiddenDetails")[1].style.display="block";
}
function hidedetails1(){
    document.getElementsByClassName("hiddenDetails")[1].style.display="none";
}
function showdetails2(){
    document.getElementsByClassName("hiddenDetails")[2].style.display="block";
}
function hidedetails2(){
    document.getElementsByClassName("hiddenDetails")[2].style.display="none";
}
function showdetails3(){
    document.getElementsByClassName("hiddenDetails")[3].style.display="block";
}
function hidedetails3(){
    document.getElementsByClassName("hiddenDetails")[3].style.display="none";
}
function showdetails4(){
    document.getElementsByClassName("hiddenDetails")[4].style.display="block";
}
function hidedetails4(){
    document.getElementsByClassName("hiddenDetails")[4].style.display="none";
}
function showdetails5(){
    document.getElementsByClassName("hiddenDetails")[5].style.display="block";
}
function hidedetails5(){
    document.getElementsByClassName("hiddenDetails")[5].style.display="none";
}
function showdetails6(){
    document.getElementsByClassName("hiddenDetails")[6].style.display="block";
}
function hidedetails6(){
    document.getElementsByClassName("hiddenDetails")[6].style.display="none";
}
function showdetails7(){
    document.getElementsByClassName("hiddenDetails")[7].style.display="block";
}
function hidedetails7(){
    document.getElementsByClassName("hiddenDetails")[7].style.display="none";
}
function showdetails8(){
    document.getElementsByClassName("hiddenDetails")[8].style.display="block";
}
function hidedetails8(){
    document.getElementsByClassName("hiddenDetails")[8].style.display="none";
}
function showdetails9(){
    document.getElementsByClassName("hiddenDetails")[9].style.display="block";
}
function hidedetails9(){
    document.getElementsByClassName("hiddenDetails")[9].style.display="none";
}

function confirmAdding(){
    if(confirm("Do you want to add it to your cart?")){
        setTimeout(function() {if (confirm("Item added to your cart.Want to view?")){
            window.location.href="cart.html";
        }}, 500);
    }
}
