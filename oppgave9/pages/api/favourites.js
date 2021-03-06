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
        if(Boolean(req.query.id) == true) {
            Number(req.query.id) !== NaN && Number(req.query.id) < favourites.length ? res.status(200).json({success : true, data : favourites[req.query.id]}) : res.status(404).send('ID not a number or ID out of bounds')
        }
        else {
            res.status(200).json({success : true, data : favourites})
        }
    }
    else {
        res.status(405).end()
    }
}