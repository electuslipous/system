import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="flex-1 flex flex-col">
        <header class="bg-gray-100 border-b border-gray-200">
          <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <h2 class="text-xl font-semibold">Dashboard</h2>
            <div class="flex space-x-2">
              <button class="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md">
                Add
              </button>
              <button class="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md">
                Search
              </button>
            </div>
          </div>
        </header>
        <main class="container mx-auto px-4 py-4">
          <p>Content goes here</p>
        </main>
      </div>
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
