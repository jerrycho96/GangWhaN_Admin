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

export default function FindId() {
  return (
    <View style={styles.container01}>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <Text style={styles.mediumtxt16}>아이디를 찾습니다</Text>
      </View>

      <View>
        <BtnSubmit
          style={{marginTop: 10}}
          title="휴대폰 인증"
          onPress={() => {
            navigate('FindIdPhone');
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
