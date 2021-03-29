const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodbuserName: 'mongo',
        mongodb_password: '2GYmU36sKkQTROOz',
        mongodb_cluster: 'cluster0.5',
        mongodb_database: 'myblog_dev',
      },
    }
  }
  return {
    env: {
      mongodbuserName: 'mongo',
      mongodb_password: '2GYmU36sKkQTROOz',
      mongodb_cluster: 'cluster0.5',
      mongodb_database: 'myblog',
    },
  }
}
