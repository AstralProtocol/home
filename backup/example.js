import React, { useState } from 'react'
import ExamplePage from 'components/ExamplePage/ExamplePage'
import Layout from 'components/Layout/Layout'
import SEO from 'components/SEO/SEO'

const Bachelor2020 = () => {

    return (
        <>
            <Layout
                className="Bachelor__layout"
                showSocialCol={false}
                showNavigation={false}
                showFooter={false}>
                <SEO
                    title="Example"
                    description="Example"
                    image="https://marguerite.io/og-image-bachelor2020.png"
                    twitterImage="https://marguerite.io/twitter-image-bachelor2020.png"
                />

                <ExamplePage />
            </Layout>
        </>
    )
}

export default Bachelor2020;

