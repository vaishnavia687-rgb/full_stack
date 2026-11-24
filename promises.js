// const foodOrder =new Promise((resolve,reject)=>{
//     let foodReady=true;
//     if(foodReady){
//         resolve("Food is ready");
//     }else{
//         reject("Food is not ready");
//     }
// }
// );

// foodOrder
//     .then((result)=>console.log(result)) //it works if success
//     .catch((error)=>console.log(error))//failed

const getUsers=async()=>{
    console.log("fetching users");
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    const emails=data.map((n)=>n.email)
    console.log(emails);
}
getUsers()  



// async function getUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json();

//         data.map(user => {
//             console.log(user.email);
//         });
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// getUsers();
