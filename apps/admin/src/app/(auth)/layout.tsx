import React from 'react'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <div>{children}</div>
    )
}

export default AuthLayout;