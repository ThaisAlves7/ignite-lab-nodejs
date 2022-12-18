import { Content } from './contents';

describe('Notification content', () => {
  // Espera que o teste de passe ao receber uma mensagem válida
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  // Espera que o teste de erro ao passar ao ser menor que 5 caracteres
  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaaa')).toThrow();
  });

  // Espera que o teste de erro ao passar de 240 caracteres
  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
