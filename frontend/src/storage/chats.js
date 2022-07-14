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
      id: 3,
      chatId: 1,
      authorId: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis distinctio dolores, facilis laudantium repudiandae tempora vel. Accusamus alias animi dolorem ea eius, facere illo impedit itaque, laboriosam odit quia, quo quos recusandae. At autem culpa debitis dicta distinctio dolores ex facere fuga, impedit in nam officiis, quasi quo tempore voluptate! Alias commodi cupiditate deleniti minima nemo porro praesentium quas qui quidem quo! Accusantium ad amet architecto atque blanditiis corporis cupiditate delectus, dolorem dolores dolorum et ex excepturi exercitationem expedita fugit itaque iusto laboriosam modi nemo nesciunt nisi omnis pariatur perferendis provident quaerat quam quasi quia reprehenderit saepe similique sunt suscipit tempora tempore unde ut voluptas voluptates! Accusantium ad assumenda consequatur consequuntur dolor ducimus ea facilis illo ipsam ipsum itaque nesciunt nihil nisi, nulla numquam pariatur perspiciatis quas quibusdam quis quo rem repudiandae rerum saepe sapiente sit voluptatibus voluptatum! A accusamus, ad amet aspernatur commodi eaque eligendi eum, excepturi facere iusto laboriosam minima molestiae nam nobis, porro quaerat quam quia rem saepe suscipit ut velit vero voluptatibus. Asperiores, dignissimos facere? Aliquid commodi dicta dolor inventore ipsa minima omnis quaerat quos?',
      date: '2022-06-09',
      time: '11:21',
      datetime: '2022-06-08T15:03',
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
      id: 12,
      chatId: 2,
      authorId: 1,
      text: 'Aspernatur culpa fuga hic nam praesentium!',
      date: '2022-06-12',
      time: '11:22',
      datetime: '2022-06-08T15:03',
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
