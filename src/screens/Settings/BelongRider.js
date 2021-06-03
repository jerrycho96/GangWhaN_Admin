import * as React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';
import {BlueBorderBtn} from '../../components/BOOTSTRAP';
import {RiderAddModal} from '../../components/RiderAddModal';

const riderData = [
  {
    key: 1,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 2,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 3,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 4,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 5,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 6,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 7,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 8,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
  {
    key: 9,
    riderid: 'AB12345',
    phone: '010-1234-5678',
    ridername: '홍길동',
  },
];

export default function BelongRider() {
  const [riderAdd, setRiderAdd] = React.useState(false);
  return (
    <FlatList
      style={{flex: 1, backgroundColor: 'white'}}
      ListHeaderComponent={
        <View
          style={[
            styles.Row1,
            {
              justifyContent: 'space-between',
              padding: 15,
            },
          ]}>
          <Text style={styles.boldtxt18}>현재 등록된 소속 라이더</Text>
          <BlueBorderBtn
            title="라이더 추가"
            style={{width: 100, height: 30}}
            onPress={() => {
              setRiderAdd(true);
            }}
          />
          <RiderAddModal
            open={riderAdd}
            cancel={() => setRiderAdd(false)}
            confirm={() => {}}
          />
        </View>
      }
      renderItem={RenderRiderItem}
      data={riderData}></FlatList>
  );
}

const RenderRiderItem = ({item}) => {
  return (
    <View
      style={[
        styles.Row1,
        {
          padding: 15,
          justifyContent: 'space-between',
          backgroundColor: item.key % 2 !== 0 ? '#F6F6F6' : 'white',
        },
      ]}>
      <Text style={{fontSize: 16}}>
        {item.riderid} | {item.phone} | {item.ridername}
      </Text>
      <Image source={require('../../images/categorydelete.png')} />
    </View>
  );
};
