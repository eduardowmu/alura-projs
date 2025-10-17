//import { last } from 'lodash';
import { 
  CustomerOrder, 
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol
} from '../interface/CustomerProtocol'

export class IndividualCustomer 
    implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  document: string;

  constructor(firstName: string, lastName: string, document: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.document = document;
  }

  getName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
  
  getIDN(): string {
    return this.document;
  }
}

export class EnterpriseCustomer 
    implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  document: string;

  constructor(name: string, document: string) {
    this.name = name;
    this.document = document;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.document;
  }
}