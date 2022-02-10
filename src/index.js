import Server from './server';

try {
  const app = new Server();
  app.connect();
} catch (err) {
  console.log(err);
}
