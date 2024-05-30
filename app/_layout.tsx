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
import { connectSocket } from '@/utils/socket';
import { NotificationsProvider } from '@/contexts/NotificationsContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const socket = connectSocket('9638daba4938f3cfa5029c3f');

export default function RootLayout() {
	console.log('RootLayout');
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
			<NotificationsProvider>
				<Stack>
					<Stack.Screen name='(auth)' options={{ headerShown: false }} />
					<Stack.Screen name='+not-found' />
				</Stack>
			</NotificationsProvider>
		</ThemeProvider>
	);
}
