import Product from "./product"

describe("Product unit tests", () => {

  it("should throw error when id is empty", () => {
    expect(() => {
      new Product("", "iPhone", 899)
    }).toThrowError("Id is required")
  })

  it("should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "", 899)
    }).toThrowError("Name is required")
  })

  it("should throw error when price is less than zero", () => {
    expect(() => {
      new Product("123", "iPhone", -1)
    }).toThrowError("Price must be greater than zero")
  })

  it("should change name", () => {
    const product = new Product("1", "iPhone", 899)
    product.changeName("iPad")

    expect(product.name).toEqual("iPad")
  })

  it("should change price", () => {
    const product = new Product("1", "iPhone", 899)
    product.changePrice(1000)

    expect(product.price).toEqual(1000)
  })

})