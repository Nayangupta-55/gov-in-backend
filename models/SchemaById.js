import mongoose from "mongoose";

const SchemaByIdSchema = new mongoose.Schema({
  ID: String,
  Description: String,
  Description2: String,
  Description3: String,
  Benefits: String,
  Eligibility: String,
  ApplicationProcess: String,
  DocumentsRequired: String,
  Link: String,
  Name: String,
}, { timestamps: true });   

const SchemaByIdModel = mongoose.model('SchemaById', SchemaByIdSchema);
export default SchemaByIdModel;