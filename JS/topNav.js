const AccountName=document.getElementById("userInfo")
const logoutbtn=document.getElementById('logoutbtn')
const APIlink="http://localhost:5000/api/v1/user/"

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
                console.log(String(res.user))
                  AccountName.innerText=res['user']
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


// TEsting ...
// await fetch(APIlink+"test", {
//   method:'POST',
//   credentials: 'include' ,// allow cookie headers,
//   mode:'cors',
//   headers:{
//     'Accept':'*/*',
//     'Accept-Encoding':'gzip, deflate, br',
//     'Accept-Language':'en-US,en;q=0.9',
//     'Content-Type':'application/json',
//   },
//   body:JSON.stringify({
//     "password":"D"
// })
// }).then(res => res.json())
//   .then(res => {
//     console.log(res)
//     if(!res.success){
//         // window.location.replace("./sign_in.html")
//     }else{
//         AccountName.innerText=res.user
//         console.log("confirm")
//     }
//   })
//   .catch(err=>{
//     console.log(err)
//     // window.location.replace("./sign_in.html")
//   }); 