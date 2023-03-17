const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('bugreport')
        .setDescription('Report a bug to the bot owner.')
        .addStringOption(option => option.setName('bug').setDescription('The bug you want to report.').setRequired(true)),
    async execute(interaction) {
        const bug = interaction.options.getString('bug');
        const embed = new EmbedBuilder()
            .setTitle('Bug Report')
            .setDescription(`Your bug has been reported successfully!`)
            .setTimestamp()
            .setColor('#A020F0');
        await interaction.reply({ embeds: [embed] });
        const channel = interaction.client.channels.cache.get("1085957274947817612");
        const embed2 = new EmbedBuilder()
            .setTitle('Bug Report')
            .setDescription(`${bug}`)
            .setTimestamp()
            .setColor('#A020F0');
        await channel.send({ embeds: [embed2] });
    }
};
