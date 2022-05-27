import {useStore} from 'effector-react';
import {AppDomain} from '../AppDomain';
import {TModal} from './types';

const ModalDomain = AppDomain.createDomain();

const add = ModalDomain.createEvent<TModal>();
const remove = ModalDomain.createEvent();

const $modals = ModalDomain.createStore<TModal[]>([])
  .on(add, (state, modal) => [...state, modal])
  .on(remove, (state) => state.slice(0, state.length - 1))

export const ModalEntity = {
  selectors: {
    useModals: () => useStore($modals),
  },
  events: {
    add,
    remove
  }
};
