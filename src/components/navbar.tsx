import { component$ } from '@builder.io/qwik';

export const Navbar = component$(() => {
    return (
        <>
            <nav>
                <div class="bg-gray-900 h-16 flex flex-row items-center">
                    <div class="container mx-auto p-4 flex flex-row justify-between items-center">
                        <div class="text-white text-2xl font-bold">
                            ISU - Intranet
                        </div>
                        <div>
                            <ul class="cursor-pointer text-xl text-white flex flex-row items-center gap-4">
                                <li>Home</li>
                                <li>Downloads</li>
                                <li class="font-semibold border rounded-lg p-2 hover:border-yellow-300 hover:bg-yellow-300 hover:text-gray-900">Sign in</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
});