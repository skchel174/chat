export default [
  {
    id: 1,
    name: null,
    img: null,
    type: "private",
    created_at: "2022-06-05 13:00:00",

    users: [
      {id: 1, name: 'John Doe', img: 'john-doe-avatar.png', visited_at: "2022-06-11 17:38:56"},
      {id: 2, name: 'Homer Simpson', img: 'homer-simpson-avatar.png', visited_at: "2022-06-11 17:38:56"},
    ],

    lastMessage: {
      id: 239,
      chatId: 2,
      authorId: 1,
      text: 'At, rerum.',
      date: '2022-06-13',
      time: '22:04',
    },
  },

  {
    id: 2,
    name: "Super Chat",
    img: "test-chat-img.jpeg",
    type: "group",
    created_at: "2022-05-23 13:00:00",

    users: [
      {id: 1, name: 'John Doe', img: 'john-doe-avatar.png', visited_at: "2022-06-11 17:38:56"},
      {id: 2, name: 'Homer Simpson', img: 'homer-simpson-avatar.png', visited_at: "2022-06-11 17:38:56"},
    ],

    lastMessage: {
      id: 239,
      chatId: 2,
      authorId: 1,
      text: 'At, rerum.',
      date: '2022-06-13',
      time: '22:04',
    },
  },

  {
    id: 3,
    name: "Super Chat",
    img: "test-chat-img.jpeg",
    type: "group",
    created_at: "2022-06-10 13:20:00",

    users: [
      {id: 1, name: 'John Doe', img: 'john-doe-avatar.png', visited_at: "2022-06-11 17:38:56"},
      {id: 2, name: 'Homer Simpson', img: 'homer-simpson-avatar.png', visited_at: "2022-06-11 17:38:56"},
    ],
  },
]
