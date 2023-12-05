'use client';

import { AppLink } from '@/app/shared/component/app-link';
import { useBook } from '../book.context';

export default function ChapterPage({}) {
  const bookRunner = useBook();

  return (
    <>
      <p>{bookRunner.sceneDescription}</p>
      <ul>
        {bookRunner.choices.map((c) => (
          <li key={c.id}>
            <AppLink href={c.nextSceneId} onClick={() => bookRunner.act(c.id)}>
              {c.description}
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
}
