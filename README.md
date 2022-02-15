# TODO List

## Сборка, запуск и деплой

```shell
# получение зависимостей из NPM Registry
$ npm install

# сборка приложения
$ npm run build

# локальный запуск с адресом backend http://localhost:8080
$ npm run start

# деплой в кластер Kubernetes с помощью helm-чартов
$ helm install frontend-todo-list frontend/
```

### Если используется приватный Docker Registry

```shell
kubectl create secret docker-registry \
  --docker-server=nexus.edu.inno.tech \
  --docker-username=<username> \
  --docker-password=<password> \
  --docker-email=unused \
  private-registry
```