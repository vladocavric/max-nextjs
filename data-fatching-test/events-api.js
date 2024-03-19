export async function getAllEvents() {
    const response = await fetch(
		'https://nextjs-a5656-default-rtdb.firebaseio.com/events.json'
	);
	const data = await response.json();
	const transomedData = [];
	for (const key in data) {
		transomedData.push({
			id: key,
			...data[key],
		});
	}

    return transomedData
}

export async function  getEvent(id) {
	const response = await fetch(
		`https://nextjs-a5656-default-rtdb.firebaseio.com/events/${id}.json`
	);
	const event = await response.json();
	event.id = id

	return event
}

export function getFilteredEvents(dateFilter, events) {
    const { year, month } = dateFilter;
  
    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }