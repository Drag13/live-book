import { availableModules } from '../book';

export function generateStaticParams() {
  return availableModules.map((m) => ({
    chapterId: m.id,
  }));
}

export default function ChapterLayout({ children }: WithChildren) {
  return <>{children}</>;
}
