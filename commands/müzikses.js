const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Ses Ayarını Değiştirebilirsiniz.",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Çalan Müzik Yok.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Bir Ses Kanalına Katılmalısınız!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 Mevcut Ses: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Lütfen Ses Seviyesini Ayarlamak İçin Bir Sayı Kullanın.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Lütfen Bu Sayılar Arasında Bir Sayı Kullanın 0 - 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Ses Seviyesi: **${args[0]}%**`).catch(console.error);
  }
};
