import * as S from './styles';
import CardAmountInfo from '@components/CardAmountInfo';
import CardHouseBills from '@components/CardHouseBills';
import Header from '@components/Header';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

const HOUSE_BILLS = [
	{
		id: '1',
		billName: 'água',
		valueTotal: 'R$ 154,00',
	},
	{
		id: '2',
		billName: 'internet',
		valueTotal: 'R$ 100,00',
	},
	{
		id: '3',
		billName: 'luz',
		valueTotal: 'R$ 220,00',
		isPaidOut: true,
		datePaidOut: '23/05/2023'
	},
	{
		id: '4',
		billName: 'luz',
		valueTotal: 'R$ 220,00',
		isPaidOut: true,
		datePaidOut: '23/05/2023'
	},
	{
		id: '5',
		billName: 'luz',
		valueTotal: 'R$ 220,00',
		isPaidOut: true,
		datePaidOut: '23/05/2023'
	},
];

type HouseBillsType = {
	id: string;
	billName: string;
	valueTotal: string;
	isPaidOut?: boolean,
	datePaidOut?: string;
}

export default function BillsToPay() {
	const [houseBills, setHouseBills] = useState<HouseBillsType[]>([]);

	useEffect(() => {
		setHouseBills(HOUSE_BILLS);
	}, []);

	return (
		<S.Container>
			<Header />
			<S.Content>
				<S.CardResponsibility>
					<S.SelectDate>
						<S.NavigateDateButton>
							<S.BackIcon />
						</S.NavigateDateButton>
						<S.TextDate>
							Abril/2023
						</S.TextDate>
						<S.NavigateDateButton>
							<S.NextIcon />
						</S.NavigateDateButton>
					</S.SelectDate>
					<S.Responsibility>
						<S.Avatar
							source={{
								uri: 'https://avatars.githubusercontent.com/u/60670489?v=4'
							}}
						/>
						<S.Info>
							<S.Title>
								Responsável do mês
							</S.Title>
							<S.Name>
								Rodrigo A.
							</S.Name>
						</S.Info>
					</S.Responsibility>
				</S.CardResponsibility>
				<CardAmountInfo
					title='Total a pagar'
					amount={12}
				/>
				<FlatList
					data={houseBills}
					keyExtractor={(item) => item.id}
					bounces={false}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<CardHouseBills
							billName={item.billName}
							valueTotal={item.valueTotal}
							datePaidOut={item.datePaidOut}
							isPaidOut={item.isPaidOut}
						/>
					)}
				/>
			</S.Content>
		</S.Container>
	);
};