import { Image, StyleSheet, Platform, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';
import { Link } from 'expo-router';
import OrderBox from '@/components/OrderBox';
import { useEffect } from 'react';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<OrderBox />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flexGrow: 1,
	},
	container: {
		flex: 1,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
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
