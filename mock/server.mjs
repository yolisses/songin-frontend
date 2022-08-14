import jsonServer from 'json-server';
import cookieParser from 'cookie-parser';

const server = jsonServer.create();

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(cookieParser());

server.post('/sign-in', (req, res) => {
  res.cookie('session_id', 'mock_secret_session_id', {
    secure: true,
    httpOnly: true,
    maxAge: 10000000000,
  });
  res.send({
    name: 'Ulisses',
    email: 'ulisses@nano.com',
    image: 'https://picsum.photos/id/338/96/96',
  });
});

server.post('/log-out', (req, res) => {
  res.clearCookie('session_id');
  res.end();// necessary
});

server.get('/users/me', (req, res) => {
  const sessionId = req.cookies.session_id;
  if (!sessionId) {
    res.status(403);
    res.send('Missing session_id coockie');
  } else {
    res.send({
      name: 'Ulisses',
      email: 'ulisses@nano.com',
      image: 'https://picsum.photos/id/338/96/96',
    });
  }
});

server.use(
  jsonServer.rewriter({
    '/users/me': '/users/0',
    '/musics/history': '/musics?_expand=artist',
    '/musics/favorites': '/musics?_expand=artist&liked=true',
  }),
);

server.use(
  jsonServer.router('mock/db.json', { foreignKeySuffix: 'Id' }),
);

const port = 3004;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
