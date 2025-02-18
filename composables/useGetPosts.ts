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
            createdAt: new Date().toLocaleString(), // mock date or add another date field
            updatedAt: new Date().toLocaleString(), // mock date or add another date field
        }))

        return posts.value
    } catch (err) {
        console.error(err)
        return []
    }
}
