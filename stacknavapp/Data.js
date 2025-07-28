import { faker } from "@faker-js/faker";

export const DATA = Array(10)
  .fill(null)
  .map((e) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    online: faker.datatype.boolean(),
    about: faker.lorem.paragraph(),
    followers: faker.number.int() % 500,
    follows: faker.number.int() % 500,
    posts: Array(12)
      .fill(null)
      .map((e) => ({
        id: faker.string.uuid(),
        image: faker.image.urlPicsumPhotos(),
      })),
  }));
