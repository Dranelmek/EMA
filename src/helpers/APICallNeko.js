const https = require("https");

module.exports = {
  APICallNeko: function () {
    https
      .get(
        "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=neko+straight+-mp4+-furry+-pregnant&limit=1",
        (resp) => {
          let data = "";
          resp.on(data, (chunk) => {
            data += chunk;
          });
          resp.on("end", () => {
            console.log(`done:`)
          });
        }
      )
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
      console.log(`fetched data: bruh`);
  },
};
