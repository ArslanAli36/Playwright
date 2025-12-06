import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../proto/member.proto');

const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj: any = grpc.loadPackageDefinition(packageDef);

export const client = new grpcObj.member.MemberService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);