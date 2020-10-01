import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@brightwaretickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
