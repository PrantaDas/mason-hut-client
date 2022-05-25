import { useEffect, useState } from "react"

const useUser=(user)=>{
    const [users,setUsers]=useState(false);
    const [userLoading,setUserLoading]=useState(true);


    useEffect(()=>{
        const email=user?.email;

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUsers(data.admin)
                    setUserLoading(false);
                })
        }


    },[user]);

    return [users,userLoading]
}

export default useUser;