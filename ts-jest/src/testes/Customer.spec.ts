import { 
  IndividualCustomer, 
  EnterpriseCustomer 
} from '../dip/model/IndividualCustomer';

const individualCustomer = (
  firstName: string, 
  lastName: string, 
  document: string
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, document);
};

const enterpriseCustomer = (
  name: string, 
  document: string
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, document);
};

afterEach(() => jest.clearAllMocks());

it('IndividualCustomer Test: if has firstName', () => {
  const customer = individualCustomer('Eduardo', 'Murakoshi', '000.000.000-00');
  expect(customer).toHaveProperty('firstName');
});

it('IndividualCustomer Test: if has lastName', () => {
  const customer = individualCustomer('Eduardo', 'Murakoshi', '000.000.000-00');
  expect(customer).toHaveProperty('lastName');
});

it('IndividualCustomer Test: if has document', () => {
  const customer = individualCustomer('Eduardo', 'Murakoshi', '000.000.000-00');
  expect(customer).toHaveProperty('document');
});

it('IndividualCustomer Test: if has right complete name', () => {
  const customer = individualCustomer('Eduardo', 'Murakoshi', '000.000.000-00');
  expect(customer.getName()).toEqual('Eduardo Murakoshi');
});

it('EnterpriseCustomer Test: if has name', () => {
  const customer = enterpriseCustomer('EM Ltda', '0000.0000.0000/00');
  expect(customer).toHaveProperty('name');
});

it('EnterpriseCustomer Test: if has name', () => {
  const customer = enterpriseCustomer('EM Ltda', '0000.0000.0000/00');
  expect(customer).toHaveProperty('document');
});

it('EnterpriseCustomer Test: if has right document', () => {
  const customer = enterpriseCustomer('EM Ltda', '0000.0000.0000/00');
  expect(customer.getIDN()).toEqual('0000.0000.0000/00');
});