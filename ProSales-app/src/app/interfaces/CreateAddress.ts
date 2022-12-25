import { ClientExternal } from "./external/ClientExternal";

export interface CreateAddress {

  City: string;
  State: string;
  Street: string;
  ReferencePoint: string;
  Country: string;
  ZipCode: string;
  Number: string;

  client: ClientExternal;
}
