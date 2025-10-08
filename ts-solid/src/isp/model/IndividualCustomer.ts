import { last } from 'lodash';
import { IndividualCustomerProtocol, EnterpriseCustomerProtocol } from '../interface/CustomerProtocol'

export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  document: string;

  constructor(firstName: string, lastName: string, document: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.document = document;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  document: string;

  constructor(name: string, document: string) {
    this.name = name;
    this.document = document;
  }
}