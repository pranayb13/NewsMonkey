import React from 'react'

const NewsItem=(props)=> {
        let {title,description,imageUrl,newsUrl,author,date,source}=props;
        return (
            <div className='my-5 mx-5'>
                <div className="card">
                    <img src={!imageUrl?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-success " style={{left:'90%'}}>{source}</span></h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?'unknown':author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='blank' className="btn btn-sm btn-dark ">Read More</a>
                        </div>
                </div>
            </div>
        )
}
export default NewsItem
