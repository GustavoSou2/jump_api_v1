import express from "express";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);
// api.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
