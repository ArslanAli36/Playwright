const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const PROTO_PATH = path.join(__dirname, "../proto/member.proto");

const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(packageDef);

const members = {}; // in-memory DB

function startServer() {
  const server = new grpc.Server();

  server.addService(
    grpcObj.member.MemberService.service,
    {
      CreateMember: (call, cb) => {
        const member = call.request;
        members[member.id] = member;
        cb(null, member);
      },

      GetMember: (call, cb) => {
        const member = members[call.request.id];
        cb(null, member || {});
      },

      UpdateMember: (call, cb) => {
        const member = call.request;
        members[member.id] = member;
        cb(null, member);
      },

      DeleteMember: (call, cb) => {
        delete members[call.request.id];
        cb(null, { success: true });
      }
    }
  );

  server.bindAsync(
    "localhost:50051",
    grpc.ServerCredentials.createInsecure(),
    (err) => {
      if (err) throw err;
      server.start();
      console.log("gRPC Server running on 50051");
    }
  );
}

startServer();