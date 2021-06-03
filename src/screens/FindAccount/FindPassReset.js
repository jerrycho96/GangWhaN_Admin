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

export default function FindPassReset() {
  return (
    <View style={styles.container01}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.mediumtxt16}>새로운 비밀번호를 설정해 주세요</Text>
      </View>
      <View style={style.inputView}>
        <InputText style={{flex: 1}} placeholder={'새 비밀번호 입력'} />
      </View>
      <Text style={{color: '#E51A47', marginTop: 5}}>
        영문, 숫자, 특수기호를 모두 포함해 8자 이상
      </Text>
      <View style={[style.inputView, {marginTop: 10}]}>
        <InputText style={{flex: 1}} placeholder={'새 비밀번호 입력'} />
      </View>
      <View>
        <BtnSubmit
          style={{marginTop: 20}}
          title="비밀번호 변경"
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
  },
});
