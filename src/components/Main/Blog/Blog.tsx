import React from 'react';

const Blog = () => {
    return (
        <section>

            <div aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Blog;