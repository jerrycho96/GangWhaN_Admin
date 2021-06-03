import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {BlueBorderBtn, BtnSubmit, InputText} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';

export default function FindIdResult() {
  return (
    <View style={styles.container01}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.mediumtxt16}>가입하신 계정 정보입니다</Text>
      </View>
      <View style={style.inputView}>
        <Image source={require('../../images/findid1.png')}></Image>
        <Text style={{fontSize: 16, marginLeft: 10}}>abc12345</Text>
      </View>
      <View style={style.inputView}>
        <Image source={require('../../images/findid2.png')}></Image>
        <Text style={{fontSize: 16, marginLeft: 10}}>2020-12-01</Text>
      </View>
      <View>
        <BtnSubmit
          style={{marginTop: 10, backgroundColor: '#777777'}}
          title="비밀번호 찾기"
          onPress={() => {
            navigate('FindPass');
          }}></BtnSubmit>
        <BtnSubmit
          style={{marginTop: 10}}
          title="로그인 화면으로 이동"
          onPress={() => {
            navigate('Login');
          }}></BtnSubmit>
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
