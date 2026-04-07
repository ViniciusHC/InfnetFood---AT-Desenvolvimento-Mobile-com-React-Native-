import * as Notifications from 'expo-notifications';

export async function notificacaoSimulada() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Pedido Confirmado!',
      body: 'O restaurante já recebeu seu pedido.',
    },
    trigger: null,
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Preparando seu pedido... ',
      body: 'O chef já está preparando!',
    },
    trigger: {
      type: 'timeInterval',
      seconds: 10,
      repeats: false,
    },
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Saiu para entrega!',
      body: 'O entregador está a caminho.',
    },
    trigger: {
      type: 'timeInterval',
      seconds: 20,
      repeats: false,
    },
  });
}
