import { StyleSheet } from 'react-native';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';

export default function OrderBox() {
	return (
		<View style={styles.container}>
			<View style={styles.totalBox}>
				<Text style={[styles.totalText, { color: '#FDB72B' }]}>
					Total Orders
				</Text>
				<Text style={[styles.totalFigure, { color: '#C70039' }]}>115</Text>
				<Text style={[styles.totalText, { color: '#4D6D00' }]}>N20000</Text>
			</View>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<View style={styles.todayBox}>
					<Text style={styles.totalText}>Today</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>N20000</Text>
				</View>
				<View style={styles.yesterdayBox}>
					<Text style={styles.totalText}>Yesterday</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>N20000</Text>
				</View>
				<View style={styles.thisWeekBox}>
					<Text style={styles.totalText}>This Week</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>N20000</Text>
				</View>
				<View style={styles.thisMonthBox}>
					<Text style={styles.totalText}>This Month</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>N20000</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		gap: 15,
	},
	totalBox: {
		width: 120,
		height: 120,
		// backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	totalFigure: { fontSize: 20, fontWeight: 'bold' },
	totalPrice: { fontSize: 1 },
	totalText: { fontSize: 12, fontWeight: '500' },
	todayBox: {
		width: 80,
		height: 90,
		backgroundColor: '#C70039',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	yesterdayBox: {
		width: 80,
		height: 90,
		backgroundColor: '#84A100',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	thisWeekBox: {
		width: 80,
		height: 90,
		backgroundColor: '#4D6D00',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	thisMonthBox: {
		width: 80,
		height: 90,
		backgroundColor: '#FDB72B',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
});
