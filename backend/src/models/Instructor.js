const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const instructorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    instructorId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

instructorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

//JWT TOKEN
instructorSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

// compare password
instructorSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Instructor = mongoose.model("Instructor", instructorSchema);
module.exports = Instructor;
