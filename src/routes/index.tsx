import { component$, useStore } from '@builder.io/qwik';
import { DocumentHead, Form, routeAction$, server$ } from '@builder.io/qwik-city';
import { db } from './db';


// interface User {
//   id: number,
//   username: string,
//   email: string,
// }

const doLogin = server$(async (data) => {
  const user = await db.user.findMany(data.us);

});

export const useLoginAction = routeAction$((data) => {
  if (data.username, data.password) {
    doLogin(data)
  }
});


export default component$(() => {
  const login = useLoginAction();
  const errors = useStore({
    errors: []
  })
  return (
    <>
      <div class="flex-1 flex flex-col min-h-screen">
        <div class="min-h-screen flex items-center justify-center">
          <div class="bg-white p-10 rounded-lg shadow-lg shadow-black">
            <h1 class="text-3xl font-semibold mb-5">Sign In</h1>
            <Form action={login}>
              <div class="mb-6">
                <label class="block text-gray-700 font-bold text-lg mb-2" for="username">
                  Username
                </label>
                <input class="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg" id="username" type="text" name="username" placeholder="Enter your username" />
              </div>
              <div class="mb-8">
                <label class="block text-gray-700 font-bold text-lg mb-2" for="password">
                  Password
                </label>
                <input class="appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-lg" id="password" type="password" name="password" placeholder="Enter your password" />
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-lg" type="submit">
                  Sign In
                </button>
                <a class="ms-10 inline-block align-baseline font-bold text-lg text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div >
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
