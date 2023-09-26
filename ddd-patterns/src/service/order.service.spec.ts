import Order from "../entity/order"
import OrderItem from "../entity/order_item"
import OrderService from "./order.service"

describe("Order service unit tests", () => {

  it("should get total of all orders", () => {
    const item = new OrderItem("1", "1", 100, "p1", 1)
    const item2 = new OrderItem("2", "2", 100, "p2", 4)

    const order = new Order("o1", "c1",  [item])
    const order2 = new Order("o2", "c2",  [item2])

    const total = OrderService.total([order, order2])

    expect(total).toBe(500)
  })

})