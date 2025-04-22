const unitLayananModel = require('../models/unitLayananModel');

const getAllUnitLayanans = async () => {
  try {
    const unitLayanans = await unitLayananModel.getAllUnitLayanans();
    return unitLayanans;
  } catch (error) {
    throw new Error('Error fetching unit layanan');
  }
};

const createUnitLayanan = async (unit_layanan, keterangan) => {
  try {
    const newUnitLayanan = await unitLayananModel.createUnitLayanan(unit_layanan, keterangan);
    return newUnitLayanan;
  } catch (error) {
    throw new Error('Error creating unit layanan');
  }
};

module.exports = { getAllUnitLayanans, createUnitLayanan };
