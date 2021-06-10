import "antd/dist/antd.css"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div></div>
    </QueryClientProvider>
  )
}

export default App
