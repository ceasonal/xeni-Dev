const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('av')
		.setDescription('Displays users avatar.')
        .addUserOption(option => option.setName('user').setDescription('The user\'s avatar to display')),
        async execute(interaction) {
            const user = interaction.options.getUser('user') || interaction.user;
            const embed = new EmbedBuilder()
            .setTitle(`${user.username}'s avatar`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setTimestamp()
            .setColor('#A020F0');
            await interaction.reply({ embeds: [embed] });
        }
};
