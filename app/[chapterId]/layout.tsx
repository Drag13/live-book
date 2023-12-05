import { notFound } from 'next/navigation';
import { availableModules } from '../book';
import { ClientLayout } from './client.layout';

export function generateStaticParams() {
  return availableModules.map((m) => ({
    chapterId: m.id,
  }));
}

export default function ChapterLayout({
  children,
  params,
}: WithChildren<{ params: { chapterId: string } }>) {
  const selectedModule = availableModules.find(
    (m) => m.id === params.chapterId
  );

  if (!selectedModule) {
    notFound();
  }

  return <ClientLayout module={selectedModule}>{children}</ClientLayout>;
}
