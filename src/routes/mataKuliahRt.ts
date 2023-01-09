import { Router } from "express";
import *as mataKuliah from '../middleware/mataKuliahMw'

const route = Router()

route.get('/', mataKuliah.getMataKuliahMw,mataKuliah.resultMataKuliahMw)

export default route