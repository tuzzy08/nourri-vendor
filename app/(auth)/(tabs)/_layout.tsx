import { Tabs } from 'expo-router';
import React from 'react';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Header } from '@/components/Header';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				tabBarStyle: {
					height: hp('8%'),
					paddingBottom: 10,
					paddingTop: 10,
				},
				tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'home' : 'home-outline'}
							color={color}
						/>
					),
					header: () => <Header />,
				}}
			/>
			<Tabs.Screen
				name='orders'
				options={{
					title: 'Orders',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'cart' : 'cart-outline'}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
