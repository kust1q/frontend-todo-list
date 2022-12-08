# TODO list frontend

[![Build project](https://github.com/Romanow/todo-list-frontend/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/Romanow/todo-list-frontend/actions/workflows/build.yml)

### Сборка и локальный запуск

```shell
# устанавливаем зависимости
$ npm install
# собираем проект
$ npm run dev
# запускаем 
$ dcoker compose up postgres simple-backend -d
```

### Deploy to k8s

```shell
$ kind create cluster --config kind.yml

$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

$ echo "127.0.0.1        todo-list.local" | sudo tee -a /etc/hosts

$ kind load docker-image romanowalex/frontend-todo-list:v2.0
$ helm install frontend-todo-list frontend-chart --set domain=todo-list.local
```