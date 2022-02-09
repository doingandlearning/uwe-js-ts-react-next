# Routing Project

Open up the starter project and run npm install.

## Exercise 1: Getting Up Routing
Setup placeholder pages for the following routes:
	- / -> Starting page (show featured events)
	- /events -> Events Page (show all Events)
	- /events/<some-id> -> Event detail page (show selected event)
	- /events/...slug -> Filtered events page (show filtered events)

## Exercise 2: Home Page
Import the getFeaturedEvents function and use it to get data. Pass this data through to an EventList component.

Your EventList component should show details for the events passed into it.

## Exercise 3: Events Page (/events)
Import the getAllEvents function and use this to get data. Pass this data through to your EventList component.

## Exercise 4: Individual Event Page (/events/:id)
Import and use the getEventById function. Display this event using an Event component.

## Exercise 5: Filtered Event page (/events/[...slug])
Import and use the getByFilteredEvent. You'll need to get the year and month from the route and pass these through.

# Exercise 6: Adding links
Update all of your event cards to make sure you can click on them and go to the correct event.


