import React, { useContext } from 'react';
import { View, Text, FlatList, Button,TouchableOpacity } from 'react-native';
import {Context} from '../context/MediaContext';

const MediaPosts = () => {
  const { state, addBlogPost ,deleteBlogPost} = useContext(Context);

  return (
    <View>
      <Text >Index ffScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}><Text>{item.title} - {item.id}</Text></TouchableOpacity>;
        }}
      />
    </View>
  );
};


export default MediaPosts;
