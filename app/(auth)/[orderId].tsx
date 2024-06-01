import { StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { ThemedText as Text } from '@/components/ThemedText';
import { ThemedView as View } from '@/components/ThemedView';

export default function Page() {
	return (
		<View>
			<Text>[orderId]</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
