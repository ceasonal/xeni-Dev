const { SlashCommandBuilder,  EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('rolls a dice!'),
	async execute(interaction) {
		const roll1= ["1", "2","3","4","5","6"];
        const die = roll1[Math.floor(Math.random() * roll1.length)];
        const embed = new EmbedBuilder()
        .setTitle('🎲 **Rolling dice!** ')
        .setDescription(` You rolled a dice and got **${die}** !`)
        .setTimestamp()
		.setColor('#A020F0');
        await interaction.reply({ embeds: [embed] });
	},
};
