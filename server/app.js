const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

// allow cross-origin requests
app.use(cors());

const app = express();

mongoose.connect(
  "mongodb+srv://ankur29mac:demo15032022@cluster0.lhnrj.mongodb.net/cluster0?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
