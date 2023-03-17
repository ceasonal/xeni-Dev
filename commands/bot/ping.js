
const { SlashCommandBuilder,  EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with Pong!'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
        .setDescription(`**🏓Pong!** ${interaction.client.ws.ping}ms`)
        .setTimestamp()
		.setColor('#A020F0');
        await interaction.reply({ embeds: [embed] });
	},
};
