import { PrismaClient } from "@prisma/client";
import app from "./app";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5050;
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            posts: {
                create: { title: 'Hello World' },
            },
            profile: {
                create: { bio: 'I like turtles' },
            },
        },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })
    console.dir(allUsers, { depth: null })

    app.listen(port, () => {
        console.log("Server listening on port " + port)
    });
}
main();