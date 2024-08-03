
const mongoose = require("mongoose"); 

const contactSchema = new mongoose.Schema({
  // _id:{type: String},
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});


contactSchema.statics.getAll = function () {
  return Contact.find({}).lean();
};

contactSchema.methods.htmlify = function () {
  return `<h3>${this.title}</h3><p>${this.text}</p>`;
};
const Contact = mongoose.model("contact", contactSchema);

// Contact.create

module.exports = Contact;
