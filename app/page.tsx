import { availableModules } from './book';
import { H } from './shared/typography/h';
import { AppLink } from './shared/component/app-link';

export default function Home() {
  return (
    <main>
      <H>Вітаю у Чарівній Казці </H>
      <ul>
        {availableModules.map((m) => (
          <li key={m.id}>
            <AppLink href={`/${m.id}`}>{m.name}</AppLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
