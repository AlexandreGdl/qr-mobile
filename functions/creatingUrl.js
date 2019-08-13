import API_KEY from '../API/API_KEY'

creatingUrl = (data) => {
    console.log(data)
    let time
    let genres 
    let type
    let people
    let keywords

    if ( !data.noTime ){
        if (hMin && minMin && hMin && minMin) {
            time = `&with_runtime.gte=${hMin}.${minMin}&with_runtime.lte=${hMax}.${minMax}`
        } else if (hMin && minMin) {
            time = `&with_runtime.gte=${hMin}.${minMin}`
        } else if ( hMax && minMax ){
            time = `&with_runtime.lte=${hMax}.${minMax}`
        } 
    } else {
        time = ''
    }

    if (data.genres.length > 0 ){
        genres = '&with_genres='
        for(let i = 0 ; i<data.genres.length ; i++){
            genres = genres + `${data.genres[i].id},`
        }
    } else {
        genres = ''
    }

    type = `${data.type}`

    if ( !data.noPeople ){
        people = `&with_people=${data.people[0].id}`
    } else {
        people = ''
    }

    if (data.keywords.length > 0 ){
        keywords = '&with_keywords='
        for(let i = 0 ; i<data.keywords.length ; i++){
            keywords = keywords  + `${data.keywords[i].id},`
        }
    } else {
        keywords = ''
    }


    let url = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&language=fr&sort_by=popularity.desc&include_adult=false${time}${genres}${people}${keywords}`
    if (url){
        fetch(url).then((response) => response.json()).then((responseJSON) => {
            if (responseJSON.total_results === 0) {
                url.replace(',','|')
                fetch(url).then((secondResponse) => secondResponse.json()).then((secondResponseJSON) => {
                    return secondResponseJSON
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                return responseJSON
            }
            
        })
    }
}

export default creatingUrl