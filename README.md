## Initial Setup
* `shift + control + tick` Open Terminal on VS Code
* `nvm install v17.0.1`
* `npm i`
* 
## How to Make Updates
* `shift + control + tick`
* `nvm use v17.0.1`
* `npm run dev`
* Edit files in src folder
* `ctrl + c` to exit

## How to Save Production Files
You'll need to save production ready files before you can host your website.
* `shift + control + tick`
* `nvm use v17.0.1`
* `npm run build` This will build new website files into dist folder
* Upload files inside dist folder to the server


## Errors:
If you get error like this: "Error: listen EADDRINUSE: address already in use :::9000"
* Open Terminal
* `lsof -i :9000`
* `kill -9 PID`