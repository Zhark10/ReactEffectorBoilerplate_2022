import {useStore} from 'effector-react';
import {AppDomain} from '../AppDomain';
import {TNotice} from './types/TNotice';

const NoticeDomain = AppDomain.createDomain();

const add = NoticeDomain.createEvent<TNotice>();
const remove = NoticeDomain.createEvent();

const $notices = NoticeDomain.createStore<TNotice[]>([]).on(add, (state, notice) => [...state, notice])

$notices.watch((state) => {
  if (state?.length) {
    const removeLastNotice = setTimeout(() =>{
      return state.length = state.length - 1
    }, 0)
    return () => clearTimeout(removeLastNotice)
  }
})

export const NoticeEntity = {
  selectors: {
    useNotices: () => useStore($notices),
  },
  events: {
    add,
    remove
  }
};
