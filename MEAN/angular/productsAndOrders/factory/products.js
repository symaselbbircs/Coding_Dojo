app.factory("inventoryFactory", function(){
  var factory = {}
  var all_products = []
  factory.add_product = function(product){
    all_products.push({
      name: product.name,
      qty: 50,
      price: product.price
    })
  }
  factory.show_products = function(){
    return all_products
  }
  factory.delete_product = function(id){
    all_products.splice(id,1)
  }

  factory.buy_product = function(id){
    if(all_products[id].qty > 1){
      all_products[id].qty -= 1
    } else{
      all_products[id].qty = "SOLD OUT!"
    }
  }

  return factory
})
