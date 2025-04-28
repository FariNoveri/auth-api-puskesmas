const orderService = require('../core/services/orderService');

async function createOrder(req, res) {
  try {
    const newOrder = await orderService.createOrder(req.body);
    res.status(201).json({
      message: 'Order created successfully',
      data: newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
}

async function getAllOrders(req, res) {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json({
      message: 'Orders retrieved successfully',
      data: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve orders', error: error.message });
  }
}

async function getOrderById(req, res) {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({
      message: 'Order retrieved successfully',
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve order', error: error.message });
  }
}

async function updateOrderById(req, res) {
  try {
    const updatedOrder = await orderService.updateOrderById(req.params.id, req.body);
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({
      message: 'Order updated successfully',
      data: updatedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update order', error: error.message });
  }
}

async function deleteOrderById(req, res) {
  try {
    const deletedOrder = await orderService.deleteOrderById(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({
      message: 'Order deleted successfully',
      data: deletedOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
