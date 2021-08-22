package main

import (
	"context"
	"log"

	"google.golang.org/grpc"

	greeter "github.com/darma2/grpc-web-cognito-alb/tool/proto"
)

func main() {
	var opts []grpc.DialOption
	conn, err := grpc.Dial("localhost:9090", opts...)
	if err != nil {
		panic(err)
	}
	defer func() {
		_ = conn.Close()
	}()
	client := greeter.NewGreeterClient(conn)
	resp, err := client.SayHello(context.Background(), &greeter.HelloRequest{Name: "Japan"})
	if err != nil {
		log.Default().Fatal(err)
	}
	log.Default().Println(resp)
}
