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

export default function FindPass() {
  return (
    <View style={styles.container01}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.mediumtxt16}>비밀번호를 찾습니다</Text>
      </View>
      <View style={style.inputView}>
        <InputText
          style={{flex: 1}}
          placeholder={'아이디를 입력해주세요'}></InputText>
      </View>
      <View>
        <BtnSubmit
          style={{marginTop: 10}}
          title="휴대폰 인증"
          onPress={() => {
            navigate('FindPassPhone');
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
