import app from "./app";
import "./config/database";

const PORT = process.env.PORT ?? 5000;

const init = async () => {
  await app.listen(PORT);
  console.log(`Listen server on port ${PORT}`);
};

init();
