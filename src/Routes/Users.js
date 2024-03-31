import React from 'react'
import { useRef ,useState,useEffect} from 'react';
import Loading from '../components/Loading.js'
import UsersContainer from '../components/UsersContainer.js';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(null);
    const user = useRef("");
    let EndPoint = "https://api.github.com/users";

    async function AllUesrs(){
        if(user.current.value===""){
            setLoading(true);
            const res=await fetch(EndPoint);
            const data=await res.json();
            setUsers(data);
            setLoading(null);
        }
    }
    async function FindUser() {
        setLoading(true);
        if (user.current.value !== "") {
          setUsers("");
          const res = await fetch(EndPoint + "/" + user.current.value);
          const data = await res.json();
          setUsers(() => [data]);
          console.log(users);
          user.current.value = "";
        } else {
          AllUesrs();
        }
        setLoading(null);
      }
    
      useEffect(() => {
        AllUesrs();
      }, [user, setUsers]);
    
    

  return (
    <div>
        <div className="flex justify-center h-11  my-5 items-center">
            <input
                placeholder="Search github username"
                ref={user}
                type="text"
                className="h-full md:w-1/3 outline-none text-gray-800 px-2 
                font-semibold text-lg w-2/3 rounded-full"
            />
            <button
                onClick={FindUser}
                className="bg-red-500 font-semibold  px-4 h-full font-[Poppins] rounded-3xl"
            >
            Search
            </button>
        </div>
        <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>

    </div>
  )
}

export default Users