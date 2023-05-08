import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from "./TabNavigator";

export default function Router() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	)
}