const roleModel = require('../models/roleModel');

const getAllRoles = async () => {
  try {
    const roles = await roleModel.getAllRoles();
    return roles;
  } catch (error) {
    throw new Error('Error fetching roles');
  }
};

const createRole = async (nama_role) => {
  try {
    const newRole = await roleModel.createRole(nama_role);
    return newRole;
  } catch (error) {
    throw new Error('Error creating role');
  }
};

module.exports = { getAllRoles, createRole };
