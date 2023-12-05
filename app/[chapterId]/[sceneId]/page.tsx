import { availableModules } from '@/app/book';
import { AppLink } from '@/app/shared/component/app-link';
import { H } from '@/app/shared/typography/h';
import { notFound } from 'next/navigation';

export default function ChapterPage({
  params,
}: {
  params: {
    chapterId: string;
    sceneId: string;
  };
}) {
  return <>{params.chapterId}: {params.sceneId}</>;
}
