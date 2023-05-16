const { PORT } = require("./config/config");
const { db } =require("./config/database");
const {server}=require("./server/index");

try{
db.authenticate().then(() => {

    console.log("Database connected");

    server.listen(PORT, () => {

        console.log(`Server is running at port ${PORT}`);

    });
});
}catch(error){
    console.log('That did not go well.')
      throw error
}


