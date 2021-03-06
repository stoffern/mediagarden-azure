// shared/models/Fine.js
const modeler = require('./modeler')

const Fine = modeler.model({
  id: { type: 'uuid', creator: 'uuid', required: true },
  partition_key: { type: 'string', modifier: 'sanitizeLiberally', required: true },
  amount: { type: 'number', required: true },
  due: { type: 'number', required: true },
  description: { type: 'string', modifier: 'sanitize', required: true },
  semester: { type: 'string', modifier: 'sanitizeLiberally', required: true },
  uploaded: { type: 'number', creator: 'timestamp' },
  uploaded_by: { type: 'string', required: true },
  last_updated: { type: 'number', modifier: 'timestamp' },
  last_updated_by: { type: 'string', required: true },
})

module.exports = Fine
