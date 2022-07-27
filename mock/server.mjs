import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.post('/sign-in', (req, res) => {
  res.send({
    name: 'Ulisses',
    image: 'https://picsum.photos/id/338/96/96',
    email: 'ulisses@nano.com',
  });
});
server.use(router);

const port = 3004;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
