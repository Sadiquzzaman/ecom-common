root_dir="ecom"
deploy_dir="deploy"
frontend_deploy_dir="/var/www/html"

ecom_common="ecom-common"
ecom_backend="ecom-backend"
ecom_frontend="ecom-frontend"
ecom_backend_image_dir="$deploy_dir/ecom-image"
ecom_solr="ecom-solr"

echo -e '
Choose the package to setup ---- (Enter to setup all) \n
1: -------------- ecom-backend  ---------------------------- \n
2: -------------- ecom-frontend  --------------------------- \n
3: -------------- ecom-backend & ecom-frontend  ------------ \n
4: -------------- ecom-be-solr -----------------------------
'

read num

function backend() {
  echo 'You select backend'

  echo "Cleaning directories........."
  rm -rf $root_dir
  rm -rf $deploy_dir/$ecom_backend
  rm -rf $ecom_backend_image_dir/image-temp
  rm -rf "~/.cache/"

  echo "Creating directories..........."
  mkdir -p -- $root_dir
  mkdir -p -- $deploy_dir
  mkdir -p -- $root_dir/$ecom_common
  mkdir -p -- $root_dir/$ecom_backend
  mkdir -p -- $ecom_backend_image_dir
  cd $root_dir

  # ecom-common
  git clone -b release/simec "git@bitbucket.org:simec-web/$ecom_common.git"
  cd $ecom_common

  echo "Installing $ecom_common ......."
  cp -rf env/.env.simec env/.env
  yarn install

  echo "Building $ecom_common ........."
  yarn run build

  cd "src/assets"
  cp -r -t ../../../../$ecom_backend_image_dir image-company image-profile index.html
  cd ../..

  cd "src/documentation"
  cp -rf -t ../../../.. bot.sh deploy.sh deploy-aws.sh deploy-aws-simec.sh
  cd ../..

  rm -rf src .eslintrc.js .gitignore .prettierrc nest-cli.json yarn.lock

  cd ..

  # ecom-backend
  git clone -b release/simec "git@bitbucket.org:simec-web/$ecom_backend.git"
  cd $ecom_backend

  echo "Installing $ecom_backend ......."
  cp -rf env/.env.simec env/.env
  yarn install

  echo "Building $ecom_backend ........."
  yarn run build

  echo "Copying $ecom_backend for deploying ............"
  mkdir -p ../../$deploy_dir/$ecom_backend
  cp -r -t ../../$deploy_dir/$ecom_backend node_modules dist test package.json env tsconfig.json tsconfig.build.json

  cd

  chmod +x deploy.sh
  chmod +x bot.sh
}

function frontend() {
  echo 'You select frontend'

  echo "Cleaning directories........."
  rm -rf $root_dir
  rm -rf $frontend_deploy_dir/$ecom_frontend

  echo "Creating directories..........."
  mkdir -p -- $root_dir
  mkdir -p -- $root_dir/$ecom_frontend
  cd $root_dir

  # ecom-frontend
  git clone -b release/simec "git@bitbucket.org:simec-web/$ecom_frontend.git"
  cd $ecom_frontend

  echo "Installing $ecom_frontend ......."
  cp -rf src/environments/environment.simec.ts src/environments/environment.prod.ts
  yarn install

  echo "Building $ecom_frontend ........."
  yarn run build

  echo "Copying $ecom_frontend for deploying ............"
  cp -r -t ../../$deploy_dir $ecom_frontend

  cd
}

function solr() {
  echo 'You select solr'

  echo "Cleaning directories........."
  rm -rf $deploy_dir/$ecom_solr

  echo "Creating directories..........."
  mkdir -p -- $deploy_dir
  mkdir -p -- $deploy_dir/$ecom_solr

  cd $deploy_dir
  git clone -b release/simec "git@bitbucket.org:simec-web/$ecom_solr.git"

  cd
}

function nginx() {
  echo 'Restarting NGINX server'
  sudo service nginx restart
  echo 'NGINX server is restarted'
}

function apiServer() {
  echo 'Restarting API server'
  cd  $deploy_dir/$ecom_backend;

  yarn run stop:server;
  yarn run start:server;

  cd
  pm2 logs
}

function permission() {
  echo "Deleting source files......."

  rm -rf $root_dir
  sudo chmod -R 755 $deploy_dir

  cd
}

case $num in
1)
  backend
  permission
  apiServer
  ;;
2)
  frontend
  permission
  nginx
  ;;
3)
  backend
  frontend
  permission
  nginx
  apiServer
  ;;
4)
  solr
  permission
  apiServer
  ;;
*)
  backend
  frontend
  solr
  permission
  nginx
  apiServer
  ;;
esac
