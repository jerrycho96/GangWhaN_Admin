import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {BtnSubmitIcon} from '../../components/BOOTSTRAP';

import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';

export const menuData = [
  {
    id: 0,
    category: '떡볶이',
    menuname: '로제 떡볶이',
    price: '20,000',
    soldout: true,
    state: false,
  },
  {
    id: 1,
    category: '떡볶이',
    menuname: '매콤 떡볶이',
    price: '20,000',
    soldout: null,
    state: true,
  },
  {
    id: 2,
    category: '사이드',
    menuname: '모듬 떡볶이',
    price: '20,000',
    soldout: true,
    state: true,
  },
  {
    id: 3,
    category: '떡볶이',
    menuname: '로제 떡볶이',
    price: '20,000',
    soldout: null,
    state: true,
  },
  {
    id: 4,
    category: '떡볶이',
    menuname: '매콤 떡볶이',
    price: '20,000',
    soldout: null,
    state: false,
  },
  {
    id: 5,
    category: '사이드',
    menuname: '모듬 떡볶이',
    price: '20,000',
    soldout: true,
    state: true,
  },
];

export default function MenuSetting() {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <FlatList
        style={{backgroundColor: 'white'}}
        ListHeaderComponent={
          <View style={{padding: 15}}>
            <BtnSubmitIcon
              title="메뉴 추가하기"
              textStyle={{fontSize: 18}}
              onPress={() => {
                navigate('AddMenu');
              }}
            />
          </View>
        }
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const renderMenuItem = ({item}) => {
  return (
    <View style={{marginBottom: 10}}>
      <TouchableOpacity
        style={[style.shadow, style.cardstyle]}
        onPress={() => {
          navigate('UpdateMenu');
        }}>
        <View>
          <Text style={{fontSize: 16}}>{item.category}</Text>
          <View style={styles.Row}>
            <Text
              style={[styles.mediumtxt18, {marginVertical: 5, marginRight: 5}]}>
              {item.menuname}
            </Text>
            {item.state === false ? (
              <Image
                source={require('../../images/menusettingstate.png')}
                style={{marginRight: 5}}
              />
            ) : null}
            {item.soldout === true ? (
              <Image source={require('../../images/menusettingsoldout.png')} />
            ) : null}
          </View>
          <Text style={{fontSize: 16}}>{item.price} 원</Text>
        </View>
        <Image source={require('../../images/rightbutton.png')} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  shadow: {
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  cardstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginHorizontal: 15,
    borderRadius: 5,
  },
});
