import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
        process.env.PRISMIC_ENTRY_POINT,
        {
            req,
            accessToken: process.env.PRISMIC_SECRET_TOKEN,
        }
    )

    return prismic;
}