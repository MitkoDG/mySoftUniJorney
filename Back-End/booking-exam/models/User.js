const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// const User = mongoose.model('User', UserSchema);

module.exports = model('User', schema);
