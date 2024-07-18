import EventInterface from "../@shared/event.interface";

export default class ProductCreatedEvent implements EventInterface {
  dataTimeOcurrent: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dataTimeOcurrent = new Date();
    this.eventData = eventData;
  }
}