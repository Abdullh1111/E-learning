import { appError } from "./appError";
import { NextFunction, Request, RequestHandler, Response } from "express"

const globalErrorHandler = (err:appError, req:Request, res:Response, next:NextFunction) => {
    const status = err.status || 500
    const message = err.message || "Enternal server error"
    res.status(status).json({
        success: false,
        message: message
    })
}

export default globalErrorHandler
