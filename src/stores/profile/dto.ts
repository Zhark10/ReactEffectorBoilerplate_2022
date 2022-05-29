import { TUser } from "./types"

export const ProfileDTO = (data: TUser) => {
  // YOUR CUSTOM DTO LOGIC...
  return {
    ...data
  }
}