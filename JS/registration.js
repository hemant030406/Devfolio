

const infos=document.getElementsByClassName("answer_input")
const registration_btn=document.getElementById("submit")
const message_box=document.getElementById("message")

const APIlink="http://localhost:5000/api/v1/user/"


registration_btn.onclick=async function() {
  const username=document.getElementById("Iusername")
  const name=document.getElementById("Iname")
  const contact=document.getElementById("Icontact")
  const gender=document.getElementById("Igender")
  const age=document.getElementById("Iage")
  const email=document.getElementById("Iemail")
  const password=document.getElementById("Ipassword")
  const Cpassword=document.getElementById("ICpassword")
  let above18=false

  var isempty=false
  for(var i=0;i<7;i++){
    if(infos[i].value=="" )
          isempty=true;
  }

  if( age.value == "on"){
    above18=true
  }

  if(isempty){
    message_box.innerText="Please fill all the infos." 
    window.scrollTo(0,0)
    message_box.style.display="block"
    setTimeout(() => {
      message_box.style.display="none"
    }, 2000);
    return
  }

  if (password.value != Cpassword.value){
    message_box.innerText="Passwords didn't Match"
    window.scrollTo(0,0)
    message_box.style.display="block"
    setTimeout(()=>{
      message_box.style.display="none"
    },2000)
    return
  }

  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(infos[4].value))
  {}
  else{
    message_box.innerText="Enter a valid email." 
      window.scrollTo(0,0)
      message_box.style.display="block"
      setTimeout(() => {
        message_box.style.display="none"
      }, 2000);
      return
  }

  if(contact.value.length!=10 || /^[a-z,A-z]+$/.test(contact.value)){
    message_box.innerText="Enter a valid number" //+infos[1].value.length+ /^[a-z,A-z]+$/.test(infos[1].value)
    window.scrollTo(0,0)
    message_box.style.display="block"
    setTimeout(() => {
      message_box.style.display="none"
    }, 2000);
    return
  }

  console.log("Posting...")
  await fetch(APIlink+"", {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name":name.value,
      "username":username.value,
      "contact":contact.value,
      "email":email.value,
      "password":password.value,
      "above18":above18
    })
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      if (res.success){
        window.location.href=("./sign_in.html")
      }
      else{
        window.onbeforeunload = function() {
          return "Registration UnsuccessFull";
        };
        window.location.reload()
      }
    })
    .catch(err=>{
      console.log(err)
      window.location.reload()
    }); 

}
