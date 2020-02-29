import React from 'react'

function ListItem(props) {
    const { person } = props
    return (
        <div className='list-item'>
            <header> <h1 className='name'>{person.name.first}</h1><p className='num'> <b>{person.id}/25</b></p></header>

            <section><p className='per-info'><b>From:</b> {person.city}, {person.country}</p>
                <p className='per-info'><b>Job Title:</b> {person.title}</p>
                <p className='per-info'><b>Employer:</b> {person.employer}</p></section>
                <ol className='footer'><b>favoriteMovies:</b>
               <div className='movie-list'> <li>{person.favoriteMovies[0]}</li>
                <li>{person.favoriteMovies[1]}</li>
                <li>{person.favoriteMovies[2]}</li></div>
                </ol>
            
        </div>




    )
}

export default ListItem






