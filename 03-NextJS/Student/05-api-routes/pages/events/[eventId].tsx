import { Fragment } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

import { getEventById } from '../../data/dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

const EventDetailPage: NextPage<EventPageProps> = ({ event }) => {


  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
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

interface EventPageProps {
  event: Event
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { eventId: "e1" } },
    { params: { eventId: "e2" } },
    { params: { eventId: "e3" } },
  ]
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = context?.params?.eventId;

  if (!eventId) {
    return { notFound: true }
  }

  const event = getEventById(eventId);

  return {
    props: { event },
    revalidate: 1000
  }
}


export default EventDetailPage;
