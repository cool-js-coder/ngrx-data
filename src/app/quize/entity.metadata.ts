import { EntityMetadataMap } from "@ngrx/data";

const entityMetadata: EntityMetadataMap = {
    Quize: {},    
};
   
  // because the plural of "hero" is not "heros"
const pluralNames = { Quize: 'Quizes' };
   
export const entityConfig = {
entityMetadata,
pluralNames
};