import chats from "storage/chats";
import messages from "storage/messages";

export default {
  getItems() {
    return new Promise(resolve => {
      setTimeout(() => resolve(chats), 0);
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
