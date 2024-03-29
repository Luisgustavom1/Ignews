import { render, screen } from "@testing-library/react"
import { stripe } from "../../services/stripe"
import Home, { getStaticProps } from "../../pages"
import { mocked } from "ts-jest/utils"

jest.mock('next/router')
jest.mock('next-auth/client', () => {
    return {
        useSession() {
            return [null, false]
        }
    }
})

jest.mock('../../services/stripe')

describe('Home page', () => {
    it('renders correctly', () => {
        render(<Home product={{priceId: 'fake-price-id', amount: '10,00'}}/>)
    
        expect(screen.getByText('for 10,00 month')).toBeInTheDocument()
    })

    it('load initials data', async () => {
        const retrieveStripeMocked = mocked(stripe.prices.retrieve)

        retrieveStripeMocked.mockReturnValueOnce({
            id: 'fake-price-id',
            unit_amount: 1000
        } as any)

        const response = await getStaticProps({})

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    product: {
                        priceId: 'fake-price-id', 
                        amount: '$10.00'
                    }
                }
            })
        )
    })
})