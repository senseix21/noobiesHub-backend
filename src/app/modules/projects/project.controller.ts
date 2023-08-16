import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req, res, next) => {
    const data = req.body;
    const result = await ProjectService.createProject(data);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Project created successfully!',
        data: result
    })
});

const getProject = catchAsync(async (req, res, next) => {
    const id = parseInt(req.params.id);
    const result = await ProjectService.getProject(id);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project retrieved successfully!",
        data: result
    })
});

export const ProjectController = {
    createProject,
    getProject
}