const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const nostrData = {
  names: {
    bitcoinplebdev:
      "8172b9205247ddfe99b783320782d0312fa305a199fb2be8a3e6563e20b4f0e2",
  },
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/.well-known/nostr.json", (req, res) => {
      res.status(200).json(nostrData);
    });

    server.listen(5542, (err) => {
      if (err) throw err;
      console.log("my-nip5");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
