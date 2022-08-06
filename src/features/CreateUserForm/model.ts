import * as yup from "yup";
import { createForm } from "effector-forms";
import { createRule } from "../../utils/createRule";
import { createEffect, forward } from "effector";

export const createUserFx = createEffect((prop: any) => {
  console.log("prop", prop);
});

export const form = createForm({
  validateOn: ["change", "submit"],
  fields: {
    name: {
      init: "",
      rules: [
        createRule<string>({
          name: "name",
          schema: yup.string().required().min(5),
        }),
      ],
    },
    lastName: {
      init: "",
      rules: [
        createRule<string>({
          name: "lastName",
          schema: yup.string().required().min(5),
        }),
      ],
    },
  },
});

forward({
  from: form.formValidated,
  to: createUserFx,
});
