import { notFound } from "next/navigation"

export default function ProductDetails({params}){

    if(parseInt(params.productId)>100){
        notFound();

    }
    return <h2>This is the product details ---{params.productId}--- </h2>//This gives the id of the product 
}