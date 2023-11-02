
const user=document.getElementById('your_name');
const password=document.getElementById("your_password")
const message_box=document.getElementById("message");
const submit_btn=document.getElementById("submit");

const APIlink="http://localhost:5000/api/v1/user/"

submit_btn.onclick= async function() {
        var isempty=false;
        console.log("checking")
        if(user.value=="")
            isempty=true

        if(password.value=="")
            isempty=true

        if(isempty){
            message_box.innerText="Please fill all the fields."
            window.scrollTo(0,0)
            message_box.style.display="block"
            setTimeout(() => {
            message_box.style.display="none"
            }, 2000);
        }else{
            console.log("Logging.."+user.value+","+password.value)
            await fetch(APIlink+"login",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'credentials': 'include'
                },
                body:JSON.stringify({
                    "username":String(user.value),
                    "password":String(password.value)
                })
            }).then(res => res.json())
            .then(res => {
              console.log(res)
              if (res.success ){
                window.location.replace("./home_page.html")
              }
            })
            .catch(err=>{
                console.log(err)
            });

            // await fetch(APIlink+"auth/",{
            //     method:'GET',
            //     headers:{
            //         'Accept':'application/json',
            //         'Content-Type':'application/json'
            //     }
            // }).then(res => res.json())
            // .then(res => {
            //   console.log(res,"hhf")
            // })
            // .catch(err=>{
            //     console.log(err)
            // });
        }
}