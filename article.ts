import Author from './author'

export default interface Article {
    type: 'clanok',
    title: string,
    slug: string,
    author: Author
    img: {
        src: string,
        credits: string
    },
    date: string,
    readLength: string,
    views: number,
    shares: number,
    summary: string,
    src: string,
    credits: string,
    rating: number,
    tags: Array<string>
}