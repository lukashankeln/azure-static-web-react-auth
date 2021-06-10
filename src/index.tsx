import { useContext, useEffect, useState } from "react";
import { UserInfo } from './index.d'
import * as React from "react";
import './styles.scss'




const defaultUserInfo = {
    identityProvider: undefined,
    userId: undefined,
    userDetails: undefined,
    userRoles: [],
};

const UserInfo = React.createContext<UserInfo>(defaultUserInfo);

const UserInfoProvider = ({ children }: { children: JSX.Element[] }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);

    useEffect(() => {
        const run = async () => {
            const res = await fetch("/.auth/me");
            const json: { clientPrincipal: UserInfo | null } = await res.json();
            if (json.clientPrincipal) {
                setUserInfo(json.clientPrincipal);
            }
        };

        run();
    }, []);

    return (
        <UserInfo.Provider value={userInfo}>
            {children}
        </UserInfo.Provider>
    );
};

const useUserInfo = () => useContext(UserInfo);

export { UserInfoProvider, useUserInfo };