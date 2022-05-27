import {MODALS} from "../../view/components/organisms/ModalsPortal/Modals";

export type TCustomModalProps = {
  data?: any;
  [property: string]: any;
}

export interface TModal {
  name: keyof typeof MODALS;
  toNextModalProps: TCustomModalProps;
}