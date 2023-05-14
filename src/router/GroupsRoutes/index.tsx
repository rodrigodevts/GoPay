import { createStackNavigator } from '@react-navigation/stack';
import AddBillToGroup from '@screens/AddBillToGroup';
import AddUserToGroup from '@screens/AddUserToGroup';
import CreateGroup from '@screens/CreateGroup';
import Groups from '@screens/Groups';

const Stack = createStackNavigator();

export default function GroupsRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name='listGroups' component={Groups} />
			<Stack.Screen name='createGroups' component={CreateGroup} />
			<Stack.Screen name='addUserToGroup' component={AddUserToGroup} />
			<Stack.Screen name='addBillToGroup' component={AddBillToGroup} />
		</Stack.Navigator>
	)
}