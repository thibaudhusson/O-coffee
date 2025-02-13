import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import router from './app/router.js'; 
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(session({
  secret: 'SESSION_SECRET',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false,
    maxAge: 1000 * 60 * 60 * 24, 
  }
}));
app.use(router);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});