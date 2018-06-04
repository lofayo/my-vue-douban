const domain = 'https://douban.uieee.com/'
// const domain = 'https://api.douban.com/'

let in_theaters = domain + 'v2/movie/in_theaters'
let coming_soon = domain + 'v2/movie/coming_soon'
let top250 = domain + 'v2/movie/top250'
let weekly = domain + 'v2/movie/weekly'
let us_box = domain + 'v2/movie/us_box'
let new_movies = domain + 'v2/movie/new_movies'

let movie_subject_api = domain + 'v2/movie/subject/'
//eg: movie_subject_api = domain + 'v2/movie/subject/:id'
//eg movie_subject_api = 'https://douban.uieee.com/v2/movie/subject/27133303'

let movie_search_api = domain + 'v2/movie/search'

let movie_celebrity_api = domain + 'v2/movie/celebrity/'
//eg: movie_celebrity_api = domain + 'v2/movie/celebrity/:id'
//eg: movie_celebrity_api = 'https://douban.uieee.com/v2/movie/celebrity/1275756/photos'

const api = [{
  category_en: 'in_theaters',
  category: '正在热映',
  url: in_theaters
}, {
  category_en: 'coming_soon',
  category: '即将上映',
  url: coming_soon
}, {
  category_en: 'top250',
  category: 'top250',
  url: top250
}, {
  category_en: 'weekly',
  category: '口碑榜',
  url: weekly
}, {
  category_en: 'us_box',
  category: '北美票房榜',
  url: us_box
}, {
  category_en: 'new_movies',
  category: '新片榜',
  url: new_movies
}]


const bookApi = [{
  category: '文学',
  url: 'https://douban.uieee.com/v2/book/search?tag=历史'
}, {
  category: '爱情',
  url: 'https://douban.uieee.com/v2/book/search?tag=爱情'
}, {
  category: '计算机',
  url: 'https://douban.uieee.com/v2/book/search?tag=计算机'
}]

export default {
  api,
  movie_subject_api,
  movie_search_api,
  movie_celebrity_api,
  bookApi
}
