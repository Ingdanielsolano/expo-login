import {
  Box,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Button,
} from "native-base";
import useLogin from "./hooks/use-login";

const LoginScreen = () => {
  const { formData, setData, submit } = useLogin();

  return (
    <Box safeArea h="100%" justifyContent="center" alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="text"
              placeholder="Email"
              onChangeText={(value) => setData({ ...formData, username: value })}
            />

            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="Contraseña"
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />

            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <Button onPress={submit} marginTop={10}>
          Ingresar
        </Button>
      </Box>
    </Box>
  );
};

export default LoginScreen;
