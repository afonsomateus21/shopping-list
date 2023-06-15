import { SplashScreen, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'; 
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import THEME from '../src/theme';
import { Header } from "../src/components/Header";
import { ProductsProvider } from "../src/hooks/useProducts";

export default function Layout() {
  const [ hasLoadedFont ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium, 
    Roboto_700Bold
  });

  if (!hasLoadedFont) {
    return <SplashScreen  />
  }

  return (
    <ProductsProvider>
      <ThemeProvider theme={THEME}>
        <View style={{flex: 1}} >
          <StatusBar style="light" translucent />
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: '#2980B9',
              },
              headerTintColor: '#fff',
              headerTitle: (props) =>  <Header {...props} />,
              headerTitleAlign: 'center',
            }}
          >
            <Stack.Screen name="index" />
          </Stack>
        </View>
      </ThemeProvider>
    </ProductsProvider>
  )
}