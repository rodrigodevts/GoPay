import * as S from './styles';

type BillTagType = {
	title: string;
}

export default function BillTag({ title }: BillTagType) {
	return (
		<S.BillTag>
			<S.BillTagText>{title}</S.BillTagText>
		</S.BillTag>
	)
}