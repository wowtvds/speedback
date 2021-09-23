import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import type { NextPage } from "next";

import { LoginForm, Logo } from '../components';
import { AuthContext } from '../context';

const AppLogin: NextPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Head>
        <title>Login - speedback</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center justify-center container-spacing section-spacing">
          <div className="max-w-md w-full space-y-6 flex flex-col">
            <Logo className="self-center" size={32} />

            <div>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign in with your email.
				</h2>

				<p className="mt-2 text-center text-sm text-gray-600">
					We&apos;re using passwordless login for your convenience.
				</p>
            </div>

            <LoginForm />
          </div>
      </main>
    </>
  )
}

export default AppLogin;