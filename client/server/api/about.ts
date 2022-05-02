import type { IncomingMessage, ServerResponse } from 'http'
import client from './client'
import { About } from './types'

export default async (req: IncomingMessage, res: ServerResponse) => {

    const data = client.getObject<About>({
        endpoint: 'about',
    })

    return data
}