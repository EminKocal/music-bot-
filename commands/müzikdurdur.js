const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "stop",
  aliases: ['s'],
  description: "Müziği Durdurur",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ Müzik Durduruldu.`).catch(console.error);
    }
  }
};
