import React from 'react'
import { AppNavigator } from './components/navigation.component'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StatusBar } from 'react-native'
StatusBar.setBarStyle('light-content', true)

const queryClient = new QueryClient()

export default () => (
  <>
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  </>
)
