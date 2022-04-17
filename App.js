import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView,ScrollView,StatusBar } from 'react-native';
import { Fontisto, AntDesign, Ionicons, FontAwesome5, MaterialCommunityIcons,Entypo, MaterialIcons, SimpleLineIcons  } from '@expo/vector-icons';

export default function App() {
  return (
  <>
    <StatusBar/>
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.appHeader}>
        <Text style={styles.logoText}>facebook</Text>
        <TouchableOpacity style={styles.appheaderOpacity}>        
        <Ionicons name="md-search-circle-sharp" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appheaderOpacity}>     
        <FontAwesome5 name="facebook-messenger" size={24} color="#FFFFFF" />
          </TouchableOpacity >

      </View>
      <View style={styles.navigation}>
      <TouchableOpacity style={styles.headerButton}>
      <Entypo name="home" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
      <FontAwesome5 name="user-friends" size={20} color="black" />
      </TouchableOpacity >
      <TouchableOpacity style={styles.headerButton}>
      <MaterialIcons name="ondemand-video" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton}>
      <Ionicons name="md-notifications-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton}>
      <SimpleLineIcons name="menu" size={24} color="black" />
      </TouchableOpacity>

      </View>

      <View style={styles.post}>
        <View style={styles.postBody}>
          <View style={styles.header}>
            <Image
              style={styles.profilePic}
              source={require('./assets/Cool-Android-Wallpaper.jpg')}
            />
            <View style={styles.postDetails}>
              <Text style={styles.author}>Ts'ele Kelane</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.date}>Yesterday</Text>
                <Fontisto name='world-o' size={15} color='#9E9E9E' />
              </View>
            </View>
          </View>
          <View>
            <Text>
              People live their lives bound by what they accept as correct and true. That's how they define "Reality". But what does it mean to be "Correct" or "True"? 
              Merely vague concepts...their "Reality" may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?{"\n\n"} -Itachi Uchiha-{"\n"}
            </Text>
            <Image
              style={styles.postImage}
              source={require('./assets/20502414.jpg')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <AntDesign name='like2' size={24} color='#9E9E9E' />
            <Text style={styles.footerText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="comment-outline" size={24} color="#9E9E9E" />
          <Text style={styles.footerText}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="share" size={24} color="#9E9E9E" />
          <Text style={styles.footerText}>Share</Text>

          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  appHeader: {
  backgroundColor: '#0000CC',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  },
  appheaderOpacity:{
  justifyContent:"space-evenly",
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10
  },
  
   headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoText: {
  fontWeight: 'bold',
  fontSize: 34,
  alignSelf:"flex-start",
  color: '#FFFFFF'
  },
  navigation: {
  backgroundColor: '#FFFF',
  marginBottom: 5,
  flexDirection: 'row',
  justifyContent: "space-between",
  width: '100%',
  padding: 10,
  borderRadius:2,
  },

  post: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderWidth: 2,
    width: '100%',
    margin: 2,
    padding: 2
  },

  postBody: {
    padding: 10,
  },
  profilePic: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
  },
  author: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#9E9E9E',
    marginRight: 5,
    fontSize: 13,
  },
  postImage: {
    width: '100%',
    height: 450,
  },
  footer: {
    height: 40,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#ECEFF1',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: "space-between",
    padding:5
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  footerText: {
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',
  },
});