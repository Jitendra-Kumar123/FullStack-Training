import express from "express"
const app = express();

app.use(express.json());

let new_id = 4;

let data = [
    {id: 1, name: "DK", age: 10},
    {id: 2, name: "PK", age: 20},
    {id: 3, name: "CK", age: 30},
]

let friends = [
    {id: 1, name: "joe", city: "california"},
    {id: 2, name: "joe", city: "california"},
    {id: 3, name: "joe", city: "california"},
]

app.get("/", (req, res)=> {
    res.send({
        status: "success", 
        message: "this is route for home page"
    })
})

app.get("/data", (req, res) => {
    res.json({
        message: "this is the data route",
        length: data.length,
        data
    })
})

app.get("/data/:id", (req, res) => {
    const dataId = parseInt(req.params.id);

    res.json({
        message: "this is the dynamic data route",
        dataId: dataId
    })
})

app.post("/data", (req, res) => {
    const user = req.body;

    if(user.age > 100 ||  user.age < 0){
        return res.status(400).json({
            message: "Invalid"
        })
    }   

    user.id = new_id++;
     
  
  data.push(user);
    res.status(200).json({
        message: "User data added successfully",
        data: data
    })
})

app.get("/friends-data/:id", (req, res) => {
    const friendsId = parseInt(req.params.id);

    const friend = friends.find(obj => obj.id === friendsId)

    if(!friend){
        return res.status(401).json({
            message: "Invalid",
        })
    }

    res.status(200).json({
        message: "you reached at friends data"
    })


})

app.post("/friends", (req, res) => {
    const friends = req.body;

    data.push(friends);

    res.status(201).json({
        message: "friends data added successfully",
        friends: friends
    })
})

export {app};