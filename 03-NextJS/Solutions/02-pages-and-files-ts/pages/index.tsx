import type { NextPage } from 'next'
import { getFeaturedEvents } from "../data/dummy-data"
import EventList from "../components/events/event-list"

const Home: NextPage = () => {
  const events = getFeaturedEvents()

  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export default Home
