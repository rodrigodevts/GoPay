import * as S from './styles';

type CardAmountInfoProps = {
	title: string;
	amount?: number;
}

export default function CardAmountInfo({ title, amount }: CardAmountInfoProps) {
	return (
		<S.Container isAmount={!!amount}>
			{!amount && <S.InfoIcon />}
			<S.Title>
				{title}
			</S.Title>
			<S.Amount isAmount={!!amount}>
				{amount ? `R$${amount}` : 'Informe os valores de cada conta'}
			</S.Amount>
		</S.Container>
	)
}