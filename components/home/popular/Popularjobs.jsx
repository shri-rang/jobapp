import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'

import styles from './popularjobs.style'
import { COLORS,SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch  from  '../../../hook/useFetch';



const Popularjobs = () => {
  const router = useRouter();
 
   const {data, isLoading, error }  = useFetch('search', {query: 'React developer', num_pages: 1 })


    console.log(data);

  return (
    
    <View
     style = {styles.container}
    >
      <View
       style= {styles.header}
      >
      <Text
      style = {styles.headerTitle}
      >Popularjobs</Text> 
      <TouchableOpacity>
        <Text>
          Show All
        </Text>
      </TouchableOpacity>
      </View>
      <View
      style= {styles.container}
      >
       {
        isLoading ?
        (
          <ActivityIndicator  size="large" color={COLORS.primary} />
        )
        : error ?  (<Text>
           Something went Wrong
        </Text>)
        : (  <FlatList
          horizontal
         contentContainerStyle = { {columnGap: SIZES.medium } }
         keyExtractor={item => item?.job_id }
         data={data}
         renderItem={ (item)=>( 

           <PopularJobCard
            item = {item}
           />
          ) }
        /> )
       }
      </View>
    </View>
  )
}

export default Popularjobs