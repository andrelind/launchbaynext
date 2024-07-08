import { parseJSON } from 'date-fns';
import { Format } from 'lbn-core/src/types';
import { useCallback } from 'react';
import { SectionList, SectionListData, StyleSheet } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/outline';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { Button, Card, Text, View } from 'react-native-ui-lib';
import { v4 as uuid } from 'uuid';
import { SquadronComponent } from '../../components/SquadronComponent';
import { SwipeComponent } from '../../components/SwipeComponent';
import { colorForFormat } from '../../helpers/colors';
import { GameResponse, tournamentStore } from '../../stores/tournaments';

type Props = {
  id: string;
};

type Section = { title: string; data: GameResponse[] };

const getMoV = ({ player1Score, player2Score }: GameResponse) => {
  if (
    player1Score === undefined ||
    player1Score === null ||
    player2Score === undefined ||
    player2Score === null
  ) {
    return 0;
  }
  const diff = Math.abs(player1Score - player2Score);
  if (
    player1Score === undefined ||
    player1Score === null ||
    player2Score === undefined ||
    player2Score === null
  ) {
    return 0;
  }
  if (player1Score > player2Score) {
    return 200 + diff;
  }
  if (player1Score < player2Score) {
    return 200 - diff;
  }
  return 200;
};

export const TournamentOverviewScreen: NavigationFunctionComponent<Props> = ({
  id,
  componentId,
}) => {
  const tournament = tournamentStore(s =>
    s.tournaments?.find(t => t.id === id),
  );
  const { addGame, updateTournament, removeGame } = tournamentStore(
    s => ({
      addGame: s.addGame,
      updateTournament: s.updateTournament,
      removeGame: s.removeGame,
    }),
  );

  const sections: Section[] = [];
  const swiss = tournament?.games.filter(g => g.type === 'Swiss') || [];
  if (swiss.length > 0) {
    sections.push({ title: 'Swiss', data: swiss });
  }
  const cut = tournament?.games.filter(g => g.type === 'Cut') || [];
  if (cut.length > 0) {
    sections.push({ title: 'Cut', data: cut });
  }
  const final = tournament?.games.filter(g => g.type === 'Final') || [];
  if (final.length > 0) {
    sections.push({ title: 'Final', data: final });
  }

  if (!tournament) {
    return <View />;
  }

  const renderTopInfo = () => {
    return (
      <View marginH-8 marginT-10>
        <View row spread centerV>
          <Button
            outline
            outlineColor={colorForFormat(tournament?.format || 'Extended')}
            label={tournament?.format || 'Extended'}
            // @ts-expect-error
            size={'xSmall'}
            text80
            onPress={() => {
              Navigation.showModal({
                component: {
                  name: 'SelectFormat',
                  passProps: {
                    onFormat: (f: Format) => {
                      tournament.format = f;
                      updateTournament({ ...tournament });
                    },
                  },
                },
              });
            }}
          />
          {tournament?.date && (
            <Text>{parseJSON(tournament?.date).toDateString()}</Text>
          )}
        </View>
        {tournament.player?.xws && (
          <SquadronComponent item={tournament.player?.xws} />
        )}
      </View>
    );
  };

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<GameResponse, Section>;
  }) => {
    if (section.title === '') {
      return null;
    }
    return (
      <Text text70M marginT-20 primary marginH-8>
        {section.title}
      </Text>
    );
  };

  const renderItem = ({ item }: { item: GameResponse }) => {
    const { round, player1Score, player2, player2Score } = item;

    return (
      <SwipeComponent
        onRightAction={() => {
          removeGame(tournament.id, item.id);
        }}>
        <Card
          onPress={() => {
            Navigation.push(componentId, {
              component: {
                name: 'TournamentRound',
                passProps: {
                  tournamentId: tournament?.id,
                  gameId: item.id,
                },
                options: {
                  topBar: {
                    title: { text: `${item.type} round ${item.round}` },
                  },
                },
              },
            });
          }}>
          <View marginH-8>
            <View row spread>
              <Text text80M>Round {round}</Text>
              <Text text80M>{`${player1Score} vs. ${player2Score}`}</Text>
            </View>
            <View row spread>
              <Text text80>{player2?.name || 'Unknown'}</Text>
              <Text text80>MoV: {getMoV(item)}</Text>
            </View>
          </View>
          {player2?.xws && <SquadronComponent item={player2?.xws} />}
        </Card>
      </SwipeComponent>
    );
  };

  const renderSeparator = useCallback(() => <View height={10} />, []);
  const renderFooter = useCallback(() => <View height={60} />, []);

  return (
    <>
      <SectionList
        contentContainerStyle={styles.container}
        sections={sections}
        keyExtractor={t => t.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderTopInfo}
        ListFooterComponent={renderFooter}
      />

      <Button
        style={styles.button}
        iconSource={() => <PlusIcon size={30} color={'white'} />}
        onPress={() => {
          const game: GameResponse = {
            id: uuid(),
            type: 'Swiss',
            round: tournament?.games.filter(g => g.type === 'Swiss').length + 1,
            bye: false,
            player1: tournament?.player,
            player1Score: 0,
            player1Signoff: false,
            player2Score: 0,
            player2Signoff: false,
          };
          addGame(id, game);
          Navigation.push(componentId, {
            component: {
              name: 'TournamentRound',
              passProps: {
                tournamentId: tournament?.id,
                gameId: game.id,
              },
              options: {
                topBar: { title: { text: `${game.type} round ${game.round}` } },
              },
            },
          });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  button: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    borderRadius: 100,
    padding: 8,
  },
});
