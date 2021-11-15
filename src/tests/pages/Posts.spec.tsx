import { render, screen } from "@testing-library/react"
import { mocked } from "ts-jest/utils"
import Post, { getStaticProps } from "../../pages/posts"
import { getPrismicClient } from "../../services/prismic"

const posts = [
    { slug: 'my-new-post', title: 'My New Post', excerpt: 'Post excerpt', updatedAt: '10 de Abril' }
]

jest.mock("../../services/prismic")

describe('Page Posts', () => {
    it('renders correctly', () => {
        render(<Post posts={posts}/>)

        expect(screen.getByText('My New Post')).toBeInTheDocument()
    })

    // it('load initials data', async () => {
    //     const getPrismicClientMocked = mocked(getPrismicClient)

    //     getPrismicClientMocked.mockReturnValueOnce({
    //         query: jest.fn().mockResolvedValueOnce({
    //             results: [{
    //                 uid: 'fake-slug-post',
    //                 data: {
    //                     title: [
    //                         { type: 'heading', text: 'fake-title-post'}
    //                     ],
    //                     content: [
    //                         {type: 'paragraph', text: 'fake-excerpt-post'}
    //                     ]
    //                 },
    //                 last_publication_date: '01-10-2021'
    //             }]
    //         })
    //     } as any)

    //     const response = await getStaticProps({})

    //     expect(response).toEqual(
    //         expect.objectContaining({
    //             props: {
    //                 posts: [{
    //                     slug: 'fake-slug-post',
    //                     title: 'fake-title-post',
    //                     excerpt: 'fake-excerpt-post',
    //                     updatedAt: '10 de Janeiro de 2021'
    //                 }]
    //             }
    //         })
    //     )
    // })
})