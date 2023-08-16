import { RequestHandler } from "express";
import { UserService } from "./user.service";
import { hashPassword } from "../../middlewares/passwordHashingMiddleware";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { IOptions } from "../../../interfaces/options";

const createUser = catchAsync(async (req, res) => {
    const { password, ...restData } = req.body;

    //hashing the password
    const hashedPassword = await hashPassword(password);
    const data = { password: hashedPassword, ...restData }

    const result = await UserService.createUser(data);
    console.log(result);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'User created successfully',
        data: result

    })
});

const getAllUsers: RequestHandler = catchAsync(async (req, res, next) => {
    const options = req.query;
    const result = await UserService.getAllUsers(options);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Users retrieved successfully!",
        meta: result.meta,
        data: result.data
    })
    next();
});


export const UserController = {
    createUser,
    getAllUsers

}