#!/bin/bash

# This file is being executed in /opt/codedeploy-agent/deployment-root/47../<deployment_id>/
# Stdout logs of this process executing can be found in /opt/codedeploy-agent/deployment-root/47../<deployment_id>/logs/scripts.log

# Here we update the server and install node and npm
echo "Installing dependencies"
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo apt-get -y install npm

# Check to make sure the symbolic link for nodejs node exists
echo "Checking for nodejs symlink"
file="/usr/bin/node"
if [ -f $file ] && [ ! -L $file ]; then
  echo "$file exists and is not a symlink"
  sudo ln -s /usr/bin/nodejs
else
  echo "$file exists and is already a symlink"
fi

# Install the application using npm
# We need to traverse to where the application bundle is copied to.
echo "Installing application with npm"
cd /var/www/
sudo npm install

echo "Installing pm2"
sudo npm install pm2 -g
