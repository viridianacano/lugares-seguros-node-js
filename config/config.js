require("dotenv").config();

module.exports={
    PORT: process.env.PORT,

        DB:{
            PORT: process.env.DB_PORT || 5434,
            HOST: process.env.DB_HOST || "localhost",
            USER: process.env.DB_USER || "postgres",
            NAME: process.env.DB_NAME || "lugares_seguros",
            PASSWORD: process.env.DB_PASSWORD || "FCFM094",
            DIALECT: "postgres",

        },
        JWT: {
            SEED: process.env.JWT_SEED,
            EXPIRES: process.env.JWT_EXPIRES,
        },
    };
