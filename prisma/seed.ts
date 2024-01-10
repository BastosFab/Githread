import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {

    const users = [];
    for( let i = 0; i < 10; i++) {
        const user = {
            username: faker.internet.userName(),
            image: faker.image.avatar(),
            name: faker.person.firstName(),
            bio: faker.lorem.paragraph(),
            email: faker.internet.email(),
            link: faker.internet.url(),
        } satisfies Prisma.UserCreateInput;

        const dbUser = await prisma.user.create({ data: user });

        users.push(dbUser);
    }

    const posts = [];
    for( let i = 0; i < 100; i++) {
        const randomUserIndex = faker.number.int({
            min: 0,
            max: users.length - 1
        })

        const randomWorldCount = faker.number.int({
            min: 5,
            max: 12
        })

        const post = {
            content: faker.lorem.sentence(randomWorldCount),
            userId: users[randomUserIndex].id,
        } satisfies Prisma.PostUncheckedCreateInput;

        const dbPost = await prisma.post.create({ data: post });
        posts.push(dbPost);
    }

    for( let i = 0; i < 200; i++) {
        const randomUserIndex = faker.number.int({
            min: 0,
            max: users.length - 1
        })

        const randomPostIndex = faker.number.int({
            min: 0,
            max: posts.length - 1
        })

        const like = {
            userId: users[randomUserIndex].id,
            postId: posts[randomPostIndex].id,
        } satisfies Prisma.LikeUncheckedCreateInput;

        await prisma.like.create({ data: like });
    }
};

main()
    .then( async () => {
        await prisma.$disconnect();
    })
    .catch( async (err) => {
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    });