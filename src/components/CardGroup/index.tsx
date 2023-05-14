import * as S from './styles';

type CardGroupType = {
	name: string;
	users: {
		id: string;
		avatar_url: string;
	}[]
}

export default function CardGroup({ name, users }: CardGroupType) {
	return (
		<S.Container>
			<S.GroupDetails>
				<S.GroupIcon />
				<S.GroupName>
					{name}
				</S.GroupName>
			</S.GroupDetails>
			<S.Users>
				{users.map((user) => (
					<S.Avatar
						key={user.id}
						source={{
							uri: user.avatar_url
						}}
						alt="Avatar user"
					/>
				))}
			</S.Users>
		</S.Container>
	)
}