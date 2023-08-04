const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const { APICallNeko } = require(`../../helpers/APICallNeko.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("neko")
    .setDescription("returns an nsfw neko image"),
  async execute(interaction, client) {
    const payload = APICallNeko();
    
    console.log(`payload: ${payload}`);
    const embed = new EmbedBuilder()
      .setTitle(`This is an embed`)
      .setDescription("description of the embed")
      .setColor(0xb00b69)
      .setImage(`https://api-cdn.rule34.xxx/thumbnails/3936/thumbnail_b6849698ab200ff042d963c4edc64445.jpg`)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://www.patreon.com/devdrane`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setURL(
        `https://api-cdn.rule34.xxx/images/3936/b6849698ab200ff042d963c4edc64445.jpeg`
      )
      .addFields([
        {
          name: `Field 1`,
          value: `Field value 1`,
          inline: false,
        },
      ]);

    if (interaction.channel.nsfw) {
      await interaction.reply({
        embeds: [embed],
      });
    } else {
      await interaction.reply({
        content: "no",
      });
    }
  },
};
