import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  DeviceEventEmitter,
  StatusBar,
} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {navigate} from '../../navigation/RootNavigation';

import styles from '../../style/Style';
import {
  BtnSubmitIcon,
  InputText,
  ModalConfirm,
} from '../../components/BOOTSTRAP';

const noticeData = {
  data1: [
    {
      key: '0',
      shopname: '강화김치찌개',
      address: '인천 강화군 강화읍 미니산로 100',
      state: true,
      deldelay: true,
    },
    {
      key: '1',
      shopname: '강화김치찌개',
      address: '인천 강화군 강화읍 미니산로 100',
      state: true,
      deldelay: false,
    },
    {
      key: '2',
      shopname: '강화김치찌개',
      address: '인천 강화군 강화읍 미니산로 100',
      state: false,
      deldelay: false,
    },
  ],
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    accent: '#f1c40f',
  },
};

export default function SelectShopHome({route}) {
  const [addShop, setAddShop] = React.useState(null);

  const callBack = value => {
    setAddShop(value);
  };
  return (
    <PaperProvider theme={theme}>
      <Body addShop={addShop} setAddShop={setAddShop} callBack={callBack} />
    </PaperProvider>
  );
}

const Body = props => {
  const {addShop, setAddShop, route, callBack} = props;
  // addShop === true ? route.params.LISTSTATE : null;
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <FlatList
        style={{backgroundColor: 'white'}}
        ListHeaderComponent={
          <View style={style.searchBox}>
            <TextInput
              borderWidth={1}
              borderColor="#CCCCCC"
              underlineColor="white"
              borderRadius={100}
              width="100%"
              style={{
                width: '100%',
                height: 45,
                backgroundColor: 'white',
                paddingHorizontal: 12,
              }}
              placeholder="매장명을 입력하세요"
              placeholderTextColor="#AAAAAA"
              right={
                <TextInput.Icon
                  style={{backgroundColor: 'white'}}
                  name={require('../../images/search_icon.png')}
                  color={'#28B766'}
                />
              }
            />
          </View>
        }
        ListFooterComponent={
          <View>
            {addShop ? <AddShopItem setAddShop={setAddShop} /> : null}
            <BtnSubmitIcon
              title="매장 추가 신청"
              style={{margin: 15}}
              onPress={() => {
                navigate('AddShop', {callBack: callBack});
              }}
            />
          </View>
        }
        //   목록 랜더링
        data={noticeData.data1}
        renderItem={RenderShopList}
        keyExtractor={item => item.key}></FlatList>
    </SafeAreaView>
  );
};

const RenderShopList = ({item}) => {
  return (
    <View style={{marginHorizontal: 15}}>
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          flex: 1,
        }}
        onPress={() => {
          item.deldelay ? null : navigate('ShopMain');
        }}>
        <View
          style={[
            styles.Row1,
            {
              flex: 1,
              paddingRight: 20,
              marginBottom: 5,
            },
          ]}>
          <Text style={[styles.boldtxt18, {marginRight: 10}]} numberOfLines={1}>
            {item.shopname}
          </Text>
          {item.deldelay ? (
            <Image source={require('../../images/selectshopdelay.png')} />
          ) : null}
        </View>
        <Text style={{fontSize: 16, color: 'black'}}>{item.address}</Text>
      </TouchableOpacity>
      <View style={{backgroundColor: '#E3E3E3', height: 1}}></View>
    </View>
  );
};

const style = StyleSheet.create({
  searchBox: {
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
  },
});

const AddShopItem = props => {
  const [onConfirm, setOnConfirm] = React.useState(false);
  return (
    <View style={{marginHorizontal: 15}}>
      {noticeData.data1.map(item => {
        return item.state === false ? (
          <>
            <View style={styles.Row1}>
              <View
                style={{
                  paddingVertical: 15,
                  flex: 1,
                }}>
                <View
                  style={[
                    styles.Row1,
                    {
                      flex: 1,
                      marginBottom: 5,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.boldtxt18,
                      {marginRight: 10, color: '#AAAAAA'},
                    ]}>
                    {item.shopname}
                  </Text>
                  <Image source={require('../../images/selectshopdel.png')} />
                </View>
                <Text style={{fontSize: 16, color: '#AAAAAA'}}>
                  {item.address}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setOnConfirm(true);
                }}>
                <Image
                  source={require('../../images/selectshopdelicon.png')}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor: '#E3E3E3', height: 1}}></View>

            <ModalConfirm
              open={onConfirm}
              cancel={() => setOnConfirm(false)}
              confirm={() => {}}
              title="취소 확인"
              text1="해당 매장은 추가신청중입니다."
              text2="매장 추가 신청을 취소하시겠습니까?"
              canceltxt="취소"
              submittxt="확인"
              onPress={() => props.setAddShop(false)}
            />
          </>
        ) : null;
      })}
    </View>
  );
};
