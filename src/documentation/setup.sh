root_dir="ecom"

ecom_common="ecom-common"
ecom_backend="ecom-backend"
ecom_frontend="ecom-frontend"
ecom_backend_image_dir="$root_dir/ecom-image"
ecom_solr="ecom-solr"


echo -e '
Choose the package to setup ---- (Enter to setup all) \n
1: -------------- ecom-backend  ---------------------------- \n
2: -------------- ecom-frontend  --------------------------- \n
3: -------------- ecom-backend & ecom-frontend  ------------ \n
4: -------------- ecom-solr -----------------------------
'

read num

function backend {
  echo 'You select backend'

  echo "Cleaning directories........."
  rm -rf $root_dir/$ecom_common
  rm -rf $root_dir/$ecom_backend
  rm -rf $ecom_backend_image_dir

  echo "Creating directories..........."
  mkdir -p -- $root_dir
  mkdir -p -- $root_dir/$ecom_common
  mkdir -p -- $root_dir/$ecom_backend
  mkdir -p -- $ecom_backend_image_dir
  cd $root_dir

  # ecom-common
  git clone "git@bitbucket.org:simec-web/$ecom_common.git"
  cd $ecom_common

  echo "Installing $ecom_common ......."
  yarn install

  echo "Building $ecom_common ........."
  yarn run build

  cd "src/assets"
  cp -r -t ../../../../$ecom_backend_image_dir image-company image-profile index.html
  cd ../../..

  # ecom-backend
  git clone "git@bitbucket.org:simec-web/$ecom_backend.git"
  cd $ecom_backend

  echo "Installing $ecom_backend ......."
  yarn install
  cd ../..

}

function frontend {
  echo 'You select frontend'

  echo "Cleaning directories........."
  rm -rf $root_dir/$ecom_frontend

  echo "Creating directories..........."
  mkdir -p -- $root_dir
  mkdir -p -- $root_dir/$ecom_frontend
  cd $root_dir

  # ecom-frontend
  git clone "git@bitbucket.org:simec-web/$ecom_frontend.git"
  cd $ecom_frontend

  echo "Installing $ecom_frontend ......."
  yarn install
  cd ../..

}

function solr {
  echo 'You select solr'

  echo "Cleaning directories........."
  rm -rf $root_dir/$ecom_solr

  echo "Creating directories..........."
  mkdir -p -- $root_dir
  mkdir -p -- $root_dir/$ecom_solr
  cd $root_dir

  # ecom-be-solr
  git clone "git@bitbucket.org:simec-web/$ecom_solr.git"

}

case $num in
  1)
    backend
    ;;
  2)
    frontend
     ;;
  3)
    backend
    frontend
    ;;
  4)
    solr
    ;;
  *)
    backend
    frontend
    solr ;;
esac
