import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  BlueBorderBtn,
  BtnSubmit,
  InputText,
  UnderLine,
} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';

export default function FindAccount() {
  return (
    <View style={styles.container01}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.mediumtxt16}>강화N 가입정보를 확인합니다</Text>
      </View>

      <View
        style={{
          borderColor: '#E5E5E5',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 15,
          paddingVertical: 15,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigate('FindId');
          }}>
          <Text style={{fontSize: 16}}>아이디를 찾습니다</Text>
          <Image source={require('../../images/rightbutton.png')}></Image>
        </TouchableOpacity>
        <View style={styles.underline}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigate('FindPass');
          }}>
          <Text style={{fontSize: 16}}>비밀번호를 찾습니다</Text>
          <Image source={require('../../images/rightbutton.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
});
