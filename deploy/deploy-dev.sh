#!/usr/local/bin/bash

# Author: Juan Minaya Leon <minayaleon@gmail.com>

# Run project with docker-compose
# docker exec -it eat_fe_app bash && yarn build && exit
# ssh -i ~/Dropbox/Credentials/techgenies/tg/tg-eat-server-kp.pem jminaya@ec2-75-101-195-169.compute-1.amazonaws.com "mkdir eat-dev.techgenies.us"
ssh -i ~/Dropbox/Credentials/techgenies/tg/tg-eat-server-kp.pem jminaya@ec2-75-101-195-169.compute-1.amazonaws.com "sudo rm -rf /var/www/eat-dev.techgenies.us"
scp -i ~/Dropbox/Credentials/techgenies/tg/tg-eat-server-kp.pem -P 22 -r dist/* jminaya@ec2-75-101-195-169.compute-1.amazonaws.com:eat-dev.techgenies.us
ssh -i ~/Dropbox/Credentials/techgenies/tg/tg-eat-server-kp.pem jminaya@ec2-75-101-195-169.compute-1.amazonaws.com "sudo mv eat-dev.techgenies.us /var/www/eat-dev.techgenies.us"

rm -rf dist
echo "eat-dev.techgenies.us is ready"
