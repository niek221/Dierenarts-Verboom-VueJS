// module.exports = {
//     devServer: {
//       https: true
//     }
//   }

// module.exports = {
//     devServer: {
//       before: (app, server) => {
//         const axios = require('axios');
//         const jsonUrl = 'http://localhost:8080/medicijnen-kat.json';
//         app.get('/medicijnen-kat', (req, res) => {
//           axios.get(jsonUrl)
//             .then(response => {
//               console.log(response.data)
//               res.json(response.data['medicijnen-kat']);
//             })
//             .catch(error => {
//               console.log(error);
//               res.status(500).send('Error fetching data');
//             });
//         });
//       },
//       port: 8080, // or any other port you want to use
//       host: 'localhost',
//     }
// };

// When Building 

// module.exports = {
//     devServer: {
//       before: (app, server) => {
//         const axios = require('axios');
//         const jsonUrl = 'http://dierenartsverboom.nl/bijsluiters-kat.json';
//         app.get('/bijsluiters-kat', (req, res) => {
//           axios.get(jsonUrl)
//             .then(response => {
//               console.log(response.data)
//               res.json(response.data['bijsluiters-kat']);
//             })
//             .catch(error => {
//               console.log(error);
//               res.status(500).send('Error fetching data');
//             });
//         });
//       }
//     }
// };

// module.exports = {
//     devServer: {
//       before: (app, server) => {
//         const axios = require('axios');
//         const jsonUrl = 'http://dierenartsverboom.nl/bijsluiters-hond.json';
//         app.get('/bijsluiters-hond', (req, res) => {
//           axios.get(jsonUrl)
//             .then(response => {
//               console.log(response.data)
//               res.json(response.data['bijsluiters-hond']);
//             })
//             .catch(error => {
//               console.log(error);
//               res.status(500).send('Error fetching data');
//             });
//         });
//       }
//     }
// };