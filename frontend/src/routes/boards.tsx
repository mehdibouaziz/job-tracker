import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/boards')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Boards</div>
}
