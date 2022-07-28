import jsonServer from 'json-server';

const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.post('/sign-in', (req, res) => {
  res.cookie('session_id', 'mock_secret_session_id', {
    secure: true,
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60, // one week,
  });
  res.send({
    name: 'Ulisses',
    email: 'ulisses@nano.com',
    image: 'https://picsum.photos/id/338/96/96',
  });
});

const router = jsonServer.router('mock/db.json');
server.use(router);

const port = 3004;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
