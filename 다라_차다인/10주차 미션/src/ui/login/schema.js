import * as yup from "yup";

export const schema = yup
    .object().shape({
        username: yup
            .string()
            .required("닉네임을 입력해주세요!")
            .transform((v) => v.replace(/ /g, "")),

        password: yup
            .string()
            .required("비밀번호를 입력해주세요!")
            .min(4, "최소 4자리 이상 입력해주세요.")
            .max(12, "최대 12자리까지 입력 가능합니다.")
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
                "비밀번호는 영어, 숫자, 특수문자를 포함해주세요.")
            .transform((v) => v.replace(/ /g, "")),
    }).required();