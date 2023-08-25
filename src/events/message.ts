import { event, Events } from '../utils/index.js';

export default event(Events.MessageCreate, ({ log }, message ) => {
    if (message.content === '!monday') {
        return message.channel.send({ files: [{ attachment: './static/monday.jpg' }]});
    }
    if (message.content === '!friday') {
        let num = random_int(1, 4);
        console.log(num);

        return message.channel.send({ files: [{ attachment: `./static/friday_${num}.jpg` }]});
    }
});

function random_int(min: number, max: number) {
    return Math.floor(Math.random() * max + min);
}