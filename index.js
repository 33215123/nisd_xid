const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('F6utaPks9m', uuidlib.v4());
	}

module.exports = generateId
