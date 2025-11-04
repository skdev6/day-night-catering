export function getProductsByIds(productArray, ids){
    return productArray.filter(product => ids.includes(product.id));
}