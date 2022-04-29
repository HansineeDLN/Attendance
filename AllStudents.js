import React, {useState, useEffect} from 'react';
import axois from "axios";


export default function AllStudents(){
   
    const[students, setStudents] = useState([]);

    useEffect(() => {
        function getStudents() {
            axois.get("http://localhost:8070/student/").then((res) => {
                //console.log(res.data);
                setStudents(res.data);
                
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    },[])
    return(
        <div className="container">
            <h1></h1>
        </div>
    )
}