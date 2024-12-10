export interface Company {
  id: number;
  groupId: number;
  groupName: string;
  name: string;
  address: string;
  factoryAddress: string;
  remarks: string;
  contactNo: string;
  email: string;
  logoId: string | null;
  webURL: string;
  prefix: string;
  vatNumber: string;
  active: boolean;
  numberOfBrands: number;
  logoThumbnailUrl: string;
  locales: any[];
  availableGroups: any[];
}

export interface Group {
  disabled: boolean;
  group: null;
  selected: boolean;
  text: string;
  value: string;
}

export interface ActiveOption {
  disabled: boolean;
  group: null;
  selected: boolean;
  text: string;
  value: string;
}

export interface SearchParams {
  searchGroupId: number;
  searchCompanyName: string | null;
  searchVatNumber: string | null;
  searchActiveId: number;
  page: number;
  pageSize: number;
}