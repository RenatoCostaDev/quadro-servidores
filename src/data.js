const inicialApps = [
  {
      id: 1,
      name: 'Hadoop',
      color: 'pink',
      qtde: 0,
      createdAt: 0,
  },
  {
      id: 2,
      name: 'Rails',
      color: 'purple',
      qtde: 0,
      createdAt: 0,
  },
  {
      id: 3,
      name: 'Chronos',
      color: 'blue',
      qtde: 0,
      createdAt: 0,
  },
  {
      id: 4,
      name: 'Storm',
      color: 'green',
      qtde: 0,
      createdAt: 0,
  },
  {
      id: 5,
      name: 'Spark',
      color: 'yellow',
      qtde: 0,
      createdAt: 0,
  },
]
//serversArray
const inicialServers = [
        {
            id:1,
            appOne: {},
            appTwo: {},
            color: 'gray',
        },
        {
            id:2,
            appOne: {},
            appTwo: {},
            color: 'gray',
        },
        {
            id:3,
            appOne: {},
            appTwo: {},
            color: 'gray',
        },
        {
            id:4,
            appOne: {},
            appTwo: {},
            color: 'gray',
        },
]

module.exports = {
  inicialApps,
  inicialServers
};