import app from './app';
// import { connectToDatabase, sequelize } from './config/mysql.config';
import { User } from './models/user.entity';



const PORT = process.env.PORT || 4000;

app.listen(PORT)

// connectToDatabase().then(() => {
//    // sequelize.addModels([User]);

//     sequelize.sync({ force: true}).then(() => {
//         console.log('Db is sync!');

//         app.listen(PORT, () => {
//             console.log(`Server is running on port: ${PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.error('Unable to synch...', err);
//     });
// });


