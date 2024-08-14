const mongoose = require("mongoose")

const AlmunsarifaSchema = new mongoose.Schema({
  almustalam:String,
  aljihatAltaaliba: String,
  RaqmAltalab: String,
  alwahda: String,
  Quantity:Number,
  ItemNo: String,
  ItemNameAndDescription: String, 
  data: String
})

AlmunsarifaModel = mongoose.model("almawadu-almunsarifas" , AlmunsarifaSchema)
module.exports = AlmunsarifaModel;