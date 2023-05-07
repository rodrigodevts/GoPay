import * as S from './styles';

type CardHouseBills = {
	billName: string;
	valueTotal?: string;
	isPaidOut?: boolean;
	datePaidOut?: string;
}

export default function CardHouseBills({ 
	billName, 
	valueTotal,
	isPaidOut = false, 
	datePaidOut
}: CardHouseBills) {
	return (
		<S.Container isPaidOut={isPaidOut}>
			<S.Content>
				<S.InfoBill>
					<S.BillName>
						{billName}
					</S.BillName>
					<S.InfoAmountBill>
						<S.ValueContent>
							<S.ValueTitle>Total</S.ValueTitle>
							<S.Value value={valueTotal} placeholder='___' />
						</S.ValueContent>
						<S.ValueContent>
							<S.ValueTitle>Valor individual</S.ValueTitle>
							<S.Value placeholder='---' />
						</S.ValueContent>
					</S.InfoAmountBill>
				</S.InfoBill>
				<S.Payment>
					{isPaidOut ? (
							<S.PaidOutIcon />
						) : (
							<S.PaymentIcon />
						)
					}
					<S.PaymentInfo isPaidOut={isPaidOut}>
						{isPaidOut ? datePaidOut : 'pagar'}
					</S.PaymentInfo>
				</S.Payment>
			</S.Content>
		</S.Container>
	)
}