const AccountName=document.getElementById("userInfo")
const logoutbtn=document.getElementById('logoutbtn')
const APIlink="http://localhost:5000/api/v1/user/"

var username=null

const authenticate=async function(){

  await fetch(APIlink+"auth/",{
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                credentials:'include'
            }).then(res => res.json())
            .then(res => {
              console.log(res)
              if(!res.success){
                  window.location.replace("./sign_in.html")
              }else{
                console.log(String(res.user),"LL")
                AccountName.innerText=res['user']
                  username=res['user']
                  console.log("confirm")
              }
            })
            .catch(err=>{
              console.log(err)
              window.location.replace("./sign_in.html")
            }); 
    

}


authenticate()

if(logoutbtn != null){
  logoutbtn.onclick = async function(){
    await fetch(APIlink+"logout/",{
          method:'GET',
          credentials:'include'
          }).then(res => res.json())
          .then(res => {
            console.log(res)
            if(res.success){
              window.location.replace("./sign_in.html")
            }
          })
          .catch(err=>{
            console.log(err)
          }); 
  }
}
var plan_name="free_plan"
var total_bill=0
var daysSelected=[false,false,false,false,false,false,false]


//Pace your order section...

var coffee_on=false;
var chai_on=false;
var Juice_on=false;

const coffee_option=document.getElementById("coffee_order");
const coffee_list=document.getElementById("coffee_list");

const chai_option=document.getElementById("chai_order");
const chai_list=document.getElementById("chai_list");

const Juice_option=document.getElementById("Juice_order");
const Juice_list=document.getElementById("Juice_list");

coffee_option.onclick=function() {clicked("coffee_order")};
chai_option.onclick=function() {clicked("chai_order")};
Juice_option.onclick=function() {clicked("Juice_order")};

function clicked(id){
    if(id=="coffee_order"){
        coffee_on=!coffee_on;
        if(coffee_on){
            coffee_list.style.display="block";
        }else{
            coffee_list.style.display="none";
        }
    }

    if(id=="chai_order"){
        chai_on=!chai_on;
        if(chai_on){
            chai_list.style.display="block";
        }else{
            chai_list.style.display="none";
        }
    }

    if(id=="Juice_order"){
        Juice_on=!Juice_on;
        if(Juice_on){
            Juice_list.style.display="block";
        }else{
            Juice_list.style.display="none";
        }
    }
}

//capture quantity....


const chai_items={"qt_chai_item1":0,"qt_chai_item2":0,"qt_chai_item3":0,"qt_chai_item4":0,"qt_chai_item5":0,
"qt_chai_item6":0,"qt_chai_item7":0,"qt_chai_item8":0,"qt_chai_item9":0,"qt_chai_item10":0}

const coffee_items={"qt_coffee_item1":0,"qt_coffee_item2":0,"qt_coffee_item3":0,"qt_coffee_item4":0,"qt_coffee_item5":0,
"qt_coffee_item6":0,"qt_coffee_item7":0,"qt_coffee_item8":0,"qt_coffee_item9":0,"qt_coffee_item10":0}

const Juice_items={"qt_Juice_item1":0,"qt_Juice_item2":0,"qt_Juice_item3":0,"qt_Juice_item4":0,"qt_Juice_item5":0,
"qt_Juice_item6":0,"qt_Juice_item7":0,"qt_Juice_item8":0,"qt_Juice_item9":0,"qt_Juice_item10":0}


assignfn();
fetchBillingInfo();
setplan()

async function setplan(){

    await fetch(APIlink+"plan",{
        method:'GET',
        credentials: 'include' ,// allow cookie headers,
        mode:'cors'
    }).then(res => res.json())
    .then(res => {
      if (res.success ){                                                        
        data=res.data
        plan_name=data
        console.log(plan_name)
      }
    })
    .catch(err=>{
        console.log(err)
    });

    //Plans Sections.....
    const free_plan_btn=document.getElementById("free_button")
    const pro_plan_btn=document.getElementById("pro_button")
    const ultimate_plan_btn=document.getElementById("ultimate_button")

    const free_plan=document.getElementById("free_plan")
    const upgraded_plan=document.getElementById("pro_plan")


    if(plan_name=="free"){
        upgraded_plan.disabled=true
        free_plan.disabled=false
        upgraded_plan.style.backgroundColor="rgb(130, 130, 130)"
        free_plan.style.backgroundColor="transparent"

        free_plan_btn.style.display="block";
        pro_plan_btn.style.display="block";
        pro_plan_btn.textContent='Upgrade Plan';
        ultimate_plan_btn.textContent='Upgrade Plan';
        free_plan_btn.textContent='Current Plan';
        pro_plan_btn.onclick=function(){clicked2(50)};
        ultimate_plan_btn.onclick=function(){clicked2(90)};
    }else if(plan_name=="pro"){
        free_plan.disabled=true
        upgraded_plan.disabled=false
        free_plan.style.backgroundColor="rgb(130, 130, 130)"
        upgraded_plan.style.backgroundColor="transparent"

        free_plan_btn.style.display="none";
        pro_plan_btn.style.display="block";
        ultimate_plan_btn.textContent='Upgrade Plan';
        pro_plan_btn.textContent='Current Plan';
        ultimate_plan_btn.onclick=function(){clicked2(90)};
    }else if(plan_name=="ultimate"){
        free_plan.disabled=true
        upgraded_plan.disabled=false
        free_plan.style.backgroundColor="rgb(130, 130, 130)"
        upgraded_plan.style.backgroundColor="transparent"

        free_plan_btn.style.display="none";
        pro_plan_btn.style.display="none";
        pro_plan_btn.textContent='Upgrade Plan';
        ultimate_plan_btn.textContent='Current Plan';
    }
}

async function fetchBillingInfo(){

    await fetch(APIlink+"cart",{
        method:'GET',
        credentials: 'include' ,// allow cookie headers,
        mode:'cors'
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      if (res.success ){
        data=res.data
        for (let item of data){
            let item_element= document.getElementsByName(item.substring(0,item.indexOf(":")))[0]
            item_element.value=Number(item.substring(item.indexOf(":")+1))
            chai_items[item.substring(0,item.indexOf(":"))]=item_element.value
            count_qt(item_element,item.substring(0,item.indexOf(":")),item.substring(item.indexOf('_')+1,item.lastIndexOf('_')))
        }
      }
    })
    .catch(err=>{
        console.log(err)
    });
}

function assignfn(){
    for(let key =1 ; key<=10;key ++){
        const element=document.getElementsByName(`qt_chai_item${key}`)[0];
        let dictkey=`qt_chai_item${key}`
        element.onkeyup=function() {count_qt(element,dictkey,"chai")};
        element.onchange=function() {count_qt(element,dictkey,"chai")};
        element.onkeydown=function() {count_qt(element,dictkey,"chai")};
        }
    for(let key =1 ; key<=10;key ++){
        const element=document.getElementsByName(`qt_coffee_item${key}`)[0];
        let dictkey=`qt_coffee_item${key}`
        element.onkeyup=function() {count_qt(element,dictkey,"coffee")};
        element.onchange=function() {count_qt(element,dictkey,"coffee")};
        element.onkeydown=function() {count_qt(element,dictkey,"coffee")}; 
       }
    for(let key =1 ; key<=10;key ++){
        const element=document.getElementsByName(`qt_Juice_item${key}`)[0];
        let dictkey=`qt_Juice_item${key}`
        element.onkeyup=function() {count_qt(element,dictkey,"Juice")};
        element.onchange=function() {count_qt(element,dictkey,"Juice")};
        element.onkeydown=function() {count_qt(element,dictkey,"Juice")};
    }
}

const alertbox=document.getElementsByClassName("alert")[0];
var coffee_ordered,Juice_ordered,chai_ordered;

function count_qt(element,key,name){
    const value=element.value
    if(value<0 || value>50){
          alertbox.style.opacity="1";
          alertbox.style.display="block";
          setTimeout(function(){alertbox.style.display="none"}, 2000);
          element.value=element.defaultValue;
    }
    else{
        if(name=="chai"){
            chai_items[key]=value;
        }else if(name=="coffee"){
            coffee_items[key]=value;
        }else if(name=="Juice"){
            Juice_items[key]=value;
        }
        const parent=element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        coffee_ordered=false;chai_ordered=false;Juice_ordered=false;
        for(var i=1;i<=10;i++){
            
            if(coffee_items[`qt_coffee_item${i}`]>0)
                {coffee_ordered=true;}
            if(chai_items[`qt_chai_item${i}`]>0)
                    {chai_ordered=true;}
            if(Juice_items[`qt_Juice_item${i}`]>0)
                    {Juice_ordered=true;}
            if(coffee_ordered && chai_ordered && Juice_ordered)
                break;
        }
        if(name=="coffee"){
            if(coffee_ordered){
                parent.style['boxShadow']="green 0px 0px 4px 4px";
            }else{
                parent.style['boxShadow']="#e6e4e4 0px 0px 4px 4px";
            }
        }
            
        else if(name=="chai"){
            if(chai_ordered){
                parent.style['boxShadow']="green 0px 0px 4px 4px";
            }else{
                parent.style['boxShadow']="#e6e4e4 0px 0px 4px 4px";
            }
        }
        else if(name=="Juice"){
            if(Juice_ordered){
                parent.style['boxShadow']="green 0px 0px 4px 4px";
            }else{
                parent.style['boxShadow']="#e6e4e4 0px 0px 4px 4px";
            }
        }
    }
}


//Manage plans...
const radio_today=document.getElementsByName("order_type1")[0]
radio_today.checked=true;
const radio_week=document.getElementsByName("order_type2")[0]

radio_today.onclick=function(){
    if(radio_today.checked){
        radio_today.checked=true;
        radio_week.checked=false;
    }
}
radio_week.onclick=function(){
    if(radio_week.checked){
        radio_week.checked=true;
        radio_today.checked=false;
    }
}

//Manage Plans...
const dayslist=document.getElementsByClassName("days")
days=[]

for(var i =0;i<7;i++){
    dayslist[i].style.cursor="pointer"
        // console.log(dayslist[i].textContent,"l")

    dayslist[i].onclick=function(){
        console.log(this.textContent)
        if(this.style.backgroundColor=="rgb(223, 217, 200)")
            {
                this.style.backgroundColor="	#A7F432";
                daysSelected[i]=true
            }
            else{
                this.style.backgroundColor="#dfd9c8";
                daysSelected[i]=false
            }
    }
}


//Manage billings.....
document.getElementById("btn_submit").onclick=function(){clicked2(0,"submit")}
document.getElementById("btn_submit_cart").onclick=function(){clicked2(0,"cart")}

function clicked2(amt,btnName){
    total_bill+=amt
    if(chai_ordered)
    {
        for(var i=1;i<=10;i++){
            total_bill+=chai_items[`qt_chai_item${i}`]
        }
    }
    if(coffee_ordered)
    {
        for(var i=1;i<=10;i++){
            total_bill+=coffee_items[`qt_coffee_item${i}`]
        }
    }
    if(Juice_ordered)
    {
        for(var i=1;i<=10;i++){
            total_bill+=Juice_items[`qt_Juice_item${i}`]
        }
    }
    var no_of_days
    for(var i=0;i<7;i++){
        if(daysSelected[i]){
            no_of_days++;
        }

    }
    if(radio_week.checked)
        total_bill*=no_of_days;
    if(total_bill!=0)
        if(btnName=="submit"){
            window.open("../html/payment.html","_self")
        }
        else    
            {alert("Added to Cart")
        addToCart()}
    else{
        alert("Please select atleast one item.")
    }
}

function addToCart(){
    cart=[]
    let y=0
    for(let key =1 ; key<=10;key ++){
        var element=document.getElementsByName(`qt_chai_item${key}`)[0];
        if (element.value >0){
            cart[y++]=`qt_chai_item${key}`+":"+element.value
        }
        element=document.getElementsByName(`qt_coffee_item${key}`)[0];
        if (element.value >0){
            cart[y++]=`qt_coffee_item${key}`+":"+element.value
        }
        element=document.getElementsByName(`qt_Juice_item${key}`)[0];
        if (element.value >0){
            cart[y++]=`qt_Juice_item${key}`+":"+element.value
        }
        }
    console.log(cart)

    fetch(APIlink+"cart",{
        method:'PUT',
        credentials: 'include' ,// allow cookie headers,
        mode:'cors',
        headers:{
            'Accept':'*/*',
            'Accept-Encoding':'gzip, deflate, br',
            'Accept-Language':'en-US,en;q=0.9',
            'Content-Type':'application/json',
            },
            body:JSON.stringify({
                "username":username,
                "cart":cart
            })
    }).then(res => res.json())
    .then(res => {
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    });
}



