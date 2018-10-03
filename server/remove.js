module.exports = {
    deleteProduct(products, res, id) {
        products.collection("products").deleteOne({_id: id}, function(err, obj) {
            if (err) { return console.log(err) }
            console.log(id);
            console.log("Deleted");
        });
    }
}