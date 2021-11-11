import { render, screen, fireEvent } from "@testing-library/react"
import { signIn, useSession } from 'next-auth/client';
import { mocked } from "ts-jest/utils";
import { useRouter } from 'next/router'

import SubscribeButton from '.'

jest.mock('next-auth/client')
jest.mock('next/router')

describe('SubscribeButton component', () => {
    it('renders correctly when user not authenticated', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValue([null, false])

        render(<SubscribeButton />)

        expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
    })

    it('redirects user to sign in when not authenticated', () => {
        const signInMocked = mocked(signIn)

        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValue([null, false])

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe Now')

        fireEvent.click(subscribeButton)

        expect(signInMocked).toHaveBeenCalled()
    })
    
    it('redirects to posts when user already has a subscription', () => {
        const pushMocked = jest.fn()
        const useRouterMocked = mocked(useRouter)
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValue([
            { user: {
                name: 'John Doe', email: 'johndoe@gmail.com'
            },
            activeSubscription: true, 
            expires: 'fake-expires' }, 
            false
        ])

        useRouterMocked.mockReturnValueOnce({
            push: pushMocked
        })

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe Now')

        fireEvent.click(subscribeButton)

        expect(pushMocked).toHaveBeenCalledWith('/posts')
    })
})