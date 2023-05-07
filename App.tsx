import { StatusBar } from 'react-native';
import { ThemeProvider } from "styled-components/native";

import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import BillsToPay from "@screens/BillsToPay";
import Loading from '@components/Loading';


export default function App() {
  const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
      {fontsLoaded ? <BillsToPay /> : <Loading />}
      </ThemeProvider>
  );
};