  const { SlashCommandBuilder } = require('discord.js');
  const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

  module.exports = {
    data: new SlashCommandBuilder()
      .setName('help')
      .setDescription('Displays a select help menu'),
    async execute(interaction) {
      const row = new ActionRowBuilder()
        .addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Nothing selected')
            .addOptions([
              {
                label: 'Bot Commands!',
                description: 'Basic commands for the bot',
                value: 'first_option',
              },
              {
                label: 'Fun Commands!',
                description: 'Fun commands for the bot',
                value: 'second_option',
              },
              {
                label: 'Affection Commands!',
                description: 'Affection commands for the bot',
                value: 'third_option',
              },
              {
                label: 'Moderation Commands!',
                description: 'Moderation commands for the bot',
                value: 'fourth_option',
              }

            ]),
        );
      const embed = new EmbedBuilder()
        .setColor('#A020F0')
        .setTitle('Help Menu')
        .setURL('https://xeni-web.netlify.app/commands.html')
        .setDescription('Select an option to get more information about it.');

      const message = await interaction.reply({ ephemeral: false, embeds: [embed], components: [row] });

      const filter = (interaction) => interaction.customId === 'select';
      const collector = message.createMessageComponentCollector({ filter, time: 15000 });

      const user = interaction.user;
      const client = interaction.client;


      collector.on('collect', async (interaction) => {
        if (interaction.values[0] === 'first_option') {
          const embed = new EmbedBuilder()
            .setColor('#A020F0')
            .setTitle('Bot Commands!')
            .setDescription(`Info commands to get information about different stuff !`)
            .addFields(
              { name: `\u200B`, value: "`\ ping \` , `\ server \` , `\ user \` , `\ avatar \` , \n `\ bugreport \` , `\ help ` , `\ upvote ` , \n `\ suggest \` ", inline: true },
            )
            .setImage("https://cdn.discordapp.com/attachments/642757845808578591/1086216602443321444/xenibanner.jpg")
            .setThumbnail(user.displayAvatarURL())

            .setTimestamp()
          await interaction.reply({ embeds: [embed], ephemeral: true });
        }
        else if (interaction.values[0] === 'second_option') {
          const embed = new EmbedBuilder()
            .setColor('#A020F0')
            .setTitle('Fun Commands!')
            .setDescription(`Fun commands to have fun with your friends !`)
            .addFields(
              { name: `\u200B`, value: "`\ dice \` , `\ catsay \` , `\ flag \` , `\ flag10 \` , `\ anime \` , \n `\ onepiece \` , `\ speedtype \`, `\ anyanime \` ", inline: true },
            )
            .setImage("https://cdn.discordapp.com/attachments/642757845808578591/1086216602443321444/xenibanner.jpg")
            .setThumbnail(user.displayAvatarURL())
          await interaction.reply({ embeds: [embed], ephemeral: true });
        }
        else if (interaction.values[0] === 'third_option') {
          const embed = new EmbedBuilder()
            .setColor('#A020F0')
            .setTitle('Affection Commands!')
            .setDescription(`Affection commands to show your love to your friends !`)
            .addFields(
              { name: `\u200B`, value: "`\ hug \` , `\ kiss \` , `\ slap \` , `\ holdhands \` , \n `\ high-five \`  ", inline: true },
            )
            .setImage("https://cdn.discordapp.com/attachments/642757845808578591/1086216602443321444/xenibanner.jpg")
            .setThumbnail(user.displayAvatarURL())
          await interaction.reply({ embeds: [embed], ephemeral: true });
        }
        else if (interaction.values[0] === 'fourth_option') {
          const embed = new EmbedBuilder()
            .setColor('#A020F0')
            .setTitle('Moderation Commands!')
            .setDescription(`Moderation commands to moderate your server !`)
            .addFields(
              { name: `\u200B`, value: "`\ ban \` , `\ kick \` , `\ clear \`", inline: true },
            )
            .setImage("https://cdn.discordapp.com/attachments/642757845808578591/1086216602443321444/xenibanner.jpg")
            .setThumbnail(user.displayAvatarURL())
          await interaction.reply({ embeds: [embed], ephemeral: true });
        }

      });
    },
  };
