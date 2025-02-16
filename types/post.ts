export type Post = {
    id: string
    image: string
    title: string
    description: string
    content: string;
    createdAt: string
    updatedAt: string
    author: {
        name: string
        avatar: string
    };
};