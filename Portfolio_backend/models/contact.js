const {Schema,model} = require("mongoose")

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
    minlength: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const ContactModel = model("Contact" , contactSchema)
module.exports = ContactModel