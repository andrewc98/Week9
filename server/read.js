module.exports = {
    readProducts(products, res) {
        products.collection("products").find({}).toArray(function(err, result) {
            if (err) { return console.log(err) }
            res.send(result);
        });
    }
}