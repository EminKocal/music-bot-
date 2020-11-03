const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "transition",
  aliases: ["tr"],
  description: "Seçilen Sıradaki Numarayı Çalmaya Başlar.",
  execute(message, args) {
    if (!args.length) return message.reply(`Dostum ${message.client.prefix}${module.exports.name} Sıralama Numarası Girmelisin.`);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Sıralama Yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.songs = queue.songs.slice(args[0] - 2);
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ skipped ${args[0] - 1} songs`).catch(console.error);
  }
};
