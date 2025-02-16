import type { Post } from "~/types/post";

type PostDTO = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const useGetPost = async (postId: string): Promise<Post | null> => {
    const post = ref<Post | null>(null);

    try {
        const { data, error } = await useFetch<PostDTO>(`https://jsonplaceholder.typicode.com/posts/${postId}`);

        if (error.value || !data.value) {
            return null;
        }

        // Map the fetched data to your custom structure
        post.value = {
            image: `https://picsum.photos/seed/${data.value.id}/200/300`,
            title: data.value.title,
            description: data.value.body,
            content: data.value.body,
            author: {
                name: 'John Doe',
                avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
            },
            id: data.value.id.toString(),
            createdAt: new Date().toLocaleString(), // mock date or add another date field
            updatedAt: new Date().toLocaleString(), // mock date or add another date field
        };

        return post.value;
    } catch (err) {
        console.error(err);
        return null;
    }
};