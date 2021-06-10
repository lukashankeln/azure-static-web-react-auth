# azure-static-web-react-auth

## Usage

```
<UserInfoProvider> 
    <Authenticated>
        // Everything in here is displayed if the User is Logged in
    </Authenticated>
    <NotAuthenticated>
        // Everything in here is displayed if the User is not Logged in
    </NotAuthenticated>
    <Authenticated isRole="admin">
        // Everything in here is displayed if the User is Logged in
        // And User has Role Admin
    </Authenticated>
</UserInfoProvider> 
```
