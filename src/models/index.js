// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Capture, Coordinate } = initSchema(schema);

export {
  Capture,
  Coordinate
};