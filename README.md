nvm install 14.18.0
nvm use 14.18.0
npm run watch
ctrl + c to exit

Errors:
"Error: listen EADDRINUSE: address already in use :::9000"
lsof -i :9000
kill -9 PID