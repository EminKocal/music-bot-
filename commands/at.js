const { canModifyQueue } = require("../util/EvobotUtil");


module.exports = {
  name: "dc",
  aliases: ['dc'],
  description: "Müziği Dururur ve Botu Sesten Atar.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("Müzik Durduruldu.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ Müzik Botu Atıldı!`).catch(console.error);
  }
};
