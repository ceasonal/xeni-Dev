const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Clears a specified amount of messages.")
    .addIntegerOption((option) =>
        option
            .setName("amount")
            .setDescription("The amount of messages to clear.")
            .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .setDMPermission(false),
    async execute(interaction) {
    const amount = interaction.options.getInteger("amount");
    if(!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
      const embed = new EmbedBuilder()
        .setTitle("Error!")
        .setDescription(
          "You do not have the required permissions to use this command!"
        )
        .setTimestamp()
        .setColor("#A020F0");
      return await interaction.reply({ embeds: [embed] });
    } 
    else if(!interaction.appPermissions.has(PermissionFlagsBits.ManageMessages)) {
      const embed = new EmbedBuilder()
        .setTitle("Error!")
        .setDescription(
          "I do not have the required permissions to use this command!"
        )
        .setTimestamp()
        .setColor("#A020F0");
      return await interaction.reply({ embeds: [embed] });
    }
     else if(amount < 1) {
      const embed = new EmbedBuilder()
        .setTitle("Error!")
        .setDescription("You must clear at least 1 message!")
        .setTimestamp()
        .setColor("#A020F0");
      return await interaction.reply({ embeds: [embed] });
    } 
    else if (amount > 100) {
      const embed = new EmbedBuilder()
        .setTitle("Error!")
        .setDescription("You can only clear up to 100 messages at a time!")
        .setTimestamp()
        .setColor("#A020F0");
      return await interaction.reply({ embeds: [embed] });
    } 
    else {
      await interaction.channel.bulkDelete(amount);
      const embed = new EmbedBuilder()
        .setTitle("Success!")
        .setDescription(`Cleared ${amount} messages!`)
        .setTimestamp()
        .setColor("#A020F0");
        await interaction.reply({ embeds: [embed] });
        setTimeout(() => {interaction.deleteReply();}, 2000);
    }
  },
};
