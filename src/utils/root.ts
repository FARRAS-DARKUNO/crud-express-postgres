import express, {Express} from 'express'
import cors from 'cors';
import intro from '../routes/intro'
import mahasiswaRt from '../routes/mahasiswaRt'

export default (app : Express) => {
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(express.static('public'))
    app.use(cors())

    app.use('/', intro)
    app.use('/mahasiswa', mahasiswaRt)
}