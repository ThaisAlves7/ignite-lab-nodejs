import { Content } from './contents';
import { Notification } from './notification';

describe('Notification', () => {
  // Espera que uma notificação seja criada com sucesso.
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
