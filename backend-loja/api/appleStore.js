// const restful = require('node-restful')
const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  quantityAvailable: {type: Number, min: 0, required: true},
  price: {type: Number, min: 0, required: true},
  dateOfInsertion: { type: Date, default: Date.now}
})

const purchaseSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  totalValue: {type: Number,min: 0, required: true},
  transactionDate: { type: Date, default: Date.now},
  approved: {type: Boolean, default: false},
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]

})

const userSchema = new mongoose.Schema({
   name: {type: String , required: true},
   lastName: {type: String, required: true},
   email: {type: String, required: true},
   phoneNumber: {type: String, required: true},
   date: { type: Date, default: Date.now },
   purchases: [{ type: Schema.Types.ObjectId, ref: 'Purchase' }]

})


var Purchase = mongoose.model('Purchase', purchaseSchema);
var Product = mongoose.model('Products', productSchema);
var User = mongoose.model('User', userSchema);

module.exports = { User,Product, Purchase} 
