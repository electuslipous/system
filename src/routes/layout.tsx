import { component$, Slot } from '@builder.io/qwik';
import { Navbar } from '~/components/navbar';




export default component$(() => {
  return (
    <>
      <Navbar />
      <Slot />
    </>
  );
});
