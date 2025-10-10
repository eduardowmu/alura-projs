export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  document: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  document: string;
}