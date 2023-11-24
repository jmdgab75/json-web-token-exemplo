'use server'


const url = "https://aula-17-10-marcelino-trabalho.vercel.app";

const getUserAuthenticated = async (user) => {
   const responseOfApi = await fetch(url + "/users/authenticaded",
     {
      method:"POST",
      headers:{ "Content-Type":"Application/json" },
      body: JSON.stringify(user)
     }
   );
   const userAuth = await responseOfApi.json();
   console.log(userAuth);
   return userAuth;
}
  

const postUser = async (user) => {
  try{
    const responseOfApi = await fetch(url + "/user", {
      method:'POST',
      headers:{ "Content-Type":"Application/json" },
      body: JSON.stringify(user)
    });
    const userSave = await responseOfApi.json();
    return userSave;
  }catch{
    return null;
  }
}

const getUsers = async () =>{
    try{
      const responseOfApi = await fetch(url + "/users", {
           next: { revalidate: 5}

      });

      const listUser = responseOfApi.json();

      return listUser;

     } catch{
      return null;
     }
}


const updateUser = async (user, id) => {
  const token = cookies().get('token')?.value;
  try{
      const responseOfApi = await fetch(`${url}/user/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'Application/json',
              Cookie: `token=${token}`
          },
          body: JSON.stringify(user)
      });
      const userSave = await responseOfApi.json();
      return userSave;
  } catch {
      return null;
  }
}

  export { getUsers, getUserAuthenticated, postUser, updateUser };
