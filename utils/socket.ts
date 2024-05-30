import { io } from 'socket.io-client';

export function connectSocket(vendor_id: string) {
	console.log('connecting to socket');
	console.log(process.env.EXPO_PUBLIC_WEBSOCKET_HOST);
	const socket = io(`${process.env.EXPO_PUBLIC_WEBSOCKET_HOST}`, {
		query: {
			vendor_id,
		},
		multiplex: true,
		transports: ['websocket'],
	});
	socket.on('connect', () => {
		console.log('connected');
	});

	return socket;
}
