import { PrismaClient, Project } from "@prisma/client";

const prisma = new PrismaClient();

const createProject = async (data: Project) => {
    const result = await prisma.project.create({ data });
    return result;
}

const getProject = async (id: number) => {
    const result = await prisma.project.findUnique({
        where: { id: id },
    })
    return result;
}

export const ProjectService = {
    createProject,
    getProject
}