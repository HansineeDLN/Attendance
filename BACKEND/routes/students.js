const router = require("express").Router();
let Student = require("../models/Student");



router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const grade = req.body.grade;
    const atten = req.body.atten;
    
    const newStudent = new Student({

        name,
        grade,
        atten
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Student.find().then((students) =>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res) =>{
    let userId = req.params.id;
    const{name,grade,atten} = req.body;

    const updateStudent = {
        name,
        grade,
        atten
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
    .then(()=> {
        res.status(200).send({status: "User Updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})  

})

router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Student.findById(userId)
    .then((student)=> {
        res.status(200).send({status: "User Fetched", student})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});

    })
})

module.exports = router;
