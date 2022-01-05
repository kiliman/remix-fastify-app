import { json, LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = () => {
  return json({ title: 'Testing fastify integration' })
}

export default function Index() {
  const { title } = useLoaderData()
  return (
    <div>
      <h1>Remix Docs</h1>
      <p>{title}</p>
    </div>
  )
}
