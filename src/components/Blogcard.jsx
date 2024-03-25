import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholderimg from '../assets/404.jpg'

const Blogcard = ({blog}) => {
    console.log(blog)
    const {cover_image, title, published_timestamp, description, id} = blog
    return (
        
            <Link to = {`/blog/${id}`} className=" max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderimg} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{new Date(published_timestamp).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
        
    );
};

Blogcard.propTypes = {
    blog: PropTypes.object
}
export default Blogcard;