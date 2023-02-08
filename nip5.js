const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.get("/.well-known/nostr.json", (req, res) => {
      res.status(200).json({
        nostrData,
      });
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("my-nip5");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
