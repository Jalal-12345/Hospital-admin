const mongoose = require("mongoose");

const AlmurjieaSchema = new mongoose.Schema({
  almaswuwl_fi_aljihat_almurjiea:String,
  AljihatAlmurjiea: String,
  ReasonsForReturn: String,
  alwahda: String,
  Quantity:Number,
  ItemNo: String,
  ItemNameAndDescription: String, 
  data: String
})

const AlmurjieaModel = mongoose.model("almawadu_almurjiea", AlmurjieaSchema);
module.exports = AlmurjieaModel;