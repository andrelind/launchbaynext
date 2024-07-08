import { format } from 'date-fns';
import { parseJSON } from 'date-fns/esm';
import { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { ChevronRightIcon, PlusIcon } from 'react-native-heroicons/outline';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { Assets, Button, Card, Text, View } from 'react-native-ui-lib';
import { SwipeComponent } from '../../components/SwipeComponent';
import { smooth } from '../../helpers/animation';
import { TournamentResponse, tournamentStore } from '../../stores/tournaments';

type Props = {};

export const TournamentsScreen: NavigationFunctionComponent<Props> = ({
  componentId,
}) => {
  const { tournaments, removeTournament } = tournamentStore(
    s => ({ tournaments: s.tournaments, removeTournament: s.removeTournament }),
  );

  const renderItem = ({ item }: ListRenderItemInfo<TournamentResponse>) => {
    return (
      <SwipeComponent
        onRightAction={() => {
          smooth();
          removeTournament(item.id);
        }}>
        <Card
          marginV-10
          marginH-10
          row
          spread
          centerV
          enableShadow={false}
          onPress={() => {
            Navigation.push(componentId, {
              component: {
                name: 'TournamentOverview',
                passProps: { id: item.id },
                options: {
                  topBar: { title: { text: item.name } },
                },
              },
            });
          }}>
          <View>
            <Text text80M primary>
              {item.name}
            </Text>
            <Text>{format(parseJSON(item.date), 'yyyy-MM-dd')}</Text>
          </View>
          <ChevronRightIcon size={20} color={'white'} />
        </Card>
      </SwipeComponent>
    );
  };

  const renderSeparator = useCallback(() => <View height={10} />, []);
  const renderFooter = useCallback(() => <View height={60} />, []);

  return (
    <>
      <FlatList
        contentContainerStyle={styles.container}
        data={tournaments || []}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />

      <Button
        style={styles.button}
        iconSource={() => <PlusIcon size={30} color={'white'} />}
        onPress={() =>
          Navigation.showModal({
            stack: { children: [{ component: { name: 'CreateTournament' } }] },
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  button: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    borderRadius: 100,
    padding: 8,
  },
});

TournamentsScreen.options = {
  topBar: { title: { text: 'Tournaments' } },
  bottomTab: { text: 'Tournaments', icon: Assets.icons.calendar },
};

export default TournamentsScreen;
