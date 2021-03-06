import * as React from 'react';
import { StyleSheet , Image, FlatList, Pressable} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View} from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { RootTabScreenProps } from '../../types';
import categories from '../../assets/data/categories';
import styles from './styles'
import movies from '../../assets/data/movies';
import Navigation from '../../navigation';
const firstCategory = categories.items[0];
interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies:  {
            id: string,
            poster: string
        }[]
    }
}

const HomeCategory = (props: HomeCategoryProps) => {
    const {category} = props;
    const navigation = useNavigation();
    const onMoviePress = (movie) => {
      navigation.navigate('MovieDetailScreen', {id: movie.id})
      }
return (
    <>
      <Text style={styles.title} >{category.title}</Text>
    <FlatList 
    data={category.movies}
    renderItem={({item})=> (
      <Pressable onPress={()=>onMoviePress(item)}>
      <Image style={styles.image} source={{uri: item.poster}} />
      </Pressable>
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    />

    </>
  );
}

export default HomeCategory;