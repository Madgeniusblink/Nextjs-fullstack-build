import React from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'

const Slug = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <Layout>
            {slug}
        </Layout>
    )
}

export default Slug
