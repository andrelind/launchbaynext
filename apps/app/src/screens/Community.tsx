import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { Assets, Constants, Text } from 'react-native-ui-lib';
import { SimpleItem } from '../components/SimpleItem';

type Props = {};

export const CommunityScreen: NavigationFunctionComponent<Props> = ({
  componentId,
}) => {
  const data = [
    {
      title: '',
      data: [
        {
          name: 'X-Wing Rules Reference',
          link: 'https://www.atomicmassgames.com/s/SWZ_RulesReference_v145-compressed-m4j5.pdf',
        },
        {
          name: 'X-Wing Errata Reference Pt. 1',
          link: 'https://www.atomicmassgames.com/s/SWZ_Errata_17_Fix_pt_1.pdf',
        },
        {
          name: 'X-Wing Errata Reference Pt. 2',
          link: 'https://www.atomicmassgames.com/s/SWZ_Errata_17_Fix_pt_2.pdf',
        },
        {
          name: 'Ship Points',
          link: 'https://www.atomicmassgames.com/s/Ship_Points_060923_v2.pdf',
        },
        {
          name: 'Upgrade Points',
          link: 'https://www.atomicmassgames.com/s/Upgrade_Points_060923_v2.pdf',
        },
        {
          name: 'Scenarios',
          link: 'https://www.atomicmassgames.com/s/SWZ_Scenarios_072022-9lee.pdf',
        },
        {
          name: 'X-Wing Ban List',
          link: 'https://www.atomicmassgames.com/s/SWZ_BanRestricted_List_060923-3twz.pdf',
        },
        {
          name: 'X-Wing Epic Battles Rules Reference',
          link: 'https://images-cdn.fantasyflightgames.com/filer_public/69/e7/69e76fa5-61e1-4c8a-9c07-05a222b58420/01_swzepicrulesreference_v110.pdf',
        },
      ],
    },
    {
      title: 'Lists and statistics',
      data: [
        {
          name: 'Probability Calculator',
          link: 'http://xwing.gateofstorms.net/2/multi_preset/',
        },
        {
          name: 'List Fortress',
          link: 'https://listfortress.com',
        },
        {
          name: 'Meta Wing 2.0',
          link: 'https://meta.listfortress.com',
        },
        {
          name: 'Pink Brain Matter',
          link: 'https://www.pinksquadron.dk/pbm/',
        },
        {
          name: 'Advanced Targeting Computer',
          link: 'http://advancedtargeting.computer',
        },
        {
          name: 'Pattern Analyzer',
          link: 'www.pattern-analyzer.app',
        },
      ],
    },
    {
      title: 'Podcasts',
      data: [
        {
          name: 'Fly Better Podcast',
          link: 'https://mynockpodcast.libsyn.com',
        },
        {
          name: 'Gold Squadron Podcast',
          link: 'https://www.goldsquadronpodcast.com',
        },
        {
          name: 'Radio TCX Podcast',
          link: 'https://radiotcx.podbean.com',
        },
      ],
    },
    {
      title: 'Discussions and Forums',
      data: [
        {
          name: 'Reddit',
          link: 'https://www.reddit.com/r/XWingTMG/',
        },
        {
          name: 'X-Wing Second Edition [Discord]',
          link: 'https://discord.gg/QMvm2HF3aK',
        },
      ],
    },
    {
      title: 'Blogs',
      data: [
        {
          name: 'Confessions of a Midwest Scrub',
          link: 'https://midwestscrub.wordpress.com',
        },
        {
          name: 'Stay on the Leader',
          link: 'https://stayontheleader.blogspot.com',
        },
      ],
    },
  ];

  const renderSectionHeader = (item: { section: { title: string } }) => {
    if (item.section.title === '') {
      return null;
    }
    return (
      <Text text70M marginT-20 primary marginH-8>
        {item.section.title}
      </Text>
    );
  };

  return (
    <SectionList
      contentContainerStyle={styles.container}
      sections={data}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={item => item.link}
      renderItem={({ item }) => (
        <SimpleItem
          text={item.name}
          onPress={() => {
            if (item.link) {
              if (item.link.includes('.pdf')) {
                const component = {
                  component: { name: 'Pdf', passProps: { url: item.link } },
                };
                Constants.isTablet
                  ? Navigation.setStackRoot('detail', component)
                  : Navigation.push(componentId, component);
              } else {
                const component = {
                  component: { name: 'Web', passProps: { url: item.link } },
                };
                Constants.isTablet
                  ? Navigation.setStackRoot('detail', component)
                  : Navigation.push(componentId, component);
              }
            }
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
});

CommunityScreen.options = {
  topBar: { title: { text: 'Community' } },
  bottomTab: { text: 'Community', icon: Assets.icons.globe },
};

export default CommunityScreen;
