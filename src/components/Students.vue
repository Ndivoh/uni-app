<template>
    <div id="students"> 
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card class="mx-auto">

                        <v-toolbar color="#005AB2" theme="dark">
                            <v-toolbar-title class="text-h6">
                                Students
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                            <v-table>
                                <thead>
                                <tr>
                                    <th class="text-left"> firstName</th>
                                    <th class="text-left"> lastName</th>
                                    <th class="text-left"> gender</th>
                                    <th class="text-left"> email</th>
                                    <th class="text-left"> name</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    v-for="student in student"
                                    :key="student.id"
                                >
                                    <td>{{ student.firstname }}</td>
                                    <td>{{ student.lastname }}</td>
                                    <td>{{ student.gender }}</td>
                                    <td>{{ student.email }}</td>
                                    <td>{{ student.phone }}</td>
                                   
                                </tr>
                                </tbody>
                            </v-table>
                
                        </v-container>

                        <v-divider></v-divider>
                            
                    </v-card>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
    export default{
        data(){
         return{
            students:[
                {firstname: 'John',
                lastname: 'Will',
                gender: 'male',
                email: 'will01@gmail.com' ,
                phone: '254721530886'
                },

                {firstname: 'Jane',
                lastname: 'mwende',
                gender: 'female',
                email: 'jane@gmail.com' ,
                phone: '254721850886'
                },
                {firstname: 'Isaac',
                lastname: 'khalid',
                gender: 'male',
                email: 'kali@gmail.com' ,
                phone: '254723777699'
                },
                {firstname: 'Ruth',
                lastname: 'fatima',
                gender: 'female',
                email: 'fatima@gmail.com' ,
                phone: '254728651775'
                },
            ]
            }      
            
         }
            
    }
</script>