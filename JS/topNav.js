const AccountName=document.getElementById("userInfo")
const APIlink="http://localhost:5000/api/v1/user/"

const authenticate=async function(){
    await fetch(APIlink+"auth",{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'credentials': 'include'
        }
    }).then(res => res.json()) 
    .then(res => {
        console.log(res)
        if(!res.success){
            window.location.replace("./sign_in.html")
        }else{
            AccountName.innerText=res.user
        }
    })
    .catch(err=>{
        console.log(err)
        window.location.replace("./sign_in.html")
    })
}

authenticate()