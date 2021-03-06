// shared/models/User.js
const modeler = require('./modeler')


const User = modeler.model({
  user: { type: 'string', required: true },
  attributes: { type: 'object', keys: {
    isStudent: { type: 'string' },
    isFaculty: { type: 'string' },
    first_name: { type: 'string', required: true },
    bearpass_EmailID: { type: 'string', required: true },
    email: { type: 'email', required: true },
    name: { type: 'string', required: true },
    bearpass_Login: { type: 'string', required: true, equalTo: 'user' },
    last_name: { type: 'string', required: true },
    isStaff: { type: 'string' },
    primary_role: { type: 'string', allow: [ 'Student', 'Faculty', 'Staff', ] },
    campus: { type: 'string', required: true },
  }}
})

module.exports = User
