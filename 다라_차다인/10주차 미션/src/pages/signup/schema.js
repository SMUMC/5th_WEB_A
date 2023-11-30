import * as yup from "yup";

export const schema = yup
    .object().shape({
        email: yup
            .string()
            .required("이메일을 입력해주세요!")
            .email("이메일 형식에 맞게 다시 입력해주세요!")
            .transform((v) => v.replace(/ /g, "")),

        username: yup
            .string()
            .required("닉네임을 입력해주세요!")
            .transform((v) => v.replace(/ /g, "")),

        firstName: yup
            .string()
            .required("이름을 입력해주세요!")
            .transform((v) => v.replace(/ /g, "")),

        lastName: yup
            .string()
            .required("성을 입력해주세요!")
            .transform((v) => v.replace(/ /g, "")),

        age: yup
            .number()
            .transform((_, value) => (isNaN(value) ? undefined : parseFloat(value)))
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

        checkedpassword: yup
            .string()
            .required("비밀번호를 다시 입력해주세요!")
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
            .transform((v) => v.replace(/ /g, "")),
    }).required();