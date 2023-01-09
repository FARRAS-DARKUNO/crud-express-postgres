import { Router } from "express";

import *as mahasiswa from '../middleware/mahasiswaMw'

const route = Router()

route.get('/',mahasiswa.getMahasiswaMw, mahasiswa.resultMahasiswaMw)
        .post('/', mahasiswa.postMahasiswaMw, mahasiswa.resultPostMahasiswaMw)
            .delete('/',mahasiswa.deleteDataMahasiswaWm)
                .patch('/', mahasiswa.updateDataMahasiswaWm,mahasiswa.resultPostMahasiswaMw)



export default route