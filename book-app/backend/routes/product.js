const express = require('express')
const router = express.Router()


const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct,
    createProductReview,
    getProductReviews
} = require('../controllers/productController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');


router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(newProduct);

router.route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);


router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').put(isAuthenticatedUser, getProductReviews);

module.exports = router;