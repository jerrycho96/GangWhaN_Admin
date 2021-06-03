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

export default function FindIdPhone() {
  return (
    <View style={styles.container01}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.mediumtxt16}>아이디를 찾습니다</Text>
      </View>
      <View style={style.inputView}>
        <InputText
          style={{flex: 1, marginRight: 10}}
          placeholder={'핸드폰 번호'}></InputText>
        <BlueBorderBtn title="인증번호 발송"></BlueBorderBtn>
      </View>
      <View style={style.inputView}>
        <InputText
          style={{flex: 1, marginRight: 10}}
          placeholder={'인증번호 입력'}></InputText>
        <BlueBorderBtn title="인증하기"></BlueBorderBtn>
      </View>
      <View>
        <BtnSubmit
          style={{marginTop: 10}}
          title="다음"
          onPress={() => {
            navigate('FindIdResult');
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
