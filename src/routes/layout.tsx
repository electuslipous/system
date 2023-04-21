import { component$, Slot } from '@builder.io/qwik';
import { Navbar } from '~/components/navbar';
import { PageHeader } from '~/components/pageHeader';




export default component$(() => {
  return (
    <>
      <Navbar />
      <PageHeader title="Dashboard" />
      <Slot />
    </>
  );
});
