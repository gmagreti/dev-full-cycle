import { Sequelize } from "sequelize-typescript";
import CustomerRepository from "./customer.repository";
import CustomerModel from "../db/sequelize/model/customer.model";
import { Customer } from "../../domain/entity/customer";
import Address from "../../domain/entity/address";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import ProductModel from "../db/sequelize/model/product.model";
import OrderModel from "../db/sequelize/model/order.model";
import ProductRepository from "./product.repository";
import Product from "../../domain/entity/product";
import OrderItem from "../../domain/entity/order_item";
import Order from "../../domain/entity/order";
import OrderRepository from "./order.repository";

describe("Order repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel, OrderModel, OrderItemModel, ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a new order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "John Doe");
    const address = new Address("Street", 1, "12345", "City");
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product", 100);

    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      2
    )

    const order = new Order("1", "1", [orderItem]);

    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: {
        id: order.id,
      },
      include: [
        "items",
      ]
    });

    expect(orderModel.toJSON()).toStrictEqual({
      id: "1",
      customer_id: "1",
      total: order.total(),
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          quantity: orderItem.quantity,
          order_id: order.id,
          product_id: product.id,
        }
      ]
    })
  })

  it("should update an existing order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "John Doe");
    const address = new Address("Street", 1, "12345", "City");
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product", 100);

    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      2
    )

    const order = new Order("1", "1", [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const updatedProduct = new Product("2", "Updated Product", 150);
    await productRepository.create(updatedProduct);

    const updatedOrderItem = new OrderItem(
      "1",
      updatedProduct.name,
      updatedProduct.price,
      updatedProduct.id,
      3
    );

    const updatedOrder = new Order(order.id, order.customerId, [updatedOrderItem]);
    await orderRepository.update(updatedOrder);

    const updatedOrderModel = await OrderModel.findOne({
      where: {
        id: updatedOrder.id,
      },
      include: [
        "items",
      ]
    });

    expect(updatedOrderModel.toJSON()).toStrictEqual({
      id: "1",
      customer_id: "1",
      total: updatedOrder.total(),
      items: [
        {
          id: updatedOrderItem.id,
          name: updatedOrderItem.name,
          price: updatedOrderItem.price,
          quantity: updatedOrderItem.quantity,
          order_id: updatedOrder.id,
          product_id: updatedProduct.id,
        }
      ]
    });
  });

  it("should find an existing order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "John Doe");
    const address = new Address("Street", 1, "12345", "City");
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product", 100);

    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      2
    )

    const order = new Order("1", "1", [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const foundOrder = await orderRepository.find(order.id);

    expect(foundOrder).toStrictEqual(order);
  })

  it("should find all orders", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "John Doe");
    const address = new Address("Street", 1, "12345", "City");
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product", 100);

    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      2
    )

    const secondOrderItem = new OrderItem(
      "2",
      product.name,
      product.price,
      product.id,
      3
    )

    const order = new Order("1", "1", [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const secondOrder = new Order("2", "1", [secondOrderItem]);
    await orderRepository.create(secondOrder);

    const foundOrders = await orderRepository.findAll();

    expect(foundOrders).toStrictEqual([order, secondOrder]);
  })
});