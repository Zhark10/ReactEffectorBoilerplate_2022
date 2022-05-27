import {useForm} from "react-hook-form";
import { AuthEntity } from "../../../../stores/auth/entity";

export const useViewModel = () => {
  const isAuth = AuthEntity.selectors.useIsAuthorized();

  const { handleSubmit, control, getValues } = useForm();
  const values = getValues()

  const onSubmit = (formData: any) => {
    AuthEntity.events.formSubmitted(formData)
  };

  return {
    methods: {
      submit: handleSubmit(onSubmit)
    },
    data: {
      control,
      values,
      isAuth,
    }
  }
}
