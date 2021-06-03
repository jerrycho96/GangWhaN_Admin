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
  Platform,
} from 'react-native';
import {BtnSubmit, Underline1, BlueBorderBtn} from '../../components/BOOTSTRAP';
import {OpenTimeManageModal} from '../../components/OpenTimeManageModal';
import {ClosedTimeManageModal} from '../../components/ClosedTimeManageModal';
import {ClosedCalendarPick} from '../../components/ClosedCalendarPick';
import {CalendarHeader} from '../../components/CalendarTest';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

import moment from 'moment';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';

export default function OpenClosedSetting() {
  const [accoState, setAccoState] = React.useState('2021');
  const [accoState1, setAccoState1] = React.useState('6');
  // 영업시간 관리 모달
  const [onConfirm, setOnConfirm] = React.useState(false);
  // 정기휴일 설정 모달
  const [onConfirm1, setOnConfirm1] = React.useState(false);
  // 휴일 설정 모달
  const [CalendarModal, setCalendarModal] = React.useState(false);

  const selectDate = accoState + '-' + '0' + accoState1 + '-' + '01';
  console.log(selectDate);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MenuProvider>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
            <View style={[styles.Row, {justifyContent: 'space-between'}]}>
              <Text style={styles.boldtxt18}>영업시간</Text>
              <BtnSubmit
                title="영업시간 관리"
                style={{height: 35, width: 112}}
                onPress={() => {
                  setOnConfirm(true);
                }}
              />
            </View>
            <View style={{marginTop: 15}}>
              <View style={[styles.Row, {marginBottom: 10}]}>
                <Text style={{flex: 2, fontSize: 16}}>월, 화, 목, 금</Text>
                <Text style={{flex: 4, fontSize: 16}}>
                  오전 10:30 ~ 오후 05:30
                </Text>
                <TouchableOpacity>
                  <Image
                    style={{flex: 0.5, resizeMode: 'contain'}}
                    source={require('../../images/categorydelete.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.Row}>
                <Text style={{flex: 2, fontSize: 16}}>수, 토</Text>
                <Text style={{flex: 4, fontSize: 16}}>
                  오전 10:30 ~ 오후 02:00
                </Text>
                <TouchableOpacity>
                  <Image
                    style={{flex: 0.5, resizeMode: 'contain'}}
                    source={require('../../images/categorydelete.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Underline1 />
            <View>
              <View style={styles.Row}>
                <Text style={[styles.mediumtxt16, {flex: 1.9}]}>정기휴일</Text>
                <Text style={{flex: 3, fontSize: 16}}>1, 3주 목요일</Text>
                <BlueBorderBtn
                  title="설정"
                  style={{height: 30, width: 70, flex: 1}}
                  onPress={() => {
                    setOnConfirm1(true);
                  }}
                />
              </View>
            </View>
            <Underline1 />
            <Text style={[styles.mediumtxt16, {marginTop: 5}]}>휴무일</Text>
            <View style={[styles.Row, {marginTop: 20}]}>
              <PopupMenu accoState={accoState} setAccoState={setAccoState} />
              <PopupMenu1
                accoState1={accoState1}
                setAccoState1={setAccoState1}
              />
            </View>
          </View>

          {/* 달력 */}
          <CalendarHeader />
          <CustomCalendar
            CalendarModal={CalendarModal}
            setCalendarModal={setCalendarModal}
            selectDate={selectDate}
            accoState={accoState}
            accoState1={accoState1}
          />
        </ScrollView>
      </MenuProvider>
      {/* 영업시간 관리 모달 */}
      <OpenTimeManageModal
        open={onConfirm}
        cancel={() => setOnConfirm(false)}
        confirm={() => {}}
      />
      {/* 정기휴일 관리 모달 */}
      <ClosedTimeManageModal
        open={onConfirm1}
        cancel={() => setOnConfirm1(false)}
        confirm={() => {}}
      />
      {/* 휴일 캘린더 모달 */}
      <ClosedCalendarPick
        open={CalendarModal}
        cancel={() => setCalendarModal(false)}
        confirm={() => {}}
      />
    </SafeAreaView>
  );
}

const CustomCalendar = props => {
  LocaleConfig.locales['fr'] = {
    monthNames: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  };
  LocaleConfig.defaultLocale = 'fr';

  const todayDate = moment().format('YYYY-MM-DD');

  const {accoState, accoState1} = props;
  const date = String(accoState + '-' + '0' + accoState1 + '-' + '01');

  const [markedList, setMarkedList] = React.useState([]);
  const [markState, setMarkState] = React.useState(false);

  const set = new Set(markedList);
  const markedDay = {[todayDate]: {selected: true, selectedColor: '#777777'}};

  markedList.map(index => {
    markedDay[index] = {selected: true, selectedColor: '#28B766'};
  });
  // const addJoinPeople = e => {
  //   const name = e.target.value;
  //   setMarkedList([...markedList, name]);
  //   console.log(markedList);
  // };

  // //Delete item
  // const RemovePeople = e => {
  //   const name = e.target.value;
  //   setMarkedList(markedList.filter(e => e !== name));
  // };

  return (
    <Calendar
      // Collection of dates that have to be marked. Default = {}
      onDayPress={day => {
        console.log('selected day', day.dateString);
        // setMarkState(!markState);
        // !markState
        //   ? props.setCalendarModal(true)
        //   : props.setCalendarModal(false);

        props.setCalendarModal(true);
        // !markState
        //   ? setMarkedList([...markedList, day.dateString])
        //   : joinList.splice(joinList.indexOf(day.dateString));

        setMarkedList([...markedList, day.dateString]);

        console.log(markedList);
      }}
      current={date}
      minDate={Date()}
      firstDay={1}
      renderHeader={() => null}
      hideArrows={true}
      disableMonthChange={true}
      disableAllTouchEventsForDisabledDays={true}
      hideDayNames={true}
      markedDates={markedDay}
      theme={{
        todayTextColor: 'green',
        textDisabledColor: '#ffffff',
        selectedDayBackgroundColor: 'green',
        textDayFontWeight: 'normal',
      }}
    />
  );
};

const width = Dimensions.get('window').width;

const PopupMenu = props => {
  const {accoState, setAccoState} = props;
  return (
    <Menu style={{flex: 1, marginRight: 5}}>
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
        <Text style={{fontSize: 16}}>{accoState}년</Text>
        <Image source={require('../../images/orderaccodiondown.png')} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            ...Platform.select({
              ios: {
                marginTop: -46,
              },
              android: {
                marginTop: -11,
              },
            }),
            width: width / 2.2,
            paddingLeft: 10,
          },
        }}>
        <MenuOption onSelect={() => setAccoState(`2021`)}>
          <Text style={{color: 'black', fontSize: 16}}>2021년</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState(`2020`)}>
          <Text style={{color: 'black', fontSize: 16}}>2020년</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
const PopupMenu1 = props => {
  const {accoState1, setAccoState1} = props;
  return (
    <Menu style={{flex: 1}}>
      <MenuTrigger
        style={{
          marginLeft: 5,
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
        <Text style={{fontSize: 16}}>{accoState1}월</Text>
        <Image source={require('../../images/orderaccodiondown.png')} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            ...Platform.select({
              ios: {
                marginTop: -46,
              },
              android: {
                marginTop: -11,
              },
            }),
            width: width / 2.3,
            marginLeft: 5,
            paddingLeft: 10,
          },
        }}>
        <MenuOption onSelect={() => setAccoState1(`1`)}>
          <Text style={{color: 'black', fontSize: 16}}>1월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`2`)}>
          <Text style={{color: 'black', fontSize: 16}}>2월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`3`)}>
          <Text style={{color: 'black', fontSize: 16}}>3월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`4`)}>
          <Text style={{color: 'black', fontSize: 16}}>4월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`5`)}>
          <Text style={{color: 'black', fontSize: 16}}>5월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`6`)}>
          <Text style={{color: 'black', fontSize: 16}}>6월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`7`)}>
          <Text style={{color: 'black', fontSize: 16}}>7월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`8`)}>
          <Text style={{color: 'black', fontSize: 16}}>8월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`9`)}>
          <Text style={{color: 'black', fontSize: 16}}>9월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`10`)}>
          <Text style={{color: 'black', fontSize: 16}}>10월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`11`)}>
          <Text style={{color: 'black', fontSize: 16}}>11월</Text>
        </MenuOption>
        <MenuOption onSelect={() => setAccoState1(`12월`)}>
          <Text style={{color: 'black', fontSize: 16}}>12월</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};
