import app from './config/app';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
