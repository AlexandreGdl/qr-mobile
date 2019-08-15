import API_KEY from '../API/API_KEY'

creatingUrl = (data) => {
    let time
    let genres 
    let type
    let people

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



    let url = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&language=fr&sort_by=popularity.desc&include_adult=false${time}${genres}${people}`
    return url

}



export default creatingUrl