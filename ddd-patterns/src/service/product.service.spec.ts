import Product from "../entity/product"
import ProductService from "./product.service"

describe("Product service unit tests", () => {
  it("should change the price of all product", () => {
    const product = new Product("produto1","iPad", 10)
    const product2 = new Product("produto2","iPhone", 20)
    const products = [product, product2]

    ProductService.increasePrice(products,100)

    expect(product.price).toBe(20)
    expect(product2.price).toBe(40)
  })
})