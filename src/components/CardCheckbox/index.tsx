import * as S from './styles';

type AddBillToGroupType = {
	id: string;
	name: string;
	isChecked?: boolean;
	onValueChange: (itemId: string) => void;
};

export default function CardCheckbox({ id, name, isChecked = false, onValueChange }: AddBillToGroupType) {

	return (
		<S.CardContainer onPress={() => onValueChange(id)}>
			<S.Name>{name}</S.Name>
			<S.CheckBoxIcon name={isChecked ? 'radio-button-on' : 'radio-button-unchecked'} />
		</S.CardContainer>
	)
}