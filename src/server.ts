const http = require('http');
const io = require('socket.io');

export const createServer = (port: number) => {
  const server = http.createServer();

  // Graceful Shutdown
  const shutdown = () => {
    server.close();
  }
  process.on('SIGTERM', async () => await server.close())
  process.on('SIGINT', async () => await server.close())

  server.on('error', (err: any) => {
    throw err;
  });

  server.listen(port, () => {
    console.log('Server is running...');
  });
}

