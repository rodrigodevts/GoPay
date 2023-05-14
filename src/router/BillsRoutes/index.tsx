import { createStackNavigator } from '@react-navigation/stack';
import Bills from '@screens/Bills';
import CreateBill from '@screens/CreateBill';

const Stack = createStackNavigator();

export default function BillsRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name='listBills' component={Bills} />
			<Stack.Screen name='createBill' component={CreateBill} />
		</Stack.Navigator>
	)
}