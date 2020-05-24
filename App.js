import React, { useState, useRef } from 'react';
import {Text, View, ScrollView, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/MaterialIcons'

const { width: screenWidth, height: screenHeight} = Dimensions.get('window')

export default function App() {
  const carouselRef = useRef(null)
  const [ lista, setLista] = useState([
    {
      title: "Maria e João",
      text: 'Desta vez, as migalhas nos guiarão por um caminho muito mais sombrio e perturbador. Durante um período de escassez, Maria (Sophia Lillis) e seu irmão mais novo, João (Sammy Leakey), saem de casa e partem para a floresta em busca de comida e sobrevivência. É quando encontram uma senhora (Alice Krige), cujas intenções podem não ser tão inocentes quanto parecem, que eles descobrem que nem todo conto de fadas tem final feliz.',
      release: 2020,
      img: 'https://capas-p.imagemfilmes.com.br/164833_000_p.jpg'
    },
    {
      title: 'O Segredo: Ouse Sonhar',
      text: 'Inspirado no best-seller que vendeu mais de 30 milhões de cópias ao redor mundo, O Segredo: Ouse Sonhar traz a história de Miranda (Katie Holmes), uma viúva que luta para criar os três filhos sozinha. Após uma forte tempestade destruir sua casa, ela contrata Bray (Josh Lucas) para ajudá-la na reconstrução. Durante a obra, ele passa a compartilhar com Miranda sua filosofia de acreditar no poder do universo, na relação causa e efeito, passado e presente.',
      release: 2020,
      img: 'https://capas-p.imagemfilmes.com.br/164835_000_p.jpg'
    },
    {
      title: "Brinquedo Assassino",
      text: 'Mais que um brinquedo, ele é o seu melhor amigo. No dia do seu aniversário, Andy (Gabriel Bateman) ganha de presente de sua mãe, Karen (Audrey Plaza), o boneco mais aguardado dos últimos tempos. Altamente tecnológico, ele pode se conectar a qualquer dispositivo inteligente da Kaslan, empresa responsável por sua fabricação. No entanto, quando crimes estranhos começam a acontecer, eles passam a suspeitar que o brinquedo pode não ser tão inofensivo quanto parece.',
      release: 2019,
      img: 'https://capas-p.imagemfilmes.com.br/164831_000_p.jpg'
    },
    {
      title: 'Invasão ao Serviço Secreto',
      text: 'Após uma tentativa de assassinato ao presidente dos Estados Unidos (Morgan Freeman), o agente do Serviço Secreto, Mike Banning (Gerard Butler), é injustamente acusado e levado sob custódia. Determinado a provar sua inocência, ele se torna um alvo do FBI à medida em que tenta encontrar o verdadeiro culpado. Ele vai precisar de toda a ajuda possível para proteger sua família e salvar seu país de um ataque sem precedentes.',
      release: 2020,
      img: 'https://capas-p.imagemfilmes.com.br/164817_000_p.jpg'
    },
    /*
    {
      title: 'Tela do Nubank',
      text: 'Quando você copia essa tela e posta no Linkedin é contratado por uma grande empresa',
      release: 2020,
      img: 'https://i1.wp.com/blog.nubank.com.br/wp-content/uploads/2019/02/Dashboard-cardAnalytics-1.png?resize=288%2C512&ssl=1'
    }
    */
  ])

  const [ background, setBackground] = useState(lista[0].img)
  const [ activeIndex, setActiveIndex] = useState(0)

  const _renderItem = ({ item, index }) => {
    return (
      <View> 
        <TouchableOpacity>
          <Image source={{uri: item.img}} style={styles.carouselImg} />
    <Text style={styles.carouselText}>{item.release}</Text>
          <Icon name='play-circle-outline' size={30} color='#fff' style={styles.carouselIcon}/>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <ImageBackground source={{uri: background}} style={styles.imageBg} blurRadius={1}>

            <View style={styles.viewSearch}>
              <TextInput style={styles.input} placeholder="Encontre seu Filme"/>
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>
            </View>

            <Text style={styles.chegou}>
              Acabou de chegar
            </Text>

            <View style={styles.slideView}>
              <Carousel
              style={styles.carousel} 
              ref={carouselRef}
              data={lista} 
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={(index) => {
                setBackground(lista[index].img);
                setActiveIndex(index);
              }}
              />
            </View>

            <View style={styles.moreInfo}>
              <View style={{marginTop: 15}}>
                <Text style={styles.moveTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.moveDesc}>{lista[activeIndex].text}</Text>
              </View>

            </View>
          </ImageBackground>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  content: {
    flex: 1,
    height: screenHeight,
  },
  contentImage: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#000'
  },
  imageBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000'
  },
  viewSearch: {
    marginTop: 35,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: "row",
    alignSelf: "center"
  },
  input: {
    width: '95%',
    padding: 12,
    paddingLeft: 20,
    fontSize: 16
  },
  icon: {
    position: "absolute",
    right: 20,
    top: 10
  },
  chegou: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10
  },
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: "center",
    alignItems: "center"
  },
  carousel: {
    flex: 1,
    overflow: "visible"
  },
  carouselImg: {
    alignSelf: "center",
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText: {
    padding: 15,
    color: '#fff',
    position: "relative",
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  moreInfo: {
    backgroundColor: '#fff',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    
  },
  moveTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5
  },
  moveDesc: {
    paddingLeft: 15,
    fontSize: 14,
    color: '#131313',
    fontWeight: 'bold'
  }
})

