import Products from '../models/productModel.js'
import cloudinary from '../config/cloudinary.js'
export const addProduct=async(req,res)=>{
       console.log(req.body)
       const {name,price,desc,img}=req.body;
       
       try {
        const result=await cloudinary.uploader.upload(img,{
            folder:"products"
           })
    
           const product=new Products({
            name:name,
            price:price,
            desc:desc,
            img:{
                public_id:result.public_id,
                url:result.secure_url
            }
           })
    
           const savedProduct=product.save()
           res.json({mssg:"file uploaded",data:savedProduct})
       } catch (error) {
        console.log("error occured")
          console.log(error)
       }
      
}

export const getAllProduct=async(req,res)=>{
     const productlist=await Products.find();
     res.status(200).send(productlist)
}

export const deleteAllProducts=async(req,res)=>{
    try {
        await Products.deleteMany();
        res.send("deleted successfully");
    } catch (error) {
        console.log(error)
    }
    
}

export const getProduct=async(req,res)=>{
   try {
     const product=await Products.findById(req.params.id)
     res.status(200).send(product)
   } catch (error) {
    console.log(error)
   }
}