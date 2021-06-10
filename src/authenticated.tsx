import { useUserInfo } from "./index";

const Authenticated = ({ children, isRole = undefined }: { children: JSX.Element, isRole?: string }) => {

    const userInfo = useUserInfo();
    if (userInfo.identityProvider) {
        if (isRole && userInfo.userRoles.indexOf(isRole) === -1){
            return null
        }
        return (children)
    } else {
        return null
    }
}


const NotAuthenticated = ({ children }: { children: JSX.Element }) => {

    const userInfo = useUserInfo();
    if (userInfo.identityProvider) {
        return null
    } else {
        return (children)
    }
}
export { NotAuthenticated, Authenticated }