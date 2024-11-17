import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../shared/GlobalApi";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = async () => {
    try {
      const response = await GlobalApi.getSlider();
      if (!response || !response.data) {
        throw new Error("Invalid response structure");
      }

      const result = response.data;
      const resp = result.data.map((item) => ({
        id: item.id,
        name: item.attributes.name,
        image: item.attributes.image.data.attributes.url,
      }));

      setSlider(resp);
    } catch (err) {
      console.error("Error fetching slider data:", err);
      setError("Failed to fetch slider data");
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
  imageContainer: {
    marginRight: 15,
  },
  image: {
    width: Dimensions.get("screen").width * 0.83,
    height: 150,
    borderRadius: 10,
  },
});
