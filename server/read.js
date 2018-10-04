module.exports = {
    readProducts(products, res) {
        products.collection("products").find({}).toArray(function(err, result) {
            if (err) { return console.log(err) }
            res.send(result);
        });
    },
    searchProducts(products, search_text, res) {
        products.collection("products").find({ $or: [ {desc: search_text}, {name: search_text} ] }).toArray(function(err, result) {
            if (err) { return console.log(err) }
            console.log("Found results");
            res.send(result);
        });
    }
}