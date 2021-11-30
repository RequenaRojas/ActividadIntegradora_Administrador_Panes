import  express from 'express'
import  morgan from 'morgan'
import  path from 'path'
const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ejs from 'ejs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// settings
app.set('port', process.env.PORT || 3030);
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.renderFile)
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

import routes from './routes/index.js';

// routes
app.use(routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

