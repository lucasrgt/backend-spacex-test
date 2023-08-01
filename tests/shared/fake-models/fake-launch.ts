import { LaunchModel } from '../../../src/domain/models'

export const fakeLaunch: LaunchModel = {
  id: 'valid_id',
  flightNumber: 0,
  name: 'valid_name',
  dateUtc: 'valid_date',
  dateUnix: 0,
  dateLocal: 'valid_local',
  datePrecision: 'half',
  staticFireDateUtc: 'valid_static_fire_date_utc',
  staticFireDateUnix: 0,
  tbd: false,
  net: false,
  window: 0,
  rocketId: 0,
  success: false,
  failures: [],
  upcoming: false,
  details: 'valid_details',
  fairings: {
    reused: false,
    recoveryAttempt: false,
    recovered: false,
    shipIds: []
  },
  crews: [],
  ships: [],
  capsules: [],
  payloads: [],
  launchpad: {
    launchpadId: 0
  },
  cores: [],
  links: {
    patch: {
      small: 'valid_small',
      large: 'valid_large'
    },
    reddit: {
      campaign: 'valid_campaign',
      launch: 'valid_launch',
      media: 'valid_media',
      recovery: 'valid_recovery'
    },
    flickr: {
      small: [],
      original: []
    },
    presskit: 'valid_presskit',
    webcasts: 'valid_webcasts',
    youtubeId: 'valid_youtube_id',
    article: 'valid_article',
    wikipedia: 'valid_wikipedia'
  },
  autoUpdate: false,
  launchLibraryId: 'valid_launch_library_id'
}
