import EventHandlerInterface from "../../@shared/event-handler.interface";
import EventInterface from "../../@shared/event.interface";
import ProductCreatedEvent from "../product-created.event";

export default class SendEmailWhenProductIsCreateHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: EventInterface): void {
    console.log(`Sending email to .....${JSON.stringify(event)}`)
  }
}