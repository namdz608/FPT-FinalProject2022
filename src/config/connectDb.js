const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  "dbl0fcb2492ikc",
  "mknjswpqntdfqe",
  "b70df3df8d6ab532efe32fa439c8dad57575f9ea1b85c181ca75b436c6187b7a",
  {
    host: "ec2-34-242-84-130.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

let connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDb;
