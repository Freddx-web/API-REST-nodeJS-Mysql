import app from './app';

const main = () => {

  app.listen(app.get('port'),() => {
    console.log(`URL: http://localhost:${app.get('port')}/api/app`);
  });
 
};

main();