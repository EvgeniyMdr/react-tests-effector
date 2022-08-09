import { allSettled, fork } from "effector";
import {
  $statusUsersStore,
  $users,
  getUsersFx,
  StatusUsersStore,
} from "./model";

describe("tests userList model", () => {
  it("$users should not empty and status should equal done", async () => {
    const fakeResp = [
      {
        id: 1,
        firstName: "Ivan",
        age: 2,
        gender: "male",
        image: "img",
      },
    ];
    const handler = jest.fn(() => ({ users: fakeResp }));
    const scope = fork({
      handlers: new Map([[getUsersFx, handler]]),
    });

    await allSettled(getUsersFx, { scope });

    expect(scope.getState($users)).toStrictEqual(fakeResp);
    expect(scope.getState($statusUsersStore)).toBe(StatusUsersStore.Done);
  });

  it("$users should not change and status should equal error", async () => {
    const handler = jest.fn(() => new Promise((_, rj) => rj()));
    const scope = fork({
      handlers: new Map([[getUsersFx, handler]]),
    });

    await allSettled(getUsersFx, { scope });

    expect(scope.getState($users)).toStrictEqual([]);
    expect(scope.getState($statusUsersStore)).toBe(StatusUsersStore.Error);
  });
});
