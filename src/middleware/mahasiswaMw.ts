import { asyncMw } from "express-asyncmw";
import pool from "../utils/config";

export const getMahasiswaMw = asyncMw(async (req,res, next) => {
    const dataTable = await pool.query(`SELECT * FROM public."Mahasiswa"`)

    if (dataTable){
        req.listMahasiswa = dataTable.rows
        req.constMahasiswa = dataTable.rowCount
        return next()
    }

    return res.status(400).json({
        status : 400,
        data : "error"
    })

})

export const postMahasiswaMw = asyncMw(async (req,res, next) => {

    const dataTable = await pool.query(`INSERT INTO public."Mahasiswa" (nim_mhs, name_mhs, prodi, semester)
	                                    VALUES ($1,$2,$3,$4)`,
                                        [req.body.nim_mhs, req.body.name_mhs, req.body.prodi, req.body.semester])

    if (dataTable){
        req.dataPostDataMahasiswa = {
            nim_mhs : req.body.nim_mhs,
            name_mhs : req.body.name_mhs,
            prodi : req.body.prodi,
            semester : req.body.semester
        }
        return next()
    }

    return res.status(400).json({
        status : 400,
        data : "error"
    })
})

export const updateDataMahasiswaWm =  asyncMw(async(req, res, next) => {
    
    const dataTable = await pool.query(`UPDATE public."Mahasiswa"
	                                    SET name_mhs='${req.body.name_mhs || 0}', prodi='${req.body.prodi || 0}', semester=${req.body.semester || 0}
	                                    WHERE nim_mhs = '${req.body.nim_mhs}';`)

    if (dataTable){
        req.dataPostDataMahasiswa = {
            nim_mhs : req.body.nim_mhs,
            name_mhs : req.body.name_mhs,
            prodi : req.body.prodi,
            semester : req.body.semester
        }
        return next()
    }

    return res.status(400).json({
        status : 400,
        data : "error"
    }) 
})

export const deleteDataMahasiswaWm = asyncMw(async(req, res, next) => {

    const dataTable = await pool.query(`DELETE FROM public."Mahasiswa"
	                                    WHERE nim_mhs = '${req.body.nim_mhs}'`)


    if (dataTable){
        return res.status(200).json({
            status : 200,
            data : `Successfully Deleteing data where ${req.body.nim_mhs}`
        })      
    }

    return res.status(400).json({
        status : 400,
        data : "error"
    })                     
})

export const resultMahasiswaMw = asyncMw(async(req, res, next) => {
    return res.status(200).json({
        status : 200,
        data : req.listMahasiswa,
        count : req.constMahasiswa
    })
})

export const resultPostMahasiswaMw = asyncMw(async(req, res, next) => {
    return res.status(200).json({
        status : 200,
        data : req.dataPostDataMahasiswa,
    })
})