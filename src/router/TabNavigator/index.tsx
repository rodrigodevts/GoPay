import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import BillsToPay from "@screens/BillsToPay";

import BillsRoutes from '../BillsRoutes';
import GroupsRoutes from '../GroupsRoutes';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	const theme = useTheme();

	return (
		<Tab.Navigator
			initialRouteName='billsToPay'
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
				component={BillsRoutes}
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
				component={GroupsRoutes}
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