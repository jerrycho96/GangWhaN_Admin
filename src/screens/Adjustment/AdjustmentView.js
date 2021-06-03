import * as React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
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
import {
  AdjustmentViewData,
  AdjustmentViewListRender,
} from '../../components/AdjustmentViewList';

export default function AdjustmentView({route}) {
  const [bottomTab, setBottomTab] = React.useState('3');

  return <MainBody1 bottomTab={bottomTab} setBottomTab={setBottomTab} />;
}

const MainBody1 = props => {
  const {bottomTab, setBottomTab} = props;
  const [yearAcco, setYearAcco] = React.useState('2021');
  const [monthAcco, setMonthAcco] = React.useState('전체');
  return (
    <MenuProvider>
      <View style={{flex: 1}}>
        {/* 리스트 */}
        <FlatList
          contentContainerStyle={[{justifyContent: 'space-between'}]}
          style={{backgroundColor: 'white'}}
          ListHeaderComponent={
            <View style={{flex: 1}}>
              <AdjustHeader />
              <Underline10 />
              <View style={{padding: 15, flex: 1}}>
                <View style={styles.Row}>
                  <YearPopup yearAcco={yearAcco} setYearAcco={setYearAcco} />
                  <View style={{marginRight: 5}} />
                  <MonthPopup yearAcco={monthAcco} setYearAcco={setMonthAcco} />
                  <BtnSubmit
                    title="조회"
                    style={{width: 90, height: 45, marginLeft: 10}}
                  />
                </View>
              </View>
            </View>
          }
          data={AdjustmentViewData}
          keyExtractor={item => item.id}
          renderItem={AdjustmentViewListRender}
          ListFooterComponent={
            <View style={[styles.underline100, {marginHorizontal: 15}]} />
          }
        />
        {/* 바텀탭 */}
        <BottomTab bottomTab={bottomTab} setBottomTab={setBottomTab} />
      </View>
    </MenuProvider>
  );
};

const AdjustHeader = () => {
  return (
    <View style={{padding: 15}}>
      <View
        style={[
          styles.Row,
          {
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 10,
          },
        ]}>
        <Text style={styles.mediumtxt16}>3월 정산 금액</Text>
      </View>
      <View
        style={[
          styles.Row,
          {
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 15,
            marginBottom: 5,
          },
        ]}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>999,000원</Text>
        <Text>정산완료 2021.04.10</Text>
      </View>
    </View>
  );
};

const YearPopup = props => {
  const {yearAcco, setYearAcco} = props;
  return (
    <View style={{flex: 1}}>
      <Menu>
        <MenuTrigger
          style={{
            borderRadius: 5,
            borderWidth: 1,
            height: 45,
            flex: 1,
            borderColor: '#CCCCCC',
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>{yearAcco}</Text>
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => setYearAcco(`2021`)}>
            <Text style={{color: 'black', fontSize: 16}}>2021</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`2020`)}>
            <Text style={{color: 'black', fontSize: 16}}>2020</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const MonthPopup = props => {
  const {yearAcco, setYearAcco} = props;
  return (
    <View style={{flex: 1}}>
      <Menu>
        <MenuTrigger
          style={{
            borderRadius: 5,
            borderWidth: 1,
            height: 45,
            flex: 1,
            borderColor: '#CCCCCC',
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>{yearAcco}</Text>
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => setYearAcco(`전체`)}>
            <Text style={{color: 'black', fontSize: 16}}>전체</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`1월`)}>
            <Text style={{color: 'black', fontSize: 16}}>1월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`2월`)}>
            <Text style={{color: 'black', fontSize: 16}}>2월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`3월`)}>
            <Text style={{color: 'black', fontSize: 16}}>3월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`4월`)}>
            <Text style={{color: 'black', fontSize: 16}}>4월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`5월`)}>
            <Text style={{color: 'black', fontSize: 16}}>5월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`6월`)}>
            <Text style={{color: 'black', fontSize: 16}}>6월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`7월`)}>
            <Text style={{color: 'black', fontSize: 16}}>7월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`8월`)}>
            <Text style={{color: 'black', fontSize: 16}}>8월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`9월`)}>
            <Text style={{color: 'black', fontSize: 16}}>9월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`10월`)}>
            <Text style={{color: 'black', fontSize: 16}}>10월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`11월`)}>
            <Text style={{color: 'black', fontSize: 16}}>11월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`12월`)}>
            <Text style={{color: 'black', fontSize: 16}}>12월</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
