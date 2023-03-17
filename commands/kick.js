const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Select a member and kick them.')
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('The member to kick')
            .setRequired(true))
    .addStringOption(option =>
        option
            .setName('reason')
            .setDescription('The reason for kicking'))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers)
    .setDMPermission(false),
    async execute(interaction) {
                    const target = interaction.options.getUser('target');
        		    const reason = interaction.options.getString('reason') ?? 'No reason provided';
                    // cant kick yourself
                    if (target.id === interaction.user.id) {
                        const embed = new EmbedBuilder()
                        .setTitle('Error!')
                        .setDescription('You cannot kick yourself!')
                        .setTimestamp()
                        .setColor('#A020F0');
                        return await interaction.reply({ embeds: [embed] });
                    }
                    // cant kick xeni
                    else if(target.id === interaction.client.user.id){
                        const embed = new EmbedBuilder()
                        .setTitle('Error!')
                        .setDescription('You cannot kick me!')
                        .setTimestamp()
                        .setColor('#A020F0');
                        return await interaction.reply({ embeds: [embed] });
                    }
                    else{
                    const embed = new EmbedBuilder()
                    .setTitle('Kicked!')
                    .setDescription(` ${target.username} has been kicked for ${reason}!`)
                    .setTimestamp()
                    .setColor('#A020F0');
                    await interaction.reply({ embeds: [embed] });
        			await interaction.guild.members.kick(target);
                    }
                },
};

