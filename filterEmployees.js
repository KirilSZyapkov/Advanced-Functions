function filterEmployees(input, arg) {
    let data = JSON.parse(input);
    let [key, value] = arg.split('-');
    let result = [];

    for (let element of data) {
        let data = element[key];
        if (data === value) {
            let token = [];
            let employeeName = `${element.first_name} ${element.last_name}`;
            let eMail = element.email;
            token.push(employeeName);
            token.push(eMail);
            result.push(token);
        } else if (key === 'all') {
            let employeeName = `${element.first_name} ${element.last_name}`;
            let eMail = element.email;
            token.push(employeeName);
            token.push(eMail);
            result.push(token);
        }
    }

    for (let a = 0; a < result.length; a++) {
        console.log(`${a}. ${result[a].join(' - ')}`);
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all');

//  filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`, 
// 'gender-Female')