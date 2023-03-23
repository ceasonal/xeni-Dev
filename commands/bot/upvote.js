const {SlashCommandBuilder, EmbedBuilder} = require('Discord.js');
module.exports={
    data: new SlashCommandBuilder()
    .setName('upvote')
    .setDescription('Upvote the bot!'),
    async execute(interaction){
        const embed = new EmbedBuilder()
        .setTitle('Upvote the bot! <:upvote:1088426538178969693>')
        .setDescription('If you like the bot, upvote it! It helps a lot!\n [Click here to upvote](https://top.gg/bot/1076389208551334019)')
        .setTimestamp()
        .setColor('#A020F0');
        await interaction.reply({embeds: [embed]});
    }
}