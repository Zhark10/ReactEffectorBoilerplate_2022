import { TProfile } from "./types"

export const ProfileDTO = (data: TProfile) => {
  // YOUR CUSTOM DTO LOGIC...
  return {
    ...data
  }
}