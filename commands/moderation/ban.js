const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Select a member and ban them.')
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('The member to ban')
            .setRequired(true))
    .addStringOption(option =>
        option
            .setName('reason')
            .setDescription('The reason for banning'))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .setDMPermission(false),
    async execute(interaction) {
                    const target = interaction.options.getUser('target');
        		    const reason = interaction.options.getString('reason') ?? 'No reason provided';
                    const requestUserRolePosition = interaction.member.roles.highest.position;
                    const targetUserRolePosition = interaction.guild.members.cache.get(target.id).roles.highest.position;


                    // cant ban yourself
                    if (target.id === interaction.user.id) {
                        const embed = new EmbedBuilder()
                        .setTitle('Error!')
                        .setDescription('You cannot ban yourself!')
                        .setTimestamp()
                        .setColor('#A020F0');
                        return await interaction.reply({ embeds: [embed] });
                    }
                    // cant ban xeni
                    else if(target.id === interaction.client.user.id){
                        const embed = new EmbedBuilder()
                        .setTitle('Error!')
                        .setDescription('You cannot ban me!')
                        .setTimestamp()
                        .setColor('#A020F0');
                        return await interaction.reply({ embeds: [embed] });
                    }
                    // cant ban other mods that have similar perms or higher
                    else if(targetUserRolePosition >= requestUserRolePosition){
                        const embed = new EmbedBuilder()
                        .setTitle('Error!')
                        .setDescription('You cannot ban a user that has similar or higher permissions than you!')
                        .setTimestamp()
                        .setColor('#A020F0');
                        return await interaction.reply({ embeds: [embed] });
                    }
                    // cant ban other bots
                    else if(target.bot){
                        const embed = new EmbedBuilder()
                        .setTitle('Error!')
                        .setDescription('You cannot ban other bots!')
                        .setTimestamp()
                        .setColor('#A020F0');
                        return await interaction.reply({ embeds: [embed] });
                    }
                    // ban the user
                    else{
                    const embed = new EmbedBuilder()
                    .setTitle('Banned!')
                    .setDescription(` ${target.username} has been banned for ${reason}! by ${interaction.user.username}`)
                    .setTimestamp()
                    .setColor('#A020F0');
                    await interaction.reply({ embeds: [embed] });
        			await interaction.guild.members.ban(target);
                    }
                },
};

