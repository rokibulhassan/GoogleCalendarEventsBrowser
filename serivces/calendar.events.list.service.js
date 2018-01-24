var calendarEventsListService = function () {
  const calendarEvents = {
    kind: "calendar#events",
    summary: "Meeting with CXO",
    description: "Meeting with CXO",
    items: [
      {
        kind: "calendar#event",
        id: '1',
        status: 'Active',
        summary: "Meeting with Tom",
        description: "Meeting with Tom",
        location: "Dhaka",
        creator: {
          id: "rokibul",
          email: "rokibul@cefalo.com",
          displayName: "rokibul hasan",
          self: true
        },
        organizer: {
          id: "cefalo",
          email: "cefalo@gmail.com",
          displayName: "cefalo ltd",
          self: true
        },
        start: {
          date: "10/01/2018",
          dateTime: "10/10/2018 10:20PM",
          timeZone: "Dhaka"
        },
        end: {
          date: "10/01/2018",
          dateTime: "10/10/2018 10:20PM",
          timeZone: "Dhaka"
        }

      },
      {
        kind: "calendar#event",
        id: '2',
        status: 'Active',
        summary: "Meeting with Per",
        description: "Meeting with Per",
        location: "Dhaka",
        creator: {
          id: "rokibul",
          email: "rokibul@cefalo.com",
          displayName: "rokibul hasan",
          self: true
        },
        organizer: {
          id: "cefalo",
          email: "cefalo@gmail.com",
          displayName: "cefalo ltd",
          self: true
        },
        start: {
          date: "10/01/2018",
          dateTime: "10/10/2018 10:20PM",
          timeZone: "Dhaka"
        },
        end: {
          date: "10/01/2018",
          dateTime: "10/10/2018 10:20PM",
          timeZone: "Dhaka"
        }

      },
      {
        kind: "calendar#event",
        id: '3',
        status: 'Active',
        summary: "Meeting with Jon",
        description: "Meeting with Jon",
        location: "Dhaka",
        creator: {
          id: "rokibul",
          email: "rokibul@cefalo.com",
          displayName: "rokibul hasan",
          self: true
        },
        organizer: {
          id: "cefalo",
          email: "cefalo@gmail.com",
          displayName: "cefalo ltd",
          self: true
        },
        start: {
          date: "10/01/2018",
          dateTime: "10/10/2018 10:20PM",
          timeZone: "Dhaka"
        },
        end: {
          date: "10/01/2018",
          dateTime: "10/10/2018 10:20PM",
          timeZone: "Dhaka"
        }

      }
    ]
  }
  return calendarEvents
}

export default calendarEventsListService

