'use client'
import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../../components'
import appwriteService from "../../../services/config";
import { useRouter } from 'next/navigation';

function EditPost({params}) {
    const [post, setPosts] = useState(null)
    const slug = params.slug
    const route = useRouter()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            route.push('/')
        }
    }, [slug, route])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost