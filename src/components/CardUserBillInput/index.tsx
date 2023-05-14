import CardAdd from '@components/CardAdd';
import * as S from './styles';

type CardUserBillInputProps = {
	username: string;
	bill: string;
}

export default function CardUserBillInput({ username, bill }: CardUserBillInputProps) {
	return (
		<S.User>
			<S.UserHeader>
				<S.UserName>{username}</S.UserName>
				<S.Button>
					<S.DeleteIcon />
				</S.Button>
			</S.UserHeader>

			<S.InputsUser>
				<S.ButtonUserBill>
					<S.ButtonUserBillText>{bill}</S.ButtonUserBillText>
				</S.ButtonUserBill>
				<S.InputUserDiscount keyboardType='number-pad' placeholder='Desconto' />
				<CardAdd height={30}  action={() => {}} />
			</S.InputsUser>
		</S.User>
	)
}