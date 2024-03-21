import Article from './article'
import Audio from './audio'
import Video from './video'

export interface latestPosts extends Array<Article|Audio|Video>{}