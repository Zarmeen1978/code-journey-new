import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const TickAnimation = () => {
  const [completed, setCompleted] = useState(false);
  const strokeDashoffset = useSharedValue(24); // Initial stroke length

  // Animate the tick mark when completed
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(completed ? 0 : 24, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    }),
  }));

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleComplete}>
        <Text style={styles.buttonText}>Complete Course</Text>
      </TouchableOpacity>

      {completed && (
        <Svg width={100} height={100} viewBox="0 0 24 24">
          <AnimatedPath
            d="M5 13l4 4L19 7" // Tick path
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="24" // Total length of the path
            animatedProps={animatedProps}
          />
        </Svg>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TickAnimation;
