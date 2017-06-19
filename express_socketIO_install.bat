@echo off
call npm cache clean -f
call npm install -g n
call nvm install stable
n stable
call npm update
call npm install express
call npm install socket.io
pause