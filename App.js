import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headline}>All your 37 items are stored safely in your <Text style={styles.selection}>studio</Text>.</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 180,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: '#fff',
	},
	headline: {
		fontFamily: 'System',
		fontSize: 27,
		lineHeight: 36,
		fontWeight: '700',
	},
	selection: {
		textDecorationLine: 'underline',
		textDecorationColor: '#ff0000'
	},
});
