import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import BillsToPay from "@screens/BillsToPay";
import { useTheme } from 'styled-components';
import Bills from '@screens/Bills';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	const theme = useTheme();

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: theme.COLORS.GRAY_700,
					height: 100,
					flexDirection: 'row',
					gap: 10,
					borderTopColor: theme.COLORS.GRAY_400,
				},
				tabBarActiveTintColor: theme.COLORS.GREEN_400,
				tabBarInactiveTintColor: theme.COLORS.GRAY_400,
				tabBarLabelStyle: {
					fontSize: 16,
					fontWeight: '500',
				},
				headerShown: false,
				tabBarLabelPosition: 'beside-icon'
			}}
		>
			<Tab.Screen
				name="bills"
				component={Bills}
				options={{
					tabBarLabel: 'Contas',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='list-alt' color={color} size={size} />
					)
				}}
			/>
			<Tab.Screen
				name="billsToPay"
				component={BillsToPay}
				options={{
					tabBarLabel: 'Pagar',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='attach-money' color={color} size={size} />
					),
					tabBarBadge: 3,
				}}
			/>
			<Tab.Screen
				name="group"
				component={BillsToPay}
				options={{
					tabBarLabel: 'Grupos',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name='group' color={color} size={size} />
					)
				}}
			/>
		</Tab.Navigator>
	)
}