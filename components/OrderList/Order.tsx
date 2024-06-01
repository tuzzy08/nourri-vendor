import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { Image } from 'expo-image';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import Colors from '@/constants/Colors';

type OrderItem = {
	item_title: string;
	item_qty: number;
	item_price: number;
};

type ExtraItem = {
	item_title: string;
	item_qty: number;
	item_price: number;
};

export type OrderType = {
	order_no: string;
	item_title: string;
	item_description: string;
	items: OrderItem[];
	extras: ExtraItem[];
	order_total_price: number;
};

export function Order({ order }: { order: OrderType }) {
	const colorScheme = useColorScheme();
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor:
						colorScheme === 'dark'
							? Colors.dark.card.background
							: Colors.light.background,
				},
			]}
		>
			{/* <View style={styles.orderDetails}> */}
			<Text style={styles.orderNoText}>
				Order no: <Text style={styles.orderNo}>{order.order_no}</Text>
			</Text>
			{/* <Text style={styles.itemTitleText}>{order.item_title}</Text> */}
			<Text style={styles.itemDescriptionText}>{order.item_description}</Text>
			{/* Total price */}
			<Text
				style={styles.itemTotalPriceText}
			>{`₦${order.order_total_price}`}</Text>
			{/* Action Buttons Container */}
			<View
				style={[
					{ flexDirection: 'row', gap: 12, marginTop: 15 },
					{
						backgroundColor:
							colorScheme === 'dark'
								? Colors.dark.card.background
								: Colors.light.background,
					},
				]}
			>
				<Pressable style={[styles.actionButton, styles.viewButton]}>
					<Text style={styles.actionButtonText}>View</Text>
				</Pressable>
				<Pressable style={[styles.actionButton, styles.acceptButton]}>
					<Text style={styles.actionButtonText}>Accept</Text>
				</Pressable>
				<Pressable style={[styles.actionButton, styles.rejectButton]}>
					<Text style={styles.actionButtonText}>Reject</Text>
				</Pressable>
			</View>
			{/* </View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'row',
		height: hp('20%'),
		borderRadius: 10,
		marginBottom: 15,
		marginHorizontal: 10,
		paddingVertical: 5,
		paddingHorizontal: 15,
		gap: 5,
		// borderWidth: 1,
		// Android
		elevation: 5,

		// iOS
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5,
		width: wp('90%'),
	},
	itemImage: {
		height: '100%',
		width: '30%',
		backgroundColor: Colors.grey,
	},
	orderDetails: {
		// flex: 1,
	},
	orderNoText: {
		color: Colors.grey,
		textTransform: 'uppercase',
		fontSize: 12,
	},
	orderNo: {
		color: '#4D6D00',
		fontSize: 14,
	},
	itemTitleText: {
		fontSize: 16,
		fontWeight: '600',
	},
	itemDescriptionText: {
		// color: Colors.grey,
		fontSize: 12,
	},
	itemTotalPriceText: {
		fontWeight: '700',
		color: '#4D6D00',
	},
	actionButton: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 5,
	},
	viewButton: {
		backgroundColor: Colors.grey,
	},
	acceptButton: {
		backgroundColor: '#84A100',
	},
	rejectButton: {
		backgroundColor: Colors.primary,
	},
	actionButtonText: {
		color: Colors.dark.text,
	},
});
