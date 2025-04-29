const db = require("../../config/db"); // Asumsikan menggunakan db client seperti pg

async function createOrder(orderData) {
  const query = `
    INSERT INTO trn_order (id, unit_layanan_id, user_id, tgl_order, status, jam_order, created_by, updated_by, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;
  const values = [orderData.id, orderData.unit_layanan_id, orderData.user_id, orderData.tgl_order, orderData.status, orderData.jam_order, orderData.created_by, orderData.updated_by, orderData.created_at, orderData.updated_at];
  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to create order: " + error.message);
  }
}

async function getAllOrders() {
  const query = "SELECT * FROM trn_order";
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    throw new Error("Failed to retrieve orders: " + error.message);
  }
}

async function getOrderById(id) {
  const query = "SELECT * FROM trn_order WHERE id = $1";
  try {
    const result = await db.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to retrieve order: " + error.message);
  }
}

async function updateOrderById(id, orderData) {
  const query = `
    UPDATE trn_order
    SET unit_layanan_id = $1, user_id = $2, tgl_order = $3, status = $4, 
        jam_order = $5, created_by = $6, updated_by = $7, created_at = $8, updated_at = $9
    WHERE id = $10
    RETURNING *;
  `;
  const values = [orderData.unit_layanan_id, orderData.user_id, orderData.tgl_order, orderData.status, orderData.jam_order, orderData.created_by, orderData.updated_by, orderData.created_at, orderData.updated_at, id];
  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to update order: " + error.message);
  }
}

async function deleteOrderById(id) {
  const query = "DELETE FROM trn_order WHERE id = $1 RETURNING *";
  try {
    const result = await db.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to delete order: " + error.message);
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
