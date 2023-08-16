import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();
const createUser = async (data: User): Promise<User> => {
    const result = await prisma.user.create({ data });
    return result;
}

const getAllUsers = async (options: any) => {
    const { sortBy, sortOrder, searchTerm, page, limit } = options;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
    const take = parseInt(limit) || 10;

    return await prisma.$transaction(async (tx) => {
        const result = await tx.user.findMany({
            skip,
            take,
            include: {
                userProfile: true,
                projects: true
            },
            orderBy: sortBy && sortOrder ? {
                [sortBy]: sortOrder
            } : { createdAt: 'asc' },
            where: {
                username: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            },


        });
        const total = await tx.user.count();
        return {
            meta: {
                page,
                limit,
                total
            },
            data: result
        };
    })
}

export const UserService = {
    createUser,
    getAllUsers

}
