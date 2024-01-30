import { Link } from './link';

export interface Collection {
  currentPage: number;
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: Link[];
  nextPageUrl: null;
  path: string;
  perPage: number;
  prevPageUrl: null;
  to: number;
  total: number;
}
