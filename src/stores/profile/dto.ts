import { TProfileResponse } from "./types"

export const ProfileDTO = (data: TProfileResponse) => {
  // YOUR CUSTOM DTO LOGIC...
  return {
    ...data
  }
}