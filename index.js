const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

class EasyDiscordButtons {
    /**
     * Create a button easily.
     * @param {string} label
     * @param {string} customId
     * @param {string} style
     * @param {string} [url]
     * @param {boolean} [disabled=false]
     * @returns {ButtonBuilder}
     */
    static createButton(label, customId, style, url = null, disabled = false) {
        if (!label || !style) {
            throw new Error("Label and style are required to create a button.");
        }

        // Validate the style
        const validStyles = ["Primary", "Secondary", "Success", "Danger", "Link"];
        const normalizedStyle = style.charAt(0).toUpperCase() + style.slice(1).toLowerCase();

        if (!validStyles.includes(normalizedStyle)) {
            throw new Error(
                `Invalid button style provided: '${style}'. Valid styles are: ${validStyles.join(", ")}.`
            );
        }

        const button = new ButtonBuilder()
            .setLabel(label)
            .setStyle(ButtonStyle[normalizedStyle])
            .setDisabled(disabled);

        // Set customId or URL based on style
        if (normalizedStyle === "Link") {
            if (!url) {
                throw new Error("URL is required for a Link button.");
            }
            button.setURL(url);
        } else {
            if (!customId) {
                throw new Error("Custom ID is required for non-Link buttons.");
            }
            button.setCustomId(customId);
        }

        return button;
    }

    /**
     * Create a row of buttons easily.
     * @param {Array<ButtonBuilder>} buttons
     * @returns {ActionRowBuilder}
     */
    static createRow(buttons) {
        if (!Array.isArray(buttons) || buttons.length === 0) {
            throw new Error("An array of buttons is required to create a row.");
        }

        return new ActionRowBuilder().addComponents(buttons);
    }
}

module.exports = EasyDiscordButtons;
