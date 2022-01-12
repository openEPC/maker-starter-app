import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

import SafeAreaBox from '../../../components/SafeAreaBox'
import Box from '../../../components/Box'
import { DebouncedButton } from '../../../components/Button'
import Text from '../../../components/Text'
import {
  HotspotSetupNavigationProp,
  HotspotSetupStackParamList,
} from '../../../navigation/hotspotSetupNavigatorTypes'

type Route = RouteProp<
  HotspotSetupStackParamList,
  'HotspotSetupSkipLocationScreen'
>

const HotspotSetupSkipLocationScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation<HotspotSetupNavigationProp>()

  const { params } = useRoute<Route>()

  const navNext = useCallback(async () => {
    navigation.replace('HotspotTxnsProgressScreen', params)
  }, [navigation, params])

  return (
    <SafeAreaBox
      flex={1}
      backgroundColor="primaryBackground"
      paddingHorizontal="l"
    >
      <Box flex={1} justifyContent="center" paddingBottom="xxl">
        <Text variant="h1" marginBottom="l" maxFontSizeMultiplier={1}>
          {t('hotspot_setup.skip_location.title')}
        </Text>
        <Text
          variant="subtitle1"
          color="secondary"
          marginBottom={{ phone: 'l', smallPhone: 'ms' }}
        >
          {t('hotspot_setup.skip_location.subtitle_1')}
        </Text>
        <Text
          variant="subtitle2"
          marginBottom={{ phone: 'xl', smallPhone: 'ms' }}
          numberOfLines={2}
          adjustsFontSizeToFit
          maxFontSizeMultiplier={1.3}
        >
          {t('hotspot_setup.skip_location.subtitle_2')}
        </Text>
      </Box>
      <Box>
        <DebouncedButton
          title={t('hotspot_setup.location_fee.next')}
          mode="contained"
          variant="secondary"
          onPress={navNext}
        />
      </Box>
    </SafeAreaBox>
  )
}

export default HotspotSetupSkipLocationScreen
