module.exports = {
    addProduct(products, res, add_product) {
        products.collection("products").insertOne(add_product, function(err, res) {
            if (err) { return console.log(err) }
            console.log("Inserted: " + res.insertedCount);
        });
    }
}