import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";

export const Container = styled.View`
	width: 100%;
	position: relative;

	flex-direction: row;
	justify-content: center;
	align-items: center;

	margin-top: ${getStatusBarHeight()}px;
	padding: 30px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	text-transform: uppercase;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Button = styled(TouchableOpacity)`
	position: absolute;

	width: 54px;
	height: 34px;
	padding-left: 10px;

	border-radius: 50%;

	align-items: center;
	justify-content: center;
`;

export const BackButton = styled(Button)`
	left: 24px;
`;

export const NotificationButton = styled(Button)`
	right: 24px;
`;

export const BackIcon = styled(MaterialIcons).attrs({
	name: 'arrow-back-ios',
	size: 24
})`
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NotificationIcon = styled(MaterialIcons).attrs({
	name: 'notifications',
	size: 30
})`
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Badge = styled.View`
	width: 18px;
	height: 18px;
	border-radius: 9999px;

	position: absolute;
	top: 0px;
	right: 8px;

	background-color: ${({ theme }) => theme.COLORS.RED_400};

	align-items: center;
	justify-content: center;
`;

export const AmountNotification = styled.Text`
	font-size: 12px;
	font-weight: 700;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ModalNotification = styled(Modal)`
	flex: 1;
`;

export const ModalNotificationContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: 'rgba(0, 0, 0, 0.5)';
`;

export const ModalNotificationContent = styled.View`
	width: 85%;
	height: 65%;
	padding: 24px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const ModalHeader = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
`;

export const ModalTitle = styled.Text`
	font-size: 18px;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Notification = styled.View`
	width: 100%;
	padding: 10px;
	gap: 14px;
	border-radius: 5px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_850};
`;

export const NotificationTitle = styled.Text`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.GRAY_50};
`;

export const NotificationDate = styled.Text`
	font-size: 12px;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const NotificationDescription = styled.Text`
	font-size: 14px;
	font-weight: 300;
	color: ${({ theme }) => theme.COLORS.GRAY_300};
`;