const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const quiz = require('./flag.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('flag10')
    .setDescription('10 rounds of Guessing the flag!'),
  async execute(interaction) {
    let points = 0;

    const initialReply = new EmbedBuilder()
      .setDescription('The flag trivia is starting!')
      .setColor('#A020F0');

    await interaction.reply({ embeds: [initialReply], ephemeral: true });

    for (let i = 0; i < 10; i++) {
      const item = quiz[Math.floor(Math.random() * quiz.length)];
      const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
      };

      const embed = new EmbedBuilder()
        .setImage(item.question)
        .setTimestamp()
        .setColor('#A020F0');

      await interaction.followUp({ embeds: [embed], ephemeral: true });

      try {
        const collected = await interaction.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] });
        const user = collected.first().author;

        const correctEmbed = new EmbedBuilder()
          .setDescription(`${user} got the correct answer!`)
          .setTimestamp()
          .setColor('#A020F0');

        await interaction.followUp({ embeds: [correctEmbed], ephemeral: true });
        points++;
      } catch (error) {
        const wrongEmbed = new EmbedBuilder()
          .setDescription(`Looks like nobody got the answer this time. It was: ${item.answers}`)
          .setTimestamp()
          .setColor('#A020F0');

        await interaction.followUp({ embeds: [wrongEmbed], ephemeral: true });
      }
    }

    const resultEmbed = new EmbedBuilder()
      .setDescription(`Your total is score is ${points}!`)
      .setTimestamp()
      .setColor('#A020F0');

    await interaction.followUp({ embeds: [resultEmbed], ephemeral: true });
  },
};
