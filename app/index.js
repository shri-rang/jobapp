import {View , Text, ScrollView, SafeAreaView } from  'react-native';
import { useState } from 'react';
import { Stack, useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES } from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

 const Home = () => {

  return (
     <SafeAreaView
      style = {{ flex: 1, backgroundColor: COLORS.lightWhite,   }}
     >
        <Stack.Screen
         options={{
            headerShadowVisible :false,
            headerStyle : COLORS.lightWhite,
            headerLeft: () => (
               <ScreenHeaderBtn  iconUrl ={icons.menu} dimension = "60%"   />
            ),
            headerRight: () => (
               <ScreenHeaderBtn  iconUrl ={images.profile}  dimension = "100%" />
            ),
            headerTitle : ""
          
         }}
        />
        
         <ScrollView
          showsVerticalScrollIndicator = {false}
         >
              <View
                style = {{
                  flex: 1,
                  padding : SIZES.medium
                }}
              >
                <Welcome/>
                <Popularjobs/>
                <Nearbyjobs/>
              </View>
         </ScrollView>
        
        {/* <Text> Home</Text> */}
     </SafeAreaView>
  )


 }


export default Home; 

