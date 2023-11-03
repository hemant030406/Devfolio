const username="Alonot"
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

const chai_items=[{"qt_chai_item1":0},{"qt_chai_item2":0},{"qt_chai_item3":0},{"qt_chai_item4":0},{"qt_chai_item5":0}];

const coffee_items=[{"qt_coffee_item1":0},{"qt_coffee_item2":0},{"qt_coffee_item3":0}];

const Juice_items=[{"qt_Juice_item1":0},{"qt_Juice_item2":0},{"qt_Juice_item3":0},{"qt_Juice_item4":0},{"qt_Juice_item5":0}];

assignfn();

function assignfn(){
    for(const key of chai_items.keys()){
        const element=document.getElementsByName(`qt_chai_item${key+1}`)[0];
        element.onkeyup=function() {count_qt(element,key,"chai")};
        element.onchange=function() {count_qt(element,key,"chai")};
        element.onkeydown=function() {count_qt(element,key,"chai")};
        }
    for(const key of coffee_items.keys()){
        const element=document.getElementsByName(`qt_coffee_item${key+1}`)[0];
        element.onkeyup=function() {count_qt(element,key,"coffee")};
        element.onchange=function() {count_qt(element,key,"coffee")};
        element.onkeydown=function() {count_qt(element,key,"coffee")}; 
       }
    for(const key of Juice_items.keys()){
        const element=document.getElementsByName(`qt_Juice_item${key+1}`)[0];
        element.onkeyup=function() {count_qt(element,key,"Juice")};
        element.onchange=function() {count_qt(element,key,"Juice")};
        element.onkeydown=function() {count_qt(element,key,"Juice")};
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
            chai_items[key][`qt_chai_item${key+1}`]=value;
        }else if(name=="coffee"){
            coffee_items[key][`qt_coffee_item${key+1}`]=value;
        }else if(name=="Juice"){
            Juice_items[key][`qt_Juice_item${key+1}`]=value;
        }
        const parent=element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        coffee_ordered=false;chai_ordered=false;Juice_ordered=false;
        for(var i=0;i<5;i++){
            
            if(coffee_items.length>i){
                if(coffee_items[i][`qt_coffee_item${i+1}`]>0)
                    {coffee_ordered=true;}
            }
            if(chai_items[i][`qt_chai_item${i+1}`]>0)
                    {chai_ordered=true;}
            if(Juice_items[i][`qt_Juice_item${i+1}`]>0)
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
            if(coffee_ordered){
                parent.style['boxShadow']="green 0px 0px 4px 4px";
            }else{
                parent.style['boxShadow']="#e6e4e4 0px 0px 4px 4px";
            }
        }
    }
}

//Plans Sections.....
const free_plan_btn=document.getElementById("free_button")
const pro_plan_btn=document.getElementById("pro_button")
const ultimate_plan_btn=document.getElementById("ultimate_button")

const free_plan=document.getElementById("free_plan")
const upgraded_plan=document.getElementById("pro_plan")

if(plan_name=="free_plan"){
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
}else if(plan_name=="pro_plan"){
    free_plan.disabled=true
    upgraded_plan.disabled=false
    free_plan.style.backgroundColor="rgb(130, 130, 130)"
    upgraded_plan.style.backgroundColor="transparent"

    free_plan_btn.style.display="none";
    pro_plan_btn.style.display="block";
    ultimate_plan_btn.textContent='Upgrade Plan';
    pro_plan_btn.textContent='Current Plan';
    ultimate_plan_btn.onclick=function(){clicked2(90)};
}else if(plan_name=="ultimate_plan"){
    free_plan.disabled=true
    upgraded_plan.disabled=false
    free_plan.style.backgroundColor="rgb(130, 130, 130)"
    upgraded_plan.style.backgroundColor="transparent"

    free_plan_btn.style.display="none";
    pro_plan_btn.style.display="none";
    pro_plan_btn.textContent='Upgrade Plan';
    ultimate_plan_btn.textContent='Current Plan';
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
        console.log(dayslist[i].textContent,"l")

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
document.getElementById("btn_submit").onclick=function(){clicked2(0)}

function clicked2(amt){
    total_bill+=amt
    if(chai_ordered)
    {
        for(var i=0;i<5;i++){
            total_bill+=chai_items[i][`qt_chai_item${i+1}`]
        }
    }
    if(coffee_ordered)
    {
        for(var i=0;i<3;i++){
            total_bill+=coffee_items[i][`qt_coffee_item${i+1}`]
        }
    }
    if(Juice_ordered)
    {
        for(var i=0;i<5;i++){
            total_bill+=Juice_items[i][`qt_Juice_item${i+1}`]
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
        window.open("payment.html","_self")
    else{
        alert("Please select atleast one item.")
    }
}



