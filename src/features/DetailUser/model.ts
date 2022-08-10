import {
  createEffect,
  createEvent,
  createStore,
  Effect,
  forward,
  sample,
} from "effector";
import { sleep } from "../../utils/sleep";

export enum UserInfoStoreStatus {
  Initial = "initial",
  Error = "error",
  Loading = "loading",
  Done = "done",
}
export const getUserInfo = createEvent<number>({ sid: "getUserInfo" });
export const resetUserInfoStore = createEvent({ sid: "resetUserInfoStore" });

export const getUserInfoFx = createEffect<(id: number) => Promise<UserInfo>>({
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

forward({
  from: getUserInfo,
  to: getUserInfoFx,
});
