import React, {useState} from 'react'
import { View} from '../Themed'
import movie from '../../assets/data/movies'
import { FlatList, Image , Pressable, Text} from 'react-native'
import styles from './styles'
import { MaterialIcons, Entypo, AntDesign, FontAwesome, Feather } from '@expo/vector-icons'
import Episodes from '../EpisodeItem/Episodes'
import { Picker } from '@react-native-picker/picker'
import VideoPlayer from '../VideoPlayer'
import DropDownPicker from 'react-native-dropdown-picker'
import { Constants } from 'expo-constants'

const firstSeason = movie.seasons.items[0];

const firstEpisode = movie.seasons.items[0].episodes.items[0]


 const MovieDetailsScreen = () => {
     const seasonNames = movie.seasons.items.map(season => season.name)
     const [currentSeason, setCurrentSeason] = useState(firstSeason)
     const [currentEpisode, setCurrentEpisode] = useState(firstSeason)
     const [open, setOpen] = useState(false);
     const [value, setValue] = useState(null);
     const [items, setItems] = useState([
       {label: 'Season 1', value: '1'},
       {label: 'Season 2', value: '2'},
       {label: 'Season 3', value: '3'}
,       {label: 'Season 4', value: '4'}
,       {label: 'Season 5', value: '5'}

     ]);
    return (
        <View>
            <VideoPlayer episode={currentEpisode} />
                        <FlatList 
                        data={firstSeason.episodes.items}
                        renderItem={({item})=>
                        <Episodes 
                        episode={item}
                         onPress={(episode)=>{
                             console.log(episode)
                            setCurrentEpisode(episode)}}/>}
                        style={{marginBottom: 250}}
                        ListHeaderComponent={(
                              <View style={{padding: 12}}>
            <View style={{flexDirection: 'row'}}>
                
            <Text style={styles.match}>98% match</Text>
            <Text style={styles.year}>{movie.year}</Text>
            <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
            </View>

            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                        <MaterialIcons name="hd" size={24} color="white" />
        </View>
        
        <Pressable onPress={() => { console.warn('Plage')}} style={styles.playButton}>
                        <Text style={styles.playButtonText}> Play
                            <Entypo name="controller-play" size={16} color="black" />
                        </Text>
                    </Pressable>  
                    <Pressable onPress={() => { console.warn('Download')}} style={styles.downloadButton}>
                        <Text style={styles.downloadButtonText}>
                            <AntDesign name="download" size={16} color="white" />
                            {' '}
                            Download
                        </Text>
                    </Pressable>

                    <Text style={{ marginVertical: 10, color:'azure' }}>{movie.plot}</Text>
                    <Text style={styles.year}>Cast: {movie.cast}</Text>
                    <Text style={styles.year}>Creator: {movie.creator}</Text>
                
                    {/* Row with icon buttons */}
                    <View style={{flexDirection: 'row', marginTop: 20,}}>
                        <View style={{alignItems: 'center', marginHorizontal: 20}}>
                            <AntDesign name="plus" size={24} color={'white'} />
                            <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                        </View>

                        <View style={{alignItems: 'center', marginHorizontal: 20}}>
                            <Feather name="thumbs-up" size={24} color="white" />
                            <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                        </View>

                        <View style={{alignItems: 'center', marginHorizontal: 20}}>
                            <FontAwesome name="send-o" size={24} color="white" />
                            <Text style={{color: 'darkgrey', marginTop: 5 }}>Share</Text>
                        </View>
                      
                 </View>
                 <DropDownPicker
                 style={{height:50}}
      open={open}
      value={currentSeason.name}
      items={items}
      placeholder='Select a season'
      categorySelectable={true}
      closeAfterSelecting={true}
      listParentContainerStyle={{
        justifyContent: "center",
        alignItems: "center"
      }}
      listParentLabelStyle={{
        fontWeight: "bold"
      }}
      listChildContainerStyle={{
        paddingLeft: 20
      }}
      listChildLabelStyle={{
        color: "grey"
      }}
      setOpen={setOpen}
      onChangeValue={(itemValue, itemIndex)=> {setCurrentEpisode(movie.seasons.items[itemIndex])}}
    />
                    </View>
                        )}
                        />
                       
  </View>
    )
}

export default MovieDetailsScreen;
