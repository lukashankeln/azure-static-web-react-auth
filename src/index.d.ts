export type AuthProviders =
    | "aad"
    | "facebook"
    | "github"
    | "google"
    | "twitter"
    | "apple"
    | string

export type UserInfo = {
    identityProvider: undefined | AuthProviders;
    userId: string | undefined;
    userDetails: string | undefined;
    userRoles: string[];
}