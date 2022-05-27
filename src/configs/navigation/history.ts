import { createBrowserHistory } from 'history';
import { createEffect, Event, sample } from "effector";

export const browserHistory = createBrowserHistory();

export const redirectFx = createEffect((path: string) =>
  browserHistory.push(path)
);

export function redirect(event: Event<any>, path: string) {
  sample({
    clock: event,
    fn: () => path,
    target: redirectFx,
  });
}
