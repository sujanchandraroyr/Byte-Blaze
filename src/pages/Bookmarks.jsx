import { useEffect, useState } from "react";
import Blogcard from "../components/Blogcard";
// import Blogs from "./Blogs";
import { getBlogs } from "../utilis";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }, []);
    return (
        <div className="grid justify-center py-2 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.slice(1, 19).map(blog => <Blogcard key={blog.id} blog={blog}></Blogcard>)
            }
		</div>
    );
};

export default Bookmarks;