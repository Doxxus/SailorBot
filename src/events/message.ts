import { event, Events, random_int } from '../utils/index.js';

export default event(Events.MessageCreate, ({ log }, message ) => {    
    if (message.content === '!monday') {
        log(`Incoming message from ${message.guild}: ${message}.`);

        const is_monday = (d = new Date()) => d.getDay() === 1;

        if (is_monday()) {
            return message.channel.send({ 
                content: `${message.author}`, 
                files: [{ attachment: './static/monday.jpg' 
            }]});
        }
        else {
            return message.reply(`${message.author} It be not Monday yet sailor.`);
        }     
    }
    else if (message.content === '!friday') {
        log(`Incoming message from ${message.guild}: ${message}.`);
    
        const is_friday = (d = new Date()) => d.getDay() === 5;

        if (is_friday()) {
            let num = random_int(1, 4);
            return message.channel.send({ 
                content: `${message.author}`,
                files: [{ attachment: `./static/friday_${num}.jpg` 
            }]});
        }
        else {
            return message.reply(`${message.author} It be not Friday yet sailor.`);
        }      
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