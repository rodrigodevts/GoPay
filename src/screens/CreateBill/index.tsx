import { useState } from 'react';
import { useTheme } from 'styled-components';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Header from '@components/Header';
import ButtonRegister from '@components/ButtonRegister';
import Input from '@components/Input';
import * as S from './styles';

export default function CreateBill() {
	const [date, setDate] = useState<Date | undefined>(new Date(1598051730000));
	
	const theme = useTheme();

	const onChange = (event: DateTimePickerEvent, date?: Date | undefined) => {
		const currentDate = date;
		setDate(currentDate);
	};

	return (
		<S.Container>
			<Header title='Cadastrar Conta/Despesa' isButtonBack isButtonNotification={false} />

			<S.Content>
				<S.Form>
					<Input placeholder='Nome' />
					<S.DatePickerContainer>
						<S.DatePickerText>Date de Vencimento</S.DatePickerText>
						<DateTimePicker
							value={date || new Date()}
							mode='date'
							onChange={onChange}
							locale='pt-BR'
							accentColor={theme.COLORS.GRAY_600}
							textColor='#FFF'
							style={{
								borderColor: theme.COLORS.GRAY_600,
								borderWidth: 1,
								borderRadius: 5,
								width: 107,
							}}
						/>
					</S.DatePickerContainer>
					<Input placeholder='Valor fixo?' keyboardType='number-pad' />
				</S.Form>
				<ButtonRegister title='Cadastrar' />
			</S.Content>
		</S.Container>
	)
}