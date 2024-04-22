import { AuthProvider } from './auth/context'
import { AppRouter } from './router/AppRouter'

export const Herores = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
