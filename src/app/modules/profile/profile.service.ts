import { PrismaClient, UserProfile } from "@prisma/client";

const prisma = new PrismaClient();

const createProfile = async (data: UserProfile) => {
    const result = await prisma.userProfile.create({ data });
    return result;
}

const getSingleProfile = async (id: number) => {
    const result = await prisma.userProfile.findUnique({
        where: {
            id: id
        }
    })
    return result;
}

const getAllProfiles = async (options: any) => {
    const { searchTerm } = options;
    const result = await prisma.userProfile.findMany({
        where: {
            introduction: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        }
    });

    return result;
}

export const ProfileService = {
    createProfile,
    getSingleProfile,
    getAllProfiles
}