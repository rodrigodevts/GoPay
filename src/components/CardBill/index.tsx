import * as S from './styles';

type CardBillType = {
	name: string;
	maturity: string;
}

export default function CardBill({ name, maturity }: CardBillType) {
	return (
		<S.Container>
			<S.BillDetails>
				<S.BillIcon />
				<S.BillInfo>
					<S.BillName>
						{name}
					</S.BillName>
					<S.BillMaturity>
						Vencimento: {maturity}
					</S.BillMaturity>
				</S.BillInfo>
			</S.BillDetails>
			<S.ButtonDelete>
				<S.DeleteIcon />
			</S.ButtonDelete>
		</S.Container>
	)
}