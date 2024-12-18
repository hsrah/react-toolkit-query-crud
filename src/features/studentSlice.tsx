import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Student } from '../models/students.model';


export const studentApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://67617c9446efb3732371e5d2.mockapi.io/'}),
    tagTypes: ["Student"],
    endpoints: (builder) => ({
        getStudents: builder.query<Student[], void>({
            query: () => '/students',
            providesTags: ["Student"],
        }),
        getStudentbyid: builder.query<Student, string>({
            query: (id) => `/students/${id}`,
            providesTags: ["Student"],
        }),
        createStudent: builder.mutation<void, Student>({
            query: (studentObj) => ({
                url: '/students',
                method: 'POST',
                body: studentObj
            }),
            invalidatesTags: ["Student"],
        }),
        updateStudent: builder.mutation<void, Student>({
            query: ({id, ...rest}) => ({
                url: '/students/'+id,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ["Student"],
        }),
        deleteStudent: builder.mutation<void, string>({
            query: (id) => ({
                url: `/students/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Student"],
        }),
      }),
})

export const { useGetStudentsQuery , useCreateStudentMutation, useDeleteStudentMutation, useGetStudentbyidQuery, useUpdateStudentMutation} = studentApi ;
