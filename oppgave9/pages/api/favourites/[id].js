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
        const { id } = req.query
        if(id === 'all') {
            res.status(200).json({success : true, data : favourites})
        }
        else {
            Number(id) !== NaN ? res.status(200).json({success : true, data : favourites[id]}) : res.status(400).end()
        }
    }
    if(req.method === "POST") {
        console.log(req.body)
        favourites.push(req.body)
        res.status(201).json({success : true, data : favourites})
    }
    else {
        res.status(405).end()
    }
}