const db = require("../models");
const User = db.models.User;

const seedDatabase = async () => {
  await User.create({
    firstName: "Ariel",
    email: "ariel@mail.com",
    password: "123456",
    userRole: "admin",
  });
};

module.exports = seedDatabase;