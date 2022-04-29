import React,{useState} from "react"
import axios from "axios";


export default function AddStudent(){

    const[name, setName] = useState("");
    const[grade, setGrade] = useState("");
    const[atten, setAtten] = useState("");
    
    function sendData(e){
        e.preventDefault();
        
        const newStudent ={

            name,
            grade,
            atten
        }
        //console.log(newStudent);
        axios.post("http://localhost:8070/student/add",newStudent).then(() =>{
            alert("Student Added")
            setName(null);
            setGrade(null);
            setAtten(null);

        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div className="container">
           <form onSubmit={sendData}>
                <div class="form-group">
                <label for="name">Student Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Student Name" 
                 onChange={(e) =>{

                    setName(e.target.value);

                }}/>
                
                </div>
                <div class="form-group">
                <label for="grade">Student Grade</label>
                <input type="text" class="form-control" id="grade" placeholder="Enter Student Grade"
                onChange={(e) =>{

                    setGrade(e.target.value);

                }}  />
                </div>
                <div class="form-group">
                <label for="atten">Attendance</label>
                <input type="text" class="form-control" id="atten" placeholder="Mark the attendance"
                onChange={(e) =>{

                    setAtten(e.target.value);

                }}  />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
           </form> 
        </div>
    )
}

  
