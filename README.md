# easy-discord-buttons

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A simple and user-friendly package for creating Discord buttons with Discord.js.

## Features
- Simplify button creation in Discord.js.
- Supports all button styles (`Primary`, `Secondary`, `Success`, `Danger`, `Link`).
- Easily create action rows containing buttons.

## 📦 Installation

```bash
npm install easy-discord-buttons
```

---

## 🚀 Usage

```javascript
const { Client, GatewayIntentBits } = require('discord.js');
const EasyDiscordButtons = require('easy-discord-buttons');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'example_button') {
        await interaction.reply({ content: 'You clicked the button!' });
    }
});

client.on('messageCreate', async (message) => {
    if (message.content === '!button') {
        const button = EasyDiscordButtons.createButton(
            'Click Me', 
            'example_button', 
            'Primary'
        );

        const row = EasyDiscordButtons.createRow([button]);

        await message.channel.send({ content: 'Here is your button:', components: [row] });
    }
});

client.login('your-token-here');

```

# Create a Button
```javascript
EasyDiscordButtons.createButton(label, customId, style, url = null, disabled = false)
```
Creates a Discord button easily.

- label: The text displayed on the button.
- customId: A unique identifier for the button (except for Link buttons).
- style: The style of the button (Primary, Secondary, Success, Danger, Link).
- url (optional): Required for Link buttons. The URL to redirect to.
- disabled (optional): Whether the button is disabled.

# Create a Row
```javascript
EasyDiscordButtons.createRow(buttons)
```
Creates a row of buttons.

- buttons: An array of ButtonBuilder objects.

---

## 🧑‍💻 Example for Multiple Buttons
```javascript
const button1 = EasyDiscordButtons.createButton('Yes', 'yes_button', 'Success');
const button2 = EasyDiscordButtons.createButton('No', 'no_button', 'Danger');

const row = EasyDiscordButtons.createRow([button1, button2]);

await message.channel.send({ content: 'Do you agree?', components: [row] });
```
## 🧑‍💻 Example for Link Buttons
```javascript
const linkButton = EasyDiscordButtons.createButton(
    'Package',
    'package_link', 
    'Link', 
    'https://www.github.com/kreodiscord/easy-discord-buttons/readme.md'
);

await message.channel.send({ content: 'Visit Easy-Discord-Buttons Package!:', components: [EasyDiscordButtons.createRow([linkButton])] });

```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
