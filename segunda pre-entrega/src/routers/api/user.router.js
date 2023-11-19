import { URI } from '../../db/mongodb.js';
import MongoStore from 'connect-mongo';
import router from './products.router.js';

const router = Router()
const SESSION_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

router.use(expressSession({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: URI,
    mongoOptions: {},
    ttl: 120,
  }), 
}));

export default router