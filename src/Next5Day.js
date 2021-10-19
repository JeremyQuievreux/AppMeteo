import React , { useEffect , useState }from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import WeatherStep from './WeatherStep';



function Next5Day() {

  const [data, setData] = useState();


    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Nice&units=metric&appid=f4d66cadfa506cfc32ead4f8fbfba20a&lang=fr")
        .then((response) => {
          return response.json()      
        } )
        .then((responseObject) => {
          setData(responseObject)
        })
        .catch((err) => console.log(err))
      }, []);

    return (
        <ScrollView style={styles.scroll}>
            {data?.list.map((step, index) => {
                return <WeatherStep key={index} step={step}/>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: "lightblue",
    }
})

export default Next5Day;