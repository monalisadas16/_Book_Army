// const mongoose = require ('mongoose')

// const productSchema = new mongoose.Schema({
//     id:{
//         type: Number,
//         required:[true, 'Please enter product id'],
//         maxLength:[5,'Product id cannt exceed 5 characters'],
//         default:1
//     },
//     title:{
//         type: String,
//         required:[true, 'Please enter book name'],
//         trim:true,
//         maxLength:[100,'Book name cannt exceed 100 characters']
//     },
//     authors:{
//         type: String,
//         required:[true, 'Please enter book author'],
//         trim:true,
//         maxLength:[100,'Authors name cannot exceed 100 characters']
//     },
//     description:{
//         type: String,
//         required:[true, 'Please enter product description'],
//     },
//     edition:{
//         type: String
//     },
//     format:{
//         type: String,
//         required:[true, 'Please enter book edition'],
//         trim:true,
//         maxLength:[100,'Edition name cannot exceed 100 characters']
//     },
//     num_pages:{
//         type: Number,
//         required:[true, 'Please enter product price'],
//         maxLength:[5,'Product name cannt exceed 5 characters'],
//         default:0.0
//     },
    
//     rating:{
//         type: Number,
//         default:0
//     },

//     rating_count:{
//         type: Number,
//         default:0
//     },

//     review_count:{
//         type: Number,
//         default:0
//     },
//     genres:{
//         type: String,
//         required:[true, 'Please select category for this product'],
//         // enum:{
//         //     values:[
//         //         'Fiction',
//         //         'Children',
//         //         'Romance',
//         //         'Thirller',
//         //         'Mystry',
//         //         'Historical',
//         //         'Young Adult',
//         //         'Horror'
//         //     ],
//         //     message :'Please select correct category for product'  
//         //}
//     }, 
//     genre_list:{
//         type: String,
//         required:[true, 'Please select category for this product'],
//         // enum:{
//         //     values:[
//         //         'Fiction',
//         //         'Children',
//         //         'Romance',
//         //         'Thirller',
//         //         'Mystry',
//         //         'Historical',
//         //         'Young Adult',
//         //         'Horror'
//         //     ],
//         //     message :'Please select correct category for product'  
//         // }
//     }, 
//     images:[
//         {
//             public_id:{
//                 type:String,
//                 required:true
//             },
//             url:{
//                 type:String,
//                 required:true
//             }
//         }
//     ],
//     Quote1:{
//         type: String,
//         required:[true, 'Please enter product description'],
//     },
//     Quote2:{
//         type: String,
//         required:[true, 'Please enter product description'],
//     },
//     Quote3:{
//         type: String,
//         required:[true, 'Please enter product description'],
//     }
    
// })

// module.exports = mongoose.model('Product', productSchema)
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please entee book name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                "Books",
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now  
    }
})

module.exports = mongoose.model('Product', productSchema);