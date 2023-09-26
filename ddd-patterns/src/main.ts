import Address from "./domain/entity/address";
import { Customer } from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Gabriel Magreti")
let address = new Address("Rua dois", 2, "123-212", "Londrina")
customer.Address = address
customer.activate()

const item1 = new OrderItem("1", "iPhone", 100, "p1", 0)
const item2 = new OrderItem("2", "iPad", 90, "p1", 0)
const order = new Order("1", "123", [item1, item2])