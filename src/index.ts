import { PrismaClient } from "@prisma/client";
import app from "./app";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5050;

async function main() {

    app.listen(port, () => {
        console.log("Server listening on port " + port)
    });
}
main();