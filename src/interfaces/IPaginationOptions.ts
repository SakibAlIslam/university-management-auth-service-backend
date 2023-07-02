import { ParsedQs } from 'qs';

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string | ParsedQs | string[] | ParsedQs[] | undefined;
  sortOrder?: 'asc' | 'desc' | '1' | '-1';
};
