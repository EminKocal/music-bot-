const fs = require("fs");
const config = require("../config.json");

module.exports = {
  name: "short",
  aliases: ['short'],
  description: "Botun Mesajlarını Kısaltır",
  execute(message) {
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("Dosyaya yazılırken bir hata oluştu.").catch(console.error);
      }

      return message.channel
        .send(`Mesaj Kısaltma ${config.PRUNING ? "**enabled**" : "**disabled**"}`)
        .catch(console.error);
    });
  }
};
