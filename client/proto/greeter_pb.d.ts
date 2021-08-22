import * as jspb from 'google-protobuf'



export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export class HeaderRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderRequest): HeaderRequest.AsObject;
  static serializeBinaryToWriter(message: HeaderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderRequest;
  static deserializeBinaryFromReader(message: HeaderRequest, reader: jspb.BinaryReader): HeaderRequest;
}

export namespace HeaderRequest {
  export type AsObject = {
  }
}

export class HeaderResponse extends jspb.Message {
  getHeaderMap(): jspb.Map<string, string>;
  clearHeaderMap(): HeaderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderResponse): HeaderResponse.AsObject;
  static serializeBinaryToWriter(message: HeaderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderResponse;
  static deserializeBinaryFromReader(message: HeaderResponse, reader: jspb.BinaryReader): HeaderResponse;
}

export namespace HeaderResponse {
  export type AsObject = {
    headerMap: Array<[string, string]>,
  }
}

