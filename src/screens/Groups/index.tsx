import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Header from '@components/Header';
import CardAdd from '@components/CardAdd';
import CardGroup from '@components/CardGroup';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type GroupsType = {
	id: string;
	name: string;
	users: {
		id: string;
		avatar_url: string;
	}[]
}

const GROUPS_LIST = [
	{
		id: '1',
		name: 'Lá Casa',
		users: [
			{
				id: '1',
				avatar_url: 'https://avatars.githubusercontent.com/u/60670489?v=4'
			},
			{
				id: '2',
				avatar_url: 'https://avatars.githubusercontent.com/u/60670489?v=4'
			},
			{
				id: '3',
				avatar_url: 'https://avatars.githubusercontent.com/u/60670489?v=4'
			},
		]
	},
	{
		id: '2',
		name: 'internet',
		users: [
			{
				id: '1',
				avatar_url: 'https://avatars.githubusercontent.com/u/60670489?v=4'
			},
			{
				id: '2',
				avatar_url: 'https://avatars.githubusercontent.com/u/60670489?v=4'
			},
			{
				id: '3',
				avatar_url: 'https://avatars.githubusercontent.com/u/60670489?v=4'
			},
		]
	}
]

export default function Groups() {
	const [groups, setGroups] = useState<GroupsType[]>([]);

	const navigation = useNavigation<StackNavigationProp<any>>();

	useEffect(() => {
		setGroups(GROUPS_LIST);
	}, []);

	return (
		<S.Container>
			<Header title='Grupos' />
			<S.Content>
				<FlatList
					data={groups}
					keyExtractor={(item) => item.id}
					style={{
						width: '100%',
					}}
					bounces={false}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardGroup
							name={item.name}
							users={item.users}
						/>
					)}
					ListFooterComponent={() => (
						<CardAdd
							action={() => navigation.navigate('createGroups')}
						/>
					)}
				/>
			</S.Content>
		</S.Container>
	)
}