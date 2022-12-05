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
$ helm install postgres k8s/postrges-chart

$ helm install backend-todo-list k8s/service-chart
```