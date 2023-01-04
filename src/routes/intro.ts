import { Router } from "express";
import *as intro from '../middleware/intro'

const route = Router()

route.get('/',intro.createIntroMw, intro.resultIntroMw)

export default route