import { notFound } from 'next/navigation';
import { availableModules } from '../book';
import { H } from '../shared/typography/h';
import { AppLink } from '../shared/component/app-link';
import { AppText } from '../shared/typography/app-text';

export default function ChapterPage({
  params,
}: {
  params: { chapterId: string };
}) {
  const { chapterId } = params;
  const selectedModule = availableModules.find((m) => m.id === chapterId);

  if (!selectedModule) {
    notFound();
  }

  return (
    <>
      <H>
        <AppText>{selectedModule.name}</AppText>
      </H>
      <AppLink href={`/${chapterId}/${selectedModule.startScene.id}`}>
        <AppText>Почати казку</AppText>
      </AppLink>
    </>
  );
}
