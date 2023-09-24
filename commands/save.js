const interactionHandlers = require('../modules/interaction-handlers.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('save')
        .setDescription('Add a new quote.')
        .addStringOption(option =>
            option.setName('author')
                .setDescription('the person(s) who said this quote')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('quote')
                .setDescription('what was said')
                .setRequired(true)),
    async execute (interaction) {
        await interactionHandlers.addHandler(interaction);
    }
};
