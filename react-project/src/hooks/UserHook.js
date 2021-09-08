import { useState } from "react";
const userList = [  {id: 0, name: 'Huyen'},  {id: 1, name: 'Hoa'},  {id: 2, name: 'Hung'},  {id: 3, name: 'Long'},]
function UserHook() {  
    const [user, setUser] = useState(userList[0]);  
    const next = () => {    
        if (user === userList[userList.length-1]){      
            setUser(userList[0]);    }
            else{      setUser(userList[user.id+1]);    }  } 
             const back = () => {    
                 if (user === userList[0]){      setUser(userList[userList.length-1]);    }
                 else{      setUser(userList[user.id-1]);    }  }  
                 return [user, next, back, userList];}
                 export default UserHook;