import mongoose, { connect } from 'mongoose';
connect('')
.then(() => {
    console.log('mongoose connected!');
})
.catch(() => {
    console.log('Failed to connect!');
})

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema);

module.exports = collection;