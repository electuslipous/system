import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Hello World, index page</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'INTERNATIONAL STUDENT UNION - ISU',
  meta: [
    {
      name: 'description',
      content: 'ISU DEBRECEN',
    },
  ],
};
