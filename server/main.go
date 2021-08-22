package main

import (
	"context"
	"fmt"
	"log"
	"net"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_recovery "github.com/grpc-ecosystem/go-grpc-middleware/recovery"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	grpcHealth "google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"

	greeter "github.com/darma2/grpc-web-cognito-alb/server/proto"
)

type (
	HealthzHandler struct {}
	GreeterHandler struct {
		greeter.UnimplementedGreeterServer
	}
)

func main() {
	healthzHandler := &HealthzHandler{}
	greeterHandler := &GreeterHandler{}
	grpcServer := grpc.NewServer(grpc.UnaryInterceptor(
		grpc_middleware.ChainUnaryServer(
			grpc_recovery.UnaryServerInterceptor(),
		),
	))
	reflection.Register(grpcServer)
	grpcHealth.RegisterHealthServer(grpcServer, healthzHandler)
	greeter.RegisterGreeterServer(grpcServer, greeterHandler)

	listen, err := net.Listen("tcp", ":9090")
	if err != nil {
		panic(err)
	}
	log.Default().Println("start grpc server.")
	if err = grpcServer.Serve(listen); err != nil {
		panic(err)
	}
	log.Default().Println("end grpc server.")
}

func (h *HealthzHandler) Check(_ context.Context, _ *grpcHealth.HealthCheckRequest) (*grpcHealth.HealthCheckResponse, error) {
	log.Default().Println("health check now")
	return &grpcHealth.HealthCheckResponse{
		Status: grpcHealth.HealthCheckResponse_SERVING,
	}, nil
}

func (h *HealthzHandler) Watch(_ *grpcHealth.HealthCheckRequest, _ grpcHealth.Health_WatchServer) error {
	return status.Error(codes.Unimplemented, "watch method not implemented.")
}

func (h *GreeterHandler) SayHello(_ context.Context, r *greeter.HelloRequest) (*greeter.HelloResponse, error) {
	log.Default().Println("say hello now")
	response := fmt.Sprintf("Hello, %s!!", r.Name)
	return &greeter.HelloResponse{
		Message: response,
	}, nil
}

func (h *GreeterHandler) SayHeader(ctx context.Context, _ *greeter.HeaderRequest) (*greeter.HeaderResponse, error) {
	log.Default().Println("say header now")
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return &greeter.HeaderResponse{}, nil
	}
	response := make(map[string]string)
	for key, data := range md {
		log.Default().Println("*** data: %+v", data)
		for _, value := range data {
			response[key] = value
		}
	}
	return &greeter.HeaderResponse{
		Header: response,
	}, nil
}

func (h *GreeterHandler) MustEmbedUnimplementedGreeterServer() {}
