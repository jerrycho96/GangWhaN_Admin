import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {BtnSubmit, InputText} from '../components/BOOTSTRAP';
import {navigate, resetRoot} from '../navigation/RootNavigation';
import styles from '../style/Style';

export default function Login() {
  return (
    <View style={styles.container01}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../images/logintitle.png')}
          style={{resizeMode: 'contain'}}></Image>
      </View>
      <View style={{flex: 2}}>
        <InputText
          placeholder={'아이디를 입력하세요'}
          style={{marginBottom: 10}}></InputText>
        <InputText
          placeholder={'비밀번호를 입력하세요'}
          style={{marginBottom: 10}}></InputText>

        <BtnSubmit
          title={'로그인'}
          onPress={() => {
            resetRoot('SelectShopHome');
          }}></BtnSubmit>
        <View style={[styles.Row1, {marginTop: 50, justifyContent: 'center'}]}>
          <RegisterText
            text="회원가입"
            onPress={() => navigate('RegisterInput')}
          />
          <Text style={{marginHorizontal: 15}}>|</Text>
          <RegisterText
            text="계정찾기"
            onPress={() => navigate('FindAccount')}
          />
        </View>
      </View>
    </View>
  );
}

const RegisterText = props => {
  const {style = {}, onPress} = props;
  return (
    <Text
      style={[
        {
          fontWeight: '700',
          textDecorationLine: 'underline',
          alignSelf: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      {props.text}
    </Text>
  );
};
