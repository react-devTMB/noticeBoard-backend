import app from './app';

// programming error
// process.on('unhandledRejection', (err) => {
//   console.log(err);
//   process.exit(1);
// });
// process.on('uncaughtException', (err) => {
//   console.log(err);
//   process.exit(1);
// });

app.listen(app.get('port'), () => {
  console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  // console.log('  Press CTRL-C to stop\n');
});
