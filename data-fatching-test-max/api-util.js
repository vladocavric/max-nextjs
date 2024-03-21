export async function getAllEvents() {
    const response = await fetch('https://nextjs-a5656-default-rtdb.firebaseio.com/events.json')
    const data = await response.json()
    const events = []
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events
}

export async function getFeaturedEvents() {
    const events = await getAllEvents()
    return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const response = await fetch(`https://nextjs-a5656-default-rtdb.firebaseio.com/events/${id}.json`)
    const event = await response.json()

    return event
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const events = await getAllEvents()
    
    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }