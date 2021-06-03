import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {BtnSubmit, InputText, Underline1} from '../components/BOOTSTRAP';
import {AmPmPopUp} from '../components/AmPmPopUp';
import {ModalWeekButton} from '../components/ModalWeekButton';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

export const OpenTimeManageModal = props => {
  const [amPmPopUp, setAmPmPopUp] = React.useState('오전');
  const [amPmPopUp1, setAmPmPopUp1] = React.useState('오전');

  const Cancel = () => {
    props.cancel();
  };

  function Submit() {
    props.confirm();
  }
  return (
    <Modal isVisible={props.open} onBackButtonPress={() => Cancel()}>
      <MenuProvider>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              justifyContent: 'center',
              padding: 15,
            }}>
            <View style={[styles.Row1, {justifyContent: 'space-between'}]}>
              <Text style={styles.boldtxt18}>영업시간 추가</Text>
              <TouchableOpacity
                onPress={() => {
                  Cancel();
                }}>
                <Image source={require('../images/modalcancel.png')} />
              </TouchableOpacity>
            </View>
            <Underline1 />
            <ModalWeekButton />
            <View style={[styles.Row1, {marginBottom: 5}]}>
              <AmPmPopUp amPmPopUp={amPmPopUp} setAmPmPopUp={setAmPmPopUp} />
              <InputText placeholder="00" style={{flex: 1}} />
              <Text style={{flex: 0.5, fontSize: 16}}> 시</Text>
              <InputText placeholder="00" style={{flex: 1}} />
              <Text style={{fontSize: 16}}> 분 부터</Text>
            </View>
            <View style={styles.Row1}>
              <AmPmPopUp amPmPopUp={amPmPopUp1} setAmPmPopUp={setAmPmPopUp1} />
              <InputText placeholder="00" style={{flex: 1}} />
              <Text style={{flex: 0.5}}> 시</Text>
              <InputText placeholder="00" style={{flex: 1}} />
              <Text style={{fontSize: 16}}> 분 까지</Text>
            </View>
            <BtnSubmit title="추가" style={{marginTop: 20}} />
          </View>
        </View>
      </MenuProvider>
    </Modal>
  );
};
