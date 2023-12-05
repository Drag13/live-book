'use client';

import { AppLink } from '@/app/shared/component/app-link';
import { useBook } from '../book.context';
import { P } from '@/app/shared/typography/p';
import { Li, Ul } from '@/app/shared/component/app-list';
import { AppText } from '@/app/shared/typography/app-text';

export default function ChapterPage({}) {
  const bookRunner = useBook();

  return (
    <>
      <P>
        <AppText>{bookRunner.sceneDescription}</AppText>
      </P>
      <Ul>
        {bookRunner.choices.map((c) => (
          <Li key={c.id}>
            <AppLink
              href={`/${bookRunner.moduleId}/${c.nextSceneId}`}
              onClick={() => bookRunner.act(c.id)}
            >
              <AppText>{c.description}</AppText>
            </AppLink>
          </Li>
        ))}
      </Ul>
    </>
  );
}
