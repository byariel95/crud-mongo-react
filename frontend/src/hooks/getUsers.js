import {useEffect,useState} from 'react';
import axios from 'axios'

const Url = 'http://localhost:3000/api/users';
 
 const useGetUsers =  () => {

    const [myData,setData] = useState([]);
    useEffect( () => {
         axios
         .get(Url)
         .then(result => setData(result.myData))
    },[])

    return myData;
 };

 export default useGetUsers;