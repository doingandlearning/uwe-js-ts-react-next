import type { NextPage, GetStaticProps } from 'next'
import { getFeaturedEvents } from "../data/dummy-data"
import EventList from "../components/events/event-list"

const Home: NextPage<EventProps> = ({ events }) => {

  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

interface Event {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string,
  image: string,
  isFeatured: boolean,
}

interface EventProps {
  events: Event[]
}

export const getStaticProps: GetStaticProps = async () => {
  const events = getFeaturedEvents()

  return {
    props: {
      events
    }
  }
}


export default Home
