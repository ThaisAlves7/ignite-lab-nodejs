export type Replace<T, R> = Omit<T, keyof R> & R;

// Essa classe ela realiza a reescrita de informações passadas a ela
/* Ex:
  export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date; *** => Obrigatório ***
}

export class Notification {
  private props: NotificationProps;

  *** Aqui passa a ser opcional ***
  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
*/
