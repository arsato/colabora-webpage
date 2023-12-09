const db = require("../models");
const User = db.models.User;
const Blog = db.models.Blog;
const AdditionalInfo = db.models.AdditionalInfo;

const seedDatabase = async () => {
  await User.create({
    firstName: "Ariel",
    lastName: "Sandoval",
    email: "asandoval@mail.com",
    password: "$2a$10$502TN.VhHtpn3o7EA.nwHOFN/5dxh0qiWKJeDrMe5enuLv4232Yci",
    userRole: "admin",
  });

  await User.create({
    firstName: "Juan",
    lastName: "Perez",
    email: "jperez@mail.com",
    password: "$2a$10$502TN.VhHtpn3o7EA.nwHOFN/5dxh0qiWKJeDrMe5enuLv4232Yci",
    userRole: "admin",
  });

  await AdditionalInfo.create({
    userId: 1,
    position: "Fullstack Developer",
    github: "https://github.com/arsato",
    linkedin: "https://www.linkedin.com/in/arsato",
  });

  /* await AdditionalInfo.create({
    userId: 1,
    position: "UX/UI Designer",
    github: "https://github.com/arsato",
    linkedin: "https://www.linkedin.com/in/arsato",
  }); */

  await Blog.create({
    content: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hola, mi nombre es ","type":"text","version":1},{"detail":0,"format":9,"mode":"normal","style":"","text":"Toruk","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Soy hermoso","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Tengo 6 años","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"y wiii","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":3}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"adfasdfasdfa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'
  })
};

module.exports = seedDatabase;