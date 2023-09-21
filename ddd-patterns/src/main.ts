import Address from "./entity/address";
import { Customer } from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "Gabriel Magreti")
let address = new Address("Rua dois", 2, "123-212", "Londrina")
customer.Address = address
customer.activate()

const item1 = new OrderItem("1", "iPhone", 100)
const item2 = new OrderItem("2", "iPad", 90)
const order = new Order("1", "123", [item1, item2])