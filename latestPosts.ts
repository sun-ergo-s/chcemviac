import Article from './article'
import Audio from './audio'
import Video from './video'

export interface latestPosts extends Array<Article|Audio|Video>{}

const posts: latestPosts = [
    {
        type: 'clanok',
        title: '',
        slug: '',
        author: {
            name: '',
            slug: '',
        },
        img: {
            src: '',
            credits: ''
        },
        date: '',
        readLength: '',
        views: 10,
        shares: 5,
        summary: '',
        src: '',
        credits: '',
        rating: 5,
        tags: ['test']
    }
]