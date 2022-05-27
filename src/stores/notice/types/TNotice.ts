export interface TNotice {
  title?: string;
  message: string;
  buttonActions?: TButtonAction[]
  variant: ENoticeType;
}

export type TButtonAction = {
  title: string;
  cb: (data: any) => void
}

export enum ENoticeType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = 'info',
}