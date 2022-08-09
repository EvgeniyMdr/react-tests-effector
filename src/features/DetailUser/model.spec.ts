import { allSettled, fork } from "effector";
import {
  $userInfo,
  $userInfoStoreStatus,
  getUserInfoFx,
  UserInfoStoreStatus,
} from "./model";

describe("detailUser model tests", () => {
  it("$userInfo should not be null and status should equal done", async () => {
    const handler = jest.fn((id: number) => ({
      id,
      firstName: "Ivan",
      age: 2,
      gender: "male",
      image: "img",
    }));
    const scope = fork({
      handlers: new Map([[getUserInfoFx, handler]]),
    });

    await allSettled(getUserInfoFx, { scope, params: 1 });

    expect(scope.getState($userInfo)).toStrictEqual({
      id: 1,
      firstName: "Ivan",
      age: 2,
      gender: "male",
      image: "img",
    });
    expect(scope.getState($userInfoStoreStatus)).toBe(UserInfoStoreStatus.Done);
  });

  it("$userInfo should not change and status should equal error", async () => {
    const handler = jest.fn(() => new Promise((_, rj) => rj()));

    const scope = fork({
      handlers: new Map([[getUserInfoFx, handler]]),
    });

    await allSettled(getUserInfoFx, { scope, params: 1 });

    expect(scope.getState($userInfo)).toStrictEqual(null);
    expect(scope.getState($userInfoStoreStatus)).toBe(
      UserInfoStoreStatus.Error
    );
  });
});
