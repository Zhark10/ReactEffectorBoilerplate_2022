
import { AuthEntity } from "../../../../stores/auth/entity";
import { ModalEntity } from "../../../../stores/modal/entity";
import { ProfileEntity } from "../../../../stores/profile/entity";

export const useViewModel = () => {
  const profile = ProfileEntity.selectors.useProfile()

  const showProfileCRUDModal = () => {
    ModalEntity.events.add({ name: "ModalProfile", toNextModalProps: {} })
  }

  const logout = () => {
    AuthEntity.events.logoutClicked()
  }

  return {
    methods: {
      showProfileCRUDModal,
      logout,
    },
    data: {
      profile
    }
  }
}
