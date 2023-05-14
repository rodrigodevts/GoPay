import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Header from '@components/Header';
import CardBill from '@components/CardBill';
import CardAdd from '@components/CardAdd';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import * as S from './styles';

type BillsType = {
	id: string;
	name: string;
	maturity: string;
}

const BILLS_LIST = [
	{
		id: '1',
		name: 'água',
		maturity: '12/10/2023'
	},
	{
		id: '2',
		name: 'internet',
		maturity: '12/10/2023'
	},
	{
		id: '3',
		name: 'energia',
		maturity: '12/10/2023'
	},
]

export default function Bills() {
	const [bills, setBills] = useState<BillsType[]>([]);
	const navigation = useNavigation<StackNavigationProp<any>>();

	useEffect(() => {
		setBills(BILLS_LIST);
	}, []);
	return (
		<S.Container>
			<Header title='Contas' />
			<S.Content>
				<FlatList
					data={bills}
					keyExtractor={(item) => item.id}
					style={{
						width: '100%',
					}}
					bounces={false}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardBill
							maturity={item.maturity}
							name={item.name}
						/>
					)}
					ListFooterComponent={() => (
						<CardAdd
							action={() => navigation.navigate('createBill')}
						/>
					)}
				/>
			</S.Content>
		</S.Container>
	)
}