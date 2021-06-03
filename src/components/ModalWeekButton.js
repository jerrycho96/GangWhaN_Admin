import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {BtnSubmit} from './BOOTSTRAP';
import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

const data = [
  {id: 1, title: '월', checked: true},
  {id: 2, title: '화', checked: false},
  {id: 3, title: '수', checked: false},
  {id: 4, title: '목', checked: true},
  {id: 5, title: '금', checked: true},
  {id: 6, title: '토', checked: true},
  {id: 7, title: '일', checked: true},
];

export const ModalWeekButton = () => {
  const [category, setCategory] = React.useState(data);

  function test(index) {
    const weeks = [...category];
    weeks[index].checked = !weeks[index].checked;
    setCategory(weeks);
  }
  const width = Dimensions.get('window').width;

  return (
    <View
      style={[
        styles.Row1,
        {justifyContent: 'space-between', marginBottom: 20},
      ]}>
      {data.map((item, index) => {
        return (
          <BtnSubmit
            title={item.title}
            style={{
              width: width / 9,
              height: width / 9,
              backgroundColor: item?.checked ? '#28B766' : '#E5E5E5',
            }}
            textStyle={{color: item?.checked ? 'white' : '#AAAAAA'}}
            onPress={() => {
              test(index);
            }}
          />
        );
      })}
    </View>
  );
};
