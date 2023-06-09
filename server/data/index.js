import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Vikas",
    lastName: "Singh",
    email: "vikassingh@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "India, UP",
    occupation: "Engineer",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Amit",
    lastName: "Yadav",
    email: "amityadav@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Kanpur, UP",
    occupation: "Dancer",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Anshul",
    lastName: "Chaudhary",
    email: "anshul@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpg",
    friends: [],
    location: "Fatehpur, UP",
    occupation: "Unemployed",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Aditya",
    lastName: "Prakash",
    email: "aditya@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.png",
    friends: [],
    location: "Lucknow, UP",
    occupation: "Technical Trainee",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Aditya",
    lastName: "Sharma",
    email: "adityasharma@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpg",
    friends: [],
    location: "Vrindavan, UP",
    occupation: "Leetcoder",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },

];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Vikas",
    lastName: "Singh",
    location: "India, UP",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Amit",
    lastName: "Yadav",
    location: "Kanpur, UP",
    description:
      "Hey Amit Here",
    picturePath: "post2.jpg",
    userPicturePath: "p4.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Skooby Doooby doooooo!!",
      "Helll yaaa!!",
      "DJ Rhea!!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Anshul",
    lastName: "Chaudhary",
    location: "Fatehpur, UP",
    description:
      "Hey Anshul here, andhbhakt of AAP",
    picturePath: "post3.jpg",
    userPicturePath: "p6.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "BJP Zindabad",
      "Nice Pic Bro !!"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Aditya",
    lastName: "Prakash",
    location: "Lucknow, UP",
    description:
      "Technical Trainee at MyAnatomy",
    picturePath: "post4.jpg",
    userPicturePath: "p5.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Congo brooo !!!",
      "Part kab de rha h ???",
      "Congo !!",
      "Hyaaa !!! Connect me on LinkdeIn",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Aditya",
    lastName: "Sharma",
    location: "Vrindavan, UP",
    description:
      "So I finally solved 300 question on leetcode",
    picturePath: "post5.jpg",
    userPicturePath: "p7.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I lied again",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
];
