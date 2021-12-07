echo '开始拉取项目'
# git add --all
git reset --hard
git checkout main
git pull

# 如果传入new就表示要重新
if [ "$1" == 'new' ]
then
    echo '重新安装依赖'
    npm install
fi

npm run stop
npm run start:prod

# echo '删除pm2进程'
# pm2 delete '智能后端接口'
# echo '重新启动pm2进程'
# pm2 start pm2.config.js
