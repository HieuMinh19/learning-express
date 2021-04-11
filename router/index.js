import express from 'express';
import config from '../config';

const app = express();
let router = express.Router();

// Router will all be prefixed with /api/v1
app.use('/api/v1', router);

// parse application/json
app.use(bodyParser.json())

router.get('/user/hello', function (request, response) {
    console.log
});



export default router;
