import { createEffect, createEvent, createStore } from "effector";
import { sleep } from "../../utils/sleep";

export type UserShortInfo = {
  id: number;
  firstName: string;
  age: number;
  gender: string;
  image: string;
};

export enum StatusUsersStore {
  Initial = "initial",
  Error = "error",
  Loading = "loading",
  Done = "done",
}

export const resetUsersStore = createEvent();

export const getUsersFx = createEffect(async () => {
  await sleep();
  const resp = await fetch("https://dummyjson.com/users");

  return resp.json();
});

export const $statusUsersStore = createStore<StatusUsersStore>(
  StatusUsersStore.Initial
)
  .on(getUsersFx.pending, (_, pending) => {
    if (pending) {
      return StatusUsersStore.Loading;
    }
  })
  .on(getUsersFx.fail, () => StatusUsersStore.Error)
  .on(getUsersFx.done, () => StatusUsersStore.Done)
  .on(resetUsersStore, () => StatusUsersStore.Initial);

export const $users = createStore<UserShortInfo[]>([])
  .on(getUsersFx.done, (_, { result: { users } }) => {
    return users;
  })
  .on(resetUsersStore, () => []);
