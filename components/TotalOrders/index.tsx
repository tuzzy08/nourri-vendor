import { StyleSheet } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import Colors from '@/constants/Colors';

export function TotalOrders() {
	return (
		<View style={styles.container}>
			<View style={[styles.totalBox]}>
				<Text style={[styles.totalText, { color: '#FDB72B', fontSize: 22 }]}>
					Total Orders
				</Text>
				<Text
					style={[
						styles.totalFigure,
						{ color: '#C70039', fontSize: 30, marginTop: 10, lineHeight: 30 },
					]}
				>
					115
				</Text>
				<Text
					style={[
						styles.totalText,
						{ color: '#4D6D00', fontSize: 22, marginTop: 10 },
					]}
				>
					₦20000
				</Text>
			</View>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<View style={[styles.todayBox, styles.box]}>
					<Text style={styles.totalText}>Today</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>₦20000</Text>
				</View>
				<View style={[styles.yesterdayBox, styles.box]}>
					<Text style={styles.totalText}>Yesterday</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>₦20000</Text>
				</View>
				<View style={[styles.thisWeekBox, styles.box]}>
					<Text style={styles.totalText}>This Week</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>₦20000</Text>
				</View>
				<View style={[styles.thisMonthBox, styles.box]}>
					<Text style={styles.totalText}>This Month</Text>
					<Text style={styles.totalFigure}>115</Text>
					<Text style={styles.totalText}>₦20000</Text>
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
		// height: hp('40%'),
	},
	totalBox: {
		width: 150,
		height: 140,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 5,
		// gap: 10,
	},
	totalFigure: { fontWeight: 'bold', color: Colors.dark.text },
	totalPrice: { fontSize: 1 },
	totalText: { fontSize: 12, fontWeight: '500', color: Colors.dark.text },
	todayBox: {
		backgroundColor: '#C70039',
	},
	yesterdayBox: {
		backgroundColor: '#84A100',
	},
	thisWeekBox: {
		backgroundColor: '#4D6D00',
	},
	thisMonthBox: {
		backgroundColor: '#FDB72B',
	},
	box: {
		width: 80,
		height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
});
