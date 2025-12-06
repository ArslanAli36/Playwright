// 3. API Task – gRPC
// gRPC Endpoint: https://grpcb.in/
// Within your Playwright project, implement CRUD operations using gRPC.
// Structure the code in a clean and maintainable manner.
// Ensure that your implementation is easy for other team members to follow.

import { test, expect } from '@playwright/test';
import { client } from '../client/grpcClient';

test.describe("gRPC CRUD", () => {

  test("Create Member", async () => {
    const data = {
      id: "1",
      name: "John",
      email: "john@example.com"
    };

    const result = await rpc("CreateMember", data);
    expect(result.name).toBe("John");
  });

  test("Get Member", async () => {
    const result = await rpc("GetMember", { id: "1" });
    expect(result.email).toBe("john@example.com");
  });

  test("Update Member", async () => {
    const result = await rpc("UpdateMember", {
      id: "1",
      name: "John Updated",
      email: "updated@example.com"
    });

    expect(result.name).toBe("John Updated");
  });

  test("Delete Member", async () => {
    const result = await rpc("DeleteMember", { id: "1" });
    expect(result.success).toBe(true);
  });

});

// helper wrapper
function rpc(method: string, payload: any): Promise<any> {
  return new Promise((resolve, reject) => {
    (client as any)[method](payload, (err: any, res: any) =>
      err ? reject(err) : resolve(res)
    );
  });
}