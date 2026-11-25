const router=require('express').Router();
const c=require('../controllers/productController');
const auth=require('../middleware/auth');
router.post('/',auth,c.createProduct);
router.get('/',c.getProducts);
router.get('/:id',c.getProduct);
router.put('/:id',auth,c.updateProduct);
router.delete('/:id',auth,c.deleteProduct);
module.exports=router;
