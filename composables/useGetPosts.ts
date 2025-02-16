import type {Post} from "~/types/post";

type PostDTO = {
    userId: number
    id: number
    title: string
    body: string
}

import {ref} from 'vue'

export const useGetPosts = async (): Promise<Post[]> => {
    const posts = ref<Post[]>([])

    try {
        const {data, error} = await useFetch<PostDTO[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')

        if (error.value || !data.value) {
            return []
        }

        // Map the fetched data to your custom structure
        posts.value = data.value.map((post: PostDTO): Post => ({
            image: `https://picsum.photos/seed/${post.id}/200/300`,
            title: post.title,
            description: post.body,
            content: post.body,
            author: {
                name: 'John Doe',
                avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
            },
            id: post.id.toString(),
            // Since jsonplaceholder doesn't have createdAt/updatedAt, use mock dates or remove
            createdAt: new Date().toLocaleString(), // mock date or add another date field
            updatedAt: new Date().toLocaleString(), // mock date or add another date field
        }))

        return posts
    } catch (err) {
        console.error(err)
        return {posts: []}
    }
}
