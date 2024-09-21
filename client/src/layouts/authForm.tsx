import { Box, Heading } from "@chakra-ui/react";
import styles from "./styles";

interface AuthFormProps {
  children: React.ReactNode;
  label?: string;
}

const AuthForm = ({ children, label = "" }: AuthFormProps) => {
  return (
    <Box sx={styles.authForm} id="auth-form">
      {label && (
        <Heading as="h1" mb={4} noOfLines={1}>
          {label}
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default AuthForm;
