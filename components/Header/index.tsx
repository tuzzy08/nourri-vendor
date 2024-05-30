import {
	Pressable,
	StyleSheet,
	TouchableOpacity,
	useColorScheme,
} from 'react-native';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import Colors from '@/constants/Colors';
import { UserCircle, ShoppingBasket } from 'lucide-react-native';
import { Link, router } from 'expo-router';

export function Header() {
	const colorScheme = useColorScheme();
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 20,
					padding: 8,
					paddingHorizontal: 13,
					justifyContent: 'space-between',
				}}
			>
				<View style={{ flexDirection: 'column', gap: 5 }}>
					<Text style={styles.title}>Hi, User</Text>
					<Text style={styles.summary}>Todays order summary</Text>
				</View>
				<Pressable onPress={() => router.push('/orders')}>
					<UserCircle
						size={44}
						style={{ alignSelf: 'flex-end' }}
						color={Colors.secondary}
					/>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: hp('15%'),
		justifyContent: 'center',
		padding: 5,
	},
	title: { fontSize: 22, fontWeight: 'bold' },
	summary: { fontSize: 14 },
	profileIcon: {
		width: 28,
		height: 28,
		borderRadius: 30,
	},
});
