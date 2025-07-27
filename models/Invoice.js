const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  clientName: String,
  items: [
    {
      description: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Hitung total otomatis sebelum disimpan
invoiceSchema.pre("save", function (next) {
  this.total = this.items.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);
  next();
});

module.exports = mongoose.model("Invoice", invoiceSchema);
