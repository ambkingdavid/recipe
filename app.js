import dotenv from 'dotenv';

// package imports
import express, { urlencoded } from 'express';
import session from 'express-session';
import expressLayouts from 'express-ejs-layouts';
import morgan from 'morgan';
import SessionStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import mongoClient from '../notepad-app/config/db.js';

// routes
import indexRoutes from './server/routes/indexRoutes.js';
// import categoryRoutes from './server/routes/foodRoutes.js';

dotenv.config();
mongoClient();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: SessionStore.create({
        mongoUrl: process.env.SESSION_STORAGE,
    }),
    cookie: {
        httpOnly: true,
    },
}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/index');
app.set('view engine', 'ejs');

app.use('/', indexRoutes);
// app.use('/', categoryRoutes);

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});

export default app;
