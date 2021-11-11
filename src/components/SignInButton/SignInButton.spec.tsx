import { render, screen } from "@testing-library/react"
import { useSession } from "next-auth/client"
import { mocked } from 'ts-jest/utils'

import SignInButton from "."

jest.mock('next-auth/client')

describe('SignInButton component', () => {
    it('renders correctly when user not authenticated', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValue([null, false])

        render(<SignInButton/>)

        expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument()
    })

    it('renders correctly when user authenticated', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValue([
            { user: {name: 'John Doe', email: 'johndoe@gmail.com'}, expires: 'fake-expires' }, 
            false
        ])

        render(<SignInButton/>)

        expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
})