import { StyleSheet } from 'react-native';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';

export default function OrderBox() {
	return (
		<View style={styles.container}>
			<View style={styles.totalBox}>
				<Text>Total</Text>
			</View>
			<View>
				<View style={styles.todayBox}>
					<Text>Today</Text>
				</View>
				<View style={styles.yesterdayBox}>
					<Text>Yesterday</Text>
				</View>
				<View style={styles.thisWeekBox}>
					<Text>This Week</Text>
				</View>
				<View style={styles.thisMonthBox}>
					<Text>This Month</Text>
				</View>
			</View>

			<Text>OrderBox</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	totalBox: {},
	todayBox: {},
	yesterdayBox: {},
	thisWeekBox: {},
	thisMonthBox: {},
});
