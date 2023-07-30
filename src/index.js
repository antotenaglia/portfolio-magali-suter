import express, { json, urlencoded } from "express";
import sendEmail from "./send-email.js";

const app = express();
const port = 5500 || process.env.PORT;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/send-email", async (req, res, next) => {
  try {
    const contact_name = req.body.name;
    const contact_email = req.body.email;
    const contact_message = req.body.message;
    
    await sendEmail(contact_name, contact_email, contact_message);
  } catch (err) {
    next(err);
  }
});

// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     console.error(err.message, err.stack);
//     res.status(statusCode).json({'message': err.message});

//     return;
// });

// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`)
// });

const connectedServer = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

connectedServer.on("error", (error) => console.log(`Server error: ${error}`));
