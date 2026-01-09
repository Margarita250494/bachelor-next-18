'use client'

import dynamic from 'next/dynamic';

const LegalDocs = dynamic(
  () => import('@/components/LegalDocs'),
  {
    loading: () => <p>Loading legal documents...</p>,
    ssr: false, // optional (use if it accesses window/document)
  }
);

export default function Legal() {
  return <LegalDocs />;
}