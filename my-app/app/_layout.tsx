import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="views/SignupView" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="views/LoggedInView" options={{ title: 'Home', headerLeft: () => null }} />
    </Stack>
  );
}
