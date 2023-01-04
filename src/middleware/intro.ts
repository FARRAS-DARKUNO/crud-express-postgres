import { asyncMw } from "express-asyncmw";

export const createIntroMw = asyncMw(async (req,res, next) => {
    req.intro = "welcome to learing Express with PostgresSQL"
    return next()
})

export const resultIntroMw = asyncMw(async(req, res, next) => {
    return res.status(200).json({
        status : 200,
        data : req.intro
    })
})