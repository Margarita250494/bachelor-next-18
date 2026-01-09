'use client'

import dynamic from 'next/dynamic';

const AppointmentForm = dynamic(
  () => import('@/components/AppointmentForm'),
  {
    loading: () => <p>Loading form...</p>,
    ssr: false,
  }
);

export default function Appointment() {
  return <AppointmentForm />;
}