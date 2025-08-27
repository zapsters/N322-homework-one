import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#dca1a1", dark: "#481a1a" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Homework One! ☆</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Be you!</ThemedText>
        <ThemedText>
          Live life <ThemedText type="defaultSemiBold">unapologetically</ThemedText>! For your
          system, use{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Go to that event by yourself!</ThemedText>
        <ThemedText>
          {`You never know who you'll meet. Just get out there and allow yourself to just be you!`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Profit.</ThemedText>
        <ThemedText>
          {`When you're ready, run.`}
          <ThemedText type="defaultSemiBold">Run as fast as you can</ThemedText>. You never know{" "}
          <ThemedText type="defaultSemiBold">what</ThemedText> awaits you{" "}
          <ThemedText type="defaultSemiBold">if you just</ThemedText> go{" "}
          <ThemedText type="defaultSemiBold"> out</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
});
