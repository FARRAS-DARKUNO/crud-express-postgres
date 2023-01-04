import { Router } from "express";

import *as mahasiswa from '../middleware/mahasiswaMw'

const route = Router()

route.get('/',mahasiswa.getMahasiswaMw, mahasiswa.resultMahasiswaMw)

route.post('/', mahasiswa.postMahasiswaMw, mahasiswa.resultPostMahasiswaMw)

route.delete('/',mahasiswa.deleteDataMahasiswaWm)

route.patch('/', mahasiswa.updateDataMahasiswaWm,mahasiswa.resultPostMahasiswaMw)



export default route