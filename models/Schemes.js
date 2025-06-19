import mongoose from 'mongoose';

const Schemes = new mongoose.Schema({
  Scheme: String,
  Icon: String,
}, { timestamps: true });

const SchemeModel = mongoose.model('Scheme', Schemes);

export default SchemeModel;
