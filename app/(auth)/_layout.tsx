import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useNotifications } from '@/hooks/useNotifications';
import { socket } from '../_layout';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
	const colorScheme = useColorScheme();
	const { scheduleNewOrderNotification } = useNotifications();

	useEffect(() => {
		// Show push events from socket messages
		socket.on('orderPlaced', (order) => {
			const notification_category = 'NEW_ORDER';
			const orderNotification = {
				title: 'New order',
				vibrate: [1, 1, 1],
				subtitle: 'You have a new order!',
				body: order.description,
				categoryIdentifier: notification_category,
				data: {
					orderId: order.order_id,
				},
			};
			console.log('New order received:', order);
			// Show notification or process the order in the UI
			scheduleNewOrderNotification(orderNotification);
		});
		return () => {
			socket.off('orderPlaced');
		};
	}, []);

	const [loaded] = useFonts({
		SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='nonTab' />
			</Stack>
		</ThemeProvider>
	);
}
