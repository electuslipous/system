import { component$ } from '@builder.io/qwik';

interface PageProps {
    title?: string;
}

export const PageHeader = component$<PageProps>((props) => {

    return (
        <>
            <div class="mx-auto p-3 bg-gray-200">
                <div class="font-semibold text-xl">{props.title}</div>
            </div>
        </>
    )
});