'use strict';

angular.module('todoApp.services', [])
  .factory('ToDoService', ToDoService);

ToDoService.$inject = ['$http'];

function ToDoService($http) {

  var PARSE_CREDENTIALS = {
    APP_ID: 'xhTpJiNedJ7mmDj3LTTBUePqSVegcJHzEbh70Y0Q',
    REST_API_KEY: 'XCfQDPODgNB1HqmaCQgKLPWGxQ0lCUxqffzzURJY'
  };

  return {
    getAll: getAll,
    get: get,
    create: create,
    edit: edit,
    delete: del
  };

  function getAll() {
    return $http.get('https://api.parse.com/1/classes/Todo', {
      headers: {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY
      }
    });
  }

  function get(id) {
    return $http.get('https://api.parse.com/1/classes/Todo/' + id, {
      headers: {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY
      }
    });
  }

  function create(data) {
    return $http.post('https://api.parse.com/1/classes/Todo', data, {
      headers: {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

  function edit(id, data) {
    return $http.put('https://api.parse.com/1/classes/Todo/' + id, data, {
      headers: {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

  function del(id) {
    return $http.delete('https://api.parse.com/1/classes/Todo/' + id, {
      headers: {
        'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
        'X-Parse-REST-API-Key': PARSE_CREDENTIALS.REST_API_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

}
