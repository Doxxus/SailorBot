import { event, Events, random_int } from '../utils/index.js';

export default event(Events.MessageCreate, ({ log }, message ) => {    
    if (message.content === '!monday') {
        log(`Incoming message from ${message.guild}: ${message}.`);
        return message.channel.send({ files: [{ attachment: './static/monday.jpg' }]});
    }
    else if (message.content === '!friday') {
        log(`Incoming message from ${message.guild}: ${message}.`);
        let num = random_int(1, 4);
        log(num);

        return message.channel.send({ files: [{ attachment: `./static/friday_${num}.jpg` }]});
    }
    // else if (message.content === '!setchannel') {
    //     log(`Incoming message from ${message.guild}: ${message}.`);

    //     if (message.guild !== null) {
    //         if (gm_contains(message.guild.id)) {
    //             gm_setchannel(message.guild.id, message.channel.id);
    //         }
    //         else {
    //             gm_add(message.guild.id, message.channel.id);               
    //         }

    //         return message.reply(`Message channel set to ${message.channel}.`);
    //     }     

    //     return message.reply('Message channel not set... Guild was null.');
    // }
});