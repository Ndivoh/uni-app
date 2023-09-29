<template>
    <div id="SignUp"> 
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card class="mx-auto" width="500">

                        <v-toolbar color="#005AB2" theme="dark">
                            <v-toolbar-title class="text-h6">
                                User Registration
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                            <v-text-field v-model="first" color="#005AB2" label="First Name" variant="underlined"></v-text-field>

                            <v-text-field v-model="last" color="#005AB2" label="Last Name" variant="underlined"></v-text-field>

                            <v-text-field v-model="email" color="#005AB2" label="Email" variant="underlined"></v-text-field>

                            <v-text-field v-model="phoneNumber" color="#005AB2" label="Phone Number" variant="underlined" type="Phonenumber"></v-text-field>

                            <v-text-field v-model="password" color="#005AB2" label="Password" variant="underlined" type="password"></v-text-field>

                            <v-checkbox v-model="terms" color="secondary" label="I agree to the terms and conditions"></v-checkbox>
                        </v-container>

                        <v-divider></v-divider>

                        <v-card-action>
                            <v-spacer></v-spacer>

                            <v-btn to="/" color="success" dark>
                                SignUp
                                <v-icon icon="mdi-chevron-right" end></v-icon>
                            </v-btn>
                        </v-card-action>
                            
                    </v-card>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
    export default{
        data: () => ({
            first: null,
            last: null,
            email: null,
            passoword: null,
            phone: null,
            terms: false,
        })
    }
</script>