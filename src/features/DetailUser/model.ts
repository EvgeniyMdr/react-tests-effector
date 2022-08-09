import { createEffect, createEvent, createStore } from "effector";
import { sleep } from "../../utils/sleep";

export enum UserInfoStoreStatus {
  Initial = "initial",
  Error = "error",
  Loading = "loading",
  Done = "done",
}

export const resetUserInfoStore = createEvent({ sid: "resetUserInfoStore" });

export const getUserInfoFx = createEffect({
  sid: "getUserInfoFx",
  handler: async (id: number) => {
    await sleep();
    const resp = await fetch(`https://dummyjson.com/users/${id}`);

    return resp.json();
  },
});

export const $userInfo = createStore<UserInfo | null>(null, {
  sid: "userInfoStore",
})
  .on(getUserInfoFx.done, (_, { result }) => {
    return result;
  })
  .on(resetUserInfoStore, () => null);

export const $userInfoStoreStatus = createStore<UserInfoStoreStatus>(
  UserInfoStoreStatus.Initial,
  {
    sid: "userInfoStoreStatus",
  }
)
  .on(getUserInfoFx.pending, (_, pending) => {
    if (pending) {
      return UserInfoStoreStatus.Loading;
    }
  })
  .on(getUserInfoFx.fail, () => UserInfoStoreStatus.Error)
  .on(getUserInfoFx.done, () => UserInfoStoreStatus.Done)
  .on(resetUserInfoStore, () => UserInfoStoreStatus.Initial);
