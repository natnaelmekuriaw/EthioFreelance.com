const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const passport = require('passport');
//const user = require('./model/User');
//const auth = require('./config/hellocash')
var cors = require('cors')
//require('dotenv').config()



// console.log(require('dotenv').config())



const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))
require('./auth/auth')

// auth()

// const upload = multer({
//   dest: './uploads',
// });

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1]
//     cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`)
//   }
// })



app.use(cors())

mongoose.connect('mongodb://localhost:27017/ethiofreelance_db',{
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useFindAndModify: true,
  useCreateIndex: true,
}).then(()=> console.log("connected to the database!")).catch((err) => console.log(err));

mongoose.Promise = global.Promise;
require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');
const accountRoute = require('./routes/accountRoute');
const jobApplicantRoute = require('./routes/jobApplicantRoute');
const jobRoutes = require('./routes/jobRoutes');
const profile = require('./routes/Profile');
const payment = require('./routes/Payment');
const adminRoute = require('./routes/adminRoute');
const webhook = require('./routes/webhook');
// app.post('', upload.single('file'), ())
const webhookconfig = require('./config/webhookconfig')

webhookconfig.webhookStarter()

const refre_shtoken = require('./config/refreshtoken')
refre_shtoken.refreshToken()


const passwordRoute = require('./routes/passwordRoute');
const authent = require('./routes/auth');

app.use('/api', routes);
app.use('/mycallbackhandler', webhook);
app.use('/api/job', jobRoutes);
// app.use('/api/profile', profile);
// app.use('/api', secureRoute);
app.use('/api', accountRoute);
app.use('/api/', jobApplicantRoute);
app.use('/api', adminRoute);
app.use('/api/payment', payment);
app.use('/api/profile', profile );
app.use('/api', feedbackRoute);
app.use('/api', jobRoute);
app.use('/api', FAQRoute);
app.use('/api', activityLogRoute);
app.use('/api', ratingReviewRoute);
app.use('/api/user', profile );
app.use('/api', authent)
// app.use('api/password', passwordRoute);


// Plug in the JWT strategy as a middleware so only verified users can access this route.
// app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// app.use('/api/user', passport.authenticate('jwt', { session: false }), secureRoute);
// app.use('/api/job', jobRoutes);

app.listen(process.env.PORT || 8081, () =>
  console.log(`ethiofreelance app listening on port 8081`),
);