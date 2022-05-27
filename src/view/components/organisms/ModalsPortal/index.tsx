import React from "react"
import {ModalEntity} from "../../../../stores/modal/entity"
import {MODALS} from "./Modals"
import {DynamicModal} from "./DynamicModal"

export const ModalsPortal: React.FC = () => {
  const modals = ModalEntity.selectors.useModals()

  return <>
    {modals.map((modal, key) => {
      const DynamicModalContent = MODALS[modal.name]
      return (
        <DynamicModal key={key}>
          <DynamicModalContent {...modal.toNextModalProps}/>
        </DynamicModal>
      )
    })}
  </>
}