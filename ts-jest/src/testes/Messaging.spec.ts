import { Messaging } from '../dip/service/Messaging';

it('Messaging service test', () => {
  const msgService = new Messaging();
  const msg = 'Messaging service test';
  const consoleSpy = jest.spyOn(console, 'log');
  msgService.sendMessage(msg);
  expect(consoleSpy).toHaveBeenCalledWith('Messaging service test');
});

it('Test non empty message', () => {
  const msgService = new Messaging();
  const msg = 'Messaging service test';
  const consoleSpy = jest.spyOn(console, 'log');
  msgService.sendMessage(msg);
  expect(consoleSpy).not.toHaveBeenCalledWith('');
});