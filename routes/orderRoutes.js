const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of all orders
 *       500:
 *         description: Failed to retrieve orders
 */
router.get("/", orderController.getAllOrders);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               unit_layanan_id:
 *                 type: string
 *               user_id:
 *                 type: string
 *               tgl_order:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *               jam_order:
 *                 type: string
 *               created_by:
 *                 type: string
 *               updated_by:
 *                 type: string
 *               created_at:
 *                 type: string
 *                 format: date-time
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Order created successfully
 *       500:
 *         description: Failed to create order
 */
router.post("/", orderController.createOrder);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     responses:
 *       200:
 *         description: Order retrieved successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Failed to retrieve order
 */
router.get("/:id", orderController.getOrderById);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an existing order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               unit_layanan_id:
 *                 type: string
 *               user_id:
 *                 type: string
 *               tgl_order:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *               jam_order:
 *                 type: string
 *               created_by:
 *                 type: string
 *               updated_by:
 *                 type: string
 *               created_at:
 *                 type: string
 *                 format: date-time
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Failed to update order
 */
router.put("/:id", orderController.updateOrderById);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Failed to delete order
 */
router.delete("/:id", orderController.deleteOrderById);

module.exports = router;
