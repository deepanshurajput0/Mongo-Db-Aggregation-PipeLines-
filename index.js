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

// projection 


db.sales.aggregate([{
    $project:{
       price:1,
       _id:0,
       discountPrice:{$multiply:['$price',0.8]}       
    }
}
])


db.products.aggregate([
    {
        $match:{ price: {$gt:900} }
    },{
        $group:{
            _id:'$company',
            totalProducts:{ $sum: '$price' }
        }
    }
])




let db;

db.products.aggregate([
    {
        $group:{
            _id:'$company',
            totalPrice:{$sum:'price'}
        }
    }
])


db.products.aggregate([
  {
    $match:{
        price:{$gt:900}
    }
  },
   {
    $group:{
        _id:'$company',
        totalPrice:{$sum:'$price'}
    }
   }
])





db.sales.aggregate([
    {
        $group:{
            _id:'$compnay',
            Average:{$avg:'$price'}
        }
    },{
        $sort:{totalPrice:1}
    },{
        $project:{
            price:1, 
            _id:0
        }
    }
])

db.products.aggregate([
    {
        $match:{
            price:{$gt:1200}
        }
    },{
        $group:{
            _id:'$price',
            allColors:{$push:'$colors'}
        }
    }
])



