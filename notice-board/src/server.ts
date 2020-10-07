import * as dotenv from 'dotenv';
import app from './config/app';
import logger from './config/winston';

dotenv.config();

// programming error
// process.on('unhandledRejection', (err) => {
//   console.log(err);
//   process.exit(1);
// });
// process.on('uncaughtException', (err) => {
//   console.log(err);
//   process.exit(1);
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // logger.debug(`Express server listening on port ${PORT}`);
  console.log(`Express server listening on port ${PORT}`);
});
