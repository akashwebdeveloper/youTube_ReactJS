const GOOGLE_API_KEY="AIzaSyApF5SE4uw_NJIGWlk6cZspQAPn0ykBvBo" 

export const YOU_TUBE_POPULAR_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + GOOGLE_API_KEY
export const YOU_TUBE_SEARCH_SUGGESTION = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="