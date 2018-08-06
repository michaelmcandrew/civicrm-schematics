import { getSchema } from './schema'
import { Field } from './field'

export class Entity{
  name: string
  fields: Field[]
  titleField?: string
}

export function getEntity(name: string): any{
  const schema = getSchema();
  const entity = schema.entities.find(e => e.name == name)
  if(entity){
    return entity;
  }else{
    throw Error(`Could not find entity '${name}' in CiviCRM schema`)
  }
}
