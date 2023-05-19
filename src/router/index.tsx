import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./TabNavigator";
import { useTheme } from 'styled-components';
import SignIn from '@screens/SignIn';

export default function Router() {
	const isAuthenticated = true;

	const { COLORS } = useTheme();
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.GRAY_700}}>
			<NavigationContainer>
				{isAuthenticated ? <TabNavigator /> : <SignIn />}
			</NavigationContainer>
		</View>
	)
}