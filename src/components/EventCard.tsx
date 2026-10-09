import { type Event } from '../api/events';

export function EventCard(event: Event) {
    return (
        <div className="eventCard">
            <div>Event: {event.title}</div>
            <div>Date: {event.date}</div>
            <div>Type: {event.type}</div>
        </div>
    );
}