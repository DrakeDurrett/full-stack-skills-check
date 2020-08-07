module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then( products => {
            res.status(200).send(products)
        }).catch(err => {
            res.sendStatus(404);
            console.log(err);
        })
    }, 
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { product_name, price, image_url } = req.body;
        db.create_product([product_name, price, image_url]).then( products => {
            res.status(200).send(products)
        }).catch(err => {
            res.sendStatus(500);
            console.log(err);
        })
    }
}