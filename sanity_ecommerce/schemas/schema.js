import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import porduct from './porduct'
import banner from './banner'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    porduct, banner
  ]),
})
