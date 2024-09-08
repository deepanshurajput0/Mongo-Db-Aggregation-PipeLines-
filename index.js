db.products.aggregate([
    {
        $group:{
            _id:'$company',
            totalProducts:{ $sum:1 }
        }
    }
])



db.products.aggregate([
    {
      $group: {
        _id: "$price",                  // Group by the price field
        subtotal: { $sum: "$price" },   // Calculate the subtotal for each price group
        products: { $push: "$$ROOT" }   // Optionally, push all products with the same price
      }
    }
  ]);


  db.products.aggregate([{
    $group:{
        _id:'$price',
        totalPrice:{$sum:'$price'}
    }
}])





db.sales.aggregate([{
    $group:{
        _id:'$quantity',
         totalPrice:{ 
            $avg:'$price'
         }
    }
}
,{
    $sort:{totalPrice:1}
}
])


// $sort 

// ascending 
db.sales.aggregate([{
    $group:{
        _id:'$quantity',
         totalPrice:{ 
            $avg:'$price'
         }
    }
}
,{
    $sort:{totalPrice:1}
}
])

// descending 
db.sales.aggregate([{
    $group:{
        _id:'$quantity',
         totalPrice:{ 
            $avg:'$price'
         }
    }
}
,{
    $sort:{totalPrice:-1}
}
])




