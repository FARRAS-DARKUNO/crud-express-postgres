import { asyncMw } from "express-asyncmw";
import pool from "../utils/config";

export const getMataKuliahMw = asyncMw(async (req,res, next) => {
    const dataTable = await pool.query(`SELECT * FROM public."MataKuliah"`)

    if (dataTable){
        req.dataMataKuliah = dataTable.rows
        return next()
    }

    return res.status(400).json({
        status : 400,
        data : "error"
    })
})

export const resultMataKuliahMw = asyncMw(async(req, res, next) => {
    return res.status(200).json({
        status : 200,
        data : req.dataMataKuliah,
        cost : req.dataMataKuliah.length
    })
})

