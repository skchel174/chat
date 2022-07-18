import chats from "storage/chats";
import messages from "storage/messages";
import users from "storage/users";

export default {
  getItems(userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = chats
          .filter(chat => chat.users.includes(userId))
          .map(chat => {
          return {
            ...chat,
            users: chat.users.map(id => users.find(user => user.id === id)),
          }
        });

        resolve(data)
      });
    });
  },

  getItemById(id) {
    return new Promise(resolve => {
      setTimeout(() => resolve(chats.find(chat => chat.id === id)), 1500);
    });
  },

  getMessages(chatId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(messages
          .filter(message => message.chatId === chatId)
          .map(message => ({
            ...message,
            id: message.id + (new Date).getTime()
          })))
      }, 2000);
    });
  },
};
