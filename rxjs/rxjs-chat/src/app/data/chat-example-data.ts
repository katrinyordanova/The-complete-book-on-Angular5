import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';
import { ThreadService } from '../thread/thread.service';
import { UserService } from '../user/user.service';
import * as moment from 'moment';

const me: User      = new User('Juliet', 'assets/images/avatars/female-avatar-1.png');
const ladycap: User = new User('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
const echo: User    = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
const rev: User     = new User('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
const wait: User    = new User('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');

const tLadycap: Thread = new Thread('tLadycap', ladycap.name, ladycap.avatarSrc);
const tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
const tRev: Thread     = new Thread('tRev', rev.name, rev.avatarSrc);
const tWait: Thread    = new Thread('tWait', wait.name, wait.avatarSrc);

const initialMessages: Array<Message> = [
    new Message({
      author: me,
      sentAt: moment().subtract(45, 'minutes').toDate(),
      text: 'Yet let me weep for such a feeling loss.',
      thread: tLadycap
    }),
    new Message({
      author: ladycap,
      sentAt: moment().subtract(20, 'minutes').toDate(),
      text: 'So shall you feel the loss, but not the friend which you weep for.',
      thread: tLadycap
    }),
    new Message({
      author: echo,
      sentAt: moment().subtract(1, 'minutes').toDate(),
      text: `I\'ll echo whatever you send me`,
      thread: tEcho
    }),
    new Message({
      author: rev,
      sentAt: moment().subtract(3, 'minutes').toDate(),
      text: `I\'ll reverse whatever you send me`,
      thread: tRev
    }),
    new Message({
      author: wait,
      sentAt: moment().subtract(4, 'minutes').toDate(),
      text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
      thread: tWait
    }),
];

export class ChatExampleData {
    static init(
        messagesService: MessageService,
        threadsService: ThreadService,
        usersService: UserService
    ): void 
    {
        // TODO: make 'messages' hot
        messagesService.messages.subscribe(() => ({}));
        // set user
        usersService.setCurrentUser(me);
        //create initial message
        initialMessages.map((message: Message) => messagesService.addMessage(message));
        // set current thread
        threadsService.setCurrentThread(tEcho);
        this.setupBots(messagesService);
    }

    static setupBots(messageService: MessageService): void {
        //echo bot
        messageService.messageForThreadUser(tEcho, echo)
            .forEach((message: Message): void => {
                messageService.addMessage(
                    new Message({
                        author: echo,
                        text: message.text,
                        thread: tEcho
                    })
                )
            }, null);

        // reverse bot
        messageService.messageForThreadUser(tRev, rev)
            .forEach((message: Message) => {
                messageService.addMessage(
                    new Message ({
                        author: rev,
                        text: message.text.split('').reverse().join(''),
                        thread: tRev
                    })
                )
            }, null)

        // waiting bot
        messageService.messageForThreadUser(tWait, wait)
            .forEach((message: Message): void => {
                let waitTime: number = parseInt(message.text, 10);
                let replay: string;

                if(isNaN(waitTime)) {
                    waitTime = 0;
                    replay = `I didn\'t understand ${message.text}. Try sending me a number`;
                } else {
                    replay = `I waited ${waitTime} seconds to send you this.`;
                }

                setTimeout(() => {
                    messageService.addMessage(
                        new Message({
                            author: wait,
                            text: replay,
                            thread: tWait
                        })
                    )
                }, waitTime * 1000)
            },
        null);
    }
}