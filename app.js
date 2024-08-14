const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const cors = require("cors");


const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_KEY)
  .then((res) => console.log("connected database"))
  .catch((err) => console.log("don`t connected"));

app.use(express.json());
app.use(cors());

const CustodyModel = require("./models/CustodyModels");
// create custody

app.post("/api/custodies", async (req, res) => {
  const {
    Section,
    ClassResponsible,
    CardNumber,
    TypeCustody,
    DescriptionCustody,
    ManufactureCompany,
    Code,
    LocationCustody,
    ExchangeDate,
    ItemCondition,
  } = req.body;

  const CustodySchema = new CustodyModel({
    Section,
    ClassResponsible,
    CardNumber,
    TypeCustody,
    DescriptionCustody,
    ManufactureCompany,
    Code,
    LocationCustody,
    ExchangeDate,
    ItemCondition,
  });
  res.json(await CustodySchema.save());
});

// get custody

app.get("/api/custodies", async (req, res) => {
  const Custody = await CustodyModel.find({});
  res.json(Custody);
});

// find one custody
app.get("/api/custodies/:id", async(req,res)=>{
  const CustodyId = await CustodyModel.findById(req.params.id);
  res.json(CustodyId);
})

// update custody
app.put("/api/custodies/:id", async (req, res) => {
  const {
    Section,
    ClassResponsible,
    CardNumber,
    TypeCustody,
    DescriptionCustody,
    ManufactureCompany,
    Code,
    LocationCustody,
    ExchangeDate,
    ItemCondition,
  } = req.body;
  const CustodyJSON = {
    Section,
    ClassResponsible,
    CardNumber,
    TypeCustody,
    DescriptionCustody,
    ManufactureCompany,
    Code,
    LocationCustody,
    ExchangeDate,
    ItemCondition,
  };
  const CustodyUpdate = await CustodyModel.findByIdAndUpdate(
    req.params.id,
    CustodyJSON
  );
  res.json({ data: CustodyUpdate, massege: "تم تحديث العهدة بنجاح" });
});

// delete custody

app.delete("/api/custodies/:id", async (req, res) => {
  const CustodyDelete = await CustodyModel.findByIdAndDelete(req.params.id);
  res.json({ data: CustodyDelete, massege: "تم حذف بنجاح" });
});

// create Almawadu_Almunsarifa
const AlmunsarifaModel = require("./models/AlmunsarifaModels");
app.post("/api/almawadu-almunsarifas", async (req, res) => {
  try{
    const {
      almustalam,
      aljihatAltaaliba,
      RaqmAltalab,
      alwahda,
      Quantity: Number,
      ItemNo,
      ItemNameAndDescription,
      data,
    } = req.body;
    AlmunsarifaSchema = new AlmunsarifaModel({
      almustalam,
      aljihatAltaaliba,
      RaqmAltalab,
      alwahda,
      Quantity: Number,
      ItemNo,
      ItemNameAndDescription,
      data,
    });
  
    res.json(await AlmunsarifaSchema.save());
  }
  catch(err){
    console.log(err);
  }
});
// get Almawadu_Almunsarifa
app.get("/api/almawadu-almunsarifas", async(req,res)=>{
  const Almunsarifa = await AlmunsarifaModel.find({});
  res.json(Almunsarifa);
});


// find one Almawadu_Almunsarifa

app.get("/api/almawadu-almunsarifas/:id",async(req,res)=>{
  try{
   const AlmunsarifaFindOne = await AlmunsarifaModel.findById(req.params.id);
   res.json(AlmunsarifaFindOne);
  }catch(err){
    console.log(err);
  }
})

// update Almawadu_Almunsarifa

app.put("/api/almawadu-almunsarifas/:id" , async(req,res)=>{
  const {
    almustalam,
    aljihatAltaaliba,
    RaqmAltalab,
    alwahda,
    Quantity: Number,
    ItemNo,
    ItemNameAndDescription,
    data,
  } = req.body;
  const AlmunsarifaJSON = {
    almustalam,
    aljihatAltaaliba,
    RaqmAltalab,
    alwahda,
    Quantity: Number,
    ItemNo,
    ItemNameAndDescription,
    data,
  }
  const AlmunsarifaUpdate = await AlmunsarifaModel.findByIdAndUpdate(req.params.id, AlmunsarifaJSON);

  res.json({data:AlmunsarifaJSON,massege:"تم تحديث بنجاح"});
})

// delete Almawadu_Almunsarifa

app.delete("/api/almawadu-almunsarifas/:id", async(req,res)=>{
 const AlmunsarifaDelete = await  AlmunsarifaModel.findByIdAndDelete(req.params.id);
 res.json({data:AlmunsarifaDelete,massege:"تم حذف بنجاح"});
})


// create Almawadu_Almurjiea
const AlmurjieaModels = require("./models/AlmurjieaModels");
app.post("/api/almawadu-almurjieas" , async(req,res)=>{
  const {
    almaswuwl_fi_aljihat_almurjiea,
    AljihatAlmurjiea,
    ReasonsForReturn,
    alwahda,
    Quantity,
    ItemNo,
    ItemNameAndDescription,
    data,
  } = req.body;

  const AlmurjieaSchema = new AlmurjieaModels({
    almaswuwl_fi_aljihat_almurjiea,
    AljihatAlmurjiea,
    ReasonsForReturn,
    alwahda,
    Quantity,
    ItemNo,
    ItemNameAndDescription,
    data,
  });
  res.json(await AlmurjieaSchema.save());
});

// get Almawadu_Almurjiea
app.get("/api/almawadu-almurjieas", async(req,res)=>{
  const Almurjiea = await AlmurjieaModels.find({});
  res.json(Almurjiea);
});

// find one Almawadu_Almurjiea

app.get("/api/almawadu-almurjieas/:id", async(req,res)=>{
   const AlmurjieaFindOne = await AlmurjieaModels.findById(req.params.id);
   res.json(AlmurjieaFindOne);
})

// update Almawadu_Almurjiea

app.put("/api/almawadu-almurjieas/:id",async(req,res)=>{
  const {
    almaswuwl_fi_aljihat_almurjiea,
    AljihatAlmurjiea,
    ReasonsForReturn,
    alwahda,
    Quantity,
    ItemNo,
    ItemNameAndDescription,
    data,
  } = req.body;

  const AlmurjieaJSON = {
    almaswuwl_fi_aljihat_almurjiea,
    AljihatAlmurjiea,
    ReasonsForReturn,
    alwahda,
    Quantity,
    ItemNo,
    ItemNameAndDescription,
    data,
  }

  const AlmurjieaUpdate = await AlmurjieaModels.findByIdAndUpdate(req.params.id,AlmurjieaJSON);

  res.json({data:AlmurjieaJSON,massege:"تم تحديث بنجاح"});
})

// delete Almawadu_Almurjiea

app.delete("/api/almawadu-almurjieas/:id", async(req,res)=>{
  const AlmurjieaDelete = await AlmurjieaModels.findByIdAndDelete(req.params.id);
  res.json({data:AlmurjieaDelete,massege:"تم حذف بنجاح"});
})

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
