
export default async function sitemap () {
    return [
        {
            url: "https://rubixclass.com",
            lastModified: new Date(),
            changeFrequency: 'weekly',
        },
        {
            url: "http://rubixclass.com/about",
            lastModified: new Date(),
            changeFrequency: 'weekly',
        }
    ]
    
}