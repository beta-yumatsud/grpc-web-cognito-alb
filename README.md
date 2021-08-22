# 概要
gRPC-Web + Vue.js + golang + Cognito + ALBでいい感じになるかの検証。

# アプリケーション
gRPCサーバが立ち上がり、2つのメソッドを定義しているのみ。

# 使い方
## server
* アプリケーション単体を動かすのは下記
```shell
$ go run -race main.go
```
* `Docker` で動かす場合は下記
```shell
$ ./build
$ docker build -t greeter-server .
$ docker run -p 50051:50051 -d greeter-server
```

## client
`yarn install` からの `yarn dev` でOK

## envoy
* `docker run` で動かすなら下記
```shell
$ docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.17.0
```
* buildしてから動かすのであれば下記
```shell
$ docker build -t envoy-proxy:latest .
$ docker run -p 8080:8080 -d envoy-proxy
```

# Reference
- [Notion（閲覧制限あり）](https://www.notion.so/gRPC-Web-ALB-with-Cognito-f35e129466ee42f5b95923c162d4a42d)
