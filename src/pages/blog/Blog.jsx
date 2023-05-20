import React from 'react'
import BaseLayout from '../../components/layouts/base'
import BlogArchive from  '../../components/blogarchive'
import './Blog.scss'

const Blog = () => {
  return (
    <BaseLayout>
        <BlogArchive />
        <div className="blog">Blog</div>
    </BaseLayout>
  )
}

export default Blog