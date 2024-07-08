import Clipboard from '@react-native-clipboard/clipboard';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ClipboardIcon, QrCodeIcon } from 'react-native-heroicons/outline';
import {} from 'react-native-heroicons/solid';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist';
import {
  Button,
  Checkbox,
  RadioButton,
  SegmentedControl,
  Text,
  View,
} from 'react-native-ui-lib';
import { SquadronComponent } from '../../components/SquadronComponent';
import { xwsFromString } from '../../helpers/import';
import { TGameType, tournamentStore } from '../../stores/tournaments';
import { blue, darkgrey, red } from '../../theme';

type Props = {
  tournamentId: string;
  gameId: string;
};

const types: TGameType[] = ['Swiss', 'Cut', 'Final'];

export const TournamentRoundScreen: NavigationFunctionComponent<Props> = ({
  componentId,
  tournamentId,
  gameId,
}) => {
  const tournament = tournamentStore(
    s => s.tournaments?.find(t => t.id === tournamentId),
  );
  const updateGame = tournamentStore(s => s.updateGame);
  const game = tournament?.games.find(g => g.id === gameId);

  const [bye, setBye] = useState(false);

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: { title: { text: `${game?.type} round ${game?.round}` } },
    });
  }, [game]);

  useNavigationButtonPress(() => {
    Navigation.showModal({
      component: {
        name: 'MultiCalculator',
        passProps: { p1: game?.player1?.xws, p2: game?.player2?.xws },
      },
    });
  }, componentId);

  if (!game) {
    return <View />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SegmentedControl
        activeBackgroundColor={'transparent'}
        backgroundColor={'transparent'}
        activeColor={red}
        inactiveColor={darkgrey}
        outlineColor={red}
        outlineWidth={2}
        style={{ borderColor: darkgrey, marginHorizontal: 8 }}
        initialIndex={types.indexOf(game?.type || 'Swiss')}
        segments={types.map(tt => ({ label: tt }))}
        onChangeIndex={(i: number) => {
          game.type = types[i];
          updateGame(tournamentId, { ...game }, true);
        }}
      />
      <View row spread marginT-20 centerV paddingH-8>
        <Text text80M>Round</Text>
        <TextInput
          placeholder="#"
          placeholderTextColor={darkgrey}
          style={{ color: 'white' }}
          value={game?.round ? `${game?.round}` : undefined}
          onEndEditing={e => {
            game.round = parseInt(e.nativeEvent.text);
            updateGame(tournamentId, { ...game }, true);
          }}
        />
      </View>
      <View row spread marginT-20 centerV paddingH-8>
        <Text text80M>Bye?</Text>
        <Checkbox
          outline
          value={bye}
          onValueChange={(v: boolean) => {
            setBye(v);
            game.bye = v;
            updateGame(tournamentId, { ...game }, true);
          }}
        />
      </View>

      <View row spread marginT-20 centerV paddingH-8>
        <Text text80M>Score</Text>
        <View row centerV>
          <TextInput
            placeholder="Me"
            placeholderTextColor={darkgrey}
            style={{ color: 'white' }}
            value={game?.player1Score ? `${game?.player1Score}` : undefined}
            onChangeText={text => {
              game.player1Score = parseInt(text);
              updateGame(tournamentId, { ...game }, false);
            }}
            onEndEditing={e => {
              game.player1Score = parseInt(e.nativeEvent.text);
              updateGame(tournamentId, { ...game }, true);
            }}
          />

          <Text text80M primary marginH-5>
            vs.
          </Text>
          <TextInput
            placeholder="Opponent"
            placeholderTextColor={darkgrey}
            style={{ color: 'white' }}
            value={game?.player2Score ? `${game?.player2Score}` : undefined}
            onChangeText={text => {
              game.player2Score = parseInt(text);
              updateGame(tournamentId, { ...game }, false);
            }}
            onEndEditing={e => {
              game.player2Score = parseInt(e.nativeEvent.text);
              updateGame(tournamentId, { ...game }, true);
            }}
          />
        </View>
      </View>

      <View row spread marginT-20 centerV paddingH-8>
        <Text text80M>Winner</Text>
        <RadioButton
          selected={game?.winnerId === game?.player1?.id}
          labelStyle={{ color: 'white', marginVertical: 5 }}
          label="Me"
          onPress={() => {
            game.winnerId = game.player1?.id;
            updateGame(tournamentId, { ...game }, true);
          }}
        />
        <RadioButton
          selected={game?.winnerId === game?.player2?.id}
          labelStyle={{ color: 'white', marginVertical: 5 }}
          label="Opponent"
          onPress={() => {
            game.winnerId = game.player2?.id;
            updateGame(tournamentId, { ...game }, true);
          }}
        />
      </View>

      <Text text80M marginT-40 primary marginL-8>
        Opponent
      </Text>
      <View row spread marginT-20 paddingH-8 centerV>
        <Text text80M>Name</Text>
        <TextInput
          placeholder="Opponent name"
          placeholderTextColor={darkgrey}
          style={{ color: 'white' }}
          value={game?.player2?.name}
          onChangeText={text => {
            if (!game.player2) {
              game.player2 = {
                name: text.trim(),
              };
            } else {
              game.player2.name = text.trim();
            }
            updateGame(tournamentId, { ...game }, false);
          }}
          onEndEditing={e => {
            updateGame(tournamentId, { ...game }, true);
          }}
        />
      </View>
      {game?.player2?.xws && (
        <View row spread marginT-20 centerV>
          <SquadronComponent item={game?.player2?.xws} />
        </View>
      )}
      {!game?.player2?.xws && (
        <View row spread marginT-20 paddingH-8 centerV>
          <Text text80M>Squadron</Text>
          <Button
            link
            linkColor={'white'}
            label="QRCode"
            text80M
            iconSource={() => <QrCodeIcon color={blue} />}
            onPress={() => {
              Navigation.showModal({
                component: {
                  name: 'QRCode',
                  passProps: {
                    onReadQRCode: async (text: string) => {
                      const xws = await xwsFromString(text);
                      if (xws && game.player2) {
                        game.player2.xws = xws;
                        updateGame(tournamentId, { ...game }, true);
                      }
                    },
                  },
                },
              });
            }}
          />

          <Button
            link
            linkColor={'white'}
            label="Import"
            iconSource={() => <ClipboardIcon color={blue} />}
            onPress={async () => {
              const text = await Clipboard.getString();
              if (!text) {
                return;
              }
              const xws = await xwsFromString(text);
              if (xws) {
                if (!game.player2) {
                  game.player2 = {
                    name: 'Not set',
                    xws,
                  };
                } else {
                  game.player2.xws = xws;
                }

                updateGame(tournamentId, { ...game }, true);
              }
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
});

TournamentRoundScreen.options = {
  topBar: {
    rightButtons: [
      //   {
      //     id: 'share',
      //     icon: require('../../assets/icons/external-link-20.0px-.png'),
      //     color: darkgrey,
      //     iconInsets: { left: 3, right: 3 },
      //   },
      {
        id: 'calc',
        icon: require('../../assets/icons/calculator-20.0px-.png'),
        color: darkgrey,
        iconInsets: { left: 3, right: 3 },
      },
      // {
      //   id: 'rename',
      //   icon: require('../../assets/icons/edit-20.0px-.png'),
      //   color: darkgrey,
      //   iconInsets: { left: 3, right: 3 },
      // },
    ],
  },
};

export default TournamentRoundScreen;
