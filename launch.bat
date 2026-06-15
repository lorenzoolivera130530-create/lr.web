@echo off
start cmd /k "cd /d C:\Users\loren\Desktop\lr.web && python -m http.server 5500"
start cmd /k "cloudflared tunnel --protocol http2 --url http://127.0.0.1:5500 run lrweb"