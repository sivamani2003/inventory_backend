import products from '../models/Product.js';
const addProduct = async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode } = req.body;

    try {
        const pre = await products.findOne({ ProductBarcode: ProductBarcode })
        console.log(pre);

        if (pre) {
            res.status(422).json("Product is already added.")
        }
        else {
            const addProduct = new products({ ProductName, ProductPrice, ProductBarcode })

            await addProduct.save();
            res.status(201).json(addProduct)
            console.log(addProduct)
        }
    }
    catch (err) {
        console.log(err)
    }
}
const getProducts = async (req, res) => {
    try {
        const getProducts = await products.find({})
        console.log(getProducts);
        res.status(201).json(getProducts);
    }
    catch (err) {
        console.log(err);
    }
}
const getoneproduct = async(req,res)=>{
    try {
        const getProduct = await products.findById(req.params.id);
        console.log(getProduct);
        res.status(201).json(getProduct);
    }
    catch (err) {
        console.log(err);
    }
}
export { addProduct,getProducts,getoneproduct };