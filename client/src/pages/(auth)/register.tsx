import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormLabel, FormControl, Input, Button, Text } from "@chakra-ui/react";
import AuthForm from "../../layouts/authForm";
import styles from "./styles";
import { Link } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required().min(4).lowercase(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

const RegisterPage = () => {
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
    <AuthForm label="Register Account">
      <form onSubmit={handleSubmit(onSubmit)} id="auth-Register">
        <FormControl sx={styles.authRegister}>
          {/* First Name */}
          <>
            <FormLabel htmlFor="firstName" sx={styles.formLabelStyles}>
              First name
            </FormLabel>
            <Input
              type="text"
              id="firstName"
              placeholder="Harry"
              {...register("firstName")}
            />

            {errors.firstName && <p>{errors.firstName.message}</p>}
          </>
          {/* Last Name */}
          <>
            <FormLabel htmlFor="lastName" sx={styles.formLabelStyles}>
              Last name
            </FormLabel>
            <Input
              type="text"
              id="lastName"
              placeholder="Potter"
              {...register("lastName")}
            />

            {errors.lastName && <p>{errors.lastName.message}</p>}
          </>
          {/* Username */}
          <>
            <FormLabel htmlFor="username" sx={styles.formLabelStyles}>
              Username
            </FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="harrypotter05"
              {...register("username")}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </>
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
          Already have a account?{" "}
          <span>
            <Link to="/login">Login my account</Link>
          </span>
        </Text>
      </form>
    </AuthForm>
  );
};

export default RegisterPage;
