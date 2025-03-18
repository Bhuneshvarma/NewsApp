import PropTypes from 'prop-types';

const NewsItem = (props) => {
    let { title, description, imageUrl, NewsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/paytm_1706775005328_1706775005502.jpg" : imageUrl} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title} ...</h5>
                    <p className="card-text">{!description ? "If you can't get intersting news come to our NewsMonkey" : description}...</p>
                    <span className='badge rounded-pill bg-success'>{source}</span>
                    <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={NewsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}
NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    NewsUrl: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string

};

export default NewsItem;