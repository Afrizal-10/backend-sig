const Invoice = require("../models/Invoice");

const getInvoices = async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
};

const createInvoice = async (req, res) => {
  const invoice = new Invoice(req.body);
  await invoice.save();
  res.status(201).json(invoice);
};

module.exports = {
  getInvoices,
  createInvoice,
};
