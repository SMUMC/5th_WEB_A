import * as yup from "yup";

export const schema = yup
    .object().shape({
        username: yup
            .string()
            .required("이름을 입력해주세요!"),

        email: yup
            .string()
            .required("이메일을 입력해주세요!")
            .matches(
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                "이메일 양식을 맞춰서 @를 꼭 써주세요!"
            ),

        age: yup
            .number()
            .required("나이를 입력해주세요!")
            .typeError("숫자로 입력해주세요!")
            .integer("나이는 양의 정수여야 합니다.")
            .test("is-not-negative", "나이는 음수가 될 수 없습니다.", (age) => age >= 0)
            .when(
                [],
                (age, schema) => {
                    return age >= 0 ? schema.min(20, '19세 이상이어야 합니다.') : schema;
                }

            ),

        password: yup
            .string()
            .required("비밀번호를 입력해주세요!")
            .min(4, "최소 4자리 이상 입력해주세요.")
            .max(12, "최대 12자리까지 입력 가능합니다.")
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
                "비밀번호는 영어, 숫자, 특수문자를 포함해주세요."),

        checkpassword: yup
            .string()
            .required("비밀번호를 다시 입력해주세요!")
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
    }).required();