import { abpApplicationConfigurationGet } from '@/client';
import Login from '../components/Login';
export default async function Home() {
  const appConfig = await abpApplicationConfigurationGet();
  console.log(appConfig.currentUser);
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Welcome back
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sign in to your account to continue.
        </p>
        <Login />
        <div>
          <pre>{JSON.stringify(appConfig.currentUser, null, 2)}</pre>
        </div>
      </div>
    </main>
  );
}
