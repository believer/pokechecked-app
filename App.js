import React from 'react'
import { AppNavigator } from './components/navigation.component'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default () => (
  <>
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  </>
)
