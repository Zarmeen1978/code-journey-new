import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../shared/GlobalApi'; // Adjust the path as necessary

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      const resp = (await GlobalApi.getArticle()).data;
      if (resp && resp.data) {
        const result = resp.data.map((item) => ({
          id: item.id,
          name: item.attributes.name,
          description: item.attributes.description,
          image: item.attributes.imageUrl.data.attributes.url, // Adjust according to your API response
        }));
        console.log("Article",result)
        setArticleList(result);
      } else {
        console.error("No data found in response:", resp);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 3 }}>Articles</Text>
      <FlatList
        data={articleList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 10,
    borderRadius: 7,
    overflow: 'hidden',
  },
  image: {
    width: 180,
    height: 100,
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ArticleList;
