import { defineEventHandler } from 'h3';
import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';
import { commands } from './commands';

const runtimeConfig = useRuntimeConfig()
const rest = new REST({ version: '10' }).setToken(runtimeConfig.TOKEN);
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.login(runtimeConfig.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
    
        await rest.put(Routes.applicationCommands(runtimeConfig.APPID), { body: commands });
    
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

export default defineEventHandler(async event => {
    const body = await readBody(event)

    const dice = body.dice || 20;
    const channelid = body.channelid || '479199736776228865';
    const user = body.name || 'unknown';
    const hidden = body.hidden || false ;

    const parseMessage = (user: String, roll: Object) => (`${user} heitti D${roll.dice} nopalla: ${roll.result}`)

    const rolled = {dice: dice, result: Math.floor(Math.random() * dice) + 1}

    
    let channel
    try {
      channel = await client.channels.fetch(channelid);
    } catch (error) {
      return;
    }
    if(!hidden) {
      channel.send(parseMessage(user, rolled));
    }

    return rolled;


});
