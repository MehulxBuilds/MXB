import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error.js";
import { client } from "@repo/db";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../config/auth.js";
import { server_env as env } from "@repo/env";

interface User {
    id: string;
    email: string;
    name: string;
    image: string | null;
};

export interface AuthRequest extends Request {
    userId?: string;
    user?: User;
};

export const protect = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers),
        });

        if (!session?.session?.token) {
            throw new AppError("Not authorized. Please login.", 401);
        }

        // Get user from database
        const user = await client.user.findUnique({
            where: { id: session.user.id! },
            select: {
                id: true,
                email: true,
                name: true,
                image: true,
            },
        });

        if (!user) {
            throw new AppError("User not found", 404);
        };

        if (user.name.toLowerCase() !== env.ALLOWED_GITHUB_USERNAME.toLowerCase()) {
            throw new AppError("User not Permitted", 404);
        };

        req.userId = user.id;
        req.user = user;
        next();
    } catch (error: any) {
        if (error.name === "JsonWebTokenError") {
            return next(new AppError("Invalid token", 401));
        }
        if (error.name === "TokenExpiredError") {
            return next(new AppError("Token expired", 401));
        }
        next(error);
    }
};

export const authenticate = protect;