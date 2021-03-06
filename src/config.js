const cfg = {
  COMMON: {
    dbOptions: {
      host: "localhost",
      port: 5432,
      database: "expressstarterv1db",
      user: "postgres",
      password: "password"
    },
    cfg1: "cfg1common",
    cfg3: "cfg3common"
  },
  DEV: {
    cfg1: "cfg1dev",
    cfg2: "cfg2dev"
  },
  TEST: {
    dbOptions: {
      host: "localhost",
      port: 5432,
      database: "expressstarterv1dbtest",
      user: "postgres",
      password: "password"
    },
    cfg1: "cfg1test",
    cfg2: "cfg2test"
  },
  PROD: {}
};

//
const config = {
  get: configName => {
    if (process.env.hasOwnProperty(configName)) return process.env[configName];

    const stage = process.env.NODE_ENV || "DEV";
    if (cfg[stage].hasOwnProperty(configName)) return cfg[stage][configName];

    if (cfg.COMMON.hasOwnProperty(configName)) return cfg.COMMON[configName];

    throw Error(`Cannot find config: ${configName}`);
  }
};

module.exports = config;
