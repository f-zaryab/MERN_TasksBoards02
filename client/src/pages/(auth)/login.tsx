import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormLabel, FormControl, Input, Button, Text } from "@chakra-ui/react";
import AuthForm from "../../layouts/authForm";
import styles from "./styles";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);

    reset();
  };

  // console.log(watch("name"))

  return (
    <AuthForm label="Login Account">
      <form onSubmit={handleSubmit(onSubmit)} id="auth-Register">
        <FormControl sx={styles.authRegister}>
          {/* Email */}
          <>
            <FormLabel htmlFor="email" sx={styles.formLabelStyles}>
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="harry.potter@email.com"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </>
          {/* Password */}
          <>
            <FormLabel htmlFor="password" sx={styles.formLabelStyles}>
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="hpotter05"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>

        <Text sx={styles.footerText}>
          Don't have an account yet?{" "}
          <span>
            <Link to="/">Create new account</Link>
          </span>
        </Text>
      </form>
    </AuthForm>
  );
};

export default LoginPage;
