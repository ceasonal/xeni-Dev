const {  SlashCommandBuilder, AttachmentBuilder, EmbedBuilder} = require("discord.js");
const { Captcha } = require("captcha-canvas");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("speedtype")
    .setDescription(
      "Spawns in a captcha image and the first person to type the correct answer wins"
    ),
  async execute(interaction) {
    const captcha = new Captcha();
    captcha.async = true;
    captcha.addDecoy();
    captcha.drawTrace();
    captcha.drawCaptcha();
    const captchaAttachment = new AttachmentBuilder(
      await captcha.png,
      "captcha.png"
    );
    await interaction.reply({ files: [captchaAttachment] });
    const filter = (response) => {
      return response.content === captcha.text;
    };
    // console.log(captcha.text);
    interaction.channel
      .awaitMessages({ filter, max: 1, time: 5000, errors: ["time"] })
      .then((collected) => {
        const embed = new EmbedBuilder()
          .setDescription(`${collected.first().author} got the correct answer!`)
          .setTimestamp()
          .setColor("#A020F0");
        interaction.followUp({ embeds: [embed] });
      })
      .catch((collected) => {
        const embed = new EmbedBuilder()
          .setDescription(
            `Looks like nobody got the answer this time. it was ${captcha.text}`
          )
          .setTimestamp()
          .setColor("#A020F0");
        interaction.followUp({ embeds: [embed] });
      });
  },
};
