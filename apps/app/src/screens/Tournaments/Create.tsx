import DateTimePicker from '@react-native-community/datetimepicker';
import { startOfDay } from 'date-fns';
import { Format } from 'lbn-core/src/types';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, TextInput } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist';
import {
  Button,
  Colors,
  RadioButton,
  RadioGroup,
  Text,
  View,
} from 'react-native-ui-lib';
import { v4 as uuid } from 'uuid';
import { SimpleItem } from '../../components/SimpleItem';
import SquadronComponent from '../../components/SquadronComponent';
import { systemStore } from '../../stores/system';
import { tournamentStore } from '../../stores/tournaments';
import { XWS } from '../../stores/xws';
import { blue } from '../../theme';

export const CreateTournamentScreen: NavigationFunctionComponent<{}> = ({
  componentId,
}) => {
  const user = systemStore(s => s.user);
  const addTournament = tournamentStore(s => s.addTournament);

  const [name, setName] = useState('');
  const [format, setFormat] = useState<Format>();
  const [date, setDate] = useState<Date>(new Date());
  const [squadron, setSquadron] = useState<XWS>();

  const [showPicker, setShowPicker] = useState<boolean>(
    Platform.OS === 'ios' ? true : false,
  );

  useNavigationButtonPress(e => {
    e.buttonId === 'cancel' && Navigation.dismissModal(componentId);
  }, componentId);

  console.log({ format, name, date, squadron });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        marginT-10
        paddingH-10
        paddingV-8
        backgroundColor={Platform.OS === 'ios' ? '#1E2228' : undefined}
        br20>
        <TextInput
          value={name}
          placeholder={'Name'}
          placeholderTextColor={Colors.secondary}
          underlineColorAndroid={'white'}
          style={styles.input}
          onChangeText={e => setName(e)}
        />
      </View>

      <RadioGroup
        marginT-20
        marginH-10
        onValueChange={(v: Format) => setFormat(v)}>
        <RadioButton
          label="Standard"
          color={blue}
          labelStyle={styles.input}
          containerStyle={styles.radioContainer}
          value={'Standard'}
        />
        <RadioButton
          label="Extended"
          color={blue}
          labelStyle={styles.input}
          containerStyle={styles.radioContainer}
          value={'Extended'}
        />
      </RadioGroup>

      <View marginT-10 marginH-10 row spread centerV height={40}>
        <Text text80M>Date</Text>

        <View style={styles.pickerContainer}>
          {showPicker && (
            <DateTimePicker
              value={date}
              display={'calendar'}
              mode={'date'}
              onChange={(_: any, d: Date | undefined) => {
                d && setDate(startOfDay(d));
                Platform.OS === 'android' && setShowPicker(false);
              }}
            />
          )}
          {Platform.OS === 'android' && (
            <Button
              label={date.toDateString()}
              onPress={() => setShowPicker(true)}
            />
          )}
        </View>
      </View>

      <View marginT-10>
        {squadron && (
          <SquadronComponent
            item={squadron}
            onPress={() => {
              Navigation.push(componentId, {
                component: {
                  name: 'SelectSquadron',
                  passProps: { onSelect: setSquadron },
                },
              });
            }}
          />
        )}
        {!squadron && (
          <SimpleItem
            text={'Select squadron'}
            onPress={() => {
              Navigation.push(componentId, {
                component: {
                  name: 'SelectSquadron',
                  passProps: { onSelect: setSquadron },
                },
              });
            }}
          />
        )}
      </View>

      <Button
        marginT-10
        outline
        outlineColor={blue}
        disabled={!squadron || !date || !name || !format}
        label={'Save'}
        onPress={() => {
          addTournament({
            id: uuid(),
            name,
            date,
            format: format!,
            games: [],
            player: {
              id: user?.id || uuid(), // UserId, not ParticipantId
              name: user?.name || 'You',
              xws: squadron,
            },
            version: '1.0.0',
          });
          Navigation.dismissModal(componentId);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { color: 'white' },
  radio: { color: 'white' },
  radioContainer: { marginVertical: 5 },
  pickerContainer: { width: '50%' },
});

CreateTournamentScreen.options = {
  topBar: {
    title: { text: 'Create Tournament' },
    rightButtons: [{ id: 'cancel', text: 'Cancel' }],
  },
};

export default CreateTournamentScreen;
