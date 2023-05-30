echo -e '
Choose the what you want: (Enter to run 1 and 2) \n
1: ------------------------ restart nginx  ----------------------------- \n
2: ---------------------- restart API server ----------------------------- \n
3: ------------------------   run seeder   ----------------------------- \n
4: ------------------------   run faker    -----------------------------
'

read num

function nginx() {
  echo 'Restarting NGINX server'
  sudo service nginx restart
  echo 'NGINX server is restarted'
}

function apiServer() {
  echo 'Restarting API server'
  cd deploy/ecom-backend;
  yarn run stop:server;
  yarn run start:server;
  cd
}

function seeder() {
  echo 'Running seeder'

  echo 'Deleting ecom database....'
  sudo service postgresql restart
  sudo -i -u postgres psql -c 'DROP DATABASE ecom'

  echo 'Creating db_ebonear database....'
  sudo -i -u postgres psql -c 'CREATE DATABASE ecom'

  echo 'Initializing seeder'
  cd deploy/ecom-backend;
  yarn run seeder:prod;
  cd
}

function faker() {
  echo 'Running faker'
  
  echo 'Deleting ecom database....'
  sudo service postgresql restart
  sudo -i -u postgres psql -c 'DROP DATABASE ecom'

  echo 'Creating db_ebonear database....'
  sudo -i -u postgres psql -c 'CREATE DATABASE ecom'

  cd deploy/ecom-backend;
  yarn run faker:prod;
  cd
}

case $num in
1)
  nginx
  ;;
2)
  apiServer
  pm2 logs
  ;;
3)
  seeder
  apiServer
  ;;
4)
  faker
  apiServer
  ;;
*)
  nginx
  apiServer
  ;;
esac
