const orderModel = require('../models/orderModel');

const getAllOrders = async () => {
  try {
    const orders = await orderModel.getAllOrders();
    return orders;
  } catch (error) {
    throw new Error('Error fetching orders');
  }
};

const createOrder = async (unit_layanan_id, user_id, tgl_order, status, jam_order) => {
  try {
    const newOrder = await orderModel.createOrder(unit_layanan_id, user_id, tgl_order, status, jam_order);
    return newOrder;
  } catch (error) {
    throw new Error('Error creating order');
  }
};

module.exports = { getAllOrders, createOrder };
