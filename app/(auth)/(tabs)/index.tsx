import { ScrollView, StyleSheet } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { TotalOrders } from '@/components/TotalOrders';
import { OrderList } from '@/components/OrderList';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<TotalOrders />
			{/* New Orders */}
			<Text style={styles.title}>New Orders</Text>
			<ScrollView style={{ paddingHorizontal: wp('2.5%'), flexGrow: 1 }}>
				<OrderList />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		// paddingHorizontal: 2,
		gap: 20,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	title: {
		marginLeft: 10,
		fontSize: 20,
		fontWeight: 'bold',
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
