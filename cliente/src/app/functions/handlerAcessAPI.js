'use server'


const url = "https://aula-17-10-marcelino-trabalho.vercel.app/";

const getUserAuthenticated = async (user) => {
   const responseOfApi = await fetch(url + "/users/authenticaded",
     {
      method:"POST",
      headers:{ "Content-Type":"Application/json" },
      body: JSON.stringify(user)
     }
   );
   const userAuth = await responseOfApi.json();
   return userAuth;
}
  

const getUsers = () =>{
    
}
export { getUsers, getUserAuthenticated };


const postUser = async (user) => {
  try{
    const responseOfApi = await fetch(url + "/user", {
      method:"POST",
      headers:{ "Content-Type":"Application/json" },
      body: JSON.stringify(user)
    });
    const userSave = await responseOfApi.json();
    return userSave;
  }catch{
    return null;
  }
}