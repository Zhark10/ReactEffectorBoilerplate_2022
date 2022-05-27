
import { ModalEntity } from "../../../../stores/modal/entity";

export const useViewModel = () => {
  const showProfileCRUDModal = () => {
    ModalEntity.events.add({ name: "ModalProfile", toNextModalProps: {} })
  }

  return {
    methods: {
      showProfileCRUDModal
    },
    data: {}
  }
}
