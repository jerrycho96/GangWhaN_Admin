import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {MainWorkOnOffRefresh} from '../../components/MainWorkOnOffRefresh';
import {MainHeader} from '../../components/MainHeader';
import {TopTab} from '../../components/MainTopTab';
import {BottomTab} from '../../components/MainBottomTab';
import {AdminNotice} from '../../components/MainAdminNotice';
import {
  BtnSubmit,
  InputText,
  TopDelState,
  Underline1,
  Underline10,
} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';
import {DelListSuccess, DelSuccessData} from '../../components/DelListSuccess';
import {AdjustmentTopTab} from '../../components/AdjustmentTopTab';

export default function NoticeView({route}) {
  const [bottomTab, setBottomTab] = React.useState('3');

  return <MainBody1 bottomTab={bottomTab} setBottomTab={setBottomTab} />;
}

const MainBody1 = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 18, marginBottom: 5}}>공지사항입니다.</Text>
        <Text style={{color: '#B2B2B2', marginBottom: 20}}>2021.08.27</Text>
        <Image
          source={require('../../images/noticeviewimg.png')}
          style={{resizeMode: 'cover', width: '100%'}}
        />
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 16}}>
            공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에
            의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
            법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다.
            {'\n'}
            {'\n'}
            일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는
            수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이
            발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년
            이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을
            때에는 사후에 영장을 청구할 수 있다.
          </Text>
        </View>
      </View>
    </View>
  );
};
