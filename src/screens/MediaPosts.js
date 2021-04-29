import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import {Context} from '../context/MediaContext';

const MediaPosts = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text >Index ffScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};


export default MediaPosts;
