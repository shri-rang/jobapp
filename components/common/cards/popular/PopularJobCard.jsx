import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    
     <TouchableOpacity
      
     style ={styles.container(selectedJob, item) }
     onPress={()=> handleCardPress(item) }
    >
       <TouchableOpacity
        style = { styles.logoContainer(selectedJob, item )}
       >
            <Image
             source={{uri : item.emloyer_logo }}
             resizeMode="contain"
             style={styles.logoImage}
            />
           
          
       </TouchableOpacity>
        <Text
         style= {styles.companyName} numberOfLines={1}
        >
          {item.emloyer_name}
        </Text>
         <View
          style={styles.infoContainer}
         >
         
        </View>
     </TouchableOpacity>

  )
}

export default PopularJobCard