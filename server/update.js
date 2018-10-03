module.exports = {
    updateProduct(products, res, id, product) {
        let = update_product = {
            name: product.name,
            price: product.price,
            type: product.type,
            description: product.desc,
        }
        products.collection("products").updateOne({_id: id}, update_product, function(err, res) {
            if (err) { return console.log(err) }
            console.log("Updated");
        });
    }
}