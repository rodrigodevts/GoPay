import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./TabNavigator";
import { useTheme } from 'styled-components';

export default function Router() {
	const { COLORS } = useTheme();
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.GRAY_700}}>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</View>
	)
}