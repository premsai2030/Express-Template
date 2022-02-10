import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Person", PersonSchema);