import Order from "./order"
import OrderItem from "./order_item"

describe("Order unit tests", () => {

  it("should throw error when id is empty", () => {

    expect(() => {
      const order =  new Order("", "123", [])
    }).toThrowError("Id is required")
  })

  it("should throw error when customerId is empty", () => {

    expect(() => {
      const order =  new Order("123", "", [])
    }).toThrowError("CustomerId is required")
  })

  it("should throw error when order is empty", () => {

    expect(() => {
      const order =  new Order("123", "123", [])
    }).toThrowError("Items are required")
  })

  it("should calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 100)
    const item2 = new OrderItem("i2", "Item 2", 142)
    const order =  new Order("123", "123", [item])

    let total =  order.total()

    expect(total).toBe(100)

    const order2 =  new Order("123", "123", [item, item2])
    total =  order2.total()
    
    expect(total).toBe(242)
  })

})