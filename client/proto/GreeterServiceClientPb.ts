/**
 * @fileoverview gRPC-Web generated client stub for greeter
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as greeter_pb from './greeter_pb';


export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayHello = new grpcWeb.AbstractClientBase.MethodInfo(
    greeter_pb.HelloResponse,
    (request: greeter_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    greeter_pb.HelloResponse.deserializeBinary
  );

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<greeter_pb.HelloResponse>;

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: greeter_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<greeter_pb.HelloResponse>;

  sayHello(
    request: greeter_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: greeter_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greeter.Greeter/SayHello',
        request,
        metadata || {},
        this.methodInfoSayHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greeter.Greeter/SayHello',
    request,
    metadata || {},
    this.methodInfoSayHello);
  }

  methodInfoSayHeader = new grpcWeb.AbstractClientBase.MethodInfo(
    greeter_pb.HeaderResponse,
    (request: greeter_pb.HeaderRequest) => {
      return request.serializeBinary();
    },
    greeter_pb.HeaderResponse.deserializeBinary
  );

  sayHeader(
    request: greeter_pb.HeaderRequest,
    metadata: grpcWeb.Metadata | null): Promise<greeter_pb.HeaderResponse>;

  sayHeader(
    request: greeter_pb.HeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: greeter_pb.HeaderResponse) => void): grpcWeb.ClientReadableStream<greeter_pb.HeaderResponse>;

  sayHeader(
    request: greeter_pb.HeaderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: greeter_pb.HeaderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greeter.Greeter/SayHeader',
        request,
        metadata || {},
        this.methodInfoSayHeader,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greeter.Greeter/SayHeader',
    request,
    metadata || {},
    this.methodInfoSayHeader);
  }

}

