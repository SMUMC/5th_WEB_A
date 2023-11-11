import * as yup from "yup";

export const schema = yup
    .object().shape({
        username: yup
            .string()
            .required("이름을 입력해주세요!")
            .transform((v) => v.replace(/ /g, "")),

        email: yup
            .string()
            .required("이메일을 입력해주세요!")
            .email("이메일 형식에 맞게 다시 입력해주세요!")
            .transform((v) => v.replace(/ /g, "")),

        age: yup
            .number()
            .transform((_, value) => (isNaN(value) ? undefined : parseFloat(value)))
            .integer("나이를 실수로 입력할 수 없습니다.")
            .typeError("나이는 숫자로 입력해주세요!")
            .positive("나이는 양수여야 합니다.")
            .required("나이를 입력해주세요!")
            .test("", "19세 이상만 사용 가능합니다!", (v) => (v ? v >= 19 : ""))
            .nullable("나이는 숫자로 입력해주세요!"),

        password: yup
            .string()
            .required("비밀번호를 입력해주세요!")
            .min(4, "최소 4자리 이상 입력해주세요.")
            .max(12, "최대 12자리까지 입력 가능합니다.")
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
                "비밀번호는 영어, 숫자, 특수문자를 포함해주세요.")
            .transform((v) => v.replace(/ /g, "")),

        checkpassword: yup
            .string()
            .required("비밀번호를 다시 입력해주세요!")
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
            .transform((v) => v.replace(/ /g, "")),
    }).required();