import Users from './controllers/Users';

const router = express.Router();

router.get('/users', Users.getAllUsers);

export default router;
