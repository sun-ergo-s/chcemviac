import Author from './author'

export default interface Video {
    type: 'video',
    title: string,
    slug: string,
    author: Author,
    img: {
        src: string,
        credits: string
    },
    date: string,
    views: number,
    summary: string,
    src: string,
    credits: string,
    rating: number,
    tags: Array<string>
}