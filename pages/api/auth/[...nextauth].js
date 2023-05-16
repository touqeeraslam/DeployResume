import NextAuth from "next-auth/next";
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import LinkedinProvider from 'next-auth/providers/linkedin'

export const authOptions={
         providers:[
            FacebookProvider({
                clientId:'',
                clientSecret:''
            }),
            GoogleProvider({
                clientId:'',
                clientSecret:''
            }),
            LinkedinProvider({
                clientId:'',
                clientSecret:''
            })
         ]

}
export default NextAuth(authOptions)