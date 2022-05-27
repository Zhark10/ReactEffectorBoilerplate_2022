import {TCustomModalProps} from "../../../../../stores/modal/types";
import {useForm} from "react-hook-form";
import {ModalEntity} from "../../../../../stores/modal/entity";
import {TFooterButton} from "../../ModalsPortal/ModalFooter";
import {EButtonColor, EButtonType} from "../../../atoms/UIButton/UIButton";
import { ProfileEntity } from "../../../../../stores/profile/entity";

export const useViewModel = (props: TCustomModalProps) => {
  const formMethods = useForm({ mode: 'onChange', reValidateMode: 'onChange', defaultValues: props.data });

  const cancel = () => {
    ModalEntity.events.remove()
  }

  const onSubmit = (formData: any) => {
    ProfileEntity.events.profileUpdate(formData)
    ModalEntity.events.remove()
  };

  const footerButtons: TFooterButton[] = [
    { text: "Сохранить", cb: formMethods.handleSubmit(onSubmit), color: EButtonColor.PRIMARY },
    { text: "Отмена", cb: cancel, type: EButtonType.OUTLINED }
  ]

  return {
    methods: {
      formMethods,
    },
    data: {
      footerButtons,
    }
  }
}