const protocol = 'http';
const server = '191.252.101.136';
const port = '80';
const host = `${protocol}://${server}:${port}`;

export const environment = {
  production: false,
  ambiente: 'Development',
  ambienteAbrev: 'DEV',
  urlApiProAuth: `${host}/api`,
  //urlApiProSales: `${host}/api`,
  urlApiProSales: `http://localhost:5068/api`,
  //urlApiProAuth: `http://localhost:5000/api`,
  secretKey: 'as8&6ahh$#oa(23)K8t$#',

};
