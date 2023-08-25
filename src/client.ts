import { Client, GatewayIntentBits } from 'discord.js';
import { CronJob } from 'cron';
import Events from './events/index.js';
import { registerEvents, Events as events, random_int } from './utils/index.js';
import Keys from './keys.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

registerEvents(client, Events);

client.login(Keys.clientToken).catch((err) => {
    console.error('[Login Error]', err);
    process.exit(1);
});

client.on(events.GuildCreate, guild => {
    console.log(`Joined a new Guild: ${guild.name}`);
});

client.on(events.GuildDelete, guild => {
    console.log(`Left a Guild: ${guild.name}`);
});

client.once('ready', () => {
    let monday_reminder = new CronJob('00 00 8 * * 1', () => {
        client.guilds.cache.forEach(guild => {
            let channel = guild.systemChannel;
            
            if (channel !== undefined && channel !== null) {
                channel.send({
                    content: "@everyone", 
                    files: [{ attachment: './static/monday.jpg' 
                }]});
            }
        });
    });

    let friday_reminder = new CronJob('00 00 8 * * 5', () => {
        client.guilds.cache.forEach(guild => {
            let channel = guild.systemChannel;
            
            if (channel !== undefined && channel !== null) {
                channel.send({ 
                    content: "@everyone",
                    files: [{ attachment: `./static/friday_${random_int(1, 4)}.jpg` 
                }]});
            }
        });
    });
    
    monday_reminder.start();
    friday_reminder.start();
});