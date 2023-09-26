import Product from "../entity/product";

export default class ProductService {

  static increasePrice(product: Product[], percentage: number): Product[] {
    product.forEach(product => {
      product.changePrice((product.price * percentage)/100 + product.price)
    })

    return product
  }

}