const favourites = [
    {
        "name" : "Johanne",
        "lastName" : "Hansen",
        "favouriteFood" : "Taco",
        "favouriteColor" : "Green",
        "age" : 15
    },
    {
        "name" : "Marius",
        "lastName" : "Olsen",
        "favouriteFood" : "Pizza",
        "favouriteColor" : "Red",
        "age" : 25
    },
    {
        "name" : "Thomas",
        "lastName" : "Larsen",
        "favouriteFood" : "Chocolate",
        "favouriteColor" : "Black",
        "age" : 42
    }
]

export default function handler (req, res) {
    if(req.method === "GET") {
        res.status(200).json({success : true, data : favourites})
    }
}