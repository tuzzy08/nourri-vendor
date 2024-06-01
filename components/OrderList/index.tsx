import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import orders from './mock.json';
import { Order, OrderType } from './Order';

const orderObjects = JSON.parse(JSON.stringify(orders));
console.log(orderObjects);

const ItemSeparator = () => {
	return <View style={styles.separator} />;
};

const ListFooter = () => {
	return <View style={styles.footer} />;
};

export function OrderList() {
	return (
		<View style={styles.listContainer}>
			<FlashList
				data={orderObjects}
				renderItem={({ item }: { item: OrderType }) => <Order order={item} />}
				// ItemSeparatorComponent={ItemSeparator}
				ListFooterComponent={ListFooter}
				estimatedItemSize={15}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		width: wp('100%'),
		minHeight: hp('100%'),
		// marginTop: 5,
	},
	separator: {
		height: 20, // Adjust the height for the desired vertical space
	},
	footer: {
		height: 15, // Adjust the height for the desired space at the end
	},
});
