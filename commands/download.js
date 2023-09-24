const interactionHandlers = require('../modules/interaction-handlers.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('download')
        .setDescription('Receive a text file containing everyone\'s quotes.'),
    async execute (interaction, guildManager) {
        await interactionHandlers.downloadHandler(interaction, guildManager);
    }
};
