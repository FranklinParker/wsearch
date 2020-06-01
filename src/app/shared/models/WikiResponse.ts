import {Search} from './search';

export interface WikiResponse {
  query: {
    search: Search[];
  }
}
