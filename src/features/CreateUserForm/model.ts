import * as yup from "yup";
import { createForm } from "effector-forms";
import { createRule } from "../../utils/createRule";
import { createEffect, forward } from "effector";
import {
  emailErrorField,
  maxValueField,
  minSizeField,
  minValueField,
  requiredFiled,
} from "../../constants/formError";

export const createUserFx = createEffect((prop: any) => {
  console.log("prop", prop);
  form.reset();
});

export const form = createForm({
  validateOn: ["change", "submit"],
  fields: {
    name: {
      init: "",
      rules: [
        createRule<string>({
          name: "name",
          schema: yup.string().required(requiredFiled).min(2, minSizeField(2)),
        }),
      ],
    },
    lastName: {
      init: "",
      rules: [
        createRule<string>({
          name: "lastName",
          schema: yup.string().required(requiredFiled).min(2, minSizeField(2)),
        }),
      ],
    },
    age: {
      init: 0,
      rules: [
        createRule<number>({
          name: "age",
          schema: yup
            .number()
            .required(requiredFiled)
            .min(1, minValueField(1))
            .max(150, maxValueField(150)),
        }),
      ],
    },
    email: {
      init: "",
      rules: [
        createRule<string>({
          name: "email",
          schema: yup.string().email(emailErrorField).required(requiredFiled),
        }),
      ],
    },
  },
});

forward({
  from: form.formValidated,
  to: createUserFx,
});
