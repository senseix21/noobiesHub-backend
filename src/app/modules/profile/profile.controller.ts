import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProfileService } from "./profile.service";

const createProfile = catchAsync(async (req, res, next) => {
    const data = req.body;
    const result = await ProfileService.createProfile(data);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Profile created successfully",
        data: result
    })
});

const getSingleProfile = catchAsync(async (req, res, next) => {
    const id = parseInt(req.params.id);
    const result = await ProfileService.getSingleProfile(id);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Profile was successfully retrieved",
        data: result
    })
})

const getAllProfiles = catchAsync(async (req, res, next) => {
    const options = req.query;
    const result = await ProfileService.getAllProfiles(options);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Profile was successfully retrieved",
        data: result
    })
})

export const ProfileController = {
    createProfile,
    getSingleProfile,
    getAllProfiles
}