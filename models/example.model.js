import mongoose from 'mongoose';

const exampleUserSchema = new mongoose.Schema({
    name: String,
    passwordHash: String,
    user: {type: mongoose.Types.ObjectId, unique: true},
    phone: Number,
});

const exampleUserSchema = mongoose.model('users', exampleUserSchema);

export default exampleUserSchema;