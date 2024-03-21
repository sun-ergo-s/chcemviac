import Author from './author'

export default interface Audio {
    type: 'audio',
    title: string,
    slug: string,
    author: Author,
    img: {
        src: string,
        credits: string
    },
    date: string,
    readLength: string,
    views: number,
    downloads: number,
    shares: number,
    summary: string,
    body: string,
    credits: string,
    rating: number,
    tags: Array<string>
}