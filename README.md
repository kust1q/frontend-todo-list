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

$ helm repo add romanow https://romanow.github.io/helm-charts/
$ helm search romanow

$ kind load docker-image postgres:15
$ helm install postgres -f postgres/values.yaml romanow/postgres

$ kubectl create secret generic credentials \
    --from-literal=google-client-id=<client-id> \
    --from-literal=google-client-secret=<client-secret>

$ kind load docker-image romanowalex/backend-todo-list:v2.0
$ helm install backend-todo-list -f backend/values.yaml romanow/java-service

$ kind load docker-image romanowalex/frontend-todo-list:v2.0
$ helm upgrade frontend-todo-list -f frontend/values.yaml romanow/frontend

$ echo "127.0.0.1        todo-list.ru" | sudo tee -a /etc/hosts
```