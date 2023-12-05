import { availableModules } from '@/app/book';

export function generateStaticParams({
  params,
}: {
  params: { chapterId: string };
}) {
  const gameModule = availableModules.find((x) => x.id === params.chapterId);
  const allScenes = Object.keys(gameModule?.scenes ?? {});
  const startScenes = gameModule?.startScene.id ?? '';
  const defaultScenes = gameModule?.defaultScenes.map((x) => x.scene.id) ?? [];

  const avaialableScenes = [...allScenes, startScenes, ...defaultScenes].map(
    (sceneId) => ({
      moduleName: params.chapterId,
      sceneId,
    })
  );

  return avaialableScenes;
}

export default function SceneLayout({ children }: WithChildren) {
  return <>{children}</>;
}
