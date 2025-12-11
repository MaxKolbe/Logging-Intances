import express from "express";
import logger1 from "./logger1.js";
// import logger2 from "./logger2.js";
// import logger3 from "./logger3.js";
// import logger4 from "./logger4.js";
// import logger5 from "./logger5.js";
// import logger7 from "./logger7.js";
// import logger8 from "./logger8.js";
// import logger9 from "./logger9.js";
// import loggerx from "./logger10.js";
// import { childLoggerx, childlogger} from "./logger10.js";
// import loggerxi from "./logger11.js";
// import loggerxii from "./logger12.js";

const app = express();

/*** Pairs with loggerxii ***/
// throw new Error("An uncaught error"); 

app.get("/", (req, res) => {
  // logger1.log("info", "Hello (Logger1)")
  // logger2.log("info", "Hello (Logger2)")
  // logger3.log("error", "Hello Error (Logger3)")
  // logger4.info("Hello (Logger4)")
  // logger5.info("Hello (Logger5)")
  // logger5.error("Hello Error (Logger5)")
  // logger7.info("Hello (Logger7)")
  // loggerx.info("Hello (loggerx)")
  // childLoggerx.info("Hello (childLoggerx)")
  // childLoggerx.info('File uploaded successfully', {extrametadata: 'extra metadata example'});
  // loggerxi.error(new Error("an error"));

  res.send("Hello");
});

app.listen(3000, () => {
  logger1.info("Server running at 3000");
});
