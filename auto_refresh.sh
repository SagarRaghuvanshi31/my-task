#!/bin/bash

while true; do
    echo "Pulling latest changes from GitHub..."
    git -C ~/my-task pull origin main > ~/my-task/git_pull.log 2>&1

    echo "Restarting Docusaurus..."
    pkill -f "npm run start"  # Pehle se running process ko kill karega
    cd ~/my-task && nohup npm run start > ~/my-task/docusaurus.log 2>&1 &

    sleep 1  # Har 1 second ke baad check karega
done

