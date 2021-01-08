import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";

const image = require("./assets/image.jpg");

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.image}>
				<StatusBar style='auto' />
				<View style={styles.containerGlass}>
					<BlurView intensity={95} style={[StyleSheet.absoluteFill, styles.glassCard]}>
						<Text>Hello! I am bluring contents underneath</Text>
					</BlurView>
				</View>
				{/* <View style={styles.glassCard}></View> */}
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	containerGlass: {
		width: "75%",
		height: "20%",
	},
	glassCard: {
		borderRadius: 100,
	},
});
