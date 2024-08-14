const mongoose = require("mongoose")

const CustodySchema = new mongoose.Schema({
  Section: String,
  ClassResponsible:String,
  CardNumber:String,
  TypeCustody:String,
  DescriptionCustody:String,
  ManufactureCompany:String,
  Code:String,
  LocationCustody:String,
  ExchangeDate:String,
  ItemCondition:String
});

const CustodyModel = mongoose.model("custodies", CustodySchema)
module.exports = CustodyModel;


